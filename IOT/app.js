// prep — Supports ES & IoT, Computer Networks, and Linux

// ============================================================
//  CONFIGURATION
// ============================================================
const CONFIG = {
  subjects: {
    iot: {
      label: "ES & IoT",
      examTime: new Date("2026-05-29T09:30:00+05:30").getTime(),
      storageKey: "es_iot_mastered_topics",
      storageKeyPractice: "es_iot_practice_answers",
      data: null, // populated on init → STUDY_DATA
      mcqs: null, // populated on init → IOT_MCQ_BANK
      themeColors: {
        st1: '#E07A5F',       // Peach
        st2: '#81B29A',       // Sage
        endTerm: '#B58A3D',   // Ochre
        cheatSheet: '#3D405B', // Navy
        practice: '#8C4735'   // Terracotta
      },
      sectionNames: {
        st1: 'ST-1 (Units 1-2)',
        st2: 'ST-2 (Units 3-4)',
        endTerm: 'End Term (Unit 5)',
        cheatSheet: 'Cheat Sheet',
        practice: 'Topic-Wise Practice Quiz'
      },
      tabs: [
        { id: 'st1', label: 'ST-1 (Units 1-2)' },
        { id: 'st2', label: 'ST-2 (Units 3-4)' },
        { id: 'endTerm', label: 'End Term (Unit 5)' },
        { id: 'cheatSheet', label: 'Cheat Sheet' },
        { id: 'practice', label: 'Practice' }
      ]
    },
    cn: {
      label: "Computer Networks",
      examTime: new Date("2026-06-02T09:30:00+05:30").getTime(),
      storageKey: "cn_mastered_topics",
      storageKeyPractice: "cn_practice_answers",
      data: null, // populated on init → CN_STUDY_DATA
      mcqs: null, // populated on init → CN_MCQ_BANK
      themeColors: {
        unit1_2: '#5F7AE0',   // Cornflower Blue
        unit3_4: '#7A9FBF',   // Steel Blue
        unit5_6: '#5F9E8A',   // Teal
        unit7_8: '#8A5F9E',   // Purple
        unit9: '#9E5F5F',     // Dusty Rose
        practice: '#8C4735'   // Terracotta
      },
      sectionNames: {
        unit1_2: 'Units 1-2 — Foundations & Topologies',
        unit3_4: 'Units 3-4 — OSI & Physical Layer',
        unit5_6: 'Units 5-6 — Devices & Ethernet',
        unit7_8: 'Units 7-8 — Error Detection & MAC',
        unit9: 'Unit 9 — ARQ Protocols & Summary',
        practice: 'Topic-Wise Practice Quiz'
      },
      tabs: [
        { id: 'unit1_2', label: 'Units 1-2' },
        { id: 'unit3_4', label: 'Units 3-4' },
        { id: 'unit5_6', label: 'Units 5-6' },
        { id: 'unit7_8', label: 'Units 7-8' },
        { id: 'unit9', label: 'Unit 9' },
        { id: 'practice', label: 'Practice' }
      ]
    },
    linux: {
      label: "Linux",
      examTime: new Date("2026-06-05T09:30:00+05:30").getTime(),
      storageKey: "linux_mastered_topics",
      storageKeyPractice: "linux_mcq_answers",
      storageKeyBash: "linux_bash_progress",
      data: {},
      mcqs: null,
      bashProblems: null,
      themeColors: {
        linuxMcq: '#3A8F65',
        bashPractice: '#2F6F5E'
      },
      sectionNames: {
        linuxMcq: 'Linux MCQs',
        bashPractice: 'Bash Practice'
      },
      tabs: [
        { id: 'linuxMcq', label: 'MCQs' },
        { id: 'bashPractice', label: 'Bash Practice' }
      ]
    }
  }
};

// ============================================================
//  STATE
// ============================================================
let state = {
  activeSubject: 'iot',
  activeSection: 'st1',
  activeTopicIndex: 0,
  searchQuery: '',
  mastered: {
    iot: { st1: [], st2: [], endTerm: [], cheatSheet: [], practice: [] },
    cn:  { unit1_2: [], unit3_4: [], unit5_6: [], unit7_8: [], unit9: [], practice: [] },
    linux: { linuxMcq: [], bashPractice: [] }
  },
  practiceAnswers: {
    iot: {},
    cn: {},
    linux: {}
  },
  bashProgress: {
    linux: {}
  }
};

// ============================================================
//  DOM ELEMENTS
// ============================================================
const elements = {
  topNavBar: document.getElementById('top-nav-bar'),
  timerText: document.getElementById('timer-text'),
  mobileTimerText: document.getElementById('mobile-timer-text'),
  sidebar: document.getElementById('sidebar-pane'),
  menuToggleBtn: document.getElementById('menu-toggle-btn'),
  desktopSidebarToggle: document.getElementById('desktop-sidebar-toggle'),
  searchInput: document.getElementById('search-input'),
  topicList: document.getElementById('topic-list-container'),
  progressPercent: document.getElementById('progress-percentage'),
  progressBar: document.getElementById('progress-fill-bar'),
  welcomeScreen: document.getElementById('welcome-screen'),
  readingPane: document.getElementById('reading-pane'),
  sectionBadge: document.getElementById('topic-section-badge'),
  mainTitle: document.getElementById('topic-main-title'),
  contentArea: document.getElementById('reading-content-area'),
  prevBtn: document.getElementById('prev-topic-btn'),
  nextBtn: document.getElementById('next-topic-btn'),
  subjectBtns: document.querySelectorAll('.subject-btn'),
  mobileBrandTitle: document.getElementById('mobile-brand-title'),
  mobileSectionNav: document.getElementById('mobile-section-nav')
};

// ============================================================
//  INITIALISATION
// ============================================================
function init() {
  // Link data objects
  CONFIG.subjects.iot.data = typeof STUDY_DATA !== 'undefined' ? STUDY_DATA : {};
  CONFIG.subjects.cn.data = typeof CN_STUDY_DATA !== 'undefined' ? CN_STUDY_DATA : {};
  CONFIG.subjects.iot.mcqs = typeof IOT_MCQ_BANK !== 'undefined' ? IOT_MCQ_BANK : [];
  CONFIG.subjects.cn.mcqs = typeof CN_MCQ_BANK !== 'undefined' ? CN_MCQ_BANK : [];
  CONFIG.subjects.linux.mcqs = typeof LINUX_MCQ_BANK !== 'undefined' ? LINUX_MCQ_BANK : [];
  CONFIG.subjects.linux.bashProblems = typeof LINUX_BASH_PROBLEMS !== 'undefined' ? LINUX_BASH_PROBLEMS : [];

  loadAllProgress();
  setupEventListeners();
  updateTimer();
  setInterval(updateTimer, 60000);

  // Security Measures
  setupSecurity();

  renderLandingPage();
}

