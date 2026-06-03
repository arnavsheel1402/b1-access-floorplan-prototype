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

    "Conference Room": {
        desks: "3 Rooms",
        status: "Available",
        capacity: "Capacity: 20 People",
        amenities: "Projector • TV • Whiteboard"
    }

};

function showZone(name) {

    const zone = zones[name];

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