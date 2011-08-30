# Checklist
#
# Accelerometer x
# Camera
# Capture
# Compass
# Connection x
# Contacts
# Device x
# Events x
# File
# Geolocation x
# Media
# Notification
# Storage

class Phreak
  console: {
    messages: []
    log: (msg) -> this.messages.push("[LOG] #{msg}")
  }

  # Events
  dom_ready: (fun) ->
    document.addEventListener("DOMContentLoaded", fun)

  device_ready: (fun) ->
    document.addEventListener("deviceready", fun)

  on: {
    back:     (fun) -> document.addEventListener("backbutton", fun)
    menu:     (fun) -> document.addEventListener("menubutton", fun)
    pause:    (fun) -> document.addEventListener("pause", fun)
    resume:   (fun) -> document.addEventListener("resume", fun)
    search:   (fun) -> document.addEventListener("searchbutton", fun)
    online:   (fun) -> document.addEventListener("online", fun)
    offline:  (fun) -> document.addEventListener("offline", fun)
  }

  connection: ->
    navigator.network.connection.type

  device: {
    name: ->      device.name
    phonegap: ->  device.phonegap
    platform: ->  device.platform
    uuid: ->      device.uuid
    version: ->   device.version
  }

  contact: {
    create: (options) ->
      navigator.contacts.create options
  }

  picture: {
    from_library: (success, error = (->), options = {}) ->
      options["sourceType"] = Camera.PictureSourceType.PHOTOLIBRARY
      this.snap(success, error, options)

    from_saved: (success, error = (->), options = {}) ->
      options["sourceType"] = Camera.PictureSourceType.SAVEDPHOTOALBUM
      this.snap(success, error, options)

    from_library_to_file: (success, error = (->), options = {}) ->
      options["sourceType"] = Camera.PictureSourceType.PHOTOLIBRARY
      options["destinationType"] = Camera.DestinationType.FILE_URI
      this.snap(success, error, options)

    snap_to_file: (success, error = (->), options = {}) ->
      options["destinationType"] = Camera.DestinationType.FILE_URI
      this.snap(success, error, options)

    snap: (success, error = (->), options = {}) ->
      navigator.camera.getPicture(success, error, options)
  }

  file: {
  }

  # Geolocation
  geolocation: {
    # Gets the current position and return this with:
    # this.coords.latitude
    # this.coords.longitude
    # this.coords.altitude
    # this.coords.accuracy
    # this.coords.altitudeAccuracy
    # this.coords.heading
    # this.coords.speed
    # this.latitude
    current: (success, error = ->) ->
      navigator.geolocation.getCurrentPosition(
        ((location) -> success.apply(location)),
        ((location_error) -> error.apply(location_error))
      )

    # Idem to current but returns an id to future clear
    watch: (success, seconds, error = ->) ->
      navigator.geolocation.watchPosition(
          ((acceleration) -> success.apply(acceleration)),
          ((acceleration_error) -> error.apply(acceleration_error))
          {frequency: seconds*1000}
        )

    # Clears a watched id
    clear: (watch_id) -> navigator.geolocation.clearWatch(watch_id)
  }

  # Accelerometer
  accelerometer: {
    # Executes success and send an acceleration object as param
    current: (success, error = ->) ->
      navigator.accelerometer.getCurrentAcceleration(
        ((acceleration) -> success.apply(acceleration)),
        ((acceleration_error) -> error.apply(acceleration_error))
      )

    # Returns the watchID
    watch: (success, seconds, error = ->) ->
      navigator.accelerometer.watchAcceleration(
        ((acceleration) -> success.apply(acceleration)),
        ((acceleration_error) -> error.apply(acceleration_error))
        {frequency: seconds*1000}
      )

    # Clears a given watch id
    clear: (watch_id) -> navigator.accelerometer.clearWatch(watch_id)
  }

@$p = new Phreak
