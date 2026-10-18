/**
 * Main Application Logic
 * Remi Vance — Artist & Writer Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  initArtworksGallery();
  initWritingsSection();
  initCuriosities();
  initAmbientSound();
  initGuestbook();
  initInquiryForm();
  initSketchbook();
});

/* ==========================================================================
   1. Theme Toggle (Daylight Parchment vs. Twilight Candlelight)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("remi-theme") || "daylight";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeButton(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const active = document.documentElement.getAttribute("data-theme");
    const next = active === "twilight" ? "daylight" : "twilight";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("remi-theme", next);
    updateThemeButton(next);
  });
}

function updateThemeButton(theme) {
  const btn = document.getElementById("theme-toggle-btn");
  if (!btn) return;
  const label = btn.querySelector(".theme-label");
  const icon = btn.querySelector(".theme-icon");
  if (theme === "twilight") {
    if (label) label.textContent = "Candlelight Studio";
    if (icon) icon.innerHTML = "🌙";
  } else {
    if (label) label.textContent = "Daylight Paper";
    if (icon) icon.innerHTML = "☀️";
  }
}

/* ==========================================================================
   2. Navigation & Smooth Scrolling
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const header = document.querySelector(".site-header");

  // Sticky header shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    // Scroll spy for active link
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
      mobileToggle.textContent = isOpen ? "✕ Close" : "☰ Index";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.textContent = "☰ Index";
      });
    });
  }
}

/* ==========================================================================
   3. Artworks Gallery & Lightbox
   ========================================================================== */
function initArtworksGallery() {
  const grid = document.getElementById("artworks-grid");
  const filterButtons = document.querySelectorAll("[data-filter]");
  if (!grid || typeof ARTWORKS_DATA === "undefined") return;

  renderArtworks(ARTWORKS_DATA);

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      if (filter === "all") {
        renderArtworks(ARTWORKS_DATA);
      } else {
        const filtered = ARTWORKS_DATA.filter((art) => art.category === filter);
        renderArtworks(filtered);
      }
    });
  });

  setupArtworkModal();
}

function renderArtworks(artworks) {
  const grid = document.getElementById("artworks-grid");
  if (!grid) return;

  grid.innerHTML = "";

  artworks.forEach((art, index) => {
    const card = document.createElement("article");
    card.className = "art-card";
    card.style.animationDelay = `${index * 0.08}s`;

    card.innerHTML = `
      <div class="art-card-frame" data-artwork-id="${art.id}">
        <img src="${art.image}" alt="${art.title}" class="art-card-img" loading="lazy" />
        <div class="art-card-overlay">
          <span class="art-overlay-pill">Inspect Artwork</span>
        </div>
      </div>
      <div class="art-card-meta">
        <div class="art-card-header">
          <span class="art-tag">${art.categoryLabel}</span>
          <span class="art-status">${art.status}</span>
        </div>
        <h3 class="art-card-title">${art.title}</h3>
        <p class="art-card-medium">${art.medium} • ${art.year}</p>
        <p class="art-card-excerpt">“${art.excerpt}”</p>
      </div>
    `;

    card.querySelector(".art-card-frame").addEventListener("click", () => {
      openArtworkModal(art);
    });

    grid.appendChild(card);
  });
}

function setupArtworkModal() {
  const modal = document.getElementById("artwork-modal");
  const closeBtn = document.getElementById("artwork-modal-close");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

function openArtworkModal(art) {
  const modal = document.getElementById("artwork-modal");
  if (!modal) return;

  document.getElementById("modal-art-img").src = art.image;
  document.getElementById("modal-art-img").alt = art.title;
  document.getElementById("modal-art-title").textContent = art.title;
  document.getElementById("modal-art-series").textContent = `${art.series} • ${art.year}`;
  document.getElementById("modal-art-medium").textContent = art.medium;
  document.getElementById("modal-art-dimensions").textContent = art.dimensions;
  document.getElementById("modal-art-status").textContent = art.status;
  document.getElementById("modal-art-notes").textContent = art.curatorNotes;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   4. Writings Section & Reading Drawer
   ========================================================================== */
function initWritingsSection() {
  const container = document.getElementById("writings-list");
  if (!container || typeof WRITINGS_DATA === "undefined") return;

  container.innerHTML = "";

  WRITINGS_DATA.forEach((writing, index) => {
    const item = document.createElement("article");
    item.className = "writing-item";

    item.innerHTML = `
      <div class="writing-item-header">
        <span class="writing-genre-pill">${writing.genre}</span>
        <span class="writing-date">${writing.date} • ${writing.readingTime}</span>
      </div>
      <h3 class="writing-title">${writing.title}</h3>
      <p class="writing-subtitle">${writing.subtitle}</p>
      <p class="writing-excerpt">${writing.excerpt}</p>
      <div class="writing-footer">
        <button type="button" class="btn-read-drawer" data-writing-id="${writing.id}">
          Read Piece &nbsp;→
        </button>
      </div>
    `;

    item.querySelector(".btn-read-drawer").addEventListener("click", () => {
      openReadingDrawer(writing);
    });

    container.appendChild(item);
  });

  setupReadingDrawer();
}

function setupReadingDrawer() {
  const drawer = document.getElementById("reading-drawer");
  const closeBtn = document.getElementById("reading-drawer-close");
  const overlay = document.getElementById("reading-drawer-overlay");
  const fontDec = document.getElementById("font-dec-btn");
  const fontInc = document.getElementById("font-inc-btn");
  const contentBody = document.getElementById("drawer-content-body");

  let currentFontSize = 18;

  if (closeBtn && drawer && overlay) {
    const close = () => {
      drawer.classList.remove("open");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    };
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", close);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        close();
      }
    });
  }

  if (fontDec && fontInc && contentBody) {
    fontDec.addEventListener("click", () => {
      if (currentFontSize > 15) {
        currentFontSize -= 1.5;
        contentBody.style.fontSize = `${currentFontSize}px`;
      }
    });
    fontInc.addEventListener("click", () => {
      if (currentFontSize < 24) {
        currentFontSize += 1.5;
        contentBody.style.fontSize = `${currentFontSize}px`;
      }
    });
  }
}

