// app.js

// Helper for element selection
const $ = (id) => document.getElementById(id);

/* File Module: Opens and closes file windows dynamically */
const FileModule = (function () {
  let fileCounter = 0;
  const files = {
    encrypted_truth: {
      name: 'Encrypted_Truth_1.0',
      content: `# 0101101010110010 - System Compromise Detected
Fragmented message received. _Information filtered..._
-> "Who controls the flow of secrets in a world that watches?"
Sync unstable. Proceed with caution...`
    },
    hack_manifest: {
      name: 'Hack_the_Sys_Manifest.txt',
      content: `Unregistered access detected.
Objective: BREAK SYSTEM.
Access keys encrypted: [DECRYPT]
~ Unknown entities infiltrate your reality ~`
    },
    meta_truth: {
      name: 'Meta-Truths.csv',
      content: `ID, Observation, Code_Status
1, Paranoia is power, Unverified
2, Truth exists beyond the system, Critical`
    },
    reality_key: {
      name: 'Deconstruct_Reality.key',
      content: `Key not found.
Access denied.
Anomaly: Hyperreal states detected.`
    },
    Signal_N7JHH31: {
      name: 'Signal N7JHH31',
      content: `Reproducible.
Access conceived in atemporality
Anomaly: Hyperreal states merging.`,
      extra: `<div id="waveform"></div>`
    }
  };

  // app.js

  // Helper for element selection
  const $ = (id) => document.getElementById(id);

  /* File Module: Opens and closes file windows dynamically */
  const FileModule = (function () {
    let fileCounter = 0;
    const files = {
      encrypted_truth: {
        name: 'Encrypted_Truth_1.0',
        content: `# 0101101010110010 - System Compromise Detected
Fragmented message received. _Information filtered..._
-> "Who controls the flow of secrets in a world that watches?"
Sync unstable. Proceed with caution...`
      },
      hack_manifest: {
        name: 'Hack_the_Sys_Manifest.txt',
        content: `Unregistered access detected.
Objective: BREAK SYSTEM.
Access keys encrypted: [DECRYPT]
~ Unknown entities infiltrate your reality ~`
      },
      meta_truth: {
        name: 'Meta-Truths.csv',
        content: `ID, Observation, Code_Status
1, Paranoia is power, Unverified
2, Truth exists beyond the system, Critical`
      },
      reality_key: {
        name: 'Deconstruct_Reality.key',
        content: `Key not found.
Access denied.
Anomaly: Hyperreal states detected.`
      },
      Signal_N7JHH31: {
        name: 'Signal N7JHH31',
        content: `Reproducible.
Access conceived in atemporality
Anomaly: Hyperreal states merging.`,
        extra: `<div id="waveform"></div>`
      }
    };

    function openFile(fileKey) {
      const file = files[fileKey];
      if (!file) return;

      //Open sound
      // Play the open window sound
      const openSound = new Audio('/sound/Open.wav');
      openSound.volume = 0.8; // Adjust volume if needed
      openSound.play().catch(console.error);

      fileCounter++;
      const winId = 'fileWindow_' + fileCounter;
      const newWindow = document.createElement('div');
      newWindow.className = 'tui-window';
      newWindow.id = winId;
      newWindow.style.display = 'block';
      newWindow.style.position = 'absolute';
      newWindow.style.top = (50 + fileCounter * 30) + 'px';
      newWindow.style.left = (50 + fileCounter * 30) + 'px';
      newWindow.innerHTML = `
      <fieldset class="tui-fieldset">
        <legend class="center">${file.name}</legend>
        <pre class="center">${file.content}</pre>
        ${file.extra || ''}
        <button class="tui-button" data-close="${winId}" aria-label="Close window for ${file.name}">Close</button>
      </fieldset>
    `;
      document.body.appendChild(newWindow);
    }

    function closeFile(winId) {
      const win = $(winId);
      if (win) win.remove();

      // Play the open window sound
      const closeSound = new Audio('/sound/Close.wav');
      closeSound.volume = 0.8; // Adjust volume if needed
      closeSound.play().catch(console.error);

    }

    function init() {
      document.addEventListener('click', function (e) {
        if (e.target.matches('.tui-file')) {
          const fileKey = e.target.getAttribute('data-file');
          openFile(fileKey);
        }
        if (e.target.matches('button[data-close]')) {
          closeFile(e.target.getAttribute('data-close'));
        }
      });
    }

    return { init };
  })();
  
  /* Dock Module: Opens tools from the dock */
  const DockModule = (function () {
    function openTool(tool) {
      alert('Opening ' + tool);
    }
    function init() {
      document.querySelectorAll('.dock-item').forEach((item) => {
        item.addEventListener('click', () => {
          const tool = item.getAttribute('data-tool');
          openTool(tool);
        });
      });
    }
    return { init };
  })();

  /* Clock Module: Updates the clock display every second */
  const ClockModule = (function () {
    function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      $('clock').textContent = "Current Time: " + hours + ":" + minutes + ":" + seconds;
    }
    function init() {
      updateTime();
      setInterval(updateTime, 1000);
    }
    return { init };
  })();

  /* Interaction Module: Enables dragging and resizing of windows using requestAnimationFrame */
  const InteractionModule = (function () {
    let dragItem = null,
      offsetX,
      offsetY;
    let resizeItem = null,
      startWidth,
      startHeight,
      startMouseX,
      startMouseY;
    let animationFrame;

    function onMouseDown(e) {
      const windowEl = e.target.closest('.tui-window');
      if (windowEl) {
        const rect = windowEl.getBoundingClientRect();
        // Check if resizing (bottom-right corner)
        if (e.clientX > rect.right - 20 && e.clientY > rect.bottom - 20) {
          resizeItem = windowEl;
          startWidth = rect.width;
          startHeight = rect.height;
          startMouseX = e.clientX;
          startMouseY = e.clientY;
          e.preventDefault();
        } else {
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;
          dragItem = windowEl;
        }
      }
    }

    function onMouseMove(e) {
      if (dragItem || resizeItem) {
        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          if (dragItem && !resizeItem) {
            dragItem.style.left = (e.clientX - offsetX) + 'px';
            dragItem.style.top = (e.clientY - offsetY) + 'px';
          }
          if (resizeItem) {
            const newWidth = startWidth + (e.clientX - startMouseX);
            const newHeight = startHeight + (e.clientY - startMouseY);
            if (newWidth > 200) resizeItem.style.width = newWidth + 'px';
            if (newHeight > 150) resizeItem.style.height = newHeight + 'px';
          }
        });
      }
    }

    function onMouseUp() {
      dragItem = null;
      resizeItem = null;
    }

    function init() {
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    return { init };
  })();

  /* Glitch Module: Applies subtle glitch effects to specific elements */
  const GlitchModule = (function () {
    function init() {
      const subtleGlitchConfig = {
        playMode: 'hover',
        createContainers: true,
        hideOverflow: false,
        timing: { duration: 600, iterations: 1 },
        glitchTimeSpan: { start: 0.2, end: 0.5 },
        shake: { velocity: 2, amplitudeX: 0.1, amplitudeY: 0.1 },
        slice: { count: 2, velocity: 5, minHeight: 0.01, maxHeight: 0.03, hueRotate: true },
      };
      // Apply glitch only to elements with the class "glitch-target"
      document.querySelectorAll('.glitch-target').forEach((el) => {
        PowerGlitch.glitch(el, subtleGlitchConfig);
      });
    }
    return { init };
  })();

  // Initialize modules and audio after DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    File
    // Initialize all modules
    FileModule.init();
    DockModule.init();
    ClockModule.init();
    InteractionModule.init();
    GlitchModule.init();
  });

  function closeFile(winId) {
    const win = $(winId);
    if (win) win.remove();
  }

  function init() {
    document.addEventListener('click', function (e) {
      if (e.target.matches('.tui-file')) {
        const fileKey = e.target.getAttribute('data-file');
        openFile(fileKey);
      }
      if (e.target.matches('button[data-close]')) {
        closeFile(e.target.getAttribute('data-close'));
      }
    });
  }

  return { init };
})();

