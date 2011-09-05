# Phreak

![Phreak](http://3.bp.blogspot.com/_vd0HXNLvLlY/TQN_siOjwxI/AAAAAAAAAUI/YeIgSvWm2mw/s1600/pulling-sms-from-used-phones.jpg)

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
