(this["webpackJsonpmi-primer-proyecto"]=this["webpackJsonpmi-primer-proyecto"]||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c);t(13),t(14),t(16),t(17);var o=function(){return r.a.createElement("ul",{className:"navbar-nav bg-gradient-dark sidebar sidebar-dark accordion",id:"accordionSidebar"},r.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/"},r.a.createElement("div",{className:"sidebar-brand-icon"},r.a.createElement("i",{className:"fas fa-chart-line"})),r.a.createElement("div",{className:"sidebar-brand-text mx-3"},"Mundo Parlante ")),r.a.createElement("hr",{className:"sidebar-divider my-0"}),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},r.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),r.a.createElement("span",null,"Dashboard"))),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement("div",{className:"sidebar-heading"},"Actions"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link collapsed",href:"/"},r.a.createElement("i",{className:"fas fa-fw fa-folder"}),r.a.createElement("span",null,"Pages"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},r.a.createElement("i",{className:"fas fa-fw fa-chart-area"}),r.a.createElement("span",null,"Charts"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},r.a.createElement("i",{className:"fas fa-fw fa-table"}),r.a.createElement("span",null,"Tables"))),r.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}))};var s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-black  topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"alertsDropdown"},r.a.createElement("i",{className:"fas fa-bell fa-fw"}),r.a.createElement("span",{className:"badge badge-danger badge-counter"},"3+"))),r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"messagesDropdown"},r.a.createElement("i",{className:"fas fa-envelope fa-fw"}),r.a.createElement("span",{className:"badge badge-danger badge-counter"},"7"))),r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown"},r.a.createElement("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small"},"Walter White"),r.a.createElement("img",{className:"img-profile rounded-circle",src:"assets/images/dummy-avatar.jpg",width:"60"})))))},i=t(1),m=t(2),d=t(4),u=t(3),h=t(5),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).mostrarProductos=function(e){console.log(e),t.setState({quantity:e.metadata.quantity,titulo:"Total de Productos"})},t.state={quatity:"",titulo:"Productos en la DB"},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"apiCall",value:function(e,a){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log("Me mont\xe9!!"),this.traerProductos()}},{key:"traerProductos",value:function(){this.apiCall("http://mundoparlante.herokuapp.com/api/productos",this.mostrarProductos)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4 mb-4"},r.a.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col mr-2"},r.a.createElement("div",{className:"text-xs font-weight-bold text-dark text-uppercase mb-1"},this.state.titulo),r.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},this.state.quantity)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("i",{className:"fas fa-clipboard-list fa-2x text-gray-300"}))))))}}]),a}(n.Component),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).mostrarProductos=function(e){console.log(e),t.setState({quantity:e.metadata.quantity,titulo:"Total de Usuarios"})},t.state={quantity:"",titulo:"Users total en la DB"},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"apiCall",value:function(e,a){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log("Me mont\xe9!!"),this.traerProductos()}},{key:"traerProductos",value:function(){this.apiCall("http://mundoparlante.herokuapp.com/api/users",this.mostrarProductos)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4 mb-4"},r.a.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col mr-2"},r.a.createElement("div",{className:"text-xs font-weight-bold text-dark text-uppercase mb-1"},this.state.titulo),r.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},this.state.quantity)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("i",{className:"fas fa-user-check fa-2x text-gray-300"}))))))}}]),a}(n.Component),p=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).mostrarProductos=function(e){console.log(e),t.setState({amount:e.metadata.amount,titulo:"Precio Total en la DB"})},t.state={amount:"",titulo:"Total de $$"},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"apiCall",value:function(e,a){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log("Me mont\xe9!!"),this.traerProductos()}},{key:"traerProductos",value:function(){this.apiCall("http://mundoparlante.herokuapp.com/api/productos",this.mostrarProductos)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4 mb-4"},r.a.createElement("div",{className:"card border-left-success shadow h-100 py-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col mr-2"},r.a.createElement("div",{className:"text-xs font-weight-bold text-dark text-uppercase mb-1"},this.state.titulo),r.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"$",this.state.amount)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("i",{className:"fas fa-dollar-sign fa-2x text-gray-300"}))))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).mostrarUltimoProducto=function(e){console.log(e),t.setState({id:e.data[0].id,name:e.data[0].name,price:e.data[0].price,description:e.data[0].description,image:e.data[0].image})},t.state={name:"",price:"",description:"",image:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"apiCall",value:function(e,a){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log("Me mont\xe9!!"),this.traerUltimoProducto()}},{key:"traerUltimoProducto",value:function(){this.apiCall("/productos",this.mostrarUltimoProducto)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-6 mb-4"},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"\xdaLTIMO PRODUCTO CARGADO")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:"http://mundoparlante.herokuapp.com/images/productos/".concat(this.state.image),alt:"image dummy"})),r.a.createElement("h3",null,"Nombre: ",this.state.name),r.a.createElement("p",null,"Precio: $",this.state.price),r.a.createElement("p",null,this.state.description),r.a.createElement("a",{target:"_blank",rel:"nofollow",href:"http://mundoparlante.herokuapp.com/productos/detalle/".concat(this.state.id)},"Ver detalle de Producto"))))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={title:e.title,color:"bg-success"},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"cambiarColor",value:function(){"bg-success"==this.state.color?this.setState({color:"bg-primary"}):this.setState({color:"bg-success"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-6 mb-4"},r.a.createElement("button",{onClick:function(){return e.cambiarColor()},className:"card ".concat(this.state.color," text-white btn-block shadow")},r.a.createElement("div",{className:"card-body"},this.state.title)))}}]),a}(n.Component);var g=function(e){return r.a.createElement("div",{className:"col-lg-6 mb-4"},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Categories in Data Base")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement(v,{title:"Parlantes"}),r.a.createElement(v,{title:"Subwoofer"}),r.a.createElement(v,{title:"Auriculares"}),r.a.createElement(v,{title:"Sin Stock"}),r.a.createElement(v,{title:"Vintage"}),r.a.createElement(v,{title:"Monitores"})))))};var N=function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement(o,null),r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement("div",{id:"content"},r.a.createElement(s,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},r.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},"App Dashboard")),r.a.createElement("div",{className:"row"},r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement(b,null)),r.a.createElement("div",{className:"row"},r.a.createElement(E,{title:"\xdaltimo Producto Cargado"}),r.a.createElement(g,null)))),r.a.createElement("footer",{className:"sticky-footer bg-white"},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"copyright text-center my-auto"},r.a.createElement("span",null,"Copyright \xa9 Dashboard 2020"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.99795912.chunk.js.map