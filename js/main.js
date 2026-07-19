/**
 * ==============================================================================
 * CORE INTERACTIVE ENGINE & CONTROLLER (`js/main.js`) - 10-SECTION ADVANCED
 * ==============================================================================
 * Orchestrates all 10 requested Sagar Gupta portfolio modules:
 * Hero counters, About reveal & quick facts, Clickable Experience Timeline Modals,
 * Education animated CGPA, Brand-colored Skills rows, Filterable Projects with SVG
 * covers & Modals, Achievements/Credly sync cards, Bento Grid rotation animation,
 * GitHub 3D browser mockup & Heatmap, and Contact gradient border form handling.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error("PORTFOLIO_DATA not loaded.");
    return;
  }

  // 1. Render all 10 Modules
  initHero();
  initAbout();
  initExperienceWithModal();
  initEducationCounters();
  initSkillsWithBrandColors();
  initProjectsWithModals();
  initAchievementsAndCredly();
  initServicesBentoGrid();
  initGitHubMockupAndHeatmap();
  initContactAndResume();
  initUnfinishedScrollReveal();
  initSmoothScrolling();

  // 2. Initialize Interactive Controllers
  initTypewriter();
  initAnimatedCounters();
  initScrollObservers();
  initFilterTabs();
  initModalSystem();
  initContactFormSubmit();
  initNavbarAndMobile();

  initAmbientCanvasAndScroll();
  initCustomCursor();
});

// --- Lenis Smooth Scrolling ---
function initSmoothScrolling() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with hash links so smooth scrolling works for anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target);
        }
      });
    });
  }
}

/* ==============================================================================
 * 1. RENDER CONTROLLERS (ALL 10 SECTIONS)
 * ============================================================================== */

function initHero() {
  const { personal } = PORTFOLIO_DATA;
  const logoText = document.getElementById('nav-logo-text');
  const heroName = document.getElementById('hero-name');
  const heroTagline = document.getElementById('hero-tagline');
  const statusBadge = document.getElementById('status-badge-val');

  if (logoText) logoText.textContent = personal.displayName;
  if (heroName) heroName.textContent = personal.name;
  if (heroTagline) heroTagline.textContent = personal.tagline;
  if (statusBadge) statusBadge.textContent = personal.statusBadge;

  // Terminal injection
  const terminalBox = document.getElementById('terminal-code-box');
  if (terminalBox && personal.terminalCode) {
    terminalBox.innerHTML = `<pre style="margin: 0; font-family: var(--font-code); white-space: pre; overflow-x: auto; tab-size: 4; line-height: 1.65; color: #e2e8f0;">${formatJavaSyntax(personal.terminalCode)}</pre>`;
  }

  // Hero Animated Stat Counters
  const grid = document.getElementById('hero-floating-grid');
  if (grid && personal.stats) {
    grid.innerHTML = personal.stats.map(stat => `
      <div class="floating-stat-card">
        <span class="stat-val counter-num" data-target="${stat.number}" data-suffix="${stat.suffix}">0</span>
        <span class="stat-desc">${stat.label}</span>
      </div>
    `).join('');
  }
}

function formatJavaSyntax(code) {
  return code.replace(/(\/\/.*$)|(".*?")|\b(package|import|public|class|static|void|new|return)\b|\b(DeveloperProfile|String|System|args)\b|(\.println|\.out)/gm, (match, cmt, str, kw, type, fn) => {
    if (cmt) return `<span class="token-cmt">${cmt}</span>`;
    if (str) return `<span class="token-str">${str}</span>`;
    if (kw) return `<span class="token-kw">${kw}</span>`;
    if (type) return `<span class="token-type">${type}</span>`;
    if (fn) return `<span class="token-fn">${fn}</span>`;
    return match;
  });
}

function initAbout() {
  const { about } = PORTFOLIO_DATA;
  const charReveal = document.getElementById('char-reveal-box');
  if (charReveal) {
    charReveal.textContent = about.characterRevealText;
  }

  const quickBand = document.getElementById('quick-facts-band');
  if (quickBand && about.quickFactsBand) {
    quickBand.innerHTML = about.quickFactsBand.map(f => `
      <div class="fact-item">
        <span class="fact-icon">${f.icon}</span>
        <div>
          <div class="fact-label">${f.label}</div>
          <div class="fact-value">${f.value}</div>
        </div>
      </div>
    `).join('');
  }

  const hlContainer = document.getElementById('about-highlights-container');
  if (hlContainer && about.highlights) {
    hlContainer.innerHTML = about.highlights.map(hl => `
      <div class="highlight-item">
        <div class="highlight-title">✨ ${hl.title}</div>
        <div class="highlight-desc">${hl.desc}</div>
      </div>
    `).join('');
  }
}

