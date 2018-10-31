Java.perform(function(){

  //b=Java.use("com.scottyab.rootbeer.b");
  //b.a.overload().implementation = function(){console.log("[*] Method a hooked"); return false;}
  //b.a.overload('java.lang.String').implementation = function(){console.log("[*] Method a hooked"); return false;}
  //b.a.overload('java.util.list').implementation = function(){console.log("[*] Method a hooked"); return false;}

  loginActivity = Java.use("com.tmoney.official.LoginActivity");
  loginActivity.onBackPressed.implementation = function(){console.log("[*] OnBackPressed")}
  loginActivity.onPause.implementation = function(){console.log("[*] onPause")}
  processClass = Java.use("android.os.Process")
  processClass.killProcess.implementation = function(){console.log("[*] Kill Process")}
  processClass.myPid.implementation = function(){console.log("[*] myPid Process")}
  exitClass = Java.use("java.lang.System");
  exitClass.exit.implementation = function(){console.log("[*] System.exit called")}

/*
Yes the code after the call to finish() will be called.
when you call finish() the next function that will be executed is onPause().
If you want to close all activities on the back stack do this:
setResult(RESULT_CLOSE_ALL);
finish();
*/
  //contextClass = Java.use("android.context.Context");
  //contextClass.exit.implementation = function(){console.log("[*] System.exit called")}

})
