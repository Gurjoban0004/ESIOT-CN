/**
/**
 * Prep — Computer Networks Numerical Solver Engine
 * Exposes interactive calculation playgrounds and worked solutions for numerical MCQs.
 */

// Mapping question IDs to solver types
const SOLVER_MAPPING = {
  1: 'mesh', 2: 'mesh', 101: 'mesh',
  6: 'domains', 102: 'domains',
  3: 'nyquist_shannon', 4: 'nyquist_shannon', 5: 'nyquist_shannon', 103: 'nyquist_shannon', 104: 'nyquist_shannon', 105: 'nyquist_shannon',
  61: 'checksum', 63: 'checksum', 64: 'checksum', 113: 'checksum',
  65: 'hamming_corr', 66: 'hamming_corr', 110: 'hamming_corr',
  109: 'hamming_gen',
  71: 'csmacd', 107: 'csmacd',
  108: 'overhead',
  77: 'crc_gen', 78: 'crc_gen', 111: 'crc_gen',
  112: 'crc_check',
  67: 'aloha', 68: 'aloha', 114: 'aloha',
  73: 'cdma', 74: 'cdma', 75: 'cdma', 115: 'cdma',
  81: 'stop_wait', 116: 'stop_wait',
  82: 'gbn_window', 83: 'gbn_window', 117: 'gbn_window',
  84: 'sr_window', 118: 'sr_window',
  96: 'subnet_cidr', 119: 'subnet_cidr',
  95: 'ip_boundary', 120: 'ip_boundary',
  121: 'classful_subnet',
  87: 'fragmentation', 88: 'fragmentation', 122: 'fragmentation',
  123: 'fragment_range',
  124: 'supernet',
  125: 'sliding_window_speed',  126: 'bdp',  127: 'bdp',  128: 'aloha',  129: 'aloha',  130: 'crc_gen',  131: 'checksum',  132: 'generic',  133: 'hamming_gen',  134: 'stop_wait',  135: 'gbn_window',  136: 'sr_window',  137: 'sr_window',  138: 'subnet_cidr',  139: 'ip_boundary',  140: 'ip_boundary',  141: 'classful_subnet',  142: 'generic',  143: 'fragmentation',  144: 'generic',  145: 'generic',  146: 'generic',  147: 'bdp',  148: 'csmacd',  149: 'aloha',  150: 'aloha',  151: 'generic',  152: 'generic',  153: 'generic',  154: 'gbn_window',  155: 'generic',  156: 'generic',  157: 'subnet_cidr',  158: 'generic',  159: 'generic',  160: 'stop_wait'
};

const SOLVER_TITLES = {
  'mesh': 'Mesh Topology Calculator',
  'domains': 'Collision & Broadcast Domains',
  'nyquist_shannon': 'Nyquist & Shannon Capacity Limits',
  'bdp': 'Bandwidth-Delay Product (BDP)',
  'csmacd': 'CSMA/CD Minimum Frame Size',
  'overhead': 'Ethernet IPG Overhead',
  'hamming_gen': 'Hamming Code Generator',
  'hamming_corr': 'Hamming Code Error Corrector',
  'crc_gen': 'CRC Polynomial Divider Generator',
  'crc_check': 'CRC Error Checker',
  'checksum': 'Internet Checksum Calculator',
  'aloha': 'ALOHA Throughput & Frame Rate',
  'cdma': 'CDMA Chip Decoding Visualizer',
  'stop_wait': 'Stop-and-Wait Link Efficiency',
  'gbn_window': 'Go-Back-N Window Size Calculator',
  'sr_window': 'Selective Repeat Window Size',
  'subnet_cidr': 'CIDR Subnet IP Calculator',
  'ip_boundary': 'Subnet Boundary Finder',
  'classful_subnet': 'Class C Subnet Design Planner',
  'fragmentation': 'IPv4 Packet Fragmentation details',
  'fragment_range': 'Fragment Payload Range Checker',
  'supernet': 'CIDR Route Summarization',
  'sliding_window_speed': 'Sliding Window Speed Calculator',
  'generic': 'Topic Visualizer & Worked Solution'
};

// Main state to store currently active question and solver details
let activeSolverState = {
  questionId: null,
  solverType: 'generic',
  customData: {}
};

/**
 * Open the solver panel split screen
 */
function openSolver(qId) {
  const workspace = document.querySelector('.practice-workspace');
  if (!workspace) return;

  let solverPane = document.getElementById('practice-solver-pane');
  
  if (!solverPane) {
    // Insert resizer and solver pane dynamically
    const questionsPane = workspace.querySelector('.practice-questions-pane');
    
    const resizer = document.createElement('div');
    resizer.className = 'resizer-h';
    resizer.id = 'resizer-solver-h';
    resizer.innerHTML = '<div class="resizer-notch"></div>';
    
    const pane = document.createElement('section');
    pane.className = 'practice-solver-pane';
    pane.id = 'practice-solver-pane';
    
    questionsPane.after(resizer);
    resizer.after(pane);
    
    // Initialize resizer logic
    initResizer('resizer-solver-h', 'practice-questions-pane', 'horizontal', false);
  }

  // Set active classes to slide dashboard and show split screen
  workspace.classList.add('solver-active');
  
  const resizerSolver = document.getElementById('resizer-solver-h');
  solverPane = document.getElementById('practice-solver-pane');
  
  if (resizerSolver) resizerSolver.style.display = 'flex';
  if (solverPane) {
    solverPane.style.display = 'flex';
    solverPane.style.width = '45%'; // Start with ~45% split width
  }

  const questionsPane = workspace.querySelector('.practice-questions-pane');
  if (questionsPane) {
    questionsPane.style.flex = '1';
    questionsPane.style.width = 'auto'; // Reset explicit width so flex works
  }

  // Populate data
  activeSolverState.questionId = qId;
  activeSolverState.solverType = SOLVER_MAPPING[qId] || 'generic';
  
  renderSolverContent();
}

/**
 * Close the solver panel and restore normal view
 */
function closeSolver() {
  const workspace = document.querySelector('.practice-workspace');
  if (!workspace) return;

  workspace.classList.remove('solver-active');
  
  const resizerSolver = document.getElementById('resizer-solver-h');
  const solverPane = document.getElementById('practice-solver-pane');
  if (resizerSolver) resizerSolver.style.display = 'none';
  if (solverPane) solverPane.style.display = 'none';

  // Restore the normal dashboard resizer and sidebar pane
  const infoPane = document.getElementById('practice-info-pane');
  const resizerPractice = document.getElementById('resizer-practice-h');
  if (infoPane) infoPane.style.display = 'block';
  if (resizerPractice) resizerPractice.style.display = 'flex';
}

/**
 * Get question object by ID from active MCQ database
 */
function getQuestionObj(qId) {
  if (typeof getActiveMcqBank !== 'function') return null;
  const mcqBank = getActiveMcqBank();
  for (const unit of mcqBank) {
    if (unit.questions) {
      const q = unit.questions.find(quest => quest.id === qId);
      if (q) return q;
    }
  }
  return null;
}

/**
 * Extract clean explanation from options or fields
 */
function getExplanationText(q) {
  if (!q) return '';
  if (q.explanation) return q.explanation;
  
  // Try to find marked correct option explanation
  if (q.options && q.correct) {
    const rawText = q.options[q.correct];
    if (rawText && typeof parseOption === 'function') {
      return parseOption(rawText).explanation || '';
    }
  }
  return '';
}

/**
 * Render content of the active solver type
 */