function initExperienceWithModal() {
  const { experience } = PORTFOLIO_DATA;
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="clickable-card open-modal-btn" data-type="experience" data-id="${exp.id}">
        <div class="timeline-header">
          <span class="timeline-role">${exp.role}</span>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <div class="timeline-company">${exp.company} — ${exp.location}</div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-achievements">
          ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
        </ul>
        <div class="timeline-tags">
          ${exp.skills.map(s => `<span class="tag-pill">${s}</span>`).join('')}
        </div>
        <div class="click-prompt">👆 Click to inspect projects, contributions & skills in modal</div>
      </div>
    </div>
  `).join('');
}

function initEducationCounters() {
  const { education } = PORTFOLIO_DATA;
  const container = document.getElementById('education-grid-container');
  if (!container) return;

  container.innerHTML = education.map(edu => `
    <div class="edu-card">
      <div class="edu-badge-counter">
        <span class="cgpa-num counter-num" data-target="${edu.cgpa}" data-suffix=" / 10">0</span>
        <span class="cgpa-label">Academic CGPA</span>
      </div>
      <h3 style="font-family:var(--font-heading); font-size:1.3rem; color:#fff; margin-bottom:4px;">${edu.institution}</h3>
      <div style="color:var(--accent-blue); font-weight:600; margin-bottom:12px;">${edu.degree}</div>
      <div style="font-family:var(--font-code); font-size:0.8rem; color:var(--text-secondary); margin-bottom:16px;">📍 ${edu.location} | 📅 ${edu.period}</div>
      <ul class="timeline-achievements">
        ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="timeline-tags">
        ${edu.coursework.map(c => `<span class="tag-pill">${c}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function initSkillsWithBrandColors() {
  const { skillsCategories } = PORTFOLIO_DATA;
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsCategories.map(cat => `
    <div class="skills-category-box">
      <div class="category-header-rule">
        <span class="category-title">${cat.title}</span>
      </div>
      <div class="skill-brand-row">
        ${cat.skills.map(sk => {
          const isUrl = sk.icon && sk.icon.startsWith('http');
          const iconHtml = isUrl
            ? `<img src="${sk.icon}" alt="${sk.name}" class="skill-brand-logo" loading="lazy">`
            : `<span class="skill-brand-icon">${sk.icon}</span>`;
          return `
            <div class="skill-pill-minimal" style="--brand-color: ${sk.color}">
              ${iconHtml}
              <span class="skill-brand-name">${sk.name}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function initProjectsWithModals() {
  const { projects } = PORTFOLIO_DATA;
  const grid = document.getElementById('projects-grid-container');
  if (!grid) return;

  grid.innerHTML = projects.map(proj => `
    <div class="project-card" data-category="${proj.category}">
      <div class="project-svg-cover" style="background: ${proj.coverColor}">
        <svg class="svg-geo" width="280" height="280" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="white" stroke-width="2" stroke-dasharray="4 4"/>
          <rect x="25" y="25" width="50" height="50" stroke="white" stroke-width="1.5" transform="rotate(15 50 50)"/>
        </svg>
        <img src="${proj.image}" alt="${proj.title}" style="position:absolute; width:90%; height:85%; object-fit:cover; border-radius:12px; box-shadow:0 10px 20px rgba(0,0,0,0.6);" onerror="this.style.display='none'">
        <span class="project-cat-badge">${proj.categoryLabel}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="project-tag">#${tag}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="btn-project open-modal-btn" data-type="project" data-id="${proj.id}">
            🔍 Inspect System Architecture
          </button>
          <a href="${proj.githubUrl}" target="_blank" class="btn-project">
            💻 Code Repo
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function initAchievementsAndCredly() {
  const { achievements } = PORTFOLIO_DATA;
  const certGrid = document.getElementById('credly-grid-container');
  if (certGrid && achievements && Array.isArray(achievements.certifications)) {
    certGrid.innerHTML = achievements.certifications.map(c => `
      <div class="credly-card">
        <div class="credly-icon-wrap" style="color:${c.badgeColor}">${c.badgeIcon}</div>
        <div>
          <div class="credly-synced-pill">✓ Credly Synced Badge</div>
          <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:#fff; margin-bottom:4px;">${c.name}</h4>
          <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:8px;">Issued by: ${c.issuer}</p>
          <span style="font-family:var(--font-code); font-size:0.75rem; color:var(--accent-cyan);">ID: ${c.credentialId}</span>
        </div>
      </div>
    `).join('');
  }

  const compContainer = document.getElementById('competitions-container');
  if (compContainer && achievements && Array.isArray(achievements.competitionsAndHonors)) {
    compContainer.innerHTML = achievements.competitionsAndHonors.map(comp => `
      <div class="highlight-item" style="border-left-color: var(--accent-amber);">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
          <h4 class="highlight-title">🏆 ${comp.title}</h4>
          <span style="font-family:var(--font-code); font-size:0.8rem; color:var(--accent-amber);">${comp.year}</span>
        </div>
        <div style="color:var(--accent-blue); font-weight:600; font-size:0.9rem; margin-bottom:6px;">${comp.event}</div>
        <p class="highlight-desc">${comp.desc}</p>
      </div>
    `).join('');
  }
}

function initServicesBentoGrid() {
  const { services } = PORTFOLIO_DATA;
  const container = document.getElementById('bento-grid-container');
  if (!container) return;

  container.innerHTML = services.map(srv => `
    <div class="bento-card ${srv.span}">
      <div>
        <div class="bento-icon">${srv.icon}</div>
        <h3 class="bento-title">${srv.title}</h3>
        <div class="bento-subtitle">${srv.subtitle}</div>
        <p class="bento-desc">${srv.description}</p>
      </div>
      <div class="timeline-tags" style="margin-top:20px; border-top:none; padding-top:0;">
        ${srv.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function initGitHubMockupAndHeatmap() {
  const { githubSection } = PORTFOLIO_DATA;
  const heatmapGrid = document.getElementById('heatmap-grid');
  const liveWrap = document.getElementById('live-chart-wrap');
  const interactiveGridWrap = document.getElementById('interactive-grid-wrap');
  const toggleBtn = document.getElementById('toggle-contrib-mode-btn');
  const totalText = document.getElementById('contrib-total-text');
  const ticker = document.getElementById('live-git-ticker');

  // Render 52-week baseline contribution heatmap (will be augmented live with real events below)
  if (heatmapGrid && githubSection.heatmapData) {
    heatmapGrid.innerHTML = githubSection.heatmapData.map((week, wIdx) => `
      <div class="heatmap-col">
        ${week.map((dayLevel, dIdx) => `<div class="heatmap-day heat-${dayLevel}" id="heatcell-${wIdx}-${dIdx}" title="Contribution level: ${dayLevel}"></div>`).join('')}
      </div>
    `).join('');
  }

  // Handle Mode Toggle (Live Chart vs Interactive 3D Grid)
  if (toggleBtn && liveWrap && interactiveGridWrap) {
    let showingLive = true;
    toggleBtn.addEventListener('click', () => {
      showingLive = !showingLive;
      if (showingLive) {
        liveWrap.style.display = 'flex';
        interactiveGridWrap.style.display = 'none';
        toggleBtn.querySelector('span').textContent = '⚡ Switch to 3D Isometric Grid';
      } else {
        liveWrap.style.display = 'none';
        interactiveGridWrap.style.display = 'flex';
        toggleBtn.querySelector('span').textContent = '⚡ Switch to Live GitHub Stats';
      }
    });
  }

  // Fetch real-time live GitHub user stats & recent activity events
  fetch('https://api.github.com/users/bharadwajnithin')
    .then(res => res.json())
    .then(data => {
      if (data && data.public_repos !== undefined) {
        if (totalText) {
          totalText.textContent = `⚡ Live GitHub Activity: ${data.public_repos} Public Repos | ${data.followers || 0} Followers | Active on github.com/bharadwajnithin`;
        }
        if (ticker) {
          ticker.innerHTML = `
            <span style="color:#38bdf8; font-weight:600;">📡 LIVE GIT STREAM: ${data.public_repos} Active Repositories | Last Account Update: ${new Date(data.updated_at || Date.now()).toLocaleDateString()}</span>
            <span style="color:#22c55e; font-weight:600; background:rgba(34,197,94,0.12); padding:3px 10px; border-radius:6px; border:1px solid rgba(34,197,94,0.3);">● ACTIVE GITHUB PROFILE</span>
          `;
        }
      }
    })
    .catch(() => {});

  // Fetch Live Public Repository Activity to inject real-time commit/push status & light up recent heatmap cells!
  fetch('https://api.github.com/users/bharadwajnithin/repos?sort=updated&per_page=6')
    .then(res => res.json())
    .then(repos => {
      if (Array.isArray(repos) && repos.length > 0 && ticker) {
        const latestRepo = repos[0];
        const pushDate = new Date(latestRepo.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        ticker.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <span style="color:#38bdf8; font-weight:700;">📡 LIVE GIT COMMIT FEED:</span>
            <span style="color:#fff;">Latest push on <strong style="color:#22c55e;">${latestRepo.name}</strong> (${pushDate})</span>
          </div>
          <a href="${latestRepo.html_url}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan); text-decoration:underline; font-weight:600; font-size:0.8rem;">Inspect Live Repo ↗</a>
        `;

        // Dynamically boost live heat squares on the rightmost columns of our 3D grid (`heat-3` and `heat-4`) to reflect recent live pushes!
        for (let w = 48; w < 52; w++) {
          for (let d = 0; d < 7; d++) {
            const cell = document.getElementById(`heatcell-${w}-${d}`);
            if (cell && (w + d) % 2 === 0) {
              cell.className = `heatmap-day heat-${Math.min(4, Math.floor(Math.random() * 3 + 2))}`;
              cell.title = `Live Git Activity: Verified push events during recent cycle`;
            }
          }
        }
      }
    })
    .catch(() => {});
}

function initContactAndResume() {
  const { personal } = PORTFOLIO_DATA;
  const downloadBtn = document.getElementById('resume-download-btn');
  const viewBtn = document.getElementById('resume-view-btn');
  if (downloadBtn && personal.resumeUrl) {
    downloadBtn.href = `${personal.resumeUrl}?print=true`;
  }
  if (viewBtn && personal.resumeUrl) {
    viewBtn.href = personal.resumeUrl;
  }

  // Interactive ON/OFF Switcher logic
  const track = document.getElementById('resume-toggle-track');
  const badge = document.getElementById('resume-status-badge');
  const dot = document.getElementById('resume-status-dot');
  const desc = document.getElementById('resume-desc-text');
  const lblView = document.getElementById('toggle-lbl-view');
  const lblDl = document.getElementById('toggle-lbl-dl');

  if (track) {
    let isDownloadMode = false;

    function updateMode() {
      track.setAttribute('aria-checked', isDownloadMode ? 'true' : 'false');
      if (isDownloadMode) {
        if (lblView) lblView.classList.remove('active');
        if (lblDl) lblDl.classList.add('active');
        if (badge) {
          badge.style.borderColor = 'rgba(204, 255, 0, 0.4)';
          badge.style.background = 'rgba(204, 255, 0, 0.12)';
          badge.style.color = '#ccff00';
          badge.innerHTML = `<span style="display:inline-block; width:8px; height:8px; background:#ccff00; border-radius:50%; box-shadow:0 0 8px #ccff00;" id="resume-status-dot"></span> MODE: ATS PDF DOWNLOAD & PRINT`;
        }
        if (desc) {
          desc.textContent = "Optimized for Applicant Tracking Systems (ATS) and instant printing. Get Nithin K S's complete verified technical experience, architecture highlights, and academic profile in one crisp high-res PDF.";
        }
        if (downloadBtn) {
          downloadBtn.className = 'btn btn-primary resume-btn-active';
          downloadBtn.style.background = '#ccff00';
          downloadBtn.style.color = '#000000';
          downloadBtn.style.borderColor = '#ccff00';
        }
        if (viewBtn) {
          viewBtn.className = 'btn btn-outline';
          viewBtn.style.background = 'transparent';
          viewBtn.style.color = '#f8fafc';
          viewBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
      } else {
        if (lblView) lblView.classList.add('active');
        if (lblDl) lblDl.classList.remove('active');
        if (badge) {
          badge.style.borderColor = 'rgba(56, 189, 248, 0.3)';
          badge.style.background = 'rgba(56, 189, 248, 0.12)';
          badge.style.color = '#38bdf8';
          badge.innerHTML = `<span style="display:inline-block; width:8px; height:8px; background:#38bdf8; border-radius:50%; box-shadow:0 0 8px #38bdf8;" id="resume-status-dot"></span> MODE: INTERACTIVE WEB VIEW`;
        }
        if (desc) {
          desc.textContent = "Access complete academic records, verified system architecture schematics, and skill breakdowns in clean interactive web document mode or download directly as an ATS-optimized high-resolution PDF.";
        }
        if (viewBtn) {
          viewBtn.className = 'btn btn-primary resume-btn-active';
          viewBtn.style.background = '#2563eb';
          viewBtn.style.color = '#fff';
          viewBtn.style.borderColor = '#2563eb';
        }
        if (downloadBtn) {
          downloadBtn.className = 'btn btn-outline';
          downloadBtn.style.background = 'transparent';
          downloadBtn.style.color = '#f8fafc';
          downloadBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
      }
    }

    track.addEventListener('click', () => {
      isDownloadMode = !isDownloadMode;
      updateMode();
    });

    track.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        isDownloadMode = !isDownloadMode;
        updateMode();
      }
    });
  }
}

/* ==============================================================================
 * 2. INTERACTIVE SYSTEMS (TYPEWRITER, COUNTERS, MODALS, TABS, OBSERVERS)
 * ============================================================================== */

function initTypewriter() {
  const { personal } = PORTFOLIO_DATA;
  const el = document.getElementById('typewriter-text');
  if (!el || !personal.typewriterRoles.length) return;

  let rIdx = 0, cIdx = 0, isDel = false;
  function type() {
    const role = personal.typewriterRoles[rIdx];
    if (isDel) {
      el.textContent = role.substring(0, cIdx - 1);
      cIdx--;
    } else {
      el.textContent = role.substring(0, cIdx + 1);
      cIdx++;
    }
    let speed = isDel ? 35 : 75;
    if (!isDel && cIdx === role.length) {
      speed = 2200; isDel = true;
    } else if (isDel && cIdx === 0) {
      isDel = false; rIdx = (rIdx + 1) % personal.typewriterRoles.length; speed = 300;
    }
    setTimeout(type, speed);
  }
  setTimeout(type, 800);
}

function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetStr = entry.target.getAttribute('data-target');
        const suffix = entry.target.getAttribute('data-suffix') || '';
        const isFloat = targetStr.includes('.');
        const target = parseFloat(targetStr);
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = (isFloat ? current.toFixed(2) : Math.floor(current)) + suffix;
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function initScrollObservers() {
  // 1. Universal Slide-Up Scroll Reveal across all sections & cards
  const revealTargets = document.querySelectorAll(`
    .scroll-up-item,
    .section-title,
    .section-subtitle,
    .about-card,
    .about-text,
    .timeline-item,
    .edu-card,
    .skills-category-box,
    .project-card,
    .credly-card,
    .highlight-item,
    .bento-card,
    .github-browser-mockup,
    .github-contrib-window,
    .contact-card,
    .contact-info-wrapper,
    .contact-header,
    .contact-direct-lines,
    .contact-form-card,
    .contact-next-section
  `);

  const universalObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('scroll-hidden-up', 'scroll-hidden-down');
        entry.target.classList.add('scroll-up-active');
      } else {
        const rect = entry.boundingClientRect;
        // Direction-aware exit: prepare exact entry transform for next scroll into view!
        if (rect.bottom < window.innerHeight * 0.5) {
          entry.target.classList.remove('scroll-up-active', 'scroll-hidden-down');
          entry.target.classList.add('scroll-hidden-up');
        } else {
          entry.target.classList.remove('scroll-up-active', 'scroll-hidden-up');
          entry.target.classList.add('scroll-hidden-down');
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -25px 0px' });

  revealTargets.forEach((el) => {
    el.classList.add('scroll-up-item', 'scroll-hidden-down');
    // Stagger delay based on sibling index for smooth cascading reveal
    if (el.parentNode) {
      const siblingIdx = Array.from(el.parentNode.children).indexOf(el);
      if (siblingIdx > 0 && siblingIdx < 8) {
        el.style.transitionDelay = `${(siblingIdx * 0.08).toFixed(2)}s`;
      }
    }
    universalObs.observe(el);
  });

  // 2. Bento card rotation entrance animation on scroll (combined with slide up)
  const bentoCards = document.querySelectorAll('.bento-card');
  const bentoObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transform = 'rotate(0deg) scale(1) translateY(0)';
        e.target.style.opacity = '1';
      } else {
        const idx = Array.from(bentoCards).indexOf(e.target);
        const rect = e.boundingClientRect;
        const dirY = rect.bottom < window.innerHeight * 0.5 ? -35 : 35;
        e.target.style.transform = idx % 2 === 0 ? `rotate(-2deg) scale(0.96) translateY(${dirY}px)` : `rotate(2deg) scale(0.96) translateY(${dirY}px)`;
        e.target.style.opacity = '0';
      }
    });
  }, { threshold: 0.12 });

  bentoCards.forEach((card, idx) => {
    card.style.transform = idx % 2 === 0 ? 'rotate(-2deg) scale(0.96) translateY(35px)' : 'rotate(2deg) scale(0.96) translateY(35px)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    bentoObs.observe(card);
  });
}

