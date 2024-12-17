"use strict";(self.webpackChunkmy_doc_site_ecommerce_react=self.webpackChunkmy_doc_site_ecommerce_react||[]).push([[746],{9165:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var r=s(4848),n=s(8453);s(6540);const o=e=>{let{text:a}=e;return(0,r.jsx)("button",{style:{backgroundColor:"black",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px"},children:a})},c={},i="Obtener las credenciales para conectarse con firebase",t={id:"tutorial-React-apps/installation",title:"Obtener las credenciales para conectarse con firebase",description:"Creando la app de Firebase",source:"@site/docs/tutorial-React-apps/01-installation.md",sourceDirName:"tutorial-React-apps",slug:"/tutorial-React-apps/installation",permalink:"/docu-react-alejandro/docs/tutorial-React-apps/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-React-apps/01-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Apps",permalink:"/docu-react-alejandro/docs/category/react-apps"},next:{title:"Ecommerce-Serverless-aws",permalink:"/docu-react-alejandro/docs/tutorial-React-apps/Ecommerce-React-App"}},d={},l=[{value:"Creando la app de Firebase",id:"creando-la-app-de-firebase",level:2},{value:"Credenciales y Proyecto React",id:"credenciales-y-proyecto-react",level:2},{value:"Agregando objetos en Firestore Database",id:"agregando-objetos-en-firestore-database",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"obtener-las-credenciales-para-conectarse-con-firebase",children:"Obtener las credenciales para conectarse con firebase"}),"\n",(0,r.jsx)(a.h2,{id:"creando-la-app-de-firebase",children:"Creando la app de Firebase"}),"\n",(0,r.jsxs)(a.p,{children:["Accedemos a ",(0,r.jsx)(a.a,{href:"https://firebase.google.com/?gad_source=1&gclid=Cj0KCQiArrCvBhCNARIsAOkAGcVHjoBrZSs6g1mWjo7kdDvJqrAMOy0-4BuiSS8Yxx3WK0tMyqKcKFsaAlO2EALw_wcB&gclsrc=aw.ds&hl=es-419",children:"Firebase"})," le damos a ",(0,r.jsx)(a.code,{children:"comenzar"})," y creamos una cuenta, es posible que la session est\xe9 por defecto en tu navegador al acceder."]}),"\n",(0,r.jsxs)(a.p,{children:["Creamos un proyecto en firebase le damos en ",(0,r.jsx)(a.code,{children:"agregar proyecto"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(242).A+"",width:"1898",height:"664"})}),"\n",(0,r.jsxs)(a.p,{children:["Acontinuaci\xf3n agregamos un nombre al proyecto por ejemplo: ",(0,r.jsx)(a.code,{children:"Ecommerce React [tuNombre] Demo1"}),". puedes darle cualquier nombre."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(3553).A+"",width:"1040",height:"592"})}),"\n",(0,r.jsx)(a.p,{children:"No hace falta habilitar Google Analitycs para este ejemplo, lo quitamos"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(3386).A+"",width:"1103",height:"793"})}),"\n",(0,r.jsx)(a.p,{children:"Una vez creado el proyecto nos muestra esta ventana."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(963).A+"",width:"1900",height:"913"})}),"\n",(0,r.jsx)(a.p,{children:"ahora tenemos que crear una app dentro el proyecto Firebase."}),"\n",(0,r.jsxs)(a.p,{children:["En ",(0,r.jsx)(a.code,{children:"configuracion general"})," ir a ",(0,r.jsx)(a.code,{children:"Configuraci\xf3n del proyecto"}),". Esto nos da una vista general de la configuraci\xf3n del proyecto."]}),"\n",(0,r.jsxs)(a.p,{children:["Debemos desplazarnos hacia abajo y dar click en el icono ",(0,r.jsx)(a.code,{children:"</>"})," esto nos crea la app para nuestro proyecto de react, en este caso"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(796).A+"",width:"1437",height:"872"})}),"\n",(0,r.jsx)(a.p,{children:"Podemos darle un nombre cualquiera lo unico que nos interesan seran las credenciales de la app."}),"\n",(0,r.jsxs)(a.p,{children:["Click en ",(0,r.jsx)(a.code,{children:"Registrar app"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(9893).A+"",width:"1209",height:"479"})}),"\n",(0,r.jsxs)(a.p,{children:["Acontinuaci\xf3n click en ",(0,r.jsx)(a.code,{children:"Ir a la consola"})," las credenciales se mostrar\xe1 en la configuraci\xf3n de tu proyecto."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(2542).A+"",width:"1170",height:"845"})}),"\n",(0,r.jsx)(a.p,{children:"Si tienes algo similar a las credenciales de abajo es que ya tienes para modificar el archivo .env, en caso contrario habr\xeda que habilitarlos."}),"\n",(0,r.jsxs)(a.p,{children:["Es posible que ",(0,r.jsx)(a.code,{children:"databaseURL"})," no est\xe9 habilitado desde un inicio. Habr\xe1 que crearlos."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'\r\n// highlight-start\r\n  apiKey: "AIzaSyDIBa_Y4_srpvWyKUhbwyEu3jVMukME7II",\r\n  authDomain: "ecommerce-react-alicenon-demo.firebaseapp.com",\r\n  databaseURL: "https://ecommerce-react-alicenon-demo-default-rtdb.europe-west1.firebasedatabase.app",\r\n  projectId: "ecommerce-react-alicenon-demo",\r\n  storageBucket: "ecommerce-react-alicenon-demo.appspot.com",\r\n  messagingSenderId: "xxxxxxxxxxxx",\r\n  appId: "1:xxxxxxxxxxxx:web:92b82afa30263c6e018357"\r\n// highlight-end\r\n\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Comenzamos por ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Firestore database"})})," lo ubicar\xe1s desde el panel principal o bien buscando en ",(0,r.jsx)(a.code,{children:"Todos los productos"})," >> ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Firestore database"})})]}),"\n",(0,r.jsxs)(a.p,{children:["Damos click en ",(0,r.jsx)(a.code,{children:"Crear base de datos"})," la region por defecto y ",(0,r.jsx)(a.code,{children:"comenzar en modo de prueba"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(855).A+"",width:"1412",height:"811"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Cloud Firestorage"})," o ",(0,r.jsx)(a.strong,{children:"Firestore database"})," nos servira para administrar los usuarios y lo productos de la applicaci\xf3n."]}),"\n",(0,r.jsxs)(a.p,{children:["Ahora que lo tenemos, agregaremos una ",(0,r.jsx)(a.strong,{children:"Realtime Database"})," para sincronizar los datos en tiempo real."]}),"\n",(0,r.jsxs)(a.p,{children:["Buscamos en ",(0,r.jsx)(a.code,{children:"Todos los productos"})," >> ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Realtime Database"})})]}),"\n",(0,r.jsxs)(a.p,{children:["Damos click en ",(0,r.jsx)(a.code,{children:"Crear una base de datos"})," la region que prefieras, en mi caso la dejo en de europa y tambi\xe9n marcar el ",(0,r.jsx)(a.code,{children:"modo de prueba"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(272).A+"",width:"1250",height:"420"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(1449).A+"",width:"1188",height:"517"})}),"\n",(0,r.jsxs)(a.p,{children:["Verifique que ya tenga agregado la ",(0,r.jsx)(a.code,{children:"databaseURL"}),". En caso contrario, intente recargando la p\xe1gina."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",metastring:"title=config",children:'\r\n  apiKey: "AIzaSyDIBa_Y4_srpvWyKUhbwyEu3jVMukME7II",\r\n  authDomain: "ecommerce-react-alicenon-demo.firebaseapp.com",\r\n  // highlight-start \r\n  databaseURL: "https://ecommerce-react-alicenon-demo-default-rtdb.europe-west1.firebasedatabase.app",\r\n  // highlight-end\r\n  projectId: "ecommerce-react-alicenon-demo",\r\n  storageBucket: "ecommerce-react-alicenon-demo.appspot.com",\r\n  messagingSenderId: "xxxxxxxxxxxx",\r\n  appId: "1:xxxxxxxxxxxx:web:92b82afa30263c6e018357"\r\n\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Para almacenamiento se utiliza ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Storage"})})]}),"\n",(0,r.jsxs)(a.p,{children:["Volvemos a ",(0,r.jsx)(a.code,{children:"Todos los productos"})," >> ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Storage"})})]}),"\n",(0,r.jsxs)(a.p,{children:["Le damos en ",(0,r.jsx)(a.code,{children:"Comenzar"}),", la regi\xf3n te la detecta por defecto y marcarmos ",(0,r.jsx)(a.code,{children:"modo de prueba"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(8709).A+"",width:"1172",height:"413"})}),"\n",(0,r.jsxs)(a.p,{children:["Por ultimo necesitamos de ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Authentication"})})," de ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Firebase"})})," para Autenticar\r\nusuarios y administrarlos en nuestra aplicaci\xf3n."]}),"\n",(0,r.jsxs)(a.p,{children:["Lo ubicamos donde siempre, en ",(0,r.jsx)(a.code,{children:"Todos los productos"}),". Luego click en ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Authentication"})})," damos en ",(0,r.jsx)(a.code,{children:"Comenzar"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(5644).A+"",width:"1242",height:"400"})}),"\n",(0,r.jsxs)(a.p,{children:["Marcamos como proveedor nativo ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Correo electr\xf3nico/contrase\xf1a"})}),". Despu\xe9s habilitamos el primero para Correo electr\xf3nico, el segundo lo dejamos como est\xe1."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(9927).A+"",width:"1221",height:"510"})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"credenciales-y-proyecto-react",children:"Credenciales y Proyecto React"}),"\n",(0,r.jsx)(a.p,{children:"Apartir de aqu\xed utilizaremos las credenciales obtenidas en Firebase."}),"\n",(0,r.jsxs)(a.p,{children:["Recuerda encontrar el archivo ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:".env"})})," del proyecto y remplazar las credenciales que encontramos en la ",(0,r.jsx)(a.strong,{children:"Descripci\xf3n general"})," >> ",(0,r.jsx)(a.strong,{children:"Configuraci\xf3n del proyecto"})," de la app de Firebase."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(5420).A+"",width:"1582",height:"240"})}),"\n",(0,r.jsx)(a.p,{children:"Ejecutamos el poryecto React:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"yarn dev\n"})}),"\n","\n","\n",(0,r.jsxs)(a.p,{children:["Vamos a la app React al bot\xf3n ",(0,r.jsx)(o,{text:"Sing Up"})," para dar de alta a un usuario ",(0,r.jsx)(a.strong,{children:"administrador"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(2999).A+"",width:"1209",height:"474"})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"agregando-objetos-en-firestore-database",children:"Agregando objetos en Firestore Database"}),"\n",(0,r.jsxs)(a.p,{children:["Debemos localizar ",(0,r.jsx)(a.strong,{children:"Firestore Database"})," y cambiar el role del usuario que dimos de alta previamente al de ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"ADMIN"})})," le damos en ",(0,r.jsx)(a.code,{children:"Actualizar"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(3502).A+"",width:"1399",height:"677"})}),"\n",(0,r.jsxs)(a.p,{children:["Ahora debemos ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"cerrar sesi\xf3n"})})," en la app React."]}),"\n",(0,r.jsxs)(a.p,{children:["Volvemos a iniciar sesi\xf3n en ",(0,r.jsx)(o,{text:"Sing In"})]}),"\n",(0,r.jsxs)(a.p,{children:["Nos aparecer\xe1 un mensaje ",(0,r.jsx)(a.code,{children:"Welcome to admin dashboard"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(o,{text:"Product"})," >> ",(0,r.jsx)(o,{text:"Add New Product"})]}),"\n",(0,r.jsxs)(a.p,{children:["Agregamos un producto y le damos en ",(0,r.jsx)(o,{text:"Save Product"})," y listo!"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Docs Version Dropdown",src:s(6281).A+"",width:"1896",height:"908"})}),"\n",(0,r.jsxs)(a.p,{children:["Sientase libre de explorar Firebase y las apps de creaste dentro como ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Storage"})})," , ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"Authentication"})})," para verificar todo lo que se ha hecho hasta ahora."]}),"\n",(0,r.jsx)(a.hr,{})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6281:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/dashboard-react-app1-566290fd581c5f3985be98a5b1a252bd.png"},5420:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/env-react1-781f4b0dba006617d5452145f5f4607e.png"},2999:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/env-react2-4b7f524d254ab94a97ba6e359cce7077.png"},3502:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/env-react3-8e3e92ab1567e4e96adbc0cd59903608.png"},242:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project-e12a6f0502f451c2ca1473fffce4be4f.png"},3553:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project1-7ad4a9faa55c682b96b39af417bb263a.png"},8709:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project10-a58ab51145be0a3ceb956792da2902ff.png"},5644:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project11-3fa1441dd078b793fe6adcd600aeac06.png"},9927:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project12-417da4cbdab6ceb77a90d84fe6b65ee9.png"},3386:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project2-56ae51e988ba93da70d624c201bd94fc.png"},963:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project3-6cdc34c427f997104a6c0e545e90e3a8.png"},796:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project4-de949c15b02ceb3a3cb646c18a82e497.png"},9893:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project5-4ef411258d536272ad980e2c8a66c0b6.png"},2542:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project6-6c3eee37c151836da10b455b74784601.png"},855:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project7-8bd35fc790d790a78ca0038c6e0920e3.png"},272:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project8-d306581da53a500aa15a4d30423c6aee.png"},1449:(e,a,s)=>{s.d(a,{A:()=>r});const r=s.p+"assets/images/firebase-create-project9-f77c254525fa3e9fc7a449c5274b6004.png"},8453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>i});var r=s(6540);const n={},o=r.createContext(n);function c(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);