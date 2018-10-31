Java.perform(function(){
  Java.enumerateLoadedClasses({
    "onMatch":function(className){
      var str = JSON.stringify(className)
      if (str.startsWith('"sg.vantagepoint')){
        console.log(str) 
      }
    },
    "onComplete":function(){}
  })
})
