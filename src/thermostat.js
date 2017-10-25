
const minimiumTemperature = 10;
const defaultTemperature = 20;

function Thermostat() {
  this._temperature = defaultTemperature;
  this._powerSaving = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increase = function() {
   if (this._temperature >= this.maximumTemperature())
   throw new Error ("Maximum temperature is reached");
   this._temperature += 1;
 };

Thermostat.prototype.decrease = function() {
if (this._temperature <= minimiumTemperature)
  throw new Error("Minimum temperature is 10 degrees");
  this._temperature -= 1;
};

Thermostat.prototype.changePowerSavingMode = function() {
  this._powerSaving === true ? this._powerSaving = false : this._powerSaving = true;
};

Thermostat.prototype.powerSaving = function() {
 return this._powerSaving;
};

Thermostat.prototype.maximumTemperature = function() {
  var max;
  this._powerSaving === true ? max = 25 : max = 35;
  return max;
};
