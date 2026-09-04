// @ts-ignore
import init, { run_cmd } from './pkg/rust_core.js';
async function bootstrapTerminal() {
    await init();
    const cliInput = document.getElementById('cli-input');
    const terminalScreen = document.getElementById('terminal-screen');
    const usernameElement = document.getElementById('username');
    if (!cliInput || !terminalScreen || !usernameElement)
        return;
    let currentUsername = usernameElement.textContent || "guest";
    const appendOutput = (text) => {
        const pre = document.createElement('pre');
        pre.textContent = text;
        pre.style.margin = "0 0 15px 0";
        pre.style.whiteSpace = "pre-wrap";
        terminalScreen.appendChild(pre);
    };
    appendOutput("NEUTRAL.exe\nKernel Loaded Successfully.\nStatus: Calm.\nEnter 'help' for available system diagnostics.");
    document.addEventListener('click', () => cliInput.focus());
    cliInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const rawValue = cliInput.value;
            const cleanValue = rawValue.trim();
            if (cleanValue === '')
                return;
            if (cleanValue.toLowerCase() === 'clear') {
                terminalScreen.innerHTML = "";
                cliInput.value = "";
                return;
            }
            appendOutput(`${currentUsername}@neutral:~!$ ${rawValue}`);
            let systemResult = run_cmd(cleanValue);
            if (systemResult.startsWith("__SUCCESS:CHANGED_NAME:")) {
                const parsedNewName = systemResult.split("__SUCCESS:CHANGED_NAME:")[1];
                currentUsername = parsedNewName;
                usernameElement.textContent = parsedNewName;
                systemResult = `User identity successfully updated to: ${parsedNewName}`;
            }
            appendOutput(systemResult);
            cliInput.value = "";
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}
bootstrapTerminal();
