(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{12:function(t,e,o){t.exports=o(20)},19:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(11),i=o.n(r),c=o(7),l=o(1),s=o(2),d=o(4),p=o(3),u=o(5),m=o(6),f=o.n(m),h=(o(19),function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#f8f8f8",padding:"10px",borderBottom:"1px #ccc solid",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,this.props.todo.id)})," ",this.props.todo.title,a.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,this.props.todo.id),style:b},"x")))}}]),e}(n.Component)),b={background:" #ed5565",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},g=h,y=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(g,{key:e.id,todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.delete})}))}}]),e}(n.Component),v=function(){return a.a.createElement("header",{style:{background:"#005c97",color:"#fff",textAlign:"center",padding:"10px"}},a.a.createElement("h1",null,"Todo List"))},j=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.onChange=function(t){o.setState({title:t.target.value})},o}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{style:{flex:"10",padding:"5px",fontSize:"1em",height:"50px",border:"none",outline:"none",fontFamily:"'Ubuntu', sans-serif "},type:"text",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1",fontSize:"1em",fontFamily:"'Ubuntu', sans-serif "}}))}}]),e}(n.Component),O=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:f.a.v4(),title:"Going to a meeting",completed:!1},{id:f.a.v4(),title:"Picking up some groceries",completed:!1},{id:f.a.v4(),title:"Call my boss",completed:!1}]},o.toggleComplete=function(t){o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},o.deleteTodo=function(t){o.setState({todos:Object(c.a)(o.state.todos.filter((function(e){return e.id!==t})))})},o.addTodo=function(t){var e={id:f.a.v4(),title:t,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[e])})},o}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(j,{addTodo:this.addTodo}),a.a.createElement(y,{todos:this.state.todos,markComplete:this.toggleComplete,delete:this.deleteTodo})))}}]),e}(n.Component);i.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.03fcaf34.chunk.js.map