function setupSecurity() {
  // Disable right click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable specific key combos
  document.addEventListener('keydown', e => {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+H
    if (e.ctrlKey && (e.shiftKey && (e.keyCode === 73 || e.keyCode === 74) || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 72)) {
      e.preventDefault();
      return false;
    }
    // Command+Option+I (Mac)
    if (e.metaKey && e.altKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
  });

  // Simple "Anti-Tamper" check
  const check = () => {
    const start = Date.now();
    debugger;
    if (Date.now() - start > 100) {
      document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;font-family:sans-serif;"><h2>Security Alert</h2><p>Developer tools are not allowed in this environment.</p><button onclick="location.reload()">Reload</button></div>';
    }
  };
  setInterval(check, 1000);
}

function decodeData(str) {
  if (!str || typeof str !== 'string') return str;
  // Simple rotation cipher for obfuscation
  return str.replace(/[a-zA-Z]/g, c => {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  });
}

// ============================================================
//  LOCAL STORAGE PROGRESS
// ============================================================
function loadAllProgress() {
  // Load IoT progress
  const iotSaved = localStorage.getItem(CONFIG.subjects.iot.storageKey);
  if (iotSaved) {
    try {
      const parsed = JSON.parse(iotSaved);
      Object.keys(state.mastered.iot).forEach(k => {
        if (parsed[k]) state.mastered.iot[k] = parsed[k];
      });
    } catch (e) { console.error("Error loading IoT progress", e); }
  }
  // Load CN progress
  const cnSaved = localStorage.getItem(CONFIG.subjects.cn.storageKey);
  if (cnSaved) {
    try {
      const parsed = JSON.parse(cnSaved);
      Object.keys(state.mastered.cn).forEach(k => {
        if (parsed[k]) state.mastered.cn[k] = parsed[k];
      });
    } catch (e) { console.error("Error loading CN progress", e); }
  }

  // Load practice progress
  const iotPracticeSaved = localStorage.getItem(CONFIG.subjects.iot.storageKeyPractice);
  if (iotPracticeSaved) {
    try {
      state.practiceAnswers.iot = JSON.parse(iotPracticeSaved) || {};
    } catch (e) { console.error("Error loading IoT practice progress", e); }
  }
  const cnPracticeSaved = localStorage.getItem(CONFIG.subjects.cn.storageKeyPractice);
  if (cnPracticeSaved) {
    try {
      state.practiceAnswers.cn = JSON.parse(cnPracticeSaved) || {};
    } catch (e) { console.error("Error loading CN practice progress", e); }
  }
  const linuxPracticeSaved = localStorage.getItem(CONFIG.subjects.linux.storageKeyPractice);
  if (linuxPracticeSaved) {
    try {
      state.practiceAnswers.linux = JSON.parse(linuxPracticeSaved) || {};
    } catch (e) { console.error("Error loading Linux MCQ progress", e); }
  }

  const linuxBashSaved = localStorage.getItem(CONFIG.subjects.linux.storageKeyBash);
  if (linuxBashSaved) {
    try {
      state.bashProgress.linux = JSON.parse(linuxBashSaved) || {};
    } catch (e) { console.error("Error loading Linux Bash progress", e); }
  }
}

function saveProgress() {
  const subjectKey = CONFIG.subjects[state.activeSubject].storageKey;
  localStorage.setItem(subjectKey, JSON.stringify(state.mastered[state.activeSubject]));
}

function savePracticeProgress() {
  const subjectKeyPractice = CONFIG.subjects[state.activeSubject].storageKeyPractice;
  localStorage.setItem(subjectKeyPractice, JSON.stringify(state.practiceAnswers[state.activeSubject]));
}

function saveBashProgress() {
  const subjectConfig = CONFIG.subjects[state.activeSubject];
  if (!subjectConfig.storageKeyBash) return;
  localStorage.setItem(subjectConfig.storageKeyBash, JSON.stringify(state.bashProgress[state.activeSubject] || {}));
}

function resetPracticeProgress() {
  state.practiceAnswers[state.activeSubject] = {};
  const subjectKeyPractice = CONFIG.subjects[state.activeSubject].storageKeyPractice;
  localStorage.removeItem(subjectKeyPractice);
  
  // Refresh UI
  renderPracticeUnit(state.activeTopicIndex);
  updateProgressBar();
  renderSidebar();
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  // Subject switcher buttons
  elements.subjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.getAttribute('data-subject');
      setActiveSubject(subject);
      closeMobileSidebar();
    });
  });

  // Mobile menu toggle
  elements.menuToggleBtn.addEventListener('click', () => {
    elements.sidebar.classList.toggle('mobile-open');
  });

  // Desktop sidebar toggle
  if (elements.desktopSidebarToggle) {
    elements.desktopSidebarToggle.addEventListener('click', () => {
      document.querySelector('.container').classList.toggle('sidebar-collapsed');
    });
  }

  // Search filter
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderSidebar();
  });

  // Prev navigation
  elements.prevBtn.addEventListener('click', () => {
    if (state.activeTopicIndex > 0) {
      selectTopic(state.activeTopicIndex - 1);
    }
  });

  // Next navigation — also marks current topic as mastered (in study sections)
  elements.nextBtn.addEventListener('click', () => {
    if (isMcqSection()) {
      const mcqBank = getActiveMcqBank();
      const totalUnits = mcqBank.length;
      if (state.activeTopicIndex < totalUnits - 1) {
        selectTopic(state.activeTopicIndex + 1);
      }
      return;
    }

    if (isBashSection()) {
      const bashProblems = getActiveBashProblems();
      if (state.activeTopicIndex < bashProblems.length - 1) {
        selectTopic(state.activeTopicIndex + 1);
      }
      return;
    }

    const subjectData = CONFIG.subjects[state.activeSubject].data;
    const totalTopics = subjectData[state.activeSection]?.length || 0;

    // Mark current topic as mastered
    const masteredList = state.mastered[state.activeSubject][state.activeSection];
    if (masteredList && !masteredList.includes(state.activeTopicIndex)) {
      toggleTopicMastery(state.activeSection, state.activeTopicIndex);
    }

    // Advance to next topic
    if (state.activeTopicIndex < totalTopics - 1) {
      selectTopic(state.activeTopicIndex + 1);
    } else {
      updateNextButtonState();
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (elements.searchInput === document.activeElement) return;

    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      if (state.activeTopicIndex > 0) selectTopic(state.activeTopicIndex - 1);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      if (isMcqSection()) {
        const mcqBank = getActiveMcqBank();
        const totalUnits = mcqBank.length;
        if (state.activeTopicIndex < totalUnits - 1) selectTopic(state.activeTopicIndex + 1);
      } else if (isBashSection()) {
        const bashProblems = getActiveBashProblems();
        if (state.activeTopicIndex < bashProblems.length - 1) selectTopic(state.activeTopicIndex + 1);
      } else {
        const subjectData = CONFIG.subjects[state.activeSubject].data;
        const totalTopics = subjectData[state.activeSection]?.length || 0;
        if (state.activeTopicIndex < totalTopics - 1) selectTopic(state.activeTopicIndex + 1);
      }
    } else if (e.key === ' ' || e.key.toLowerCase() === 'm') {
      if (!isMcqSection() && !isBashSection()) {
        toggleTopicMastery(state.activeSection, state.activeTopicIndex);
        e.preventDefault();
      }
    }
  });

  // MCQ interactive click handler (Quiz mode: Click-to-reveal)
  elements.contentArea.addEventListener('click', (e) => {
    const option = e.target.closest('.mcq-option');
    if (!option) return;

    const optionsContainer = option.closest('.mcq-options');
    if (!optionsContainer) return;

    // Lock options to prevent clicking after selection
    if (optionsContainer.classList.contains('answered')) return;

    const selectedOpt = option.getAttribute('data-option');
    const correctOpt = optionsContainer.getAttribute('data-correct');

    const allOptions = optionsContainer.querySelectorAll('.mcq-option');
    allOptions.forEach(opt => {
      const optLetter = opt.getAttribute('data-option');
      if (optLetter === correctOpt) {
        opt.classList.add('correct');
        if (!opt.querySelector('.correct-badge')) {
          const badge = document.createElement('span');
          badge.className = 'correct-badge';
          badge.textContent = 'Correct ✓';
          opt.appendChild(badge);
        }
      } else if (optLetter === selectedOpt) {
        opt.classList.add('incorrect');
        if (!opt.querySelector('.incorrect-badge')) {
          const badge = document.createElement('span');
          badge.className = 'incorrect-badge';
          badge.textContent = 'Incorrect ✗';
          opt.appendChild(badge);
        }
      }
    });

    optionsContainer.classList.add('answered');

    // Reveal explanation if present
    const card = option.closest('.mcq-card');
    if (card) {
      const exp = card.querySelector('.mcq-explanation');
      if (exp) {
        exp.style.display = 'block';
      }
    }

    // Special practice mode handling
    if (isMcqSection()) {
      const card = option.closest('.mcq-card');
      if (card) {
        const qId = parseInt(card.getAttribute('data-question-id'));
        state.practiceAnswers[state.activeSubject][qId] = selectedOpt;
        savePracticeProgress();
        updateQuizDashboardStats();
        renderSidebar(); // refresh sidebar to update checkboxes / fractions
        updateProgressBar(); // refresh sidebar progress bar
      }
    }
  });

  elements.welcomeScreen.addEventListener('click', (e) => {
    const subjectCard = e.target.closest('.landing-subject-card');
    if (!subjectCard) return;
    const subject = subjectCard.getAttribute('data-subject');
    if (subject) setActiveSubject(subject);
  });
}

