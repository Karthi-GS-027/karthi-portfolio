# Karthi G - IT Support Engineer & System Administrator Portfolio

A complete, modern, responsive, and 100% static **personal portfolio website for an IT Support Engineer / System Administrator**. Engineered specifically for career/job-search use and presenting professional experience to technical recruiters, especially for **Malta and European relocation opportunities**.

The basic project runs and deploys for **₹0** using purely static files, client-side localStorage, and free hosting tiers.

---

## 1. Technologies Used

* **HTML5**: Semantic, accessible markup structure.
* **Tailwind CSS (via CDN)**: Modern, responsive utility styling with dark/light mode support.
* **Vanilla JavaScript (`app.js`)**: Dynamic DOM rendering, state management, modal controllers, and image encoders without any heavy frameworks.
* **Browser localStorage**: Zero-cost, client-side data persistence for portfolio sections, theme selection, custom profile photos, and administration state.
* **Lucide Icons (via CDN)**: Crisp, modern SVG icons for IT infrastructure and diagnostics.
* **Static Assets**: Standalone PDF resume and profile image structure.

> **Zero Backend Requirement**: No React, Angular, Vue, Node.js runtime, npm dependencies, PHP, Python, or SQL databases are required to view or host this website.

---

## 2. Project File Structure

```text
it-support-portfolio/
│
├── index.html          # Public single-page portfolio (Home, About, Skills, Experience, Projects, Certifications, Education, Contact)
├── admin.html          # Private administration dashboard with login gate
├── app.js              # Complete Vanilla JS controller (localStorage, rendering, theme, auth, export/import)
├── README.md           # Documentation, local setup, and free hosting guides
│
└── assets/
    ├── profile.jpg     # Default profile photo location
    └── cv.pdf          # Default downloadable CV / Resume (PDF format)
```

---

## 3. Local Setup & Running Locally

Because this project consists of pure static files, you can run it on any computer using any of the following methods:

### Option A: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The portfolio opens automatically at `http://127.0.0.1:5500/index.html`.

### Option B: Python Simple HTTP Server
If you have Python installed, open your terminal inside the folder and run:

```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option C: Node.js / npx serve (Optional)
```bash
npx serve .
```

### Option D: Direct File Opening
You can double-click `index.html` to open it in Google Chrome, Edge, or Firefox. 
*(Note: Some browsers enforce strict local security policies on `file://` URLs that restrict `localStorage` or reading local files. Using Option A or B is recommended).*

---

## 4. Admin Dashboard & Login

The portfolio features a dedicated administration dashboard at:

```text
/admin.html
```

### Default Credentials:
* **Username**: `admin`
* **Password**: `password123`

### Features in Admin Dashboard:
* **Profile Details**: Update your name, title, base location, relocation availability, email, phone, and LinkedIn URL.
* **Hero Section**: Customize hero banner headings, badges, and pitch.
* **About Me**: Edit your professional summary narrative.
* **Technical Skills**: Dynamically add skills under 10 categories (*Operating Systems, IT Support, Microsoft Applications, Hardware, Networking, System Administration, Cloud, IT Infrastructure, Troubleshooting, Tools*), toggle enabled/disabled, or delete.
* **Professional Experience**: Add, edit, or toggle positions (*Infiniti Engineers / LEOS-ISRO, GSSysnet / Syrmas GS, AptEner Mechatronics*), dates, and line-by-line responsibilities.
* **Projects**: Maintain technical projects (*e.g. Automated Software Installation using PowerShell*) with problem, solution, result, and technology tags.
* **Certifications & Education**: Add new industry certificates (*e.g. Google Technical Support Fundamentals*) or academic qualifications.
* **Profile Photo**: Select and preview any JPG, PNG, or WEBP photo from your computer, save it locally via Base64, or reset to default.
* **CV Settings**: Set custom file path or external cloud link (*Google Drive, OneDrive*) and toggle the "Download CV" buttons.
* **Change Credentials**: Update your admin username and password under **Settings**.

---

## 5. Profile Photo Management

You have two simple ways to set your profile picture:

### Method 1: File Replacement (Zero Browser Storage)
Place your actual photo directly into the assets folder:
```text
assets/profile.jpg
```
The website will automatically load it.

