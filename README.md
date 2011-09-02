# Phreak

![Phreak](http://gizmovil.com/files/2010/07/phreaking.jpg)

Phreak attemps to git a more friendly API to PhoneGap

## Example

```javascript
$p.device_ready(function(){
  $p.acceleration.current(function(){
    $("#x_coord").html(this.x);
  });
});
```

## Implemented so far

* Accelerometer x
* Camera
* Capture
* Compass
* Connection x
* Contacts
* Device x
* Events x
* File
* Geolocation x
* Media
* Notification
* Storage
