$p.device_ready(function(){
  scenario("Phreak - acceleration", {
    "should get the current acceleration object": function(){
      $p.acceleration.current(function(){
        assert(typeof this.x, 'number');
        assert(typeof this.y, 'number');
        assert(typeof this.z, 'number');
      });
    },
  }, window.console.winConsole);
});
