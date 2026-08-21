<p align="center">
  <sub>LEVEL 03 · MECÁNICAS</sub>
</p>

<h1 align="center">🍎 NutriFest</h1>

<p align="center">
  <code>RUNNER</code>
  &nbsp; ✦ &nbsp;
  <code>ALIMENTACIÓN</code>
  &nbsp; ✦ &nbsp;
  <code>DECISIONES</code>
</p>

<p align="center">
  <i>Lo que eliges también cambia cómo avanzas.</i>
</p>

<br>

<p align="center">
  <img src="../../assets/capturas/nutrifest/inicio.png" alt="Pantalla inicial de NutriFest" width="700">
</p>

<p align="center">
  <sub>✦ LEVEL 03 ✦</sub>
</p>

<br>

---

<h2 align="center">🍎 SOBRE EL JUEGO</h2>

<p align="center">
  <sub>Alimentación, energía y movimiento dentro de una misma mecánica.</sub>
</p>

**NutriFest** es un videojuego educativo de tipo runner enfocado en la alimentación saludable.

El personaje avanza automáticamente por diferentes escenarios mientras aparecen alimentos y obstáculos en su camino.

La alimentación modifica directamente el estado del jugador: los alimentos saludables recuperan energía, mientras que la comida chatarra reduce temporalmente su rendimiento.

El desafío consiste en **reaccionar, saltar y tomar buenas decisiones** para mantener suficiente energía y avanzar por los cinco niveles.

<p align="center">
  🌐 <b>HTML · CSS · JavaScript</b>
  &nbsp;&nbsp; ✦ &nbsp;&nbsp;
  ⚡ <b>Energía 0–100%</b>
  &nbsp;&nbsp; ✦ &nbsp;&nbsp;
  🏁 <b>5 niveles</b>
</p>

<br>

---

<h2 align="center">🎯 OBJETIVO</h2>

<p align="center">
  Alcanzar el <b>100% de energía</b>, superar los obstáculos y avanzar hasta completar los cinco niveles.
</p>

Durante el recorrido, el jugador debe favorecer los alimentos saludables y evitar tanto la comida chatarra como los obstáculos.

Al conseguir suficiente energía se habilita el avance hacia el siguiente nivel.

Completar los **5 niveles** representa la victoria final.

<br>

---

<h2 align="center">🧩 MECÁNICA PRINCIPAL</h2>

<p align="center">
  <kbd>AVANZAR</kbd>
  &nbsp; → &nbsp;
  <kbd>OBSERVAR</kbd>
  &nbsp; → &nbsp;
  <kbd>SALTAR</kbd>
  &nbsp; → &nbsp;
  <kbd>ELEGIR</kbd>
  &nbsp; → &nbsp;
  <kbd>ADAPTARSE</kbd>
</p>

<br>

NutriFest funciona como un **auto-runner**: el desplazamiento horizontal ocurre automáticamente y el jugador concentra su atención en reaccionar ante los elementos que aparecen.

La comida saludable aumenta la energía y favorece el progreso.

La comida chatarra provoca pérdida de energía y un estado temporal de **pesadez**, reduciendo la velocidad.

Los obstáculos también disminuyen la energía del jugador.

La mecánica convierte las decisiones alimenticias en consecuencias visibles dentro del movimiento y rendimiento del personaje.

---

## CONTROLES

| Control | Acción |
|---|---|
| `ESPACIO` | Saltar |
| `W` | Saltar |
| `↑` | Saltar |
| `CLICK / TOUCH` | Saltar |
| `P` | Pausar / reanudar |
| `CLICK` · Botón de pausa | Pausar / reanudar desde la interfaz |

> El personaje avanza automáticamente, por lo que no es necesario controlar su desplazamiento horizontal.

---

## CÓMO FUNCIONA

`01` El personaje comienza a avanzar automáticamente.  
`02` Aparecen alimentos saludables, comida chatarra y obstáculos.  
`03` El jugador decide cuándo saltar para interactuar o evitar elementos.  
`04` Los alimentos saludables recuperan energía.  
`05` La comida chatarra reduce energía y provoca pesadez temporal.  
`06` Chocar con obstáculos también disminuye la energía.  
`07` Al alcanzar el 100% de energía se habilita el progreso del nivel.  
`08` Superar el recorrido permite avanzar al siguiente escenario.  
`09` El desafío continúa hasta completar los 5 niveles.

---

## PROGRESIÓN

NutriFest está dividido en **cinco niveles** con dificultad creciente.

Cada uno modifica el ritmo y las condiciones del recorrido.

A medida que el jugador avanza:

- aumenta la velocidad del juego;
- los obstáculos aparecen con mayor frecuencia;
- disminuye el tiempo disponible para reaccionar;
- la gestión de energía se vuelve más importante;
- la comida chatarra puede aparecer con mayor presencia;
- mantener una buena alimentación requiere decisiones más rápidas.

<details>
<summary><b>✦ Ver recorrido de niveles</b></summary>

<br>

**NIVEL 01 · Pradera del Equilibrio**  
Introducción al sistema de energía y a las decisiones básicas de alimentación.

**NIVEL 02 · Ciudad del Azúcar**  
El ritmo aumenta y exige mayor atención durante el recorrido.

**NIVEL 03 · Bosque de los Nutrientes**  
La combinación entre alimentos y obstáculos requiere reacciones más rápidas.

**NIVEL 04 · Laboratorio del Veneno**  
La dificultad aumenta y las malas decisiones tienen mayor impacto.