function renderLandingPage() {
  document.body.classList.add('landing-mode');
  document.title = 'prep';
  elements.welcomeScreen.style.display = 'flex';
  elements.readingPane.style.display = 'none';
  elements.topNavBar.innerHTML = '';
  if (elements.mobileSectionNav) elements.mobileSectionNav.innerHTML = '';
  elements.topicList.innerHTML = '';
  elements.progressPercent.textContent = 'Choose a desk';
  elements.progressBar.style.width = '0%';
  if (elements.mobileBrandTitle) elements.mobileBrandTitle.textContent = 'prep';

  elements.subjectBtns.forEach(btn => btn.classList.remove('active'));
  document.documentElement.style.setProperty('--active-accent', '#2F6F5E');

  elements.welcomeScreen.innerHTML = `
    <section class="landing-page" aria-label="prep landing page">
      <div class="landing-hero">
        <div class="landing-copy">
          <p class="landing-console-line">student@prep:~$ choose-your-battle</p>
          <h2>One study room. Three exam desks. Zero wandering.</h2>
          <p>prep keeps your notes, MCQs, progress, and Linux terminal drills in one quiet workspace built for the last stretch before the paper.</p>
          <div class="landing-actions">
            <button class="landing-subject-card primary" data-subject="linux">
              <span class="landing-card-icon">&gt;_</span>
              <span>
                <strong>Linux Lab</strong>
                <small>MCQs plus a virtual Bash terminal</small>
              </span>
            </button>
            <button class="landing-subject-card" data-subject="iot">
              <span class="landing-card-icon">◎</span>
              <span>
                <strong>ES & IoT</strong>
                <small>Exam notes, cheat sheet, practice</small>
              </span>
            </button>
            <button class="landing-subject-card" data-subject="cn">
              <span class="landing-card-icon">▦</span>
              <span>
                <strong>Computer Networks</strong>
                <small>Layered units and quiz practice</small>
              </span>
            </button>
          </div>
        </div>
        <div class="landing-desk" aria-hidden="true">
          <div class="landing-window top">
            <div class="landing-window-bar"><span></span><span></span><span></span></div>
            <pre>mcq --mode exam
linux --lab bash
notes --focus st2</pre>
          </div>
          <div class="landing-window bottom">
            <div class="landing-meter"><span style="width: 65%;"></span></div>
            <div class="landing-check-row"><b></b><span>progress saved locally</span></div>
            <div class="landing-check-row"><b></b><span>answers hidden until asked</span></div>
            <div class="landing-check-row"><b></b><span>practice built from your syllabus</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
//  SUBJECT SWITCHING
// ============================================================
function setActiveSubject(subjectId) {
  document.body.classList.remove('landing-mode');
  state.activeSubject = subjectId;
  const subjectConfig = CONFIG.subjects[subjectId];

  // Update document title
  document.title = `${subjectConfig.label} — prep`;

  // Update subject buttons
  elements.subjectBtns.forEach(btn => {
    if (btn.getAttribute('data-subject') === subjectId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update mobile header title dynamically
  if (elements.mobileBrandTitle) {
    elements.mobileBrandTitle.textContent = subjectConfig.label + " Prep";
  }

  // Re-render top nav tabs for this subject
  renderTopNav(subjectId);

  // Update timer instantly
  updateTimer();

  // Set default section to first tab of this subject
  const firstTab = subjectConfig.tabs[0].id;
  setActiveSection(firstTab);
}

function renderTopNav(subjectId) {
  const tabs = CONFIG.subjects[subjectId].tabs;
  elements.topNavBar.innerHTML = '';
  if (elements.mobileSectionNav) elements.mobileSectionNav.innerHTML = '';

  tabs.forEach((tab, i) => {
    // Desktop Button
    const btn = document.createElement('button');
    btn.setAttribute('data-section', tab.id);
    btn.textContent = tab.label;
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      setActiveSection(tab.id);
      closeMobileSidebar();
    });
    elements.topNavBar.appendChild(btn);

    // Mobile Button
    if (elements.mobileSectionNav) {
      const mobBtn = document.createElement('button');
      mobBtn.setAttribute('data-section', tab.id);
      mobBtn.textContent = tab.label;
      if (i === 0) mobBtn.classList.add('active');
      mobBtn.addEventListener('click', () => {
        setActiveSection(tab.id);
        closeMobileSidebar();
      });
      elements.mobileSectionNav.appendChild(mobBtn);
    }
  });
}

// ============================================================
//  SECTION SWITCHING
// ============================================================
function isMcqSection(sectionId = state.activeSection) {
  return sectionId === 'practice' || sectionId === 'linuxMcq';
}

function isBashSection(sectionId = state.activeSection) {
  return sectionId === 'bashPractice';
}

function getActiveMcqBank() {
  return CONFIG.subjects[state.activeSubject].mcqs || [];
}

function getActiveBashProblems() {
  return CONFIG.subjects[state.activeSubject].bashProblems || [];
}

function setActiveSection(sectionId) {
  state.activeSection = sectionId;
  state.activeTopicIndex = 0;
  state.searchQuery = '';
  elements.searchInput.value = '';

  // Handle Bash section layout
  const mainContentPane = document.getElementById('main-content-pane');
  if (isBashSection(sectionId)) {
    mainContentPane.classList.add('bash-mode');
  } else {
    mainContentPane.classList.remove('bash-mode');
  }

  // Set accent color for this section
  const color = CONFIG.subjects[state.activeSubject].themeColors[sectionId] || '#B58A3D';
  document.documentElement.style.setProperty('--active-accent', color);

  // Highlight desktop nav tab
  const navBtns = elements.topNavBar.querySelectorAll('button');
  navBtns.forEach(btn => {
    if (btn.getAttribute('data-section') === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Highlight mobile nav tab
  if (elements.mobileSectionNav) {
    const mobBtns = elements.mobileSectionNav.querySelectorAll('button');
    mobBtns.forEach(btn => {
      if (btn.getAttribute('data-section') === sectionId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  updateProgressBar();
  renderSidebar();

  if (isMcqSection()) {
    const mcqBank = getActiveMcqBank();
    if (mcqBank.length > 0) {
      selectTopic(0);
    } else {
      elements.welcomeScreen.style.display = 'flex';
      elements.readingPane.style.display = 'none';
    }
    return;
  }

  if (isBashSection()) {
    const bashProblems = getActiveBashProblems();
    if (bashProblems.length > 0) {
      selectTopic(0);
    } else {
      elements.welcomeScreen.style.display = 'flex';
      elements.readingPane.style.display = 'none';
    }
    return;
  }

  const subjectData = CONFIG.subjects[state.activeSubject].data;
  if (subjectData[sectionId] && subjectData[sectionId].length > 0) {
    selectTopic(0);
  } else {
    elements.welcomeScreen.style.display = 'flex';
    elements.readingPane.style.display = 'none';
  }
}

// ============================================================
//  SIDEBAR RENDERING
// ============================================================
function renderSidebar() {
  elements.topicList.innerHTML = '';

  if (isBashSection()) {
    const problems = getActiveBashProblems();
    problems.forEach((problem, index) => {
      const searchText = `${problem.title} ${problem.tags.join(' ')}`.toLowerCase();
      const matchesSearch = searchText.includes(state.searchQuery);
      if (!matchesSearch) return;

      const progress = state.bashProgress[state.activeSubject][problem.id] || {};
      const isSolved = progress.solved === true;
      const isActive = index === state.activeTopicIndex;

      const button = document.createElement('button');
      button.className = `topic-item ${isActive ? 'active' : ''} ${isSolved ? 'mastered' : ''}`;
      button.setAttribute('data-index', index);

      const checkbox = document.createElement('div');
      checkbox.className = 'checkbox-circle';
      if (isSolved) {
        checkbox.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      }
      button.appendChild(checkbox);

      const textSpan = document.createElement('span');
      textSpan.className = 'topic-title-text';
      textSpan.textContent = problem.title;
      button.appendChild(textSpan);

      button.addEventListener('click', () => {
        selectTopic(index);
        closeMobileSidebar();
      });

      elements.topicList.appendChild(button);
    });
    return;
  }

  if (isMcqSection()) {
    const mcqBank = getActiveMcqBank();
    mcqBank.forEach((unitObj, index) => {
      const titleLower = unitObj.unitName.toLowerCase();
      const matchesSearch = titleLower.includes(state.searchQuery);
      if (!matchesSearch) return;

      const isActive = index === state.activeTopicIndex;

      const button = document.createElement('button');
      button.className = `topic-item ${isActive ? 'active' : ''}`;
      button.setAttribute('data-index', index);

      const checkbox = document.createElement('div');
      checkbox.className = 'checkbox-circle';

      const unitQuestions = unitObj.questions || [];
      const answeredCount = unitQuestions.filter(q => {
        return state.practiceAnswers[state.activeSubject][q.id] !== undefined;
      }).length;

      const isCompleted = answeredCount === unitQuestions.length && unitQuestions.length > 0;
      if (isCompleted) {
        button.classList.add('mastered');
        checkbox.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      } else if (answeredCount > 0) {
        checkbox.style.borderColor = 'var(--active-accent)';
        checkbox.innerHTML = `<span style="font-size: 8px; font-weight: 700; color: var(--active-accent);">${answeredCount}</span>`;
      }

      button.appendChild(checkbox);

      const textSpan = document.createElement('span');
      textSpan.className = 'topic-title-text';
      textSpan.textContent = unitObj.unitName;
      button.appendChild(textSpan);

      button.addEventListener('click', () => {
        selectTopic(index);
        closeMobileSidebar();
      });

      elements.topicList.appendChild(button);
    });
    return;
  }

  const subjectData = CONFIG.subjects[state.activeSubject].data;
  const topics = subjectData[state.activeSection] || [];

  topics.forEach((topic, index) => {
    const titleLower = topic.title.toLowerCase();
    const matchesSearch = titleLower.includes(state.searchQuery);
    if (!matchesSearch) return;

    const isMastered = state.mastered[state.activeSubject][state.activeSection].includes(index);
    const isActive = index === state.activeTopicIndex;

    const button = document.createElement('button');
    button.className = `topic-item ${isActive ? 'active' : ''} ${isMastered ? 'mastered' : ''}`;
    button.setAttribute('data-index', index);

    // Checkbox indicator
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox-circle';
    if (isMastered) {
      checkbox.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    }
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTopicMastery(state.activeSection, index);
    });
    button.appendChild(checkbox);

    const textSpan = document.createElement('span');
    textSpan.className = 'topic-title-text';
    textSpan.textContent = topic.title;
    button.appendChild(textSpan);

    button.addEventListener('click', () => {
      selectTopic(index);
      closeMobileSidebar();
    });

    elements.topicList.appendChild(button);
  });
}

// ============================================================
//  TOPIC SELECTION
// ============================================================
function selectTopic(index) {
  state.activeTopicIndex = index;

  if (isBashSection()) {
    renderBashProblem(index);
    return;
  }

  if (isMcqSection()) {
    renderPracticeUnit(index);
    return;
  }

  const subjectData = CONFIG.subjects[state.activeSubject].data;
  const topics = subjectData[state.activeSection];

  if (!topics || topics.length === 0 || !topics[index]) return;

  const topic = topics[index];

  elements.welcomeScreen.style.display = 'none';
  elements.readingPane.style.display = 'block';

  const sectionName = CONFIG.subjects[state.activeSubject].sectionNames[state.activeSection] || state.activeSection;
  elements.sectionBadge.textContent = sectionName;
  elements.mainTitle.textContent = topic.title;
  elements.contentArea.innerHTML = decodeData(topic.html);

  // Re-run KaTeX auto-render on the content area
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(elements.contentArea, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  }

  // Shuffle MCQs if any are embedded in the HTML
  shuffleMcqOptions(elements.contentArea);

  // Update sidebar active state
  const sidebarButtons = elements.topicList.querySelectorAll('.topic-item');
  sidebarButtons.forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index'));
    btn.classList.toggle('active', idx === index);
  });

  elements.prevBtn.disabled = index === 0;
  elements.prevBtn.style.opacity = index === 0 ? '0.5' : '1';

  updateNextButtonState();

  elements.readingPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('main-content-pane').scrollTop = 0;
}

// ============================================================
//  MASTERY TRACKING
// ============================================================
function toggleTopicMastery(sectionId, index) {
  const masteredList = state.mastered[state.activeSubject][sectionId];
  const listIndex = masteredList.indexOf(index);
  let isMastered = false;

  if (listIndex > -1) {
    masteredList.splice(listIndex, 1);
  } else {
    masteredList.push(index);
    isMastered = true;
  }

  saveProgress();
  updateProgressBar();
  updateNextButtonState();

  // Update sidebar item without full redraw
  const sidebarButtons = elements.topicList.querySelectorAll('.topic-item');
  sidebarButtons.forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index'));
    if (idx === index) {
      const checkbox = btn.querySelector('.checkbox-circle');
      if (isMastered) {
        btn.classList.add('mastered');
        checkbox.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      } else {
        btn.classList.remove('mastered');
        checkbox.innerHTML = '';
      }
    }
  });
}

function updateNextButtonState() {
  const subjectData = CONFIG.subjects[state.activeSubject].data;
  const topics = subjectData[state.activeSection];
  if (!topics || topics.length === 0) return;

  const index = state.activeTopicIndex;
  const totalTopics = topics.length;
  const isLastTopic = index === totalTopics - 1;
  const isMastered = state.mastered[state.activeSubject][state.activeSection].includes(index);

  if (isLastTopic) {
    if (isMastered) {
      elements.nextBtn.innerHTML = 'Section Mastered! 🎉';
      elements.nextBtn.style.backgroundColor = '#EEF6F2';
      elements.nextBtn.style.borderColor = '#CDE3D5';
      elements.nextBtn.style.color = '#4A7A60';
      elements.nextBtn.style.opacity = '0.7';
      elements.nextBtn.style.cursor = 'default';
    } else {
      elements.nextBtn.innerHTML = 'Complete & Finish Section 🏁';
      elements.nextBtn.style.backgroundColor = 'var(--active-accent)';
      elements.nextBtn.style.borderColor = 'var(--active-accent)';
      elements.nextBtn.style.color = '#FFFDFB';
      elements.nextBtn.style.opacity = '1';
      elements.nextBtn.style.cursor = 'pointer';
    }
  } else {
    elements.nextBtn.innerHTML = 'Complete & Next Topic <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    elements.nextBtn.style.backgroundColor = '';
    elements.nextBtn.style.borderColor = '';
    elements.nextBtn.style.color = '';
    elements.nextBtn.style.opacity = '';
    elements.nextBtn.style.cursor = '';
  }
}

function updateProgressBar() {
  if (isBashSection()) {
    const problems = getActiveBashProblems();
    const solvedCount = problems.filter(problem => {
      const progress = state.bashProgress[state.activeSubject][problem.id] || {};
      return progress.solved === true;
    }).length;
    const total = problems.length;
    const percentage = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
    elements.progressPercent.textContent = `${percentage}% Solved (${solvedCount}/${total})`;
    elements.progressBar.style.width = `${percentage}%`;
    return;
  }

  if (isMcqSection()) {
    const mcqBank = getActiveMcqBank();
    const allQuestions = mcqBank.flatMap(u => u.questions || []);
    const total = allQuestions.length || 100;
    
    let answeredCount = 0;
    allQuestions.forEach(q => {
      if (state.practiceAnswers[state.activeSubject][q.id] !== undefined) {
        answeredCount++;
      }
    });
    
    const percentage = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    elements.progressPercent.textContent = `${percentage}% Answered (${answeredCount}/${total})`;
    elements.progressBar.style.width = `${percentage}%`;
    return;
  }

  const subjectData = CONFIG.subjects[state.activeSubject].data;
  const topics = subjectData[state.activeSection] || [];
  const total = topics.length;

  if (total === 0) {
    elements.progressPercent.textContent = '0% Mastered';
    elements.progressBar.style.width = '0%';
    return;
  }

  const masteredCount = (state.mastered[state.activeSubject][state.activeSection] || []).length;
  const percentage = Math.round((masteredCount / total) * 100);
  elements.progressPercent.textContent = `${percentage}% Mastered (${masteredCount}/${total})`;
  elements.progressBar.style.width = `${percentage}%`;
}

// ============================================================
//  BASH SIMULATION & CHECKING
// ============================================================
const VIRTUAL_FS = {
  "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\ngames:x:5:60:games:/usr/games:/usr/sbin/nologin\nman:x:6:12:man:/var/cache/man:/usr/sbin/nologin\nlp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin\nmail:x:8:8:mail:/var/mail:/usr/sbin/nologin\nnews:x:9:9:news:/var/spool/news:/usr/sbin/nologin",
  "/etc/shadow": "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::",
  "/etc/hosts": "127.0.0.1\tlocalhost\n127.0.1.1\tubuntu-server\n\n# The following lines are desirable for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters",
  "/var/log/syslog": "May 26 10:00:01 ubuntu systemd[1]: Starting System Logging Service...\nMay 26 10:00:02 ubuntu kernel: [0.000000] Linux version 5.15.0-generic\nMay 26 10:00:05 ubuntu sshd[1234]: Failed password for root from 192.168.1.50 port 54321 ssh2\nMay 26 10:00:10 ubuntu ufw: [UFW BLOCK] IN=eth0 OUT= MAC=... SRC=10.0.0.5 DST=192.168.1.100\nMay 26 10:05:00 ubuntu systemd[1]: Finished System Logging Service.",
  "/var/log/server.log": "info: server started\nerror: database unavailable\nwarning: retrying connection\nerror: request timed out\ninfo: server stopped",
  "/var/log/app.log": "info: boot\nwarn: disk almost full\nerror: api failed\nwarn: high memory",
  "/home/student/a.log": "alpha\nbeta",
  "/home/student/b.log": "gamma\ndelta",
  "/tmp/alpha.txt": "9\n2\n5\n1",
  "/tmp/beta.txt": "banana\napple\ncherry",
  "notes.txt": "Linux is a family of open-source Unix-like operating systems.\nBash is the most popular shell used in Linux.\nPractice makes perfect.\n12345\n67890",
  "data.csv": "id,name,role\n1,Alice,Admin\n2,Bob,User\n3,Charlie,User\n4,David,Manager\n5,Eve,User"
};

function normalizeOutput(value) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[ \t]+\n/g, '\n');
}

function outputsMatch(actual, expected) {
  return normalizeOutput(actual).trimEnd() === normalizeOutput(expected).trimEnd();
}

function tokenizeBash(script) {
  return script
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#') && line !== '#!/usr/bin/env bash' && line !== '#!/bin/bash');
}

function simulateBash(script, input) {
  const inputLines = normalizeOutput(input).split('\n');
  let inputCursor = 0;
  const vars = {};
  const output = [];
  const lines = tokenizeBash(script);
  const fs = { ...VIRTUAL_FS };
  const directories = new Set(['/etc', '/var', '/var/log', '/home', '/home/student', '/tmp']);
  const archives = {};
  const users = [];
  const groups = [];
  const services = {};
  const firewallRules = [];
  let lastStatus = 0;

  function stripOuterQuotes(value) {
    return String(value || '').replace(/^['"]|['"]$/g, '');
  }

  function readVars(names) {
    const raw = inputLines[inputCursor] || '';
    inputCursor += 1;
    const parts = raw.trim().split(/\s+/).filter(Boolean);
    names.forEach((name, index) => {
      vars[name] = parts[index] !== undefined ? parts[index] : '';
    });
  }

  function expandArithmeticExpression(expr) {
    const safeExpr = expr.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, name => {
      return Number(vars[name] || 0);
    });
    if (!/^[0-9+\-*/%<>=!&| ().]+$/.test(safeExpr)) return '';
    try {
      const value = Function(`"use strict"; return (${safeExpr});`)();
      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(Math.trunc(value));
      }
      return String(value);
    } catch (e) {
      return '';
    }
  }

  function expandValue(text) {
    return stripOuterQuotes(String(text || '')
      .replace(/\$\(\(([^)]+)\)\)/g, (_, expr) => expandArithmeticExpression(expr))
      .replace(/\$\{#([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, name) => String(vars[name] || '').length)
      .replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*):([^}:]+):([^}]+)\}/g, (_, name, start, length) => {
        const startIndex = resolveNumericParam(start);
        const lengthValue = resolveNumericParam(length);
        return String(vars[name] || '').slice(startIndex, startIndex + lengthValue);
      })
      .replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, name) => vars[name] || '')
      .replace(/\$\?/g, String(lastStatus))
      .replace(/\$#/g, String(inputLines.filter(Boolean).length))
      .replace(/\$[@*]/g, inputLines.filter(Boolean).join(' '))
      .replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => vars[name] || ''));
  }

  function valueToNumber(value) {
    return Number(expandValue(value));
  }

  function resolveNumericParam(value) {
    const expanded = stripOuterQuotes(expandValue(value));
    if (Object.prototype.hasOwnProperty.call(vars, expanded)) {
      return Number(vars[expanded]);
    }
    return Number(expanded);
  }

  function splitCommandWords(command) {
    const words = [];
    let current = '';
    let quote = null;
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) {
        quote = char;
        current += char;
      } else if (char === quote) {
        quote = null;
        current += char;
      } else if (/\s/.test(char) && quote === null) {
        if (current) words.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    if (current) words.push(current);
    return words;
  }

  function splitByOperator(command, operator) {
    const parts = [];
    let current = '';
    let quote = null;
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) {
        quote = char;
      } else if (char === quote) {
        quote = null;
      }
      if (char === operator && quote === null) {
        parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current.trim());
    return parts.filter(Boolean);
  }

  function splitRedirection(command) {
    let quote = null;
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) {
        quote = char;
      } else if (char === quote) {
        quote = null;
      } else if (char === '>' && quote === null) {
        const operator = command[i - 1] === '2' ? '2>' : '>';
        const commandEnd = operator === '2>' ? i - 1 : i;
        return {
          command: command.slice(0, commandEnd).trim(),
          operator,
          target: command.slice(i + 1).trim()
        };
      }
    }
    return null;
  }

  function getFile(path) {
    const resolved = expandValue(path);
    return Object.prototype.hasOwnProperty.call(fs, resolved) ? fs[resolved] : null;
  }

  function setFile(path, content) {
    fs[expandValue(path)] = content;
  }

  function listDirectory(target = '') {
    const dir = target ? expandValue(target).replace(/\/$/, '') : '';
    const paths = Object.keys(fs);
    if (!dir || dir === '.') return paths.map(path => path.startsWith('/') ? path : `./${path}`).sort();
    if (dir.includes('*')) {
      const pattern = new RegExp(`^${dir.split('*').map(part => part.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*')}$`);
      return paths.filter(path => pattern.test(path)).sort();
    }
    const prefix = `${dir}/`;
    return paths
      .filter(path => path.startsWith(prefix))
      .map(path => path.slice(prefix.length).split('/')[0])
      .filter((value, index, arr) => value && arr.indexOf(value) === index)
      .sort();
  }

  function ensureTrailingNewline(value) {
    if (!value) return '';
    return value.endsWith('\n') ? value : `${value}\n`;
  }

  const commands = {
    echo(args) {
      const nFlag = args[0] === '-n';
      const text = args.slice(nFlag ? 1 : 0).map(expandValue).join(' ');
      return text + (nFlag ? '' : '\n');
    },
    printf(args) {
      const format = stripOuterQuotes(args[0] || '');
      if (format === '%s\\n') return `${expandValue(args.slice(1).join(' '))}\n`;
      return args.slice(1).map(expandValue).join(' ');
    },
    cat(args, stdin) {
      if (!args.length) return stdin;
      return args.map(path => {
        const content = getFile(path);
        if (content === null) {
          lastStatus = 1;
          return `cat: ${expandValue(path)}: No such file or directory\n`;
        }
        return ensureTrailingNewline(content);
      }).join('');
    },
    ls(args) {
      const visibleArgs = args.filter(arg => !arg.startsWith('-'));
      return `${visibleArgs.length ? visibleArgs.flatMap(listDirectory).join('\n') : listDirectory().join('\n')}\n`;
    },
    grep(args, stdin) {
      const filteredArgs = args.filter(arg => !arg.startsWith('-'));
      const pattern = stripOuterQuotes(expandValue(filteredArgs[0] || ''));
      const fileArg = filteredArgs[1];
      const content = fileArg ? getFile(fileArg) : stdin;
      if (content === null || content === undefined) return '';
      return ensureTrailingNewline(String(content).split('\n').filter(line => line.includes(pattern)).join('\n'));
    },
    wc(args, stdin) {
      const visibleArgs = args.filter(arg => !arg.startsWith('-'));
      const content = visibleArgs.length ? getFile(visibleArgs[visibleArgs.length - 1]) || '' : stdin;
      if (args.includes('-l')) return `${String(content).split('\n').filter(Boolean).length}\n`;
      if (args.includes('-c')) return `${String(content).length}\n`;
      return `${String(content).split(/\s+/).filter(Boolean).length}\n`;
    },
    head(args, stdin) {
      let n = 10;
      const visibleArgs = [];
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-n') {
          n = Number(args[i + 1]);
          i += 1;
        } else if (/^-\d+$/.test(args[i])) {
          n = Number(args[i].slice(1));
        } else {
          visibleArgs.push(args[i]);
        }
      }
      const content = visibleArgs.length ? getFile(visibleArgs[0]) || '' : stdin;
      return ensureTrailingNewline(String(content).split('\n').slice(0, n).join('\n'));
    },
    tail(args, stdin) {
      let n = 10;
      const visibleArgs = [];
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-n') {
          n = Number(args[i + 1]);
          i += 1;
        } else if (/^-\d+$/.test(args[i])) {
          n = Number(args[i].slice(1));
        } else {
          visibleArgs.push(args[i]);
        }
      }
      const content = visibleArgs.length ? getFile(visibleArgs[0]) || '' : stdin;
      const contentLines = String(content).split('\n').filter(line => line !== '');
      return ensureTrailingNewline(contentLines.slice(Math.max(0, contentLines.length - n)).join('\n'));
    },
    sort(args, stdin) {
      const visibleArgs = args.filter(arg => !arg.startsWith('-'));
      const content = visibleArgs.length ? getFile(visibleArgs[visibleArgs.length - 1]) || '' : stdin;
      const sorted = String(content).split('\n').filter(Boolean);
      sorted.sort(args.includes('-n') ? (a, b) => parseFloat(a) - parseFloat(b) : undefined);
      if (args.includes('-r')) sorted.reverse();
      return ensureTrailingNewline(sorted.join('\n'));
    },
    cut(args, stdin) {
      let delimiter = '\t';
      let field = 1;
      const visibleArgs = [];
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-d') delimiter = stripOuterQuotes(args[++i] || delimiter);
        else if (args[i].startsWith('-d')) delimiter = stripOuterQuotes(args[i].slice(2));
        else if (args[i] === '-f') field = Number(args[++i] || field);
        else if (args[i].startsWith('-f')) field = Number(args[i].slice(2));
        else visibleArgs.push(args[i]);
      }
      const content = visibleArgs.length ? getFile(visibleArgs[0]) || '' : stdin;
      return ensureTrailingNewline(String(content).split('\n').map(line => line.split(delimiter)[field - 1] || '').join('\n'));
    },
    touch(args) {
      args.map(expandValue).forEach(path => setFile(path, getFile(path) || ''));
      return '';
    },
    mkdir(args) {
      args.filter(arg => arg !== '-p').map(expandValue).forEach(path => directories.add(path));
      return '';
    },
    chmod(args) {
      return `mode ${expandValue(args[0])} applied to ${expandValue(args[1])}\n`;
    },
    chown(args) {
      return `owner ${expandValue(args[0])} applied to ${expandValue(args[1])}\n`;
    },
    groupadd(args) {
      const gidIndex = args.indexOf('-g');
      groups.push({ name: expandValue(args[args.length - 1]), gid: gidIndex >= 0 ? expandValue(args[gidIndex + 1]) : '' });
      return '';
    },
    useradd(args) {
      const groupIndex = args.indexOf('-g');
      users.push({ name: expandValue(args[args.length - 1]), group: groupIndex >= 0 ? expandValue(args[groupIndex + 1]) : '' });
      return '';
    },
    tar(args) {
      const archiveIndex = args.findIndex(arg => arg.includes('f') && arg.startsWith('-'));
      const archiveName = archiveIndex >= 0 ? expandValue(args[archiveIndex + 1]) : expandValue(args[0]);
      archives[archiveName] = args.slice(archiveIndex + 2).map(expandValue);
      return `${archiveName}: ${archives[archiveName].join(' ')}\n`;
    },
    lvextend(args) {
      const sizeIndex = args.indexOf('-L');
      return `Size of logical volume ${expandValue(args[args.length - 1])} changed by ${expandValue(args[sizeIndex + 1])}.\n`;
    },
    resize2fs(args) {
      return `Filesystem resized on ${expandValue(args[0])}.\n`;
    },
    netplan(args) {
      const action = args[0];
      if (action === 'generate') return 'Generated netplan configuration.\n';
      if (action === 'try') return 'Configuration accepted. Rollback timer cancelled.\n';
      if (action === 'apply') return 'Applied netplan configuration.\n';
      return '';
    },
    ufw(args) {
      if (args[0] === 'status') return firewallRules.length ? `Status: active\n${firewallRules.join('\n')}\n` : 'Status: inactive\n';
      if (args[0] === 'allow') {
        firewallRules.push(expandValue(args[1]));
        return `Rule added: ${expandValue(args[1])}\n`;
      }
      if (args[0] === 'enable') return 'Firewall is active and enabled on system startup.\n';
      return '';
    },
    systemctl(args) {
      if (args[0] === 'enable') {
        services[expandValue(args[1])] = true;
        return `Created symlink for ${expandValue(args[1])}.service.\n`;
      }
      return '';
    },
    tcpdump(args) {
      const iface = args[args.indexOf('-i') + 1] || 'eth0';
      const srcIndex = args.indexOf('src');
      const portIndex = args.indexOf('port');
      return `listening on ${expandValue(iface)}\nIP ${expandValue(args[srcIndex + 1])}.54321 > 192.168.1.100.${expandValue(args[portIndex + 1])}: Flags [S]\n`;
    },
    dmesg() {
      return '[0.000000] Linux version 5.15.0-generic\n[1.250000] eth0: link up\n[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n';
    },
    whoami() {
      return 'student\n';
    },
    id(args) {
      if (args.includes('-u')) return '1000\n';
      if (args.includes('-g')) return '1000\n';
      return 'uid=1000(student) gid=1000(student) groups=1000(student)\n';
    },
    uname(args) {
      return args.includes('-s') ? 'Linux\n' : 'Linux ubuntu 5.15.0-generic\n';
    }
  };

  function evalSingleTest(condition) {
    let clean = condition
      .replace(/^if\s+/, '')
      .replace(/^elif\s+/, '')
      .replace(/\bthen\b/g, '')
      .replace(/[{};]/g, '')
      .trim();

    const arithmeticMatch = clean.match(/^\(\((.+)\)\)$/);
    if (arithmeticMatch) {
      return Boolean(Number(expandArithmeticExpression(arithmeticMatch[1])));
    }

    const bracketMatch = clean.match(/^\[\s*(.+?)\s*\]$/);
    if (!bracketMatch) return false;

    const binaryMatch = bracketMatch[1].match(/^(.*?)\s+(-eq|-ne|-gt|-ge|-lt|-le|==|=|!=)\s+(.*?)$/);
    if (binaryMatch) {
      const leftText = expandValue(binaryMatch[1].trim());
      const rightText = expandValue(binaryMatch[3].trim());
      const leftNum = Number(leftText);
      const rightNum = Number(rightText);
      switch (binaryMatch[2]) {
        case '-eq': return leftNum === rightNum;
        case '-ne': return leftNum !== rightNum;
        case '-gt': return leftNum > rightNum;
        case '-ge': return leftNum >= rightNum;
        case '-lt': return leftNum < rightNum;
        case '-le': return leftNum <= rightNum;
        case '=':
        case '==': return leftText === rightText;
        case '!=': return leftText !== rightText;
        default: return false;
      }
    }

    const unaryMatch = bracketMatch[1].match(/^(-z|-n|-d|-f|-e)\s+(.+)$/);
    if (unaryMatch) {
      const target = expandValue(unaryMatch[2]);
      if (unaryMatch[1] === '-z') return target.length === 0;
      if (unaryMatch[1] === '-n') return target.length > 0;
      if (unaryMatch[1] === '-d') return directories.has(target);
      if (unaryMatch[1] === '-f' || unaryMatch[1] === '-e') return Object.prototype.hasOwnProperty.call(fs, target);
    }

    return false;
  }

  function normalizeConditionPart(part) {
    return part.trim().replace(/^\{\s*/, '').replace(/\s*\};?$/, '').replace(/;\s*$/, '').trim();
  }

  function evalCondition(condition) {
    const normalized = condition
      .replace(/^if\s+/, '')
      .replace(/^elif\s+/, '')
      .replace(/^while\s+/, '')
      .replace(/^until\s+/, '')
      .replace(/\bthen\b/g, '')
      .replace(/;\s*do\s*$/, '')
      .trim();

    return normalized.split(/\s+\|\|\s+/).some(orPart => {
      return orPart.split(/\s+&&\s+/).every(andPart => evalSingleTest(normalizeConditionPart(andPart)));
    });
  }

  function evalArithmeticCondition(expr) {
    const clean = expr.trim();
    if (!clean) return false;
    const result = expandArithmeticExpression(clean);
    if (result === '' || result === 'false') return false;
    if (result === 'true') return true;
    const numeric = Number(result);
    return !Number.isNaN(numeric) && numeric !== 0;
  }

  function applyAssignment(name, valueExpr) {
    vars[name] = expandValue(valueExpr);
  }

  function runAssignmentStatement(statement) {
    const compact = statement.replace(/;$/, '').trim();
    const arithAssign = compact.match(/^\(\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?)\s*\)\)$/);
    if (arithAssign) {
      applyAssignment(arithAssign[1], arithAssign[2]);
      return;
    }
    const assignMatch = compact.match(/^([a-zA-Z_][a-zA-Z0-9_]*)=(.+)$/);
    if (assignMatch) {
      applyAssignment(assignMatch[1], assignMatch[2]);
    }
  }

  function runForStep(stepExpr) {
    const step = stepExpr.trim();
    const postfix = step.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\+\+$/);
    if (postfix) {
      vars[postfix[1]] = String(Number(vars[postfix[1]] || 0) + 1);
      return;
    }
    const prefix = step.match(/^\+\+\s*([a-zA-Z_][a-zA-Z0-9_]*)$/);
    if (prefix) {
      vars[prefix[1]] = String(Number(vars[prefix[1]] || 0) + 1);
      return;
    }
    const plusEq = step.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\+=\s*(.+)$/);
    if (plusEq) {
      vars[plusEq[1]] = String(Number(vars[plusEq[1]] || 0) + Number(expandValue(plusEq[2])));
      return;
    }
    const minusEq = step.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*-=\s*(.+)$/);
    if (minusEq) {
      vars[minusEq[1]] = String(Number(vars[minusEq[1]] || 0) - Number(expandValue(minusEq[2])));
      return;
    }
    const arithStep = step.match(/^\(\(\s*(.+?)\s*\)\)$/);
    if (arithStep) {
      runAssignmentStatement(step);
      return;
    }
    runAssignmentStatement(step);
  }

  function expandBraceWord(word) {
    const braceMatch = word.match(/^\{(\d+)\.\.(\d+)\}$/);
    if (!braceMatch) return [expandValue(word)];
    const start = Number(braceMatch[1]);
    const end = Number(braceMatch[2]);
    const values = [];
    if (start <= end) {
      for (let n = start; n <= end; n++) values.push(String(n));
    } else {
      for (let n = start; n >= end; n--) values.push(String(n));
    }
    return values;
  }

  function expandForInWords(listExpr) {
    return splitCommandWords(expandValue(listExpr))
      .flatMap(word => expandBraceWord(word))
      .filter(word => word !== '');
  }

  function isLoopStartLine(line) {
    return /^for\s/.test(line) || /^while\s/.test(line) || /^until\s/.test(line);
  }

  function findLoopDoneIndex(allLines, loopStartIndex) {
    let depth = 1;
    for (let i = loopStartIndex + 1; i < allLines.length; i++) {
      if (isLoopStartLine(allLines[i])) depth += 1;
      if (allLines[i] === 'done') {
        depth -= 1;
        if (depth === 0) return i;
      }
    }
    return allLines.length - 1;
  }

  function loopBodyStartIndex(allLines, loopLineIndex, loopLine) {
    if (/\bdo\s*$/.test(loopLine) || loopLine.endsWith('; do')) return loopLineIndex + 1;
    if (allLines[loopLineIndex + 1] === 'do') return loopLineIndex + 2;
    return loopLineIndex + 1;
  }

  function runPipeline(commandString, initialStdin = '') {
    const redirection = splitRedirection(commandString);
    if (redirection) {
      const result = runPipeline(redirection.command, initialStdin);
      if (redirection.operator === '>') setFile(redirection.target, result);
      return '';
    }

    const stages = splitByOperator(commandString, '|');
    let currentStdin = initialStdin;

    for (const stage of stages) {
      const parts = splitCommandWords(stage);
      const cmdName = parts[0];
      const args = parts.slice(1);

      if (!cmdName) continue;
      if (commands[cmdName]) {
        currentStdin = commands[cmdName](args, currentStdin);
        lastStatus = 0;
      } else if (cmdName.includes('=')) {
        const [name, val] = cmdName.split('=');
        vars[name] = expandValue(val);
        currentStdin = '';
      } else if (cmdName === 'read') {
        readVars(args);
        currentStdin = '';
      } else {
        lastStatus = 127;
        currentStdin = '';
      }
    }
    return currentStdin;
  }

  function runSimpleLine(line) {
    const compact = line.replace(/;$/, '').trim();
    if (!compact || compact === 'do' || compact === 'done') return;

    const readMatch = compact.match(/^read\s+(.+)$/);
    if (readMatch) {
      readVars(readMatch[1].split(/\s+/));
      return;
    }

    const arithAssign = compact.match(/^\(\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?)\s*\)\)$/);
    if (arithAssign) {
      applyAssignment(arithAssign[1], arithAssign[2]);
      return;
    }

    const assignMatch = compact.match(/^([a-zA-Z_][a-zA-Z0-9_]*)=(.+)$/);
    if (assignMatch) {
      applyAssignment(assignMatch[1], assignMatch[2]);
      return;
    }

    const result = runPipeline(compact);
    if (result) output.push(result);
  }

  function stripInlineCommand(command) {
    return command.replace(/;\s*fi\s*$/i, '').replace(/;;?\s*$/, '').trim();
  }

  function splitSemicolonCommands(command) {
    const parts = [];
    let current = '';
    let quote = null;
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) {
        quote = char;
        current += char;
      } else if (char === quote) {
        quote = null;
        current += char;
      } else if (char === ';' && quote === null) {
        if (current.trim()) parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    if (current.trim()) parts.push(current.trim());
    return parts;
  }

  function runInlineCommands(command) {
    splitSemicolonCommands(stripInlineCommand(command)).forEach(runSimpleLine);
  }

  function splitConditionAndInlineBody(line, prefix) {
    const trimmed = line.trim();
    const thenMatch = trimmed.match(new RegExp(`^${prefix}\\s+(.+?)\\s*;?\\s*then\\s+(.+)$`));
    if (thenMatch) {
      return { condition: `${prefix} ${thenMatch[1]}`, inlineBody: [stripInlineCommand(thenMatch[2])] };
    }
    const elseThenMatch = trimmed.match(/^else\s+(.+)$/);
    if (prefix === 'else' && elseThenMatch) {
      return { condition: null, inlineBody: [stripInlineCommand(elseThenMatch[1])] };
    }
    return { condition: line, inlineBody: [] };
  }

  function lineEndsWithFi(line) {
    return /\bfi\s*$/.test(line.trim());
  }

  function collectIfBranches(allLines, startIndex) {
    const branches = [];
    const firstBranch = splitConditionAndInlineBody(allLines[startIndex], 'if');
    let current = { condition: firstBranch.condition, inlineBody: firstBranch.inlineBody, body: [] };
    branches.push(current);
    if (lineEndsWithFi(allLines[startIndex])) {
      return { branches, endIndex: startIndex };
    }
    let i = startIndex + 1;
    let ifDepth = 1;

    while (i < allLines.length) {
      const line = allLines[i];
      if (line.startsWith('if ')) ifDepth += 1;
      if (line === 'then') {
        i += 1;
        continue;
      }
      if (line.startsWith('elif ') && ifDepth === 1) {
        const elifBranch = splitConditionAndInlineBody(line, 'elif');
        current = { condition: elifBranch.condition, inlineBody: elifBranch.inlineBody, body: [] };
        branches.push(current);
        if (lineEndsWithFi(line)) return { branches, endIndex: i };
        i += 1;
        continue;
      }
      if (line.startsWith('else') && ifDepth === 1) {
        const elseBranch = splitConditionAndInlineBody(line, 'else');
        current = { condition: null, inlineBody: elseBranch.inlineBody, body: [] };
        branches.push(current);
        i += 1;
        continue;
      }
      if (line === 'fi') {
        ifDepth -= 1;
        if (ifDepth === 0) return { branches, endIndex: i };
        i += 1;
        continue;
      }
      if (ifDepth === 1) current.body.push(line);
      else if (ifDepth > 1) current.body.push(line);
      i += 1;
    }

    return { branches, endIndex: i };
  }

  function runCase(allLines, startIndex) {
    const caseLine = allLines[startIndex];
    const valueMatch = caseLine.match(/^case\s+(.+)\s+in$/);
    if (!valueMatch) return startIndex;
    const switchValue = expandValue(valueMatch[1]);
    let matched = false;
    let i = startIndex + 1;

    while (i < allLines.length && allLines[i] !== 'esac') {
      const patternLine = allLines[i];
      const patternMatch = patternLine.match(/^(.+?)\)\s*(.*?)(?:\s*;;)?$/);
      if (patternMatch) {
        const pattern = stripOuterQuotes(patternMatch[1].trim());
        const command = patternMatch[2].trim();
        if (!matched && (pattern === '*' || pattern === switchValue)) {
          if (command) runSimpleLine(command);
          matched = true;
        }
      }
      i += 1;
    }

    return i;
  }

  function runLines(allLines, start, end) {
    let i = start;
    while (i < end) {
      const line = allLines[i];

      if (line === 'do' || line === 'done') {
        i += 1;
        continue;
      }

      if (line.startsWith('if ')) {
        const { branches, endIndex } = collectIfBranches(allLines, i);
        const branch = branches.find(item => item.condition === null || evalCondition(item.condition));
        if (branch) {
          branch.inlineBody.forEach(command => runInlineCommands(command));
          runLines(branch.body, 0, branch.body.length);
        }
        i = endIndex + 1;
        continue;
      }

      if (line.startsWith('case ')) {
        i = runCase(allLines, i) + 1;
        continue;
      }

      const forArithMatch = line.match(/^for\s+\(\(\s*(.*?)\s*;\s*(.*?)\s*;\s*(.*?)\s*\)\)/);
      if (forArithMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        const initExpr = forArithMatch[1];
        const condExpr = forArithMatch[2];
        const stepExpr = forArithMatch[3];
        if (initExpr.trim()) runAssignmentStatement(initExpr);
        let guard = 0;
        while (evalArithmeticCondition(condExpr)) {
          runLines(allLines, bodyStart, doneIndex);
          runForStep(stepExpr);
          guard += 1;
          if (guard > 10000) break;
        }
        i = doneIndex + 1;
        continue;
      }

      const forInMatch = line.match(/^for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.+?)(?:;\s*do)?$/);
      if (forInMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        const values = expandForInWords(forInMatch[2]);
        values.forEach(value => {
          vars[forInMatch[1]] = value;
          runLines(allLines, bodyStart, doneIndex);
        });
        i = doneIndex + 1;
        continue;
      }

      const whileMatch = line.match(/^while\s+(.+)$/);
      if (whileMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        let guard = 0;
        while (evalCondition(whileMatch[1])) {
          runLines(allLines, bodyStart, doneIndex);
          guard += 1;
          if (guard > 10000) break;
        }
        i = doneIndex + 1;
        continue;
      }

      const untilMatch = line.match(/^until\s+(.+)$/);
      if (untilMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        let guard = 0;
        while (!evalCondition(untilMatch[1])) {
          runLines(allLines, bodyStart, doneIndex);
          guard += 1;
          if (guard > 10000) break;
        }
        i = doneIndex + 1;
        continue;
      }

      runSimpleLine(line);
      i += 1;
    }
  }

  try {
    runLines(lines, 0, lines.length);
  } catch (e) {
    return { output: output.join(''), error: e.message || 'Unable to simulate this script.' };
  }

  return { output: output.join(''), error: '' };
}

