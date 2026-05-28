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
        { id: 'st1', label: 'ST-1' },
        { id: 'st2', label: 'ST-2' },
        { id: 'endTerm', label: 'End Term' },
        { id: 'cheatSheet', label: 'Cheat Sheet' },
        { id: 'practice', label: 'MCQs' }
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
        { id: 'unit1_2', label: 'U1-2' },
        { id: 'unit3_4', label: 'U3-4' },
        { id: 'unit5_6', label: 'U5-6' },
        { id: 'unit7_8', label: 'U7-8' },
        { id: 'unit9', label: 'U9' },
        { id: 'practice', label: 'MCQs' }
      ]
    },
    linux: {
      label: "Linux",
      examTime: new Date("2026-06-06T09:30:00+05:30").getTime(),
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
  },
  smartNotes: [],
  starredMcqs: {
    iot: [],
    cn: [],
    linux: []
  },
  notesFilterSubject: 'all',
  showStarredOnly: false
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
  loadSmartNotes();
  loadStarredMcqs();
  setupEventListeners();
  updateTimer();
  setInterval(updateTimer, 60000);

  // Security Measures
  setupSecurity();

  renderLandingPage();
  initSmartNotesUI();
  
  if (typeof initThemeToggle === 'function') {
    initThemeToggle();
  }
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

  // Simple "Anti-Tamper" check - reduced sensitivity
  const check = () => {
    const start = Date.now();
    // debugger; // Removed to prevent potential layout issues in some browsers during init
    if (Date.now() - start > 100) {
      // document.body.innerHTML = ... // Disabled for now to ensure layout fix visibility
    }
  };
  setInterval(check, 2000);
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

// Smart Notes persistence
function loadSmartNotes() {
  try {
    const saved = localStorage.getItem('prep_smart_notes');
    if (saved) {
      state.smartNotes = JSON.parse(saved) || [];
    }
  } catch (e) {
    // TODO(security): Log only non-sensitive error context
    state.smartNotes = [];
  }
}

function saveSmartNotes() {
  try {
    localStorage.setItem('prep_smart_notes', JSON.stringify(state.smartNotes));
  } catch (e) {
    // localStorage may be full — silently fail
  }
}

// Starred MCQs persistence
function loadStarredMcqs() {
  try {
    const saved = localStorage.getItem('prep_starred_mcqs');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.iot) state.starredMcqs.iot = parsed.iot;
      if (parsed.cn) state.starredMcqs.cn = parsed.cn;
      if (parsed.linux) state.starredMcqs.linux = parsed.linux;
    }
  } catch (e) {
    // TODO(security): Log only non-sensitive error context
  }
}