function renderSolverContent() {
  const pane = document.getElementById('practice-solver-pane');
  if (!pane) return;

  const q = getQuestionObj(activeSolverState.questionId);
  const type = activeSolverState.solverType;
  const title = SOLVER_TITLES[type] || 'Numerical Solver';
  
  // Render selector options
  const dropdownOptions = Object.keys(SOLVER_TITLES).map(t => {
    return `<option value="${t}" ${t === type ? 'selected' : ''}>${SOLVER_TITLES[t]}</option>`;
  }).join('');

  let targetMcqHtml = '';
  if (q) {
    targetMcqHtml = `
      <div class="solver-section" style="border-left: 4px solid var(--active-accent); background: #FFFDF8;">
        <h4 style="border-bottom: none; margin-bottom: 0; padding-bottom: 0; font-size: 0.85rem; color: var(--text-secondary);">Target Question (MCQ ID: ${q.id})</h4>
        <p style="margin: 0.5rem 0 0; font-weight: 600; font-size: 0.9rem;">${q.question}</p>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.4;">
          <strong>Explanation:</strong> ${getExplanationText(q) || 'Review details below.'}
        </div>
      </div>
    `;
  }

  // Shell Layout
  pane.innerHTML = `
    <div class="solver-header">
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <span style="font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--active-accent); letter-spacing: 0.05em;">Interactive Step-by-Step Solver</span>
        <h3 style="margin: 0; border: none; padding: 0; font-size: 1.25rem;">${title}</h3>
      </div>
      <button class="solver-close-btn" onclick="closeSolver()" title="Close Solver Panel">&times;</button>
    </div>

    <div style="margin-bottom: 1rem;">
      <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary); display: block; margin-bottom: 0.25rem;">Change Solver Mode</label>
      <select class="solver-selector-dropdown" id="solver-type-selector" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 6px; font-size: 0.85rem;">
        ${dropdownOptions}
      </select>
    </div>

    <div class="solver-body-scrollable" style="flex: 1; overflow-y: auto; padding-right: 0.25rem;">
      ${targetMcqHtml}
      <div id="solver-interactive-area"></div>
    </div>
  `;

  // Bind dropdown change
  document.getElementById('solver-type-selector').addEventListener('change', (e) => {
    activeSolverState.solverType = e.target.value;
    renderSolverContent();
  });

  // Render specific calculator inputs and logic
  generateCalculatorUI(type);

  // Re-run KaTeX on the solver panel
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(pane, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  }
}

/**
 * Generate specific UIs and link input change event listeners
 */
function generateCalculatorUI(type) {
  const container = document.getElementById('solver-interactive-area');
  if (!container) return;

  switch (type) {
    case 'mesh':
      renderMeshSolver(container);
      break;
    case 'domains':
      renderDomainsSolver(container);
      break;
    case 'nyquist_shannon':
      renderNyquistShannonSolver(container);
      break;
    case 'bdp':
      renderBdpSolver(container);
      break;
    case 'csmacd':
      renderCsmaCdSolver(container);
      break;
    case 'overhead':
      renderOverheadSolver(container);
      break;
    case 'hamming_gen':
      renderHammingGenSolver(container);
      break;
    case 'hamming_corr':
      renderHammingCorrSolver(container);
      break;
    case 'crc_gen':
      renderCrcGenSolver(container);
      break;
    case 'crc_check':
      renderCrcCheckSolver(container);
      break;
    case 'checksum':
      renderChecksumSolver(container);
      break;
    case 'aloha':
      renderAlohaSolver(container);
      break;
    case 'cdma':
      renderCdmaSolver(container);
      break;
    case 'stop_wait':
      renderStopWaitSolver(container);
      break;
    case 'gbn_window':
      renderGbnWindowSolver(container);
      break;
    case 'sr_window':
      renderSrWindowSolver(container);
      break;
    case 'subnet_cidr':
      renderSubnetCidrSolver(container);
      break;
    case 'ip_boundary':
      renderIpBoundarySolver(container);
      break;
    case 'classful_subnet':
      renderClassfulSubnetSolver(container);
      break;
    case 'fragmentation':
      renderFragmentationSolver(container);
      break;
    case 'fragment_range':
      renderFragmentRangeSolver(container);
      break;
    case 'supernet':
      renderSupernetSolver(container);
      break;
    case 'sliding_window_speed':
      renderSlidingWindowSpeedSolver(container);
      break;
    default:
      renderGenericSolver(container);
  }
}

// ============================================================
//  SPECIFIC CALCULATORS
// ============================================================

