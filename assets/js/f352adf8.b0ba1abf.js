"use strict";(self.webpackChunkmy_doc_site_ecommerce_react=self.webpackChunkmy_doc_site_ecommerce_react||[]).push([[1598],{6704:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>t});var r=o(4848),s=o(8453);const a={},l=void 0,d={id:"HTML/LMSGI_UT02_09_Formularios - Agrupaci\xf3n",title:"LMSGI_UT02_09_Formularios - Agrupaci\xf3n",description:"Lenguajes de marcas y sistemas",source:"@site/docs/HTML/LMSGI_UT02_09_Formularios - Agrupaci\xf3n.md",sourceDirName:"HTML",slug:"/HTML/LMSGI_UT02_09_Formularios - Agrupaci\xf3n",permalink:"/docu-react-alejandro/docs/HTML/LMSGI_UT02_09_Formularios - Agrupaci\xf3n",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTML/LMSGI_UT02_09_Formularios - Agrupaci\xf3n.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 02-18 \u2013 Formularios ",permalink:"/docu-react-alejandro/docs/HTML/LLMM-UT02-HTML-Ejercicios 18 - Formularios"},next:{title:"Bases de Datos (SQL)",permalink:"/docu-react-alejandro/docs/category/bases-de-datos-sql"}},i={},t=[{value:"<strong>Agrupaci\xf3n de controles</strong>",id:"agrupaci\xf3n-de-controles",level:2},{value:"<strong>Agrupaci\xf3n de controles \u2013 Ejemplos</strong>",id:"agrupaci\xf3n-de-controles--ejemplos",level:2},{value:"<strong>Anidando grupos de controles</strong>",id:"anidando-grupos-de-controles",level:2},{value:"<strong>Anidando grupos de controles \u2013 Ejemplos</strong>",id:"anidando-grupos-de-controles--ejemplos",level:2}];function c(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lenguajes de marcas y sistemas"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"de gesti\xf3n de la informaci\xf3n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(6815).A+"",width:"436",height:"291"})}),"\n",(0,r.jsx)(n.p,{children:"UT02 \u2013 HTML"}),"\n",(0,r.jsx)(n.p,{children:"9 \u2013 Agrupaci\xf3n de campos"}),"\n",(0,r.jsx)(n.p,{children:"IES Clara del Rey \u2013 Madrid"}),"\n",(0,r.jsx)(n.h2,{id:"agrupaci\xf3n-de-controles",children:(0,r.jsx)(n.strong,{children:"Agrupaci\xf3n de controles"})}),"\n",(0,r.jsx)(n.p,{children:'A veces necesitamos agrupar varios controles de un formulario, para organizar o "dividir" un formulario con gran n\xfamero de controles, o, aunque sea un formulario peque\xf1o, para agrupar controles relacionados.'}),"\n",(0,r.jsx)(n.p,{children:'Si pensamos en accesibilidad, es de obligado cumplimiento cuando tenemos conjuntos de input type="radio" o de input type="checkbox".'}),"\n",(0,r.jsx)(n.p,{children:"A los grupos de campos se les a\xf1ade una una especie de etiqueta, que define todo el grupo de campo."}),"\n",(0,r.jsx)(n.p,{children:'Para agrupar se utiliza el elemento "fieldset".'}),"\n",(0,r.jsx)(n.p,{children:'Para etiquetar el fieldset se utiliza "legend". Debe ser el primer elemento dentro de un fieldset.'}),"\n",(0,r.jsx)(n.h2,{id:"agrupaci\xf3n-de-controles--ejemplos",children:(0,r.jsx)(n.strong,{children:"Agrupaci\xf3n de controles \u2013 Ejemplos"})}),"\n",(0,r.jsx)(n.p,{children:"Formulario de registro, en el que se pide al usuario un nombre de usuario, una contrase\xf1a, y repetir la contrase\xf1a."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(3218).A+"",width:"829",height:"337"})}),"\n",(0,r.jsx)(n.p,{children:'Los fieldset son elementos "de bloque", por lo que siempre ocupan todo el ancho disponible.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"El c\xf3digo para el anterior formulario ser\xeda:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:'<body>\r\n    <p><label>Usuario: <input type="text" name="usr"></label></p>\r\n    <p><label>Contrase\xf1a: <input type="password" name="pwd"></label></p>\r\n    <p><label>Repetir Contrase\xf1a: <input type="password" name="pwd2"></label></p>\r\n    <fieldset>\r\n        <legend>\xbfC\xf3mo nos ha conocido?</legend>\r\n        <label><input type="radio" name="cto" value="P"> Prensa</label>\r\n        <label><input type="radio" name="cto" value="I"> Internet</label>\r\n        <label><input type="radio" name="cto" value="A"> Amigos</label>\r\n    </fieldset>\r\n    <button type="submit">Registrarme</button>\r\n</body>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"anidando-grupos-de-controles",children:(0,r.jsx)(n.strong,{children:"Anidando grupos de controles"})}),"\n",(0,r.jsx)(n.p,{children:'Los fieldsets pueden "anidarse". Puede haber fieldsets dentro de otro fieldset.'}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo: parte de un formulario que pide detalles del cliente y del equipamiento de un coche, para poder dar un presupuesto:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(5417).A+"",width:"1097",height:"383"})}),"\n",(0,r.jsx)(n.h2,{id:"anidando-grupos-de-controles--ejemplos",children:(0,r.jsx)(n.strong,{children:"Anidando grupos de controles \u2013 Ejemplos"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'    <fieldset>\r\n        <legend>Datos del comprador</legend>\r\n        <p><label>Nombre: <input type="text" name="nombre"></label></p>\r\n        <p><label>Apellido: <input type="text" name="apellido"></label></p>\r\n    </fieldset>\r\n    <fieldset>\r\n        <legend>Color y equipamiento</legend>\r\n        <fieldset>\r\n            <legend>Color</legend>\r\n            <label><input type="radio" name="color" value="B"> Blanco</label>\r\n            <label><input type="radio" name="color" value="G"> Gris</label>\r\n            <label><input type="radio" name="color" value="R"> Rojo</label>\r\n        </fieldset>\r\n        <fieldset>\r\n            <legend>Equipamiento</legend>\r\n            <label><input type="checkbox" name="equipo" value="LL"></label>\r\n        </fieldset>\r\n    </fieldset>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fieldsets con radio buttons y checkboxes"})}),"\n",(0,r.jsx)(n.p,{children:"Cuando usamos radiobuttons y checkboxes podemos encontrarnos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Un checkbox aislado: no es necesario rodearlo con fieldset."}),"\n",(0,r.jsx)(n.li,{children:"Un radio button aislado: es imposible. No se deben usar radio buttons aislados. Est\xe1n pensados para su uso en grupo, de forma excluyente."}),"\n",(0,r.jsx)(n.li,{children:"Un conjunto de checkboxes: de deben rodear con un fieldset, y a\xf1adir en el legend la descripci\xf3n para indicar para qu\xe9 se usan los checkboxes."}),"\n",(0,r.jsx)(n.li,{children:"Un conjunto de radio buttons: de deben rodear con un fieldset, y a\xf1adir en el legend la descripci\xf3n para indicar para qu\xe9 se usan los radio buttons."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Cuando hay un conjunto de radio buttons o de checkboxes, se recomienda, adem\xe1s, usar una lista no ordenada (ul)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fieldsets con listas de controles \u2013 Ejemplo"})}),"\n",(0,r.jsx)(n.p,{children:"En el ejemplo anterior, si a\xf1adimos una lista para los colores, tendr\xedamos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'    <fieldset>\r\n        <legend>Color</legend>\r\n        <ul>\r\n            <li><label><input type="radio" name="color" value="B">Blanco</label></li>\r\n            <li><label><input type="radio" name="color" value="G"> Gris</label></li>\r\n            <li><label><input type="radio" name="color" value="R"> Rojo</label></li>\r\n        </ul>\r\n    </fieldset>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:'Uso de "section" en formularios grandes'})}),"\n",(0,r.jsx)(n.p,{children:'Adem\xe1s de utilizar fieldset, cuando se tiene un formulario muy grande, dividido en muchas partes, se puede utilizar "section", para dividir el formulario en secciones.'})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6815:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Aspose.Words.5f7b4aad-9c6d-46ad-823d-7621d492059f.001-9c2480ebfe6ea1d6dc0783ee35414ac5.jpeg"},3218:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Aspose.Words.5f7b4aad-9c6d-46ad-823d-7621d492059f.002-8afc88c12aef9081476bf917fd09eb28.jpeg"},5417:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Aspose.Words.5f7b4aad-9c6d-46ad-823d-7621d492059f.003-e6dc308036161711dd7f983f4852bade.jpeg"},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>d});var r=o(6540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);