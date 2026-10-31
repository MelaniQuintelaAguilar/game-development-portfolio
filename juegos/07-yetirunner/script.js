document.addEventListener("DOMContentLoaded", () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const navbar = document.getElementById("navbar");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section[id]");
  const backToTopBtn = document.getElementById("back-to-top");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  // 1. Barra de progreso, Navbar fijo y Detector de secciones
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;

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

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // 2. Control de Audio Virtual en el portal (Filtro por toggle)
  let portalSoundEnabled = true;
  const soundToggleBtn = document.getElementById("sound-toggle-btn");

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      portalSoundEnabled = !portalSoundEnabled;
      if (portalSoundEnabled) {
        soundToggleBtn.textContent = "🔊 Sonido: ON";
        soundToggleBtn.classList.remove("sound-muted");
      } else {
        soundToggleBtn.textContent = "🔇 Sonido: OFF";
        soundToggleBtn.classList.add("sound-muted");
      }
    });
  }

  // Reproductor de audio Web sintetizado para no depender de archivos externos
  function playSynthSound(freq, duration, type = "triangle") {
    if (!portalSoundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      if (type === "triangle") { // Salto (Frecuencia ascendente)
        osc.frequency.exponentialRampToValueAtTime(freq * 1.8, ctx.currentTime + duration);
      } else { // Agacharse (Frecuencia descendente)
        osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);
      }
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // AudioContext bloqueado o no soportado
    }
  }

  // 3. Simulador interactivo de controles (↑ / ↓)
  const keyUpCard = document.getElementById("key-up-card");
  const keyDownCard = document.getElementById("key-down-card");
  const lockKeysBtn = document.getElementById("btn-lock-keys");
  const jumpFeedback = document.getElementById("jump-feedback");
  const slideFeedback = document.getElementById("slide-feedback");
  let lockArrowScroll = true;

  if (lockKeysBtn) {
    lockKeysBtn.addEventListener("click", () => {
      lockArrowScroll = !lockArrowScroll;
      if (lockArrowScroll) {
        lockKeysBtn.textContent = "🔒 Bloqueador de Pantalla: ACTIVO";
        lockKeysBtn.classList.add("active-Lock");
      } else {
        lockKeysBtn.textContent = "🔓 Bloqueador de Pantalla: INACTIVO";
        lockKeysBtn.classList.remove("active-Lock");
      }
    });
  }

  // Presionar tarjeta de salto con click
  if (keyUpCard) {
    keyUpCard.addEventListener("click", () => {
      playSynthSound(280, 0.22, "triangle");
      if (jumpFeedback) {
        jumpFeedback.textContent = "¡PROBADO! Impulso de salto vertical simulado.";
        setTimeout(() => jumpFeedback.textContent = "Postura: ¡Elevación sobre el suelo! Sutil sonido de impulso.", 1500);
      }
    });
  }

  // Presionar tarjeta de agacharse con click
  if (keyDownCard) {
    keyDownCard.addEventListener("click", () => {
      playSynthSound(200, 0.28, "sawtooth");
      if (slideFeedback) {
        slideFeedback.textContent = "¡PROBADO! Agachado y reducción de área física simulados.";
        setTimeout(() => slideFeedback.textContent = "Postura: ¡Tamaño reducido para pasar bajo objetos!", 1500);
      }
    });
  }

  // Soporte para uso real de Teclas
  window.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        if (lockArrowScroll) {
          e.preventDefault();
        }
      }

      if (e.key === "ArrowUp" && keyUpCard) {
        if (!keyUpCard.classList.contains("key-pressed")) {
          keyUpCard.classList.add("key-pressed");
          playSynthSound(280, 0.22, "triangle");
          if (jumpFeedback) jumpFeedback.textContent = "¡ACTIVO! Yeti saltando obstáculos bajos.";
        }
      }
      if (e.key === "ArrowDown" && keyDownCard) {
        if (!keyDownCard.classList.contains("key-pressed")) {
          keyDownCard.classList.add("key-pressed");
          playSynthSound(200, 0.28, "sawtooth");
          if (slideFeedback) slideFeedback.textContent = "¡ACTIVO! Yeti encogido y seguro.";
        }
      }
    },
    { passive: false }
  );

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" && keyUpCard) {
      keyUpCard.classList.remove("key-pressed");
      if (jumpFeedback) jumpFeedback.textContent = "Postura: ¡Elevación sobre el suelo! Sutil sonido de impulso.";
    }
    if (e.key === "ArrowDown" && keyDownCard) {
      keyDownCard.classList.remove("key-pressed");
      if (slideFeedback) slideFeedback.textContent = "Postura: ¡Tamaño reducido para pasar bajo objetos!";
    }
  });

  // 4. Simulador interactivo de puntuación (UX Hero card)
  const simulatePointsBtn = document.getElementById("btn-simulate-points");
  const heroScoreCounter = document.getElementById("hero-score-counter");
  let simulatedScore = 0;

  if (simulatePointsBtn && heroScoreCounter) {
    simulatePointsBtn.addEventListener("click", () => {
      simulatedScore += 100;
      if (simulatedScore >= 1000) {
        heroScoreCounter.textContent = `${simulatedScore} / 1000 ¡GANASTE! 🎉`;
        heroScoreCounter.style.color = "#2ecc71";
        playSynthSound(440, 0.4, "triangle");
        setTimeout(() => {
          simulatedScore = 0;
          heroScoreCounter.textContent = "0 / 1000";
          heroScoreCounter.style.color = "";
        }, 3000);
      } else {
        heroScoreCounter.textContent = `${simulatedScore} / 1000`;
        playSynthSound(520, 0.1, "triangle");
      }
    });
  }

  // 5. NUEVA INTERACTIVIDAD: Simulador de Preguntas de Examen (Estudio grupal de defensa)
  const btnGenerateChallenge = document.getElementById("btn-generate-challenge");
  const challengeDisplay = document.getElementById("challenge-display");
  const answerDisplay = document.getElementById("answer-display");

  // Lista de preguntas de examen basadas en la rúbrica oficial (con lenguaje simple sin tecnicismos)
  const examChallenges = [
    {
      challenge: "📢 EXAMEN DEFENSA: El profesor te pide 'Reducir la velocidad general de movimiento del Yeti y de la pista para facilitar la supervivencia'. ¿Cómo lo logras?",
      answer: "💡 RESPUESTA: Dirígete al script del gestor de juego en Unity (GameManager) y disminuye el valor de la variable pública 'Velocidad General' en el inspector. Esto reducirá de inmediato la velocidad a la que se desplaza la pista o los obstáculos hacia el personaje."
    },
    {
      challenge: "📢 EXAMEN DEFENSA: El profesor solicita 'Modificar el tiempo de duración o la agilidad de la postura del Yeti al agacharse'. ¿Cómo se ajusta?",
      answer: "💡 RESPUESTA: En el script del personaje, localiza la función que se activa al presionar la tecla Flecha Abajo. Modifica el tiempo que dura la animación en el 'Animator Controller' o el valor que reduce temporalmente el tamaño del detector de impactos (nuestro indicador de altura)."
    },
    {
      challenge: "📢 EXAMEN DEFENSA: El evaluador te dice 'Incrementar o reducir la cantidad de vidas iniciales que tiene el estudiante para la partida'. ¿Cómo se altera?",
      answer: "💡 RESPUESTA: Accede al objeto del 'Game Manager' en tu jerarquía de Unity. En la sección de configuración del componente, busca el campo público llamado 'Vidas Iniciales' y cambia su valor de 3 a 5 (para hacerlo más fácil) o a 1 (para muerte súbita)."
    },
    {
      challenge: "📢 EXAMEN DEFENSA: El profesor pide 'Alterar la altura del salto del personaje al presionar la flecha arriba'. ¿Qué variable ajustas?",
      answer: "💡 RESPUESTA: En el componente del personaje, localiza la variable de 'Fuerza de Salto' (Jump Force) en el script de movimiento y eleva su valor numérico en el inspector para que supere con mayor soltura obstáculos más altos."
    },
    {
      challenge: "📢 EXAMEN DEFENSA: El evaluador quiere 'Ajustar la frecuencia con la que aparecen las mochilas o letreros'. ¿Qué modificas?",
      answer: "💡 RESPUESTA: Ve al objeto del Generador (Spawner) en la jerarquía. En su componente, altera las variables de tiempo mínimo y máximo entre apariciones. Disminuir estos valores provocará que los obstáculos salgan más seguido, elevando la dificultad."
    },
    {
      challenge: "📢 EXAMEN DEFENSA: El profesor te pide 'Cambiar la cantidad de puntos que se otorgan al jugador por cada segundo de carrera'. ¿Cómo se modifica?",
      answer: "💡 RESPUESTA: Abre el script de puntuación en Unity y cambia el valor de aumento dentro de la función que corre con el tiempo de juego, o modifica la variable pública 'Puntos Por Segundo' desde el inspector."
    }
  ];

  if (btnGenerateChallenge && challengeDisplay && answerDisplay) {
    btnGenerateChallenge.addEventListener("click", () => {
      // Sorteo aleatorio de una pregunta
      const randomIndex = Math.floor(Math.random() * examChallenges.length);
      const selected = examChallenges[randomIndex];

      // Animación de carga rápida (efecto de sorteo)
      challengeDisplay.textContent = "Sorteando pregunta de defensa...";
      answerDisplay.style.display = "none";
      playSynthSound(600, 0.08, "triangle");

      setTimeout(() => {
        challengeDisplay.textContent = selected.challenge;
        answerDisplay.textContent = selected.answer;
        answerDisplay.style.display = "block";
        playSynthSound(520, 0.15, "triangle");
      }, 400);
    });
  }

  // 6. Controles WebGL y visualización Lightbox (Zoom)
  const theaterBtn = document.getElementById("btn-theater");
  const fullscreenBtn = document.getElementById("btn-fullscreen");
  const webglContainer = document.getElementById("webgl-container");

  if (theaterBtn && webglContainer) {
    theaterBtn.addEventListener("click", () => {
      webglContainer.classList.toggle("theater-mode");
    });
  }

  if (fullscreenBtn && webglContainer) {
    fullscreenBtn.addEventListener("click", () => {
      if (webglContainer.requestFullscreen) {
        webglContainer.requestFullscreen();
      } else if (webglContainer.webkitRequestFullscreen) {
        webglContainer.webkitRequestFullscreen();
      }
    });
  }

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