/* Dock Module: Opens tools from the dock */
const DockModule = (function () {
  function openTool(tool) {
    alert('Opening ' + tool);
  }
  function init() {
    document.querySelectorAll('.dock-item').forEach((item) => {
      item.addEventListener('click', () => {
        const tool = item.getAttribute('data-tool');
        openTool(tool);
      });
    });
  }
  return { init };
})();

/* Clock Module: Updates the clock display every second */
const ClockModule = (function () {
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    $('clock').textContent = "Current Time: " + hours + ":" + minutes + ":" + seconds;
  }
  function init() {
    updateTime();
    setInterval(updateTime, 1000);
  }
  return { init };
})();

/* Interaction Module: Enables dragging and resizing of windows using requestAnimationFrame */
const InteractionModule = (function () {
  let dragItem = null,
    offsetX,
    offsetY;
  let resizeItem = null,
    startWidth,
    startHeight,
    startMouseX,
    startMouseY;
  let animationFrame;

  function onMouseDown(e) {
    const windowEl = e.target.closest('.tui-window');
    if (windowEl) {
      const rect = windowEl.getBoundingClientRect();
      // Check if resizing (bottom-right corner)
      if (e.clientX > rect.right - 20 && e.clientY > rect.bottom - 20) {
        resizeItem = windowEl;
        startWidth = rect.width;
        startHeight = rect.height;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        e.preventDefault();
      } else {
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        dragItem = windowEl;
      }
    }
  }

  function onMouseMove(e) {
    if (dragItem || resizeItem) {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        if (dragItem && !resizeItem) {
          dragItem.style.left = (e.clientX - offsetX) + 'px';
          dragItem.style.top = (e.clientY - offsetY) + 'px';
        }
        if (resizeItem) {
          const newWidth = startWidth + (e.clientX - startMouseX);
          const newHeight = startHeight + (e.clientY - startMouseY);
          if (newWidth > 200) resizeItem.style.width = newWidth + 'px';
          if (newHeight > 150) resizeItem.style.height = newHeight + 'px';
        }
      });
    }
  }

  function onMouseUp() {
    dragItem = null;
    resizeItem = null;
  }

  function init() {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  return { init };
})();

