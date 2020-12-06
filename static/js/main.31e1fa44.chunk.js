(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{44:function(t,n,e){},45:function(t,n,e){},46:function(t,n,e){},47:function(t,n,e){},48:function(t,n,e){},49:function(t,n,e){},50:function(t,n,e){"use strict";e.r(n);var a,c=e(1),r=e(0),i=e(7),o=e.n(i),s=e(5),l=e(4),u=e(16),d=e(6),b=e(31),m={ADD_CONTACT:"record/add",DEL_CONTACT:"record/del"},f={addContact:Object(l.b)(m.ADD_CONTACT),delContact:Object(l.b)(m.DEL_CONTACT)},j=JSON.parse(localStorage.getItem("contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],p=Object(l.c)(j,(a={},Object(d.a)(a,f.addContact,(function(t,n){var e=[].concat(Object(b.a)(t),[n.payload]);return localStorage.setItem("contacts",JSON.stringify(e)),e})),Object(d.a)(a,f.delContact,(function(t,n){var e=t.filter((function(t){return t.id!==n.payload}));return localStorage.setItem("contacts",JSON.stringify(e)),e})),a)),h={FILTER_CHANGE:"filter/change"},x={filterChange:Object(l.b)(h.FILTER_CHANGE)},O=Object(l.c)("",Object(d.a)({},x.filterChange,(function(t,n){return n.payload}))),g=Object(u.b)({items:p,filter:O}),v=Object(l.a)({reducer:{contacts:g}}),C=e(52),N=e(8),_=e(9);function y(){var t=Object(N.a)(["\n    margin: 0;\n    padding: 0;\n    font-size: 30px;\n    font-weight: 900px;\n    margin-bottom: 30px;\n    color: #3f51b5;\n"]);return y=function(){return t},t}var k=_.a.h2(y()),w=function(t){var n=t.title;return Object(c.jsx)(k,{className:"title",children:n})};w.defaultProps={};var E=w;function T(){var t=Object(N.a)(["\n    width: 1200px;\n    padding: 15px 15px;\n    margin: 0 auto;\n\n    @media sreen and (min-width: 450px){\n        width: 450px;\n    }\n\n    @media sreen and (min-width: 768px){\n        width: 768px;\n    }\n\n    @media sreen and (min-width: 1200px){\n        width: 1200px;\n    }\n"]);return T=function(){return t},t}var A=_.a.div(T()),S=function(t){var n=t.children;return Object(c.jsx)(A,{children:n})},F=e(14),D=e(29),I=e(30),H=e(33),L=e(32),P=e(53);function J(){var t=Object(N.a)(["\n    position: absolute;\n    width: 200px;\n    min-height: 40px;\n    top: 30px;\n    right: 500px;\n    background-color: orangered;\n    color: white;\n    border-radius: 5px;\n    padding: 10px;\n"]);return J=function(){return t},t}var M=_.a.div(J()),R=function(t){var n=t.content,e=t.onClick;return Object(c.jsx)(M,{className:"err-msg",onClick:e,children:n})};function z(){var t=Object(N.a)(["\n    padding: 8px 16px;\n    border-radius: 5px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;    \n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n    &:hover, &:focus {\n        background-color: #303f9f;\n    }\n"]);return z=function(){return t},t}var B=_.a.button(z()),G=function(t){var n=t.type,e=t.children,a=t.onClick,r=t.className;return Object(c.jsx)(B,{type:n,onClick:a,className:r,children:e})};G.defaultProps={type:"button",className:"",handleClick:function(){}};var K=G,X=(e(44),{name:"",number:"",isExist:!1}),q=function(t){Object(H.a)(e,t);var n=Object(L.a)(e);function e(){var t;Object(D.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state=Object(F.a)({},X),t.changeHandler=function(n){var e=n.target;t.setState(Object(d.a)({},e.name,e.value))},t.submitHandler=function(n){if(n.preventDefault(),t.isContactExists(t.state.name))t.showErrMsg();else{var e=t.makeRecord();t.props.onContactAdd(e),t.setState(Object(F.a)({},X))}},t.hideErrMsg=function(){t.setState({isExist:!1})},t}return Object(I.a)(e,[{key:"isContactExists",value:function(t){return this.props.contacts.some((function(n){return n.name===t}))}},{key:"showErrMsg",value:function(){var t=this;this.setState({isExist:!0}),setTimeout((function(){return t.hideErrMsg()}),2e3)}},{key:"makeRecord",value:function(){var t=Object(P.a)(),n=this.state;return{id:t,name:n.name,number:n.number}}},{key:"render",value:function(){var t=this.state,n=t.name,e=t.number,a=t.isExist;return Object(c.jsxs)("form",{className:"contacts-form",onSubmit:this.submitHandler,children:[Object(c.jsx)(C.a,{in:a,classNames:"err",appear:!0,unmountOnExit:!0,timeout:250,children:Object(c.jsx)(R,{content:"This person is already in your contacts list",onClick:this.hideErrMsg})}),Object(c.jsxs)("div",{className:"contacts-form__group",children:[Object(c.jsx)("label",{className:"contacts-form__label",htmlFor:"contactName",children:"Name"}),Object(c.jsx)("input",{className:"contacts-form__input",onChange:this.changeHandler,id:"contactName",name:"name",value:n})]}),Object(c.jsxs)("div",{className:"contacts-form__group",children:[Object(c.jsx)("label",{className:"contacts-form__label",htmlFor:"contactNumber",children:"Number"}),Object(c.jsx)("input",{className:"contacts-form__input",onChange:this.changeHandler,id:"contactNumber",name:"number",value:e})]}),Object(c.jsx)(K,{type:"submit",className:"contacts-form__submit-btn",children:"Add contact"})]})}}]),e}(r.Component),Q={onContactAdd:f.addContact},U=Object(s.b)((function(t){return{contacts:t.contacts.items}}),Q)(q),V=e(54),W=(e(45),function(t){var n=t.name,e=t.number,a=t.onDelete;return Object(c.jsxs)("li",{className:"contacts-list__item",children:[Object(c.jsxs)("span",{className:"contacts-list__item-text",children:[n,": ",e]}),Object(c.jsx)(K,{type:"button",onClick:a,className:"contacts-list__item-btn",children:"X"})]})});W.defaultProps={name:"",number:""};var Y=Object(s.b)((function(t,n){var e=t.contacts.items.find((function(t){return t.id===n.id}));return Object(F.a)({},e)}),(function(t,n){return{onDelete:function(){return t(f.delContact(n.id))}}}))(W),Z=(e(46),Object(s.b)((function(t){var n=t.contacts,e=n.items,a=n.filter.toLowerCase();return{contacts:e.filter((function(t){return t.name.toLowerCase().includes(a)}))}}))((function(t){var n=t.contacts;return Object(c.jsx)(V.a,{component:"ul",className:"contacts-list",children:n.map((function(t){var n=t.id;return Object(c.jsx)(C.a,{timeout:250,classNames:"contacts-items",children:Object(c.jsx)(Y,{id:n})},n)}))})}))),$=(e(47),{onFilterChange:x.filterChange}),tt=Object(s.b)((function(t){return{filter:t.contacts.filter}}),$)((function(t){var n=t.filter,e=t.onFilterChange;return Object(c.jsxs)("div",{className:"filter",children:[Object(c.jsx)("label",{htmlFor:"filterInput",className:"filter__label",children:"Find contacts by name"}),Object(c.jsx)("input",{type:"text",id:"filterInput",onChange:function(t){return e(t.target.value)},value:n,className:"filter__input"})]})})),nt=(e(48),function(){return Object(c.jsxs)(S,{className:"container phonebook",children:[Object(c.jsx)(C.a,{in:!0,appear:!0,classNames:"fade",unmountOnExit:!0,timeout:500,children:Object(c.jsx)(E,{title:"Phonebook"})}),Object(c.jsx)(U,{}),Object(c.jsx)(E,{title:"Contacts",className:"main-title"}),Object(c.jsx)(tt,{}),Object(c.jsx)(Z,{})]})}),et=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,55)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),a(t),c(t),r(t),i(t)}))};e(49);o.a.render(Object(c.jsx)(s.a,{store:v,children:Object(c.jsx)(nt,{})}),document.getElementById("root")),et()}},[[50,1,2]]]);
//# sourceMappingURL=main.31e1fa44.chunk.js.map