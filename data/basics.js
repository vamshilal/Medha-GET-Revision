// ============================================================
// MEDHA SERVO GET REVISION - STUDY MATERIAL
// ============================================================


// ============================================================
// 1. ELECTRICAL & NETWORK THEORY
// ============================================================

const electricalTopics = [

    {
        title: "Voltage",
        icon: "⚡",
        content: `
            <h3>Voltage</h3>
            <p>Voltage is the electrical potential difference between two points.</p>

            <div class="formula">
                V = W / Q
            </div>

            <ul>
                <li>Unit: Volt (V)</li>
                <li>Voltage is the driving force for current.</li>
                <li>Measured using a voltmeter.</li>
                <li>Voltmeter is connected in parallel.</li>
            </ul>
        `
    },

    {
        title: "Current",
        icon: "🔌",
        content: `
            <h3>Current</h3>
            <p>Electric current is the rate of flow of electric charge.</p>

            <div class="formula">
                I = Q / t
            </div>

            <ul>
                <li>Unit: Ampere (A)</li>
                <li>Measured using an ammeter.</li>
                <li>Ammeter is connected in series.</li>
            </ul>
        `
    },

    {
        title: "Resistance",
        icon: "🔧",
        content: `
            <h3>Resistance</h3>

            <div class="formula">
                R = ρL / A
            </div>

            <ul>
                <li>Unit: Ohm (Ω)</li>
                <li>Resistance increases with length.</li>
                <li>Resistance decreases with cross-sectional area.</li>
            </ul>
        `
    },

    {
        title: "Ohm's Law",
        icon: "📐",
        content: `
            <h3>Ohm's Law</h3>

            <p>At constant temperature, current is directly proportional to voltage.</p>

            <div class="formula">
                V = IR
            </div>
        `
    },

    {
        title: "Electrical Power",
        icon: "💡",
        content: `
            <h3>Electrical Power</h3>

            <div class="formula">
                P = VI<br>
                P = I²R<br>
                P = V²/R
            </div>

            <p>Unit: Watt (W)</p>
        `
    },

    {
        title: "AC and DC",
        icon: "🔄",
        content: `
            <h3>AC and DC</h3>

            <p><strong>AC:</strong> Current changes magnitude and direction periodically.</p>
            <p><strong>DC:</strong> Current flows in one direction.</p>
        `
    },

    {
        title: "Series Circuit",
        icon: "➖",
        content: `
            <h3>Series Circuit</h3>

            <p>Same current flows through all components.</p>

            <div class="formula">
                Rtotal = R1 + R2 + R3 + ...
            </div>
        `
    },

    {
        title: "Parallel Circuit",
        icon: "🔀",
        content: `
            <h3>Parallel Circuit</h3>

            <p>Same voltage appears across parallel branches.</p>

            <div class="formula">
                1/R = 1/R1 + 1/R2 + ...
            </div>
        `
    },

    {
        title: "Kirchhoff's Current Law",
        icon: "🔀",
        content: `
            <h3>KCL</h3>

            <p>The algebraic sum of currents at a node is zero.</p>

            <div class="formula">
                ΣI = 0
            </div>
        `
    },

    {
        title: "Kirchhoff's Voltage Law",
        icon: "🔁",
        content: `
            <h3>KVL</h3>

            <p>The algebraic sum of voltages around a closed loop is zero.</p>

            <div class="formula">
                ΣV = 0
            </div>
        `
    },

    {
        title: "Thevenin's Theorem",
        icon: "🔬",
        content: `
            <h3>Thevenin's Theorem</h3>

            <p>A linear two-terminal network can be replaced by an equivalent voltage source and series resistance.</p>

            <div class="formula">
                Vth = Open Circuit Voltage
            </div>
        `
    },

    {
        title: "Norton's Theorem",
        icon: "🧮",
        content: `
            <h3>Norton's Theorem</h3>

            <p>A linear two-terminal network can be represented by a current source in parallel with an equivalent resistance.</p>

            <div class="formula">
                In = Short Circuit Current
            </div>
        `
    },

    {
        title: "Maximum Power Transfer",
        icon: "📈",
        content: `
            <h3>Maximum Power Transfer</h3>

            <div class="formula">
                RL = Rth
            </div>

            <p>For AC circuits, maximum power transfer occurs when load impedance is the complex conjugate of source impedance.</p>
        `
    },

    {
        title: "Capacitor",
        icon: "🔋",
        content: `
            <h3>Capacitor</h3>

            <p>A capacitor stores energy in an electric field.</p>

            <div class="formula">
                Q = CV<br>
                Energy = 1/2 CV²
            </div>
        `
    },

    {
        title: "Inductor",
        icon: "🌀",
        content: `
            <h3>Inductor</h3>

            <p>An inductor stores energy in a magnetic field.</p>

            <div class="formula">
                V = L(di/dt)<br>
                Energy = 1/2 LI²
            </div>
        `
    }

];


// ============================================================
// 2. ANALOG ELECTRONICS
// ============================================================

const analogTopics = [

    {
        title: "Semiconductor Basics",
        icon: "💎",
        content: `
            <h3>Semiconductor Basics</h3>

            <ul>
                <li>Silicon</li>
                <li>Germanium</li>
                <li>N-type</li>
                <li>P-type</li>
            </ul>
        `
    },

    {
        title: "PN Junction Diode",
        icon: "➡️",
        content: `
            <h3>PN Junction Diode</h3>

            <p>A PN junction diode allows current mainly in one direction.</p>

            <ul>
                <li>Forward bias → conducts</li>
                <li>Reverse bias → very small current</li>
                <li>Breakdown → large reverse current</li>
            </ul>
        `
    },

    {
        title: "Diode Characteristics",
        icon: "📊",
        content: `
            <h3>Diode Characteristics</h3>

            <ul>
                <li>Forward region</li>
                <li>Reverse region</li>
                <li>Breakdown region</li>
            </ul>

            <p>Typical silicon diode forward voltage is approximately 0.7 V.</p>
        `
    },

    {
        title: "Zener Diode",
        icon: "🛡️",
        content: `
            <h3>Zener Diode</h3>

            <p>Operates in the reverse breakdown region.</p>

            <ul>
                <li>Voltage regulation</li>
                <li>Reference voltage</li>
                <li>Protection circuits</li>
            </ul>
        `
    },

    {
        title: "Rectifiers",
        icon: "🔄",
        content: `
            <h3>Rectifiers</h3>

            <ul>
                <li>Half-wave</li>
                <li>Full-wave</li>
                <li>Bridge rectifier</li>
            </ul>

            <p>Rectifiers convert AC into DC.</p>
        `
    },

    {
        title: "Filters",
        icon: "🔍",
        content: `
            <h3>Filters</h3>

            <ul>
                <li>Capacitor filter</li>
                <li>Inductor filter</li>
                <li>LC filter</li>
                <li>π filter</li>
            </ul>
        `
    },

    {
        title: "BJT",
        icon: "🔺",
        content: `
            <h3>BJT</h3>

            <p>BJT is a current-controlled device.</p>

            <ul>
                <li>NPN</li>
                <li>PNP</li>
                <li>Emitter</li>
                <li>Base</li>
                <li>Collector</li>
            </ul>

            <div class="formula">
                IE = IC + IB
            </div>
        `
    },

    {
        title: "BJT Configurations",
        icon: "🔧",
        content: `
            <h3>BJT Configurations</h3>

            <ul>
                <li>Common Emitter</li>
                <li>Common Base</li>
                <li>Common Collector</li>
            </ul>
        `
    },

    {
        title: "Transistor Biasing",
        icon: "⚙️",
        content: `
            <h3>Transistor Biasing</h3>

            <p>Biasing establishes the operating point or Q-point of a transistor.</p>

            <ul>
                <li>Fixed bias</li>
                <li>Voltage-divider bias</li>
                <li>Emitter bias</li>
            </ul>
        `
    },

    {
        title: "MOSFET",
        icon: "🔲",
        content: `
            <h3>MOSFET</h3>

            <p>MOSFET is a voltage-controlled semiconductor device.</p>

            <ul>
                <li>Gate</li>
                <li>Drain</li>
                <li>Source</li>
            </ul>

            <p>It has very high input impedance.</p>
        `
    },

    {
        title: "BJT vs MOSFET",
        icon: "⚖️",
        content: `
            <h3>BJT vs MOSFET</h3>

            <table class="comparison-table">
                <tr>
                    <th>BJT</th>
                    <th>MOSFET</th>
                </tr>
                <tr>
                    <td>Current controlled</td>
                    <td>Voltage controlled</td>
                </tr>
                <tr>
                    <td>Lower input impedance</td>
                    <td>Very high input impedance</td>
                </tr>
            </table>
        `
    },

    {
        title: "Op-Amp Basics",
        icon: "🔺",
        content: `
            <h3>Operational Amplifier</h3>

            <p>An op-amp is a high-gain differential amplifier.</p>

            <ul>
                <li>High input impedance</li>
                <li>High open-loop gain</li>
                <li>Low output impedance</li>
                <li>High CMRR</li>
            </ul>
        `
    },

    {
        title: "Inverting Amplifier",
        icon: "↩️",
        content: `
            <h3>Inverting Amplifier</h3>

            <div class="formula">
                Av = -Rf / Rin
            </div>

            <p>Output is 180° out of phase with input.</p>
        `
    },

    {
        title: "Non-Inverting Amplifier",
        icon: "↪️",
        content: `
            <h3>Non-Inverting Amplifier</h3>

            <div class="formula">
                Av = 1 + (Rf/R1)
            </div>
        `
    },

    {
        title: "Comparator",
        icon: "⚖️",
        content: `
            <h3>Comparator</h3>

            <p>A comparator compares two input voltages.</p>

            <ul>
                <li>V+ > V− → positive output</li>
                <li>V+ < V− → negative output</li>
            </ul>
        `
    }

];


