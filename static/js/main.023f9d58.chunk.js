(this.webpackJsonpsmilemakers=this.webpackJsonpsmilemakers||[]).push([[0],{10:function(e,a){e.exports={capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},capitalizeAllFirstletters:function(e){return e.replace(/\b[a-z]/g,(function(e){return e.toUpperCase()}))}}},35:function(e,a,s){},38:function(e,a,s){},39:function(e,a,s){},62:function(e,a,s){},68:function(e,a,s){},69:function(e,a,s){},72:function(e,a,s){},73:function(e,a,s){},74:function(e,a,s){},75:function(e,a,s){},79:function(e,a,s){},81:function(e,a,s){},82:function(e,a,s){},83:function(e,a,s){},85:function(e,a,s){"use strict";s.r(a);var t=s(1),i=s.n(t),c=s(24),n=s.n(c),o=(s(35),s(5)),l=(s(36),s(37),s(38),s(39),s(40),s(61),s(25)),r=s.n(l),d=s(6),j=s(4),b=s.n(j),m=(s(62),s(0)),u=function(){var e=Object(t.useState)(),a=Object(o.a)(e,2),s=(a[0],a[1]);function i(){var e=document.querySelector(".site-navbar"),a=window.scrollY;e.style.backgroundColor="rgb(255 255 255 / ".concat(1.5*a/700,")"),e.style.boxShadow="4px 0 20px -5px rgba(0, 0, 0, ".concat(a/700,")")}function c(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(a){var s;"#"===e.hash.charAt(0)&&(a.preventDefault(),null===(s=document.querySelector(e.hash))||void 0===s||s.scrollIntoView(),window.innerWidth<1200&&(document.querySelector("body").classList.contains("offcanvas-menu")?document.querySelector("body").classList.add("offcanvas-menu"):document.querySelector("body").classList.remove("offcanvas-menu")))}))}))}return Object(t.useEffect)((function(){return s(window.innerWidth),window.addEventListener("scroll",i),function(){b()(".js-clone-nav").each((function(){b()(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}));var e=0;b()(".site-mobile-menu .has-children").each((function(){var a=b()(this);a.prepend('<span className="arrow-collapse collapsed">'),a.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+e}),a.find("> ul").attr({class:"collapse",id:"collapseItem"+e}),e++})),b()("body").on("click",".arrow-collapse",(function(e){var a=b()(this);a.closest("li").find(".collapse").hasClass("show")?a.removeClass("active"):a.addClass("active"),e.preventDefault()})),b()(window).resize((function(){b()(this).width()>768&&b()("body").hasClass("offcanvas-menu")&&b()("body").removeClass("offcanvas-menu")})),b()("body").on("click",".js-menu-toggle",(function(e){var a=b()(this);e.preventDefault(),b()("body").hasClass("offcanvas-menu")?(b()("body").removeClass("offcanvas-menu"),a.removeClass("active")):(b()("body").addClass("offcanvas-menu"),a.addClass("active"))})),b()(document).mouseup((function(e){var a=b()(".site-mobile-menu");a.is(e.target)||0!==a.has(e.target).length||b()("body").hasClass("offcanvas-menu")&&b()("body").removeClass("offcanvas-menu")}))}(),c(),function(){window.removeEventListener("scroll",i)}}),[]),Object(m.jsx)("div",{className:"site-navbar-wrap",children:Object(m.jsx)("div",{className:"site-navbar fixed-top",children:Object(m.jsx)("div",{className:"container py-1",children:Object(m.jsxs)("div",{className:"row align-items-center",children:[Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)("div",{className:"site-logo",children:Object(m.jsx)("img",{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},src:"".concat("/smilemakers","/images/logo.png"),alt:"logo brand smilemakers"})})}),Object(m.jsx)("div",{className:"col-10",children:Object(m.jsx)("nav",{className:"site-navigation text-end",role:"navigation",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"d-inline-block d-xl-none ms-md-0 me-auto py-3",children:Object(m.jsx)(d.b,{to:"#",className:"site-menu-toggle js-menu-toggle text-white",children:Object(m.jsx)("span",{className:"icon-menu fs-1"})})}),Object(m.jsxs)("ul",{className:"site-menu js-clone-nav d-none d-xl-block",children:[Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"#alineadores",children:"Alineadores"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"#tratamiento",children:"Tratamiento"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"#beneficios",children:"Beneficios"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"#encontranos",children:"Solicitar Turno"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"#odontologo",children:"Soy Odontologo"})})]})]})})})]})})})})},h=(s(68),function(){return window.addEventListener("scroll",(function(){b()(window).scrollTop()>368?(b()("#flotante").show("slow"),b()("#flotante").removeClass("d-none")):b()("#flotante").hide("slow")})),Object(m.jsx)("a",{id:"flotante",className:"d-none",href:"https://api.whatsapp.com/send/?phone=5491124004005",children:Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"39",height:"39",viewBox:"0 0 39 39",children:[Object(m.jsx)("path",{fill:"rgb(131, 199, 211, 0.8)",d:"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"}),Object(m.jsx)("path",{fill:"#FFF",d:"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"})]})})}),p=(s(69),[{q:"\xbfQui\xe9nes pueden utilizar Alineadores Invisibles?",r:["Hoy en d\xeda el 90 % de los problemas de alineaci\xf3n dentaria pueden ser resueltos mediante ortodoncia invisible. Los alineadores realizan fuerzas digitalmente calculadas y de baja intensidad ideales para corregir cualquier tipo de caso.","Existen algunos casos en los cuales no se puede utilizar ortodoncia invisible:","* Pacientes con problemas periodontales, los cuales deber\xe1n tratar esta afecci\xf3n para poder utilizarlos.","* Pacientes con perdida \xf3sea.","* Pacientes con reabsorciones de ra\xedces.","Siempre es ideal tener una consulta con el ortodoncista, ya que muchos de los problemas por los cuales no se pueden utilizar alineadores son modificables."]},{q:"\xbfQu\xe9 ocurre si se rompe alguno de mis Alineadores?",r:["Como en todo tratamiento es importante seguir las recomendaciones del ortodoncista debido a que las placas podri\u0301an romperse por mal uso.","En estos casos comun\xedcate de inmediato con nosotros para que hagamos la reposici\xf3n ra\u0301pidamente."]},{q:"\xbfC\xf3mo limpiar los Alienadores Invisibles?",r:["Es fundamental el cepillado diario tus alineadores SMILE MAKERS, lo ideal ser\xeda dos veces al di\u0301a. Adem\xe1s recomendamos utilizar las pastillas efervescentes de corega, sumergi\xe9ndolos de 2 a 3 minutos diariamente o di\u0301a por medio.","Los alineadores pueden mancharse pues absorben la pigmentacio\u0301n de las comidas y bebidas que consumimos a diario. Cua\u0301nto se manchen va a depender de los ha\u0301bitos alimenticios de cada persona. Bebidas como vino, cafe\u0301, mate, tienden a mancharlos, asi\u0301 como tambie\u0301n el cigarrillo.","Sin embargo, la utilizacio\u0301n de las placas protegera\u0301n el esmalte de tus dientes de la accio\u0301n nociva de e\u0301stos productos. Por este motivo es tan importante que higienices tus alineadores SMILE MAKERS a diario y con los productos recomendados.","De esta forma tus alineadores se van a ver siempre limpios y translucidos."]},{q:"\xbfEs un tratamiento doloroso?",r:["Los alineadores invisibles SMILE MAKERS no modifican el habla, puede ser que el primer d\xeda de uso sientas alguna diferencia pero pasado este tiempo no vas a sentir que los llevas puestos.","Al ser un tratamiento donde hay un movimiento progresivo de tus dientes, puede ser que sientas un leve dolor cada vez que cambiemos tus placas, que se va a disipar cuando estos se adapten al nuevo alineador."]},{q:"\xbfCu\xe1nto tiempo debo utilizar cada alineador?",r:["Son super co\u0301modos, esta\u0301n confeccionados con materiales flexibles de excelente calidad.","Podes usarlos todo el d\xeda, solo deber\xe1s quit\xe1rtelos para comer o cepillarte los dientes."]},{q:"\xbfCada cu\xe1nto tiempo debo cambiar los alineadores?",r:["Los alineadores invisibles SMILE MAKERS se cambian cada 20 d\xedas. No es necesario que el cambio se realice siempre en consultorio.","Dependiendo del caso, podemos entregarte algunas placas para que vos lo hagas en tu casa en la fecha pactada con el ortodoncista. Esto es una gran ventaja ya que podes irte de viaje y no retrasar el tiempo del tratamiento."]},{q:"\xbfQu\xe9 incluye el Kit Inicial?",r:["Con la entrega de tus primeros alineadores SMILE MAKERS vamos a entregarte:","- Un neceser.","- Pastillas blanqueadoras Corega para que puedas limpiarlos.","- Un cepillo de dientes @merakisustentable.","- Estuche para que puedas guardarlos cuando no los estes usando.","- Pasta dental.","- Elemento para quitar tus placas con mayor facilidad.","- Alcohol en aerosol para que lo lleves a todos lados y siempre que te los quites est\xe9s seguro de que tenes las manos desinfectadas."]}]),x=function(){var e=Object(t.useState)([]),a=Object(o.a)(e,2),s=a[0],i=a[1];return Object(t.useEffect)((function(){i(p)}),[]),Object(m.jsx)("div",{className:"site-section site-block-3",id:"faq",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)("div",{className:"row mb-5 justify-content-center",children:Object(m.jsx)("div",{className:"col-md-6 text-center",children:Object(m.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Consultas ",Object(m.jsx)("strong",{children:"Frecuentes"})]})})}),Object(m.jsx)("div",{className:"col-lg-10",children:Object(m.jsx)("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:s.map((function(e,a){return Object(m.jsxs)("div",{className:"accordion-item",children:[Object(m.jsx)("h2",{className:"accordion-header",id:"flush-heading".concat(a),children:Object(m.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapse".concat(a),"aria-expanded":"false","aria-controls":"flush-collapse".concat(a),children:e.q})}),Object(m.jsx)("div",{id:"flush-collapse".concat(a),className:"accordion-collapse collapse","aria-labelledby":"flush-heading".concat(a),"data-bs-parent":"#accordionFlushExample",children:Object(m.jsx)("div",{className:"accordion-body",children:e.r.map((function(e){return Object(m.jsx)("p",{className:"text-black-opacity-5",children:e},Math.random())}))})})]},a*Math.random())}))})})]})})})},O=s(8),f=(s(72),function(){var e=Object(t.useState)(),a=Object(o.a)(e,2),s=a[0],i=a[1],c="".concat("/smilemakers","/images/bracesSmiling.jpg");return Object(t.useEffect)((function(){var e="mp4:".concat("/smilemakers","/video/presentacion.mp4");Object(O.jarallaxVideo)(),Object(O.jarallax)(document.querySelectorAll(".jarallax-braces"),{speed:.2,videoSrc:e,type:"opacity",videoEndTime:16.5,disableVideo:/iPad|iPhone|iPod/}),i(window.innerWidth),window.addEventListener("resize",(function(){i(window.innerWidth)}))}),[]),Object(m.jsx)("div",{id:"alineadores",className:"site-section site-block-braces",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row pb-3",children:[Object(m.jsx)("div",{className:"col-lg-6 mb-5 order-1 order-lg-1",children:Object(m.jsxs)("div",{className:"ps-lg-5 ms-lg-5",children:[Object(m.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Alineadores ",Object(m.jsx)("strong",{children:"Invisibles"})," SM",Object(m.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})]}),Object(m.jsxs)("p",{className:"lead text-black",children:["Los alineadores invisibles ",Object(m.jsxs)("b",{children:["SMILE MAKERS",Object(m.jsx)("span",{style:{fontSize:"0.7rem",verticalAlign:"text-top"},children:"\xae"})]})," son placas",Object(m.jsx)("strong",{children:" transparentes"})," que funcionan alineando progresivamente tus dientes para ayudarte a lucir una sonrisa perfecta."]}),Object(m.jsxs)("p",{className:"",children:["Son ",Object(m.jsx)("strong",{children:"removibles"}),", pod\xe9s usarlas todo el dia excepto para comer y cepillar tus dientes."]}),Object(m.jsx)("p",{className:"",children:"Pod\xe9s realizar ejercicio, hablar, besar y no vas a sentir que los llevas puestos."})]})}),Object(m.jsxs)("div",{className:"col-lg-6 order-2 order-lg-2 mb-5 d-flex justify-content-center",style:{height:"".concat(s<992?"60vh":""),borderRadius:"0.25rem"},children:[Object(m.jsx)("div",{className:"nk-awb-overlay",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%",zIndex:"100",width:"0%",borderRadius:"0.25rem"}}),Object(m.jsx)("div",{className:"jarallax-braces",style:{height:"".concat(s<992?"100%":"120%"),width:"".concat(s<992?"100%":"70%"),boxShadow:"0 10px 50px -5px #00000066",backgroundImage:"url(".concat(c,")"),borderRadius:"0.25rem"}})]})]}),Object(m.jsxs)("div",{className:"row pt-5",children:[Object(m.jsxs)("h3",{className:"site-heading text-black mb-5",style:{fontSize:"1.8rem"},children:["Obtenelos en ",Object(m.jsx)("strong",{children:"3 pasos"})]}),Object(m.jsx)("div",{className:"col-lg-4","data-aos":"fade-up","data-aos-delay":"","data-aos-anchor-placement":"top-bottom",children:Object(m.jsxs)("div",{className:"process p-3",children:[Object(m.jsx)("span",{className:"number",children:"01"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{className:"flaticon flaticon-silla-dentista display-4 mb-4 d-inline-block"}),Object(m.jsx)("h3",{children:"Diagn\xf3stico y Escaneo"}),Object(m.jsx)("p",{children:"En la primera consulta realizaremos los controles iniciales y te solicitaremos los estudios pertinentes para realizar un diagn\xf3stico preciso del caso, lo que permitir\xe1 determinar la complejidad y el valor final del tratamiento."}),Object(m.jsx)("p",{children:"Luego realizaremos un escaneo intraoral para obtener un modelo digital 3D de tu boca."})]})]})}),Object(m.jsx)("div",{className:"col-lg-4","data-aos":"fade-up","data-aos-delay":"100",children:Object(m.jsxs)("div",{className:"process p-3",children:[Object(m.jsx)("span",{className:"number",children:"02"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{className:"flaticon flaticon-escanear display-4 mb-4 d-inline-block"}),Object(m.jsx)("h3",{children:"Dise\xf1o 3D"}),Object(m.jsx)("p",{children:"A partir del modelo digital obtenido dise\xf1aremos tu sonrisa mediante un software de precision, donde replicaremos los diferentes estad\xedos en los que va a evolucionar tu boca a medida que cambies los alineadores."}),Object(m.jsx)("p",{children:"A trav\xe9s de impresoras 3D, obtendremos las piezas que se utilizaran para moldear cada alineador."})]})]})}),Object(m.jsx)("div",{className:"col-lg-4","data-aos":"fade-up","data-aos-delay":"200",children:Object(m.jsxs)("div",{className:"process p-3",children:[Object(m.jsx)("span",{className:"number",children:"03"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{className:"flaticon flaticon-ortodoncia display-4 mb-4 d-inline-block",style:{display:"inline"}}),Object(m.jsxs)("h3",{children:["Alineadores SM",Object(m.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})]}),Object(m.jsxs)("p",{children:["Finalmente te entregaremos el ",Object(m.jsx)("strong",{children:" Kit Inicial "}),"de alineadores SM",Object(m.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})," y programaremos el calendario con futuras citas para los sucesivos cambios de las placas."]}),Object(m.jsx)("p",{children:"\xa1 Queremos verte sonreir y vamos a hacer todo lo posible para lograrlo !"})]})]})})]})]})})}),v=(s(73),function(){return Object(m.jsx)("div",{className:"site-section site-block-benefits",id:"beneficios",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row mb-5 justify-content-center",children:Object(m.jsx)("div",{className:"col-md-6 text-center",children:Object(m.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Beneficios ",Object(m.jsx)("strong",{children:" M\xe9todo "}),"SM",Object(m.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"})]})})}),Object(m.jsx)("div",{className:"row",children:[{title:"eficacia",icon:"flaticon-cheque",info:"Hoy en d\xeda el 90 % de los problemas de alineacion dentaria pueden ser resueltos mediante ortodoncia invisible."},{title:"est\xe9tica",icon:"flaticon-ojo-1",info:"Son totalmente imperceptibles, nadie notar\xe1 que los llevas puestos."},{title:"comodidad",icon:"flaticon-actualizar-2",info:"Al ajustarse perfectamente a tus dientes permiten realizar tus actividades diarias sin complicaciones. Solo te los quitar\xe1s para comer o cepillar tus dientes."},{title:"higiene",icon:"flaticon-cepillo-de-dientes",info:"Al ser posible extraer facilmente los alineadores permite realizar una higiene bucodental m\xe1s precisa."},{title:"flexibilidad",icon:"flaticon-equipaje",info:"No es necesario que el cambio se realice siempre en consultorio. Dependiendo del caso, podr\xe1s realizar el cambio de las placas por tu cuenta en la fecha pactada con el ortodoncista."},{title:"rapidez",icon:"flaticon-calendario",info:"Reduce los tiempos respecto al tratamiento de ortodoncia tradicional."}].map((function(e,a){return Object(m.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(m.jsxs)("div",{className:"site-block-feature-2 d-flex rounded mb-5",children:[Object(m.jsx)("div",{className:"me-3",children:Object(m.jsx)("i",{"data-aos":"zoom-in","data-aos-duration":"2000",className:"flaticon ".concat(e.icon," fw-light fs-2")})}),Object(m.jsxs)("div",{className:"text",children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("p",{children:e.info})]})]})},a+e.title)}))})]})})}),g=(s(74),function(){var e="".concat("/smilemakers","/images/colocacion.jpg");return Object(t.useEffect)((function(){var e="mp4:".concat("/smilemakers","/video/escaneo.mp4");Object(O.jarallaxVideo)(),Object(O.jarallax)(document.querySelectorAll(".jarallax"),{speed:.2,videoSrc:e,type:"opacity",videoEndTime:16.5,disableVideo:/iPad|iPhone|iPod/})}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"promo py-5",children:Object(m.jsx)("div",{className:"container text-center",children:Object(m.jsxs)("span",{className:"d-block h4 mb-3 fw-light text-white",children:["Programa de ",Object(m.jsx)("strong",{className:"fw-bold",children:"Referidos"}),". Obten\xe9 hasta ",Object(m.jsx)("strong",{className:"fw-bold",children:"10% OFF"})," invitado amigos o familiares."]})})}),Object(m.jsxs)("div",{id:"tratamiento",className:"site-block-half d-block d-lg-flex site-block-video",children:[Object(m.jsxs)("div",{className:"image bg-image order-2 bg-secondary",style:{position:"relative"},children:[Object(m.jsx)("div",{className:"nk-awb-overlay",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%",zIndex:"10",width:"100%",position:"absolute"}}),Object(m.jsx)("div",{className:"jarallax",style:{height:"100%",width:"100%",backgroundImage:"url(".concat(e)}})]}),Object(m.jsxs)("div",{className:"text order-1",children:[Object(m.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Tratamiento ",Object(m.jsx)("strong",{children:" ortodoncia invisible "})]}),Object(m.jsxs)("p",{className:"lead  text-black mb-5",children:["El tratamiendo de Ortodoncia con Alineadores Invisibles SMILE MAKERS",Object(m.jsx)("span",{style:{fontSize:"0.7rem",verticalAlign:"text-top"},children:"\xae"})," puede durar entre 9 a 18 meses, aunque podr\xe1s notar resultados visibles a partir de los 3 meses de uso."]}),Object(m.jsx)("p",{children:"Luego del disen\u0303o de tu sonrisa, se generar\xe1n alineadores que ser\xe1n intercambiados cada 15 o 20 di\u0301as, segu\u0301n indicacio\u0301n del ortodoncista y dependiendo del avance cada tratamiento."}),Object(m.jsx)("p",{children:"La cantidad de placas va a definir la duracio\u0301n del tratamiento y dependiendo del grado de complejidad puede hacerse en una o dos etapas."}),Object(m.jsx)(d.b,{to:"#faq",children:Object(m.jsx)("p",{className:"small mb-5",style:{color:"var(--secondary)"},children:" M\xe1s informaci\xf3n en nuestras consultas frecuentes "})})]})]})]})}),y=(s(75),s(9)),N=s(11),w=function(){return Object(m.jsx)("footer",{className:"site-footer border-top",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"footer-right",children:[Object(m.jsx)(d.b,{to:"https://www.instagram.com/smilemakers.arg/",children:Object(m.jsx)(y.a,{icon:N.b})}),Object(m.jsx)(d.b,{to:"https://www.facebook.com/Smile-Makers-102718928349549",children:Object(m.jsx)(y.a,{icon:N.a})}),Object(m.jsx)(d.b,{to:"https://api.whatsapp.com/send/?phone=5491124004005",children:Object(m.jsx)(y.a,{icon:N.d})})]}),Object(m.jsxs)("div",{className:"footer-left",children:[Object(m.jsx)("p",{className:"footer-links",children:"\xa1 Queremos verte sonreir !"}),Object(m.jsxs)("p",{children:["Smile Makers",Object(m.jsx)("sup",{style:{fontVariant:"all-small-caps"},children:"\xae"}),"  -  Copyright ",(new Date).getFullYear(),"  |  Designed by ",Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/AgustinTafura",children:"\u30bf\u30d5\u30e9"})]})]})]})})},k=(s(79),function(){var e=Object(t.useState)(),a=Object(o.a)(e,2),s=a[0],i=a[1],c="".concat("/smilemakers","/images/homeSmall.jpg"),n="".concat("/smilemakers","/images/homeBig.jpg");return Object(t.useEffect)((function(){return i(window.innerWidth),window.addEventListener("resize",(function(){return i(window.innerWidth)})),function(){window.removeEventListener("resize",(function(){return i(window.innerWidth)}))}}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"site-mobile-menu",children:[Object(m.jsxs)("div",{className:"site-mobile-menu-header",children:[Object(m.jsx)("img",{src:"".concat("/smilemakers","/images/logo.png"),alt:"logo brand smilemakers"}),Object(m.jsx)("div",{className:"site-mobile-menu-close",children:Object(m.jsx)("span",{className:"icon-close2 js-menu-toggle"})})]}),Object(m.jsx)("div",{className:"site-mobile-menu-body"})]}),Object(m.jsx)("div",{id:"home",className:"site-blocks-cover",style:{backgroundImage:"url(".concat(s<576?c:n,")")},"data-aos":"fade","data-stellar-background-ratio":"0.5",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row align-items-center",children:Object(m.jsxs)("div",{className:"col-md-6 title-container",children:[Object(m.jsxs)("div",{className:"title-body",children:[Object(m.jsx)("span",{className:"sub-text fw-bolder",children:"ALINEADORES INVISIBLES"}),Object(m.jsxs)("h1",{children:["QUEREMOS",Object(m.jsx)("br",{}),Object(m.jsx)("strong",{children:"VERTE SONREIR"})]})]}),Object(m.jsx)(d.b,{to:"#alineadores",className:"title-button",children:Object(m.jsx)("button",{className:"btn btn-outline-light my-3",children:"Quiero mis SM\xae"})})]})})})})]})}),S=s(29),E=function(){return Object(m.jsxs)("div",{id:"booking",className:"site-block-half d-block d-lg-flex site-block-video",style:{position:"relative"},children:[Object(m.jsxs)("div",{className:"text",style:{zIndex:1},children:[Object(m.jsxs)("h2",{className:"site-heading text-black mb-5",children:["Turno ",Object(m.jsx)("strong",{children:"Online"})]}),Object(m.jsx)("p",{className:"lead",children:"Aqu\xed podr\xe1s obtener tu turno para la consulta inicial en nuestro Centro ubicado en Av. Corrientes 4924, piso 6, Capital Federal."}),Object(m.jsxs)("p",{className:"lead",children:["Durante la primera consulta efecturemos un ",Object(m.jsx)("strong",{children:" Diagn\xf3stico Personalizado"})," de tu caso."]}),Object(m.jsxs)("p",{className:"lead",children:["Luego realizaremos un ",Object(m.jsx)("strong",{children:" Escaneo intraoral"})," de tu boca con el que obtendremos un model digital 3D que utilizaremos para el dise\xf1o de tu sonrisa"]})]}),Object(m.jsx)("div",{className:"col-lg-5 ",children:Object(m.jsx)(S.a,{url:"https://calendly.com/agustintafura/smilemakers",styles:{minWidth:"360px",height:"930px",overflow:"hidden"},prefill:{}})})]})},q=(s(81),function(){var e="".concat("/smilemakers","/images/girlSmiling.jpg");return Object(t.useEffect)((function(){var e="mp4:".concat("/smilemakers","/video/colocacion.mp4");Object(O.jarallaxVideo)(),Object(O.jarallax)(document.querySelectorAll(".jarallax-b"),{speed:.2,videoSrc:e,type:"opacity",videoEndTime:16.5,disableVideo:/iPad|iPhone|iPod/})}),[]),Object(m.jsxs)("div",{id:"parallax-b",style:{position:"relative"},children:[Object(m.jsxs)("h1",{children:["QUEREMOS ",Object(m.jsx)("strong",{children:"VERTE SONREIR"})]}),Object(m.jsx)("div",{className:"nk-awb-overlay",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%",zIndex:"10",width:"100%",position:"absolute"}}),Object(m.jsx)("div",{className:"jarallax-b",style:{height:"60vh",width:"100%",backgroundImage:"url(".concat(e)},muted:!0})]})}),z=(s(82),function(){var e="".concat("/smilemakers","/images/logo.png");return Object(m.jsx)("div",{className:"loadingComponent m-0 row justify-content-center aligne-items-center",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"d-flex mb-5",src:e,alt:"",width:"200px"}),Object(m.jsx)("div",{className:"spinner-grow bounce1",role:"status",children:Object(m.jsx)("span",{className:"sr-only"})}),Object(m.jsx)("div",{className:"spinner-grow bounce2",role:"status",children:Object(m.jsx)("span",{className:"sr-only"})}),Object(m.jsx)("div",{className:"spinner-grow bounce3",role:"status",children:Object(m.jsx)("span",{className:"sr-only"})})]})})}),C=s(30),A=s(10),L=[{address:"Av. Corrientes 4924 piso 6 22",od:"mercedes loccisano",neighbourhood:"villa crespo",city:"caba",whatsapp:"5491124004005",business:"Centro Smile Makers",img:"sm_logo.jpg"},{address:"bonpland 2376 piso 1 a",od:"juliana saunders",neighbourhood:"palermo",city:"caba",whatsapp:"5491167083728",img:"julianasaunders_logo.jpg"},{address:"santa Fe 3444 piso 10 a",business:"consultorio drs. pelcman",neighbourhood:"palermo",city:"caba",whatsapp:"5491169773011",od:"jorgelina diamante",img:"pelcman_logo.jpg"},{address:"arenales 1961 piso 7 b",od:"romina vivanco",neighbourhood:"recoleta",city:"caba",whatsapp:"5491160301443",img:"rominavivianco_logo.jpg"},{address:"velez sarfield 4498, munro",business:"cityDent",neighbourhood:"vicente l\xf3pez",city:"bsas",whatsapp:"5491124896434",od:"daniela l\xf3pez",img:"citydent_logo.jpg"},{address:"migueletes 863 4D",od:"laura randano",neighbourhood:"palermo",city:"caba",whatsapp:"5491161125342",img:"default_logo.jpg"},{address:"virrey del pino 2328 piso 3",od:"fiorella chicata lopez",neighbourhood:"belgrano",city:"caba",whatsapp:"5491159525435",img:"fiorellachicatalopez_logo.jpg"},{address:"portela 338",business:"bloi",od:"ayelen beron",neighbourhood:"lomas de zamora",city:"bsas",whatsapp:"5491123918422",img:"bloi_logo.jpg"},{address:"montevideo 333",business:"leident",neighbourhood:"san nicolas",city:"bsas",whatsapp:"5491125750248",od:"leila pedrone",img:"leiden_logo.jpg"},{address:"dr. melo 2833",od:"carlos costoya",neighbourhood:"lanus",city:"bsas",tel:"5491142416334",img:"default_logo.jpg"}],M=(s(83),function(){var e=Object(t.useState)(),a=Object(o.a)(e,2),s=a[0],i=a[1],c=Object(t.useState)([]),n=Object(o.a)(c,2),l=n[0],r=n[1],d=Object(t.useState)(""),j=Object(o.a)(d,2),b=j[0],u=j[1],h=Object(t.useState)(""),p=Object(o.a)(h,2),x=p[0],O=p[1],f=Object(t.useState)({}),v=Object(o.a)(f,2),g=v[0],w=v[1],k=Object(t.useState)([]),S=Object(o.a)(k,2),E=S[0],q=S[1],z={},M=[],I=function(){for(var e=0,a=Object.entries(z);e<a.length;e++){var s=Object(o.a)(a[e],2);s[0];s[1].map((function(e){M.push(e)}))}q(M)};return Object(t.useEffect)((function(){L.forEach((function(e){z.hasOwnProperty(e.city)||(z[e.city]=[]),!z[e.city].includes(e.neighbourhood)&&z[e.city].push(e.neighbourhood)})),w(z),I(),r(L),i(window.innerWidth),window.addEventListener("resize",(function(){return i(window.innerWidth)}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"site-section",id:"encontranos",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row mb-5 justify-content-center",children:Object(m.jsx)("div",{className:"col-md-6 text-center",children:Object(m.jsxs)("h2",{className:"site-heading text-black",children:["Donde ",Object(m.jsx)("strong",{children:"Encontrarnos"})]})})}),Object(m.jsxs)("div",{className:"row justify-content-between ",children:[Object(m.jsxs)("div",{className:"col-lg-3 align-self-center",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"city",className:"form-label",children:"Distrito"}),Object(m.jsxs)("select",{className:"form-select",name:"city",value:b,onChange:function(e){var a=e.target.value;if(u(a),a){var s=L.filter((function(e){return e.city===a}));q(g[a]),r(s)}else I(),r(L)},children:[Object(m.jsx)("option",{value:"",children:"TODAS"}),Object.keys(g).map((function(e){return Object(m.jsx)("option",{value:e,children:e.toUpperCase()},Math.random())}))]})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"neighbourhood",className:"form-label",children:"Ciudad/Barrio"}),Object(m.jsxs)("select",{className:"form-select",name:"neighbourhood",value:x,onChange:function(e){var a=e.target.value;if(O(a),a){var s=L.filter((function(e){return e.neighbourhood===a}));r(s),O(a)}else{var t=L.filter((function(e){return e.city===b}));r(t)}},children:[Object(m.jsx)("option",{value:"",children:"TODAS"}),E.map((function(e){return Object(m.jsx)("option",{value:e,children:e.toUpperCase()},Math.random())}))]})]})]}),Object(m.jsx)("div",{className:"col-lg-8 overflow-auto",style:{height:"60vh"},children:Object(m.jsxs)("table",{className:"table align-middle ",children:[Object(m.jsx)("thead",{}),Object(m.jsx)("tbody",{children:l.map((function(e){var a;return Object(m.jsxs)("tr",{style:{borderBottom:"4px solid #f8f9fd"},children:[Object(m.jsx)("th",{children:Object(m.jsx)("img",{src:"".concat("/smilemakers","/images/").concat(e.img),alt:"",width:s>576?"90px":"60px",style:{borderRadius:"50%"}})}),s>=576?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("td",{className:"text-black-opacity-5 fs-6",children:Object(A.capitalizeFirstLetter)(e.neighbourhood)}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"fs-6",children:Object(A.capitalizeFirstLetter)(e.address)})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("td",{children:[Object(m.jsx)("div",{className:"fw-bold",children:Object(A.capitalizeFirstLetter)(null!==(a=e.business)&&void 0!==a?a:"Consultorio")}),Object(m.jsx)("div",{className:"text-black-opacity-5 fs-6",children:Object(A.capitalizeAllFirstletters)(e.od)}),Object(m.jsx)("div",{className:"fs-6",children:Object(A.capitalizeFirstLetter)(e.address)}),Object(m.jsx)("div",{className:"text-black-opacity-5 fs-6",children:Object(A.capitalizeFirstLetter)(e.neighbourhood)})]})}),Object(m.jsx)("td",{children:e.whatsapp?Object(m.jsx)("a",{href:"https://api.whatsapp.com/send/?phone=".concat(e.whatsapp),children:Object(m.jsx)(y.a,{icon:N.c,size:"2x",color:"var(--secondary)"})}):Object(m.jsx)("a",{href:"tel:+".concat(e.tel),children:Object(m.jsx)(y.a,{icon:C.a,size:"lg",color:"var(--secondary)"})})})]},Math.random())}))})]})})]})]})})})});var I=function(){var e=Object(t.useState)(!0),a=Object(o.a)(e,2),s=a[0],i=a[1];return Object(t.useEffect)((function(){r.a.init({duration:800,easing:"slide",once:!0}),setTimeout((function(){i(!1)}),2100)}),[]),s?Object(m.jsx)(z,{}):Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(d.a,{basename:"/",children:[Object(m.jsx)(u,{}),Object(m.jsxs)("div",{className:"site-wrap",children:[Object(m.jsx)(k,{}),Object(m.jsx)(f,{}),Object(m.jsx)(g,{}),Object(m.jsx)(v,{}),Object(m.jsx)(M,{}),Object(m.jsx)(E,{}),Object(m.jsx)(q,{}),Object(m.jsx)(x,{}),Object(m.jsx)(w,{}),Object(m.jsx)(h,{})]})]})})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,89)).then((function(a){var s=a.getCLS,t=a.getFID,i=a.getFCP,c=a.getLCP,n=a.getTTFB;s(e),t(e),i(e),c(e),n(e)}))};n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),F()}},[[85,1,2]]]);
//# sourceMappingURL=main.023f9d58.chunk.js.map