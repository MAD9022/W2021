(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{517:function(e,t,s){"use strict";s.r(t);var r=s(28),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cors-corb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-corb"}},[e._v("#")]),e._v(" CORS & CORB")]),e._v(" "),s("h2",{attrs:{id:"cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" CORS")]),e._v(" "),s("p",[s("code",[e._v("CORS")]),e._v(" stands for Cross-Origin Resource Sharing. It is the process that controls how files are fetched by the browser. It enforces the "),s("code",[e._v("Same-Origin policy")]),e._v(". "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read more about the Same-Origin Policy"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Simple requests for files can be made as an HTTP "),s("code",[e._v("GET")]),e._v(" or "),s("code",[e._v("POST")]),e._v(" request. "),s("code",[e._v("HEAD")]),e._v(" requests, which are just like test calls, are also considered to be simple requests. There is a limited number of headers that are considered "),s("code",[e._v("safe-listed")]),e._v(" which can be used for a simple request. See "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),s("OutboundLink")],1),e._v(" for a list of the safe-listed headers. Simple Requests are not considered to be "),s("code",[e._v("CORS")]),e._v(" requests.")]),e._v(" "),s("p",[e._v("Any request made with "),s("code",[e._v("fetch")]),e._v(" or any general request that doesn't meet the simple request requirements, is subject to the "),s("code",[e._v("CORS")]),e._v(" rules.")]),e._v(" "),s("h3",{attrs:{id:"cors-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-process"}},[e._v("#")]),e._v(" CORS Process")]),e._v(" "),s("p",[e._v("The process for "),s("code",[e._v("CORS")]),e._v(" requests is simple. If the browser decides that it needs to make a "),s("code",[e._v("CORS")]),e._v(" request then it will make an initial HTTP call with the "),s("code",[e._v("OPTION")]),e._v(" method to the URL. This is known as a "),s("code",[e._v("pre-flight")]),e._v(" request.")]),e._v(" "),s("p",[e._v("Along with the HTTP Response to the "),s("code",[e._v("OPTION")]),e._v(" request, the server needs to send a specific header.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Access-Control-Allow-Origin: *\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This "),s("code",[e._v("Access-Control-Allow-Origin")]),e._v(" header can have a value that matches a specific ip address or a wildcard asterix. If it has an exact ip address then it must match the ip address of the browser.")]),e._v(" "),s("h3",{attrs:{id:"cors-with-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-with-fetch"}},[e._v("#")]),e._v(" CORS with fetch")]),e._v(" "),s("p",[e._v("When making a "),s("code",[e._v("fetch")]),e._v(" call, the default is for the request to be made as a "),s("code",[e._v("CORS")]),e._v(" request. However, if you are making a simple fetch request to the same domain as the webpage and you are not setting a "),s("code",[e._v("content-type")]),e._v(" and not uploading a file then we can change the mode.")]),e._v(" "),s("p",[e._v("We can change the mode within the "),s("code",[e._v("Request")]),e._v(" object options.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" req "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  method"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'same-origin'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("resp")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("Now it will not make the pre-flight request for this fetch.")]),e._v(" "),s("h3",{attrs:{id:"cors-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-errors"}},[e._v("#")]),e._v(" CORS Errors")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors",target:"_blank",rel:"noopener noreferrer"}},[e._v("This MDN page"),s("OutboundLink")],1),e._v(" has a list of all the possible CORS Errors you can have.")]),e._v(" "),s("YouTube",{attrs:{title:"CORS, fetch, and AJAX",url:"https://www.youtube.com/embed/zswi0cPMxsU"}}),e._v(" "),s("h2",{attrs:{id:"corb-and-corp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#corb-and-corp"}},[e._v("#")]),e._v(" CORB and CORP")]),e._v(" "),s("p",[s("code",[e._v("CORP")]),e._v(" stands for Cross-Origin Resource Policy.")]),e._v(" "),s("p",[e._v("Cross-Origin Resource Policy is an HTTP header that lets web sites and applications opt in to protection against certain cross-origin requests (such as those issued with elements like "),s("code",[e._v("<script>")]),e._v(" and "),s("code",[e._v("<img>")]),e._v("), to mitigate speculative side-channel attacks as well as Cross-Site Script Inclusion attacks.")]),e._v(" "),s("p",[s("code",[e._v("CORB")]),e._v(" stands for Cross-Origin Read Blocking.")]),e._v(" "),s("p",[e._v("Cross-Origin Read Blocking works in conjunction with requests that bring back resources which need to be read into memory in the browser. If the browser sees a resource coming from a different domain, and the resource needs to be read into memory in the browser then the browser can choose to block that load.")]),e._v(" "),s("p",[s("code",[e._v("<iframe>")]),e._v(", "),s("code",[e._v("<object>")]),e._v(", and "),s("code",[e._v("<embed>")]),e._v(" elements are exempt from "),s("code",[e._v("CORB")]),e._v(" restrictions.")]),e._v(" "),s("p",[e._v("In general, the restrictions in "),s("code",[e._v("CORB")]),e._v(" apply when loading a document that has a mime-type of "),s("code",[e._v("text/html")]),e._v(", "),s("code",[e._v("application/json")]),e._v(", "),s("code",[e._v("text/plain")]),e._v(", "),s("code",[e._v("text/xml")]),e._v(", or "),s("code",[e._v("application/xml")]),e._v(".")]),e._v(" "),s("p",[e._v("For a full explanation of the protections created with "),s("code",[e._v("CORB")]),e._v(" you can "),s("a",{attrs:{href:"https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("read this page"),s("OutboundLink")],1),e._v(". Alternatively, "),s("a",{attrs:{href:"https://www.chromium.org/Home/chromium-security/corb-for-developers",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),s("OutboundLink")],1),e._v(" has a shorter explanation with a video.")]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN CORS reference"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN pre-flight request reference"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Same-Origin Policy"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://web.dev/same-origin-policy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web.Dev Same-Origin Policy"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/modules/week6/"}},[e._v("Return to week home")])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);