// ============================================================
// 3. DIGITAL ELECTRONICS
// ============================================================

const digitalTopics = [

    {
        title: "Number Systems",
        icon: "🔢",
        content: `
            <h3>Number Systems</h3>

            <ul>
                <li>Binary → Base 2</li>
                <li>Octal → Base 8</li>
                <li>Decimal → Base 10</li>
                <li>Hexadecimal → Base 16</li>
            </ul>
        `
    },

    {
        title: "Binary Conversions",
        icon: "🔄",
        content: `
            <h3>Binary Conversions</h3>

            <div class="formula">
                (1010)₂ = (10)₁₀
            </div>
        `
    },

    {
        title: "Logic Gates",
        icon: "🚪",
        content: `
            <h3>Logic Gates</h3>

            <ul>
                <li>AND</li>
                <li>OR</li>
                <li>NOT</li>
                <li>NAND</li>
                <li>NOR</li>
                <li>XOR</li>
                <li>XNOR</li>
            </ul>
        `
    },

    {
        title: "AND, OR and NOT Gates",
        icon: "🔣",
        content: `
            <h3>Basic Gates</h3>

            <p><strong>AND:</strong> Output is 1 when all inputs are 1.</p>
            <p><strong>OR:</strong> Output is 1 when at least one input is 1.</p>
            <p><strong>NOT:</strong> Produces the complement.</p>
        `
    },

    {
        title: "NAND and NOR Gates",
        icon: "⭐",
        content: `
            <h3>Universal Gates</h3>
            <p>NAND and NOR are universal gates.</p>
        `
    },

    {
        title: "XOR and XNOR Gates",
        icon: "🔀",
        content: `
            <h3>XOR and XNOR</h3>
            <p>XOR gives 1 when inputs are different.</p>
            <p>XNOR gives 1 when inputs are the same.</p>
        `
    },

    {
        title: "Boolean Algebra",
        icon: "🧮",
        content: `
            <h3>Boolean Algebra</h3>

            <div class="formula">
                A + 0 = A<br>
                A · 1 = A<br>
                A + 1 = 1<br>
                A · 0 = 0<br>
                A + A = A<br>
                A · A = A
            </div>
        `
    },

    {
        title: "De Morgan's Theorems",
        icon: "📘",
        content: `
            <h3>De Morgan's Theorems</h3>

            <div class="formula">
                (A + B)' = A'B'
            </div>

            <div class="formula">
                (AB)' = A' + B'
            </div>
        `
    },

    {
        title: "Half Adder",
        icon: "➕",
        content: `
            <h3>Half Adder</h3>

            <div class="formula">
                Sum = A ⊕ B<br>
                Carry = AB
            </div>
        `
    },

    {
        title: "Full Adder",
        icon: "➕",
        content: `
            <h3>Full Adder</h3>

            <div class="formula">
                Sum = A ⊕ B ⊕ Cin
            </div>
        `
    },

    {
        title: "Multiplexer",
        icon: "🔀",
        content: `
            <h3>Multiplexer - MUX</h3>

            <p>Selects one input from multiple inputs.</p>

            <div class="formula">
                2ⁿ inputs → n select lines
            </div>
        `
    },

    {
        title: "Demultiplexer",
        icon: "↔️",
        content: `
            <h3>Demultiplexer - DEMUX</h3>
            <p>Routes one input to one of multiple outputs.</p>
        `
    },

    {
        title: "Encoder",
        icon: "🔢",
        content: `
            <h3>Encoder</h3>
            <p>Converts multiple inputs into coded outputs.</p>
        `
    },

    {
        title: "Decoder",
        icon: "🔓",
        content: `
            <h3>Decoder</h3>

            <div class="formula">
                n inputs → 2ⁿ outputs
            </div>
        `
    },

    {
        title: "Flip-Flops",
        icon: "💾",
        content: `
            <h3>Flip-Flops</h3>

            <p>A flip-flop stores one bit.</p>

            <ul>
                <li>SR</li>
                <li>JK</li>
                <li>D</li>
                <li>T</li>
            </ul>
        `
    },

    {
        title: "JK Flip-Flop",
        icon: "🔄",
        content: `
            <h3>JK Flip-Flop</h3>

            <ul>
                <li>00 → No change</li>
                <li>01 → Reset</li>
                <li>10 → Set</li>
                <li>11 → Toggle</li>
            </ul>
        `
    },

    {
        title: "D Flip-Flop",
        icon: "💾",
        content: `
            <h3>D Flip-Flop</h3>

            <div class="formula">
                Q(next) = D
            </div>
        `
    },

    {
        title: "Counters",
        icon: "🔢",
        content: `
            <h3>Counters</h3>

            <ul>
                <li>Asynchronous</li>
                <li>Synchronous</li>
                <li>Up counter</li>
                <li>Down counter</li>
                <li>Up/down counter</li>
            </ul>
        `
    },

    {
        title: "Registers",
        icon: "📦",
        content: `
            <h3>Registers</h3>

            <ul>
                <li>SISO</li>
                <li>SIPO</li>
                <li>PISO</li>
                <li>PIPO</li>
            </ul>
        `
    },

    {
        title: "ADC and DAC",
        icon: "📡",
        content: `
            <h3>ADC and DAC</h3>

            <p>ADC → Analog to Digital</p>
            <p>DAC → Digital to Analog</p>

            <div class="formula">
                Number of levels = 2ⁿ
            </div>
        `
    }

];


// ============================================================
// 4. MICROPROCESSORS & MICROCONTROLLERS
// ============================================================