**NIVEL 05 · Cumbre NutriFest**  
Último desafío antes de completar el recorrido.

</details>

<br>

---

<h2 align="center">🎨 GALERÍA</h2>

<p align="center">
  <sub>Energía, velocidad y decisiones durante el recorrido.</sub>
</p>

<br>

<p align="center">
  <img src="../../assets/capturas/nutrifest/gameplay.png" alt="Gameplay de NutriFest" width="800">
</p>

<p align="center">
  <sub>🏃 GAMEPLAY</sub>
</p>

<br>

<p align="center">
  <img src="../../assets/capturas/nutrifest/resultado.png" alt="Resultado final de NutriFest" width="700">
</p>

<p align="center">
  <sub>⭐ RESULTADO FINAL</sub>
</p>

<br>

---

## DESARROLLO

<p align="center">
  <code>HTML</code>
  &nbsp; ✦ &nbsp;
  <code>CSS</code>
  &nbsp; ✦ &nbsp;
  <code>JavaScript</code>
</p>

**HTML**  
Estructura de la interfaz, HUD, controles y elementos del videojuego.

**CSS**  
Diseño visual de los escenarios, estados, overlays e interfaz.

**JavaScript**  
Movimiento automático, salto, generación de alimentos, obstáculos, energía, colisiones, dificultad y progresión entre niveles.

El prototipo se encuentra integrado en un único archivo:

```text
index.html
```

---

<h2 align="center">🤖 PROCESO CON IA</h2>

<p align="center">
  <sub>Primero la mecánica. Después, el prototipo.</sub>
</p>

<p align="center">
  <kbd>MECÁNICA</kbd>
  &nbsp; → &nbsp;
  <kbd>DINÁMICA</kbd>
  &nbsp; → &nbsp;
  <kbd>EXPERIENCIA</kbd>
  &nbsp; → &nbsp;
  <kbd>PROMPT</kbd>
  &nbsp; → &nbsp;
  <kbd>PROTOTIPO</kbd>
</p>

<br>

La Inteligencia Artificial generativa se utilizó como herramienta de apoyo durante la producción del videojuego.

Antes de generar el prototipo se definieron el **género**, la **mecánica principal**, la dinámica esperada y la experiencia que debía producir en el jugador.

A partir de estas decisiones se construyó un prompt para transformar el diseño previo en un videojuego funcional.

Posteriormente, el prototipo fue probado por otros equipos para comprobar que:

- la mecánica fuera comprensible;
- el género Runner pudiera reconocerse al jugar;
- la dinámica coincidiera con la planteada;
- existieran condiciones de victoria y derrota;
- el mensaje sobre alimentación saludable pudiera entenderse.



---

<h2 align="center">🔁 LO QUE APRENDÍ</h2>

<p align="center">
  <i>Una mecánica no termina en la acción: genera comportamiento y experiencia.</i>
</p>

NutriFest me permitió trabajar especialmente con el modelo **MDA** y entender la relación entre lo que el juego permite hacer y lo que termina experimentando el jugador.

<p align="center">
  <kbd>MECÁNICA</kbd>
  &nbsp; → &nbsp;
  <kbd>DINÁMICA</kbd>
  &nbsp; → &nbsp;
  <kbd>ESTÉTICA</kbd>
</p>

<br>

**Mecánica**  
Saltar, recoger alimentos, perder o recuperar energía y reaccionar ante obstáculos.

**Dinámica**  
El jugador intenta favorecer los alimentos saludables, evitar elementos perjudiciales y conservar suficiente energía para progresar.

**Estética / experiencia**  
Velocidad, tensión y satisfacción al conseguir avanzar mediante buenas decisiones.

Durante la práctica trabajé principalmente en:

<p align="center">
  <code>MDA</code>
  &nbsp; ✦ &nbsp;
  <code>mecánicas</code>
  &nbsp; ✦ &nbsp;
  <code>dinámicas</code>
  &nbsp; ✦ &nbsp;
  <code>experiencia</code>
  &nbsp; ✦ &nbsp;
  <code>testing</code>
</p>

También comprendí que modificar una mecánica puede cambiar directamente **cómo juega y qué siente el jugador**.

<br>

---

<h2 align="center">🚀 SIGUIENTE NIVEL</h2>

<p align="center">
  <sub>Ideas para ampliar la relación entre alimentación y gameplay.</sub>
</p>

En una próxima versión me gustaría explorar:

- mayor variedad de alimentos saludables y comida chatarra;
- efectos diferentes según cada alimento;
- nuevos tipos de obstáculos;
- más variedad entre los cinco escenarios;
- objetivos secundarios o coleccionables;
- mayor feedback visual y sonoro;
- récords o puntuaciones persistentes.

<br>

---

## EJECUCIÓN

NutriFest puede jugarse directamente desde el navegador sin instalar software adicional.

<br>

<p align="center">
  <a href="https://melaniquintelaaguilar.github.io/game-development-portfolio/juegos/03-nutrifest/">
    <b>🍎 JUGAR NUTRIFEST</b>
  </a>
</p>

<p align="center">
  <sub>Disponible mediante GitHub Pages</sub>
</p>

<br>

---

<p align="center">
  <sub>✦ ✦ ✦</sub>
</p>

<p align="center">
  <b>🍎 LEVEL 03 COMPLETE</b>
</p>

<p align="center">
  <sub>Mecánicas desbloqueadas</sub>
</p>

<br>

<p align="center">
  <a href="../../README.md">← VOLVER AL PORTAFOLIO</a>
</p>