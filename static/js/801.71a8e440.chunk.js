"use strict";(self.webpackChunkdelivery=self.webpackChunkdelivery||[]).push([[801],{4801:function(e,s,a){a.r(s),a.d(s,{default:function(){return se}});var r=a(9439),n=a(5705),t=a(8007),i=a(2791),l=a(9085),o=(a(5462),a(1154)),d=a(1413),c={form:"userForm_form__S6XaP",inputsAndMapFormSection:"userForm_inputsAndMapFormSection__qyDRC",label:"userForm_label__nQnCK",hiddenLabel:"userForm_hiddenLabel__cP1Vg userForm_label__nQnCK",hiddenInput:"userForm_hiddenInput__tp7kc",autoCompleteInputContainer:"userForm_autoCompleteInputContainer__Hiy5Z",input:"userForm_input__88g6g",popupBubble:"userForm_popupBubble__bgx9O",popupBubbleName:"userForm_popupBubbleName__p6Wzw",marker:"userForm_marker__qJKN-"},u="cart_cartFormSection__NeDxb",p="cart_cardList__8ibnR",m="cart_totalPrize__8FbqM",h="cart_deliveryInfo__gSGkq",x="cart_closeDeliveryColor__jRAgj",f="cart_midDeliveryColor__5QLna",j="cart_farDeliveryColor__e04Ba",g="cart_highlighted__8XXOD",b="cart_dekiveryAsterisk__l6g-r",_=a(8695),v=a(5861),N=a(4687),C=a.n(N),y=a(176),k=a(4087),S=a(2427),Z=a(2844),F=a(2347),D=a(7885),w=a(9135),A=a(8674),I=a(7993),O=a(184),U=function(e){var s=e.setDestinationValue,a=e.chosenShop,n=e.isLoaded,t=e.destinationValue,o=e.showDeliveryCost,u=(0,i.useMemo)((function(){return function(e){var s,a,r,n={lat:46.398950646372334,lng:30.732959453049933},t={lat:46.47171105714595,lng:30.74066311256781},i={lat:46.41186191248775,lng:30.712226626646803},l={lat:46.485043244598266,lng:30.73751228540019},o={lat:46.47879697294342,lng:30.76553110029899},d={lat:46.48462022832956,lng:30.737307244958462};switch(e){case"yaposhka":s=n,a="\u041b\u044e\u0441\u0442\u0434\u043e\u0440\u0444\u0441\u044c\u043a\u0430 \u0434\u043e\u0440., 160/1, \u041e\u0434\u0435\u0441\u0430",r="Yaposhka";break;case"vilkipalki":s=t,a="\u0432\u0443\u043b. \u041f\u0443\u0448\u043a\u0456\u043d\u0441\u044c\u043a\u0430, 66, \u041e\u0434\u0435\u0441\u0430",r="Vilki Palki";break;case"pepperpoint":s=i,a="\u043f\u0440-\u0442 \u041d\u0435\u0431\u0435\u0441\u043d\u043e\u0457 \u0421\u043e\u0442\u043d\u0456, 6/8, \u041e\u0434\u0435\u0441\u0430",r="Pepper Point";break;case"kfs":s=l,a="\u0432\u0443\u043b. \u0414\u0435\u0440\u0438\u0431\u0430\u0441\u0456\u0432\u0441\u044c\u043a\u0430, 16, \u041e\u0434\u0435\u0441\u0430",r="KFS";break;case"burgerking":s=o,a="\u041f\u043b\u044f\u0436 \u041b\u0430\u043d\u0436\u0435\u0440\u043e\u043d, 25, \u041e\u0434\u0435\u0441\u0430",r="BurgerKing";break;case"macdonalds":s=d,a="\u0432\u0443\u043b. \u0414\u0435\u0440\u0438\u0431\u0430\u0441\u0456\u0432\u0441\u044c\u043a\u0430, 23, \u041e\u0434\u0435\u0441\u0430",r="McDonald`s";break;default:s=void 0}return{center:s,address:a,name:r}}(a)}),[a]),p=u.center,m=u.address,h=u.name,x=(0,i.useMemo)((function(){return function(){var e={strokeOpacity:.5,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,visible:!0};return{closeOpt:(0,d.Z)((0,d.Z)({},e),{},{fillOpacity:.09,zIndex:3,strokeColor:"#27f231",fillColor:"#27f231"}),farOpt:(0,d.Z)((0,d.Z)({},e),{},{fillOpacity:.09,zIndex:2,strokeColor:"#ebf700",fillColor:"#ebf700"}),farthestOpt:(0,d.Z)((0,d.Z)({},e),{},{fillOpacity:.09,zIndex:1,strokeColor:"#f2250f",fillColor:"#f2250f"})}}()}),[]),f=x.closeOpt,j=x.farOpt,g=x.farthestOpt,b=(0,i.useState)(null),_=(0,r.Z)(b,2),N=_[0],U=_[1],M=(0,i.useState)(null),R=(0,r.Z)(M,2),B=R[0],L=R[1],P=(0,i.useState)(""),z=(0,r.Z)(P,2),T=z[0],E=z[1],V=(0,i.useState)(""),q=(0,r.Z)(V,2),H=q[0],K=q[1],X=(0,i.useState)(!0),Y=(0,r.Z)(X,2),J=Y[0],W=Y[1];if(!n)return(0,O.jsx)(A.a,{});function Q(){return(Q=(0,v.Z)(C().mark((function e(){var s,a;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==m&&""!==t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,s=new google.maps.DirectionsService,W(!1),e.next=7,s.route({origin:p,destination:t,travelMode:google.maps.TravelMode.DRIVING});case 7:a=e.sent,L(a),E(a.routes[0].legs[0].distance.text),K(a.routes[0].legs[0].duration.text),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),"InvalidValueError"===e.t0.name&&(0,l.Am)("Destination address wasn`t found");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return(0,O.jsxs)(y.k,{position:"relative",flexDirection:"column",h:"380px",w:"100%",marginTop:"20px",children:[(0,O.jsx)(k.xu,{position:"absolute",h:"100%",w:"100%",children:(0,O.jsxs)(I.b6,{center:p,zoom:13,mapContainerStyle:{width:"100%",height:"100%"},options:{zoomControl:!0,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},onLoad:function(e){return U(e)},onClick:function(e){console.dir(e)},children:[(0,O.jsx)(I.xT,{position:p,mapPaneName:I.xT.OVERLAY_MOUSE_TARGET,getPixelPositionOffset:function(e,s){return{x:-e/2,y:-s/2}},children:(0,O.jsx)("div",{children:(0,O.jsx)("div",{className:c.marker,children:(0,O.jsxs)("div",{className:c.popupBubble,children:[(0,O.jsx)("p",{className:c.popupBubbleName,children:h}),(0,O.jsx)("p",{children:m})," "]})})})}),J&&(0,O.jsx)(I.Jx,{position:p}),o&&(0,O.jsxs)(O.Fragment,{children:[" ",(0,O.jsx)(I.Cd,{center:p,radius:2200,options:f}),(0,O.jsx)(I.Cd,{center:p,radius:5200,options:j}),(0,O.jsx)(I.Cd,{center:p,radius:7800,options:g})]}),B&&(0,O.jsx)(I.tH,{directions:B})]})}),(0,O.jsx)(k.xu,{p:2,borderRadius:"lg",m:3,bgColor:"white",shadow:"base",w:"fit-content",zIndex:"1",fontSize:"14px",children:(0,O.jsxs)(S.U,{spacing:1,justifyContent:"flex-start",children:[(0,O.jsx)(Z.z,{h:"30px",colorScheme:"rgb(136, 106, 106);",type:"submit",onClick:function(){return Q.apply(this,arguments)},backgroundColor:"rgb(136, 106, 106);",children:"Calculate Route"}),!J&&(0,O.jsxs)("div",{style:{paddingRight:20,paddingLeft:20},children:[(0,O.jsxs)(F.x,{children:["Distance: ",T," "]}),(0,O.jsxs)(F.x,{children:["Duration: ",H," "]})]}),(0,O.jsx)(D.h,{h:"30px","aria-label":"center back",icon:(0,O.jsx)(w.nkz,{}),isRound:!0,onClick:function(){N.panTo(p),N.setZoom(15)}}),(0,O.jsx)(D.h,{h:"30px","aria-label":"center back",icon:(0,O.jsx)(w.aHS,{}),onClick:function(){L(null),E(""),K(""),W(!0),s("")}})]})})," ",(0,O.jsx)(l.Ix,{})]})},M=(0,i.memo)(U),R=a(8496),B=a(370),L="cardInCart_dishCardContainer__YLxtv",P="cardInCart_imgContainer__KXoEE",z=a(456),T=function(e){var s=e.dish,a=s.dishName,n=s.type,t=s.imageURL,l=s.price,d=(0,o.Z)().setCart,c=(0,i.useReducer)(R.D,s.amount),u=(0,r.Z)(c,2),p=u[0],m=u[1];return(0,O.jsxs)("div",{className:L,children:[(0,O.jsxs)("div",{className:P,children:[" ",(0,O.jsx)("img",{src:t,className:z.Z.img,alt:"dish"})]})," ",(0,O.jsx)("h3",{className:z.Z.dishName,children:a}),(0,O.jsxs)("div",{className:z.Z.cardTextContainer,children:[(0,O.jsxs)("p",{children:["Type: ",(0,O.jsx)("span",{className:z.Z.highlighted,children:n})]}),(0,O.jsxs)("p",{children:["Price: ",(0,O.jsxs)("span",{className:z.Z.highlighted,children:[l," UAH"]})]}),(0,O.jsxs)("p",{children:["Quantity: ",(0,O.jsx)("span",{className:z.Z.highlighted,children:p})]}),(0,O.jsx)(B.Z,{setCart:d,setAmount:m,amount:p,dish:s})]})]})},E=function(e){var s=e.setDeliveryCost,a=e.showDeliveryCost,n=(0,o.Z)().cart,t=(0,i.useState)(0),l=(0,r.Z)(t,2),d=l[0],c=l[1];(0,i.useEffect)((function(){c((function(){var e=0;return n.map((function(s){return e+=s.amount*s.price})),e}))}),[n]);return(0,O.jsxs)("div",{children:[(0,O.jsx)("section",{children:(0,O.jsx)("ul",{className:p,children:n.map((function(e){return(0,O.jsx)(T,{dish:e},e._id)}))})}),(0,O.jsxs)("div",{className:m,children:[(0,O.jsx)("button",{type:"button",className:_.Z.deliveryCostBtn,onClick:function(){s(!a)},children:"What's delivery cost ?"}),a&&(0,O.jsxs)("div",{className:h,children:[(0,O.jsx)("span",{className:x,children:"free"}),(0,O.jsx)("span",{className:f,children:"30 UAH"}),(0,O.jsx)("span",{className:j,children:"60 UAH"}),(0,O.jsx)("span",{className:b,children:"* Has not yet been included into total prize"})]}),(0,O.jsxs)("span",{children:["Total prize: ",(0,O.jsxs)("span",{className:g,children:[d," UAH"]})]})]})]})},V=(0,i.memo)(E),q=a(5717),H=["places"],K=function(e){var s=e.formikProps,a=e.chosenShop,t=e.formSubmitedFlag,l=e.handleUpdateForm;(0,i.useEffect)((function(){l(s.values)}),[l,s.values]);var o,p=(0,i.useState)(""),m=(0,r.Z)(p,2),h=m[0],x=m[1],f=(0,i.useState)(!1),j=(0,r.Z)(f,2),g=j[0],b=j[1],v=!(o="zaSyCu5fHLU8xwV8qrXFtXiNK9g3_tZ9UHX").includes("dds5588drYT")&&function(e){var s="AI"+e+"UY";return s.replace("erdfdfsdf88d5","sERf554"),s.replace("ed/8tt55","sdd54"),s.replace("erdfsdsdsd999988dd5","01d0"),s.replace("e77er","sERd584"),s.replace("ed/855","sdd54"),s.replace("erdfrtrtrsew7d999988dd5","0wee"),s.replace("erdfdfsdf88d5","ORd584"),s.replace("ed/855","sdd54"),s.replace("erdfsdsdsd999988dd5","0100"),s.replace("UHXdfdrereUY","7566"),s.replace("erdfdf888f99d_Dd5","sd584"),s.replace("UHXUY","UHXT8").replace("erdfdfsdf88d5","sERd584").replace("ed/855","sdd54").replace("erdfsdsdsd999988dd5","0100").replace("d48f9989_Dd5","sd87s")}(o),N=(0,I.Ji)({googleMapsApiKey:v,libraries:H}).isLoaded;return(0,O.jsxs)(n.l0,{className:c.form,children:[(0,O.jsxs)("div",{className:c.inputsAndMapFormSection,onMouseLeave:function(){h&&s.setFieldValue("address",h.label)},children:[(0,O.jsxs)("label",{className:c.label,children:["Name",(0,O.jsx)(n.gN,{name:"name",type:"text",placeholder:"Type your name",className:c.input}),(0,O.jsx)(n.Bc,{name:"name",component:"div",className:c.errorMessage})]}),(0,O.jsxs)("label",{className:c.label,children:["Email",(0,O.jsx)(n.gN,{name:"email",type:"email",placeholder:"Email",className:c.input}),(0,O.jsx)(n.Bc,{name:"email",component:"div",className:c.errorMessage})]}),(0,O.jsxs)("label",{className:c.label,children:["Phone",(0,O.jsx)(n.gN,{className:c.input,name:"phone",type:"text",placeholder:"Phone number"}),(0,O.jsx)(n.Bc,{name:"phone",component:"div",className:c.errorMessage})]}),N?(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("label",{className:c.hiddenLabel,children:["Address",(0,O.jsx)("div",{className:c.autoCompleteInputContainer,children:(0,O.jsx)(q.ZP,{apiKey:v,apiOptions:{region:"UA"},selectProps:{styles:{option:function(e){return(0,d.Z)((0,d.Z)({},e),{},{color:"rgb(136, 106, 106)",fontWeight:"normal",FontSize:"15px"})}},destinationValue:h,onChange:x}})}),(0,O.jsx)(n.gN,{className:c.hiddenInput,name:"address",type:"text"}),(0,O.jsx)(n.Bc,{name:"address",component:"div",className:c.errorMessage})]})}):(0,O.jsxs)("label",{className:c.hiddenLabel,children:["Address",(0,O.jsx)(n.gN,{className:c.input,name:"address",type:"text"}),(0,O.jsx)(n.Bc,{name:"address",component:"div",className:c.errorMessage})]}),(0,O.jsx)(M,{chosenShop:a,destinationValue:h.label,setDestinationValue:x,isLoaded:N,showDeliveryCost:g})]}),(0,O.jsxs)("section",{className:u,children:[" ",(0,O.jsx)(V,{chosenShop:a,showDeliveryCost:g,setDeliveryCost:b}),(0,O.jsx)("button",{type:"submit",className:_.Z.submitBtn,disabled:t,children:"Submit"})]})]})},X=(0,t.Ry)({name:(0,t.Z_)().required("Name is reqiuired"),email:(0,t.Z_)().email("Must be a valid email").required("Email is reqiuired"),phone:(0,t.Z_)().required("Phone is reqiuired").min(5,"At least 5 characters long").max(12,"No more than 12 characters long"),address:(0,t.Z_)().required("Destination address is required")}),Y={name:"",email:"",phone:"",address:""},J=function(e){var s=e.chosenShop,a=function(e){var s=e.key,a=e.value,n=JSON.parse(localStorage.getItem(s)||"{}"),t=Object.keys(n).length>0?n:a,l=(0,i.useState)(t),o=(0,r.Z)(l,2),d=o[0],c=o[1];return[d,(0,i.useCallback)((function(e){c(e),localStorage.setItem(s,JSON.stringify(e))}),[s])]}({key:"Form data",value:Y}),t=(0,r.Z)(a,2),d=t[0],c=t[1],u=(0,o.Z)().cart,p=(0,i.useState)(!1),m=(0,r.Z)(p,2),h=m[0],x=m[1];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(n.J9,{enableReinitialize:!0,validationSchema:X,initialValues:d,onSubmit:function(e,s){s.setSubmitting(!1),console.log(e),console.log(u),(0,l.Am)("We saved details of your order. Keep an ear out for our call"),x(!0),setTimeout((function(){x(!1)}),5e3)},children:function(e){return(0,O.jsx)(K,{formikProps:e,handleUpdateForm:c,chosenShop:s,formSubmitedFlag:h})}}),(0,O.jsx)(l.Ix,{})]})},W=a(1087),Q=a(8085),G=function(){return(0,O.jsxs)("div",{className:Q.Z.emptyCartContentContainer,children:[(0,O.jsx)("div",{style:{marginBottom:35},children:"Cart is empty. \ud83d\ude15"}),(0,O.jsx)("div",{style:{marginBottom:25},children:"Don't starve !!!"}),(0,O.jsxs)("div",{children:["Add some tasty dishes on ",(0,O.jsxs)(W.rU,{to:"/",children:[" ",(0,O.jsx)("span",{className:Q.Z.shopLink,children:"Shop"})," "]})," page. \ud83c\udf2e \ud83c\udf79"]})]})},$=a(6642),ee=a(564),se=function(e){var s=e.chosenShop,a=(0,o.Z)().cart;return(0,O.jsx)("div",{children:(0,O.jsx)($.x,{theme:ee.rS,children:a.length?(0,O.jsx)(J,{chosenShop:s}):(0,O.jsx)(G,{})})})}}}]);
//# sourceMappingURL=801.71a8e440.chunk.js.map