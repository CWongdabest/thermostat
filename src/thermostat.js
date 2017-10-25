function Thermostat() {
const defaultTemperature = 20;
this._temperature = defaultTemperature;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increase = function(celcius) {
  this._temperature += celcius;
};

Thermostat.prototype.decrease = function(celcius) {
  this._temperature -= celcius;
};