const microcontrollerTopics = [

    {
        title: "Microprocessor vs Microcontroller",
        icon: "🖥️",
        content: `
            <h3>Microprocessor vs Microcontroller</h3>

            <table class="comparison-table">
                <tr>
                    <th>Microprocessor</th>
                    <th>Microcontroller</th>
                </tr>
                <tr>
                    <td>Mainly CPU</td>
                    <td>CPU + memory + peripherals</td>
                </tr>
                <tr>
                    <td>External peripherals commonly required</td>
                    <td>Many peripherals integrated</td>
                </tr>
            </table>
        `
    },

    {
        title: "8085 Microprocessor Basics",
        icon: "💻",
        content: `
            <h3>8085</h3>

            <ul>
                <li>8-bit microprocessor</li>
                <li>16-bit address bus</li>
                <li>Can address up to 64 KB memory</li>
            </ul>
        `
    },

    {
        title: "Microprocessor Architecture",
        icon: "🏗️",
        content: `
            <h3>Architecture</h3>

            <ul>
                <li>ALU</li>
                <li>Control Unit</li>
                <li>Registers</li>
                <li>Program Counter</li>
                <li>Stack Pointer</li>
                <li>Instruction Register</li>
            </ul>
        `
    },

    {
        title: "ALU",
        icon: "🧮",
        content: `
            <h3>Arithmetic Logic Unit</h3>
            <p>ALU performs arithmetic and logical operations.</p>
        `
    },

    {
        title: "Registers",
        icon: "📦",
        content: `
            <h3>Registers</h3>
            <p>Registers are fast storage locations inside the processor.</p>
        `
    },

    {
        title: "Program Counter",
        icon: "📍",
        content: `
            <h3>Program Counter</h3>
            <p>Stores the address of the next instruction.</p>
        `
    },

    {
        title: "Stack Pointer",
        icon: "📚",
        content: `
            <h3>Stack Pointer</h3>
            <p>Points to the top of the stack.</p>
        `
    },

    {
        title: "Flags",
        icon: "🚩",
        content: `
            <h3>Flags</h3>

            <ul>
                <li>Zero</li>
                <li>Carry</li>
                <li>Sign</li>
                <li>Parity</li>
                <li>Auxiliary Carry</li>
            </ul>
        `
    },

    {
        title: "Instruction Cycle",
        icon: "🔄",
        content: `
            <h3>Instruction Cycle</h3>

            <ol>
                <li>Fetch</li>
                <li>Decode</li>
                <li>Execute</li>
            </ol>
        `
    },

    {
        title: "Address Bus, Data Bus and Control Bus",
        icon: "🛣️",
        content: `
            <h3>System Buses</h3>

            <p><strong>Address Bus:</strong> Carries address.</p>
            <p><strong>Data Bus:</strong> Carries data.</p>
            <p><strong>Control Bus:</strong> Carries control signals.</p>
        `
    },

    {
        title: "Memory",
        icon: "💾",
        content: `
            <h3>Memory</h3>

            <ul>
                <li>RAM → Volatile</li>
                <li>ROM → Non-volatile</li>
                <li>Flash → Non-volatile and rewritable</li>
            </ul>
        `
    },

    {
        title: "I/O Ports",
        icon: "🔌",
        content: `
            <h3>I/O Ports</h3>
            <p>Used for communication between a controller and external devices.</p>
        `
    },

    {
        title: "Timers and Counters",
        icon: "⏱️",
        content: `
            <h3>Timers and Counters</h3>

            <p>Timers measure time or generate delays.</p>
            <p>Counters count events or pulses.</p>
        `
    },

    {
        title: "Interrupts",
        icon: "🚨",
        content: `
            <h3>Interrupts</h3>
            <p>An interrupt temporarily stops normal execution to service an event.</p>
        `
    },

    {
        title: "ADC in Microcontrollers",
        icon: "📥",
        content: `
            <h3>ADC</h3>
            <p>Converts analog input into digital data.</p>
        `
    },

    {
        title: "DAC in Microcontrollers",
        icon: "📤",
        content: `
            <h3>DAC</h3>
            <p>Converts digital data into analog output.</p>
        `
    },

    {
        title: "UART",
        icon: "📡",
        content: `
            <h3>UART</h3>

            <ul>
                <li>Serial communication</li>
                <li>Asynchronous</li>
                <li>TX</li>
                <li>RX</li>
            </ul>
        `
    },

    {
        title: "SPI",
        icon: "🔗",
        content: `
            <h3>SPI</h3>

            <ul>
                <li>MOSI</li>
                <li>MISO</li>
                <li>SCLK</li>
                <li>SS/CS</li>
            </ul>
        `
    },

    {
        title: "I²C",
        icon: "🔗",
        content: `
            <h3>I²C</h3>

            <ul>
                <li>SDA</li>
                <li>SCL</li>
                <li>Device addressing</li>
                <li>Multiple devices on bus</li>
            </ul>
        `
    },

    {
        title: "PWM",
        icon: "📶",
        content: `
            <h3>PWM</h3>

            <div class="formula">
                Duty Cycle = (Ton / T) × 100%
            </div>

            <p>Used for motor speed and LED brightness control.</p>
        `
    },

    {
        title: "Embedded Systems",
        icon: "⚙️",
        content: `
            <h3>Embedded Systems</h3>

            <p>An embedded system is designed for a specific function.</p>

            <ul>
                <li>Automotive</li>
                <li>Industrial</li>
                <li>Railway</li>
                <li>Consumer electronics</li>
            </ul>
        `
    }

];


// ============================================================
// 5. C / EMBEDDED C
// ============================================================

const embeddedCTopics = [

    {
        title: "C Programming Basics",
        icon: "💻",
        content: `
            <h3>C Programming Basics</h3>
            <p>C is a procedural programming language widely used in embedded systems.</p>
        `
    },

    {
        title: "Data Types",
        icon: "🔢",
        content: `
            <h3>Data Types</h3>

            <ul>
                <li>char</li>
                <li>int</li>
                <li>float</li>
                <li>double</li>
                <li>void</li>
            </ul>
        `
    },

    {
        title: "Variables and Constants",
        icon: "📦",
        content: `
            <h3>Variables and Constants</h3>
            <p>Variables can change during execution. Constants are intended to remain unchanged.</p>
        `
    },

    {
        title: "Operators",
        icon: "➗",
        content: `
            <h3>Operators</h3>

            <ul>
                <li>Arithmetic</li>
                <li>Relational</li>
                <li>Logical</li>
                <li>Assignment</li>
                <li>Bitwise</li>
                <li>Conditional</li>
            </ul>
        `
    },

    {
        title: "Conditional Statements",
        icon: "🔀",
        content: `
            <h3>Conditional Statements</h3>

            <ul>
                <li>if</li>
                <li>if-else</li>
                <li>else-if</li>
                <li>switch-case</li>
            </ul>
        `
    },

    {
        title: "Loops",
        icon: "🔁",
        content: `
            <h3>Loops</h3>

            <ul>
                <li>for</li>
                <li>while</li>
                <li>do-while</li>
            </ul>
        `
    },

    {
        title: "Functions",
        icon: "⚙️",
        content: `
            <h3>Functions</h3>
            <p>A function is a reusable block of code.</p>
        `
    },

    {
        title: "Arrays",
        icon: "📊",
        content: `
            <h3>Arrays</h3>
            <p>An array stores multiple elements of the same data type.</p>
        `
    },

    {
        title: "Strings",
        icon: "🔤",
        content: `
            <h3>Strings</h3>
            <p>C strings are character arrays terminated by the null character.</p>

            <div class="formula">
                '\\0'
            </div>
        `
    },

    {
        title: "Pointers",
        icon: "👉",
        content: `
            <h3>Pointers</h3>

            <p>A pointer stores the address of another variable.</p>

            <div class="formula">
                int *p;
            </div>
        `
    },

    {
        title: "Pointers and Arrays",
        icon: "🔗",
        content: `
            <h3>Pointers and Arrays</h3>
            <p>Array elements can be accessed using pointer arithmetic.</p>
        `
    },

    {
        title: "Structures",
        icon: "🧱",
        content: `
            <h3>Structures</h3>
            <p>A structure groups variables of different data types under one name.</p>
        `
    },

    {
        title: "Bitwise Operators",
        icon: "🔢",
        content: `
            <h3>Bitwise Operators</h3>

            <ul>
                <li>& → AND</li>
                <li>| → OR</li>
                <li>^ → XOR</li>
                <li>~ → NOT</li>
                <li>&lt;&lt; → Left shift</li>
                <li>&gt;&gt; → Right shift</li>
            </ul>
        `
    },

    {
        title: "Bit Manipulation",
        icon: "⚙️",
        content: `
            <h3>Bit Manipulation</h3>

            <ul>
                <li>Set a bit</li>
                <li>Clear a bit</li>
                <li>Toggle a bit</li>
                <li>Check a bit</li>
            </ul>
        `
    },

    {
        title: "volatile Keyword",
        icon: "⚠️",
        content: `
            <h3>volatile</h3>
            <p>Used when a variable may change unexpectedly, such as hardware registers or interrupt-related variables.</p>
        `
    },

    {
        title: "const Keyword",
        icon: "🔒",
        content: `
            <h3>const</h3>
            <p>Indicates that a variable should not be modified through that identifier.</p>
        `
    },

    {
        title: "Static Keyword",
        icon: "📌",
        content: `
            <h3>static</h3>
            <p>A static local variable retains its value between function calls.</p>
        `
    },

    {
        title: "Memory in Embedded C",
        icon: "💾",
        content: `
            <h3>Memory</h3>

            <ul>
                <li>Flash/ROM → Program storage</li>
                <li>RAM → Runtime data</li>
                <li>Registers → Hardware control</li>
                <li>EEPROM → Non-volatile data where available</li>
            </ul>
        `
    },

    {
        title: "Embedded C and Hardware",
        icon: "🔌",
        content: `
            <h3>Embedded C and Hardware</h3>

            <ul>
                <li>GPIO</li>
                <li>Sensor reading</li>
                <li>Motor control</li>
                <li>UART</li>
                <li>Timers</li>
                <li>Interrupts</li>
            </ul>
        `
    }

];


// ============================================================
// 6. CONTROL SYSTEMS
// ============================================================