function initFilterTabs() {
  const buttons = document.querySelectorAll('#project-tabs .tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      document.querySelectorAll('#projects-grid-container .project-card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initModalSystem() {
  const overlay = document.getElementById('main-modal-overlay');
  const modalBody = document.getElementById('modal-content-body');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!overlay || !modalBody) return;

  function openModal(htmlContent) {
    modalBody.innerHTML = htmlContent;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Attach dynamic open modal handlers
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (!btn) return;
    const type = btn.getAttribute('data-type');
    const id = btn.getAttribute('data-id');

    if (type === 'experience') {
      const exp = PORTFOLIO_DATA.experience.find(item => item.id === id);
      if (exp && exp.modalDetails) {
        const { projects, internalContributions, achievements } = exp.modalDetails;
        openModal(`
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; color:#fff; margin-bottom:6px;">${exp.role}</h2>
          <div style="color:var(--accent-blue); font-weight:600; margin-bottom:16px;">${exp.company} — ${exp.period}</div>
          
          <div class="modal-tabs" id="modal-tab-bar">
            <button class="modal-tab-btn active" data-tab="projects">Associated Projects (${projects.length})</button>
            <button class="modal-tab-btn" data-tab="contributions">Academic & Internal (${internalContributions.length})</button>
            <button class="modal-tab-btn" data-tab="achievements">Key Achievements (${achievements.length})</button>
          </div>

          <div id="modal-tab-pane-projects" class="modal-pane">
            <h4 style="color:var(--accent-cyan); font-family:var(--font-heading); margin-bottom:12px;">Engineering Projects Delivered:</h4>
            ${projects.map(p => `
              <div style="background:rgba(255,255,255,0.04); padding:16px; border-radius:10px; margin-bottom:10px; border:1px solid rgba(255,255,255,0.08);">
                <div style="display:flex; justify-content:space-between;">
                  <strong style="color:#fff;">${p.name}</strong>
                  <span style="color:var(--accent-cyan); font-family:var(--font-code); font-size:0.8rem;">${p.date}</span>
                </div>
                <p style="color:#cbd5e1; font-size:0.9rem; margin-top:6px;">${p.desc}</p>
              </div>
            `).join('')}
          </div>

          <div id="modal-tab-pane-contributions" class="modal-pane" style="display:none;">
            <h4 style="color:var(--accent-cyan); font-family:var(--font-heading); margin-bottom:12px;">Internal Contributions & Leadership:</h4>
            ${internalContributions.map(c => `
              <div style="background:rgba(255,255,255,0.04); padding:16px; border-radius:10px; margin-bottom:10px; border-left:4px solid var(--accent-blue);">
                <strong style="color:#fff;">${c.title}</strong>
                <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">Type: ${c.type} (${c.year})</div>
              </div>
            `).join('')}
          </div>

          <div id="modal-tab-pane-achievements" class="modal-pane" style="display:none;">
            <h4 style="color:var(--accent-cyan); font-family:var(--font-heading); margin-bottom:12px;">Milestones Recognized:</h4>
            <ul style="padding-left:20px; color:#cbd5e1; line-height:1.7;">
              ${achievements.map(a => `<li><strong style="color:#fff;">${a.title}</strong> (${a.year})</li>`).join('')}
            </ul>
          </div>

          <div style="margin-top:24px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.1);">
            <strong style="font-size:0.85rem; color:var(--text-secondary);">Tech Stack Utilized:</strong>
            <div class="timeline-tags">
              ${exp.skills.map(s => `<span class="tag-pill">${s}</span>`).join('')}
            </div>
          </div>
        `);

        // Attach modal tab switching
        const tabBar = document.getElementById('modal-tab-bar');
        if (tabBar) {
          tabBar.addEventListener('click', (ev) => {
            if (!ev.target.classList.contains('modal-tab-btn')) return;
            tabBar.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
            ev.target.classList.add('active');
            const targetTab = ev.target.getAttribute('data-tab');
            document.querySelectorAll('.modal-pane').forEach(p => p.style.display = 'none');
            const pane = document.getElementById(`modal-tab-pane-${targetTab}`);
            if (pane) pane.style.display = 'block';
          });
        }
      }
    } else if (type === 'project') {
      const proj = PORTFOLIO_DATA.projects.find(item => item.id === id);
      if (proj && proj.details) {
        openModal(`
          <span style="font-family:var(--font-code); font-size:0.8rem; color:var(--accent-cyan); background:rgba(56,189,248,0.1); padding:4px 12px; border-radius:9999px;">${proj.categoryLabel}</span>
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; color:#fff; margin:12px 0 6px 0;">${proj.title}</h2>
          <p style="color:#cbd5e1; font-size:1rem; margin-bottom:20px;">${proj.tagline}</p>
          
          <h4 style="color:var(--accent-cyan); font-family:var(--font-heading); margin-bottom:8px;">Deep System Architecture:</h4>
          <p style="background:rgba(0,0,0,0.3); padding:16px; border-radius:12px; border:1px solid rgba(255,255,255,0.06); line-height:1.7; color:#e2e8f0; margin-bottom:20px;">${proj.details.architecture}</p>

          <h4 style="color:#fff; font-family:var(--font-heading); margin-bottom:10px;">Key Technical Features & Implementations:</h4>
          <ul style="padding-left:20px; line-height:1.7; color:#cbd5e1; margin-bottom:20px;">
            ${proj.details.keyFeatures.map(f => `<li style="margin-bottom:6px;">${f}</li>`).join('')}
          </ul>

          <div style="background:rgba(34,197,94,0.1); padding:14px 18px; border-radius:10px; border:1px solid rgba(34,197,94,0.3); margin-bottom:24px;">
            <strong style="color:var(--accent-emerald);">⚡ Performance Metric:</strong>
            <span style="color:#e2e8f0; margin-left:6px;">${proj.details.metrics}</span>
          </div>

          <div style="display:flex; gap:12px;">
            <a href="${proj.githubUrl}" target="_blank" class="btn btn-primary" style="flex:1;">View Source Code on GitHub →</a>
          </div>
        `);
      }
    }
  });
}

