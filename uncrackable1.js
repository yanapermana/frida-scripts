setImmediate(function() { //prevent timeout
console.log("[*] Starting script");

Java.perform(function() {

a = Java.use("sg.vantagepoint.uncrackable1.MainActivity");
//console.dir(a);

//a.onClick.implementation = function(v) {
//console.log("[*] onClick called");
//}
console.log("[*] onClick handler modified")

})
})

