function Thermostat() {
const defaultTemperature = 20;
this._temperature = defaultTemperature;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};
