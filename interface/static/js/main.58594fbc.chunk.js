(this.webpackJsonpgdrive=this.webpackJsonpgdrive||[]).push([[0],{111:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(13),o=n.n(i),r=(n(111),n(93)),s=n(11),l=n(24),d=n(9),u=n(179),j=n(169),b=n(181),O=n(2);n(37).config();var h=function(){var e=Object(s.f)();Object(a.useEffect)((function(){document.title="Login - Drive Clone",fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IP,"/is-logged"),{method:"GET",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.success&&e.push("/")})).catch((function(e){return console.log(e)}))}),[e]);var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),r=Object(d.a)(o,2),h=r[0],f=r[1],p=Object(a.useState)(!1),m=Object(d.a)(p,2),g=m[0],v=m[1],x=Object(a.useState)(!1),S=Object(d.a)(x,2),C=S[0],N=S[1],T=Object(j.a)((function(e){return{margin:{margin:e.spacing(1)}}}))(),R=function(t,n){var a={username:t,password:n};fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IP,"/login"),{method:"POST",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){t.success?e.push("/"):v(!1)})).catch((function(e){return console.log(e)}))};return Object(O.jsx)("div",{className:"login-container",children:Object(O.jsxs)("form",{className:"login-form",children:[Object(O.jsxs)("div",{className:"form-header",children:[Object(O.jsx)("img",{className:"form-logo",src:"/Static/google_drive.svg",alt:"Drive Logo"}),Object(O.jsx)("h3",{className:"form-title",children:"Login"})]}),Object(O.jsx)(u.a,Object(l.a)(Object(l.a)({id:"outlined-full-width login-email",label:"Username",style:{margin:8}},!g&&C?{error:!0}:{}),{},{placeholder:"Username",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},autoComplete:"off",variant:"outlined",onChange:function(e){i(e.target.value)}})),Object(O.jsx)(u.a,Object(l.a)(Object(l.a)({id:"outlined-full-width login-password",type:"password",label:"Password",style:{margin:8}},!g&&C?{error:!0}:{}),{},{placeholder:"Password",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},autoComplete:"off",variant:"outlined",onChange:function(e){f(e.target.value)}})),Object(O.jsx)("div",{className:"links-div",children:Object(O.jsx)("a",{href:"/register",className:"forgot-password",children:"Dont have an Account? Register Now."})}),Object(O.jsx)(b.a,{type:"submit",variant:"contained",size:"medium",color:"primary",className:T.margin,onClick:function(e){e.preventDefault();/^[a-z ,.'-]+$/i.test(c)&&/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(h)?(v(!0),e.preventDefault(),R(c,h)):v(!1),N(!0)},children:"Login"})]})})};n(37).config();var f=function(){Object(a.useEffect)((function(){document.title="Register - Drive Clone"}),[]);var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(d.a)(i,2),r=o[0],h=o[1],f=Object(a.useState)(""),p=Object(d.a)(f,2),m=p[0],g=p[1],v=Object(a.useState)(!1),x=Object(d.a)(v,2),S=x[0],C=x[1],N=Object(a.useState)(!1),T=Object(d.a)(N,2),R=T[0],_=T[1],E=Object(j.a)((function(e){return{margin:{margin:e.spacing(1)}}}))(),y=Object(s.f)(),P=function(e){e.preventDefault();var t={username:n,email:r,password:m};fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IP,"/register"),{method:"POST",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.success?(C(!0),y.push("/login")):C(!1)})).catch((function(e){return console.log(e)}))};return Object(O.jsx)("div",{className:"login-container",children:Object(O.jsxs)("form",{className:"login-form",children:[Object(O.jsxs)("div",{className:"form-header",children:[Object(O.jsx)("img",{className:"form-logo",src:"/Static/google_drive.svg",alt:"Drive Logo"}),Object(O.jsx)("h3",{className:"form-title",children:"Register"})]}),Object(O.jsx)(u.a,Object(l.a)(Object(l.a)({id:"outlined-full-width",label:"Name",style:{margin:8}},!S&&R?{error:!0}:{}),{},{placeholder:"Name",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},autoComplete:"off",variant:"outlined",onChange:function(e){c(e.target.value)}})),Object(O.jsx)(u.a,Object(l.a)(Object(l.a)({id:"outlined-full-width",label:"Email",style:{margin:8}},!S&&R?{error:!0}:{}),{},{placeholder:"Email",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},autoComplete:"off",variant:"outlined",onChange:function(e){h(e.target.value)}})),Object(O.jsx)(u.a,Object(l.a)(Object(l.a)({id:"outlined-full-width",type:"password",label:"Password",style:{margin:8}},!S&&R?{error:!0}:{}),{},{placeholder:"Password",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},autoComplete:"off",variant:"outlined",onChange:function(e){g(e.target.value)}})),Object(O.jsx)("div",{className:"links-div",children:Object(O.jsx)("a",{href:"/login",className:"forgot-password",children:"Already Have an Account? Login."})}),Object(O.jsx)(b.a,{type:"submit",variant:"contained",size:"medium",color:"primary",className:E.margin,onClick:function(e){e.preventDefault();/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)&&/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(m)&&/^[a-z ,.'-]+$/i.test(n)?(C(!0),P(e,r,m)):C(!1),_(!0)},children:"Register"})]})})},p=(n(184),n(131));n(37).config();n(82);n(37).config();var m=function(e){e.sideBarOption,e.setSideBarOption,e.reRender,e.setReRender;var t=Object(a.useState)(!1),n=Object(d.a)(t,2);n[0],n[1],Object(p.a)({btn:{color:"#5F6368"},uploadbtn:{color:"#2185FC",fontSize:"40px"}})();return Object(O.jsx)("div",{})},g=n(70),v=n.n(g),x=n(180),S=n(183),C=n(71),N=n.n(C),T=n(72),R=n.n(T),_=n(91),E=n.n(_),y=n(92),P=n.n(y);n(37).config();var w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,borderRadius:5,bgcolor:"background.paper",boxShadow:24,p:4},D=function(e){e.sideBarOption,e.reRender,e.setReRender;var t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!1),r=Object(d.a)(o,2),s=r[0],l=r[1],u=Object(a.useState)(null),j=Object(d.a)(u,2),b=j[0],h=j[1],f=Object(a.useState)(""),m=Object(d.a)(f,2),g=m[0],C=m[1],T=Object(a.useState)(!1),_=Object(d.a)(T,2),y=_[0],D=_[1],A=Object(a.useState)(0),k=Object(d.a)(A,2),L=k[0],F=k[1],z=Object(p.a)({btn:{color:"#5F6368"},uploadbtn:{color:"#2185FC",fontSize:"40px"}})(),I=function(){return D(!1)},W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90%",height:"90%",borderRadius:5,bgcolor:"background.paper",boxShadow:24,p:4},U=function(){return l(!1)},H=function(e){return C(e)};return Object(a.useEffect)((function(){fetch("http://localhost:3001/data/".concat(g)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[L,g]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsxs)("div",{className:"upload-btn",onClick:function(){return D(!0)},children:[Object(O.jsx)(v.a,{className:z.uploadbtn}),"Upload"]}),Object(O.jsx)("div",{className:"upload-btn",onClick:function(){return H("")},children:"Tous types de fichers"}),Object(O.jsxs)("div",{className:"upload-btn",onClick:function(){return H(".pdf")},children:[Object(O.jsx)(N.a,{className:z.uploadbtn}),"PDF"]}),Object(O.jsxs)("div",{className:"upload-btn",onClick:function(){return H(".jpg")},children:[Object(O.jsx)(R.a,{className:z.uploadbtn}),"Images"]}),Object(O.jsxs)("div",{className:"upload-btn",onClick:function(){return H(".html")},children:[Object(O.jsx)(E.a,{className:z.uploadbtn}),"HTML"]}),Object(O.jsxs)("div",{className:"upload-btn",onClick:function(){return H(".txt")},children:[Object(O.jsx)(P.a,{className:z.uploadbtn}),"Texte"]}),Object(O.jsx)(x.a,{open:y,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(O.jsx)(S.a,{className:"upload-modal",sx:w,children:Object(O.jsxs)("form",{id:"file-upload-form",class:"uploader",onSubmit:function(e){!function(e){e.preventDefault();var t=new FormData(e.target);fetch("http://127.0.0.1:3001/upload",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){F((function(e){return e+1})),I()})).catch((function(e){return console.error(e)}))}(e)},onChange:function(e){e.target.files.length>0&&document.getElementById("confirm").click()},enctype:"multipart/form-data",children:[Object(O.jsx)("input",{id:"file-upload",type:"file",name:"fileUpload",accept:".zip"}),Object(O.jsx)("input",{type:"submit",id:"confirm",style:{visibility:"hidden"}}),Object(O.jsx)("label",{for:"file-upload",id:"file-drag",children:Object(O.jsxs)("div",{id:"start",children:[Object(O.jsx)("i",{class:"fa fa-download","aria-hidden":"true"}),Object(O.jsx)("div",{children:"Selectionner un .zip "})]})})]})})}),Object(O.jsx)("ul",{className:"sidebar-list"})]}),Object(O.jsx)("div",{className:"main",children:c&&c.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:e.extension.replace(".","")+".png",height:"10%",width:"10%",onClick:function(){return t=e.path,fetch("http://localhost:3001/file?file=".concat(t)).then((function(e){return e.blob()})).then((function(e){var t=URL.createObjectURL(e);h(t)})).catch((function(e){return console.error(e)})),void l(!0);var t}}),Object(O.jsx)(x.a,{open:s,onClose:U,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(O.jsx)(S.a,{className:"upload-modal",sx:W,children:b&&Object(O.jsx)("iframe",{src:b,width:"100%",height:"100%"})})}),Object(O.jsx)("p",{children:e.path.replace("uploads/Mes Fichiers/","")}),Object(O.jsxs)("p",{children:["taille :",e.taille/1e3," Ko"]})]},t)}))})]})};n(37).config();var A=function(){var e=Object(s.f)();Object(a.useEffect)((function(){document.title="Projet Florian";fetch("localhost:3000/is-logged",{method:"GET",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.success?(b(!0),c(t.user)):(b(!1),e.push("/login"))})).catch((function(e){return console.log(e)}))}),[e]);var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=(n[0],n[1]),i=Object(a.useState)(0),o=Object(d.a)(i,2),r=o[0],l=o[1],u=Object(a.useState)(!1),j=Object(d.a)(u,2),b=(j[0],j[1]),h=Object(a.useState)(0),f=Object(d.a)(h,2),p=f[0],g=f[1];return Object(O.jsx)("div",{className:"dashboard-container",children:Object(O.jsxs)("div",{className:"main-flex",children:[Object(O.jsx)(m,{setSideBarOption:l,reRender:p,setReRender:g}),Object(O.jsx)(D,{sideBarOption:r,reRender:p,setReRender:g})]})})};var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(r.a,{children:Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/login",children:Object(O.jsx)(h,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/register",children:Object(O.jsx)(f,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/",children:Object(O.jsx)(A,{})})]})})})};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))},82:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.58594fbc.chunk.js.map