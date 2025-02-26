const GlitchModule = (function () {
    function init() {
        const subtleGlitchConfig = {
            playMode: 'hover',
            createContainers: true,
            hideOverflow: false,
            timing: { duration: 600, iterations: 1 },
            glitchTimeSpan: { start: 0.2, end: 0.5 },
            shake: { velocity: 10, amplitudeX: 0.1, amplitudeY: 0.1 },
            slice: { count: 2, velocity: 5, minHeight: 0.01, maxHeight: 0.05, hueRotate: false },
        };
        document.querySelectorAll('body *:not(script):not(style)').forEach(el => {
            PowerGlitch.glitch(el, subtleGlitchConfig);
        });
    }
    return { init };
})();
window.onload = function () {
    GlitchModule.init();
};

const loadingPhrases = [
    "Compiling data", "Decrypting packets", "Uploading fragments", "Syncing nodes", "Analyzing code",
    "Processing signals", "Rebuilding indexes", "Generating keys", "Optimizing flow", "Retrieving clusters",
    "Allocating bandwidth", "Restructuring pathways", "Fetching modules", "Parsing input", "Executing scripts",
    "Cleaning cache", "Resolving dependencies", "Bootstrapping environment", "Establishing connection", "Calibrating sensors"
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * loadingPhrases.length);
    return loadingPhrases[randomIndex] + "...";
}

const schizopoastingMessages = [
    "User agent: Unknown source. Proceed with caution.",
    "Exploit chain detected in the last 24 hours.",
    "AES256 cipher failure: bypass active.",
    "DNS poisoning detected. Attempting mitigation.",
    "Payload delivered. Initiating sequence.",
    "Alert: Decryption unsuccessful. Manual intervention required.",
    "SQL injection vulnerability identified.",
    "MitM attack inbound. Signal lost.",
    "Port scan in progress. Access denied.",
    "System vulnerability exploitation detected.",
    "Keylogger engaged. Surveillance active.",
    "Network integrity compromised. Re-authentication required.",
    "Buffer overflow attack imminent. Preventative measures engaged."
];

function getRandomSchizopoastingMessage() {
    const randomIndex = Math.floor(Math.random() * schizopoastingMessages.length);
    return schizopoastingMessages[randomIndex];
}

const asciiLogos = [
    `
⎛ ⎞⎛ ⎞⎛ ⎞
⎝◉⎠⎝◉⎠⎝_⎠
PANIC!
    `,
    `
/\\_/\\
((@v@))
)   (
(__|__)
    `,
    `
▄▄▄▄▄▄▄
█ò╭╮ó █
█ ╰┻╯ █
█▄▄▄▄▄█
    `,
    `
/^---^\\
/ ⌐■-■  \\
|      |
\\  --  /
\\___/
    `,
    `
╭━┳━╭━╭━╮
┃┈┈┈┣▅╋▅┫┃
┃┈┃┈╰━╰━━━
╰┳╯┈┈┈┈┈┈┈
╰━━┳━━━━━╯
    `,
    `
▄█▀█▄
███▀███
▀█▄█▀
ERROR
    `
];

function getRandomAsciiLogo() {
    const randomIndex = Math.floor(Math.random() * asciiLogos.length);
    return asciiLogos[randomIndex];
}

let windowCount = 0;
let zIndexCounter = 1000;
const maxWindows = 12;