### Method 2: In-Browser Upload (Admin Dashboard)
1. Go to `admin.html` and log in.
2. Click **Profile Photo** in the sidebar.
3. Click **Choose File** and select your photo (JPG, PNG, JPEG, or WEBP under 5 MB).
4. View the live circular preview.
5. Click **Save Profile Photo**.
6. The image is converted into Base64 format and stored in `localStorage`. It persists across page refreshes.
7. To revert to `assets/profile.jpg`, simply click **Reset to Default**.

> **Missing Photo Fallback**: If `assets/profile.jpg` does not exist and no custom photo has been uploaded, a clean SVG placeholder avatar with the initials `KG` and an IT Support badge will render automatically. The website will never show a broken image icon.

---

## 6. CV / Resume Management

* Default file: `assets/cv.pdf`
* Clicking any **"Download CV"** button on the public website triggers an automatic download/view of `assets/cv.pdf`.
* If you store your CV on Google Drive or an external cloud host, open `admin.html` -> **CV Management**, enter your URL, and click **Save**.

---

## 7. Data Backup, Export & Import

All edits made through the Admin Dashboard are saved to your browser's `localStorage`. To prevent accidental data loss when switching computers or clearing browser history:

1. Open `admin.html` -> **Settings & Backup**.
2. Click **Export Portfolio Data (JSON)**. This downloads a timestamped backup file (e.g. `karthi-g-portfolio-backup-2026-09-26.json`).
3. To restore on another computer or browser, open `admin.html` on that machine, go to **Settings & Backup**, and select **Import Portfolio Data (JSON)**.

---

## 8. Free Deployment Guides (Cost: ₹0)

### 8.1 Deploying to Netlify (Free Tier)
1. Sign up for a free account at [netlify.com](https://www.netlify.com).
2. Go to the **Sites** tab and drag and drop your `it-support-portfolio` folder directly into the browser window.
3. Netlify will deploy your website in 10 seconds and generate a free SSL-secured URL (e.g. `https://karthi-it-portfolio.netlify.app`).
4. (Optional) You can customize the free subdomain under **Site configuration > Change site name**.

### 8.2 Deploying to Vercel (Free Tier)
1. Sign up for a free account at [vercel.com](https://vercel.com).
2. Install Vercel CLI (`npm i -g vercel`) or push the folder to a GitHub repository.
3. Import the repository or run `vercel` in your project folder.
4. Select default static configuration.
5. Vercel deploys your site at `https://your-project.vercel.app` at ₹0 cost.

### 8.3 Deploying to GitHub Pages (Free Tier)
1. Create a free repository on [GitHub](https://github.com) named `karthi-portfolio`.
2. Push your files (`index.html`, `admin.html`, `app.js`, `README.md`, `assets/`) to the `main` branch.
3. In your GitHub repository, click **Settings > Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/karthi-portfolio/`.

---

## 9. Security Architecture & Limitations

* **Client-Side Authentication**: The Admin Dashboard in `admin.html` uses browser `localStorage` and `sessionStorage` checks.
* **Appropriate Use**: This architecture allows you to maintain and personalize your website entirely for **₹0** without paying for cloud servers, database subscriptions, or backend hosting.
* **Limitation Notice**: Because this is a static site without a server, any person with browser developer tools can inspect client-side JavaScript. **Never store confidential secrets, private API keys, or production database credentials in this application.**

---

## 10. Summary of Initial Candidate Data

* **Name**: Karthi G
* **Title**: Technical Support Engineer | System Administrator | IT Support
* **Location**: Bangalore, India
* **Relocation**: Open to Malta relocation
* **Availability**: 30 days notice
* **Current Deployment**: Infiniti Engineers Pvt. Ltd. (LEOS-ISRO)
* **Education**: B.Sc Chemistry (Bharathidasan University, 2020) & PGDCA (Guru Computers Institution, 2022)
* **Certification**: Google Technical Support Fundamentals (March 2026)
* **Contact**: karthi.contact3@gmail.com | +91-9361191640 | [LinkedIn Profile](https://in.linkedin.com/in/karthi-g17)
