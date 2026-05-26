const STUDY_DATA = {
  "st1": [
    {
      "title": "Topic 1 — What is an Embedded System?",
      "html": "<h3>1.1 Definition</h3>\n<p>An embedded system is a <strong>combination of hardware and software (firmware)</strong> designed to perform a <strong>specific, dedicated task</strong> within a larger system. Unlike a general-purpose computer, it does not change its primary function.</p>\n<div class=\"callout callout-key\">🔑 Key phrase: <em>\"Hardware for security and performance; software (firmware) for flexibility and features.\"</em></div>\n<p>The software is called <strong>firmware</strong> because it is embedded directly into the hardware (usually stored in ROM).</p>\n<h3>1.2 Block Diagram</h3>\n<pre><code class=\"language-\">Input Variables → [Embedded Computer: Software + Hardware] → Output Variables\n                              ↕\n                        User Interface\n                              ↕\n                    Link to Other Systems\n</code></pre>\n<h3>1.3 Characteristics of an Embedded System ⚠️ EXAM CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Characteristic</th>\n<th>Detail</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Single-function / task-specific</td>\n<td>Executes one particular operation repeatedly (e.g., a pager always behaves as a pager)</td>\n</tr>\n<tr>\n<td>Real-time response</td>\n<td>Must produce output within defined time limits</td>\n</tr>\n<tr>\n<td>Microcontroller/Microprocessor-based</td>\n<td>Must be built on one of these</td>\n</tr>\n<tr>\n<td>Memory requirement</td>\n<td>Software stored in ROM; no secondary storage needed</td>\n</tr>\n<tr>\n<td>Peripheral connectivity</td>\n<td>Must support I/O devices (sensors, actuators)</td>\n</tr>\n<tr>\n<td>Low power consumption</td>\n<td>Critical for battery-operated devices</td>\n</tr>\n<tr>\n<td>Reliable and long-running</td>\n<td>Designed to operate for long periods without failure</td>\n</tr>\n<tr>\n<td>Design metric</td>\n<td>Must meet constraints of size, power, cost, performance</td>\n</tr>\n<tr>\n<td>Hardware + Software integration</td>\n<td>HW provides security &amp; performance; SW provides flexibility</td>\n</tr>\n</tbody></table>\n<h3>1.4 What is an Embedded Processor?</h3>\n<p>An embedded processor is a microprocessor used specifically inside an embedded system. It is:</p>\n<ul>\n<li>Self-contained within the device</li>\n<li>Designed for a specific control task</li>\n<li>Small, low-power, and efficient</li>\n<li>Reliable over long operating periods</li>\n</ul>\n<p><strong>Examples:</strong> smartphones, TVs, washing machines, aircraft systems, industrial robots.</p>\n<h3>1.5 Applications of Embedded Systems</h3>\n<table>\n<thead><tr>\n<th>Domain</th>\n<th>Examples</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Consumer Electronics</td>\n<td>Smartphones, tablets, laptops</td>\n</tr>\n<tr>\n<td>Industrial Control</td>\n<td>Robots, conveyor belts, manufacturing systems</td>\n</tr>\n<tr>\n<td>Automotive</td>\n<td>Engine control, traction control, ADAS</td>\n</tr>\n<tr>\n<td>Medical Devices</td>\n<td>Monitoring, imaging, drug delivery</td>\n</tr>\n<tr>\n<td>Military</td>\n<td>Missiles, aircraft, defense systems</td>\n</tr>\n<tr>\n<td>Communication</td>\n<td>Routers, switches, networking equipment</td>\n</tr>\n<tr>\n<td>Home Automation</td>\n<td>Smart thermostats, security systems, lighting</td>\n</tr>\n<tr>\n<td>Others</td>\n<td>POS systems, cash registers, vending machines</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 2 — Types of Embedded Processors",
      "html": "<h3>2.1 The Six Types ⚠️ EXAM CRITICAL — You may be asked to list all six</h3>\n<p><strong>1. General Purpose Processors (GPPs)</strong></p>\n<ul>\n<li>Designed for a broad range of tasks, not a specific one</li>\n<li>Example: Intel Core i-series (used in desktops/laptops)</li>\n<li>High processing power but high cost and power consumption</li>\n</ul>\n<p><strong>2. Microprocessors</strong></p>\n<ul>\n<li>A CPU on a single silicon-based integrated circuit (IC)</li>\n<li>Contains: ALU, Control Unit, Register Array</li>\n<li>Requires external memory (RAM, ROM) and I/O components — circuit becomes large</li>\n<li>Based on the <strong>Von Neumann model</strong></li>\n<li>High clock speed; used in general-purpose computers</li>\n<li>Features: instruction set, clock speed, data bus, address bus, cache</li>\n<li>High power consumption; cost varies with capability</li>\n</ul>\n<p><strong>3. Microcontrollers</strong></p>\n<ul>\n<li>A small, low-power computer on a single chip: CPU + RAM + ROM + I/O</li>\n<li>Based on <strong>Harvard architecture</strong></li>\n<li>Designed for a specific task in an embedded system</li>\n<li>Internal bus → circuit stays small and cheap</li>\n<li>On-chip peripherals: timers, serial ports, A/D converters, I/O pins</li>\n<li>Flexible (programmable for many tasks), low cost, low power (battery-friendly)</li>\n<li>Can run up to 200 MHz or more</li>\n<li><strong>Example:</strong> Arduino Uno, PIC microcontrollers</li>\n</ul>\n<p><strong>4. Digital Signal Processor (DSP)</strong></p>\n<ul>\n<li>Specialized processor optimized for mathematical signal processing operations (multiply-accumulate)</li>\n<li>Used in audio, video, radar, communications</li>\n</ul>\n<p><strong>5. Single-Purpose Embedded Processor</strong></p>\n<ul>\n<li>Hardwired to perform exactly one specific task</li>\n<li>Very fast and efficient for that task; cannot be reprogrammed</li>\n</ul>\n<p><strong>6. System-on-Chip (SoC)</strong></p>\n<ul>\n<li>Integrates an entire system (CPU, GPU, memory, I/O, wireless radios) on one chip</li>\n<li>Used in modern smartphones and IoT devices</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 3 — Microprocessor vs Microcontroller ⚠️ EXAM CRITICAL",
      "html": "<h3>Full Comparison Table</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Microprocessor</th>\n<th>Microcontroller</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Definition</td>\n<td>CPU on a single IC; performs central processing</td>\n<td>Small computer on a single IC; governs a specific operation</td>\n</tr>\n<tr>\n<td>Architecture</td>\n<td>Von Neumann (shared program + data memory)</td>\n<td>Harvard (separate program and data memory)</td>\n</tr>\n<tr>\n<td>Memory</td>\n<td>RAM, ROM, I/O are external → large circuit</td>\n<td>RAM, ROM, CPU, I/O all embedded → small circuit</td>\n</tr>\n<tr>\n<td>Circuit size</td>\n<td>Large (external components)</td>\n<td>Small (internal)</td>\n</tr>\n<tr>\n<td>Cost</td>\n<td>High (complex, many external parts)</td>\n<td>Low (simple, fewer external parts)</td>\n</tr>\n<tr>\n<td>Clock speed</td>\n<td>Very high (GHz range)</td>\n<td>Up to 200 MHz or more</td>\n</tr>\n<tr>\n<td>Power</td>\n<td>High power consumption</td>\n<td>Low power consumption</td>\n</tr>\n<tr>\n<td>Bus</td>\n<td>External bus</td>\n<td>Internal controlling bus</td>\n</tr>\n<tr>\n<td>Programming</td>\n<td>High-level languages (C, C++, Python)</td>\n<td>Low-level language / assembly code</td>\n</tr>\n<tr>\n<td>Usage</td>\n<td>General-purpose: desktops, laptops</td>\n<td>Specific-purpose: embedded systems, appliances, control</td>\n</tr>\n<tr>\n<td>Complexity</td>\n<td>Complex — large instruction set</td>\n<td>Simple — smaller instruction set</td>\n</tr>\n<tr>\n<td>Examples</td>\n<td>Intel Core i-series, Qualcomm Snapdragon</td>\n<td>Arduino Uno, PIC, 8051</td>\n</tr>\n</tbody></table>\n<div class=\"callout callout-key\">🔑 KEY DIFFERENCE: In a microprocessor, memory and I/O are <strong>outside</strong> the chip. In a microcontroller, memory and I/O are <strong>inside</strong> the chip.</div>\n<hr>"
    },
    {
      "title": "Topic 4 — Von Neumann & Harvard Architectures ⚠️ EXAM CRITICAL",
      "html": "<h3>4.1 Von Neumann Architecture</h3>\n<ul>\n<li>Digital computer design based on the <strong>stored-program concept</strong></li>\n<li>Both program instructions and data are stored in the <strong>same memory</strong> and share the <strong>same bus</strong></li>\n<li>Proposed by John Von Neumann in <strong>1945</strong></li>\n<li>Also called the <strong>Princeton Architecture</strong></li>\n<li>Foundation of general-purpose computers (PCs, laptops)</li>\n</ul>\n<p><strong>The 4 Main Components:</strong></p>\n<ol>\n<li><strong>Main Memory System</strong> — Stores both instructions AND data in the same physical space</li>\n<li><strong>CPU</strong> (contains ALU + Control Unit + Operational Registers + Program Counter)</li>\n<li><strong>Input / Output System</strong> — Connects CPU to the outside world</li>\n</ol>\n<p><strong>Fetch-Decode-Execute Cycle:</strong></p>\n<ol>\n<li><strong>Fetch</strong> — Control Unit reads address from Program Counter, goes to that memory location, fetches instruction</li>\n<li><strong>Decode</strong> — Control Unit interprets what the instruction means</li>\n<li><strong>Execute</strong> — ALU or relevant component performs the operation</li>\n<li><strong>PC increments</strong> — Program Counter moves to next instruction's address</li>\n<li><strong>Repeat forever</strong></li>\n</ol>\n<div class=\"callout callout-warning\">⚠️ <strong>Von Neumann Bottleneck:</strong> Instructions and data travel on the SAME bus. CPU cannot simultaneously fetch instruction while reading data — they must TAKE TURNS.</div>\n<h3>4.2 Harvard Architecture</h3>\n<ul>\n<li>Uses <strong>two separate memories</strong> — one for instructions, one for data — with <strong>two separate buses</strong></li>\n<li>CPU can fetch next instruction while simultaneously reading/writing data — <strong>no bottleneck</strong></li>\n<li>Used in <strong>microcontrollers</strong> and signal processing</li>\n</ul>\n<pre><code class=\"language-\">Von Neumann:  CPU ←── ONE bus ──→ [Instructions + Data mixed]\nHarvard:      CPU ←── Bus 1 ──→ [Instruction Memory]\n              CPU ←── Bus 2 ──→ [Data Memory]\n</code></pre>\n<h3>4.3 Comparison Table ⚠️ EXAM CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Von Neumann</th>\n<th>Harvard</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Origin</td>\n<td>Stored-program concept (1945)</td>\n<td>Based on Harvard Mark I relay model</td>\n</tr>\n<tr>\n<td>Memory</td>\n<td>Single physical memory for instructions + data</td>\n<td>Separate memory for instructions and data</td>\n</tr>\n<tr>\n<td>Bus</td>\n<td>One common bus for both</td>\n<td>Two separate buses</td>\n</tr>\n<tr>\n<td>Execution speed</td>\n<td>Two clock cycles per instruction (compete)</td>\n<td>Single clock cycle per instruction (parallel)</td>\n</tr>\n<tr>\n<td>Cost</td>\n<td>Cheaper</td>\n<td>More costly</td>\n</tr>\n<tr>\n<td>Simultaneous access</td>\n<td>CPU cannot access instructions and data simultaneously</td>\n<td>CPU CAN access both simultaneously</td>\n</tr>\n<tr>\n<td>Usage</td>\n<td>Personal computers</td>\n<td>Microcontrollers, signal processing</td>\n</tr>\n<tr>\n<td>Bottleneck</td>\n<td>Yes — Von Neumann Bottleneck</td>\n<td>No bottleneck</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 5 — Embedded Hardware Units ⚠️ EXAM CRITICAL — Your teacher emphasizes this",
      "html": "<h3>Unit 1 — Power Source</h3>\n<ul>\n<li>Provides stable voltage to all components</li>\n<li><strong>Four standard voltage ranges:</strong></li>\n</ul>\n<table>\n<thead><tr>\n<th>Range</th>\n<th>Used When</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>5.0V ± 0.25V</td>\n<td>High-performance systems (fastest)</td>\n</tr>\n<tr>\n<td>3.3V ± 0.3V</td>\n<td>Modern digital logic circuits</td>\n</tr>\n<tr>\n<td>2.0V ± 0.2V</td>\n<td>Lower-power designs</td>\n</tr>\n<tr>\n<td>1.5V ± 0.2V</td>\n<td>Ultra low-power / modern SoC chips</td>\n</tr>\n</tbody></table>\n<div class=\"callout callout-key\">🔑 <strong>Critical:</strong> Higher voltage → gates switch faster → lower propagation delay → higher performance</div>\n<h3>Unit 2 — Clock Oscillator Circuit ⚠️ Most examined hardware unit</h3>\n<ul>\n<li>The <strong>heartbeat</strong> of the processor — every CPU operation happens in sync with the clock</li>\n<li>A <strong>quartz crystal oscillator</strong> generates a precise, stable frequency (e.g., 4 MHz, 12 MHz)</li>\n<li>Controls: when each instruction executes, CPU machine cycles (fetch, decode, execute), all internal component synchronization</li>\n<li><strong>Machine cycle:</strong> One complete fetch-decode-execute operation = one machine cycle</li>\n</ul>\n<h3>Unit 3 — System Timers and Real-Time Clocks (RTC)</h3>\n<ul>\n<li>Dedicated timer circuit configured to generate system interrupts periodically (e.g., 60 times/second)</li>\n<li>Used as Real-Time Clock to track current time/date, schedule tasks, generate delays/timeouts</li>\n</ul>\n<h3>Unit 4 — Reset Circuit</h3>\n<ul>\n<li>Ensures processor starts from a known, clean state</li>\n<li>On power-up, reset pin held active → all internal registers and Program Counter reset to default values</li>\n<li><strong>Two uses:</strong> Power-on reset + Propagated reset (resets all sister units simultaneously)</li>\n</ul>\n<h3>Unit 5 — Watchdog Timer ⚠️ Often appears in MCQs</h3>\n<ul>\n<li>A <strong>safety device</strong> that automatically resets the system if the program freezes or gets stuck in an infinite loop</li>\n<li>Software must <strong>\"kick\"</strong> (reset) the watchdog within a predefined time interval</li>\n<li>If software fails (because it's stuck/crashed) → watchdog counts down to zero → <strong>triggers system reset</strong></li>\n<li>Essential in embedded systems that run unattended (pacemakers, car ECUs, industrial controllers)</li>\n</ul>\n<h3>Unit 6 — Memory (Various Forms)</h3>\n<pre><code class=\"language-\">Various Forms of System Memory\n├── Internal RAM at Microcontroller (on-chip, fastest)\n├── RAM at System-on-Chip or External RAM\n├── Internal Caches at Microprocessor\n├── External RAM Chip(s)\n├── Flash / EEPROM (non-volatile, stores firmware; can be erased &amp; rewritten)\n├── ROM / PROM (non-volatile, permanent program storage)\n└── Memory Addresses at System Ports\n</code></pre>\n<ul>\n<li><strong>ROM/Flash</strong> → stores the program (firmware) permanently. Survives power-off.</li>\n<li><strong>RAM</strong> → stores temporary variables and data during execution. Lost on power-off.</li>\n<li><strong>EEPROM/Flash</strong> → non-volatile like ROM, but electrically erasable — used for settings that need to be saved but occasionally updated</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 6 — ASICs (Application Specific Integrated Circuits) ⚠️ EXAM CRITICAL",
      "html": "<h3>6.1 Definition</h3>\n<p>An ASIC is an integrated circuit specifically designed and tailored for <strong>one particular application</strong> — unlike general-purpose ICs.</p>\n<div class=\"callout callout-key\">🔑 Analogy: Swiss Army knife (microcontroller) vs surgeon's scalpel (ASIC). The scalpel does one thing perfectly, nothing wasted.</div>\n<h3>6.2 ASIC Type Tree ⚠️ EXAM CRITICAL</h3>\n<pre><code class=\"language-\">                       ASIC\n          ┌─────────────┼──────────────┐\n     Full-Custom    Semi-Custom    Programmable IC\n        ASIC           ASIC         (PLD / FPGA)\n                    ┌────┴────┐\n               Gate Arrays  Cell-Based\n               ┌──────┴──────┐      ┌──────┴──────┐\n           Channeled  Channel-less  Standard Cell  Macrocell\n</code></pre>\n<h3>6.3 Type 1 — Full-Custom ASIC</h3>\n<ul>\n<li>Every aspect of the chip designed from scratch</li>\n<li><strong>Highest performance, lowest power, most expensive, most time-consuming</strong></li>\n<li>Used when volume is very high OR performance requirements are extremely strict</li>\n<li><strong>Example:</strong> Apple M-series chips</li>\n</ul>\n<h3>6.4 Type 2 — Semi-Custom ASIC</h3>\n<p><strong>A. Cell-Based ASICs (Standard Cell + Macrocell)</strong></p>\n<ul>\n<li><strong>Standard Cell:</strong> Uses pre-designed library of logic cells (AND gates, OR gates, flip-flops, etc.) — like LEGO bricks</li>\n<li><strong>Macrocell:</strong> Uses larger pre-designed blocks (entire ALUs, memory controllers)</li>\n</ul>\n<p><strong>B. Gate Array ASICs</strong></p>\n<ul>\n<li>Silicon wafer with <strong>predefined, fixed pattern of transistors</strong> already laid down</li>\n<li>Designer customizes only the <strong>interconnections (metal layers)</strong></li>\n</ul>\n<table>\n<thead><tr>\n<th>Type</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Channeled Gate Arrays</td>\n<td>Predefined routing channels exist between rows of cells</td>\n</tr>\n<tr>\n<td>Channel-less Gate Arrays</td>\n<td>No predefined channels; interconnects placed directly over cells (more compact)</td>\n</tr>\n<tr>\n<td>Structured Gate Arrays</td>\n<td>Combine predefined logic blocks with customizable interconnect layers</td>\n</tr>\n</tbody></table>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Gate Array</th>\n<th>Standard Cell</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Transistor placement</td>\n<td>Fixed (pre-placed on wafer)</td>\n<td>Flexible (you choose where)</td>\n</tr>\n<tr>\n<td>What you customize</td>\n<td>Only interconnections (metal layers)</td>\n<td>Both placement and connections</td>\n</tr>\n<tr>\n<td>Cost</td>\n<td>Lower</td>\n<td>Higher</td>\n</tr>\n<tr>\n<td>Speed to market</td>\n<td>Faster</td>\n<td>Slower</td>\n</tr>\n</tbody></table>\n<h3>6.5 Type 3 — Programmable ASICs (PLD and FPGA)</h3>\n<ul>\n<li><strong>PLD (Programmable Logic Device):</strong> Programmed once (or limited times) after purchase</li>\n<li><strong>FPGA (Field Programmable Gate Array):</strong> Reprogrammable any number of times even after manufacturing</li>\n</ul>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>FPGA</th>\n<th>Full-Custom ASIC</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Reprogrammable?</td>\n<td>Yes, any number of times</td>\n<td>No — fixed forever</td>\n</tr>\n<tr>\n<td>Performance</td>\n<td>Lower</td>\n<td>Highest</td>\n</tr>\n<tr>\n<td>Power</td>\n<td>Higher</td>\n<td>Lowest</td>\n</tr>\n<tr>\n<td>Cost per unit</td>\n<td>Higher</td>\n<td>Lower at scale</td>\n</tr>\n<tr>\n<td>Use case</td>\n<td>Prototyping, small volume</td>\n<td>Mass production, strict performance</td>\n</tr>\n</tbody></table>\n<h3>6.6 Full Comparison Summary</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Full-Custom</th>\n<th>Semi-Custom (Standard Cell)</th>\n<th>Semi-Custom (Gate Array)</th>\n<th>Programmable (FPGA)</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Performance</td>\n<td>Best</td>\n<td>Good</td>\n<td>Moderate</td>\n<td>Lower</td>\n</tr>\n<tr>\n<td>Power</td>\n<td>Lowest</td>\n<td>Low</td>\n<td>Moderate</td>\n<td>Higher</td>\n</tr>\n<tr>\n<td>Cost (design)</td>\n<td>Very high</td>\n<td>Medium</td>\n<td>Low</td>\n<td>Very low</td>\n</tr>\n<tr>\n<td>Time to market</td>\n<td>Slowest</td>\n<td>Medium</td>\n<td>Fast</td>\n<td>Fastest</td>\n</tr>\n<tr>\n<td>Reprogrammable?</td>\n<td>No</td>\n<td>No</td>\n<td>No</td>\n<td>Yes</td>\n</tr>\n</tbody></table>\n<h3>6.7 Applications of ASIC</h3>\n<ul>\n<li>IP cores in satellites — custom signal processing chips</li>\n<li>ROM production — storage chips in embedded devices</li>\n<li>Microcontrollers — the processing core is an ASIC</li>\n<li>Medical and research applications — custom biosensor chips</li>\n<li><strong>Bitcoin mining</strong> — most famous modern ASIC application (SHA-256 hashing millions of times/second)</li>\n</ul>\n<h3>Memory Hooks</h3>\n<ul>\n<li><strong>Full-Custom → 3 Fs:</strong> Full Control, Full Cost, Full Performance</li>\n<li><strong>Standard Cell → LEGO:</strong> Pre-made bricks, you arrange them</li>\n<li><strong>Gate Array → \"Already on the board, just connect the dots\"</strong></li>\n<li><strong>FPGA → Whiteboard:</strong> Reprogrammable, most flexible, least optimal</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 7 — Serial Communication: RS232, RS485, SPI, I2C",
      "html": "<h3>7.1 RS232</h3>\n<ul>\n<li>Serial communication standard for transferring commands and data between a PC and a microcontroller</li>\n<li>Uses <strong>2 communication wires:</strong> TX (Transmit) and RX (Receive), plus GND</li>\n<li>TX of Device A → RX of Device B (cross-connected)</li>\n<li>Data travels serially — one bit at a time</li>\n</ul>\n<table>\n<thead><tr>\n<th>Property</th>\n<th>Value</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Communication type</td>\n<td>Serial, point-to-point (1 device to 1 device only)</td>\n</tr>\n<tr>\n<td>Direction</td>\n<td>Full-duplex (both directions simultaneously)</td>\n</tr>\n<tr>\n<td>Max speed (standard)</td>\n<td>20 kbit/s</td>\n</tr>\n<tr>\n<td>Modern speed</td>\n<td>Up to 115,200 baud</td>\n</tr>\n<tr>\n<td>Max cable length</td>\n<td>~20 meters</td>\n</tr>\n<tr>\n<td>Transmission type</td>\n<td>Unbalanced / single-ended</td>\n</tr>\n<tr>\n<td>Voltage logic</td>\n<td>−15V to −5V = logic 1 / +5V to +15V = logic 0</td>\n</tr>\n<tr>\n<td>Connections</td>\n<td>3 wires minimum (TX, RX, GND)</td>\n</tr>\n<tr>\n<td>Devices</td>\n<td>1 to 1 only</td>\n</tr>\n</tbody></table>\n<p><strong>The 9-Pin DB9 Connector:</strong></p>\n<table>\n<thead><tr>\n<th>Pin</th>\n<th>Signal</th>\n<th>Function</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>DCD — Data Carrier Detect</td>\n<td>Modem control</td>\n</tr>\n<tr>\n<td>2</td>\n<td>RX — Received Data</td>\n<td>Data in</td>\n</tr>\n<tr>\n<td>3</td>\n<td>TX — Transmitted Data</td>\n<td>Data out</td>\n</tr>\n<tr>\n<td>4</td>\n<td>DTR — Data Terminal Ready</td>\n<td>Modem control</td>\n</tr>\n<tr>\n<td>5</td>\n<td>GND — Signal Ground</td>\n<td>Reference</td>\n</tr>\n<tr>\n<td>6</td>\n<td>DSR — Data Set Ready</td>\n<td>Modem control</td>\n</tr>\n<tr>\n<td>7</td>\n<td>RTS — Request to Send</td>\n<td>Flow control</td>\n</tr>\n<tr>\n<td>8</td>\n<td>CTS — Clear to Send</td>\n<td>Flow control</td>\n</tr>\n<tr>\n<td>9</td>\n<td>RI — Ring Indicator</td>\n<td>Modem control</td>\n</tr>\n</tbody></table>\n<h3>7.2 RS485</h3>\n<ul>\n<li>Improved serial communication standard — adds multi-device support and much longer range</li>\n<li>Uses <strong>balanced/differential transmission</strong> — sends signal on two wires simultaneously (+V and −V); receiver reads the DIFFERENCE (noise cancels out)</li>\n</ul>\n<table>\n<thead><tr>\n<th>Property</th>\n<th>RS485</th>\n<th>RS232</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Transmission</td>\n<td>Balanced/differential</td>\n<td>Unbalanced/single-ended</td>\n</tr>\n<tr>\n<td>Max distance</td>\n<td>3000 meters</td>\n<td>20 meters</td>\n</tr>\n<tr>\n<td>Devices on bus</td>\n<td>1 to 32</td>\n<td>1 to 1</td>\n</tr>\n<tr>\n<td>Max speed</td>\n<td>10 Mbps</td>\n<td>20 Kbps</td>\n</tr>\n<tr>\n<td>Wires</td>\n<td>2 wires</td>\n<td>3 wires</td>\n</tr>\n<tr>\n<td>Voltage (logic 1)</td>\n<td>+2V to +6V</td>\n<td>−15V to −5V</td>\n</tr>\n<tr>\n<td>Noise resistance</td>\n<td>Excellent</td>\n<td>Poor</td>\n</tr>\n</tbody></table>\n<div class=\"callout callout-key\">🔑 Analogy: Noise-cancelling headphones — they capture ambient noise on a second microphone and subtract it. RS485 does this electrically.</div>\n<h3>7.3 SPI — Serial Peripheral Interface</h3>\n<ul>\n<li><strong>Synchronous, bi-directional, full-duplex, 4-wire serial interface bus</strong> — Developed by Motorola</li>\n<li><strong>Single master, multi-slave system</strong></li>\n</ul>\n<p><strong>The 4 Wires:</strong></p>\n<table>\n<thead><tr>\n<th>Line</th>\n<th>Full Name</th>\n<th>Direction</th>\n<th>Purpose</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>SCK</td>\n<td>Serial Clock</td>\n<td>Master → Slave</td>\n<td>Synchronizes all data transfer</td>\n</tr>\n<tr>\n<td>MOSI</td>\n<td>Master Out Slave In</td>\n<td>Master → Slave</td>\n<td>Master sends data to slave</td>\n</tr>\n<tr>\n<td>MISO</td>\n<td>Master In Slave Out</td>\n<td>Slave → Master</td>\n<td>Slave sends data back to master</td>\n</tr>\n<tr>\n<td>SS/CS</td>\n<td>Slave Select / Chip Select</td>\n<td>Master → each Slave</td>\n<td>Master pulls LOW to activate specific slave</td>\n</tr>\n</tbody></table>\n<p><strong>How it works:</strong></p>\n<ul>\n<li>Master generates the clock (SCK) — slaves have no clock of their own</li>\n<li>To talk to a slave: Master pulls that slave's SS LOW → slave wakes up → data flows on MOSI/MISO in sync with clock</li>\n<li>Each slave needs its own SS line from the master</li>\n</ul>\n<table>\n<thead><tr>\n<th>Property</th>\n<th>Detail</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Wires</td>\n<td>4 (SCK, MOSI, MISO, SS per slave)</td>\n</tr>\n<tr>\n<td>Duplex</td>\n<td>Full-duplex</td>\n</tr>\n<tr>\n<td>Synchronization</td>\n<td>Synchronous</td>\n</tr>\n<tr>\n<td>Master/Slave</td>\n<td>Single master, multiple slaves</td>\n</tr>\n<tr>\n<td>Speed</td>\n<td>Very fast — can run at tens of MHz</td>\n</tr>\n</tbody></table>\n<h3>7.4 I2C — Inter-Integrated Circuit</h3>\n<ul>\n<li><strong>Synchronous, bi-directional, half-duplex, 2-wire serial bus</strong> — Developed by Philips Semiconductors</li>\n<li>Originally to connect microcontroller to peripheral chips inside television sets</li>\n</ul>\n<p><strong>The 2 Wires:</strong></p>\n<table>\n<thead><tr>\n<th>Line</th>\n<th>Full Name</th>\n<th>Purpose</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>SDA</td>\n<td>Serial Data</td>\n<td>Carries the actual data bits</td>\n</tr>\n<tr>\n<td>SCL</td>\n<td>Serial Clock</td>\n<td>Clock pulses generated by the master</td>\n</tr>\n</tbody></table>\n<ul>\n<li>Both lines connected to VCC via <strong>pull-up resistors</strong> (essential for I2C to work)</li>\n<li>Every slave has a <strong>unique 7-bit address</strong> burned in at manufacturing</li>\n<li>Master controls the clock (SCL), initiates/terminates all communication</li>\n<li>Master generates clock whether sending or receiving</li>\n</ul>\n<table>\n<thead><tr>\n<th>Property</th>\n<th>Detail</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Wires</td>\n<td>2 (SDA + SCL)</td>\n</tr>\n<tr>\n<td>Duplex</td>\n<td>Half-duplex</td>\n</tr>\n<tr>\n<td>Synchronization</td>\n<td>Synchronous</td>\n</tr>\n<tr>\n<td>Master/Slave</td>\n<td>Multi-master, multi-slave (addressed)</td>\n</tr>\n<tr>\n<td>Addressing</td>\n<td>7-bit addresses (up to 128 devices)</td>\n</tr>\n<tr>\n<td>Speed</td>\n<td>Standard 100 kbps, Fast 400 kbps, High-speed 3.4 Mbps</td>\n</tr>\n</tbody></table>\n<h3>7.5 SPI vs I2C — Key Comparison ⚠️ MCQs love this</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>SPI</th>\n<th>I2C</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Wires</td>\n<td>4 (+ 1 SS per slave)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>Duplex</td>\n<td>Full-duplex</td>\n<td>Half-duplex</td>\n</tr>\n<tr>\n<td>Speed</td>\n<td>Faster (tens of MHz)</td>\n<td>Slower (max 3.4 Mbps)</td>\n</tr>\n<tr>\n<td>Addressing</td>\n<td>By SS pin (hardware)</td>\n<td>By 7-bit address (software)</td>\n</tr>\n<tr>\n<td>Multi-slave</td>\n<td>Yes, one SS per slave</td>\n<td>Yes, up to 128 by address</td>\n</tr>\n<tr>\n<td>Multi-master</td>\n<td>One active master</td>\n<td>Yes (with arbitration)</td>\n</tr>\n<tr>\n<td>Hardware cost</td>\n<td>More pins needed</td>\n<td>Less pins, needs pull-up resistors</td>\n</tr>\n<tr>\n<td>Developed by</td>\n<td>Motorola</td>\n<td>Philips</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 8 — USB (Universal Serial Bus)",
      "html": "<h3>8.1 Definition</h3>\n<p>USB is a common wired interface standard for communication between a <strong>host controller</strong> (PC, smartphone) and <strong>peripheral devices</strong> (mouse, keyboard, camera, flash drive, etc.)</p>\n<h3>8.2 How USB Works — Polling Principle</h3>\n<ul>\n<li>USB works on the <strong>polling principle</strong></li>\n<li>The host controller polls each device in round-robin fashion</li>\n<li>Devices cannot initiate communication; they wait to be polled</li>\n</ul>\n<h3>8.3 USB Speeds</h3>\n<table>\n<thead><tr>\n<th>Version</th>\n<th>Speed</th>\n<th>Max Cable Length</th>\n<th>Power</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>USB 1.0</td>\n<td>12 Mbps</td>\n<td>5 meters</td>\n<td>500mA</td>\n</tr>\n<tr>\n<td>USB 2.0</td>\n<td>480 Mbps (Hi-Speed)</td>\n<td>5 meters</td>\n<td>500mA</td>\n</tr>\n<tr>\n<td>USB 3.0</td>\n<td>5 Gbps</td>\n<td>3 meters</td>\n<td>900mA</td>\n</tr>\n<tr>\n<td>USB 3.1 Gen 2</td>\n<td>10 Gbps</td>\n<td>1 meter</td>\n<td>100W</td>\n</tr>\n<tr>\n<td>USB 3.2 Gen 2×2</td>\n<td>20 Gbps</td>\n<td>1 meter</td>\n<td>100W</td>\n</tr>\n<tr>\n<td>USB 4 (Thunderbolt 4)</td>\n<td>40 Gbps</td>\n<td>2m (active)</td>\n<td>100W</td>\n</tr>\n</tbody></table>\n<p><strong>USB 2.0 speed modes:</strong></p>\n<ul>\n<li>Low speed: 1.5 Mbps</li>\n<li>Full speed: 12 Mbps</li>\n<li>High speed: 480 Mbps</li>\n</ul>\n<h3>8.4 USB Features</h3>\n<ul>\n<li><strong>Plug &amp; Play</strong> — no restart needed; auto-detects connected devices</li>\n<li>Up to 100+ peripherals on a single host controller (via hubs)</li>\n<li>Power: 5V at up to 500 mA</li>\n<li>Auto sleep mode when host enters power-saving mode</li>\n<li>No broadcasting — messages go only between host and one peripheral</li>\n</ul>\n<h3>8.5 Advantages vs Disadvantages</h3>\n<table>\n<thead><tr>\n<th>Advantages</th>\n<th>Disadvantages</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Easy to use, plug &amp; play</td>\n<td>Some manufacturers make low-quality cheap versions</td>\n</tr>\n<tr>\n<td>Single interface for multiple devices</td>\n<td>Limited capacity/bandwidth vs newer standards</td>\n</tr>\n<tr>\n<td>Auto-configuration</td>\n<td>No broadcast — only host-to-device communication</td>\n</tr>\n<tr>\n<td>High speed, low cost</td>\n<td></td>\n</tr>\n<tr>\n<td>Low power consumption</td>\n<td></td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 9 — Wireless Communication: Bluetooth & ZigBee",
      "html": "<h3>9.1 Bluetooth</h3>\n<ul>\n<li>Short-range wireless communication standard for voice and data over a <strong>Wireless Personal Area Network (WPAN)</strong></li>\n</ul>\n<table>\n<thead><tr>\n<th>Property</th>\n<th>Value</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Network type</td>\n<td>WPAN (Wireless Personal Area Network)</td>\n</tr>\n<tr>\n<td>Frequency band</td>\n<td>2.4 GHz to 2.485 GHz (ISM band — unlicensed)</td>\n</tr>\n<tr>\n<td>Range</td>\n<td>Up to 10 meters</td>\n</tr>\n<tr>\n<td>Transmission capacity</td>\n<td>720 kbps</td>\n</tr>\n<tr>\n<td>Data rate (by version)</td>\n<td>1 Mbps or 3 Mbps</td>\n</tr>\n<tr>\n<td>Spreading method</td>\n<td>FHSS — Frequency Hopping Spread Spectrum</td>\n</tr>\n</tbody></table>\n<p><strong>FHSS (Frequency Hopping Spread Spectrum):</strong> Bluetooth rapidly switches (\"hops\") between 79 frequency channels within its band — resistant to interference, harder to intercept.</p>\n<p><strong>Bluetooth Network Architecture:</strong></p>\n<ul>\n<li><strong>Piconet:</strong> Basic Bluetooth network unit — 1 master + up to 7 active slave nodes = 8 total active nodes; Range: 10 meters; Only master ↔ slave communication (slave-to-slave NOT possible)</li>\n<li><strong>Scatternet:</strong> A group of interconnected piconets; A device can be a slave in one piconet and a master in another</li>\n</ul>\n<h3>9.2 ZigBee</h3>\n<ul>\n<li>Low-power, low-data-rate, short-range wireless communication standard for <strong>simple sensing and control devices</strong></li>\n<li>Based on <strong>IEEE 802.15.4</strong></li>\n</ul>\n<table>\n<thead><tr>\n<th>Property</th>\n<th>Value</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Standard</td>\n<td>IEEE 802.15.4</td>\n</tr>\n<tr>\n<td>Created by</td>\n<td>ZigBee Alliance</td>\n</tr>\n<tr>\n<td>Network type</td>\n<td>Personal Area Network (PAN)</td>\n</tr>\n<tr>\n<td>Design goal</td>\n<td>Low-cost, low-power, secure, reliable wireless networks</td>\n</tr>\n</tbody></table>\n<p><strong>Topologies Supported:</strong></p>\n<ul>\n<li>IEEE 802.15.4 (base layer): star and peer-to-peer</li>\n<li>ZigBee additionally: Star, Mesh, Cluster tree, Point-to-point, Point-to-multipoint</li>\n</ul>\n<p><strong>ZigBee vs Bluetooth:</strong></p>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>ZigBee</th>\n<th>Bluetooth</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Power consumption</td>\n<td>Extremely low (years on a battery)</td>\n<td>Low</td>\n</tr>\n<tr>\n<td>Data rate</td>\n<td>Very low (250 kbps max)</td>\n<td>Higher (720 kbps–3 Mbps)</td>\n</tr>\n<tr>\n<td>Range</td>\n<td>10–100 meters</td>\n<td>10 meters</td>\n</tr>\n<tr>\n<td>Network size</td>\n<td>Thousands of nodes</td>\n<td>8 active (piconet)</td>\n</tr>\n<tr>\n<td>Best for</td>\n<td>Sensors, smart home, industrial monitoring</td>\n<td>Audio, file transfer, peripherals</td>\n</tr>\n</tbody></table>\n<p><strong>ZigBee Applications:</strong></p>\n<ul>\n<li>Home Automation (smart lights, thermostats)</li>\n<li>Medical Data Collection</li>\n<li>Industrial Control Systems</li>\n<li>Meter Reading Systems</li>\n<li>Light Control Systems</li>\n<li>Home Networking</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 10 — Real-Time Embedded Systems ⚠️ EXAM CRITICAL",
      "html": "<h3>10.1 Definition</h3>\n<p>A Real-Time Embedded System (RTES) is a system that must perform specific tasks and produce results within a <strong>strictly defined time interval (deadline)</strong>.</p>\n<div class=\"callout callout-key\">🔑 The key word is <strong>deadline</strong> — real-time means predictable and timely, NOT necessarily fast.</div>\n<h3>10.2 Two Types of RTES ⚠️ HEAVILY TESTED</h3>\n<pre><code class=\"language-\">         Real-Time Embedded Systems\n                    |\n         ┌──────────┴──────────┐\n    Hard RTES              Soft RTES\n(missile tracking)        (DVD player)\n</code></pre>\n<p><strong>Hard Real-Time Embedded System:</strong></p>\n<ul>\n<li>Deadlines are <strong>absolute</strong> — no exceptions permitted</li>\n<li>Failure to meet deadline = <strong>system failure</strong> (not just degraded performance)</li>\n<li>Must guarantee timing under all conditions</li>\n<li><strong>Examples:</strong> Missile tracking, aircraft flight control, airbag deployment, pacemakers, nuclear reactor control, anti-lock braking systems</li>\n<li><strong>Advantages:</strong> Guaranteed predictability, safety-critical reliability</li>\n<li><strong>Disadvantages:</strong> Expensive and complex to design, requires dedicated hardware, very strict and inflexible</li>\n</ul>\n<p><strong>Soft Real-Time Embedded System:</strong></p>\n<ul>\n<li>Deadlines are <strong>best-effort</strong> — missing one occasionally is tolerable</li>\n<li>System degrades gracefully, not catastrophically</li>\n<li>Can handle dynamic and variable workloads</li>\n<li><strong>Examples:</strong> DVD/video players (occasional frame drop = acceptable), online video streaming, video games, music players, web browsers</li>\n<li><strong>Advantages:</strong> Flexible, higher resource utilization, cheaper to develop</li>\n<li><strong>Disadvantages:</strong> Unpredictable under heavy load, not suitable for safety-critical applications</li>\n</ul>\n<h3>10.3 Real-Time Loop Example (from PDF)</h3>\n<pre><code class=\"language-\">While true do {\n    read temperature sensor\n    if temperature too high\n        then turn off heater\n    else if temperature too low\n        then turn on heater\n    else nothing\n}\n</code></pre>\n<p>This loop must read the sensor and respond within a fixed time budget — that's the real-time requirement.</p>\n<hr>\n<p># UNIT II — Microcontrollers and Programming</p>\n<hr>"
    },
    {
      "title": "Topic 11 — Introduction to Microcontrollers",
      "html": "<h3>11.1 Microcontroller vs Microprocessor (Quick Reference)</h3>\n<ul>\n<li><strong>Microcontroller:</strong> CPU + RAM + ROM + I/O all on ONE chip — Harvard architecture — specific task</li>\n<li><strong>Microprocessor:</strong> CPU only — external memory/I/O — Von Neumann — general purpose</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 12 — 8051 Microcontroller Architecture",
      "html": "<h3>12.1 Overview</h3>\n<p>The <strong>8051</strong> is the foundational microcontroller studied in embedded systems. It is a concrete implementation of all Unit 1 concepts.</p>\n<h3>12.2 Architecture and Memory Organization</h3>\n<p><strong>8051 Internal Block Diagram:</strong></p>\n<ul>\n<li>CPU (ALU + Control Unit)</li>\n<li>4KB Internal Program Memory (ROM)</li>\n<li>128 bytes Internal Data Memory (RAM)</li>\n<li>32 I/O Pins (Ports 0, 1, 2, 3)</li>\n<li>2 Timers/Counters (Timer 0 and Timer 1)</li>\n<li>Serial Port (UART)</li>\n<li>5 Interrupt Sources (2 external, 2 timer, 1 serial)</li>\n<li>Oscillator/Timing Circuits</li>\n</ul>\n<p><strong>Memory Organization:</strong></p>\n<ul>\n<li><strong>Program Memory (ROM):</strong> Stores the program (firmware); 4KB internal, can be expanded to 64KB external</li>\n<li><strong>Data Memory (RAM):</strong> Stores temporary data during execution; 128 bytes internal</li>\n</ul>\n<p><strong>Registers:</strong></p>\n<ul>\n<li><strong>Accumulator (ACC/A):</strong> Main working register for most arithmetic and logic operations</li>\n<li><strong>B Register:</strong> Used with accumulator for multiply and divide operations</li>\n<li><strong>Data Pointer (DPTR):</strong> 16-bit register for addressing external memory</li>\n<li><strong>Stack Pointer (SP):</strong> Points to the top of the stack in RAM</li>\n<li><strong>Program Counter (PC):</strong> Points to the next instruction to be executed</li>\n<li><strong>PSW (Program Status Word):</strong> Flag register — tracks state of operations</li>\n</ul>\n<h3>12.3 PSW (Program Status Word) — Flag Bits ⚠️ EXAM CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Bit</th>\n<th>Name</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>CY (C)</td>\n<td>Carry Flag</td>\n<td>Set when arithmetic operation produces a carry or borrow</td>\n</tr>\n<tr>\n<td>AC</td>\n<td>Auxiliary Carry</td>\n<td>Set when carry occurs from bit 3 to bit 4 (for BCD operations)</td>\n</tr>\n<tr>\n<td>F0</td>\n<td>Flag 0</td>\n<td>General-purpose flag for user use</td>\n</tr>\n<tr>\n<td>RS1, RS0</td>\n<td>Register Bank Select</td>\n<td>Select which register bank (0–3) is active</td>\n</tr>\n<tr>\n<td>OV</td>\n<td>Overflow Flag</td>\n<td>Set when signed arithmetic overflow occurs</td>\n</tr>\n<tr>\n<td>P</td>\n<td>Parity Flag</td>\n<td>Set when accumulator has an odd number of 1s</td>\n</tr>\n</tbody></table>\n<h3>12.4 8051 Pin Configuration (40-pin DIP package)</h3>\n<p><strong>Port 0 (Pins 32–39):</strong> 8-bit open-drain bidirectional I/O port; also used as AD0–AD7 for external memory</p>\n<p><strong>Port 1 (Pins 1–8):</strong> 8-bit bidirectional I/O port with internal pull-ups; dedicated I/O only</p>\n<p><strong>Port 2 (Pins 21–28):</strong> 8-bit bidirectional I/O port; also used as A8–A15 for external memory</p>\n<p><strong>Port 3 (Pins 10–17):</strong> 8-bit bidirectional I/O port with alternate functions (INT0, INT1, T0, T1, RXD, TXD, WR, RD)</p>\n<p><strong>Special Pins:</strong></p>\n<table>\n<thead><tr>\n<th>Pin</th>\n<th>Name</th>\n<th>Function</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>40</td>\n<td>VCC</td>\n<td>+5V power supply</td>\n</tr>\n<tr>\n<td>20</td>\n<td>GND</td>\n<td>Ground</td>\n</tr>\n<tr>\n<td>9</td>\n<td>RST</td>\n<td>Reset — active HIGH</td>\n</tr>\n<tr>\n<td>18, 19</td>\n<td>XTAL2, XTAL1</td>\n<td>Crystal oscillator connections</td>\n</tr>\n<tr>\n<td>29</td>\n<td>PSEN</td>\n<td>Program Store Enable — reads external program memory</td>\n</tr>\n<tr>\n<td>30</td>\n<td>ALE</td>\n<td>Address Latch Enable — demultiplexes AD0–AD7</td>\n</tr>\n<tr>\n<td>31</td>\n<td>EA</td>\n<td>External Access — LOW to use external ROM only</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 13 — Addressing Modes ⚠️ EXAM CRITICAL — 6 modes to know",
      "html": "<h3>1. Immediate Addressing Mode</h3>\n<ul>\n<li>The <strong>operand is directly given in the instruction</strong> (the data itself follows the opcode)</li>\n<li>Example: <code>MOV A, #55H</code> → loads hex value 55 directly into accumulator</li>\n<li>The <code>#</code> symbol indicates immediate data</li>\n</ul>\n<h3>2. Register Addressing Mode</h3>\n<ul>\n<li>The <strong>operand is in a register</strong> (R0–R7 in the currently active register bank)</li>\n<li>Example: <code>MOV A, R5</code> → copies value from R5 into accumulator</li>\n</ul>\n<h3>3. Direct Addressing Mode</h3>\n<ul>\n<li>The <strong>address of the operand</strong> (not the data itself) is specified in the instruction</li>\n<li>Can access: internal RAM locations 00H–7FH AND special function registers (SFRs)</li>\n<li>Example: <code>MOV A, 30H</code> → copies byte at RAM address 30H into accumulator</li>\n</ul>\n<h3>4. Indirect Addressing Mode</h3>\n<ul>\n<li>The instruction specifies a <strong>register that holds the address</strong> of the operand (address of address)</li>\n<li>Only R0 and R1 can be used as indirect address registers, indicated by <code>@</code> symbol</li>\n<li>Example: <code>MOV A, @R0</code> → if R0 contains 40H, this copies the byte at RAM address 40H into A</li>\n</ul>\n<h3>5. Register Specific Addressing Mode (Inherent/Implicit)</h3>\n<ul>\n<li>The <strong>operand is implied</strong> — no address needs to be specified because the instruction always operates on specific registers</li>\n<li>Example: <code>RLA</code> — rotate accumulator left; <code>NOP</code> — no operation</li>\n</ul>\n<h3>6. Indexed Addressing Mode</h3>\n<ul>\n<li>The <strong>effective address</strong> = base register (DPTR or PC) + offset in accumulator</li>\n<li>Used to access <strong>lookup tables</strong> stored in code memory</li>\n<li>Example: <code>MOVC A, @A+DPTR</code> → adds accumulator value to DPTR to form the effective address, then copies the byte from code memory at that address into A</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 14 — Instruction Set and Programming",
      "html": "<h3>14.1 Data Transfer Instructions</h3>\n<table>\n<thead><tr>\n<th>Instruction</th>\n<th>Operation</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>MOV A, Rn</td>\n<td>Copy register Rn to accumulator</td>\n</tr>\n<tr>\n<td>MOV A, direct</td>\n<td>Copy byte at direct address to accumulator</td>\n</tr>\n<tr>\n<td>MOV A, @Ri</td>\n<td>Copy byte at address in Ri to accumulator (indirect)</td>\n</tr>\n<tr>\n<td>MOV A, #data</td>\n<td>Load immediate data to accumulator</td>\n</tr>\n<tr>\n<td>MOV Rn, A</td>\n<td>Copy accumulator to register Rn</td>\n</tr>\n<tr>\n<td>MOV direct, A</td>\n<td>Copy accumulator to direct address</td>\n</tr>\n<tr>\n<td>MOV DPTR, #data16</td>\n<td>Load 16-bit immediate data to DPTR</td>\n</tr>\n<tr>\n<td>PUSH direct</td>\n<td>Push byte at direct address onto stack; SP increments first</td>\n</tr>\n<tr>\n<td>POP direct</td>\n<td>Pop byte from stack to direct address; SP decrements after</td>\n</tr>\n<tr>\n<td>XCH A, Rn</td>\n<td>Exchange accumulator and register Rn</td>\n</tr>\n<tr>\n<td>MOVX A, @DPTR</td>\n<td>Move byte from external data memory to accumulator</td>\n</tr>\n<tr>\n<td>MOVC A, @A+DPTR</td>\n<td>Move byte from code memory to accumulator (indexed)</td>\n</tr>\n</tbody></table>\n<h3>14.2 Arithmetic Instructions</h3>\n<table>\n<thead><tr>\n<th>Instruction</th>\n<th>Operation</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>ADD A, Rn</td>\n<td>A = A + Rn</td>\n</tr>\n<tr>\n<td>ADD A, #data</td>\n<td>A = A + immediate data</td>\n</tr>\n<tr>\n<td>ADDC A, Rn</td>\n<td>A = A + Rn + Carry flag</td>\n</tr>\n<tr>\n<td>SUBB A, Rn</td>\n<td>A = A − Rn − Borrow (Carry)</td>\n</tr>\n<tr>\n<td>INC A</td>\n<td>A = A + 1</td>\n</tr>\n<tr>\n<td>INC Rn</td>\n<td>Rn = Rn + 1</td>\n</tr>\n<tr>\n<td>DEC A</td>\n<td>A = A − 1</td>\n</tr>\n<tr>\n<td>MUL AB</td>\n<td>A × B; low byte in A, high byte in B</td>\n</tr>\n<tr>\n<td>DIV AB</td>\n<td>A ÷ B; quotient in A, remainder in B</td>\n</tr>\n<tr>\n<td>DA A</td>\n<td>Decimal Adjust Accumulator after BCD addition</td>\n</tr>\n</tbody></table>\n<h3>14.3 Logical Instructions</h3>\n<table>\n<thead><tr>\n<th>Instruction</th>\n<th>Operation</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>ANL A, Rn</td>\n<td>A = A AND Rn</td>\n</tr>\n<tr>\n<td>ORL A, Rn</td>\n<td>A = A OR Rn</td>\n</tr>\n<tr>\n<td>XRL A, Rn</td>\n<td>A = A XOR Rn</td>\n</tr>\n<tr>\n<td>CLR A</td>\n<td>A = 00H (clear accumulator)</td>\n</tr>\n<tr>\n<td>CPL A</td>\n<td>A = complement of A (flip all bits)</td>\n</tr>\n<tr>\n<td>RL A</td>\n<td>Rotate accumulator left (bit 7 → bit 0)</td>\n</tr>\n<tr>\n<td>RR A</td>\n<td>Rotate accumulator right (bit 0 → bit 7)</td>\n</tr>\n<tr>\n<td>RLC A</td>\n<td>Rotate left through carry</td>\n</tr>\n<tr>\n<td>RRC A</td>\n<td>Rotate right through carry</td>\n</tr>\n<tr>\n<td>SWAP A</td>\n<td>Swap upper and lower nibbles of A</td>\n</tr>\n</tbody></table>\n<h3>14.4 Branch / Jump Instructions</h3>\n<table>\n<thead><tr>\n<th>Instruction</th>\n<th>Operation</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>LJMP addr16</td>\n<td>Long jump — unconditional jump to any address in 64KB space</td>\n</tr>\n<tr>\n<td>SJMP rel</td>\n<td>Short jump — relative offset from current PC (−128 to +127)</td>\n</tr>\n<tr>\n<td>AJMP addr11</td>\n<td>Absolute jump — within current 2KB page</td>\n</tr>\n<tr>\n<td>JZ rel</td>\n<td>Jump if accumulator is Zero</td>\n</tr>\n<tr>\n<td>JNZ rel</td>\n<td>Jump if accumulator is Not Zero</td>\n</tr>\n<tr>\n<td>JC rel</td>\n<td>Jump if Carry flag is Set</td>\n</tr>\n<tr>\n<td>JNC rel</td>\n<td>Jump if Carry flag is Not set</td>\n</tr>\n<tr>\n<td>JB bit, rel</td>\n<td>Jump if specified Bit is set</td>\n</tr>\n<tr>\n<td>JNB bit, rel</td>\n<td>Jump if specified Bit is Not set</td>\n</tr>\n<tr>\n<td>DJNZ Rn, rel</td>\n<td>Decrement register and Jump if Not Zero (loop construct)</td>\n</tr>\n<tr>\n<td>CJNE A, #data, rel</td>\n<td>Compare and Jump if Not Equal</td>\n</tr>\n<tr>\n<td>ACALL addr11</td>\n<td>Short call subroutine</td>\n</tr>\n<tr>\n<td>LCALL addr16</td>\n<td>Long call subroutine</td>\n</tr>\n<tr>\n<td>RET</td>\n<td>Return from subroutine</td>\n</tr>\n<tr>\n<td>RETI</td>\n<td>Return from Interrupt</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 15 — Timers and Serial Port",
      "html": "<h3>15.1 Timers (Timer 0 and Timer 1)</h3>\n<p>The 8051 has <strong>two 16-bit timers/counters</strong> (Timer 0 and Timer 1), each made of two 8-bit registers.</p>\n<ul>\n<li>Timer 0: TH0 (high byte) and TL0 (low byte)</li>\n<li>Timer 1: TH1 (high byte) and TL1 (low byte)</li>\n</ul>\n<p><strong>Timer can function as:</strong></p>\n<ol>\n<li><strong>Timer</strong> — counts internal machine cycles (measures time)</li>\n<li><strong>Counter</strong> — counts external events/pulses on T0 (pin 14) or T1 (pin 15)</li>\n</ol>\n<p><strong>TCON Register (Timer Control):</strong> Controls timer start/stop and captures overflow/interrupt flags</p>\n<table>\n<thead><tr>\n<th>Bit</th>\n<th>Name</th>\n<th>Function</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>TF1</td>\n<td>Timer 1 Overflow Flag</td>\n<td>Set when Timer 1 overflows from FFFFh to 0000h</td>\n</tr>\n<tr>\n<td>TR1</td>\n<td>Timer 1 Run</td>\n<td>1 = Timer 1 running; 0 = stopped</td>\n</tr>\n<tr>\n<td>TF0</td>\n<td>Timer 0 Overflow Flag</td>\n<td>Set when Timer 0 overflows from FFFFh to 0000h</td>\n</tr>\n<tr>\n<td>TR0</td>\n<td>Timer 0 Run</td>\n<td>1 = Timer 0 running; 0 = stopped</td>\n</tr>\n<tr>\n<td>IE1</td>\n<td>External Interrupt 1 Flag</td>\n<td>Set when external interrupt 1 detected</td>\n</tr>\n<tr>\n<td>IT1</td>\n<td>External Interrupt 1 Type</td>\n<td>0 = level triggered; 1 = edge triggered</td>\n</tr>\n<tr>\n<td>IE0</td>\n<td>External Interrupt 0 Flag</td>\n<td>Set when external interrupt 0 detected</td>\n</tr>\n<tr>\n<td>IT0</td>\n<td>External Interrupt 0 Type</td>\n<td>0 = level triggered; 1 = edge triggered</td>\n</tr>\n</tbody></table>\n<p><strong>TMOD Register (Timer Mode):</strong> Sets timer/counter mode for both timers</p>\n<ul>\n<li><strong>Mode 0:</strong> 13-bit timer</li>\n<li><strong>Mode 1:</strong> 16-bit timer ← <strong>most commonly used</strong></li>\n<li><strong>Mode 2:</strong> 8-bit auto-reload timer</li>\n<li><strong>Mode 3:</strong> Split timer (Timer 0 splits into two 8-bit timers)</li>\n</ul>\n<h3>15.2 Serial Port (UART)</h3>\n<ul>\n<li>The 8051 has a built-in full-duplex UART (Universal Asynchronous Receiver/Transmitter)</li>\n<li><strong>Pins:</strong> RXD (Pin 10) receives data, TXD (Pin 11) transmits data</li>\n<li><strong>SBUF (Serial Buffer):</strong> 8-bit register for both transmit and receive</li>\n<li><strong>SCON (Serial Control Register):</strong> Configures serial port mode and baud rate</li>\n<li>Baud rate is typically generated using <strong>Timer 1 in Mode 2</strong> (8-bit auto-reload)</li>\n</ul>\n<p><strong>Serial Modes:</strong></p>\n<ul>\n<li><strong>Mode 0:</strong> Shift register mode, fixed baud rate (fosc/12)</li>\n<li><strong>Mode 1:</strong> 8-bit UART, variable baud rate (set by Timer 1)</li>\n<li><strong>Mode 2:</strong> 9-bit UART, fixed baud rate (fosc/32 or fosc/64)</li>\n<li><strong>Mode 3:</strong> 9-bit UART, variable baud rate (set by Timer 1)</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 16 — Interrupt Handling",
      "html": "<h3>16.1 Polling vs Interrupts</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Polling</th>\n<th>Interrupts</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Method</td>\n<td>CPU constantly checks each device in a loop</td>\n<td>Device signals CPU only when it needs service</td>\n</tr>\n<tr>\n<td>CPU usage</td>\n<td>Wasteful — CPU busy even when no service needed</td>\n<td>Efficient — CPU free to do other work</td>\n</tr>\n<tr>\n<td>Response time</td>\n<td>Slower (depends on polling cycle)</td>\n<td>Faster (immediate response)</td>\n</tr>\n<tr>\n<td>Complexity</td>\n<td>Simple to implement</td>\n<td>More complex (requires ISR setup)</td>\n</tr>\n</tbody></table>\n<h3>16.2 The 8051 has 5 Interrupt Sources</h3>\n<table>\n<thead><tr>\n<th>Interrupt</th>\n<th>Source</th>\n<th>Priority</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>IE0</td>\n<td>External Interrupt 0 (INT0, Pin 12)</td>\n<td>Highest (1)</td>\n</tr>\n<tr>\n<td>TF0</td>\n<td>Timer 0 Overflow</td>\n<td>2</td>\n</tr>\n<tr>\n<td>IE1</td>\n<td>External Interrupt 1 (INT1, Pin 13)</td>\n<td>3</td>\n</tr>\n<tr>\n<td>TF1</td>\n<td>Timer 1 Overflow</td>\n<td>4</td>\n</tr>\n<tr>\n<td>RI/TI</td>\n<td>Serial Port (Receive/Transmit)</td>\n<td>Lowest (5)</td>\n</tr>\n</tbody></table>\n<p><strong>IE Register (Interrupt Enable):</strong></p>\n<ul>\n<li><strong>EA (bit 7):</strong> Global enable — must be 1 to enable any interrupt</li>\n<li><strong>ES:</strong> Serial port interrupt enable</li>\n<li><strong>ET1:</strong> Timer 1 interrupt enable</li>\n<li><strong>EX1:</strong> External Interrupt 1 enable</li>\n<li><strong>ET0:</strong> Timer 0 interrupt enable</li>\n<li><strong>EX0:</strong> External Interrupt 0 enable</li>\n</ul>\n<p><strong>Interrupt Service Routine (ISR):</strong></p>\n<p>When an interrupt occurs:</p>\n<ol>\n<li>Current execution stops (PC is saved on stack)</li>\n<li>CPU jumps to the interrupt vector address</li>\n<li>ISR executes</li>\n<li><code>RETI</code> instruction executed → PC restored from stack → normal execution resumes</li>\n</ol>\n<p><strong>Interrupt Vector Addresses:</strong></p>\n<table>\n<thead><tr>\n<th>Interrupt</th>\n<th>Vector Address</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>External 0</td>\n<td>0003H</td>\n</tr>\n<tr>\n<td>Timer 0</td>\n<td>000BH</td>\n</tr>\n<tr>\n<td>External 1</td>\n<td>0013H</td>\n</tr>\n<tr>\n<td>Timer 1</td>\n<td>001BH</td>\n</tr>\n<tr>\n<td>Serial</td>\n<td>0023H</td>\n</tr>\n</tbody></table>\n<hr>\n<p># ═══════════════════════════════════</p>"
    }
  ],
  "st2": [
    {
      "title": "Topic 17 — What is IoT?",
      "html": "<h3>17.1 Definition</h3>\n<ul>\n<li><strong>IoT</strong> stands for <strong>Internet of Things</strong></li>\n<li>Refers to the interconnectedness of physical devices (appliances, vehicles) that are embedded with software, sensors, and connectivity which enables them to connect and exchange data</li>\n<li><strong>\"IoT is a network of interconnected computing devices embedded in everyday objects, enabling them to send and receive data\"</strong></li>\n</ul>\n<h3>17.2 \"Thing\" in IoT</h3>\n<p>A \"Thing\" in the context of IoT is an entity or physical object that has:</p>\n<ul>\n<li>A <strong>unique identifier</strong></li>\n<li>An <strong>embedded system</strong></li>\n<li>The ability to <strong>transfer data over the network</strong></li>\n</ul>\n<p>These devices collect useful data autonomously and flow the data between other devices.</p>\n<hr>"
    },
    {
      "title": "Topic 18 — Building Blocks of IoT",
      "html": "<p><strong>Four core building blocks:</strong></p>\n<h3>1. Sensors (Things)</h3>\n<ul>\n<li>The front end of IoT devices</li>\n<li>Collect data from surroundings (sensors) OR give out data to surroundings (actuators)</li>\n<li>Must have a <strong>unique IP address</strong> for identification</li>\n<li>Must be <strong>active</strong> — collect real-time data</li>\n<li>Can be autonomous OR user-controlled</li>\n<li><strong>Examples:</strong> gas sensor, water quality sensor, moisture sensor, temperature sensor</li>\n</ul>\n<h3>2. Processors (Brain of IoT)</h3>\n<ul>\n<li>Process data captured by sensors to extract valuable information</li>\n<li>Work on a real-time basis; controlled by applications</li>\n<li>Responsible for <strong>data encryption/decryption</strong> (security)</li>\n<li>Embedded hardware devices, microcontrollers provide processing</li>\n</ul>\n<h3>3. Gateways</h3>\n<ul>\n<li>Route processed data to proper locations for utilization</li>\n<li>Provide <strong>network connectivity</strong> (LAN, WAN, PAN)</li>\n<li>Enable device-to-device or device-to-cloud communication</li>\n<li>Can be hardware device or software program</li>\n<li><strong>Act as a central hub</strong> connecting IoT devices to the cloud</li>\n</ul>\n<h3>4. Applications</h3>\n<ul>\n<li>Form the other end of an IoT system</li>\n<li>Cloud-based applications give effective meaning to collected data</li>\n<li>Controlled by users; delivery point of particular services</li>\n<li><strong>Examples:</strong> home automation apps, security systems, industrial control hubs</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 19 — Characteristics of IoT ⚠️ EXAM CRITICAL",
      "html": "<table>\n<thead><tr>\n<th>#</th>\n<th>Characteristic</th>\n<th>Detail</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><strong>Connectivity</strong></td>\n<td>Anyone, anywhere, anytime can connect — guaranteed at all times</td>\n</tr>\n<tr>\n<td>2</td>\n<td><strong>Intelligence and Identity</strong></td>\n<td>Extraction of knowledge from generated data; each IoT device has a unique identity</td>\n</tr>\n<tr>\n<td>3</td>\n<td><strong>Scalability</strong></td>\n<td>Number of elements connected to IoT zone is increasing — must scale</td>\n</tr>\n<tr>\n<td>4</td>\n<td><strong>Dynamic and Self-Adapting</strong></td>\n<td>IoT devices should dynamically adapt to changing contexts</td>\n</tr>\n<tr>\n<td>5</td>\n<td><strong>Architecture</strong></td>\n<td>IoT is not homogeneous — hybrid architecture supporting multiple protocols</td>\n</tr>\n<tr>\n<td>6</td>\n<td><strong>Safety</strong></td>\n<td>Safety of personal data; physical safety of the users</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 20 — Application Areas of IoT ⚠️ EXAM CRITICAL",
      "html": "<table>\n<thead><tr>\n<th>Domain</th>\n<th>Examples</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Smart Home</td>\n<td>Lighting control, security systems, smart thermostats, energy management</td>\n</tr>\n<tr>\n<td>Wearables</td>\n<td>Smart watches, fitness trackers, health monitors</td>\n</tr>\n<tr>\n<td>Smart Cities</td>\n<td>Traffic management, waste management, smart grids, environmental monitoring</td>\n</tr>\n<tr>\n<td>Healthcare</td>\n<td>Remote patient monitoring, electronic health records, smart medical devices</td>\n</tr>\n<tr>\n<td>Agriculture</td>\n<td>Soil monitoring, smart irrigation, crop health monitoring</td>\n</tr>\n<tr>\n<td>Industrial IoT (IIoT)</td>\n<td>Predictive maintenance, supply chain monitoring, factory automation</td>\n</tr>\n<tr>\n<td>Smart Retail</td>\n<td>Smart shelves, cashless checkout, inventory management</td>\n</tr>\n<tr>\n<td>Connected Cars</td>\n<td>V2V communication, GPS navigation, remote diagnostics</td>\n</tr>\n<tr>\n<td>Energy Management</td>\n<td>Smart meters, grid optimization, energy consumption monitoring</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 21 — Industrial IoT (IIoT)",
      "html": "<ul>\n<li><strong>IIoT</strong> is the application of IoT to industrial settings</li>\n<li>Key features: machine monitoring, predictive maintenance, supply chain optimization</li>\n<li>IIoT improves operational efficiency and reduces downtime</li>\n<li>Examples: smart factories (Industry 4.0), oil &amp; gas monitoring, manufacturing automation</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 22 — Real-Time Analytics & Fog Computing",
      "html": "<h3>Real-Time Analytics in IoT</h3>\n<ul>\n<li>IoT generates massive amounts of data continuously</li>\n<li>Real-time analytics processes this data as it arrives (stream processing)</li>\n<li>Enables immediate decisions and actions based on sensor data</li>\n<li>Examples: anomaly detection in industrial sensors, real-time traffic management</li>\n</ul>\n<h3>Fog Computing (Edge Computing)</h3>\n<ul>\n<li>Processing data <strong>closer to the source</strong> (at the network edge) rather than in the cloud</li>\n<li>Reduces <strong>latency</strong> — faster response times</li>\n<li>Reduces <strong>bandwidth</strong> — less data sent to cloud</li>\n<li>Improves <strong>privacy</strong> — sensitive data processed locally</li>\n<li>Architecture: IoT Devices → Fog Nodes (Edge) → Cloud</li>\n</ul>\n<p><strong>Difference: Cloud vs Fog</strong></p>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Cloud Computing</th>\n<th>Fog Computing</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Location</td>\n<td>Centralized (remote data center)</td>\n<td>Distributed (near the devices)</td>\n</tr>\n<tr>\n<td>Latency</td>\n<td>High</td>\n<td>Low</td>\n</tr>\n<tr>\n<td>Bandwidth usage</td>\n<td>High</td>\n<td>Low</td>\n</tr>\n<tr>\n<td>Best for</td>\n<td>Big data storage, deep analytics</td>\n<td>Real-time, latency-sensitive applications</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 23 — Layered Architecture of IoT",
      "html": "<h3>Four-Layer Architecture</h3>\n<pre><code class=\"language-\">Layer 4: Application Layer\n         ↕\nLayer 3: Processing Layer (Middleware)\n         ↕\nLayer 2: Network Layer (Transport)\n         ↕\nLayer 1: Perception Layer (Sensing)\n</code></pre>\n<p><strong>Layer 1 — Perception/Sensing Layer:</strong></p>\n<ul>\n<li>Physical devices, sensors, actuators</li>\n<li>Collects raw data from the environment</li>\n</ul>\n<p><strong>Layer 2 — Network/Transport Layer:</strong></p>\n<ul>\n<li>Transmits sensor data to processing layer</li>\n<li>Uses: WiFi, Bluetooth, ZigBee, LTE, 5G, Ethernet</li>\n</ul>\n<p><strong>Layer 3 — Processing/Middleware Layer:</strong></p>\n<ul>\n<li>Stores, processes, and analyzes data</li>\n<li>Uses: databases, cloud computing, big data analytics</li>\n</ul>\n<p><strong>Layer 4 — Application Layer:</strong></p>\n<ul>\n<li>Delivers application-specific services to the end user</li>\n<li>Smart home app, healthcare app, smart city dashboard</li>\n</ul>\n<h3>SOA-Based Architecture (Service Oriented Architecture)</h3>\n<ul>\n<li>IoT built as a collection of services</li>\n<li>Each service is independent and can be reused</li>\n<li>Services communicate through standard APIs</li>\n<li><strong>Benefits:</strong> Flexibility, scalability, interoperability</li>\n</ul>\n<h3>API-Oriented Architecture</h3>\n<ul>\n<li>Applications interact with IoT data through <strong>APIs (Application Programming Interfaces)</strong></li>\n<li>REST APIs are most common for IoT applications</li>\n<li>APIs abstract the complexity of underlying hardware</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 24 — IoT Challenges ⚠️ EXAM CRITICAL",
      "html": "<table>\n<thead><tr>\n<th>Challenge</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Security</strong></td>\n<td>Vulnerable devices; data interception; authentication issues</td>\n</tr>\n<tr>\n<td><strong>Privacy</strong></td>\n<td>Personal data collection; consent; data ownership</td>\n</tr>\n<tr>\n<td><strong>Connectivity</strong></td>\n<td>Reliable communication across heterogeneous networks</td>\n</tr>\n<tr>\n<td><strong>Power Consumption</strong></td>\n<td>Many IoT devices are battery-operated; power efficiency critical</td>\n</tr>\n<tr>\n<td><strong>Interoperability</strong></td>\n<td>Different devices from different manufacturers must communicate</td>\n</tr>\n<tr>\n<td><strong>Scalability</strong></td>\n<td>Managing millions/billions of connected devices</td>\n</tr>\n<tr>\n<td><strong>Data Management</strong></td>\n<td>Handling massive volumes of data (Big Data)</td>\n</tr>\n<tr>\n<td><strong>Standards</strong></td>\n<td>Lack of universal standards across IoT ecosystem</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 25 — IoT Communication Protocol Comparison",
      "html": "<h3>Application-Layer Protocols (How data is formatted and routed)</h3>\n<table>\n<thead><tr>\n<th>Protocol</th>\n<th>Type</th>\n<th>Key Features</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>MQTT</strong></td>\n<td>Publish/Subscribe</td>\n<td>Lightweight, low bandwidth, broker-based; ideal for IoT sensors; publish to topics</td>\n</tr>\n<tr>\n<td><strong>HTTP</strong></td>\n<td>Request/Response</td>\n<td>Web standard; unidirectional; high power; NOT optimized for IoT</td>\n</tr>\n<tr>\n<td><strong>CoAP</strong></td>\n<td>Request/Response</td>\n<td>Like HTTP but for constrained networks; UDP-based; REST model; GET/POST/PUT/DELETE</td>\n</tr>\n<tr>\n<td><strong>DDS</strong></td>\n<td>Publish/Subscribe</td>\n<td>No broker (Global Data Space); nodes dynamically join/leave</td>\n</tr>\n<tr>\n<td><strong>WebSocket</strong></td>\n<td>Bi-directional</td>\n<td>TCP connection between browser and server; too heavy for IoT</td>\n</tr>\n<tr>\n<td><strong>AMQP</strong></td>\n<td>Pub/Sub + Request/Response</td>\n<td>TCP-based (guaranteed delivery); originated in banking; three QoS levels</td>\n</tr>\n<tr>\n<td><strong>XMPP</strong></td>\n<td>Peer-to-peer</td>\n<td>XML-based; open-source; uses Jabber ID format (jabberID@domain.com)</td>\n</tr>\n<tr>\n<td><strong>OPC UA</strong></td>\n<td>Transport-agnostic</td>\n<td>Industrial communication; interoperability; supports both pub/sub and request/response</td>\n</tr>\n</tbody></table>\n<h3>Network/Connectivity Protocols (Physical communication)</h3>\n<table>\n<thead><tr>\n<th>Protocol</th>\n<th>Range</th>\n<th>Power</th>\n<th>Data Rate</th>\n<th>Best For</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Bluetooth</td>\n<td>~10m</td>\n<td>Low</td>\n<td>720 kbps–3 Mbps</td>\n<td>Wearables, short range</td>\n</tr>\n<tr>\n<td>BLE (Bluetooth Low Energy)</td>\n<td>~10m</td>\n<td>Very Low</td>\n<td>Lower than BT</td>\n<td>Smartwatches, fitness trackers, beacons</td>\n</tr>\n<tr>\n<td>ZigBee</td>\n<td>10–100m</td>\n<td>Very Low</td>\n<td>250 kbps max</td>\n<td>Smart home, sensors, M2M</td>\n</tr>\n<tr>\n<td>Wi-Fi</td>\n<td>~50m indoor</td>\n<td>Medium</td>\n<td>High</td>\n<td>High-bandwidth IoT</td>\n</tr>\n<tr>\n<td>Z-Wave</td>\n<td>~30m</td>\n<td>Low</td>\n<td>100 kbps</td>\n<td>Home automation</td>\n</tr>\n<tr>\n<td>Cellular (4G/5G)</td>\n<td>Wide area</td>\n<td>High</td>\n<td>High</td>\n<td>Connected cars, mobile IoT</td>\n</tr>\n<tr>\n<td>Sigfox</td>\n<td>Wide area</td>\n<td>Very Low</td>\n<td>Very Low (100 bps)</td>\n<td>LPWAN; simple sensors</td>\n</tr>\n<tr>\n<td>LoRaWAN</td>\n<td>Wide area</td>\n<td>Very Low</td>\n<td>Low</td>\n<td>Long-range, low-power sensors</td>\n</tr>\n<tr>\n<td>NFC</td>\n<td>&lt;10cm</td>\n<td>Very Low</td>\n<td>Low</td>\n<td>Contactless payments, device pairing</td>\n</tr>\n<tr>\n<td>RFID</td>\n<td>Varies</td>\n<td>Low</td>\n<td>Low</td>\n<td>Asset tracking, identification</td>\n</tr>\n<tr>\n<td>Ethernet</td>\n<td>Wired</td>\n<td>Medium</td>\n<td>Very High</td>\n<td>Industrial IoT, fixed deployments</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 26 — Cloud Computing and Big Data in IoT",
      "html": "<h3>Cloud Computing in IoT</h3>\n<ul>\n<li>Cloud provides <strong>storage, processing, and analytics</strong> for IoT data</li>\n<li><strong>Service Models:</strong></li>\n<li><strong>IaaS (Infrastructure as a Service):</strong> Virtual machines, storage (e.g., AWS EC2)</li>\n<li><strong>PaaS (Platform as a Service):</strong> Development platforms (e.g., AWS IoT Core, Azure IoT Hub)</li>\n<li><strong>SaaS (Software as a Service):</strong> Complete applications (e.g., Salesforce IoT)</li>\n<li><strong>Deployment Models:</strong> Public, Private, Hybrid, Community cloud</li>\n</ul>\n<h3>Big Data in IoT</h3>\n<ul>\n<li>IoT generates massive data volumes (velocity, variety, volume — the 3 Vs)</li>\n<li><strong>Big Data Analytics:</strong> Finding patterns in huge datasets</li>\n<li><strong>Challenges:</strong> Storage, processing speed, data quality, privacy</li>\n<li>Tools used: Hadoop, Spark, Kafka for IoT data pipelines</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 27 — Threats and Vulnerabilities in IoT Systems",
      "html": "<h3>Network and Transport Layer Challenges</h3>\n<ul>\n<li><strong>Lack of encryption</strong> in many IoT communications</li>\n<li><strong>Protocol vulnerabilities</strong> — many IoT protocols don't support strong authentication</li>\n<li><strong>Man-in-the-middle attacks</strong> — intercepting communications</li>\n<li><strong>Replay attacks</strong> — capturing and retransmitting valid communications</li>\n<li><strong>DNS attacks</strong> — corrupting domain name resolution</li>\n</ul>\n<p><strong>Transport Layer specific:</strong></p>\n<ul>\n<li><strong>TCP vulnerabilities:</strong> Session hijacking, SYN flooding</li>\n<li><strong>UDP vulnerabilities:</strong> Easier to spoof (no connection handshake)</li>\n</ul>\n<h3>IoT-Specific Threats</h3>\n<ul>\n<li><strong>Resource constraints</strong> — limited CPU/memory makes security difficult</li>\n<li><strong>Physical access</strong> — IoT devices often deployed in accessible locations</li>\n<li><strong>Insecure update mechanisms</strong> — firmware updates without verification</li>\n<li><strong>Default credentials</strong> — many devices shipped with default passwords never changed</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 28 — IoT Gateways and Security",
      "html": "<h3>IoT Gateway Functions</h3>\n<ul>\n<li>Establishes communication bridge between devices and cloud</li>\n<li>Provides additional security (encryption, authentication)</li>\n<li>Performs data aggregation and preprocessing</li>\n<li>Provides local storage as cache/buffer</li>\n<li>Performs data computing at edge level</li>\n<li>Verifies and translates protocols</li>\n<li>Device diagnostics and management</li>\n</ul>\n<h3>How IoT Gateway Works</h3>\n<ol>\n<li>Receives data from sensor network</li>\n<li>Performs preprocessing, filtering and cleaning</li>\n<li>Transports into standard protocols for communication</li>\n<li>Sends data to cloud</li>\n</ol>\n<h3>IoT Gateway Security Best Practices</h3>\n<ul>\n<li>Use only authenticated IoT gateways</li>\n<li>Perform security assessments before implementation</li>\n<li>Keep gateway software updated</li>\n<li>Regularly review gateway access</li>\n<li>Include gateways in security audits</li>\n<li>Use a separate network for IoT gateways and devices</li>\n<li>Integrated security functions: tamper detection, encryption, hardware random number generation</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 29 — IoT Routing Attacks ⚠️ EXAM CRITICAL",
      "html": "<h3>Types of Routing Attacks</h3>\n<table>\n<thead><tr>\n<th>Attack</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Sinkhole Attack</strong></td>\n<td>Malicious node attracts network traffic by propagating fake routing updates; reroutes traffic through malicious node</td>\n</tr>\n<tr>\n<td><strong>Selective Forwarding Attack</strong></td>\n<td>Attacker selectively forwards or drops packets; disrupts communication; causes data loss</td>\n</tr>\n<tr>\n<td><strong>Blackhole Attack</strong></td>\n<td>Attacker pretends to have shortest path to destination; captures packets, then drops or forwards them selectively</td>\n</tr>\n<tr>\n<td><strong>Sybil Attack</strong></td>\n<td>Malicious attacker creates multiple fake identities/nodes; gains control and manipulates the network; causes routing loops</td>\n</tr>\n<tr>\n<td><strong>Wormhole Attack</strong></td>\n<td>Out-of-band connection between two nodes using wired or wireless links; forwards packets faster than normal paths; combined with sinkhole = serious threat</td>\n</tr>\n<tr>\n<td><strong>DDoS/DoS Attack</strong></td>\n<td>Floods network with traffic to deny service to legitimate users</td>\n</tr>\n</tbody></table>\n<h3>Detection Techniques</h3>\n<ul>\n<li><strong>Intrusion Detection Systems (IDS)</strong></li>\n<li><strong>Hybrid IDS</strong></li>\n<li><strong>One-class SVM (Support Vector Machine)</strong></li>\n</ul>\n<h3>IoT uses RPL (Routing Protocol for Low-Power and Lossy Networks)</h3>\n<ul>\n<li>Common routing protocol in IoT networks</li>\n<li>Resource-constrained devices rely on reliable communication through RPL</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 30 — Authorization Mechanisms",
      "html": "<h3>OAuth 2.0</h3>\n<ul>\n<li><strong>Open Authorization</strong> protocol</li>\n<li>Allows third-party applications to access user data <strong>without unencrypted credentials</strong></li>\n<li>Example: A healthcare app accessing Facebook to post status — user logs into Facebook, app gets authorized token, user can revoke anytime</li>\n</ul>\n<p><strong>OAuth 2.0 Roles:</strong></p>\n<table>\n<thead><tr>\n<th>Role</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Resource Owner</strong></td>\n<td>The entity (usually end user) that owns the protected resource</td>\n</tr>\n<tr>\n<td><strong>Resource Server (Service Provider, SP)</strong></td>\n<td>Server hosting the protected resources; accepts access tokens</td>\n</tr>\n<tr>\n<td><strong>Client (Service Consumer, SC)</strong></td>\n<td>Application making requests on behalf of the resource owner</td>\n</tr>\n<tr>\n<td><strong>Authorization Server</strong></td>\n<td>Issues access tokens to the client after authenticating the resource owner</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 31 — Lightweight Cryptography (LWC)",
      "html": "<h3>Why LWC?</h3>\n<ul>\n<li>Conventional cryptographic algorithms cannot run efficiently on <strong>resource-constrained IoT devices</strong> (limited CPU, RAM, battery)</li>\n<li>LWC = cryptographic algorithms designed for constrained environments</li>\n</ul>\n<h3>Two Categories of LWC Algorithms ⚠️ EXAM CRITICAL</h3>\n<p><strong>1. Symmetric Key LWC Algorithms:</strong></p>\n<ul>\n<li>Same key for encryption AND decryption (secret key / private key)</li>\n<li>Provides: confidentiality, integrity, authentication</li>\n<li>Downside: Key distribution problem</li>\n</ul>\n<p><strong>2. Asymmetric LWC Algorithms:</strong></p>\n<ul>\n<li>Different keys: <strong>public key</strong> for encryption, <strong>private key</strong> for decryption</li>\n<li>Provides: confidentiality, integrity, authentication (digital signature), non-repudiation</li>\n<li>Downside: Large keys (at least 1024 bits for RSA)</li>\n</ul>\n<p><strong>Any LWC algorithm must satisfy 4 conditions:</strong></p>\n<ol>\n<li><strong>Confidentiality</strong></li>\n<li><strong>Integrity</strong></li>\n<li><strong>Authentication</strong></li>\n<li><strong>Non-repudiation</strong></li>\n</ol>\n<h3>Symmetric Key LWC — Types</h3>\n<p><strong>Block Cipher vs Stream Cipher:</strong></p>\n<table>\n<thead><tr>\n<th>Type</th>\n<th>How it works</th>\n<th>Operations</th>\n<th>Security</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Block Cipher</td>\n<td>Processes plaintext as fixed-size blocks</td>\n<td>Confusion + Diffusion</td>\n<td>More secure</td>\n</tr>\n<tr>\n<td>Stream Cipher</td>\n<td>Takes plaintext as bits, processes bit by bit</td>\n<td>Only Confusion</td>\n<td>Less secure</td>\n</tr>\n<tr>\n<td>Hash Function</td>\n<td>Variable length input → fixed size output</td>\n<td>One-way function</td>\n<td>Used for integrity</td>\n</tr>\n</tbody></table>\n<p><strong>Block Cipher Structures:</strong></p>\n<table>\n<thead><tr>\n<th>Structure</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>SPN (Substitution-Permutation Network)</td>\n<td>Uses S-boxes and permutation tables</td>\n</tr>\n<tr>\n<td>FN (Feistel Network)</td>\n<td>Divides text into equal halves; applies diffusion; swaps halves each round</td>\n</tr>\n<tr>\n<td>GFN (General Feistel Network)</td>\n<td>Divides plaintext into sub-blocks; applies cyclic shift</td>\n</tr>\n<tr>\n<td>ARX (Add-Rotate-XOR)</td>\n<td>Uses addition, rotation, and XOR operations</td>\n</tr>\n<tr>\n<td>NLFSR (Non-Linear Feedback Shift Register)</td>\n<td>Basic building blocks of a stream cipher</td>\n</tr>\n<tr>\n<td>Hybrid</td>\n<td>Combination of the above based on requirements</td>\n</tr>\n</tbody></table>\n<h3>Notable LWC Algorithms ⚠️ MCQ CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Algorithm</th>\n<th>Type</th>\n<th>Key Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>TEA (Tiny Encryption Algorithm)</strong></td>\n<td>Block cipher, FN-based</td>\n<td>128-bit key; 1350B ROM, 13B RAM; uses addition, XOR, shifts; ideal for wireless sensors; Family: XTEA, XXTEA, Block TEA</td>\n</tr>\n<tr>\n<td><strong>SEA (Scalable Encryption Algorithm)</strong></td>\n<td>Block cipher, FN-based</td>\n<td>Assembly language implementation; on-the-fly key derivation; 2800B ROM, 24B RAM</td>\n</tr>\n<tr>\n<td><strong>PRESENT</strong></td>\n<td>Block cipher, SPN-based</td>\n<td>Ultra-lightweight; 64-bit blocks; 80 or 128-bit keys; extremely compact in hardware; for low-power, high efficiency</td>\n</tr>\n<tr>\n<td><strong>HIGHT</strong></td>\n<td>Block cipher, GFN-based</td>\n<td>64-bit block size, 128-bit keys; low-resource hardware; uses XOR, addition, bitwise rotation</td>\n</tr>\n</tbody></table>\n<h3>Asymmetric LWC — ECC (Elliptic Curve Cryptography)</h3>\n<ul>\n<li>Provides <strong>higher security</strong> and <strong>better performance</strong> than RSA and Diffie-Hellman</li>\n<li><strong>Most interesting public-key cryptographic family for embedded environments</strong></li>\n<li>Can reach the same security level as RSA with <strong>much shorter keys</strong></li>\n<li>Uses computationally lighter operations (addition and multiplication) rather than exponentiation</li>\n</ul>\n<hr>\n<p># UNIT IV — Arduino and Programming</p>\n<hr>"
    },
    {
      "title": "Topic 32 — Introduction to Arduino",
      "html": "<h3>32.1 What is Arduino?</h3>\n<ul>\n<li>Arduino is an open-source electronics platform based on easy-to-use hardware and software</li>\n<li>Consists of a <strong>microcontroller board</strong> and a <strong>development environment (Arduino IDE)</strong></li>\n<li>Accessible, low-cost platform for building custom embedded/IoT projects</li>\n<li>Can connect to the internet (via Wi-Fi modules) and interact with various sensors</li>\n</ul>\n<h3>32.2 Architecture of Arduino (Arduino Uno)</h3>\n<ul>\n<li><strong>Microcontroller:</strong> ATmega328P (8-bit AVR RISC architecture)</li>\n<li><strong>Clock Speed:</strong> 16 MHz</li>\n<li><strong>Flash Memory:</strong> 32 KB (0.5 KB used by bootloader)</li>\n<li><strong>SRAM:</strong> 2 KB</li>\n<li><strong>EEPROM:</strong> 1 KB</li>\n<li><strong>Operating Voltage:</strong> 5V</li>\n<li><strong>Input Voltage:</strong> 7–12V recommended</li>\n</ul>\n<h3>32.3 Pin Diagram of Arduino Uno</h3>\n<ul>\n<li><strong>Digital Pins (0–13):</strong> 14 digital I/O pins; pins 0 (RX) and 1 (TX) used for serial communication</li>\n<li><strong>PWM Pins:</strong> Pins 3, 5, 6, 9, 10, 11 (marked with ~) — support analog output via PWM</li>\n<li><strong>Analog Input Pins (A0–A5):</strong> 6 analog input pins (10-bit ADC — 0 to 1023)</li>\n<li><strong>Power Pins:</strong> 3.3V, 5V, GND, Vin</li>\n<li><strong>Special Pins:</strong> AREF (analog reference), SDA/SCL (I2C), ICSP header (SPI programming)</li>\n</ul>\n<h3>32.4 Types of Arduino</h3>\n<table>\n<thead><tr>\n<th>Board</th>\n<th>Key Features</th>\n<th>Best For</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Arduino Uno</td>\n<td>Standard board, ATmega328P, 14 digital pins</td>\n<td>Beginners, general use</td>\n</tr>\n<tr>\n<td>Arduino Mega</td>\n<td>54 digital pins, 16 analog, ATmega2560</td>\n<td>Complex projects needing more I/O</td>\n</tr>\n<tr>\n<td>Arduino Nano</td>\n<td>Compact form factor, same MCU as Uno</td>\n<td>Space-constrained projects</td>\n</tr>\n<tr>\n<td>Arduino Mini</td>\n<td>Smallest, 14 digital pins</td>\n<td>Very small projects</td>\n</tr>\n<tr>\n<td>Arduino Pro Mini</td>\n<td>Low-power, compact, ATmega328</td>\n<td>Wearables, battery-powered</td>\n</tr>\n<tr>\n<td>Arduino Leonardo</td>\n<td>ATmega32u4, built-in USB</td>\n<td>HID (keyboard/mouse emulation)</td>\n</tr>\n</tbody></table>\n<h3>32.5 Communication Devices on Arduino</h3>\n<ul>\n<li><strong>Serial (UART):</strong> pins 0 (RX) and 1 (TX)</li>\n<li><strong>I2C:</strong> SDA (pin A4) and SCL (pin A5)</li>\n<li><strong>SPI:</strong> pins 10 (SS), 11 (MOSI), 12 (MISO), 13 (SCK)</li>\n</ul>\n<hr>"
    },
    {
      "title": "Topic 33 — Arduino Programming Structure",
      "html": "<h3>33.1 Programming Environment: Arduino IDE</h3>\n<ul>\n<li>Software used to write and upload code to Arduino boards</li>\n<li>Programs are called <strong>\"sketches\"</strong> and have the <code>.ino</code> extension</li>\n<li>Based on C/C++ language</li>\n<li>Includes built-in libraries for common functions</li>\n</ul>\n<h3>33.2 Bare Minimum Code ⚠️ EXAM CRITICAL</h3>\n<p>Every Arduino sketch must have at minimum two functions:</p>\n<pre><code class=\"language-cpp\">void setup() {\n    // Called ONCE when the board powers up or resets\n    // Use to: initialize variables, pin modes, start libraries\n    // Example: set a pin as output\n    pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n    // Called REPEATEDLY after setup() completes\n    // This is where the main program logic runs continuously\n    // Example: blink an LED\n    digitalWrite(13, HIGH);   // turn LED on\n    delay(1000);               // wait 1 second\n    digitalWrite(13, LOW);    // turn LED off\n    delay(1000);               // wait 1 second\n}\n</code></pre>\n<ul>\n<li><strong>setup():</strong> Runs ONCE after each power-up or reset → initialize everything</li>\n<li><strong>loop():</strong> Runs CONTINUOUSLY forever → the main program</li>\n</ul>\n<h3>33.3 Variables and Data Types ⚠️ EXAM CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Type</th>\n<th>Description</th>\n<th>Range</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><code>int</code></td>\n<td>Whole numbers</td>\n<td>−32,768 to 32,767</td>\n</tr>\n<tr>\n<td><code>long</code></td>\n<td>Larger integers</td>\n<td>−2,147,483,648 to 2,147,483,647</td>\n</tr>\n<tr>\n<td><code>short</code></td>\n<td>Small integer</td>\n<td>−32,768 to 32,767</td>\n</tr>\n<tr>\n<td><code>byte</code></td>\n<td>8-bit unsigned integer</td>\n<td>0 to 255</td>\n</tr>\n<tr>\n<td><code>float</code></td>\n<td>Decimal (single precision)</td>\n<td>~6–7 decimal places</td>\n</tr>\n<tr>\n<td><code>double</code></td>\n<td>Decimal (double precision)</td>\n<td>~15 decimal places</td>\n</tr>\n<tr>\n<td><code>char</code></td>\n<td>Single character</td>\n<td>1 byte of memory</td>\n</tr>\n<tr>\n<td><code>bool</code></td>\n<td>Boolean</td>\n<td><code>true</code> or <code>false</code></td>\n</tr>\n<tr>\n<td><code>String</code></td>\n<td>Text string class</td>\n<td>Dynamically allocated</td>\n</tr>\n<tr>\n<td>Arrays</td>\n<td>Multiple values same type</td>\n<td><code>int numbers[5];</code></td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 34 — Serial Monitor",
      "html": "<h3>34.1 What is Serial Monitor?</h3>\n<ul>\n<li>A tool in Arduino IDE that allows communication between the Arduino and computer</li>\n<li>Used for debugging, monitoring data, and sending commands</li>\n<li>Displays data sent from Arduino to computer via serial port</li>\n</ul>\n<h3>34.2 Common Serial Commands ⚠️ EXAM CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Command</th>\n<th>Function</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><code>Serial.begin(baudRate)</code></td>\n<td>Initializes serial communication at specified baud rate (e.g., 9600)</td>\n</tr>\n<tr>\n<td><code>Serial.print(data)</code></td>\n<td>Sends data to Serial Monitor WITHOUT a newline</td>\n</tr>\n<tr>\n<td><code>Serial.println(data)</code></td>\n<td>Sends data followed by a NEWLINE character</td>\n</tr>\n<tr>\n<td><code>Serial.read()</code></td>\n<td>Reads incoming data from the serial buffer</td>\n</tr>\n<tr>\n<td><code>Serial.available()</code></td>\n<td>Checks how many bytes are available to read from serial buffer</td>\n</tr>\n</tbody></table>\n<p><strong>Common baud rates:</strong> 9600, 115200 (must match between sketch and Serial Monitor)</p>\n<hr>"
    },
    {
      "title": "Topic 35 — Types of Sensors and Actuators",
      "html": "<h3>35.1 Sensors Used with Arduino ⚠️ EXAM CRITICAL</h3>\n<table>\n<thead><tr>\n<th>Category</th>\n<th>Sensor</th>\n<th>Description</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Temperature</strong></td>\n<td>DHT11/DHT22</td>\n<td>Measures temperature AND humidity</td>\n</tr>\n<tr>\n<td><strong>Temperature</strong></td>\n<td>LM35</td>\n<td>Analog sensor; voltage output proportional to temperature</td>\n</tr>\n<tr>\n<td><strong>Light</strong></td>\n<td>Photoresistor (LDR)</td>\n<td>Changes resistance based on light levels</td>\n</tr>\n<tr>\n<td><strong>Light</strong></td>\n<td>TSL2561</td>\n<td>Digital light sensor; precise intensity readings</td>\n</tr>\n<tr>\n<td><strong>Distance</strong></td>\n<td>Ultrasonic (HC-SR04)</td>\n<td>Measures distance using ultrasonic waves; obstacle detection</td>\n</tr>\n<tr>\n<td><strong>Distance</strong></td>\n<td>IR Sensor</td>\n<td>Measures distance using infrared light; robotics</td>\n</tr>\n<tr>\n<td><strong>Motion</strong></td>\n<td>PIR Sensor</td>\n<td>Detects motion based on changes in infrared radiation; security systems</td>\n</tr>\n<tr>\n<td><strong>Motion</strong></td>\n<td>Accelerometer (ADXL345)</td>\n<td>Measures acceleration and tilt; robotics, mobile</td>\n</tr>\n<tr>\n<td><strong>Pressure</strong></td>\n<td>BMP180/BMP280</td>\n<td>Measures atmospheric pressure; altitude detection</td>\n</tr>\n<tr>\n<td><strong>Gas</strong></td>\n<td>MQ Series (MQ-2, MQ-7)</td>\n<td>Detects various gases (smoke, CO); air quality monitoring</td>\n</tr>\n<tr>\n<td><strong>Gas</strong></td>\n<td>CCS811</td>\n<td>Measures CO2 and VOCs</td>\n</tr>\n<tr>\n<td><strong>Humidity</strong></td>\n<td>DHT11/DHT22</td>\n<td>Also measures humidity</td>\n</tr>\n<tr>\n<td><strong>Soil Moisture</strong></td>\n<td>Soil Moisture Sensor</td>\n<td>Moisture level in soil; automated irrigation</td>\n</tr>\n</tbody></table>\n<h3>35.2 Actuators Used with Arduino</h3>\n<p><strong>Motors:</strong></p>\n<p><strong>1. DC Motor:</strong></p>\n<ul>\n<li>Most common type; two leads (positive and negative)</li>\n<li>Reversing leads → reverses direction</li>\n<li><strong>H-Bridge</strong> circuit (e.g., L298 IC) used to control direction without interchanging leads</li>\n<li>L298 can control speed and direction; control two motors simultaneously; 2A per motor rating</li>\n</ul>\n<p><strong>2. Servo Motor:</strong></p>\n<ul>\n<li>Small device with output shaft that can be positioned to specific angular positions</li>\n<li>Receives coded signal to maintain shaft angle</li>\n<li>Used in radio-controlled aircraft (elevators, rudders), cars, robots</li>\n</ul>\n<p><strong>3. Stepper Motor:</strong></p>\n<ul>\n<li>Brushless, synchronous motor that divides a full rotation into discrete steps</li>\n<li>Steps per revolution: 12, 24, 72, 144, 180, 200</li>\n<li>Corresponding stepping angles: 30°, 15°, 5°, 2.5°, 2°, 1.8° per step</li>\n<li>Can be controlled with or without feedback</li>\n</ul>\n<p><strong>Relays:</strong></p>\n<ul>\n<li>Arduino Uno operates at 5V; max current per digital pin &lt; 40mA</li>\n<li>Cannot directly drive high-power devices (home appliances)</li>\n<li><strong>Relay:</strong> Electromechanical switch using an electromagnet; operates with low power (5V, 12V, 24V)</li>\n<li>Types: SPDT, DPDT, SPST</li>\n<li>Allows Arduino to control high-voltage/current devices</li>\n</ul>\n<p><strong>Displays:</strong></p>\n<ul>\n<li><strong>LCD 16×2:</strong> 16-pin device; 2 rows × 16 characters each</li>\n<li>Can be used in 4-bit or 8-bit mode</li>\n<li>8 data lines + 3 control lines</li>\n<li>Custom characters possible</li>\n<li>Used in embedded applications for displaying parameters and system status</li>\n</ul>\n<hr>\n<p># ═══════════════════════════════════</p>"
    }
  ],
  "endTerm": [
    {
      "title": "Topic 36 — Smart Home Automation",
      "html": "<h3>36.1 What is Smart Home Automation?</h3>\n<ul>\n<li>Using technology to control home appliances, lighting, heating, and security <strong>remotely or automatically</strong></li>\n<li>Common examples: controlling lights with smartphone app, voice assistants (Alexa, Google Home), sensors adjusting conditions based on occupancy</li>\n</ul>\n<h3>36.2 Why Arduino for Smart Home?</h3>\n<ul>\n<li>Accessible, low-cost platform</li>\n<li>Can be tailored to individual needs</li>\n<li>Connects to internet via Wi-Fi modules</li>\n<li>Interacts with wide variety of sensors and actuators</li>\n</ul>\n<h3>36.3 Project: Smart Lighting System</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Arduino Uno, motion sensors, relays, light bulbs</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Motion sensor detects movement → automatically turns lights on/off; can extend to dim lights, change colors, set timers</td>\n</tr>\n<tr>\n<td>Benefits</td>\n<td>Saves energy; cost-effective vs commercial smart lighting</td>\n</tr>\n</tbody></table>\n<h3>36.4 Project: Smart Security System</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Motion sensor, camera module, buzzer, Wi-Fi module</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Motion sensor detects intruder → Arduino triggers buzzer + captures images → sends alert to homeowner's phone</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Improves home security at low cost vs professional systems</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 37 — Smart Cities",
      "html": "<h3>37.1 What are Smart Cities?</h3>\n<ul>\n<li>Integrate advanced technologies (IoT, sensors, data analysis) into infrastructure to improve quality of life</li>\n<li>Examples: efficient public transportation, smart grids, environmental monitoring, waste management</li>\n<li>Goal: make urban living more sustainable, efficient, and responsive</li>\n</ul>\n<h3>37.2 Project: Smart Traffic Management System</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Ultrasonic sensors, RF modules (wireless communication), LEDs</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Ultrasonic sensors detect traffic volume at intersections; Arduino adjusts traffic light timings dynamically based on data</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Reduces traffic congestion, travel time; fewer accidents; reduced pollution</td>\n</tr>\n</tbody></table>\n<h3>37.3 Project: Smart Waste Management System</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Ultrasonic sensors (measure waste levels), Arduino Mega, GSM module</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Sensors track waste level in public bins; when full, alert sent to waste management services</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Minimizes trash overflow; reduces monitoring burden; cleaner city environment</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "Topic 38 — Healthcare and Wearable Devices",
      "html": "<h3>38.1 Arduino Revolutionizing Healthcare</h3>\n<ul>\n<li>Enables rapid development of <strong>low-cost medical devices</strong></li>\n<li>Helpful for communities with limited access to expensive equipment</li>\n<li>Encourages DIY medical innovation</li>\n</ul>\n<h3>38.2 Project: Heart Rate Monitoring System</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Pulse sensor, OLED display, Bluetooth module</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Pulse sensor monitors heartbeat; real-time data on OLED; Bluetooth transmits data to smartphone/computer</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Portable and affordable vs commercial heart rate monitors</td>\n</tr>\n</tbody></table>\n<h3>38.3 Project: Glucose Monitoring Device</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Arduino Nano, glucose sensor, buzzer</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Sensor monitors blood glucose; buzzer alerts when readings outside normal range; logs data; transmits to doctor</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Low-cost device for diabetic patients at home; reduces doctor visits</td>\n</tr>\n</tbody></table>\n<h3>38.4 Project: Smart Fitness Tracker (Wearable)</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Arduino Pro Mini, accelerometer, pulse sensor</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Monitors daily activity (steps, heart rate); provides feedback via smartphone or small display</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Affordable, customizable fitness tracking</td>\n</tr>\n</tbody></table>\n<h3>38.5 Project: Posture Monitoring Device (Wearable)</h3>\n<table>\n<thead><tr>\n<th>Element</th>\n<th>Details</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Components</td>\n<td>Gyroscope sensor, Arduino Nano, vibration motor</td>\n</tr>\n<tr>\n<td>Functionality</td>\n<td>Gyroscope tracks user's posture; if slouching detected, vibration motor activates as reminder</td>\n</tr>\n<tr>\n<td>Impact</td>\n<td>Helps users develop better posture habits; low-cost alternative to commercial devices</td>\n</tr>\n</tbody></table>\n<hr>\n<p># ═══════════════════════════════════</p>"
    }
  ],
  "cheatSheet": [
    {
      "title": "🔢 Critical Numbers to Remember (MCQ Favorites)",
      "html": "<table>\n<thead><tr>\n<th>Topic</th>\n<th>Key Number</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>RS232 max speed</td>\n<td>20 kbit/s (standard); 115,200 baud (modern)</td>\n</tr>\n<tr>\n<td>RS232 max cable</td>\n<td>20 meters</td>\n</tr>\n<tr>\n<td>RS485 max speed</td>\n<td>10 Mbps</td>\n</tr>\n<tr>\n<td>RS485 max cable</td>\n<td>3000 meters</td>\n</tr>\n<tr>\n<td>RS485 devices on bus</td>\n<td>1 to 32</td>\n</tr>\n<tr>\n<td>USB 2.0 max speed</td>\n<td>480 Mbps (High Speed)</td>\n</tr>\n<tr>\n<td>USB 3.0 speed</td>\n<td>5 Gbps</td>\n</tr>\n<tr>\n<td>Bluetooth range</td>\n<td>10 meters</td>\n</tr>\n<tr>\n<td>Bluetooth piconet nodes</td>\n<td>1 master + 7 slaves = 8 total</td>\n</tr>\n<tr>\n<td>Bluetooth frequency</td>\n<td>2.4–2.485 GHz</td>\n</tr>\n<tr>\n<td>ZigBee standard</td>\n<td>IEEE 802.15.4</td>\n</tr>\n<tr>\n<td>ZigBee max data rate</td>\n<td>250 kbps</td>\n</tr>\n<tr>\n<td>ZigBee range</td>\n<td>10–100 meters</td>\n</tr>\n<tr>\n<td>I2C addressing</td>\n<td>7-bit (up to 128 devices)</td>\n</tr>\n<tr>\n<td>I2C max speed</td>\n<td>3.4 Mbps (High Speed mode)</td>\n</tr>\n<tr>\n<td>8051 internal RAM</td>\n<td>128 bytes</td>\n</tr>\n<tr>\n<td>8051 internal ROM</td>\n<td>4 KB</td>\n</tr>\n<tr>\n<td>8051 interrupt sources</td>\n<td>5</td>\n</tr>\n<tr>\n<td>8051 timers</td>\n<td>2 (Timer 0, Timer 1)</td>\n</tr>\n<tr>\n<td>8051 I/O pins</td>\n<td>32 (4 ports × 8 pins)</td>\n</tr>\n<tr>\n<td>Arduino Uno clock</td>\n<td>16 MHz</td>\n</tr>\n<tr>\n<td>Arduino Uno Flash</td>\n<td>32 KB</td>\n</tr>\n<tr>\n<td>Arduino Uno SRAM</td>\n<td>2 KB</td>\n</tr>\n<tr>\n<td>TEA key size</td>\n<td>128-bit</td>\n</tr>\n<tr>\n<td>TEA ROM requirement</td>\n<td>1350 bytes</td>\n</tr>\n<tr>\n<td>SEA ROM requirement</td>\n<td>2800 bytes</td>\n</tr>\n<tr>\n<td>PRESENT block size</td>\n<td>64 bits</td>\n</tr>\n<tr>\n<td>PRESENT key size</td>\n<td>80 or 128 bits</td>\n</tr>\n<tr>\n<td>HIGHT block size</td>\n<td>64 bits</td>\n</tr>\n<tr>\n<td>HIGHT key size</td>\n<td>128 bits</td>\n</tr>\n<tr>\n<td>ECC advantage over RSA</td>\n<td>Same security with shorter keys</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "🧠 Memory Hooks",
      "html": "<ul>\n<li><strong>Von Neumann = Vague single memory</strong> (V = all in one); used in PCs</li>\n<li><strong>Harvard = Hard/Separate</strong> (Hard = µController, Separate = two buses); used in µControllers</li>\n<li><strong>Von Neumann Bottleneck</strong> = instructions and data share ONE bus = must take turns</li>\n<li><strong>Watchdog Timer</strong> = \"if software doesn't check in → system resets automatically\"</li>\n<li><strong>ASIC 3 Fs:</strong> Full-Custom = Full Control, Full Cost, Full Performance</li>\n<li><strong>FPGA = Whiteboard</strong> (reprogrammable); <strong>Full-Custom ASIC = Printed Book</strong> (fixed, optimized)</li>\n<li><strong>Bitcoin Mining = ASIC's most famous modern application</strong></li>\n<li><strong>SPI = Teacher in classroom</strong> (master controls clock; selects student with SS pin)</li>\n<li><strong>I2C = Party line telephone</strong> (same 2 wires; master calls by address; only that device responds)</li>\n<li><strong>RS485 = Noise-cancelling headphones</strong> (differential signaling cancels noise)</li>\n<li><strong>Hard RTES → Missiles, Airbags, Pacemakers</strong> (deadline miss = death)</li>\n<li><strong>Soft RTES → DVD, Streaming, Music</strong> (deadline miss = stutter)</li>\n<li><strong>IoT Building Blocks:</strong> Sensors → Processors → Gateways → Applications (S-P-G-A)</li>\n<li><strong>OAuth 2.0 Roles:</strong> Resource Owner, Resource Server, Client, Authorization Server</li>\n<li><strong>LWC must satisfy:</strong> Confidentiality, Integrity, Authentication, Non-repudiation (CIAN)</li>\n<li><strong>Block &gt; Stream cipher</strong> in security (block uses both confusion + diffusion; stream only confusion)</li>\n<li><strong>ECC = Best asymmetric LWC</strong> (shorter keys than RSA, computationally lighter)</li>\n<li><strong>Sinkhole = lures traffic; Sybil = fake identities; Blackhole = steals &amp; drops; Wormhole = fast shortcut</strong></li>\n</ul>\n<hr>"
    },
    {
      "title": "📋 Addressing Modes Quick Table (8051)",
      "html": "<table>\n<thead><tr>\n<th>Mode</th>\n<th>Operand Location</th>\n<th>Symbol</th>\n<th>Example</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Immediate</td>\n<td>Inside instruction</td>\n<td>#</td>\n<td><code>MOV A, #55H</code></td>\n</tr>\n<tr>\n<td>Register</td>\n<td>In R0–R7</td>\n<td>Rn</td>\n<td><code>MOV A, R5</code></td>\n</tr>\n<tr>\n<td>Direct</td>\n<td>In RAM at specified address</td>\n<td>address</td>\n<td><code>MOV A, 30H</code></td>\n</tr>\n<tr>\n<td>Indirect</td>\n<td>In RAM at address held by R0/R1</td>\n<td>@</td>\n<td><code>MOV A, @R0</code></td>\n</tr>\n<tr>\n<td>Implicit/Inherent</td>\n<td>Implied in opcode</td>\n<td>(none)</td>\n<td><code>RLA</code>, <code>NOP</code></td>\n</tr>\n<tr>\n<td>Indexed</td>\n<td>Base register + accumulator offset</td>\n<td>@A+</td>\n<td><code>MOVC A, @A+DPTR</code></td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "📋 ASIC Quick Reference",
      "html": "<table>\n<thead><tr>\n<th>Type</th>\n<th>Fixed</th>\n<th>Customizable</th>\n<th>Reprogrammable?</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Full-Custom</td>\n<td>Nothing</td>\n<td>Everything</td>\n<td>No</td>\n</tr>\n<tr>\n<td>Standard Cell</td>\n<td>Nothing</td>\n<td>Placement + Connections</td>\n<td>No</td>\n</tr>\n<tr>\n<td>Gate Array</td>\n<td>Transistor placement</td>\n<td>Metal interconnects only</td>\n<td>No</td>\n</tr>\n<tr>\n<td>FPGA</td>\n<td>Nothing (reconfigurable fabric)</td>\n<td>Everything (any number of times)</td>\n<td>YES</td>\n</tr>\n</tbody></table>\n<hr>"
    },
    {
      "title": "📋 Communication Protocols at a Glance",
      "html": "<table>\n<thead><tr>\n<th>Protocol</th>\n<th>Wires</th>\n<th>Duplex</th>\n<th>Speed</th>\n<th>Devices</th>\n<th>Sync/Async</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>RS232</td>\n<td>3 (TX,RX,GND)</td>\n<td>Full</td>\n<td>20kbps</td>\n<td>1:1</td>\n<td>Async</td>\n</tr>\n<tr>\n<td>RS485</td>\n<td>2</td>\n<td>Half</td>\n<td>10Mbps</td>\n<td>1:32</td>\n<td>Async</td>\n</tr>\n<tr>\n<td>SPI</td>\n<td>4+SS</td>\n<td>Full</td>\n<td>Tens of MHz</td>\n<td>1 master, multi slave</td>\n<td>Sync</td>\n</tr>\n<tr>\n<td>I2C</td>\n<td>2 (SDA,SCL)</td>\n<td>Half</td>\n<td>100kbps–3.4Mbps</td>\n<td>Multi-master, 128 slaves</td>\n<td>Sync</td>\n</tr>\n<tr>\n<td>USB</td>\n<td>4</td>\n<td>Half (polling)</td>\n<td>1.5Mbps–40Gbps</td>\n<td>1:127 (via hub)</td>\n<td>Async</td>\n</tr>\n</tbody></table>\n<hr>\n<p><em>End of Complete ES &amp; IoT Study Notes</em></p>\n<p><em>Sources: ES&amp;IOT.txt (Units 1 &amp; 2) | Unit 3 - Introduction to IoT.pdf (125 pages) | Unit 4 - Arduino and Programming.pdf (40 pages)</em></p>"
    }
  ]
};

