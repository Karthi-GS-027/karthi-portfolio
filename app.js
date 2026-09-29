/**
 * Karthi G - Personal Portfolio & Admin System
 * Pure Vanilla JavaScript + Browser localStorage
 * Cost: ₹0 | Deployable on Netlify, Vercel, GitHub Pages
 */

// ============================================================================
// 1. DEFAULT PORTFOLIO DATA (Initial Baseline)
// ============================================================================
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Karthi G",
    title: "Technical Support Engineer | System Administrator | IT Support",
    location: "Bangalore, India",
    relocation: "Open to Malta relocation",
    availability: "Available with 30 days notice",
    email: "karthi.contact3@gmail.com",
    phone: "+91-9361191640",
    linkedin: "https://in.linkedin.com/in/karthi-g17",
    github: "" // Hidden by default if empty
  },
  hero: {
    title: "Karthi G",
    subtitle: "Technical Support Engineer | System Administrator | IT Support",
    description: "IT professional with 3+ years of experience in technical support, system administration, IT infrastructure, troubleshooting, and end-user support. Dedicated to high-uptime system operations, fast ticket resolution, and proactive IT maintenance.",
    location: "Bangalore, India",
    relocation: "Open to Malta relocation",
    availability: "Available with 30 days notice"
  },
  about: {
    summary: "IT professional with 3+ years of experience in technical support, system administration, IT infrastructure, troubleshooting, and end-user support. Experienced in diagnosing and resolving hardware, software, operating system, network, and user-related issues. Proven ability to manage IT systems, provide technical assistance, maintain infrastructure, and support smooth day-to-day IT operations.",
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Primary Domain", value: "IT Support" },
      { label: "Infrastructure", value: "SysAdmin" },
      { label: "Connectivity", value: "Networking" },
      { label: "Diagnostics", value: "Troubleshooting" },
      { label: "Setup Scripts", value: "Automation" }
    ],
    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Tamil", level: "Native / Fluent" },
      { name: "Kannada", level: "Conversational" }
    ]
  },
  skills: [
    // Operating Systems
    { id: "s1", name: "Windows 10", category: "Operating Systems", enabled: true },
    { id: "s2", name: "Windows 11", category: "Operating Systems", enabled: true },
    { id: "s3", name: "Windows Server", category: "Operating Systems", enabled: true },
    // IT Support
    { id: "s4", name: "Desktop Support", category: "IT Support", enabled: true },
    { id: "s5", name: "Technical Troubleshooting", category: "IT Support", enabled: true },
    { id: "s6", name: "End-User Support", category: "IT Support", enabled: true },
    // Microsoft Applications
    { id: "s7", name: "Microsoft Outlook Configuration & Troubleshooting", category: "Microsoft Applications", enabled: true },
    { id: "s8", name: "Microsoft Teams", category: "Microsoft Applications", enabled: true },
    { id: "s9", name: "MS Office", category: "Microsoft Applications", enabled: true },
    // Hardware
    { id: "s10", name: "Desktop", category: "Hardware", enabled: true },
    { id: "s11", name: "Laptop", category: "Hardware", enabled: true },
    { id: "s12", name: "Printer", category: "Hardware", enabled: true },
    { id: "s13", name: "Scanner", category: "Hardware", enabled: true },
    { id: "s14", name: "Peripherals", category: "Hardware", enabled: true },
    // Networking
    { id: "s15", name: "LAN", category: "Networking", enabled: true },
    { id: "s16", name: "WAN", category: "Networking", enabled: true },
    { id: "s17", name: "Wi-Fi", category: "Networking", enabled: true },
    { id: "s18", name: "TCP/IP", category: "Networking", enabled: true },
    { id: "s19", name: "DNS", category: "Networking", enabled: true },
    { id: "s20", name: "DHCP", category: "Networking", enabled: true },
    { id: "s21", name: "Network Troubleshooting", category: "Networking", enabled: true },
    // System Administration
    { id: "s22", name: "User Account Management", category: "System Administration", enabled: true },
    { id: "s23", name: "Software Installation", category: "System Administration", enabled: true },
    { id: "s24", name: "System Configuration", category: "System Administration", enabled: true },
    // Cloud
    { id: "s25", name: "AWS EC2", category: "Cloud", enabled: true },
    { id: "s26", name: "VPC", category: "Cloud", enabled: true },
    { id: "s27", name: "S3", category: "Cloud", enabled: true },
    { id: "s28", name: "IAM", category: "Cloud", enabled: true },
    { id: "s29", name: "CloudWatch", category: "Cloud", enabled: true },
    { id: "s30", name: "Monitoring", category: "Cloud", enabled: true },
    // IT Infrastructure
    { id: "s31", name: "Hardware & Software Maintenance", category: "IT Infrastructure", enabled: true },
    { id: "s32", name: "Asset Management", category: "IT Infrastructure", enabled: true },
    // Troubleshooting
    { id: "s33", name: "Hardware Issues", category: "Troubleshooting", enabled: true },
    { id: "s34", name: "Software Issues", category: "Troubleshooting", enabled: true },
    { id: "s35", name: "OS Issues", category: "Troubleshooting", enabled: true },
    { id: "s36", name: "Network Issues", category: "Troubleshooting", enabled: true },
    { id: "s37", name: "Application Issues", category: "Troubleshooting", enabled: true },
    // Tools
    { id: "s38", name: "Remote Desktop", category: "Tools", enabled: true },
    { id: "s39", name: "Ticketing Tools", category: "Tools", enabled: true }
  ],
  experience: [
    {
      id: "exp1",
      role: "Technical Support Engineer",
      company: "Infiniti Engineers Pvt. Ltd.",
      deployment: "LEOS-ISRO",
      period: "Mar 2026 – Present",
      location: "Bangalore, India",
      isCurrent: true,
      enabled: true,
      responsibilities: [
        "Provide technical support to users for hardware, software, operating system, and connectivity issues.",
        "Troubleshoot and resolve desktop, laptop, printer, network, and peripheral-related problems.",
        "Install, configure, and maintain computers, software applications, and IT equipment.",
        "Assist users with system-related issues and provide timely technical solutions.",
        "Monitor and maintain IT infrastructure to support smooth business operations.",
        "Perform system troubleshooting, maintenance, and basic network support.",
        "Maintain records of IT assets, incidents, and technical issues.",
        "Coordinate with vendors and internal teams for hardware and software-related issues."
      ]
    },
    {
      id: "exp2",
      role: "System Administrator",
      company: "GSSysnet",
      deployment: "Syrmas GS Technology Pvt Ltd",
      period: "Jun 2024 – Mar 2026",
      location: "Bangalore, India",
      isCurrent: false,
      enabled: true,
      responsibilities: [
        "Managed and maintained desktop and IT infrastructure for users.",
        "Installed, configured, and maintained Windows operating systems and software.",
        "Troubleshot hardware, software, network, and system-related issues.",
        "Created and managed user accounts and access permissions.",
        "Performed system maintenance, updates, and troubleshooting.",
        "Supported LAN, Wi-Fi, printers, and other network-connected devices.",
        "Monitored system performance and resolved technical issues.",
        "Assisted users with day-to-day IT support and application-related problems.",
        "Maintained IT assets and supported business operations."
      ]
    },
    {
      id: "exp3",
      role: "Junior IT Technician",
      company: "AptEner Mechatronics Private Limited",
      deployment: "",
      period: "Mar 2023 – May 2024",
      location: "Bangalore, India",
      isCurrent: false,
      enabled: true,
      responsibilities: [
        "Provided first-level technical support to employees.",
        "Installed and configured desktops, laptops, printers, and IT peripherals.",
        "Troubleshot hardware and software issues.",
        "Supported Windows operating systems and common business applications.",
        "Performed preventive maintenance and system checks.",
        "Assisted senior IT staff with IT infrastructure and technical activities.",
        "Maintained IT equipment and supported users with day-to-day technical issues."
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      name: "Automated Software Installation using PowerShell",
      description: "Created PowerShell scripts to automate the installation of 10 commonly used software applications.",
      purpose: "Reduce repetitive manual installation work and improve setup efficiency.",
      problem: "Manual software installation on newly provisioned and reformatted workstations was repetitive, time-consuming, and prone to configuration inconsistencies across systems.",
      solution: "Developed modular PowerShell automation scripts utilizing silent installation flags and unattended parameters (/silent, /qn, /VERYSILENT) with pre-execution checks and logging.",
      result: "Reduced workstation software configuration turnaround time by over 60% and ensured standard, error-free deployment across client machines.",
      technologies: ["PowerShell", "Windows", "Automation", "Silent Installation"],
      githubUrl: "",
      projectUrl: "",
      image: "",
      enabled: true
    }
  ],
  certifications: [
    {
      id: "cert1",
      name: "Technical Support Fundamentals",
      organization: "Google",
      date: "March 2026",
      credentialId: "",
      credentialUrl: "",
      certificateImage: "",
      enabled: true
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "B.Sc Chemistry",
      institution: "Bharathidasan University, Trichy",
      year: "2020",
      description: "Undergraduate degree focusing on analytical methods, laboratory protocols, and structured problem-solving.",
      enabled: true
    },
    {
      id: "edu2",
      degree: "PGDCA – Post Graduate Diploma in Computer Applications",
      institution: "Guru Computers Institution, Kuthalam",
      year: "2022",
      description: "Comprehensive post-graduate diploma covering computer fundamentals, operating systems, networking basics, and software tools.",
      enabled: true
    }
  ],
  strengths: [
    {
      title: "Strong Troubleshooting & Problem-Solving",
      desc: "Methodical diagnostic approach to isolate hardware, OS, network, and application issues rapidly.",
      icon: "wrench"
    },
    {
      title: "User-Centric Communication & Support",
      desc: "Patient, clear verbal and written communication with non-technical end users and cross-functional teams.",
      icon: "users"
    },
    {
      title: "Autonomous & Collaborative Execution",
      desc: "Proven ability to manage tickets independently as well as collaborate closely with senior sysadmins and vendor teams.",
      icon: "shield-check"
    },
    {
      title: "Rapid Learner with Proactive Mindset",
      desc: "Quick to master new IT tools, ticketing platforms, cloud technologies, and operating system updates.",
      icon: "zap"
    }
  ],
  contact: {
    email: "karthi.contact3@gmail.com",
    phone: "+91-9361191640",
    location: "Bangalore, India",
    linkedin: "https://in.linkedin.com/in/karthi-g17",
    github: ""
  },
  cv: {
    path: "assets/KARTHI G-16092026.docx",
    url: "",
    enabled: true
  },
  profilePhoto: "", // Permanent asset: assets/profile.jpg
  settings: {
    adminUsername: "admin",
    adminPassword: "password123",
    sessionTimeoutMinutes: 120,
    theme: "dark"
  }
};

