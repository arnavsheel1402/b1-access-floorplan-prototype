let selectedZone = "";
const zones = {

    "Open Bay 05": {
        desks: "102 Desks",
        status: "Available",
        capacity: "Capacity: 102",
        amenities: "WiFi • Power • AC • Open Workspace"
    },

    "Open Bay 08": {
        desks: "138 Desks",
        status: "Available",
        capacity: "Capacity: 138",
        amenities: "WiFi • Power • AC • Open Workspace"
    },

    "Open Bay 09": {
    desks: "81 Desks",
    status: "Available",
    capacity: "Capacity: 81",
    amenities: "WiFi • Power • AC • Open Workspace"
},

    "Conference Room": {
        desks: "3 Rooms",
        status: "Available",
        capacity: "Capacity: 20 People",
        amenities: "Projector • TV • Whiteboard"
    }

};

function showZone(name) {

    const zone = zones[name];
    selectedZone = name;

    document.getElementById("zoneTitle").innerText = name;

    document.getElementById("zoneDesks").innerText =
        zone.desks;

    document.getElementById("zoneStatus").innerText =
        "Status: " + zone.status;

    document.getElementById("zoneCapacity").innerText =
        zone.capacity;

    document.getElementById("zoneAmenities").innerText =
        zone.amenities;

}
function bookZone() {

    document.querySelector(".info-panel").innerHTML = `

        <h2>Book ${selectedZone}</h2>
        <label>Date</label><br>
        <input type="date"><br><br>

        <label>Start Time</label><br>
        <input type="time"><br><br>

        <label>Duration</label><br>
        <select>
            <option>1 Hour</option>
            <option>2 Hours</option>
            <option>4 Hours</option>
            <option>Full Day</option>
        </select><br><br>

        <button onclick="confirmBooking()">
            Continue
        </button>

    `;
}
function confirmBooking() {

    const date =
        document.querySelector('input[type="date"]').value;

    const time =
        document.querySelector('input[type="time"]').value;

    const duration =
        document.querySelector('select').value;

    document.querySelector(".info-panel").innerHTML = `

        <h2>Booking Summary</h2>

        <p><strong>Zone:</strong> ${selectedZone}</p>

        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Time:</strong> ${time}</p>

        <p><strong>Duration:</strong> ${duration}</p>

        <hr>

        <h3>Estimated Cost: ₹499</h3>

        <button onclick="proceedPayment()">
            Proceed to Payment
        </button>

    `;
}
function proceedPayment() {
    alert("Redirecting to Razorpay...");
}