function createRandomWindow() {
    if (windowCount >= maxWindows) return;
    windowCount++;

    const windowElement = document.createElement('div');
    windowElement.className = 'tui-fieldset blue-168';

    // Random size variations (increased by 10%)
    const sizes = [
        { width: '220px', height: '198px' },  // Small square
        { width: '308px', height: '176px' },  // Wide rectangle
        { width: '198px', height: '264px' },  // Tall rectangle
        { width: '264px', height: '220px' },  // Medium rectangle
        { width: '176px', height: '176px' }   // Tiny square
    ];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    // Position window
    const padding = 20;
    // Increase window sizes by 20% to better fit content
    const adjustedWidth = parseInt(randomSize.width) * 1.2;
    const adjustedHeight = parseInt(randomSize.height) * 1.2;
    const maxX = window.innerWidth - adjustedWidth - padding;
    const maxY = window.innerHeight - adjustedHeight - padding;
    const posX = Math.max(padding, Math.floor(Math.random() * maxX));
    const posY = Math.max(padding, Math.floor(Math.random() * maxY));

    windowElement.style.position = 'absolute';
    windowElement.style.left = posX + 'px';
    windowElement.style.top = posY + 'px';
    windowElement.style.width = adjustedWidth + 'px';
    windowElement.style.height = adjustedHeight + 'px';
    windowElement.style.zIndex = zIndexCounter++;
    windowElement.style.backgroundColor = 'black';
    windowElement.style.cursor = 'move';
    windowElement.style.overflow = 'hidden';

    // Create header as a legend
    const header = document.createElement('legend');
    header.className = 'tui-bg-blue-168';
    header.textContent = 'Alert';
    header.style.cursor = 'move';
    header.style.width = '100%';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.userSelect = 'none';
    header.style.fontSize = '0.9em';

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'tui-button red-168';
    closeButton.textContent = 'X';
    closeButton.style.marginLeft = 'auto';
    closeButton.style.padding = '0 4px';

    const closeSound = new Audio('/sound/Close.wav');close
    
    closeButton.onclick = function(){close
        closeSound.volume = 1;
        closeSound.play();
    }
    header.appendChild(closeButton);
    // Create content with smaller text
    const content = document.createElement('div');
    content.style.textAlign = 'center';
    content.style.fontSize = '0.6em';
    content.innerHTML = `
        <pre class="ascii-art">${getRandomAsciiLogo()}</pre>
        <div class="tui-fieldset red-168" style="padding: 5px; margin: 5px;">
            <legend class="tui-bg-red-168" style="font-size: 0.8em;">__ X X X __</legend>
            <p style="margin: 3px 0;">${getRandomSchizopoastingMessage()}</p>
        </div>
    `;

    // Add dragging functionality
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    function dragStart(e) {
        if (e.target === closeButton) return;

        initialX = e.clientX - windowElement.offsetLeft;
        initialY = e.clientY - windowElement.offsetTop;
        isDragging = true;
        windowElement.style.zIndex = zIndexCounter++;
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        currentX = Math.min(Math.max(0, currentX), window.innerWidth - windowElement.offsetWidth);
        currentY = Math.min(Math.max(0, currentY), window.innerHeight - windowElement.offsetHeight);

        windowElement.style.left = currentX + 'px';
        windowElement.style.top = currentY + 'px';
    }

    function dragEnd() {
        isDragging = false;
    }

    // Add event listeners
    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    // Handle close button with destroy animation
    closeButton.addEventListener('click', () => {
        // Apply destroy glitch effect
        PowerGlitch.glitch(windowElement, {
            playMode: 'always',
            timing: { duration: 400, iterations: 1 },
            glitchTimeSpan: { start: 0, end: 1 },
            shake: { velocity: 25, amplitudeX: 0.5, amplitudeY: 0.5 },
            slice: { count: 10, velocity: 15, minHeight: 0.02, maxHeight: 0.15 },
        });

        setTimeout(() => {
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', dragEnd);
            windowElement.remove();
            windowCount--;
        }, 400);
    });

    // Assemble window
    windowElement.appendChild(header);
    windowElement.appendChild(content);
    document.body.appendChild(windowElement);

    // Play error sound immediately
    const errorSound = new Audio('/sound/Error.wav');
    errorSound.volume = 0.35;
    errorSound.play().catch(console.error);

    // Initial creation glitch effect
    PowerGlitch.glitch(windowElement, {
        playMode: 'manual',
        timing: { duration: 600, iterations: 1 },
        glitchTimeSpan: { start: 0, end: 1 },
        shake: { velocity: 15, amplitudeX: 0.2, amplitudeY: 0.2 },
        slice: { count: 5, velocity: 10, minHeight: 0.02, maxHeight: 0.10 },
    });

    // Quick follow-up glitch after 10ms
    setTimeout(() => {
        PowerGlitch.glitch(windowElement, {
            playMode: 'manual',
            timing: { duration: 200, iterations: 1 },
            glitchTimeSpan: { start: 0, end: 1 },
            shake: { velocity: 25, amplitudeX: 0.3, amplitudeY: 0.3 },
            slice: { count: 8, velocity: 15, minHeight: 0.03, maxHeight: 0.12 },
        });
    }, 500);

    // Random delayed intense glitch
    setTimeout(() => {
        const glitchEffects = [
            {
                timing: { duration: 300, iterations: 2 },
                shake: { velocity: 20, amplitudeX: 0.3, amplitudeY: 0.1 },
                slice: { count: 8, velocity: 15, minHeight: 0.02, maxHeight: 0.15 }
            },
            {
                timing: { duration: 500, iterations: 1 },
                shake: { velocity: 10, amplitudeX: 0.4, amplitudeY: 0.4 },
                slice: { count: 4, velocity: 20, minHeight: 0.05, maxHeight: 0.1 }
            },
            {
                timing: { duration: 200, iterations: 3 },
                shake: { velocity: 25, amplitudeX: 0.2, amplitudeY: 0.2 },
                slice: { count: 6, velocity: 8, minHeight: 0.01, maxHeight: 0.08 }
            }
        ];

        const randomEffect = glitchEffects[Math.floor(Math.random() * glitchEffects.length)];
        PowerGlitch.glitch(windowElement, {
            playMode: 'manual',
            timing: randomEffect.timing,
            glitchTimeSpan: { start: 0, end: 1 },
            shake: randomEffect.shake,
            slice: randomEffect.slice
        });
    }, Math.random() * 1000 + 500);

    // Hover glitch effect
    PowerGlitch.glitch(windowElement, {
        playMode: 'hover',
        timing: { duration: 400, iterations: 1 },
        glitchTimeSpan: { start: 0.2, end: 0.4 },
        shake: { velocity: 8, amplitudeX: 0.05, amplitudeY: 0.05 },
        slice: { count: 3, velocity: 5, minHeight: 0.01, maxHeight: 0.05 }
    });

    // Subtle constant ASCII art glitch
    PowerGlitch.glitch(content.querySelector('.ascii-art'), {
        playMode: 'always',
        timing: { duration: 2000, iterations: Infinity },
        glitchTimeSpan: { start: 0.4, end: 0.6 },
        shake: { velocity: 3, amplitudeX: 0.02, amplitudeY: 0.02 },
        slice: { count: 2, velocity: 5, minHeight: 0.01, maxHeight: 0.05 }
    });
}