const CN_STUDY_DATA = {
  "unit1_2": [
    {
      "title": "Topic 1.1 — Uses & Importance of Networks",
      "html": "<h3>📖 Core Theory</h3>\n<p>A <strong>Computer Network</strong> is defined as an interconnected collection of autonomous computers or computing devices. Interconnection means the devices can exchange information, while autonomous means that each device operates independently without being under the direct master-slave control of a central mainframe processor. Networks have revolutionized modern society by bridging geographical distances and transforming how resource allocation, communication, and information processing occur.</p>\n<p>In business environments, the primary driver for networks is <strong>Resource Sharing</strong>. This includes sharing physical hardware resources (such as high-end laser printers, scanners, and storage arrays) and logical resources (such as databases, specialized software, and files). Sharing reduces capital costs by eliminating the redundancy of buying hardware for individual users and simplifies backup and security operations by centralizing storage. Furthermore, networks enable the <strong>Client-Server model</strong>, where large database servers store critical operational data and client computers run applications to query and modify it, boosting collaboration.</p>\n<p>For individual and home users, networks provide access to remote information, interpersonal communications, and interactive entertainment. The development of <strong>Cloud Computing</strong> enables users to store documents, media, and configurations on virtualized remote servers and access them from any device at any location. In mobile networking, users on trains, planes, or in remote settings maintain continuous access to their databases via cellular or satellite links. Social and ethical issues are also critical, as networks facilitate global collaboration (e.g., Wikipedia, open-source software projects) but also present security, privacy, and misinformation challenges.</p>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Autonomous vs. Mainframe</strong>: Devices in a network must be autonomous. A terminal connected to a mainframe is <em>not</em> a computer network because the terminal cannot run software independently.</li>\n<li><strong>Primary Economic Benefit</strong>: Resource sharing (especially physical hardware and central database access) is the chief driver of business networking, drastically lowering costs.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which of the following is a mandatory condition for a collection of computers to be considered a computer network?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">They must be manufactured by the same vendor</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">The devices must be autonomous and capable of independent operation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">They must be controlled by a single master mainframe processor</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">They must use coaxial copper cabling for connectivity</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is the primary business motivation behind network resource sharing?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Ensuring that all files are duplicated on every hard drive</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Reducing hardware duplication and enabling centralized database management</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Forcing all software to run under a single operating system license</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Eliminating the need for network interface cards (NICs)</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.2 — Network Components (End vs Intermediary Devices)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Every network consists of three fundamental hardware categories: End Devices, Intermediary Devices, and Transmission Media.</p>\n<ul>\n<li><strong>End Devices (Hosts)</strong>: These form the interface between the human user and the underlying communication network. They act as the source or destination of a message. Examples include PCs, workstations, laptops, mobile phones, tablet computers, network printers, IP security cameras, and smart home appliances. In networking terms, any end device is classified as a <strong>host</strong> and is assigned a unique logical identifier called an IP address. Hosts can run client software (requesting data), server software (serving data), or both.</li>\n<li><strong>Intermediary Devices</strong>: These connect individual hosts to the network and can connect multiple networks to form an internetwork. Unlike hosts, intermediary devices do <em>not</em> generate user data; their sole purpose is to facilitate the routing, regeneration, and transport of data packets. Examples include Hubs (Layer 1), Switches and Bridges (Layer 2), Routers (Layer 3), and Firewalls/Gateways (Layers 4-7).</li>\n</ul>\n<p>The core functions of intermediary devices include:</p>\n<ol>\n<li><strong>Regeneration</strong>: Amplifying or recreating electrical, optical, or wireless signals to prevent attenuation.</li>\n<li><strong>Path Selection</strong>: Maintaining topology tables and routing paths to determine the most efficient path for packets.</li>\n<li><strong>Error Reporting</strong>: Notifying other devices of communication failures or routing errors.</li>\n<li><strong>Flow &amp; Congestion Control</strong>: Directing data away from congested links or buffering data packets.</li>\n<li><strong>Security &amp; QoS</strong>: Permitting or denying data based on security settings, and prioritizing high-priority traffic (such as VoIP).</li>\n</ol>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Origin of Data</strong>: Intermediary devices never originate user data. Only end devices (hosts) generate or terminate data streams.</li>\n<li><strong>Host Multi-role</strong>: In peer-to-peer applications, a single host can act as both server and client at the same time.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which of the following components is classified as an intermediary device?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">IP Security Camera</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Multi-port Layer 2 Switch</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Network Printer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Virtual Machine Client</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is a key responsibility of an intermediary network device?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Creating and editing user files</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Regenerating signals and managing path selections for active packets</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Serving web pages directly to human users</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Performing database backup processes</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.3 — Network Media & Representation (NIC, Ports, Interfaces)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Data is transmitted across networks via a physical channel called <strong>Network Media</strong>. The media acts as the pathway for electrical, optical, or electromagnetic signals representing binary digits (bits).</p>\n<ul>\n<li><strong>Types of Media</strong>:</li>\n<li><em>Copper Cable (Twisted Pair/Coaxial)</em>: Data is encoded as electrical pulses. Highly flexible and cost-effective, but susceptible to attenuation and Electromagnetic Interference (EMI).</li>\n<li><em>Fiber-Optic Cable</em>: Data is encoded as pulses of light. Offers extremely high bandwidth, long distances, and absolute immunity to EMI, but has high installation and termination costs.</li>\n<li><em>Wireless</em>: Data is encoded via modulated radio waves or infrared. Highly mobile, but susceptible to signal interference, obstacle blocking, and security interception.</li>\n<li><strong>Key Networking Terms</strong>:</li>\n<li><strong>NIC (Network Interface Card)</strong>: The physical hardware adapter that connects an end device to the transmission medium. A wireless NIC handles radio signals, while a wired NIC contains a physical RJ-45 jack.</li>\n<li><strong>Physical Port</strong>: A socket on a network device where media is physically connected. For example, a switch has physical ports for inserting Ethernet cables.</li>\n<li><strong>Interface</strong>: A logical or physical port on a routing or connecting device. In routers, ports are specifically referred to as interfaces because they represent separate logical IP subnets.</li>\n</ul>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Media Selection Criteria</strong>: The choice of media is governed by: maximum cable distance, installation environment (e.g. presence of electrical motors/EMI), bandwidth capacity, and deployment costs.</li>\n<li><strong>BIA (Burned-In Address)</strong>: Every NIC has a unique physical hardware MAC address hardcoded in its ROM, which cannot be changed.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which transmission medium is completely immune to Electromagnetic Interference (EMI)?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Unshielded Twisted Pair (UTP)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Shielded Twisted Pair (STP)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Fiber-optic Cable</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Coaxial Cable</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is the role of a Network Interface Card (NIC) in an end device?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It compiles the application code</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It physically connects the device to the network medium and handles signal modulation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It performs routing path determination using RIP</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It manages database storage drives</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.4 — Peer-to-Peer vs Client-Server Architecture",
      "html": "<h3>📖 Core Theory</h3>\n<p>Network architectures define how network services are shared and managed among hosts. The two main designs are Client-Server and Peer-to-Peer (P2P).</p>\n<ul>\n<li><strong>Client-Server Architecture</strong>: In this model, hosts are assigned dedicated, centralized roles. <strong>Servers</strong> are high-performance computers running server software (like Apache, Microsoft Exchange, or MS SQL) that wait for and process requests. <strong>Clients</strong> are end devices running user software (like web browsers or email clients) that request data. The advantages are highly centralized administration, simplified data backups, strong access control security, and massive scalability. The disadvantages are high implementation cost (licenses, servers) and a <strong>single point of failure</strong> (if the server crashes, all clients are offline).</li>\n<li><strong>Peer-to-Peer (P2P) Architecture</strong>: In this model, every connected host acts as both a client and a server simultaneously. For example, a computer can share a local printer with the network (acting as a print server) while simultaneously accessing files from another computer (acting as a client). P2P is common in small home offices (SOHO) or local file sharing. The advantages are very low initial cost, easy configuration, and no reliance on a single central server. The disadvantages are lack of centralized security (each user must manage passwords/access), poor scalability (performance degrades as users increase), and decentralization of backups.</li>\n</ul>\n<h3>🔍 Comparison Table</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Peer-to-Peer (P2P)</th>\n<th>Client-Server</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Centralization</strong></td>\n<td>Decentralized (no master host)</td>\n<td>Centralized (dedicated servers)</td>\n</tr>\n<tr>\n<td><strong>Administration</strong></td>\n<td>Managed by individual users</td>\n<td>Managed centrally by network admins</td>\n</tr>\n<tr>\n<td><strong>Security</strong></td>\n<td>Low (hard to audit and secure)</td>\n<td>High (centralized authentication &amp; logs)</td>\n</tr>\n<tr>\n<td><strong>Scalability</strong></td>\n<td>Poor (degrades with scale)</td>\n<td>Highly scalable (scalable servers)</td>\n</tr>\n<tr>\n<td><strong>Deployment Cost</strong></td>\n<td>Extremely low</td>\n<td>High (dedicated hardware &amp; OS licenses)</td>\n</tr>\n<tr>\n<td><strong>Single Point of Failure</strong></td>\n<td>No (files are distributed)</td>\n<td>Yes (central server failure halts system)</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Why is P2P architecture generally avoided in large enterprise environments?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It requires expensive dedicated servers</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It lacks centralized security, administration, and scaling capabilities</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It cannot operate over standard fiber optic links</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It is too difficult to share printers across it</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> A major disadvantage of a Client-Server network architecture compared to P2P is:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Decentralized file storage makes backup difficult</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">If the central server fails, all clients lose access to central resources</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Installation requires no technical expertise</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Individual users must configure their own security rules</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.5 — PAN, LAN, WAN & Access Levels (Intranet, Extranet, Internet)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Networks are classified based on their geographical size, administrative control, and access restrictions.</p>\n<ul>\n<li><strong>Geographical Classifications</strong>:</li>\n<li><strong>PAN (Personal Area Network)</strong>: Centered around a single individual in a close space (~10m). Typically uses Bluetooth or ZigBee (e.g., smartwatches, wireless mice, earbuds).</li>\n<li><strong>LAN (Local Area Network)</strong>: Covers a small geographical area under private administrative control (e.g., home, office building, school campus). Features high data rates, low delay, and private hardware ownership.</li>\n<li><strong>WAN (Wide Area Network)</strong>: Interconnects LANs separated by long geographic distances (cities, countries, globally). Typically managed by telecom operators/ISPs. WANs lease public infrastructures, have higher delays, and lower data rates than LANs.</li>\n<li><strong>Network Access Levels</strong>:</li>\n<li><strong>Intranet</strong>: A private local network accessible <em>only</em> by internal members of an organization. Protected by firewalls.</li>\n<li><strong>Extranet</strong>: A private network that provides secure, limited access to external partners, suppliers, or customers. Often uses VPNs for secure transport.</li>\n<li><strong>Internet</strong>: A globally interconnected public network of networks, open to anyone. It is not owned by any single entity.</li>\n</ul>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>LAN vs WAN Ownership</strong>: LAN equipment is owned entirely by the private organization. WAN links utilize leased telecommunication service provider circuits.</li>\n<li><strong>Access Boundary</strong>: Intranet is internal-only. Extranet is internal-plus-trusted-external. Internet is public-to-all.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> An employee uses a secure portal to allow an external parts supplier to view inventory levels. This access level is an:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Intranet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Extranet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Internet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Personal Area Network</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which statement correctly distinguishes LANs from WANs?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">WANs have higher speeds and lower delays than LANs</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">LANs are managed by telecom providers, while WANs are privately owned</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">LANs cover local areas under private control; WANs connect distant LANs using leased lines</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">LANs utilize satellites, while WANs only use twisted pair cables</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.6 — Physical vs Logical Topologies",
      "html": "<h3>📖 Core Theory</h3>\n<p>Topology refers to the configuration and structural layout of a computer network. Network layouts are divided into physical topologies and logical topologies.</p>\n<ul>\n<li><strong>Physical Topology</strong>: This defines the actual physical layout of cables, nodes, and connectors. It details <em>where</em> devices are located in a room or building and <em>how</em> they are wired together. Common physical topologies include Physical Star, Physical Bus, Physical Ring, Physical Mesh, and Physical Tree.</li>\n<li><strong>Logical Topology</strong>: This defines the path that data signals travel from one node to another. It determines <em>how</em> devices access the transmission medium and transmit data across the physical layout. Logical topology is defined by network interface drivers and protocol settings (e.g. Ethernet vs Token Ring).</li>\n</ul>\n<p>A network can have different physical and logical topologies simultaneously. For example:</p>\n<ul>\n<li><strong>Physical Star, Logical Bus</strong>: A network wired physically to a central Hub. Because a hub electrically floods incoming signals out of all ports, the signal travels along a shared logical backbone, behaving logically as a Bus network.</li>\n<li><strong>Physical Star, Logical Ring</strong>: A network wired to a central Multistation Access Unit (MAU). The MAU internally routes data sequentially in a closed loop, behaving logically as a Ring network.</li>\n</ul>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Star-Bus Hub</strong>: A physical Star topology using an active Hub behaves logically as a Bus topology because the signal is broadcast to all devices simultaneously.</li>\n<li><strong>Topologies and Layering</strong>: Physical topology is a Layer 1 concern, while Logical topology is governed by the Layer 2 Media Access Control (MAC) sublayer.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> A network is wired physically with cables going from a central hub to each workstation. If the hub broadcasts every signal to all ports, what are the topologies?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Physical Bus, Logical Star</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Physical Star, Logical Bus</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Physical Star, Logical Ring</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Physical Mesh, Logical Bus</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which of the following defines the logical topology of a network?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">The physical routing of optical fiber cables through walls</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">The actual path data signals take to travel between devices on the medium</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">The location of servers in a server room cabinet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">The electrical grounding specifications of the cables</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.7 — Mesh Topology Calculations",
      "html": "<h3>📖 Core Theory</h3>\n<p>In a <strong>Mesh Topology</strong>, every node is connected to every other node in the network via a dedicated point-to-point physical link. A dedicated link carries traffic <em>only</em> between the two devices it connects. Mesh topologies provide the highest level of redundancy, security, and fault tolerance, but they are expensive and difficult to scale due to cabling requirements.</p>\n<p>To calculate the resource requirements of a physical mesh network, use the following mathematical formulas (where $N$ represents the number of devices in the network):</p>\n<ol>\n<li><strong>Dedicated Physical Links</strong>: Since each device must connect to all other $N-1$ devices, and each link connects two devices, the total number of physical cables (links) required is:</li>\n</ol>\n<p>$$Links = \\frac{N(N-1)}{2}$$</p>\n<ol>\n<li><strong>Physical Ports Per Device</strong>: Every device requires an input/output interface port for each dedicated connection. Thus, each device needs:</li>\n</ol>\n<p>$$Ports\\ per\\ device = N - 1$$</p>\n<ol>\n<li><strong>Total Physical Ports in Network</strong>: The total number of ports across all devices in the network is:</li>\n</ol>\n<p>$$Total\\ ports = N \\times (N-1)$$</p>\n<h3>📐 Worked Examples</h3>\n<ul>\n<li><strong>Scenario 1 ($N=5$)</strong>:</li>\n<li>Links required: $\\frac{5 \\times (5-1)}{2} = \\frac{5 \\times 4}{2} = 10$ physical links.</li>\n<li>Ports per device: $5 - 1 = 4$ ports.</li>\n<li>Total network ports: $5 \\times 4 = 20$ ports.</li>\n<li><strong>Scenario 2 ($N=8$)</strong>:</li>\n<li>Links required: $\\frac{8 \\times 7}{2} = 28$ physical links.</li>\n<li>Ports per device: $8 - 1 = 7$ ports.</li>\n<li><strong>Scenario 3 ($N=12$)</strong>:</li>\n<li>Links required: $\\frac{12 \\times 11}{2} = 66$ physical links.</li>\n<li>Ports per device: $12 - 1 = 11$ ports.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> A specialized defense network connects 10 critical servers in a fully mesh topology. How many dedicated physical links are required?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">90 links</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">45 links</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">10 links</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">100 links</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> Calculation: 10 * 9 / 2 = 45\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> If a mesh network with $N$ devices requires a total of 110 ports across all devices, how many devices are in the network?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">10 devices</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">11 devices</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">12 devices</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">22 devices</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> Calculation: N<em>(N-1) = 110 =&gt; 11 </em> 10 = 110\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.8 — Star, Bus, Ring & Tree Topologies",
      "html": "<h3>📖 Core Theory</h3>\n<p>Different topologies strike different balances between cost, complexity, and fault tolerance.</p>\n<ul>\n<li><strong>Star Topology</strong>: Each node connects directly to a central controller (Hub or Switch) via a point-to-point link. Traffic does not pass directly between nodes. If a single link fails, only that node goes offline. However, if the central device fails, the entire network crashes (single point of failure).</li>\n<li><strong>Bus Topology</strong>: Uses a single central cable (backbone) to connect all devices. Nodes connect via <strong>drop lines</strong> and metal <strong>taps</strong>. <strong>Terminators</strong> are required at both ends of the backbone to absorb signals and prevent signal reflections (which destroy data). A break in the backbone cable halts all communication.</li>\n<li><strong>Ring Topology</strong>: Each device connects to exactly two neighbors, forming a closed physical circle. Data travels in one direction. Access is controlled by a 3-byte frame called a <strong>Token</strong>. A node must capture the token to transmit, avoiding collisions. An active <strong>Monitor Station</strong> manages the ring to purge orphaned frames and regenerate lost tokens. In <strong>Dual Ring</strong> topologies, a second, counter-rotating ring provides self-healing redundancy: if a link breaks, the nodes wrap the two rings into a single continuous loop.</li>\n<li><strong>Tree Topology (Hierarchical Star)</strong>: Secondary stars are connected to a central star. This structure allows easy network expansion and partitioning but concentrates traffic near the root node.</li>\n</ul>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Terminators in Bus</strong>: Bus topologies require terminators. Without them, signals reflect back along the wire, causing collisions and crashing the network.</li>\n<li><strong>Self-Healing Ring</strong>: Dual-Ring (e.g. FDDI) uses counter-rotating loops to self-heal. If a link breaks, the loop wraps around at the boundary nodes to maintain data flow.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which topology utilizes terminators at both ends of the main backbone cable to prevent signal reflection?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Star Topology</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Bus Topology</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Ring Topology</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Mesh Topology</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is the role of the Monitor Station in a Ring network topology?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It encrypts user data</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It manages tokens, regenerates lost tokens, and purges orphaned frames</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It assigns IP addresses dynamically</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It acts as a default gateway router</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 1.9 — Collision Domain vs Broadcast Domain",
      "html": "<h3>📖 Core Theory</h3>\n<p>Understanding traffic boundaries is critical for designing efficient networks.</p>\n<ul>\n<li><strong>Collision Domain</strong>: A physical segment of a network where data packets can collide when two devices transmit simultaneously on a shared medium. Collisions distort signals, requiring backoff and retransmission. Devices operating at Layer 1 (Hubs, Repeaters) flood signals out of all ports, grouping all connected devices into <strong>one collision domain</strong>. <strong>Bridges and Switches (Layer 2) segment collision domains</strong>. Every single physical port on a switch represents a separate, isolated collision domain. Switches support full-duplex communication, which completely eliminates collisions on that port.</li>\n<li><strong>Broadcast Domain</strong>: A logical division of a computer network where any broadcast frame (e.g. ARP request, DHCP discover) is received by all connected hosts. Broadcasts are sent to a destination address of all 1s. Switches and Hubs flood broadcast frames out of all ports, meaning they <strong>do not break broadcast domains</strong>. <strong>Routers (Layer 3) break broadcast domains</strong>. A router does not forward broadcast frames across its interfaces; each router port represents a separate broadcast domain.</li>\n</ul>\n<h3>🔍 Domain Break Matrix</h3>\n<table>\n<thead><tr>\n<th>Device</th>\n<th>Layer</th>\n<th>Separates Collision Domains?</th>\n<th>Separates Broadcast Domains?</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Hub / Repeater</strong></td>\n<td>Layer 1</td>\n<td>❌ No (all ports are 1 domain)</td>\n<td>❌ No (all ports are 1 domain)</td>\n</tr>\n<tr>\n<td><strong>Bridge / Switch</strong></td>\n<td>Layer 2</td>\n<td>✅ Yes (each port is separate)</td>\n<td>❌ No (all ports are 1 domain)</td>\n</tr>\n<tr>\n<td><strong>Router</strong></td>\n<td>Layer 3</td>\n<td>✅ Yes</td>\n<td>✅ Yes (each port is separate)</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> If an 8-port switch is connected to 8 independent hosts, how many collision domains and broadcast domains are created?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">1 collision domain, 8 broadcast domains</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">8 collision domains, 1 broadcast domain</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">8 collision domains, 8 broadcast domains</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">1 collision domain, 1 broadcast domain</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which network device is required to restrict broadcast frames from propagating to other network segments?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Layer 2 Switch</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Layer 3 Router</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Multiport Repeater Hub</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Transparent Bridge</span>\n    </div>\n  </div>\n</div>\n<hr>"
    }
  ],
  "unit3_4": [
    {
      "title": "Topic 3.1 — Why Layered Reference Models?",
      "html": "<h3>📖 Core Theory</h3>\n<p>Early networks were proprietary, meaning components made by one vendor could not communicate with those from another. To address this, standards organizations developed layered reference models. A reference model divides the complex task of network communication into distinct, manageable vertical layers, each with defined responsibilities and standard interfaces.</p>\n<p>Layering offers several key benefits:</p>\n<ol>\n<li><strong>Modularity / Independence</strong>: Changes in one layer do not require changes in other layers. Upgrading an optical fiber connection to wireless (Layer 1) does not require modifying web browsers (Layer 7).</li>\n<li><strong>Protocol Design</strong>: Standardizes interfaces, enabling engineers to design protocols for specific tasks (e.g. focusing on routing at Layer 3 without worrying about physical bit modulation).</li>\n<li><strong>Vendor Interoperability</strong>: Establishes common standards so hardware and software from different manufacturers work together seamlessly.</li>\n<li><strong>Simplification</strong>: Breaks network concepts into smaller components, simplifying troubleshooting.</li>\n</ol>\n<p>Analogy: Think of a restaurant. The customer orders, the waiter writes it down and passes it to the kitchen, and the chef prepares the meal. The chef doesn't need to know how the waiter took the order; they only care about the standardized ticket interface. Each layer functions independently to deliver the final service.</p>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Protocol Independence</strong>: Layering ensures protocols at higher layers are independent of lower-layer physical media. This is key for network stability and scalability.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What is the primary benefit of modularity in a layered network model?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It guarantees that data is always encrypted</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It allows changes in one layer to be made without affecting adjacent layers</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It increases the transmission speed across copper media</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It eliminates the need for logical addressing schemes</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Layered models promote vendor competition and interoperability by:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Establishing price controls on hardware</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Defining open, standardized interfaces that all manufacturers must follow</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Limiting the total number of active connections</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Forcing all operating systems to use the same code base</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.2 — OSI Model Overview (7 Layers & PDU Mapping)",
      "html": "<h3>📖 Core Theory</h3>\n<p>The <strong>OSI (Open Systems Interconnection) Model</strong> was developed by the <strong>ISO (International Standards Organization)</strong>. Introduced in the late 1970s and finalized in 1984 as <strong>ISO 7498</strong>, it is a 7-layer conceptual framework. The OSI model is a reference standard, not a physical implementation; actual networks run on the TCP/IP stack.</p>\n<p>As data travels down the sender's OSI stack, each layer wraps the payload with headers (and a trailer at Layer 2), a process called <strong>Data Encapsulation</strong>. When the data reaches the receiver, it travels up the stack, and each layer strips off its corresponding header, a process called <strong>Data De-encapsulation</strong>.</p>\n<p>Each layer works with a specific unit of data called a <strong>Protocol Data Unit (PDU)</strong>:</p>\n<ul>\n<li>Layer 7 (Application) → <strong>Data</strong></li>\n<li>Layer 6 (Presentation) → <strong>Data</strong></li>\n<li>Layer 5 (Session) → <strong>Data</strong></li>\n<li>Layer 4 (Transport) → <strong>Segment</strong> (TCP) or <strong>Datagram</strong> (UDP)</li>\n<li>Layer 3 (Network) → <strong>Packet</strong></li>\n<li>Layer 2 (Data Link) → <strong>Frame</strong></li>\n<li>Layer 1 (Physical) → <strong>Bit</strong></li>\n</ul>\n<h3>🧠 Mnemonic Hooks</h3>\n<ul>\n<li><strong>Bottom to Top (L1 to L7)</strong>: <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way</li>\n<li><strong>Top to Bottom (L7 to L1)</strong>: <strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which of the following correctly pairs the OSI layer with its corresponding Protocol Data Unit (PDU)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Transport Layer — Packet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Network Layer — Packet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Data Link Layer — Segment</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Physical Layer — Frame</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> The process of adding headers to data as it moves down the OSI reference stack is known as:</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Modulation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">De-encapsulation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Encapsulation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Demultiplexing</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.3 — Detailed OSI Layers: Physical, Data Link & Network",
      "html": "<h3>📖 Core Theory</h3>\n<p>The lower three layers of the OSI model handle the physical and logical transport of data across network nodes.</p>\n<ul>\n<li><strong>Layer 1 — Physical Layer</strong>: Responsible for transmitting raw, unstructured bitstreams over a physical medium. It defines electrical, mechanical, and functional specifications, including voltage levels, pin configurations, signal encodings, clock synchronization, and data rates. Physical layer devices like Hubs and Repeaters operate on raw bits without reading headers.</li>\n<li><strong>Layer 2 — Data Link Layer</strong>: Responsible for reliable <strong>node-to-node (hop-to-hop) delivery</strong> of data frames over a single physical link. It groups bits into frames, appends physical MAC addresses, performs error detection (via FCS trailers), controls data flow to prevent receiver overload, and regulates medium access (MAC protocols). Switches and Bridges operate here, filtering traffic based on MAC addresses.</li>\n<li><strong>Layer 3 — Network Layer</strong>: Responsible for <strong>source-to-destination (end-to-end) packet delivery</strong> across multiple networks. It assigns logical IP addresses, routes packets across intermediate networks, and handles fragmentation when a packet exceeds a link's MTU. Routers operate here, using IP addresses to build routing tables.</li>\n</ul>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Delivery Scope</strong>: The Network Layer performs end-to-end logical routing, while the Data Link Layer performs hop-to-hop physical delivery.</li>\n<li><strong>Signal Parsing</strong>: The Physical Layer only transmits signals; it cannot parse headers, IP addresses, or MAC addresses.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which OSI layer is responsible for hop-to-hop (node-to-node) delivery of data frames?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Physical Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Data Link Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Network Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Transport Layer</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> A router receives a packet, reads its destination IP address, and determines the best outgoing interface. At which OSI layer is this occurring?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Layer 1</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Layer 2</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Layer 3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Layer 4</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.4 — Detailed OSI Layers: Transport (TCP vs UDP), Session, Presentation & Application",
      "html": "<h3>📖 Core Theory</h3>\n<p>The upper four layers of the OSI model manage end-to-end communication, session states, data translation, and user services.</p>\n<ul>\n<li><strong>Layer 4 — Transport Layer</strong>: Responsible for process-to-process delivery of messages. Key functions include segmentation (splitting data into segments), sequencing (numbering segments), and flow/error control. Protocols:</li>\n<li><em>TCP (Transmission Control Protocol)</em>: Connection-oriented, reliable (uses ACKs), and guarantees ordered delivery.</li>\n<li><em>UDP (User Datagram Protocol)</em>: Connectionless, fast, and unreliable (best-effort delivery).</li>\n<li><strong>Layer 5 — Session Layer</strong>: Establishes, manages, and terminates sessions (conversations) between applications. Key features include <strong>Dialog Control</strong> (half-duplex or full-duplex coordination), <strong>Token Management</strong> (preventing simultaneous conflicts), and <strong>Synchronization</strong> (checkpoints in large file transfers).</li>\n<li><strong>Layer 6 — Presentation Layer</strong>: Handles data format translation, compression, and encryption. It acts as the translator of the network (e.g. translating ASCII to EBCDIC, compressing media files with MPEG, or encrypting traffic with SSL/TLS).</li>\n<li><strong>Layer 7 — Application Layer</strong>: Provides an interface for network services directly to user applications (e.g. web browsers or email clients) using protocols like HTTP, DNS, FTP, and SMTP.</li>\n</ul>\n<h3>🔍 TCP vs UDP Quick Reference</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>TCP</th>\n<th>UDP</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Connection</strong></td>\n<td>Connection-oriented (Handshake)</td>\n<td>Connectionless</td>\n</tr>\n<tr>\n<td><strong>Reliability</strong></td>\n<td>Guaranteed (ACKs &amp; retransmissions)</td>\n<td>Best-effort (No ACKs)</td>\n</tr>\n<tr>\n<td><strong>Ordering</strong></td>\n<td>Guaranteed ordered arrival</td>\n<td>Out-of-order delivery</td>\n</tr>\n<tr>\n<td><strong>Use Cases</strong></td>\n<td>Web, Email, File transfer (FTP)</td>\n<td>VoIP, Online games, DNS</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which OSI layer handles data encryption, translation, and compression?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Application Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Session Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Presentation Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Transport Layer</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> A checkpoint system that allows a 100MB file download to resume from 40MB after a disconnection is managed by which layer?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Transport Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Session Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Presentation Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Data Link Layer</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.5 — TCP/IP Model (Original vs Modern) & OSI Comparison",
      "html": "<h3>📖 Core Theory</h3>\n<p>The <strong>TCP/IP Model</strong> was developed by the US Department of Defense (DoD) before the OSI model was finalized. It is the practical framework used in modern networks.</p>\n<ul>\n<li><strong>Original TCP/IP Model (4 Layers)</strong>:</li>\n<li><em>Network Access</em>: Combines the physical wiring and framing functions of OSI Layers 1 and 2.</li>\n<li><em>Internet</em>: Maps directly to OSI Layer 3 (Network).</li>\n<li><em>Transport</em>: Maps directly to OSI Layer 4 (Transport).</li>\n<li><em>Application</em>: Combines the application, formatting, and session controls of OSI Layers 5, 6, and 7.</li>\n<li><strong>Modern TCP/IP Model (5 Layers)</strong>: Splitting the Network Access layer into separate <strong>Physical</strong> and <strong>Data Link</strong> layers, keeping the Internet, Transport, and Application layers unchanged.</li>\n</ul>\n<h3>🔍 Model Comparison Table</h3>\n<table>\n<thead><tr>\n<th>OSI Model Layer</th>\n<th>Modern TCP/IP Layer</th>\n<th>Original TCP/IP Layer</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Application (L7) / Presentation (L6) / Session (L5)</td>\n<td>Application</td>\n<td>Application</td>\n</tr>\n<tr>\n<td>Transport (L4)</td>\n<td>Transport</td>\n<td>Transport</td>\n</tr>\n<tr>\n<td>Network (L3)</td>\n<td>Internet / Network</td>\n<td>Internet</td>\n</tr>\n<tr>\n<td>Data Link (L2)</td>\n<td>Data Link</td>\n<td>Network Access</td>\n</tr>\n<tr>\n<td>Physical (L1)</td>\n<td>Physical</td>\n<td>Network Access</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which layer of the original 4-layer TCP/IP model corresponds to the Physical and Data Link layers of the OSI model?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Internet Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Network Access Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Transport Layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Application Layer</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> A key difference between the OSI model and the TCP/IP model is:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">OSI is a practical implementation, while TCP/IP is conceptual</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">OSI is a conceptual reference model, while TCP/IP is the actual implemented protocol suite</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">TCP/IP has more layers than the OSI model</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">TCP/IP does not support connectionless transport</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.6 — Internet Standards Organizations",
      "html": "<h3>📖 Core Theory</h3>\n<p>Standardization ensures global compatibility. Key organizations include:</p>\n<ul>\n<li><strong>ISOC (Internet Society)</strong>: Promotes the open development, evolution, and use of the Internet.</li>\n<li><strong>IETF (Internet Engineering Task Force)</strong>: Develops and maintains Internet standards through <strong>RFC (Request for Comments)</strong> documents. Standardized protocols include IP, TCP, and HTTP.</li>\n<li><strong>IEEE (Institute of Electrical and Electronics Engineers)</strong>: Defines engineering standards for hardware and physical signaling, including <strong>IEEE 802.3</strong> (wired Ethernet) and <strong>IEEE 802.11</strong> (Wi-Fi).</li>\n<li><strong>IANA (Internet Assigned Numbers Authority)</strong>: Manages IP address allocations, domain name systems, and protocol port numbers. Operated by ICANN.</li>\n<li><strong>EIA/TIA (Electronic / Telecommunications Industries Alliance)</strong>: Standardizes cabling and hardware layouts, such as the <strong>T568A / T568B</strong> wiring standards for RJ-45 copper connectors.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which organization is responsible for maintaining Internet standards through RFC documents?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">IEEE</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">ISO</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">IETF</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">IANA</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> The IEEE standard family that governs wireless local area networks (Wi-Fi) is:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">IEEE 802.3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">IEEE 802.11</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">IEEE 802.15</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">IEEE 802.1Q</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.7 — Protocol Port Numbers (EXAM CRITICAL)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Port numbers operate at the Transport Layer (Layer 4) to identify specific services or applications on a host. Ports range from <strong>0 to 65,535</strong> and are divided into three categories:</p>\n<ul>\n<li><strong>Well-Known Ports (0 – 1023)</strong>: Reserved for standard system services.</li>\n<li><strong>Registered Ports (1024 – 49,151)</strong>: Assigned by IANA for specific vendor applications.</li>\n<li><strong>Dynamic/Private Ports (49,152 – 65,535)</strong>: Assigned temporarily by the client OS during active outbound connections.</li>\n</ul>\n<h3>🔍 Crucial Ports Table</h3>\n<table>\n<thead><tr>\n<th>Protocol</th>\n<th>Full Name</th>\n<th>Port</th>\n<th>Transport Protocol</th>\n<th>Purpose</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>FTP</strong></td>\n<td>File Transfer Protocol</td>\n<td><strong>20</strong> (Data), <strong>21</strong> (Control)</td>\n<td>TCP</td>\n<td>High-speed file transfer</td>\n</tr>\n<tr>\n<td><strong>SSH</strong></td>\n<td>Secure Shell</td>\n<td><strong>22</strong></td>\n<td>TCP</td>\n<td>Secure remote terminal access</td>\n</tr>\n<tr>\n<td><strong>TELNET</strong></td>\n<td>Teletype Network</td>\n<td><strong>23</strong></td>\n<td>TCP</td>\n<td>Unencrypted remote command line</td>\n</tr>\n<tr>\n<td><strong>SMTP</strong></td>\n<td>Simple Mail Transfer Protocol</td>\n<td><strong>25</strong></td>\n<td>TCP</td>\n<td>Sending email between mail servers</td>\n</tr>\n<tr>\n<td><strong>DNS</strong></td>\n<td>Domain Name System</td>\n<td><strong>53</strong></td>\n<td>TCP &amp; UDP</td>\n<td>Resolves hostnames to IP addresses</td>\n</tr>\n<tr>\n<td><strong>DHCP</strong></td>\n<td>Dynamic Host Config Protocol</td>\n<td><strong>67</strong> (Server), <strong>68</strong> (Client)</td>\n<td>UDP</td>\n<td>Dynamically assigns network IPs</td>\n</tr>\n<tr>\n<td><strong>TFTP</strong></td>\n<td>Trivial FTP</td>\n<td><strong>69</strong></td>\n<td>UDP</td>\n<td>Simple bootloader file transfers</td>\n</tr>\n<tr>\n<td><strong>HTTP</strong></td>\n<td>HyperText Transfer Protocol</td>\n<td><strong>80</strong></td>\n<td>TCP</td>\n<td>Web browser requests</td>\n</tr>\n<tr>\n<td><strong>SNMP</strong></td>\n<td>Simple Network Mgmt Protocol</td>\n<td><strong>161</strong> (Poll), <strong>162</strong> (Trap)</td>\n<td>UDP</td>\n<td>Network monitoring and alerts</td>\n</tr>\n<tr>\n<td><strong>BGP</strong></td>\n<td>Border Gateway Protocol</td>\n<td><strong>179</strong></td>\n<td>TCP</td>\n<td>Routing between Autonomous Systems</td>\n</tr>\n<tr>\n<td><strong>HTTPS</strong></td>\n<td>HTTP Secure</td>\n<td><strong>443</strong></td>\n<td>TCP</td>\n<td>Encrypted web transactions</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which port numbers are used by the File Transfer Protocol (FTP)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Port 22 and Port 23</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Port 20 and Port 21</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Port 67 and Port 68</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Port 161 and Port 162</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> A network administrator blocks outbound TCP port 25. What service is impacted?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Web browsing via HTTPS</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Sending email via SMTP</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Remote terminal sessions via SSH</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Hostname resolution via DNS</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.8 — Guided Media: UTP, STP, Coaxial & Optical Fiber",
      "html": "<h3>📖 Core Theory</h3>\n<p>Guided media directs electromagnetic waves along a solid physical path.</p>\n<ul>\n<li><strong>UTP (Unshielded Twisted Pair)</strong>: Consists of color-coded copper wires twisted in pairs to reduce crosstalk and EMI. Highly flexible and cost-effective, but susceptible to noise. Uses <strong>RJ-45</strong> connectors. Standardized by categories (e.g. Cat5e supports 1 Gbps, Cat6 supports 10 Gbps up to 55m, Cat6a supports 10 Gbps up to 100m).</li>\n<li><strong>STP (Shielded Twisted Pair)</strong>: Adds a metal foil shield around wire pairs to minimize EMI. More expensive and rigid than UTP; requires grounding.</li>\n<li><strong>Coaxial Cable</strong>: Outer plastic jacket → copper braid shield → dielectric insulator → solid copper core. Used for cable TV and high-frequency applications. Modes:</li>\n<li><em>Baseband</em>: Single channel, carries digital signals.</li>\n<li><em>Broadband</em>: Multiple channels, carries analog signals.</li>\n<li><strong>Optical Fiber</strong>: Transmits data as light pulses through a high-purity glass core. Uses <strong>Total Internal Reflection</strong>: the glass core is wrapped in a <strong>cladding</strong> with a lower refractive index, reflecting light back into the core. Types:</li>\n<li><em>Single-Mode</em>: Narrow core, laser source. Minimizes dispersion, ideal for long distances.</li>\n<li><em>Multi-Mode</em>: Wide core, LED source. Light reflections travel multiple paths, causing modal dispersion. Best for short campus distances.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What physical phenomenon allows light to travel through the glass core of a fiber-optic cable without escaping?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Refraction</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Total Internal Reflection</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Optical Dispersion</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Signal Attenuation</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Under TIA standards, which twisted-pair category is designed to support 10 Gbps data rates up to 100 meters?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Cat5e</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Cat6</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Cat6a</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Cat3</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.9 — Unguided Media: Radio, Microwave & Infrared",
      "html": "<h3>📖 Core Theory</h3>\n<p>Unguided media transmits electromagnetic waves without a physical conduit, commonly referred to as wireless communication.</p>\n<ul>\n<li><strong>Radio Waves (3 KHz – 1 GHz)</strong>: Omnidirectional (broadcast in all directions). Can easily penetrate solid walls, making them ideal for indoor mobile applications (Wi-Fi, AM/FM radio). However, omnidirectional transmission makes them susceptible to interference.</li>\n<li><strong>Microwaves (1 GHz – 300 GHz)</strong>: Unidirectional (focused in a narrow beam). Used for point-to-point links (terrestrial microwave towers, satellites). Requires a clear <strong>line-of-sight</strong>. Due to the Earth's curvature, repeater towers must be spaced about every 30 miles.</li>\n<li><strong>Infrared (300 GHz – 400 THz)</strong>: Short-range, line-of-sight communication. <strong>Infrared waves cannot penetrate walls</strong>, which prevents interference between adjacent rooms and provides security. Used in TV remote controls and wireless keyboards.</li>\n</ul>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Microwave Earth Curvature</strong>: Terrestrial microwaves require line-of-sight; Earth curvature limits repeater spacing to ~30 miles.</li>\n<li><strong>Infrared Boundary</strong>: Infrared cannot penetrate walls, preventing security leaks in adjacent offices.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which wireless medium is unidirectional, operates above 1 GHz, and requires line-of-sight repeater towers?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Radio Waves</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Microwaves</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Infrared</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Sub-sonic waves</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Why is infrared suitable for TV remotes but not for home Wi-Fi networks?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It requires fiber optic connections</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It is short-range and cannot penetrate solid walls</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It is highly susceptible to electromagnetic interference</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It is too expensive to manufacture</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 3.10 — Ethernet Standards & Cable Designators",
      "html": "<h3>📖 Core Theory</h3>\n<p>Ethernet standards are defined by <strong>IEEE 802.3</strong>. Cable designators follow a standard notation, such as <strong>10BaseT</strong>:</p>\n<ul>\n<li><strong>Speed</strong>: The leading number represents the speed in Megabits per second (Mbps) (e.g. 10 = 10 Mbps, 100 = 100 Mbps, 1000 = 1000 Mbps or 1 Gbps).</li>\n<li><strong>Baseband/Broadband</strong>: <strong>Base</strong> stands for Baseband, which uses the entire cable bandwidth for a single digital signal. <strong>Broad</strong> stands for Broadband, which splits the bandwidth into multiple analog channels.</li>\n<li><strong>Medium Type / Distance</strong>:</li>\n<li><strong>T</strong>: Twisted pair cabling.</li>\n<li><strong>2</strong>: Thin coaxial cabling (max length <strong>185m</strong>, often rounded to 200m).</li>\n<li><strong>5</strong>: Thick coaxial cabling (max length <strong>500m</strong>).</li>\n<li><strong>F / FX / SX / LX</strong>: Fiber-optic cabling.</li>\n</ul>\n<h3>🔍 Standard Summary Table</h3>\n<table>\n<thead><tr>\n<th>Designator</th>\n<th>Speed</th>\n<th>Medium</th>\n<th>Max Segment Length</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>10Base5</strong></td>\n<td>10 Mbps</td>\n<td>Thick Coaxial</td>\n<td>500 meters</td>\n</tr>\n<tr>\n<td><strong>10Base2</strong></td>\n<td>10 Mbps</td>\n<td>Thin Coaxial</td>\n<td>185 meters</td>\n</tr>\n<tr>\n<td><strong>10BaseT</strong></td>\n<td>10 Mbps</td>\n<td>UTP (Cat3/5)</td>\n<td>100 meters</td>\n</tr>\n<tr>\n<td><strong>100BaseTX</strong></td>\n<td>100 Mbps (Fast Ethernet)</td>\n<td>UTP (Cat5)</td>\n<td>100 meters</td>\n</tr>\n<tr>\n<td><strong>100BaseFX</strong></td>\n<td>100 Mbps (Fast Ethernet)</td>\n<td>Multi-mode Fiber</td>\n<td>2,000 meters</td>\n</tr>\n<tr>\n<td><strong>1000BaseT</strong></td>\n<td>1000 Mbps (Gigabit)</td>\n<td>UTP (Cat5e/6)</td>\n<td>100 meters</td>\n</tr>\n<tr>\n<td><strong>1000BaseLX</strong></td>\n<td>1000 Mbps (Gigabit)</td>\n<td>Single/Multi-mode Fiber</td>\n<td>Up to 5,000 meters</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> In the Ethernet cable designator \"100BaseFX\", what does the \"Base\" represent?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">The cable has a basic shield</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Baseband digital transmission using the entire bandwidth</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Broadband analog transmission with split frequencies</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">A maximum segment length of 100 meters</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is the maximum segment length supported by a 10Base2 (Thinnet) coaxial network?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">500 meters</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">185 meters</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">100 meters</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">2,000 meters</span>\n    </div>\n  </div>\n</div>\n<hr>"
    }
  ],
  "unit5_6": [
    {
      "title": "Topic 5.1 — Connecting Devices Overview",
      "html": "<h3>📖 Core Theory</h3>\n<p>Connecting devices connect hosts and separate networks. They operate at different layers of the OSI reference model, and their functionality depends on the layer at which they operate:</p>\n<ol>\n<li><strong>Physical Layer (Layer 1)</strong>: Hubs and Repeaters. These operate only on raw bits, regenerating signals without reading frame headers or IP packets.</li>\n<li><strong>Data Link Layer (Layer 2)</strong>: Switches, Bridges, and NICs. These process frames and read Layer 2 physical MAC addresses.</li>\n<li><strong>Network Layer (Layer 3)</strong>: Routers. These process packets and read Layer 3 logical IP addresses.</li>\n<li><strong>Application/Transport Layers (Layers 4-7)</strong>: Gateways. These perform protocol translation between incompatible systems.</li>\n</ol>\n<p>Network devices are backward compatible with lower layers. For example, a Layer 3 router must also handle Layer 2 framing and Layer 1 physical signaling to process packets.</p>\n<h3>⚠️ EXAM CRITICAL</h3>\n<ul>\n<li><strong>Header Inspection</strong>: A device can only inspect header information up to its operational OSI layer. A Layer 2 switch cannot inspect IP headers, and a Layer 1 hub cannot read MAC addresses.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which of the following correctly matches a network device with its highest operational OSI layer?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Switch — Layer 3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Hub — Layer 2</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Router — Layer 3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Bridge — Layer 1</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> If a device operates at Layer 2 of the OSI model, which header information is it capable of reading?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Source and destination IP addresses</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Source and destination MAC addresses</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">TCP port numbers</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Application layer HTTP data</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.2 — Layer 1 Devices: Repeaters & Hubs",
      "html": "<h3>📖 Core Theory</h3>\n<p>Layer 1 devices operate on raw signals to extend the physical reach of a network.</p>\n<ul>\n<li><strong>Repeater</strong>: As electrical signals travel along a cable, they suffer from <strong>attenuation</strong> (loss of signal strength). A repeater is an active device that receives a weak signal, regenerates it to its original strength and shape, and retransmits it. It does not inspect frames or modify data.</li>\n<li><strong>Hub</strong>: A hub is a multi-port repeater. It connects multiple hosts in a physical star layout. When a signal arrives on one port of a hub, the hub regenerates it and floods it out of all other ports. Types:</li>\n<li><em>Passive Hub</em>: Merely connects cables; does not require power or regenerate signals.</li>\n<li><em>Active Hub</em>: Requires power to regenerate and amplify signals.</li>\n</ul>\n<p>Because hubs flood all traffic, they share bandwidth among all connected devices. All devices connected to a hub belong to <strong>one collision domain</strong> and <strong>one broadcast domain</strong>, and must run in <strong>half-duplex</strong> mode (using CSMA/CD to manage collisions).</p>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Why is an active hub referred to as a multi-port repeater?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It routes traffic based on destination IP addresses</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It regenerates incoming signals and broadcasts them out of all ports</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It segments the network into separate collision domains</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It translates protocols between LANs and WANs</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> If five hosts are connected to a 10 Mbps active hub, how is the bandwidth allocated?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Each host has a dedicated 10 Mbps channel</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">The 10 Mbps bandwidth is shared, allowing only one host to transmit at a time</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">The total network bandwidth is increased to 50 Mbps</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Bandwidth is dynamically routed based on MAC addresses</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.3 — Layer 2 Devices: Bridges",
      "html": "<h3>📖 Core Theory</h3>\n<p>A <strong>Bridge</strong> is a Layer 2 device designed to connect and filter traffic between LAN segments.</p>\n<p>Bridges segment collision domains. A bridge has a forwarding table (or MAC address table) that maps MAC addresses to their physical ports. It initially builds this table by reading the <strong>source MAC address</strong> of incoming frames. When a frame is received, the bridge inspects the destination MAC address:</p>\n<ul>\n<li>If the destination host is on the same segment as the source host, the bridge drops (filters) the frame, preventing it from flooding other segments.</li>\n<li>If the destination is on a different segment, the bridge forwards the frame to that port.</li>\n<li>If the destination MAC address is unknown, the bridge floods the frame to all other ports.</li>\n</ul>\n<p>Bridges are classified into two main types:</p>\n<ol>\n<li><strong>Transparent Bridge (Learning Bridge)</strong>: Used in Ethernet networks. It dynamically learns MAC addresses and is transparent to hosts.</li>\n<li><strong>Source Routing Bridge</strong>: Used in Token Ring networks. The source host specifies the complete path through the network in the frame header.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> How does a transparent bridge populate its MAC address table?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">By sending OSPF routing updates</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">By reading the source MAC address of incoming frames</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Through manual administration using web portals</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">By querying a central DNS server</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> A bridge receives a frame where both the source and destination MAC addresses belong to hosts on the same physical port segment. What does the bridge do?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Forward the frame to all ports</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Filter (drop) the frame to isolate traffic</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Send the frame to a Layer 3 router</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Send a collision jam signal</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.4 — Layer 2 Devices: Switches",
      "html": "<h3>📖 Core Theory</h3>\n<p>A <strong>Switch</strong> is a multi-port bridge that operates at the Data Link Layer (Layer 2). Switches replace hubs in modern LANs, providing dedicated, collision-free connections to hosts.</p>\n<p>Each port on a switch is a <strong>separate collision domain</strong>, allowing hosts to operate in <strong>full-duplex</strong> mode (transmitting and receiving simultaneously). Switches support three forwarding methods:</p>\n<ol>\n<li><strong>Store-and-Forward</strong>: The switch receives the entire frame and validates its <strong>Frame Check Sequence (FCS)</strong> checksum. If the frame is error-free, it is forwarded. This is the most reliable method but introduces the highest latency.</li>\n<li><strong>Cut-Through</strong>: The switch forwards the frame immediately after reading the first 6 bytes (destination MAC address). This offers the lowest latency but propagates corrupted frames.</li>\n<li><strong>Fragment-Free (Modified Cut-Through)</strong>: The switch buffers the first 64 bytes of the frame (where collisions are most likely to occur) before forwarding. This provides a balance between store-and-forward and cut-through.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which switch forwarding method provides the lowest latency but can propagate corrupted frames?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Store-and-Forward</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Cut-Through</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Fragment-Free</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Adaptive Switching</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is a key advantage of a Layer 2 Switch over a Multi-port Hub?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Switches isolate broadcast domains</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Switches isolate collision domains on each port, enabling full-duplex communication</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Switches compile IP packet headers</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Switches translate protocols between AppleTalk and TCP/IP</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.5 — Layer 3 & Upper Devices: Routers, Gateways, NICs & Modems",
      "html": "<h3>📖 Core Theory</h3>\n<p>Higher-layer devices manage routing, protocol translation, and media connections.</p>\n<ul>\n<li><strong>Router (Layer 3)</strong>: Connects different networks. It reads destination IP addresses, calculates the best path using routing metrics, and forwards packets. Routers <strong>segment both collision and broadcast domains</strong> across their interfaces.</li>\n<li><strong>Gateway (Layers 4-7)</strong>: A protocol converter that translates data between incompatible networks (e.g. connecting a TCP/IP network to an IBM SNA or AppleTalk network).</li>\n<li><strong>NIC (Network Interface Card)</strong>: Operates at both <strong>Layer 1</strong> (physical connection and signal encoding) and <strong>Layer 2</strong> (hardware MAC addressing and framing).</li>\n<li><strong>Modem (Modulator-Demodulator)</strong>: Converts digital data from a computer into analog signals (modulation) for transmission over analog lines (e.g. telephone lines), and converts received analog signals back into digital data (demodulation).</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which device is designed to translate protocols between completely different network architectures (e.g. TCP/IP to AppleTalk)?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Switch</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Router</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Gateway</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Bridge</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> At which OSI layers does a Network Interface Card (NIC) operate?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Layer 3 and Layer 4</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Layer 1 and Layer 2</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Layer 2 and Layer 3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Layer 5 and Layer 7</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.6 — LLC vs MAC Sublayers of the Data Link Layer",
      "html": "<h3>📖 Core Theory</h3>\n<p>The IEEE split the Data Link Layer (Layer 2) into two sublayers to separate hardware-specific details from logical link management:</p>\n<ul>\n<li><strong>LLC (Logical Link Control) Sublayer (IEEE 802.2)</strong>: This upper sublayer interfaces with the Network Layer. It identifies the encapsulated Network Layer protocol (e.g. IPv4 or IPv6) using EtherType fields, allowing multiple protocols to share the same physical link. It also manages flow control and error control independently of the physical media.</li>\n<li><strong>MAC (Media Access Control) Sublayer (IEEE 802.3/802.11/802.15)</strong>: This lower sublayer interfaces directly with the Physical Layer. It handles physical addressing (MAC addresses), frame encapsulation (adding preambles and FCS trailers), and regulates medium access (e.g. CSMA/CD for Ethernet, CSMA/CA for Wi-Fi).</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which sublayer of the Data Link Layer interfaces with the Network Layer and identifies the encapsulated protocol?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">MAC Sublayer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">LLC Sublayer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Physical Coding Sublayer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">IP Sublayer</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> The MAC sublayer is responsible for which of the following tasks?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Flow control interfaces with the Network layer</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Physical addressing and frame encapsulation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Protocol multiplexing</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Signal regeneration</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.7 — Ethernet Frame Structure & Size Rules",
      "html": "<h3>📖 Core Theory</h3>\n<p>The standard Ethernet (IEEE 802.3) frame contains fields for synchronization, addressing, and error checking:</p>\n<ol>\n<li><strong>Preamble (7 bytes)</strong>: Alternating 0s and 1s that synchronize receiver clocks.</li>\n<li><strong>SFD (Start Frame Delimiter) (1 byte)</strong>: Set to <code>10101011</code> to mark the start of the frame.</li>\n<li><strong>Destination MAC (6 bytes)</strong>: The physical address of the receiver.</li>\n<li><strong>Source MAC (6 bytes)</strong>: The physical address of the sender.</li>\n<li><strong>Length/Type (2 bytes)</strong>: Indicates the payload length or the encapsulated Layer 3 protocol type (e.g. <code>0x0800</code> for IPv4).</li>\n<li><strong>Data Payload (46 – 1500 bytes)</strong>: The encapsulated Layer 3 packet.</li>\n<li><strong>FCS (Frame Check Sequence) (4 bytes)</strong>: A CRC-32 checksum used for error detection.</li>\n</ol>\n<h3>⚠️ Size Rules</h3>\n<ul>\n<li><strong>Minimum Frame Size</strong>: <strong>64 bytes</strong> (excluding the preamble and SFD). If the payload is less than 46 bytes, padding bits (zeros) are added. Frames smaller than 64 bytes are classified as <strong>runt frames</strong> and discarded.</li>\n<li><strong>Maximum Frame Size</strong>: <strong>1518 bytes</strong> (excluding the preamble and SFD). Frames larger than this are classified as <strong>jumbo frames</strong>.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What is the minimum size of a standard Ethernet frame (excluding the preamble and Start Frame Delimiter)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">46 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">64 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">1518 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">512 bits</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What happens to an Ethernet frame that is received with a total size of 55 bytes?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">The receiver pads it to 64 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It is classified as a runt frame and discarded</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It is forwarded to the default gateway</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">The receiver requests retransmission</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.8 — MAC Address Structure & Hexadecimal Conversions",
      "html": "<h3>📖 Core Theory</h3>\n<p>A <strong>MAC Address</strong> is a <strong>48-bit (6-byte)</strong> physical address hardcoded in a NIC's ROM, also known as the <strong>Burned-In Address (BIA)</strong>. It is written as 12 hexadecimal digits (e.g. <code>00:1A:2B:3C:4D:5E</code>).</p>\n<p>The address is split into two halves:</p>\n<ul>\n<li><strong>OUI (Organizationally Unique Identifier)</strong>: The first 24 bits (3 bytes) identify the hardware manufacturer, assigned by the IEEE.</li>\n<li><strong>NIC Specific / Device Identifier</strong>: The last 24 bits (3 bytes) uniquely identify the NIC, assigned by the manufacturer.</li>\n</ul>\n<p>Hexadecimal conversions map each hex character to exactly <strong>4 bits</strong> in binary:</p>\n<ul>\n<li><code>0</code> = <code>0000</code>, <code>9</code> = <code>1001</code>, <code>A</code> (10) = <code>1010</code>, <code>F</code> (15) = <code>1111</code>.</li>\n<li>Example: <code>1A</code> in hex converts to <code>0001 1010</code> in binary.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> How many bits are there in a standard Ethernet MAC address?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">32 bits</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">48 bits</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">64 bits</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">128 bits</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In the MAC address <code>00:1A:2B:3C:4D:5E</code>, which part represents the manufacturer OUI?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\"><code>3C:4D:5E</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\"><code>00:1A:2B</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\"><code>00:1A:2B:3C</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\"><code>4D:5E</code></span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 5.9 — Unicast, Multicast & Broadcast MAC Addresses",
      "html": "<h3>📖 Core Theory</h3>\n<p>Ethernet supports three addressing modes:</p>\n<ul>\n<li><strong>Unicast</strong>: Directs frames to a single destination host. The <strong>I/G (Individual/Group) bit</strong> (the least significant bit of the first byte of the MAC address) is set to <strong>0</strong>.</li>\n<li><strong>Multicast</strong>: Directs frames to a group of registered hosts. The I/G bit is set to <strong>1</strong>. In Ethernet, multicast MAC addresses always begin with the prefix <strong><code>01:00:5E</code></strong>.</li>\n<li><strong>Broadcast</strong>: Directs frames to all hosts on the local network segment. The broadcast address is <strong><code>FF:FF:FF:FF:FF:FF</code></strong> (all 48 bits set to 1). Switches flood broadcast frames out of all ports except the port of origin.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which of the following is the standard MAC broadcast address?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\"><code>00:00:00:00:00:00</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\"><code>01:00:5E:00:00:01</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\"><code>FF:FF:FF:FF:FF:FF</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\"><code>255.255.255.255</code></span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> How is a multicast MAC frame distinguished from a unicast MAC frame?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">The source MAC address is set to all Fs</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">The least significant bit of the first byte (I/G bit) is set to 1</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">The frame length is larger than 1518 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">The frame contains an IP address in the payload</span>\n    </div>\n  </div>\n</div>\n<hr>"
    }
  ],
  "unit7_8": [
    {
      "title": "Topic 7.1 — Types of Transmission Errors",
      "html": "<h3>📖 Core Theory</h3>\n<p>Signal impairment during transmission can introduce errors. These are classified into three types:</p>\n<ol>\n<li><strong>Single-Bit Error</strong>: Only 1 bit in a data block is altered (flipped from 0 to 1, or 1 to 0). This typically occurs in parallel transmission systems where each wire carries a bit and a single wire suffers a transient noise spike.</li>\n<li><strong>Multiple-Bit Error</strong>: Two or more non-consecutive bits in a data block are altered.</li>\n<li><strong>Burst Error</strong>: Two or more consecutive bits in a data block are altered. The <strong>length of a burst error</strong> is measured from the <strong>first corrupted bit to the last corrupted bit</strong> (even if some intermediate bits are correct). Burst errors are common in serial transmissions, where a noise spike of even short duration can span across multiple consecutive bits.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> A burst error is defined as having a length measured from:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">The start of the frame to the middle of the payload</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">The first corrupted bit to the last corrupted bit in a data block</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">The total duration of the noise spike in milliseconds</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">The number of uncorrupted bits in the frame</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Why are burst errors more common in serial transmissions than single-bit errors?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Serial transmission uses multiple parallel wires</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">A noise spike of even short duration spans across multiple consecutive bits</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Serial transmission does not support parity checks</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Serial cables are always longer</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.2 — Vertical Redundancy Check (VRC / Parity Check)",
      "html": "<h3>📖 Core Theory</h3>\n<p><strong>VRC (Vertical Redundancy Check)</strong>, or simple parity check, appends a single redundant bit (parity bit) to each data byte.</p>\n<ul>\n<li><strong>Even Parity</strong>: The parity bit is set to 0 or 1 so that the total count of 1s in the byte (including the parity bit) is <strong>even</strong>.</li>\n<li><strong>Odd Parity</strong>: The parity bit is set so that the total count of 1s is <strong>odd</strong>.</li>\n</ul>\n<p>VRC can only detect <strong>single-bit errors</strong> (or odd numbers of bit flips). It cannot detect even numbers of bit flips because they cancel out the parity count, making VRC unreliable for burst errors.</p>\n<h3>📐 Worked Examples</h3>\n<ul>\n<li><strong>Example 1</strong>: Data word is <code>1101011</code> (contains five 1s, which is odd).</li>\n<li><em>Even Parity</em>: Add a <code>1</code> to make the count even (6). Codeword sent: <code>1101011 1</code>.</li>\n<li><em>Odd Parity</em>: Add a <code>0</code> to keep the count odd (5). Codeword sent: <code>1101011 0</code>.</li>\n<li><strong>Example 2</strong>: Data word is <code>1010100</code> (contains three 1s, which is odd).</li>\n<li><em>Even Parity</em>: Add a <code>1</code> to make the count even (4). Codeword sent: <code>1010100 1</code>.</li>\n<li><em>Odd Parity</em>: Add a <code>0</code> to keep the count odd (3). Codeword sent: <code>1010100 0</code>.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> If using Even Parity, what is the parity bit value for the data word <code>1011101</code>?</div>\n  <div class=\"mcq-options\" data-correct=\"a\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">1</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">0</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">2</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">8</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> Count of 1s is 5, add 1 to make it 6\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which of the following errors cannot be detected by a Vertical Redundancy Check (VRC)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Single-bit error</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Two-bit error in the same byte</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Three-bit error in the same byte</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Parity bit corruption only</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.3 — Longitudinal Redundancy Check (LRC / 2D Parity)",
      "html": "<h3>📖 Core Theory</h3>\n<p><strong>LRC (Longitudinal Redundancy Check)</strong>, or 2D Parity, organizes data in a two-dimensional grid (matrix). A parity bit is calculated for each column, creating an extra <strong>parity row</strong> (known as the block check character).</p>\n<p>LRC can detect <strong>burst errors</strong> because it checks data both vertically and horizontally. However, it cannot detect errors where the same two bit positions are corrupted in two different rows, as the column parity checks remain unchanged.</p>\n<h3>📐 Worked Example</h3>\n<p>Given a block of four 8-bit data words using Even Parity:</p>\n<pre><code class=\"language-\">Row 1:  1 0 1 0 1 0 1 1\nRow 2:  1 1 0 1 1 1 0 0\nRow 3:  0 1 1 1 0 0 1 1\nRow 4:  1 0 1 0 1 0 0 1\n----------------------\nLRC:    1 0 1 0 1 1 0 1  &lt;- Parity row (each column has even 1s)\n</code></pre>\n<p>If bits 1 and 2 of Row 1 are flipped, the horizontal parity of Row 1 fails. If a burst error corrupts column 3, the vertical parity of column 3 fails. This vertical-horizontal combination allows LRC to isolate and detect burst errors.</p>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What is another name for the Longitudinal Redundancy Check (LRC)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Modulo-2 division check</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">2D Parity Check</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Polynomial remainder code</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Checksum block sum</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What type of error is LRC capable of detecting that VRC cannot?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Zero-bit error</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Burst error</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Phase shift error</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">None, they detect the same errors</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.4 — Checksum Error Detection (Math & Carry-overs)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Checksum error detection is used in IP, TCP, and UDP headers, relying on <strong>One's Complement Arithmetic</strong>.</p>\n<p>In One's Complement addition, if there is a carry-out from the most significant bit (MSB), it is added back to the least significant bit (LSB), known as the <strong>end-around carry</strong>.</p>\n<p>Sender Steps:</p>\n<ol>\n<li>Split data into $k$ blocks of $n$ bits.</li>\n<li>Add all blocks using one's complement addition.</li>\n<li>Complement the final sum (flip all bits) to create the <strong>Checksum</strong>.</li>\n<li>Append the checksum to the data and transmit.</li>\n</ol>\n<p>Receiver Steps:</p>\n<ol>\n<li>Add all received blocks (including the checksum) using one's complement.</li>\n<li>Complement the result.</li>\n<li>If the result is <strong>all zeros</strong>, the data is accepted. Otherwise, it is discarded.</li>\n</ol>\n<h3>📐 Worked Example</h3>\n<p>Transmit <code>10101001 00111001</code> (two 8-bit blocks):</p>\n<pre><code class=\"language-\">  10101001\n+ 00111001\n----------\n  11100010   &lt;- Sum (no carry-out from MSB)\n</code></pre>\n<ul>\n<li>Complement Sum: <code>00011101</code> (this is the Checksum).</li>\n<li>Codeword sent: <code>10101001 00111001 00011101</code>.</li>\n<li>Receiver addition (no errors):</li>\n</ul>\n<pre><code class=\"language-\">  11100010 (sum of data)\n+ 00011101 (checksum)\n----------\n  11111111 &lt;- Receiver Sum\n</code></pre>\n<ul>\n<li>Complement of Receiver Sum: <code>00000000</code> (All zeros = Data Accepted).</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> In checksum calculation, what is done with the carry bit that exits the most significant bit during addition?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Discarded</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Added back to the least significant bit (end-around carry)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Saved as the checksum value</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Multiplied by the divisor</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> If a receiver calculates a checksum sum of <code>10111101</code> (before complementing), what does this indicate?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">No error in data</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">An error is present in transmission</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Data should be padded</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Checksum should be resent</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.5 — Cyclic Redundancy Check (CRC / Modulo-2 Division)",
      "html": "<h3>📖 Core Theory</h3>\n<p><strong>CRC (Cyclic Redundancy Check)</strong> is a powerful error detection method based on polynomial division. The sender and receiver agree on a generator polynomial (divisor) in advance. The divisor can be represented in binary or polynomial form (e.g. $x^3 + x + 1 \\implies 1011$).</p>\n<p>Sender Steps:</p>\n<ol>\n<li>Append $N-1$ zeros to the dataword, where $N$ is the number of bits in the generator.</li>\n<li>Divide this augmented dataword by the generator using <strong>binary XOR division</strong> (modulo-2 division).</li>\n<li>The remainder (which must be $N-1$ bits) is the CRC.</li>\n<li>Replace the appended zeros with this remainder to form the codeword.</li>\n</ol>\n<p>Receiver Steps:</p>\n<ol>\n<li>Divide the received codeword by the generator using XOR division.</li>\n<li>If the remainder is 0, the data is accepted. Otherwise, it contains an error.</li>\n</ol>\n<h3>📐 Modulo-2 XOR Division Example</h3>\n<p>Dataword = <code>100100</code>, Divisor = <code>1101</code> (4 bits $\\implies$ append 3 zeros).</p>\n<p>Dividend = <code>100100000</code></p>\n<pre><code class=\"language-\">       1101 ) 100100000\n              1101\n              ---- (XOR subtraction: 1^1=0, 1^0=1, 0^0=0, 0^1=1)\n               1000\n               1101\n               ----\n                1010\n                1101\n                ----\n                 1110\n                 1101\n                 ----\n                  1110\n                  1101\n                  ----\n                   0110 (MSB is 0, use 0000)\n                   0000\n                   ----\n                    1100\n                    1101\n                    ----\n                     001  &lt;- Remainder (CRC bits)\n</code></pre>\n<ul>\n<li>Codeword sent: <code>100100 001</code>.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> If the CRC divisor polynomial is $x^4 + x + 1$, what is its binary representation?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\"><code>10001</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\"><code>10011</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\"><code>11001</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\"><code>10111</code></span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> Powers 4, 1, and 0 are present =&gt; 1 0 0 1 1\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> How many zeros must be appended to a dataword if the generator polynomial is 6 bits long?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">6</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">5</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">7</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">4</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> $N-1$ zeros\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.6 — Hamming Code Error Correction (Parity & Correction)",
      "html": "<h3>📖 Core Theory</h3>\n<p>The Hamming code is an error-correcting code that can detect and correct single-bit errors. It introduces redundancy bits at specific positions ($1, 2, 4, 8...$).</p>\n<ul>\n<li><strong>Redundancy Bits Formula</strong>: To find the number of redundancy bits ($r$) needed for $m$ data bits, use:</li>\n</ul>\n<p>$$2^r \\ge m + r + 1$$</p>\n<p>For $m=4$, the minimum $r$ is 3 ($2^3 \\ge 4 + 3 + 1 \\implies 8 \\ge 8$). Total bits $= 7$.</p>\n<ul>\n<li><strong>Positioning</strong>: Parity bits are placed at power-of-2 positions ($1, 2, 4, 8...$). Data bits fill the remaining positions ($3, 5, 6, 7...$).</li>\n<li><strong>Parity Bit Coverage</strong>:</li>\n<li>$r_1$ checks positions with LSB set: $1, 3, 5, 7, 9, 11...$</li>\n<li>$r_2$ checks positions with 2nd bit set: $2, 3, 6, 7, 10, 11...$</li>\n<li>$r_4$ checks positions with 3rd bit set: $4, 5, 6, 7, 12, 13...$</li>\n</ul>\n<p>To locate a corrupted bit, the receiver recalculates all parity checks. The binary value of the parity results ($PR_4 PR_2 PR_1$) gives the decimal position of the flipped bit.</p>\n<h3>📐 Worked Example</h3>\n<p>Transmit data <code>0101</code> (4 bits $\\implies$ 3 parity bits $\\implies$ 7 total bits):</p>\n<ul>\n<li>Positions: $1(r_1), 2(r_2), 3(d_3=0), 4(r_4), 5(d_5=1), 6(d_6=0), 7(d_7=1)$.</li>\n<li>$r_1$ checks $3, 5, 7 \\implies 0, 1, 1 \\implies$ Even parity requires $r_1 = 0$.</li>\n<li>$r_2$ checks $3, 6, 7 \\implies 0, 0, 1 \\implies$ Even parity requires $r_2 = 1$.</li>\n<li>$r_4$ checks $5, 6, 7 \\implies 1, 0, 1 \\implies$ Even parity requires $r_4 = 0$.</li>\n<li>Codeword sent: <code>0 1 0 0 1 0 1</code>.</li>\n<li>If the bit at position 5 flips to 0 during transmission (received <code>0 1 0 0 0 0 1</code>):</li>\n<li>Recalculate $PR_1$ on $1,3,5,7 \\implies 0 \\oplus 0 \\oplus 0 \\oplus 1 = 1$.</li>\n<li>Recalculate $PR_2$ on $2,3,6,7 \\implies 1 \\oplus 0 \\oplus 0 \\oplus 1 = 0$.</li>\n<li>Recalculate $PR_4$ on $4,5,6,7 \\implies 0 \\oplus 0 \\oplus 0 \\oplus 1 = 1$.</li>\n<li>Error position: $PR_4 PR_2 PR_1 \\implies 1 0 1 = 5$ in decimal. The bit at position 5 is corrupted and corrected!</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> For an 8-bit data word, what is the minimum number of redundancy bits required to implement a single-bit error-correcting Hamming code?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">4</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">5</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">2</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> $2^4 \\ge 8+4+1 \\implies 16 \\ge 13$\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In a 7-bit Hamming codeword, if the parity check equations yield $PR_4 PR_2 PR_1 = 110$, which bit position contains the error?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Position 3</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Position 6</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Position 5</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Position 7</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> Binary 110 = 6 in decimal\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.7 — Pure ALOHA vs Slotted ALOHA",
      "html": "<h3>📖 Core Theory</h3>\n<p>ALOHA is a random access protocol developed at the University of Hawaii for shared media.</p>\n<ul>\n<li><strong>Pure ALOHA</strong>: Stations transmit whenever they have data. If a collision occurs, stations wait a random time (back-off) and retransmit. The <strong>vulnerable time</strong> during which a collision can occur is $2 \\times T_{fr}$ (where $T_{fr}$ is the frame transmission time). The throughput formula is:</li>\n</ul>\n<p>$$S = G \\times e^{-2G}$$</p>\n<p><em>Maximum throughput is <strong>18.4%</strong> ($0.184$) when traffic load $G = 0.5$.</em></p>\n<ul>\n<li><strong>Slotted ALOHA</strong>: Time is divided into discrete slots equal to $T_{fr}$. Stations can only transmit at the <strong>start of a slot</strong>. The <strong>vulnerable time</strong> is reduced to $T_{fr}$. The throughput formula is:</li>\n</ul>\n<p>$$S = G \\times e^{-G}$$</p>\n<p><em>Maximum throughput is <strong>36.8%</strong> ($0.368$) when traffic load $G = 1$.</em></p>\n<h3>📐 Worked Example</h3>\n<p>A system uses Pure ALOHA. Frames are 200 bits, and the channel speed is 200 kbps. The system generates 1000 frames/sec:</p>\n<ol>\n<li>$T_{fr} = 200\\text{ bits} / 200,000\\text{ bps} = 1\\text{ ms} = 0.001\\text{ s}$.</li>\n<li>Traffic load $G = 1000\\text{ frames/sec} \\times 0.001\\text{ s} = 1$.</li>\n<li>Throughput $S = 1 \\times e^{-2(1)} = e^{-2} \\approx 0.135 \\implies 13.5\\%$.</li>\n<li>Number of successfully transmitted frames $= 1000 \\times 0.135 = 135$ frames/sec.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What is the maximum throughput efficiency of Slotted ALOHA?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">18.4%</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">36.8%</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">50.0%</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">100%</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In Pure ALOHA, if the frame transmission time is $T_{fr} = 2$ ms, what is the vulnerable time window during which a collision can occur?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">2 ms</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">4 ms</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">1 ms</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">8 ms</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> $2 \\times T_{fr}$\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.8 — CSMA Persistence Modes",
      "html": "<h3>📖 Core Theory</h3>\n<p><strong>CSMA (Carrier Sense Multiple Access)</strong> improves on ALOHA by requiring stations to listen to the medium (carrier sense) before transmitting. Persistence modes define how a station reacts when the channel is busy:</p>\n<ol>\n<li><strong>1-Persistent CSMA</strong>: The station continuously senses the channel. As soon as it becomes idle, the station transmits immediately with a probability of 1. If multiple stations are waiting, this causes a collision.</li>\n<li><strong>Non-Persistent CSMA</strong>: If the channel is busy, the station waits a random time before sensing the channel again. This reduces collisions but introduces idle channel time.</li>\n<li><strong>p-Persistent CSMA</strong>: Used in slotted channels. If the channel is idle, the station transmits with probability $p$. With probability $1-p$, it waits one slot and senses the channel again.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which CSMA persistence mode has the highest collision rate when multiple stations are waiting to transmit?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Non-Persistent</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">1-Persistent</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">p-Persistent</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Active-Persistent</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In p-persistent CSMA, what does a station do when it senses the channel is idle?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Transmits immediately with probability 1</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Transmits with probability p, and waits one slot with probability 1-p</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Backs off for a random number of slots</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Sends a jamming signal</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.9 — CSMA/CD vs CSMA/CA",
      "html": "<h3>📖 Core Theory</h3>\n<p>Media access control protocols manage collisions based on whether the medium is wired or wireless.</p>\n<ul>\n<li><strong>CSMA/CD (Collision Detection)</strong>: Used in half-duplex <strong>wired</strong> Ethernet networks. Stations listen to the medium while transmitting. If a collision is detected, they abort transmission, send a <strong>jamming signal</strong> to alert other stations, and execute a <strong>binary exponential back-off</strong> before retrying. To guarantee that a station can detect a collision before it finishes transmitting, the frame transmission time must be at least twice the propagation delay:</li>\n</ul>\n<p>$$T_{fr} \\ge 2 \\times T_p$$</p>\n<p><em>Which implies $Min\\ Frame\\ Size = Bandwidth \\times 2 \\times T_p$.</em></p>\n<ul>\n<li><strong>CSMA/CA (Collision Avoidance)</strong>: Used in <strong>wireless</strong> networks (IEEE 802.11 Wi-Fi) where collision detection is difficult due to the <strong>hidden node problem</strong>. Stations avoid collisions using <strong>IFS (Interframe Space)</strong> timers and a <strong>contention window</strong>. They can also use an optional <strong>RTS/CTS (Request to Send / Clear to Send)</strong> handshake to reserve the medium.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Why is CSMA/CA preferred over CSMA/CD in wireless networks?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Wireless networks have no propagation delay</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Wireless adapters cannot transmit and detect collisions at the same time</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Wireless frames do not require preambles</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Wireless signals only support token passing</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In CSMA/CD, what is the minimum frame transmission time required to guarantee collision detection?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Equal to the propagation delay ($T_p$)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Twice the propagation delay ($2 \\times T_p$)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Half the propagation delay ($0.5 \\times T_p$)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Four times the propagation delay ($4 \\times T_p$)</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 7.10 — Controlled Access & Channelization",
      "html": "<h3>📖 Core Theory</h3>\n<p>Controlled access and channelization protocols prevent collisions by regulating medium access.</p>\n<ul>\n<li><strong>Controlled Access</strong>:</li>\n<li><em>Reservation</em>: Stations reserve time slots before transmitting.</li>\n<li><em>Polling</em>: A primary station controls the link, using <strong>Poll</strong> (asking if a client has data) and <strong>Select</strong> (alerting a client to receive data).</li>\n<li><em>Token Passing</em>: A token frame circulates in a loop; only the station holding the token can transmit.</li>\n<li><strong>Channelization</strong>:</li>\n<li><em>FDMA (Frequency Division)</em>: Divides the bandwidth into distinct frequency bands.</li>\n<li><em>TDMA (Time Division)</em>: Divides time into slots, shared among stations.</li>\n<li><em>CDMA (Code Division)</em>: Stations transmit simultaneously over the same frequency using unique orthogonal <strong>chip sequences</strong> (codes).</li>\n</ul>\n<h3>📐 CDMA Data Recovery Calculation</h3>\n<p>Let Station A have chip code $C_A = [+1, -1, -1, +1]$ and Station B have $C_B = [+1, +1, -1, -1]$ ($N=4$):</p>\n<ul>\n<li>Station A sends bit 1 $\\implies S_A = [+1, -1, -1, +1]$.</li>\n<li>Station B sends bit 0 $\\implies S_B = [-1, -1, +1, +1]$.</li>\n<li>Combined channel signal $D = S_A + S_B = [0, -2, 0, +2]$.</li>\n<li>To recover A's data, calculate the dot product of $D$ and $C_A$:</li>\n</ul>\n<p>$$D \\cdot C_A = (0 \\times 1) + (-2 \\times -1) + (0 \\times -1) + (2 \\times 1) = 0 + 2 + 0 + 2 = 4$$</p>\n<ul>\n<li>Divide by the chip length ($N=4$): $\\frac{4}{4} = +1$ (representing bit 1). Data is recovered successfully!</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> In a CDMA network, if 80 stations need to transmit, what is the minimum Walsh table size required?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">80</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">64</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">128</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">256</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> $2^7 = 128 \\ge 80$\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which controlled access method uses \"Poll\" and \"Select\" frames to manage transmissions?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Token Passing</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Polling</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Reservation</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">FDMA</span>\n    </div>\n  </div>\n</div>\n<hr>"
    }
  ],
  "unit9": [
    {
      "title": "Topic 9.1 — Flow & Error Control Protocols (Stop-and-Wait)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Flow and error control protocols at the Data Link Layer prevent receiver overload and handle transmission errors.</p>\n<ul>\n<li><strong>Noiseless Channel Protocols</strong>:</li>\n<li><em>Simplest</em>: Idealized protocol with no flow or error control.</li>\n<li><em>Stop-and-Wait</em>: The sender transmits one frame and waits for an Acknowledgment (ACK) before sending the next.</li>\n<li><strong>Noisy Channel Protocols (ARQ)</strong>:</li>\n<li><em>Stop-and-Wait ARQ</em>: Introduces error control. If a frame is corrupted, the receiver discards it. The sender runs a <strong>timer</strong> for each transmission; if the timer expires before an ACK is received, the sender retransmits. It uses <strong>modulo-2 sequence numbers</strong> (0 and 1) to detect duplicate frames.</li>\n</ul>\n<p>The efficiency of the Stop-and-Wait protocol is given by:</p>\n<p>$$\\eta = \\frac{1}{1 + 2a}$$</p>\n<p>where $a = \\frac{T_p}{T_{fr}}$ is the ratio of propagation delay to transmission time.</p>\n<h3>📐 Worked Example</h3>\n<p>A link has a propagation delay ($T_p$) of 4 ms and a frame transmission time ($T_{fr}$) of 2 ms:</p>\n<ol>\n<li>$a = 4 / 2 = 2$.</li>\n<li>Efficiency $\\eta = \\frac{1}{1 + 2(2)} = \\frac{1}{5} = 20\\%$.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Why does Stop-and-Wait ARQ use modulo-2 sequence numbers (0 and 1)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">To calculate the CRC checksum</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">To allow the receiver to identify duplicate frames</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">To double the window size</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">To calculate propagation delay</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is the efficiency of a Stop-and-Wait link where the propagation delay is 1.5 ms and the frame transmission time is 1 ms?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">50%</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">25%</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">33%</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">20%</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> a = 1.5/1 = 1.5; Eff = 1/(1 + 2(1.5)) = 1/4 = 25%\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 9.2 — Sliding Window Protocols: Go-Back-N (GBN)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Sliding window protocols allow the sender to transmit multiple frames before receiving an ACK, improving link utilization.</p>\n<ul>\n<li><strong>Go-Back-N (GBN) ARQ</strong>:</li>\n<li><strong>Sender Window Size ($W_s$)</strong>: $2^n - 1$ (where $n$ is the number of bits in the sequence number field).</li>\n<li><strong>Receiver Window Size ($W_r$)</strong>: Always <strong>1</strong>. It only accepts frames in the correct order.</li>\n<li><strong>Retransmission</strong>: Uses <strong>cumulative ACKs</strong> (ACK $x$ acknowledges all frames up to $x-1$). If a frame is lost or corrupted, the receiver discards it and all subsequent out-of-order frames. When the sender's timer expires, <strong>the sender must retransmit the lost frame and all subsequent frames</strong> in the window.</li>\n</ul>\n<h3>📐 Worked Example</h3>\n<p>Sequence numbers use 3 bits ($n=3 \\implies W_s = 2^3 - 1 = 7$):</p>\n<ul>\n<li>The sender transmits frames <code>0, 1, 2, 3, 4</code>. Frame <code>2</code> is lost.</li>\n<li>The receiver accepts <code>0</code> and <code>1</code> (sending ACK <code>2</code>), but discards <code>3</code> and <code>4</code> because it is waiting for <code>2</code> ($W_r=1$).</li>\n<li>The sender's timer for frame <code>2</code> expires. The sender must retransmit frames <code>2, 3, and 4</code>.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> In Go-Back-N ARQ with a 4-bit sequence number, what is the maximum sender window size?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">16</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">15</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">8</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">1</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> $2^4 - 1 = 15$\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In Go-Back-N ARQ, if frame 4 is lost during transmission, what frames must the sender retransmit when the timer expires?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Only frame 4</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Frame 4 and all subsequent transmitted frames in the window</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Only frame 4 and frame 5</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">The entire sequence starting from frame 0</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 9.3 — Sliding Window Protocols: Selective Repeat (SR)",
      "html": "<h3>📖 Core Theory</h3>\n<p>Selective Repeat (SR) ARQ optimizes Go-Back-N by avoiding unnecessary retransmissions of error-free frames.</p>\n<ul>\n<li><strong>Window Sizes</strong>: Both the sender and receiver windows are equal:</li>\n</ul>\n<p>$$W_s = W_r = 2^{n-1}$$</p>\n<ul>\n<li><strong>Retransmission</strong>: The receiver has a buffer to store out-of-order frames. If a frame is lost, the receiver sends a <strong>NAK (Negative Acknowledgment)</strong> for that frame. The sender <strong>only retransmits the single lost frame</strong> identified by the NAK, saving bandwidth on noisy links.</li>\n</ul>\n<h3>🔍 GBN vs Selective Repeat</h3>\n<table>\n<thead><tr>\n<th>Feature</th>\n<th>Go-Back-N ARQ</th>\n<th>Selective Repeat ARQ</th>\n</tr></thead>\n<tbody>\n<tr>\n<td><strong>Sender Window ($W_s$)</strong></td>\n<td>$2^n - 1$</td>\n<td>$2^{n-1}$</td>\n</tr>\n<tr>\n<td><strong>Receiver Window ($W_r$)</strong></td>\n<td>1</td>\n<td>$2^{n-1}$</td>\n</tr>\n<tr>\n<td><strong>On Error</strong></td>\n<td>Retransmits all outstanding frames</td>\n<td>Retransmits only the failed frame</td>\n</tr>\n<tr>\n<td><strong>Receiver Buffer</strong></td>\n<td>No buffer needed</td>\n<td>Requires buffer to store out-of-order frames</td>\n</tr>\n</tbody></table>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> In Selective Repeat ARQ using 4-bit sequence numbers, what is the maximum sender window size?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">15</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">8</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">16</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">1</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> $2^{4-1} = 8$\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Selective Repeat ARQ is more efficient than Go-Back-N on noisy lines because:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">It uses smaller sequence numbers</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">It only retransmits frames that were lost or corrupted</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">It does not require receiver buffer memory</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">It operates without timers</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 9.4 — Piggybacking & ARQ Protocol Comparisons",
      "html": "<h3>📖 Core Theory</h3>\n<ul>\n<li><strong>Piggybacking</strong>: A technique where control information (like an ACK) is enclosed within a data frame going in the opposite direction. It saves bandwidth by avoiding separate ACK frame overhead.</li>\n<li><strong>ARQ Protocol Efficiency Comparison</strong>:</li>\n<li><em>Stop-and-Wait</em>: Low efficiency. Best for short links with low propagation delays.</li>\n<li><em>Go-Back-N</em>: Medium efficiency. Best for links with low error rates.</li>\n<li><em>Selective Repeat</em>: High efficiency. Best for links with high propagation delays and high error rates, though it requires more receiver buffer memory.</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What is the primary purpose of piggybacking in data link protocols?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">To encrypt frame payloads</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">To bundle an acknowledgment within a reverse-direction data frame</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">To divide the sliding window size</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">To bypass collision domains</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which sliding window protocol requires the largest buffer memory at the receiver?</div>\n  <div class=\"mcq-options\" data-correct=\"c\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Stop-and-Wait ARQ</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Go-Back-N ARQ</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Selective Repeat ARQ</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Pure ALOHA</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 9.5 — Network Layer: IP, Header Fields & Fragmentation",
      "html": "<h3>📖 Core Theory</h3>\n<p>The Network Layer (Layer 3) handles packet routing across networks. The primary protocol is <strong>IP (Internet Protocol)</strong>, which is connectionless, best-effort (unreliable), and media-independent.</p>\n<p>Key IPv4 header fields include:</p>\n<ul>\n<li><strong>Version (4 bits)</strong>: Displays the IP version (e.g. <code>4</code> for IPv4).</li>\n<li><strong>HLEN (4 bits)</strong>: Header length in 32-bit words. The minimum value is 5 (20 bytes), and the maximum is 15 (60 bytes).</li>\n<li><strong>TTL (Time to Live) (8 bits)</strong>: Decremented by 1 at each router hop. If it hits 0, the packet is dropped, preventing routing loops.</li>\n<li><strong>Protocol (8 bits)</strong>: Identifies the next protocol (e.g. TCP = 6, UDP = 17).</li>\n<li><strong>Fragmentation Fields</strong>: <strong>Identification</strong> (16 bits) identifies fragments of the same packet. <strong>Flags</strong> (3 bits) include Don't Fragment (DF) and More Fragments (MF). <strong>Fragment Offset</strong> (13 bits) specifies the position of the fragment in the original packet in units of <strong>8 bytes</strong>.</li>\n</ul>\n<h3>📐 Fragmentation Example</h3>\n<p>A 4000-byte packet (20-byte IP header + 3980-byte payload) is sent over a link with an MTU of 1500 bytes (max payload per fragment $= 1480$ bytes, which is divisible by 8):</p>\n<ol>\n<li><strong>Fragment 1</strong>: Total size = 1500 bytes (1480 data), Offset = 0, MF = 1.</li>\n<li><strong>Fragment 2</strong>: Total size = 1500 bytes (1480 data), Offset $= 1480 / 8 = 185$, MF = 1.</li>\n<li><strong>Fragment 3</strong>: Total size = 1040 bytes (1020 data), Offset $= 2960 / 8 = 370$, MF = 0.</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> If an IP fragment has a More Fragments (MF) flag set to 0 and a Fragment Offset set to 185, this indicates that the fragment is:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">The first fragment of a segmented packet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">The last fragment of a segmented packet</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">A corrupted packet fragment</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">A non-fragmented packet</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> Which IPv4 header field is used to prevent packets from circulating endlessly in routing loops?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Protocol</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Time to Live (TTL)</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Header Checksum</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">HLEN</span>\n    </div>\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 9.6 — Network Layer: Routing & Addressing",
      "html": "<h3>📖 Core Theory</h3>\n<p>Routers forward packets using dynamic routing protocols, categorized into Distance Vector and Link State:</p>\n<ul>\n<li><strong>Distance Vector Routing (DVR)</strong>: Based on the <strong>Bellman-Ford algorithm</strong>. Routers periodically share their entire routing table only with direct neighbors. DVR is prone to the <strong>Count-to-Infinity</strong> problem (slow convergence to bad news).</li>\n<li><strong>Link State Routing (LSR)</strong>: Based on <strong>Dijkstra's algorithm</strong>. Each router builds a complete map of the network by flooding Link State Packets (LSPs) to all routers, providing faster convergence.</li>\n<li><strong>BGP (Border Gateway Protocol)</strong>: A path-vector protocol used for routing between Autonomous Systems, running over TCP on port 179.</li>\n</ul>\n<p>IPv4 addresses are 32 bits long. Classful addressing defines fixed classes:</p>\n<ul>\n<li><em>Class A</em>: Range <code>0.0.0.0</code> – <code>127.255.255.255</code> (mask <code>/8</code>).</li>\n<li><em>Class B</em>: Range <code>128.0.0.0</code> – <code>191.255.255.255</code> (mask <code>/16</code>).</li>\n<li><em>Class C</em>: Range <code>192.0.0.0</code> – <code>223.255.255.255</code> (mask <code>/24</code>).</li>\n</ul>\n<p><strong>Classless Addressing (CIDR)</strong> uses variable masks (<code>/n</code>). Usable hosts in a block are $2^{32-n} - 2$ (excluding the network and broadcast addresses).</p>\n<h3>📐 CIDR Worked Example</h3>\n<p>Given IP address block <code>192.168.1.50/29</code>:</p>\n<ol>\n<li>Number of addresses $= 2^{32-29} = 2^3 = 8$.</li>\n<li>First address (Network ID): AND the IP with the mask (last octet: 50 is <code>00110010</code>, mask <code>/29</code> has 5 bits for network $\\implies <code>00110000</code> = 48$) $\\implies <code>192.168.1.48</code>$.</li>\n<li>Last address (Broadcast ID) $\\implies <code>192.168.1.55</code>$.</li>\n<li>Usable Host range $\\implies <code>192.168.1.49</code>$ to <code>192.168.1.54</code> (6 hosts).</li>\n</ol>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> Which routing protocol algorithm is used in Link State Routing (e.g. OSPF)?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">Bellman-Ford</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Dijkstra's Algorithm</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">Floyd-Warshall</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Diffie-Hellman</span>\n    </div>\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> What is the network address (first address) for the CIDR block IP address <code>10.10.10.35/30</code>?</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\"><code>10.10.10.0</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\"><code>10.10.10.32</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\"><code>10.10.10.34</code></span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\"><code>10.10.10.36</code></span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> 35 in binary: 00100011; /30 mask keeps first 6 bits of last octet =&gt; 00100000 = 32\n  </div>\n</div>\n<hr>"
    },
    {
      "title": "Topic 9.7 — CN Formulas & Ports Mega Summary",
      "html": "<h3>📖 Master Formula Sheet</h3>\n<ul>\n<li><strong>Mesh Topology</strong>: Links $= \\frac{N(N-1)}{2}$; Ports per device $= N-1$.</li>\n<li><strong>ALOHA Throughput</strong>: Pure ALOHA: $S = G e^{-2G}$; Slotted ALOHA: $S = G e^{-G}$.</li>\n<li><strong>CSMA/CD Min Frame Size</strong>: $Min\\ Size = Bandwidth \\times 2 \\times T_p$.</li>\n<li><strong>Hamming Code redundancy</strong>: $2^r \\ge m + r + 1$.</li>\n<li><strong>Stop-and-Wait Efficiency</strong>: $\\eta = \\frac{1}{1+2a}$ where $a = \\frac{T_p}{T_{fr}}$.</li>\n<li><strong>CDMA Walsh Table Size</strong>: $N = 2^m \\ge \\text{number of stations}$.</li>\n<li><strong>CIDR Usable Hosts</strong>: $Hosts = 2^{32-n} - 2$.</li>\n<li><strong>Fragment Offset</strong>: $Offset = \\frac{\\text{bytes sent}}{8}$.</li>\n</ul>\n<h3>📖 Port Numbers Reference</h3>\n<ul>\n<li><strong>FTP</strong>: 20 (Data), 21 (Control)</li>\n<li><strong>SSH</strong>: 22</li>\n<li><strong>Telnet</strong>: 23</li>\n<li><strong>SMTP</strong>: 25</li>\n<li><strong>DNS</strong>: 53</li>\n<li><strong>DHCP</strong>: 67 (Server), 68 (Client)</li>\n<li><strong>TFTP</strong>: 69</li>\n<li><strong>HTTP</strong>: 80</li>\n<li><strong>SNMP</strong>: 161 (Poll), 162 (Trap)</li>\n<li><strong>BGP</strong>: 179</li>\n<li><strong>HTTPS</strong>: 443</li>\n</ul>\n<h3>📝 practice MCQs</h3>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q1.</strong> What is the minimum frame size for a 10 Mbps CSMA/CD network where the maximum propagation delay is $25.6\\ \\mu s$?</div>\n  <div class=\"mcq-options\" data-correct=\"a\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">64 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">128 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">32 bytes</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">512 bytes</span>\n    </div>\n  </div>\n  <div class=\"mcq-explanation\" style=\"display: none;\">\n    <strong>Explanation:</strong> Calculation: 10M <em> 2 </em> 25.6μs = 512 bits = 64 bytes\n  </div>\n</div>\n<div class=\"mcq-card\">\n  <div class=\"mcq-question\"><strong>Q2.</strong> In a sliding window protocol, if the sender window size is 8 and the transmission is 100% efficient, this implies:</div>\n  <div class=\"mcq-options\" data-correct=\"b\">\n    <div class=\"mcq-option\" data-option=\"a\">\n      <span class=\"option-letter\">a)</span>\n      <span class=\"option-text\">$a$ must be equal to zero</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"b\">\n      <span class=\"option-letter\">b)</span>\n      <span class=\"option-text\">Window size $W_s \\ge 1 + 2a$</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"c\">\n      <span class=\"option-letter\">c)</span>\n      <span class=\"option-text\">The channel has no propagation delay</span>\n    </div>\n    <div class=\"mcq-option\" data-option=\"d\">\n      <span class=\"option-letter\">d)</span>\n      <span class=\"option-text\">Frame transmission time is larger than propagation time</span>\n    </div>\n  </div>\n</div>"
    }
  ]
};

