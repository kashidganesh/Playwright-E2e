# 🧪 Playwright E2E Testing with TypeScript & GitHub Actions

## 🚀 Project Overview
This project demonstrates **end-to-end (E2E) testing** using **Playwright** with **TypeScript**, integrated with **GitHub Actions** for continuous testing automation.  
It supports multiple test suites (`@sanity` and `@regression`) and automatically generates **HTML reports** and **trace files** for debugging.

---

## 🧰 Tech Stack
- **Playwright** – For cross-browser testing (Chromium, Firefox, WebKit)  
- **TypeScript** – For type-safe and maintainable test scripts  
- **Node.js & npm** – For dependency management  
- **GitHub Actions** – For CI/CD automation  
- **Playwright HTML Reporter & Trace Viewer** – For visual debugging  

---

## 📁 Project Structure
```
├── tests/
│   ├── specs/
│   │   ├── login.spec.ts
│   │   └── checkout.spec.ts
│   └── utils/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── playwright.yml
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/kashidganesh/Playwright-E2e_GitHubAction.git
cd playwright-E2e
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Install Playwright browsers
```bash
npx playwright install --with-deps
```

### 4️⃣ Run tests locally
```bash
npx playwright test --grep @sanity
# or
npx playwright test --grep @regression
```

---

## ☁️ Run Tests via GitHub Actions

This project uses a manual workflow trigger that lets you choose which suite to run.

**Example workflow file:** `.github/workflows/playwright.yml`
```yaml
on:
  workflow_dispatch:
    inputs:
      suite:
        description: 'Select test suite to run'
        required: true
        default: '@sanity'
        type: choice
        options:
          - '@sanity'
          - '@regression'
```

Steps include:
- Installing dependencies  
- Running the selected Playwright suite  
- Uploading test artifacts (HTML report + trace.zip files)

---

## 📊 Reports & Debugging

After the test run:
- **Playwright HTML Report** is uploaded as an artifact → view complete execution summary, screenshots, and logs.  
- **Trace files (`.zip`)** are also uploaded → use the Playwright Trace Viewer to replay failed tests:
```bash
npx playwright show-trace trace.zip
```

---

## 💡 Key Features
✅ Cross-browser automation using Playwright  
✅ Tagged test suites (`@sanity`, `@regression`)  
✅ Automated CI/CD execution via GitHub Actions  
✅ HTML and trace reports for easy debugging  
✅ Fully configurable with TypeScript and Playwright config options  

---

## 🙌 Acknowledgements
Thanks to the **Playwright** and **GitHub Actions** teams for their incredible tools that make automation simpler and faster.

---

### 🏷️ Keywords
`#Playwright` `#TypeScript` `#GitHubActions` `#AutomationTesting` `#E2E` `#CI/CD` `#TestAutomation` `#QA`
