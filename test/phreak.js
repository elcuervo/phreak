var scenario = require('gerbil');
var $p = require("../lib/phreak.js");

scenario("Phreak - geolocation", {
  "should get the current acceleration object": function(){
    $p.geolocation.current(function(){
      assert(this.coords.latitude);
      assert(this.coords.longitude);
      assert(this.coords.altitude);
      assert(this.coords.accuracy);
      assert(this.coords.altitudeAccuracy);
      assert(this.coords.heading);
      assert(this.coords.speed);
      assert(this.timestamp);
    });
  },
});

scenario("Phreak - acceleration", {
  "should get the current acceleration object": function(){
    $p.acceleration.current(function(){
      assert(typeof this.x, 'number');
      assert(typeof this.y, 'number');
      assert(typeof this.z, 'number');
    });
  },
});
