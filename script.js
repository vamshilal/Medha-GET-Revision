/* =========================================================
   MEDHA SERVO GET PREPARATION
   MAIN JAVASCRIPT
   STAGE 8 - COMPLETE REVISION SYSTEM
========================================================= */


/* =========================================================
   QUIZ VARIABLES
========================================================= */

let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let selectedQuizSubject = "All";
let selectedQuizCount = 10;


/* =========================================================
   SUBJECT NAMES
========================================================= */

const subjectNames = {

    "Electrical":
        "Electrical & Network Theory",

    "Analog":
        "Analog Electronics",

    "Digital":
        "Digital Electronics",

    "Microprocessors":
        "Microprocessors & Microcontrollers",

    "Embedded C":
        "C / Embedded C",

    "Control Systems":
        "Control Systems",

    "Power Electronics":
        "Power Electronics",

    "Instrumentation":
        "Sensors & Instrumentation",

    "Communication":
        "Signals & Communication",

    "Aptitude":
        "Aptitude & Reasoning",

    "Railway":
        "Railway Electronics",

    "EV":
        "EV Basics"

};


/* =========================================================
   START REVISION
========================================================= */

function startRevision() {

    const subjectsSection =
        document.getElementById("subjects");

    if (subjectsSection) {

        subjectsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   SUBJECT TOPICS
========================================================= */

function getSubjectTopics(subject) {

    switch (subject) {

        case "Electrical":
            return typeof electricalTopics !== "undefined"
                ? electricalTopics
                : [];

        case "Analog":
            return typeof analogTopics !== "undefined"
                ? analogTopics
                : [];

        case "Digital":
            return typeof digitalTopics !== "undefined"
                ? digitalTopics
                : [];

        case "Microprocessors":
            return typeof microcontrollerTopics !== "undefined"
                ? microcontrollerTopics
                : [];

        case "Embedded C":
            return typeof embeddedCTopics !== "undefined"
                ? embeddedCTopics
                : [];

        case "Control Systems":
            return typeof controlTopics !== "undefined"
                ? controlTopics
                : [];

        case "Power Electronics":
            return typeof powerElectronicsTopics !== "undefined"
                ? powerElectronicsTopics
                : [];

        case "Instrumentation":
            return typeof instrumentationTopics !== "undefined"
                ? instrumentationTopics
                : [];

        case "Communication":
            return typeof signalsTopics !== "undefined"
                ? signalsTopics
                : [];

        case "Aptitude":
            return typeof aptitudeTopics !== "undefined"
                ? aptitudeTopics
                : [];

        default:
            return [];

    }

}


/* =========================================================
   SUBJECT DISPLAY NAME
========================================================= */

function getSubjectDisplayName(subject) {

    return subjectNames[subject] || subject;

}


/* =========================================================
   OPEN SUBJECT
========================================================= */

function openSubject(subject) {

    const studySection =
        document.getElementById("study");

    const topicContainer =
        document.getElementById("topicContainer");

    const studySubtitle =
        document.getElementById("studySubtitle");


    if (
        !studySection ||
        !topicContainer ||
        !studySubtitle
    ) {

        return;

    }


    studySubtitle.innerText =
        getSubjectDisplayName(subject);


    const topics =
        getSubjectTopics(subject);


    if (
        !Array.isArray(topics) ||
        topics.length === 0
    ) {

        topicContainer.innerHTML = `

            <div class="empty-study">

                <div class="empty-icon">
                    🚧
                </div>

                <h3>
                    ${getSubjectDisplayName(subject)}
                </h3>

                <p>
                    Study material is not available yet.
                </p>

            </div>

        `;

        studySection.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    topicContainer.innerHTML = "";


    topics.forEach(
        function(topic, index) {

            const card =
                document.createElement("div");


            card.className =
                "topic-card";


            card.setAttribute(
                "tabindex",
                "0"
            );


            card.setAttribute(
                "role",
                "button"
            );


            card.innerHTML = `

                <div class="topic-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="topic-icon">
                    ${topic.icon || "📚"}
                </div>

                <div class="topic-info">

                    <h3>
                        ${topic.title}
                    </h3>

                    <p>
                        Click to study this topic
                    </p>

                </div>

                <div class="topic-arrow">
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                function() {

                    openTopic(
                        topic,
                        subject
                    );

                }
            );


            card.addEventListener(
                "keydown",
                function(event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openTopic(
                            topic,
                            subject
                        );

                    }

                }
            );


            topicContainer.appendChild(card);

        }
    );


    studySection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   OPEN INDIVIDUAL TOPIC
========================================================= */

function openTopic(topic, subject) {

    const topicContainer =
        document.getElementById(
            "topicContainer"
        );


    const studySection =
        document.getElementById(
            "study"
        );


    if (
        !topicContainer ||
        !studySection
    ) {

        return;

    }


    if (
        !topic ||
        !topic.content
    ) {

        topicContainer.innerHTML = `

            <div class="empty-study">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>
                    Content Not Available
                </h3>

                <p>
                    Study content for this topic
                    is not available yet.
                </p>

                <button
                    class="back-button"
                    onclick="openSubject('${subject}')">

                    ← Back to Topics

                </button>

            </div>

        `;


        studySection.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    topicContainer.innerHTML = `

        <div class="topic-content">

            <button
                class="back-button"
                onclick="openSubject('${subject}')">

                ← Back to Topics

            </button>

            <div class="lesson">

                ${topic.content}

            </div>

        </div>

    `;


    studySection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   RAILWAY SECTION
========================================================= */

function openRailwaySection() {

    const railwaySection =
        document.getElementById(
            "railway"
        );


    if (!railwaySection) {

        return;

    }


    railwaySection.scrollIntoView({
        behavior: "smooth"
    });


    setTimeout(
        function() {

            showRailwayBasics();

        },
        400
    );

}


/* =========================================================
   SHOW RAILWAY TOPICS
========================================================= */

function showRailwayBasics() {

    const container =
        document.getElementById(
            "railwayContainer"
        );


    if (!container) {

        return;

    }


    if (
        typeof railwayTopics === "undefined" ||
        !Array.isArray(railwayTopics)
    ) {

        container.innerHTML = `

            <div class="empty-study">

                <div class="empty-icon">
                    🚧
                </div>

                <h3>
                    Railway Electronics
                </h3>

                <p>
                    Railway material could not be loaded.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="topic-container">

            ${railwayTopics
                .map(
                    function(topic, index) {

                        return `

                            <div
                                class="topic-card"
                                tabindex="0"
                                role="button"
                                onclick="openRailwayTopic(${index})"
                                onkeydown="handleRailwayKeyboard(event, ${index})">

                                <div class="topic-number">

                                    ${String(index + 1).padStart(2, "0")}

                                </div>

                                <div class="topic-icon">

                                    ${topic.icon || "🚆"}

                                </div>

                                <div class="topic-info">

                                    <h3>
                                        ${topic.title}
                                    </h3>

                                    <p>
                                        Click to study this topic
                                    </p>

                                </div>

                                <div class="topic-arrow">
                                    →
                                </div>

                            </div>

                        `;

                    }
                )
                .join("")
            }

        </div>

    `;

}


/* =========================================================
   OPEN RAILWAY TOPIC
========================================================= */

function openRailwayTopic(index) {

    const container =
        document.getElementById(
            "railwayContainer"
        );


    if (
        !container ||
        typeof railwayTopics === "undefined"
    ) {

        return;

    }


    const topic =
        railwayTopics[index];


    if (!topic) {

        return;

    }


    container.innerHTML = `

        <div class="topic-content">

            <button
                class="back-button"
                onclick="showRailwayBasics()">

                ← Back to Railway Topics

            </button>

            <div class="lesson">

                ${topic.content}

            </div>

        </div>

    `;

}


/* =========================================================
   RAILWAY KEYBOARD
========================================================= */

function handleRailwayKeyboard(
    event,
    index
) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        openRailwayTopic(index);

    }

}


/* =========================================================
   EV SECTION
========================================================= */

function openEVSection() {

    const evSection =
        document.getElementById(
            "ev"
        );


    if (!evSection) {

        return;

    }


    evSection.scrollIntoView({
        behavior: "smooth"
    });


    setTimeout(
        function() {

            showEVBasics();

        },
        400
    );

}


/* =========================================================
   SHOW EV TOPICS
========================================================= */

function showEVBasics() {

    const container =
        document.getElementById(
            "evContainer"
        );


    if (!container) {

        return;

    }


    if (
        typeof evTopics === "undefined" ||
        !Array.isArray(evTopics)
    ) {

        container.innerHTML = `

            <div class="empty-study">

                <div class="empty-icon">
                    🚧
                </div>

                <h3>
                    EV Basics
                </h3>

                <p>
                    EV material could not be loaded.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="topic-container">

            ${evTopics
                .map(
                    function(topic, index) {

                        return `

                            <div
                                class="topic-card"
                                tabindex="0"
                                role="button"
                                onclick="openEVTopic(${index})"
                                onkeydown="handleEVKeyboard(event, ${index})">

                                <div class="topic-number">

                                    ${String(index + 1).padStart(2, "0")}

                                </div>

                                <div class="topic-icon">

                                    ${topic.icon || "🔋"}

                                </div>

                                <div class="topic-info">

                                    <h3>
                                        ${topic.title}
                                    </h3>

                                    <p>
                                        Click to study this topic
                                    </p>

                                </div>

                                <div class="topic-arrow">
                                    →
                                </div>

                            </div>

                        `;

                    }
                )
                .join("")
            }

        </div>

    `;

}


/* =========================================================
   OPEN EV TOPIC
========================================================= */

function openEVTopic(index) {

    const container =
        document.getElementById(
            "evContainer"
        );


    if (
        !container ||
        typeof evTopics === "undefined"
    ) {

        return;

    }


    const topic =
        evTopics[index];


    if (!topic) {

        return;

    }


    container.innerHTML = `

        <div class="topic-content">

            <button
                class="back-button"
                onclick="showEVBasics()">

                ← Back to EV Topics

            </button>

            <div class="lesson">

                ${topic.content}

            </div>

        </div>

    `;

}


/* =========================================================
   EV KEYBOARD
========================================================= */

function handleEVKeyboard(
    event,
    index
) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        openEVTopic(index);

    }

}


/* =========================================================
   REVISION DATA
========================================================= */


/* ---------------------------------------------------------
   100+ MUST REMEMBER FACTS
--------------------------------------------------------- */

const mustRememberFacts = [

    "Ohm's Law: V = IR.",
    "KCL states that the algebraic sum of currents at a node is zero.",
    "KVL states that the algebraic sum of voltages around a closed loop is zero.",
    "Resistance is measured in ohms.",
    "Current is measured in amperes.",
    "Voltage is measured in volts.",
    "Power is measured in watts.",
    "Energy is measured in joules.",
    "Capacitor stores energy in an electric field.",
    "Inductor stores energy in a magnetic field.",
    "A capacitor opposes sudden changes in voltage.",
    "An inductor opposes sudden changes in current.",
    "In a series circuit, the same current flows through all elements.",
    "In a parallel circuit, the same voltage appears across branches.",
    "Thevenin's theorem represents a network by an equivalent voltage source and resistance.",
    "Norton's theorem represents a network by an equivalent current source and resistance.",
    "A transformer operates using electromagnetic induction.",
    "An ideal transformer transfers power without losses.",
    "A diode mainly allows current in one direction.",
    "A Zener diode is commonly used for voltage regulation.",
    "An LED emits light when forward biased.",
    "A photodiode converts light into electrical current.",
    "A BJT is generally treated as a current-controlled device.",
    "A MOSFET is generally treated as a voltage-controlled device.",
    "A rectifier converts AC into DC.",
    "A filter reduces unwanted AC components from a rectified output.",
    "An amplifier increases signal amplitude.",
    "An op-amp has very high open-loop gain.",
    "An ideal op-amp has infinite input impedance.",
    "An ideal op-amp has zero output impedance.",
    "Negative feedback is widely used in amplifiers and control systems.",
    "NAND is a universal logic gate.",
    "NOR is a universal logic gate.",
    "AND output is high only when all inputs are high.",
    "OR output is high when at least one input is high.",
    "NOT gate produces the complement of its input.",
    "XOR output is high when inputs are different.",
    "XNOR output is high when inputs are the same.",
    "A flip-flop stores one bit of information.",
    "A register is a group of flip-flops.",
    "A counter progresses through a sequence of states.",
    "A multiplexer selects one input from multiple inputs.",
    "A demultiplexer routes one input to one of several outputs.",
    "An ADC converts analog information into digital representation.",
    "A DAC converts digital information into analog output.",
    "GPIO stands for General Purpose Input/Output.",
    "UART is commonly used for asynchronous serial communication.",
    "SPI is a synchronous serial communication interface.",
    "I²C is a two-wire serial communication interface.",
    "PWM stands for Pulse Width Modulation.",
    "PWM duty cycle represents the proportion of time a signal stays active in each period.",
    "A microcontroller integrates processor, memory and peripherals.",
    "ROM is non-volatile memory.",
    "RAM is generally volatile memory.",
    "An interrupt requests processor attention for an event.",
    "A timer can be used to measure or generate time intervals.",
    "A watchdog timer can help recover from software malfunction.",
    "The ALU performs arithmetic and logical operations.",
    "The program counter holds the address associated with the next instruction.",
    "Embedded systems are designed for specific functions.",
    "In C, an array stores elements of the same data type.",
    "A pointer stores a memory address.",
    "The address-of operator is &.",
    "The dereference operator is *.",
    "A structure groups related variables of different types.",
    "The const keyword can be used to prevent modification through a particular identifier.",
    "The volatile keyword tells the compiler that a value may change unexpectedly.",
    "The #include directive includes header files.",
    "The #define directive defines macros.",
    "A function can return a value using return.",
    "A do-while loop executes its body at least once.",
    "An open-loop control system does not use feedback.",
    "A closed-loop control system uses feedback.",
    "A transfer function relates output to input under specified initial conditions.",
    "Poles strongly influence system stability and response.",
    "Zeros also influence system response.",
    "PID stands for Proportional, Integral and Derivative.",
    "The proportional action responds to present error.",
    "The integral action responds to accumulated error.",
    "The derivative action responds to the rate of change of error.",
    "A Bode plot contains magnitude and phase information.",
    "Root locus shows movement of closed-loop poles as gain changes.",
    "The Routh-Hurwitz method can be used for stability analysis.",
    "An SCR is a controlled power semiconductor device.",
    "SCR has anode, cathode and gate terminals.",
    "The gate is used to trigger an SCR.",
    "A TRIAC can conduct in both directions.",
    "A DIAC is commonly used for triggering TRIAC circuits.",
    "A UJT can be used in triggering circuits.",
    "An IGBT combines features useful for power switching applications.",
    "A power MOSFET is suitable for high-speed switching applications.",
    "A freewheeling diode provides a path for inductive current.",
    "A snubber circuit can help limit voltage transients.",
    "A heat sink helps remove heat from power semiconductor devices.",
    "A chopper converts DC power from one voltage level to another.",
    "An inverter converts DC to AC.",
    "An AC voltage controller controls AC output voltage.",
    "Instrumentation deals with measurement and control of physical quantities.",
    "A sensor detects a physical quantity.",
    "A transducer converts one form of energy or physical quantity into another useful signal.",
    "RTD is commonly used for temperature measurement.",
    "Pt100 is a common platinum RTD.",
    "A thermocouple works based on the Seebeck effect.",
    "An LVDT is commonly used for displacement measurement.",
    "A strain gauge measures strain.",
    "A Wheatstone bridge is commonly used with strain gauges.",
    "A Bourdon tube is commonly used for pressure measurement.",
    "A piezoelectric sensor can be used for dynamic force or vibration measurement.",
    "An LDR changes resistance with light intensity.",
    "Accuracy indicates closeness to the true value.",
    "Precision indicates repeatability of measurements.",
    "Sensitivity indicates output change for a given input change.",
    "Calibration compares or adjusts an instrument against a known reference.",
    "Resolution represents the smallest detectable change.",
    "Frequency is the reciprocal of time period.",
    "f = 1/T.",
    "Sampling frequency should satisfy the Nyquist requirement for band-limited signals.",
    "Aliasing occurs when sampling is insufficient.",
    "AM varies carrier amplitude according to the message.",
    "FM varies carrier frequency according to the message.",
    "PM varies carrier phase according to the message.",
    "Noise is an unwanted disturbance in a communication system.",
    "SNR compares signal power with noise power.",
    "FDM separates signals using different frequency bands.",
    "TDM separates signals using different time slots.",
    "OFDM uses multiple orthogonal subcarriers.",
    "An antenna converts electrical signals to electromagnetic waves and vice versa.",
    "TCMS stands for Train Control and Management System.",
    "TCMS can monitor and control multiple train subsystems.",
    "CAN stands for Controller Area Network.",
    "CAN allows electronic control units to exchange messages.",
    "Traction motors provide mechanical drive for railway vehicles.",
    "Traction control regulates motor torque and vehicle movement.",
    "Wheel-rail adhesion is important for railway traction.",
    "Wheel slip can occur when available adhesion is exceeded.",
    "Regenerative braking can recover electrical energy.",
    "Pneumatic braking uses compressed air.",
    "Railway signalling supports safe train movement.",
    "ATP stands for Automatic Train Protection.",
    "Redundancy can improve reliability and safety.",
    "An event recorder stores important operating information.",
    "EV stands for Electric Vehicle.",
    "BMS stands for Battery Management System.",
    "SOC stands for State of Charge.",
    "SOH stands for State of Health.",
    "An EV battery stores electrical energy.",
    "An EV inverter controls electrical power supplied to the traction motor.",
    "A DC-DC converter changes one DC voltage level to another.",
    "PMSM stands for Permanent Magnet Synchronous Motor.",
    "Regenerative braking can return energy to the battery.",
    "Battery temperature affects performance and safety.",
    "Cell balancing helps maintain suitable voltage relationships among battery cells.",
    "Thermal management keeps EV components within suitable temperature ranges."

];


/* ---------------------------------------------------------
   FORMULA DATA
--------------------------------------------------------- */

const formulaGroups = [

    {
        title: "⚡ Electrical & Network Theory",
        formulas: [
            "V = IR",
            "I = V/R",
            "R = V/I",
            "P = VI",
            "P = I²R",
            "P = V²/R",
            "E = Pt",
            "Q = It",
            "Q = CV",
            "Energy in capacitor = 1/2 CV²",
            "Energy in inductor = 1/2 LI²",
            "Series resistance: R = R1 + R2 + R3 + ...",
            "Parallel resistance: 1/R = 1/R1 + 1/R2 + ...",
            "f = 1/T",
            "ω = 2πf"
        ]
    },

    {
        title: "🔺 Analog Electronics",
        formulas: [
            "β = IC/IB",
            "α = IC/IE",
            "IE = IC + IB",
            "Av = Vout/Vin",
            "Voltage gain in dB = 20 log10(Av)",
            "Power gain in dB = 10 log10(Ap)",
            "Inverting op-amp: Av = -Rf/Rin",
            "Non-inverting op-amp: Av = 1 + Rf/R1"
        ]
    },

    {
        title: "🔢 Digital Electronics",
        formulas: [
            "Number of states for n bits = 2ⁿ",
            "Half Adder Sum = A ⊕ B",
            "Half Adder Carry = A·B",
            "Full Adder Sum = A ⊕ B ⊕ Cin",
            "Full Adder Carry = AB + BCin + ACin",
            "MUX inputs for n select lines = 2ⁿ",
            "DEMUX outputs for n select lines = 2ⁿ"
        ]
    },

    {
        title: "🎛️ Control Systems",
        formulas: [
            "Transfer Function = Output/Input",
            "Error = Reference Input - Feedback Signal",
            "PID: u(t) = Kp e(t) + Ki∫e(t)dt + Kd de(t)/dt",
            "Damping ratio = ζ",
            "Natural frequency = ωn"
        ]
    },

    {
        title: "⚙️ Power Electronics",
        formulas: [
            "Duty Cycle = Ton/T",
            "Duty Cycle % = (Ton/T) × 100",
            "Average output depends on converter topology and duty cycle",
            "Output Power = Vout × Iout",
            "Input Power = Vin × Iin",
            "Efficiency = (Output Power/Input Power) × 100%"
        ]
    },

    {
        title: "🌡️ Sensors & Instrumentation",
        formulas: [
            "Sensitivity = Change in Output / Change in Input",
            "Percentage Error = (Absolute Error / True Value) × 100",
            "Accuracy is related to closeness to the true value",
            "Resolution is the smallest detectable input change",
            "Gauge Factor = (ΔR/R)/Strain"
        ]
    },

    {
        title: "📡 Signals & Communication",
        formulas: [
            "f = 1/T",
            "T = 1/f",
            "ω = 2πf",
            "Nyquist sampling rate = 2fm",
            "Sampling frequency fs ≥ 2fm",
            "SNR = Signal Power / Noise Power",
            "SNR(dB) = 10 log10(Signal Power/Noise Power)"
        ]
    },

    {
        title: "🧮 Aptitude",
        formulas: [
            "Percentage = (Part/Whole) × 100",
            "Average = Sum of observations / Number of observations",
            "Profit = Selling Price - Cost Price",
            "Loss = Cost Price - Selling Price",
            "Profit % = (Profit/Cost Price) × 100",
            "Loss % = (Loss/Cost Price) × 100",
            "Discount = Marked Price - Selling Price",
            "Simple Interest = PRT/100",
            "Amount in SI = P + SI",
            "Speed = Distance/Time",
            "Distance = Speed × Time",
            "Time = Distance/Speed",
            "Work = Rate × Time",
            "Probability = Favorable Outcomes/Total Outcomes"
        ]
    },

    {
        title: "🚆 Railway Electronics",
        formulas: [
            "Traction Force = Torque/Wheel Radius",
            "Mechanical Power = Torque × Angular Speed",
            "Wheel Slip occurs when wheel speed exceeds the corresponding rolling condition",
            "Regenerative braking converts mechanical energy into electrical energy",
            "CAN = Controller Area Network",
            "TCMS = Train Control and Management System"
        ]
    },

    {
        title: "🔋 EV Basics",
        formulas: [
            "SOC % = Available Charge/Rated Charge × 100",
            "Power = Voltage × Current",
            "Energy = Power × Time",
            "Electrical Energy = V × I × t",
            "Efficiency = Output/Input × 100%",
            "Mechanical Power = Torque × Angular Speed",
            "DC Power = V × I"
        ]
    }

];


/* =========================================================
   QUICK REVISION
========================================================= */

function showQuickRevision() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                📌 Quick Revision
            </h3>

            <p>
                Focus on these high-frequency
                concepts before practicing MCQs.
            </p>

            ${formulaGroups
                .slice(0, 8)
                .map(
                    function(group) {

                        return `

                            <div class="revision-group">

                                <h4>
                                    ${group.title}
                                </h4>

                                <ul>

                                    ${group.formulas
                                        .slice(0, 6)
                                        .map(
                                            function(item) {

                                                return `
                                                    <li>
                                                        ${item}
                                                    </li>
                                                `;

                                            }
                                        )
                                        .join("")
                                    }

                                </ul>

                            </div>

                        `;

                    }
                )
                .join("")
            }


            <div class="tip">

                🎯 Revision Order:
                Concepts → Formulas → MCQs → Mistake Revision

            </div>

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   FORMULA SHEET
========================================================= */

function showFormulaSheet() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                📐 Complete Formula Sheet
            </h3>

            <p>
                Important formulas for quick GET revision.
            </p>


            ${formulaGroups
                .map(
                    function(group) {

                        return `

                            <div class="revision-group">

                                <h4>
                                    ${group.title}
                                </h4>

                                ${group.formulas
                                    .map(
                                        function(formula) {

                                            return `

                                                <div class="formula">

                                                    ${formula}

                                                </div>

                                            `;

                                        }
                                    )
                                    .join("")
                                }

                            </div>

                        `;

                    }
                )
                .join("")
            }

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   MUST REMEMBER
========================================================= */

function showMustRemember() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                🧠 Must Remember Facts
            </h3>

            <p>
                ${mustRememberFacts.length}
                important revision points.
            </p>


            <ol>

                ${mustRememberFacts
                    .map(
                        function(fact) {

                            return `
                                <li>
                                    ${fact}
                                </li>
                            `;

                        }
                    )
                    .join("")
                }

            </ol>


            <div class="tip">

                🔥 Don't try to memorize everything
                at once. Revise this list repeatedly.

            </div>

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   RAILWAY QUICK REVISION
========================================================= */

function showRailwayQuickRevision() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                🚆 Railway Electronics Quick Revision
            </h3>


            <div class="revision-group">

                <h4>
                    TCMS
                </h4>

                <ul>

                    <li>
                        TCMS = Train Control and Management System
                    </li>

                    <li>
                        Monitors and controls multiple train subsystems.
                    </li>

                    <li>
                        Communicates with distributed electronic control units.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    Traction
                </h4>

                <ul>

                    <li>
                        Traction motors provide train propulsion.
                    </li>

                    <li>
                        Traction control regulates motor torque.
                    </li>

                    <li>
                        Wheel-rail adhesion affects available traction.
                    </li>

                    <li>
                        Wheel slip occurs when available adhesion is exceeded.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    Communication
                </h4>

                <ul>

                    <li>
                        CAN = Controller Area Network.
                    </li>

                    <li>
                        CAN enables communication between electronic control units.
                    </li>

                    <li>
                        Railway systems may use multiple communication networks
                        depending on their architecture.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    Braking
                </h4>

                <ul>

                    <li>
                        Regenerative braking can recover electrical energy.
                    </li>

                    <li>
                        Pneumatic braking uses compressed air.
                    </li>

                    <li>
                        Wheel-slip protection helps maintain traction.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    Safety
                </h4>

                <ul>

                    <li>
                        ATP = Automatic Train Protection.
                    </li>

                    <li>
                        Railway signalling helps regulate train movements.
                    </li>

                    <li>
                        Redundancy can improve system reliability.
                    </li>

                    <li>
                        Event recorders store important operating information.
                    </li>

                </ul>

            </div>


            <div class="tip">

                🚆 Railway Focus:
                TCMS → CAN → Traction → Braking →
                Wheel Slip → Signalling → Safety

            </div>

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   EV QUICK REVISION
========================================================= */

function showEVQuickRevision() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                🔋 EV Quick Revision
            </h3>


            <div class="revision-group">

                <h4>
                    Battery
                </h4>

                <ul>

                    <li>
                        EV batteries store electrical energy.
                    </li>

                    <li>
                        Lithium-ion technology is widely used.
                    </li>

                    <li>
                        Battery voltage depends on cell configuration.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    BMS
                </h4>

                <ul>

                    <li>
                        BMS = Battery Management System.
                    </li>

                    <li>
                        Monitors cell voltage and temperature.
                    </li>

                    <li>
                        Helps manage safe battery operation.
                    </li>

                    <li>
                        Cell balancing helps maintain cell voltage balance.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    SOC & SOH
                </h4>

                <ul>

                    <li>
                        SOC = State of Charge.
                    </li>

                    <li>
                        SOH = State of Health.
                    </li>

                    <li>
                        SOC represents available charge.
                    </li>

                    <li>
                        SOH represents battery condition relative to its reference state.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    Motor & Inverter
                </h4>

                <ul>

                    <li>
                        Inverter converts battery DC into controlled AC
                        for an AC traction motor.
                    </li>

                    <li>
                        PMSM = Permanent Magnet Synchronous Motor.
                    </li>

                    <li>
                        Motor converts electrical energy into mechanical energy.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    Braking & Charging
                </h4>

                <ul>

                    <li>
                        Regenerative braking can recover energy.
                    </li>

                    <li>
                        DC-DC converter changes one DC voltage level to another.
                    </li>

                    <li>
                        Charging transfers electrical energy to the battery.
                    </li>

                    <li>
                        Thermal management helps control component temperature.
                    </li>

                </ul>

            </div>


            <div class="tip">

                🔋 EV Focus:
                Battery → BMS → SOC/SOH → Inverter →
                Motor → Regenerative Braking → Charging

            </div>

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   LAST-DAY REVISION
========================================================= */

function showLastDayRevision() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                ⚡ Last-Day Revision
            </h3>


            <div class="revision-group">

                <h4>
                    1️⃣ Electrical
                </h4>

                <ul>

                    <li>Ohm's Law</li>
                    <li>KCL and KVL</li>
                    <li>Series and parallel circuits</li>
                    <li>Thevenin and Norton</li>
                    <li>Capacitor and inductor</li>
                    <li>Power and energy</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    2️⃣ Electronics
                </h4>

                <ul>

                    <li>Diode and Zener diode</li>
                    <li>BJT and MOSFET</li>
                    <li>Rectifiers</li>
                    <li>Op-amp basics</li>
                    <li>Logic gates</li>
                    <li>Flip-flops</li>
                    <li>Counters</li>
                    <li>Multiplexers</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    3️⃣ Microprocessors & Embedded C
                </h4>

                <ul>

                    <li>ADC and DAC</li>
                    <li>GPIO</li>
                    <li>UART, SPI and I²C</li>
                    <li>PWM</li>
                    <li>Interrupts</li>
                    <li>Timers</li>
                    <li>Pointers</li>
                    <li>Arrays</li>
                    <li>Structures</li>
                    <li>volatile</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    4️⃣ Control & Power Electronics
                </h4>

                <ul>

                    <li>Open and closed loop</li>
                    <li>Transfer function</li>
                    <li>PID</li>
                    <li>Bode plot</li>
                    <li>SCR</li>
                    <li>DIAC and TRIAC</li>
                    <li>Rectifier</li>
                    <li>Inverter</li>
                    <li>Chopper</li>
                    <li>PWM</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    5️⃣ Instrumentation
                </h4>

                <ul>

                    <li>RTD</li>
                    <li>Pt100</li>
                    <li>Thermocouple</li>
                    <li>Seebeck effect</li>
                    <li>LVDT</li>
                    <li>Strain gauge</li>
                    <li>Wheatstone bridge</li>
                    <li>Accuracy and precision</li>
                    <li>Calibration</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    6️⃣ Signals & Communication
                </h4>

                <ul>

                    <li>Sampling theorem</li>
                    <li>Nyquist rate</li>
                    <li>Aliasing</li>
                    <li>AM</li>
                    <li>FM</li>
                    <li>PM</li>
                    <li>Noise</li>
                    <li>SNR</li>
                    <li>FDM</li>
                    <li>TDM</li>
                    <li>OFDM</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    7️⃣ Railway Electronics
                </h4>

                <ul>

                    <li>TCMS</li>
                    <li>CAN Bus</li>
                    <li>Traction motors</li>
                    <li>Traction control</li>
                    <li>Wheel slip</li>
                    <li>Adhesion</li>
                    <li>Regenerative braking</li>
                    <li>Pneumatic braking</li>
                    <li>Signalling</li>
                    <li>ATP</li>
                    <li>Safety and redundancy</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    8️⃣ EV
                </h4>

                <ul>

                    <li>Battery</li>
                    <li>BMS</li>
                    <li>SOC</li>
                    <li>SOH</li>
                    <li>Inverter</li>
                    <li>PMSM</li>
                    <li>Regenerative braking</li>
                    <li>DC-DC converter</li>
                    <li>Charging</li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    9️⃣ Aptitude
                </h4>

                <ul>

                    <li>Percentages</li>
                    <li>Profit and loss</li>
                    <li>Ratio</li>
                    <li>Average</li>
                    <li>SI and CI</li>
                    <li>Time and work</li>
                    <li>Speed, distance and time</li>
                    <li>Probability</li>
                    <li>Number series</li>
                    <li>Coding-decoding</li>
                    <li>Blood relations</li>
                    <li>Directions</li>

                </ul>

            </div>


            <div class="tip">

                🎯 Last-Day Rule:
                Do not start completely new topics.
                Revise formulas, important facts and
                practice questions you already studied.

            </div>

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   GET PREPARATION TIPS
========================================================= */

function showGETTips() {

    const revisionContent =
        document.getElementById(
            "revisionContent"
        );


    if (!revisionContent) {

        return;

    }


    revisionContent.innerHTML = `

        <div class="revision-panel">

            <h3>
                🎯 GET Preparation Tips
            </h3>


            <div class="revision-group">

                <h4>
                    📚 Study
                </h4>

                <ul>

                    <li>
                        Understand the basic concept before memorizing formulas.
                    </li>

                    <li>
                        Revise the same important topics multiple times.
                    </li>

                    <li>
                        Keep a separate list of mistakes from MCQs.
                    </li>

                    <li>
                        Practice numerical problems after learning the formula.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    🧠 MCQ Strategy
                </h4>

                <ul>

                    <li>
                        Read the complete question before looking at the options.
                    </li>

                    <li>
                        Eliminate clearly incorrect options first.
                    </li>

                    <li>
                        Watch units carefully in numerical questions.
                    </li>

                    <li>
                        Do not spend too long on one difficult question.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    🚆 Medha-Focused Revision
                </h4>

                <ul>

                    <li>
                        Give special attention to railway electronics concepts.
                    </li>

                    <li>
                        Revise TCMS and CAN communication.
                    </li>

                    <li>
                        Revise traction and braking systems.
                    </li>

                    <li>
                        Revise wheel slip and adhesion.
                    </li>

                    <li>
                        Revise EV battery and BMS fundamentals.
                    </li>

                </ul>

            </div>


            <div class="revision-group">

                <h4>
                    ⏱️ Before Exam
                </h4>

                <ul>

                    <li>
                        Revise formulas.
                    </li>

                    <li>
                        Revise must-remember facts.
                    </li>

                    <li>
                        Practice a short MCQ test.
                    </li>

                    <li>
                        Review your mistakes.
                    </li>

                    <li>
                        Avoid learning large new topics at the last moment.
                    </li>

                </ul>

            </div>


            <div class="tip">

                💡 Best cycle:
                Study → Practice → Check Answer →
                Understand Mistake → Revise

            </div>

        </div>

    `;


    revisionContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   QUIZ SECTION
========================================================= */

function openQuizSection() {

    const quizSection =
        document.getElementById(
            "quiz"
        );


    if (!quizSection) {

        return;

    }


    showQuizStartScreen();


    quizSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   GET COMPLETE MCQ BANK
========================================================= */

function getMCQQuestionBank() {

    let completeBank = [];


    if (
        typeof mcqQuestions !== "undefined" &&
        Array.isArray(mcqQuestions)
    ) {

        completeBank =
            completeBank.concat(
                mcqQuestions
            );

    }


    if (
        typeof railwayMCQs !== "undefined" &&
        Array.isArray(railwayMCQs)
    ) {

        completeBank =
            completeBank.concat(
                railwayMCQs
            );

    }


    if (
        typeof evMCQs !== "undefined" &&
        Array.isArray(evMCQs)
    ) {

        completeBank =
            completeBank.concat(
                evMCQs
            );

    }


    return completeBank;

}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(array) {

    const shuffled =
        [...array];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }


    return shuffled;

}


/* =========================================================
   GET QUIZ QUESTIONS
========================================================= */

function getQuizQuestions(subject) {

    const questionBank =
        getMCQQuestionBank();


    if (
        questionBank.length === 0
    ) {

        return [];

    }


    if (
        subject === "All"
    ) {

        return shuffleArray(
            questionBank
        );

    }


    return shuffleArray(
        questionBank.filter(
            function(question) {

                return question.subject === subject;

            }
        )
    );

}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz() {

    const quizContainer =
        document.getElementById(
            "quizContainer"
        );


    const subjectSelect =
        document.getElementById(
            "quizSubject"
        );


    const countSelect =
        document.getElementById(
            "quizCount"
        );


    if (!quizContainer) {

        return;

    }


    selectedQuizSubject =
        subjectSelect
            ? subjectSelect.value
            : "All";


    selectedQuizCount =
        countSelect
            ? parseInt(
                countSelect.value,
                10
            )
            : 10;


    const availableQuestions =
        getQuizQuestions(
            selectedQuizSubject
        );


    if (
        availableQuestions.length === 0
    ) {

        quizContainer.innerHTML = `

            <div class="quiz-result">

                <div class="quiz-result-icon">
                    ⚠️
                </div>

                <h3>
                    No Questions Found
                </h3>

                <p>
                    Questions for this category
                    are not available.
                </p>

                <button
                    class="quiz-home-button"
                    onclick="showQuizStartScreen()">

                    ← Back

                </button>

            </div>

        `;

        return;

    }


    const actualQuestionCount =
        Math.min(
            selectedQuizCount,
            availableQuestions.length
        );


    quizQuestions =
        availableQuestions.slice(
            0,
            actualQuestionCount
        );


    currentQuizIndex = 0;

    quizScore = 0;

    quizAnswered = false;


    loadQuizQuestion();


    quizContainer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   LOAD QUIZ QUESTION
========================================================= */

function loadQuizQuestion() {

    const quizContainer =
        document.getElementById(
            "quizContainer"
        );


    if (!quizContainer) {

        return;

    }


    if (
        currentQuizIndex >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    const question =
        quizQuestions[
            currentQuizIndex
        ];


    if (!question) {

        return;

    }


    quizAnswered = false;


    const progress =
        (
            currentQuizIndex /
            quizQuestions.length
        ) * 100;


    const questionNumber =
        currentQuizIndex + 1;


    const totalQuestions =
        quizQuestions.length;


    const subjectName =
        getSubjectDisplayName(
            question.subject
        );


    quizContainer.innerHTML = `

        <div class="quiz-box">

            <div class="quiz-top">

                <div class="quiz-subject">
                    ${subjectName}
                </div>

                <div class="quiz-counter">

                    Question
                    ${questionNumber}
                    /
                    ${totalQuestions}

                </div>

            </div>


            <div class="quiz-progress">

                <div
                    class="quiz-progress-bar"
                    style="width:${progress}%">

                </div>

            </div>


            <div class="quiz-question">

                ${question.question}

            </div>


            <div class="quiz-options">

                ${question.options
                    .map(
                        function(option, index) {

                            return `

                                <button
                                    class="quiz-option"
                                    onclick="selectQuizAnswer(${index})">

                                    <strong>

                                        ${String.fromCharCode(
                                            65 + index
                                        )}.

                                    </strong>

                                    ${option}

                                </button>

                            `;

                        }
                    )
                    .join("")
                }

            </div>


            <div
                id="quizFeedback"
                class="quiz-feedback"
                style="display:none;">

            </div>


            <div
                id="quizActions"
                class="quiz-actions"
                style="display:none;">

                <button
                    class="quiz-next-button"
                    onclick="nextQuizQuestion()">

                    Next Question →

                </button>


                <button
                    class="quiz-exit-button"
                    onclick="showQuizStartScreen()">

                    Exit

                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectQuizAnswer(
    selectedIndex
) {

    if (quizAnswered) {

        return;

    }


    const question =
        quizQuestions[
            currentQuizIndex
        ];


    if (!question) {

        return;

    }


    quizAnswered = true;


    const correctIndex =
        Number(question.answer);


    if (
        selectedIndex === correctIndex
    ) {

        quizScore++;

    }


    const optionButtons =
        document.querySelectorAll(
            ".quiz-option"
        );


    optionButtons.forEach(
        function(button, index) {

            button.disabled = true;


            if (
                index === correctIndex
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index === selectedIndex &&
                selectedIndex !== correctIndex
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    const feedback =
        document.getElementById(
            "quizFeedback"
        );


    if (feedback) {

        const isCorrect =
            selectedIndex === correctIndex;


        const correctAnswer =
            question.options[
                correctIndex
            ];


        feedback.innerHTML = `

            <h4>

                ${
                    isCorrect
                    ? "✅ Correct!"
                    : "❌ Incorrect"
                }

            </h4>


            ${
                isCorrect
                ? ""
                : `

                    <p>

                        <strong>
                            Correct Answer:
                        </strong>

                        ${correctAnswer}

                    </p>

                `
            }


            <p>

                <strong>
                    Explanation:
                </strong>

                ${
                    question.explanation ||
                    "Review this topic again."
                }

            </p>

        `;


        feedback.style.display =
            "block";

    }


    const actions =
        document.getElementById(
            "quizActions"
        );


    if (actions) {

        actions.style.display =
            "flex";

    }


    const progressBar =
        document.querySelector(
            ".quiz-progress-bar"
        );


    if (progressBar) {

        const answeredProgress =
            (
                (currentQuizIndex + 1) /
                quizQuestions.length
            ) * 100;


        progressBar.style.width =
            answeredProgress + "%";

    }

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuizQuestion() {

    if (!quizAnswered) {

        return;

    }


    currentQuizIndex++;


    if (
        currentQuizIndex >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    loadQuizQuestion();

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    const quizContainer =
        document.getElementById(
            "quizContainer"
        );


    if (!quizContainer) {

        return;

    }


    const total =
        quizQuestions.length;


    const percentage =
        total > 0
            ? Math.round(
                (quizScore / total) * 100
            )
            : 0;


    let message;


    if (percentage >= 90) {

        message =
            "Excellent! Keep maintaining this level.";

    }

    else if (percentage >= 75) {

        message =
            "Very good! Revise the questions you missed.";

    }

    else if (percentage >= 60) {

        message =
            "Good effort. Strengthen the weak topics.";

    }

    else if (percentage >= 40) {

        message =
            "Keep practicing and revise the basics.";

    }

    else {

        message =
            "Start with the fundamentals and practice again.";

    }


    quizContainer.innerHTML = `

        <div class="quiz-result">

            <div class="quiz-result-icon">

                ${
                    percentage >= 75
                    ? "🏆"
                    : percentage >= 50
                    ? "👍"
                    : "📚"
                }

            </div>


            <h3>
                Quiz Completed!
            </h3>


            <p>

                ${
                    selectedQuizSubject === "All"
                    ? "All Subjects"
                    : getSubjectDisplayName(
                        selectedQuizSubject
                    )
                }

            </p>


            <div class="quiz-score">

                ${quizScore} / ${total}

            </div>


            <p>

                Score:
                <strong>
                    ${percentage}%
                </strong>

            </p>


            <div class="quiz-result-message">

                ${message}

            </div>


            <div class="quiz-result-buttons">

                <button
                    class="quiz-restart-button"
                    onclick="restartQuiz()">

                    🔄 Try Again

                </button>


                <button
                    class="quiz-home-button"
                    onclick="showQuizStartScreen()">

                    ← Quiz Home

                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   RESTART QUIZ
========================================================= */

function restartQuiz() {

    const availableQuestions =
        getQuizQuestions(
            selectedQuizSubject
        );


    if (
        availableQuestions.length === 0
    ) {

        showQuizStartScreen();

        return;

    }


    const actualQuestionCount =
        Math.min(
            selectedQuizCount,
            availableQuestions.length
        );


    quizQuestions =
        availableQuestions.slice(
            0,
            actualQuestionCount
        );


    currentQuizIndex = 0;

    quizScore = 0;

    quizAnswered = false;


    loadQuizQuestion();

}


/* =========================================================
   QUIZ START SCREEN
========================================================= */

function showQuizStartScreen() {

    const quizContainer =
        document.getElementById(
            "quizContainer"
        );


    if (!quizContainer) {

        return;

    }


    quizContainer.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                🧠
            </div>


            <h3>
                Ready for the Test?
            </h3>


            <p>

                Practice Medha Servo GET
                questions by subject.

            </p>


            <div class="quiz-settings">


                <div class="quiz-setting">

                    <label for="quizSubject">
                        Select Subject
                    </label>


                    <select id="quizSubject">

                        <option value="All">
                            All Subjects
                        </option>

                        <option value="Electrical">
                            Electrical & Network Theory
                        </option>

                        <option value="Analog">
                            Analog Electronics
                        </option>

                        <option value="Digital">
                            Digital Electronics
                        </option>

                        <option value="Microprocessors">
                            Microprocessors & Microcontrollers
                        </option>

                        <option value="Embedded C">
                            C / Embedded C
                        </option>

                        <option value="Control Systems">
                            Control Systems
                        </option>

                        <option value="Power Electronics">
                            Power Electronics
                        </option>

                        <option value="Instrumentation">
                            Sensors & Instrumentation
                        </option>

                        <option value="Communication">
                            Signals & Communication
                        </option>

                        <option value="Aptitude">
                            Aptitude & Reasoning
                        </option>

                        <option value="Railway">
                            🚆 Railway Electronics
                        </option>

                        <option value="EV">
                            🔋 EV Basics
                        </option>

                    </select>

                </div>


                <div class="quiz-setting">

                    <label for="quizCount">
                        Number of Questions
                    </label>


                    <select id="quizCount">

                        <option value="10">
                            10 Questions
                        </option>

                        <option value="20">
                            20 Questions
                        </option>

                        <option value="30">
                            30 Questions
                        </option>

                        <option value="50">
                            50 Questions
                        </option>

                    </select>

                </div>

            </div>


            <button
                class="quiz-start-button"
                onclick="startQuiz()">

                🚀 Start Quiz

            </button>

        </div>

    `;


    const subjectSelect =
        document.getElementById(
            "quizSubject"
        );


    const countSelect =
        document.getElementById(
            "quizCount"
        );


    if (subjectSelect) {

        subjectSelect.value =
            selectedQuizSubject;

    }


    if (countSelect) {

        countSelect.value =
            String(
                selectedQuizCount
            );

    }

}


/* =========================================================
   RESOURCE BUTTONS
========================================================= */

function showMessage(section) {

    if (
        section === "MCQ Practice"
    ) {

        openQuizSection();

        return;

    }


    if (
        section === "Railway Electronics"
    ) {

        openRailwaySection();

        return;

    }


    if (
        section === "EV Basics"
    ) {

        openEVSection();

        return;

    }


    if (
        section === "Quick Revision"
    ) {

        showQuickRevision();

        return;

    }


    if (
        section === "Formula Sheet"
    ) {

        showFormulaSheet();

        return;

    }


    if (
        section === "Must Remember"
    ) {

        showMustRemember();

        return;

    }


    alert(
        section +
        "\n\nThis section will be added in the next stage."
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "================================="
        );

        console.log(
            "Medha Servo GET Website Loaded"
        );

        console.log(
            "================================="
        );


        const generalCount =
            typeof mcqQuestions !== "undefined" &&
            Array.isArray(mcqQuestions)
                ? mcqQuestions.length
                : 0;


        const railwayCount =
            typeof railwayMCQs !== "undefined" &&
            Array.isArray(railwayMCQs)
                ? railwayMCQs.length
                : 0;


        const evCount =
            typeof evMCQs !== "undefined" &&
            Array.isArray(evMCQs)
                ? evMCQs.length
                : 0;


        const totalCount =
            generalCount +
            railwayCount +
            evCount;


        console.log(
            "General MCQs:",
            generalCount
        );


        console.log(
            "Railway MCQs:",
            railwayCount
        );


        console.log(
            "EV MCQs:",
            evCount
        );


        console.log(
            "TOTAL MCQs:",
            totalCount
        );


        console.log(
            "Must Remember Facts:",
            mustRememberFacts.length
        );


        console.log(
            "Formula Groups:",
            formulaGroups.length
        );


        console.log(
            "Railway Topics:",
            typeof railwayTopics !== "undefined"
                ? railwayTopics.length
                : 0
        );


        console.log(
            "EV Topics:",
            typeof evTopics !== "undefined"
                ? evTopics.length
                : 0
        );


        if (
            totalCount > 0
        ) {

            console.log(
                "✅ Complete MCQ system ready."
            );

        }

        else {

            console.warn(
                "⚠️ No MCQs loaded."
            );

        }

    }
);