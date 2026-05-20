// js/main.js - FsMail Core Autonomous Integration Matrix
// Author: FatahShaheen OS (Paradox Studio)

const HF_SERVER_URL = "https://paradoxstudio9807-fsmail.hf.space";

// 🎯 1. UNIVERSAL IN-WEBSITE CONSOLE LOGGING & TOAST INFRASTRUCTURE
function printFsLog(message, type = 'info') {
    const consoleBox = document.getElementById('fsmail-inline-console');
    const toastHolder = document.getElementById('toast-matrix-holder');
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Print to Standard Developer Web Console Tool
    if (type === 'error') console.error(`[FsMail Error] ${message}`);
    else if (type === 'success') console.log(`%c[FsMail Success] ${message}`, "color: #10b981; font-weight: bold;");
    else console.log(`[FsMail ${type.toUpperCase()}] ${message}`);

    // Render inside the Bottom-Left App Web Terminal Frame
    if (consoleBox) {
        if (consoleBox.innerText.includes('Standing by for secure')) consoleBox.innerHTML = '';
        const logLine = document.createElement('p');
        
        if (type === 'error') logLine.className = "text-red-400 mb-0.5 animate-pulse";
        else if (type === 'success') logLine.className = "text-emerald-400 mb-0.5";
        else if (type === 'warn') logLine.className = "text-amber-400 mb-0.5";
        else logLine.className = "text-blue-400 mb-0.5";

        logLine.innerText = `[${timestamp}] ${message}`;
        consoleBox.appendChild(logLine);
        consoleBox.scrollTop = consoleBox.scrollHeight;
    }

    // Spawn Self-Destructive UI Toast Messages at Top-Right
    if (toastHolder) {
        const toast = document.createElement('div');
        toast.className = "pointer-events-auto bg-slate-900 border border-slate-800 p-3 rounded shadow-2xl flex items-center justify-between gap-4 text-xs font-medium border-l-4 transition-all duration-300 transform translate-y-2 opacity-0";
        
        if (type === 'error') toast.classList.add('border-l-red-500');
        else if (type === 'success') toast.classList.add('border-l-emerald-500');
        else if (type === 'warn') toast.classList.add('border-l-amber-500');
        else toast.classList.add('border-l-blue-500');

        toast.innerHTML = `
            <div class="text-slate-200 font-sans">${message}</div>
            <button onclick="this.parentElement.remove()" class="text-slate-500 hover:text-slate-300 font-mono text-[10px]">&times;</button>
        `;

        toastHolder.appendChild(toast);
        setTimeout(() => { toast.classList.remove('translate-y-2', 'opacity-0'); }, 10);

        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y--2');
            setTimeout(() => { toast.remove(); }, 300);
        }, 4000);
    }
}

// 🎯 2. HACKER LOADING TERMINAL GRAPHIC MODULE (auth.html)
function triggerHackerLoading() {
    const logContainer = document.getElementById('terminal-log');
    const progressBar = document.getElementById('progress-bar');
    const loaderModule = document.getElementById('loader-module');
    const loginNode = document.getElementById('login-node');

    if(!logContainer) return;

    const hackerSteps = [
        "SYSTEM: Initializing FsMail cryptographic runtime environment...",
        "NETWORK: Pinging independent proxy node arrays...",
        "SECURITY: Hardening secure local boundary data matrix...",
        "API: Establishing tunnel socket with Hugging Face python cluster...",
        "STATUS: Handshake locked. Extracting secure login terminal layout..."
    ];

    let currentIdx = 0;
    logContainer.innerHTML = ''; 

    const loggingStream = setInterval(() => {
        if (currentIdx < hackerSteps.length) {
            const line = document.createElement('p');
            line.className = "text-blue-400 font-mono text-[11px] mb-1 tracking-wide animate-pulse";
            line.innerText = `[>] ${hackerSteps[currentIdx]}`;
            logContainer.appendChild(line);
            logContainer.scrollTop = logContainer.scrollHeight;

            progressBar.style.width = `${(currentIdx + 1) * 20}%`;
            currentIdx++;
        } else {
            clearInterval(loggingStream);
            setTimeout(() => {
                loaderModule.classList.add('hidden');
                loginNode.classList.remove('hidden');
                setTimeout(() => { loginNode.classList.remove('opacity-0'); }, 50);
                printFsLog("Secure entry interface deployed successfully.", "info");
            }, 500);
        }
    }, 400);
}

