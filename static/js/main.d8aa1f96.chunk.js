(this["webpackJsonpcoro-nah"]=this["webpackJsonpcoro-nah"]||[]).push([[0],{20:function(t,e,a){t.exports=a(30)},25:function(t,e,a){},26:function(t,e,a){},30:function(t,e,a){"use strict";a.r(e);var s=a(3),i=a.n(s),n=a(18),l=a.n(n),o=(a(25),a(5)),u=a(4),d=a(7),c=a(6),r=a(8),g=(a(26),a(14)),h=[{state:"Wyoming",cases:"None",latitude:43.07597,longitude:-107.290283},{state:"West Virginia",cases:"None",latitude:39,longitude:-80.5},{state:"Washington",cases:267,latitude:47.751076,longitude:-120.740135},{state:"Texas",cases:15,latitude:31,longitude:-100},{state:"Pennsylvania",cases:12,latitude:41.203323,longitude:-77.194527},{state:"Virginia",cases:8,latitude:37.926868,longitude:-78.024902},{state:"North Dakota",cases:"None",latitude:47.650589,longitude:-100.437012},{state:"Wisconsin",cases:"1 to 5",latitude:44.5,longitude:-89.5},{state:"New York",cases:173,latitude:43,longitude:-75},{state:"Oregon",cases:15,latitude:44,longitude:-120.5},{state:"New Mexico",cases:"None",latitude:34.307144,longitude:-106.018066},{state:"New Jersey",cases:15,latitude:39.833851,longitude:-74.871826},{state:"South Carolina",cases:9,latitude:33.836082,longitude:-81.163727},{state:"Tennessee",cases:7,latitude:35.860119,longitude:-86.660156},{state:"Montana",cases:"None",latitude:46.96526,longitude:-109.533691},{state:"Mississippi",cases:"None",latitude:33,longitude:-90},{state:"Ohio",cases:"1 to 5",latitude:40.367474,longitude:-82.996216},{state:"New Hampshire",cases:"1 to 5",latitude:44,longitude:-71.5},{state:"Nevada",cases:"1 to 5",latitude:39.876019,longitude:-117.224121},{state:"Nebraska",cases:"1 to 5",latitude:41.5,longitude:-100},{state:"Massachusetts",cases:91,latitude:42.407211,longitude:-71.382439},{state:"Maine",cases:"None",latitude:45.367584,longitude:-68.972168},{state:"Illinois",cases:19,latitude:40,longitude:-89},{state:"Maryland",cases:9,latitude:39.045753,longitude:-76.641273},{state:"North Carolina",cases:7,latitude:35.782169,longitude:-80.793457},{state:"Idaho",cases:"None",latitude:44.068203,longitude:-114.742043},{state:"Delaware",cases:"None",latitude:39,longitude:-75.5},{state:"Vermont",cases:"1 to 5",latitude:44,longitude:-72.699997},{state:"Utah",cases:"1 to 5",latitude:39.41922,longitude:-111.950684},{state:"South Dakota",cases:"1 to 5",latitude:44.5,longitude:-100},{state:"Rhode Island",cases:"1 to 5",latitude:41.700001,longitude:-71.5},{state:"Oklahoma",cases:"1 to 5",latitude:36.084621,longitude:-96.921387},{state:"Missouri",cases:"1 to 5",latitude:38.573936,longitude:-92.60376},{state:"Minnesota",cases:"1 to 5",latitude:46.39241,longitude:-94.63623},{state:"Michigan",cases:"1 to 5",latitude:44.182205,longitude:-84.506836},{state:"Louisiana",cases:"1 to 5",latitude:30.39183,longitude:-92.329102},{state:"Kentucky",cases:"1 to 5",latitude:37.839333,longitude:-84.27002},{state:"Kansas",cases:"1 to 5",latitude:38.5,longitude:-98},{state:"Indiana",cases:"1 to 5",latitude:40.273502,longitude:-86.126976},{state:"Hawaii",cases:"1 to 5",latitude:19.741755,longitude:-155.844437},{state:"Connecticut",cases:"1 to 5",latitude:41.599998,longitude:-72.699997},{state:"California",cases:152,latitude:36.778259,longitude:-119.417931},{state:"Georgia",cases:23,latitude:33.247875,longitude:-83.441162},{state:"Florida",cases:19,latitude:27.994402,longitude:-81.760254},{state:"Colorado",cases:17,latitude:39.113014,longitude:-105.358887},{state:"Iowa",cases:13,latitude:42.032974,longitude:-93.581543},{state:"Arkansas",cases:"None",latitude:34.799999,longitude:-92.199997},{state:"Arizona",cases:8,latitude:34.048927,longitude:-111.093735},{state:"Alaska",cases:"None",latitude:66.160507,longitude:-153.369141},{state:"Alabama",cases:"None",latitude:32.31823,longitude:-86.902298}],m=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(d.a)(this,Object(c.a)(e).call(this,t))).state={data:h,newYork:["New York","2020-03-10T17:13:27",173,0,0,42.1657,-74.9481],viewport:{latitude:39.381266,longitude:-97.922211,width:"100vw",height:"100vw",zoom:3},selectedState:null},a}return Object(r.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.state.data;console.log("DATA",e);var a=new Date(this.state.newYork[1]);return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("nav",null),i.a.createElement("h1",null,"Coro...NAH.."),i.a.createElement("img",{src:"https://thumbs.gfycat.com/PinkBraveCobra-size_restricted.gif",alt:""}),i.a.createElement("h3",null,this.state.newYork[0]," as of ",a.toDateString()),i.a.createElement("ul",null,i.a.createElement("li",null,"Confirmed: ",this.state.newYork[2]),i.a.createElement("li",null,"Deaths: ",this.state.newYork[3]),i.a.createElement("li",null,"Recovered: ",this.state.newYork[4])),i.a.createElement("div",{className:"App-header",id:"map"},i.a.createElement(g.c,Object.assign({},this.state.viewport,{mapboxApiAccessToken:"pk.eyJ1Ijoia2ttYXJ0aW5lejk1IiwiYSI6ImNrN25wOHh5MTAwd3czc25pOXplYnpkazMifQ.8lB9XIkOiTxH3PUadXUVdg",mapStyle:"mapbox://styles/kkmartinez95/ck7npqtrh0cef1ir1ir9opgk8",onViewportChange:function(e){t.setState({viewport:e})}}),e.map((function(e,a){return i.a.createElement(g.a,{key:a,latitude:e.latitude,longitude:e.longitude},i.a.createElement("button",{className:"sick",onClick:function(a){a.preventDefault(),t.setState({selectedState:e})}},i.a.createElement("img",{src:"./sick.png"})))})),this.state.selectedState?i.a.createElement(g.b,{latitude:this.state.selectedState.latitude,longitude:this.state.selectedState.longitude,onClose:function(){t.setState({selectedState:null})}},i.a.createElement("div",null,i.a.createElement("h2",null,this.state.selectedState.state),i.a.createElement("p",null,"Cases: ",this.state.selectedState.cases," "))):null))))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d8aa1f96.chunk.js.map