function saveStarredMcqs() {
  try {
    localStorage.setItem('prep_starred_mcqs', JSON.stringify(state.starredMcqs));
  } catch (e) {
    // localStorage may be full — silently fail
  }
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
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    const isTyping = activeTag === 'input' || activeTag === 'textarea' || (document.activeElement && document.activeElement.isContentEditable);
    if (elements.searchInput === document.activeElement || isTyping) return;

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
    } else if (e.key.toLowerCase() === 'n') {
      toggleSmartNotesPanel();
      e.preventDefault();
    } else if (e.key === 'Escape') {
      const panel = document.getElementById('smart-notes-panel');
      if (panel && panel.classList.contains('open')) {
        toggleSmartNotesPanel();
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

  // Handle Bash/Practice section layout
  const mainContentPane = document.getElementById('main-content-pane');
  const container = document.querySelector('.container');
  if (isBashSection(sectionId)) {
    mainContentPane.classList.add('bash-mode');
    mainContentPane.classList.remove('practice-mode');
    container.classList.add('practice-active');
  } else if (isMcqSection(sectionId)) {
    mainContentPane.classList.add('practice-mode');
    mainContentPane.classList.remove('bash-mode');
    container.classList.add('practice-active');
  } else {
    mainContentPane.classList.remove('bash-mode', 'practice-mode');
    container.classList.remove('practice-active');
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
  elements.contentArea.innerHTML = topic.html;

  // Restore scroll behavior for reading
  elements.contentArea.style.overflowY = 'auto';
  elements.contentArea.style.padding = '2.5rem 3rem'; 
  elements.contentArea.style.display = 'block';
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
//  BASH SIMULATION & CHECKING (Imported from bash-engine.js)
// ============================================================

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
    : (problem.starterCode || '#!/usr/bin/env bash\n\n');
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
          <p style="font-size: 0.95rem;">${escapeHtml(problem.prompt)}</p>
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
          <pre class="bash-solution-code" id="bash-solution-code" hidden>${escapeHtml(problem.solutionCode || '')}</pre>
        </div>
      </section>

      <div class="resizer-h" id="resizer-bash-h">
        <div class="resizer-notch"></div>
      </div>

      <section class="bash-editor-pane">
        <div class="bash-editor-toolbar">
          <span class="bash-editor-title">${problem.kind === 'terminal' ? 'Linux Lab Editor' : 'Bash Script Editor'}</span>
          <div class="bash-editor-actions">
            <button class="bash-reset-btn" id="bash-reset-btn">Reset</button>
            <button class="bash-run-btn" id="bash-run-btn">Run</button>
            <button class="bash-submit-btn" id="bash-submit-btn">Submit</button>
          </div>
        </div>
        <div class="bash-editor-wrapper">
          <pre id="bash-highlighter" class="bash-highlighter" aria-hidden="true"><code class="language-bash"></code></pre>
          <textarea class="bash-code-editor" id="bash-code-editor" spellcheck="false">${escapeHtml(currentCode)}</textarea>
        </div>
        
        <div class="resizer-v" id="resizer-bash-v">
          <div class="resizer-notch"></div>
        </div>

        <div class="bash-results-panel" id="bash-results-pane" style="height: 300px; min-height: 100px; display: flex; flex-direction: column;">
          <div class="bash-results-header" style="padding: 0.75rem 1.5rem; background: #FAF8F6; border-bottom: 1px solid var(--border-color); flex-shrink: 0; display: flex; justify-content: space-between;">
            <strong style="font-size: 0.85rem;">Test Results</strong>
            <span id="bash-results-summary" style="font-size: 0.8rem; font-weight: 600;">${resultSummary}</span>
          </div>
          <div id="bash-results-body" style="flex: 1; overflow-y: auto; padding: 1rem;">${renderBashResults(lastResults)}</div>
        </div>
      </section>
    </div>
  `;

  // Ensure content area doesn't have its own scroll or padding
  elements.contentArea.style.overflow = 'hidden';
  elements.contentArea.style.padding = '0';


  // Initialize resizers
  initResizer('resizer-bash-h', 'bash-desc-pane', 'horizontal');
  initResizer('resizer-bash-v', 'bash-results-pane', 'vertical', true);

  const editor = document.getElementById('bash-code-editor');
  
  // Syntax Highlighting & Syncing
  const highlighterPre = document.getElementById('bash-highlighter');
  if (editor && highlighterPre) {
    editor.addEventListener('scroll', () => {
      highlighterPre.scrollTop = editor.scrollTop;
      highlighterPre.scrollLeft = editor.scrollLeft;
    });
  }

  editor.addEventListener('input', event => {
    state.bashProgress[state.activeSubject][problem.id] = {
      ...state.bashProgress[state.activeSubject][problem.id],
      code: event.target.value,
      codeVersion: problemVersion
    };
    saveBashProgress();
    if (window.updateBashHighlighting) window.updateBashHighlighting();
  });
  
  // Initial highlight
  if (window.updateBashHighlighting) window.updateBashHighlighting();

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
    if (window.updateBashHighlighting) window.updateBashHighlighting();
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
  if (statValues.length >= 2) {
    statValues[0].innerHTML = `${correctCount}<span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);"> / ${totalQuestions}</span>`;
    statValues[1].innerHTML = `${accuracy}<span style="font-size: 1.25rem; font-weight: 600;">%</span>`;
    if (statValues.length >= 3) {
      statValues[2].innerHTML = `${answeredCount}<span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);"> / ${totalQuestions}</span>`;
    }
  }
}

