(this.webpackJsonpsmilemakers=this.webpackJsonpsmilemakers||[]).push([[0],{33:function(e,s,a){},36:function(e,s,a){},37:function(e,s,a){},60:function(e,s,a){},66:function(e,s,a){},67:function(e,s,a){},70:function(e,s,a){},71:function(e,s,a){},72:function(e,s,a){},73:function(e,s,a){},74:function(e,s,a){},79:function(e,s,a){},80:function(e,s,a){},82:function(e,s,a){"use strict";a.r(s);var c=a(1),t=a.n(c),i=a(23),n=a.n(i),l=(a(33),a(7)),o=(a(34),a(35),a(36),a(37),a(38),a(59),a(24)),r=a.n(o),d=a(5),j=a(4),m=a.n(j),b=(a(60),a(0)),u=function(){var e=Object(c.useState)(),s=Object(l.a)(e,2),a=(s[0],s[1]);function t(){var e=document.querySelector(".site-navbar"),s=window.scrollY;e.style.backgroundColor="rgb(255 255 255 / ".concat(1.5*s/700,")"),e.style.boxShadow="4px 0 20px -5px rgba(0, 0, 0, ".concat(s/700,")")}function i(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(s){var a;"#"===e.hash.charAt(0)&&(s.preventDefault(),null===(a=document.querySelector(e.hash))||void 0===a||a.scrollIntoView(),window.innerWidth<1200&&(document.querySelector("body").classList.contains("offcanvas-menu")?document.querySelector("body").classList.add("offcanvas-menu"):document.querySelector("body").classList.remove("offcanvas-menu")))}))}))}return Object(c.useEffect)((function(){return a(window.innerWidth),window.addEventListener("scroll",t),function(){m()(".js-clone-nav").each((function(){m()(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}));var e=0;m()(".site-mobile-menu .has-children").each((function(){var s=m()(this);s.prepend('<span className="arrow-collapse collapsed">'),s.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+e}),s.find("> ul").attr({class:"collapse",id:"collapseItem"+e}),e++})),m()("body").on("click",".arrow-collapse",(function(e){var s=m()(this);s.closest("li").find(".collapse").hasClass("show")?s.removeClass("active"):s.addClass("active"),e.preventDefault()})),m()(window).resize((function(){m()(this).width()>768&&m()("body").hasClass("offcanvas-menu")&&m()("body").removeClass("offcanvas-menu")})),m()("body").on("click",".js-menu-toggle",(function(e){var s=m()(this);e.preventDefault(),m()("body").hasClass("offcanvas-menu")?(m()("body").removeClass("offcanvas-menu"),s.removeClass("active")):(m()("body").addClass("offcanvas-menu"),s.addClass("active"))})),m()(document).mouseup((function(e){var s=m()(".site-mobile-menu");s.is(e.target)||0!==s.has(e.target).length||m()("body").hasClass("offcanvas-menu")&&m()("body").removeClass("offcanvas-menu")}))}(),i(),function(){window.removeEventListener("scroll",t)}}),[]),Object(b.jsx)("div",{className:"site-navbar-wrap",children:Object(b.jsx)("div",{className:"site-navbar fixed-top",children:Object(b.jsx)("div",{className:"container py-1",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("div",{className:"site-logo",children:Object(b.jsx)("img",{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},src:"".concat("/smilemakers","/images/logo.png"),alt:"logo brand smilemakers"})})}),Object(b.jsx)("div",{className:"col-10",children:Object(b.jsx)("nav",{className:"site-navigation text-end",role:"navigation",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"d-inline-block d-xl-none ms-md-0 me-auto py-3",children:Object(b.jsx)(d.b,{to:"#",className:"site-menu-toggle js-menu-toggle text-white",children:Object(b.jsx)("span",{className:"icon-menu fs-1"})})}),Object(b.jsxs)("ul",{className:"site-menu js-clone-nav d-none d-xl-block",children:[Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"#alineadores",children:"Alineadores"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"#tratamiento",children:"Tratamiento"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"#beneficios",children:"Beneficios"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"#encontranos",children:"Solicitar Turno"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"#odontologo",children:"Soy Odontologo"})})]})]})})})]})})})})},h=(a(66),function(){return window.addEventListener("scroll",(function(){m()(window).scrollTop()>368?(m()("#flotante").show("slow"),m()("#flotante").removeClass("d-none")):m()("#flotante").hide("slow")})),Object(b.jsx)("a",{id:"flotante",className:"d-none",href:"https://api.whatsapp.com/send/?phone=5491124004005",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"39",height:"39",viewBox:"0 0 39 39",children:[Object(b.jsx)("path",{fill:"rgb(131, 199, 211, 0.8)",d:"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"}),Object(b.jsx)("path",{fill:"#FFF",d:"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"})]})})}),p=(a(67),[{q:"\xbfQui\xe9nes pueden utilizar Alineadores Invisibles?",r:["Hoy en d\xeda el 90 % de los problemas de alineaci\xf3n dentaria pueden ser resueltos mediante ortodoncia invisible. Los alineadores realizan fuerzas digitalmente calculadas y de baja intensidad ideales para corregir cualquier tipo de caso.","Existen algunos casos en los cuales no se puede utilizar ortodoncia invisible:","* Pacientes con problemas periodontales, los cuales deber\xe1n tratar esta afecci\xf3n para poder utilizarlos.","* Pacientes con perdida \xf3sea.","* Pacientes con reabsorciones de ra\xedces.","Siempre es ideal tener una consulta con el ortodoncista, ya que muchos de los problemas por los cuales no se pueden utilizar alineadores son modificables."]},{q:"\xbfQu\xe9 ocurre si se rompe alguno de mis Alineadores?",r:["Como en todo tratamiento es importante seguir las recomendaciones del ortodoncista debido a que las placas podri\u0301an romperse por mal uso.","En estos casos comun\xedcate de inmediato con nosotros para que hagamos la reposici\xf3n ra\u0301pidamente."]},{q:"\xbfC\xf3mo limpiar tus Alienadores Invisibles?",r:["Es fundamental el cepillado diario tus alineadores SMILE MAKERS, lo ideal ser\xeda dos veces al di\u0301a. Adem\xe1s recomendamos utilizar las pastillas efervescentes de corega, sumergi\xe9ndolos de 2 a 3 minutos diariamente o di\u0301a por medio.","Los alineadores pueden mancharse pues absorben la pigmentacio\u0301n de las comidas y bebidas que consumimos a diario. Cua\u0301nto se manchen va a depender de los ha\u0301bitos alimenticios de cada persona. Bebidas como vino, cafe\u0301, mate, tienden a mancharlos, asi\u0301 como tambie\u0301n el cigarrillo.","Sin embargo, la utilizacio\u0301n de las placas protegera\u0301n el esmalte de tus dientes de la accio\u0301n nociva de e\u0301stos productos. Por este motivo es tan importante que higienices tus alineadores SMILE MAKERS a diario y con los productos recomendados.","De esta forma tus alineadores se van a ver siempre limpios y translucidos."]},{q:"\xbfEs un tratamiento doloroso?",r:["Los alineadores invisibles SMILE MAKERS no modifican el habla, puede ser que el primer d\xeda de uso sientas alguna diferencia pero pasado este tiempo no vas a sentir que los llevas puestos.","Al ser un tratamiento donde hay un movimiento progresivo de tus dientes, puede ser que sientas un leve dolor cada vez que cambiemos tus placas, que se va a disipar cuando estos se adapten al nuevo alineador."]},{q:"\xbfCu\xe1nto tiempo debo utilizar cada alineador?",r:["Son super co\u0301modos, esta\u0301n confeccionados con materiales flexibles de excelente calidad.","Podes usarlos todo el d\xeda, solo deber\xe1s quit\xe1rtelos para comer o cepillarte los dientes."]},{q:"\xbfCada cu\xe1nto tiempo debo cambiar los alineadores?",r:["Los alineadores invisibles SMILE MAKERS se cambian cada 20 d\xedas. No es necesario que el cambio se realice siempre en consultorio.","Dependiendo del caso, podemos entregarte algunas placas para que vos lo hagas en tu casa en la fecha pactada con el ortodoncista. Esto es una gran ventaja ya que podes irte de viaje y no retrasar el tiempo del tratamiento."]},{q:"\xbfQu\xe9 incluye el Kit Inicial?",r:["Con la entrega de tus primeros alineadores SMILE MAKERS vamos a entregarte:","- Un neceser","- Pastillas blanqueadoras Corega para que puedas limpiarlos,","- Un cepillo de dientes @merakisustentable que son un \ud83d\udcaf,","- Estuche para que puedas guardarlos cuando no los estes usando,","- Pasta dental,","- Elemento para quitar tus placas con mayor facilidad,","- Alcohol en aerosol para que lo lleves a todos lados y siempre que te los quites est\xe9s seguro de que tenes las manos desinfectadas."]}]),x=function(){var e=Object(c.useState)([]),s=Object(l.a)(e,2),a=s[0],t=s[1];return Object(c.useEffect)((function(){t(p)}),[]),Object(b.jsx)("div",{className:"site-section site-block-3",id:"faq",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsx)("div",{className:"row mb-5 justify-content-center",children:Object(b.jsx)("div",{className:"col-md-6 text-center",children:Object(b.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Consultas ",Object(b.jsx)("strong",{children:"Frecuentes"})]})})}),Object(b.jsx)("div",{className:"col-lg-10",children:Object(b.jsx)("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:a.map((function(e,s){return Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("h2",{className:"accordion-header",id:"flush-heading".concat(s),children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapse".concat(s),"aria-expanded":"false","aria-controls":"flush-collapse".concat(s),children:e.q})}),Object(b.jsx)("div",{id:"flush-collapse".concat(s),className:"accordion-collapse collapse","aria-labelledby":"flush-heading".concat(s),"data-bs-parent":"#accordionFlushExample",children:Object(b.jsx)("div",{className:"accordion-body",children:e.r.map((function(e){return Object(b.jsx)("p",{className:"text-black-opacity-5",children:e},s*Math.random())}))})})]},s*Math.random())}))})})]})})})},O=a(8),v=(a(70),function(){var e=Object(c.useState)(),s=Object(l.a)(e,2),a=s[0],t=s[1],i="".concat("/smilemakers","/images/bracesSmiling.jpg");return Object(c.useEffect)((function(){var e="mp4:".concat("/smilemakers","/video/presentacion.mp4");Object(O.jarallaxVideo)(),Object(O.jarallax)(document.querySelectorAll(".jarallax-braces"),{speed:.2,videoSrc:e,type:"opacity",videoEndTime:16.5,disableVideo:/iPad|iPhone|iPod/}),t(window.innerWidth),window.addEventListener("resize",(function(){t(window.innerWidth)}))}),[]),Object(b.jsx)("div",{id:"alineadores",className:"site-section site-block-braces",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row pb-3",children:[Object(b.jsx)("div",{className:"col-lg-6 mb-5 order-1 order-lg-1",children:Object(b.jsxs)("div",{className:"ps-lg-5 ms-lg-5",children:[Object(b.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Alineadores ",Object(b.jsx)("strong",{children:"Invisibles"})," SM",Object(b.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})]}),Object(b.jsxs)("p",{className:"lead text-black",children:["Los alineadores invisibles ",Object(b.jsxs)("b",{children:["SMILE MAKERS",Object(b.jsx)("span",{style:{fontSize:"0.7rem",verticalAlign:"text-top"},children:"\xae"})]})," son placas",Object(b.jsx)("strong",{children:" transparentes"})," que funcionan alineando progresivamente tus dientes para ayudarte a lucir una sonrisa perfecta."]}),Object(b.jsxs)("p",{className:"",children:["Son ",Object(b.jsx)("strong",{children:"removibles"}),", pod\xe9s usarlas todo el dia excepto para comer y cepillar tus dientes."]}),Object(b.jsx)("p",{className:"",children:"Pod\xe9s realizar ejercicio, hablar, besar y no vas a sentir que los llevas puestos."})]})}),Object(b.jsxs)("div",{className:"col-lg-6 order-2 order-lg-2 mb-5 d-flex justify-content-center",style:{height:"".concat(a<992?"60vh":""),borderRadius:"0.25rem"},children:[Object(b.jsx)("div",{className:"nk-awb-overlay",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%",zIndex:"100",width:"0%",borderRadius:"0.25rem"}}),Object(b.jsx)("div",{className:"jarallax-braces",style:{height:"".concat(a<992?"100%":"120%"),width:"".concat(a<992?"100%":"70%"),boxShadow:"0 10px 50px -5px #00000066",backgroundImage:"url(".concat(i,")"),borderRadius:"0.25rem"}})]})]}),Object(b.jsxs)("div",{className:"row pt-5",children:[Object(b.jsxs)("h3",{className:"site-heading text-black mb-5",style:{fontSize:"1.8rem"},children:["Obtenelos en ",Object(b.jsx)("strong",{children:"3 pasos"})]}),Object(b.jsx)("div",{className:"col-lg-4","data-aos":"fade-up","data-aos-delay":"","data-aos-anchor-placement":"top-bottom",children:Object(b.jsxs)("div",{className:"process p-3",children:[Object(b.jsx)("span",{className:"number",children:"01"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"flaticon flaticon-silla-dentista display-4 mb-4 d-inline-block"}),Object(b.jsx)("h3",{children:"Diagn\xf3stico y Escaneo"}),Object(b.jsx)("p",{children:"En la primera consulta realizaremos los controles iniciales y te solicitaremos los estudios pertinentes para realizar un diagn\xf3stico preciso del caso, lo que permitir\xe1 determinar la complejidad y el valor final del tratamiento."}),Object(b.jsx)("p",{children:"Luego realizaremos un escaneo intraoral para obtener un modelo digital 3D de tu boca."})]})]})}),Object(b.jsx)("div",{className:"col-lg-4","data-aos":"fade-up","data-aos-delay":"100",children:Object(b.jsxs)("div",{className:"process p-3",children:[Object(b.jsx)("span",{className:"number",children:"02"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"flaticon flaticon-escanear display-4 mb-4 d-inline-block"}),Object(b.jsx)("h3",{children:"Dise\xf1o 3D"}),Object(b.jsx)("p",{children:"A partir del modelo digital obtenido dise\xf1aremos tu sonrisa mediante un software de precision, donde replicaremos los diferentes estad\xedos en los que va a evolucionar tu boca a medida que cambies los alineadores."}),Object(b.jsx)("p",{children:"A trav\xe9s de impresoras 3D, obtendremos las piezas que se utilizaran para moldear cada alineador."})]})]})}),Object(b.jsx)("div",{className:"col-lg-4","data-aos":"fade-up","data-aos-delay":"200",children:Object(b.jsxs)("div",{className:"process p-3",children:[Object(b.jsx)("span",{className:"number",children:"03"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"flaticon flaticon-ortodoncia display-4 mb-4 d-inline-block",style:{display:"inline"}}),Object(b.jsxs)("h3",{children:["Alineadores SM",Object(b.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})]}),Object(b.jsxs)("p",{children:["Finalmente te entregaremos el ",Object(b.jsx)("strong",{children:" Kit Inicial "}),"de alineadores SM",Object(b.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})," y programaremos el calendario con futuras citas para los sucesivos cambios de las placas."]}),Object(b.jsx)("p",{children:"\xa1 Queremos verte sonreir y vamos a hacer todo lo posible para lograrlo !"})]})]})})]})]})})}),f=(a(71),function(){return Object(b.jsx)("div",{className:"site-section site-block-benefits",id:"beneficios",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row mb-5 justify-content-center",children:Object(b.jsx)("div",{className:"col-md-6 text-center",children:Object(b.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Beneficios ",Object(b.jsx)("strong",{children:" M\xe9todo "}),"SM",Object(b.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})]})})}),Object(b.jsx)("div",{className:"row",children:[{title:"eficacia",icon:"flaticon-cheque",info:"Hoy en d\xeda el 90 % de los problemas de alineacion dentaria pueden ser resueltos mediante ortodoncia invisible."},{title:"est\xe9tica",icon:"flaticon-ojo-1",info:"Son totalmente imperceptibles, nadie notar\xe1 que los llevas puestos."},{title:"comodidad",icon:"flaticon-actualizar-2",info:"Al ajustarse perfectamente a tus dientes permiten realizar tus actividades diarias sin complicaciones. Solo te los quitar\xe1s para comer o cepillar tus dientes."},{title:"higiene",icon:"flaticon-cepillo-de-dientes",info:"Al ser posible extraer facilmente los alineadores permite realizar una higiene bucodental m\xe1s precisa."},{title:"flexibilidad",icon:"flaticon-equipaje",info:"No es necesario que el cambio se realice siempre en consultorio. Dependiendo del caso, podr\xe1s realizar el cambio de las placas por tu cuenta en la fecha pactada con el ortodoncista."},{title:"rapidez",icon:"flaticon-calendario",info:"Reduce los tiempos respecto al tratamiento de ortodoncia tradicional."}].map((function(e,s){return Object(b.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(b.jsxs)("div",{className:"site-block-feature-2 d-flex rounded mb-5",children:[Object(b.jsx)("div",{className:"me-3",children:Object(b.jsx)("i",{"data-aos":"zoom-in","data-aos-duration":"2000",className:"flaticon ".concat(e.icon," fw-light fs-2")})}),Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{children:e.info})]})]})},s+e.title)}))})]})})}),g=(a(72),function(){var e="".concat("/smilemakers","/images/colocacion.jpg");return Object(c.useEffect)((function(){var e="mp4:".concat("/smilemakers","/video/escaneo.mp4");Object(O.jarallaxVideo)(),Object(O.jarallax)(document.querySelectorAll(".jarallax"),{speed:.2,videoSrc:e,type:"opacity",videoEndTime:16.5,disableVideo:/iPad|iPhone|iPod/})}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"promo py-5",children:Object(b.jsx)("div",{className:"container text-center",children:Object(b.jsxs)("span",{className:"d-block h4 mb-3 fw-light text-white",children:["Programa de ",Object(b.jsx)("strong",{className:"fw-bold",children:"Referidos"}),". Obten\xe9 hasta ",Object(b.jsx)("strong",{className:"fw-bold",children:"10% OFF"})," invitado amigos o familiares."]})})}),Object(b.jsxs)("div",{id:"tratamiento",className:"site-block-half d-block d-lg-flex site-block-video",children:[Object(b.jsxs)("div",{className:"image bg-image order-2 bg-secondary",style:{position:"relative"},children:[Object(b.jsx)("div",{className:"nk-awb-overlay",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%",zIndex:"10",width:"100%",position:"absolute"}}),Object(b.jsx)("div",{className:"jarallax",style:{height:"100%",width:"100%",backgroundImage:"url(".concat(e)}})]}),Object(b.jsxs)("div",{className:"text order-1",children:[Object(b.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Tratamiento ",Object(b.jsx)("strong",{children:" ortodoncia invisible "})]}),Object(b.jsxs)("p",{className:"lead  text-black mb-5",children:["El tratamiendo de Ortodoncia con Alineadores Invisibles SMILE MAKERS",Object(b.jsx)("span",{style:{fontSize:"0.7rem",verticalAlign:"text-top"},children:"\xae"})," puede durar entre 9 a 18 meses, aunque podr\xe1s notar resultados visibles a partir de los 3 meses de uso."]}),Object(b.jsx)("p",{children:"Luego del disen\u0303o de tu sonrisa, se generar\xe1n alineadores que ser\xe1n intercambiados cada 15 o 20 di\u0301as, segu\u0301n indicacio\u0301n del ortodoncista y dependiendo del avance cada tratamiento."}),Object(b.jsx)("p",{children:"La cantidad de placas va a definir la duracio\u0301n del tratamiento y dependiendo del grado de complejidad puede hacerse en una o dos etapas."}),Object(b.jsx)(d.b,{to:"#faq",children:Object(b.jsx)("p",{className:"small mb-5",style:{color:"var(--secondary)"},children:" M\xe1s informaci\xf3n en nuestras consultas frecuentes "})})]})]})]})}),N=(a(73),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"site-section",id:"encontranos",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row mb-5 justify-content-center",children:Object(b.jsx)("div",{className:"col-md-6 text-center",children:Object(b.jsxs)("h2",{className:"site-heading text-black",children:["Donde ",Object(b.jsx)("strong",{children:"Encontrarnos"})]})})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"site-block-testimony p-4 text-center",children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("img",{src:"".concat("/smilemakers","/images/logo3.jpg"),alt:"smilemakers ",className:"img-fluid"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{className:"fw-bold",children:"DR. A"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("a",{href:"/",target:"_blank",className:"link-dark",children:[" ",Object(b.jsx)("i",{className:"flaticon flaticon-marcador-de-posicion-1"})," Av. Corrientes 4924, Piso 6, CABA."]})}),Object(b.jsx)("button",{className:"btn border-0 my-3 btn-outline-light",children:Object(b.jsxs)("a",{href:"/",target:"_blank",className:"link-dark",children:[" SOLICITAR TURNO ",Object(b.jsx)("i",{className:"flaticon-whatsapp"})]})})]})]})}),Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"site-block-testimony p-4 text-center",children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("img",{src:"".concat("/smilemakers","/images/logo3.jpg"),alt:"smilemakers ",className:"img-fluid"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{className:"fw-bold",children:"LBN ODONTOLOG\xcdA"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("a",{href:"/",target:"_blank",className:"link-dark",children:[" ",Object(b.jsx)("i",{className:"flaticon flaticon-marcador-de-posicion-1"})," Av. Corrientes 4924, Piso 6, CABA."]})}),Object(b.jsx)("button",{className:"btn border-0 my-3 btn-outline-light",children:Object(b.jsxs)("a",{href:"/",target:"_blank",className:"link-dark",children:[" SOLICITAR TURNO ",Object(b.jsx)("i",{className:"flaticon-whatsapp"})]})}),Object(b.jsx)("button",{className:"btn btn-light",children:" Reservar Turno Online"})]})]})}),Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"site-block-testimony p-4 text-center",children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("img",{src:"".concat("/smilemakers","/images/logo3.jpg"),alt:"smilemakers ",className:"img-fluid"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{className:"fw-bold",children:"DR. B"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("a",{href:"/",target:"_blank",className:"link-dark",children:[" ",Object(b.jsx)("i",{className:"flaticon flaticon-marcador-de-posicion-1"})," Av. Corrientes 4924, Piso 6, CABA."]})}),Object(b.jsx)("button",{className:"btn border-0 my-3 btn-outline-light",children:Object(b.jsxs)("a",{href:"/",target:"_blank",className:"link-dark",children:[" SOLICITAR TURNO ",Object(b.jsx)("i",{className:"flaticon-whatsapp"})]})})]})]})})]})]})})})}),y=(a(74),a(13)),w=a(14),k=function(){return Object(b.jsx)("footer",{className:"site-footer border-top",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{class:"footer-right",children:[Object(b.jsx)(d.b,{to:"https://www.instagram.com/smilemakers.arg/",children:Object(b.jsx)(y.a,{icon:w.b})}),Object(b.jsx)(d.b,{to:"https://www.facebook.com/Smile-Makers-102718928349549",children:Object(b.jsx)(y.a,{icon:w.a})}),Object(b.jsx)(d.b,{to:"https://api.whatsapp.com/send/?phone=5491124004005",children:Object(b.jsx)(y.a,{icon:w.c})})]}),Object(b.jsxs)("div",{class:"footer-left",children:[Object(b.jsx)("p",{class:"footer-links",children:"\xa1 Queremos verte sonreir !"}),Object(b.jsxs)("p",{children:["Smile Makers",Object(b.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"}),"  -  Copyright ",(new Date).getFullYear(),"  |  Designed by ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/AgustinTafura",children:"\u30bf\u30d5\u30e9"})]})]})]})})},S=function(){var e=Object(c.useState)(),s=Object(l.a)(e,2),a=s[0],t=s[1],i="".concat("/smilemakers","/images/homeSmall.jpg"),n="".concat("/smilemakers","/images/homeBig.jpg");return Object(c.useEffect)((function(){t(window.innerWidth),window.addEventListener("resize",(function(){t(window.innerWidth)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"site-mobile-menu",children:[Object(b.jsxs)("div",{className:"site-mobile-menu-header",children:[Object(b.jsx)("img",{src:"".concat("/smilemakers","/images/logo.png"),alt:"logo brand smilemakers"}),Object(b.jsx)("div",{className:"site-mobile-menu-close",children:Object(b.jsx)("span",{className:"icon-close2 js-menu-toggle"})})]}),Object(b.jsx)("div",{className:"site-mobile-menu-body"})]}),Object(b.jsx)("div",{className:"site-blocks-cover",style:{backgroundImage:"url(".concat(a<576?i:n,")")},"data-aos":"fade","data-stellar-background-ratio":"0.5",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row align-items-center",children:Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("span",{className:"sub-text fw-bolder",children:"ALINEADORES INVISIBLES"}),Object(b.jsxs)("h1",{children:["QUEREMOS ",Object(b.jsx)("strong",{children:"VERTE SONREIR"})]}),Object(b.jsx)(d.b,{to:"#alineadores",children:Object(b.jsx)("button",{className:"btn btn-outline-light my-3",children:"Quiero mis SM\xae"})})]})})})})]})},q=a(28),E=function(){return Object(b.jsxs)("div",{id:"booking",className:"site-block-half d-block d-lg-flex site-block-video",style:{position:"relative"},children:[Object(b.jsxs)("div",{className:"text",style:{zIndex:1},children:[Object(b.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Turno ",Object(b.jsx)("strong",{children:"Online"})]}),Object(b.jsx)("p",{className:"lead",children:"Aqu\xed podr\xe1s obtener tu turno para la primera consulta en nuestro Centro ubicado en Av. Corrientes 4924, piso 6, Capital Federal."}),Object(b.jsxs)("p",{className:"lead",children:["Durante la primera consulta efecturemos un ",Object(b.jsx)("strong",{children:" Diagn\xf3stico Personalizado"})," de tu caso."]}),Object(b.jsxs)("p",{className:"lead",children:["Luego realizaremos un ",Object(b.jsx)("strong",{children:" Escaneo intraoral"})," de tu boca con el que obtendremos un model digital 3D que utilizaremos para el dise\xf1o de tu sonrisa"]})]}),Object(b.jsx)("div",{className:"col-lg-5 ",children:Object(b.jsx)(q.a,{url:"https://calendly.com/agustintafura/smilemakers",styles:{minWidth:"360px",height:"930px",overflow:"hidden"},prefill:{}})})]})},A=(a(79),function(){var e="".concat("/smilemakers","/images/smiling.jpg");return Object(c.useEffect)((function(){var e="mp4:".concat("/smilemakers","/video/colocacion.mp4");Object(O.jarallaxVideo)(),Object(O.jarallax)(document.querySelectorAll(".jarallax-b"),{speed:.2,videoSrc:e,type:"opacity",videoEndTime:16.5,disableVideo:/iPad|iPhone|iPod/})}),[]),Object(b.jsxs)("div",{id:"parallax-b",style:{position:"relative"},children:[Object(b.jsxs)("h1",{children:["QUEREMOS ",Object(b.jsx)("strong",{children:"VERTE SONREIR"})]}),Object(b.jsx)("div",{className:"nk-awb-overlay",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%",zIndex:"10",width:"100%",position:"absolute"}}),Object(b.jsx)("div",{className:"jarallax-b",style:{height:"60vh",width:"100%",backgroundImage:"url(".concat(e)},muted:!0})]})}),C=(a(80),function(){var e="".concat("/smilemakers","/images/logo.png");return Object(b.jsx)("div",{className:"loadingComponent m-0 row justify-content-center aligne-items-center",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"d-flex mb-5",src:e,alt:"",width:"200px"}),Object(b.jsx)("div",{className:"spinner-grow bounce1",role:"status",children:Object(b.jsx)("span",{className:"sr-only"})}),Object(b.jsx)("div",{className:"spinner-grow bounce2",role:"status",children:Object(b.jsx)("span",{className:"sr-only"})}),Object(b.jsx)("div",{className:"spinner-grow bounce3",role:"status",children:Object(b.jsx)("span",{className:"sr-only"})})]})})});var z=function(){var e=Object(c.useState)(!0),s=Object(l.a)(e,2),a=s[0],t=s[1];return Object(c.useEffect)((function(){r.a.init({duration:800,easing:"slide",once:!0}),setTimeout((function(){t(!1)}),2100)}),[]),a?Object(b.jsx)(C,{}):Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{basename:"/",children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"site-wrap",children:[Object(b.jsx)(S,{}),Object(b.jsx)(v,{}),Object(b.jsx)(g,{}),Object(b.jsx)(f,{}),Object(b.jsx)(N,{}),Object(b.jsx)(E,{}),Object(b.jsx)(A,{}),Object(b.jsx)(x,{}),Object(b.jsx)(k,{}),Object(b.jsx)(h,{})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(s){var a=s.getCLS,c=s.getFID,t=s.getFCP,i=s.getLCP,n=s.getTTFB;a(e),c(e),t(e),i(e),n(e)}))};n.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root")),I()}},[[82,1,2]]]);
//# sourceMappingURL=main.a681efdc.chunk.js.map