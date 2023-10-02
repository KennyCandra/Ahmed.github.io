/*
Hello Yaakov
*/

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (i=0; i<names.length; i++) {
  var name = names[i];
  var firstLetter = name.charAt(0).toUpperCase();
  if (firstLetter === "J") {
    byeSpeaker.sayGoodBye(name)
  } else {
     helloSpeaker.sayHello(name)
  }
}