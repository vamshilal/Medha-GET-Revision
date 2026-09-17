const evMCQs = [
    {
        subject: "EV",
        question: "What does EV stand for?",
        options: [
            "Electric Vehicle",
            "Electronic Voltage",
            "Energy Variable",
            "Electric Valve"
        ],
        answer: 0,
        explanation: "EV stands for Electric Vehicle."
    },
    {
        subject: "EV",
        question: "Which battery chemistry is widely used in modern electric vehicles?",
        options: [
            "Lithium-ion",
            "Zinc-carbon only",
            "Alkaline only",
            "Lead pencil"
        ],
        answer: 0,
        explanation: "Lithium-ion battery technology is widely used in modern electric vehicles."
    },
    {
        subject: "EV",
        question: "What is the main function of a Battery Management System?",
        options: [
            "Monitor and manage the battery",
            "Control railway signals",
            "Replace the electric motor",
            "Operate headlights only"
        ],
        answer: 0,
        explanation: "A BMS monitors battery parameters and manages safe battery operation."
    },
    {
        subject: "EV",
        question: "What does SOC mean in an EV battery?",
        options: [
            "State of Charge",
            "System Operating Current",
            "Speed of Control",
            "Source Output Capacity"
        ],
        answer: 0,
        explanation: "SOC stands for State of Charge and indicates the battery's available charge level."
    },
    {
        subject: "EV",
        question: "What does SOH mean?",
        options: [
            "State of Health",
            "Speed of Hybrid",
            "System Output Heat",
            "State of Hardware"
        ],
        answer: 0,
        explanation: "SOH stands for State of Health and indicates the condition or remaining capability of a battery compared with its reference condition."
    },
    {
        subject: "EV",
        question: "What is the function of an inverter in an EV?",
        options: [
            "Convert DC electrical power to controlled AC power",
            "Convert mechanical energy into fuel",
            "Store mechanical energy",
            "Measure tyre pressure only"
        ],
        answer: 0,
        explanation: "The inverter converts DC battery power into controlled electrical power for an AC traction motor."
    },
    {
        subject: "EV",
        question: "What is regenerative braking in an EV?",
        options: [
            "Recover braking energy as electrical energy",
            "Waste all braking energy",
            "Increase battery temperature intentionally",
            "Disconnect the motor"
        ],
        answer: 0,
        explanation: "Regenerative braking allows the motor to operate as a generator and recover energy."
    },
    {
        subject: "EV",
        question: "What is the function of a DC-DC converter in an EV?",
        options: [
            "Convert one DC voltage level to another",
            "Convert DC directly into mechanical motion",
            "Measure vehicle speed",
            "Control tyre pressure"
        ],
        answer: 0,
        explanation: "A DC-DC converter changes DC voltage from one level to another."
    },
    {
        subject: "EV",
        question: "Which motor type is commonly used in electric vehicles?",
        options: [
            "PMSM",
            "Steam engine",
            "Diesel engine",
            "Hydraulic motor only"
        ],
        answer: 0,
        explanation: "Permanent Magnet Synchronous Motors (PMSMs) are commonly used in electric vehicles."
    },
    {
        subject: "EV",
        question: "What does BMS stand for?",
        options: [
            "Battery Management System",
            "Battery Motor Speed",
            "Basic Mechanical System",
            "Bus Monitoring Signal"
        ],
        answer: 0,
        explanation: "BMS stands for Battery Management System."
    },
    {
        subject: "EV",
        question: "Why is cell balancing used in a battery pack?",
        options: [
            "To maintain appropriate voltage balance between cells",
            "To increase tyre pressure",
            "To control headlights",
            "To increase vehicle weight"
        ],
        answer: 0,
        explanation: "Cell balancing helps keep individual battery cells within appropriate voltage ranges."
    },
    {
        subject: "EV",
        question: "What is the purpose of an EV battery pack?",
        options: [
            "Store electrical energy",
            "Store petrol",
            "Generate mechanical gears",
            "Control road signals"
        ],
        answer: 0,
        explanation: "The battery pack stores electrical energy used by the vehicle's electrical systems and traction motor."
    },
    {
        subject: "EV",
        question: "What is the main function of an electric traction motor?",
        options: [
            "Convert electrical energy into mechanical energy",
            "Convert fuel into steam",
            "Store electrical energy",
            "Measure battery SOC only"
        ],
        answer: 0,
        explanation: "The traction motor converts electrical energy into mechanical energy to drive the vehicle."
    },
    {
        subject: "EV",
        question: "During regenerative braking, the traction motor can behave like a:",
        options: [
            "Generator",
            "Fuse",
            "Resistor only",
            "Switch only"
        ],
        answer: 0,
        explanation: "During regenerative braking, the traction motor operates in generator mode."
    },
    {
        subject: "EV",
        question: "What is battery SOC normally expressed as?",
        options: [
            "Percentage",
            "Ohms only",
            "Hertz only",
            "Degrees Celsius only"
        ],
        answer: 0,
        explanation: "SOC is commonly represented as a percentage of available charge."
    },
    {
        subject: "EV",
        question: "What is one important function of an EV charging system?",
        options: [
            "Transfer electrical energy to the battery",
            "Remove the electric motor",
            "Increase wheel slip",
            "Replace the BMS"
        ],
        answer: 0,
        explanation: "The charging system transfers electrical energy from the source to the EV battery."
    },
    {
        subject: "EV",
        question: "Why is battery temperature monitoring important?",
        options: [
            "To support safe and reliable battery operation",
            "To increase battery overheating",
            "To disable the BMS",
            "To increase wheel diameter"
        ],
        answer: 0,
        explanation: "Battery temperature affects performance, safety and battery life."
    },
    {
        subject: "EV",
        question: "Which system protects and monitors individual battery cells?",
        options: [
            "Battery Management System",
            "Brake pedal",
            "Inverter casing",
            "Tyre valve"
        ],
        answer: 0,
        explanation: "The BMS monitors battery cells and helps manage safe operation."
    },
    {
        subject: "EV",
        question: "What is the purpose of an EV inverter's switching devices?",
        options: [
            "Control the electrical power supplied to the motor",
            "Store mechanical energy",
            "Measure tyre pressure",
            "Cool the passenger cabin only"
        ],
        answer: 0,
        explanation: "Power semiconductor switches in the inverter control voltage and current supplied to the traction motor."
    },
    {
        subject: "EV",
        question: "Which quantity indicates how much charge remains in a battery?",
        options: [
            "SOC",
            "SOH",
            "RPM",
            "Frequency"
        ],
        answer: 0,
        explanation: "State of Charge (SOC) represents the remaining charge level."
    },
    {
        subject: "EV",
        question: "Which quantity indicates battery ageing or condition?",
        options: [
            "SOH",
            "SOC only",
            "RPM",
            "Duty cycle only"
        ],
        answer: 0,
        explanation: "State of Health (SOH) is used to describe battery condition relative to its reference state."
    },
    {
        subject: "EV",
        question: "What is the purpose of a vehicle charging connector?",
        options: [
            "Provide an electrical connection for charging",
            "Control wheel slip",
            "Measure motor torque",
            "Replace the battery"
        ],
        answer: 0,
        explanation: "The charging connector provides the electrical interface between the charger and vehicle."
    },
    {
        subject: "EV",
        question: "Which component converts high-voltage battery DC into suitable AC for an AC motor?",
        options: [
            "Inverter",
            "Transformer only",
            "BMS",
            "Brake pad"
        ],
        answer: 0,
        explanation: "The inverter converts battery DC into controlled AC for an AC traction motor."
    },
    {
        subject: "EV",
        question: "What is one advantage of regenerative braking?",
        options: [
            "Energy recovery",
            "Permanent increase in tyre wear",
            "Fuel consumption increase",
            "Battery removal"
        ],
        answer: 0,
        explanation: "Regenerative braking can recover part of the vehicle's kinetic energy."
    },
    {
        subject: "EV",
        question: "What is the purpose of battery cell monitoring?",
        options: [
            "Track cell voltage and other operating parameters",
            "Control railway signalling",
            "Measure road width",
            "Operate windshield wipers only"
        ],
        answer: 0,
        explanation: "The BMS monitors parameters such as cell voltage and temperature to support safe battery operation."
    },
    {
        subject: "EV",
        question: "Which component is responsible for changing DC voltage levels in an EV electrical system?",
        options: [
            "DC-DC converter",
            "Traction tyre",
            "Brake disc",
            "Seat controller"
        ],
        answer: 0,
        explanation: "A DC-DC converter changes one DC voltage level to another."
    },
    {
        subject: "EV",
        question: "What is the main purpose of an electric vehicle motor controller?",
        options: [
            "Control motor operation",
            "Store battery energy",
            "Replace charging equipment",
            "Measure passenger count only"
        ],
        answer: 0,
        explanation: "The motor controller regulates electrical power delivered to the motor."
    },
    {
        subject: "EV",
        question: "Why are power semiconductor switches used in EV inverters?",
        options: [
            "To switch and control electrical power efficiently",
            "To store fuel",
            "To measure vehicle length",
            "To replace the battery cells"
        ],
        answer: 0,
        explanation: "Power semiconductor devices allow efficient high-speed switching and control of motor power."
    },
    {
        subject: "EV",
        question: "What does PMSM stand for?",
        options: [
            "Permanent Magnet Synchronous Motor",
            "Power Motor Switching Module",
            "Permanent Mechanical Speed Motor",
            "Pulse Modulation Switching Motor"
        ],
        answer: 0,
        explanation: "PMSM stands for Permanent Magnet Synchronous Motor."
    },
    {
        subject: "EV",
        question: "What is one important purpose of EV thermal management?",
        options: [
            "Maintain components within suitable temperature ranges",
            "Increase overheating",
            "Disable battery monitoring",
            "Increase wheel slip"
        ],
        answer: 0,
        explanation: "Thermal management helps keep batteries, motors and power electronics within suitable operating temperatures."
    }
];