function evaluateBashProblem(problem, script, mode) {
  const tests = mode === 'run'
    ? problem.tests.filter(test => test.visible)
    : problem.tests;

  const usesEchoShortcut = problem.kind === 'terminal' && tokenizeBash(script).some(line => {
    const command = line.split('|')[0].trim();
    return /^echo\b|^printf\b/.test(command);
  });

  return tests.map(test => {
    if (usesEchoShortcut) {
      return {
        name: test.name,
        visible: test.visible,
        input: test.input,
        expectedOutput: test.expectedOutput,
        actualOutput: '',
        error: 'Terminal lab tasks must execute Linux commands instead of echoing the answer.',
        passed: false
      };
    }
    const result = simulateBash(script, test.input);
    const passed = !result.error && outputsMatch(result.output, test.expectedOutput);
    return {
      name: test.name,
      visible: test.visible,
      input: test.input,
      expectedOutput: test.expectedOutput,
      actualOutput: result.output,
      error: result.error,
      passed
    };
  });
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderBashResults(results) {
  if (!results.length) {
    return '<p class="bash-idle-state">Run sample tests or submit all tests to see output comparison.</p>';
  }

  return results.map(result => `
    <div class="bash-result-card ${result.passed ? 'passed' : 'failed'}">
      <div class="bash-result-title">
        <strong>${escapeHtml(result.name)}</strong>
        <span>${result.passed ? 'Passed' : 'Failed'}</span>
      </div>
      ${result.visible || !result.passed ? `
        ${result.visible ? `
        <div class="bash-result-grid">
          <div><label>Input</label><pre>${escapeHtml(result.input)}</pre></div>
          <div><label>Expected</label><pre>${escapeHtml(result.expectedOutput)}</pre></div>
          <div><label>Your Output</label><pre>${escapeHtml(result.actualOutput || '(empty)')}</pre></div>
        </div>
        ` : '<p class="bash-hidden-case">Hidden case failed. Re-check your logic against edge cases without relying on the sample output.</p>'}
      ` : '<p class="bash-hidden-case">Hidden case passed.</p>'}
    </div>
  `).join('');
}

function runBashProblem(problem, mode) {
  const editor = document.getElementById('bash-code-editor');
  const code = editor ? editor.value : '';
  const results = evaluateBashProblem(problem, code, mode);
  const passedCount = results.filter(result => result.passed).length;
  const solved = mode === 'submit' && passedCount === results.length;

  state.bashProgress[state.activeSubject][problem.id] = {
    ...state.bashProgress[state.activeSubject][problem.id],
    code,
    codeVersion: problem.version || 2,
    lastResults: results,
    lastMode: mode,
    solved: solved || (state.bashProgress[state.activeSubject][problem.id] || {}).solved === true
  };
  saveBashProgress();

  const body = document.getElementById('bash-results-body');
  if (body) body.innerHTML = renderBashResults(results);

  const summary = document.getElementById('bash-results-summary');
  if (summary) summary.textContent = `${passedCount} passed / ${results.length} total`;

  const panel = document.querySelector('.bash-results-panel');
  if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  renderSidebar();
  updateProgressBar();
}

function renderBashProblem(index) {
  const problems = getActiveBashProblems();
  const problem = problems[index];
  if (!problem) return;

  const progress = state.bashProgress[state.activeSubject][problem.id] || {};
  const problemVersion = problem.version || 2;
  const currentCode = progress.codeVersion === problemVersion
    ? progress.code
    : (decodeData(problem.starterCode) || '#!/usr/bin/env bash\n\n');
  const lastResults = progress.lastResults || [];
  const passedCount = lastResults.filter(result => result.passed).length;
  const resultSummary = lastResults.length
    ? `${passedCount} passed / ${lastResults.length} total`
    : 'No run yet';

  elements.welcomeScreen.style.display = 'none';
  elements.readingPane.style.display = 'block';
  // Note: Badge and Title are hidden via CSS in bash-mode
  
  const examplesHtml = problem.examples.map(example => `
    <div class="bash-example">
      <label>Input</label>
      <pre>${escapeHtml(example.input)}</pre>
      <label>Expected Output</label>
      <pre>${escapeHtml(example.expectedOutput)}</pre>
    </div>
  `).join('');

  const constraintsHtml = problem.constraints.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  const labReferenceHtml = problem.kind === 'terminal' ? `
    <div class="bash-section-block bash-lab-reference">
      <h4>Virtual Linux Lab</h4>
      <div class="bash-lab-grid">
        <div>
          <strong>Files</strong>
          <code>/etc/passwd</code>
          <code>/etc/shadow</code>
          <code>/var/log/server.log</code>
          <code>/var/log/app.log</code>
        </div>
        <div>
          <strong>Commands</strong>
          <code>cat</code>
          <code>head</code>
          <code>tail</code>
          <code>grep</code>
          <code>wc</code>
          <code>sort</code>
          <code>cut</code>
          <code>ls</code>
          <code>touch</code>
          <code>mkdir</code>
          <code>tar</code>
          <code>ufw</code>
          <code>netplan</code>
        </div>
      </div>
    </div>
  ` : '';
  const scriptSupportedHtml = problem.kind === 'terminal' ? '' : `
    <div class="bash-section-block bash-supported-syntax">
      <h4>Supported in this editor</h4>
      <p style="font-size: 0.9rem; margin: 0;">This runs in a browser bash simulator (not a real shell). You can use <code>read</code>, <code>if/elif/else</code>, <code>case</code>, <code>for</code>/<code>while</code>/<code>until</code>, <code>$((arithmetic))</code>, <code>\${var:pos:len}</code>, pipes, and <code>&gt;</code> redirection.</p>
    </div>
  `;

  elements.contentArea.innerHTML = `
    <div class="bash-workspace" id="bash-workspace">
      <section class="bash-description-pane" id="bash-desc-pane">
        <div class="bash-problem-header">
          <div class="bash-header-top-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
             <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--active-accent); letter-spacing: 0.05em;">${CONFIG.subjects[state.activeSubject].sectionNames[state.activeSection]}</span>
             <div class="bash-nav-mini" style="display: flex; gap: 0.4rem;">
                <button id="bash-mini-prev" class="nav-prev-btn" style="padding: 0.25rem 0.5rem; font-size: 0.7rem;" ${index === 0 ? 'disabled style="opacity:0.5"' : ''}>←</button>
                <button id="bash-mini-next" class="nav-next-btn" style="padding: 0.25rem 0.5rem; font-size: 0.7rem;" ${index === problems.length - 1 ? 'disabled style="opacity:0.5"' : ''}>→</button>
             </div>
          </div>
          <h3 style="margin-top: 0; border-left: none; padding-left: 0; font-size: 1.4rem;">${escapeHtml(problem.title)}</h3>
          <div class="bash-tags">
            <span>${escapeHtml(problem.difficulty)}</span>
            ${problem.kind === 'terminal' ? '<span>Terminal Lab</span>' : '<span>Script Logic</span>'}
            ${problem.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
        <div class="bash-section-block">
          <h4>Problem</h4>
          <p style="font-size: 0.95rem;">${escapeHtml(decodeData(problem.prompt))}</p>
        </div>
        <div class="bash-section-block">
          <h4>Examples</h4>
          ${examplesHtml}
        </div>
        <div class="bash-section-block">
          <h4>Constraints</h4>
          <ul style="font-size: 0.9rem;">${constraintsHtml}</ul>
        </div>
        ${scriptSupportedHtml}
        ${labReferenceHtml}
        <div class="bash-section-block bash-solution-block">
          <button class="bash-solution-toggle" id="bash-solution-toggle">Show Answer</button>
          <pre class="bash-solution-code" id="bash-solution-code" hidden>${escapeHtml(decodeData(problem.solutionCode || ''))}</pre>
        </div>
      </section>

      <div class="resizer-h" id="resizer-bash-h">
        <div class="resizer-notch"></div>
      </div>

      <section class="bash-editor-pane">
        <div class="bash-editor-toolbar">
          <span style="font-size: 0.85rem;">${problem.kind === 'terminal' ? 'Linux Lab Editor' : 'Bash Script Editor'}</span>
          <div>
            <button class="bash-reset-btn" id="bash-reset-btn">Reset</button>
            <button class="bash-run-btn" id="bash-run-btn">Run</button>
            <button class="bash-submit-btn" id="bash-submit-btn">Submit</button>
          </div>
        </div>
        <textarea class="bash-code-editor" id="bash-code-editor" spellcheck="false">${escapeHtml(currentCode)}</textarea>
        
        <div class="resizer-v" id="resizer-bash-v">
          <div class="resizer-notch"></div>
        </div>

        <div class="bash-results-panel" id="bash-results-pane">
          <div class="bash-results-header">
            <strong style="font-size: 0.85rem;">Test Results</strong>
            <span id="bash-results-summary" style="font-size: 0.8rem;">${resultSummary}</span>
          </div>
          <div id="bash-results-body">${renderBashResults(lastResults)}</div>
        </div>
      </section>
    </div>
  `;

  // Initialize resizers
  initResizer('resizer-bash-h', 'bash-desc-pane', 'horizontal');
  initResizer('resizer-bash-v', 'bash-results-pane', 'vertical', true);

  const editor = document.getElementById('bash-code-editor');
  editor.addEventListener('input', event => {
    state.bashProgress[state.activeSubject][problem.id] = {
      ...state.bashProgress[state.activeSubject][problem.id],
      code: event.target.value,
      codeVersion: problemVersion
    };
    saveBashProgress();
  });

  document.getElementById('bash-run-btn').addEventListener('click', () => runBashProblem(problem, 'run'));
  document.getElementById('bash-submit-btn').addEventListener('click', () => runBashProblem(problem, 'submit'));
  document.getElementById('bash-reset-btn').addEventListener('click', () => {
    const starter = problem.starterCode || '#!/usr/bin/env bash\n\n';
    editor.value = starter;
    state.bashProgress[state.activeSubject][problem.id] = {
      ...state.bashProgress[state.activeSubject][problem.id],
      code: starter,
      codeVersion: problemVersion,
      lastResults: [],
      lastMode: null
    };
    saveBashProgress();
    const body = document.getElementById('bash-results-body');
    if (body) body.innerHTML = renderBashResults([]);
    const summary = document.getElementById('bash-results-summary');
    if (summary) summary.textContent = 'No run yet';
    editor.focus();
  });

  const solutionToggle = document.getElementById('bash-solution-toggle');
  const solutionCode = document.getElementById('bash-solution-code');
  if (solutionToggle && solutionCode) {
    solutionToggle.addEventListener('click', () => {
      const isHidden = solutionCode.hasAttribute('hidden');
      if (isHidden) {
        solutionCode.removeAttribute('hidden');
        solutionToggle.textContent = 'Hide Answer';
      } else {
        solutionCode.setAttribute('hidden', '');
        solutionToggle.textContent = 'Show Answer';
      }
    });
  }
  
  // Mini nav listeners
  const miniPrev = document.getElementById('bash-mini-prev');
  const miniNext = document.getElementById('bash-mini-next');
  if (miniPrev) miniPrev.addEventListener('click', () => selectTopic(index - 1));
  if (miniNext) miniNext.addEventListener('click', () => selectTopic(index + 1));

  const sidebarButtons = elements.topicList.querySelectorAll('.topic-item');
  sidebarButtons.forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index'));
    btn.classList.toggle('active', idx === index);
  });

  elements.prevBtn.disabled = index === 0;
  elements.prevBtn.style.opacity = index === 0 ? '0.5' : '1';

  const isLastProblem = index === problems.length - 1;
  if (isLastProblem) {
    elements.nextBtn.innerHTML = 'Practice Complete';
    elements.nextBtn.style.backgroundColor = '#EEF6F2';
    elements.nextBtn.style.borderColor = '#CDE3D5';
    elements.nextBtn.style.color = '#4A7A60';
    elements.nextBtn.style.opacity = '0.7';
    elements.nextBtn.style.cursor = 'default';
  } else {
    elements.nextBtn.innerHTML = 'Next Problem <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    elements.nextBtn.style.backgroundColor = '';
    elements.nextBtn.style.borderColor = '';
    elements.nextBtn.style.color = '';
    elements.nextBtn.style.opacity = '';
    elements.nextBtn.style.cursor = 'pointer';
  }

  elements.readingPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('main-content-pane').scrollTop = 0;
}

