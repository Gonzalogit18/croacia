/* =========================================================================
   APP — interaction, i18n, procedural scenery, detail navigation
   ========================================================================= */
(function () {
  "use strict";

  const LANG_KEY = "croatia-lang";
  const LANGS = ["es", "hr", "en"];
  let currentLang = localStorage.getItem(LANG_KEY) || "es";
  if (!LANGS.includes(currentLang)) currentLang = "es";
  let currentDetail = null; // id of open destination

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const SVGNS = "http://www.w3.org/2000/svg";

  /* ---------- colour helpers ---------- */
  function hexToRgb(h) {
    h = h.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function mix(hex, target, t) {
    const a = hexToRgb(hex), b = hexToRgb(target);
    const r = a.map((v, i) => Math.round(v + (b[i] - v) * t));
    return `rgb(${r[0]},${r[1]},${r[2]})`;
  }
  const lighten = (h, t) => mix(h, "#ffffff", t);
  const darken = (h, t) => mix(h, "#04101a", t);

  /* ---------- scene type per destination ---------- */
  const SCENE = {
    zagreb: "town", plitvice: "lake", rijeka: "coast", pula: "roman",
    rovinj: "coast", zadar: "coast", sibenik: "town", split: "town",
    hvar: "coast", makarska: "mountain", dubrovnik: "walls", osijek: "town",
  };

  /* ---------- procedural SVG scene (no photos) ---------- */
  function scene(accent, type, seed) {
    const sky1 = lighten(accent, 0.55);
    const sky2 = accent;
    const sky3 = darken(accent, 0.45);
    const hillFar = darken(accent, 0.35);
    const hillMid = darken(accent, 0.55);
    const hillNear = darken(accent, 0.72);
    const water = darken(accent, 0.62);
    const sun = lighten(accent, 0.75);
    const r = mulberry(seed);

    let foreground = "";
    if (type === "roman") {
      // arches silhouette (amphitheatre)
      let arches = "";
      for (let i = 0; i < 9; i++) {
        const x = 60 + i * 90;
        arches += `<rect x="${x}" y="330" width="70" height="170" rx="4" fill="${hillNear}"/>` +
                  `<path d="M${x + 8},360 a27,27 0 0 1 54,0 z" fill="${water}"/>` +
                  `<rect x="${x + 20}" y="380" width="30" height="120" fill="${water}" opacity="0.6"/>`;
      }
      foreground = `<rect x="0" y="470" width="800" height="60" fill="${hillNear}"/>${arches}`;
    } else if (type === "mountain") {
      foreground =
        `<path d="M0,500 L0,250 L120,120 L230,300 L360,90 L520,320 L650,180 L800,340 L800,500 Z" fill="${hillFar}"/>` +
        `<path d="M0,500 L0,340 L150,220 L300,360 L470,240 L640,380 L800,300 L800,500 Z" fill="${hillMid}"/>` +
        `<path d="M0,500 L0,430 L200,360 L420,440 L640,380 L800,440 L800,500 Z" fill="${hillNear}"/>`;
    } else if (type === "lake") {
      foreground =
        `<path d="M0,500 L0,300 Q200,240 400,300 T800,300 L800,500 Z" fill="${hillFar}"/>` +
        `<path d="M0,500 L0,360 Q220,320 430,375 T800,360 L800,500 Z" fill="${hillMid}"/>` +
        `<rect x="0" y="410" width="800" height="90" fill="${lighten(accent, 0.15)}" opacity="0.85"/>` +
        `<g opacity="0.5" stroke="${lighten(accent, 0.5)}" stroke-width="2" fill="none">` +
        `<path d="M0,440 Q400,420 800,440"/><path d="M0,470 Q400,455 800,470"/></g>`;
    } else if (type === "walls" || type === "town") {
      // rooftops / towers / walls silhouette
      let roofs = "";
      let x = -20;
      while (x < 820) {
        const w = 40 + Math.floor(r() * 60);
        const h = 90 + Math.floor(r() * 130);
        const y = 500 - h;
        const isTower = r() > 0.78;
        if (isTower) {
          roofs += `<rect x="${x}" y="${y - 40}" width="${w * 0.55}" height="${h + 40}" fill="${hillNear}"/>` +
                   `<path d="M${x},${y - 40} l${w * 0.275},-34 l${w * 0.275},34 z" fill="${darken(accent, 0.8)}"/>`;
        } else {
          roofs += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${hillNear}"/>` +
                   `<path d="M${x - 4},${y} l${w / 2 + 4},-26 l${w / 2 + 4},26 z" fill="${mix(accent, "#b5532f", 0.4)}"/>`;
          // windows
          for (let wy = y + 20; wy < 490; wy += 34) {
            for (let wx = x + 8; wx < x + w - 10; wx += 22) {
              if (r() > 0.35) roofs += `<rect x="${wx}" y="${wy}" width="8" height="12" fill="${sun}" opacity="0.5"/>`;
            }
          }
        }
        x += w + 4;
      }
      const wave = type === "walls"
        ? `<rect x="0" y="430" width="800" height="70" fill="${water}"/>`
        : `<path d="M0,470 L200,455 L400,472 L600,458 L800,470 L800,500 L0,500 Z" fill="${hillFar}"/>`;
      foreground = `${wave}${roofs}`;
    } else {
      // coast: hills + sea + sailboat
      foreground =
        `<path d="M0,500 L0,320 Q180,260 380,320 Q560,375 800,300 L800,500 Z" fill="${hillFar}"/>` +
        `<path d="M0,500 L0,380 Q220,340 430,390 Q620,435 800,380 L800,500 Z" fill="${hillMid}"/>` +
        `<rect x="0" y="420" width="800" height="80" fill="${water}"/>` +
        `<g opacity="0.6" stroke="${lighten(accent, 0.35)}" stroke-width="2" fill="none">` +
        `<path d="M0,450 Q400,438 800,450"/><path d="M0,475 Q400,465 800,475"/></g>` +
        `<g transform="translate(${180 + r() * 380},400)"><path d="M0,0 l0,-70 l40,58 z" fill="${sun}" opacity="0.9"/>` +
        `<path d="M0,0 l-30,58 l30,0 z" fill="${lighten(accent, 0.4)}"/><rect x="-2" y="-70" width="3" height="128" fill="${hillNear}"/></g>`;
    }

    const svg =
      `<svg xmlns='${SVGNS}' viewBox='0 0 800 500' preserveAspectRatio='xMidYMid slice'>` +
      `<defs><linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'>` +
      `<stop offset='0%' stop-color='${sky1}'/><stop offset='55%' stop-color='${sky2}'/><stop offset='100%' stop-color='${sky3}'/>` +
      `</linearGradient></defs>` +
      `<rect width='800' height='500' fill='url(#sky)'/>` +
      `<circle cx='${140 + r() * 120}' cy='${120 + r() * 60}' r='${44 + r() * 26}' fill='${sun}' opacity='0.85'/>` +
      foreground +
      `<rect width='800' height='500' fill='${darken(accent, 0.35)}' opacity='0.12'/>` +
      `</svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  // tiny seeded PRNG so scenes are stable per destination
  function mulberry(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const seedFor = (id) => id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  /* ---------- i18n ---------- */
  function applyI18n() {
    const dict = UI[currentLang];
    document.documentElement.lang = currentLang;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    $$(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === currentLang));
  }

  function setLang(lang) {
    if (!LANGS.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyI18n();
    renderCards();
    updateMarkerLabels();
    if (currentDetail) fillDetail(currentDetail);
  }

  /* ---------- markers on the map ---------- */
  function renderMarkers() {
    const g = $("#markers");
    DESTINATIONS.forEach((d) => {
      const m = document.createElementNS(SVGNS, "g");
      m.setAttribute("class", "marker");
      m.setAttribute("transform", `translate(${d.x},${d.y})`);
      m.setAttribute("tabindex", "0");
      m.setAttribute("role", "button");
      m.dataset.id = d.id;
      m.innerHTML =
        `<circle class="pin-glow" r="34" fill="url(#pinGlow)"/>` +
        `<circle class="pin-pulse" r="9"/>` +
        `<circle class="pin-ring" r="12"/>` +
        `<circle class="pin-core" r="6"/>` +
        `<text class="pin-label" x="16" y="7">${d[currentLang].name}</text>` +
        `<circle class="pin-hit" r="26"/>`;
      m.addEventListener("click", () => openDetail(d.id));
      m.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(d.id); }
      });
      g.appendChild(m);
    });
  }
  function updateMarkerLabels() {
    $$("#markers .marker").forEach((m) => {
      const d = byId(m.dataset.id);
      $(".pin-label", m).textContent = d[currentLang].name;
    });
  }

  /* ---------- destination cards ---------- */
  function renderCards() {
    const grid = $("#cardsGrid");
    grid.innerHTML = "";
    DESTINATIONS.forEach((d) => {
      const t = d[currentLang];
      const card = document.createElement("article");
      card.className = "city-card";
      card.dataset.id = d.id;
      card.innerHTML =
        `<div class="city-card-bg" style="background-position:center;background-size:cover;background-image:url(&quot;${scene(d.accent, SCENE[d.id], seedFor(d.id))}&quot;)"></div>` +
        `<div class="city-card-shade"></div>` +
        `<div class="city-card-content">` +
        `<span class="city-card-region">${t.region}</span>` +
        `<h3 class="city-card-name">${t.name}</h3>` +
        `<p class="city-card-tagline">${t.tagline}</p>` +
        `<span class="city-card-go">${UI[currentLang].navExplore} &rarr;</span>` +
        `</div>`;
      card.addEventListener("click", () => openDetail(d.id));
      grid.appendChild(card);
    });
    observeCards();
  }

  let cardObserver;
  function observeCards() {
    if (cardObserver) cardObserver.disconnect();
    cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), (i % 4) * 80);
          cardObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    $$(".city-card").forEach((c) => cardObserver.observe(c));
  }

  /* ---------- detail overlay ---------- */
  const byId = (id) => DESTINATIONS.find((d) => d.id === id);
  const overlay = $("#detailOverlay");

  function fillDetail(id) {
    const d = byId(id);
    const t = d[currentLang];
    $("#detailHero").style.backgroundImage = `url("${scene(d.accent, SCENE[id], seedFor(id))}")`;
    $("#dRegion").textContent = t.region;
    $("#dName").textContent = t.name;
    $("#dTagline").textContent = t.tagline;
    $("#dFounded").textContent = t.founded;
    $("#dRegion2").textContent = t.region;
    $("#dKnownFor").textContent = t.knownFor;
    $("#dStory").innerHTML = t.story.split("\n\n").map((p) => `<p>${p}</p>`).join("");
    $("#dHighlights").innerHTML = t.highlights.map((h) => `<li>${h}</li>`).join("");
    $("#dFact").textContent = t.fact;
    // accent theming
    overlay.style.setProperty("--gold", getComputedStyle(document.documentElement).getPropertyValue("--gold"));
  }

  function openDetail(id) {
    currentDetail = id;
    fillDetail(id);
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".detail-panel").scrollTop = 0;
  }
  function closeDetail() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentDetail = null;
  }
  function stepDetail(dir) {
    const idx = DESTINATIONS.findIndex((d) => d.id === currentDetail);
    const next = (idx + dir + DESTINATIONS.length) % DESTINATIONS.length;
    openDetail(DESTINATIONS[next].id);
  }

  /* ---------- header / nav behaviour ---------- */
  function initChrome() {
    const header = $("#siteHeader");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const nav = $(".main-nav"), toggle = $("#navToggle");
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    $$(".nav-link").forEach((l) => l.addEventListener("click", () => nav.classList.remove("open")));

    $$(".lang-btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

    $("#detailClose").addEventListener("click", closeDetail);
    $("#dBack").addEventListener("click", closeDetail);
    $("#dPrev").addEventListener("click", () => stepDetail(-1));
    $("#dNext").addEventListener("click", () => stepDetail(1));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeDetail(); });
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") closeDetail();
      else if (e.key === "ArrowLeft") stepDetail(-1);
      else if (e.key === "ArrowRight") stepDetail(1);
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyI18n();
    renderMarkers();
    renderCards();
    initChrome();
  });
})();
