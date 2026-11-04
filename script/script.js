let current = 'about';
let language = 'en';

const translations = {
  en: {
    aboutNav: 'About',
    projectsNav: 'Projects',
    role: 'Junior Frontend Developer',
    greeting: "Hi, I'm",
    heroSubtitle: 'Based in Hagan · Open to new opportunities',
    bio: "I'm a frontend developer who enjoys creating modern, responsive and user-friendly web applications. I work with HTML, CSS, JavaScript and React, and care about thoughtful design, clean code and a great user experience (UX). I'm continuously developing my skills through personal projects and exploring new technologies. I'm now looking for my first frontend developer opportunity, where I can contribute, learn and grow as part of a great team.",
    contact: 'Contact',
    skillsTitle: 'Skills',
    categoryCore: 'Core',
    categoryStyling: 'Styling',
    categoryTools: 'Tools',
    availability: 'Available for work · Akershus / Oslo / Remote',
    projectsTitle: 'Projects',
    projectCount: '3 projects',
    jobTrackerDescription: 'JobbTracker is a responsive web app designed to make the job search process easier and more organized. Users can track job applications and deadlines, update application statuses, and save interesting job listings. It includes search and filter tools, an application overview, and support for organizing multiple profiles.',
    weatherDescription: 'A weather dashboard featuring live data from the OpenWeather API, a responsive layout, a five-day forecast and animated icons.',
    blogDescription: 'A personal blog built with Next.js and Markdown, featuring dark mode, syntax highlighting and SEO optimization.',
    footerRole: 'Christina Lu · Junior Frontend Developer',
    footerLocation: 'Hagan, Norway · 2026',
    cvTitle: 'Download CV',
    languageButton: 'Norsk',
    languageLabel: 'Switch language to Norwegian',
    pageTitle: 'Christina Lu — Junior Frontend Developer'
  },
  no: {
    aboutNav: 'Om meg',
    projectsNav: 'Prosjekter',
    role: 'Junior frontend-utvikler',
    greeting: 'Hei, jeg heter',
    heroSubtitle: 'Basert i Hagan · Åpen for nye muligheter',
    bio: 'Jeg er en frontend-utvikler som liker å lage moderne, responsive og brukervennlige webapplikasjoner. Jeg jobber med HTML, CSS, JavaScript og React, og er opptatt av godt design, ryddig kode og gode brukeropplevelser (UX). Jeg er i stadig utvikling gjennom egne prosjekter og ved å utforske nye teknologier. Nå ser jeg etter min første jobbmulighet som frontend-utvikler, der jeg kan bidra, lære og utvikle meg sammen med et godt team.',
    contact: 'Kontakt',
    skillsTitle: 'Ferdigheter',
    categoryCore: 'Kjerne',
    categoryStyling: 'Styling',
    categoryTools: 'Verktøy',
    availability: 'Tilgjengelig for jobb · Akershus / Oslo / fjernarbeid',
    projectsTitle: 'Prosjekter',
    projectCount: '3 prosjekter',
    jobTrackerDescription: 'JobbTracker er en responsiv webapplikasjon som gjør jobbsøkerprosessen enklere og mer oversiktlig. Brukere kan følge opp jobbsøknader og frister, oppdatere søknadsstatus og lagre interessante stillingsannonser. Løsningen har søke- og filtreringsfunksjoner, en oversikt over søknader og støtte for flere profiler.',
    weatherDescription: 'Et vær-dashboard med live data fra OpenWeather API, responsivt design, femdagersvarsel og animerte ikoner.',
    blogDescription: 'En personlig blogg bygget med Next.js og Markdown, med mørk modus, syntaksutheving og SEO-optimalisering.',
    footerRole: 'Christina Lu · Junior Frontend-utvikler',
    footerLocation: 'Hagan, Norge · 2026',
    cvTitle: 'Last ned CV',
    languageButton: 'English',
    languageLabel: 'Bytt språk til engelsk',
    pageTitle: 'Christina Lu — Junior Frontend-utvikler'
  }
};

function setLanguage(nextLanguage) {
  language = nextLanguage;
  const content = translations[language];

  document.documentElement.lang = language;
  document.title = content.pageTitle;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = content[element.dataset.i18n];
  });

  const languageButton = document.getElementById('language-toggle');
  languageButton.textContent = content.languageButton;
  languageButton.setAttribute('aria-label', content.languageLabel);
  document.querySelector('.btn-cv').title = content.cvTitle;
}

function toggleLanguage() {
  setLanguage(language === 'en' ? 'no' : 'en');
}

function show(pageId) {
  if (pageId === current) return;

  const outEl = document.getElementById(current);
  const inEl = document.getElementById(pageId);

  // Gammel side ut — matcher transition tiden (600ms)
  outEl.classList.add('exit-left');
  setTimeout(() => {
    outEl.classList.remove('active', 'exit-left');
  }, 600); // ← var 400, må matche transition

  // Ny side inn litt forsinket så animasjonen overlapper mykt
  setTimeout(() => {
    inEl.classList.add('active');

    if (pageId === 'projects') {
      const grid = inEl.querySelector('.proj-grid');
      grid.classList.remove('proj-stagger');
      void grid.offsetWidth;
      grid.classList.add('proj-stagger');
    }

    if (pageId === 'about') {
      const list = inEl.querySelector('.skill-list');
      list.classList.remove('stagger-in');
      void list.offsetWidth;
      list.classList.add('stagger-in');
    }
  }, 150); // ← vent litt før ny side kommer inn

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + pageId).classList.add('active');

  current = pageId;
}

setLanguage('en');