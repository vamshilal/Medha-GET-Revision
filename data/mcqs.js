/* =========================================================
   MEDHA SERVO GET PREPARATION
   200+ MCQ QUESTION BANK

   20 Questions × 10 Subjects = 200 MCQs

   answer:
   0 = A
   1 = B
   2 = C
   3 = D
========================================================= */

const mcqQuestions = [

    /* =====================================================
       1. ELECTRICAL & NETWORK THEORY
    ====================================================== */

    {
        subject: "Electrical",
        question: "According to Ohm's law, the relationship between voltage, current and resistance is:",
        options: [
            "V = IR",
            "V = I/R",
            "V = R/I",
            "V = I + R"
        ],
        answer: 0,
        explanation: "Ohm's law states that V = IR, where V is voltage, I is current and R is resistance."
    },

    {
        subject: "Electrical",
        question: "The SI unit of electrical resistance is:",
        options: [
            "Volt",
            "Ampere",
            "Ohm",
            "Watt"
        ],
        answer: 2,
        explanation: "Electrical resistance is measured in ohms (Ω)."
    },

    {
        subject: "Electrical",
        question: "Kirchhoff's Current Law is based on conservation of:",
        options: [
            "Energy",
            "Charge",
            "Power",
            "Resistance"
        ],
        answer: 1,
        explanation: "KCL follows conservation of electric charge. The algebraic sum of currents at a node is zero."
    },

    {
        subject: "Electrical",
        question: "Kirchhoff's Voltage Law states that the algebraic sum of voltages around a closed loop is:",
        options: [
            "One",
            "Maximum",
            "Zero",
            "Infinite"
        ],
        answer: 2,
        explanation: "KVL states that the algebraic sum of all voltages around a closed loop is zero."
    },

    {
        subject: "Electrical",
        question: "The SI unit of capacitance is:",
        options: [
            "Henry",
            "Farad",
            "Weber",
            "Tesla"
        ],
        answer: 1,
        explanation: "Capacitance is measured in farads (F)."
    },

    {
        subject: "Electrical",
        question: "The SI unit of inductance is:",
        options: [
            "Farad",
            "Ohm",
            "Henry",
            "Coulomb"
        ],
        answer: 2,
        explanation: "Inductance is measured in henrys (H)."
    },

    {
        subject: "Electrical",
        question: "A capacitor stores energy in the form of:",
        options: [
            "Magnetic field",
            "Electric field",
            "Heat",
            "Mechanical energy"
        ],
        answer: 1,
        explanation: "A capacitor stores energy in its electric field."
    },

    {
        subject: "Electrical",
        question: "An inductor stores energy in the form of:",
        options: [
            "Electric field",
            "Magnetic field",
            "Heat",
            "Light"
        ],
        answer: 1,
        explanation: "An inductor stores energy in its magnetic field."
    },

    {
        subject: "Electrical",
        question: "The power consumed by a resistor can be calculated using:",
        options: [
            "P = VI",
            "P = V/I",
            "P = I/V",
            "P = R/V"
        ],
        answer: 0,
        explanation: "Electrical power is P = VI. For a resistor, P can also be written as I²R or V²/R."
    },

    {
        subject: "Electrical",
        question: "In a series circuit, the current through all components is:",
        options: [
            "Different",
            "Zero",
            "The same",
            "Infinite"
        ],
        answer: 2,
        explanation: "The same current flows through all components connected in series."
    },

    {
        subject: "Electrical",
        question: "In a parallel circuit, the voltage across each branch is:",
        options: [
            "The same",
            "Always zero",
            "Different",
            "Infinite"
        ],
        answer: 0,
        explanation: "All branches connected in parallel have the same voltage across them."
    },

    {
        subject: "Electrical",
        question: "The equivalent resistance of two resistors R1 and R2 in series is:",
        options: [
            "R1R2/(R1+R2)",
            "R1 + R2",
            "R1 - R2",
            "R1/R2"
        ],
        answer: 1,
        explanation: "For series resistors, equivalent resistance is the sum: R = R1 + R2."
    },

    {
        subject: "Electrical",
        question: "The equivalent resistance of two resistors in parallel is:",
        options: [
            "R1 + R2",
            "R1 - R2",
            "R1R2/(R1+R2)",
            "R1/R2"
        ],
        answer: 2,
        explanation: "For two parallel resistors, Req = R1R2/(R1+R2)."
    },

    {
        subject: "Electrical",
        question: "Thevenin's theorem replaces a linear network with:",
        options: [
            "A current source and parallel resistance",
            "A voltage source and series resistance",
            "Two voltage sources",
            "Only a resistor"
        ],
        answer: 1,
        explanation: "A Thevenin equivalent consists of a voltage source in series with an equivalent resistance."
    },

    {
        subject: "Electrical",
        question: "Norton's theorem represents a linear network as:",
        options: [
            "Voltage source in series with resistance",
            "Current source in parallel with resistance",
            "Only a current source",
            "Only a voltage source"
        ],
        answer: 1,
        explanation: "The Norton equivalent is a current source in parallel with an equivalent resistance."
    },

    {
        subject: "Electrical",
        question: "The SI unit of electric charge is:",
        options: [
            "Ampere",
            "Coulomb",
            "Volt",
            "Watt"
        ],
        answer: 1,
        explanation: "Electric charge is measured in coulombs (C)."
    },

    {
        subject: "Electrical",
        question: "The SI unit of electric current is:",
        options: [
            "Coulomb",
            "Ampere",
            "Volt",
            "Ohm"
        ],
        answer: 1,
        explanation: "Electric current is measured in amperes (A)."
    },

    {
        subject: "Electrical",
        question: "The time constant of an RC circuit is:",
        options: [
            "R/C",
            "RC",
            "R+C",
            "1/RC"
        ],
        answer: 1,
        explanation: "The time constant of an RC circuit is τ = RC."
    },

    {
        subject: "Electrical",
        question: "The time constant of an RL circuit is:",
        options: [
            "RL",
            "R/L",
            "L/R",
            "1/RL"
        ],
        answer: 2,
        explanation: "The time constant of an RL circuit is τ = L/R."
    },

    {
        subject: "Electrical",
        question: "A transformer operates on the principle of:",
        options: [
            "Electrolysis",
            "Mutual induction",
            "Photoelectric effect",
            "Thermionic emission"
        ],
        answer: 1,
        explanation: "A transformer transfers electrical energy between circuits through mutual electromagnetic induction."
    },


    /* =====================================================
       2. ANALOG ELECTRONICS
    ====================================================== */

    {
        subject: "Analog",
        question: "A semiconductor diode normally allows current to flow mainly in:",
        options: [
            "Both directions equally",
            "One direction",
            "No direction",
            "Only reverse direction"
        ],
        answer: 1,
        explanation: "A conventional PN junction diode conducts significantly when forward biased."
    },

    {
        subject: "Analog",
        question: "A diode is formed by joining:",
        options: [
            "Two P-type materials",
            "Two N-type materials",
            "P-type and N-type materials",
            "Metal and insulator"
        ],
        answer: 2,
        explanation: "A PN junction diode is formed by joining P-type and N-type semiconductor regions."
    },

    {
        subject: "Analog",
        question: "A Zener diode is commonly used for:",
        options: [
            "Voltage regulation",
            "Current amplification",
            "Frequency generation",
            "Digital counting"
        ],
        answer: 0,
        explanation: "A Zener diode operating in breakdown is widely used for voltage regulation."
    },

    {
        subject: "Analog",
        question: "The three terminals of a BJT are:",
        options: [
            "Gate, source, drain",
            "Emitter, base, collector",
            "Anode, cathode, gate",
            "Input, output, ground"
        ],
        answer: 1,
        explanation: "A BJT has emitter, base and collector terminals."
    },

    {
        subject: "Analog",
        question: "A BJT is generally considered a:",
        options: [
            "Voltage-controlled device",
            "Current-controlled device",
            "Light-controlled device",
            "Temperature-controlled device"
        ],
        answer: 1,
        explanation: "In the common-emitter model, collector current is controlled by base current, so BJT is treated as a current-controlled device."
    },

    {
        subject: "Analog",
        question: "The three terminals of a MOSFET are commonly called:",
        options: [
            "Emitter, base, collector",
            "Gate, drain, source",
            "Anode, cathode, gate",
            "Input, output, common"
        ],
        answer: 1,
        explanation: "A MOSFET has gate, drain and source terminals."
    },

    {
        subject: "Analog",
        question: "A MOSFET is generally considered a:",
        options: [
            "Voltage-controlled device",
            "Current-controlled device",
            "Temperature-controlled device",
            "Light-controlled device"
        ],
        answer: 0,
        explanation: "The drain current of a MOSFET is controlled primarily by the gate-to-source voltage."
    },

    {
        subject: "Analog",
        question: "LED stands for:",
        options: [
            "Light Emitting Diode",
            "Low Energy Device",
            "Linear Electronic Diode",
            "Light Energy Detector"
        ],
        answer: 0,
        explanation: "LED stands for Light Emitting Diode."
    },

    {
        subject: "Analog",
        question: "The main function of a rectifier is to convert:",
        options: [
            "DC to AC",
            "AC to DC",
            "DC to DC only",
            "AC to AC only"
        ],
        answer: 1,
        explanation: "A rectifier converts alternating current into direct current."
    },

    {
        subject: "Analog",
        question: "An amplifier is used to:",
        options: [
            "Decrease signal strength only",
            "Increase signal amplitude",
            "Convert DC to AC only",
            "Store charge"
        ],
        answer: 1,
        explanation: "An amplifier increases the amplitude or power of a signal while preserving its essential waveform."
    },

    {
        subject: "Analog",
        question: "An ideal operational amplifier has:",
        options: [
            "Zero input impedance",
            "Infinite input impedance",
            "Infinite output impedance",
            "Zero gain"
        ],
        answer: 1,
        explanation: "An ideal op-amp has infinite input impedance and ideally draws no input current."
    },

    {
        subject: "Analog",
        question: "The ideal open-loop voltage gain of an op-amp is:",
        options: [
            "Zero",
            "One",
            "Infinite",
            "Ten"
        ],
        answer: 2,
        explanation: "An ideal operational amplifier has infinite open-loop voltage gain."
    },

    {
        subject: "Analog",
        question: "The output of an inverting op-amp amplifier is:",
        options: [
            "In phase with input",
            "180° out of phase with input",
            "Always zero",
            "90° out of phase"
        ],
        answer: 1,
        explanation: "An inverting amplifier produces an output with a 180° phase reversal."
    },

    {
        subject: "Analog",
        question: "The gain of an inverting op-amp amplifier is:",
        options: [
            "Rf/Rin",
            "-Rf/Rin",
            "1 + Rf/Rin",
            "Rin/Rf"
        ],
        answer: 1,
        explanation: "For an ideal inverting amplifier, Av = -Rf/Rin."
    },

    {
        subject: "Analog",
        question: "A capacitor blocks steady-state:",
        options: [
            "AC only",
            "DC",
            "Both AC and DC always",
            "High frequency only"
        ],
        answer: 1,
        explanation: "After reaching steady state, an ideal capacitor behaves as an open circuit for DC."
    },

    {
        subject: "Analog",
        question: "An inductor ideally behaves as a short circuit under:",
        options: [
            "Steady-state DC",
            "High-frequency AC",
            "All AC conditions",
            "No conditions"
        ],
        answer: 0,
        explanation: "At steady-state DC, an ideal inductor has zero voltage drop and behaves like a short circuit."
    },

    {
        subject: "Analog",
        question: "The current gain of a common-emitter BJT is represented by:",
        options: [
            "α",
            "β",
            "γ",
            "δ"
        ],
        answer: 1,
        explanation: "β is the common-emitter current gain, approximately IC/IB."
    },

    {
        subject: "Analog",
        question: "A transistor can be used as:",
        options: [
            "Only a resistor",
            "An amplifier and switch",
            "Only a capacitor",
            "Only a sensor"
        ],
        answer: 1,
        explanation: "Transistors are widely used for amplification and switching."
    },

    {
        subject: "Analog",
        question: "The reverse current of an ideal diode is:",
        options: [
            "Infinite",
            "Zero",
            "Equal to forward current",
            "Maximum"
        ],
        answer: 1,
        explanation: "An ideal diode blocks current completely under reverse bias."
    },

    {
        subject: "Analog",
        question: "The approximate forward voltage of a silicon PN junction diode is:",
        options: [
            "0.1 V",
            "0.3 V",
            "0.7 V",
            "5 V"
        ],
        answer: 2,
        explanation: "A typical silicon diode has a forward voltage drop of approximately 0.7 V at ordinary operating currents."
    },


    /* =====================================================
       3. DIGITAL ELECTRONICS
    ====================================================== */

    {
        subject: "Digital",
        question: "Which gates are known as universal gates?",
        options: [
            "AND and OR",
            "XOR and XNOR",
            "NAND and NOR",
            "NOT and AND"
        ],
        answer: 2,
        explanation: "NAND and NOR are universal gates because any basic logic function can be implemented using either one."
    },

    {
        subject: "Digital",
        question: "The output of an AND gate is HIGH when:",
        options: [
            "All inputs are HIGH",
            "All inputs are LOW",
            "Any one input is HIGH",
            "Inputs are different"
        ],
        answer: 0,
        explanation: "An AND gate produces HIGH only when all its inputs are HIGH."
    },

    {
        subject: "Digital",
        question: "The output of an OR gate is LOW when:",
        options: [
            "All inputs are HIGH",
            "At least one input is HIGH",
            "All inputs are LOW",
            "Inputs are different"
        ],
        answer: 2,
        explanation: "An OR gate produces LOW only when all inputs are LOW."
    },

    {
        subject: "Digital",
        question: "A NOT gate has:",
        options: [
            "One input and one output",
            "Two inputs and one output",
            "Two inputs and two outputs",
            "No input"
        ],
        answer: 0,
        explanation: "A NOT gate is a single-input logic gate that complements its input."
    },

    {
        subject: "Digital",
        question: "The output of an XOR gate is HIGH when:",
        options: [
            "Inputs are the same",
            "Inputs are different",
            "All inputs are zero",
            "All inputs are one"
        ],
        answer: 1,
        explanation: "For two inputs, XOR produces HIGH when the inputs are different."
    },

    {
        subject: "Digital",
        question: "A flip-flop is primarily used to store:",
        options: [
            "One bit",
            "One byte",
            "One word",
            "One kilobyte"
        ],
        answer: 0,
        explanation: "A flip-flop is a bistable memory element capable of storing one bit."
    },

    {
        subject: "Digital",
        question: "Which flip-flop is commonly called the universal flip-flop?",
        options: [
            "SR",
            "JK",
            "D",
            "T"
        ],
        answer: 1,
        explanation: "The JK flip-flop is often called a universal flip-flop because it can perform several flip-flop operations."
    },

    {
        subject: "Digital",
        question: "A D flip-flop is commonly used for:",
        options: [
            "Data storage",
            "Power amplification",
            "Voltage regulation",
            "Temperature sensing"
        ],
        answer: 0,
        explanation: "The D flip-flop is widely used for storing and synchronizing digital data."
    },

    {
        subject: "Digital",
        question: "A counter is a sequential circuit used to:",
        options: [
            "Amplify voltage",
            "Count pulses",
            "Measure temperature",
            "Convert AC to DC"
        ],
        answer: 1,
        explanation: "Digital counters count clock pulses or events."
    },

    {
        subject: "Digital",
        question: "A multiplexer is also called a:",
        options: [
            "Data selector",
            "Data amplifier",
            "Data converter",
            "Data oscillator"
        ],
        answer: 0,
        explanation: "A multiplexer selects one of several inputs and sends it to a single output."
    },

    {
        subject: "Digital",
        question: "For n select lines, a multiplexer can have how many inputs?",
        options: [
            "n",
            "2n",
            "2ⁿ",
            "n²"
        ],
        answer: 2,
        explanation: "An n-select-line multiplexer can select one of 2ⁿ inputs."
    },

    {
        subject: "Digital",
        question: "A demultiplexer performs:",
        options: [
            "One input to many outputs",
            "Many inputs to one output",
            "Analog to digital conversion",
            "Digital to analog conversion"
        ],
        answer: 0,
        explanation: "A demultiplexer routes one input to one of several output lines."
    },

    {
        subject: "Digital",
        question: "A half adder adds:",
        options: [
            "One bit",
            "Two single bits",
            "Three bytes",
            "Four bits"
        ],
        answer: 1,
        explanation: "A half adder adds two single binary bits and produces sum and carry outputs."
    },

    {
        subject: "Digital",
        question: "The Sum output of a half adder is:",
        options: [
            "A AND B",
            "A OR B",
            "A XOR B",
            "A NAND B"
        ],
        answer: 2,
        explanation: "Half-adder Sum = A ⊕ B."
    },

    {
        subject: "Digital",
        question: "The Carry output of a half adder is:",
        options: [
            "A + B",
            "A XOR B",
            "A·B",
            "A NOR B"
        ],
        answer: 2,
        explanation: "Half-adder Carry = A·B."
    },

    {
        subject: "Digital",
        question: "A full adder has how many inputs?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 2,
        explanation: "A full adder has three inputs: A, B and carry-in."
    },

    {
        subject: "Digital",
        question: "The binary number system uses how many digits?",
        options: [
            "2",
            "8",
            "10",
            "16"
        ],
        answer: 0,
        explanation: "Binary uses two digits: 0 and 1."
    },

    {
        subject: "Digital",
        question: "The hexadecimal number system has base:",
        options: [
            "2",
            "8",
            "10",
            "16"
        ],
        answer: 3,
        explanation: "Hexadecimal is a base-16 number system."
    },

    {
        subject: "Digital",
        question: "The decimal equivalent of binary 1010 is:",
        options: [
            "8",
            "9",
            "10",
            "12"
        ],
        answer: 2,
        explanation: "1010₂ = 8 + 2 = 10₁₀."
    },

    {
        subject: "Digital",
        question: "A register is a group of:",
        options: [
            "Logic gates only",
            "Flip-flops",
            "Resistors",
            "Diodes"
        ],
        answer: 1,
        explanation: "A register is generally a group of flip-flops used to store binary information."
    },


    /* =====================================================
       4. MICROPROCESSORS & MICROCONTROLLERS
    ====================================================== */

    {
        subject: "Microprocessors",
        question: "ADC stands for:",
        options: [
            "Analog Data Controller",
            "Analog-to-Digital Converter",
            "Automatic Digital Controller",
            "Analog Device Circuit"
        ],
        answer: 1,
        explanation: "ADC stands for Analog-to-Digital Converter."
    },

    {
        subject: "Microprocessors",
        question: "DAC stands for:",
        options: [
            "Digital-to-Analog Converter",
            "Data Analog Controller",
            "Digital Automatic Circuit",
            "Device Analog Converter"
        ],
        answer: 0,
        explanation: "DAC converts digital data into a corresponding analog signal."
    },

    {
        subject: "Microprocessors",
        question: "UART is primarily used for:",
        options: [
            "Serial communication",
            "Temperature measurement",
            "Power conversion",
            "Signal amplification"
        ],
        answer: 0,
        explanation: "UART is a hardware communication protocol commonly used for asynchronous serial communication."
    },

    {
        subject: "Microprocessors",
        question: "SPI is generally a:",
        options: [
            "Parallel communication protocol",
            "Synchronous serial protocol",
            "Power control circuit",
            "Sensor"
        ],
        answer: 1,
        explanation: "SPI is a synchronous serial communication interface."
    },

    {
        subject: "Microprocessors",
        question: "I²C generally uses how many signal lines for communication?",
        options: [
            "1",
            "2",
            "4",
            "8"
        ],
        answer: 1,
        explanation: "I²C normally uses two signal lines: SDA and SCL."
    },

    {
        subject: "Microprocessors",
        question: "PWM stands for:",
        options: [
            "Pulse Width Modulation",
            "Power Wave Measurement",
            "Pulse Wave Memory",
            "Power Width Module"
        ],
        answer: 0,
        explanation: "PWM stands for Pulse Width Modulation."
    },

    {
        subject: "Microprocessors",
        question: "PWM can be used to control:",
        options: [
            "Average power delivered to a load",
            "Only temperature",
            "Only resistance",
            "Only memory"
        ],
        answer: 0,
        explanation: "PWM controls average power by changing the duty cycle of the signal."
    },

    {
        subject: "Microprocessors",
        question: "A microcontroller normally contains:",
        options: [
            "Only CPU",
            "CPU, memory and peripherals",
            "Only memory",
            "Only I/O ports"
        ],
        answer: 1,
        explanation: "A microcontroller integrates CPU, memory and peripheral interfaces on a single chip."
    },

    {
        subject: "Microprocessors",
        question: "ROM is generally:",
        options: [
            "Volatile memory",
            "Non-volatile memory",
            "Only cache memory",
            "A register"
        ],
        answer: 1,
        explanation: "ROM is non-volatile, meaning it retains stored information when power is removed."
    },

    {
        subject: "Microprocessors",
        question: "RAM is generally:",
        options: [
            "Non-volatile",
            "Volatile",
            "Permanent storage",
            "Read-only"
        ],
        answer: 1,
        explanation: "RAM is volatile memory and normally loses stored data when power is removed."
    },

    {
        subject: "Microprocessors",
        question: "GPIO stands for:",
        options: [
            "General Purpose Input/Output",
            "General Power Input Output",
            "Graphical Processor Input Output",
            "General Program Interface Operation"
        ],
        answer: 0,
        explanation: "GPIO stands for General Purpose Input/Output."
    },

    {
        subject: "Microprocessors",
        question: "An interrupt is used to:",
        options: [
            "Request processor attention",
            "Increase resistance",
            "Store analog voltage",
            "Generate mechanical power"
        ],
        answer: 0,
        explanation: "An interrupt requests processor attention so that an event can be serviced."
    },

    {
        subject: "Microprocessors",
        question: "A timer in a microcontroller can be used for:",
        options: [
            "Generating time delays",
            "Only storing programs",
            "Only measuring voltage",
            "Only communication"
        ],
        answer: 0,
        explanation: "Timers can generate delays, measure intervals and support periodic operations."
    },

    {
        subject: "Microprocessors",
        question: "An embedded system is designed mainly to:",
        options: [
            "Perform a specific function",
            "Run every desktop application",
            "Replace the internet",
            "Store unlimited data"
        ],
        answer: 0,
        explanation: "An embedded system is usually designed for a dedicated or specific application."
    },

    {
        subject: "Microprocessors",
        question: "Which memory is commonly used to store firmware?",
        options: [
            "ROM/Flash",
            "RAM only",
            "Cache only",
            "CPU register only"
        ],
        answer: 0,
        explanation: "Firmware is commonly stored in non-volatile memory such as ROM or Flash."
    },

    {
        subject: "Microprocessors",
        question: "The CPU stands for:",
        options: [
            "Central Processing Unit",
            "Control Power Unit",
            "Computer Peripheral Unit",
            "Central Program Utility"
        ],
        answer: 0,
        explanation: "CPU stands for Central Processing Unit."
    },

    {
        subject: "Microprocessors",
        question: "The ALU performs:",
        options: [
            "Arithmetic and logical operations",
            "Only memory storage",
            "Only communication",
            "Only analog conversion"
        ],
        answer: 0,
        explanation: "ALU stands for Arithmetic Logic Unit and performs arithmetic and logical operations."
    },

    {
        subject: "Microprocessors",
        question: "The program counter normally stores:",
        options: [
            "Current supply voltage",
            "Address of the next instruction",
            "Temperature",
            "Stack data only"
        ],
        answer: 1,
        explanation: "The program counter contains the address of the next instruction to be fetched."
    },

    {
        subject: "Microprocessors",
        question: "A watchdog timer is mainly used to:",
        options: [
            "Recover from software hangs or faults",
            "Increase RAM size",
            "Amplify signals",
            "Measure resistance"
        ],
        answer: 0,
        explanation: "A watchdog timer can reset a system if software stops responding as expected."
    },

    {
        subject: "Microprocessors",
        question: "The main purpose of a clock signal in a digital processor is to:",
        options: [
            "Synchronize operations",
            "Increase resistance",
            "Store permanent data",
            "Measure temperature"
        ],
        answer: 0,
        explanation: "The clock provides timing and synchronization for processor and digital circuit operations."
    },


    /* =====================================================
       5. C / EMBEDDED C
    ====================================================== */

    {
        subject: "Embedded C",
        question: "Which symbol is used to end a C statement?",
        options: [
            ":",
            ";",
            ".",
            ","
        ],
        answer: 1,
        explanation: "Most C statements end with a semicolon (;)."
    },

    {
        subject: "Embedded C",
        question: "Which data type is commonly used to store an integer in C?",
        options: [
            "int",
            "float",
            "char",
            "void"
        ],
        answer: 0,
        explanation: "The int data type is used to store integer values."
    },

    {
        subject: "Embedded C",
        question: "Which operator is used to obtain the address of a variable?",
        options: [
            "*",
            "&",
            "%",
            "#"
        ],
        answer: 1,
        explanation: "The address-of operator (&) returns the memory address of a variable."
    },

    {
        subject: "Embedded C",
        question: "Which operator is used to dereference a pointer?",
        options: [
            "&",
            "*",
            "#",
            "%"
        ],
        answer: 1,
        explanation: "The * operator is used to dereference a pointer and access the value stored at the pointed address."
    },

    {
        subject: "Embedded C",
        question: "An array stores:",
        options: [
            "Only functions",
            "Multiple elements of the same data type",
            "Only pointers",
            "Only characters"
        ],
        answer: 1,
        explanation: "An array is a collection of elements of the same data type stored sequentially."
    },

    {
        subject: "Embedded C",
        question: "Array indexing in C normally starts from:",
        options: [
            "0",
            "1",
            "-1",
            "2"
        ],
        answer: 0,
        explanation: "The first element of a C array has index 0."
    },

    {
        subject: "Embedded C",
        question: "Which keyword is used to define a structure in C?",
        options: [
            "class",
            "struct",
            "record",
            "object"
        ],
        answer: 1,
        explanation: "The struct keyword defines a structure in C."
    },

    {
        subject: "Embedded C",
        question: "Which loop is guaranteed to execute its body at least once?",
        options: [
            "for",
            "while",
            "do-while",
            "if"
        ],
        answer: 2,
        explanation: "A do-while loop checks its condition after executing the loop body."
    },

    {
        subject: "Embedded C",
        question: "Which keyword is used to return a value from a function?",
        options: [
            "break",
            "return",
            "continue",
            "exit"
        ],
        answer: 1,
        explanation: "The return statement exits a function and can provide a return value."
    },

    {
        subject: "Embedded C",
        question: "Which operator represents logical AND in C?",
        options: [
            "&",
            "&&",
            "|",
            "||"
        ],
        answer: 1,
        explanation: "&& is the logical AND operator in C."
    },

    {
        subject: "Embedded C",
        question: "Which operator represents bitwise AND?",
        options: [
            "&&",
            "&",
            "||",
            "!"
        ],
        answer: 1,
        explanation: "The single ampersand (&) is the bitwise AND operator."
    },

    {
        subject: "Embedded C",
        question: "Which keyword is commonly used for a variable that may change unexpectedly due to hardware or interrupts?",
        options: [
            "static",
            "volatile",
            "extern",
            "register"
        ],
        answer: 1,
        explanation: "volatile tells the compiler that a variable can change independently of normal program flow."
    },

    {
        subject: "Embedded C",
        question: "A pointer stores:",
        options: [
            "Only a floating-point number",
            "A memory address",
            "Only a character",
            "A function result only"
        ],
        answer: 1,
        explanation: "A pointer variable stores the memory address of another object or function, depending on its type."
    },

    {
        subject: "Embedded C",
        question: "Which preprocessor directive is used to include a header file?",
        options: [
            "#define",
            "#include",
            "#ifdef",
            "#endif"
        ],
        answer: 1,
        explanation: "#include is used to include header files."
    },

    {
        subject: "Embedded C",
        question: "Which preprocessor directive is used to define a macro?",
        options: [
            "#include",
            "#define",
            "#macro",
            "#constant"
        ],
        answer: 1,
        explanation: "#define is used to create macros or symbolic constants."
    },

    {
        subject: "Embedded C",
        question: "The bitwise OR operator in C is:",
        options: [
            "||",
            "|",
            "&",
            "^"
        ],
        answer: 1,
        explanation: "The single vertical bar (|) is the bitwise OR operator."
    },

    {
        subject: "Embedded C",
        question: "The bitwise XOR operator in C is:",
        options: [
            "^",
            "&",
            "|",
            "!"
        ],
        answer: 0,
        explanation: "The caret (^) is the bitwise XOR operator."
    },

    {
        subject: "Embedded C",
        question: "Which keyword is used to declare a constant variable?",
        options: [
            "fixed",
            "constant",
            "const",
            "immutable"
        ],
        answer: 2,
        explanation: "The const qualifier is used to indicate that a variable should not be modified through that identifier."
    },

    {
        subject: "Embedded C",
        question: "Which function is the usual entry point of a C program?",
        options: [
            "start()",
            "main()",
            "begin()",
            "run()"
        ],
        answer: 1,
        explanation: "Execution of a hosted C program begins in the main() function."
    },

    {
        subject: "Embedded C",
        question: "Which storage class can preserve a local variable's value between function calls?",
        options: [
            "auto",
            "static",
            "register",
            "extern"
        ],
        answer: 1,
        explanation: "A static local variable retains its value between function calls."
    },


    /* =====================================================
       6. CONTROL SYSTEMS
    ====================================================== */

    {
        subject: "Control Systems",
        question: "A control system is designed to:",
        options: [
            "Control the behavior of a system",
            "Only store data",
            "Only measure temperature",
            "Only amplify signals"
        ],
        answer: 0,
        explanation: "A control system manages or regulates the behavior of a system toward a desired response."
    },

    {
        subject: "Control Systems",
        question: "An open-loop control system has:",
        options: [
            "Feedback",
            "No feedback",
            "Only positive feedback",
            "Only negative feedback"
        ],
        answer: 1,
        explanation: "An open-loop system operates without using feedback from the output."
    },

    {
        subject: "Control Systems",
        question: "A closed-loop control system uses:",
        options: [
            "Feedback",
            "No input",
            "No output",
            "Only a resistor"
        ],
        answer: 0,
        explanation: "Closed-loop systems use feedback to compare the output with the desired input."
    },

    {
        subject: "Control Systems",
        question: "Negative feedback generally tends to:",
        options: [
            "Increase sensitivity to parameter changes",
            "Reduce sensitivity to parameter changes",
            "Eliminate bandwidth",
            "Always make a system unstable"
        ],
        answer: 1,
        explanation: "Negative feedback generally reduces sensitivity to variations in system parameters."
    },

    {
        subject: "Control Systems",
        question: "The transfer function is defined as the ratio of:",
        options: [
            "Input to output with zero initial conditions",
            "Output to input with zero initial conditions",
            "Output to feedback only",
            "Input to feedback"
        ],
        answer: 1,
        explanation: "Transfer function = Output/Input under zero initial conditions."
    },

    {
        subject: "Control Systems",
        question: "The poles of a transfer function are values of s that make the:",
        options: [
            "Numerator zero",
            "Denominator zero",
            "Input zero",
            "Output zero only"
        ],
        answer: 1,
        explanation: "Poles are the roots of the denominator of the transfer function."
    },

    {
        subject: "Control Systems",
        question: "The zeros of a transfer function are values of s that make the:",
        options: [
            "Numerator zero",
            "Denominator zero",
            "Feedback zero",
            "Gain infinite"
        ],
        answer: 0,
        explanation: "Zeros are the roots of the numerator of the transfer function."
    },

    {
        subject: "Control Systems",
        question: "For a continuous-time linear system, stability requires poles to lie in:",
        options: [
            "Right half of s-plane",
            "Left half of s-plane",
            "Origin only",
            "Upper half only"
        ],
        answer: 1,
        explanation: "A continuous-time LTI system is asymptotically stable when all poles have negative real parts."
    },

    {
        subject: "Control Systems",
        question: "A PID controller consists of:",
        options: [
            "P, I and D actions",
            "Only P action",
            "Only I action",
            "Only D action"
        ],
        answer: 0,
        explanation: "PID stands for Proportional, Integral and Derivative control."
    },

    {
        subject: "Control Systems",
        question: "The proportional controller action depends on:",
        options: [
            "Error",
            "Integral of error only",
            "Derivative of error only",
            "Output frequency only"
        ],
        answer: 0,
        explanation: "Proportional action produces a control signal proportional to the instantaneous error."
    },

    {
        subject: "Control Systems",
        question: "The integral controller is mainly useful for reducing:",
        options: [
            "Steady-state error",
            "Sensor size",
            "System input",
            "Sampling frequency"
        ],
        answer: 0,
        explanation: "Integral action accumulates error and can eliminate steady-state error for appropriate systems."
    },

    {
        subject: "Control Systems",
        question: "The derivative controller responds to the:",
        options: [
            "Rate of change of error",
            "Integral of error",
            "Magnitude of supply voltage",
            "Resistance"
        ],
        answer: 0,
        explanation: "Derivative action depends on the rate of change of the error."
    },

    {
        subject: "Control Systems",
        question: "A Bode plot represents magnitude and phase as functions of:",
        options: [
            "Time",
            "Frequency",
            "Resistance",
            "Temperature"
        ],
        answer: 1,
        explanation: "Bode plots show magnitude and phase versus frequency, usually on logarithmic frequency scale."
    },

    {
        subject: "Control Systems",
        question: "The root locus shows the movement of:",
        options: [
            "Zeros only",
            "Closed-loop poles",
            "Input signals",
            "Sensors"
        ],
        answer: 1,
        explanation: "Root locus shows how closed-loop poles move as a system parameter, commonly gain, varies."
    },

    {
        subject: "Control Systems",
        question: "The Routh-Hurwitz criterion is used to determine:",
        options: [
            "System stability",
            "Resistance",
            "Capacitance",
            "Sampling rate"
        ],
        answer: 0,
        explanation: "The Routh-Hurwitz criterion determines stability without explicitly calculating all roots."
    },

    {
        subject: "Control Systems",
        question: "A first-order system has a characteristic equation containing the highest power:",
        options: [
            "s⁰",
            "s¹",
            "s²",
            "s³"
        ],
        answer: 1,
        explanation: "A first-order system has a first-degree characteristic polynomial."
    },

    {
        subject: "Control Systems",
        question: "A second-order system has a characteristic equation of degree:",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 1,
        explanation: "A second-order system has a second-degree characteristic equation."
    },

    {
        subject: "Control Systems",
        question: "The steady-state error is the error as time approaches:",
        options: [
            "Zero",
            "Infinity",
            "One second",
            "The sampling period"
        ],
        answer: 1,
        explanation: "Steady-state error is evaluated as the error in the limit t → ∞."
    },

    {
        subject: "Control Systems",
        question: "Feedback is commonly used to compare:",
        options: [
            "Desired output and actual output",
            "Resistance and capacitance",
            "Current and charge only",
            "Frequency and temperature"
        ],
        answer: 0,
        explanation: "A feedback system compares the desired reference with the measured output to form an error signal."
    },

    {
        subject: "Control Systems",
        question: "A system with no poles in the right-half s-plane and appropriate simple imaginary-axis behavior can be:",
        options: [
            "Stable under suitable conditions",
            "Always unstable",
            "Always nonlinear",
            "Always open-loop"
        ],
        answer: 0,
        explanation: "Stability depends on pole locations and pole multiplicities; poles with negative real parts give asymptotic stability."
    },


    /* =====================================================
       7. POWER ELECTRONICS
    ====================================================== */

    {
        subject: "Power Electronics",
        question: "SCR stands for:",
        options: [
            "Silicon Controlled Rectifier",
            "Series Controlled Resistor",
            "Silicon Current Regulator",
            "Switching Control Relay"
        ],
        answer: 0,
        explanation: "SCR stands for Silicon Controlled Rectifier."
    },

    {
        subject: "Power Electronics",
        question: "An SCR has how many terminals?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1,
        explanation: "An SCR has three terminals: anode, cathode and gate."
    },

    {
        subject: "Power Electronics",
        question: "The three terminals of an SCR are:",
        options: [
            "Gate, source, drain",
            "Emitter, base, collector",
            "Anode, cathode, gate",
            "Input, output, ground"
        ],
        answer: 2,
        explanation: "SCR terminals are anode, cathode and gate."
    },

    {
        subject: "Power Electronics",
        question: "A DIAC is generally a:",
        options: [
            "Unidirectional device",
            "Bidirectional device",
            "Voltage amplifier",
            "Transformer"
        ],
        answer: 1,
        explanation: "A DIAC is a bidirectional trigger device commonly used in AC control circuits."
    },

    {
        subject: "Power Electronics",
        question: "A TRIAC can conduct:",
        options: [
            "Only in one direction",
            "In both directions",
            "Only under DC",
            "Only with no gate"
        ],
        answer: 1,
        explanation: "A TRIAC is a bidirectional thyristor device used mainly for AC power control."
    },

    {
        subject: "Power Electronics",
        question: "A rectifier converts:",
        options: [
            "DC to AC",
            "AC to DC",
            "DC to DC",
            "AC to AC only"
        ],
        answer: 1,
        explanation: "A rectifier converts AC electrical power to DC electrical power."
    },

    {
        subject: "Power Electronics",
        question: "An inverter converts:",
        options: [
            "AC to DC",
            "DC to AC",
            "AC to AC only",
            "DC to mechanical energy"
        ],
        answer: 1,
        explanation: "An inverter converts DC power into AC power."
    },

    {
        subject: "Power Electronics",
        question: "A chopper is a:",
        options: [
            "DC-DC converter",
            "AC-DC converter",
            "DC-AC converter",
            "Transformer"
        ],
        answer: 0,
        explanation: "A chopper is a power electronic DC-DC converter."
    },

    {
        subject: "Power Electronics",
        question: "A freewheeling diode is commonly used with:",
        options: [
            "Inductive loads",
            "Purely capacitive loads only",
            "Open circuits",
            "Transformers only"
        ],
        answer: 0,
        explanation: "A freewheeling diode provides a path for current when an inductive load is switched off."
    },

    {
        subject: "Power Electronics",
        question: "PWM stands for:",
        options: [
            "Pulse Width Modulation",
            "Power Wave Measurement",
            "Pulse Wire Mode",
            "Power Width Measurement"
        ],
        answer: 0,
        explanation: "PWM stands for Pulse Width Modulation."
    },

    {
        subject: "Power Electronics",
        question: "An IGBT combines features associated with:",
        options: [
            "MOSFET input and bipolar conduction",
            "Only resistor operation",
            "Only diode operation",
            "Only capacitor operation"
        ],
        answer: 0,
        explanation: "An IGBT has a MOS-gated input structure and bipolar conduction characteristics."
    },

    {
        subject: "Power Electronics",
        question: "A power MOSFET is generally:",
        options: [
            "Voltage controlled",
            "Current controlled only",
            "Mechanically controlled",
            "Temperature controlled only"
        ],
        answer: 0,
        explanation: "MOSFET conduction is controlled by the gate-to-source voltage."
    },

    {
        subject: "Power Electronics",
        question: "The main purpose of a heat sink is to:",
        options: [
            "Increase electrical resistance",
            "Remove heat from a device",
            "Generate PWM",
            "Store charge"
        ],
        answer: 1,
        explanation: "A heat sink transfers heat away from a power semiconductor to help maintain safe operating temperature."
    },

    {
        subject: "Power Electronics",
        question: "A snubber circuit is commonly used to:",
        options: [
            "Limit voltage/current transients",
            "Increase transformer turns",
            "Measure temperature",
            "Store program code"
        ],
        answer: 0,
        explanation: "Snubber circuits help control switching transients and reduce stress on power devices."
    },

    {
        subject: "Power Electronics",
        question: "The gate terminal of an SCR is primarily used for:",
        options: [
            "Triggering",
            "Cooling",
            "Measuring temperature",
            "Storing energy"
        ],
        answer: 0,
        explanation: "A gate pulse can trigger an SCR into conduction when forward biased."
    },

    {
        subject: "Power Electronics",
        question: "Commutation in an SCR refers to:",
        options: [
            "Turning the SCR off",
            "Increasing gate voltage only",
            "Cooling the SCR",
            "Increasing resistance"
        ],
        answer: 0,
        explanation: "Commutation is the process of turning off a conducting thyristor by reducing its current below the holding level."
    },

    {
        subject: "Power Electronics",
        question: "UJT stands for:",
        options: [
            "Unijunction Transistor",
            "Universal Junction Transistor",
            "Unit Junction Thyristor",
            "Unilateral Junction Transformer"
        ],
        answer: 0,
        explanation: "UJT stands for Unijunction Transistor."
    },

    {
        subject: "Power Electronics",
        question: "A controlled rectifier commonly uses:",
        options: [
            "SCRs or controlled switches",
            "Only resistors",
            "Only capacitors",
            "Only transformers"
        ],
        answer: 0,
        explanation: "Controlled rectifiers use controllable semiconductor switches such as SCRs to regulate DC output."
    },

    {
        subject: "Power Electronics",
        question: "A TRIAC is particularly useful for controlling:",
        options: [
            "AC power",
            "Only DC memory",
            "Digital data",
            "Temperature sensors"
        ],
        answer: 0,
        explanation: "TRIACs are widely used for bidirectional AC power control."
    },

    {
        subject: "Power Electronics",
        question: "A power electronic switch ideally operates mainly in:",
        options: [
            "ON and OFF states",
            "Only linear mode",
            "Only reverse mode",
            "Only saturation-free mode"
        ],
        answer: 0,
        explanation: "Power electronic switches are ideally operated as ON/OFF devices to reduce conduction and switching losses."
    },


    /* =====================================================
       8. SENSORS & INSTRUMENTATION
    ====================================================== */

    {
        subject: "Instrumentation",
        question: "A sensor is a device that detects:",
        options: [
            "A physical quantity",
            "Only digital code",
            "Only electrical resistance",
            "Only temperature"
        ],
        answer: 0,
        explanation: "A sensor detects a physical quantity such as temperature, pressure, displacement or light."
    },

    {
        subject: "Instrumentation",
        question: "A transducer converts:",
        options: [
            "One form of energy/signal into another",
            "Only AC into DC",
            "Only voltage into current",
            "Only digital data into text"
        ],
        answer: 0,
        explanation: "A transducer converts a physical quantity or signal into another usable form, commonly an electrical signal."
    },

    {
        subject: "Instrumentation",
        question: "RTD is commonly used to measure:",
        options: [
            "Temperature",
            "Pressure",
            "Flow",
            "Level"
        ],
        answer: 0,
        explanation: "RTD stands for Resistance Temperature Detector and is used for temperature measurement."
    },

    {
        subject: "Instrumentation",
        question: "Pt100 is an example of:",
        options: [
            "RTD",
            "Thermocouple",
            "LVDT",
            "Strain gauge"
        ],
        answer: 0,
        explanation: "Pt100 is a platinum RTD with a nominal resistance of 100 Ω at 0°C."
    },

    {
        subject: "Instrumentation",
        question: "A thermocouple operates based on the:",
        options: [
            "Seebeck effect",
            "Hall effect",
            "Photoelectric effect",
            "Piezoelectric effect"
        ],
        answer: 0,
        explanation: "A thermocouple generates a voltage due to the Seebeck effect when its junctions are at different temperatures."
    },

    {
        subject: "Instrumentation",
        question: "An LVDT is mainly used to measure:",
        options: [
            "Displacement",
            "Temperature",
            "Humidity",
            "pH"
        ],
        answer: 0,
        explanation: "LVDT stands for Linear Variable Differential Transformer and is used for linear displacement measurement."
    },

    {
        subject: "Instrumentation",
        question: "A strain gauge measures:",
        options: [
            "Strain",
            "Temperature only",
            "Frequency",
            "Light intensity"
        ],
        answer: 0,
        explanation: "A strain gauge measures mechanical strain through a change in electrical resistance."
    },

    {
        subject: "Instrumentation",
        question: "A Wheatstone bridge is commonly used for:",
        options: [
            "Resistance measurement",
            "Frequency generation",
            "AC generation",
            "Data transmission"
        ],
        answer: 0,
        explanation: "A Wheatstone bridge can accurately measure unknown resistance and is widely used with resistive sensors."
    },

    {
        subject: "Instrumentation",
        question: "A Bourdon tube is commonly used for measuring:",
        options: [
            "Pressure",
            "Temperature",
            "Displacement only",
            "Light"
        ],
        answer: 0,
        explanation: "A Bourdon tube is a mechanical pressure-sensing element."
    },

    {
        subject: "Instrumentation",
        question: "A piezoelectric sensor is particularly suitable for measuring:",
        options: [
            "Dynamic force or vibration",
            "Static DC voltage",
            "Liquid level only",
            "pH only"
        ],
        answer: 0,
        explanation: "Piezoelectric sensors are well suited to dynamic measurements such as vibration, acceleration and changing force."
    },

    {
        subject: "Instrumentation",
        question: "LDR stands for:",
        options: [
            "Light Dependent Resistor",
            "Low Data Resistor",
            "Linear Digital Resistor",
            "Light Detection Relay"
        ],
        answer: 0,
        explanation: "LDR stands for Light Dependent Resistor."
    },

    {
        subject: "Instrumentation",
        question: "The resistance of a typical LDR generally:",
        options: [
            "Decreases as light intensity increases",
            "Increases as light intensity increases",
            "Always remains constant",
            "Becomes zero always"
        ],
        answer: 0,
        explanation: "An LDR generally has lower resistance under higher light intensity."
    },

    {
        subject: "Instrumentation",
        question: "Accuracy refers to:",
        options: [
            "Closeness to the true value",
            "Repeatability only",
            "Small sensor size",
            "Fast response only"
        ],
        answer: 0,
        explanation: "Accuracy describes how close a measurement is to the true or accepted value."
    },

    {
        subject: "Instrumentation",
        question: "Precision refers mainly to:",
        options: [
            "Repeatability of measurements",
            "Closeness to zero",
            "Sensor size",
            "Power consumption"
        ],
        answer: 0,
        explanation: "Precision describes the closeness of repeated measurements to one another."
    },

    {
        subject: "Instrumentation",
        question: "Sensitivity is the ratio of:",
        options: [
            "Change in output to change in input",
            "Input to resistance",
            "Power to time",
            "Temperature to pressure"
        ],
        answer: 0,
        explanation: "Sensitivity indicates the change in output produced by a unit change in input."
    },

    {
        subject: "Instrumentation",
        question: "Calibration is performed to:",
        options: [
            "Compare and adjust an instrument against a standard",
            "Increase battery voltage",
            "Change sensor material",
            "Remove all noise"
        ],
        answer: 0,
        explanation: "Calibration compares an instrument's response with a known standard and may involve adjustment."
    },

    {
        subject: "Instrumentation",
        question: "Resolution refers to the:",
        options: [
            "Smallest detectable change",
            "Maximum supply voltage",
            "Largest measurable value only",
            "Sensor weight"
        ],
        answer: 0,
        explanation: "Resolution is the smallest change in input that an instrument can distinguish."
    },

    {
        subject: "Instrumentation",
        question: "A pressure sensor is used to measure:",
        options: [
            "Pressure",
            "Only temperature",
            "Only displacement",
            "Only light"
        ],
        answer: 0,
        explanation: "Pressure sensors convert pressure into a measurable signal."
    },

    {
        subject: "Instrumentation",
        question: "Flow measurement determines the:",
        options: [
            "Rate of fluid movement",
            "Temperature of a resistor",
            "Electrical resistance only",
            "Light intensity"
        ],
        answer: 0,
        explanation: "Flow measurement determines the rate at which a fluid passes through a pipe or system."
    },

    {
        subject: "Instrumentation",
        question: "Level measurement is used to determine:",
        options: [
            "Height or quantity of material in a vessel",
            "Electrical frequency",
            "Signal bandwidth",
            "Resistance only"
        ],
        answer: 0,
        explanation: "Level instruments determine the height or amount of liquid or solid material in a vessel."
    },


    /* =====================================================
       9. SIGNALS & COMMUNICATION
    ====================================================== */

    {
        subject: "Communication",
        question: "A continuous-time signal is defined for:",
        options: [
            "Continuous values of time",
            "Only integer time values",
            "Only binary values",
            "Only zero time"
        ],
        answer: 0,
        explanation: "A continuous-time signal exists for every value of time within its domain."
    },

    {
        subject: "Communication",
        question: "A discrete-time signal is defined at:",
        options: [
            "Discrete time instants",
            "Every possible time instant",
            "Only zero",
            "Only negative time"
        ],
        answer: 0,
        explanation: "A discrete-time signal is defined only at discrete time instants."
    },

    {
        subject: "Communication",
        question: "The relationship between frequency and time period is:",
        options: [
            "f = T",
            "f = 1/T",
            "f = T²",
            "f = 2T"
        ],
        answer: 1,
        explanation: "Frequency is the reciprocal of time period: f = 1/T."
    },

    {
        subject: "Communication",
        question: "According to the sampling theorem, the minimum sampling frequency should be:",
        options: [
            "fm",
            "2fm",
            "fm/2",
            "4fm"
        ],
        answer: 1,
        explanation: "For a band-limited signal with maximum frequency fm, the sampling frequency should be at least 2fm."
    },

    {
        subject: "Communication",
        question: "Sampling below the Nyquist rate can cause:",
        options: [
            "Aliasing",
            "Amplification",
            "Rectification",
            "Modulation only"
        ],
        answer: 0,
        explanation: "Undersampling can cause spectral overlap known as aliasing."
    },

    {
        subject: "Communication",
        question: "AM stands for:",
        options: [
            "Amplitude Modulation",
            "Analog Measurement",
            "Automatic Modulation",
            "Amplitude Measurement"
        ],
        answer: 0,
        explanation: "AM stands for Amplitude Modulation."
    },

    {
        subject: "Communication",
        question: "In amplitude modulation, the carrier's ______ is varied according to the message signal.",
        options: [
            "Amplitude",
            "Frequency",
            "Phase only",
            "Velocity"
        ],
        answer: 0,
        explanation: "In AM, the carrier amplitude varies according to the message signal."
    },

    {
        subject: "Communication",
        question: "FM stands for:",
        options: [
            "Frequency Modulation",
            "Frequency Measurement",
            "Fast Modulation",
            "Frequency Multiplication"
        ],
        answer: 0,
        explanation: "FM stands for Frequency Modulation."
    },

    {
        subject: "Communication",
        question: "In frequency modulation, the carrier's ______ is varied.",
        options: [
            "Amplitude",
            "Frequency",
            "Power supply",
            "Resistance"
        ],
        answer: 1,
        explanation: "In FM, the instantaneous frequency of the carrier varies according to the message signal."
    },

    {
        subject: "Communication",
        question: "PM stands for:",
        options: [
            "Phase Modulation",
            "Power Measurement",
            "Pulse Measurement",
            "Phase Measurement"
        ],
        answer: 0,
        explanation: "PM stands for Phase Modulation."
    },

    {
        subject: "Communication",
        question: "Noise in a communication system is generally:",
        options: [
            "Unwanted disturbance",
            "Desired information",
            "Carrier signal",
            "Modulation index"
        ],
        answer: 0,
        explanation: "Noise is an unwanted random disturbance that can degrade the received signal."
    },

    {
        subject: "Communication",
        question: "SNR stands for:",
        options: [
            "Signal-to-Noise Ratio",
            "Signal Network Resistance",
            "System Noise Response",
            "Serial Network Rate"
        ],
        answer: 0,
        explanation: "SNR stands for Signal-to-Noise Ratio."
    },

    {
        subject: "Communication",
        question: "Multiplexing is used to:",
        options: [
            "Combine multiple signals for transmission over a shared medium",
            "Remove all signals",
            "Convert DC to AC only",
            "Measure resistance"
        ],
        answer: 0,
        explanation: "Multiplexing allows multiple signals to share a common communication channel."
    },

    {
        subject: "Communication",
        question: "FDM stands for:",
        options: [
            "Frequency Division Multiplexing",
            "Frequency Data Measurement",
            "Fast Digital Modulation",
            "Frequency Detection Method"
        ],
        answer: 0,
        explanation: "FDM separates channels using different frequency bands."
    },

    {
        subject: "Communication",
        question: "TDM stands for:",
        options: [
            "Time Division Multiplexing",
            "Time Data Measurement",
            "Transfer Digital Modulation",
            "Time Detection Method"
        ],
        answer: 0,
        explanation: "TDM assigns different time slots to different signals."
    },

    {
        subject: "Communication",
        question: "OFDM stands for:",
        options: [
            "Orthogonal Frequency Division Multiplexing",
            "Optical Frequency Data Modulation",
            "Open Frequency Digital Method",
            "Orthogonal Data Frequency Method"
        ],
        answer: 0,
        explanation: "OFDM stands for Orthogonal Frequency Division Multiplexing."
    },

    {
        subject: "Communication",
        question: "An antenna is used to:",
        options: [
            "Transmit or receive electromagnetic waves",
            "Store electrical charge",
            "Measure resistance only",
            "Convert AC to DC"
        ],
        answer: 0,
        explanation: "Antennas convert electrical signals to electromagnetic waves and vice versa."
    },

    {
        subject: "Communication",
        question: "The electromagnetic spectrum contains:",
        options: [
            "Different ranges of electromagnetic frequencies",
            "Only visible light",
            "Only radio waves",
            "Only X-rays"
        ],
        answer: 0,
        explanation: "The electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays."
    },

    {
        subject: "Communication",
        question: "A transmitter primarily:",
        options: [
            "Processes and sends information through a communication channel",
            "Only stores information",
            "Only measures temperature",
            "Only receives signals"
        ],
        answer: 0,
        explanation: "A transmitter prepares the information signal for transmission through the communication channel."
    },

    {
        subject: "Communication",
        question: "A receiver primarily:",
        options: [
            "Recovers information from the received signal",
            "Only generates power",
            "Only measures resistance",
            "Only stores batteries"
        ],
        answer: 0,
        explanation: "A receiver processes the received signal and recovers the transmitted information."
    },


    /* =====================================================
       10. APTITUDE & REASONING
    ====================================================== */

    {
        subject: "Aptitude",
        question: "What is 25% of 200?",
        options: [
            "25",
            "40",
            "50",
            "75"
        ],
        answer: 2,
        explanation: "25% of 200 = (25/100) × 200 = 50."
    },

    {
        subject: "Aptitude",
        question: "If a number is divisible by 2, it must be:",
        options: [
            "Odd",
            "Even",
            "Prime",
            "Negative"
        ],
        answer: 1,
        explanation: "Every integer divisible by 2 is even."
    },

    {
        subject: "Aptitude",
        question: "What is the HCF of 12 and 18?",
        options: [
            "3",
            "6",
            "9",
            "12"
        ],
        answer: 1,
        explanation: "The common factors of 12 and 18 include 1, 2, 3 and 6. The highest is 6."
    },

    {
        subject: "Aptitude",
        question: "What is the LCM of 4 and 6?",
        options: [
            "8",
            "10",
            "12",
            "24"
        ],
        answer: 2,
        explanation: "The smallest positive number divisible by both 4 and 6 is 12."
    },

    {
        subject: "Aptitude",
        question: "The average of 10, 20 and 30 is:",
        options: [
            "15",
            "20",
            "25",
            "30"
        ],
        answer: 1,
        explanation: "Average = (10 + 20 + 30) / 3 = 20."
    },

    {
        subject: "Aptitude",
        question: "If the cost price is ₹100 and selling price is ₹120, the profit is:",
        options: [
            "₹10",
            "₹15",
            "₹20",
            "₹25"
        ],
        answer: 2,
        explanation: "Profit = Selling Price − Cost Price = ₹120 − ₹100 = ₹20."
    },

    {
        subject: "Aptitude",
        question: "A 10% discount on ₹500 is:",
        options: [
            "₹25",
            "₹40",
            "₹50",
            "₹100"
        ],
        answer: 2,
        explanation: "10% of ₹500 = ₹50."
    },

    {
        subject: "Aptitude",
        question: "The ratio 2:3 is equivalent to:",
        options: [
            "4:6",
            "3:4",
            "6:8",
            "8:9"
        ],
        answer: 0,
        explanation: "Multiplying both terms of 2:3 by 2 gives 4:6."
    },

    {
        subject: "Aptitude",
        question: "If a car travels 120 km in 3 hours, its average speed is:",
        options: [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        answer: 1,
        explanation: "Speed = Distance/Time = 120/3 = 40 km/h."
    },

    {
        subject: "Aptitude",
        question: "Simple interest on ₹1000 at 10% per annum for 2 years is:",
        options: [
            "₹100",
            "₹150",
            "₹200",
            "₹250"
        ],
        answer: 2,
        explanation: "SI = PRT/100 = 1000 × 10 × 2 / 100 = ₹200."
    },

    {
        subject: "Aptitude",
        question: "If a work can be completed in 10 days by one person, the person's one-day work is:",
        options: [
            "1/5",
            "1/10",
            "1/20",
            "10"
        ],
        answer: 1,
        explanation: "If total work is 1, one day's work is 1/10."
    },

    {
        subject: "Aptitude",
        question: "A train covers 300 km in 5 hours. Its average speed is:",
        options: [
            "50 km/h",
            "60 km/h",
            "70 km/h",
            "75 km/h"
        ],
        answer: 1,
        explanation: "Speed = 300/5 = 60 km/h."
    },

    {
        subject: "Aptitude",
        question: "What is the probability of getting a head when a fair coin is tossed once?",
        options: [
            "0",
            "1/4",
            "1/2",
            "1"
        ],
        answer: 2,
        explanation: "A fair coin has two equally likely outcomes, so P(head) = 1/2."
    },

    {
        subject: "Aptitude",
        question: "How many ways can 2 different objects be arranged?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 1,
        explanation: "Two different objects can be arranged in 2! = 2 ways."
    },

    {
        subject: "Aptitude",
        question: "Find the next number: 2, 4, 6, 8, ?",
        options: [
            "9",
            "10",
            "11",
            "12"
        ],
        answer: 1,
        explanation: "The series increases by 2 each time, so the next number is 10."
    },

    {
        subject: "Aptitude",
        question: "Find the odd one out: 2, 4, 6, 9",
        options: [
            "2",
            "4",
            "6",
            "9"
        ],
        answer: 3,
        explanation: "2, 4 and 6 are even numbers, while 9 is odd."
    },

    {
        subject: "Aptitude",
        question: "If CAT is coded as DBU by shifting each letter one position forward, DOG becomes:",
        options: [
            "EPH",
            "EOG",
            "DPH",
            "FQI"
        ],
        answer: 0,
        explanation: "D→E, O→P and G→H, so DOG becomes EPH."
    },

    {
        subject: "Aptitude",
        question: "A person facing North turns right. Which direction is the person facing?",
        options: [
            "West",
            "East",
            "South",
            "North"
        ],
        answer: 1,
        explanation: "A right turn from North points toward East."
    },

    {
        subject: "Aptitude",
        question: "If A is the brother of B and B is the sister of C, A is C's:",
        options: [
            "Brother",
            "Sister",
            "Father",
            "Mother"
        ],
        answer: 0,
        explanation: "A and B are siblings, and B and C are siblings. Therefore A is C's brother."
    },

    {
        subject: "Aptitude",
        question: "If today is Monday, what day will it be after 10 days?",
        options: [
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        answer: 1,
        explanation: "10 days after Monday is Thursday because 10 mod 7 = 3 and Monday + 3 days = Thursday."
    }

];


/* =========================================================
   MCQ BANK INFORMATION
========================================================= */

console.log(
    "Medha GET MCQ Bank Loaded:",
    mcqQuestions.length,
    "questions"
);


/* =========================================================
   SUBJECT-WISE QUESTION COUNT
========================================================= */

const mcqSubjectCounts = {};


mcqQuestions.forEach(
    function(question) {

        if (
            !mcqSubjectCounts[
                question.subject
            ]
        ) {

            mcqSubjectCounts[
                question.subject
            ] = 0;

        }


        mcqSubjectCounts[
            question.subject
        ]++;

    }
);


console.log(
    "MCQ Subject Distribution:",
    mcqSubjectCounts
);