// Prep Hub Application Logic — Supports ES & IoT, Computer Networks, and Linux

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

  // Boot to IoT subject, first section
  setActiveSubject('iot');
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
}

// ============================================================
//  SUBJECT SWITCHING
// ============================================================
function setActiveSubject(subjectId) {
  state.activeSubject = subjectId;
  const subjectConfig = CONFIG.subjects[subjectId];

  // Update document title
  document.title = `${subjectConfig.label} Prep`;

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
    mainContentPane.classList.add('bash-active');
  } else {
    mainContentPane.classList.remove('bash-active');
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

  function readVars(names) {
    const raw = inputLines[inputCursor] || '';
    inputCursor += 1;
    const parts = raw.trim().split(/\s+/).filter(Boolean);
    names.forEach((name, index) => {
      vars[name] = parts[index] !== undefined ? parts[index] : '';
    });
  }

  function stripOuterQuotes(value) {
    return String(value || '').replace(/^['"]|['"]$/g, '');
  }

  function expandArithmeticExpression(expr) {
    const safeExpr = expr.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, name => {
      return Number(vars[name] || 0);
    });
    if (!/^[0-9+\-*/%<>=!&| ().]+$/.test(safeExpr)) return '';
    try {
      return String(Function(`"use strict"; return (${safeExpr});`)());
    } catch (e) {
      return '';
    }
  }

  function expandValue(text) {
    return stripOuterQuotes(String(text || '')
      .replace(/\$\(\(([^)]+)\)\)/g, (_, expr) => expandArithmeticExpression(expr))
      .replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => vars[name] || ''));
  }

  function valueToNumber(value) {
    return Number(expandValue(value));
  }

  function evalSingleTest(condition) {
    let clean = condition
      .replace(/^if\s+/, '')
      .replace(/^elif\s+/, '')
      .replace(/\bthen\b/g, '')
      .replace(/[{};]/g, '')
      .trim();

    const arithmeticMatch = clean.match(/^\(\((.+)\)\)$/);
    if (arithmeticMatch) {
      return expandArithmeticExpression(arithmeticMatch[1]) === 'true';
    }

    const bracketMatch = clean.match(/^\[\s*(.+?)\s*\]$/);
    if (!bracketMatch) return false;

    const binaryMatch = bracketMatch[1].match(/^(.*?)\s+(-eq|-ne|-gt|-ge|-lt|-le|==|=|!=)\s+(.*?)$/);
    if (binaryMatch) {
      const leftRaw = binaryMatch[1].trim();
      const op = binaryMatch[2];
      const rightRaw = binaryMatch[3].trim();
      const leftText = expandValue(leftRaw);
      const rightText = expandValue(rightRaw);
      const leftNum = Number(leftText);
      const rightNum = Number(rightText);

      switch (op) {
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

    const unaryMatch = bracketMatch[1].match(/^(-z|-n)\s+(.+)$/);
    if (unaryMatch) {
      const op = unaryMatch[1];
      const target = expandValue(unaryMatch[2]);
      if (op === '-z') return target.length === 0;
      if (op === '-n') return target.length > 0;
    }

    return false;
  }

  function evalCondition(condition) {
    const normalized = condition
      .replace(/^if\s+/, '')
      .replace(/^elif\s+/, '')
      .replace(/\bthen\b/g, '')
      .trim();

    return normalized.split(/\s+\|\|\s+/).some(orPart => {
      return orPart.split(/\s+&&\s+/).every(andPart => evalSingleTest(andPart.trim()));
    });
  }

  function runSimpleLine(line) {
    const compact = line.replace(/;$/, '').trim();
    const readMatch = compact.match(/^read\s+(.+)$/);
    if (readMatch) {
      readVars(readMatch[1].split(/\s+/));
      return;
    }

    const assignMatch = compact.match(/^([a-zA-Z_][a-zA-Z0-9_]*)=(.+)$/);
    if (assignMatch) {
      vars[assignMatch[1]] = expandValue(assignMatch[2]);
      return;
    }

    const echoMatch = compact.match(/^echo(?:\s+(-n))?\s*(.*)$/);
    if (echoMatch) {
      const text = expandValue(echoMatch[2] || '');
      if (echoMatch[1] === '-n') {
        output.push(text);
      } else {
        output.push(`${text}\n`);
      }
      return;
    }

    const printfMatch = compact.match(/^printf\s+["']%s\\n["']\s+(.+)$/);
    if (printfMatch) {
      output.push(`${expandValue(printfMatch[1])}\n`);
    }
  }

  function collectIfBranches(startIndex) {
    const branches = [];
    let current = { condition: lines[startIndex], body: [] };
    branches.push(current);
    let i = startIndex + 1;

    while (i < lines.length) {
      const line = lines[i];
      if (line === 'then') {
        i += 1;
        continue;
      }
      if (line.startsWith('elif ')) {
        current = { condition: line, body: [] };
        branches.push(current);
        i += 1;
        continue;
      }
      if (line === 'else') {
        current = { condition: null, body: [] };
        branches.push(current);
        i += 1;
        continue;
      }
      if (line === 'fi') {
        return { branches, endIndex: i };
      }
      current.body.push(line);
      i += 1;
    }

    return { branches, endIndex: i };
  }

  function runCase(startIndex) {
    const caseLine = lines[startIndex];
    const valueMatch = caseLine.match(/^case\s+(.+)\s+in$/);
    if (!valueMatch) return startIndex;
    const switchValue = expandValue(valueMatch[1]);
    let matched = false;
    let i = startIndex + 1;

    while (i < lines.length && lines[i] !== 'esac') {
      const patternLine = lines[i];
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

  try {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('if ')) {
        const { branches, endIndex } = collectIfBranches(i);
        const branch = branches.find(item => item.condition === null || evalCondition(item.condition));
        if (branch) branch.body.forEach(runSimpleLine);
        i = endIndex;
      } else if (line.startsWith('case ')) {
        i = runCase(i);
      } else {
        runSimpleLine(line);
      }
    }
  } catch (e) {
    return { output: output.join(''), error: e.message || 'Unable to simulate this script.' };
  }

  return {
    output: output.join(''),
    error: ''
  };
}

function evaluateBashProblem(problem, script, mode) {
  const tests = mode === 'run'
    ? problem.tests.filter(test => test.visible)
    : problem.tests;

  return tests.map(test => {
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
        <div class="bash-result-grid">
          <div><label>Input</label><pre>${escapeHtml(result.input)}</pre></div>
          <div><label>Expected</label><pre>${escapeHtml(result.expectedOutput)}</pre></div>
          <div><label>Your Output</label><pre>${escapeHtml(result.actualOutput || '(empty)')}</pre></div>
        </div>
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
  const currentCode = progress.code || problem.starterCode;
  const lastResults = progress.lastResults || [];
  const passedCount = lastResults.filter(result => result.passed).length;
  const resultSummary = lastResults.length
    ? `${passedCount} passed / ${lastResults.length} total`
    : 'No run yet';

  elements.welcomeScreen.style.display = 'none';
  elements.readingPane.style.display = 'block';
  // Note: Badge and Title are hidden via CSS in bash-active mode
  
  const examplesHtml = problem.examples.map(example => `
    <div class="bash-example">
      <label>Input</label>
      <pre>${escapeHtml(example.input)}</pre>
      <label>Expected Output</label>
      <pre>${escapeHtml(example.expectedOutput)}</pre>
    </div>
  `).join('');

  const constraintsHtml = problem.constraints.map(item => `<li>${escapeHtml(item)}</li>`).join('');

  elements.contentArea.innerHTML = `
    <div class="bash-workspace">
      <section class="bash-description-pane">
        <div class="bash-problem-header">
          <div class="bash-header-top-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
             <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--active-accent); letter-spacing: 0.05em;">${CONFIG.subjects[state.activeSubject].sectionNames[state.activeSection]}</span>
             <div class="bash-nav-mini" style="display: flex; gap: 0.5rem;">
                <button id="bash-mini-prev" class="nav-prev-btn" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" ${index === 0 ? 'disabled style="opacity:0.5"' : ''}>←</button>
                <button id="bash-mini-next" class="nav-next-btn" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" ${index === problems.length - 1 ? 'disabled style="opacity:0.5"' : ''}>→</button>
             </div>
          </div>
          <h3 style="margin-top: 0; border-left: none; padding-left: 0;">${escapeHtml(problem.title)}</h3>
          <div class="bash-tags">
            <span>${escapeHtml(problem.difficulty)}</span>
            ${problem.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
        <div class="bash-section-block">
          <h4>Problem</h4>
          <p>${escapeHtml(problem.prompt)}</p>
        </div>
        <div class="bash-section-block">
          <h4>Examples</h4>
          ${examplesHtml}
        </div>
        <div class="bash-section-block">
          <h4>Constraints</h4>
          <ul>${constraintsHtml}</ul>
        </div>
      </section>
      <section class="bash-editor-pane">
        <div class="bash-editor-toolbar">
          <span>Bash</span>
          <div>
            <button class="bash-run-btn" id="bash-run-btn">Run</button>
            <button class="bash-submit-btn" id="bash-submit-btn">Submit</button>
          </div>
        </div>
        <textarea class="bash-code-editor" id="bash-code-editor" spellcheck="false">${escapeHtml(currentCode)}</textarea>
        <div class="bash-results-panel">
          <div class="bash-results-header">
            <strong>Test Results</strong>
            <span id="bash-results-summary">${resultSummary}</span>
          </div>
          <div id="bash-results-body">${renderBashResults(lastResults)}</div>
        </div>
      </section>
    </div>
  `;

  const editor = document.getElementById('bash-code-editor');
  editor.addEventListener('input', event => {
    state.bashProgress[state.activeSubject][problem.id] = {
      ...state.bashProgress[state.activeSubject][problem.id],
      code: event.target.value
    };
    saveBashProgress();
  });

  document.getElementById('bash-run-btn').addEventListener('click', () => runBashProblem(problem, 'run'));
  document.getElementById('bash-submit-btn').addEventListener('click', () => runBashProblem(problem, 'submit'));
  
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
      const rawText = q.options[optLetter];
      const parsed = parseOption(rawText);
      
      if (optLetter === q.correct && parsed.explanation) {
        unitExplanation = parsed.explanation;
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
        <div class="mcq-question"><strong>Q${qNum}.</strong> ${q.question}</div>
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
//  RUN APP
// ============================================================
window.addEventListener('DOMContentLoaded', init);