// ============================================================
//  PRACTICE MODE RENDERING & HELPERS
// ============================================================
function shuffleMcqOptions(container) {
  const mcqGroups = container.querySelectorAll('.mcq-options');
  mcqGroups.forEach(group => {
    // Only shuffle if not already answered
    if (group.classList.contains('answered')) return;

    const options = Array.from(group.querySelectorAll('.mcq-option'));
    if (options.length <= 1) return;

    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    // Clear and re-append in new order
    // We preserve the group's structure and just re-order children
    options.forEach((opt, index) => {
      // Update display letter (A, B, C, D...)
      const letterSpan = opt.querySelector('.option-letter');
      if (letterSpan) {
        const displayLetter = String.fromCharCode(65 + index); // 65 is 'A'
        letterSpan.textContent = displayLetter + ')';
      }
      group.appendChild(opt);
    });
  });
}

function parseOption(text) {
  const isCorrect = text.includes('✓');
  let cleanText = text;
  let explanation = '';

  if (isCorrect) {
    const match = text.match(/^\*\*(.*?)\s*✓\s*\*\*\s*(.*)/s);
    if (match) {
      cleanText = match[1].trim();
      explanation = match[2].trim();
    } else {
      cleanText = text.replace(/✓/g, '').replace(/\*\*/g, '').trim();
    }
  } else {
    cleanText = text.replace(/\*\*/g, '').trim();
  }

  if (explanation) {
    explanation = explanation.replace(/^[\*\(\s]+|[\*\)\s]+$/g, '').trim();
  }

  return {
    text: cleanText,
    explanation: explanation
  };
}

