(function() {
  var PhoneTap, Phreak, navigator;
  if (typeof module !== "undefined" && module !== null) {
    PhoneTap = new require('phonetap').PhoneTap;
    navigator = new PhoneTap;
  } else {
    navigator = window.navigator;
  }
  Phreak = (function() {
    function Phreak() {}
    Phreak.prototype.console = {
      log: function(msg) {
        return console.winConsole.log(msg);
      },
      warn: function(msg) {
        return console.winConsole.warn(msg);
      },
      error: function(msg) {
        return console.winConsole.error(msg);
      }
    };
    Phreak.prototype.dom_ready = function(fun) {
      return document.addEventListener("DOMContentLoaded", fun);
    };
    Phreak.prototype.device_ready = function(fun) {
      return document.addEventListener("deviceready", fun);
    };
    Phreak.prototype.on = {
      back: function(fun) {
        return document.addEventListener("backbutton", fun);
      },
      menu: function(fun) {
        return document.addEventListener("menubutton", fun);
      },
      pause: function(fun) {
        return document.addEventListener("pause", fun);
      },
      resume: function(fun) {
        return document.addEventListener("resume", fun);
      },
      search: function(fun) {
        return document.addEventListener("searchbutton", fun);
      },
      online: function(fun) {
        return document.addEventListener("online", fun);
      },
      offline: function(fun) {
        return document.addEventListener("offline", fun);
      }
    };
    Phreak.prototype.connection = function() {
      return navigator.network.connection.type;
    };
    Phreak.prototype.device = {
      name: function() {
        return device.name;
      },
      phonegap: function() {
        return device.phonegap;
      },
      platform: function() {
        return device.platform;
      },
      uuid: function() {
        return device.uuid;
      },
      version: function() {
        return device.version;
      }
    };
    Phreak.prototype.contact = {
      create: function(options) {
        return navigator.contacts.create(options);
      },
      find: function(search, fields, success, error) {
        var options;
        if (error == null) {
          error = (function() {});
        }
        options = new ContactFindOptions;
        options.filter = search;
        return navigator.contacts.find(fields, (function(contacts) {
          return success.apply(contacts);
        }), (function(contact_error) {
          return error.apply(contact_error);
        }), options);
      }
    };
    Phreak.prototype.picture = {
      from_library: function(success, error, options) {
        if (error == null) {
          error = (function() {});
        }
        if (options == null) {
          options = {};
        }
        options["sourceType"] = Camera.PictureSourceType.PHOTOLIBRARY;
        return this.snap(success, error, options);
      },
      from_saved: function(success, error, options) {
        if (error == null) {
          error = (function() {});
        }
        if (options == null) {
          options = {};
        }
        options["sourceType"] = Camera.PictureSourceType.SAVEDPHOTOALBUM;
        return this.snap(success, error, options);
      },
      from_library_to_file: function(success, error, options) {
        if (error == null) {
          error = (function() {});
        }
        if (options == null) {
          options = {};
        }
        options["sourceType"] = Camera.PictureSourceType.PHOTOLIBRARY;
        options["destinationType"] = Camera.DestinationType.FILE_URI;
        return this.snap(success, error, options);
      },
      snap_to_file: function(success, error, options) {
        if (error == null) {
          error = (function() {});
        }
        if (options == null) {
          options = {};
        }
        options["destinationType"] = Camera.DestinationType.FILE_URI;
        return this.snap(success, error, options);
      },
      snap: function(success, error, options) {
        if (error == null) {
          error = (function() {});
        }
        if (options == null) {
          options = {
            quality: 50
          };
        }
        return navigator.camera.getPicture(success, error, options);
      }
    };
    Phreak.prototype.file = {};
    Phreak.prototype.geolocation = {
      current: function(success, error) {
        if (error == null) {
          error = function() {};
        }
        return navigator.geolocation.getCurrentPosition((function(location) {
          return success.apply(location);
        }), (function(location_error) {
          return error.apply(location_error);
        }));
      },
      watch: function(success, seconds, error) {
        if (error == null) {
          error = function() {};
        }
        return navigator.geolocation.watchPosition((function(location) {
          return success.apply(location);
        }), (function(location_error) {
          return error.apply(location_error);
        }), {
          frequency: seconds * 1000
        });
      },
      clear: function(watch_id) {
        return navigator.geolocation.clearWatch(watch_id);
      }
    };
    Phreak.prototype.acceleration = {
      current: function(success, error) {
        if (error == null) {
          error = function() {};
        }
        return navigator.accelerometer.getCurrentAcceleration((function(acceleration) {
          return success.apply(acceleration);
        }), (function(acceleration_error) {
          return error.apply(acceleration_error);
        }));
      },
      watch: function(success, seconds, error) {
        if (error == null) {
          error = function() {};
        }
        return navigator.accelerometer.watchAcceleration((function(acceleration) {
          return success.apply(acceleration);
        }), (function(acceleration_error) {
          return error.apply(acceleration_error);
        }), {
          frequency: seconds * 1000
        });
      },
      clear: function(watch_id) {
        return navigator.accelerometer.clearWatch(watch_id);
      }
    };
    return Phreak;
  })();
  this.$p = new Phreak;
  if (typeof module !== "undefined" && module !== null) {
    module.exports = this.$p;
  }
}).call(this);