const controlTopics = [

    {
        title: "Introduction to Control Systems",
        icon: "🎛️",
        content: `
            <h3>Control Systems</h3>
            <p>A control system manages or regulates the behavior of a system.</p>
        `
    },

    {
        title: "Open Loop Control System",
        icon: "➡️",
        content: `
            <h3>Open Loop</h3>
            <p>An open-loop system does not use feedback.</p>
        `
    },

    {
        title: "Closed Loop Control System",
        icon: "🔄",
        content: `
            <h3>Closed Loop</h3>
            <p>A closed-loop system uses feedback.</p>

            <div class="formula">
                Error = Reference - Feedback
            </div>
        `
    },

    {
        title: "Open Loop vs Closed Loop",
        icon: "⚖️",
        content: `
            <h3>Comparison</h3>

            <table class="comparison-table">
                <tr>
                    <th>Open Loop</th>
                    <th>Closed Loop</th>
                </tr>
                <tr>
                    <td>No feedback</td>
                    <td>Uses feedback</td>
                </tr>
                <tr>
                    <td>Less complex</td>
                    <td>More complex</td>
                </tr>
            </table>
        `
    },

    {
        title: "Feedback",
        icon: "↩️",
        content: `
            <h3>Feedback</h3>
            <p>Feedback returns a portion of the output to the input.</p>
        `
    },

    {
        title: "Transfer Function",
        icon: "📐",
        content: `
            <h3>Transfer Function</h3>

            <div class="formula">
                G(s) = C(s) / R(s)
            </div>

            <p>Defined under zero initial conditions.</p>
        `
    },

    {
        title: "Block Diagram",
        icon: "🧱",
        content: `
            <h3>Block Diagram</h3>

            <ul>
                <li>Blocks</li>
                <li>Summing points</li>
                <li>Take-off points</li>
                <li>Signal paths</li>
            </ul>
        `
    },

    {
        title: "Signal Flow Graph",
        icon: "🕸️",
        content: `
            <h3>Signal Flow Graph</h3>
            <p>Represents relationships between system variables using nodes and branches.</p>
        `
    },

    {
        title: "Time Response",
        icon: "⏱️",
        content: `
            <h3>Time Response</h3>

            <ul>
                <li>Transient response</li>
                <li>Steady-state response</li>
            </ul>
        `
    },

    {
        title: "First Order System",
        icon: "1️⃣",
        content: `
            <h3>First Order System</h3>

            <div class="formula">
                G(s) = K / (τs + 1)
            </div>
        `
    },

    {
        title: "Second Order System",
        icon: "2️⃣",
        content: `
            <h3>Second Order System</h3>

            <div class="formula">
                G(s) = ωn² / (s² + 2ζωn s + ωn²)
            </div>
        `
    },

    {
        title: "Poles and Zeros",
        icon: "📍",
        content: `
            <h3>Poles and Zeros</h3>

            <p>Poles make the denominator zero.</p>
            <p>Zeros make the numerator zero.</p>
        `
    },

    {
        title: "Stability",
        icon: "⚖️",
        content: `
            <h3>Stability</h3>
            <p>For a standard stable continuous-time system, closed-loop poles lie in the left half of the s-plane.</p>
        `
    },

    {
        title: "Routh-Hurwitz Criterion",
        icon: "📋",
        content: `
            <h3>Routh-Hurwitz</h3>

            <div class="formula">
                Sign changes in first column
                = Number of right-half-plane roots
            </div>
        `
    },

    {
        title: "PID Controller",
        icon: "🎛️",
        content: `
            <h3>PID Controller</h3>

            <ul>
                <li>Proportional</li>
                <li>Integral</li>
                <li>Derivative</li>
            </ul>

            <div class="formula">
                u(t) = Kp e(t) + Ki∫e(t)dt + Kd(de(t)/dt)
            </div>
        `
    },

    {
        title: "Bode Plot",
        icon: "📈",
        content: `
            <h3>Bode Plot</h3>
            <p>Represents frequency response using magnitude and phase plots.</p>
        `
    },

    {
        title: "Root Locus",
        icon: "📍",
        content: `
            <h3>Root Locus</h3>
            <p>Shows how closed-loop poles move as system gain changes.</p>
        `
    },

    {
        title: "Steady-State Error",
        icon: "🎯",
        content: `
            <h3>Steady-State Error</h3>

            <div class="formula">
                ess = lim(t→∞) e(t)
            </div>
        `
    }

];


// ============================================================
// 7. POWER ELECTRONICS
// ============================================================

const powerElectronicsTopics = [

    {
        title: "Introduction to Power Electronics",
        icon: "⚡",
        content: `
            <h3>Power Electronics</h3>
            <p>Deals with conversion and control of electrical power using semiconductor devices.</p>

            <ul>
                <li>Motor drives</li>
                <li>Electric vehicles</li>
                <li>Railway traction</li>
                <li>UPS</li>
                <li>Renewable energy</li>
            </ul>
        `
    },

    {
        title: "Power Semiconductor Devices",
        icon: "🔌",
        content: `
            <h3>Power Semiconductor Devices</h3>

            <ul>
                <li>Power diode</li>
                <li>SCR</li>
                <li>TRIAC</li>
                <li>DIAC</li>
                <li>Power MOSFET</li>
                <li>IGBT</li>
                <li>Power BJT</li>
            </ul>
        `
    },

    {
        title: "SCR",
        icon: "🔺",
        content: `
            <h3>SCR</h3>

            <p>SCR stands for Silicon Controlled Rectifier.</p>

            <ul>
                <li>Anode</li>
                <li>Cathode</li>
                <li>Gate</li>
            </ul>

            <p>It can be triggered ON using a suitable gate signal when forward biased.</p>
        `
    },

    {
        title: "SCR Working and Characteristics",
        icon: "📊",
        content: `
            <h3>SCR Characteristics</h3>

            <ul>
                <li>Forward blocking</li>
                <li>Forward conduction</li>
                <li>Reverse blocking</li>
            </ul>
        `
    },

    {
        title: "SCR Triggering Methods",
        icon: "⚡",
        content: `
            <h3>SCR Triggering</h3>

            <ul>
                <li>Gate triggering</li>
                <li>Forward voltage triggering</li>
                <li>dv/dt triggering</li>
                <li>Thermal triggering</li>
                <li>Light triggering</li>
            </ul>
        `
    },

    {
        title: "DIAC",
        icon: "🔄",
        content: `
            <h3>DIAC</h3>

            <ul>
                <li>Bidirectional device</li>
                <li>No gate terminal</li>
                <li>Conducts after breakover</li>
                <li>Used to trigger TRIAC</li>
            </ul>
        `
    },

    {
        title: "TRIAC",
        icon: "↔️",
        content: `
            <h3>TRIAC</h3>
            <p>TRIAC is a bidirectional thyristor used mainly for AC power control.</p>

            <ul>
                <li>MT1</li>
                <li>MT2</li>
                <li>Gate</li>
            </ul>
        `
    },

    {
        title: "UJT",
        icon: "🔺",
        content: `
            <h3>UJT</h3>
            <p>UJT is used in triggering and relaxation oscillator circuits.</p>

            <ul>
                <li>Emitter</li>
                <li>Base 1</li>
                <li>Base 2</li>
            </ul>
        `
    },

    {
        title: "Power MOSFET",
        icon: "🔲",
        content: `
            <h3>Power MOSFET</h3>

            <ul>
                <li>Voltage-controlled</li>
                <li>High input impedance</li>
                <li>Fast switching</li>
                <li>High-frequency applications</li>
            </ul>
        `
    },

    {
        title: "IGBT",
        icon: "⚙️",
        content: `
            <h3>IGBT</h3>

            <p>IGBT combines MOSFET-like gate control with bipolar conduction characteristics.</p>

            <ul>
                <li>High input impedance</li>
                <li>High-power switching</li>
                <li>Motor drives</li>
                <li>EV applications</li>
                <li>Railway traction</li>
            </ul>
        `
    },

    {
        title: "BJT in Power Electronics",
        icon: "🔺",
        content: `
            <h3>Power BJT</h3>
            <p>Power BJT is a current-controlled switching device.</p>
        `
    },

    {
        title: "Power Rectifiers",
        icon: "🔄",
        content: `
            <h3>Power Rectifiers</h3>

            <ul>
                <li>Half-wave</li>
                <li>Full-wave</li>
                <li>Bridge</li>
                <li>Three-phase</li>
            </ul>
        `
    },

    {
        title: "Controlled Rectifier",
        icon: "🎛️",
        content: `
            <h3>Controlled Rectifier</h3>

            <p>Uses controllable devices such as SCRs to control DC output.</p>

            <div class="formula">
                Firing angle = α
            </div>
        `
    },

    {
        title: "Inverter",
        icon: "🔁",
        content: `
            <h3>Inverter</h3>

            <p>Converts DC into AC.</p>

            <ul>
                <li>EVs</li>
                <li>UPS</li>
                <li>Solar systems</li>
                <li>Motor drives</li>
            </ul>
        `
    },

    {
        title: "Chopper",
        icon: "✂️",
        content: `
            <h3>DC Chopper</h3>

            <p>Converts fixed DC into controlled DC output.</p>

            <div class="formula">
                Duty Cycle = Ton / T
            </div>
        `
    },

    {
        title: "AC Voltage Controller",
        icon: "〰️",
        content: `
            <h3>AC Voltage Controller</h3>

            <p>Controls the RMS value of AC voltage supplied to a load.</p>
        `
    },

    {
        title: "PWM",
        icon: "📶",
        content: `
            <h3>Pulse Width Modulation</h3>

            <div class="formula">
                Duty Cycle = (Ton / T) × 100%
            </div>
        `
    },

    {
        title: "Commutation",
        icon: "🔄",
        content: `
            <h3>Commutation</h3>

            <p>Commutation is the process of turning OFF a conducting thyristor.</p>

            <ul>
                <li>Natural commutation</li>
                <li>Forced commutation</li>
            </ul>
        `
    },

    {
        title: "Freewheeling Diode",
        icon: "🛡️",
        content: `
            <h3>Freewheeling Diode</h3>

            <p>Provides a current path for an inductive load when the main switching device is OFF.</p>
        `
    },

    {
        title: "Snubber Circuit",
        icon: "🧯",
        content: `
            <h3>Snubber Circuit</h3>
            <p>Protects switching devices from rapid voltage or current changes.</p>
        `
    },

    {
        title: "Heat Sink",
        icon: "🌡️",
        content: `
            <h3>Heat Sink</h3>
            <p>Transfers heat away from power semiconductor devices.</p>
        `
    },

    {
        title: "Applications of Power Electronics",
        icon: "🚆",
        content: `
            <h3>Applications</h3>

            <ul>
                <li>Railway traction</li>
                <li>Electric vehicles</li>
                <li>Industrial motor drives</li>
                <li>Solar inverters</li>
                <li>Wind energy</li>
                <li>UPS</li>
                <li>SMPS</li>
                <li>Battery chargers</li>
            </ul>

            <div class="tip">
                <strong>GET Tip:</strong><br>
                AC → DC = Rectifier<br>
                DC → AC = Inverter<br>
                DC → DC = Chopper<br>
                AC → AC = AC Voltage Controller
            </div>
        `
    }

];