const STORAGE_KEY = "it_portfolio_data_v1";
const AUTH_KEY = "it_portfolio_auth_v1";
const THEME_KEY = "it_portfolio_theme";

// ============================================================================
// 2. DATA MANAGEMENT (Storage, Validation, Recovery)
// ============================================================================
function getPortfolioData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      savePortfolioData(DEFAULT_PORTFOLIO_DATA);
      return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }
    const parsed = JSON.parse(raw);
    // Gracefully merge with defaults in case of missing keys
    return {
      profile: { ...DEFAULT_PORTFOLIO_DATA.profile, ...(parsed.profile || {}) },
      hero: { ...DEFAULT_PORTFOLIO_DATA.hero, ...(parsed.hero || {}) },
      about: { ...DEFAULT_PORTFOLIO_DATA.about, ...(parsed.about || {}) },
      skills: Array.isArray(parsed.skills) ? parsed.skills : DEFAULT_PORTFOLIO_DATA.skills,
      experience: Array.isArray(parsed.experience) ? parsed.experience : DEFAULT_PORTFOLIO_DATA.experience,
      projects: Array.isArray(parsed.projects) ? parsed.projects : DEFAULT_PORTFOLIO_DATA.projects,
      certifications: Array.isArray(parsed.certifications) ? parsed.certifications : DEFAULT_PORTFOLIO_DATA.certifications,
      education: Array.isArray(parsed.education) ? parsed.education : DEFAULT_PORTFOLIO_DATA.education,
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths : DEFAULT_PORTFOLIO_DATA.strengths,
      contact: { ...DEFAULT_PORTFOLIO_DATA.contact, ...(parsed.contact || {}) },
      cv: { ...DEFAULT_PORTFOLIO_DATA.cv, ...(parsed.cv || {}) },
      profilePhoto: parsed.profilePhoto || "",
      settings: { ...DEFAULT_PORTFOLIO_DATA.settings, ...(parsed.settings || {}) }
    };
  } catch (err) {
    console.warn("Storage error or corrupted data. Recovering with default data:", err);
    savePortfolioData(DEFAULT_PORTFOLIO_DATA);
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }
}

function savePortfolioData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Failed to save portfolio data to localStorage:", err);
    showToast("Storage quota exceeded or browser restriction.", "error");
    return false;
  }
}

// Fallback SVG avatar placeholder when profile.jpg is missing
function getSvgAvatarPlaceholder() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="50%" stop-color="#1e293b" />
        <stop offset="100%" stop-color="#1e3a8a" />
      </linearGradient>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#60a5fa" />
      </linearGradient>
    </defs>
    <circle cx="120" cy="120" r="116" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="4"/>
    <circle cx="120" cy="95" r="42" fill="#334155" stroke="#475569" stroke-width="2"/>
    <path d="M55 200 C55 155, 85 145, 120 145 C155 145, 185 155, 185 200 Z" fill="#334155" stroke="#475569" stroke-width="2"/>
    <text x="120" y="103" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#93c5fd" text-anchor="middle">KG</text>
    <rect x="65" y="180" width="110" height="24" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
    <text x="120" y="196" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="1">IT SUPPORT</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Permanent Public Profile Photo: Always loads ./assets/profile.jpg
function getEffectiveProfilePhoto() {
  return "./assets/profile.jpg";
}

function getCvUrl(data) {
  if (data && data.cv) {
    if (data.cv.url && data.cv.url.trim() !== "") return data.cv.url;
    if (data.cv.path && data.cv.path.trim() !== "") return data.cv.path;
  }
  return "assets/KARTHI G-16092026.docx";
}

