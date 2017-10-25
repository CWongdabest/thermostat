
const minimiumTemperature = 10;
const defaultTemperature = 20;
function Thermostat() {
this._temperature = defaultTemperature;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increase = function() {
  this._temperature += 1;
};

Thermostat.prototype.decrease = function() {
if (this._temperature <= minimiumTemperature)
throw new Error("Minimum temperature is 10 degrees")
  this._temperature -= 1;
};