// ============================================================
// 8. SENSORS & INSTRUMENTATION
// ============================================================

const instrumentationTopics = [

    {
        title: "Introduction to Instrumentation",
        icon: "🎛️",
        content: `
            <h3>Instrumentation</h3>
            <p>Instrumentation deals with measuring, monitoring and controlling physical quantities.</p>

            <ul>
                <li>Temperature</li>
                <li>Pressure</li>
                <li>Flow</li>
                <li>Level</li>
                <li>Displacement</li>
                <li>Force</li>
            </ul>
        `
    },

    {
        title: "Sensor and Transducer",
        icon: "📡",
        content: `
            <h3>Sensor and Transducer</h3>

            <p><strong>Sensor:</strong> Detects or responds to a physical quantity.</p>

            <p><strong>Transducer:</strong> Converts one form of energy or physical quantity into another.</p>
        `
    },

    {
        title: "Temperature Measurement",
        icon: "🌡️",
        content: `
            <h3>Temperature Sensors</h3>

            <ul>
                <li>RTD</li>
                <li>Thermocouple</li>
                <li>Thermistor</li>
                <li>Semiconductor temperature sensors</li>
            </ul>
        `
    },

    {
        title: "RTD",
        icon: "🌡️",
        content: `
            <h3>RTD</h3>

            <p>RTD measures temperature using the change in resistance of a material.</p>

            <p>Platinum is commonly used.</p>

            <div class="formula">
                R = R₀(1 + αΔT)
            </div>
        `
    },

    {
        title: "Pt100",
        icon: "🔬",
        content: `
            <h3>Pt100</h3>

            <p>Pt100 is a platinum RTD with nominal resistance of 100 Ω at 0°C.</p>

            <div class="tip">
                <strong>Remember:</strong>
                Pt100 → Platinum → 100 Ω at 0°C.
            </div>
        `
    },

    {
        title: "Thermocouple",
        icon: "🔥",
        content: `
            <h3>Thermocouple</h3>

            <p>A thermocouple consists of two dissimilar metals and produces a voltage related to temperature difference.</p>
        `
    },

    {
        title: "Seebeck Effect",
        icon: "⚡",
        content: `
            <h3>Seebeck Effect</h3>
            <p>Temperature difference between dissimilar conductors can produce an electromotive force.</p>
        `
    },

    {
        title: "Thermistor",
        icon: "🌡️",
        content: `
            <h3>Thermistor</h3>

            <ul>
                <li>NTC → Resistance decreases as temperature increases</li>
                <li>PTC → Resistance increases as temperature increases</li>
            </ul>
        `
    },

    {
        title: "LVDT",
        icon: "📏",
        content: `
            <h3>LVDT</h3>

            <p>LVDT stands for Linear Variable Differential Transformer.</p>

            <p>It is an inductive transducer used to measure linear displacement.</p>
        `
    },

    {
        title: "Strain Gauge",
        icon: "📏",
        content: `
            <h3>Strain Gauge</h3>

            <p>Measures mechanical strain through a change in electrical resistance.</p>

            <div class="formula">
                Gauge Factor = (ΔR/R) / ε
            </div>
        `
    },

    {
        title: "Wheatstone Bridge",
        icon: "🔷",
        content: `
            <h3>Wheatstone Bridge</h3>

            <p>Used for precise resistance measurement and sensor signal conditioning.</p>

            <div class="formula">
                R1/R2 = R3/R4
            </div>
        `
    },

    {
        title: "Bourdon Tube",
        icon: "⭕",
        content: `
            <h3>Bourdon Tube</h3>

            <p>A mechanical pressure-measuring element.</p>

            <p>Pressure causes mechanical deformation and movement.</p>
        `
    },

    {
        title: "Piezoelectric Sensor",
        icon: "⚡",
        content: `
            <h3>Piezoelectric Sensor</h3>

            <p>Generates electrical charge when subjected to mechanical stress.</p>

            <ul>
                <li>Vibration</li>
                <li>Acceleration</li>
                <li>Dynamic force</li>
                <li>Impact detection</li>
            </ul>
        `
    },

    {
        title: "LDR",
        icon: "💡",
        content: `
            <h3>LDR</h3>

            <p>LDR stands for Light Dependent Resistor.</p>

            <p>Resistance generally decreases as light intensity increases.</p>
        `
    },

    {
        title: "Accuracy",
        icon: "🎯",
        content: `
            <h3>Accuracy</h3>
            <p>Accuracy indicates how close a measured value is to the true or accepted value.</p>
        `
    },

    {
        title: "Precision",
        icon: "📌",
        content: `
            <h3>Precision</h3>
            <p>Precision indicates how closely repeated measurements agree.</p>

            <div class="tip">
                Accuracy → closeness to true value.<br>
                Precision → repeatability.
            </div>
        `
    },

    {
        title: "Sensitivity",
        icon: "📈",
        content: `
            <h3>Sensitivity</h3>

            <div class="formula">
                Sensitivity = ΔOutput / ΔInput
            </div>
        `
    },

    {
        title: "Resolution",
        icon: "🔍",
        content: `
            <h3>Resolution</h3>
            <p>Resolution is the smallest change in input that an instrument can detect.</p>
        `
    },

    {
        title: "Calibration",
        icon: "⚙️",
        content: `
            <h3>Calibration</h3>
            <p>Calibration compares an instrument's measurement with a known reference.</p>
        `
    },

    {
        title: "Error in Measurement",
        icon: "⚠️",
        content: `
            <h3>Measurement Error</h3>

            <div class="formula">
                Error = Measured Value - True Value
            </div>

            <ul>
                <li>Systematic errors</li>
                <li>Random errors</li>
                <li>Gross errors</li>
            </ul>
        `
    },

    {
        title: "Pressure Measurement",
        icon: "🧭",
        content: `
            <h3>Pressure Measurement</h3>

            <ul>
                <li>Bourdon tube</li>
                <li>Diaphragm</li>
                <li>Bellows</li>
                <li>Pressure transducers</li>
            </ul>
        `
    },

    {
        title: "Flow Measurement",
        icon: "💧",
        content: `
            <h3>Flow Measurement</h3>

            <ul>
                <li>Orifice plate</li>
                <li>Venturi meter</li>
                <li>Rotameter</li>
                <li>Electromagnetic flowmeter</li>
                <li>Ultrasonic flowmeter</li>
            </ul>
        `
    },

    {
        title: "Level Measurement",
        icon: "🛢️",
        content: `
            <h3>Level Measurement</h3>

            <ul>
                <li>Float type</li>
                <li>Differential pressure</li>
                <li>Ultrasonic</li>
                <li>Radar</li>
                <li>Capacitive</li>
            </ul>
        `
    },

    {
        title: "Industrial Instrumentation",
        icon: "🏭",
        content: `
            <h3>Industrial Instrumentation</h3>

            <p>Used to measure and control industrial process variables.</p>

            <div class="formula">
                T-P-F-L
            </div>

            <p>
                T → Temperature<br>
                P → Pressure<br>
                F → Flow<br>
                L → Level
            </p>
        `
    }

];


