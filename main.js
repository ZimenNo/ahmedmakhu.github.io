/* ==========================================
   WorkFind — main.js
   Логика приложения: данные, рендер, события
   ========================================== */

// ===== ДАННЫЕ =====

var jobs = [
  {
    id: 1,
    title: "Frontend разработчик",
    company: "TechBishkek",
    city: "Бишкек",
    salary: "80 000 – 120 000 сом",
    sphere: "IT / Разработка",
    type: "Полная занятость",
    exp: "1–3 года",
    desc: "Ищем опытного frontend разработчика для работы с React/TypeScript. Участие в разработке продуктов для рынка СНГ. Молодой дружный коллектив, гибкий график.",
    email: "hr@techbishkek.kg",
    date: "2 дня назад"
  },
  {
    id: 2,
    title: "UI/UX Дизайнер",
    company: "Creative Studio",
    city: "Бишкек",
    salary: "60 000 – 90 000 сом",
    sphere: "Дизайн",
    type: "Полная занятость",
    exp: "1–3 года",
    desc: "Создание интерфейсов мобильных приложений и веб-сайтов. Работа с Figma, проведение UX-исследований.",
    email: "job@creativestudio.kg",
    date: "3 дня назад"
  },
  {
    id: 3,
    title: "SMM-менеджер",
    company: "MediaGroup",
    city: "Бишкек",
    salary: "40 000 – 55 000 сом",
    sphere: "Маркетинг",
    type: "Частичная занятость",
    exp: "Без опыта",
    desc: "Ведение социальных сетей компании, создание контент-плана, работа с аналитикой.",
    email: "smm@mediagroup.kg",
    date: "5 дней назад"
  },
  {
    id: 4,
    title: "Backend разработчик (Python)",
    company: "DataSoft",
    city: "Ош",
    salary: "90 000 – 130 000 сом",
    sphere: "IT / Разработка",
    type: "Удалённо",
    exp: "3–5 лет",
    desc: "Разработка API, работа с PostgreSQL, Docker, CI/CD. Опыт с FastAPI/Django обязателен.",
    email: "dev@datasoft.kg",
    date: "1 день назад"
  },
  {
    id: 5,
    title: "Бухгалтер",
    company: "ФинансГрупп",
    city: "Бишкек",
    salary: "35 000 – 50 000 сом",
    sphere: "Финансы",
    type: "Полная занятость",
    exp: "1–3 года",
    desc: "Ведение первичной документации, работа в 1С, подготовка налоговой отчётности.",
    email: "buh@fingroup.kg",
    date: "7 дней назад"
  },
  {
    id: 6,
    title: "Менеджер по продажам",
    company: "AutoTrade",
    city: "Бишкек",
    salary: "от 60 000 сом + %",
    sphere: "Продажи",
    type: "Полная занятость",
    exp: "Без опыта",
    desc: "Активные продажи автозапчастей, работа с клиентами, выполнение плана продаж.",
    email: "sales@autotrade.kg",
    date: "1 день назад"
  }
];

