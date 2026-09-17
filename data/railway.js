/* =========================================================
   MEDHA SERVO GET
   RAILWAY ELECTRONICS STUDY MATERIAL
========================================================= */

const railwayTopics = [

    {
        title: "Railway Electronics Introduction",
        icon: "🚆",
        content: `
            <h2>🚆 Railway Electronics Introduction</h2>

            <p>
                Railway electronics includes the electronic
                systems used for train control, traction,
                communication, monitoring, signalling,
                braking and safety.
            </p>

            <h3>Important Areas</h3>

            <ul>
                <li>Traction control</li>
                <li>TCMS</li>
                <li>Railway signalling</li>
                <li>Brake control</li>
                <li>Door control</li>
                <li>Train communication</li>
                <li>Monitoring and diagnostics</li>
                <li>Safety systems</li>
            </ul>

            <div class="tip">
                GET Tip: Understand the purpose of each
                railway electronic system.
            </div>
        `
    },


    {
        title: "Railway Traction Basics",
        icon: "⚡",
        content: `
            <h2>⚡ Railway Traction Basics</h2>

            <p>
                Railway traction is the system responsible
                for producing the force required to move
                a railway vehicle.
            </p>

            <h3>Main Components</h3>

            <ul>
                <li>Electrical power supply</li>
                <li>Power converter</li>
                <li>Traction inverter</li>
                <li>Traction motor</li>
                <li>Control system</li>
                <li>Mechanical transmission</li>
            </ul>

            <div class="formula">
                Electrical Energy → Converter →
                Motor → Mechanical Motion
            </div>
        `
    },


    {
        title: "Electric Locomotive",
        icon: "🚄",
        content: `
            <h2>🚄 Electric Locomotive</h2>

            <p>
                An electric locomotive receives electrical
                energy from an external railway supply and
                converts it into mechanical energy.
            </p>

            <h3>Basic Blocks</h3>

            <ul>
                <li>Overhead supply</li>
                <li>Pantograph</li>
                <li>Main transformer</li>
                <li>Power converter</li>
                <li>Traction inverter</li>
                <li>Traction motors</li>
                <li>Control system</li>
            </ul>

            <div class="tip">
                Remember: The traction motor converts
                electrical energy into mechanical energy.
            </div>
        `
    },


    {
        title: "Traction Motors",
        icon: "🔄",
        content: `
            <h2>🔄 Traction Motors</h2>

            <p>
                Traction motors provide the torque required
                to move railway vehicles.
            </p>

            <h3>Common Motor Types</h3>

            <ul>
                <li>DC traction motor</li>
                <li>Induction motor</li>
                <li>Permanent Magnet Synchronous Motor</li>
            </ul>

            <h3>Important Requirements</h3>

            <ul>
                <li>High starting torque</li>
                <li>Wide speed range</li>
                <li>High efficiency</li>
                <li>Reliable operation</li>
                <li>Good thermal performance</li>
            </ul>
        `
    },


    {
        title: "Traction Control",
        icon: "🎛️",
        content: `
            <h2>🎛️ Traction Control</h2>

            <p>
                Traction control regulates the power supplied
                to traction motors according to required
                speed and torque.
            </p>

            <h3>Functions</h3>

            <ul>
                <li>Speed control</li>
                <li>Torque control</li>
                <li>Acceleration control</li>
                <li>Wheel slip control</li>
                <li>Protection</li>
            </ul>

            <div class="formula">
                PWM → Average Power Control
            </div>
        `
    },


    {
        title: "TCMS",
        icon: "🖥️",
        content: `
            <h2>🖥️ Train Control and Management System</h2>

            <p>
                TCMS is an electronic control and monitoring
                system used to coordinate different systems
                within a train.
            </p>

            <h3>TCMS Functions</h3>

            <ul>
                <li>Train control</li>
                <li>Traction monitoring</li>
                <li>Brake monitoring</li>
                <li>Door control</li>
                <li>Fault monitoring</li>
                <li>Diagnostics</li>
                <li>Subsystem communication</li>
            </ul>

            <div class="tip">
                GET Tip: Think of TCMS as the supervisory
                control and monitoring system of the train.
            </div>
        `
    },


    {
        title: "TCMS Architecture",
        icon: "🏗️",
        content: `
            <h2>🏗️ TCMS Architecture</h2>

            <p>
                TCMS generally consists of controllers,
                I/O modules, communication networks and
                interfaces to train subsystems.
            </p>

            <h3>Typical Components</h3>

            <ul>
                <li>Central control unit</li>
                <li>Vehicle control units</li>
                <li>Remote I/O modules</li>
                <li>Communication network</li>
                <li>Subsystem controllers</li>
                <li>Driver display / HMI</li>
            </ul>

            <div class="formula">
                Sensors → Controller →
                Communication → Actuators
            </div>
        `
    },


    {
        title: "CAN Bus",
        icon: "🔗",
        content: `
            <h2>🔗 CAN Bus</h2>

            <p>
                CAN is a message-based communication protocol
                used for communication between distributed
                electronic controllers.
            </p>

            <h3>Important Features</h3>

            <ul>
                <li>Multi-master communication</li>
                <li>Message-based communication</li>
                <li>Error detection</li>
                <li>Differential signalling</li>
                <li>Suitable for distributed controllers</li>
            </ul>

            <div class="tip">
                Remember: CAN is a communication network,
                not a sensor or actuator.
            </div>
        `
    },


    {
        title: "Railway Communication",
        icon: "🌐",
        content: `
            <h2>🌐 Railway Communication</h2>

            <p>
                Railway electronic systems require reliable
                communication between controllers and
                subsystems.
            </p>

            <h3>Important Concepts</h3>

            <ul>
                <li>Controller-to-controller communication</li>
                <li>Vehicle-level communication</li>
                <li>Train-level communication</li>
                <li>Diagnostic communication</li>
                <li>Real-time data exchange</li>
            </ul>
        `
    },


    {
        title: "Railway Signalling",
        icon: "🚦",
        content: `
            <h2>🚦 Railway Signalling</h2>

            <p>
                Railway signalling systems help control
                train movements and maintain safe operation.
            </p>

            <h3>Purpose</h3>

            <ul>
                <li>Control train movement</li>
                <li>Prevent conflicting movements</li>
                <li>Maintain safe separation</li>
                <li>Provide route information</li>
                <li>Improve railway safety</li>
            </ul>
        `
    },


    {
        title: "Automatic Train Protection",
        icon: "🛡️",
        content: `
            <h2>🛡️ Automatic Train Protection</h2>

            <p>
                Automatic Train Protection systems monitor
                train operation and can intervene when unsafe
                operating conditions are detected.
            </p>

            <h3>General Functions</h3>

            <ul>
                <li>Speed monitoring</li>
                <li>Overspeed detection</li>
                <li>Movement authority monitoring</li>
                <li>Automatic intervention</li>
            </ul>
        `
    },


    {
        title: "Train Braking Systems",
        icon: "🛑",
        content: `
            <h2>🛑 Train Braking Systems</h2>

            <p>
                Railway braking systems reduce train speed
                and bring the train to a stop.
            </p>

            <h3>Important Types</h3>

            <ul>
                <li>Pneumatic braking</li>
                <li>Electrodynamic braking</li>
                <li>Regenerative braking</li>
                <li>Dynamic braking</li>
            </ul>
        `
    },


    {
        title: "Regenerative Braking",
        icon: "♻️",
        content: `
            <h2>♻️ Regenerative Braking</h2>

            <p>
                During regenerative braking, the traction
                motor can operate as a generator and electrical
                energy may be returned to the electrical system
                when the system permits.
            </p>

            <div class="formula">
                Mechanical Energy → Electrical Energy
            </div>

            <h3>Benefits</h3>

            <ul>
                <li>Energy recovery</li>
                <li>Improved efficiency</li>
                <li>Reduced energy consumption</li>
            </ul>
        `
    },


    {
        title: "Pneumatic Braking",
        icon: "💨",
        content: `
            <h2>💨 Pneumatic Braking</h2>

            <p>
                Pneumatic railway brakes use compressed air
                to apply braking force.
            </p>

            <h3>Important Components</h3>

            <ul>
                <li>Brake pipe</li>
                <li>Compressed air</li>
                <li>Brake cylinder</li>
                <li>Brake control equipment</li>
            </ul>
        `
    },


    {
        title: "Wheel Slip and Adhesion",
        icon: "🛞",
        content: `
            <h2>🛞 Wheel Slip and Adhesion</h2>

            <p>
                Wheel slip occurs when the wheel rotates
                faster than the available wheel-rail adhesion
                can support.
            </p>

            <h3>Effects</h3>

            <ul>
                <li>Reduced traction performance</li>
                <li>Wheel wear</li>
                <li>Reduced braking performance</li>
            </ul>

            <h3>Control Methods</h3>

            <ul>
                <li>Traction control</li>
                <li>Speed feedback</li>
                <li>Torque reduction</li>
                <li>Anti-slip control</li>
            </ul>
        `
    },


    {
        title: "Railway Door Control",
        icon: "🚪",
        content: `
            <h2>🚪 Railway Door Control</h2>

            <p>
                Door control systems monitor and control
                passenger doors and their safe operation.
            </p>

            <h3>Typical Functions</h3>

            <ul>
                <li>Door open command</li>
                <li>Door close command</li>
                <li>Door position monitoring</li>
                <li>Door interlock</li>
                <li>Fault detection</li>
            </ul>
        `
    },


    {
        title: "Railway Event Recorder",
        icon: "💾",
        content: `
            <h2>💾 Railway Event Recorder</h2>

            <p>
                An event recorder stores selected operational
                parameters and events for troubleshooting,
                monitoring and analysis.
            </p>

            <h3>Possible Data</h3>

            <ul>
                <li>Speed</li>
                <li>Brake status</li>
                <li>Fault events</li>
                <li>Control commands</li>
                <li>System status</li>
            </ul>
        `
    },


    {
        title: "Railway Safety and Redundancy",
        icon: "🛡️",
        content: `
            <h2>🛡️ Railway Safety and Redundancy</h2>

            <p>
                Railway electronic systems require high
                reliability because failures can affect
                train operation and safety.
            </p>

            <h3>Important Concepts</h3>

            <ul>
                <li>Redundancy</li>
                <li>Fault detection</li>
                <li>Fault isolation</li>
                <li>Fail-safe design</li>
                <li>Diagnostics</li>
                <li>Watchdog monitoring</li>
            </ul>

            <div class="tip">
                Remember:
                Detect → Diagnose → Protect → Recover.
            </div>
        `
    }

];