/* =========================================================
   MEDHA SERVO GET
   EV BASICS STUDY MATERIAL
========================================================= */

const evTopics = [

    {
        title: "Electric Vehicle Introduction",
        icon: "🔋",
        content: `
            <h2>🔋 Electric Vehicle Introduction</h2>

            <p>
                An electric vehicle uses electrical energy
                for propulsion.
            </p>

            <h3>Main Components</h3>

            <ul>
                <li>Battery pack</li>
                <li>Battery Management System</li>
                <li>Inverter</li>
                <li>Electric motor</li>
                <li>Motor controller</li>
                <li>DC-DC converter</li>
                <li>On-board charger</li>
            </ul>
        `
    },


    {
        title: "EV Battery",
        icon: "🔋",
        content: `
            <h2>🔋 EV Battery</h2>

            <p>
                The battery stores the electrical energy
                required to power the vehicle.
            </p>

            <h3>Important Parameters</h3>

            <ul>
                <li>Voltage</li>
                <li>Capacity</li>
                <li>Energy</li>
                <li>Power</li>
                <li>State of Charge</li>
                <li>State of Health</li>
            </ul>

            <div class="formula">
                Energy = Voltage × Capacity
            </div>
        `
    },


    {
        title: "Battery Management System",
        icon: "🧠",
        content: `
            <h2>🧠 Battery Management System</h2>

            <p>
                The Battery Management System monitors and
                manages battery operation.
            </p>

            <h3>Main Functions</h3>

            <ul>
                <li>Cell voltage monitoring</li>
                <li>Temperature monitoring</li>
                <li>SOC estimation</li>
                <li>SOH estimation</li>
                <li>Cell balancing</li>
                <li>Battery protection</li>
            </ul>
        `
    },


    {
        title: "State of Charge",
        icon: "📊",
        content: `
            <h2>📊 State of Charge</h2>

            <p>
                State of Charge, or SOC, represents the
                available charge in a battery relative to
                its usable capacity.
            </p>

            <div class="formula">
                SOC ≈
                Available Capacity /
                Total Usable Capacity × 100%
            </div>
        `
    },


    {
        title: "State of Health",
        icon: "❤️",
        content: `
            <h2>❤️ State of Health</h2>

            <p>
                State of Health, or SOH, indicates the
                condition of a battery compared with its
                reference condition.
            </p>

            <h3>Factors Affecting Battery Health</h3>

            <ul>
                <li>Temperature</li>
                <li>Charge/discharge cycles</li>
                <li>Charging conditions</li>
                <li>Depth of discharge</li>
                <li>Operating conditions</li>
            </ul>
        `
    },


    {
        title: "EV Inverter",
        icon: "⚡",
        content: `
            <h2>⚡ EV Inverter</h2>

            <p>
                An inverter converts electrical power from
                the battery into the form required by the
                traction motor.
            </p>

            <div class="formula">
                DC → Inverter → AC Motor
            </div>

            <h3>Functions</h3>

            <ul>
                <li>Motor power control</li>
                <li>Speed control</li>
                <li>Torque control</li>
                <li>Regenerative operation</li>
            </ul>
        `
    },


    {
        title: "EV Motors",
        icon: "⚙️",
        content: `
            <h2>⚙️ EV Motors</h2>

            <p>
                Electric motors convert electrical energy
                into mechanical energy for vehicle propulsion.
            </p>

            <h3>Common Motor Types</h3>

            <ul>
                <li>BLDC motor</li>
                <li>PMSM</li>
                <li>Induction motor</li>
                <li>DC motor in some applications</li>
            </ul>
        `
    },


    {
        title: "Regenerative Braking in EV",
        icon: "♻️",
        content: `
            <h2>♻️ Regenerative Braking in EV</h2>

            <p>
                During regenerative braking, the electric
                motor operates in a generating mode and
                converts part of the vehicle's mechanical
                energy into electrical energy.
            </p>

            <div class="formula">
                Mechanical Energy →
                Electrical Energy →
                Battery
            </div>

            <h3>Benefits</h3>

            <ul>
                <li>Energy recovery</li>
                <li>Improved efficiency</li>
                <li>Reduced brake wear in suitable conditions</li>
            </ul>
        `
    },


    {
        title: "DC-DC Converter",
        icon: "🔌",
        content: `
            <h2>🔌 DC-DC Converter</h2>

            <p>
                A DC-DC converter changes one DC voltage
                level into another DC voltage level.
            </p>

            <h3>Common Types</h3>

            <ul>
                <li>Buck converter → Step down</li>
                <li>Boost converter → Step up</li>
                <li>Buck-boost converter → Step up or down</li>
            </ul>
        `
    },


    {
        title: "EV Charging",
        icon: "🔌",
        content: `
            <h2>🔌 EV Charging</h2>

            <p>
                EV charging transfers electrical energy
                from an external source to the vehicle battery.
            </p>

            <h3>Important Concepts</h3>

            <ul>
                <li>AC charging</li>
                <li>DC charging</li>
                <li>Charging power</li>
                <li>Charging time</li>
                <li>Battery temperature</li>
                <li>Charging protection</li>
            </ul>
        `
    }

];