// 🎯 3. PERSISTENT SYSTEM RETRIEVAL LAYER (index.html)
function checkActiveSession() {
    const activeUser = localStorage.getItem('fs_session_user');
    printFsLog("Running internal cache integrity verification checks...", "info");
    
    setTimeout(() => {
        if (activeUser && activeUser.includes('@')) {
            printFsLog(`Session token verified active for user node: ${activeUser}`, "success");
            window.location.href = "mail.html";
        } else {
            printFsLog("Authorization context token null or corrupted.", "warn");
            window.location.href = "auth.html";
        }
    }, 1200);
}

// 🎯 4. CRYPTOGRAPHIC CREDENTIALS MANAGER (auth.html Validation)
async function handleAuthAction(e, type) {
    e.preventDefault();
    
    if (type === 'signup') {
        const username = document.getElementById('su-username').value.trim().toLowerCase();
        const pass = document.getElementById('su-password').value;
        const targetEmail = `${username}@fatahshaheen.duckdns.org`;

        printFsLog(`Dispatching allocation command parameters for handle: ${targetEmail}`, "info");

        try {
            const res = await fetch(`${HF_SERVER_URL}/api/v1/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: targetEmail, password: pass })
            });
            
            if (!res.ok) throw new Error(`HTTP network fault block code: ${res.status}`);
            const data = await res.json();
            
            if(data.success) {
                printFsLog("Identity token generated cleanly inside DB cluster. Onboarding mail pushed.", "success");
                toggleAuth('login');
            } else {
                // Catches Username Already Taken and outputs cleanly to custom web console box
                printFsLog(`Registry Rejected: ${data.message}`, "error");
            }
        } catch (err) {
            printFsLog(`Identity creation failed: Python server offline or blocked.`, "error");
        }
    } 
    
    else if (type === 'login') {
        const email = document.getElementById('lg-email').value.trim().toLowerCase();
        const pass = document.getElementById('lg-password').value;

        printFsLog("Syncing key signatures against remote master database cluster...", "info");

        try {
            const res = await fetch(`${HF_SERVER_URL}/api/v1/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: pass })
            });
            
            if (!res.ok) throw new Error(`HTTP login fault code: ${res.status}`);
            const data = await res.json();
            
            if(data.success) {
                printFsLog("Authentication valid. Mapping central operational workspace...", "success");
                localStorage.setItem('fs_session_user', email);
                window.location.href = "mail.html";
            } else {
                printFsLog(`Access Blocked: ${data.message}`, "error");
            }
        } catch (err) {
            printFsLog("Security pipeline authentication transaction failed.", "error");
        }
    }
}

// 🎯 5. DYNAMIC DATASTREAM PARSER WITH AUTO-PROFILE GENERATION (mail.html)
async function fetchAndRenderMailbox(targetFolder = 'inbox') {
    const user = localStorage.getItem('fs_session_user');
    if(!user) { window.location.href = "auth.html"; return; }
    
    if(document.getElementById('user-meta')) document.getElementById('user-meta').innerText = user;

    const stream = document.getElementById('mail-stream');
    if(!stream) return;

    printFsLog(`Pulling data stream from segment node folder: /${targetFolder}`, "info");

    try {
        const res = await fetch(`${HF_SERVER_URL}/api/v1/mailbox?email=${user}`);
        if (!res.ok) throw new Error(`Data transmission fault code: ${res.status}`);
        
        const mList = await res.json();
        stream.innerHTML = '';

        let filtered = mList.filter(m => m.folder === targetFolder);
        if(targetFolder === 'allmail') filtered = mList;
        if(targetFolder === 'important') filtered = mList.filter(m => m.important);

        if(filtered.length === 0) {
            stream.innerHTML = `<div class="text-slate-600 text-xs p-16 text-center font-mono select-none">No digital data packets stored inside this location directory.</div>`;
            printFsLog(`Segment folder /${targetFolder} empty.`, "warn");
            return;
        }

        filtered.forEach(mail => {
            const item = document.createElement('div');
            item.className = "flex items-center justify-between p-3.5 border-b border-slate-900 hover:bg-slate-900/40 cursor-pointer transition text-sm select-none";
            
            // Redirects straight to seemail.html on user tap activation
            item.onclick = () => {
                localStorage.setItem('fs_active_mail_packet', JSON.stringify(mail));
                window.location.href = "seemail.html";
            };

            // Generate Professional Initials Placeholder Icon matching clean corporate UI spec
            const firstChar = mail.from_name ? mail.from_name.charAt(0).toUpperCase() : 'U';
            
            item.innerHTML = `
                <div class="flex items-center gap-4 truncate w-11/12">
                    <div class="w-7 h-7 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold font-mono tracking-tight shrink-0">
                        ${firstChar}
                    </div>
                    <div class="w-44 font-semibold text-slate-300 truncate">${mail.from_name}</div>
                    <div class="truncate flex items-center gap-2">
                        <span class="text-slate-200 font-medium">${mail.subject}</span>
                        <span class="text-slate-600">—</span>
                        <span class="text-slate-500 truncate">${mail.body}</span>
                    </div>
                </div>
                <div class="text-[11px] font-mono text-slate-500 whitespace-nowrap">${mail.time}</div>
            `;
            stream.appendChild(item);
        });
        
        printFsLog(`Decrypted and mounted ${filtered.length} active data elements inside pipeline view.`, "success");
    } catch (err) {
        printFsLog("Directory parsing collapsed. Connection endpoint dropped by python host.", "error");
        stream.innerHTML = `<div class="text-red-400 text-xs p-6 text-center font-mono">Sync failure to core cluster.</div>`;
    }
}

