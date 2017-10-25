function Thermostat() {
const defaultTemperature = 20;
this._temperature = defaultTemperature;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increase = function() {
  this._temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this._temperature -= 1;
};
