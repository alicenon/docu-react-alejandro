"use strict";(self.webpackChunkmy_doc_site_ecommerce_react=self.webpackChunkmy_doc_site_ecommerce_react||[]).push([[2679],{1707:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=a(4848),t=a(8453);const i={sidebar_label:"Ejercicio 6 de Clases1 con array de cuentas"},s=void 0,c={id:"PROGRAMACION/06EJER-CUENTABANCARIA",title:"06EJER-CUENTABANCARIA",description:"Realiza un programa en Java que permita crear cuentas bancarias pidiendo la cantidad",source:"@site/docs/PROGRAMACION/06EJER-CUENTABANCARIA.md",sourceDirName:"PROGRAMACION",slug:"/PROGRAMACION/06EJER-CUENTABANCARIA",permalink:"/docu-react-alejandro/es/docs/PROGRAMACION/06EJER-CUENTABANCARIA",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PROGRAMACION/06EJER-CUENTABANCARIA.md",tags:[],version:"current",frontMatter:{sidebar_label:"Ejercicio 6 de Clases1 con array de cuentas"},sidebar:"tutorialSidebar",previous:{title:"UT4: PROGRAMACI\xd3N ORIENTADA A OBJETOS",permalink:"/docu-react-alejandro/es/docs/PROGRAMACION/02PROGRAMACI\xd3N-ORIENTADA-A-OBJETOS"},next:{title:"Incorporar JARs de otros proyectos en Eclipse: Gu\xeda paso a paso",permalink:"/docu-react-alejandro/es/docs/PROGRAMACION/Acceder_a_otro_proyecto_con_JAR"}},o={},u=[{value:"0 Menu",id:"0-menu",level:2},{value:"1 Crear una cuenta",id:"1-crear-una-cuenta",level:2},{value:"2 Ingresar una cantidad en una cuenta",id:"2-ingresar-una-cantidad-en-una-cuenta",level:2},{value:"3 Retirar una cantidad en una cuenta",id:"3-retirar-una-cantidad-en-una-cuenta",level:2},{value:"4 Visualizar los datos de una cuenta",id:"4-visualizar-los-datos-de-una-cuenta",level:2},{value:"5 Visualizar todas las cuentas con su saldo actual",id:"5-visualizar-todas-las-cuentas-con-su-saldo-actual",level:2},{value:"6 Salir",id:"6-salir",level:2}];function d(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Realiza un programa en Java que permita crear cuentas bancarias pidiendo la cantidad\r\ninicial al usuario y el n\xfamero de cuenta, as\xed como realizar las operaciones de ingresar y\r\nsacar dinero de esas cuentas. En el caso de intentar sacar de la cuenta corriente m\xe1s\r\ndinero del que hay, se mostrar\xe1 el mensaje de error correspondiente\r\nEl programa dispondr\xe1 de los m\xe9todos asociados que consideres necesarios para ofrecer\r\nal usuario un men\xfa con las siguientes opciones:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Crear una cuenta"}),"\n",(0,r.jsx)(e.li,{children:"Ingresar una cantidad en una cuenta"}),"\n",(0,r.jsx)(e.li,{children:"Retirar una cantidad en una cuenta"}),"\n",(0,r.jsx)(e.li,{children:"Visualizar los datos de una cuenta"}),"\n",(0,r.jsx)(e.li,{children:"Visualizar todas las cuentas con su saldo actual"}),"\n",(0,r.jsx)(e.li,{children:"Salir\r\nNota: no vamos a contemplar si ya existe una cuenta ya creada con el mismo n\xfamero de\r\ncuenta."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"0-menu",children:"0 Menu"}),"\n",(0,r.jsx)(e.p,{children:"El menu lo hice mediante esta logica:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'        Scanner teclado;\r\n        int valor = 0;\r\n        while (valor != 6) {\r\n            System.out.println("PULSA EN LA OPCION OJO 6 PARA SALIR");\r\n            System.out.println("1. CREAR CUENTA");\r\n            System.out.println("2. INGRESAR CANTIDAD ");\r\n            System.out.println("3. RETIRAR UNA CANTIDAD  ");\r\n            System.out.println("4. VIZUALIZAR LOS DATOS DE UNA CUENTA  ");\r\n            System.out.println("5. VIZUALIZAR TODAS LAS CUENTAS CON SU SALDO ACTUAL");\r\n            System.out.println("6. SALIR  ");\r\n            teclado = new Scanner(System.in);\r\n            valor = Integer.parseInt(teclado.nextLine());\r\n            // ESTRUCTURA DE CONTROL CON CASOS\r\n            switch (valor) {\r\n                case 1:\r\n                    System.out.println("OPCION 1, ESTAS APUNTO DE CREAR UNA CUENTA");\r\n                    crearCuenta();\r\n\r\n                    break;\r\n                case 2:\r\n                    // ingresarCantidad();\r\n                    System.out.println("OPCION 2");\r\n                    break;\r\n                case 3:\r\n                    // retirarCantidad()\r\n                    break;\r\n                case 4:\r\n                    vizualizarCuenta();\r\n                    // System.out.println(cuentaBancaria1[0]);\r\n\r\n                    break;\r\n                case 5:\r\n                    vizualizarTodasCuentas();\r\n                    break;\r\n                default:\r\n                    System.out.println("NO CORRESPONDE CON NINGUNA OPCION!");\r\n                    break;\r\n            }\r\n\r\n        }\r\n        // EN CASO DE QUE VALOR SEA 6, SALIMOS\r\n        System.out.println("HASTA PRONTO!");\r\n\n'})}),"\n",(0,r.jsx)(e.h2,{id:"1-crear-una-cuenta",children:"1 Crear una cuenta"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'   public static void ingresarCantidadCuenta() {\r\n        Scanner teclado = new Scanner(System.in);\r\n        System.out.println("En que cuenta quieres ingresar?: ");\r\n        // indice del array de objetos\r\n        int indice = Integer.parseInt(teclado.nextLine());\r\n        cuentaBancaria1[indice].ingresarDinero();\r\n\r\n    }\r\n\n'})}),"\n",(0,r.jsx)(e.h2,{id:"2-ingresar-una-cantidad-en-una-cuenta",children:"2 Ingresar una cantidad en una cuenta"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'    public static void ingresarCantidadCuenta() {\r\n        Scanner teclado = new Scanner(System.in);\r\n        System.out.println("En que cuenta quieres ingresar?: ");\r\n        // indice del array de objetos\r\n        int indice = Integer.parseInt(teclado.nextLine());\r\n        cuentaBancaria1[indice].ingresarDinero();\r\n\r\n    }\r\n\n'})}),"\n",(0,r.jsx)(e.h2,{id:"3-retirar-una-cantidad-en-una-cuenta",children:"3 Retirar una cantidad en una cuenta"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'    public static void retirarCantidad() {\r\n        Scanner teclado = new Scanner(System.in);\r\n        System.out.println("En que cuenta quieres sacar dinero?: ");\r\n        // indice del array de objetos\r\n        int indice = Integer.parseInt(teclado.nextLine());\r\n\r\n        System.out.println("Cuanto dinero desea sacar?");\r\n        int sacarDinero = Integer.parseInt(teclado.nextLine());\r\n        cuentaBancaria1[indice].sacarDinero(sacarDinero);\r\n    }\n'})}),"\n",(0,r.jsx)(e.h2,{id:"4-visualizar-los-datos-de-una-cuenta",children:"4 Visualizar los datos de una cuenta"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'    public static void vizualizarCuenta() {\r\n        Scanner teclado = new Scanner(System.in);\r\n\r\n        System.out.print("Ingrese el \xedndice de la cuenta que desea visualizar (0 a " +\r\n                (CuentaBancaria.getNumCuentas() - 1) + "): ");\r\n        int indice = Integer.parseInt(teclado.nextLine());\r\n\r\n        if (indice >= 0 && indice < CuentaBancaria.getNumCuentas()) {\r\n            // el tostring esta por defecto mostrando el saldo, en este casoel saldo de cada\r\n            // cuenta\r\n            System.out.println(cuentaBancaria1[indice]);\r\n        } else {\r\n            System.out.println("NO EXITE ESTA CUENTA");\r\n        }\r\n    }\r\n\n'})}),"\n",(0,r.jsx)(e.h2,{id:"5-visualizar-todas-las-cuentas-con-su-saldo-actual",children:"5 Visualizar todas las cuentas con su saldo actual"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'    public static void vizualizarTodasCuentas() {\r\n        // Usamos for-each para recorrer todas las cuentas creadas\r\n        int contadorAuxCuenta = 0;\r\n        for (CuentaBancaria cuentaBancaria : cuentaBancaria1) {\r\n            // cuentaBancaria tiene el metodo ToString por defecto para mostrar el saldo\r\n            if (cuentaBancaria != null) {\r\n                contadorAuxCuenta++;\r\n                System.out.println("CUENTA " + contadorAuxCuenta + "Con " + cuentaBancaria);\r\n\r\n            }\r\n\r\n        }\r\n        if (CuentaBancaria.getNumCuentas() == 0) {\r\n            System.out.println("NO HAY CUENTAS REGISTRADAS");\r\n        }\r\n    }\n'})}),"\n",(0,r.jsx)(e.h2,{id:"6-salir",children:"6 Salir"}),"\n",(0,r.jsx)(e.p,{children:"Utilizando el bucle mientras es distinto de 6 se sale del bucle del menu"})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>c});var r=a(6540);const t={},i=r.createContext(t);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);