// ============================================================================
// 3. TOAST NOTIFICATIONS & UI FEEDBACK
// ============================================================================
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  const colors = {
    success: "bg-emerald-600 text-white border-emerald-500",
    error: "bg-red-600 text-white border-red-500",
    warning: "bg-amber-600 text-white border-amber-500",
    info: "bg-blue-600 text-white border-blue-500"
  };

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ"
  };

  toast.className = `pointer-events-auto px-4 py-3 rounded-lg shadow-xl text-sm font-medium border flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 ${colors[type] || colors.info}`;
  toast.innerHTML = `<span class="text-base font-bold">${icons[type] || "•"}</span><span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// 4. THEME MANAGEMENT (Light / Dark)
// ============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(savedTheme);
  
  const toggles = document.querySelectorAll(".theme-toggle-btn");
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  });
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcons(theme);
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll(".theme-toggle-icon");
  icons.forEach(icon => {
    if (theme === "dark") {
      icon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    } else {
      icon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
  });
}

// ============================================================================
// 5. PUBLIC PORTFOLIO RENDERING (index.html)
// ============================================================================
function renderPublicPortfolio() {
  const data = getPortfolioData();
  const cvUrl = getCvUrl(data);
  const cvEnabled = data.cv && data.cv.enabled !== false;

  // 1. Navigation & Brand
  const navBrand = document.getElementById("nav-brand-name");
  if (navBrand) navBrand.textContent = data.profile.name;

  // CV Buttons
  const cvButtons = document.querySelectorAll(".cv-download-link");
  cvButtons.forEach(btn => {
    if (!cvEnabled) {
      btn.classList.add("hidden");
    } else {
      btn.classList.remove("hidden");
      btn.setAttribute("href", cvUrl);
      btn.setAttribute("target", "_blank");
    }
  });

  // 2. Hero Section
  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = data.hero.title || data.profile.name;

  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = data.hero.subtitle || data.profile.title;

  const heroDesc = document.getElementById("hero-description");
  if (heroDesc) heroDesc.textContent = data.hero.description || data.about.summary;

  const heroLocation = document.getElementById("hero-location");
  if (heroLocation) heroLocation.textContent = data.hero.location || data.profile.location;

  const heroRelocation = document.getElementById("hero-relocation");
  if (heroRelocation) heroRelocation.textContent = data.hero.relocation || data.profile.relocation;

  const heroAvailability = document.getElementById("hero-availability");
  if (heroAvailability) heroAvailability.textContent = data.hero.availability || data.profile.availability;

  // Profile Image - Always load permanent public asset
  const heroImg = document.getElementById("hero-profile-img");
  if (heroImg) {
    heroImg.src = "./assets/profile.jpg";
    heroImg.onerror = null;
  }

  // Hero LinkedIn
  const heroLinkedin = document.getElementById("hero-linkedin-link");
  if (heroLinkedin) {
    if (data.profile.linkedin) {
      heroLinkedin.href = data.profile.linkedin;
      heroLinkedin.classList.remove("hidden");
    } else {
      heroLinkedin.classList.add("hidden");
    }
  }

  // Hero GitHub
  const heroGithub = document.getElementById("hero-github-link");
  if (heroGithub) {
    if (data.profile.github && data.profile.github.trim() !== "") {
      heroGithub.href = data.profile.github;
      heroGithub.classList.remove("hidden");
    } else {
      heroGithub.classList.add("hidden");
    }
  }

  // 3. About Section
  const aboutSummary = document.getElementById("about-summary-text");
  if (aboutSummary) aboutSummary.textContent = data.about.summary;

  const statsContainer = document.getElementById("about-stats-container");
  if (statsContainer && Array.isArray(data.about.stats)) {
    statsContainer.innerHTML = data.about.stats.map(st => `
      <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm text-center">
        <p class="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">${escapeHtml(st.value)}</p>
        <p class="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mt-1">${escapeHtml(st.label)}</p>
      </div>
    `).join("");
  }

  const langContainer = document.getElementById("about-languages-container");
  if (langContainer && Array.isArray(data.about.languages)) {
    langContainer.innerHTML = data.about.languages.map(l => `
      <div class="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
        <span class="font-medium text-slate-800 dark:text-slate-200">${escapeHtml(l.name)}</span>
        <span class="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium">${escapeHtml(l.level)}</span>
      </div>
    `).join("");
  }

  // 4. Skills Section
  renderSkillsSection(data.skills);

  // 5. Experience Section
  renderExperienceSection(data.experience);

  // 6. Projects Section
  renderProjectsSection(data.projects);

  // 7. Certifications Section
  renderCertificationsSection(data.certifications);

  // 8. Education Section
  renderEducationSection(data.education);

  // 9. Key Strengths Section
  renderStrengthsSection(data.strengths);

  // 10. Contact Section
  renderContactSection(data);

  // Render Lucide icons if library available
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// Render Skills Grouped by Category with Filter Tabs
function renderSkillsSection(skills) {
  const container = document.getElementById("skills-container");
  const filterTabs = document.getElementById("skills-filter-tabs");
  if (!container) return;

  const enabledSkills = (skills || []).filter(s => s.enabled !== false);
  const categories = ["All", ...new Set(enabledSkills.map(s => s.category))];

  // Render filter buttons if element exists
  if (filterTabs) {
    filterTabs.innerHTML = categories.map(cat => `
      <button data-cat="${escapeHtml(cat)}" class="skill-tab-btn px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${cat === 'All' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
        ${escapeHtml(cat)}
      </button>
    `).join("");

    filterTabs.querySelectorAll(".skill-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterTabs.querySelectorAll(".skill-tab-btn").forEach(b => {
          b.className = "skill-tab-btn px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";
        });
        btn.className = "skill-tab-btn px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 bg-blue-600 text-white shadow-md shadow-blue-500/20";
        filterSkillsDisplay(btn.getAttribute("data-cat"));
      });
    });
  }

  // Group skills by category for presentation
  const grouped = {};
  enabledSkills.forEach(s => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  const categoryIcons = {
    "Operating Systems": "monitor",
    "IT Support": "headset",
    "Microsoft Applications": "layout-grid",
    "Hardware": "cpu",
    "Networking": "wifi",
    "System Administration": "server",
    "Cloud": "cloud",
    "IT Infrastructure": "database",
    "Troubleshooting": "wrench",
    "Tools": "tool"
  };

  container.innerHTML = Object.keys(grouped).map(cat => `
    <div class="skill-category-card p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-200" data-category="${escapeHtml(cat)}">
      <div class="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/50">
        <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
          <i data-lucide="${categoryIcons[cat] || 'check-circle'}" class="w-5 h-5"></i>
        </div>
        <div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">${escapeHtml(cat)}</h3>
          <span class="text-xs text-slate-500 dark:text-slate-400">${grouped[cat].length} skills</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        ${grouped[cat].map(skill => `
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/40 hover:border-blue-400 transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            ${escapeHtml(skill.name)}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function filterSkillsDisplay(category) {
  const cards = document.querySelectorAll(".skill-category-card");
  cards.forEach(card => {
    if (category === "All" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Render Professional Timeline
function renderExperienceSection(experience) {
  const container = document.getElementById("experience-timeline-container");
  if (!container) return;

  const list = (experience || []).filter(e => e.enabled !== false);
  if (list.length === 0) {
    container.innerHTML = `<p class="text-slate-500 italic">No experience entries available.</p>`;
    return;
  }

  container.innerHTML = list.map((exp, idx) => {
    const isLatest = idx === 0 || exp.isCurrent;
    return `
      <div class="relative pl-8 md:pl-10 pb-10 last:pb-2 group">
        <!-- Vertical connector line -->
        <div class="absolute left-3 top-4 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 group-last:hidden"></div>
        
        <!-- Node indicator -->
        <div class="absolute left-1 top-2 w-5 h-5 rounded-full border-4 ${isLatest ? 'bg-blue-600 border-blue-200 dark:border-blue-900 shadow-lg shadow-blue-500/50 animate-pulse' : 'bg-slate-400 dark:bg-slate-600 border-white dark:border-slate-900'}"></div>

        <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-md transition-all">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-white">${escapeHtml(exp.role)}</h3>
                ${exp.isCurrent ? `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">Current Role</span>` : ""}
              </div>
              <p class="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base mt-0.5">
                ${escapeHtml(exp.company)}
                ${exp.deployment ? `<span class="text-slate-500 dark:text-slate-400"> (Deployment: <strong class="text-slate-700 dark:text-slate-300 font-semibold">${escapeHtml(exp.deployment)}</strong>)</span>` : ""}
              </p>
            </div>
            <div class="flex flex-col md:items-end">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-blue-500"></i>
                ${escapeHtml(exp.period)}
              </span>
              ${exp.location ? `<span class="text-xs text-slate-500 dark:text-slate-400 mt-1">${escapeHtml(exp.location)}</span>` : ""}
            </div>
          </div>

          <div class="space-y-2 mt-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Key Responsibilities:</h4>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              ${(exp.responsibilities || []).map(r => `
                <li class="flex items-start gap-2.5">
                  <span class="mt-1 text-blue-500 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span class="leading-relaxed">${escapeHtml(r)}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Render Projects
function renderProjectsSection(projects) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const list = (projects || []).filter(p => p.enabled !== false);
  if (list.length === 0) {
    container.innerHTML = `<p class="text-slate-500 italic">No projects available.</p>`;
    return;
  }

  container.innerHTML = list.map(proj => `
    <div class="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all">
      <div class="p-6 md:p-8">
        <div class="flex items-start justify-between gap-4 mb-3">
          <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
            <i data-lucide="terminal" class="w-6 h-6"></i>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            IT Automation Project
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${escapeHtml(proj.name)}</h3>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">${escapeHtml(proj.description)}</p>

        <!-- Problem, Solution, Result breakdown -->
        <div class="space-y-3 mb-6 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-xs md:text-sm">
          ${proj.problem ? `
            <div>
              <strong class="text-amber-600 dark:text-amber-400 font-semibold block mb-0.5">Problem / Challenge:</strong>
              <p class="text-slate-600 dark:text-slate-300">${escapeHtml(proj.problem)}</p>
            </div>
          ` : ""}
          ${proj.solution ? `
            <div>
              <strong class="text-blue-600 dark:text-blue-400 font-semibold block mb-0.5">Solution:</strong>
              <p class="text-slate-600 dark:text-slate-300">${escapeHtml(proj.solution)}</p>
            </div>
          ` : ""}
          ${proj.result ? `
            <div>
              <strong class="text-emerald-600 dark:text-emerald-400 font-semibold block mb-0.5">Result & Impact:</strong>
              <p class="text-slate-600 dark:text-slate-300">${escapeHtml(proj.result)}</p>
            </div>
          ` : ""}
        </div>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-1.5 mb-2">
          ${(proj.technologies || []).map(t => `
            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              ${escapeHtml(t)}
            </span>
          `).join("")}
        </div>
      </div>

      <!-- Action buttons -->
      ${(proj.githubUrl || proj.projectUrl) ? `
        <div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 flex gap-3">
          ${proj.githubUrl ? `
            <a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
              <i data-lucide="github" class="w-4 h-4"></i> Repository
            </a>
          ` : ""}
          ${proj.projectUrl ? `
            <a href="${escapeHtml(proj.projectUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              <i data-lucide="external-link" class="w-4 h-4"></i> View Project
            </a>
          ` : ""}
        </div>
      ` : ""}
    </div>
  `).join("");
}

// Render Certifications
function renderCertificationsSection(certifications) {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  const list = (certifications || []).filter(c => c.enabled !== false);
  if (list.length === 0) {
    container.innerHTML = `<p class="text-slate-500 italic">No certifications listed.</p>`;
    return;
  }

  container.innerHTML = list.map(cert => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
        <i data-lucide="award" class="w-6 h-6"></i>
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between gap-2">
          <h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white">${escapeHtml(cert.name)}</h3>
          <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-semibold">Verified</span>
        </div>
        <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">${escapeHtml(cert.organization)}</p>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Completed: ${escapeHtml(cert.date)}</p>
        ${cert.credentialId ? `<p class="text-xs text-slate-400 mt-0.5 font-mono">ID: ${escapeHtml(cert.credentialId)}</p>` : ""}
        ${cert.credentialUrl ? `
          <a href="${escapeHtml(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-2">
            View Credential <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        ` : ""}
      </div>
    </div>
  `).join("");
}

// Render Education
function renderEducationSection(education) {
  const container = document.getElementById("education-container");
  if (!container) return;

  const list = (education || []).filter(e => e.enabled !== false);
  if (list.length === 0) {
    container.innerHTML = `<p class="text-slate-500 italic">No education listed.</p>`;
    return;
  }

  container.innerHTML = list.map(edu => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold flex-shrink-0">
        <i data-lucide="graduation-cap" class="w-6 h-6"></i>
      </div>
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white">${escapeHtml(edu.degree)}</h3>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">${escapeHtml(edu.year)}</span>
        </div>
        <p class="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">${escapeHtml(edu.institution)}</p>
        ${edu.description ? `<p class="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">${escapeHtml(edu.description)}</p>` : ""}
      </div>
    </div>
  `).join("");
}

// Render Strengths
function renderStrengthsSection(strengths) {
  const container = document.getElementById("strengths-container");
  if (!container) return;

  const icons = {
    wrench: "wrench",
    users: "users",
    "shield-check": "shield-check",
    zap: "zap"
  };

  container.innerHTML = (strengths || []).map(s => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:border-blue-400/50 transition-all">
      <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4">
        <i data-lucide="${icons[s.icon] || 'check'}" class="w-5 h-5"></i>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-1.5">${escapeHtml(s.title)}</h3>
      <p class="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(s.desc)}</p>
    </div>
  `).join("");
}

// Render Contact
function renderContactSection(data) {
  const emailEl = document.getElementById("contact-email-text");
  const emailBtn = document.getElementById("contact-email-btn");
  if (emailEl) emailEl.textContent = data.contact.email || data.profile.email;
  if (emailBtn) emailBtn.href = `mailto:${data.contact.email || data.profile.email}`;

  const phoneEl = document.getElementById("contact-phone-text");
  const phoneBtn = document.getElementById("contact-phone-btn");
  if (phoneEl) phoneEl.textContent = data.contact.phone || data.profile.phone;
  if (phoneBtn) phoneBtn.href = `tel:${data.contact.phone || data.profile.phone}`;

  const locEl = document.getElementById("contact-location-text");
  if (locEl) locEl.textContent = data.contact.location || data.profile.location;

  const linkedinBtn = document.getElementById("contact-linkedin-btn");
  if (linkedinBtn) {
    if (data.contact.linkedin || data.profile.linkedin) {
      linkedinBtn.href = data.contact.linkedin || data.profile.linkedin;
      linkedinBtn.classList.remove("hidden");
    } else {
      linkedinBtn.classList.add("hidden");
    }
  }

  // Relocation badge in contact
  const relocNote = document.getElementById("contact-relocation-note");
  if (relocNote) relocNote.textContent = data.profile.relocation || "Open to Malta relocation";
}

// Helper to copy text to clipboard
function copyToClipboard(text, successMessage = "Copied to clipboard!") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage, "success");
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
    showToast(successMessage, "success");
  } catch (err) {
    showToast("Unable to copy", "error");
  }
  document.body.removeChild(ta);
}

// ============================================================================
// 6. ADMIN DASHBOARD SYSTEM (admin.html)
// ============================================================================
function initAdminPage() {
  const loginSection = document.getElementById("admin-login-section");
  const dashboardSection = document.getElementById("admin-dashboard-section");

  if (!loginSection || !dashboardSection) return;

  const auth = checkAdminAuth();
  if (auth.isAuthenticated) {
    loginSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    loadAdminDashboard();
  } else {
    loginSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
    bindLoginForm();
  }
}

function checkAdminAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return { isAuthenticated: false };
    const auth = JSON.parse(raw);
    const data = getPortfolioData();
    const timeoutMs = (data.settings.sessionTimeoutMinutes || 120) * 60 * 1000;
    
    if (Date.now() - auth.loginTime > timeoutMs) {
      logoutAdmin();
      return { isAuthenticated: false };
    }
    return auth;
  } catch (e) {
    return { isAuthenticated: false };
  }
}

function loginAdmin(username, password) {
  const data = getPortfolioData();
  const validUser = data.settings.adminUsername || "admin";
  const validPass = data.settings.adminPassword || "password123";

  if (username.trim() === validUser && password === validPass) {
    const authData = {
      isAuthenticated: true,
      username: username.trim(),
      loginTime: Date.now()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    showToast("Login successful!", "success");
    initAdminPage();
    return true;
  }
  return false;
}

function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY);
  showToast("Logged out successfully.", "info");
  window.location.reload();
}

function bindLoginForm() {
  const form = document.getElementById("admin-login-form");
  const userIn = document.getElementById("login-username");
  const passIn = document.getElementById("login-password");
  const errorBox = document.getElementById("login-error-msg");
  const togglePassBtn = document.getElementById("toggle-password-visibility");

  if (togglePassBtn && passIn) {
    togglePassBtn.onclick = (e) => {
      e.preventDefault();
      const isPass = passIn.type === "password";
      passIn.type = isPass ? "text" : "password";
      togglePassBtn.textContent = isPass ? "Hide" : "Show";
    };
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      errorBox.classList.add("hidden");
      const u = userIn.value.trim();
      const p = passIn.value;

      if (!u || !p) {
        errorBox.textContent = "Please enter both username and password.";
        errorBox.classList.remove("hidden");
        return;
      }

      const success = loginAdmin(u, p);
      if (!success) {
        errorBox.textContent = "Invalid username or password. (Default: admin / password123)";
        errorBox.classList.remove("hidden");
      }
    };
  }
}

// Load and bind all admin dashboard panels
function loadAdminDashboard() {
  const data = getPortfolioData();

  // Populate Admin Header
  const headerUser = document.getElementById("admin-header-username");
  if (headerUser) headerUser.textContent = data.settings.adminUsername || "admin";

  const logoutBtn = document.getElementById("admin-logout-btn");
  if (logoutBtn) logoutBtn.onclick = logoutAdmin;

  // Bind Sidebar Navigation Tabs
  bindAdminTabs();

  // Load Section Forms
  loadAdminOverview(data);
  loadAdminProfile(data);
  loadAdminHero(data);
  loadAdminAbout(data);
  loadAdminSkills(data);
  loadAdminExperience(data);
  loadAdminProjects(data);
  loadAdminCertifications(data);
  loadAdminEducation(data);
  loadAdminProfilePhoto(data);
  loadAdminCv(data);
  loadAdminContact(data);
  loadAdminSettings(data);

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function bindAdminTabs() {
  const tabs = document.querySelectorAll(".admin-nav-tab");
  const panels = document.querySelectorAll(".admin-panel-content");

  tabs.forEach(tab => {
    tab.onclick = (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute("data-target");

      tabs.forEach(t => {
        t.classList.remove("bg-blue-600", "text-white", "font-semibold");
        t.classList.add("text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      });
      tab.classList.add("bg-blue-600", "text-white", "font-semibold");
      tab.classList.remove("text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-800");

      panels.forEach(p => p.classList.add("hidden"));
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.remove("hidden");
        // Re-read fresh data when switching to tabs
        const currentData = getPortfolioData();
        if (targetId === "panel-overview") loadAdminOverview(currentData);
        if (targetId === "panel-skills") loadAdminSkills(currentData);
        if (targetId === "panel-experience") loadAdminExperience(currentData);
        if (targetId === "panel-projects") loadAdminProjects(currentData);
        if (targetId === "panel-certifications") loadAdminCertifications(currentData);
        if (targetId === "panel-education") loadAdminEducation(currentData);
      }
    };
  });
}

// 1. Overview Panel
function loadAdminOverview(data) {
  const skillCount = document.getElementById("stat-skills-count");
  if (skillCount) skillCount.textContent = (data.skills || []).filter(s => s.enabled !== false).length;

  const expCount = document.getElementById("stat-exp-count");
  if (expCount) expCount.textContent = (data.experience || []).filter(e => e.enabled !== false).length;

  const projCount = document.getElementById("stat-proj-count");
  if (projCount) projCount.textContent = (data.projects || []).filter(p => p.enabled !== false).length;

  const certCount = document.getElementById("stat-cert-count");
  if (certCount) certCount.textContent = (data.certifications || []).filter(c => c.enabled !== false).length;
}

// 2. Profile Panel
function loadAdminProfile(data) {
  const form = document.getElementById("admin-profile-form");
  if (!form) return;

  document.getElementById("p-name").value = data.profile.name || "";
  document.getElementById("p-title").value = data.profile.title || "";
  document.getElementById("p-location").value = data.profile.location || "";
  document.getElementById("p-relocation").value = data.profile.relocation || "";
  document.getElementById("p-availability").value = data.profile.availability || "";
  document.getElementById("p-email").value = data.profile.email || "";
  document.getElementById("p-phone").value = data.profile.phone || "";
  document.getElementById("p-linkedin").value = data.profile.linkedin || "";
  document.getElementById("p-github").value = data.profile.github || "";

  form.onsubmit = (e) => {
    e.preventDefault();
    const cur = getPortfolioData();
    cur.profile = {
      name: document.getElementById("p-name").value.trim(),
      title: document.getElementById("p-title").value.trim(),
      location: document.getElementById("p-location").value.trim(),
      relocation: document.getElementById("p-relocation").value.trim(),
      availability: document.getElementById("p-availability").value.trim(),
      email: document.getElementById("p-email").value.trim(),
      phone: document.getElementById("p-phone").value.trim(),
      linkedin: document.getElementById("p-linkedin").value.trim(),
      github: document.getElementById("p-github").value.trim()
    };
    savePortfolioData(cur);
    showToast("Profile details saved successfully!", "success");
  };
}

// 3. Hero Panel
function loadAdminHero(data) {
  const form = document.getElementById("admin-hero-form");
  if (!form) return;

  document.getElementById("h-title").value = data.hero.title || "";
  document.getElementById("h-subtitle").value = data.hero.subtitle || "";
  document.getElementById("h-description").value = data.hero.description || "";
  document.getElementById("h-location").value = data.hero.location || "";
  document.getElementById("h-relocation").value = data.hero.relocation || "";
  document.getElementById("h-availability").value = data.hero.availability || "";

  form.onsubmit = (e) => {
    e.preventDefault();
    const cur = getPortfolioData();
    cur.hero = {
      title: document.getElementById("h-title").value.trim(),
      subtitle: document.getElementById("h-subtitle").value.trim(),
      description: document.getElementById("h-description").value.trim(),
      location: document.getElementById("h-location").value.trim(),
      relocation: document.getElementById("h-relocation").value.trim(),
      availability: document.getElementById("h-availability").value.trim()
    };
    savePortfolioData(cur);
    showToast("Hero section updated successfully!", "success");
  };
}

// 4. About Panel
function loadAdminAbout(data) {
  const form = document.getElementById("admin-about-form");
  if (!form) return;

  document.getElementById("a-summary").value = data.about.summary || "";

  form.onsubmit = (e) => {
    e.preventDefault();
    const cur = getPortfolioData();
    cur.about.summary = document.getElementById("a-summary").value.trim();
    savePortfolioData(cur);
    showToast("About summary updated successfully!", "success");
  };
}

// 5. Skills Panel
function loadAdminSkills(data) {
  const container = document.getElementById("admin-skills-list");
  const addForm = document.getElementById("admin-add-skill-form");
  if (!container) return;

  const skills = data.skills || [];

  container.innerHTML = skills.map((s, idx) => `
    <div class="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full ${s.enabled !== false ? 'bg-emerald-500' : 'bg-slate-400'}"></span>
        <div>
          <span class="font-medium text-slate-900 dark:text-white text-sm ${s.enabled === false ? 'line-through opacity-50' : ''}">${escapeHtml(s.name)}</span>
          <span class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 ml-2">${escapeHtml(s.category)}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="toggleSkillEnabled('${s.id}')" class="px-2.5 py-1 text-xs rounded font-medium ${s.enabled !== false ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}">
          ${s.enabled !== false ? 'Enabled' : 'Disabled'}
        </button>
        <button onclick="deleteSkill('${s.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded" title="Delete Skill">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  `).join("");

  if (addForm) {
    addForm.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("new-skill-name").value.trim();
      const cat = document.getElementById("new-skill-category").value.trim();
      if (!name) return;

      const cur = getPortfolioData();
      cur.skills.push({
        id: "s_" + Date.now(),
        name,
        category: cat,
        enabled: true
      });
      savePortfolioData(cur);
      document.getElementById("new-skill-name").value = "";
      loadAdminSkills(cur);
      showToast(`Added skill "${name}"`, "success");
    };
  }
}

window.toggleSkillEnabled = function(id) {
  const data = getPortfolioData();
  const skill = data.skills.find(s => s.id === id);
  if (skill) {
    skill.enabled = skill.enabled === false ? true : false;
    savePortfolioData(data);
    loadAdminSkills(data);
    showToast(`Skill status updated.`, "info");
  }
};

window.deleteSkill = function(id) {
  if (!confirm("Are you sure you want to delete this skill?")) return;
  const data = getPortfolioData();
  data.skills = data.skills.filter(s => s.id !== id);
  savePortfolioData(data);
  loadAdminSkills(data);
  showToast("Skill deleted.", "info");
};

// 6. Experience Panel
function loadAdminExperience(data) {
  const container = document.getElementById("admin-experience-list");
  const addForm = document.getElementById("admin-add-exp-form");
  if (!container) return;

  const list = data.experience || [];
  container.innerHTML = list.map(exp => `
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div class="flex items-start justify-between gap-3 mb-2">
        <div>
          <div class="flex items-center gap-2">
            <h4 class="font-bold text-slate-900 dark:text-white text-base">${escapeHtml(exp.role)}</h4>
            ${exp.isCurrent ? `<span class="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-2 py-0.5 rounded font-medium">Current</span>` : ""}
            ${exp.enabled === false ? `<span class="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded font-medium">Disabled</span>` : ""}
          </div>
          <p class="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
            ${escapeHtml(exp.company)} ${exp.deployment ? `| Deployment: ${escapeHtml(exp.deployment)}` : ""}
          </p>
          <p class="text-xs text-slate-500 mt-0.5">${escapeHtml(exp.period)} • ${escapeHtml(exp.location || "")}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="toggleExpEnabled('${exp.id}')" class="px-2.5 py-1 text-xs rounded font-medium ${exp.enabled !== false ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'bg-amber-100 text-amber-800'}">
            ${exp.enabled !== false ? 'Disable' : 'Enable'}
          </button>
          <button onclick="deleteExp('${exp.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded" title="Delete Entry">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
      <div class="mt-3 text-xs text-slate-600 dark:text-slate-300">
        <strong class="text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider block mb-1">Responsibilities:</strong>
        <ul class="list-disc pl-4 space-y-1">
          ${(exp.responsibilities || []).map(r => `<li>${escapeHtml(r)}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  if (addForm) {
    addForm.onsubmit = (e) => {
      e.preventDefault();
      const role = document.getElementById("exp-role").value.trim();
      const company = document.getElementById("exp-company").value.trim();
      const deployment = document.getElementById("exp-deployment").value.trim();
      const period = document.getElementById("exp-period").value.trim();
      const location = document.getElementById("exp-location").value.trim();
      const isCurrent = document.getElementById("exp-current").checked;
      const respRaw = document.getElementById("exp-responsibilities").value.trim();

      if (!role || !company || !period) {
        showToast("Please fill in role, company, and period.", "warning");
        return;
      }

      const responsibilities = respRaw ? respRaw.split("\n").map(l => l.trim()).filter(l => l.length > 0) : [];

      const cur = getPortfolioData();
      cur.experience.push({
        id: "exp_" + Date.now(),
        role,
        company,
        deployment,
        period,
        location,
        isCurrent,
        enabled: true,
        responsibilities
      });
      savePortfolioData(cur);
      addForm.reset();
      loadAdminExperience(cur);
      showToast("New experience entry added!", "success");
    };
  }
}

window.toggleExpEnabled = function(id) {
  const data = getPortfolioData();
  const item = data.experience.find(e => e.id === id);
  if (item) {
    item.enabled = item.enabled === false ? true : false;
    savePortfolioData(data);
    loadAdminExperience(data);
  }
};

window.deleteExp = function(id) {
  if (!confirm("Are you sure you want to delete this experience entry?")) return;
  const data = getPortfolioData();
  data.experience = data.experience.filter(e => e.id !== id);
  savePortfolioData(data);
  loadAdminExperience(data);
  showToast("Experience removed.", "info");
};

// 7. Projects Panel
function loadAdminProjects(data) {
  const container = document.getElementById("admin-projects-list");
  const addForm = document.getElementById("admin-add-proj-form");
  if (!container) return;

  const list = data.projects || [];
  container.innerHTML = list.map(p => `
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div class="flex items-start justify-between gap-3 mb-2">
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white text-base">${escapeHtml(p.name)}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">${escapeHtml(p.description)}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="toggleProjEnabled('${p.id}')" class="px-2.5 py-1 text-xs rounded font-medium ${p.enabled !== false ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'bg-amber-100 text-amber-800'}">
            ${p.enabled !== false ? 'Enabled' : 'Disabled'}
          </button>
          <button onclick="deleteProj('${p.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded" title="Delete Project">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap gap-1 mt-3">
        ${(p.technologies || []).map(t => `<span class="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300">${escapeHtml(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");

  if (addForm) {
    addForm.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("proj-name").value.trim();
      const desc = document.getElementById("proj-desc").value.trim();
      const problem = document.getElementById("proj-problem").value.trim();
      const solution = document.getElementById("proj-solution").value.trim();
      const result = document.getElementById("proj-result").value.trim();
      const techRaw = document.getElementById("proj-tech").value.trim();
      const githubUrl = document.getElementById("proj-github").value.trim();
      const projectUrl = document.getElementById("proj-url").value.trim();

      if (!name || !desc) {
        showToast("Please provide project name and description.", "warning");
        return;
      }

      const technologies = techRaw ? techRaw.split(",").map(t => t.trim()).filter(t => t.length > 0) : [];

      const cur = getPortfolioData();
      cur.projects.push({
        id: "proj_" + Date.now(),
        name,
        description: desc,
        problem,
        solution,
        result,
        technologies,
        githubUrl,
        projectUrl,
        enabled: true
      });
      savePortfolioData(cur);
      addForm.reset();
      loadAdminProjects(cur);
      showToast("Project added!", "success");
    };
  }
}

window.toggleProjEnabled = function(id) {
  const data = getPortfolioData();
  const p = data.projects.find(x => x.id === id);
  if (p) {
    p.enabled = p.enabled === false ? true : false;
    savePortfolioData(data);
    loadAdminProjects(data);
  }
};

window.deleteProj = function(id) {
  if (!confirm("Are you sure you want to delete this project?")) return;
  const data = getPortfolioData();
  data.projects = data.projects.filter(x => x.id !== id);
  savePortfolioData(data);
  loadAdminProjects(data);
  showToast("Project deleted.", "info");
};

// 8. Certifications Panel
function loadAdminCertifications(data) {
  const container = document.getElementById("admin-certs-list");
  const addForm = document.getElementById("admin-add-cert-form");
  if (!container) return;

  const list = data.certifications || [];
  container.innerHTML = list.map(c => `
    <div class="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm">${escapeHtml(c.name)}</h4>
        <p class="text-xs text-blue-600 dark:text-blue-400 font-semibold">${escapeHtml(c.organization)} • ${escapeHtml(c.date)}</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="toggleCertEnabled('${c.id}')" class="px-2.5 py-1 text-xs rounded font-medium ${c.enabled !== false ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'bg-amber-100 text-amber-800'}">
          ${c.enabled !== false ? 'Enabled' : 'Disabled'}
        </button>
        <button onclick="deleteCert('${c.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  `).join("");

  if (addForm) {
    addForm.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("cert-name").value.trim();
      const org = document.getElementById("cert-org").value.trim();
      const date = document.getElementById("cert-date").value.trim();
      const idStr = document.getElementById("cert-id").value.trim();
      const url = document.getElementById("cert-url").value.trim();

      if (!name || !org) {
        showToast("Please enter certification name and organization.", "warning");
        return;
      }

      const cur = getPortfolioData();
      cur.certifications.push({
        id: "cert_" + Date.now(),
        name,
        organization: org,
        date,
        credentialId: idStr,
        credentialUrl: url,
        enabled: true
      });
      savePortfolioData(cur);
      addForm.reset();
      loadAdminCertifications(cur);
      showToast("Certification added!", "success");
    };
  }
}

window.toggleCertEnabled = function(id) {
  const data = getPortfolioData();
  const c = data.certifications.find(x => x.id === id);
  if (c) {
    c.enabled = c.enabled === false ? true : false;
    savePortfolioData(data);
    loadAdminCertifications(data);
  }
};

window.deleteCert = function(id) {
  if (!confirm("Delete certification?")) return;
  const data = getPortfolioData();
  data.certifications = data.certifications.filter(x => x.id !== id);
  savePortfolioData(data);
  loadAdminCertifications(data);
  showToast("Certification removed.", "info");
};

// 9. Education Panel
function loadAdminEducation(data) {
  const container = document.getElementById("admin-edu-list");
  const addForm = document.getElementById("admin-add-edu-form");
  if (!container) return;

  const list = data.education || [];
  container.innerHTML = list.map(e => `
    <div class="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm">${escapeHtml(e.degree)} (${escapeHtml(e.year)})</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400">${escapeHtml(e.institution)}</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="toggleEduEnabled('${e.id}')" class="px-2.5 py-1 text-xs rounded font-medium ${e.enabled !== false ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'bg-amber-100 text-amber-800'}">
          ${e.enabled !== false ? 'Enabled' : 'Disabled'}
        </button>
        <button onclick="deleteEdu('${e.id}')" class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  `).join("");

  if (addForm) {
    addForm.onsubmit = (ev) => {
      ev.preventDefault();
      const degree = document.getElementById("edu-degree").value.trim();
      const institution = document.getElementById("edu-inst").value.trim();
      const year = document.getElementById("edu-year").value.trim();
      const desc = document.getElementById("edu-desc").value.trim();

      if (!degree || !institution || !year) {
        showToast("Please provide degree, institution, and year.", "warning");
        return;
      }

      const cur = getPortfolioData();
      cur.education.push({
        id: "edu_" + Date.now(),
        degree,
        institution,
        year,
        description: desc,
        enabled: true
      });
      savePortfolioData(cur);
      addForm.reset();
      loadAdminEducation(cur);
      showToast("Education entry added!", "success");
    };
  }
}

window.toggleEduEnabled = function(id) {
  const data = getPortfolioData();
  const item = data.education.find(x => x.id === id);
  if (item) {
    item.enabled = item.enabled === false ? true : false;
    savePortfolioData(data);
    loadAdminEducation(data);
  }
};

window.deleteEdu = function(id) {
  if (!confirm("Delete education item?")) return;
  const data = getPortfolioData();
  data.education = data.education.filter(x => x.id !== id);
  savePortfolioData(data);
  loadAdminEducation(data);
  showToast("Education entry deleted.", "info");
};

// 10. Profile Photo Panel
// Permanent Public Profile Photo: To change the public profile photo, replace assets/profile.jpg and redeploy the website.
function loadAdminProfilePhoto(data) {
  const previewImg = document.getElementById("admin-photo-preview");
  const fileInput = document.getElementById("admin-photo-file");
  const saveBtn = document.getElementById("admin-save-photo-btn");
  const resetBtn = document.getElementById("admin-reset-photo-btn");
  const errorMsg = document.getElementById("admin-photo-error");

  let pendingBase64 = null;

  if (previewImg) {
    // Always show the current assets/profile.jpg permanent asset
    previewImg.src = "./assets/profile.jpg";
    previewImg.onerror = null;
  }

  if (fileInput) {
    fileInput.onchange = (e) => {
      errorMsg.classList.add("hidden");
      const file = e.target.files[0];
      if (!file) return;

      // Validate format: JPG, JPEG, PNG, WEBP
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type.toLowerCase())) {
        errorMsg.textContent = "Please select a valid JPG, PNG, JPEG, or WEBP image.";
        errorMsg.classList.remove("hidden");
        fileInput.value = "";
        return;
      }

      // Validate size: <= 5MB
      const maxBytes = 5 * 1024 * 1024;
      if (file.size > maxBytes) {
        errorMsg.textContent = "Image size must be less than 5 MB.";
        errorMsg.classList.remove("hidden");
        fileInput.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (re) => {
        pendingBase64 = re.target.result;
        if (previewImg) previewImg.src = pendingBase64;
      };
      reader.readAsDataURL(file);
    };
  }

  if (saveBtn) {
    saveBtn.onclick = () => {
      showToast("To change the public profile photo for all visitors, replace assets/profile.jpg and redeploy the website.", "info");
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      pendingBase64 = null;
      if (fileInput) fileInput.value = "";
      if (previewImg) {
        previewImg.src = "./assets/profile.jpg";
        previewImg.onerror = null;
      }
      showToast("Displaying assets/profile.jpg", "info");
    };
  }
}

// 11. CV Panel
function loadAdminCv(data) {
  const form = document.getElementById("admin-cv-form");
  if (!form) return;

  const cvPathInput = document.getElementById("cv-path");
  const cvUrlInput = document.getElementById("cv-url");
  const cvEnableCheck = document.getElementById("cv-enable-check");

  if (data.cv) {
    if (cvPathInput) cvPathInput.value = data.cv.path || "assets/cv.pdf";
    if (cvUrlInput) cvUrlInput.value = data.cv.url || "";
    if (cvEnableCheck) cvEnableCheck.checked = data.cv.enabled !== false;
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    const cur = getPortfolioData();
    cur.cv = {
      path: cvPathInput.value.trim() || "assets/cv.pdf",
      url: cvUrlInput.value.trim(),
      enabled: cvEnableCheck.checked
    };
    savePortfolioData(cur);
    showToast("CV settings updated!", "success");
  };
}

// 12. Contact Panel
function loadAdminContact(data) {
  const form = document.getElementById("admin-contact-form");
  if (!form) return;

  document.getElementById("c-email").value = data.contact.email || "";
  document.getElementById("c-phone").value = data.contact.phone || "";
  document.getElementById("c-location").value = data.contact.location || "";
  document.getElementById("c-linkedin").value = data.contact.linkedin || "";
  document.getElementById("c-github").value = data.contact.github || "";

  form.onsubmit = (e) => {
    e.preventDefault();
    const cur = getPortfolioData();
    cur.contact = {
      email: document.getElementById("c-email").value.trim(),
      phone: document.getElementById("c-phone").value.trim(),
      location: document.getElementById("c-location").value.trim(),
      linkedin: document.getElementById("c-linkedin").value.trim(),
      github: document.getElementById("c-github").value.trim()
    };
    // Sync with profile contact info
    cur.profile.email = cur.contact.email;
    cur.profile.phone = cur.contact.phone;
    cur.profile.location = cur.contact.location;
    cur.profile.linkedin = cur.contact.linkedin;
    cur.profile.github = cur.contact.github;

    savePortfolioData(cur);
    showToast("Contact details saved!", "success");
  };
}

// 13. Settings, Export, Import, Reset Panel
function loadAdminSettings(data) {
  const authForm = document.getElementById("admin-credentials-form");
  const exportBtn = document.getElementById("admin-export-btn");
  const importInput = document.getElementById("admin-import-file");
  const resetBtn = document.getElementById("admin-reset-all-btn");
  const clearStorageBtn = document.getElementById("admin-clear-storage-btn");

  if (authForm) {
    document.getElementById("set-username").value = data.settings.adminUsername || "admin";
    document.getElementById("set-password").value = "";

    authForm.onsubmit = (e) => {
      e.preventDefault();
      const newU = document.getElementById("set-username").value.trim();
      const newP = document.getElementById("set-password").value;

      if (!newU) {
        showToast("Username cannot be empty.", "warning");
        return;
      }

      const cur = getPortfolioData();
      cur.settings.adminUsername = newU;
      if (newP.trim() !== "") {
        cur.settings.adminPassword = newP;
      }
      savePortfolioData(cur);
      showToast("Admin credentials updated successfully!", "success");
    };
  }

  // Export JSON
  if (exportBtn) {
    exportBtn.onclick = () => {
      const cur = getPortfolioData();
      const jsonStr = JSON.stringify(cur, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const dateStr = new Date().toISOString().split("T")[0];
      a.href = url;
      a.download = `karthi-g-portfolio-backup-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Portfolio backup downloaded!", "success");
    };
  }

  // Import JSON
  if (importInput) {
    importInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!confirm("Importing backup data will REPLACE current portfolio data. Proceed?")) {
        importInput.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (re) => {
        try {
          const parsed = JSON.parse(re.target.result);
          if (!parsed.profile || !Array.isArray(parsed.skills)) {
            throw new Error("Invalid backup format. Missing profile or skills structure.");
          }
          savePortfolioData(parsed);
          showToast("Data imported successfully! Reloading...", "success");
          setTimeout(() => window.location.reload(), 800);
        } catch (err) {
          showToast("Failed to import JSON: " + err.message, "error");
          importInput.value = "";
        }
      };
      reader.readAsText(file);
    };
  }

  // Reset to Defaults
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("Reset all portfolio sections to original default data? Any custom edits will be lost.")) {
        savePortfolioData(DEFAULT_PORTFOLIO_DATA);
        showToast("Portfolio reset to default. Reloading...", "info");
        setTimeout(() => window.location.reload(), 600);
      }
    };
  }

  // Clear Storage
  if (clearStorageBtn) {
    clearStorageBtn.onclick = () => {
      if (confirm("Clear ALL portfolio localStorage? You will be logged out and defaults restored.")) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(AUTH_KEY);
        showToast("Storage cleared.", "info");
        setTimeout(() => window.location.reload(), 500);
      }
    };
  }
}

// ============================================================================
// 7. INITIALIZATION CONTROLLER
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  // If on admin.html
  if (document.getElementById("admin-login-section") || document.getElementById("admin-dashboard-section")) {
    initAdminPage();
  }

  // If on index.html
  if (document.getElementById("hero-name")) {
    renderPublicPortfolio();

    // Mobile Hamburger Menu
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu-dropdown");
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.onclick = () => {
        mobileMenu.classList.toggle("hidden");
      };

      // Close mobile menu on clicking any navigation link
      mobileMenu.querySelectorAll("a").forEach(link => {
        link.onclick = () => {
          mobileMenu.classList.add("hidden");
        };
      });
    }

    // Copy contact shortcuts
    const copyEmailBtn = document.getElementById("copy-email-btn");
    if (copyEmailBtn) {
      copyEmailBtn.onclick = (e) => {
        e.preventDefault();
        const data = getPortfolioData();
        copyToClipboard(data.contact.email || data.profile.email, "Email address copied!");
      };
    }

    const copyPhoneBtn = document.getElementById("copy-phone-btn");
    if (copyPhoneBtn) {
      copyPhoneBtn.onclick = (e) => {
        e.preventDefault();
        const data = getPortfolioData();
        copyToClipboard(data.contact.phone || data.profile.phone, "Phone number copied!");
      };
    }
  }
});
