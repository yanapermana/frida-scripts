import frida, sys
 
def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)
 
 
PACKAGE_NAME = "owasp.mstg.uncrackable1"
 
 
jscode= """
console.log("[*] Starting script");
    Java.perform(function() {
    
        console.log("[*] Hooking System.exit");
        exitClass = Java.use("java.lang.System");
        exitClass.exit.implementation = function() {
            console.log("[*] System.exit called");
        }
        
        console.log("[*] Hooking a.class");
        aclass = Java.use("sg.vantagepoint.a.a");
        aclass.a.implementation = function(arg1,arg2){
            console.log("[*]Hooking a.Class");
            retval = this.a(arg1, arg2);
            secret='';
            for(i=0;i<retval.length;i++){
                secret+=String.fromCharCode(retval[i]);
            }
            console.log("Secret:"+secret);
            return retval;
        }
      
    });
"""
try:
    process = frida.get_usb_device().attach(PACKAGE_NAME)
    script = process.create_script(jscode)
    script.on('message', on_message)
    print('[*] Running Hook')
    script.load()
    sys.stdin.read()
except Exception as e:
    print(e)