// ============================================================
// 9. SIGNALS & COMMUNICATION
// ============================================================

const signalsTopics = [

    {
        title: "Introduction to Signals",
        icon: "📶",
        content: `
            <h3>Signals</h3>
            <p>A signal is a physical quantity that carries information.</p>

            <ul>
                <li>Audio</li>
                <li>Video</li>
                <li>Sensor signals</li>
                <li>Radio signals</li>
            </ul>
        `
    },

    {
        title: "Continuous and Discrete Signals",
        icon: "〰️",
        content: `
            <h3>Continuous and Discrete Signals</h3>

            <p><strong>Continuous-time:</strong> Defined at every instant.</p>
            <p><strong>Discrete-time:</strong> Defined at discrete time instants.</p>
        `
    },

    {
        title: "Analog and Digital Signals",
        icon: "🔢",
        content: `
            <h3>Analog and Digital Signals</h3>

            <p><strong>Analog:</strong> Continuously varying values.</p>
            <p><strong>Digital:</strong> Discrete amplitude levels.</p>
        `
    },

    {
        title: "Periodic and Non-Periodic Signals",
        icon: "🔄",
        content: `
            <h3>Periodic Signal</h3>

            <div class="formula">
                x(t) = x(t + T)
            </div>
        `
    },

    {
        title: "Frequency and Time Period",
        icon: "⏱️",
        content: `
            <h3>Frequency and Time Period</h3>

            <div class="formula">
                f = 1/T<br>
                T = 1/f
            </div>
        `
    },

    {
        title: "Amplitude and Phase",
        icon: "📈",
        content: `
            <h3>Amplitude and Phase</h3>

            <div class="formula">
                x(t) = A sin(ωt + φ)
            </div>
        `
    },

    {
        title: "Sampling",
        icon: "📸",
        content: `
            <h3>Sampling</h3>
            <p>Sampling converts a continuous-time signal into a discrete-time signal.</p>
        `
    },

    {
        title: "Sampling Theorem",
        icon: "📚",
        content: `
            <h3>Sampling Theorem</h3>

            <div class="formula">
                fs > 2fm
            </div>

            <p>The sampling frequency should be greater than twice the highest frequency.</p>
        `
    },

    {
        title: "Nyquist Rate",
        icon: "2️⃣",
        content: `
            <h3>Nyquist Rate</h3>

            <div class="formula">
                Nyquist Rate = 2fm
            </div>
        `
    },

    {
        title: "Aliasing",
        icon: "⚠️",
        content: `
            <h3>Aliasing</h3>

            <p>Aliasing occurs when sampling is insufficient to represent the signal correctly.</p>

            <ul>
                <li>Use sufficient sampling frequency.</li>
                <li>Use an anti-aliasing filter.</li>
            </ul>
        `
    },

    {
        title: "Communication System",
        icon: "📡",
        content: `
            <h3>Communication System</h3>

            <div class="formula">
                Source → Transmitter → Channel → Receiver → Destination
            </div>

            <p>Noise can affect the transmitted signal.</p>
        `
    },

    {
        title: "Transmitter and Receiver",
        icon: "📤",
        content: `
            <h3>Transmitter and Receiver</h3>

            <p>Transmitter prepares information for transmission.</p>
            <p>Receiver recovers the information from the received signal.</p>
        `
    },

    {
        title: "Modulation",
        icon: "〰️",
        content: `
            <h3>Modulation</h3>

            <p>Modulation varies a carrier according to the information signal.</p>

            <ul>
                <li>AM</li>
                <li>FM</li>
                <li>PM</li>
            </ul>
        `
    },

    {
        title: "Amplitude Modulation",
        icon: "📶",
        content: `
            <h3>AM</h3>

            <p>In AM, carrier amplitude varies according to the message signal.</p>

            <div class="formula">
                Modulation Index = Am / Ac
            </div>
        `
    },

    {
        title: "Frequency Modulation",
        icon: "〰️",
        content: `
            <h3>FM</h3>

            <p>In FM, carrier frequency varies according to the message signal.</p>

            <div class="formula">
                β = Δf / fm
            </div>
        `
    },

    {
        title: "Phase Modulation",
        icon: "🔄",
        content: `
            <h3>PM</h3>

            <p>In PM, carrier phase varies according to the message signal.</p>
        `
    },

    {
        title: "Bandwidth",
        icon: "📏",
        content: `
            <h3>Bandwidth</h3>

            <div class="formula">
                Bandwidth = fhigh - flow
            </div>

            <p>Unit: Hertz (Hz).</p>
        `
    },

    {
        title: "Noise",
        icon: "⚠️",
        content: `
            <h3>Noise</h3>

            <p>Noise is an unwanted disturbance in a communication system.</p>

            <ul>
                <li>Thermal noise</li>
                <li>Shot noise</li>
                <li>Atmospheric noise</li>
                <li>Industrial noise</li>
            </ul>
        `
    },

    {
        title: "Signal-to-Noise Ratio",
        icon: "📊",
        content: `
            <h3>SNR</h3>

            <div class="formula">
                SNR = Signal Power / Noise Power
            </div>

            <div class="formula">
                SNR(dB) = 10 log₁₀(S/N)
            </div>
        `
    },

    {
        title: "Multiplexing",
        icon: "🔀",
        content: `
            <h3>Multiplexing</h3>

            <p>Allows multiple signals to share a common communication medium.</p>

            <ul>
                <li>FDM</li>
                <li>TDM</li>
                <li>WDM</li>
            </ul>
        `
    },

    {
        title: "FDM",
        icon: "📡",
        content: `
            <h3>Frequency Division Multiplexing</h3>
            <p>Different signals use different frequency bands.</p>
        `
    },

    {
        title: "TDM",
        icon: "⏱️",
        content: `
            <h3>Time Division Multiplexing</h3>
            <p>Different signals use different time slots.</p>
        `
    },

    {
        title: "OFDM",
        icon: "📶",
        content: `
            <h3>OFDM</h3>

            <p>OFDM divides data among multiple orthogonal subcarriers.</p>

            <ul>
                <li>Orthogonal subcarriers</li>
                <li>Efficient bandwidth usage</li>
                <li>Used in modern wireless systems</li>
            </ul>
        `
    },

    {
        title: "Antenna",
        icon: "📡",
        content: `
            <h3>Antenna</h3>

            <p>An antenna converts electrical signals into electromagnetic waves and vice versa.</p>
        `
    },

    {
        title: "Electromagnetic Waves",
        icon: "🌐",
        content: `
            <h3>Electromagnetic Waves</h3>

            <div class="formula">
                c = fλ
            </div>

            <ul>
                <li>c = wave velocity</li>
                <li>f = frequency</li>
                <li>λ = wavelength</li>
            </ul>
        `
    },

    {
        title: "Communication Frequency Bands",
        icon: "📻",
        content: `
            <h3>Frequency Bands</h3>

            <ul>
                <li>LF</li>
                <li>MF</li>
                <li>HF</li>
                <li>VHF</li>
                <li>UHF</li>
                <li>SHF</li>
                <li>EHF</li>
            </ul>
        `
    },

    {
        title: "Wireless Communication",
        icon: "📱",
        content: `
            <h3>Wireless Communication</h3>

            <ul>
                <li>Radio</li>
                <li>Wi-Fi</li>
                <li>Bluetooth</li>
                <li>Cellular communication</li>
                <li>Satellite communication</li>
            </ul>
        `
    },

    {
        title: "Communication Quick Revision",
        icon: "🚀",
        content: `
            <h3>Quick Revision</h3>

            <div class="formula">
                AM → Amplitude varies<br>
                FM → Frequency varies<br>
                PM → Phase varies<br>
                ADC → Analog to Digital<br>
                DAC → Digital to Analog<br>
                fs > 2fm → Sampling condition<br>
                OFDM → Orthogonal subcarriers
            </div>
        `
    }

];


// ============================================================
// 10. APTITUDE & REASONING
// ============================================================

