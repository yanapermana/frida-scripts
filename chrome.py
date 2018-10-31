#!/usr/bin/python
import frida

# put your javascript-code here
jscode= """
console.log("[*] Starting script");
Java.perform(function() {
var Activity = Java.use("android.app.Activity");
Activity.onResume.implementation = function () {
console.log("[*] onResume() got called!");
this.onResume();
};

});
"""

# startup frida and attach to com.android.chrome process on a usb device
session = frida.get_usb_device().attach("com.android.chrome")

# create a script for frida of jsccode
script = session.create_script(jscode)

# and load the script
script.load()
