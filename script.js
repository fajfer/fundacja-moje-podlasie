(function () {
  'use strict';

  /* ════════════════════════════════════════════════
     i18n DICTIONARY
     ════════════════════════════════════════════════ */
  const I18N = {
    pl: {
      'skip': 'Przejdź do treści głównej',
      'brand.home': 'MOJE PODL@SIE — strona główna',
      'nav.about': 'O nas', 'nav.areas': 'Działania', 'nav.timeline': 'Historia',
      'nav.partners': 'Partnerzy', 'nav.contact': 'Kontakt',
      'hero.eyebrow': 'Fundacja · od 2013',
      'hero.headline': 'Nie uczymy technologii. Zmieniamy to, kto ma do niej dostęp.',
      'hero.sub': 'Tworzymy programy edukacji cyfrowej, które otwierają dostęp do AI, technologii i nowych kompetencji — niezależnie od miejsca, wieku i pochodzenia.',
      'hero.cta': 'Dowiedz się więcej',
      'hero.cta.aria': 'Dowiedz się więcej o fundacji',
      'hero.art': 'Linia łącząca grupę postaci ludzkich',
      'manifesto.eyebrow': 'Manifest',
      'manifesto.intro': 'W świecie, w którym technologia decyduje o dostępie do edukacji, pracy i usług publicznych, brak umiejętności cyfrowych oznacza wykluczenie.',
      'manifesto.line': 'Nie zgadzamy się na ten scenariusz.',
      'manifesto.about': 'Fundacja <strong>«MOJE PODL@SIE. NOWOCZESNE, KREATYWNE, TWÓRCZE»</strong> od <strong>ponad dekady</strong> działa na styku technologii i odpowiedzialności społecznej. Tworzymy rozwiązania, które <strong>skalują się cyfrowo, ale działają lokalnie</strong> — od małych miast po projekty ogólnokrajowe.',
      'manifesto.work.label': 'Co robimy',
      'manifesto.work.bold': 'Nie prowadzimy szkoleń.',
      'manifesto.work.through': 'Projektujemy zmianę systemową poprzez:',
      'manifesto.work.b1': 'edukację cyfrową i technologiczną',
      'manifesto.work.b2': 'wdrażanie AI w działania społeczne',
      'manifesto.work.b3': 'rozwijanie kompetencji przyszłości',
      'manifesto.work.b4': 'wzmacnianie NGO i instytucji w transformacji cyfrowej',
      'about.eyebrow': 'O nas',
      'about.title': 'Niewielka fundacja z dużym zasięgiem.',
      'about.intro': 'Jesteśmy organizacją, która widzi w technologii coś więcej niż narzędzie. Widzimy w niej <strong>mechanizm wyrównywania szans</strong>.',
      'about.bold': 'Nie pracujemy „dla technologii." Pracujemy dla ludzi, którzy bez niej zostają w tyle.',
      'about.mission.title': 'Misja', 'about.mission.body': 'Zamykamy lukę między tymi, którzy mają dostęp do technologii, a tymi, którzy go nie mają.',
      'about.mission.icon': 'Ikona — misja',
      'about.vision.title': 'Wizja', 'about.vision.body': 'Świat, w którym miejsce zamieszkania, wiek ani status społeczny nie decydują o dostępie do kompetencji cyfrowych.',
      'about.vision.icon': 'Ikona — wizja',
      'about.why.title': 'Dlaczego to ważne',
      'about.why.b1': 'Ponad 40% dorosłych w UE ma niewystarczające umiejętności cyfrowe',
      'about.why.b2': 'Różnice regionalne w Polsce wciąż są wyraźne',
      'about.why.b3': 'Brak umiejętności cyfrowych oznacza gorsze szanse na rynku pracy',
      'about.why.b4': 'Działamy tam, gdzie statystyki przestają być abstrakcją',
      'about.why.icon': 'Ikona — dlaczego to ważne',
      'about.stat1': 'Dorosłych w UE nie posiada podstawowych umiejętności cyfrowych.',
      'about.stat2': 'Lat pracy edukacyjnej w regionie Podlasia.',
      'areas.eyebrow': 'Obszary',
      'areas.title': 'Pięć kierunków działania.',
      'areas.edu.title': 'Edukacja cyfrowa', 'areas.edu.body': 'Bezpłatne kursy AI dla dzieci, młodzieży i seniorów.', 'areas.edu.icon': 'Ikona — edukacja cyfrowa',
      'areas.tech.title': 'Nowe technologie', 'areas.tech.body': 'Pilotaże narzędzi AI w trzecim sektorze.', 'areas.tech.icon': 'Ikona — nowe technologie',
      'areas.incl.title': 'Integracja społeczna', 'areas.incl.body': 'Programy włączające osoby zagrożone wykluczeniem.', 'areas.incl.icon': 'Ikona — integracja społeczna',
      'areas.ent.title': 'Przedsiębiorczość', 'areas.ent.body': 'Wsparcie cyfrowe dla mikroprzedsiębiorców.', 'areas.ent.icon': 'Ikona — przedsiębiorczość',
      'areas.cyb.title': 'Cyberbezpieczeństwo', 'areas.cyb.body': 'Edukacja o ochronie danych i higienie cyfrowej.', 'areas.cyb.icon': 'Ikona — cyberbezpieczeństwo',
      'timeline.eyebrow': 'Historia',
      'timeline.title': '12 lat. Jedna ciągła linia.',
      'timeline.sub': 'Nie jesteśmy nowi. Jesteśmy konsekwentni. Od ponad 12 lat rozwijamy działania odpowiadające na zmieniający się świat technologii.',
      'timeline.cta': 'Nie gonimy trendów. Wyznaczamy kierunki.',
      'strategy.eyebrow': 'Nasze podejście',
      'strategy.title': 'Nie tworzymy projektów dla samych projektów.',
      'strategy.sub': 'Tworzymy rozwiązania, które można skalować, replikować i wdrażać systemowo.',
      'strategy.model.title': 'Model działania',
      'strategy.model.1': 'Online-first',
      'strategy.model.2': 'Partnerstwa międzysektorowe',
      'strategy.model.3': 'Pilotaże → Wdrożenia → Skalowanie',
      'strategy.innov.title': 'Innowacja',
      'strategy.innov.body': 'Dla nas AI to nie trend. To narzędzie, które pozwala nam działać szybciej, skuteczniej i szerzej.',
      'docs.eyebrow': 'Dokumenty',
      'docs.title': 'Sprawozdania i polityki.',
      'partners.eyebrow': 'Partnerstwa',
      'partners.title': 'Nie szukamy odbiorców. Szukamy partnerów.',
      'partners.with.title': 'Współpracujemy z',
      'partners.with.1': 'Organizacjami pozarządowymi',
      'partners.with.2': 'Szkołami',
      'partners.with.3': 'Samorządami',
      'partners.with.4': 'Firmami',
      'partners.bring.title': 'Co wnosimy',
      'partners.bring.1': 'Technologię',
      'partners.bring.2': 'Doświadczenie',
      'partners.bring.3': 'Skalowalność',
      'partners.bring.4': 'Realny wpływ',
      'partners.gain.title': 'Co zyskujesz',
      'partners.gain.body': 'Nie tylko projekt. Zyskujesz partnera, który rozumie przyszłość.',
      'contact.eyebrow': 'Kontakt',
      'contact.headline': 'Masz pomysł? Świetnie.',
      'contact.sub': 'Napisz do odpowiedniego działu. Odpowiadamy w ciągu dwóch dni roboczych.',
      'footer.copy': '© 2026 MOJE PODL@SIE — Fundacja Nowoczesna, Kreatywna, Twórcza.',
      'footer.motion': 'Zatrzymaj animacje',
      'footer.motion.on': 'Włącz animacje',
      'footer.motion.aria': 'Włącz lub wyłącz animacje strony',
      'modal.close': 'Zamknij',
      'nav.main': 'Główna nawigacja',
      'lang.group': 'Wybór języka',
      'timeline.wrap.aria': 'Linia czasu projektów',
      'loader.aria': 'Ładowanie',
      'lang.pl.label': 'Polski (aktywny)',
      'lang.en.label': 'Switch to English'
    },
    en: {
      'skip': 'Skip to main content',
      'brand.home': 'MOJE PODL@SIE — home page',
      'nav.about': 'About', 'nav.areas': 'Areas', 'nav.timeline': 'History',
      'nav.partners': 'Partners', 'nav.contact': 'Contact',
      'hero.eyebrow': 'Foundation · est. 2013',
      'hero.headline': "We don't teach technology. We change who has access to it.",
      'hero.sub': 'We design digital education programs that open access to AI, tech and new skills — regardless of place, age or background.',
      'hero.cta': 'Learn more',
      'hero.cta.aria': 'Learn more about the foundation',
      'hero.art': 'Line connecting a group of human figures',
      'manifesto.eyebrow': 'Manifesto',
      'manifesto.intro': 'In a world where technology determines access to education, jobs, and public services, a lack of digital skills means exclusion.',
      'manifesto.line': 'We refuse this scenario.',
      'manifesto.about': 'The <strong>"MOJE PODL@SIE. MODERN, CREATIVE, ARTISTIC"</strong> Foundation has been operating at the intersection of technology and social responsibility for <strong>over a decade</strong>. We create solutions that <strong>scale digitally but operate locally</strong> — from small towns to nationwide projects.',
      'manifesto.work.label': 'What we do',
      'manifesto.work.bold': "We don't provide training.",
      'manifesto.work.through': 'We design systemic change through:',
      'manifesto.work.b1': 'digital and technological education',
      'manifesto.work.b2': 'implementing AI in social activities',
      'manifesto.work.b3': 'developing future-proof competencies',
      'manifesto.work.b4': 'strengthening NGOs and institutions in digital transformation',
      'about.eyebrow': 'About',
      'about.title': 'A small foundation with wide reach.',
      'about.intro': 'We are an organization that sees technology as more than just a tool. We see it as a <strong>mechanism for equalizing opportunities</strong>.',
      'about.bold': "We don't work \"for technology.\" We work for people who are left behind without it.",
      'about.mission.title': 'Mission', 'about.mission.body': "We close the gap between those who have access to technology and those who don't.",
      'about.mission.icon': 'Icon — mission',
      'about.vision.title': 'Vision', 'about.vision.body': "A world where place of residence, age, or social status don't determine access to digital skills.",
      'about.vision.icon': 'Icon — vision',
      'about.why.title': 'Why it matters',
      'about.why.b1': 'Over 40% of adults in the EU have insufficient digital skills',
      'about.why.b2': 'Regional differences in Poland remain pronounced',
      'about.why.b3': 'A lack of digital skills means lower job opportunities',
      'about.why.b4': 'We operate where statistics cease to be abstract',
      'about.why.icon': 'Icon — why it matters',
      'about.stat1': 'of EU adults lack basic digital skills.',
      'about.stat2': 'years of educational work in Podlasie.',
      'areas.eyebrow': 'Areas',
      'areas.title': 'Five directions of work.',
      'areas.edu.title': 'Digital Education', 'areas.edu.body': 'Free AI courses for children, youth and seniors.', 'areas.edu.icon': 'Icon — digital education',
      'areas.tech.title': 'New Technologies', 'areas.tech.body': 'Piloting AI tools across the third sector.', 'areas.tech.icon': 'Icon — new technologies',
      'areas.incl.title': 'Social Integration', 'areas.incl.body': 'Inclusion programs for those at risk of exclusion.', 'areas.incl.icon': 'Icon — social integration',
      'areas.ent.title': 'Entrepreneurship', 'areas.ent.body': 'Digital support for micro-entrepreneurs.', 'areas.ent.icon': 'Icon — entrepreneurship',
      'areas.cyb.title': 'Cybersecurity', 'areas.cyb.body': 'Education on data protection and digital hygiene.', 'areas.cyb.icon': 'Icon — cybersecurity',
      'timeline.eyebrow': 'History',
      'timeline.title': '12 years. One continuous line.',
      'timeline.sub': "We're not new. We're consistent. For over 12 years, we've been developing activities that respond to the changing world of technology.",
      'timeline.cta': "We don't chase trends. We create directions.",
      'strategy.eyebrow': 'Our Approach',
      'strategy.title': "We don't create projects for the sake of projects.",
      'strategy.sub': 'We create solutions that can be scaled, replicated, and implemented systemically.',
      'strategy.model.title': 'Operating Model',
      'strategy.model.1': 'Online-first',
      'strategy.model.2': 'Cross-sector partnerships',
      'strategy.model.3': 'Pilots → Implementations → Scaling',
      'strategy.innov.title': 'Innovation',
      'strategy.innov.body': "For us, AI is not a trend. It's a tool that allows us to operate faster, more effectively, and more broadly.",
      'docs.eyebrow': 'Documents',
      'docs.title': 'Reports and policies.',
      'partners.eyebrow': 'Partnerships',
      'partners.title': "We're not looking for audiences. We're looking for partners.",
      'partners.with.title': 'We work with',
      'partners.with.1': 'NGOs',
      'partners.with.2': 'Schools',
      'partners.with.3': 'Local governments',
      'partners.with.4': 'Companies',
      'partners.bring.title': 'What we bring',
      'partners.bring.1': 'Technology',
      'partners.bring.2': 'Experience',
      'partners.bring.3': 'Scalability',
      'partners.bring.4': 'Real impact',
      'partners.gain.title': 'What you gain',
      'partners.gain.body': 'Not just a project. You gain a partner who understands the future.',
      'contact.eyebrow': 'Contact',
      'contact.headline': 'Have an idea? Great.',
      'contact.sub': 'Write to the right team. We answer within two business days.',
      'footer.copy': '© 2026 MOJE PODL@SIE — Modern, Creative, Original Foundation.',
      'footer.motion': 'Reduce motion',
      'footer.motion.on': 'Enable motion',
      'footer.motion.aria': 'Toggle page animations on or off',
      'modal.close': 'Close',
      'nav.main': 'Main navigation',
      'lang.group': 'Language selection',
      'timeline.wrap.aria': 'Project timeline',
      'loader.aria': 'Loading',
      'lang.pl.label': 'Switch to Polish',
      'lang.en.label': 'English (active)'
    }
  };

  /* ════════════════════════════════════════════════
     TIMELINE DATA
     ════════════════════════════════════════════════ */
  const TIMELINE = [
    { year: '2015', projects: [
      { pl: 'Projekt „Start po nowe jutro”', en: 'Project “Start for a new tomorrow”', funder: 'Narodowy Bank Polski', amount: '29 000 zł' },
      { pl: '„Wspólna sprawa, wspólna praca — aktywizacja środowiska NGO na terenie gm. Grajewo”', en: '“Common cause, common work — NGO activation in Grajewo municipality”', funder: 'Ministerstwo Rodziny, Pracy i Polityki Społecznej', amount: '63 300 zł' }
    ]},
    { year: '2018', projects: [
      { pl: '„Seria wykładów: Poszerzanie wiedzy odnośnie faktu stanowienia prawa unijnego oraz budżetu wspólnotowego na okres 2021–2027”', en: '“Lecture series: Expanding knowledge on EU law-making and Community budget 2021–2027”', funder: 'Ministerstwo Inwestycji i Rozwoju', amount: '19 000 zł' }
    ]},
    { year: '2021', projects: [
      { pl: 'Podlaskie — Ojczyzna Ojczyzn', en: 'Podlasie — Homeland of Homelands', funder: 'Narodowe Centrum Kultury', amount: '89 000 zł' },
      { pl: 'Digitalizacja zasobów kultury i dziedzictwa narodowego', en: 'Digitization of cultural and national heritage resources', funder: 'Ministerstwo Kultury i Dziedzictwa Narodowego', amount: '46 500 zł' },
      { pl: 'Rewers — interaktywne kursy dla studentów na lokalnym rynku pracy', en: 'Rewers — interactive courses for students in the local job market', funder: 'Fundacja PZU', amount: '50 000 zł' },
      { pl: 'Podl@sie w sieci', en: 'Podl@sie online', funder: 'Narodowy Instytut Wolności', amount: '130 440 zł' }
    ]},
    { year: '2022', projects: [
      { pl: 'Ciągły rozwój — inkubator społeczno-technologiczny (pilotaż)', en: 'Continuous development — socio-tech incubator (pilot)', funder: 'Ministerstwo Edukacji i Nauki', amount: '300 100 zł' },
      { pl: 'Szkolenia dla osób starszych z terenu powiatu grajewskiego', en: 'Training for seniors in the Grajewo district', funder: 'Kancelaria Prezesa Rady Ministrów', amount: '20 000 zł' }
    ]},
    { year: '2023', projects: [
      { pl: 'Akademia cyfrowa seniora ziemi grajewskiej', en: 'Digital Academy for Grajewo seniors', funder: 'Ministerstwo Rodziny i Polityki Społecznej', amount: '78 472 zł' },
      { pl: 'Modernizacja i rozwój fundacji', en: 'Foundation modernization and development', funder: 'Ministerstwo Rodziny i Polityki Społecznej', amount: '170 000 zł' },
      { pl: 'Wkład własny: Akademia Cyfrowa Seniora', en: 'Co-funding: Senior Digital Academy', funder: 'Urząd Marszałkowski woj. Podlaskiego', amount: '2 000 zł' },
      { pl: 'Internet jako możliwość rozwiązania problemów osób wykluczonych', en: 'Internet as a solution for digitally excluded communities', funder: 'Ministerstwo Funduszy i Polityki Regionalnej', amount: '89 000 zł' }
    ]},
    { year: '2024', projects: [
      { pl: 'Klub aktywności społecznej dla ludzi młodych', en: 'Social activity club for young people', funder: 'Narodowy Instytut Wolności', amount: '172 837 zł' },
      { pl: 'Zakup drona do działań wolontaryjnych', en: 'Drone purchase for volunteer activities', funder: 'Narodowy Instytut Wolności', amount: '5 900 zł' },
      { pl: 'Stop wykluczeniu! Rozwój kompetencji cyfrowych', en: 'Stop exclusion! Digital skills development', funder: 'Ministerstwo Rodziny, Pracy i Polityki Społecznej', amount: '230 385 zł' },
      { pl: 'Cyfrowa Kronika Grajewian', en: 'Digital Chronicle of Grajewo residents', funder: 'Narodowy Instytut Muzyki i Tańca', amount: '39 087 zł' }
    ]},
    { year: '2025', projects: [
      { pl: 'Łowe Szczuczyn!', en: 'Łowe Szczuczyn!', funder: 'Wojewódzki Urząd Pracy w Białymstoku', amount: '471 469 zł' },
      { pl: 'Świadomy senior XXI wieku', en: '21st century conscious senior', funder: 'Kancelaria Prezesa Rady Ministrów', amount: '215 355 zł' },
      { pl: 'Wzmocnienie Grajewskiej Federacji Organizacji Pozarządowych', en: 'Strengthening the Grajewo NGO Federation', funder: 'Narodowy Instytut Wolności', amount: '159 210 zł' }
    ]}
  ];

  /* ════════════════════════════════════════════════
     DOCUMENTS
     ════════════════════════════════════════════════ */
  const DOCS = [
    {
      pl: { title: 'Sprawozdanie roczne 2025', meta: 'PDF · 24 strony', body: 'Pełne sprawozdanie z działalności fundacji w 2025 roku, w tym zasięg programów, finanse i ewaluację wpływu społecznego.' },
      en: { title: 'Annual Report 2025',        meta: 'PDF · 24 pages',  body: 'Full report on foundation activity in 2025, including program reach, finances and social-impact evaluation.' }
    },
    {
      pl: { title: 'Polityka etyki AI',         meta: 'PDF · 8 stron',   body: 'Zasady, którymi kierujemy się przy projektowaniu i wdrażaniu narzędzi opartych na sztucznej inteligencji.' },
      en: { title: 'AI Ethics Policy',          meta: 'PDF · 8 pages',   body: 'Principles guiding the design and deployment of AI-based tools across our programs.' }
    },
    {
      pl: { title: 'Raport o wykluczeniu cyfrowym', meta: 'PDF · 36 stron', body: 'Diagnoza luki cyfrowej w regionie Podlasia oraz rekomendacje polityk publicznych.' },
      en: { title: 'Digital Exclusion Report',      meta: 'PDF · 36 pages', body: 'Diagnosis of the digital gap in the Podlasie region and public-policy recommendations.' }
    },
    {
      pl: { title: 'Statut fundacji',           meta: 'PDF · 12 stron',  body: 'Dokument założycielski określający cele, władze i zasady działania fundacji.' },
      en: { title: 'Foundation Bylaws',         meta: 'PDF · 12 pages',  body: 'Founding document defining goals, governance and operating principles of the foundation.' }
    }
  ];

  /* ════════════════════════════════════════════════
     CONTACTS
     ════════════════════════════════════════════════ */
  const CONTACTS = [
    { dept: { pl: 'Dział Strategii',     en: 'Strategy' },     email: 'strategia@mojepodlasie.org', icon: 'compass' },
    { dept: { pl: 'Dział Programów',     en: 'Programs' },     email: 'programy@mojepodlasie.org',  icon: 'spark' },
    { dept: { pl: 'Edukacja',            en: 'Education' },    email: 'edukacja@mojepodlasie.org',  icon: 'cap' },
    { dept: { pl: 'Partnerstwa',         en: 'Partnerships' }, email: 'partnerzy@mojepodlasie.org', icon: 'link' },
    { dept: { pl: 'Media',               en: 'Press' },        email: 'media@mojepodlasie.org',     icon: 'mic' },
    { dept: { pl: 'Sekretariat',         en: 'Front desk' },   email: 'kontakt@mojepodlasie.org',   icon: 'envelope' }
  ];

  const ICONS = {
    envelope: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 8 L28 8 L28 24 L4 24 Z"/><path d="M4 8 L16 18 L28 8"/></svg>',
    spark:    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 L19 13 L28 16 L19 19 L16 28 L13 19 L4 16 L13 13 Z"/></svg>',
    compass:  '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12"/><path d="M22 10 L14 14 L10 22 L18 18 Z"/></svg>',
    cap:      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 14 L16 8 L28 14 L16 20 Z"/><path d="M10 17 L10 24 Q16 28, 22 24 L22 17"/></svg>',
    link:     '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 20 L8 16 Q5 13, 8 10 L12 6 Q15 3, 18 6 L20 8"/><path d="M20 12 L24 16 Q27 19, 24 22 L20 26 Q17 29, 14 26 L12 24"/><line x1="13" y1="19" x2="19" y2="13"/></svg>',
    mic:      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 Q12 4, 12 8 L12 16 Q12 20, 16 20 Q20 20, 20 16 L20 8 Q20 4, 16 4 Z"/><path d="M8 16 Q8 24, 16 24 Q24 24, 24 16"/><line x1="16" y1="24" x2="16" y2="28"/></svg>'
  };

  /* ════════════════════════════════════════════════
     STATE
     ════════════════════════════════════════════════ */
  const state = {
    lang: 'pl',
    reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  /* ════════════════════════════════════════════════
     I18N APPLY
     ════════════════════════════════════════════════ */
  function applyI18n() {
    const dict = I18N[state.lang];
    document.documentElement.lang = state.lang;

    // WCAG 2.4.2 — aggiorna il titolo della pagina con la lingua attiva
    const titleKey = state.lang === 'pl'
      ? 'MOJE PODL@SIE — Nowoczesne, Kreatywne, Twórcze'
      : 'MOJE PODL@SIE — Modern, Creative, Original';
    document.title = titleKey;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      const val = dict[key];
      // Values containing markup are set via innerHTML (safe: only our own strings)
      if (val.includes('<')) { el.innerHTML = val; return; }
      // Preserve child elements (e.g. aria-hidden decorative spans, SVG icons):
      // update only the first non-empty text node instead of clobbering innerHTML
      let updated = false;
      for (const child of el.childNodes) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
          child.textContent = val;
          updated = true;
          break;
        }
      }
      // Leaf node with no text node yet — safe to set textContent directly
      if (!updated) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });

    // Lang toggle pressed states + aria
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      const isActive = btn.dataset.lang === state.lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.setAttribute('aria-label', dict['lang.' + btn.dataset.lang + '.label']);
    });

    // Skip link visible label updates via data-i18n already; also the aria
    const skip = document.querySelector('.skip-link');
    if (skip) skip.setAttribute('aria-label', dict['skip']);

    // Modal close button label
    const mc = document.getElementById('modalClose');
    if (mc) mc.setAttribute('aria-label', dict['modal.close']);

    // Re-render dynamic lists (timeline + docs + contacts) in the new language
    renderTimeline();
    renderDocs();
    renderContacts();

    // Re-prepare contact icon draw state after language re-render
    // (the IntersectionObserver that fires animateIconDraw is set up once in setupIconsDraw)
    setTimeout(() => {
      document.querySelectorAll('.contact-card svg').forEach(prepareIconDraw);
    }, 100);

    // Re-run typed headline in the new language
    runTypedHeadline();
  }

  /* ════════════════════════════════════════════════
     TYPED HEADLINE
     ════════════════════════════════════════════════ */
  let typedAbort = null;
  function runTypedHeadline() {
    const target = document.getElementById('typed');
    if (!target) return;
    const text = I18N[state.lang]['hero.headline'];

    if (typedAbort) typedAbort.aborted = true;
    const ctrl = { aborted: false };
    typedAbort = ctrl;

    target.textContent = '';

    if (state.reduceMotion) {
      target.textContent = text;
      return;
    }

    let i = 0;
    const tick = () => {
      if (ctrl.aborted) return;
      target.textContent = text.slice(0, i);
      if (i < text.length) {
        i++;
        setTimeout(tick, 38);
      }
    };
    tick();
  }

  /* ════════════════════════════════════════════════
     COUNTERS
     ════════════════════════════════════════════════ */
  function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      // Accessibility: announce the final value immediately
      el.setAttribute('aria-label', String(target));
      el.textContent = state.reduceMotion ? target : '0';
    });

    if (state.reduceMotion) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased);
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = target;
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => io.observe(c));
  }

  /* ════════════════════════════════════════════════
     ABOUT INTRO ENTRANCE
     ════════════════════════════════════════════════ */
  function setupAbout() {
    const intro = document.querySelector('.about-intro');
    if (!intro) return;
    const text = intro.querySelector('.about-intro-text');
    const boldWrap = intro.querySelector('.about-bold-wrap');

    // About drawing SVG setup
    const aboutDrawing = document.querySelector('.about-drawing');
    const aboutPath = document.querySelector('.about-draw-path');
    if (aboutPath) {
      let len = 0;
      try { len = aboutPath.getTotalLength(); } catch (e) { len = 40000; }
      aboutPath.style.strokeDasharray  = len;
      aboutPath.style.strokeDashoffset = state.reduceMotion ? 0 : len;
      aboutPath.style.transition       = 'none';
    }

    if (state.reduceMotion) {
      [text, boldWrap].forEach(el => { if (el) el.classList.add('in-view'); });
      if (aboutDrawing) aboutDrawing.classList.add('in-view');
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (text) text.classList.add('in-view');
        setTimeout(() => { if (boldWrap) boldWrap.classList.add('in-view'); }, 300);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    io.observe(intro);

    // Observer for the about drawing SVG
    if (aboutDrawing && aboutPath) {
      const drawIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          aboutDrawing.classList.add('in-view');
          aboutPath.getBoundingClientRect();
          aboutPath.style.transition       = 'stroke-dashoffset 7s ease-in-out';
          aboutPath.style.strokeDashoffset = '0';
          drawIO.unobserve(entry.target);
        });
      }, { threshold: 0.2 });
      drawIO.observe(aboutDrawing);
    }
  }

  /* ════════════════════════════════════════════════
     ICON DRAW-ON-SCROLL (areas, about, contact)
     ════════════════════════════════════════════════ */
  // Prepare a single SVG for stroke animation
  function prepareIconDraw(svg) {
    if (!svg) return;
    const els = svg.querySelectorAll('path, line, circle, polyline, polygon');
    els.forEach(el => {
      let len = 0;
      try { len = el.getTotalLength(); } catch (e) {
        const r = parseFloat(el.getAttribute('r'));
        if (r) len = 2 * Math.PI * r;
        else len = 200;
      }
      el.style.strokeDasharray  = len;
      el.style.strokeDashoffset = state.reduceMotion ? 0 : len;
    });
    svg.classList.add('draw-ready');
  }

  // Animate a single SVG (draw it)
  function animateIconDraw(svg) {
    if (!svg) return;
    svg.classList.add('draw-animate');
    svg.querySelectorAll('path, line, circle, polyline, polygon').forEach(el => {
      el.style.strokeDashoffset = '0';
    });
  }

  // Observe a container and stagger-draw all SVGs inside it
  function observeIconGroup(container, svgSelector, stagger) {
    if (!container || state.reduceMotion) return;
    const svgs = container.querySelectorAll(svgSelector);
    if (!svgs.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        svgs.forEach((svg, i) => {
          setTimeout(() => animateIconDraw(svg), i * stagger);
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    io.observe(container);
  }

  function setupIconsDraw() {
    // ── Drone illustration (areas header) ──
    const droneSvg = document.getElementById('droneIllu');
    if (droneSvg) {
      const droneEls = droneSvg.querySelectorAll('path, polygon');
      droneEls.forEach(el => {
        let len = 0;
        try { len = el.getTotalLength(); } catch (e) { len = 600; }
        el.style.strokeDasharray  = len;
        el.style.strokeDashoffset = state.reduceMotion ? 0 : len;
        el.style.opacity = '1';
        el.style.transition = 'none';
      });
      droneSvg.classList.add('is-ready');
      if (!state.reduceMotion) {
        const dio = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            droneEls.forEach((el, i) => {
              el.style.transition = 'stroke-dashoffset 5.8s ease-in-out ' + (i * 11) + 'ms';
              el.style.strokeDashoffset = '0';
            });
            dio.unobserve(entry.target);
          });
        }, { threshold: 0.2 });
        dio.observe(droneSvg);
      }
    }

    // ── Laptop illustration (docs header) — two-phase draw ──
    const printerSvg = document.getElementById('printerIllu');
    if (printerSvg) {
      const allEls   = [...printerSvg.querySelectorAll('path, polygon, line, polyline')];
      const outerEls = allEls.slice(0, 2);   // body shell + screen frame
      const innerEls = allEls.slice(2);       // keyboard, ports, screen lines
      allEls.forEach(el => {
        let len = 0;
        try { len = el.getTotalLength(); } catch (e) { len = 400; }
        el.style.strokeDasharray  = len;
        el.style.strokeDashoffset = state.reduceMotion ? 0 : len;
        el.style.opacity = '1';
        el.style.transition = 'none';
      });
      printerSvg.style.opacity = '1';
      if (!state.reduceMotion) {
        const prio = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            // Phase 1: outer paths (body + bezel)
            let outerMaxEnd = 0;
            outerEls.forEach((el, i) => {
              const len   = parseFloat(el.style.strokeDasharray) || 400;
              const dur   = Math.min(Math.max(400, len * 2.5), 3500);
              const delay = i * 200;
              outerMaxEnd = Math.max(outerMaxEnd, dur + delay);
              el.style.transition = `stroke-dashoffset ${dur}ms ease-in-out ${delay}ms`;
              el.style.strokeDashoffset = '0';
            });
            // Phase 2: inner paths start when outer is ~60% done
            const innerStart = Math.round(outerMaxEnd * 0.6);
            innerEls.forEach((el, i) => {
              const len = parseFloat(el.style.strokeDasharray) || 200;
              const dur = Math.min(Math.max(200, len * 2), 2000);
              el.style.transition = `stroke-dashoffset ${dur}ms ease-in-out ${innerStart + i * 120}ms`;
              el.style.strokeDashoffset = '0';
            });
            prio.unobserve(entry.target);
          });
        }, { threshold: 0.25 });
        prio.observe(printerSvg);
      }
    }

    // ── Smartphone illustration (contact header) ──
    const phoneSvg = document.getElementById('smartphoneIllu');
    if (phoneSvg) {
      const phonePaths = [...phoneSvg.querySelectorAll('path')];
      const phoneLines = [...phoneSvg.querySelectorAll('line')];
      const phoneDots  = [...phoneSvg.querySelectorAll('circle')];

      // Prepare phone body paths
      phonePaths.forEach(el => {
        let len = 0;
        try { len = el.getTotalLength(); } catch (e) { len = 1000; }
        el.style.strokeDasharray  = len;
        el.style.strokeDashoffset = state.reduceMotion ? 0 : len;
        el.style.opacity = '1';
        el.style.transition = 'none';
      });

      // Prepare network lines
      phoneLines.forEach(l => {
        let len = 0;
        try { len = l.getTotalLength(); } catch (e) { len = 400; }
        l.style.strokeDasharray  = len;
        l.style.strokeDashoffset = state.reduceMotion ? 0 : len;
        l.style.opacity = '1';
        l.style.transition = 'none';
      });

      // Prepare network dots — hidden via scale
      phoneDots.forEach(d => {
        d.style.opacity    = '0';
        d.style.transform  = 'scale(0)';
        d.style.transformBox = 'fill-box';
        d.style.transformOrigin = 'center';
        d.style.transition = 'none';
        if (state.reduceMotion) { d.style.opacity = '1'; d.style.transform = 'scale(1)'; }
      });

      phoneSvg.style.opacity = '1';

      if (!state.reduceMotion) {
        // BFS: find central node (most-connected) and assign wave orders
        const dotPos = phoneDots.map(d => ({
          x: parseFloat(d.getAttribute('cx')),
          y: parseFloat(d.getAttribute('cy')),
          el: d, connections: 0, order: -1
        }));
        const SNAP = 15;
        function findDot(x, y) {
          return dotPos.find(d => Math.hypot(d.x - x, d.y - y) < SNAP);
        }
        const lineInfo = phoneLines.map(l => {
          const x1 = parseFloat(l.getAttribute('x1')), y1 = parseFloat(l.getAttribute('y1'));
          const x2 = parseFloat(l.getAttribute('x2')), y2 = parseFloat(l.getAttribute('y2'));
          const d1 = findDot(x1, y1), d2 = findDot(x2, y2);
          if (d1) d1.connections++;
          if (d2) d2.connections++;
          return { el: l, d1, d2, order: -1 };
        });
        // Central = most connected
        const central = dotPos.reduce((a, b) => b.connections > a.connections ? b : a, dotPos[0]);
        central.order = 0;
        let wave = 0;
        let frontier = [central];
        while (frontier.length) {
          const nextFrontier = [];
          for (const dot of frontier) {
            lineInfo.forEach(li => {
              if (li.order >= 0) return;
              let other = null;
              if (li.d1 === dot) other = li.d2;
              else if (li.d2 === dot) other = li.d1;
              if (!other) return;
              li.order = wave + 1;
              if (other.order < 0) {
                other.order = wave + 1;
                nextFrontier.push(other);
              }
            });
          }
          wave++;
          frontier = nextFrontier;
        }
        // Orphan dots/lines get last wave
        dotPos.forEach(d => { if (d.order < 0) d.order = wave; });
        lineInfo.forEach(l => { if (l.order < 0) l.order = wave; });
        const maxWave = wave;

        // Direction detection: for each line, draw from the lower-order endpoint outward
        lineInfo.forEach(li => {
          const len = li.el.getTotalLength();
          const o1 = li.d1 ? li.d1.order : maxWave;
          const o2 = li.d2 ? li.d2.order : maxWave;
          li.el.style.strokeDashoffset = (o1 <= o2) ? len : -len;
        });

        function runPhoneAnimation() {
          // Phase 1: draw phone body
          phonePaths.forEach((el, i) => {
            el.style.transition = 'stroke-dashoffset 3s ease-in-out ' + (i * 150) + 'ms';
            el.style.strokeDashoffset = '0';
          });
          const phoneBodyDone = phonePaths.length * 150 + 3000;

          // Phase 2: BFS network radiation
          const DOT_DUR = 280;
          const WAVE_PAUSE = 80;
          const totalLineLen = lineInfo.reduce((s, li) => s + li.el.getTotalLength(), 0);
          const DRAW_BUDGET = 2200;
          const speed = totalLineLen > 0 ? DRAW_BUDGET / totalLineLen : 3;

          function showDotsForWave(w) {
            const waveDots = dotPos.filter(d => d.order === w);
            waveDots.forEach(d => {
              d.el.style.transition = 'opacity ' + DOT_DUR + 'ms cubic-bezier(0.34, 1.56, 0.64, 1), transform ' + DOT_DUR + 'ms cubic-bezier(0.34, 1.56, 0.64, 1)';
              d.el.style.opacity = '1';
              d.el.style.transform = 'scale(1)';
            });
            return new Promise(r => setTimeout(r, DOT_DUR));
          }
          function drawLinesForWave(w) {
            const waveLines = lineInfo.filter(l => l.order === w);
            let maxDur = 0;
            waveLines.forEach(li => {
              const dur = Math.max(200, li.el.getTotalLength() * speed);
              if (dur > maxDur) maxDur = dur;
              li.el.style.transition = 'stroke-dashoffset ' + dur + 'ms linear';
              li.el.style.strokeDashoffset = '0';
            });
            return new Promise(r => setTimeout(r, maxDur));
          }

          setTimeout(async () => {
            await showDotsForWave(0);
            await new Promise(r => setTimeout(r, WAVE_PAUSE));
            for (let w = 1; w <= maxWave; w++) {
              await drawLinesForWave(w);
              await showDotsForWave(w);
              if (w < maxWave) await new Promise(r => setTimeout(r, WAVE_PAUSE));
            }
          }, phoneBodyDone);
        }

        const pio = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            runPhoneAnimation();
            pio.unobserve(entry.target);
          });
        }, { threshold: 0.2 });
        pio.observe(phoneSvg);
      }
    }

    // ── Areas icons ──
    document.querySelectorAll('.area svg.line-art').forEach(prepareIconDraw);
    observeIconGroup(document.querySelector('.areas-grid'), 'svg.line-art', 200);

    // ── About icons (Mission, Vision, Why) — observe each card individually ──
    document.querySelectorAll('.about-card').forEach(card => {
      const svg = card.querySelector('.about-icon');
      if (svg) {
        prepareIconDraw(svg);
        if (!state.reduceMotion) {
          const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (!entry.isIntersecting) return;
              animateIconDraw(svg);
              io.unobserve(entry.target);
            });
          }, { threshold: 0.3 });
          io.observe(card);
        }
      }
    });

    // ── Contact icons (generated dynamically) ──
    // Custom observer: only trigger when user scrolls contact section into view
    setTimeout(() => {
      const contactSvgs = document.querySelectorAll('.contact-card svg');
      contactSvgs.forEach(prepareIconDraw);
      if (!state.reduceMotion && contactSvgs.length) {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const cio = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (!entry.isIntersecting) return;
              contactSvgs.forEach((svg, i) => {
                setTimeout(() => animateIconDraw(svg), i * 180);
              });
              cio.unobserve(entry.target);
            });
          }, { threshold: 0.3, rootMargin: '-80px 0px' });
          cio.observe(contactSection);
        }
      }
    }, 300);
  }

  /* ════════════════════════════════════════════════
     MANIFESTO ENTRANCE SEQUENCE
     ════════════════════════════════════════════════ */
  function setupManifesto() {
    const section = document.querySelector('.manifesto');
    if (!section) return;
    const intro   = section.querySelector('.manifesto-intro');
    const line    = section.querySelector('.manifesto-line');
    const drawing = section.querySelector('.manifesto-drawing');
    const mPath   = section.querySelector('.manifesto-draw-path');

    // Content block elements
    const aboutCol   = section.querySelector('.manifesto-about');
    const workCol    = section.querySelector('.manifesto-work');
    const boldStmt   = section.querySelector('.manifesto-bold-statement');
    const bullets    = section.querySelectorAll('.manifesto-bullets li');

    // Pre-measure and hide the SVG path
    if (mPath) {
      let len = 0;
      try { len = mPath.getTotalLength(); } catch (e) { len = 40000; }
      mPath.style.strokeDasharray  = len;
      mPath.style.strokeDashoffset = state.reduceMotion ? 0 : len;
      mPath.style.transition       = 'none';
    }

    // Reduced motion — show everything immediately
    if (state.reduceMotion) {
      [intro, line, drawing, aboutCol, workCol, boldStmt].forEach(el => {
        if (el) el.classList.add('in-view');
      });
      bullets.forEach(li => li.classList.add('in-view'));
      return;
    }

    // Observer 1: top part (intro → bold title → drawing)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (intro) intro.classList.add('in-view');
        setTimeout(() => { if (line) line.classList.add('in-view'); }, 700);
        setTimeout(() => {
          if (drawing) drawing.classList.add('in-view');
          if (mPath) {
            mPath.getBoundingClientRect();
            mPath.style.transition       = 'stroke-dashoffset 7s ease-in-out';
            mPath.style.strokeDashoffset = '0';
          }
        }, 1400);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    io.observe(section);

    // Observer 2: content block (about col, work col, bold statement, bullets)
    const contentBlock = section.querySelector('.manifesto-content');
    if (!contentBlock) return;

    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // Left column fades up
        if (aboutCol) aboutCol.classList.add('in-view');
        // Right column fades up with slight delay
        setTimeout(() => { if (workCol) workCol.classList.add('in-view'); }, 250);
        // Bold statement wipes in
        setTimeout(() => { if (boldStmt) boldStmt.classList.add('in-view'); }, 700);
        // Bullets stagger in one by one
        bullets.forEach((li, i) => {
          setTimeout(() => li.classList.add('in-view'), 1000 + i * 180);
        });
        io2.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    io2.observe(contentBlock);
  }

  /* ════════════════════════════════════════════════
     TIMELINE RENDER
     ════════════════════════════════════════════════ */
  function renderTimeline() {
    const wrap = document.getElementById('tlWrap');
    if (!wrap) return;

    // Update translated landmark label
    wrap.setAttribute('aria-label', I18N[state.lang]['timeline.wrap.aria']);

    wrap.innerHTML = '';

    // Re-add SVG container
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.id = 'tlSvg';
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    const pathEl = document.createElementNS(svgNS, 'path');
    pathEl.id = 'tlPath';
    pathEl.setAttribute('d', '');
    svg.appendChild(pathEl);
    wrap.appendChild(svg);

    // Entries container — role="presentation" so the role="list" on #tlWrap
    // directly owns the role="listitem" children (ARIA ownership requirement)
    const entriesDiv = document.createElement('div');
    entriesDiv.className = 'tl-entries';
    entriesDiv.setAttribute('role', 'presentation');

    let globalIdx = 0;

    TIMELINE.forEach(group => {
      // Year marker — role="listitem" per validità ARIA (è dentro role="list")
      const yearDiv = document.createElement('div');
      yearDiv.className = 'tl-year';
      yearDiv.setAttribute('role', 'listitem');
      yearDiv.setAttribute('aria-label', group.year);
      yearDiv.innerHTML = '<span aria-hidden="true">' + group.year + '</span>';
      entriesDiv.appendChild(yearDiv);

      group.projects.forEach(proj => {
        const side = (globalIdx % 2 === 0) ? 'tl-left' : 'tl-right';
        const entry = document.createElement('div');
        entry.className = 'tl-entry ' + side;
        entry.setAttribute('role', 'listitem');
        entry.innerHTML =
          '<span class="tl-dot" aria-hidden="true"></span>' +
          '<h3>' + proj[state.lang] + '</h3>' +
          '<p class="tl-funder">' + proj.funder + '</p>' +
          '<p class="tl-amount">' + proj.amount + '</p>';
        entriesDiv.appendChild(entry);
        globalIdx++;
      });
    });

    wrap.appendChild(entriesDiv);
  }

  function setupTimeline() {
    // Kill any ScrollTriggers from a previous call (e.g. language switch)
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach(function(st) { st.kill(); });
    }

    var sec = document.getElementById('tlWrap');
    var sp  = document.getElementById('tlPath');
    var sv  = document.getElementById('tlSvg');
    var cta = document.getElementById('tlCta');
    if (!sec || !sp || !sv) return;

    /* ── Reduced motion: show everything ── */
    if (state.reduceMotion) {
      sec.querySelectorAll('.tl-year').forEach(function(yr) { yr.style.opacity = '1'; });
      sec.querySelectorAll('.tl-entry').forEach(function(e) {
        e.querySelectorAll('h3, .tl-funder, .tl-amount').forEach(function(el) {
          el.style.opacity = '1'; el.style.transform = 'none';
        });
      });
      if (cta) cta.classList.add('in-view');
      return;
    }

    /* ── Check for GSAP ── */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      sec.querySelectorAll('.tl-year').forEach(function(yr) { yr.style.opacity = '1'; });
      sec.querySelectorAll('.tl-entry').forEach(function(e) {
        e.querySelectorAll('h3, .tl-funder, .tl-amount').forEach(function(el) {
          el.style.opacity = '1'; el.style.transform = 'none';
        });
      });
      if (cta) cta.classList.add('in-view');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /* ── Build S-curve path (exact roadmap algorithm) ── */
    function buildPath() {
      var vw = sec.offsetWidth;
      var fd = sec.querySelector('.tl-dot');
      if (!fd) return null;
      var sr = sec.getBoundingClientRect();
      var fr = fd.getBoundingClientRect();
      var cx = fr.left + 7 - sr.left;
      var els = sec.querySelectorAll('.tl-year, .tl-entry');
      var mob = innerWidth <= 700;

      if (mob) {
        var pts = [], r = 14, lx = cx;
        els.forEach(function(el) {
          if (el.classList.contains('tl-year')) {
            pts.push({ y: el.offsetTop - 2, t: 0 });
            pts.push({ y: el.offsetTop + el.offsetHeight + 2, t: 0 });
          } else {
            var d = el.querySelector('.tl-dot');
            pts.push({ y: el.offsetTop + d.offsetTop + 7, t: 1 });
          }
        });
        if (pts.length < 2) return null;
        var p = 'M' + lx + ' ' + pts[0].y;
        for (var i = 1; i < pts.length; i++) {
          var q = pts[i];
          if (q.t) {
            var ty = q.y - r, by = q.y + r;
            var k = r * 0.5523;
            p += ' L' + lx + ' ' + ty;
            p += ' C' + (lx + k) + ' ' + ty + ',' + (lx + r) + ' ' + (q.y - k) + ',' + (lx + r) + ' ' + q.y;
            p += ' C' + (lx + r) + ' ' + (q.y + k) + ',' + (lx + k) + ' ' + by + ',' + lx + ' ' + by;
            p += ' C' + (lx - k) + ' ' + by + ',' + (lx - r) + ' ' + (q.y + k) + ',' + (lx - r) + ' ' + q.y;
            p += ' C' + (lx - r) + ' ' + (q.y - k) + ',' + (lx - k) + ' ' + ty + ',' + lx + ' ' + ty;
            p += ' C' + (lx + k) + ' ' + ty + ',' + (lx + r) + ' ' + (q.y - k) + ',' + (lx + r) + ' ' + q.y;
            p += ' C' + (lx + r) + ' ' + (q.y + k) + ',' + (lx + k) + ' ' + by + ',' + lx + ' ' + by;
          } else {
            p += ' L' + lx + ' ' + q.y;
          }
        }
        sv.setAttribute('viewBox', '0 0 ' + vw + ' ' + sec.scrollHeight);
        sp.setAttribute('d', p);
        return sp;
      }

      // DESKTOP — Two-segment S-curves with vertical tangents at every dot
      var anc = [];
      els.forEach(function(el) {
        if (el.classList.contains('tl-year')) {
          anc.push({ x: cx, y: el.offsetTop - 2, t: 1 });
          anc.push({ x: cx, y: el.offsetTop + el.offsetHeight + 2, t: 1 });
        } else {
          var d = el.querySelector('.tl-dot');
          anc.push({ x: cx, y: el.offsetTop + d.offsetTop + 7, t: 0 });
        }
      });
      if (anc.length < 2) return null;

      var d = 'M' + cx + ' ' + anc[0].y, wi = 0;
      for (var i = 0; i < anc.length - 1; i++) {
        var a = anc[i], b = anc[i + 1];
        if (a.t && b.t) { d += ' L' + b.x + ' ' + b.y; continue; }
        var w = (wi % 2 === 0 ? 1 : -1) * 40,
            mx = Math.max(50, Math.min(vw - 50, cx + w)),
            my = (a.y + b.y) / 2;
        // Segment 1: anchor → wave midpoint (vertical departure, horizontal arrival)
        d += ' C' + cx + ' ' + (a.y + (my - a.y) * .6) + ',' + mx + ' ' + (my - (my - a.y) * .3) + ',' + mx + ' ' + my;
        // Segment 2: wave midpoint → next anchor (horizontal departure, vertical arrival)
        d += ' C' + mx + ' ' + (my + (b.y - my) * .3) + ',' + cx + ' ' + (b.y - (b.y - my) * .6) + ',' + cx + ' ' + b.y;
        wi++;
      }
      sv.setAttribute('viewBox', '0 0 ' + vw + ' ' + sec.scrollHeight);
      sp.setAttribute('d', d);
      return sp;
    }

    /* ── Init animations ── */
    function initTimeline() {
      var path = buildPath();
      if (!path) return;
      var len = path.getTotalLength();
      var p0 = path.getPointAtLength(0), pN = path.getPointAtLength(len);
      var y0 = p0.y, ySpan = pN.y - y0;
      var entries = sec.querySelectorAll('.tl-entry');
      var dts = [], yrs = [];
      var yrEls = sec.querySelectorAll('.tl-year');
      var mob = innerWidth <= 700;

      gsap.set(sp, { strokeDasharray: len, strokeDashoffset: len });

      entries.forEach(function(e) {
        var dot = e.querySelector('.tl-dot');
        var il = e.classList.contains('tl-left');
        var dy = e.offsetTop + dot.offsetTop + 7;
        var pr = Math.max(0, Math.min(1, (dy - y0) / ySpan));
        var tx = e.querySelectorAll('h3, .tl-funder, .tl-amount');
        if (!mob) {
          gsap.set(dot, { scale: 0 });
          gsap.set(tx, { opacity: 0, x: il ? -50 : 50 });
        }
        dts.push({ d: dot, e: e, il: il, p: pr, on: mob ? 1 : 0, tx: tx });
      });

      yrEls.forEach(function(yr) {
        var yy = yr.offsetTop + yr.offsetHeight / 2;
        var pr = Math.max(0, (yy - y0) / ySpan - 0.01);
        if (!mob) { gsap.set(yr, { opacity: 0, scale: 0.92 }); }
        yrs.push({ yr: yr, p: pr, on: mob ? 1 : 0 });
      });

      var buf = 0.015;

      gsap.to({ v: 0 }, {
        v: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.8,
          onUpdate: function(self) {
            var p = self.progress;
            sp.style.strokeDashoffset = len * (1 - p);
            if (mob) return;

            // Dots + text: elastic pop-in / reverse on scroll back
            for (var i = 0; i < dts.length; i++) {
              var d = dts[i];
              if (p >= d.p && !d.on) {
                d.on = 1;
                gsap.killTweensOf(d.d);
                gsap.to(d.d, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)', overwrite: true });
                gsap.killTweensOf(d.tx);
                gsap.to(d.tx, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', stagger: 0.07, overwrite: true });
              } else if (p < d.p - buf && d.on) {
                d.on = 0;
                gsap.killTweensOf(d.d);
                gsap.to(d.d, { scale: 0, duration: 0.3, ease: 'power2.in', overwrite: true });
                gsap.killTweensOf(d.tx);
                gsap.to(d.tx, { opacity: 0, x: d.il ? -30 : 30, duration: 0.3, ease: 'power2.in', overwrite: true });
              }
            }

            // Year markers
            for (var j = 0; j < yrs.length; j++) {
              var y = yrs[j];
              if (p >= y.p && !y.on) {
                y.on = 1;
                gsap.killTweensOf(y.yr);
                gsap.to(y.yr, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
              } else if (p < y.p - buf && y.on) {
                y.on = 0;
                gsap.killTweensOf(y.yr);
                gsap.to(y.yr, { opacity: 0, scale: 0.92, duration: 0.3, ease: 'power2.in', overwrite: true });
              }
            }
          }
        }
      });

      /* ── CTA wipe ── */
      if (cta) {
        var ctaIO = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              ctaIO.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        ctaIO.observe(cta);
      }
    }

    /* ── Wait for fonts + layout, then init ── */
    sp.style.visibility = 'hidden';
    function ready() {
      sp.style.visibility = 'visible';
      initTimeline();
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        requestAnimationFrame(function() { requestAnimationFrame(ready); });
      });
    } else {
      requestAnimationFrame(function() { requestAnimationFrame(ready); });
    }

    /* ── Rebuild on resize ── */
    var tm;
    window.addEventListener('resize', function() {
      clearTimeout(tm);
      tm = setTimeout(function() {
        ScrollTrigger.getAll().forEach(function(s) { s.kill(); });
        initTimeline();
      }, 300);
    }, { passive: true });
  }

  /* ════════════════════════════════════════════════
     DOCUMENTS RENDER + MODAL
     ════════════════════════════════════════════════ */
  function renderDocs() {
    const list = document.getElementById('docsList');
    if (!list) return;
    list.innerHTML = '';

    DOCS.forEach((d, idx) => {
      const item = d[state.lang];
      const li = document.createElement('li');
      li.innerHTML = `
        <button class="doc-link" type="button" data-idx="${idx}" aria-haspopup="dialog">
          <span>
            <span class="doc-title">${item.title}</span>
            <span class="doc-meta" aria-hidden="true">${item.meta}</span>
          </span>
          <svg class="doc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <line x1="4" y1="12" x2="20" y2="12"/>
            <polyline points="14,6 20,12 14,18"/>
          </svg>
        </button>
      `;
      li.querySelector('button').addEventListener('click', () => openModal(idx));
      list.appendChild(li);
    });
  }

  let lastFocusBeforeModal = null;
  function openModal(idx) {
    if (idx < 0 || idx >= DOCS.length) return;
    const modal = document.getElementById('modal');
    const item  = DOCS[idx][state.lang];
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-body').textContent  = item.body;

    lastFocusBeforeModal = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('open'));
    document.body.classList.add('menu-locked');
    modal.querySelector('.modal').focus();
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
    document.body.classList.remove('menu-locked');
    setTimeout(() => { modal.hidden = true; }, 250);
    if (lastFocusBeforeModal && lastFocusBeforeModal.focus) lastFocusBeforeModal.focus();
  }

  function setupModal() {
    const modal = document.getElementById('modal');
    const inner = modal.querySelector('.modal'); // tabindex="-1" container

    /** Returns all keyboard-reachable elements inside the modal backdrop */
    function getFocusables() {
      return [...modal.querySelectorAll(
        'button:not([disabled]), [href]:not([tabindex="-1"]), input:not([disabled]), ' +
        'select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )];
    }

    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

    document.addEventListener('keydown', e => {
      if (modal.hidden) return;

      // ESC always closes immediately
      if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }

      // Focus trap on Tab / Shift+Tab
      if (e.key === 'Tab') {
        const focusables = getFocusables();
        if (!focusables.length) { e.preventDefault(); return; }
        const first  = focusables[0];
        const last   = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (e.shiftKey) {
          // Shift+Tab from first tabbable OR from the dialog container → wrap to last
          if (active === first || active === inner) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // Tab from last tabbable → wrap to first
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  /* ════════════════════════════════════════════════
     CONTACTS RENDER
     ════════════════════════════════════════════════ */
  function renderContacts() {
    const grid = document.getElementById('contactGrid');
    if (!grid) return;
    grid.innerHTML = '';

    CONTACTS.forEach(c => {
      const dept = c.dept[state.lang];
      const aria = (state.lang === 'pl')
        ? `Wyślij e-mail do działu: ${dept} (${c.email})`
        : `Send email to ${dept} department (${c.email})`;
      const a = document.createElement('a');
      a.href = 'mailto:' + c.email;
      a.className = 'contact-card';
      a.setAttribute('aria-label', aria);
      a.innerHTML = `
        ${ICONS[c.icon] || ICONS.envelope}
        <span>
          <span class="label">${dept}</span>
          <span class="email" aria-hidden="true">${c.email}</span>
        </span>
      `;
      grid.appendChild(a);
    });
  }

  /* ════════════════════════════════════════════════
     MAGNETIC CTA
     ════════════════════════════════════════════════ */
  function setupMagneticCTA() {
    if (state.reduceMotion) return;
    const cta = document.querySelector('.cta');
    if (!cta) return;
    cta.addEventListener('mousemove', (e) => {
      const r = cta.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      cta.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
    });
    cta.addEventListener('mouseleave', () => { cta.style.transform = ''; });
  }

  /* ════════════════════════════════════════════════
     HEADER SCROLL STATE
     ════════════════════════════════════════════════ */
  function setupHeader() {
    const header = document.querySelector('.site-header');
    const update = () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ════════════════════════════════════════════════
     LANG TOGGLE
     ════════════════════════════════════════════════ */
  function setupLangToggle() {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === state.lang) return;
        state.lang = lang;
        applyI18n();
        setupTimeline();
        setupPartners();
      });
    });
  }

  /* ════════════════════════════════════════════════
     MOTION TOGGLE
     ════════════════════════════════════════════════ */
  function setupMotionToggle() {
    const btn = document.getElementById('motionToggle');
    if (!btn) return;

    // Restore saved preference (localStorage overrides OS setting)
    const saved = localStorage.getItem('mp-reduce-motion');
    if (saved === 'true')  state.reduceMotion = true;
    if (saved === 'false') state.reduceMotion = false;

    function applyMotionState() {
      // CSS: toggle class on <html> so scroll-behavior on html can also be overridden
      document.documentElement.classList.toggle('reduce-motion', state.reduceMotion);

      // Button ARIA state
      btn.setAttribute('aria-pressed', state.reduceMotion ? 'true' : 'false');

      // Update visible button label to reflect current action
      const dict = I18N[state.lang];
      const labelKey = state.reduceMotion ? 'footer.motion.on' : 'footer.motion';
      const span = btn.querySelector('[data-i18n]');
      if (span) span.textContent = dict[labelKey] || dict['footer.motion'];

      // Persist preference
      localStorage.setItem('mp-reduce-motion', state.reduceMotion);
    }

    applyMotionState();

    btn.addEventListener('click', () => {
      state.reduceMotion = !state.reduceMotion;
      applyMotionState();

      // Re-init typed headline
      runTypedHeadline();

      // Counters: jump to final values immediately if motion off
      if (state.reduceMotion) {
        document.querySelectorAll('.counter').forEach(c => {
          c.textContent = c.dataset.target;
        });
      }
    });
  }

  /* ════════════════════════════════════════════════
     LOGO LOADER (preserved network animation)
     ════════════════════════════════════════════════ */
  function runLogoLoader(done) {
    const svg = document.getElementById('animatedNetworkSvg');
    if (!svg) { done(); return; }

    const lines = [...svg.querySelectorAll('line')];
    const dots  = [...svg.querySelectorAll('circle')];

    if (state.reduceMotion) {
      lines.forEach(l => { l.style.opacity = '1'; l.style.strokeDashoffset = '0'; });
      dots.forEach(d => { d.style.opacity = '1'; d.style.transform = 'scale(1)'; });
      svg.classList.add('is-ready');
      setTimeout(done, 400);
      return;
    }

    // Collect dot positions by order for direction detection
    const dotPositions = [];
    dots.forEach(d => {
      dotPositions.push({
        x: parseFloat(d.getAttribute('cx')),
        y: parseFloat(d.getAttribute('cy')),
        order: Number(d.dataset.order || 0)
      });
    });

    // For each line, detect if it should draw forward (x1→x2) or reverse (x2→x1)
    // by checking which endpoint is closer to a dot of a LOWER order (the "source")
    const lineDirections = new Map();
    lines.forEach(line => {
      const order = Number(line.dataset.order || 1);
      const x1 = parseFloat(line.getAttribute('x1'));
      const y1 = parseFloat(line.getAttribute('y1'));
      const x2 = parseFloat(line.getAttribute('x2'));
      const y2 = parseFloat(line.getAttribute('y2'));

      // Find nearest lower-order dot to each endpoint
      const lowerDots = dotPositions.filter(d => d.order < order);
      let minD1 = Infinity, minD2 = Infinity;
      lowerDots.forEach(d => {
        const d1 = Math.hypot(d.x - x1, d.y - y1);
        const d2 = Math.hypot(d.x - x2, d.y - y2);
        if (d1 < minD1) minD1 = d1;
        if (d2 < minD2) minD2 = d2;
      });

      // If x1,y1 is closer to a source dot → draw forward (normal)
      // If x2,y2 is closer → draw reverse (negative offset)
      lineDirections.set(line, minD1 <= minD2 ? 'forward' : 'reverse');
    });

    // Prepare: hide everything with correct direction
    // Store lengths for later use
    const lineLengths = new Map();
    lines.forEach(line => {
      let length = 0;
      try { length = line.getTotalLength(); } catch (e) { length = 400; }
      lineLengths.set(line, length);
      const dir = lineDirections.get(line);
      line.setAttribute('stroke-dasharray', length);
      line.setAttribute('stroke-dashoffset', dir === 'forward' ? length : -length);
      line.style.opacity = '1';
    });
    dots.forEach(dot => {
      dot.setAttribute('opacity', '0');
      dot.removeAttribute('transform');
    });
    svg.classList.add('is-ready');

    // Group by order
    const maxOrder = Math.max(
      ...lines.map(l => Number(l.dataset.order || 1)),
      ...dots.map(d => Number(d.dataset.order || 0))
    );
    const linesByOrder = {};
    const dotsByOrder  = {};
    for (let i = 0; i <= maxOrder; i++) { linesByOrder[i] = []; dotsByOrder[i] = []; }
    lines.forEach(l => { const o = Number(l.dataset.order || 1); linesByOrder[o].push(l); });
    dots.forEach(d =>  { const o = Number(d.dataset.order || 0); dotsByOrder[o].push(d); });

    const DOT_DUR  = 320;
    const PAUSE    = 90;
    const TOTAL_BUDGET = 2400;

    const maxLenByOrder = {};
    for (let o = 1; o <= maxOrder; o++) {
      const group = linesByOrder[o] || [];
      maxLenByOrder[o] = group.reduce((max, l) => Math.max(max, lineLengths.get(l) || 300), 0);
    }
    const totalLen = Object.values(maxLenByOrder).reduce((s, v) => s + v, 0);
    const pausesBudget = PAUSE * maxOrder + DOT_DUR;
    const drawBudget = Math.max(800, TOTAL_BUDGET - pausesBudget);
    const speed = totalLen > 0 ? drawBudget / totalLen : 3;

    function showDots(order) {
      return new Promise(resolve => {
        const group = dotsByOrder[order] || [];
        if (!group.length) { resolve(); return; }
        group.forEach(dot => {
          dot.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], { duration: DOT_DUR, easing: 'ease', fill: 'forwards' });
        });
        setTimeout(resolve, DOT_DUR * 0.6);
      });
    }

    function drawLines(order) {
      return new Promise(resolve => {
        const group = linesByOrder[order] || [];
        if (!group.length) { resolve(); return; }
        const maxLen = maxLenByOrder[order] || 300;
        const dur = maxLen * speed;
        group.forEach(line => {
          const length = lineLengths.get(line) || 300;
          const dir = lineDirections.get(line);
          const from = dir === 'forward' ? length : -length;
          const lineDur = length * speed;
          line.animate([
            { strokeDashoffset: from },
            { strokeDashoffset: 0 }
          ], { duration: lineDur, easing: 'linear', fill: 'forwards' });
        });
        setTimeout(resolve, dur);
      });
    }

    (async () => {
      await showDots(0);
      await new Promise(r => setTimeout(r, PAUSE));

      for (let order = 1; order <= maxOrder; order++) {
        await drawLines(order);
        await showDots(order);
        if (order < maxOrder) await new Promise(r => setTimeout(r, PAUSE));
      }

      await new Promise(r => setTimeout(r, 350));
      done();
    })();
  }

  /* ════════════════════════════════════════════════
     SVG DRAW ANIMATION (hero illustration)
     Two phases:
       1. prepareSvgDraw() — runs immediately on init, hides the path
          so it's invisible while the loader is showing.
       2. startSvgDraw() — runs from the loader's "done" callback so
          the line begins to draw exactly when the loader fades out.
     ════════════════════════════════════════════════ */
  function prepareSvgDraw() {
    // Only prepare the hero SVG — approach SVG is handled separately
    document.querySelectorAll('.svg-draw-container .svg-draw-line').forEach((path) => {
      let length = 0;
      try { length = path.getTotalLength(); } catch (e) { length = 20000; }
      path.dataset.len = length;
      path.style.strokeDasharray  = length;
      path.style.strokeDashoffset = state.reduceMotion ? 0 : length;
      path.style.transition       = 'none';
    });
  }

  /* Hero decorative curves — draw in once after first illustration cycle */
  function setupHeroCurves() {
    const curves = document.querySelectorAll('.hcurve');
    if (!curves.length) return;
    curves.forEach((c) => {
      let len = 0;
      try { len = c.getTotalLength(); } catch (e) { len = 2000; }
      c.dataset.len = len;
      c.style.strokeDasharray  = len;
      c.style.strokeDashoffset = len;
      c.style.transition       = 'none';
    });
    if (state.reduceMotion) {
      curves.forEach(c => { c.style.strokeDashoffset = '0'; });
    }
  }

  function revealHeroCurves() {
    if (state.reduceMotion) {
      document.querySelectorAll('.hcurve').forEach(c => {
        c.style.transition = 'none';
        c.style.strokeDashoffset = '0';
      });
      return;
    }
    const curves = document.querySelectorAll('.hcurve');
    curves.forEach((c, i) => {
      setTimeout(() => {
        if (state.reduceMotion) { c.style.transition = 'none'; c.style.strokeDashoffset = '0'; return; }
        c.getBoundingClientRect();
        c.style.transition = 'stroke-dashoffset 3s cubic-bezier(0.4, 0, 0.2, 1)';
        c.style.strokeDashoffset = '0';
      }, i * 300);
    });
  }

  function startSvgDraw() {
    // Only animate the hero SVG — approach SVG is handled separately
    const paths = document.querySelectorAll('.svg-draw-container .svg-draw-line');
    if (state.reduceMotion) {
      paths.forEach(p => { p.style.strokeDashoffset = '0'; });
      return;
    }

    let firstCycle = true;

    function loopDraw() {
      // If user toggled reduce-motion WHILE the loop was already running → stop
      if (state.reduceMotion) {
        paths.forEach(p => { p.style.transition = 'none'; p.style.strokeDashoffset = '0'; });
        return;
      }

      // Phase 1: DRAW (offset: len → 0)
      paths.forEach((path) => {
        const len = parseFloat(path.dataset.len) || 20000;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset 7s ease-in-out';
        path.style.strokeDashoffset = '0';
      });

      // After first draw completes, reveal decorative curves
      if (firstCycle) {
        setTimeout(() => {
          revealHeroCurves();
        }, 7500);
        firstCycle = false;
      }

      // Phase 2: ERASE from start (offset: 0 → -len) after draw + pause
      setTimeout(() => {
        paths.forEach((path) => {
          const len = parseFloat(path.dataset.len) || 20000;
          path.getBoundingClientRect();
          path.style.transition = 'stroke-dashoffset 7s ease-in-out';
          path.style.strokeDashoffset = (-len) + '';
        });
      }, 8500);

      // Phase 3: RESET instantly, then loop
      setTimeout(() => {
        paths.forEach((path) => {
          const len = parseFloat(path.dataset.len) || 20000;
          path.style.transition = 'none';
          path.style.strokeDashoffset = len + '';
          path.getBoundingClientRect();
        });
        setTimeout(loopDraw, 600);
      }, 17000);
    }

    loopDraw();
  }

  /* Approach section SVG — draws on scroll into view */
  function setupApproachDraw() {
    const svg = document.querySelector('.approach-svg');
    if (!svg) return;
    const paths = svg.querySelectorAll('.svg-draw-line');
    // Prepare: hide the path
    paths.forEach((path) => {
      let length = 0;
      try { length = path.getTotalLength(); } catch (e) { length = 20000; }
      path.dataset.len = length;
      path.style.strokeDasharray  = length;
      path.style.strokeDashoffset = state.reduceMotion ? 0 : length;
      path.style.transition       = 'none';
    });
    if (state.reduceMotion) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          paths.forEach((path) => {
            path.getBoundingClientRect();
            path.style.transition = 'stroke-dashoffset 7s ease-in-out';
            path.style.strokeDashoffset = '0';
          });
          observer.unobserve(svg);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(svg);
  }

  /* Partnerships — staggered reveal + lines + number prefixes */
  function setupPartners() {
    const section = document.getElementById('partners');
    if (!section) return;
    const items = section.querySelectorAll('.partner-col li');
    const linesCanvas = section.querySelector('.plines-canvas');

    // Re-inject number prefixes after i18n replaces textContent
    items.forEach((li, i) => {
      const colIndex = i % 4;
      const num = '0' + (colIndex + 1);
      if (!li.querySelector('.li-num')) {
        const sp = document.createElement('span');
        sp.className = 'li-num';
        sp.setAttribute('aria-hidden', 'true');
        sp.textContent = num;
        li.prepend(sp);
      }
    });

    if (state.reduceMotion) {
      items.forEach(li => li.classList.add('revealed'));
      if (linesCanvas) linesCanvas.classList.add('active');
      return;
    }

    // Lines animate in when section enters viewport
    if (linesCanvas) {
      const linesIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            linesCanvas.classList.add('active');
            linesIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });
      linesIO.observe(section);
    }

    // Items staggered reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lis = entry.target.querySelectorAll('.partner-col li');
          lis.forEach((li, i) => {
            setTimeout(() => li.classList.add('revealed'), i * 140);
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    const grid = section.querySelector('.partner-grid');
    if (grid) io.observe(grid);
  }

  /* ════════════════════════════════════════════════
     INIT
     ════════════════════════════════════════════════ */
  function init() {
    // Block keyboard access to page regions while the loader is covering the screen.
    // Done here (not in HTML) so the page remains fully accessible if JS doesn't load.
    ['header', 'main', 'footer'].forEach(tag => {
      const el = document.querySelector(tag);
      if (el) el.setAttribute('inert', '');
    });

    setupLangToggle();
    setupHeader();
    setupModal();
    setupMotionToggle();

    applyI18n();           // also renders timeline / docs / contacts and runs typed
    setupTimeline();       // scroll-driven vertical timeline (after applyI18n renders DOM)
    setupCounters();
    setupManifesto();
    setupAbout();
    setupIconsDraw();
    setupMagneticCTA();
    setupPartners();

    // Hide the hero illustration immediately so it's invisible while
    // the logo loader is on top.
    prepareSvgDraw();
    setupApproachDraw();
    setupHeroCurves();

    // Loader fade
    runLogoLoader(() => {
      const loader = document.getElementById('loader');
      loader.classList.add('done');

      // Restore interactivity: remove inert from page regions now that loader is gone
      ['header', 'main', 'footer'].forEach(tag => {
        const el = document.querySelector(tag);
        if (el) el.removeAttribute('inert');
      });

      // Start hero network animation when loader fades
      startSvgDraw();
      setTimeout(() => { loader.style.display = 'none'; }, 700);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