function openReadingDrawer(writing) {
  const drawer = document.getElementById("reading-drawer");
  const overlay = document.getElementById("reading-drawer-overlay");
  if (!drawer || !overlay) return;

  document.getElementById("drawer-genre").textContent = writing.genre;
  document.getElementById("drawer-meta").textContent = `${writing.date} • ${writing.readingTime}`;
  document.getElementById("drawer-title").textContent = writing.title;
  document.getElementById("drawer-subtitle").textContent = writing.subtitle;
  document.getElementById("drawer-epigraph").textContent = writing.epigraph || "";
  document.getElementById("drawer-content-body").innerHTML = writing.contentHtml;

  drawer.scrollTop = 0;
  drawer.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   5. Curiosities ("And Everything" Section)
   ========================================================================== */
function initCuriosities() {
  if (typeof CURIOSITIES_DATA === "undefined") return;

  // Render Herbarium
  const herbContainer = document.getElementById("herbarium-grid");
  if (herbContainer) {
    herbContainer.innerHTML = CURIOSITIES_DATA.herbarium
      .map(
        (item) => `
      <div class="curiosity-card herb-card">
        <span class="botanical-tag">Herbarium Specimen</span>
        <h4 class="curiosity-name">${item.name}</h4>
        <p class="curiosity-latin"><em>${item.latin}</em></p>
        <p class="curiosity-date">${item.date} • ${item.location}</p>
        <p class="curiosity-notes">“${item.notes}”</p>
      </div>
    `
      )
      .join("");
  }

  // Render Ink Formulas
  const inkContainer = document.getElementById("ink-grid");
  if (inkContainer) {
    inkContainer.innerHTML = CURIOSITIES_DATA.inkFormulas
      .map(
        (formula) => `
      <div class="curiosity-card formula-card">
        <span class="formula-tag">Studio Formula</span>
        <h4 class="curiosity-name">${formula.title}</h4>
        <p class="formula-ingredients"><strong>Ingredients:</strong> ${formula.ingredients}</p>
        <p class="formula-instructions">${formula.instructions}</p>
      </div>
    `
      )
      .join("");
  }

  // Render Bookshelf
  const booksContainer = document.getElementById("books-grid");
  if (booksContainer) {
    booksContainer.innerHTML = CURIOSITIES_DATA.readingShelf
      .map(
        (b) => `
      <div class="curiosity-card book-card">
        <h4 class="book-title">“${b.title}”</h4>
        <p class="book-author">by ${b.author}</p>
        <p class="book-annotation">${b.annotation}</p>
      </div>
    `
      )
      .join("");
  }

  // Render Swatches
  const swatchContainer = document.getElementById("swatches-grid");
  if (swatchContainer) {
    swatchContainer.innerHTML = CURIOSITIES_DATA.swatches
      .map(
        (s) => `
      <div class="swatch-item" data-hex="${s.hex}" title="Click to copy hex">
        <div class="swatch-circle" style="background-color: ${s.hex};"></div>
        <div class="swatch-info">
          <span class="swatch-name">${s.name}</span>
          <span class="swatch-code">${s.hex}</span>
          <span class="swatch-role">${s.role}</span>
        </div>
      </div>
    `
      )
      .join("");

    // Copy swatch code to clipboard
    swatchContainer.querySelectorAll(".swatch-item").forEach((item) => {
      item.addEventListener("click", () => {
        const hex = item.dataset.hex;
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied ${hex} to clipboard`);
        });
      });
    });
  }
}

/* ==========================================================================
   6. Ambient Studio Sound (Native Web Audio API Synthesis)
   ========================================================================== */
let audioCtx = null;
let rainGainNode = null;
let isAudioPlaying = false;

function initAmbientSound() {
  const soundBtn = document.getElementById("ambient-sound-btn");
  if (!soundBtn) return;

  soundBtn.addEventListener("click", () => {
    if (!audioCtx) {
      initAudioEngine();
    }

    if (isAudioPlaying) {
      stopAmbientSound();
      soundBtn.classList.remove("playing");
      soundBtn.querySelector(".sound-text").textContent = "Studio Rain: Off";
    } else {
      startAmbientSound();
      soundBtn.classList.add("playing");
      soundBtn.querySelector(".sound-text").textContent = "Studio Rain: On";
    }
  });
}

function initAudioEngine() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  // Create pink/brown noise buffer for natural rain/whispering wind
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  // Gentle low-pass filter to sound like rain outside studio window
  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 850;

  rainGainNode = audioCtx.createGain();
  rainGainNode.gain.value = 0;

  whiteNoise.connect(filter);
  filter.connect(rainGainNode);
  rainGainNode.connect(audioCtx.destination);

  whiteNoise.start(0);
}

function startAmbientSound() {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  rainGainNode.gain.cancelScheduledValues(audioCtx.currentTime);
  rainGainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  rainGainNode.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 1.5);
  isAudioPlaying = true;
}

function stopAmbientSound() {
  rainGainNode.gain.cancelScheduledValues(audioCtx.currentTime);
  rainGainNode.gain.setValueAtTime(rainGainNode.gain.value, audioCtx.currentTime);
  rainGainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.2);
  isAudioPlaying = false;
}

/* ==========================================================================
   7. Guestbook / Studio Notes
   ========================================================================== */
function initGuestbook() {
  const form = document.getElementById("guestbook-form");
  const list = document.getElementById("guestbook-entries");
  if (!form || !list) return;

  const defaultNotes = [
    {
      name: "Clara M.",
      city: "Florence",
      note: "Your drawing of the olive tree reminds me of the orchard behind my grandmother’s house. Thank you for this stillness.",
      date: "Oct 15"
    },
    {
      name: "Julian B.",
      city: "Edinburgh",
      note: "Reading your essay at 11pm with cold tea. It made me sharpen my pencils again.",
      date: "Oct 17"
    }
  ];

  let stored = JSON.parse(localStorage.getItem("remi-guestbook-notes") || "null");
  if (!stored) {
    stored = defaultNotes;
    localStorage.setItem("remi-guestbook-notes", JSON.stringify(stored));
  }

  const renderNotes = (notes) => {
    list.innerHTML = notes
      .map(
        (n) => `
      <div class="guestbook-note-card">
        <p class="guestbook-quote">“${n.note}”</p>
        <p class="guestbook-author">— ${n.name} <span class="guestbook-city">(${n.city})</span> • <span class="guestbook-time">${n.date}</span></p>
      </div>
    `
      )
      .join("");
  };

  renderNotes(stored);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("guest-name");
    const cityInput = document.getElementById("guest-city");
    const noteInput = document.getElementById("guest-note");

    const newNote = {
      name: nameInput.value.trim() || "A Passerby",
      city: cityInput.value.trim() || "Somewhere quiet",
      note: noteInput.value.trim(),
      date: "Just now"
    };

    stored.unshift(newNote);
    localStorage.setItem("remi-guestbook-notes", JSON.stringify(stored));
    renderNotes(stored);

    form.reset();
    showToast("Your note has been pinned to the studio board 🍂");
  });
}

/* ==========================================================================
   8. Commission & Inquiries
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sealing letter...";
    submitBtn.disabled = true;

    setTimeout(() => {
      form.innerHTML = `
        <div class="inquiry-success">
          <div class="wax-seal-icon">✦</div>
          <h4 class="inquiry-success-title">Letter Received</h4>
          <p class="inquiry-success-desc">
            Thank you for reaching out with such care. Remi reads inquiries every Thursday morning over tea and will reply to your letter shortly.
          </p>
        </div>
      `;
    }, 1200);
  });
}

/* ==========================================================================
   9. Sketchbook Initialization
   ========================================================================== */
function initSketchbook() {
  if (typeof StudioSketchbook !== "undefined") {
    new StudioSketchbook("sketchbook-canvas");
  }
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(msg) {
  let toast = document.getElementById("studio-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "studio-toast";
    toast.className = "studio-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2800);
}