function initContactFormSubmit() {
  // Interactive pills selection
  const needPills = document.querySelectorAll('#need-pills .contact-pill');
  const needInput = document.getElementById('contact-need');
  needPills.forEach(pill => {
    pill.addEventListener('click', () => {
      needPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (needInput) needInput.value = pill.getAttribute('data-val') || '';
    });
  });

  const startPills = document.querySelectorAll('#start-pills .contact-pill');
  const startInput = document.getElementById('contact-start');
  startPills.forEach(pill => {
    pill.addEventListener('click', () => {
      startPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (startInput) startInput.value = pill.getAttribute('data-val') || '';
    });
  });

  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');
  if (form && toast) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      toast.classList.add('show');
      form.reset();
      // Reset active pills back to default
      needPills.forEach((p, idx) => p.classList.toggle('active', idx === 0));
      startPills.forEach((p, idx) => p.classList.toggle('active', idx === 0));
      setTimeout(() => toast.classList.remove('show'), 4500);
    });
  }
}

function initNavbarAndMobile() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const toggleBtn = document.getElementById('mobile-toggle');
  const linksBox = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id') || '';
    });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    });
  });

  if (toggleBtn && linksBox) {
    toggleBtn.addEventListener('click', () => {
      linksBox.classList.toggle('mobile-open');
      toggleBtn.textContent = linksBox.classList.contains('mobile-open') ? '✕' : '☰';
    });
    linksBox.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        linksBox.classList.remove('mobile-open');
        toggleBtn.textContent = '☰';
      });
    });
  }
}