var resumes = [
  {
    id: 1,
    name: "Айгерим Токтосунова",
    position: "Python разработчик",
    city: "Бишкек",
    salary: "85 000 сом",
    sphere: "IT / Разработка",
    exp: "1–3 года",
    edu: "АУЦА, Computer Science, 2022",
    skills: "Python, Django, PostgreSQL, Docker, Git",
    about: "2 года коммерческого опыта разработки backend приложений. Участвовала в 3 продуктах для финтех-рынка.",
    email: "aigerim.t@gmail.com",
    date: "Вчера"
  },
  {
    id: 2,
    name: "Бакыт Джумалиев",
    position: "Графический дизайнер",
    city: "Бишкек",
    salary: "50 000 сом",
    sphere: "Дизайн",
    exp: "3–5 лет",
    edu: "КГТУ, Промышленный дизайн, 2019",
    skills: "Photoshop, Illustrator, Figma, After Effects",
    about: "Более 5 лет опыта в брендинге и веб-дизайне. Портфолио с 50+ проектами.",
    email: "bakyt.d@mail.ru",
    date: "2 дня назад"
  },
  {
    id: 3,
    name: "Элина Садырбекова",
    position: "Маркетолог",
    city: "Бишкек",
    salary: "55 000 сом",
    sphere: "Маркетинг",
    exp: "1–3 года",
    edu: "КНУ, Маркетинг, 2021",
    skills: "Google Ads, Meta Ads, SEO, Аналитика, Email-маркетинг",
    about: "Опыт запуска рекламных кампаний с ROI 200%+. Вела продвижение для 10+ брендов.",
    email: "elina.s@gmail.com",
    date: "3 дня назад"
  },
  {
    id: 4,
    name: "Данияр Алиев",
    position: "Системный администратор",
    city: "Ош",
    salary: "70 000 сом",
    sphere: "IT / Разработка",
    exp: "3–5 лет",
    edu: "ОшТУ, Вычислительная техника, 2018",
    skills: "Linux, Windows Server, Cisco, VMware, 1С",
    about: "Администрирование сетевой инфраструктуры предприятий. Опыт настройки серверов и безопасности.",
    email: "daniyar.a@yandex.ru",
    date: "4 дня назад"
  },
  {
    id: 5,
    name: "Нурзат Эргешова",
    position: "Финансовый аналитик",
    city: "Бишкек",
    salary: "90 000 сом",
    sphere: "Финансы",
    exp: "Более 5 лет",
    edu: "КЭУ, Финансы и кредит, 2017",
    skills: "Excel, Power BI, 1С, МСФО, финансовое моделирование",
    about: "Опыт финансового анализа в банковском секторе. Сертификат CFA I уровня.",
    email: "nurzat.e@mail.kg",
    date: "5 дней назад"
  }
];

var nextJobId = jobs.length + 1;
var nextResId = resumes.length + 1;
var isDark = false;

// ===== КАТЕГОРИИ =====

var CATEGORIES = [
  {
    name: 'IT / Разработка',
    icon: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    name: 'Дизайн',
    icon: '<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7-.2-.2-.3-.4-.3-.7 0-.6.4-1 1-1H15c3.3 0 6-2.7 6-6 0-5-4-9-9-9z"/></svg>'
  },
  {
    name: 'Маркетинг',
    icon: '<svg viewBox="0 0 24 24"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>'
  },
  {
    name: 'Финансы',
    icon: '<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
  },
  {
    name: 'Продажи',
    icon: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>'
  },
  {
    name: 'Административный',
    icon: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
  },
  {
    name: 'Образование',
    icon: '<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'
  },
  {
    name: 'Другое',
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
  }
];

// ===== ИКОНКИ ТЕМЫ =====

var SUN_ICON = `
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
`;

var MOON_ICON = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

// ===== ТЕМА =====

function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  document.getElementById('theme-icon').innerHTML = isDark ? SUN_ICON : MOON_ICON;
  document.getElementById('theme-btn').title = isDark ? 'Светлая тема' : 'Тёмная тема';
  showToast(isDark ? 'Тёмная тема включена' : 'Светлая тема включена');
}

// ===== ЦВЕТА АВАТАРОВ =====

var AVATAR_LIGHT_BG = ['#E6F1FB', '#EAF3DE', '#FAEEDA', '#EEEDFE', '#E1F5EE'];
var AVATAR_LIGHT_TX = ['#185FA5', '#3B6D11', '#854F0B', '#534AB7', '#0F6E56'];
var AVATAR_DARK_BG  = ['#1a2d3f', '#1e2d14', '#2d2212', '#1e1c3a', '#112318'];
var AVATAR_DARK_TX  = ['#4d9de0', '#6db33f', '#d4a450', '#9b8fe8', '#3fba7a'];

function getAvatar(name) {
  var i = name.charCodeAt(0) % 5;
  return {
    bg: isDark ? AVATAR_DARK_BG[i] : AVATAR_LIGHT_BG[i],
    tc: isDark ? AVATAR_DARK_TX[i] : AVATAR_LIGHT_TX[i]
  };
}

