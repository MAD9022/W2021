(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{496:function(e,t,a){"use strict";a.r(t);var o=a(28),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"week-2-cordova-android-classes-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week-2-cordova-android-classes-env"}},[e._v("#")]),e._v(" Week 2 - Cordova Android, Classes, ENV")]),e._v(" "),a("h2",{attrs:{id:"javascript-is-a-prototype-based-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-is-a-prototype-based-language"}},[e._v("#")]),e._v(" JavaScript is a Prototype Based Language")]),e._v(" "),a("p",[e._v("You will hear a lot about "),a("code",[e._v("prototype")]),e._v(" and "),a("code",[e._v("class")]),e._v(" over the next few semesters. They are two different approaches to designing and architect software. The problem is that in your early days of programming they can seem like almost the same thing. To be fair, they are quite similar and they are two solutions that solve the same problem.")]),e._v(" "),a("p",[e._v("We will try to help you understand the differences here in simple practical terms that will let you write better JavaScript with fewer unexpected errors.")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("Class")]),e._v(" is a blueprint for building objects. It is not an object itself, just the plans for building a certain kind of object. Classes inherit properties and methods from parent classes. When you create ("),a("code",[e._v("instantiate")]),e._v(") an object from a class, the object will be given copies all the properties and methods from it's class blueprint as well as copies of all the properties and methods from all the ancestor parent classes. So, when you call an Object's method, the method actually exists inside the Object.")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("prototype")]),e._v(" is an example Object. It is an Object. Think of it as the first one built. In JavaScript, when we create an Object a constructor function is used to build the object. That function has a "),a("code",[e._v("prototype")]),e._v(" object. We can put any methods that we want to share with all the objects built with that constructor into that prototype object. We can still link our objects to parent ones but we don't copy the methods, instead, we just link to the parent's prototype. There is a chain of prototype type objects. When we create ("),a("code",[e._v("instantiate")]),e._v(") our Object, it doesn't need copies of all the methods and parent methods. If we call an Object's method and the method does not exist inside our Object, then JavaScript will look up the prototype chain for the method and delegate (borrow) the method to run.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week2/prototypes.html"}},[e._v("Learn more about Prototype")])],1),e._v(" "),a("h2",{attrs:{id:"classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[e._v("#")]),e._v(" Classes")]),e._v(" "),a("p",[e._v("JavaScript, as we have discussed, is a prototype based language, not a class based language. However, there was a keyword "),a("code",[e._v("class")]),e._v(" added to JavaScript in ES6. Along with the "),a("code",[e._v("class")]),e._v(" keyword a few other keywords were added: "),a("code",[e._v("extends")]),e._v(", "),a("code",[e._v("constructor")]),e._v(", "),a("code",[e._v("static")]),e._v(", "),a("code",[e._v("get")]),e._v(", "),a("code",[e._v("set")]),e._v(", and "),a("code",[e._v("super")]),e._v(". Many of these will be familiar to you from your OOP course.")]),e._v(" "),a("p",[e._v("It is important to remember that these words are just syntactic sugar. JavaScript is still using prototypes behind the scenes. These terms were created as a simplified syntax for creating the prototypes and the prototype chain.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week2/class.html"}},[e._v("Learn about the JavaScript Class Keyword")])],1),e._v(" "),a("h2",{attrs:{id:"this-keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-keyword"}},[e._v("#")]),e._v(" this keyword")]),e._v(" "),a("p",[e._v("The JavaScript version of the keyword "),a("code",[e._v("this")]),e._v(" works differently than in true class-based languages. In JS, it also changes what it means and how it works, depending on the context and where you use it.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week2/this.html"}},[e._v("Learn more about keyword this")])],1),e._v(" "),a("h2",{attrs:{id:"cordova-on-android-and-env-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cordova-on-android-and-env-variables"}},[e._v("#")]),e._v(" Cordova on Android and ENV variables")]),e._v(" "),a("p",[e._v("Last week we covered all the fundamentals of installing, setting up and running Cordova, as well as the iOS specific requirements for Cordova.")]),e._v(" "),a("p",[e._v("This week we will be talking about the extra steps for running Cordova for Android.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/mad-d/pen/OPPyOw",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodePen Cordova Command list"),a("OutboundLink")],1),e._v(" - this is a list of the commands that you can use to manage any Cordova project, including the iOS and Android specific tasks.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week2/android.html"}},[e._v("Learn more about the Cordova Android specifics")])],1),e._v(" "),a("p",[e._v("Last semester, in "),a("strong",[e._v("MAD9012")]),e._v(", you learned how to create and edit Environment variables through your "),a("code",[e._v("~/.zshrc")]),e._v(" file on the MacOS side and through Windows Properties on the Windows side.")]),e._v(" "),a("p",[e._v("Make sure that you update your "),a("code",[e._v("~/.zshrc")]),e._v(" file with the new PATH value for the new global install location for NPM.")]),e._v(" "),a("p",[e._v("Review the course website notes for "),a("strong",[e._v("MAD9012")]),e._v(" for more instructions on how to do this.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("TODO")]),e._v(" "),a("ul",[a("li",[e._v("Read the content and watch the videos for Week 2 and Week 3")]),e._v(" "),a("li",[e._v("Prepare for the "),a("RouterLink",{attrs:{to:"/assignments/exer/"}},[e._v("second timed exercise")])],1),e._v(" "),a("li",[e._v("Review the description for the first Cordova project.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);