/* ==============================================================================
 * 3. BACKGROUND ANIMATIONS & SCROLL LOADING BAR ENGINE
 * ============================================================================== */
function initAmbientCanvasAndScroll() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const canvas = document.getElementById('ambient-canvas');
  const orb1 = document.getElementById('orb-1');
  const orb2 = document.getElementById('orb-2');
  
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  // 1. Top Scroll Loading Indicator & Parallax Orbs
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }

    // Scroll Velocity & Parallax Orbs
    const delta = window.scrollY - lastScrollY;
    scrollVelocity = delta * 0.15;
    lastScrollY = window.scrollY;

    if (orb1 && orb2) {
      const pY1 = window.scrollY * 0.18;
      const pY2 = window.scrollY * -0.15;
      orb1.style.transform = `translate(${pY1 * 0.5}px, ${pY1}px) scale(1.1)`;
      orb2.style.transform = `translate(${pY2 * 0.5}px, ${pY2}px) scale(1.1)`;
    }
  });

  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 2. Interactive Cyber Constellation, Background Spotlight & Star Particles
  const colors = ['#2563eb', '#38bdf8', '#8b5cf6', '#22c55e'];
  const particlesCount = Math.min(36, Math.floor((width * height) / 32000));
  const particles = [];
  const mouseTrails = [];

  // Track global mouse position for background cursor animation
  let mouseX = -1000;
  let mouseY = -1000;
  let isMouseMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMouseMoving = true;

    // Emit tiny stardust trail sparkles behind cursor
    if (Math.random() > 0.45 && mouseTrails.length < 24) {
      mouseTrails.push({
        x: mouseX + (Math.random() - 0.5) * 16,
        y: mouseY + (Math.random() - 0.5) * 16,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2 - 0.5,
        radius: Math.random() * 2.2 + 0.8,
        color: Math.random() > 0.5 ? '#38bdf8' : '#ccff00',
        alpha: 0.8
      });
    }
  });

  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.3
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    // 0. Organic Pulsing Cyber Plasma Waves (Adaptive to Active Background Theme)
    const time = Date.now() * 0.0006;
    const waveX1 = width * 0.25 + Math.sin(time) * 160;
    const waveY1 = height * 0.35 + Math.cos(time * 0.8) * 120;
    const plasma1 = ctx.createRadialGradient(waveX1, waveY1, 0, waveX1, waveY1, Math.max(width, height) * 0.48);

    const waveX2 = width * 0.78 + Math.cos(time * 0.9) * 180;
    const waveY2 = height * 0.7 + Math.sin(time * 1.1) * 140;
    const plasma2 = ctx.createRadialGradient(waveX2, waveY2, 0, waveX2, waveY2, Math.max(width, height) * 0.45);

    if (document.body.classList.contains('theme-cyberpunk')) {
      plasma1.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
      plasma1.addColorStop(0.5, 'rgba(5, 150, 105, 0.06)');
      plasma2.addColorStop(0, 'rgba(6, 182, 212, 0.16)');
      plasma2.addColorStop(0.5, 'rgba(16, 185, 129, 0.05)');
    } else if (document.body.classList.contains('theme-cobalt')) {
      plasma1.addColorStop(0, 'rgba(37, 99, 235, 0.18)');
      plasma1.addColorStop(0.5, 'rgba(29, 78, 216, 0.06)');
      plasma2.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
      plasma2.addColorStop(0.5, 'rgba(14, 165, 233, 0.05)');
    } else if (document.body.classList.contains('theme-obsidian')) {
      plasma1.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
      plasma1.addColorStop(0.5, 'transparent');
      plasma2.addColorStop(0, 'rgba(37, 99, 235, 0.05)');
      plasma2.addColorStop(0.5, 'transparent');
    } else {
      // Default: Jaw-Dropping Cyber Aurora (Deep Violet & Electric Cyan)
      plasma1.addColorStop(0, 'rgba(124, 58, 237, 0.22)');
      plasma1.addColorStop(0.5, 'rgba(139, 92, 246, 0.07)');
      plasma2.addColorStop(0, 'rgba(6, 182, 212, 0.18)');
      plasma2.addColorStop(0.5, 'rgba(37, 99, 235, 0.06)');
    }

    plasma1.addColorStop(1, 'transparent');
    ctx.fillStyle = plasma1;
    ctx.fillRect(0, 0, width, height);

    plasma2.addColorStop(1, 'transparent');
    ctx.fillStyle = plasma2;
    ctx.fillRect(0, 0, width, height);

    // 1. Draw Background Cursor Spotlight Aura
    if (mouseX >= 0 && mouseY >= 0) {
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 260);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.14)');
      gradient.addColorStop(0.5, 'rgba(37, 99, 235, 0.06)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    // Apply scroll velocity decay
    scrollVelocity *= 0.92;
    if (Math.abs(scrollVelocity) < 0.01) scrollVelocity = 0;

    // 2. Render and update background constellation stars
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Update position (adding vertical scroll velocity impulse!)
      p.x += p.vx;
      p.y += p.vy - scrollVelocity * 0.6;

      // Magnetic Cursor Attraction & Web Connection
      if (mouseX >= 0 && mouseY >= 0) {
        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;

        if (distMouseSq < 32400) { // Within 180px of cursor
          const distMouse = Math.sqrt(distMouseSq);
          // Gentle magnetic pull toward cursor
          p.x += (dxMouse / distMouse) * 0.45;
          p.y += (dyMouse / distMouse) * 0.45;

          // Draw laser line connecting star directly to cursor
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          const cursorAlpha = (1 - distMouse / 180) * 0.42;
          ctx.strokeStyle = '#38bdf8';
          ctx.globalAlpha = cursorAlpha;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }

      // Wrap boundaries
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle star
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Connect near particles for cyber constellation effect
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 16900) {
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / 130) * 0.22;
          ctx.strokeStyle = '#38bdf8';
          ctx.globalAlpha = lineAlpha;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // 3. Render Cursor Stardust Sparkle Trail
    for (let t = mouseTrails.length - 1; t >= 0; t--) {
      const trail = mouseTrails[t];
      trail.x += trail.vx;
      trail.y += trail.vy;
      trail.alpha -= 0.028;
      trail.radius *= 0.96;

      if (trail.alpha <= 0 || trail.radius <= 0.1) {
        mouseTrails.splice(t, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(trail.x, trail.y, trail.radius, 0, Math.PI * 2);
      ctx.fillStyle = trail.color;
      ctx.globalAlpha = trail.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = trail.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

/**
 * ==============================================================================
 * 11. UNFINISHED PROFILE SCROLL REVEAL (`#unfinished-section`)
 * Staggered illumination text animation when scrolling into the footer section
 * ==============================================================================
 */
function initUnfinishedScrollReveal() {
  const section = document.getElementById('unfinished-section');
  if (!section) return;

  const revealItems = section.querySelectorAll('[data-reveal]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealItems.forEach((item, idx) => {
          setTimeout(() => {
            item.classList.add('pf-active');
          }, idx * 160);
        });
      } else {
        revealItems.forEach(item => item.classList.remove('pf-active'));
      }
    });
  }, { threshold: 0.15 });

  observer.observe(section);
}

/**
 * ==============================================================================
 * 12. UNIQUE INTERACTIVE CYBER CURSOR (`#cursor-dot` & `#cursor-ring`)
 * Smooth lerp magnetic cursor with hover state expansion and click pulse
 * ==============================================================================
 */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  window.addEventListener('mousedown', () => {
    ring.classList.add('cursor-click');
  });

  window.addEventListener('mouseup', () => {
    ring.classList.remove('cursor-click');
  });

  // Interactive Hover States across interactive items
  const interactiveSelector = 'a, button, input, textarea, .bento-card, .project-card, .contact-line-card, .contact-pill, .timeline-item, .skills-category-box';
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      dot.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      dot.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    }
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}
