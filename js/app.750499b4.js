(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)r=o[d],a[r]&&h.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://wuxianqiang.github.io/login/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02d6":function(t,e,n){"use strict";var i=n("620d"),a=n.n(i);a.a},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"1ad2":function(t,e,n){"use strict";var i=n("af7b"),a=n.n(i);a.a},"1dbe":function(t,e,n){},2300:function(t,e,n){},"23f5":function(t,e,n){},"2fa3":function(t,e,n){"use strict";var i=n("f231"),a=n.n(i);a.a},"45c3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"getName",function(){return ae});var a={};n.r(a),n.d(a,"formatMoney",function(){return xe});var s={};n.r(s),n.d(s,"phone",function(){return ke});var r=n("a4bb"),o=n.n(r),l=(n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],d=(n("034f"),n("2877")),h={},f=Object(d["a"])(h,c,u,!1,null,null,null),m=f.exports,p=(n("7f7f"),n("cebc")),v=(n("96cf"),n("3b8d")),_=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-item"},[n("h1",{staticClass:"login-item__title"},[t._v("\n      欢迎回来\n    ")]),n("input",{directives:[{name:"phone",rawName:"v-phone",value:t.tel,expression:"tel"}],staticClass:"login-item__input",attrs:{type:"text",placeholder:"手机号"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-item__input",attrs:{type:"password",placeholder:"密码",maxlength:"18"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{staticClass:"login-item__input login-item__submit",on:{click:t.handleLogin}},[t._v("\n      登录\n    ")])]),t._m(0)])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-item"},[i("img",{staticClass:"login-item__img",attrs:{src:n("f824"),alt:"登录"}})])}],y=(n("a481"),{data:function(){return{tel:"",password:""}},methods:{handleLogin:function(){console.log("处理登录"),sessionStorage.setItem("user_id",this.tel),this.$router.replace({path:"/home"})}}}),w=y,x=(n("1ad2"),Object(d["a"])(w,b,g,!1,null,"8f30dc6c",null)),k=x.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"home-header"},[i("div",{staticClass:"home-header__logo"},[t._v("\n      Hello!\n    ")]),i("div",{staticClass:"home-header__nav"},[i("icon",{attrs:{href:"#iconxitongguanlitianchong"}})],1)]),i("div",{staticClass:"home-container"},[i("div",{staticClass:"home-container__menu"},[i("div",{staticClass:"home-container__info"},[i("div",{staticClass:"home-container__user"},[i("img",{staticClass:"home-container__user--img",attrs:{src:n("bf3c"),alt:"",width:"70",height:"70"}}),i("el-dropdown",{staticClass:"home-container__user--name",attrs:{trigger:"click"}},[i("span",{staticClass:"el-dropdown-link"},[t._v("\n              Qiang"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{icon:"el-icon-circle-close-outline"}},[t._v("退出登录")])],1)],1)],1),i("div",{staticClass:"home-container__icon"},[i("icon",{attrs:{href:"#iconyinzhang",width:"40",height:"40"}}),i("icon",{attrs:{href:"#iconfangke",width:"40",height:"40"}}),i("icon",{attrs:{href:"#iconfaxian",width:"40",height:"40"}}),i("icon",{attrs:{href:"#icontupian",width:"40",height:"40"}})],1)]),i("div",[i("layout-menu")],1)]),i("div",{staticClass:"home-container__content"},[i("layout-bread"),i("div",{staticClass:"home-container__view"},[i("router-view")],1)],1)])])},L=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("el-menu",{attrs:{router:!0,"default-active":t.$route.path,"background-color":"#2c2f43","text-color":"#b5b4c2","active-text-color":"#fff"}},[t._l(t.menuList,function(e){return[e.children?[t._l(e.children,function(e){return[e.children?[n("ReSubMenu",{key:e.auth,attrs:{data:e}})]:[n("el-menu-item",{key:e.auth,attrs:{index:e.path}},[t._v("\n              "+t._s(e.name)+"\n            ")])]]})]:n("el-menu-item",{key:e.auth,attrs:{index:e.path}},[t._v("\n        "+t._s(e.name)+"\n      ")])]})],2),n("div",{staticClass:"red"},[t._v("ss")])],1)},j=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-submenu",{attrs:{index:t.data.path}},[n("template",{slot:"title"},[t._v("\n    "+t._s(t.data.name)+"\n  ")]),t._l(t.data.children,function(e){return[e.children?n("ReSubMenu",{key:e.auth,attrs:{data:e}}):n("el-menu-item",{key:e.auth,attrs:{index:e.path}},[t._v("\n      "+t._s(e.name)+"\n    ")])]})],2)},S=[],E={name:"ReSubMenu",props:{data:{type:Object,default:function(){return{}}}}},F=E,R=Object(d["a"])(F,O,S,!1,null,null,null),M=R.exports,I=n("2f62"),A={components:{ReSubMenu:M},computed:Object(p["a"])({},Object(I["b"])(["menuList"])),created:function(){}},V=A,q=(n("eb85"),Object(d["a"])(V,$,j,!1,null,null,null)),P=q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t._l(t.$route.matched,function(e,i){return[e.meta&&e.meta.bread?n("el-breadcrumb-item",{key:i,attrs:{to:{path:e.meta.url||e.path}}},[t._v("\n        "+t._s(e.meta.bread)+"\n      ")]):t._e()]})],2),n("div")],1)},T=[],W=(n("02d6"),{}),N=Object(d["a"])(W,U,T,!1,null,"19f5fe1c",null),B=N.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{style:t.cls,attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.href}})])])},H=[],J=(n("6c7b"),{props:{href:{type:String,default:""},width:{type:String,default:"30"},height:{type:String,default:"30"},fill:{type:String,default:"#8d8ca0"}},computed:{cls:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),fill:this.fill}}}}),z=J,Q=Object(d["a"])(z,D,H,!1,null,null,null),G=Q.exports,K={components:{LayoutMenu:P,LayoutBread:B,Icon:G},name:"home",created:function(){},destroyed:function(){},methods:{}},X=K,Y=(n("2fa3"),n("b5f5"),Object(d["a"])(X,C,L,!1,null,"3e732220",null)),Z=Y.exports,tt=(n("6762"),n("2fdb"),n("d225")),et=n("b0b4"),nt=n("bc3a"),it=n.n(nt),at=function(){function t(){Object(tt["a"])(this,t),this.baseURL="https://easy-mock.com/mock/5cbeb6de8968371da414c81b/admin",this.timeout=3e3}return Object(et["a"])(t,[{key:"merge",value:function(t){return Object(p["a"])({},t,{baseURL:this.baseURL,timeout:this.timeout})}},{key:"setInterceptor",value:function(t){t.interceptors.request.use(function(t){return t}),t.interceptors.response.use(function(t){return t.data})}},{key:"request",value:function(t){var e=it.a.create();this.setInterceptor(e);var n=this.merge(t);return e(n)}}]),t}(),st=new at,rt=function(){return st.request({url:"/menu",method:"get"})},ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t._v("\n  我的组件\n  "),n("router-view")],1)},lt=[],ct={},ut=Object(d["a"])(ct,ot,lt,!1,null,null,null),dt=ut.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[t._m(0),t._m(1),n("div",{staticClass:"statistics-chart"},[t._l(t.list,function(e,i){return[n("div",{key:e.id,staticClass:"statistics-analysis"},[n("div",{staticClass:"statistics-analysis__wrapper"},[n("svg",{staticClass:"statistics-analysis__icon",style:{fill:e.fill},attrs:{"aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:e.path}})])]),n("div",[n("div",[t._v(t._s(e.title))]),n("div",{staticClass:"statistics-analysis__count"},[t._v(t._s(e.count))])])]),i<t.list.length-1?n("div",{key:i,staticClass:"statistics-chart__line"}):t._e()]})],2),t._m(2)])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics-notice"},[n("h1",{staticClass:"statistics-title"},[t._v("Vue.js 是什么")]),n("p",[t._v("\n      Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。\n      与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。\n      Vue 的核心库只关注视图层，\n      不仅易于上手，还便于与第三方库或既有项目整合。\n      另一方面，当与现代化的工具链以及各种支持类库结合使用时，\n      Vue 也完全能够为复杂的单页应用提供驱动。\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics-wrapper"},[n("iframe",{attrs:{src:"https://npmcharts.com/compare/vue?minimal=true",frameborder:"0",height:"425",width:"100%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics-chart"},[n("div",{staticClass:"statistics-chart__item"},[n("iframe",{attrs:{src:"https://npmcharts.com/compare/react?minimal=true",frameborder:"0",height:"400",width:"100%"}})]),n("div",{staticClass:"statistics-chart__line"}),n("div",{staticClass:"statistics-chart__item"},[n("iframe",{attrs:{src:"https://npmcharts.com/compare/angular?minimal=true",frameborder:"0",height:"400",width:"100%"}})])])}],mt=function(){return st.request({url:"/statistics",method:"get"})},pt={data:function(){return{list:[]}},created:function(){this._geStatistics()},methods:{_geStatistics:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:e=t.sent,n=e.data.list,this.list=n;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},vt=pt,_t=(n("995d"),Object(d["a"])(vt,ht,ft,!1,null,"541feab5",null)),bt=_t.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[t._v("\n  关于\n")])},yt=[],wt={},xt=Object(d["a"])(wt,gt,yt,!1,null,null,null),kt=xt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  日志\n")])},Lt=[],$t={},jt=Object(d["a"])($t,Ct,Lt,!1,null,null,null),Ot=jt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"profile-header"},[n("div",[n("a",{staticClass:"link link-add"},[t._v("表格")]),n("a",{staticClass:"link link-add",on:{click:t.handleAdd}},[t._v("添加")])]),n("easy-table",{attrs:{dataList:t.dataList,titleList:t.titleList},scopedSlots:t._u([{key:"id",fn:function(e){return[n("h1",[t._v("\n          "+t._s(e.row.id)+"\n        ")])]}}])}),n("list-dialog",{ref:"dialog",attrs:{title:t.title},on:{handleSubmit:t.handleSubmit,handleClose:t.handleClose},model:{value:t.ruleForm,callback:function(e){t.ruleForm=e},expression:"ruleForm"}}),n("span",{on:{click:t.handleClick}},[t._v("跳转")])],1)])},Et=[],Ft=(n("20d6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"easy-table"},[n("div",{ref:"box",staticClass:"easy-table_thead"},[n("table",{staticClass:"easy-table__box"},[n("colgroup",{staticClass:"easy-table__wrapper"},t._l(t.titleList,function(t,e){return n("col",{key:e,staticClass:"easy-table__col",attrs:{width:t.width?t.width:""}})}),0),n("thead",[n("tr",t._l(t.titleList,function(e,i){return n("th",{key:i,ref:"th",refInFor:!0,staticClass:"easy-table__th"},[n("span",[t._v(t._s(e.text))])])}),0)])])]),n("div",{staticClass:"easy-table_tbody"},[n("table",{staticClass:"easy-table__box"},[n("colgroup",t._l(t.titleList,function(e,i){return n("col",{key:i,staticClass:"easy-table__col",attrs:{width:t.thWidth[i]}})}),0),n("thead",t._l(t.dataList,function(e,i){return n("tr",{key:i,staticClass:"easy-table__tr",class:{"easy-table__dark":(i+1)%2===0}},t._l(t.titleList,function(i,a){return n("td",{key:a,staticClass:"easy-table__td"},[n("span",[i.filter?n("span",[t._v("\n                "+t._s(i.filter(e))+"\n              ")]):n("span",[t._t(i.key,[t._v("\n                  "+t._s(e[i.key])+"\n                ")],{row:e})],2)]),"html"===i.key?n("span",t._l(i.htmlArray,function(i,a){return n("span",{key:a,domProps:{innerHTML:t._s(i.htmlString)},on:{click:function(){return i.clickEvent(e)}}})}),0):t._e()])}),0)}),0)])])])}),Rt=[],Mt=n("5d73"),It=n.n(Mt),At={props:{titleList:{type:Array,default:function(){return[]}},dataList:{type:Array,default:function(){return[]}}},data:function(){return{thWidth:[]}},methods:{_formatWidth:function(){var t=[],e=this.$refs.th;if(e){var n=!0,i=!1,a=void 0;try{for(var s,r=It()(e);!(n=(s=r.next()).done);n=!0){var o=s.value;t.push(o.offsetWidth)}}catch(l){i=!0,a=l}finally{try{n||null==r.return||r.return()}finally{if(i)throw a}}this.thWidth=t}}},mounted:function(){this._formatWidth()}},Vt=At,qt=(n("d771"),Object(d["a"])(Vt,Ft,Rt,!1,null,"02b9fb8d",null)),Pt=qt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},closed:t.handleClose}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-width":"100px",rules:t.rules}},[n("el-form-item",{attrs:{label:"用户编号",prop:"id"}},[n("el-input",{attrs:{maxlength:5,disabled:!0},model:{value:t.ruleForm.id,callback:function(e){t.$set(t.ruleForm,"id",e)},expression:"ruleForm.id"}})],1),n("el-form-item",{attrs:{label:"用户性别",prop:"sex"}},[n("el-radio-group",{model:{value:t.ruleForm.sex,callback:function(e){t.$set(t.ruleForm,"sex",e)},expression:"ruleForm.sex"}},[n("el-radio",{attrs:{label:1}},[t._v("男")]),n("el-radio",{attrs:{label:0}},[t._v("女")])],1)],1),n("el-form-item",{attrs:{label:"用户备注",prop:"count"}},[n("el-input",{attrs:{maxlength:10},model:{value:t.ruleForm.count,callback:function(e){t.$set(t.ruleForm,"count",e)},expression:"ruleForm.count"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n        确 定\n      ")])],1)],1)],1)},Tt=[],Wt={model:{prop:"ruleForm",event:"change"},props:{ruleForm:{type:Object,default:function(){return{id:"",sex:0,count:""}}},title:{type:String,default:""}},data:function(){return{dialogVisible:!1,rules:{id:[{required:!0,message:"请输入用户编号",trigger:"change"}],sex:[{required:!0,message:"请选择用户性别",trigger:"change"}],count:[{required:!0,message:"请输入用户统计",trigger:"change"}]}}},methods:{show:function(){this.dialogVisible=!0},handleClose:function(){this.$refs.ruleForm.resetFields(),this.$emit("handleClose")},handleSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(e){e?(t.$emit("handleSubmit"),t.dialogVisible=!1):t.$message.error("输入信息有误，请重新输入!")})}}},Nt=Wt,Bt=Object(d["a"])(Nt,Ut,Tt,!1,null,null,null),Dt=Bt.exports,Ht={components:{EasyTable:Pt,ListDialog:Dt},data:function(){return{dataList:[],title:"修改用户",ruleForm:{id:"",sex:0,count:""}}},created:function(){for(var t=[],e=1;e<20;e++)t.push({id:e,sex:Math.random()>.5?0:1,count:100+e});this.dataList=t,this.titleList=[{key:"id",text:"用户编号"},{key:"sex",text:"用户性别",filter:function(t){return t.sex?"男":"女"}},{key:"count",text:"用户备注"},{key:"html",text:"操作",width:150,htmlArray:[{htmlString:'<a class="link">修改</a>',clickEvent:this.handleChange},{htmlString:'<a class="link">删除</a>',clickEvent:this.handleDelete}]}]},methods:{handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n=e.dataList.findIndex(function(e){return e.id===t.id});n>-1&&(e.dataList.splice(n,1),e.$message({type:"success",message:"删除成功!"}))})},handleChange:function(t){this.title="修改用户",this.ruleForm=Object(p["a"])({},t),this.cache=this.dataList.findIndex(function(e){return e.id===t.id}),this.$refs.dialog.show()},handleAdd:function(){this.title="添加用户",this.$refs.dialog.show()},handleSubmit:function(){var t=this.ruleForm,e=t.id,n=t.sex,i=t.count;this.cache>-1?this.dataList.splice(this.cache,1,{id:e,sex:n,count:i}):this.dataList.push({id:e,sex:n,count:i})},handleClose:function(){this.cache=-1,this.ruleForm={id:this.dataList.length+1,sex:1,count:""}},handleClick:function(){this.$router.push({name:"Log",params:{id:100}})}}},Jt=Ht,zt=(n("fc55"),Object(d["a"])(Jt,St,Et,!1,null,null,null)),Qt=zt.exports,Gt=[{path:"/",name:"Layout",component:Z,children:[{path:"home",name:"Home",component:bt},{path:"profile/:id",name:"Log",component:Ot,meta:{bread:"日志",hidden:!0}},{path:"list",name:"List",component:dt,children:[{path:"userList",name:"UserList",component:Qt,meta:{bread:"表格"}}],meta:{bread:"组件"}},{path:"about",name:"About",component:kt,meta:{bread:"关于"}}],meta:{bread:"首页",url:"/home"}}],Kt=function(t){var e=[];function n(i){return t.filter(function(t){if(t.pid===i){e.push(t.auth);var a=n(t.id);return t.children=a.length?a:null,t.name}})}return{menuList:n(-1),authList:e}},Xt=function(t){function e(n){return n.filter(function(n){if(t.includes(n.name))return n.children&&(n.children=e(n.children)),!0})}return e(Gt)},Yt={getMenuList:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e){var n,i,a,s,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,rt();case 3:i=t.sent,a=i.data.list,s=Kt(a),r=s.menuList,o=s.authList,n("setMenuList",r),n("setAuthList",o);case 8:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getAuthRoute:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.abrupt("return",Xt(n.authList));case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},Zt=Yt,te={showLoading:function(t){t.isShowLoading=!0},hideLoading:function(t){t.isShowLoading=!1},setMenuList:function(t,e){t.menuList=e},setAuthList:function(t,e){t.authList=e,t.hasRules=!0}},ee=te,ne={isShowLoading:!1,hasRules:!1,menuList:[],authList:[]},ie=ne,ae=function(t){return t.name},se={namespaced:!0,state:{username:[]},actions:{addUser:function(){console.log("添加用户")},getUserInfo:function(){return sessionStorage.getItem("user_id")}}},re={user:se};l["default"].use(I["a"]);var oe=new I["a"].Store({modules:re,getters:i,actions:Zt,mutations:ee,state:ie});l["default"].use(_["a"]);var le=new _["a"]({mode:"history",base:"https://wuxianqiang.github.io/login/",routes:[{path:"/",name:"Layout",component:Z},{path:"/login",name:"Login",component:k}]});le.beforeEach(function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e,n,i){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(oe.state.hasRules){t.next=10;break}return t.next=3,oe.dispatch("getMenuList");case 3:return t.next=5,oe.dispatch("getAuthRoute");case 5:a=t.sent,le.addRoutes(a),i(Object(p["a"])({},e,{replace:!0})),t.next=11;break;case 10:"Login"===e.name?i():oe.dispatch("user/getUserInfo").then(function(t){t?i():i({path:"/login"})});case 11:case"end":return t.stop()}},t)}));return function(e,n,i){return t.apply(this,arguments)}}());var ce,ue=le,de=n("5c96"),he=n.n(de),fe=n("2819"),me=n.n(fe),pe=(n("0fae"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(tt["a"])(this,t),this.url=e.url,this.store=e.store,this.ws=null,this.options=e}return Object(et["a"])(t,[{key:"init",value:function(){var t=this;this.ws&&1===this.ws.readyState&&this.disconnect();var e=this.ws=new WebSocket(this.url),n=["onmessage","onerror","onopen","onclose"];n.forEach(function(n){e[n]=function(i){var a={};try{a=JSON.parse(i.data)}catch(s){a={}}t.options[n]&&t.options[n]({ws:e,data:a})}})}},{key:"disconnect",value:function(){this.ws&&this.ws.close()}}]),t}()),ve=function(t){ce=t,ce.mixin({beforeCreate:function(){this.$options&&this.$options.socket?this.$socket=this.$options.socket:this.$socket=this.$parent&&this.$parent.$socket}})},_e={Create:pe,install:ve},be=n("db49"),ge=n.n(be);l["default"].use(_e);var ye=function(){function t(){Object(tt["a"])(this,t),this.url="ws://localhost:8888",this.store=oe}return Object(et["a"])(t,[{key:"onmessage",value:function(t){var e=t.data,n=e.code,i=ge.a[n];oe.dispatch(i)}},{key:"onopen",value:function(t){var e=t.ws;console.log("连接打开"),this.timer=setInterval(function(){e.send("hello")},2e3)}},{key:"onclose",value:function(){clearInterval(this.timer),console.log("连接中断")}},{key:"onerror",value:function(){clearInterval(this.timer),console.log("连接中断")}}]),t}(),we=new _e.Create(new ye),xe=(n("c5f6"),function(t){if(t)return t=Number(t),"￥ "+t.toFixed(2)}),ke={update:function(t,e,n){var i=n.context;t.value=i[e.expression]},inserted:function(t){t.focus()},bind:function(t,e,n){var i=n.context;t.addEventListener("input",function(n){var a=n.target.value.replace(/[^\d]/g,"");a.length>11&&(a=a.slice(0,11)),i[e.expression]=a,t.value=a}),t.value=i[e.expression]}};n("a287");l["default"].config.productionTip=!1,o()(a).forEach(function(t){return l["default"].filter(t,a[t])}),o()(s).forEach(function(t){return l["default"].directive(t,s[t])}),l["default"].use(he.a),l["default"].use(me.a),new l["default"]({router:ue,store:oe,socket:we,render:function(t){return t(m)}}).$mount("#app")},"620d":function(t,e,n){},"64a9":function(t,e,n){},"67d1":function(t,e,n){},"995d":function(t,e,n){"use strict";var i=n("45c3"),a=n.n(i);a.a},a287:function(t,e,n){},af7b:function(t,e,n){},b5f5:function(t,e,n){"use strict";var i=n("67d1"),a=n.n(i);a.a},bf3c:function(t,e,n){t.exports=n.p+"img/avatar.c51a974f.jpg"},d771:function(t,e,n){"use strict";var i=n("1dbe"),a=n.n(i);a.a},db49:function(t,e){t.exports={200:"user/addUser"}},eb85:function(t,e,n){"use strict";var i=n("2300"),a=n.n(i);a.a},f231:function(t,e,n){},f824:function(t,e,n){t.exports=n.p+"img/login.79f20938.png"},fc55:function(t,e,n){"use strict";var i=n("23f5"),a=n.n(i);a.a}});
//# sourceMappingURL=app.750499b4.js.map