// 🎯 6. METADATA PROFILE INSPECTOR CONFIGURATION (seemail.html)
function inspectMailPayload() {
    const data = localStorage.getItem('fs_active_mail_packet');
    if(!data) { window.location.href = "mail.html"; return; }

    const mail = JSON.parse(data);
    printFsLog(`Reading metadata cargo stream logs for ID packet: ${mail.id}`, "info");

    document.getElementById('view-subject').innerText = mail.subject;
    document.getElementById('view-from-name').innerText = mail.from_name;
    document.getElementById('view-from-email').innerText = `<${mail.from_email}>`;
    document.getElementById('view-to').innerText = mail.to_email;
    document.getElementById('view-meta-time').innerText = mail.time;
    document.getElementById('view-body').innerText = mail.body;

    // Render Dynamic Profile Initial Badge into seemail.html layout view
    const initialBadge = document.getElementById('view-profile-badge');
    if (initialBadge) {
        initialBadge.innerText = mail.from_name ? mail.from_name.charAt(0).toUpperCase() : 'U';
    }

    localStorage.setItem('fs_reply_email', mail.from_email);
    localStorage.setItem('fs_reply_subject', mail.subject);
}

function initReplyRoute() {
    window.location.href = "sendmail.html?mode=reply";
}

// 🎯 7. OUTBOUND DATA TRANSIT COMPILER (sendmail.html Validation)
function checkPrepopulatedParams() {
    const query = new URLSearchParams(window.location.search);
    if(query.get('mode') === 'reply') {
        document.getElementById('field-to').value = localStorage.getItem('fs_reply_email') || "";
        document.getElementById('field-subject').value = `Re: ${localStorage.getItem('fs_reply_subject') || ""}`;
    }
}

async function executeOutboundTransmission(e) {
    e.preventDefault();
    const to = document.getElementById('field-to').value.trim();
    const subject = document.getElementById('field-subject').value.trim();
    const body = document.getElementById('field-body').value.trim();
    const currentUser = localStorage.getItem('fs_session_user');

    // Simple pattern tracking validator
    if (!to.includes('@')) {
        printFsLog("Transmission aborted: Intended recipient string lacks domain coordinates mapping.", "error");
        return;
    }

    printFsLog(`Compressing text cargo burst targeting transmission coordinates: ${to}`, "info");

    try {
        const response = await fetch(`${HF_SERVER_URL}/api/v1/dispatch`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from_email: currentUser, to: to, subject: subject, body: body })
        });
        
        if (!response.ok) throw new Error(`HTTP dispatch protocol failure code: ${response.status}`);
        const res = await response.json();
        
        if(res.success) {
            printFsLog("Data packet successfully injected into the external network cluster.", "success");
            window.location.href = "mail.html";
        }
    } catch (err) {
        printFsLog("Outbound route failed: Data packet drop enforced by security parameters.", "error");
    }
}

// 🎯 8. SECURITY CACHE AND ENVIRONMENT TERMINATION CONTROLLER
function clearSession() {
    printFsLog("Wiping context tokens from memory cache... Disconnecting terminal node.", "warn");
    localStorage.removeItem('fs_session_user');
    localStorage.removeItem('fs_active_mail_packet');
    localStorage.removeItem('fs_reply_email');
    localStorage.removeItem('fs_reply_subject');
    window.location.href = "auth.html";
}