const aptitudeTopics = [

    // --------------------------------------------------------
    // QUANTITATIVE APTITUDE
    // --------------------------------------------------------

    {
        title: "Number System",
        icon: "🔢",
        content: `
            <h3>Number System</h3>

            <p>Important types of numbers:</p>

            <ul>
                <li>Natural numbers → 1, 2, 3, ...</li>
                <li>Whole numbers → 0, 1, 2, 3, ...</li>
                <li>Integers → ..., -2, -1, 0, 1, 2, ...</li>
                <li>Prime numbers → Numbers having exactly two positive factors.</li>
                <li>Composite numbers → Numbers having more than two positive factors.</li>
            </ul>

            <div class="tip">
                <strong>GET Tip:</strong>
                2 is the only even prime number.
            </div>
        `
    },

    {
        title: "Divisibility Rules",
        icon: "✅",
        content: `
            <h3>Divisibility Rules</h3>

            <ul>
                <li>2 → Last digit is even.</li>
                <li>3 → Sum of digits is divisible by 3.</li>
                <li>5 → Last digit is 0 or 5.</li>
                <li>9 → Sum of digits is divisible by 9.</li>
                <li>10 → Last digit is 0.</li>
                <li>11 → Difference between alternating digit sums is divisible by 11.</li>
            </ul>
        `
    },

    {
        title: "LCM and HCF",
        icon: "🧮",
        content: `
            <h3>LCM and HCF</h3>

            <p><strong>HCF:</strong> Highest Common Factor.</p>
            <p><strong>LCM:</strong> Least Common Multiple.</p>

            <div class="formula">
                For two positive integers:<br>
                HCF × LCM = Product of the numbers
            </div>
        `
    },

    {
        title: "Simplification",
        icon: "➗",
        content: `
            <h3>Simplification</h3>

            <p>Use the order of operations:</p>

            <div class="formula">
                B → Brackets<br>
                O → Orders / Powers<br>
                D → Division<br>
                M → Multiplication<br>
                A → Addition<br>
                S → Subtraction
            </div>

            <p>Work from left to right when operations have equal priority.</p>
        `
    },

    {
        title: "Percentages",
        icon: "💯",
        content: `
            <h3>Percentages</h3>

            <div class="formula">
                Percentage = (Part / Whole) × 100
            </div>

            <div class="formula">
                Percentage Change =
                (Change / Original) × 100
            </div>

            <p>Useful for profit, loss, marks, population and salary problems.</p>
        `
    },

    {
        title: "Profit and Loss",
        icon: "💰",
        content: `
            <h3>Profit and Loss</h3>

            <div class="formula">
                Profit = SP - CP
            </div>

            <div class="formula">
                Loss = CP - SP
            </div>

            <div class="formula">
                Profit% = (Profit / CP) × 100
            </div>

            <div class="formula">
                Loss% = (Loss / CP) × 100
            </div>

            <p>CP = Cost Price, SP = Selling Price.</p>
        `
    },

    {
        title: "Discount",
        icon: "🏷️",
        content: `
            <h3>Discount</h3>

            <div class="formula">
                Discount = Marked Price - Selling Price
            </div>

            <div class="formula">
                Discount% =
                (Discount / Marked Price) × 100
            </div>
        `
    },

    {
        title: "Ratio and Proportion",
        icon: "⚖️",
        content: `
            <h3>Ratio and Proportion</h3>

            <p>A ratio compares two quantities.</p>

            <div class="formula">
                a : b = a/b
            </div>

            <p>Proportion means two ratios are equal.</p>

            <div class="formula">
                a/b = c/d
            </div>

            <p>Then:</p>

            <div class="formula">
                ad = bc
            </div>
        `
    },

    {
        title: "Average",
        icon: "📊",
        content: `
            <h3>Average</h3>

            <div class="formula">
                Average = Sum of observations / Number of observations
            </div>

            <p>If average of n numbers is A:</p>

            <div class="formula">
                Sum = nA
            </div>
        `
    },

    {
        title: "Simple Interest",
        icon: "💵",
        content: `
            <h3>Simple Interest</h3>

            <div class="formula">
                SI = (P × R × T) / 100
            </div>

            <div class="formula">
                Amount = P + SI
            </div>

            <p>P = Principal, R = Rate, T = Time.</p>
        `
    },

    {
        title: "Compound Interest",
        icon: "📈",
        content: `
            <h3>Compound Interest</h3>

            <div class="formula">
                A = P(1 + R/100)ᵀ
            </div>

            <div class="formula">
                CI = A - P
            </div>
        `
    },

    {
        title: "Time and Work",
        icon: "⏳",
        content: `
            <h3>Time and Work</h3>

            <p>If a person completes work in T days:</p>

            <div class="formula">
                One day's work = 1/T
            </div>

            <p>If A and B work together:</p>

            <div class="formula">
                Combined Work Rate =
                A's Rate + B's Rate
            </div>
        `
    },

    {
        title: "Pipes and Cisterns",
        icon: "🚰",
        content: `
            <h3>Pipes and Cisterns</h3>

            <p>Use the same concept as time and work.</p>

            <ul>
                <li>Inlet pipe → adds water.</li>
                <li>Outlet pipe → removes water.</li>
            </ul>

            <div class="formula">
                Net Rate = Inlet Rate - Outlet Rate
            </div>
        `
    },

    {
        title: "Time Speed and Distance",
        icon: "🚗",
        content: `
            <h3>Time, Speed and Distance</h3>

            <div class="formula">
                Speed = Distance / Time
            </div>

            <div class="formula">
                Distance = Speed × Time
            </div>

            <div class="formula">
                Time = Distance / Speed
            </div>
        `
    },

    {
        title: "Problems on Trains",
        icon: "🚆",
        content: `
            <h3>Problems on Trains</h3>

            <p>For a train crossing a pole:</p>

            <div class="formula">
                Time = Train Length / Speed
            </div>

            <p>For crossing a platform:</p>

            <div class="formula">
                Time =
                (Train Length + Platform Length) / Speed
            </div>

            <p>Always convert km/h to m/s when distance is in metres.</p>

            <div class="formula">
                km/h × 5/18 = m/s
            </div>
        `
    },

    {
        title: "Boats and Streams",
        icon: "⛵",
        content: `
            <h3>Boats and Streams</h3>

            <div class="formula">
                Downstream Speed =
                Boat Speed + Stream Speed
            </div>

            <div class="formula">
                Upstream Speed =
                Boat Speed - Stream Speed
            </div>
        `
    },

    {
        title: "Mixtures and Alligation",
        icon: "🧪",
        content: `
            <h3>Mixtures</h3>

            <p>Mixture problems involve combining quantities having different concentrations or prices.</p>

            <p>Alligation is a shortcut method for finding mixing ratios.</p>

            <div class="formula">
                Ratio =
                (Higher Value - Mean) :
                (Mean - Lower Value)
            </div>
        `
    },

    {
        title: "Probability",
        icon: "🎲",
        content: `
            <h3>Probability</h3>

            <div class="formula">
                P(E) =
                Favorable Outcomes /
                Total Outcomes
            </div>

            <p>Probability lies between 0 and 1.</p>

            <div class="formula">
                P(E) + P(not E) = 1
            </div>
        `
    },

    {
        title: "Permutation and Combination",
        icon: "🔢",
        content: `
            <h3>Permutation and Combination</h3>

            <p><strong>Permutation:</strong> Arrangement where order matters.</p>

            <div class="formula">
                nPr = n! / (n-r)!
            </div>

            <p><strong>Combination:</strong> Selection where order does not matter.</p>

            <div class="formula">
                nCr = n! / [r!(n-r)!]
            </div>
        `
    },

    {
        title: "Data Interpretation",
        icon: "📊",
        content: `
            <h3>Data Interpretation</h3>

            <p>Questions are based on tables, graphs and charts.</p>

            <ul>
                <li>Tables</li>
                <li>Bar graphs</li>
                <li>Pie charts</li>
                <li>Line graphs</li>
            </ul>

            <div class="tip">
                <strong>Method:</strong>
                Read the units first, identify what is being asked,
                then calculate only the required values.
            </div>
        `
    },


    // --------------------------------------------------------
    // LOGICAL REASONING
    // --------------------------------------------------------

    {
        title: "Number Series",
        icon: "🔢",
        content: `
            <h3>Number Series</h3>

            <p>Find the pattern connecting consecutive numbers.</p>

            <p>Common patterns:</p>

            <ul>
                <li>Addition/subtraction</li>
                <li>Multiplication/division</li>
                <li>Squares</li>
                <li>Cubes</li>
                <li>Alternating patterns</li>
                <li>Prime numbers</li>
            </ul>
        `
    },

    {
        title: "Alphabet Series",
        icon: "🔤",
        content: `
            <h3>Alphabet Series</h3>

            <p>Use alphabetical positions:</p>

            <div class="formula">
                A=1, B=2, C=3, ... Z=26
            </div>

            <p>Look for forward, backward or alternating patterns.</p>
        `
    },

    {
        title: "Coding and Decoding",
        icon: "🔐",
        content: `
            <h3>Coding-Decoding</h3>

            <p>A word, number or symbol is transformed according to a particular rule.</p>

            <p>Common methods:</p>

            <ul>
                <li>Alphabet position changes</li>
                <li>Reverse alphabet</li>
                <li>Letter shifting</li>
                <li>Number substitution</li>
            </ul>
        `
    },

    {
        title: "Analogy",
        icon: "🔗",
        content: `
            <h3>Analogy</h3>

            <p>Analogy questions identify a relationship between two items and apply the same relationship to another pair.</p>

            <div class="formula">
                A : B :: C : ?
            </div>
        `
    },

    {
        title: "Classification",
        icon: "📂",
        content: `
            <h3>Classification</h3>

            <p>Identify the item that does not belong to the same group.</p>

            <p>Compare:</p>

            <ul>
                <li>Meaning</li>
                <li>Number pattern</li>
                <li>Alphabet pattern</li>
                <li>Physical properties</li>
            </ul>
        `
    },

    {
        title: "Blood Relations",
        icon: "👨‍👩‍👧",
        content: `
            <h3>Blood Relations</h3>

            <p>Use a family tree to solve relationship questions.</p>

            <ul>
                <li>Father's brother → Uncle</li>
                <li>Mother's sister → Aunt</li>
                <li>Brother's son → Nephew</li>
                <li>Sister's daughter → Niece</li>
            </ul>

            <div class="tip">
                <strong>Method:</strong>
                Draw the family tree instead of solving mentally.
            </div>
        `
    },

    {
        title: "Direction Sense",
        icon: "🧭",
        content: `
            <h3>Direction Sense</h3>

            <p>Main directions:</p>

            <div class="formula">
                North ↑<br>
                South ↓<br>
                East →<br>
                West ←
            </div>

            <p>Intermediate directions:</p>

            <ul>
                <li>North-East</li>
                <li>North-West</li>
                <li>South-East</li>
                <li>South-West</li>
            </ul>
        `
    },

    {
        title: "Syllogism",
        icon: "🧠",
        content: `
            <h3>Syllogism</h3>

            <p>Syllogism questions contain statements and conclusions.</p>

            <p>Use Venn diagrams to check whether a conclusion necessarily follows from the statements.</p>

            <div class="tip">
                Do not assume information that is not given.
            </div>
        `
    },

    {
        title: "Statement and Conclusion",
        icon: "💭",
        content: `
            <h3>Statement and Conclusion</h3>

            <p>A conclusion must logically follow from the given statement.</p>

            <p>Do not use outside assumptions.</p>
        `
    },

    {
        title: "Statement and Assumption",
        icon: "🤔",
        content: `
            <h3>Statement and Assumption</h3>

            <p>An assumption is an unstated idea that is necessary for the statement to make sense or hold.</p>

            <p>Identify what must be accepted for the statement to work.</p>
        `
    },

    {
        title: "Seating Arrangement",
        icon: "🪑",
        content: `
            <h3>Seating Arrangement</h3>

            <p>Questions involve arranging people according to given conditions.</p>

            <ul>
                <li>Linear arrangement</li>
                <li>Circular arrangement</li>
                <li>Facing north/south</li>
                <li>Facing center/outside</li>
            </ul>

            <div class="tip">
                Draw the arrangement before solving the conditions.
            </div>
        `
    },

    {
        title: "Ranking and Order",
        icon: "🏆",
        content: `
            <h3>Ranking</h3>

            <p>Questions ask for the position of a person from the top, bottom or both.</p>

            <div class="formula">
                Total Persons =
                Rank from Top + Rank from Bottom - 1
            </div>
        `
    },

    {
        title: "Calendar",
        icon: "📅",
        content: `
            <h3>Calendar</h3>

            <p>Important concepts:</p>

            <ul>
                <li>Ordinary year → 365 days</li>
                <li>Leap year → 366 days</li>
                <li>7 days → 1 week</li>
            </ul>

            <p>A leap year is generally divisible by 4, except century years must also be divisible by 400.</p>
        `
    },

    {
        title: "Clock",
        icon: "🕐",
        content: `
            <h3>Clock Problems</h3>

            <p>Important facts:</p>

            <ul>
                <li>Minute hand moves 6° per minute.</li>
                <li>Hour hand moves 0.5° per minute.</li>
                <li>Clock hands overlap multiple times in a day.</li>
            </ul>

            <div class="formula">
                Angle =
                |30H - 5.5M|
            </div>

            <p>H = hour, M = minutes.</p>
        `
    },

    {
        title: "Venn Diagrams",
        icon: "⭕",
        content: `
            <h3>Venn Diagrams</h3>

            <p>Venn diagrams represent relationships between sets.</p>

            <ul>
                <li>Union → A ∪ B</li>
                <li>Intersection → A ∩ B</li>
                <li>Complement → A'</li>
            </ul>

            <div class="formula">
                n(A ∪ B) =
                n(A) + n(B) - n(A ∩ B)
            </div>
        `
    },

    {
        title: "Logical Connectives",
        icon: "🔗",
        content: `
            <h3>Logical Connectives</h3>

            <ul>
                <li>AND</li>
                <li>OR</li>
                <li>NOT</li>
                <li>IF-THEN</li>
            </ul>

            <p>These are used to connect or modify logical statements.</p>
        `
    },

    {
        title: "Odd One Out",
        icon: "🔎",
        content: `
            <h3>Odd One Out</h3>

            <p>Find the item that follows a different pattern from the others.</p>

            <p>Check numerical, alphabetical, logical and categorical relationships.</p>
        `
    },

    {
        title: "Missing Number",
        icon: "❓",
        content: `
            <h3>Missing Number</h3>

            <p>Identify the mathematical relationship among the given numbers and find the missing value.</p>

            <p>Try:</p>

            <ul>
                <li>Addition</li>
                <li>Subtraction</li>
                <li>Multiplication</li>
                <li>Division</li>
                <li>Squares</li>
                <li>Digit operations</li>
            </ul>
        `
    },

    {
        title: "Puzzle",
        icon: "🧩",
        content: `
            <h3>Logical Puzzles</h3>

            <p>Puzzles combine multiple conditions that must be satisfied simultaneously.</p>

            <div class="tip">
                <strong>Method:</strong>
                Convert every condition into a short note or table.
                Solve the fixed conditions first.
            </div>
        `
    },


    // --------------------------------------------------------
    // QUICK APTITUDE REVISION
    // --------------------------------------------------------

    {
        title: "Aptitude Formula Revision",
        icon: "🚀",
        content: `
            <h3>Quick Aptitude Revision</h3>

            <div class="formula">

                Percentage = (Part / Whole) × 100

                <br><br>

                Profit = SP - CP

                <br><br>

                Loss = CP - SP

                <br><br>

                SI = PRT / 100

                <br><br>

                Speed = Distance / Time

                <br><br>

                Work Rate = 1 / Time

                <br><br>

                Probability =
                Favorable Outcomes / Total Outcomes

                <br><br>

                nPr = n! / (n-r)!

                <br><br>

                nCr = n! / [r!(n-r)!]

                <br><br>

                Average =
                Sum / Number of observations

            </div>

            <div class="tip">
                <strong>GET Tip:</strong>
                Memorize the formulas first, then practice questions
                based on each formula.
            </div>
        `
    },

    {
        title: "Aptitude Strategy",
        icon: "🎯",
        content: `
            <h3>How to Solve Aptitude Quickly</h3>

            <ol>
                <li>Read the question carefully.</li>
                <li>Identify the topic.</li>
                <li>Write the required formula.</li>
                <li>Substitute the values.</li>
                <li>Check the units.</li>
                <li>Estimate the answer before selecting an option.</li>
            </ol>

            <div class="tip">
                <strong>Placement Tip:</strong>
                Do not spend too much time on one question.
                Skip difficult questions and return to them later.
            </div>
        `
    },

    {
        title: "Reasoning Strategy",
        icon: "🧠",
        content: `
            <h3>How to Solve Reasoning Questions</h3>

            <ol>
                <li>Identify the type of reasoning question.</li>
                <li>Write the information in a diagram or table.</li>
                <li>Find fixed relationships first.</li>
                <li>Eliminate impossible options.</li>
                <li>Verify the final answer with every condition.</li>
            </ol>
        `
    }

];