function renderMeshSolver(container) {
  // Try to pre-fill with MCQ values
  const q = getQuestionObj(activeSolverState.questionId);
  let initN = 10;
  if (q && q.id === 101) initN = 20;
  else if (q && q.id === 1) initN = 6;
  else if (q && q.id === 2) initN = 8;

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Interactive Mesh Calculator</h4>
      <div style="margin-bottom: 1rem;">
        <label for="mesh_n">Number of Network Devices (N):</label>
        <input type="number" id="mesh_n" min="2" max="500" value="${initN}">
      </div>
      
      <div id="mesh-result" class="solver-result"></div>
    </div>
  `;

  const input = document.getElementById('mesh_n');
  const calculate = () => {
    const n = parseInt(input.value) || 2;
    const links = (n * (n - 1)) / 2;
    const ports = n - 1;
    const totalPorts = n * (n - 1);
    
    document.getElementById('mesh-result').innerHTML = `
      <strong>Calculated Results:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Total Dedicated Physical Links: <strong>${links}</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\frac{N(N-1)}{2} = \\frac{${n} \\times (${n}-1)}{2} = ${links}$</small>
        </li>
        <li>Physical Ports Per Device: <strong>${ports}</strong>
          <br><small style="color: var(--text-secondary)">Formula: $N - 1 = ${n} - 1 = ${ports}$</small>
        </li>
        <li>Total Physical Ports in Network: <strong>${totalPorts}</strong>
          <br><small style="color: var(--text-secondary)">Formula: $N \\times (N-1) = ${n} \\times ${ports} = ${totalPorts}$</small>
        </li>
      </ul>
    `;
    
    // Re-trigger LaTeX
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('mesh-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  input.addEventListener('input', calculate);
  calculate();
}

function renderDomainsSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Collision & Broadcast Domain visualizer</h4>
      <p style="font-size: 0.8rem; margin: 0 0 1rem; color: var(--text-secondary);">Configure nodes on the devices to compute domains.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="dom_switches">No. of Switch Ports (total):</label>
          <input type="number" id="dom_switches" min="0" max="48" value="8">
        </div>
        <div>
          <label for="dom_hubs">No. of Hub Ports (total):</label>
          <input type="number" id="dom_hubs" min="0" max="24" value="12">
        </div>
      </div>
      
      <div style="margin-bottom: 1rem;">
        <label for="dom_inter">Are the Switches connected in cascade?</label>
        <select id="dom_inter">
          <option value="yes">Yes (Connected Together)</option>
          <option value="no">No (Isolated Segments)</option>
        </select>
      </div>

      <div id="domains-result" class="solver-result"></div>
    </div>
  `;

  const switchesInput = document.getElementById('dom_switches');
  const hubsInput = document.getElementById('dom_hubs');
  const interInput = document.getElementById('dom_inter');

  const calculate = () => {
    const sw = parseInt(switchesInput.value) || 0;
    const hb = parseInt(hubsInput.value) || 0;
    const connected = interInput.value === 'yes';

    // Broadcast domain count
    // A network of switches/hubs connected together is exactly 1 broadcast domain
    const bDomains = sw > 0 || hb > 0 ? 1 : 0;
    
    // Collision domains:
    // Every Switch port is 1 collision domain
    // A Hub forms exactly 1 collision domain across all its ports
    // Let's assume switch ports connect to the hub (sharing 1 domain) and other hosts
    let cDomains = sw;
    if (hb > 0) {
      // 1 switch port is used to connect to the hub, they merge.
      // So the hub domain replaces 1 switch port domain (meaning total collision domains remains sw if sw > 0, otherwise if sw=0 then hub is 1)
      if (sw > 0) {
        cDomains = sw; // switch ports already include the hub connection port
      } else {
        cDomains = 1; // only the hub exists
      }
    }

    document.getElementById('domains-result').innerHTML = `
      <strong>Domain Analysis:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.5;">
        <li>Broadcast Domains: <strong>${bDomains}</strong>
          <br><small style="color: var(--text-secondary)">Since switches and hubs flood broadcast frames out of all ports, they stay in 1 broadcast domain unless a Layer 3 Router segments them.</small>
        </li>
        <li>Collision Domains: <strong>${cDomains}</strong>
          <br><small style="color: var(--text-secondary)">Every switch port is a separate collision domain. The hub and all its connected nodes share exactly 1 collision domain.</small>
        </li>
      </ul>
    `;
  };

  [switchesInput, hubsInput, interInput].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderNyquistShannonSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initB = 4000;
  let initL = 8;
  let initSNR = 30;
  
  if (q && q.id === 3) { initB = 8000000; initL = 8; }
  else if (q && q.id === 4) { initB = 4000; initSNR = 30; }
  else if (q && q.id === 5) { initB = 2000000; initSNR = 15; initL = 8; }
  else if (q && q.id === 103) { initB = 8000000; initL = 8; }
  else if (q && q.id === 104) { initB = 4000; initSNR = 30; }
  else if (q && q.id === 105) { initB = 2000000; initSNR = 15; initL = 8; }

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Nyquist & Shannon Capacity Playground</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="cap_b">Channel Bandwidth (B in Hz):</label>
        <input type="number" id="cap_b" value="${initB}" min="1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="cap_l">Signal Levels (L):</label>
          <input type="number" id="cap_l" value="${initL}" min="2">
        </div>
        <div>
          <label for="cap_snr">SNR (dB):</label>
          <input type="number" id="cap_snr" value="${initSNR}" min="0">
        </div>
      </div>
      
      <div id="capacity-result" class="solver-result"></div>
    </div>
  `;

  const bInp = document.getElementById('cap_b');
  const lInp = document.getElementById('cap_l');
  const snrInp = document.getElementById('cap_snr');

  const calculate = () => {
    const B = parseFloat(bInp.value) || 1;
    const L = parseInt(lInp.value) || 2;
    const snrDb = parseFloat(snrInp.value) || 0;

    // Nyquist bit rate
    const nyqRate = 2 * B * Math.log2(L);
    
    // Shannon capacity
    const snrLinear = Math.pow(10, snrDb / 10);
    const shannonCap = B * Math.log2(1 + snrLinear);
    
    // Final achievable bit rate is bounded by Shannon
    const achievable = Math.min(nyqRate, shannonCap);

    const formatRate = (rate) => {
      if (rate >= 1e6) return (rate / 1e6).toFixed(2) + ' Mbps';
      if (rate >= 1e3) return (rate / 1e3).toFixed(2) + ' Kbps';
      return rate.toFixed(0) + ' bps';
    };

    document.getElementById('capacity-result').innerHTML = `
      <strong>Theoretical Limit Analysis:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Nyquist Limit (Noiseless): <strong>${formatRate(nyqRate)}</strong>
          <br><small style="color: var(--text-secondary)">$C = 2B \\log_2(L) = 2 \\times ${B} \\times \\log_2(${L}) = ${nyqRate.toFixed(0)}$ bps</small>
        </li>
        <li>Shannon Limit (Noisy): <strong>${formatRate(shannonCap)}</strong>
          <br><small style="color: var(--text-secondary)">$SNR_{linear} = 10^{${snrDb}/10} = ${snrLinear.toFixed(2)}$
          <br>$C = B \\log_2(1 + SNR) = ${B} \\times \\log_2(${1 + parseFloat(snrLinear.toFixed(2))}) = ${shannonCap.toFixed(0)}$ bps</small>
        </li>
        <li style="margin-top: 0.5rem; list-style-type: '⚡ '">Max Achievable Transmission Rate: <strong style="color: var(--active-accent); font-size: 1rem;">${formatRate(achievable)}</strong>
          <br><small style="color: var(--text-secondary)">Constrained by Shannon capacity limit (the noise ceiling of the physical link).</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('capacity-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bInp, lInp, snrInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderBdpSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initB = 10; // 10 Gbps
  let initDist = 2000; // 2000 km
  let initSpeed = 200000; // km/s
  
  if (q && q.id === 106) {
    initB = 10000; // 10 Gbps = 10000 Mbps
    initDist = 2000;
  }

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Bandwidth-Delay Product (BDP) Calculator</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="bdp_bw">Link Bandwidth (Mbps):</label>
        <input type="number" id="bdp_bw" value="${initB}" min="1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="bdp_dist">Distance (km):</label>
          <input type="number" id="bdp_dist" value="${initDist}" min="1">
        </div>
        <div>
          <label for="bdp_speed">Prop. Speed (km/s):</label>
          <input type="number" id="bdp_speed" value="${initSpeed}" min="1">
        </div>
      </div>
      
      <div id="bdp-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('bdp_bw');
  const distInp = document.getElementById('bdp_dist');
  const speedInp = document.getElementById('bdp_speed');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 1;
    const dist = parseFloat(distInp.value) || 1;
    const speed = parseFloat(speedInp.value) || 200000;

    const delaySeconds = dist / speed;
    const delayMs = delaySeconds * 1000;
    const bdpBits = bw * 1e6 * delaySeconds;

    document.getElementById('bdp-result').innerHTML = `
      <strong>Delay & Volume Calculations:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>One-way Propagation Delay ($T_p$): <strong>${delayMs.toFixed(2)} ms</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\frac{\\text{Distance}}{\\text{Propagation Speed}} = \\frac{${dist}\\text{ km}}{${speed}\\text{ km/s}} = ${delaySeconds.toFixed(4)}\\text{ s}$</small>
        </li>
        <li>Round Trip Time (RTT): <strong>${(delayMs * 2).toFixed(2)} ms</strong></li>
        <li>Bandwidth-Delay Product (BDP): <strong style="color: var(--active-accent);">${bdpBits.toLocaleString()} bits</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\text{Bandwidth} \\times T_p = (${bw} \\times 10^6\\text{ bps}) \\times ${delaySeconds.toFixed(4)}\\text{ s} = ${bdpBits.toFixed(0)}\\text{ bits}$</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('bdp-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, distInp, speedInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderCsmaCdSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initB = 1000; // 1 Gbps = 1000 Mbps
  let initTp = 25.6; // 25.6 microseconds

  if (q && q.id === 71) { initB = 10; initTp = 25.6; }
  else if (q && q.id === 107) { initB = 1000; initTp = 25.6; }

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>CSMA/CD Minimum Frame Size Solver</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="cs_bw">Bandwidth (Mbps):</label>
        <input type="number" id="cs_bw" value="${initB}" min="1">
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="cs_tp">One-way Propagation Delay ($T_p$ in $\\mu s$):</label>
        <input type="number" id="cs_tp" value="${initTp}" step="0.1" min="0.1">
      </div>
      
      <div id="csmacd-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('cs_bw');
  const tpInp = document.getElementById('cs_tp');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 1;
    const tpUs = parseFloat(tpInp.value) || 1;
    const tpSeconds = tpUs * 1e-6;

    // Minimum Frame Size in bits = Bandwidth * 2 * Tp
    const minBits = bw * 1e6 * 2 * tpSeconds;
    const minBytes = minBits / 8;

    document.getElementById('csmacd-result').innerHTML = `
      <strong>Collision Detection Bounds:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Round Trip Propagation Delay ($2 \\times T_p$): <strong>${(tpUs * 2).toFixed(1)} $\\mu s$</strong></li>
        <li>Minimum Bit Transmission: <strong>${minBits.toFixed(0)} bits</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\text{Bandwidth} \\times 2 \\times T_p = (${bw} \\times 10^6\\text{ bps}) \\times (2 \\times ${tpUs} \\times 10^{-6}\\text{ s})$</small>
        </li>
        <li>Minimum Frame Size (Bytes): <strong style="color: var(--active-accent); font-size: 1rem;">${minBytes.toFixed(1)} Bytes</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\frac{\\text{Minimum Bits}}{8} = \\frac{${minBits.toFixed(0)}}{8}$</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('csmacd-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, tpInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderOverheadSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Ethernet IPG & Overhead Calculator</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="oh_bw">Link Bandwidth (Mbps):</label>
        <input type="number" id="oh_bw" value="10" min="1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="oh_frame">Frame Payload+Hdr (B):</label>
          <input type="number" id="oh_frame" value="64" min="64" max="1518">
        </div>
        <div>
          <label for="oh_gap">IPG (microseconds):</label>
          <input type="number" id="oh_gap" value="9.6" step="0.1" min="0.1">
        </div>
      </div>
      
      <div id="overhead-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('oh_bw');
  const frameInp = document.getElementById('oh_frame');
  const gapInp = document.getElementById('oh_gap');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 10;
    const frameSize = parseInt(frameInp.value) || 64;
    const ipgUs = parseFloat(gapInp.value) || 9.6;

    // Ethernet adds 8 bytes preamble/SFD
    const totalFrameSize = frameSize + 8;
    const frameBits = totalFrameSize * 8;
    const transmissionTimeUs = frameBits / bw;
    
    const totalSlotTimeUs = transmissionTimeUs + ipgUs;
    const overheadPercent = (ipgUs / totalSlotTimeUs) * 100;

    document.getElementById('overhead-result').innerHTML = `
      <strong>Overhead Details:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.5;">
        <li>Total Frame with Preamble (8B): <strong>${totalFrameSize} Bytes</strong> (${frameBits} bits)</li>
        <li>Frame Transmission Time ($T_t$): <strong>${transmissionTimeUs.toFixed(2)} $\\mu s$</strong></li>
        <li>Total Slot Time per packet ($T_t + IPG$): <strong>${totalSlotTimeUs.toFixed(2)} $\\mu s$</strong></li>
        <li>Inter-Packet Gap Overhead: <strong style="color: var(--active-accent);">${overheadPercent.toFixed(2)}%</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\frac{\\text{IPG}}{\\text{Total Slot Time}} \\times 100\\% = \\frac{${ipgUs}}{${totalSlotTimeUs.toFixed(2)}} \\times 100$</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('overhead-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, frameInp, gapInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderHammingGenSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Hamming Code (7,4) Generator</h4>
      <div style="margin-bottom: 1rem;">
        <label for="ham_data">4-Bit Dataword (Binary):</label>
        <input type="text" id="ham_data" value="1011" maxlength="4" style="letter-spacing: 0.3em; font-weight: 700; text-align: center;">
      </div>
      
      <div id="hamming-gen-result" class="solver-result"></div>
    </div>
  `;

  const input = document.getElementById('ham_data');
  
  const calculate = () => {
    let rawVal = input.value.replace(/[^01]/g, '');
    if (rawVal.length < 4) rawVal = (rawVal + "0000").substring(0, 4);
    input.value = rawVal;

    const b4 = parseInt(rawVal[0]);
    const b3 = parseInt(rawVal[1]);
    const b2 = parseInt(rawVal[2]);
    const b1 = parseInt(rawVal[3]);

    // Data placements
    const d7 = b4;
    const d6 = b3;
    const d5 = b2;
    const d3 = b1;

    // Calculate parity
    const p1 = d3 ^ d5 ^ d7;
    const p2 = d3 ^ d6 ^ d7;
    const p4 = d5 ^ d6 ^ d7;

    const codeword = `${d7}${d6}${d5}${p4}${d3}${p2}${p1}`;

    document.getElementById('hamming-gen-result').innerHTML = `
      <strong>Parity & Coding Details (Even Parity):</strong>
      <div style="font-family: monospace; background: var(--bg-hover); padding: 0.5rem; margin: 0.5rem 0; border-radius: 4px; text-align: center; font-size: 1rem; letter-spacing: 0.1em;">
        Data [${b4}${b3}${b2}${b1}] &rarr; Codeword [<strong>${codeword}</strong>]
      </div>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.5; font-size: 0.85rem;">
        <li>Codeword positions: $1=p_1$, $2=p_2$, $3=d_3$, $4=p_4$, $5=d_5$, $6=d_6$, $7=d_7$</li>
        <li>$p_1 = d_3 \\oplus d_5 \\oplus d_7 = ${d3} \\oplus ${d5} \\oplus ${d7} = \\mathbf{${p1}}$</li>
        <li>$p_2 = d_3 \\oplus d_6 \\oplus d_7 = ${d3} \\oplus ${d6} \\oplus ${d7} = \\mathbf{${p2}}$</li>
        <li>$p_4 = d_5 \\oplus d_6 \\oplus d_7 = ${d5} \\oplus ${d6} \\oplus ${d7} = \\mathbf{${p4}}$</li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('hamming-gen-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  input.addEventListener('input', calculate);
  calculate();
}

function renderHammingCorrSolver(container) {
  // Let's create an awesome interactive error injector!
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Hamming Code Error Injector Playground</h4>
      <p style="font-size: 0.8rem; margin: 0 0 1rem; color: var(--text-secondary);">Click any bit in the codeword to inject a single-bit error. The solver will calculate the syndrome and automatically find/correct the corrupted position!</p>
      
      <div style="display: flex; justify-content: center; gap: 0.4rem; margin-bottom: 1.5rem;" id="ham-codeword-bits">
        <!-- Interactive checkboxes/bits generated here -->
      </div>
      
      <div id="hamming-corr-result" class="solver-result"></div>
    </div>
  `;

  // Start with default codeword from ID 110: received 1011111 (or a valid codeword)
  // Let's establish base dataword = 1001 => codeword = 1001100 (if even parity)
  // Let's just store the array of received bits [b7, b6, b5, b4, b3, b2, b1]
  // In MCQ 110, received 1 0 1 1 1 1 1. Let's pre-populate that exact state!
  const q = getQuestionObj(activeSolverState.questionId);
  let activeBits = [1, 0, 1, 1, 1, 1, 1]; // b7, b6, b5, b4, b3, b2, b1
  
  if (q && q.id === 110) {
    activeBits = [1, 0, 1, 1, 1, 1, 1];
  } else {
    // Normal correct codeword for 1011 is 1010101
    activeBits = [1, 0, 1, 0, 1, 0, 1];
  }

  const renderBits = () => {
    const wrapper = document.getElementById('ham-codeword-bits');
    if (!wrapper) return;
    
    wrapper.innerHTML = activeBits.map((b, idx) => {
      const pos = 7 - idx;
      const isParity = [1, 2, 4].includes(pos);
      const label = isParity ? `P${pos}` : `D${pos}`;
      const color = isParity ? 'var(--active-accent)' : 'var(--text-primary)';
      return `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
          <small style="color: ${color}; font-weight: 700; font-size: 0.75rem;">${label}</small>
          <button class="bit-btn" data-idx="${idx}" style="width: 36px; height: 36px; font-size: 1.1rem; font-weight: 800; border: 2px solid var(--border-color); border-radius: 6px; cursor: pointer; transition: all 0.2s; background: ${b === 1 ? '#EEF0FB' : '#fff'}; color: ${b === 1 ? 'var(--active-accent)' : '#aaa'};">
            ${b}
          </button>
          <small style="color: var(--text-secondary); font-size: 0.65rem;">Pos ${pos}</small>
        </div>
      `;
    }).join('');

    // Bind clicks
    wrapper.querySelectorAll('.bit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-idx'));
        activeBits[i] = activeBits[i] === 1 ? 0 : 1;
        renderBits();
        runSyndromeDecoding();
      });
    });
  };

  const runSyndromeDecoding = () => {
    // Bits matching positions
    const b7 = activeBits[0];
    const b6 = activeBits[1];
    const b5 = activeBits[2];
    const b4 = activeBits[3];
    const b3 = activeBits[4];
    const b2 = activeBits[5];
    const b1 = activeBits[6];

    // Compute parity sums
    const c1 = b1 ^ b3 ^ b5 ^ b7;
    const c2 = b2 ^ b3 ^ b6 ^ b7;
    const c4 = b4 ^ b5 ^ b6 ^ b7;

    const syndromeVal = c4 * 4 + c2 * 2 + c1 * 1;
    
    let correctionText = "";
    if (syndromeVal === 0) {
      correctionText = `<span style="color: green; font-weight: 700;">No error is detected! The codeword is valid.</span>`;
    } else {
      const idxToCorrection = 7 - syndromeVal;
      const originalBit = activeBits[idxToCorrection];
      const correctedBit = originalBit === 1 ? 0 : 1;
      
      correctionText = `
        <span style="color: red; font-weight: 700;">Error detected at Bit Position ${syndromeVal}!</span>
        <br>To correct, flip Bit Position ${syndromeVal} from <strong>${originalBit}</strong> to <strong>${correctedBit}</strong>.
      `;
    }

    document.getElementById('hamming-corr-result').innerHTML = `
      <strong>Syndrome Decoding (Even Parity):</strong>
      <ul style="margin: 0.5rem 0 0.75rem; padding-left: 1.2rem; line-height: 1.5; font-size: 0.85rem;">
        <li>$c_1 = b_1 \\oplus b_3 \\oplus b_5 \\oplus b_7 = ${b1} \\oplus ${b3} \\oplus ${b5} \\oplus ${b7} = ${c1}$</li>
        <li>$c_2 = b_2 \\oplus b_3 \\oplus b_6 \\oplus b_7 = ${b2} \\oplus ${b3} \\oplus ${b6} \\oplus ${b7} = ${c2}$</li>
        <li>$c_4 = b_4 \\oplus b_5 \\oplus b_6 \\oplus b_7 = ${b4} \\oplus ${b5} \\oplus ${b6} \\oplus ${b7} = ${c4}$</li>
        <li>Syndrome Value: $c_4 c_2 c_1 = ${c4}${c2}${c1}_2 = \\mathbf{${syndromeVal}_{10}}$</li>
      </ul>
      <div style="background: var(--bg-hover); padding: 0.6rem; border-radius: 6px; font-size: 0.85rem; border-left: 4px solid var(--active-accent);">
        ${correctionText}
      </div>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('hamming-corr-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  renderBits();
  runSyndromeDecoding();
}

function renderCrcGenSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initData = '1001';
  let initDiv = '1011';
  
  if (q && q.id === 111) { initData = '1001'; initDiv = '1011'; }
  else if (q && q.id === 77) { initData = '1001'; initDiv = '1101'; } // x^3+x^2+1 => 1101
  else if (q && q.id === 78) { initData = '1001'; initDiv = '10111'; } // divisor length 5

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>CRC Polynomial Modulo-2 Divider</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="crc_val">Dataword (Binary):</label>
          <input type="text" id="crc_val" value="${initData}">
        </div>
        <div>
          <label for="crc_poly">Generator Divisor:</label>
          <input type="text" id="crc_poly" value="${initDiv}">
        </div>
      </div>
      
      <div id="crc-gen-result" class="solver-result" style="font-family: monospace; white-space: pre; overflow-x: auto; background: #282c34; color: #abb2bf; padding: 1rem; border-radius: 6px; font-size: 0.8rem; line-height: 1.4;"></div>
    </div>
  `;

  const dataInp = document.getElementById('crc_val');
  const divInp = document.getElementById('crc_poly');

  const calculate = () => {
    let data = dataInp.value.replace(/[^01]/g, '');
    let divisor = divInp.value.replace(/[^01]/g, '');
    
    if (!data) data = '1001';
    if (!divisor) divisor = '1011';
    
    dataInp.value = data;
    divInp.value = divisor;

    const r = divisor.length - 1;
    const paddedData = data + '0'.repeat(r);
    
    // Simulate long division
    let trace = `CRC Division Solver:\n\n`;
    trace += `Dataword  : ${data}\n`;
    trace += `Divisor   : ${divisor} (Degree r = ${r})\n`;
    trace += `Padded    : ${paddedData}\n\n`;
    
    let current = paddedData;
    let index = 0;
    
    // Modulo-2 division steps
    let steps = [];
    let rem = "";
    
    // Convert to arrays
    let curArr = current.split('').map(x => parseInt(x));
    const divArr = divisor.split('').map(x => parseInt(x));
    
    for (let i = 0; i <= current.length - divisor.length; i++) {
      if (curArr[i] === 1) {
        let stepText = `Step ${i + 1}:\n  ` + curArr.map((x, idx) => idx === i ? `[${x}]` : x).join('') + `\n- ` + ' '.repeat(i) + divisor + `\n  ` + '-'.repeat(current.length) + '\n  ';
        
        for (let j = 0; j < divisor.length; j++) {
          curArr[i + j] = curArr[i + j] ^ divArr[j];
        }
        
        stepText += ' '.repeat(i + 1) + curArr.slice(i + 1).join('');
        steps.push(stepText);
      }
    }
    
    const remainder = curArr.slice(current.length - r).join('');
    const codeword = data + remainder;
    
    trace += steps.join('\n\n') + '\n\n';
    trace += `--------------------------------\n`;
    trace += `Remainder (CRC bits) : ${remainder}\n`;
    trace += `Transmitted Codeword : ${codeword}\n`;

    document.getElementById('crc-gen-result').innerText = trace;
  };

  [dataInp, divInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderCrcCheckSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>CRC Error Check Visualizer</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="crcc_code">Received Codeword:</label>
          <input type="text" id="crcc_code" value="1011011">
        </div>
        <div>
          <label for="crcc_div">Generator Divisor:</label>
          <input type="text" id="crcc_div" value="1001">
        </div>
      </div>
      
      <div id="crc-check-result" class="solver-result" style="font-family: monospace; white-space: pre; overflow-x: auto; background: #282c34; color: #abb2bf; padding: 1rem; border-radius: 6px; font-size: 0.8rem; line-height: 1.4;"></div>
    </div>
  `;

  const codeInp = document.getElementById('crcc_code');
  const divInp = document.getElementById('crcc_div');

  const calculate = () => {
    const code = codeInp.value.replace(/[^01]/g, '') || '1011011';
    const divisor = divInp.value.replace(/[^01]/g, '') || '1001';
    
    codeInp.value = code;
    divInp.value = divisor;

    let curArr = code.split('').map(x => parseInt(x));
    const divArr = divisor.split('').map(x => parseInt(x));
    
    let trace = `Received Codeword Modulo-2 Division:\n\n`;
    let steps = [];
    
    for (let i = 0; i <= code.length - divisor.length; i++) {
      if (curArr[i] === 1) {
        let stepText = '  ' + curArr.join('') + `\n- ` + ' '.repeat(i) + divisor + `\n  ` + '-'.repeat(code.length) + '\n  ';
        for (let j = 0; j < divisor.length; j++) {
          curArr[i + j] = curArr[i + j] ^ divArr[j];
        }
        stepText += ' '.repeat(i + 1) + curArr.slice(i + 1).join('');
        steps.push(stepText);
      }
    }
    
    const remainder = curArr.slice(code.length - (divisor.length - 1)).join('');
    const hasError = remainder.includes('1');

    trace += steps.join('\n\n') + '\n\n';
    trace += `--------------------------------\n`;
    trace += `Remainder calculated : ${remainder}\n`;
    trace += `Error Status         : ${hasError ? '❌ ERROR DETECTED (Discarded)' : '✅ NO ERROR DETECTED (Accepted)'}\n`;

    document.getElementById('crc-check-result').innerText = trace;
  };

  [codeInp, divInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderChecksumSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Internet Checksum (8-Bit Block)</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="chk_b1">Block 1 (8-Bit Binary):</label>
          <input type="text" id="chk_b1" value="10110101" maxlength="8">
        </div>
        <div>
          <label for="chk_b2">Block 2 (8-Bit Binary):</label>
          <input type="text" id="chk_b2" value="01101110" maxlength="8">
        </div>
      </div>
      
      <div id="checksum-result" class="solver-result" style="font-family: monospace; line-height: 1.6; font-size: 0.85rem;"></div>
    </div>
  `;

  const b1Inp = document.getElementById('chk_b1');
  const b2Inp = document.getElementById('chk_b2');

  const calculate = () => {
    let b1 = b1Inp.value.replace(/[^01]/g, '');
    let b2 = b2Inp.value.replace(/[^01]/g, '');
    
    b1 = (b1 + "00000000").substring(0, 8);
    b2 = (b2 + "00000000").substring(0, 8);
    
    b1Inp.value = b1;
    b2Inp.value = b2;

    const val1 = parseInt(b1, 2);
    const val2 = parseInt(b2, 2);
    let sum = val1 + val2;
    
    let binarySumStr = sum.toString(2);
    let carryAddedStr = binarySumStr;
    let finalSum = sum;
    
    let trace = `<strong>Addition Steps:</strong><br><br>`;
    trace += `&nbsp;&nbsp;${b1} (Block 1)<br>`;
    trace += `+ ${b2} (Block 2)<br>`;
    trace += `-------------------<br>`;
    
    if (sum > 255) {
      // carry occurs
      const carry = sum >> 8;
      const lower = sum & 255;
      finalSum = lower + carry;
      
      trace += ` ${binarySumStr} (9-bit raw sum, carry out is 1)<br>`;
      trace += `+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${carry} (Add carry back - End-around carry)<br>`;
      trace += `-------------------<br>`;
      trace += `&nbsp;&nbsp;${(finalSum.toString(2).padStart(8, '0'))} (One's Complement Sum)<br>`;
    } else {
      trace += `&nbsp;&nbsp;${(finalSum.toString(2).padStart(8, '0'))} (One's Complement Sum)<br>`;
    }
    
    const checksum = (~finalSum) & 255;
    const checksumStr = checksum.toString(2).padStart(8, '0');
    
    trace += `<br><strong>Bitwise Complement (Checksum):</strong><br>`;
    trace += `~${(finalSum.toString(2).padStart(8, '0'))} = <strong style="color: var(--active-accent);">${checksumStr}</strong>`;

    document.getElementById('checksum-result').innerHTML = trace;
  };

  [b1Inp, b2Inp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderAlohaSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>ALOHA Throughput & Successful Frame Rate</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="al_bw">Channel Bandwidth (Kbps):</label>
        <input type="number" id="al_bw" value="200" min="1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="al_size">Frame size (bits):</label>
          <input type="number" id="al_size" value="1000" min="1">
        </div>
        <div>
          <label for="al_g">Traffic Load (G):</label>
          <input type="number" id="al_g" value="1.0" step="0.05" min="0.01">
        </div>
      </div>
      
      <div id="aloha-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('al_bw');
  const sizeInp = document.getElementById('al_size');
  const gInp = document.getElementById('al_g');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 200;
    const size = parseFloat(sizeInp.value) || 1000;
    const G = parseFloat(gInp.value) || 1.0;

    const tFr = size / (bw * 1000); // frame transmission time in seconds
    
    // Throughput
    const sPure = G * Math.exp(-2 * G);
    const sSlotted = G * Math.exp(-G);

    const pureRate = sPure / tFr;
    const slottedRate = sSlotted / tFr;

    document.getElementById('aloha-result').innerHTML = `
      <strong>Throughput & Rates:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Frame Transmission Time ($T_{fr}$): <strong>${(tFr * 1000).toFixed(1)} ms</strong></li>
        <li><strong>Pure ALOHA:</strong>
          <br>- Efficiency ($S$): <strong>${(sPure * 100).toFixed(2)}%</strong> (Formula: $G e^{-2G}$)
          <br>- Successful Frames/sec: <strong>${pureRate.toFixed(1)}</strong>
        </li>
        <li><strong>Slotted ALOHA:</strong>
          <br>- Efficiency ($S$): <strong style="color: var(--active-accent);">${(sSlotted * 100).toFixed(2)}%</strong> (Formula: $G e^{-G}$)
          <br>- Successful Frames/sec: <strong style="color: var(--active-accent);">${slottedRate.toFixed(1)}</strong>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('aloha-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, sizeInp, gInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderCdmaSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>CDMA Multi-Channel Decoding Visualizer</h4>
      <p style="font-size: 0.8rem; margin-bottom: 1rem; color: var(--text-secondary);">Four stations are configured with orthogonal chip sequences (A, B, C, D). Modify the combined received vector S to decode each station's bit (returns +1 for data 1, -1 for data 0, and 0 for silent).</p>
      
      <div style="margin-bottom: 1rem;">
        <label for="cdma_s">Received Vector S (Comma Separated):</label>
        <input type="text" id="cdma_s" value="-1, -3, +1, -1" style="text-align: center; font-weight: 700;">
      </div>
      
      <div id="cdma-result" class="solver-result" style="font-size: 0.85rem; line-height: 1.6;"></div>
    </div>
  `;

  const sInp = document.getElementById('cdma_s');

  const calculate = () => {
    const rawS = sInp.value.split(',').map(x => parseFloat(x.trim()));
    if (rawS.length < 4) return;

    // Chip codes
    const A = [+1, +1, +1, +1];
    const B = [+1, -1, +1, -1];
    const C = [+1, +1, -1, -1];
    const D = [+1, -1, -1, +1];

    const decode = (vector, stationCode, name) => {
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        sum += vector[i] * stationCode[i];
      }
      const val = sum / 4;
      let status = "";
      if (val === 1) status = "<span style='color: green; font-weight: 700;'>Data 1</span>";
      else if (val === -1) status = "<span style='color: blue; font-weight: 700;'>Data 0</span>";
      else status = "<span style='color: var(--text-secondary)'>Silent (0)</span>";

      return `<li>Station ${name}: Product = $[${vector.join(', ')}] \\cdot [${stationCode.join(', ')}] = ${sum} \\implies \\frac{${sum}}{4} = ${val}$ &rarr; ${status}</li>`;
    };

    let listHtml = `
      <strong>Station Signal Decoding:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.7; list-style-type: square;">
        ${decode(rawS, A, 'A')}
        ${decode(rawS, B, 'B')}
        ${decode(rawS, C, 'C')}
        ${decode(rawS, D, 'D')}
      </ul>
    `;

    document.getElementById('cdma-result').innerHTML = listHtml;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('cdma-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  sInp.addEventListener('input', calculate);
  calculate();
}

function renderStopWaitSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Stop-and-Wait ARQ Efficiency</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="sw_bw">Bandwidth (Mbps):</label>
        <input type="number" id="sw_bw" value="2" min="0.1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="sw_frame">Frame size (Bytes):</label>
          <input type="number" id="sw_frame" value="1000" min="1">
        </div>
        <div>
          <label for="sw_delay">Prop. Delay (ms):</label>
          <input type="number" id="sw_delay" value="250" min="0">
        </div>
      </div>
      
      <div id="sw-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('sw_bw');
  const sizeInp = document.getElementById('sw_frame');
  const delayInp = document.getElementById('sw_delay');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 2;
    const size = parseFloat(sizeInp.value) || 1000;
    const delay = parseFloat(delayInp.value) || 250;

    const tTrans = (size * 8) / (bw * 1000); // ms
    const tProp = delay;
    const a = tProp / tTrans;
    const efficiency = 1 / (1 + 2 * a);
    const throughput = efficiency * bw;

    document.getElementById('sw-result').innerHTML = `
      <strong>Efficiency & Parameters:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Transmission Time ($T_t$): <strong>${tTrans.toFixed(3)} ms</strong></li>
        <li>Propagation Delay ($T_p$): <strong>${tProp.toFixed(1)} ms</strong></li>
        <li>Parameter $a = T_p / T_t$: <strong>${a.toFixed(2)}</strong></li>
        <li>Link Utilization (Efficiency): <strong style="color: var(--active-accent); font-size: 1rem;">${(efficiency * 100).toFixed(3)}%</strong>
          <br><small style="color: var(--text-secondary)">Formula: $\\eta = \\frac{1}{1 + 2a} = \\frac{1}{1 + 2 \\times ${a.toFixed(2)}}$</small>
        </li>
        <li>Effective Throughput: <strong>${throughput.toFixed(3)} Mbps</strong></li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('sw-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, sizeInp, delayInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderGbnWindowSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Go-Back-N (GBN) ARQ Optimizer</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="gbn_bw">Link Bandwidth (Mbps):</label>
        <input type="number" id="gbn_bw" value="10" min="0.1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.75rem;">
        <div>
          <label for="gbn_frame">Frame size (Bytes):</label>
          <input type="number" id="gbn_frame" value="1250" min="1">
        </div>
        <div>
          <label for="gbn_delay">Prop. Delay (ms):</label>
          <input type="number" id="gbn_delay" value="20" min="0">
        </div>
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="gbn_target">Desired Utilization (%):</label>
        <input type="number" id="gbn_target" value="80" min="1" max="100">
      </div>
      
      <div id="gbn-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('gbn_bw');
  const sizeInp = document.getElementById('gbn_frame');
  const delayInp = document.getElementById('gbn_delay');
  const targetInp = document.getElementById('gbn_target');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 10;
    const size = parseFloat(sizeInp.value) || 1250;
    const delay = parseFloat(delayInp.value) || 20;
    const target = (parseFloat(targetInp.value) || 80) / 100;

    const tTrans = (size * 8) / (bw * 1000); // ms
    const tProp = delay;
    const a = tProp / tTrans;
    const pipeCapacity = 1 + 2 * a;
    
    // Required Ws
    const reqWs = Math.ceil(target * pipeCapacity);
    
    // k bits sequence number space
    // Ws <= 2^k - 1 => 2^k >= Ws + 1 => k = ceil(log2(Ws + 1))
    const reqK = Math.ceil(Math.log2(reqWs + 1));

    document.getElementById('gbn-result').innerHTML = `
      <strong>Optimal GBN Metrics:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Transmission Time ($T_t$): <strong>${tTrans.toFixed(3)} ms</strong></li>
        <li>One-way pipe capacity ($1 + 2a$): <strong>${pipeCapacity.toFixed(2)} frames</strong></li>
        <li>Required Sender Window Size ($W_s$): <strong>${reqWs} frames</strong>
          <br><small style="color: var(--text-secondary)">Formula: $W_s \\ge \\eta \\times (1 + 2a) = ${target} \\times ${pipeCapacity.toFixed(2)}$</small>
        </li>
        <li>Sequence Number Bits ($k$): <strong style="color: var(--active-accent); font-size: 1rem;">${reqK} bits</strong>
          <br><small style="color: var(--text-secondary)">Formula: $2^k - 1 \\ge W_s \\implies 2^k \\ge ${reqWs + 1} \\implies k = ${reqK}$</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('gbn-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, sizeInp, delayInp, targetInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderSrWindowSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Selective Repeat (SR) Window Constraint</h4>
      <div style="margin-bottom: 1rem;">
        <label for="sr_k">Sequence Number Bits (k):</label>
        <input type="number" id="sr_k" value="4" min="1" max="16">
      </div>
      
      <div id="sr-result" class="solver-result"></div>
    </div>
  `;

  const kInp = document.getElementById('sr_k');

  const calculate = () => {
    const k = parseInt(kInp.value) || 4;
    const totalSpace = Math.pow(2, k);
    const maxWindow = Math.pow(2, k - 1);

    document.getElementById('sr-result').innerHTML = `
      <strong>Selective Repeat Constraints:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Sequence Number Space ($2^k$): <strong>${totalSpace} values</strong></li>
        <li>Max Sender Window ($W_s$): <strong style="color: var(--active-accent); font-size: 1rem;">${maxWindow} frames</strong>
          <br><small style="color: var(--text-secondary)">Formula: $W_s + W_r \\le 2^k \\implies W_s = 2^{k-1} = 2^{${k}-1} = ${maxWindow}$</small>
        </li>
        <li>Max Receiver Window ($W_r$): <strong>${maxWindow} frames</strong></li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('sr-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  kInp.addEventListener('input', calculate);
  calculate();
}

function renderSubnetCidrSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initIp = '172.16.42.0';
  let initCidr = 26;

  if (q && q.id === 119) { initIp = '172.16.42.0'; initCidr = 26; }
  else if (q && q.id === 96) { initIp = '205.16.37.39'; initCidr = 28; }

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>CIDR IP & Subnet Calculator</h4>
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="sub_ip">IP Address:</label>
          <input type="text" id="sub_ip" value="${initIp}">
        </div>
        <div>
          <label for="sub_cidr">CIDR Suffix:</label>
          <input type="number" id="sub_cidr" value="${initCidr}" min="1" max="32">
        </div>
      </div>
      
      <div id="subnet-result" class="solver-result"></div>
    </div>
  `;

  const ipInp = document.getElementById('sub_ip');
  const cidrInp = document.getElementById('sub_cidr');

  const calculate = () => {
    const ip = ipInp.value.trim();
    const cidr = parseInt(cidrInp.value) || 24;

    const parts = ip.split('.').map(x => parseInt(x));
    if (parts.length < 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) return;

    // Subnet mask
    let mask = 0;
    for (let i = 0; i < cidr; i++) {
      mask |= (1 << (31 - i));
    }
    
    const m1 = (mask >>> 24) & 255;
    const m2 = (mask >>> 16) & 255;
    const m3 = (mask >>> 8) & 255;
    const m4 = mask & 255;
    const maskStr = `${m1}.${m2}.${m3}.${m4}`;

    // Host count
    const h = 32 - cidr;
    const totalHosts = Math.pow(2, h);
    const usableHosts = totalHosts > 2 ? totalHosts - 2 : 0;

    document.getElementById('subnet-result').innerHTML = `
      <strong>Subnet Parameters:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Subnet Mask: <strong style="color: var(--active-accent);">${maskStr}</strong></li>
        <li>Host Bits: <strong>${h} bits</strong></li>
        <li>Total IP addresses in block: <strong>${totalHosts}</strong></li>
        <li>Usable Host addresses: <strong style="color: var(--active-accent); font-size: 1rem;">${usableHosts}</strong>
          <br><small style="color: var(--text-secondary)">Formula: $2^{32-\\text{CIDR}} - 2 = 2^{${h}} - 2 = ${usableHosts}$</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('subnet-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [ipInp, cidrInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderIpBoundarySolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initIp = '192.168.10.142';
  let initMask = '255.255.255.240';

  if (q && q.id === 120) { initIp = '192.168.10.142'; initMask = '255.255.255.240'; }
  else if (q && q.id === 95) { initIp = '192.168.1.50'; initMask = '255.255.255.248'; } // /29 is 255.255.255.248

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>IP Subnet Boundary Identifier</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="bound_ip">Host IP Address:</label>
          <input type="text" id="bound_ip" value="${initIp}">
        </div>
        <div>
          <label for="bound_mask">Subnet Mask:</label>
          <input type="text" id="bound_mask" value="${initMask}">
        </div>
      </div>
      
      <div id="boundary-result" class="solver-result"></div>
    </div>
  `;

  const ipInp = document.getElementById('bound_ip');
  const maskInp = document.getElementById('bound_mask');

  const calculate = () => {
    const ip = ipInp.value.trim();
    const mask = maskInp.value.trim();

    const ipParts = ip.split('.').map(x => parseInt(x));
    const maskParts = mask.split('.').map(x => parseInt(x));
    if (ipParts.length < 4 || maskParts.length < 4) return;

    // Calculate network address
    const netParts = ipParts.map((b, idx) => b & maskParts[idx]);
    const netStr = netParts.join('.');

    // Calculate broadcast address
    const broadParts = ipParts.map((b, idx) => b | (~maskParts[idx] & 255));
    const broadStr = broadParts.join('.');

    // Calculate block size
    const lastMaskVal = maskParts[3];
    const blockSize = 256 - lastMaskVal;

    document.getElementById('boundary-result').innerHTML = `
      <strong>Calculated Subnet Bounds:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Subnet Block Size: <strong>${blockSize} IPs</strong> (calculated from last octet: $256 - ${lastMaskVal} = ${blockSize}$)</li>
        <li>Network Address (First IP): <strong style="color: green;">${netStr}</strong>
          <br><small style="color: var(--text-secondary)">Bitwise AND operation between Host IP and Subnet Mask.</small>
        </li>
        <li>Broadcast Address (Last IP): <strong style="color: red;">${broadStr}</strong>
          <br><small style="color: var(--text-secondary)">Host IP Bitwise ORed with the inverted Subnet Mask.</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('boundary-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [ipInp, maskInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderClassfulSubnetSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Class C Subnet Planner</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="plan_sub">Required Subnets:</label>
          <input type="number" id="plan_sub" value="12" min="1">
        </div>
        <div>
          <label for="plan_host">Hosts per Subnet:</label>
          <input type="number" id="plan_host" value="10" min="1">
        </div>
      </div>
      
      <div id="planner-result" class="solver-result"></div>
    </div>
  `;

  const subInp = document.getElementById('plan_sub');
  const hostInp = document.getElementById('plan_host');

  const calculate = () => {
    const sReq = parseInt(subInp.value) || 1;
    const hReq = parseInt(hostInp.value) || 1;

    // Minimum bits required
    const sBits = Math.ceil(Math.log2(sReq));
    const hBits = Math.ceil(Math.log2(hReq + 2)); // include net/broadcast

    const totalBitsUsed = sBits + hBits;
    
    let resultHtml = `<strong>Feasibility Check:</strong><br>`;
    if (totalBitsUsed <= 8) {
      const remaining = 8 - totalBitsUsed;
      const finalSubBits = sBits + remaining; // allocate leftover to subnets to make it CIDR
      const finalCidr = 24 + finalSubBits;
      
      // Compute mask string
      let maskVal = 0;
      for (let i = 0; i < finalSubBits; i++) {
        maskVal |= (1 << (7 - i));
      }
      
      resultHtml += `
        <span style="color: green; font-weight: 700;">Design is Feasible!</span>
        <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.85rem;">
          <li>Subnet bits required: $2^S \\ge ${sReq} \\implies S \\ge ${sBits}$</li>
          <li>Host bits required: $2^H - 2 \\ge ${hReq} \\implies H \\ge ${hBits}$</li>
          <li>Total bits allocated in host portion: $S + H = ${sBits} + ${hBits} = ${totalBitsUsed}$ bits (<= 8 bits limit)</li>
          <li>Recommended Mask: <strong style="color: var(--active-accent);">255.255.255.${maskVal}</strong> (CIDR: /${finalCidr})</li>
        </ul>
      `;
    } else {
      resultHtml += `
        <span style="color: red; font-weight: 700;">Design is NOT Feasible on a single Class C (/24) block!</span>
        <br><small style="color: var(--text-secondary)">Requires $S+H = ${sBits}+${hBits} = ${totalBitsUsed}$ bits, which exceeds the 8 host bits available on Class C.</small>
      `;
    }

    document.getElementById('planner-result').innerHTML = resultHtml;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('planner-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [subInp, hostInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderFragmentationSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  let initLen = 3200;
  let initMtu = 1200;

  if (q && q.id === 122) { initLen = 3200; initMtu = 1200; }
  else if (q && q.id === 87) { initLen = 4000; initMtu = 1500; }

  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>IPv4 Packet Fragmentation details</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="frag_len">Packet Total Length:</label>
          <input type="number" id="frag_len" value="${initLen}" min="40">
        </div>
        <div>
          <label for="frag_mtu">Link MTU:</label>
          <input type="number" id="frag_mtu" value="${initMtu}" min="40">
        </div>
      </div>
      
      <div id="frag-result" class="solver-result" style="font-size: 0.85rem; line-height: 1.5;"></div>
    </div>
  `;

  const lenInp = document.getElementById('frag_len');
  const mtuInp = document.getElementById('frag_mtu');

  const calculate = () => {
    const totalLen = parseInt(lenInp.value) || 3200;
    const mtu = parseInt(mtuInp.value) || 1200;
    const hdr = 20;

    const payloadSize = totalLen - hdr;
    const maxPayloadPerFrag = mtu - hdr;
    
    // Round payload size down to a multiple of 8
    const roundedPayload = Math.floor(maxPayloadPerFrag / 8) * 8;
    
    let remaining = payloadSize;
    let offset = 0;
    let index = 1;
    let fragments = [];

    while (remaining > 0) {
      const currentPayload = Math.min(remaining, roundedPayload);
      remaining -= currentPayload;
      const mf = remaining > 0 ? 1 : 0;
      const fragLen = currentPayload + hdr;
      
      fragments.push(`
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 0.35rem 0;">#${index}</td>
          <td>${fragLen} B</td>
          <td>${mf}</td>
          <td>${offset / 8}</td>
          <td>${offset}</td>
        </tr>
      `);
      
      offset += currentPayload;
      index++;
    }

    document.getElementById('frag-result').innerHTML = `
      <strong>Fragment Segmentation Table:</strong>
      <div style="margin-top: 0.5rem; overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.8rem;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color); font-weight: 700;">
              <th style="padding-bottom: 0.35rem;">Frag</th>
              <th>Total Len</th>
              <th>MF</th>
              <th>Offset (8B)</th>
              <th>Offset (B)</th>
            </tr>
          </thead>
          <tbody>
            ${fragments.join('')}
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.75rem; margin-top: 0.75rem; color: var(--text-secondary); line-height: 1.4;">
        Note: The fragment offset unit must scale in multiples of 8 bytes. Max payload size is computed as $MTU - 20 = ${maxPayloadPerFrag} \\implies$ largest multiple of 8 is $147 \\times 8 = 1176$ bytes.
      </p>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('frag-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [lenInp, mtuInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderFragmentRangeSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Fragment Payload Range Checker</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="frg_offset">Offset (8-byte units):</label>
          <input type="number" id="frg_offset" value="300">
        </div>
        <div>
          <label for="frg_len">Frag Total Length:</label>
          <input type="number" id="frg_len" value="600" min="20">
        </div>
      </div>
      
      <div id="frag-range-result" class="solver-result"></div>
    </div>
  `;

  const offsetInp = document.getElementById('frg_offset');
  const lenInp = document.getElementById('frg_len');

  const calculate = () => {
    const offsetUnits = parseInt(offsetInp.value) || 0;
    const len = parseInt(lenInp.value) || 20;

    const startByte = offsetUnits * 8;
    const payload = len - 20;
    const endByte = startByte + payload - 1;

    document.getElementById('frag-range-result').innerHTML = `
      <strong>Original Packet Byte Mapping:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.5; font-size: 0.85rem;">
        <li>Start Byte Offset: <strong>${startByte}</strong> ($${offsetUnits} \\times 8 = ${startByte}$)</li>
        <li>Payload Length: <strong>${payload} bytes</strong> (Total size $${len} - 20$ header)</li>
        <li>Byte Range: <strong style="color: var(--active-accent);">Bytes ${startByte} to ${endByte}</strong> (inclusive)</li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('frag-range-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [offsetInp, lenInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderSupernetSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Supernet CIDR Route Summarization</h4>
      <p style="font-size: 0.8rem; margin: 0 0 1rem; color: var(--text-secondary);">Enter two or more subnet addresses to discover their aggregate summarized CIDR route.</p>
      
      <div style="margin-bottom: 1rem;">
        <label for="sup_routes">Subnets to Summarize (Comma Separated):</label>
        <input type="text" id="sup_routes" value="203.0.112.0, 203.0.113.0, 203.0.114.0, 203.0.115.0">
      </div>
      
      <div id="supernet-result" class="solver-result"></div>
    </div>
  `;

  const input = document.getElementById('sup_routes');

  const calculate = () => {
    const rawRoutes = input.value.split(',').map(r => r.trim());
    if (rawRoutes.length < 2) return;

    // Convert IPs to 32-bit integers
    const ipInts = [];
    for (const r of rawRoutes) {
      const parts = r.split('.').map(x => parseInt(x));
      if (parts.length < 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) return;
      const val = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
      ipInts.push(val);
    }

    // Find the number of matching bits in all IPs
    let maskBits = 32;
    let diffFound = false;
    
    for (let bit = 31; bit >= 0; bit--) {
      const referenceBit = (ipInts[0] >>> bit) & 1;
      for (let i = 1; i < ipInts.length; i++) {
        const curBit = (ipInts[i] >>> bit) & 1;
        if (curBit !== referenceBit) {
          diffFound = true;
          break;
        }
      }
      if (diffFound) {
        maskBits = 31 - bit;
        break;
      }
    }

    // Calculate summarized address
    const refParts = rawRoutes[0].split('.').map(x => parseInt(x));
    let mask = 0;
    for (let i = 0; i < maskBits; i++) {
      mask |= (1 << (31 - i));
    }
    const sumInt = (ipInts[0] & mask) >>> 0;
    
    const sumParts = [
      (sumInt >>> 24) & 255,
      (sumInt >>> 16) & 255,
      (sumInt >>> 8) & 255,
      sumInt & 255
    ];
    const sumRoute = `${sumParts.join('.')}/${maskBits}`;

    document.getElementById('supernet-result').innerHTML = `
      <strong>Summarized Route Result:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.85rem;">
        <li>Matching Common bits: <strong>${maskBits} bits</strong></li>
        <li>Aggregated Summarized Route: <strong style="color: var(--active-accent); font-size: 1rem;">${sumRoute}</strong></li>
      </ul>
    `;
  };

  input.addEventListener('input', calculate);
  calculate();
}

function renderSlidingWindowSpeedSolver(container) {
  container.innerHTML = `
    <div class="solver-section solver-playground">
      <h4>Sliding Window Speed Calculator</h4>
      <div style="margin-bottom: 0.75rem;">
        <label for="sls_bw">Link Bandwidth (Mbps):</label>
        <input type="number" id="sls_bw" value="1" min="0.1">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <label for="sls_ws">Sender Window (Ws):</label>
          <input type="number" id="sls_ws" value="7" min="1">
        </div>
        <div>
          <label for="sls_tp">Prop. Delay (ms):</label>
          <input type="number" id="sls_tp" value="15" min="0">
        </div>
      </div>
      
      <div id="sls-result" class="solver-result"></div>
    </div>
  `;

  const bwInp = document.getElementById('sls_bw');
  const wsInp = document.getElementById('sls_ws');
  const tpInp = document.getElementById('sls_tp');

  const calculate = () => {
    const bw = parseFloat(bwInp.value) || 1;
    const Ws = parseInt(wsInp.value) || 7;
    const tp = parseFloat(tpInp.value) || 15;

    // To get 100% utilization: Ws >= 1 + 2a => Ws - 1 >= 2*tp/Tt => Tt >= 2*tp/(Ws - 1)
    const minTt = Ws > 1 ? (2 * tp) / (Ws - 1) : 0;
    const minFrameBits = minTt * 0.001 * bw * 1e6;

    document.getElementById('sls-result').innerHTML = `
      <strong>Optimal GBN Framing Bounds:</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.6;">
        <li>Required Min Frame Trans. Time ($T_t$): <strong>${minTt.toFixed(2)} ms</strong>
          <br><small style="color: var(--text-secondary)">Formula: $T_t \\ge \\frac{2 \\times T_p}{W_s - 1} = \\frac{2 \\times ${tp}}{${Ws - 1}}$</small>
        </li>
        <li>Minimum Frame Size (bits): <strong style="color: var(--active-accent); font-size: 1rem;">${minFrameBits.toFixed(0)} bits</strong>
          <br><small style="color: var(--text-secondary)">Formula: $T_t \\times \\text{Bandwidth} = ${minTt.toFixed(3)}\\text{ ms} \\times (${bw} \\times 10^6\\text{ bps})$</small>
        </li>
      </ul>
    `;

    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('sls-result'), {
        delimiters: [{left: '$', right: '$', display: false}],
        throwOnError: false
      });
    }
  };

  [bwInp, wsInp, tpInp].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
}

function renderGenericSolver(container) {
  const q = getQuestionObj(activeSolverState.questionId);
  const expl = getExplanationText(q);
  container.innerHTML = `
    <div class="solver-section">
      <h4>Worked Solution & Formula</h4>
      <p style="font-size: 0.85rem; line-height: 1.5;">${expl || 'No special numerical calculator is registered for this question. Select a calculator from the dropdown above to run custom calculations.'}</p>
    </div>
  `;
}
