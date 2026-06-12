/* =========================================================
   PERFIL METAIS — interações (Lenis + GSAP/ScrollTrigger)
   ========================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasLenis = typeof window.Lenis !== "undefined";

  /* ---------- 1. Smooth scroll (Lenis) + ponte com ScrollTrigger ---------- */
  let lenis = null;
  if (hasLenis && !prefersReduced) {
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    if (hasGSAP && window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    }
  }

  /* ---------- 2. Header: estado ao rolar ---------- */
  const header = document.querySelector("[data-header]");
  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  /* ---------- 3. Menu mobile ---------- */
  const menu = document.querySelector("[data-mobile-menu]");
  const burger = document.querySelector("[data-burger]");
  const toggleMenu = (open) => {
    if (!menu || !burger) return;
    const next = typeof open === "boolean" ? open : menu.getAttribute("data-open") !== "true";
    menu.setAttribute("data-open", String(next));
    burger.setAttribute("aria-expanded", String(next));
    burger.classList.toggle("is-open", next);
    if (lenis) next ? lenis.stop() : lenis.start();
    document.body.style.overflow = next ? "hidden" : "";
  };
  if (burger) burger.addEventListener("click", () => toggleMenu());
  if (menu) {
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => toggleMenu(false))
    );
  }

  /* ---------- 4. Âncoras suaves via Lenis ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -90 });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- 5. Ano corrente ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 6. Animações GSAP ---------- */
  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const reduce = prefersReduced;
    const d = (v) => (reduce ? 0 : v);

    /* 6.1 Entrada de elementos com [data-reveal] (todas as larguras)
       Usamos fromTo (estados explícitos) para evitar que o ScrollTrigger.refresh
       registre o estado oculto como destino — bug clássico do gsap.from(). */
    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      const dir = el.getAttribute("data-reveal") || "up";
      const fromVars = { autoAlpha: 0 };
      const toVars = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: d(0.9),
        ease: "power3.out",
        overwrite: "auto",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      };
      if (dir === "up") fromVars.y = 48;
      if (dir === "down") fromVars.y = -48;
      if (dir === "left") fromVars.x = 60;
      if (dir === "right") fromVars.x = -60;
      if (dir === "scale") fromVars.scale = 0.92;
      gsap.fromTo(el, fromVars, toVars);
    });

    /* 6.2 Stagger de filhos */
    gsap.utils.toArray("[data-reveal-stagger]").forEach((group) => {
      gsap.fromTo(
        group.children,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: d(0.8),
          ease: "power3.out",
          stagger: 0.08,
          overwrite: "auto",
          scrollTrigger: { trigger: group, start: "top 86%", once: true },
        }
      );
    });

    /* 6.3 Parallax */
    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 0.2;
      gsap.to(el, {
        yPercent: reduce ? 0 : speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("[data-parallax-scope]") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    /* 6.4 Hero: revelação inicial em sequência */
    if (document.querySelector("[data-hero-line]")) {
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTl
        .from("[data-hero-eyebrow]", { autoAlpha: 0, y: 20, duration: d(0.7) })
        .from("[data-hero-line]", { autoAlpha: 0, y: 60, duration: d(1), stagger: 0.12 }, "-=0.3")
        .from("[data-hero-sub]", { autoAlpha: 0, y: 24, duration: d(0.8) }, "-=0.5")
        .from("[data-hero-cta] > *", { autoAlpha: 0, y: 20, duration: d(0.6), stagger: 0.1 }, "-=0.4")
        .from("[data-hero-meta]", { autoAlpha: 0, duration: d(0.8) }, "-=0.3");
    }

    /* 6.5 Números (contadores) */
    gsap.utils.toArray("[data-count]").forEach((el) => {
      const end = parseFloat(el.getAttribute("data-count"));
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: end,
            duration: reduce ? 0 : 2,
            ease: "power2.out",
            onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString("pt-BR"); },
          });
        },
      });
    });

    /* 6.6 Linha que cresce */
    gsap.utils.toArray("[data-grow-line]").forEach((el) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: d(1.2),
        ease: "power3.inOut",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });

    /* recalcula posições após carregar fontes/imagens */
    window.addEventListener("load", () => ScrollTrigger.refresh());

    /* ---------- 7. Cursor custom (desktop only) ---------- */
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px) and (pointer: fine)", () => {
      const dot = document.createElement("div");
      const ring = document.createElement("div");
      dot.className = "cursor-dot";
      ring.className = "cursor-ring";
      document.body.appendChild(dot);
      document.body.appendChild(ring);

      const xTo = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });

      const move = (e) => {
        gsap.set(dot, { x: e.clientX, y: e.clientY });
        xTo(e.clientX);
        yTo(e.clientY);
      };
      window.addEventListener("mousemove", move);

      const hoverEls = document.querySelectorAll("a, button, [data-cursor]");
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
        el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
      });

      return () => {
        window.removeEventListener("mousemove", move);
        dot.remove();
        ring.remove();
      };
    });
  } else {
    /* Sem GSAP: garante que tudo fique visível */
    document.documentElement.classList.remove("js");
  }

  /* ---------- 8. Rotação de manchetes no hero ---------- */
  const rotator = document.querySelector("[data-rotator]");
  if (rotator) {
    const items = rotator.querySelectorAll("[data-rotator-item]");
    if (items.length > 1) {
      let i = 0;
      items[0].classList.add("is-active");
      setInterval(() => {
        const current = items[i];
        i = (i + 1) % items.length;
        const next = items[i];
        if (hasGSAP && !prefersReduced) {
          gsap.to(current, { opacity: 0, y: -20, duration: 0.5, onComplete: () => current.classList.remove("is-active") });
          current.classList.remove("is-active");
          next.classList.add("is-active");
          gsap.fromTo(next, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 });
        } else {
          current.classList.remove("is-active");
          next.classList.add("is-active");
        }
      }, 3800);
    }
  }
})();