const IOT_MCQ_BANK = [
  {
    "unit": "unit1",
    "unitName": "Unit 1: Introduction to Embedded Systems",
    "questions": [
      {
        "id": 1,
        "question": "Which of the following is the defining characteristic of an embedded system?",
        "options": {
          "a": "Vg pna eha nal trareny-checbfr qrfxgbc bcrengvat flfgrz",
          "b": "Vg vf cebtenzzrq rkpyhfviryl va uvtu-yriry Clguba fpevcg ng ehagvzr",
          "c": "**Vg vf n pbzovangvba bs uneqjner naq fbsgjner qrfvtarq sbe n fcrpvsvp, qrqvpngrq gnfx ✓**",
          "d": "Vg ynpxf nal sbez bs zvpebcebprffbef be pbageby ybtvp"
        },
        "correct": "c"
      },
      {
        "id": 2,
        "question": "What is the primary economic driver for resource sharing in enterprise networks?",
        "options": {
          "a": "Gb vapernfr genafzvffvba yngrapl",
          "b": "**Gb erqhpr uneqjner qhcyvpngvba naq ybjre pncvgny rkcraqvgher ✓**",
          "c": "Gb ryvzvangr gur arrq sbe sverjnyyf",
          "d": "Gb olcnff ybpny argjbex npprff yriryf"
        },
        "correct": "b"
      },
      {
        "id": 3,
        "question": "Why is the software in an embedded system referred to as 'firmware'?",
        "options": {
          "a": "Vg vf culfvpnyyl evtvq naq pnaabg or hctenqrq",
          "b": "**Vg vf rzorqqrq qverpgyl vagb aba-ibyngvyr uneqjner zrzbel yvxr EBZ be Synfu ✓**",
          "c": "Vg bayl ehaf jura gur uneqjner vf xrcg ng pbyq grzcrengherf",
          "d": "Vg vf fhccyvrq ol gur pbzchgre punffvf znahsnpghere"
        },
        "correct": "b"
      },
      {
        "id": 4,
        "question": "Which processor type is hardwired to execute a single specific task and cannot be reprogrammed?",
        "options": {
          "a": "Trareny Checbfr Cebprffbe (TCC)",
          "b": "Qvtvgny Fvtany Cebprffbe (QFC)",
          "c": "**Fvatyr-Checbfr Rzorqqrq Cebprffbe ✓**",
          "d": "Zvpebpbagebyyre"
        },
        "correct": "c"
      },
      {
        "id": 5,
        "question": "In a Microprocessor, which components are external to the main CPU chip?",
        "options": {
          "a": "Bayl gur Nevguzrgvp Ybtvp Havg (NYH)",
          "b": "**ENZ, EBZ, naq V/B crevcureny pbagebyyref ✓**",
          "c": "Gur PCH ertvfgref naq gur Vafgehpgvba Qrpbqre",
          "d": "Gur Cebtenz Pbhagre naq Pbageby Havg"
        },
        "correct": "b"
      },
      {
        "id": 6,
        "question": "Which architecture utilizes a single shared memory and bus for both instructions and data?",
        "options": {
          "a": "Uneineq Nepuvgrpgher",
          "b": "**Iba Arhznaa Nepuvgrpgher ✓**",
          "c": "Uneineq-Cevaprgba Uloevq Nepuvgrpgher",
          "d": "Qhny-Ohf EVFP Nepuvgrpgher"
        },
        "correct": "b"
      },
      {
        "id": 7,
        "question": "What is the 'Von Neumann Bottleneck'?",
        "options": {
          "a": "Gur PCH ehaavat bhg bs ertvfgre fcnpr qhevat n zhygvcyl-npphzhyngr vafgehpgvba",
          "b": "Gur vanovyvgl bs gur PCH gb pbzcvyr nffrzoyl pbqr qverpgyl",
          "c": "**Gur PCH pnaabg ernq qngn naq srgpu vafgehpgvbaf ng gur fnzr gvzr orpnhfr gurl funer gur fnzr ohf ✓**",
          "d": "Qngn pbeehcgvat jura geniryyvat guebhtu n svore bcgvp pnoyr"
        },
        "correct": "c"
      },
      {
        "id": 8,
        "question": "Which architecture is preferred for microcontrollers due to its ability to fetch instructions and read data in parallel?",
        "options": {
          "a": "Iba Arhznaa Nepuvgrpgher",
          "b": "Cevaprgba Nepuvgrpgher",
          "c": "**Uneineq Nepuvgrpgher ✓**",
          "d": "Znvasenzr-Ohf Nepuvgrpgher"
        },
        "correct": "c"
      },
      {
        "id": 9,
        "question": "A System-on-Chip (SoC) is best described as:",
        "options": {
          "a": "N zvpebcebprffbe pbaarpgrq gb rkgreany ENZ ba n zbgureobneq",
          "b": "**Na vagrtengrq pvephvg gung vapbecbengrf n PCH, zrzbel, V/B cbegf, naq enqvb zbqhyrf ba n fvatyr fvyvpba qvr ✓**",
          "c": "N pybhq freire pyhfgre ehaavat iveghny znpuvar pbagebyyref",
          "d": "N culfvpny fgne gbcbybtl argjbex hfvat cnffvir uhof"
        },
        "correct": "b"
      },
      {
        "id": 10,
        "question": "Which of the following is a key characteristic of General Purpose Processors (GPPs)?",
        "options": {
          "a": "Uvtuyl bcgvzvmrq sbe ybj-cbjre onggrel bcrengvbaf",
          "b": "Fgevpgyl yvzvgrq gb fvatyr-shapgvba vaqhfgevny nccyvpngvbaf",
          "c": "**Uvtu pbzchgngvbany cbjre jvgu trareny vafgehpgvba frgf, ohg uvtu pbfg naq cbjre qenj ✓**",
          "d": "Zhfg or fgberq va n jevgr-bapr ernq-znal EBZ puvc"
        },
        "correct": "c"
      },
      {
        "id": 11,
        "question": "Which of the following is an application of an Application Specific Instruction Set Processor (ASIP)?",
        "options": {
          "a": "Ehaavat fgnaqneq bssvpr cebqhpgvivgl fhvgrf ba n qrfxgbc",
          "b": "**Qvtvgny fvtany cebprffvat naq ivqrb rapbqvat vafvqr n pnzren ✓**",
          "c": "Ubfgvat choyvp jrofvgrf ba n iveghny cevingr freire",
          "d": "Nyybpngvat VC nqqerffrf ba n QUPC freire"
        },
        "correct": "b"
      },
      {
        "id": 12,
        "question": "Which design metric is typically a major constraint in battery-operated consumer IoT devices?",
        "options": {
          "a": "Znvasenzr pbzcngvovyvgl",
          "b": "Znkvzhz qngnonfr fvmr pncnpvgl",
          "c": "**Ybj cbjre pbafhzcgvba naq fznyy culfvpny sbbgcevag ✓**",
          "d": "ROPQVP qrpbqvat fcrrqf"
        },
        "correct": "c"
      },
      {
        "id": 13,
        "question": "What does 'autonomous' mean in the definition of a computer network?",
        "options": {
          "a": "Gur argjbex ehaf ragveryl jvgubhg uhzna nqzvavfgengbef",
          "b": "**Rnpu pbaarpgrq pbzchgre vf pncnoyr bs ehaavat vaqrcraqragyl naq cbffrffrf vgf bja PCH ✓**",
          "c": "Gur pnoyvat zhfg ebhgr vgfrys nhgbzngvpnyyl hfvat fzneg cebgbpbyf",
          "d": "Nyy qrivprf zhfg or nffvtarq gur fnzr VC cersvk"
        },
        "correct": "b"
      },
      {
        "id": 14,
        "question": "The CPU instruction cycle consists of which sequential phases?",
        "options": {
          "a": "Qrpbqr, Rapncfhyngr, Ebhgr, Grezvangr",
          "b": "Purpx, Nzcyvsvrf, Zbqhyngr, Genafzvg",
          "c": "**Srgpu, Qrpbqr, Rkrphgr ✓**",
          "d": "Frtzrag, Cnpxntr, Qryvire, Purpx"
        },
        "correct": "c"
      },
      {
        "id": 15,
        "question": "Which CPU register holds the memory address of the next instruction to be fetched?",
        "options": {
          "a": "Vafgehpgvba Ertvfgre (VE)",
          "b": "Npphzhyngbe (NPP)",
          "c": "**Cebtenz Pbhagre (CP) ✓**",
          "d": "Zrzbel Qngn Ertvfgre (ZQE)"
        },
        "correct": "c"
      },
      {
        "id": 16,
        "question": "In which architecture can program instructions and data have different word widths (e.g. 14-bit instructions and 8-bit data)?",
        "options": {
          "a": "Iba Arhznaa Nepuvgrpgher",
          "b": "**Uneineq Nepuvgrpgher ✓**",
          "c": "Cevaprgba Nepuvgrpgher",
          "d": "PVFP Nepuvgrpgher"
        },
        "correct": "b"
      },
      {
        "id": 17,
        "question": "Which of the following is a classic example of a Microcontroller?",
        "options": {
          "a": "Vagry Pber v7-13700X",
          "b": "**NGzrtn328C (hfrq va Neqhvab Hab) ✓**",
          "c": "AIVQVN EGK 4090 TCH",
          "d": "NZQ Elmra 5 5600K"
        },
        "correct": "b"
      },
      {
        "id": 18,
        "question": "What type of memory is typically used to store the bootloader and firmware in a microcontroller?",
        "options": {
          "a": "FENZ",
          "b": "QENZ",
          "c": "**EBZ be Synfu zrzbel ✓**",
          "d": "Iveghny Fjnc Zrzbel"
        },
        "correct": "c"
      },
      {
        "id": 19,
        "question": "What is the primary function of a Digital Signal Processor (DSP)?",
        "options": {
          "a": "Gb ebhgr VC cnpxrgf npebff JNA obhaqnevrf",
          "b": "**Gb cresbez encvq zngurzngvpny bcrengvbaf yvxr zhygvcyl-npphzhyngr ba qvtvgvmrq fvtanyf ✓**",
          "c": "Gb pbaireg nanybt cubar yvarf gb qvtvgny Rgurearg cbegf",
          "d": "Gb npg nf n prageny pbagebyyre va Fgne gbcbybtvrf"
        },
        "correct": "b"
      },
      {
        "id": 20,
        "question": "Which design aspect is a disadvantage of Harvard Architecture compared to Von Neumann?",
        "options": {
          "a": "Fybjre rkrphgvba fcrrqf qhr gb funerq ohfrf",
          "b": "Vanovyvgl gb fhccbeg uvtu-cresbeznapr nccyvpngvbaf",
          "c": "**Vapernfrq uneqjner pbzcyrkvgl naq pbfg qhr gb qhny ohf ebhgvat ✓**",
          "d": "Fhfprcgvovyvgl gb gur pbhag-gb-vasvavgl ceboyrz"
        },
        "correct": "c"
      }
    ]
  },
  {
    "unit": "unit2",
    "unitName": "Unit 2: Hardware, Sensors & Actuators",
    "questions": [
      {
        "id": 21,
        "question": "What is the relationship between power supply voltage and gate switching speed in digital logic circuits?",
        "options": {
          "a": "Ybjre ibygntr vapernfrf fjvgpuvat fcrrq",
          "b": "**Uvture ibygntr vapernfrf fjvgpuvat fcrrq, erqhpvat cebcntngvba qrynl ✓**",
          "c": "Ibygntr qbrf abg nssrpg fjvgpuvat fcrrq",
          "d": "Fjvgpuvat fcrrq vf qrgrezvarq bayl ol gur pelfgny yratgu"
        },
        "correct": "b"
      },
      {
        "id": 22,
        "question": "Which logic level voltage range is commonly used for modern low-power mobile SoCs?",
        "options": {
          "a": "5.0I ± 0.25I",
          "b": "**1.5I ± 0.2I be ybjre ✓**",
          "c": "12.0I ± 1.0I",
          "d": "3.3I ± 0.3I"
        },
        "correct": "b"
      },
      {
        "id": 23,
        "question": "What is the purpose of a Quartz Crystal in an oscillator circuit?",
        "options": {
          "a": "Gb npg nf n ibygntr svygre",
          "b": "**Gb trarengr n uvtuyl fgnoyr, cerpvfr pybpx serdhrapl hfvat cvrmbryrpgevp cebcregvrf ✓**",
          "c": "Gb qrgrpg grzcrengher inevngvbaf va gur fvyvpba qvr",
          "d": "Gb cebgrpg gur PCH ntnvafg cbjre fhetrf"
        },
        "correct": "b"
      },
      {
        "id": 24,
        "question": "What type of reset circuit uses a capacitor and a resistor to hold the reset pin low for a short duration after power-on?",
        "options": {
          "a": "Npgvir uvtu fbsgjner erfrg",
          "b": "**EP Cbjre-ba Erfrg pvephvg ✓**",
          "c": "Jngpuqbt biresybj erfrg",
          "d": "Oebja-bhg qrgrpgvba vagreehcg"
        },
        "correct": "b"
      },
      {
        "id": 25,
        "question": "A Watchdog Timer (WDT) is primarily designed to:",
        "options": {
          "a": "Pbhag rkgreany vachg chyfrf sebz frafbef",
          "b": "**Erpbire gur zvpebpbagebyyre sebz fbsgjner unatf ol gevttrevat n erfrg vs abg pyrnerq erthyneyl ✓**",
          "c": "Zrnfher gur rkrphgvba fcrrq bs gur znva ybbc",
          "d": "Cresbez rapelcgvba pnyphyngvbaf ba qngn cnpxrgf"
        },
        "correct": "b"
      },
      {
        "id": 26,
        "question": "Brown-out Detection (BOD) circuits monitor which parameter?",
        "options": {
          "a": "PCH bcrengvat grzcrengher",
          "b": "**Cbjre fhccyl ibygntr yriryf, erfrggvat gur PCH vs ibygntr qebcf orybj n guerfubyq ✓**",
          "c": "Gur nzbhag bs nzovrag yvtug fheebhaqvat gur qrivpr",
          "d": "Havpnfg cnpxrg pbyyvfvbaf ba Rgurearg cbegf"
        },
        "correct": "b"
      },
      {
        "id": 27,
        "question": "Which type of memory is volatile and loses its data when power is disconnected?",
        "options": {
          "a": "RRCEBZ",
          "b": "Synfu Zrzbel",
          "c": "**FENZ / QENZ ✓**",
          "d": "Znfxrq EBZ"
        },
        "correct": "c"
      },
      {
        "id": 28,
        "question": "What is the difference between EEPROM and Flash memory?",
        "options": {
          "a": "RRCEBZ vf ibyngvyr juvyr Synfu vf aba-ibyngvyr",
          "b": "**RRCEBZ nyybjf olgr-yriry renfvat, juvyr Synfu vf renfrq va ynetr oybpxf ✓**",
          "c": "Synfu zrzbel erdhverf pbafgnag erserfuvat juvyr RRCEBZ qbrf abg",
          "d": "RRCEBZ vf zhpu snfgre guna Synfu zrzbel"
        },
        "correct": "b"
      },
      {
        "id": 29,
        "question": "Which of the following is classified as an active sensor?",
        "options": {
          "a": "**YVQNE (erdhverf fraqvat n yvtug chyfr gb zrnfher ersyrpgvba) ✓**",
          "b": "YQE (Yvtug Qrcraqrag Erfvfgbe)",
          "c": "Gurezvfgbe (punatrf erfvfgnapr jvgu grzcrengher)",
          "d": "Cubgbqvbqr"
        },
        "correct": "a"
      },
      {
        "id": 30,
        "question": "An LDR (Light Dependent Resistor) exhibits which electrical behavior when light intensity increases?",
        "options": {
          "a": "Vgf erfvfgnapr vapernfrf fvtavsvpnagyl",
          "b": "**Vgf erfvfgnapr qrpernfrf fvtavsvpnagyl ✓**",
          "c": "Vg trarengrf na ryrpgevpny pheerag qverpgyl",
          "d": "Vgf pncnpvgnapr punatrf"
        },
        "correct": "b"
      },
      {
        "id": 31,
        "question": "How does an LM35 temperature sensor represent temperature values?",
        "options": {
          "a": "Ol bhgchggvat n 10-ovg FCV qvtvgny jbeq",
          "b": "**Ol bhgchggvat n yvarne nanybt ibygntr (10zI cre qrterr Pryfvhf) ✓**",
          "c": "Ol nygrevat vgf pncnpvgnapr ol 1aS cre qrterr",
          "d": "Ol trarengvat uvtu-serdhrapl qvtvgny chyfrf"
        },
        "correct": "b"
      },
      {
        "id": 32,
        "question": "Which sensor would be most appropriate to measure pressure changes in a pneumatic system?",
        "options": {
          "a": "YZ35 frafbe",
          "b": "**Cvrmbryrpgevp be Pncnpvgvir cerffher frafbe ✓**",
          "c": "Hygenfbavp UP-FE04 frafbe",
          "d": "Yvtug Qrcraqrag Erfvfgbe"
        },
        "correct": "b"
      },
      {
        "id": 33,
        "question": "An Actuator is best defined as a device that:",
        "options": {
          "a": "Pbairegf culfvpny dhnagvgvrf vagb ryrpgevpny fvtanyf",
          "b": "**Pbairegf ryrpgevpny raretl be pbageby fvtanyf vagb culfvpny npgvba/zbgvba ✓**",
          "c": "Svygref abvfr sebz nanybt vachgf",
          "d": "Trarengrf uvtu serdhrapl pybpx fvtanyf"
        },
        "correct": "b"
      },
      {
        "id": 34,
        "question": "Which motor allows precise control of angular position, velocity, and acceleration without feedback sensors?",
        "options": {
          "a": "Oehfurq QP Zbgbe",
          "b": "**Fgrccre Zbgbe ✓**",
          "c": "NP Vaqhpgvba Zbgbe",
          "d": "Fbyrabvq"
        },
        "correct": "b"
      },
      {
        "id": 35,
        "question": "How does a Solenoid valve convert electrical energy into mechanical movement?",
        "options": {
          "a": "Ol hfvat n cvrmbryrpgevp pelfgny neenl",
          "b": "**Ol cnffvat pheerag guebhtu n pbvy gb trarengr na ryrpgebzntargvp svryq gung chyyf n cyhatre ✓**",
          "c": "Ol hfvat n trne genva naq oehfurf",
          "d": "Ol inelvat vgf vagreany erfvfgnapr"
        },
        "correct": "b"
      },
      {
        "id": 36,
        "question": "A servo motor differs from a standard DC motor because:",
        "options": {
          "a": "Vg ynpxf vagreany pbccre pbvyf",
          "b": "**Vg vapyhqrf n srrqonpx frafbe (cbgragvbzrgre) naq pbageby pvephvg gb znvagnva n cerpvfr natyr ✓**",
          "c": "Vg ehaf qverpgyl ba NP cbjre",
          "d": "Vg pnaabg or pbagebyyrq ol n zvpebpbagebyyre"
        },
        "correct": "b"
      },
      {
        "id": 37,
        "question": "Which type of reset occurs when the input supply voltage drops below the safe limit for CPU operations?",
        "options": {
          "a": "Fbsgjner Erfrg",
          "b": "**Oebja-bhg Erfrg ✓**",
          "c": "Jngpuqbt Gvzrbhg Erfrg",
          "d": "Znahny Chfuohggba Erfrg"
        },
        "correct": "b"
      },
      {
        "id": 38,
        "question": "What is the advantage of using a crystal oscillator over an RC oscillator?",
        "options": {
          "a": "Pelfgny bfpvyyngbef ner purncre gb vagrtengr ba n fvyvpba qvr",
          "b": "**Pelfgny bfpvyyngbef cebivqr n zhpu uvture serdhrapl fgnovyvgl naq cerpvfvba ✓**",
          "c": "EP bfpvyyngbef erdhver rkgreany dhnegm vachgf",
          "d": "Pelfgny bfpvyyngbef qb abg erdhver cbjre fhccyl yvarf"
        },
        "correct": "b"
      },
      {
        "id": 39,
        "question": "Which component acts as an electrical barrier or switch to control high-voltage/high-current devices using low-voltage microcontroller pins?",
        "options": {
          "a": "Pncnpvgbe",
          "b": "**Erynl be Bcgbpbhcyre ✓**",
          "c": "Gurezvfgbe",
          "d": "Erfvfgbe Argjbex"
        },
        "correct": "b"
      },
      {
        "id": 40,
        "question": "What will happen if software fails to 'kick' or clear the Watchdog Timer before its counter overflows?",
        "options": {
          "a": "Gur PCH unygf vafgehpgvba rkrphgvba vaqrsvavgryl",
          "b": "**Gur Jngpuqbt pvephvg gevttref n uneqjner erfrg bs gur zvpebpbagebyyre ✓**",
          "c": "Gur PCH nhgbzngvpnyyl ragref fyrrc zbqr",
          "d": "Gur flfgrz fjvgpurf gb frpbaqnel synfu zrzbel"
        },
        "correct": "b"
      }
    ]
  },
  {
    "unit": "unit3",
    "unitName": "Unit 3: Introduction to IoT",
    "questions": [
      {
        "id": 41,
        "question": "Which of the following represents the basic physical design of an IoT system?",
        "options": {
          "a": "Bayl uvtu-cresbeznapr pbzchgvat qngnonfrf",
          "b": "**Guvatf (VbG qrivprf) naq pbzzhavpngvba cebgbpbyf ✓**",
          "c": "N pragenyvmrq znvasenzr jvgu qhzo grezvanyf",
          "d": "Jverq pbnkvny pnoyrf bayl"
        },
        "correct": "b"
      },
      {
        "id": 42,
        "question": "In the logical design of an IoT system, what is the role of the 'Communication' functional block?",
        "options": {
          "a": "Nhguragvpngvat hfref naq cnffjbeqf",
          "b": "**Unaqyvat gur pbzzhavpngvba cebgbpbyf naq qngn rkpunatr orgjrra qrivprf naq freiref ✓**",
          "c": "Znantvat ybpny frafbe qngnonfrf",
          "d": "Ehaavat znpuvar yrneavat nytbevguzf ba gur qrivpr"
        },
        "correct": "b"
      },
      {
        "id": 43,
        "question": "Which IoT communication model is characterized by the client sending a request and the server responding immediately, in a synchronous, stateless manner?",
        "options": {
          "a": "Chfu-Chyy Zbqry",
          "b": "**Erdhrfg-Erfcbafr Zbqry ✓**",
          "c": "Choyvfu-Fhofpevor Zbqry",
          "d": "Rkpyhfvir Cnve Zbqry"
        },
        "correct": "b"
      },
      {
        "id": 44,
        "question": "In a Publish-Subscribe communication model, which entity is responsible for routing messages from publishers to subscribers based on topics?",
        "options": {
          "a": "Tngrjnl",
          "b": "**Oebxre ✓**",
          "c": "Pyvrag Ebhgre",
          "d": "Npprff Cbvag"
        },
        "correct": "b"
      },
      {
        "id": 45,
        "question": "Which IoT communication model uses a persistent, bidirectional, full-duplex connection over a single TCP socket?",
        "options": {
          "a": "Erdhrfg-Erfcbafr Zbqry",
          "b": "Chfu-Chyy Zbqry",
          "c": "**Rkpyhfvir Cnve Zbqry ✓**",
          "d": "Choyvfu-Fhofpevor Zbqry"
        },
        "correct": "c"
      },
      {
        "id": 46,
        "question": "What is a key difference between M2M (Machine-to-Machine) and IoT (Internet of Things)?",
        "options": {
          "a": "Z2Z hgvyvmrf pybhq qngnonfrf, jurernf VbG eryvrf ba qverpg cbvag-gb-cbvag yvaxf",
          "b": "**Z2Z glcvpnyyl hfrf vfbyngrq cbvag-gb-cbvag yvaxf; VbG hfrf tybony vagrearg argjbexf naq pybhq nepuvgrpgherf ✓**",
          "c": "Z2Z vf uvtuyl fpnynoyr pbzcnerq gb VbG",
          "d": "VbG qbrf abg fhccbeg jveryrff pbzzhavpngvba"
        },
        "correct": "b"
      },
      {
        "id": 47,
        "question": "An IoT system is designed with a single device that collects data, stores it in a local database, and displays it via a local web interface without any cloud dependency. This matches which IoT Level?",
        "options": {
          "a": "**VbG Yriry-1 ✓**",
          "b": "VbG Yriry-2",
          "c": "VbG Yriry-3",
          "d": "VbG Yriry-4"
        },
        "correct": "a"
      },
      {
        "id": 48,
        "question": "In IoT Level-3, what is the primary role of the Cloud?",
        "options": {
          "a": "Gur pybhq bayl cresbezf ybpny frafbe ernqvat",
          "b": "**Qngn vf fgberq naq nanylmrq va gur pybhq, juvyr gur ybpny qrivpr bayl frafrf naq fraqf qngn ✓**",
          "c": "Ab pybhq rkvfgf va Yriry-3",
          "d": "Gur pybhq znantrf gur ybpny zrfu gbcbybtl"
        },
        "correct": "b"
      },
      {
        "id": 49,
        "question": "Which IoT level is characterized by multiple independent nodes, a centralized cloud database, and observer nodes running analytical applications?",
        "options": {
          "a": "VbG Yriry-3",
          "b": "VbG Yriry-4",
          "c": "**VbG Yriry-5 ✓**",
          "d": "VbG Yriry-1"
        },
        "correct": "c"
      },
      {
        "id": 50,
        "question": "In the Publish-Subscribe model, publishers and subscribers do not need to know about each other. This is known as:",
        "options": {
          "a": "Flzzrgevp rapelcgvba",
          "b": "**Qrpbhcyvat va fcnpr naq gvzr ✓**",
          "c": "Qlanzvp ebhgvat",
          "d": "Ybtvpny tebhcvat"
        },
        "correct": "b"
      },
      {
        "id": 51,
        "question": "Which functional block of an IoT system handles device authentication, authorization, and data encryption?",
        "options": {
          "a": "Nccyvpngvba oybpx",
          "b": "**Frphevgl oybpx ✓**",
          "c": "Qrivpr oybpx",
          "d": "Freivprf oybpx"
        },
        "correct": "b"
      },
      {
        "id": 52,
        "question": "What is the primary function of the 'Device' block in the physical design of IoT?",
        "options": {
          "a": "Ebhgvat cnpxrgf npebff qvssrerag fhoargf",
          "b": "**Frafvat, npghngvba, qngn cebprffvat, naq ybpny pbageby shapgvbaf ✓**",
          "c": "Znantvat pybhq qngnonfrf",
          "d": "Genafyngvat cebgbpby fgnpxf"
        },
        "correct": "b"
      },
      {
        "id": 53,
        "question": "Which IoT level is best suited for complex, wide-area applications with high volumes of data, requiring multiple end-nodes and cloud-based big data analytics?",
        "options": {
          "a": "VbG Yriry-1",
          "b": "VbG Yriry-2",
          "c": "**VbG Yriry-6 ✓**",
          "d": "VbG Yriry-3"
        },
        "correct": "c"
      },
      {
        "id": 54,
        "question": "The Push-Pull communication model is best described as:",
        "options": {
          "a": "N flapuebabhf zbqry jurer gur pyvrag chyyf qngn sebz gur freire",
          "b": "**Na nflapuebabhf zbqry jurer dhrhrf qrpbhcyr choyvfuref naq pbafhzref, chfuvat qngn sebz cebqhpre gb dhrhr naq chyyvat sebz dhrhr gb pbafhzre ✓**",
          "c": "N pbaarpgvba-bevragrq rkpyhfvir cnve zbqry",
          "d": "N zhygvpnfg enqvb oebnqpnfg"
        },
        "correct": "b"
      },
      {
        "id": 55,
        "question": "In which M2M component is the communication logic typically embedded?",
        "options": {
          "a": "Trareny checbfr jro oebjfre",
          "b": "**Z2Z Nern Argjbex Abqr/Zbqhyr ✓**",
          "c": "Pybhq Qngnonfr pyhfgre",
          "d": "QAF freire"
        },
        "correct": "b"
      },
      {
        "id": 56,
        "question": "Which protocol is commonly used to establish the Exclusive Pair communication model over the web?",
        "options": {
          "a": "UGGC 1.1",
          "b": "**JroFbpxrgf ✓**",
          "c": "GSGC",
          "d": "FZGC"
        },
        "correct": "b"
      },
      {
        "id": 57,
        "question": "What type of communication model does MQTT utilize?",
        "options": {
          "a": "Erdhrfg-Erfcbafr",
          "b": "**Choyvfu-Fhofpevor ✓**",
          "c": "Rkpyhfvir Cnve",
          "d": "Fvzcyr Cbyyvat"
        },
        "correct": "b"
      },
      {
        "id": 58,
        "question": "In IoT logical design, which block provides services like device discovery, device registry, and status monitoring?",
        "options": {
          "a": "Qrivpr oybpx",
          "b": "**Znantrzrag oybpx ✓**",
          "c": "Nccyvpngvba oybpx",
          "d": "Frphevgl oybpx"
        },
        "correct": "b"
      },
      {
        "id": 59,
        "question": "Which of the following is a primary domain application for IoT?",
        "options": {
          "a": "Fgnaqneq znvasenzr ongpu pbzcvyvat",
          "b": "**Fzneg Pvgvrf, Fzneg Tevq, naq Vaqhfgevny Nhgbzngvba ✓**",
          "c": "Bssyvar zntargvp gncr fgbentr",
          "d": "Hafuvryqrq pbccre ohf gbcbybtvrf"
        },
        "correct": "b"
      },
      {
        "id": 60,
        "question": "M2M systems generally emphasize which aspect of network communication?",
        "options": {
          "a": "Raq-hfre vagrenpgvir tencuvpf vagresnprf",
          "b": "**Qverpg znpuvar-gb-znpuvar gryrzrgel naq qrivpr vagrtengvba ✓**",
          "c": "Fbpvny zrqvn qngn zvavat",
          "d": "Bcra-npprff choyvp vagrearg flfgrzf"
        },
        "correct": "b"
      }
    ]
  },
  {
    "unit": "unit4",
    "unitName": "Unit 4: Arduino Interfacing & Programming",
    "questions": [
      {
        "id": 61,
        "question": "Which microcontroller chip serves as the main processor on a standard Arduino Uno board?",
        "options": {
          "a": "NGzrtn8",
          "b": "**NGzrtn328C ✓**",
          "c": "NEZ Pbegrk-Z4",
          "d": "Vagry 8051"
        },
        "correct": "b"
      },
      {
        "id": 62,
        "question": "How many digital input/output pins are available on the Arduino Uno board?",
        "options": {
          "a": "8",
          "b": "**14 ✓**",
          "c": "20",
          "d": "6"
        },
        "correct": "b"
      },
      {
        "id": 63,
        "question": "How many pins on the Arduino Uno support Pulse Width Modulation (PWM) output?",
        "options": {
          "a": "14",
          "b": "**6 ✓** *(Cvaf 3, 5, 6, 9, 10, 11)*\a",
          "c": "8",
          "d": "2"
        },
        "correct": "b"
      },
      {
        "id": 64,
        "question": "How many analog input pins are available on the Arduino Uno board?",
        "options": {
          "a": "14",
          "b": "**6 ✓** *(N0 guebhtu N5)*\a",
          "c": "12",
          "d": "4"
        },
        "correct": "b"
      },
      {
        "id": 65,
        "question": "The built-in Analog-to-Digital Converter (ADC) on the Arduino Uno has what resolution?",
        "options": {
          "a": "8-ovg",
          "b": "**10-ovg ✓** *(inyhrf 0 gb 1023)*\a",
          "c": "12-ovg",
          "d": "16-ovg"
        },
        "correct": "b"
      },
      {
        "id": 66,
        "question": "What are the two mandatory functions in every Arduino sketch?",
        "options": {
          "a": "`fgneg()` naq `ybbc()`",
          "b": "**`frghc()` naq `ybbc()` ✓**",
          "c": "`frghc()` naq `eha()`",
          "d": "`vavg()` naq `znva()`"
        },
        "correct": "b"
      },
      {
        "id": 67,
        "question": "What is the function of the `setup()` block in Arduino programming?",
        "options": {
          "a": "Vg ehaf pbagvahbhfyl gb cebprff pnyphyngvbaf",
          "b": "**Vg ehaf bapr ng fgneghc gb vavgvnyvmr cva zbqrf, frevny pbzzhavpngvba, naq inevnoyrf ✓**",
          "c": "Vg pbzcvyrf gur ovanel pbqr gb synfu zrzbel",
          "d": "Vg zbavgbef gur jngpuqbt gvzre erfrg fgngr"
        },
        "correct": "b"
      },
      {
        "id": 68,
        "question": "Which function is used to configure a specific pin as an INPUT or OUTPUT?",
        "options": {
          "a": "`qvtvgnyJevgr()`",
          "b": "**`cvaZbqr()` ✓**",
          "c": "`nanybtJevgr()`",
          "d": "`cvaZbqrFryrpg()`"
        },
        "correct": "b"
      },
      {
        "id": 69,
        "question": "Which function is used to output a HIGH or LOW digital voltage state to a pin?",
        "options": {
          "a": "`qvtvgnyErnq()`",
          "b": "**`qvtvgnyJevgr()` ✓**",
          "c": "`nanybtJevgr()`",
          "d": "`cvaJevgr()`"
        },
        "correct": "b"
      },
      {
        "id": 70,
        "question": "What will `analogRead(A0)` return when the voltage on pin A0 is exactly 2.5V (assuming a 5.0V reference)?",
        "options": {
          "a": "250",
          "b": "512",
          "c": "**511 be 512 ✓** *(2.5 / 5.0 * 1023 = 511.5)*\a",
          "d": "1023"
        },
        "correct": "c"
      },
      {
        "id": 71,
        "question": "Which function is used to generate a Pulse Width Modulation (PWM) signal on a PWM-enabled pin?",
        "options": {
          "a": "`qvtvgnyJevgr()`",
          "b": "**`nanybtJevgr()` ✓**",
          "c": "`nanybtErnq()`",
          "d": "`cjzJevgr()`"
        },
        "correct": "b"
      },
      {
        "id": 72,
        "question": "What is the range of values that can be passed to the `analogWrite()` function?",
        "options": {
          "a": "0 gb 1023",
          "b": "**0 gb 255 ✓** *(8-ovg erfbyhgvba)*\a",
          "c": "0 gb 100",
          "d": "-127 gb 128"
        },
        "correct": "b"
      },
      {
        "id": 73,
        "question": "To establish serial communication between the Arduino Uno and a PC at 9600 baud, what command is used in `setup()`?",
        "options": {
          "a": "`Frevny.fgneg(9600);`",
          "b": "**`Frevny.ortva(9600);` ✓**",
          "c": "`Frevny.onhq(9600);`",
          "d": "`Frevny.bcra(9600);`"
        },
        "correct": "b"
      },
      {
        "id": 74,
        "question": "How is the built-in LED on the Arduino Uno board mapped to digital pins?",
        "options": {
          "a": "Cva 9",
          "b": "**Cva 13 ✓**",
          "c": "Cva 3",
          "d": "Cva N0"
        },
        "correct": "b"
      },
      {
        "id": 75,
        "question": "When connecting an LED to a digital output pin on the Arduino, why is a resistor placed in series with the LED?",
        "options": {
          "a": "Gb vapernfr gur ibygntr yriry gb gur YRQ",
          "b": "**Gb yvzvg gur pheerag naq cerirag oheavat bhg gur YRQ naq zvpebpbagebyyre cva ✓**",
          "c": "Gb svygre uvtu-serdhrapl bfpvyyngbe abvfr",
          "d": "Gb npg nf n chyy-hc erfvfgbe"
        },
        "correct": "b"
      },
      {
        "id": 76,
        "question": "What function is used to create a non-blocking delay or check elapsed time in milliseconds since the Arduino board began running?",
        "options": {
          "a": "`qrynl()`",
          "b": "**`zvyyvf()` ✓**",
          "c": "`qrynlZvpebfrpbaqf()`",
          "d": "`fyrrc()`"
        },
        "correct": "b"
      },
      {
        "id": 77,
        "question": "What is the problem with using the `delay(1000)` function in an interactive sensor control system?",
        "options": {
          "a": "Vg qenjf uvtu cbjre sebz gur fhccyl",
          "b": "**Vg oybpxf vafgehpgvba rkrphgvba, ceriragvat gur zvpebpbagebyyre sebz ernqvat frafbe vachgf qhevat gur qrynl ✓**",
          "c": "Vg sbeprf n oebja-bhg erfrg",
          "d": "Vg birejevgrf gur obbgybnqre synfu frpgbef"
        },
        "correct": "b"
      },
      {
        "id": 78,
        "question": "Which of the following lines correctly configures an analog pin A0 as digital input with an internal pull-up resistor?",
        "options": {
          "a": "`cvaZbqr(N0, VACHG);`",
          "b": "**`cvaZbqr(N0, VACHG_CHYYHC);` ✓**",
          "c": "`qvtvgnyJevgr(N0, UVTU);`",
          "d": "`nanybtJevgr(N0, 255);`"
        },
        "correct": "b"
      },
      {
        "id": 79,
        "question": "Which protocol is natively used by the ATmega328P to load programs through the USB port without needing an external hardware programmer?",
        "options": {
          "a": "FCV",
          "b": "**Frevny Obbgybnqre bire HNEG ✓**",
          "c": "WGNT",
          "d": "6YbJCNA"
        },
        "correct": "b"
      },
      {
        "id": 80,
        "question": "If you connect an LM35 temperature sensor output to Arduino pin A1, what code formula converts the raw analog reading `val` to temperature in Celsius (assuming 5V reference)?",
        "options": {
          "a": "`grzc = iny * 5.0;`",
          "b": "**`grzc = (iny * 5.0 * 100.0) / 1024.0;` ✓** *(10zI/P, fb I = iny*5/1024; P = I/0.01 = I*100)*\a",
          "c": "`grzc = iny / 1023.0;`",
          "d": "`grzc = iny * 10.0;`"
        },
        "correct": "b"
      }
    ]
  },
  {
    "unit": "unit5",
    "unitName": "Unit 5: IoT Communication Protocols",
    "questions": [
      {
        "id": 81,
        "question": "Which protocol is the standard physical and MAC layer specification for low-power wireless personal area networks (LR-WPANs) like ZigBee?",
        "options": {
          "a": "VRRR 802.11 (Jv-Sv)",
          "b": "**VRRR 802.15.4 ✓**",
          "c": "VRRR 802.3 (Rgurearg)",
          "d": "Oyhrgbbgu 5.0"
        },
        "correct": "b"
      },
      {
        "id": 82,
        "question": "What is the primary frequency band used globally by IEEE 802.15.4?",
        "options": {
          "a": "5.0 TUm",
          "b": "**2.4 TUm ✓**",
          "c": "915 ZUm",
          "d": "433 ZUm"
        },
        "correct": "b"
      },
      {
        "id": 83,
        "question": "Which wireless protocol is designed specifically for short-range low-power consumption in battery-powered devices like beacons and fitness trackers?",
        "options": {
          "a": "Fgnaqneq Pynffvp Oyhrgbbgu",
          "b": "**OYR (Oyhrgbbgu Ybj Raretl) ✓**",
          "c": "VRRR 802.11n",
          "d": "100OnfrSK"
        },
        "correct": "b"
      },
      {
        "id": 84,
        "question": "What is the main function of the 6LoWPAN protocol layer?",
        "options": {
          "a": "Cebivqvat nccyvpngvba vagresnprf yvxr UGGC erdhrfgf",
          "b": "**Urnqre pbzcerffvba naq sentzragngvba gb genafzvg VCi6 cnpxrgf bire ybj-cbjre VRRR 802.15.4 yvaxf ✓**",
          "c": "Rapelcgvat ybpny qngnonfrf",
          "d": "Znantvat culfvpny pbaarpgvbaf bire HGC"
        },
        "correct": "b"
      },
      {
        "id": 85,
        "question": "Which layer of the OSI model does 6LoWPAN operate between?",
        "options": {
          "a": "Genafcbeg naq Frffvba Ynlref",
          "b": "**Argjbex (VC) naq Qngn Yvax (ZNP) Ynlref ✓**",
          "c": "Culfvpny naq Qngn Yvax Ynlref",
          "d": "Nccyvpngvba naq Genafcbeg Ynlref"
        },
        "correct": "b"
      },
      {
        "id": 86,
        "question": "MQTT (Message Queuing Telemetry Transport) is built on top of which transport layer protocol?",
        "options": {
          "a": "HQC",
          "b": "**GPC ✓** *(hfrf cbeg 1883 be 8883 sbe frpher)*\a",
          "c": "VPZC",
          "d": "GSGC"
        },
        "correct": "b"
      },
      {
        "id": 87,
        "question": "CoAP (Constrained Application Protocol) is designed as a lightweight alternative to HTTP. It runs over which transport layer protocol?",
        "options": {
          "a": "GPC",
          "b": "**HQC ✓** *(hfrf cbeg 5683)*\a",
          "c": "FPGC",
          "d": "VCfrp"
        },
        "correct": "b"
      },
      {
        "id": 88,
        "question": "Which of the following best contrasts MQTT and CoAP?",
        "options": {
          "a": "ZDGG vf pbaarpgvbayrff bire HQC, juvyr PbNC vf pbaarpgvba-bevragrq bire GPC",
          "b": "**ZDGG vf znal-gb-znal choyvfu-fhofpevor bire GPC, juvyr PbNC vf bar-gb-bar ERFGshy erdhrfg-erfcbafr bire HQC ✓**",
          "c": "ZDGG hfrf zber onaqjvqgu guna UGGC",
          "d": "PbNC qbrf abg fhccbeg TRG naq CBFG zrgubqf"
        },
        "correct": "b"
      },
      {
        "id": 89,
        "question": "In MQTT, what is a 'topic'?",
        "options": {
          "a": "N culfvpny nqqerff bs gur oebxre",
          "b": "**N uvrenepuvpny fgevat xrl (r.t. 'ubzr/yvivatebbz/grzc') hfrq gb pngrtbevmr naq ebhgr zrffntrf ✓**",
          "c": "Gur cnlybnq fvmr va olgrf",
          "d": "Gur havdhr pyvrag vqragvsvre"
        },
        "correct": "b"
      },
      {
        "id": 90,
        "question": "What are the three Quality of Service (QoS) levels supported by MQTT?",
        "options": {
          "a": "Uvtu, Zrqvhz, Ybj",
          "b": "**0 (Ng zbfg bapr), 1 (Ng yrnfg bapr), 2 (Rknpgyl bapr) ✓**",
          "c": "GPC, HQC, VC",
          "d": "Orfg-rssbeg, Thnenagrrq, Erny-gvzr"
        },
        "correct": "b"
      },
      {
        "id": 91,
        "question": "Which IEEE standard family defines Wi-Fi networking?",
        "options": {
          "a": "VRRR 802.15.4",
          "b": "**VRRR 802.11 ✓**",
          "c": "VRRR 802.3",
          "d": "VRRR 802.15.1"
        },
        "correct": "b"
      },
      {
        "id": 92,
        "question": "What CoAP message type requires an explicit acknowledgment from the receiver?",
        "options": {
          "a": "Aba-pbasveznoyr (ABA)",
          "b": "**Pbasveznoyr (PBA) ✓**",
          "c": "Npxabjyrqtzrag (NPX)",
          "d": "Erfrg (EFG)"
        },
        "correct": "b"
      },
      {
        "id": 93,
        "question": "Which application layer protocol uses the URI scheme 'coap://'?",
        "options": {
          "a": "ZDGG",
          "b": "**PbNC ✓**",
          "c": "UGGC",
          "d": "KZCC"
        },
        "correct": "b"
      },
      {
        "id": 94,
        "question": "What is the role of an MQTT Broker?",
        "options": {
          "a": "Vg trarengrf frafbe qngn",
          "b": "**Vg npgf nf n prageny freire gung erprvirf choyvpngvbaf naq sbejneqf gurz gb fhofpevoref onfrq ba gbcvp svygref ✓**",
          "c": "Vg genafyngrf culfvpny fvtanyf gb bcgvpny chyfrf",
          "d": "Vg pbzcerffrf VCi6 urnqref"
        },
        "correct": "b"
      },
      {
        "id": 95,
        "question": "Which protocol is a RESTful, request-response, web-transfer protocol built specifically for constrained nodes and networks?",
        "options": {
          "a": "ZDGG",
          "b": "**PbNC ✓**",
          "c": "6YbJCNA",
          "d": "GPC"
        },
        "correct": "b"
      },
      {
        "id": 96,
        "question": "In BLE, how are data services organized and exposed?",
        "options": {
          "a": "Hfvat phzhyngvir fyvqvat jvaqbjf",
          "b": "**Hfvat TNGG (Trarevp Nggevohgr Cebsvyr) freivprf naq punenpgrevfgvpf ✓**",
          "c": "Hfvat HQC cbeg ahzoref",
          "d": "Hfvat ZNP nqqerff gnoyrf"
        },
        "correct": "b"
      },
      {
        "id": 97,
        "question": "What is the maximum payload size of an IEEE 802.15.4 frame before fragmentation at the 6LoWPAN layer?",
        "options": {
          "a": "1500 olgrf",
          "b": "**127 olgrf ✓**",
          "c": "64 olgrf",
          "d": "1518 olgrf"
        },
        "correct": "b"
      },
      {
        "id": 98,
        "question": "Which MQTT QoS level guarantees that a message is delivered exactly once to the subscriber, using a 4-step handshake?",
        "options": {
          "a": "DbF 0",
          "b": "DbF 1",
          "c": "**DbF 2 ✓**",
          "d": "DbF 3"
        },
        "correct": "c"
      },
      {
        "id": 99,
        "question": "What is the standard IPv6 packet size that 6LoWPAN must compress and fragment to fit into 802.15.4 frames?",
        "options": {
          "a": "64 olgrf",
          "b": "**1280 olgrf (VCi6 ZGH erdhverzrag) ✓**",
          "c": "1500 olgrf",
          "d": "65535 olgrf"
        },
        "correct": "b"
      },
      {
        "id": 100,
        "question": "Which protocol offers the highest data rate and range but consumes the most power, making it unsuitable for tiny coin-cell battery sensors?",
        "options": {
          "a": "OYR",
          "b": "VRRR 802.15.4",
          "c": "**Fgnaqneq Jv-Sv (VRRR 802.11) ✓**",
          "d": "YbEnJNA"
        },
        "correct": "c"
      }
    ]
  }
];

