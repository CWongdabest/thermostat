describe("Thermostat settings", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('The thermostat is initialised with a temperature of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it("The thermostat's temperature could be increased", function(){
    thermostat.increase();
    expect(thermostat.temperature()).toEqual(21);
  });

  it("The thermostat's temperature could be decreased", function(){
    thermostat.decrease();
    expect(thermostat.temperature()).toEqual(19);
  });

  it("Has a minimum temperature of 10 and throws an error if reached", function(){
    for (i = 1; i <= 10; i++){
    thermostat.decrease();}
    expect(function(){thermostat.decrease();}).toThrow(new Error("Minimum temperature is 10 degrees"));
  });

});