/* Glitch Module: Applies subtle glitch effects to specific elements */
const GlitchModule = (function () {
  function init() {
    const subtleGlitchConfig = {
      playMode: 'hover',
      createContainers: true,
      hideOverflow: false,
      timing: { duration: 600, iterations: 1 },
      glitchTimeSpan: { start: 0.2, end: 0.5 },
      shake: { velocity: 2, amplitudeX: 0.1, amplitudeY: 0.1 },
      slice: { count: 2, velocity: 5, minHeight: 0.01, maxHeight: 0.03, hueRotate: true },
    };
    // Apply glitch only to elements with the class "glitch-target"
    document.querySelectorAll('.glitch-target').forEach((el) => {
      PowerGlitch.glitch(el, subtleGlitchConfig);
    });
  }
  return { init };
})();

// Initialize modules and audio after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Create a button to start audio to avoid autoplay restrictions
  const startAudioButton = document.createElement('button');
  startAudioButton.textContent = "Start Humming";
  startAudioButton.className = "tui-button";
  startAudioButton.setAttribute("aria-label", "Start system humming sound");
  document.body.appendChild(startAudioButton);

  startAudioButton.addEventListener('click', () => {
    const hummingSound = new Audio('/sound/computer-humming-236384.mp3');
    hummingSound.volume = 1;
    hummingSound.loop = true;
    hummingSound.play().catch(console.error);
    // Hide the button once the audio starts
    startAudioButton.style.display = 'none';
  });

  startAudioButton.click();

  // Initialize all modules
  FileModule.init();
  DockModule.init();
  ClockModule.init();
  InteractionModule.init();
  GlitchModule.init();
});