function renderPracticeUnit(unitIndex) {
  const mcqBank = getActiveMcqBank();
  const unitObj = mcqBank[unitIndex];
  if (!unitObj) return;

  elements.welcomeScreen.style.display = 'none';
  elements.readingPane.style.display = 'block';

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
        Practice Dashboard
      </h3>
      <div class="quiz-stats-grid">
        <div class="quiz-stat-card">
          <span class="quiz-stat-label">Score</span>
          <span class="quiz-stat-value">${correctCount} / ${totalQuestions}</span>
        </div>
        <div class="quiz-stat-card">
          <span class="quiz-stat-label">Accuracy</span>
          <span class="quiz-stat-value">${accuracy}%</span>
        </div>
      </div>
      <div class="quiz-controls" style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <button class="starred-filter-btn ${state.showStarredOnly ? 'active' : ''}" id="starred-filter-btn">
          ★ Starred Only
        </button>
        <button class="quiz-reset-btn" id="quiz-reset-progress-btn" style="flex: 1; font-size: 0.8rem;">
          Reset Progress
        </button>
      </div>
    </div>
  `;

  // Filter for starred-only mode
  const unitQuestions = unitObj.questions || [];
  const displayQuestions = state.showStarredOnly
    ? unitQuestions.filter(q => (state.starredMcqs[state.activeSubject] || []).includes(q.id))
    : unitQuestions;

  const questionsHtml = displayQuestions.map((q, idx) => {
    const qNum = idx + 1;
    const savedAns = state.practiceAnswers[state.activeSubject][q.id];
    const isAnswered = savedAns !== undefined;
    const isStarred = (state.starredMcqs[state.activeSubject] || []).includes(q.id);
    let unitExplanation = '';

    const optionsListHtml = Object.keys(q.options).map(optLetter => {
      const rawText = q.options[optLetter];
      const parsed = parseOption(rawText);
      
      if (optLetter === q.correct && parsed.explanation) {
        unitExplanation = parsed.explanation;
      } else if (optLetter === q.correct && q.explanation) {
        unitExplanation = q.explanation;
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
        <div class="mcq-card-header">
          <div class="mcq-question"><strong>Q${qNum}.</strong> ${q.question}</div>
          <button class="mcq-star-btn ${isStarred ? 'starred' : ''}" data-qid="${q.id}" title="Star this question">${isStarred ? '★' : '☆'}</button>
        </div>
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

  elements.contentArea.innerHTML = `
    <div class="practice-workspace">
      <section class="practice-info-pane" id="practice-info-pane">
        <div class="bash-problem-header">
           <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--active-accent); letter-spacing: 0.05em;">${CONFIG.subjects[state.activeSubject].sectionNames[state.activeSection]}</span>
           <h3 style="margin-top: 0.5rem; border-left: none; padding-left: 0; font-size: 1.4rem;">${unitObj.unitName}</h3>
        </div>
        ${dashboardHtml}
        <div style="margin-top: 2rem; font-size: 0.85rem; color: var(--text-secondary);">
          <p>Select the correct option for each question. Your progress is saved automatically.</p>
        </div>
      </section>

      <div class="resizer-h" id="resizer-practice-h">
        <div class="resizer-notch"></div>
      </div>

      <section class="practice-questions-pane" style="flex: 1; overflow-y: auto; padding: 2rem; background: var(--bg-color);">
        ${questionsHtml}
      </section>
    </div>
  `;

  // Ensure content area doesn't have its own scroll or padding
  elements.contentArea.style.overflow = 'hidden';
  elements.contentArea.style.padding = '0';


  // Initialize resizer
  initResizer('resizer-practice-h', 'practice-info-pane', 'horizontal');

  const resetBtn = document.getElementById('quiz-reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset your practice progress for this subject? This will clear all your answers.")) {
        resetPracticeProgress();
      }
    });
  }

  // Starred filter toggle
  const starredFilterBtn = document.getElementById('starred-filter-btn');
  if (starredFilterBtn) {
    starredFilterBtn.addEventListener('click', () => {
      state.showStarredOnly = !state.showStarredOnly;
      renderPracticeUnit(unitIndex);
    });
  }

  // Star button click handlers
  elements.contentArea.querySelectorAll('.mcq-star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const qId = parseInt(btn.getAttribute('data-qid'));
      if (isNaN(qId)) return;
      const starredList = state.starredMcqs[state.activeSubject] || [];
      const idx = starredList.indexOf(qId);
      if (idx > -1) {
        starredList.splice(idx, 1);
        btn.classList.remove('starred');
        btn.textContent = '\u2606';
      } else {
        starredList.push(qId);
        btn.classList.add('starred');
        btn.textContent = '\u2605';
        btn.classList.add('star-animate');
        setTimeout(() => btn.classList.remove('star-animate'), 350);
      }
      state.starredMcqs[state.activeSubject] = starredList;
      saveStarredMcqs();
      renderStarredInNotesPanel();
    });
  });

  // Re-run KaTeX auto-render
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
  elements.nextBtn.innerHTML = isLastUnit ? 'Practice Bank Completed! 🎓' : 'Next Unit →';
  elements.nextBtn.disabled = false;
  elements.nextBtn.style.opacity = '1';

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

  const mousedownHandler = function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = targetPane.offsetWidth;
    startHeight = targetPane.offsetHeight;
    
    resizer.classList.add('resizing');
    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';

    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseup', mouseupHandler);
  };

  const mousemoveHandler = function(e) {
    if (direction === 'horizontal') {
      const dx = invert ? startX - e.clientX : e.clientX - startX;
      const newWidth = startWidth + dx;
      if (newWidth > 150 && newWidth < window.innerWidth * 0.85) {
        targetPane.style.width = newWidth + 'px';
        targetPane.style.flex = 'none'; // Ensure width is respected
      }
    } else {
      const dy = invert ? startY - e.clientY : e.clientY - startY;
      const newHeight = startHeight + dy;
      if (newHeight > 60 && newHeight < window.innerHeight * 0.8) {
        targetPane.style.height = newHeight + 'px';
        targetPane.style.flex = 'none'; // Ensure height is respected
      }
    }
  };

  const mouseupHandler = function() {
    resizer.classList.remove('resizing');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    document.removeEventListener('mousemove', mousemoveHandler);
    document.removeEventListener('mouseup', mouseupHandler);
  };

  resizer.addEventListener('mousedown', mousedownHandler);
}

// ============================================================
//  RUN APP
// ============================================================

// ============================================================
//  ZOOM AND UI CONTROLS
// ============================================================
let currentZoom = 1;
const zoomContainer = document.querySelector('.container');

document.getElementById('zoom-in')?.addEventListener('click', () => {
  currentZoom = Math.min(currentZoom + 0.1, 1.5);
  if (zoomContainer) zoomContainer.style.zoom = currentZoom;
});

document.getElementById('zoom-out')?.addEventListener('click', () => {
  currentZoom = Math.max(currentZoom - 0.1, 0.7);
  if (zoomContainer) zoomContainer.style.zoom = currentZoom;
});

document.getElementById('zoom-default')?.addEventListener('click', () => {
  currentZoom = 1;
  if (zoomContainer) zoomContainer.style.zoom = currentZoom;
});

// ============================================================
//  SYNTAX HIGHLIGHTER HELPER
// ============================================================
window.updateBashHighlighting = function() {
  const editor = document.getElementById('bash-code-editor');
  const highlighter = document.querySelector('#bash-highlighter code');
  if (!editor || !highlighter) return;
  
  if (window.Prism) {
    highlighter.innerHTML = Prism.highlight(editor.value, Prism.languages.bash, 'bash');
  } else {
    highlighter.textContent = editor.value;
  }
};
window.addEventListener('DOMContentLoaded', () => {
  init();
});

// ============================================================
//  THEME TOGGLE
// ============================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIconPath = document.querySelector('#theme-icon path');
  
  if (!toggleBtn || !themeIconPath) return;

  // Prevent duplicate event listener registration
  if (toggleBtn.dataset.themeToggleInitialized) return;
  toggleBtn.dataset.themeToggleInitialized = 'true';

  let currentTheme = 'light';
  try {
    currentTheme = localStorage.getItem('theme') || 'light';
  } catch (e) {
    console.warn("localStorage not accessible for theme toggle");
  }

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'); // Sun icon
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
    
    if (isDark) {
      themeIconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'); // Sun icon
    } else {
      themeIconPath.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'); // Moon icon
    }
  });
}

// ============================================================
//  SMART NOTES ENGINE
// ============================================================
function initSmartNotesUI() {
  // --- Create FAB ---
  const fab = document.createElement('button');
  fab.className = 'smart-notes-fab';
  fab.id = 'smart-notes-fab';
  fab.setAttribute('aria-label', 'Toggle Smart Notes');
  fab.title = 'Smart Notes (N)';

  // SVG icon for notepad
  const fabSvg = new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
    'image/svg+xml'
  );
  fab.appendChild(fab.ownerDocument.importNode(fabSvg.documentElement, true));

  const countBadge = document.createElement('span');
  countBadge.className = 'notes-count';
  countBadge.id = 'notes-count-badge';
  fab.appendChild(countBadge);

  fab.addEventListener('click', toggleSmartNotesPanel);
  document.body.appendChild(fab);

  // --- Create Panel ---
  const panel = document.createElement('div');
  panel.className = 'smart-notes-panel';
  panel.id = 'smart-notes-panel';

  // Header
  const header = document.createElement('div');
  header.className = 'smart-notes-header';

  const headerLeft = document.createElement('div');
  headerLeft.className = 'smart-notes-header-left';
  const headerIcon = new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--active-accent);"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>',
    'image/svg+xml'
  );
  headerLeft.appendChild(headerLeft.ownerDocument.importNode(headerIcon.documentElement, true));
  const headerTitle = document.createElement('h3');
  headerTitle.textContent = 'Smart Notes';
  headerLeft.appendChild(headerTitle);

  const headerActions = document.createElement('div');
  headerActions.className = 'smart-notes-header-actions';

  const copyBtn = document.createElement('button');
  copyBtn.id = 'copy-notes-btn';
  copyBtn.textContent = '\uD83D\uDCCB Copy All';
  copyBtn.addEventListener('click', copyNotesToClipboard);
  headerActions.appendChild(copyBtn);

  const filterBtn = document.createElement('button');
  filterBtn.id = 'toggle-filters-btn';
  filterBtn.textContent = '\uD83D\uDD0D Filter';
  filterBtn.addEventListener('click', () => {
    const filtersContainer = document.getElementById('smart-notes-filters');
    if (filtersContainer) {
      const isShowing = filtersContainer.classList.toggle('show');
      filterBtn.classList.toggle('active', isShowing);
    }
  });
  headerActions.appendChild(filterBtn);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'smart-notes-close-btn';
  const closeSvg = new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    'image/svg+xml'
  );
  closeBtn.appendChild(closeBtn.ownerDocument.importNode(closeSvg.documentElement, true));
  closeBtn.addEventListener('click', toggleSmartNotesPanel);
  headerActions.appendChild(closeBtn);

  header.appendChild(headerLeft);
  header.appendChild(headerActions);
  panel.appendChild(header);

  // Filters
  const filters = document.createElement('div');
  filters.className = 'smart-notes-filters';
  filters.id = 'smart-notes-filters';
  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'iot', label: 'ES & IoT' },
    { key: 'cn', label: 'CN' },
    { key: 'linux', label: 'Linux' }
  ];
  filterOptions.forEach(opt => {
    const pill = document.createElement('button');
    pill.className = 'smart-notes-filter-pill' + (opt.key === 'all' ? ' active' : '');
    pill.setAttribute('data-filter', opt.key);
    pill.textContent = opt.label;
    pill.addEventListener('click', () => {
      state.notesFilterSubject = opt.key;
      filters.querySelectorAll('.smart-notes-filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderNotesList();
    });
    filters.appendChild(pill);
  });
  panel.appendChild(filters);

  // Notes list body
  const body = document.createElement('div');
  body.className = 'smart-notes-body';
  body.id = 'smart-notes-body';
  panel.appendChild(body);

  // Starred MCQs section
  const starredToggle = document.createElement('button');
  starredToggle.className = 'starred-section-toggle';
  starredToggle.id = 'starred-section-toggle';
  const starredToggleText = document.createElement('span');
  starredToggleText.textContent = '\u2605 Starred Questions';
  starredToggle.appendChild(starredToggleText);
  const starredCountBadge = document.createElement('span');
  starredCountBadge.className = 'starred-count';
  starredCountBadge.id = 'starred-count-badge';
  starredToggle.appendChild(starredCountBadge);
  panel.appendChild(starredToggle);

  const starredContent = document.createElement('div');
  starredContent.className = 'starred-section-content';
  starredContent.id = 'starred-section-content';

  const starredList = document.createElement('div');
  starredList.className = 'starred-section-list';
  starredList.id = 'starred-section-list';
  starredContent.appendChild(starredList);

  // Copy starred button
  const copyStarredRow = document.createElement('div');
  copyStarredRow.style.cssText = 'padding: 0 1.25rem 1rem; display: flex;';
  const copyStarredBtn = document.createElement('button');
  copyStarredBtn.id = 'copy-starred-btn';
  copyStarredBtn.style.cssText = 'flex: 1;';
  copyStarredBtn.className = 'starred-filter-btn';
  copyStarredBtn.textContent = '\uD83D\uDCCB Copy Starred for AI';
  copyStarredBtn.addEventListener('click', copyStarredToClipboard);
  copyStarredRow.appendChild(copyStarredBtn);
  starredContent.appendChild(copyStarredRow);
  panel.appendChild(starredContent);

  starredToggle.addEventListener('click', () => {
    starredContent.classList.toggle('expanded');
  });

  // Footer
  const footer = document.createElement('div');
  footer.className = 'smart-notes-footer';

  const inputRow = document.createElement('div');
  inputRow.className = 'smart-notes-input-row';

  const textarea = document.createElement('textarea');
  textarea.className = 'smart-notes-textarea';
  textarea.id = 'smart-notes-textarea';
  textarea.placeholder = 'Write a note...';
  textarea.rows = 1;
  inputRow.appendChild(textarea);

  const addBtn = document.createElement('button');
  addBtn.className = 'smart-notes-add-btn';
  addBtn.textContent = 'Add';
  addBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;
    addNote({
      sourceType: 'manual',
      selectedText: '',
      userAnnotation: text
    });
    textarea.value = '';
  });
  inputRow.appendChild(addBtn);
  footer.appendChild(inputRow);
  panel.appendChild(footer);

  document.body.appendChild(panel);

  // --- Create Selection Tooltip ---
  const tooltip = document.createElement('div');
  tooltip.className = 'selection-tooltip';
  tooltip.id = 'selection-tooltip';
  tooltip.textContent = '\uD83D\uDCCC Save to Notes';
  document.body.appendChild(tooltip);

  // Setup selection listener
  setupSelectionTooltip();

  // Initial render
  updateNotesCount();
  renderNotesList();
  renderStarredInNotesPanel();
}

function toggleSmartNotesPanel() {
  const panel = document.getElementById('smart-notes-panel');
  const fab = document.getElementById('smart-notes-fab');
  if (!panel || !fab) return;
  
  const isOpen = panel.classList.toggle('open');
  fab.classList.toggle('panel-open', isOpen);
  document.body.classList.toggle('notes-open', isOpen);

  if (isOpen) {
    renderNotesList();
    renderStarredInNotesPanel();
  }
}

function addNote(noteData) {
  const note = {
    id: 'note_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    subject: state.activeSubject,
    section: state.activeSection,
    sectionName: CONFIG.subjects[state.activeSubject]?.sectionNames?.[state.activeSection] || state.activeSection,
    topicTitle: '',
    topicIndex: state.activeTopicIndex,
    timestamp: Date.now(),
    sourceType: noteData.sourceType || 'manual',
    selectedText: noteData.selectedText || '',
    userAnnotation: noteData.userAnnotation || ''
  };

  // Get topic title if on a study page
  if (!isMcqSection() && !isBashSection()) {
    const subjectData = CONFIG.subjects[state.activeSubject]?.data;
    const topics = subjectData?.[state.activeSection];
    if (topics && topics[state.activeTopicIndex]) {
      note.topicTitle = topics[state.activeTopicIndex].title;
    }
  }

  state.smartNotes.unshift(note);
  saveSmartNotes();
  updateNotesCount();
  renderNotesList();

  // Bump animation on badge
  const badge = document.getElementById('notes-count-badge');
  if (badge) {
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  }
}

function deleteNote(noteId) {
  state.smartNotes = state.smartNotes.filter(n => n.id !== noteId);
  saveSmartNotes();
  updateNotesCount();
  renderNotesList();
}

function renderNotesList() {
  const body = document.getElementById('smart-notes-body');
  if (!body) return;

  // Clear previous content safely
  body.replaceChildren();

  const filtered = state.notesFilterSubject === 'all'
    ? state.smartNotes
    : state.smartNotes.filter(n => n.subject === state.notesFilterSubject);

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'smart-notes-empty';
    const icon = document.createElement('div');
    icon.className = 'smart-notes-empty-icon';
    icon.textContent = '\uD83D\uDCDD';
    empty.appendChild(icon);
    const msg = document.createElement('p');
    msg.textContent = state.smartNotes.length === 0
      ? 'No notes yet. Select text on a page or type a note below.'
      : 'No notes for this subject filter.';
    empty.appendChild(msg);
    body.appendChild(empty);
    return;
  }

  filtered.forEach(note => {
    const card = document.createElement('div');
    card.className = 'smart-note-card';

    // Source badge row
    const sourceRow = document.createElement('div');
    sourceRow.className = 'smart-note-source';

    const badge = document.createElement('span');
    badge.className = 'smart-note-source-badge source-' + note.subject;
    badge.textContent = CONFIG.subjects[note.subject]?.label || note.subject;
    sourceRow.appendChild(badge);

    const timestamp = document.createElement('span');
    timestamp.className = 'smart-note-timestamp';
    timestamp.textContent = formatTimeAgo(note.timestamp);
    sourceRow.appendChild(timestamp);
    card.appendChild(sourceRow);

    // Context line
    if (note.topicTitle || note.sectionName) {
      const context = document.createElement('div');
      context.className = 'smart-note-context';
      context.textContent = [note.sectionName, note.topicTitle].filter(Boolean).join(' \u2192 ');
      card.appendChild(context);
    }

    // Selected text (if selection note)
    if (note.selectedText) {
      const selDiv = document.createElement('div');
      selDiv.className = 'smart-note-content selection-text';
      selDiv.textContent = note.selectedText;
      card.appendChild(selDiv);
    }

    // Annotation / manual note
    if (note.userAnnotation) {
      const annoDiv = document.createElement('div');
      annoDiv.className = note.selectedText ? 'smart-note-annotation' : 'smart-note-content';
      annoDiv.textContent = note.userAnnotation;
      card.appendChild(annoDiv);
    }

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'smart-note-delete';
    delBtn.title = 'Delete note';
    const delSvg = new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
      'image/svg+xml'
    );
    delBtn.appendChild(delBtn.ownerDocument.importNode(delSvg.documentElement, true));
    delBtn.addEventListener('click', () => deleteNote(note.id));
    card.appendChild(delBtn);

    body.appendChild(card);
  });
}

function updateNotesCount() {
  const badge = document.getElementById('notes-count-badge');
  if (!badge) return;
  const count = state.smartNotes.length;
  badge.textContent = count > 0 ? String(count) : '';
  badge.setAttribute('data-count', String(count));
}

function formatTimeAgo(timestamp) {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return mins + 'm ago';
  const hours = Math.floor(mins / 60);
  if (hours < 24) return hours + 'h ago';
  const days = Math.floor(hours / 24);
  if (days < 7) return days + 'd ago';
  return new Date(timestamp).toLocaleDateString();
}

function formatNotesForExport() {
  if (state.smartNotes.length === 0) return 'No notes saved yet.';

  let output = '\uD83D\uDCDA STUDY NOTES \u2014 prep\n';
  output += '\u2550'.repeat(30) + '\n\n';

  state.smartNotes.forEach(note => {
    const subjectLabel = CONFIG.subjects[note.subject]?.label || note.subject;
    const context = [subjectLabel, note.sectionName, note.topicTitle].filter(Boolean).join(' \u2192 ');
    const timeAgo = formatTimeAgo(note.timestamp);

    output += '[' + context + '] (' + timeAgo + ')\n';

    if (note.selectedText) {
      output += '\uD83D\uDCCC "' + note.selectedText + '"\n';
    }
    if (note.userAnnotation) {
      const prefix = note.selectedText ? '\uD83D\uDCAD ' : '\u270D\uFE0F ';
      output += prefix + note.userAnnotation + '\n';
    }
    output += '\n';
  });

  return output.trim();
}

function copyNotesToClipboard() {
  const text = formatNotesForExport();
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-notes-btn');
    if (btn) {
      const original = btn.textContent;
      btn.textContent = '\u2713 Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 2000);
    }
  }).catch(() => {
    // Fallback: select from a temporary element
  });
}

// ============================================================
//  TEXT SELECTION → SAVE TO NOTES TOOLTIP
// ============================================================
function setupSelectionTooltip() {
  const tooltip = document.getElementById('selection-tooltip');
  if (!tooltip) return;

  let selectedText = '';

  document.addEventListener('mouseup', (e) => {
    // Only on reading content area (theory pages)
    const contentArea = document.getElementById('reading-content-area');
    if (!contentArea || !contentArea.contains(e.target)) {
      hideSelectionTooltip();
      return;
    }

    // Don't show in MCQ/Bash modes
    if (isMcqSection() || isBashSection()) {
      hideSelectionTooltip();
      return;
    }

    // Don't show if clicking on the tooltip itself
    if (tooltip.contains(e.target)) return;

    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : '';

    if (text.length > 3) {
      selectedText = text;
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      tooltip.style.top = (rect.bottom + scrollTop + 8) + 'px';
      tooltip.style.left = (rect.left + scrollLeft + (rect.width / 2) - 60) + 'px';
      tooltip.classList.add('visible');
    } else {
      hideSelectionTooltip();
    }
  });

  tooltip.addEventListener('click', () => {
    if (!selectedText) return;

    addNote({
      sourceType: 'selection',
      selectedText: selectedText,
      userAnnotation: ''
    });

    hideSelectionTooltip();
    window.getSelection().removeAllRanges();

    // Open panel briefly if not open
    const panel = document.getElementById('smart-notes-panel');
    if (panel && !panel.classList.contains('open')) {
      toggleSmartNotesPanel();
    }
  });

  // Hide tooltip on scroll or click elsewhere
  document.addEventListener('mousedown', (e) => {
    if (!tooltip.contains(e.target)) {
      hideSelectionTooltip();
    }
  });
}

function hideSelectionTooltip() {
  const tooltip = document.getElementById('selection-tooltip');
  if (tooltip) {
    tooltip.classList.remove('visible');
  }
}

// ============================================================
//  STARRED MCQs IN NOTES PANEL
// ============================================================
function renderStarredInNotesPanel() {
  const list = document.getElementById('starred-section-list');
  const countBadge = document.getElementById('starred-count-badge');
  if (!list) return;

  // Collect all starred questions across subjects
  const allStarred = [];
  Object.keys(state.starredMcqs).forEach(subject => {
    const qIds = state.starredMcqs[subject] || [];
    const mcqBank = CONFIG.subjects[subject]?.mcqs || [];
    const allQuestions = mcqBank.flatMap(u => u.questions || []);

    qIds.forEach(qId => {
      const q = allQuestions.find(question => question.id === qId);
      if (q) {
        allStarred.push({ ...q, subject });
      }
    });
  });

  if (countBadge) {
    countBadge.textContent = allStarred.length > 0 ? String(allStarred.length) : '';
  }

  list.replaceChildren();

  if (allStarred.length === 0) {
    const empty = document.createElement('p');
    empty.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary); padding: 0.5rem 0;';
    empty.textContent = 'No starred questions yet. Star questions in MCQ practice to see them here.';
    list.appendChild(empty);
    return;
  }

  allStarred.forEach(q => {
    const item = document.createElement('div');
    item.className = 'starred-mcq-item';

    const headerRow = document.createElement('div');
    headerRow.className = 'starred-mcq-item-header';

    const badge = document.createElement('span');
    badge.className = 'starred-mcq-subject-badge';
    badge.textContent = CONFIG.subjects[q.subject]?.label || q.subject;
    headerRow.appendChild(badge);
    item.appendChild(headerRow);

    const qText = document.createElement('div');
    qText.className = 'starred-mcq-question-text';
    qText.textContent = q.question;
    item.appendChild(qText);

    if (q.correct && q.options) {
      const ansDiv = document.createElement('div');
      ansDiv.className = 'starred-mcq-answer';
      const parsed = parseOption(q.options[q.correct] || '');
      ansDiv.textContent = '\u2713 ' + q.correct.toUpperCase() + ') ' + parsed.text;
      item.appendChild(ansDiv);
    }

    list.appendChild(item);
  });
}

function formatStarredForExport() {
  const allStarred = [];
  Object.keys(state.starredMcqs).forEach(subject => {
    const qIds = state.starredMcqs[subject] || [];
    const mcqBank = CONFIG.subjects[subject]?.mcqs || [];
    const allQuestions = mcqBank.flatMap(u => u.questions || []);

    qIds.forEach(qId => {
      const q = allQuestions.find(question => question.id === qId);
      if (q) {
        allStarred.push({ ...q, subject });
      }
    });
  });

  if (allStarred.length === 0) return 'No starred questions.';

  let output = '\u2605 STARRED QUESTIONS \u2014 prep\n';
  output += '\u2550'.repeat(30) + '\n\n';

  allStarred.forEach((q, i) => {
    const subjectLabel = CONFIG.subjects[q.subject]?.label || q.subject;
    output += '\u2605 Q' + (i + 1) + '. [' + subjectLabel + '] ' + q.question + '\n';

    if (q.options) {
      Object.keys(q.options).forEach(optLetter => {
        const parsed = parseOption(q.options[optLetter]);
        const marker = optLetter === q.correct ? ' \u2190 Correct' : '';
        output += '  ' + optLetter.toUpperCase() + ') ' + parsed.text + marker + '\n';
      });
    }

    const savedAns = state.practiceAnswers[q.subject]?.[q.id];
    if (savedAns !== undefined) {
      const isCorrect = savedAns === q.correct;
      output += '  [Your answer: ' + savedAns.toUpperCase() + ' \u2014 ' + (isCorrect ? 'Correct' : 'Incorrect') + ']\n';
    }
    output += '\n';
  });

  return output.trim();
}

function copyStarredToClipboard() {
  const text = formatStarredForExport();
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-starred-btn');
    if (btn) {
      const original = btn.textContent;
      btn.textContent = '\u2713 Copied!';
      setTimeout(() => { btn.textContent = original; }, 2000);
    }
  }).catch(() => {
    // Fallback silently
  });
}
