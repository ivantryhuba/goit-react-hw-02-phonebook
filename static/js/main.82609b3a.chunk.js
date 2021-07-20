(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var a,r,o,c,i,l=e(1),s=e.n(l),d=e(11),u=e.n(d),b=(e(21),e(22),e(13)),p=e(4),h=e(5),m=e(8),j=e(7),x=e(28),g=e(2),f=e(3),O=f.a.div(a||(a=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  margin-bottom: 15px;\n\n\n  width: 500px;\n  padding: 10px;\n\n  border: 2px solid red;\n  border-radius: 20px;\n"]))),v=e(0),w=function(t){var n=t.children;return Object(v.jsx)(O,{children:n})},y=e(6),C=e(10),k=e(14),z=f.a.label(r||(r=Object(g.a)(["\ndisplay: block;\n  margin-bottom: 10px;\nfont-size: 20px;\nfont-weight: 700;\ncolor: black;\n"]))),F=f.a.input(o||(o=Object(g.a)(["\nwidth: 250px;\nmargin-bottom: 15px;\npadding: 10px;\nborder: 2px solid green;\nborder-radius: 10px;\n"]))),A=["id","type","label","name","placeholder","value","onChange","title","required"],S=function(t){var n=t.id,e=t.type,a=t.label,r=t.name,o=t.placeholder,c=t.value,i=t.onChange,l=t.title,s=t.required,d=Object(k.a)(t,A);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(z,{htmlFor:n,children:a}),Object(v.jsx)(F,Object(C.a)(Object(C.a)({id:n,type:e,name:r},d),{},{placeholder:o,value:c,onChange:i,title:l,required:s}))]})};S.defaultProps={type:"text",placeholder:"",title:"",required:!1};var q,B,L,V,I,J,R=f.a.form(c||(c=Object(g.a)(["\nmargin-bottom: 20px;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n"]))),Z=f.a.button(i||(i=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n\n  font-size: 15px;\n  font-weight: 700;\n\n\n  background-color: yellow;\n  border: 2px solid green;\n  border-radius: 20px;\n"]))),M=function(t){Object(m.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={name:"",number:""},t.handleInputValues=function(n){var e=n.currentTarget,a=e.name,r=e.value;t.setState(Object(y.a)({},a,r))},t.submitForm=function(n){n.preventDefault(),t.props.onSubmit({id:Object(x.a)(),name:t.state.name,number:t.state.number}),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(h.a)(e,[{key:"render",value:function(){return Object(v.jsxs)(R,{onSubmit:this.submitForm,children:[Object(v.jsx)(S,{id:Object(x.a)(),type:"text",label:"Name",name:"name",placeholder:"Jason Born",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleInputValues,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(v.jsx)(S,{id:Object(x.a)(),type:"tel",label:"Number",name:"number",placeholder:"+44-787-123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:this.state.number,onChange:this.handleInputValues,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(v.jsx)(Z,{type:"submit",children:"Add contact"})]})}}]),e}(s.a.Component),N=f.a.ul(q||(q=Object(g.a)(["\nwidth: 100%;\n  margin-top: 10px;\n  padding: 15px;\n  font-size: 40px;\n  font-weight: 700;\n  color: black;\n"]))),P=f.a.li(B||(B=Object(g.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n"]))),Y=f.a.button(L||(L=Object(g.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\nwidth: 75px;\nmargin-left: auto;\npadding: 5px;\n\nfont-size: 15px;\nfont-weight: 500;\n\nbackground-color: turquoise;\nborder: 2px solid orangered;\nborder-radius: 5px;\n"]))),D=function(t){var n=t.contacts,e=t.onRemoveContact;return Object(v.jsx)(N,{children:n.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(v.jsxs)(P,{children:[a," : ",r,Object(v.jsx)(Y,{type:"button",onClick:function(){return e(n)},children:"Remove"})]},n)}))})},E=f.a.p(V||(V=Object(g.a)(["\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 10px;\nfont-size: 20px;\nfont-weight: 500;\ncolor: orange;\n"]))),T=function(t){var n=t.text;return Object(v.jsx)(E,{children:n})},$=f.a.h1(I||(I=Object(g.a)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 40px;\n  font-weight: 700;\n  color: black;\n"]))),G=f.a.h2(J||(J=Object(g.a)(["\n  display: block;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  color: black;\n"]))),H=function(t){Object(m.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={contacts:[],filter:""},t.getContacts=function(){var n=t.state,e=n.contacts,a=n.filter;return e.filter((function(t){return t.name.toLocaleLowerCase().includes(a.toLowerCase())}))},t.addContact=function(n){t.state.contacts.some((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?alert("You have contact with this name, please remove old contact and create new"):t.setState({contacts:[n].concat(Object(b.a)(t.state.contacts))})},t.removeContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.changeFilterValue=function(n){t.setState({filter:n.target.value})},t}return Object(h.a)(e,[{key:"render",value:function(){var t=this.getContacts();return Object(v.jsxs)(w,{children:[Object(v.jsx)($,{children:"PhoneBook"}),Object(v.jsx)(G,{children:"Add contact"}),Object(v.jsx)(M,{onSubmit:this.addContact}),Object(v.jsx)(G,{children:"Contacts"}),this.state.contacts.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{id:Object(x.a)(),label:"Find contacts by name",placeholder:"Boris Britva",name:"search",value:this.state.filter,onChange:this.changeFilterValue}),Object(v.jsx)(D,{contacts:t,onRemoveContact:this.removeContact})]}):Object(v.jsx)(T,{text:"You don`t have any contacts"})]})}}]),e}(s.a.Component);u.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.82609b3a.chunk.js.map