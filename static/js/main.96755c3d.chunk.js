(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={list:"contact-list_list__CIufM",item:"contact-list_item__2dlqc",button:"contact-list_button__eNX5H"}},20:function(t,e,n){t.exports={label:"filter_label__313o8",input:"filter_input__1yiZQ"}},30:function(t,e,n){t.exports={container:"styles_container__2sCQK"}},77:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),o=n(11),i=n.n(o),u=n(21),s=n(3),l=n(8),b=n.n(l),j=n(5),d=n(16),f=n(9),p=n.n(f),m=n(13),O=n(6),h=n(14),x=n.n(h),v=Object(O.b)("phonebook/addContact",function(){var t=Object(m.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("http://localhost:7777/contacts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_=Object(O.b)("phonebook/getContacts",Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:7777/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),g=Object(O.b)("phonebook/deleteContact",function(){var t=Object(m.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("http://localhost:7777/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),y=Object(O.c)({name:"phonebook",initialState:{items:[],loader:!1,error:""},extraReducers:(r={},Object(j.a)(r,v.pending,(function(t,e){t.loader=!0})),Object(j.a)(r,v.rejected,(function(t,e){t.loader=!1,t.error="error"})),Object(j.a)(r,v.fulfilled,(function(t,e){t.loader=!1,t.error="",t.items=[].concat(Object(d.a)(t.items),[e.payload])})),Object(j.a)(r,_.pending,(function(t,e){t.loader=!0})),Object(j.a)(r,_.rejected,(function(t,e){t.loader=!1,t.error="error"})),Object(j.a)(r,_.fulfilled,(function(t,e){t.loader=!1,t.error="",t.items=[].concat(Object(d.a)(t.items),Object(d.a)(e.payload))})),Object(j.a)(r,g.pending,(function(t,e){t.loader=!0})),Object(j.a)(r,g.rejected,(function(t,e){t.loader=!1,t.error="error"})),Object(j.a)(r,g.fulfilled,(function(t,e){t.loader=!1,t.error="",t.items=t.items.filter((function(t){return t.id!==e.payload}))})),r)}).reducer,k=n(7),N=function(t){return t.phonebook.items},C=function(t){return t.filter.value},w=Object(k.a)([N,C],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),S=Object(k.a)([N],(function(t){return t.length})),A=n(1);function F(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],l=o[1],j=Object(s.c)((function(t){return N(t)})),d=Object(s.b)(),f=function(){r(""),l("")};return Object(A.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault();var e=j.find((function(t){return t.name===n}));e?alert("".concat(e.name," is already in contacts")):(d(v({name:n,number:i})),f())},autoComplete:"off",children:[Object(A.jsxs)("label",{className:b.a.label,children:["Name",Object(A.jsx)("input",{className:b.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){r(t.target.value)},value:n})]}),Object(A.jsxs)("label",{className:b.a.label,children:["Number",Object(A.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){l(t.target.value)},value:i})]}),Object(A.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})}var T=n(20),z=n.n(T),Z=Object(O.c)({name:"filter",initialState:{value:""},reducers:{changeFilter:function(t,e){return{value:e.payload}}}}),q=Z.actions.changeFilter,B=Z.reducer;function D(){var t=Object(s.b)(),e=Object(s.c)((function(t){return C(t)}));return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("label",{className:z.a.label,children:["Find contacts by name",Object(A.jsx)("input",{className:z.a.input,type:"text",onChange:function(e){return t(q(e.currentTarget.value))},value:e})]})})}var J=n(15),M=n.n(J),E=function(){var t=Object(s.c)((function(t){return w(t)})),e=Object(s.b)();Object(c.useEffect)((function(){e(_())}),[e]);return Object(A.jsx)("ul",{className:M.a.list,children:t.map((function(t){return Object(A.jsxs)("li",{className:M.a.item,children:[t.name,": ",t.number,Object(A.jsx)("button",{className:M.a.button,type:"button",onClick:function(){var n;n=t.id,e(g(n))},children:"Delete"})]},t.id)}))})},H=n(30),I=n.n(H),L=n(31),P=n.n(L);function Q(){var t=Object(s.c)((function(t){return N(t)})),e=Object(s.c)((function(t){return S(t)})),n=Object(s.c)((function(t){return function(t){return t.phonebook.loader}(t)}));return Object(A.jsxs)("div",{className:I.a.container,children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(F,{}),0!==t.length?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("h2",{children:["Total contacts: ",e]}),Object(A.jsx)(D,{})]}):Object(A.jsx)("h2",{children:"Phonebook is empty"}),Object(A.jsx)(E,{}),n&&Object(A.jsx)(P.a,{type:"ThreeDots",color:"#363636",height:100,width:100,timeout:3e3})]})}var K={phonebook:y,filter:B},R=Object(O.a)({reducer:K,devTools:!1});i.a.render(Object(A.jsxs)(a.a.StrictMode,{children:[Object(A.jsx)(s.a,{store:R,children:Object(A.jsx)(Q,{})}),","]}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"contact-form_form__1HWST",label:"contact-form_label__31lii",input:"contact-form_input__2t4ct",button:"contact-form_button__2Bvpd"}}},[[77,1,2]]]);
//# sourceMappingURL=main.96755c3d.chunk.js.map