function updateQuizDashboardStats() {
  const mcqBank = getActiveMcqBank();
  const allQuestions = mcqBank.flatMap(u => u.questions || []);
  const totalQuestions = allQuestions.length || 100;
  
  let answeredCount = 0;
  let correctCount = 0;
  
  allQuestions.forEach(q => {
    const savedAns = state.practiceAnswers[state.activeSubject][q.id];
    if (savedAns !== undefined) {
      answeredCount++;
      if (savedAns === q.correct) {
        correctCount++;
      }
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const statValues = elements.contentArea.querySelectorAll('.quiz-stat-value');
  if (statValues.length >= 3) {
    statValues[0].innerHTML = `${correctCount}<span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);"> / ${totalQuestions}</span>`;
    statValues[1].innerHTML = `${accuracy}<span style="font-size: 1.25rem; font-weight: 600;">%</span>`;
    statValues[2].innerHTML = `${answeredCount}<span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);"> / ${totalQuestions}</span>`;
  }
}

function renderPracticeUnit(unitIndex) {
  const mcqBank = getActiveMcqBank();
  const unitObj = mcqBank[unitIndex];
  if (!unitObj) return;

  elements.welcomeScreen.style.display = 'none';
  elements.readingPane.style.display = 'block';

  const sectionName = CONFIG.subjects[state.activeSubject].sectionNames[state.activeSection] || 'Practice';
  elements.sectionBadge.textContent = sectionName;
  elements.mainTitle.textContent = unitObj.unitName;

  const allQuestions = mcqBank.flatMap(u => u.questions || []);
  const totalQuestions = allQuestions.length || 100;
  
  let answeredCount = 0;
  let correctCount = 0;
  
  allQuestions.forEach(q => {
    const savedAns = state.practiceAnswers[state.activeSubject][q.id];
    if (savedAns !== undefined) {
      answeredCount++;
      if (savedAns === q.correct) {
        correctCount++;
      }
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  let dashboardHtml = `
    <div class="quiz-dashboard-header">
      <h3>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--active-accent);"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        Subject Practice Dashboard
      </h3>
      <div class="quiz-stats-grid">
        <div class="quiz-stat-card">
          <span class="quiz-stat-label">Total Score</span>
          <span class="quiz-stat-value">${correctCount}<span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);"> / ${totalQuestions}</span></span>
        </div>
        <div class="quiz-stat-card">
          <span class="quiz-stat-label">Accuracy</span>
          <span class="quiz-stat-value">${accuracy}<span style="font-size: 1.25rem; font-weight: 600;">%</span></span>
        </div>
        <div class="quiz-stat-card">
          <span class="quiz-stat-label">Progress</span>
          <span class="quiz-stat-value">${answeredCount}<span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);"> / ${totalQuestions}</span></span>
        </div>
      </div>
      <div class="quiz-controls">
        <button class="quiz-reset-btn" id="quiz-reset-progress-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>
          Reset Subject Progress
        </button>
      </div>
    </div>
  `;

  const questionsHtml = (unitObj.questions || []).map((q, idx) => {
    const qNum = idx + 1;
    const savedAns = state.practiceAnswers[state.activeSubject][q.id];
    const isAnswered = savedAns !== undefined;
    let unitExplanation = '';

    const optionsListHtml = Object.keys(q.options).map(optLetter => {
      const rawText = decodeData(q.options[optLetter]);
      const parsed = parseOption(rawText);
      
      if (optLetter === q.correct && parsed.explanation) {
        unitExplanation = parsed.explanation;
      } else if (optLetter === q.correct && q.explanation) {
        unitExplanation = decodeData(q.explanation);
      }

      let optionClasses = 'mcq-option';
      let badgeHtml = '';

      if (isAnswered) {
        if (optLetter === q.correct) {
          optionClasses += ' correct';
          badgeHtml = '<span class="correct-badge">Correct ✓</span>';
        } else if (optLetter === savedAns) {
          optionClasses += ' incorrect';
          badgeHtml = '<span class="incorrect-badge">Incorrect ✗</span>';
        }
      }

      return `
        <div class="${optionClasses}" data-option="${optLetter}">
          <span class="option-letter">${optLetter.toUpperCase()})</span>
          <span class="option-text">${parsed.text}</span>
          ${badgeHtml}
        </div>
      `;
    }).join('');

    const answeredClass = isAnswered ? ' answered' : '';
    const explanationStyle = isAnswered && unitExplanation ? 'display: block;' : 'display: none;';

    return `
      <div class="mcq-card" data-question-id="${q.id}" data-correct-answer="${q.correct}">
        <div class="mcq-question"><strong>Q${qNum}.</strong> ${decodeData(q.question)}</div>
        <div class="mcq-options${answeredClass}" data-correct="${q.correct}">
          ${optionsListHtml}
        </div>
        ${unitExplanation ? `
        <div class="mcq-explanation" style="${explanationStyle}">
          <strong>Explanation:</strong> ${unitExplanation}
        </div>
        ` : ''}
      </div>
    `;
  }).join('');

  elements.contentArea.innerHTML = dashboardHtml + questionsHtml;

  const resetBtn = document.getElementById('quiz-reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset your practice progress for this subject? This will clear all your answers.")) {
        resetPracticeProgress();
      }
    });
  }

  // Re-run KaTeX auto-render on the content area
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(elements.contentArea, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  }

  // Shuffle the options
  shuffleMcqOptions(elements.contentArea);

  const sidebarButtons = elements.topicList.querySelectorAll('.topic-item');
  sidebarButtons.forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index'));
    btn.classList.toggle('active', idx === unitIndex);
  });

  elements.prevBtn.disabled = unitIndex === 0;
  elements.prevBtn.style.opacity = unitIndex === 0 ? '0.5' : '1';

  const totalUnits = mcqBank.length;
  const isLastUnit = unitIndex === totalUnits - 1;

  if (isLastUnit) {
    elements.nextBtn.innerHTML = 'Practice Bank Completed! 🎓';
    elements.nextBtn.style.backgroundColor = '#EEF6F2';
    elements.nextBtn.style.borderColor = '#CDE3D5';
    elements.nextBtn.style.color = '#4A7A60';
    elements.nextBtn.style.opacity = '0.7';
    elements.nextBtn.style.cursor = 'default';
  } else {
    elements.nextBtn.innerHTML = 'Next Unit <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    elements.nextBtn.style.backgroundColor = '';
    elements.nextBtn.style.borderColor = '';
    elements.nextBtn.style.color = '';
    elements.nextBtn.style.opacity = '';
    elements.nextBtn.style.cursor = 'pointer';
  }

  elements.readingPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('main-content-pane').scrollTop = 0;
}

// ============================================================
//  LAYOUT
// ============================================================
function closeMobileSidebar() {
  elements.sidebar.classList.remove('mobile-open');
}

// ============================================================
//  LIVE TIMER COUNTDOWN
// ============================================================
function updateTimer() {
  const now = new Date().getTime();
  const subjectConfig = CONFIG.subjects[state.activeSubject];
  const examTime = subjectConfig ? subjectConfig.examTime : new Date("2026-05-29T09:30:00+05:30").getTime();
  const diff = examTime - now;
  let timerString = "";

  if (diff <= 0) {
    timerString = "Exam Started! Good Luck! 🍀";
  } else {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 24) {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      timerString = `Exam in ${days}d ${remainingHours}h`;
    } else {
      timerString = `Exam in ${hours}h ${mins}m`;
    }
  }

  elements.timerText.textContent = timerString;
  if (elements.mobileTimerText) elements.mobileTimerText.textContent = timerString;
}

// ============================================================
//  RESIZABLE PANELS LOGIC
// ============================================================
function initResizer(resizerId, targetPaneId, direction, invert = false) {
  const resizer = document.getElementById(resizerId);
  const targetPane = document.getElementById(targetPaneId);
  if (!resizer || !targetPane) return;

  let startX, startY, startWidth, startHeight;

  resizer.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = targetPane.offsetWidth;
    startHeight = targetPane.offsetHeight;
    
    resizer.classList.add('resizing');
    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    if (direction === 'horizontal') {
      const dx = invert ? startX - e.clientX : e.clientX - startX;
      const newWidth = startWidth + dx;
      if (newWidth > 150 && newWidth < window.innerWidth * 0.8) {
        targetPane.style.width = newWidth + 'px';
      }
    } else {
      const dy = invert ? startY - e.clientY : e.clientY - startY;
      const newHeight = startHeight + dy;
      if (newHeight > 80 && newHeight < window.innerHeight * 0.7) {
        targetPane.style.height = newHeight + 'px';
      }
    }
  }

  function onMouseUp() {
    resizer.classList.remove('resizing');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

// ============================================================
//  RUN APP
// ============================================================
window.addEventListener('DOMContentLoaded', init);
