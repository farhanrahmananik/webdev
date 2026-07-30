(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const revealElements = document.querySelectorAll(".reveal");
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  const currentYear = document.querySelector("#current-year");
  const backToTopLinks = [...document.querySelectorAll(".back-to-top")];
  const toolFilterGroup = document.querySelector(".tool-filters");
  const toolFilters = [...document.querySelectorAll(".tool-filter")];
  const toolCards = [...document.querySelectorAll(".tool-card")];
  const toolGrid = document.querySelector(".tools-grid");
  const toolGridToggle = document.querySelector(".tool-grid-toggle");
  const toolGridToggleLabel = toolGridToggle?.querySelector(".tool-grid-toggle-label");
  const toolGridToggleIcon = toolGridToggle?.querySelector(".tool-grid-toggle-icon");
  const mobileToolsQuery = window.matchMedia("(max-width: 599px)");
  const MOBILE_TOOL_LIMIT = 12;
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false;
  let activeToolFilter = "all";
  let toolsExpanded = false;
  let toolFilterRun = 0;

  const closeMenu = () => {
    if (!menuToggle || !navMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    if (!menuToggle || !navMenu) return;
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
    navMenu.classList.toggle("open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  };

  menuToggle?.addEventListener("click", toggleMenu);

  navMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (
      navMenu?.classList.contains("open") &&
      !navMenu.contains(event.target) &&
      !menuToggle?.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1140) closeMenu();
  });

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  backToTopLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("active", isActive);
            if (isActive) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const applyToolFilter = (
    filter,
    { resetExpansion = true, animate = true, afterRender } = {}
  ) => {
    if (resetExpansion) {
      toolsExpanded = false;
    }

    activeToolFilter = filter;
    const currentRun = ++toolFilterRun;
    toolFilters.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const categoryMatches = toolCards.filter((card) => {
      const categories = card.dataset.category?.split(/\s+/) ?? [];
      return filter === "all" || categories.includes(filter);
    });
    const shouldLimitAll =
      mobileToolsQuery.matches &&
      filter === "all" &&
      !toolsExpanded &&
      categoryMatches.length > MOBILE_TOOL_LIMIT;
    const matches = shouldLimitAll
      ? categoryMatches.slice(0, MOBILE_TOOL_LIMIT)
      : categoryMatches;
    const visibleMatches = new Set(matches);
    const cardsToHide = toolCards.filter((card) => !visibleMatches.has(card) && !card.hidden);
    const canToggle =
      mobileToolsQuery.matches &&
      filter === "all" &&
      categoryMatches.length > MOBILE_TOOL_LIMIT;

    if (toolGridToggle) {
      toolGridToggle.hidden = !canToggle;
      toolGridToggle.setAttribute("aria-expanded", String(canToggle && toolsExpanded));
    }

    if (toolGridToggleLabel) {
      toolGridToggleLabel.textContent = toolsExpanded ? "SHOW LESS" : "SHOW MORE";
    }

    if (toolGridToggleIcon) {
      toolGridToggleIcon.textContent = toolsExpanded ? "↑" : "↓";
    }

    toolCards.forEach((card) => {
      card.classList.remove("is-filter-entering", "is-filter-leaving");
    });

    const revealMatches = () => {
      if (currentRun !== toolFilterRun) return;

      toolCards.forEach((card) => {
        const isMatch = visibleMatches.has(card);
        const wasHidden = card.hidden;

        card.hidden = !isMatch;
        card.classList.remove("is-filter-leaving");

        if (isMatch && wasHidden) {
          const revealIndex = matches.indexOf(card);
          card.style.setProperty("--filter-delay", `${Math.min(revealIndex, 10) * 20}ms`);
          card.classList.add("is-filter-entering");
        }
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (currentRun !== toolFilterRun) return;
          matches.forEach((card) => card.classList.remove("is-filter-entering"));
        });
      });

      window.setTimeout(() => {
        if (currentRun !== toolFilterRun) return;
        toolCards.forEach((card) => card.style.removeProperty("--filter-delay"));
      }, 450);

      afterRender?.();
    };

    if (!animate || prefersReducedMotion || cardsToHide.length === 0) {
      revealMatches();
      return;
    }

    cardsToHide.forEach((card) => card.classList.add("is-filter-leaving"));
    window.setTimeout(revealMatches, 150);
  };

  toolFilterGroup?.addEventListener("click", (event) => {
    const button = event.target.closest(".tool-filter");
    if (!button) return;
    applyToolFilter(button.dataset.filter);
  });

  toolFilterGroup?.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    const currentIndex = toolFilters.indexOf(document.activeElement);
    let nextIndex = currentIndex;

    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = toolFilters.length - 1;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1 + toolFilters.length) % toolFilters.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + toolFilters.length) % toolFilters.length;

    const nextFilter = toolFilters[nextIndex];
    nextFilter?.focus();
    nextFilter?.scrollIntoView({ block: "nearest", inline: "nearest" });
  });

  toolGridToggle?.addEventListener("click", () => {
    const isCollapsing = toolsExpanded;
    toolsExpanded = !toolsExpanded;

    applyToolFilter(activeToolFilter, {
      resetExpansion: false,
      afterRender: isCollapsing
        ? () => {
            const filterPanel = toolFilterGroup?.closest(".tool-filter-panel") ?? toolGrid;
            if (!filterPanel || filterPanel.getBoundingClientRect().top >= 0) return;

            const targetTop = Math.max(
              0,
              window.scrollY + filterPanel.getBoundingClientRect().top - 88
            );
            window.scrollTo({
              top: targetTop,
              behavior: prefersReducedMotion ? "auto" : "smooth",
            });
          }
        : undefined,
    });
  });

  const handleToolsViewportChange = () => {
    toolsExpanded = false;
    applyToolFilter(activeToolFilter, {
      resetExpansion: false,
      animate: false,
    });
  };

  mobileToolsQuery.addEventListener?.("change", handleToolsViewportChange);
  applyToolFilter(activeToolFilter, { animate: false });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Portfolio contact").trim();
    const message = String(formData.get("message") || "").trim();
    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");
    const mailtoUrl = new URL("mailto:farhan.anik@gmail.com");
    mailtoUrl.searchParams.set("subject", subject || "Portfolio contact");
    mailtoUrl.searchParams.set("body", emailBody);

    if (formStatus) {
      formStatus.textContent = "Opening your email app with a prepared message.";
    }
    window.location.href = mailtoUrl.toString();
  });

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
})();
