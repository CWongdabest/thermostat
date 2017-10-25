describe("Thermostat settings", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('The thermostat is initialised with a temperature of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it("The thermostat's temperature could be increased", function(){
    thermostat.increase(5);
    expect(thermostat.temperature()).toEqual(25);
  });

  it("The thermostat's temperature could be decreased", function(){
    thermostat.decrease(5);
    expect(thermostat.temperature()).toEqual(15);
  });

});
