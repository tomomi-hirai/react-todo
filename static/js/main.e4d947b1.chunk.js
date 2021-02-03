(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(2),c=n(10),i=n.n(c),s=n(1),r=n(9),d=n(3),l=n(4),m=n(6),u=n(5),h=(n(16),function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"mainForm",onSubmit:this.props.handleSubmit,children:[Object(o.jsxs)("label",{className:"mainForm__label",children:["\u30bf\u30a4\u30c8\u30eb",Object(o.jsx)("input",{className:"mainForm__textBox",type:"text",name:"title",required:!0})]}),Object(o.jsxs)("label",{className:"mainForm__label",children:["\u8aac\u660e",Object(o.jsx)("textarea",{className:"mainForm__textBox",name:"desc"})]}),Object(o.jsx)("input",{className:"mainForm__addBtn",type:"submit",value:"Add"})]})}}]),n}(a.Component)),j=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).handleTodoStatus=function(){t.props.switchTodoStatus(t.props.id)},t.handleDelete=function(){t.props.deleteTodoItem(t.props.id)},t.handleEdit=function(){t.props.switchEditTodoItem(t.props.id)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.done,e=t?"doneItem":"incompleteItem",n=t?"return":"done",a=t?"\u5143\u306b\u623b\u3059":"\u5b8c\u4e86",c=t?"delete":"edit",i=t?"\u524a\u9664":"\u7de8\u96c6",s=t?this.handleDelete:this.handleEdit,r=!!this.props.desc&&Object(o.jsx)("p",{className:"".concat(e,"__desc"),children:this.props.desc});return Object(o.jsxs)("li",{className:"todoList__item ".concat(e),children:[Object(o.jsxs)("div",{className:"".concat(e,"__content"),children:[Object(o.jsx)("p",{className:"".concat(e,"__title"),children:this.props.title}),r]}),Object(o.jsxs)("ul",{className:"todoList__actionBtnList",children:[Object(o.jsx)("li",{className:"todoList__actionBtnItem",children:Object(o.jsx)("button",{className:"actionBtn actionBtn--".concat(n),type:"button",onClick:this.handleTodoStatus,children:Object(o.jsx)("img",{className:"actionBtn__icon",src:"img/icon_".concat(n,".svg"),alt:a})})}),Object(o.jsx)("li",{className:"todoList__actionBtnItem",children:Object(o.jsx)("button",{className:"actionBtn actionBtn--".concat(c),type:"button",onClick:s,children:Object(o.jsx)("img",{className:"actionBtn__icon",src:"img/icon_".concat(c,".svg"),alt:i})})})]})]})}}]),n}(a.Component),p=n(7),b=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(t){var o;Object(d.a)(this,n),(o=e.call(this,t)).handleChange=function(t){var e=t.target.name,n=t.target.value,a=Object(s.a)({},o.state.editItem),c=Object(s.a)(Object(s.a)({},a),{},Object(p.a)({},e,n));o.setState({editItem:c}),localStorage.setItem("editItems",JSON.stringify(c))},o.handleUpdate=function(){var t=o.state.editItem,e=t.title,n=t.desc;o.props.updateTodoItem(o.props.id,e,n)},o.handleCancel=function(){o.props.cancelEdit(o.props.id)};var a={title:o.props.title,desc:o.props.desc};return o.state={editItem:a},o}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("li",{className:"todoList__item editItem",children:[Object(o.jsx)("div",{className:"editItem__content",children:Object(o.jsxs)("form",{className:"editForm",children:[Object(o.jsx)("input",{className:"editForm__textBox",type:"text",name:"title",value:this.state.editItem.title,onChange:this.handleChange}),Object(o.jsx)("textarea",{className:"editForm__textBox",name:"desc",value:this.state.editItem.desc,onChange:this.handleChange})]})}),Object(o.jsxs)("ul",{className:"todoList__actionBtnList",children:[Object(o.jsx)("li",{className:"todoList__actionBtnItem",children:Object(o.jsx)("button",{className:"actionBtn actionBtn--update",type:"button",onClick:this.handleUpdate,children:Object(o.jsx)("img",{className:"actionBtn__icon",src:"img/icon_update.svg",alt:"\u66f4\u65b0"})})}),Object(o.jsx)("li",{className:"todoList__actionBtnItem",children:Object(o.jsx)("button",{className:"actionBtn actionBtn--return",type:"button",onClick:this.handleCancel,children:Object(o.jsx)("img",{className:"actionBtn__icon",src:"img/icon_return.svg",alt:"\u30ad\u30e3\u30f3\u30bb\u30eb"})})})]})]})}}]),n}(a.Component),O=(n(17),function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todoItems.map((function(e){return e.edit?Object(o.jsx)(b,Object(s.a)(Object(s.a)({},e),{},{updateTodoItem:t.props.updateTodoItem,cancelEdit:t.props.cancelEdit}),e.id):Object(o.jsx)(j,Object(s.a)(Object(s.a)({},e),{},{switchTodoStatus:t.props.switchTodoStatus,deleteTodoItem:t.props.deleteTodoItem,switchEditTodoItem:t.props.switchEditTodoItem}),e.id)}));return Object(o.jsx)("ul",{className:"todoList",children:e})}}]),n}(a.Component)),f=(n(18),n(19),0),v=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(t){var o;Object(d.a)(this,n),(o=e.call(this,t)).setTodoItems=function(t){o.setState({todoItems:t}),localStorage.setItem("todoItems",JSON.stringify(t))},o.handleSubmit=function(t){t.preventDefault();var e=t.target,n={id:f,title:e.title.value,desc:e.desc.value,done:!1,edit:!1},a=[].concat(Object(r.a)(o.state.todoItems),[n]);o.setTodoItems(a),f++,e.title.value="",e.desc.value=""},o.switchTodoStatus=function(t){var e=Object(r.a)(o.state.todoItems),n=e.findIndex((function(e){return e.id===t})),a=e[n];a.done=!a.done,o.setTodoItems(e)},o.deleteTodoItem=function(t){var e=o.state.todoItems,n=e.findIndex((function(e){return e.id===t}));e.splice(n,1),o.setTodoItems(e)},o.switchEditTodoItem=function(t){var e=o.state.todoItems.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{edit:!0}):e}));o.setTodoItems(e)},o.updateTodoItem=function(t,e,n){var a=o.state.todoItems.map((function(o){return e&&o.id===t?Object(s.a)(Object(s.a)({},o),{},{title:e,desc:n,edit:!1}):o}));o.setTodoItems(a)},o.cancelEdit=function(t){var e=o.state.todoItems.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{edit:!1}):e}));o.setTodoItems(e)};var a=JSON.parse(localStorage.getItem("todoItems"))||[];return o.state={todoItems:a},o}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{className:"heading",children:"what I have to do"}),Object(o.jsx)("div",{className:"app__mainFormWrapper",children:Object(o.jsx)(h,{handleSubmit:this.handleSubmit})}),Object(o.jsx)("div",{className:"app__todoWrapper",children:Object(o.jsx)(O,{todoItems:this.state.todoItems,switchTodoStatus:this.switchTodoStatus,deleteTodoItem:this.deleteTodoItem,switchEditTodoItem:this.switchEditTodoItem,updateTodoItem:this.updateTodoItem,cancelEdit:this.cancelEdit})})]})}}]),n}(a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(Object(o.jsx)(v,{}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/react-todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-todo","/service-worker.js");I?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):x(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(e,t)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.e4d947b1.chunk.js.map