
exports.fromTwoPoint = (origin, destination) => {
    if (typeof (Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function () {
            return this * Math.PI / 180;
        }
    }

    decimals = 2;
    const earthRadius = 6371;

    lat1 = parseFloat(origin.lat);
    lon1 = parseFloat(origin.lng);

    lat2 = parseFloat(destination.lat);
    lon2 = parseFloat(destination.lng);

    var dLat = (lat2 - lat1).toRad();
    var dLon = (lon2 - lon1).toRad();

    var lat1 = lat1.toRad();
    var lat2 = lat2.toRad();

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = earthRadius * c;

    const trip_distance = Math.round(d * Math.pow(10, decimals)) / Math.pow(10, decimals); //distance in kilometers.
    return trip_distance
}
