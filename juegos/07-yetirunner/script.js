document.addEventListener("DOMContentLoaded", () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const navbar = document.getElementById("navbar");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section[id]");
  const backToTopBtn = document.getElementById("back-to-top");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  // 1. Barra de progreso superior, menú fijo y detector de sección activa
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    if (scrollTop > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (scrollTop > 450) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    let currentSection = "";
    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop - 160;
      if (scrollTop >= sectionTop) {
        currentSection = sec.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active");
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // 2. Probador interactivo de controles para ambos juegos (↑/↓, ←/→ y tecla R) + Bloqueo de Scroll
  const keyUpCard = document.getElementById("key-up-card");
  const keyLrCard = document.getElementById("key-lr-card");
  const keyRCard = document.getElementById("key-r-card");
  const updownFeedback = document.getElementById("updown-feedback");
  const lrFeedback = document.getElementById("lr-feedback");
  const rFeedback = document.getElementById("r-feedback");
  const lockKeysBtn = document.getElementById("btn-lock-keys");
  let lockArrowScroll = true;

  if (lockKeysBtn) {
    lockKeysBtn.addEventListener("click", () => {
      lockArrowScroll = !lockArrowScroll;
      if (lockArrowScroll) {
        lockKeysBtn.textContent = "🔒 Bloqueador de Flechas: ACTIVO";
        lockKeysBtn.classList.add("active-Lock");
      } else {
        lockKeysBtn.textContent = "🔓 Bloqueador de Flechas: INACTIVO";
        lockKeysBtn.classList.remove("active-Lock");
      }
    });
  }

  if (keyUpCard && updownFeedback) {
    keyUpCard.addEventListener("click", () => {
      updownFeedback.textContent = "¡Probado! Salto / Agache (Juego 1) y avance vertical (Juego 2).";
    });
  }

  if (keyLrCard && lrFeedback) {
    keyLrCard.addEventListener("click", () => {
      lrFeedback.textContent = "¡Probado! Giro lateral en los pasillos del Laberinto (Juego 2).";
    });
  }

  if (keyRCard && rFeedback) {
    keyRCard.addEventListener("click", () => {
      rFeedback.textContent = "¡Probado! Reinicio inmediato de partida en el Laberinto.";
    });
  }

  window.addEventListener(
    "keydown",
    (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        if (lockArrowScroll) {
          e.preventDefault();
        }
      }

      if ((e.key === "ArrowUp" || e.key === "ArrowDown") && keyUpCard) {
        keyUpCard.classList.add("key-pressed");
        if (updownFeedback) {
          updownFeedback.textContent = `Tecla ${e.key === "ArrowUp" ? "↑" : "↓"} detectada correctamente.`;
        }
      }

      if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && keyLrCard) {
        keyLrCard.classList.add("key-pressed");
        if (lrFeedback) {
          lrFeedback.textContent = `Tecla ${e.key === "ArrowLeft" ? "←" : "→"} detectada para el Laberinto.`;
        }
      }

      if ((e.key === "r" || e.key === "R") && keyRCard) {
        keyRCard.classList.add("key-pressed");
        if (rFeedback) {
          rFeedback.textContent = "Tecla R detectada: Reinicio rápido activo.";
        }
      }
    },
    { passive: false }
  );

  window.addEventListener("keyup", (e) => {
    if ((e.key === "ArrowUp" || e.key === "ArrowDown") && keyUpCard) {
      keyUpCard.classList.remove("key-pressed");
    }
    if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && keyLrCard) {
      keyLrCard.classList.remove("key-pressed");
    }
    if ((e.key === "r" || e.key === "R") && keyRCard) {
      keyRCard.classList.remove("key-pressed");
    }
  });

  // 3. Control de Inicio Explícito (Botones START Juego 1 y Juego 2 - GED 26)
  function setupGameStartControl(btnId, iframeId, overlayId, statusTextId, dotId, gameName) {
    const startBtn = document.getElementById(btnId);
    const iframe = document.getElementById(iframeId);
    const overlay = document.getElementById(overlayId);
    const statusText = document.getElementById(statusTextId);
    const statusDot = document.getElementById(dotId);
    let isLoaded = false;

    if (startBtn && iframe && overlay) {
      startBtn.addEventListener("click", () => {
        const targetSrc = iframe.getAttribute("data-src");
        if (!isLoaded) {
          iframe.setAttribute("src", targetSrc);
          overlay.classList.add("hidden");
          startBtn.textContent = "↻ REINICIAR " + gameName;
          startBtn.classList.add("running");
          if (statusText) {
            statusText.innerHTML = `Estado ${gameName}: <strong>En ejecución dentro del portal</strong>`;
          }
          if (statusDot) {
            statusDot.classList.add("active");
          }
          isLoaded = true;
        } else {
          iframe.setAttribute("src", targetSrc);
        }
      });
    }
  }

  setupGameStartControl(
    "btn-start-game1",
    "unity-iframe-1",
    "standby-overlay-1",
    "status-text-1",
    "status-dot-1",
    "JUEGO 1"
  );

  setupGameStartControl(
    "btn-start-game2",
    "unity-iframe-2",
    "standby-overlay-2",
    "status-text-2",
    "status-dot-2",
    "JUEGO 2"
  );

  // 4. Modo Teatro y Pantalla Completa para ambos contenedores WebGL
  const theaterBtn1 = document.getElementById("btn-theater");
  const fullscreenBtn1 = document.getElementById("btn-fullscreen");
  const webglContainer1 = document.getElementById("webgl-container");

  if (theaterBtn1 && webglContainer1) {
    theaterBtn1.addEventListener("click", () => {
      webglContainer1.classList.toggle("theater-mode");
    });
  }

  if (fullscreenBtn1 && webglContainer1) {
    fullscreenBtn1.addEventListener("click", () => {
      if (webglContainer1.requestFullscreen) {
        webglContainer1.requestFullscreen();
      } else if (webglContainer1.webkitRequestFullscreen) {
        webglContainer1.webkitRequestFullscreen();
      }
    });
  }

  const theaterBtn2 = document.getElementById("btn-theater-2");
  const fullscreenBtn2 = document.getElementById("btn-fullscreen-2");
  const webglContainer2 = document.getElementById("webgl-container-2");

  if (theaterBtn2 && webglContainer2) {
    theaterBtn2.addEventListener("click", () => {
      webglContainer2.classList.toggle("theater-mode");
    });
  }

  if (fullscreenBtn2 && webglContainer2) {
    fullscreenBtn2.addEventListener("click", () => {
      if (webglContainer2.requestFullscreen) {
        webglContainer2.requestFullscreen();
      } else if (webglContainer2.webkitRequestFullscreen) {
        webglContainer2.webkitRequestFullscreen();
      }
    });
  }

  // 5. Visor Lightbox para ampliar imágenes
  const zoomableImages = document.querySelectorAll(".zoomable-img");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  zoomableImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxModal.classList.add("open");
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightboxModal.classList.remove("open");
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove("open");
      }
    });
  }
});