const CN_MCQ_BANK = [
  {
    "unit": "unit1_2",
    "unitName": "Units 1-2: Foundations & Topologies",
    "questions": [
      {
        "id": 1,
        "question": "How many dedicated physical links are required to connect 6 devices in a fully mesh topology?",
        "options": {
          "a": "30 yvaxf",
          "b": "**15 yvaxf ✓** *(Pnyphyngvba: 6 * 5 / 2 = 15)*\a",
          "c": "6 yvaxf",
          "d": "5 yvaxf"
        },
        "correct": "b"
      },
      {
        "id": 2,
        "question": "In a mesh topology with 8 devices, what is the minimum number of ports required on each device?",
        "options": {
          "a": "8 cbegf",
          "b": "**7 cbegf ✓** *($A - 1 = 7$)*\a",
          "c": "28 cbegf",
          "d": "56 cbegf"
        },
        "correct": "b"
      },
      {
        "id": 3,
        "question": "A physical star network with a central hub is used to connect hosts. What is the logical topology of this network?",
        "options": {
          "a": "Ybtvpny Fgne",
          "b": "**Ybtvpny Ohf ✓** *(fvapr n uho sybbqf fvtanyf, orunivat ybtvpnyyl nf n funerq ohf)*\a",
          "c": "Ybtvpny Evat",
          "d": "Ybtvpny Zrfu"
        },
        "correct": "b"
      },
      {
        "id": 4,
        "question": "Which topology requires terminators at both ends of the main backbone cable to prevent signal reflection?",
        "options": {
          "a": "Fgne Gbcbybtl",
          "b": "**Ohf Gbcbybtl ✓**",
          "c": "Evat Gbcbybtl",
          "d": "Zrfu Gbcbybtl"
        },
        "correct": "b"
      },
      {
        "id": 5,
        "question": "What is the primary role of the active Monitor Station in a Ring topology?",
        "options": {
          "a": "Vg rapelcgf hfre senzrf",
          "b": "**Vg znantrf gbxraf, unaqyrf ybfg gbxraf, naq chetrf becunarq senzrf ✓**",
          "c": "Vg qlanzvpnyyl nffvtaf VC nqqerffrf",
          "d": "Vg npgf nf n qrsnhyg tngrjnl ebhgre"
        },
        "correct": "b"
      },
      {
        "id": 6,
        "question": "If a switch has 12 ports, how many collision domains and broadcast domains does it create?",
        "options": {
          "a": "1 pbyyvfvba qbznva, 12 oebnqpnfg qbznvaf",
          "b": "**12 pbyyvfvba qbznvaf, 1 oebnqpnfg qbznva ✓** *(rnpu fjvgpu cbeg vf n frcnengr pbyyvfvba qbznva)*\a",
          "c": "12 pbyyvfvba qbznvaf, 12 oebnqpnfg qbznvaf",
          "d": "1 pbyyvfvba qbznva, 1 oebnqpnfg qbznva"
        },
        "correct": "b"
      },
      {
        "id": 7,
        "question": "Which network device is designed to isolate broadcast traffic entirely between two LAN segments?",
        "options": {
          "a": "Ynlre 2 Fjvgpu",
          "b": "Ynlre 2 Oevqtr",
          "c": "**Ynlre 3 Ebhgre ✓** *(ebhgref oernx oebnqpnfg qbznvaf)*\a",
          "d": "Zhygvcbeg Uho"
        },
        "correct": "c"
      },
      {
        "id": 8,
        "question": "An access level that allows suppliers and trusted external partners to view select inventory pages is called an:",
        "options": {
          "a": "Vagenarg",
          "b": "**Rkgenarg ✓**",
          "c": "Vagrearg",
          "d": "Crefbany Nern Argjbex"
        },
        "correct": "b"
      },
      {
        "id": 9,
        "question": "Which statement is true regarding LANs and WANs?",
        "options": {
          "a": "YNAf ner znantrq ol choyvp gryrpbz pbzcnavrf; JNAf ner cevingryl bjarq",
          "b": "**YNAf ner cevingryl bjarq jvgu uvtu fcrrqf naq ybj qrynlf; JNAf pbire ynetr nernf hfvat yrnfrq gryrpbz pvephvgf ✓**",
          "c": "JNAf unir ybjre cebcntngvba qrynlf guna YNAf",
          "d": "YNAf hgvyvmr fngryyvgr pbzzhavpngvba, juvyr JNAf hfr gjvfgrq cnve pnoyrf"
        },
        "correct": "b"
      },
      {
        "id": 10,
        "question": "A network topology consists of a central primary star controller connected to secondary hub stars. This is a:",
        "options": {
          "a": "Zrfu Gbcbybtl",
          "b": "**Gerr Gbcbybtl ✓**",
          "c": "Evat Gbcbybtl",
          "d": "Ohf Gbcbybtl"
        },
        "correct": "b"
      },
      {
        "id": 11,
        "question": "In a Ring network, what happens if a link breaks in a Dual Ring configuration?",
        "options": {
          "a": "Gur ragver argjbex penfurf vzzrqvngryl",
          "b": "**Gur obhaqnel abqrf jenc gur cevznel naq frpbaqnel evatf gbtrgure gb znvagnva n fvatyr ybbc ✓**",
          "c": "Qngn vf ebhgrq guebhtu n qrsnhyg tngrjnl",
          "d": "N pbyyvfvba wnz fvtany vf oebnqpnfg"
        },
        "correct": "b"
      },
      {
        "id": 12,
        "question": "What is the total number of physical ports required across all devices in a fully mesh network with 5 nodes?",
        "options": {
          "a": "10 cbegf",
          "b": "**20 cbegf ✓** *($A \\gvzrf (A-1) = 20$)*\a",
          "c": "5 cbegf",
          "d": "25 cbegf"
        },
        "correct": "b"
      },
      {
        "id": 13,
        "question": "Which of the following is classified as an end device?",
        "options": {
          "a": "Uho",
          "b": "Oevqtr",
          "c": "**VC Frphevgl Pnzren ✓**",
          "d": "Fjvgpu"
        },
        "correct": "c"
      },
      {
        "id": 14,
        "question": "Which medium encodes signals as pulses of light?",
        "options": {
          "a": "Fuvryqrq Gjvfgrq Cnve",
          "b": "Pbnkvny Pnoyr",
          "c": "**Svore-bcgvp Pnoyr ✓**",
          "d": "Zvpebjnir Yvax"
        },
        "correct": "c"
      },
      {
        "id": 15,
        "question": "A logical topology is defined at which layer of the OSI model?",
        "options": {
          "a": "Culfvpny Ynlre (Y1)",
          "b": "**Qngn Yvax Ynlre (Y2) ✓**",
          "c": "Argjbex Ynlre (Y3)",
          "d": "Genafcbeg Ynlre (Y4)"
        },
        "correct": "b"
      },
      {
        "id": 16,
        "question": "Why is a transparent bridge called transparent?",
        "options": {
          "a": "Vg vf culfvpnyyl znqr bs genafcnerag svore tynff",
          "b": "**Pbaarpgrq ubfgf ner hanjner bs vgf cerfrapr ba gur argjbex frtzrag ✓**",
          "c": "Vg sbejneqf cnpxrgf jvgubhg ernqvat ZNP nqqerffrf",
          "d": "Vg orunirf yvxr n Ynlre 1 ercrngre"
        },
        "correct": "b"
      },
      {
        "id": 17,
        "question": "What represents the physical connection point between a computer host and the transmission medium?",
        "options": {
          "a": "Tngrjnl",
          "b": "**AVP (Argjbex Vagresnpr Pneq) ✓**",
          "c": "Ebhgvat Gnoyr",
          "d": "VC Nqqerff"
        },
        "correct": "b"
      },
      {
        "id": 18,
        "question": "What is the primary drawback of a fully mesh topology?",
        "options": {
          "a": "Ybj eryvnovyvgl",
          "b": "Uvtu pbyyvfvba serdhrapl",
          "c": "**Rkgerzryl uvtu pbfg naq pbzcyrk pnoyvat ynlbhg ✓**",
          "d": "eryvnapr ba n prageny fjvgpu pbagebyyre"
        },
        "correct": "b"
      },
      {
        "id": 19,
        "question": "A network that connects devices within an individual's personal workspace (~10m) using Bluetooth is a:",
        "options": {
          "a": "YNA",
          "b": "JNA",
          "c": "**CNA ✓**",
          "d": "ZNA"
        },
        "correct": "c"
      },
      {
        "id": 20,
        "question": "In a shared media network, what happens if two devices transmit simultaneously?",
        "options": {
          "a": "Gur qngn vf fhpprffshyyl zretrq",
          "b": "**N cnpxrg pbyyvfvba bpphef, pbeehcgvat gur fvtanyf ✓**",
          "c": "Gur ebhgre ebhgrf gurz gb frcnengr fhoargf",
          "d": "N gbxra vf trarengrq ol gur zbavgbe fgngvba"
        },
        "correct": "b"
      }
    ]
  },
  {
    "unit": "unit3_4",
    "unitName": "Units 3-4: OSI & Physical Layer",
    "questions": [
      {
        "id": 21,
        "question": "Which standard organization is responsible for publishing Internet protocols through RFC documents?",
        "options": {
          "a": "VRRR",
          "b": "VFB",
          "c": "**VRGS ✓**",
          "d": "VNAN"
        },
        "correct": "c"
      },
      {
        "id": 22,
        "question": "Which OSI model layer is responsible for translating data between formats (e.g. ASCII to EBCDIC) and handling encryption?",
        "options": {
          "a": "Nccyvpngvba Ynlre",
          "b": "Frffvba Ynlre",
          "c": "**Cerfragngvba Ynlre ✓**",
          "d": "Genafcbeg Ynlre"
        },
        "correct": "c"
      },
      {
        "id": 23,
        "question": "Which of the following represents the correct sequence of layers in the OSI model from top to bottom?",
        "options": {
          "a": "Culfvpny, Qngn Yvax, Argjbex, Genafcbeg, Frffvba, Cerfragngvba, Nccyvpngvba",
          "b": "**Nccyvpngvba, Cerfragngvba, Frffvba, Genafcbeg, Argjbex, Qngn Yvax, Culfvpny ✓**",
          "c": "Nccyvpngvba, Frffvba, Cerfragngvba, Genafcbeg, Argjbex, Qngn Yvax, Culfvpny",
          "d": "Culfvpny, Argjbex, Qngn Yvax, Genafcbeg, Cerfragngvba, Frffvba, Nccyvpngvba"
        },
        "correct": "b"
      },
      {
        "id": 24,
        "question": "What is the Protocol Data Unit (PDU) processed at the Transport Layer (Layer 4) for TCP?",
        "options": {
          "a": "Qngn",
          "b": "**Frtzrag ✓**",
          "c": "Cnpxrg",
          "d": "Senzr"
        },
        "correct": "b"
      },
      {
        "id": 25,
        "question": "Which of the following ports are used by FTP (File Transfer Protocol)?",
        "options": {
          "a": "Cbegf 67 naq 68",
          "b": "**Cbegf 20 naq 21 ✓** *(20 sbe Qngn, 21 sbe Pbageby)*\a",
          "c": "Cbegf 161 naq 162",
          "d": "Cbeg 80 naq 443"
        },
        "correct": "b"
      },
      {
        "id": 26,
        "question": "What is the port number utilized by the Domain Name System (DNS)?",
        "options": {
          "a": "Cbeg 22",
          "b": "Cbeg 25",
          "c": "**Cbeg 53 ✓**",
          "d": "Cbeg 69"
        },
        "correct": "c"
      },
      {
        "id": 27,
        "question": "A network administrator blocks outbound UDP ports 67 and 68. What network service is disabled?",
        "options": {
          "a": "QAF ybbxhc",
          "b": "**QUPC VC nffvtazrag ✓**",
          "c": "GSGC obbgybnqre",
          "d": "FZGC rznvyvat"
        },
        "correct": "b"
      },
      {
        "id": 28,
        "question": "What is the difference between Single-mode and Multi-mode Optical Fiber?",
        "options": {
          "a": "Fvatyr-zbqr hfrf YRQf; Zhygv-zbqr hfrf Ynfref",
          "b": "**Fvatyr-zbqr unf n aneebj pber naq ybj qvfcrefvba sbe ybat qvfgnaprf; Zhygv-zbqr unf n jvqr pber sbe fubegre qvfgnaprf ✓**",
          "c": "Zhygv-zbqr unf ybjre qvfcrefvba guna Fvatyr-zbqr",
          "d": "Fvatyr-zbqr genafzvgf nanybt ryrpgevpny jnirf"
        },
        "correct": "b"
      },
      {
        "id": 29,
        "question": "Which wireless transmission medium is highly secure because it cannot penetrate solid walls?",
        "options": {
          "a": "Enqvb Jnirf",
          "b": "Zvpebjnirf",
          "c": "**Vasenerq ✓**",
          "d": "Fngryyvgr yvaxf"
        },
        "correct": "c"
      },
      {
        "id": 30,
        "question": "Terrestrial microwave transmissions above 1 GHz require line-of-sight. The curvature of the Earth typically limits repeater spacing to about:",
        "options": {
          "a": "100 zvyrf",
          "b": "**30 zvyrf ✓**",
          "c": "10 zvyrf",
          "d": "1000 zrgref"
        },
        "correct": "b"
      },
      {
        "id": 31,
        "question": "In the cable designator \"100BaseTX\", what does \"100\" and \"Base\" signify?",
        "options": {
          "a": "100 zrgref znkvzhz yratgu, Onfvp fuvryqvat",
          "b": "**100 Zocf genafzvffvba fcrrq, Onfronaq qvtvgny fvtanyvat ✓**",
          "c": "100 punaaryf, Oebnqonaq nanybt fvtanyvat",
          "d": "100 ZUm serdhrapl, pbnkvny zrqvn"
        },
        "correct": "b"
      },
      {
        "id": 32,
        "question": "What is the maximum segment length supported by standard 10Base5 cabling?",
        "options": {
          "a": "100 zrgref",
          "b": "185 zrgref",
          "c": "**500 zrgref ✓** *(Guvpxarg)*\a",
          "d": "2000 zrgref"
        },
        "correct": "c"
      },
      {
        "id": 33,
        "question": "The original TCP/IP model has 4 layers. Which layer combines the OSI Physical and Data Link layers?",
        "options": {
          "a": "Vagrearg Ynlre",
          "b": "**Argjbex Npprff Ynlre ✓**",
          "c": "Genafcbeg Ynlre",
          "d": "Nccyvpngvba Ynlre"
        },
        "correct": "b"
      },
      {
        "id": 34,
        "question": "What happens during the Data De-encapsulation process at the receiver?",
        "options": {
          "a": "Urnqref ner nqqrq nf qngn zbirf qbja gur fgnpx",
          "b": "**Urnqref ner fgevccrq bss nf qngn zbirf hc gur fgnpx ✓**",
          "c": "Qngn vf zbqhyngrq vagb bcgvpny fvtanyf",
          "d": "Gur GGY svryq vf qrperzragrq ol 1"
        },
        "correct": "b"
      },
      {
        "id": 35,
        "question": "Which port number does the Simple Network Management Protocol (SNMP) use for agent polling?",
        "options": {
          "a": "Cbeg 23",
          "b": "Cbeg 25",
          "c": "**Cbeg 161 ✓** *(Cbeg 162 vf hfrq sbe Gencf)*\a",
          "d": "Cbeg 179"
        },
        "correct": "c"
      },
      {
        "id": 36,
        "question": "Which medium uses twisted wire pairs to cancel out electromagnetic interference and crosstalk?",
        "options": {
          "a": "Pbnkvny Pnoyr",
          "b": "**Hafuvryqrq Gjvfgrq Cnve (HGC) ✓**",
          "c": "Fvatyr-Zbqr Svore",
          "d": "Greerfgevny Zvpebjnirf"
        },
        "correct": "b"
      },
      {
        "id": 37,
        "question": "The physical socket where a network cable connects to a computer is called a:",
        "options": {
          "a": "Vagresnpr",
          "b": "**Culfvpny Cbeg ✓**",
          "c": "AVP EBZ",
          "d": "OVN Nqqerff"
        },
        "correct": "b"
      },
      {
        "id": 38,
        "question": "The port numbers reserved by IANA for standard system services (Well-Known Ports) span which range?",
        "options": {
          "a": "1024 gb 49151",
          "b": "**0 gb 1023 ✓**",
          "c": "49152 gb 65535",
          "d": "0 gb 65535"
        },
        "correct": "b"
      },
      {
        "id": 39,
        "question": "Which Layer of the OSI model manages checkpoints, session IDs, and dialog control?",
        "options": {
          "a": "Genafcbeg Ynlre",
          "b": "**Frffvba Ynlre ✓**",
          "c": "Cerfragngvba Ynlre",
          "d": "Qngn Yvax Ynlre"
        },
        "correct": "b"
      },
      {
        "id": 40,
        "question": "What is the primary advantage of UTP over STP cabling?",
        "options": {
          "a": "HGC cebivqrf orggre RZV fuvryqvat",
          "b": "**HGC vf purncre, zber syrkvoyr, naq rnfvre gb vafgnyy ✓**",
          "c": "HGC unf ybatre frtzrag yvzvgf guna FGC",
          "d": "HGC qbrf abg erdhver EW-45 pbaarpgbef"
        },
        "correct": "b"
      }
    ]
  },
  {
    "unit": "unit5_6",
    "unitName": "Units 5-6: Devices & Ethernet",
    "questions": [
      {
        "id": 41,
        "question": "Which layer of the OSI model does a multi-port transparent switch operate at?",
        "options": {
          "a": "Culfvpny Ynlre (Ynlre 1)",
          "b": "**Qngn Yvax Ynlre (Ynlre 2) ✓**",
          "c": "Argjbex Ynlre (Ynlre 3)",
          "d": "Genafcbeg Ynlre (Ynlre 4)"
        },
        "correct": "b"
      },
      {
        "id": 42,
        "question": "Which switch forwarding method checks the Frame Check Sequence (FCS) checksum before transmitting the frame?",
        "options": {
          "a": "Phg-Guebhtu",
          "b": "**Fgber-naq-Sbejneq ✓**",
          "c": "Sentzrag-Serr",
          "d": "Nqncgvir Fjvgpuvat"
        },
        "correct": "b"
      },
      {
        "id": 43,
        "question": "A switch forwarding method that buffers the first 64 bytes of a frame to filter out collision fragments is:",
        "options": {
          "a": "Fgber-naq-Sbejneq",
          "b": "Phg-Guebhtu",
          "c": "**Sentzrag-Serr ✓**",
          "d": "Cernzoyr Svygrevat"
        },
        "correct": "c"
      },
      {
        "id": 44,
        "question": "What is the minimum frame size of a standard Ethernet frame (excluding the preamble and SFD)?",
        "options": {
          "a": "46 olgrf",
          "b": "**64 olgrf ✓**",
          "c": "1518 olgrf",
          "d": "1500 olgrf"
        },
        "correct": "b"
      },
      {
        "id": 45,
        "question": "What is the maximum size of a standard Ethernet frame payload (data field)?",
        "options": {
          "a": "64 olgrf",
          "b": "1518 olgrf",
          "c": "**1500 olgrf ✓**",
          "d": "46 olgrf"
        },
        "correct": "c"
      },
      {
        "id": 46,
        "question": "If an Ethernet frame is received with a payload of 30 bytes, what action is taken to meet standard sizing rules?",
        "options": {
          "a": "Gur senzr vf qvfpneqrq nf n ehag senzr",
          "b": "**Cnqqvat olgrf (mrebf) ner nqqrq gb gur cnlybnq gb ernpu gur 46-olgr zvavzhz ✓**",
          "c": "Gur purpxfhz vf erpnyphyngrq sbe n 30-olgr senzr",
          "d": "Gur fjvgpu ohssref vg va fgber-naq-sbejneq zbqr"
        },
        "correct": "b"
      },
      {
        "id": 47,
        "question": "A MAC address is a 48-bit address. The first 3 bytes (24 bits) represent which identifier?",
        "options": {
          "a": "Qrivpr Frevny VQ",
          "b": "**BHV (Betnavmngvbanyyl Havdhr Vqragvsvre) nffvtarq ol VRRR ✓**",
          "c": "VC Fhoarg Znfx cersvk",
          "d": "Cebgbpby Cbeg Ahzore"
        },
        "correct": "b"
      },
      {
        "id": 48,
        "question": "Which of the following represents the standard MAC broadcast address?",
        "options": {
          "a": "`00:00:00:00:00:00`",
          "b": "`01:00:5R:00:00:01`",
          "c": "**`SS:SS:SS:SS:SS:SS` ✓**",
          "d": "`255.255.255.255`"
        },
        "correct": "c"
      },
      {
        "id": 49,
        "question": "In Ethernet, multicast MAC addresses are distinguished by starting with which prefix?",
        "options": {
          "a": "`SS:SS:SS`",
          "b": "**`01:00:5R` ✓**",
          "c": "`00:1N:2O`",
          "d": "`127.0.0`"
        },
        "correct": "b"
      },
      {
        "id": 50,
        "question": "The IEEE splits the Data Link Layer into two sublayers. Which sublayer handles logical protocol multiplexing using EtherType?",
        "options": {
          "a": "ZNP Fhoynlre",
          "b": "**YYP (Ybtvpny Yvax Pbageby) Fhoynlre ✓**",
          "c": "6YbJCNA Fhoynlre",
          "d": "Culfvpny Pbqvat Fhoynlre"
        },
        "correct": "b"
      },
      {
        "id": 51,
        "question": "Which of the following devices operates at Layer 1 of the OSI model?",
        "options": {
          "a": "Fjvgpu",
          "b": "**Uho be Ercrngre ✓**",
          "c": "Ebhgre",
          "d": "Oevqtr"
        },
        "correct": "b"
      },
      {
        "id": 52,
        "question": "What is the primary action of a transparent bridge when it receives a frame with an unknown destination MAC address?",
        "options": {
          "a": "Qebc gur senzr vzzrqvngryl",
          "b": "**Sybbq gur senzr bhg bs nyy cbegf rkprcg gur cbeg bs bevtva ✓**",
          "c": "Dhrel gur qrsnhyg tngrjnl ebhgre",
          "d": "Ybt n ZNP pbyyvfvba reebe"
        },
        "correct": "b"
      },
      {
        "id": 53,
        "question": "Which device translates protocols between entirely different architectures (e.g. TCP/IP to IBM SNA)?",
        "options": {
          "a": "Ynlre 3 Ebhgre",
          "b": "**Tngrjnl ✓**",
          "c": "Ynlre 2 Fjvgpu",
          "d": "Npgvir Uho"
        },
        "correct": "b"
      },
      {
        "id": 54,
        "question": "How is the Least Significant Bit of the first byte of a MAC address (the I/G bit) used?",
        "options": {
          "a": "Gb qrabgr gur irefvba bs gur ZNP nqqerff",
          "b": "**Gb qvfgvathvfu orgjrra Havpnfg (0) naq Zhygvpnfg/Oebnqpnfg (1) senzrf ✓**",
          "c": "Gb vqragvsl gur VRRR znahsnpghere pbqr",
          "d": "Gb pnyphyngr gur SPF genvyre purpxfhz"
        },
        "correct": "b"
      },
      {
        "id": 55,
        "question": "What is the maximum size of a standard Ethernet frame (including headers, but excluding preamble and SFD)?",
        "options": {
          "a": "64 olgrf",
          "b": "1500 olgrf",
          "c": "**1518 olgrf ✓** *(6 Qrfgvangvba + 6 Fbhepr + 2 Yratgu/Glcr + 1500 Qngn + 4 SPF)*\a",
          "d": "1526 olgrf"
        },
        "correct": "c"
      },
      {
        "id": 56,
        "question": "A MAC address is hardcoded in a NIC's ROM, which is commonly referred to as the:",
        "options": {
          "a": "Ybtvpny Nqqerff",
          "b": "**Ohearq-Va Nqqerff (OVN) ✓**",
          "c": "Havpnfg vqragvsvre",
          "d": "BHV vaqrk"
        },
        "correct": "b"
      },
      {
        "id": 57,
        "question": "Which of the following is a Layer 2 function?",
        "options": {
          "a": "Ertrarengvat ovg yriry fvtanyf",
          "b": "**Senzvat, culfvpny nqqerffvat, naq reebe qrgrpgvba ✓**",
          "c": "Ebhgvat cnpxrgf npebff qvssrerag fhoargf",
          "d": "Qvnybt pbageby naq purpxcbvagf"
        },
        "correct": "b"
      },
      {
        "id": 58,
        "question": "If a switch has all its ports running in Full-Duplex mode, what is the collision probability?",
        "options": {
          "a": "100%",
          "b": "50%",
          "c": "**0% (pbyyvfvba-serr) ✓**",
          "d": "18.4%"
        },
        "correct": "c"
      },
      {
        "id": 59,
        "question": "What happens if a switch receives an Ethernet frame that is 50 bytes long?",
        "options": {
          "a": "Gur fjvgpu cnqf vg gb 64 olgrf",
          "b": "**Gur fjvgpu qvfpneqf vg nf n ehag senzr/pbyyvfvba sentzrag ✓**",
          "c": "Gur fjvgpu sbejneqf vg gb gur ebhgre",
          "d": "Gur fjvgpu sybbqf vg bhg bs nyy cbegf"
        },
        "correct": "b"
      },
      {
        "id": 60,
        "question": "Which sublayer of the Data Link Layer regulates medium access (CSMA/CD, token passing)?",
        "options": {
          "a": "YYP Fhoynlre",
          "b": "**ZNP Fhoynlre ✓**",
          "c": "VC Fhoynlre",
          "d": "Culfvpny Ynlre"
        },
        "correct": "b"
      }
    ]
  },
  {
    "unit": "unit7_8",
    "unitName": "Units 7-8: Error Detection & MAC",
    "questions": [
      {
        "id": 61,
        "question": "In a 2D Parity Check (LRC) using Even Parity, if the rows are `1010101` and `0111100`, what is the block check character (LRC row)?",
        "options": {
          "a": "`1101001`",
          "b": "`0101011`",
          "c": "**`1101001` ✓** *(Pbyhza fhzf bs 1f: pby1: 1+0=1=>1; pby2: 0+1=1=>1; pby3: 1+1=2=>0; pby4: 0+1=1=>1; pby5: 1+1=2=>0; pby6: 0+0=0=>0; pby7: 1+0=1=>1)*\a",
          "d": "`0010110`"
        },
        "correct": "c"
      },
      {
        "id": 62,
        "question": "Why is simple VRC (parity check) ineffective at detecting burst errors?",
        "options": {
          "a": "Vg pnaabg qrgrpg fvatyr ovg syvcf",
          "b": "**Na rira ahzore bs ovg reebef va gur fnzr olgr pnapryf bhg gur cnevgl pbhag, rfpncvat qrgrpgvba ✓**",
          "c": "Vg erdhverf qhny ohf nepuvgrpgherf",
          "d": "Vg bayl bcrengrf ba bcgvpny svore"
        },
        "correct": "b"
      },
      {
        "id": 63,
        "question": "In Checksum error detection, what is the sum of `1011` and `1100` in 4-bit One's Complement addition?",
        "options": {
          "a": "`0111`",
          "b": "**`1000` ✓** *(1011 + 1100 = 10111 => pneel bhg 1; raq-nebhaq pneel: 0111 + 1 = 1000)*\a",
          "c": "`0110`",
          "d": "`1111`"
        },
        "correct": "b"
      },
      {
        "id": 64,
        "question": "If a receiver calculates a checksum sum of all blocks (including the checksum block) to be `1111` before complementing, what is the status of the data?",
        "options": {
          "a": "Qngn pbagnvaf reebef naq zhfg or qvfpneqrq",
          "b": "**Ab reebe vf qrgrpgrq, gur qngn vf npprcgrq ✓** *(pbzcyrzrag bs 1111 vf 0000)*\a",
          "c": "Qngn arrqf cnqqvat",
          "d": "Gur purpxfhz zhfg or erpnyphyngrq"
        },
        "correct": "b"
      },
      {
        "id": 65,
        "question": "How many redundancy bits ($r$) are required by Hamming Code to secure a 4-bit dataword ($m=4$)?",
        "options": {
          "a": "2 ovgf",
          "b": "**3 ovgf ✓** *(fvapr 2^3 >= 4 + 3 + 1)*\a",
          "c": "4 ovgf",
          "d": "5 ovgf"
        },
        "correct": "b"
      },
      {
        "id": 66,
        "question": "In a 7-bit Hamming code codeword, at what bit positions are the parity bits placed?",
        "options": {
          "a": "Bqq cbfvgvbaf (1, 3, 5, 7)",
          "b": "**Cbfvgvbaf gung ner cbjref bs 2 (1, 2, 4) ✓**",
          "c": "Rira cbfvgvbaf (2, 4, 6)",
          "d": "Cevzr cbfvgvbaf (2, 3, 5, 7)"
        },
        "correct": "b"
      },
      {
        "id": 67,
        "question": "What is the maximum throughput of Pure ALOHA?",
        "options": {
          "a": "36.8%",
          "b": "50.0%",
          "c": "**18.4% ✓** *($0.184$ jura T=0.5)*\a",
          "d": "10.0%"
        },
        "correct": "c"
      },
      {
        "id": 68,
        "question": "In Slotted ALOHA, the maximum throughput occurs when the traffic load $G$ is equal to:",
        "options": {
          "a": "0.5",
          "b": "**1.0 ✓** *(tvivat F = 1 * r^-1 = 36.8%)*\a",
          "c": "2.0",
          "d": "0.25"
        },
        "correct": "b"
      },
      {
        "id": 69,
        "question": "In p-persistent CSMA, what does a station do when it senses the channel is idle?",
        "options": {
          "a": "Genafzvgf vzzrqvngryl jvgu cebonovyvgl 1",
          "b": "**Genafzvgf jvgu cebonovyvgl c, naq qrynlf genafzvffvba ol bar fybg jvgu cebonovyvgl 1-c ✓**",
          "c": "Jnvgf n enaqbz onpx-bss gvzr naq frafrf ntnva",
          "d": "Fraqf n wnzzvat fvtany"
        },
        "correct": "b"
      },
      {
        "id": 70,
        "question": "What is the vulnerable time window during which a collision can occur in Pure ALOHA?",
        "options": {
          "a": "Rdhny gb gur cebcntngvba qrynl ($G_c$)",
          "b": "**Twice the frame transmission time ($2 \\times T_{fr}$) ✓**",
          "c": "Equal to the frame transmission time ($T_{fr}$)",
          "d": "Half the frame transmission time"
        },
        "correct": "b"
      },
      {
        "id": 71,
        "question": "What is the minimum frame size for a 10 Mbps CSMA/CD network where the maximum propagation delay is $25.6\\ \\mu s$?",
        "options": {
          "a": "32 olgrf",
          "b": "**64 olgrf ✓** *(10Z * 2 * 25.6μf = 512 ovgf = 64 olgrf)*\a",
          "c": "128 olgrf",
          "d": "512 olgrf"
        },
        "correct": "b"
      },
      {
        "id": 72,
        "question": "CSMA/CA avoids collisions in wireless networks using which mechanism?",
        "options": {
          "a": "Yvfgravat sbe ryrpgevpny ersyrpgvbaf ba gur jver",
          "b": "**VSF (Vagresenzr Fcnpr) gvzref naq enaqbz Pbagragvba Jvaqbjf ✓**",
          "c": "N gbxra cnffvat zbavgbe fgngvba",
          "d": "Zbqhyb-2 KBE qvivfvba"
        },
        "correct": "b"
      },
      {
        "id": 73,
        "question": "Which multiple access method uses unique orthogonal codes (chip sequences) to allow multiple stations to transmit simultaneously on the same frequency?",
        "options": {
          "a": "SQZN",
          "b": "GQZN",
          "c": "**PQZN ✓**",
          "d": "PFZN/PQ"
        },
        "correct": "c"
      },
      {
        "id": 74,
        "question": "In CDMA, if two stations A and B send signals $S_A = [+1, -1, -1, +1]$ and $S_B = [-1, -1, +1, +1]$, what is the combined channel data $D$?",
        "options": {
          "a": "`[0, 0, 0, 0]`",
          "b": "**`[0, -2, 0, +2]` ✓** *(N + O ryrzrag-jvfr)*\a",
          "c": "`[+1, +1, -1, -1]`",
          "d": "`[+2, 0, -2, 0]`"
        },
        "correct": "b"
      },
      {
        "id": 75,
        "question": "In CDMA, how is Station A's data recovered from the combined channel data $D = [0, -2, 0, +2]$ if its chip code is $C_A = [+1, -1, -1, +1]$?",
        "options": {
          "a": "Ol cresbezvat zbqhyb-2 KBE qvivfvba",
          "b": "**Ol pnyphyngvat gur qbg cebqhpg (Q · PN) naq qvivqvat ol gur pbqr yratgu (4) ✓** *(tvirf +1, v.r. ovg 1)*\a",
          "c": "Ol purpxvat gur cnevgl ovg",
          "d": "Ol qrperzragvat gur GGY"
        },
        "correct": "b"
      },
      {
        "id": 76,
        "question": "What is the length of a burst error if the received data block `10010011` has errors at positions 2 and 6?",
        "options": {
          "a": "2 ovgf",
          "b": "**5 ovgf ✓** *(sebz cbfvgvba 2 gb 6 vf 5 ovgf)*\a",
          "c": "6 ovgf",
          "d": "8 ovgf"
        },
        "correct": "b"
      },
      {
        "id": 77,
        "question": "If the CRC generator polynomial is $x^3 + x^2 + 1$, what is its binary divisor representation?",
        "options": {
          "a": "`1011`",
          "b": "**`1101` ✓** *(cbjref: 3, 2, 0 cerfrag => 1 1 0 1)*\a",
          "c": "`1110`",
          "d": "`1001`"
        },
        "correct": "b"
      },
      {
        "id": 78,
        "question": "How many zeros are appended to the dataword before division if the CRC divisor is `10111`?",
        "options": {
          "a": "5 mrebf",
          "b": "**4 mrebf ✓** *($A - 1 = 4$)*\a",
          "c": "6 mrebf",
          "d": "3 mrebf"
        },
        "correct": "b"
      },
      {
        "id": 79,
        "question": "Which CSMA persistence mode has the station wait a random time before sensing the channel again if it is found to be busy?",
        "options": {
          "a": "1-Crefvfgrag",
          "b": "**Aba-Crefvfgrag ✓**",
          "c": "c-Crefvfgrag",
          "d": "Npgvir-Crefvfgrag"
        },
        "correct": "b"
      },
      {
        "id": 80,
        "question": "What signal is sent by a station in a CSMA/CD network upon detecting a collision?",
        "options": {
          "a": "EGF",
          "b": "PGF",
          "c": "**Wnzzvat Fvtany ✓**",
          "d": "Cernzoyr"
        },
        "correct": "c"
      }
    ]
  },
  {
    "unit": "unit9",
    "unitName": "Unit 9: Flow Control & Network Layer",
    "questions": [
      {
        "id": 81,
        "question": "What is the efficiency of a Stop-and-Wait connection where the propagation delay ($T_p$) is 3 ms and the frame transmission time ($T_{fr}$) is 2 ms?",
        "options": {
          "a": "50%",
          "b": "**25% ✓** *(n = 3/2 = 1.5; Rss = 1/(1+2(1.5)) = 1/4 = 25%)*\a",
          "c": "33%",
          "d": "20%"
        },
        "correct": "b"
      },
      {
        "id": 82,
        "question": "In Go-Back-N ARQ with a 3-bit sequence number, what is the maximum sender window size ($W_s$)?",
        "options": {
          "a": "8",
          "b": "**7 ✓** *($2^3 - 1 = 7$)*\a",
          "c": "4",
          "d": "1"
        },
        "correct": "b"
      },
      {
        "id": 83,
        "question": "What is the receiver window size ($W_r$) in Go-Back-N ARQ?",
        "options": {
          "a": "Rdhny gb gur fraqre jvaqbj fvmr",
          "b": "**1 ✓** *(vg bayl npprcgf senzrf va fgevpg frdhragvny beqre)*\a",
          "c": "Unys gur fraqre jvaqbj fvmr",
          "d": "Hayvzvgrq"
        },
        "correct": "b"
      },
      {
        "id": 84,
        "question": "In Selective Repeat ARQ with a 4-bit sequence number, what is the maximum sender window size ($W_s$)?",
        "options": {
          "a": "15",
          "b": "**8 ✓** *($2^{4-1} = 8$)*\n",
          "c": "16",
          "d": "1"
        },
        "correct": "b"
      },
      {
        "id": 85,
        "question": "Why is Selective Repeat ARQ more efficient than Go-Back-N on noisy channels?",
        "options": {
          "a": "Vg hfrf fznyyre frdhrapr ahzoref",
          "b": "**Vg bayl ergenafzvgf gur fcrpvsvp ybfg/pbeehcgrq senzr, ohssrevat bgure bhg-bs-beqre neevinyf ✓**",
          "c": "Vg qbrf abg erdhver gvzref",
          "d": "Vg bcrengrf jvgubhg frdhrapr ahzoref"
        },
        "correct": "b"
      },
      {
        "id": 86,
        "question": "What technique bundles an acknowledgment (ACK) within an outgoing data frame travelling in the opposite direction?",
        "options": {
          "a": "Sentzragngvba",
          "b": "**Cvttlonpxvat ✓**",
          "c": "Ebhgvat",
          "d": "Pbyyvfvba Qrgrpgvba"
        },
        "correct": "b"
      },
      {
        "id": 87,
        "question": "In IPv4 packet fragmentation, if a 4000-byte packet is fragmented with an MTU of 1500 bytes (20-byte IP header), what is the Fragment Offset of the second fragment?",
        "options": {
          "a": "1480",
          "b": "**185 ✓** *(1480 olgrf bs qngn frag va svefg sentzrag; Bssfrg = 1480 / 8 = 185)*\a",
          "c": "370",
          "d": "0"
        },
        "correct": "b"
      },
      {
        "id": 88,
        "question": "What is the status of the More Fragments (MF) flag in the last fragment of a segmented packet?",
        "options": {
          "a": "ZS = 1",
          "b": "**ZS = 0 ✓** *(vaqvpngrf ab zber sentzragf sbyybj)*\a",
          "c": "ZS = 2",
          "d": "ZS vf bzvggrq"
        },
        "correct": "b"
      },
      {
        "id": 89,
        "question": "Which IPv4 header field prevents packets from circulating endlessly in routing loops by being decremented at each hop?",
        "options": {
          "a": "Urnqre Purpxfhz",
          "b": "**Gvzr gb Yvir (GGY) ✓**",
          "c": "Vqragvsvpngvba",
          "d": "Cebgbpby"
        },
        "correct": "b"
      },
      {
        "id": 90,
        "question": "Which dynamic routing protocol algorithm is used in Distance Vector Routing?",
        "options": {
          "a": "Qvwxfgen'f Nytbevguz",
          "b": "**Oryyzna-Sbeq Nytbevguz ✓**",
          "c": "Syblq-Jnefunyy",
          "d": "Xehfxny'f Nytbevguz"
        },
        "correct": "b"
      },
      {
        "id": 91,
        "question": "What is the primary operational flaw of the Distance Vector Routing protocol when links fail?",
        "options": {
          "a": "Uvtu PCH hgvyvmngvba",
          "b": "**Gur Pbhag-gb-Vasvavgl ceboyrz ✓**",
          "c": "YFC cnpxrg sybbqvat ybbcf",
          "d": "Nqqerff qrcyrgvba"
        },
        "correct": "b"
      },
      {
        "id": 92,
        "question": "Which of the following routing protocols is a Link-State routing protocol?",
        "options": {
          "a": "EVC",
          "b": "**BFCS ✓**",
          "c": "OTC",
          "d": "RTC"
        },
        "correct": "b"
      },
      {
        "id": 93,
        "question": "What is the IP range of Class B networks in classful addressing?",
        "options": {
          "a": "`0.0.0.0` gb `127.255.255.255`",
          "b": "**`128.0.0.0` gb `191.255.255.255` ✓**",
          "c": "`192.0.0.0` gb `223.255.255.255`",
          "d": "`224.0.0.0` gb `239.255.255.255`"
        },
        "correct": "b"
      },
      {
        "id": 94,
        "question": "Why is the number of usable hosts in any subnet block calculated as $2^h - 2$?",
        "options": {
          "a": "Gb yrnir fcnpr sbe frpbaqnel uhof",
          "b": "**Gb rkpyhqr gur erfreirq argjbex nqqerff (svefg VC) naq oebnqpnfg nqqerff (ynfg VC) ✓**",
          "c": "Gb nppbhag sbe cnpxrg pbyyvfvbaf",
          "d": "Gb nppbzzbqngr qlanzvp cbegf"
        },
        "correct": "b"
      },
      {
        "id": 95,
        "question": "What is the network address (first address) for the CIDR block IP address `192.168.1.50/29`?",
        "options": {
          "a": "`192.168.1.0`",
          "b": "**`192.168.1.48` ✓** *(50 va ovanel: 00110010; /29 znfx xrrcf svefg 5 ovgf bs ynfg bpgrg => 00110000 = 48)*\a",
          "c": "`192.168.1.40`",
          "d": "`192.168.1.32`"
        },
        "correct": "b"
      },
      {
        "id": 96,
        "question": "What is the total number of IP addresses contained in the CIDR block `205.16.37.39/28`?",
        "options": {
          "a": "8",
          "b": "**16 ✓** *($2^{32-28} = 2^4 = 16$)*\n",
          "c": "32",
          "d": "14"
        },
        "correct": "b"
      },
      {
        "id": 97,
        "question": "Which protocol is used for routing packets between different Autonomous Systems across the public internet?",
        "options": {
          "a": "BFCS",
          "b": "EVC",
          "c": "**OTC ✓** *(Obeqre Tngrjnl Cebgbpby)*\a",
          "d": "VPZC"
        },
        "correct": "c"
      },
      {
        "id": 98,
        "question": "What does a network mask of `255.255.255.0` indicate?",
        "options": {
          "a": "Gur svefg 16 ovgf ercerfrag gur ubfg VQ",
          "b": "**Gur svefg 24 ovgf ercerfrag gur argjbex VQ, naq gur ynfg 8 ovgf ercerfrag gur ubfg VQ ✓**",
          "c": "Gur argjbex pna fhccbeg 255 fhoargf",
          "d": "Nyy VC nqqerffrf va guvf oybpx ner zhygvpnfg bayl"
        },
        "correct": "b"
      },
      {
        "id": 99,
        "question": "In Link State Routing, what does each router do to learn the complete network topology?",
        "options": {
          "a": "Crevbqvpnyyl funerf vgf ebhgvat gnoyr jvgu qverpg arvtuobef",
          "b": "**Sybbqf Yvax Fgngr Cnpxrgf (YFCf) gb nyy ebhgref va gur argjbex ✓**",
          "c": "Fraqf rpub cvatf gb gur qrsnhyg tngrjnl",
          "d": "Dhrevrf n prageny QAF ertvfgene"
        },
        "correct": "b"
      },
      {
        "id": 100,
        "question": "In a sliding window protocol, if the sender window size is 15 and the sequence numbers use 4 bits, what is the maximum efficiency?",
        "options": {
          "a": "50%",
          "b": "**100% ✓** *(fvapr Jf >= 1 + 2n vf fngvfsvrq)*\a",
          "c": "15%",
          "d": "75%"
        },
        "correct": "b"
      }
    ]
  }
];
