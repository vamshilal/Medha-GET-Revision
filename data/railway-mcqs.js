const railwayMCQs = [
    {
        subject: "Railway",
        question: "What is the main purpose of TCMS in a railway vehicle?",
        options: [
            "To control and monitor train systems",
            "To generate railway tracks",
            "To measure passenger tickets",
            "To replace the traction motor"
        ],
        answer: 0,
        explanation: "TCMS stands for Train Control and Management System. It monitors and controls various train systems."
    },
    {
        subject: "Railway",
        question: "What does TCMS stand for?",
        options: [
            "Train Current Monitoring System",
            "Train Control and Management System",
            "Traction Control Measurement System",
            "Train Communication Motor System"
        ],
        answer: 1,
        explanation: "TCMS stands for Train Control and Management System."
    },
    {
        subject: "Railway",
        question: "Which motor is commonly used for railway traction?",
        options: [
            "Traction motor",
            "Stepper motor only",
            "Servo motor only",
            "Universal motor only"
        ],
        answer: 0,
        explanation: "Traction motors are specifically designed to provide the torque and speed characteristics required for railway vehicles."
    },
    {
        subject: "Railway",
        question: "What is the function of traction control?",
        options: [
            "Control the traction force of the train",
            "Open passenger doors",
            "Record passenger names",
            "Control railway stations"
        ],
        answer: 0,
        explanation: "Traction control regulates the power delivered to traction motors and helps control train movement."
    },
    {
        subject: "Railway",
        question: "Which communication protocol is commonly associated with distributed railway control systems?",
        options: [
            "CAN",
            "HDMI",
            "VGA",
            "USB printer protocol"
        ],
        answer: 0,
        explanation: "CAN (Controller Area Network) is widely used for communication between electronic control units."
    },
    {
        subject: "Railway",
        question: "What is the primary purpose of CAN Bus?",
        options: [
            "Communication between electronic control units",
            "Mechanical braking",
            "Power generation",
            "Track construction"
        ],
        answer: 0,
        explanation: "CAN Bus provides reliable communication between multiple electronic control units."
    },
    {
        subject: "Railway",
        question: "What is regenerative braking?",
        options: [
            "Converting braking energy into electrical energy",
            "Using only pneumatic pressure",
            "Increasing train speed",
            "Disconnecting all electrical systems"
        ],
        answer: 0,
        explanation: "During regenerative braking, the traction motor operates as a generator and electrical energy can be recovered."
    },
    {
        subject: "Railway",
        question: "What is the purpose of an anti-wheel-slip system?",
        options: [
            "Prevent excessive wheel slip",
            "Increase passenger capacity",
            "Control cabin lighting",
            "Measure train length"
        ],
        answer: 0,
        explanation: "Wheel-slip protection helps maintain adhesion between the wheel and rail during acceleration."
    },
    {
        subject: "Railway",
        question: "What does ATP commonly mean in railway systems?",
        options: [
            "Automatic Train Protection",
            "Automatic Track Power",
            "Advanced Traction Processor",
            "Automatic Transmission Protocol"
        ],
        answer: 0,
        explanation: "ATP stands for Automatic Train Protection and is associated with railway safety and train movement protection."
    },
    {
        subject: "Railway",
        question: "What is the purpose of railway signalling?",
        options: [
            "Control and regulate train movements",
            "Charge batteries",
            "Control motor temperature only",
            "Measure passenger weight"
        ],
        answer: 0,
        explanation: "Railway signalling systems help safely control and regulate train movements."
    },
    {
        subject: "Railway",
        question: "What is adhesion in railway traction?",
        options: [
            "Grip between wheel and rail",
            "Battery capacity",
            "Motor winding resistance",
            "Train communication speed"
        ],
        answer: 0,
        explanation: "Adhesion represents the available grip between the wheel and rail."
    },
    {
        subject: "Railway",
        question: "What is the purpose of pneumatic braking?",
        options: [
            "Use compressed air to apply braking",
            "Generate traction power",
            "Control CAN messages",
            "Measure wheel diameter"
        ],
        answer: 0,
        explanation: "Pneumatic braking systems use compressed air to operate the train brakes."
    },
    {
        subject: "Railway",
        question: "What is a train event recorder used for?",
        options: [
            "Recording important operational parameters",
            "Increasing motor speed",
            "Charging batteries",
            "Controlling railway signals directly"
        ],
        answer: 0,
        explanation: "Event recorders store important train operating information that can be useful for analysis and investigation."
    },
    {
        subject: "Railway",
        question: "Why is redundancy important in railway electronics?",
        options: [
            "To improve system reliability and safety",
            "To increase ticket prices",
            "To reduce wheel diameter",
            "To increase train weight"
        ],
        answer: 0,
        explanation: "Redundant systems can provide backup functionality when a component or subsystem fails."
    },
    {
        subject: "Railway",
        question: "What is the purpose of an electric locomotive traction system?",
        options: [
            "Convert electrical power into mechanical motion",
            "Convert mechanical motion into passenger tickets",
            "Control railway stations",
            "Measure atmospheric pressure"
        ],
        answer: 0,
        explanation: "The traction system delivers electrical power to traction motors, producing mechanical motion."
    },
    {
        subject: "Railway",
        question: "What happens to a traction motor during regenerative braking?",
        options: [
            "It can operate as a generator",
            "It becomes a transformer",
            "It is permanently disconnected",
            "It becomes a capacitor"
        ],
        answer: 0,
        explanation: "During regenerative braking, the traction motor can operate in generator mode."
    },
    {
        subject: "Railway",
        question: "Which system can monitor multiple train subsystems?",
        options: [
            "TCMS",
            "LDR",
            "RTD",
            "Thermocouple"
        ],
        answer: 0,
        explanation: "TCMS is designed to monitor and control multiple train subsystems."
    },
    {
        subject: "Railway",
        question: "What is the main purpose of train door control?",
        options: [
            "Safely control opening and closing of train doors",
            "Control traction voltage",
            "Generate electrical power",
            "Measure rail temperature"
        ],
        answer: 0,
        explanation: "Door control systems manage safe opening and closing of train doors."
    },
    {
        subject: "Railway",
        question: "What is traction force?",
        options: [
            "Force used to move the train",
            "Force used only to stop the train",
            "Force produced by signalling",
            "Force produced by passenger doors"
        ],
        answer: 0,
        explanation: "Traction force is the force produced by the traction system to move the train."
    },
    {
        subject: "Railway",
        question: "Which parameter is particularly important for wheel-slip detection?",
        options: [
            "Wheel speed",
            "Passenger age",
            "Cabin light intensity",
            "Ticket number"
        ],
        answer: 0,
        explanation: "Wheel-speed measurements can be compared to detect differences indicating wheel slip."
    },
    {
        subject: "Railway",
        question: "What is the purpose of a railway communication network?",
        options: [
            "Exchange information between train electronic systems",
            "Physically move the train",
            "Replace railway tracks",
            "Increase wheel diameter"
        ],
        answer: 0,
        explanation: "Communication networks allow different electronic systems to exchange control and monitoring information."
    },
    {
        subject: "Railway",
        question: "Which system is directly related to train braking?",
        options: [
            "Brake control system",
            "Passenger information only",
            "Lighting system only",
            "Ticketing system"
        ],
        answer: 0,
        explanation: "The brake control system manages commands and operation associated with train braking."
    },
    {
        subject: "Railway",
        question: "What is the basic purpose of traction control during acceleration?",
        options: [
            "Provide controlled torque to the wheels",
            "Turn off all motors",
            "Open train doors",
            "Operate passenger displays only"
        ],
        answer: 0,
        explanation: "Traction control regulates motor torque to provide controlled acceleration."
    },
    {
        subject: "Railway",
        question: "Which device can be part of an electronic railway control system?",
        options: [
            "Microcontroller",
            "Mechanical ruler",
            "Water tank",
            "Paper ticket"
        ],
        answer: 0,
        explanation: "Microcontrollers can be used in electronic control units for monitoring and control."
    },
    {
        subject: "Railway",
        question: "What is a railway safety system designed to achieve?",
        options: [
            "Safe operation of trains",
            "Maximum passenger ticket price",
            "Maximum lighting brightness",
            "Track decoration"
        ],
        answer: 0,
        explanation: "Railway safety systems are designed to reduce operational risks and support safe train movement."
    },

    {
        subject: "Railway",
        question: "Which system controls several functions of a modern train through electronic control units?",
        options: [
            "TCMS",
            "RTD",
            "LVDT",
            "ADC only"
        ],
        answer: 0,
        explanation: "TCMS integrates monitoring and control of multiple train functions."
    },
    {
        subject: "Railway",
        question: "What does CAN stand for?",
        options: [
            "Controller Area Network",
            "Control Analog Node",
            "Communication Access Number",
            "Central Automatic Network"
        ],
        answer: 0,
        explanation: "CAN stands for Controller Area Network."
    },
    {
        subject: "Railway",
        question: "What is wheel slip?",
        options: [
            "Loss of proper adhesion between wheel and rail",
            "Increase in battery voltage",
            "Failure of a display",
            "Increase in brake pressure only"
        ],
        answer: 0,
        explanation: "Wheel slip occurs when the wheel rotates faster than the corresponding train motion due to insufficient adhesion."
    },
    {
        subject: "Railway",
        question: "Which braking method can recover electrical energy?",
        options: [
            "Regenerative braking",
            "Mechanical braking only",
            "Pneumatic braking only",
            "Emergency door braking"
        ],
        answer: 0,
        explanation: "Regenerative braking can recover electrical energy from the traction system."
    },
    {
        subject: "Railway",
        question: "Why is monitoring train parameters important?",
        options: [
            "To support safe and reliable operation",
            "To increase wheel slip",
            "To reduce communication",
            "To disable protection systems"
        ],
        answer: 0,
        explanation: "Monitoring operational parameters helps detect abnormal conditions and supports safe operation."
    },
    {
        subject: "Railway",
        question: "Which technology allows electronic units to exchange messages over a shared bus?",
        options: [
            "CAN Bus",
            "RTD",
            "Thermocouple",
            "Bourdon tube"
        ],
        answer: 0,
        explanation: "CAN Bus allows multiple electronic control units to communicate over a shared network."
    },
    {
        subject: "Railway",
        question: "What is the purpose of traction motor control?",
        options: [
            "Control motor torque and speed",
            "Measure passenger tickets",
            "Control station clocks",
            "Open windows"
        ],
        answer: 0,
        explanation: "Traction motor control regulates motor operation according to train operating requirements."
    },
    {
        subject: "Railway",
        question: "Which system can provide protection against unsafe train movement?",
        options: [
            "Automatic Train Protection",
            "Battery charger",
            "Door lighting",
            "Passenger display"
        ],
        answer: 0,
        explanation: "Automatic Train Protection systems are intended to support safe train movement."
    },
    {
        subject: "Railway",
        question: "What is the role of braking systems in a train?",
        options: [
            "Control or reduce train speed",
            "Increase traction voltage",
            "Increase wheel slip",
            "Generate passenger information"
        ],
        answer: 0,
        explanation: "Braking systems control train speed and help bring the train to a stop."
    },
    {
        subject: "Railway",
        question: "Which factor strongly affects railway traction performance?",
        options: [
            "Wheel-rail adhesion",
            "Passenger seat color",
            "Cabin decoration",
            "Ticket format"
        ],
        answer: 0,
        explanation: "Wheel-rail adhesion directly affects the amount of usable traction force."
    }
];