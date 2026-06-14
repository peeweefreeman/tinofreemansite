/* ============================================================
   PAPA SHOP — custom cursor + hover/tap video effects
   Hosted external script. Loaded via a single <script src> line
   in Settings > Advanced > Code Injection > Footer.
   No <script> tags here — an external .js file doesn't need them.
   ============================================================ */
(function () {
  'use strict';

  const isMobile = () =>
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  /* ─────────────────────────────────────────────
     1A. CUSTOM DESKTOP CURSOR
  ───────────────────────────────────────────── */
  function initDesktopCursor() {
    if (isMobile()) return;

    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    let cx = -999, cy = -999, rafId = null;

    function moveCursor(x, y) {
      cx = x; cy = y;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          cursor.style.transform =
            `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
          rafId = null;
        });
      }
    }

    document.addEventListener('mousemove', (e) => {
      cursor.style.opacity = '1';
      moveCursor(e.clientX, e.clientY);
    }, { passive: true });

    document.documentElement.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    document.documentElement.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  /* ─────────────────────────────────────────────
     1B. MOBILE TAP DOT
  ───────────────────────────────────────────── */
  function initMobileTapDot() {
    if (!isMobile()) return;

    const dot = document.createElement('div');
    dot.id = 'tap-dot';
    document.body.appendChild(dot);

    let hideTimer = null;

    document.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      dot.style.left = t.clientX + 'px';
      dot.style.top  = t.clientY + 'px';
      dot.style.opacity = '1';
      clearTimeout(hideTimer);
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      dot.style.left = t.clientX + 'px';
      dot.style.top  = t.clientY + 'px';
    }, { passive: true });

    document.addEventListener('touchend', () => {
      hideTimer = setTimeout(() => { dot.style.opacity = '0'; }, 350);
    }, { passive: true });
  }

  /* ─────────────────────────────────────────────
     2. VIDEO CONFIG
     `label` = the EXACT visible word(s) on the page.
     Edit labels / add entries here as the page changes.
  ───────────────────────────────────────────── */
  const VIDEO_CONFIG = [
    {
      section: 'section[data-section-id="697fc3591177725ad6d3f518"]',
      block:   '#block-0360585b064221c2645a',
      triggers: [
        { label: 'Apple',            src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/698e291d9cc7427d7d050203/1770924336330/Doodled+Shorter+Clip.mp4' },
        { label: 'Samsung',          src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/698d5b9bf1f3e91811ece1ae/1770871725930/Galaxy+Anything+Clip+-+Samsung.mp4' },
        { label: 'New York Times',   src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699387729fa2236191de9991/1771276195238/nyt+360+rf+26.mp4' },
        { label: 'Ace Hotel',        src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699ce9e81863bd4f2eaccedf/1771891238182/ace+rf+245.mp4' },
        { label: 'GM + Chevrolet',   src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/698f64d27422c303a6405498/1771005181920/Chevy+Volt+-+Tomorrow%2C+Today.mp4' },
        { label: 'Canada Goose',     src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/69951c4b5d979540006d3070/1771379853017/new+goose+rf225.mp4' },
        { label: 'Burberry',         src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699d08a1ced5f447140678e0/1771899096067/burberry+rf+23.mp4' },
        { label: 'Stumptown Coffee', src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699d1018a8c4b63c34da8596/1771900970871/morticia.mp4' },
      ]
    },
    {
      section: 'section[data-section-id="697fd2154c614d20e5cd6899"]',
      block:   '#block-33f19187e8374a2ba9f8',
      triggers: [
        { label: 'Umpqua Bank',      src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699bb513cf0bf204ddde682e/1771812173291/umpqua+mashup+final+rf+295+19+point+8+mb.mp4' },
        { label: 'BEAMS Japan',      src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699cf79d1e1fec3ec6bff089/1771894789934/beams.mp4' },
        { label: 'Esquire Network',  src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/6998051271ba244194bab7e3/1771570512951/esquire+rf+21.mp4' },
        { label: 'Opening Ceremony', src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699d1fd71bf41f5be51e9964/1771904994415/puppy+spinning.mp4' },
        { label: 'Rodarte',          src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699d1d866832405529ee9bbf/1771904420870/dark+water+sparkle.mp4' },
        { label: 'Levi\u2019s',      src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699d22519eb63027700871ea/1771905623449/levis-dwell-caretoair.mp4' },
        { label: 'Google Labs',      src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699d0e65fa8f992a63fa6541/1771900535267/oops.mp4' },
        { label: 'Klarna',           src: 'https://static1.squarespace.com/static/6976d2d9d3ab6d33a12f9f28/t/699520c0e0cc8f4788e8b349/1771380982073/klarna+drag+brunch+2020.mp4' },
      ]
    }
  ];

  /* ─────────────────────────────────────────────
     Helpers
  ───────────────────────────────────────────── */
  const normApos = (s) => s.replace(/[\u2018\u2019']/g, '\u2019');

  function wrapTriggerWords(section, triggers) {
    const ordered = [...triggers].sort((a, b) => b.label.length - a.label.length);
    const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const made = new Map();

    const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement.closest('.hover-trigger')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const text = normApos(node.nodeValue);
      const match = ordered.find(t => {
        const lbl = escape(normApos(t.label));
        return new RegExp(`(^|[^\\w])${lbl}($|[^\\w])`, 'i').test(text);
      });
      if (!match) return;

      const lbl = escape(normApos(match.label));
      const re  = new RegExp(`(${lbl})`, 'i');
      const parts = text.split(re);
      const frag = document.createDocumentFragment();

      parts.forEach((part) => {
        if (re.test(part) && normApos(part).toLowerCase() === normApos(match.label).toLowerCase()) {
          const span = document.createElement('span');
          span.className = 'hover-trigger';
          span.textContent = part;
          frag.appendChild(span);
          if (!made.has(match.label)) made.set(match.label, []);
          made.get(match.label).push(span);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      });

      node.parentNode.replaceChild(frag, node);
    });

    return made;
  }

  function buildVideos(section, blockSel, triggers) {
    const block = section.querySelector(blockSel);
    if (!block) return null;

    const imageWrapper =
      block.querySelector('figure') ||
      block.querySelector('.sqs-block-content') ||
      block.querySelector('[data-aspect-ratio]') ||
      block;

    imageWrapper.style.position = 'relative';
    imageWrapper.style.overflow = 'hidden';

    const videoMap = new Map();

    triggers.forEach(({ label, src }) => {
      const video = document.createElement('video');
      video.src         = src;
      video.muted       = true;
      video.loop        = true;
      video.playsInline = true;
      video.preload     = 'auto';
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');

      Object.assign(video.style, {
        position: 'absolute', inset: '0',
        width: '100%', height: '100%', objectFit: 'cover',
        opacity: '0', transition: 'opacity 0.25s ease',
        pointerEvents: 'none', zIndex: '2',
      });

      video.load();
      imageWrapper.appendChild(video);
      videoMap.set(label, video);
    });

    let activeVideo = null;

    function show(video) {
      if (activeVideo && activeVideo !== video) {
        activeVideo.style.opacity = '0';
        activeVideo.pause();
      }
      activeVideo = video;
      const p = video.play();
      if (p !== undefined) {
        p.then(() => { video.style.opacity = '1'; })
         .catch(() => { video.style.opacity = '1'; });
      } else {
        video.style.opacity = '1';
      }
    }

    function hide(video) {
      video.style.opacity = '0';
      setTimeout(() => { if (video.style.opacity === '0') video.pause(); }, 300);
      if (activeVideo === video) activeVideo = null;
    }

    function toggle(video) {
      if (activeVideo === video) { hide(video); }
      else { show(video); }
    }

    function hideAll() {
      if (activeVideo) { hide(activeVideo); }
    }

    return { videoMap, show, hide, toggle, hideAll };
  }

  /* ─────────────────────────────────────────────
     3. HOVER VIDEOS (desktop)
  ───────────────────────────────────────────── */
  function initDesktopHoverVideos() {
    VIDEO_CONFIG.forEach(({ section: sectionSel, block: blockSel, triggers }) => {
      const section = document.querySelector(sectionSel);
      if (!section) return;
      if (section.dataset.hoverInit === '1') return;

      const ctrl = buildVideos(section, blockSel, triggers);
      if (!ctrl) return;
      section.dataset.hoverInit = '1';

      const spansByLabel = wrapTriggerWords(section, triggers);
      spansByLabel.forEach((spans, label) => {
        const video = ctrl.videoMap.get(label);
        if (!video) return;
        spans.forEach((span) => {
          span.addEventListener('mouseenter', () => ctrl.show(video));
          span.addEventListener('mouseleave', () => ctrl.hide(video));
        });
      });
    });
  }

  /* ─────────────────────────────────────────────
     3B. TAP VIDEOS (mobile)
  ───────────────────────────────────────────── */
  function initMobileTapVideos() {
    VIDEO_CONFIG.forEach(({ section: sectionSel, block: blockSel, triggers }) => {
      const section = document.querySelector(sectionSel);
      if (!section) return;
      if (section.dataset.tapInit === '1') return;

      const ctrl = buildVideos(section, blockSel, triggers);
      if (!ctrl) return;
      section.dataset.tapInit = '1';

      const spansByLabel = wrapTriggerWords(section, triggers);
      const triggerSpans = [];

      spansByLabel.forEach((spans, label) => {
        const video = ctrl.videoMap.get(label);
        if (!video) return;
        spans.forEach((span) => {
          triggerSpans.push(span);
          span.style.cursor = 'pointer';
          span.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            ctrl.toggle(video);
          });
        });
      });

      document.addEventListener('click', (e) => {
        if (!triggerSpans.some(s => s.contains(e.target))) {
          ctrl.hideAll();
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     BOOT
  ───────────────────────────────────────────── */
  function initVideos() {
    if (isMobile()) initMobileTapVideos();
    else initDesktopHoverVideos();
  }

  function boot() {
    initDesktopCursor();
    initMobileTapDot();
    initVideos();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  window.addEventListener('load', initVideos);

})();