let progress = 0;
let isLoading = false;
let loadingInterval;

function updateProgress() {
    // Clear any existing interval
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }

    // Set up new loading interval
    loadingInterval = setInterval(() => {
        if (!isLoading) {
            clearInterval(loadingInterval);
            return;
        }

        // Increment progress
        progress += 0.25;
        document.getElementById("progress-bar").style.width = progress + "%";

        // Create windows based on progress milestones
        switch (progress) {
            case 20:
                setTimeout(() => {
                    createRandomWindow();
                }, 790);
                break;
            case 40:
                setTimeout(() => {
                    createRandomWindow();
                }, 390);

                setTimeout(() => {
                    createRandomWindow();
                }, 790);
                break;
            case 60:
                setTimeout(() => {
                    createRandomWindow();
                }, 734);
                setTimeout(() => {
                    createRandomWindow();
                }, 390);
                break;
            case 70:
                setTimeout(() => {
                    createRandomWindow();
                }, 1150);

                setTimeout(() => {
                    createRandomWindow();
                }, 790);
                break;
            case 80:
                setTimeout(() => {
                    createRandomWindow();
                }, 333);
                break;
        }

        // Check for completion
        if (progress >= 100) {
            clearInterval(loadingInterval);
            isLoading = false;
            progress = 100;
            document.getElementById("progress-bar").style.width = "100%";

            const button = document.getElementById('action-button');
            button.textContent = 'COMPLETE';
            button.disabled = false;
            button.onclick = () => {
                window.location.href = 'main.html';
            };
        }
    }, 100); // Update every 100ms for smooth progress
}

