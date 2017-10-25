describe("Thermostat settings", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('The thermostat is initialised with a temperature of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });
});