function getInitials(name) {
  return name.split(' ').map(function(w) { return w[0]; }).slice(0, 2).join('');
}

// ===== НАВИГАЦИЯ =====

function showPage(p) {
  document.querySelectorAll('.page').forEach(function(el) {
    el.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(function(el) {
    el.classList.remove('active');
  });

  document.getElementById('page-' + p).classList.add('active');

  var pageIndex = { home: 0, jobs: 1, resumes: 2, 'post-job': 3, 'post-resume': 4 };
  document.querySelectorAll('.nav-btn')[pageIndex[p]].classList.add('active');

  if (p === 'home')    renderHome();
  if (p === 'jobs')    renderJobs();
  if (p === 'resumes') renderResumes();
}

// ===== ШАБЛОНЫ КАРТОЧЕК =====

function jobCardHTML(j) {
  return '<div class="job-card" onclick="openJob(' + j.id + ')">' +
    '<div class="job-title">' + j.title + '</div>' +
    '<div class="job-company">' + j.company + '</div>' +
    '<div class="job-meta">' +
      (j.city  ? '<span class="tag">'       + j.city  + '</span>' : '') +
      (j.type  ? '<span class="tag blue">'  + j.type  + '</span>' : '') +
      (j.exp   ? '<span class="tag">'       + j.exp   + '</span>' : '') +
    '</div>' +
    (j.salary ? '<div class="job-salary">' + j.salary + '</div>' : '') +
    '<div class="job-date">' + j.date + '</div>' +
  '</div>';
}

function resumeCardHTML(r) {
  var av = getAvatar(r.name);
  return '<div class="resume-card" onclick="openResume(' + r.id + ')">' +
    '<div class="resume-header">' +
      '<div class="avatar" style="background:' + av.bg + ';color:' + av.tc + '">' +
        getInitials(r.name) +
      '</div>' +
      '<div>' +
        '<div class="resume-name">'     + r.name     + '</div>' +
        '<div class="resume-position">' + r.position + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="job-meta">' +
      (r.city   ? '<span class="tag">'      + r.city   + '</span>' : '') +
      (r.sphere ? '<span class="tag blue">' + r.sphere + '</span>' : '') +
      (r.exp    ? '<span class="tag">'      + r.exp    + '</span>' : '') +
    '</div>' +
    (r.salary ? '<div class="job-salary">' + r.salary + '</div>' : '') +
    '<div class="job-date">' + r.date + '</div>' +
  '</div>';
}

// ===== РЕНДЕР ГЛАВНОЙ =====

function renderHome() {
  document.getElementById('stat-jobs').textContent = jobs.length;
  document.getElementById('stat-res').textContent  = resumes.length;
  var companies = new Set(jobs.map(function(j) { return j.company; }));
  document.getElementById('stat-comp').textContent = companies.size;

  document.getElementById('home-jobs').innerHTML    = jobs.slice(0, 3).map(jobCardHTML).join('');
  document.getElementById('home-resumes').innerHTML = resumes.slice(0, 3).map(resumeCardHTML).join('');

  renderCategories();
  renderCompanies();
}

// ===== РЕНДЕР КАТЕГОРИЙ =====

function renderCategories() {
  var html = CATEGORIES.map(function(cat) {
    var count = jobs.filter(function(j) { return j.sphere === cat.name; }).length;
    var label = count + ' ' + pluralVac(count);
    return '<div class="category-card" onclick="filterBySphere(\'' + cat.name + '\')">' +
      '<div class="category-icon">' + cat.icon + '</div>' +
      '<div class="category-name">' + cat.name + '</div>' +
      '<div class="category-count">' + label + '</div>' +
    '</div>';
  }).join('');
  document.getElementById('categories-grid').innerHTML = html;
}

function pluralVac(n) {
  var n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return 'вакансия';
  if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return 'вакансии';
  return 'вакансий';
}

function filterBySphere(sphere) {
  showPage('jobs');
  setTimeout(function() {
    document.getElementById('f-sphere').value = sphere;
    renderJobs();
  }, 50);
}

// ===== РЕНДЕР ТОП КОМПАНИЙ =====

function renderCompanies() {
  var map = {};
  jobs.forEach(function(j) {
    if (!map[j.company]) map[j.company] = 0;
    map[j.company]++;
  });

  var list = Object.keys(map).map(function(name) {
    return { name: name, count: map[name] };
  });
  list.sort(function(a, b) { return b.count - a.count; });
  list = list.slice(0, 6);

  var html = list.map(function(c) {
    var av = getAvatar(c.name);
    var label = c.count + ' ' + pluralVac(c.count);
    return '<div class="company-card" onclick="filterByCompany(\'' + c.name.replace(/'/g, "\\'") + '\')">' +
      '<div class="company-logo" style="background:' + av.bg + ';color:' + av.tc + '">' +
        getInitials(c.name) +
      '</div>' +
      '<div class="company-info">' +
        '<div class="company-name">' + c.name + '</div>' +
        '<div class="company-vacancies">' + label + '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  document.getElementById('companies-grid').innerHTML = html;
}

function filterByCompany(name) {
  showPage('jobs');
  setTimeout(function() {
    document.getElementById('job-search').value = name;
    renderJobs();
  }, 50);
}

// ===== РЕНДЕР ВАКАНСИЙ =====

function renderJobs() {
  var q  = (document.getElementById('job-search').value || '').toLowerCase();
  var sp = document.getElementById('f-sphere').value;
  var tp = document.getElementById('f-type').value;
  var ex = document.getElementById('f-exp').value;

  var filtered = jobs.filter(function(j) {
    if (q && !(
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      (j.desc || '').toLowerCase().includes(q)
    )) return false;
    if (sp && j.sphere !== sp) return false;
    if (tp && j.type   !== tp) return false;
    if (ex && j.exp    !== ex) return false;
    return true;
  });

  document.getElementById('jobs-list').innerHTML = filtered.length
    ? filtered.map(jobCardHTML).join('')
    : '<div class="no-res">Вакансий не найдено. Попробуйте изменить фильтры.</div>';
}

// ===== РЕНДЕР РЕЗЮМЕ =====

function renderResumes() {
  var q  = (document.getElementById('res-search').value || '').toLowerCase();
  var sp = document.getElementById('rf-sphere').value;
  var ex = document.getElementById('rf-exp').value;

  var filtered = resumes.filter(function(r) {
    if (q && !(
      r.name.toLowerCase().includes(q) ||
      r.position.toLowerCase().includes(q) ||
      (r.skills || '').toLowerCase().includes(q)
    )) return false;
    if (sp && r.sphere !== sp) return false;
    if (ex && r.exp    !== ex) return false;
    return true;
  });

  document.getElementById('resumes-list').innerHTML = filtered.length
    ? filtered.map(resumeCardHTML).join('')
    : '<div class="no-res">Резюме не найдено. Попробуйте изменить фильтры.</div>';
}

// ===== ОТКРЫТИЕ МОДАЛОК =====

function openJob(id) {
  var j = jobs.find(function(x) { return x.id === id; });
  if (!j) return;

  document.getElementById('m-title').textContent   = j.title;
  document.getElementById('m-company').textContent = j.company;
  document.getElementById('m-body').innerHTML =
    '<div class="job-meta" style="margin-bottom:10px">' +
      (j.city   ? '<span class="tag">'        + j.city   + '</span>' : '') +
      (j.type   ? '<span class="tag blue">'   + j.type   + '</span>' : '') +
      (j.sphere ? '<span class="tag">'        + j.sphere + '</span>' : '') +
      (j.exp    ? '<span class="tag amber">Опыт: ' + j.exp + '</span>' : '') +
    '</div>' +
    (j.salary ? '<div style="font-size:15px;font-weight:500;color:var(--success);margin-bottom:10px">' + j.salary + '</div>' : '') +
    '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">Описание вакансии</div>' +
    '<div class="desc-block">' + j.desc + '</div>' +
    '<div style="margin-top:14px;padding-top:12px;border-top:0.5px solid var(--border-light);font-size:12px;color:var(--text-secondary)">' +
      'Контакт: <span style="color:var(--accent-text)">' + j.email + '</span>' +
    '</div>' +
    '<div style="margin-top:3px;font-size:11px;color:var(--text-tertiary)">' + j.date + '</div>';

  document.getElementById('job-modal').classList.add('open');
}

function openResume(id) {
  var r = resumes.find(function(x) { return x.id === id; });
  if (!r) return;

  var av = getAvatar(r.name);
  var avatarEl = document.getElementById('rm-avatar');
  avatarEl.style.background = av.bg;
  avatarEl.style.color      = av.tc;
  avatarEl.textContent      = getInitials(r.name);

  document.getElementById('rm-name').textContent = r.name;
  document.getElementById('rm-pos').textContent  = r.position;

  var skillsHTML = r.skills
    ? '<div style="margin-bottom:10px">' +
        '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:5px">Навыки</div>' +
        r.skills.split(',').map(function(s) {
          return '<span class="tag green" style="margin:2px 3px 2px 0;display:inline-block">' + s.trim() + '</span>';
        }).join('') +
      '</div>'
    : '';

  document.getElementById('rm-body').innerHTML =
    '<div class="job-meta" style="margin-bottom:10px">' +
      (r.city   ? '<span class="tag">'      + r.city   + '</span>' : '') +
      (r.sphere ? '<span class="tag blue">' + r.sphere + '</span>' : '') +
      (r.exp    ? '<span class="tag">'      + r.exp    + '</span>' : '') +
    '</div>' +
    (r.salary ? '<div style="font-size:14px;font-weight:500;color:var(--success);margin-bottom:10px">Ожидаемая зарплата: ' + r.salary + '</div>' : '') +
    (r.edu    ? '<div style="margin-bottom:6px;font-size:13px"><span style="color:var(--text-secondary)">Образование: </span>' + r.edu + '</div>' : '') +
    skillsHTML +
    '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">О себе</div>' +
    '<div class="desc-block">' + r.about + '</div>' +
    '<div style="margin-top:14px;padding-top:12px;border-top:0.5px solid var(--border-light);font-size:12px;color:var(--text-secondary)">' +
      'Контакт: <span style="color:var(--accent-text)">' + r.email + '</span>' +
    '</div>' +
    '<div style="margin-top:3px;font-size:11px;color:var(--text-tertiary)">' + r.date + '</div>';

  document.getElementById('res-modal').classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ===== ДОБАВЛЕНИЕ ВАКАНСИИ =====

function submitJob() {
  var title   = document.getElementById('j-title').value.trim();
  var company = document.getElementById('j-company').value.trim();
  var email   = document.getElementById('j-email').value.trim();
  var desc    = document.getElementById('j-desc').value.trim();

  if (!title || !company || !email || !desc) {
    showToast('Заполните обязательные поля (*)');
    return;
  }

  jobs.unshift({
    id:     nextJobId++,
    title:  title,
    company: company,
    city:   document.getElementById('j-city').value.trim(),
    salary: document.getElementById('j-salary').value.trim(),
    sphere: document.getElementById('j-sphere').value,
    type:   document.getElementById('j-type').value,
    exp:    document.getElementById('j-exp').value,
    desc:   desc,
    email:  email,
    date:   'Только что'
  });

  ['j-title','j-company','j-city','j-salary','j-desc','j-email'].forEach(function(id) {
    document.getElementById(id).value = '';
  });
  ['j-sphere','j-type','j-exp'].forEach(function(id) {
    document.getElementById(id).selectedIndex = 0;
  });

  showToast('Вакансия опубликована!');
  showPage('jobs');
}

// ===== ДОБАВЛЕНИЕ РЕЗЮМЕ =====

function submitResume() {
  var name  = document.getElementById('r-name').value.trim();
  var pos   = document.getElementById('r-position').value.trim();
  var email = document.getElementById('r-email').value.trim();
  var about = document.getElementById('r-about').value.trim();

  if (!name || !pos || !email || !about) {
    showToast('Заполните обязательные поля (*)');
    return;
  }

  resumes.unshift({
    id:       nextResId++,
    name:     name,
    position: pos,
    city:     document.getElementById('r-city').value.trim(),
    salary:   document.getElementById('r-salary').value.trim(),
    sphere:   document.getElementById('r-sphere').value,
    exp:      document.getElementById('r-exp').value,
    edu:      document.getElementById('r-edu').value.trim(),
    skills:   document.getElementById('r-skills').value.trim(),
    about:    about,
    email:    email,
    date:     'Только что'
  });

  ['r-name','r-position','r-city','r-salary','r-edu','r-skills','r-about','r-email'].forEach(function(id) {
    document.getElementById(id).value = '';
  });
  ['r-sphere','r-exp'].forEach(function(id) {
    document.getElementById(id).selectedIndex = 0;
  });

  showToast('Резюме опубликовано!');
  showPage('resumes');
}

// ===== ПОИСК С ГЛАВНОЙ =====

function doHeroSearch() {
  var q = document.getElementById('hero-search').value;
  showPage('jobs');
  setTimeout(function() {
    document.getElementById('job-search').value = q;
    renderJobs();
  }, 50);
}

// ===== УВЕДОМЛЕНИЕ =====

function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
renderHome();

// ===== АВТОРИЗАЦИЯ =====

var currentUser = null;

function openAuthModal() {
  if (currentUser) {
    showToast('Вы вышли из аккаунта');
    currentUser = null;
    document.getElementById('auth-nav-btn').textContent = 'Войти';
    document.getElementById('auth-nav-btn').classList.remove('logged-in');
    return;
  }
  document.getElementById('auth-modal').classList.add('open');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('open');
}

function switchAuthTab(tab) {
  var loginPanel = document.getElementById('auth-login-panel');
  var registerPanel = document.getElementById('auth-register-panel');
  var tabLogin = document.getElementById('tab-login');
  var tabReg = document.getElementById('tab-register');

  if (tab === 'login') {
    loginPanel.style.display = '';
    registerPanel.style.display = 'none';
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
  } else {
    loginPanel.style.display = 'none';
    registerPanel.style.display = '';
    tabLogin.classList.remove('active');
    tabReg.classList.add('active');
  }
}

function togglePass(inputId, btn) {
  var input = document.getElementById(inputId);
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.style.color = input.type === 'text' ? 'var(--accent)' : 'var(--text-tertiary)';
}

function doLogin() {
  var email = document.getElementById('login-email').value.trim();
  var pass  = document.getElementById('login-pass').value.trim();
  if (!email || !pass) {
    showToast('Введите e-mail и пароль');
    return;
  }
  // Демо-логин — принимаем любые данные
  currentUser = { email: email, name: email.split('@')[0] };
  closeAuthModal();
  var btn = document.getElementById('auth-nav-btn');
  btn.textContent = currentUser.name;
  btn.classList.add('logged-in');
  showToast('Добро пожаловать, ' + currentUser.name + '!');
}

function doRegister() {
  var name  = document.getElementById('reg-name').value.trim();
  var email = document.getElementById('reg-email').value.trim();
  var pass  = document.getElementById('reg-pass').value.trim();
  if (!name || !email || !pass) {
    showToast('Заполните все поля');
    return;
  }
  if (pass.length < 6) {
    showToast('Пароль должен быть не менее 6 символов');
    return;
  }
  currentUser = { email: email, name: name };
  closeAuthModal();
  var btn = document.getElementById('auth-nav-btn');
  btn.textContent = name.split(' ')[0];
  btn.classList.add('logged-in');
  showToast('Аккаунт создан! Добро пожаловать, ' + name.split(' ')[0] + '!');
}
