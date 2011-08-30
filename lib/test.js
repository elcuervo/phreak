$p.device_ready(function(){
  $p.picture.from_library_to_file(function(data){
    $p.console.log(data)
  });
});
