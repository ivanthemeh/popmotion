"use strict";

var simulations = require('./simulation-manager.js');

module.exports = function (simulation, value, duration, started) {
    var velocity = simulations[simulation](value, duration, started);
    
    return (Math.abs(velocity) >= value.stopSpeed) ? velocity : 0;
};