
  Java.perform(function(){
    console.log("[*] Hooking calls to System.exit");
    exitClass = Java.use("java.lang.System");
    exitClass.exit.implementation = function(){
      console.log("[*] System.exit called");
    }
    // Capture secret via memory
    console.log("[*] Hooking a.class");
    aclass = Java.use("sg.vantagepoint.a.a");
    aclass.a.implementation = function(arg1,arg2){
      console.log("[*] Hooking a.class");
      retval = this.a(arg1,arg2);
      secret = "";
      for(i=0;i<retval.length;i++){
        secret += String.fromCharcode(retval[i]);
      }
      console.log("secret: " + secret);
      return retval;
    }
  });