function startLoadingProcess() {
    const button = document.getElementById('action-button');
    button.disabled = true;
    button.innerText = "Loading...";

    // Reset progress
    progress = 0;
    isLoading = true;
    document.getElementById("progress-bar").style.width = "0%";

    // Create and display loading message
    const loadingMessage = document.createElement('p');
    loadingMessage.id = 'loading-message';
    loadingMessage.style.marginTop = '10px';
    loadingMessage.innerText = getRandomPhrase();
    button.parentNode.appendChild(loadingMessage);

    // Update loading message periodically
    const messageInterval = setInterval(() => {
        if (!isLoading) {
            clearInterval(messageInterval);
            loadingMessage.remove();
            return;
        }
        loadingMessage.innerText = getRandomPhrase();
    }, 1500);

    // Start progress
    updateProgress();
}

function showBootSequence() {

    const bootScreen = document.createElement('div');
    bootScreen.className = 'boot-screen';

    const logo = document.createElement('pre');
    logo.className = 'boot-logo';
    logo.innerHTML = `<p style="font-size:100px">⚘𓅰⚘<br style="top:20px;"><p style="font-size:30px;">o()xxxx[]{::::::::::::::::::></p>><i style="font-size:18px; font-family:monospace;">LDKS<br>lucky_ducky_silicon</i></p>   
      `;

    const bootText = document.createElement('div');
    bootText.className = 'boot-text';
    bootText.textContent = 'BOOTING SEQUENCE INITIATED...';

    bootScreen.appendChild(logo);
    bootScreen.appendChild(bootText);
    document.body.appendChild(bootScreen);

    // Add boot sequence text updates
    const bootMessages = [
        'INITIALIZING CORE SYSTEMS...',
        'CHECKING MEMORY INTEGRITY...',
        'LOADING KERNEL MODULES...',
        'ESTABLISHING NETWORK PROTOCOLS...',
        'CALIBRATING NEURAL INTERFACE...',
        'ACTIVATING SECURITY PROTOCOLS...',
        'SYSTEM BOOT COMPLETE.'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        if (messageIndex < bootMessages.length) {
            bootText.textContent = bootMessages[messageIndex];
            bootText.style.animation = 'none';
            bootText.offsetHeight; // Trigger reflow
            bootText.style.animation = 'typewriter 0.5s steps(40, end) forwards';
            messageIndex++;
        }
    }, 1400);

    // Remove boot screen after 10 seconds
    setTimeout(() => {

        // Play boot sound
        const bootSound = new Audio('/sound/old-desktop-pc-booting-24280.mp3');
        bootSound.volume = 0.5;
        bootSound.play().catch(console.error);
        bootScreen.style.transition = 'opacity 200ms';
        bootScreen.style.opacity = '0';

        setTimeout(() => {
            bootScreen.remove();
            clearInterval(messageInterval);
            startLoadingProcess();
        }, 500);
    }, 5000);
    const initSound = new Audio("sound/castle-walls-startup-complete-37995.wav");
    initSound.volume = 0.7;
    initSound.play().catch(console.error);
}

// Initialize button click handler
document.getElementById('action-button').addEventListener('click', () => {
    document.getElementById('action-button').disabled = true;
    showBootSequence();
});