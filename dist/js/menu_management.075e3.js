webpackJsonp([17,28,34],{701:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a(14)),l=m(a(7)),n=m(a(12)),u=m(a(9)),i=m(a(8)),d=a(1),o=m(d),s=a(36),p=m(a(1049)),c=m(a(1047)),f=m(a(1048));function m(e){return e&&e.__esModule?e:{"default":e}}var y=function(e){function t(e){(0,l["default"])(this,t);var a=(0,u["default"])(this,(t.__proto__||(0,r["default"])(t)).call(this,e));return a.state={},a}return(0,i["default"])(t,e),(0,n["default"])(t,[{key:"render",value:function(){return o["default"].createElement(s.Switch,null,o["default"].createElement(s.Route,{path:this.props.match.path,exact:!0,component:p["default"]}),o["default"].createElement(s.Route,{path:this.props.match.path+"/add",exact:!0,component:c["default"]}),o["default"].createElement(s.Route,{path:this.props.match.path+"/edit/:id",exact:!0,component:f["default"]}))}}]),t}(d.Component);t["default"]=y},760:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(125);t["default"]=function(){return{submitUrl:"/api/v1/sys/menus",inlineFormLayout:null,buttonWrapperCol:null,formLayout:{span:"14",offset:"6"},formItemLayout:null,rows:[{key:"parent_id",label:"父级节点",viewType:"TreeSelect",disabled:!1,optionsUrl:"/api/v1/sys/menus",optionsQueryParams:{status:1},optionsDataFilter:function(e){return e=(0,r.arrayToTree)(e,"id","parent_id","children",function(e){return e.key=e.id+"",e.value=e.id+"",e.label=e.name,e})},required:!1,min:0,message:"请选择父节点"},{key:"name",label:"名  称",viewType:"Input",disabled:!1,required:!0,min:0,message:"请输入名称"},{key:"url",label:"URL",viewType:"Input",disabled:!1,required:!0,min:0},{key:"icon",label:"图  标",viewType:"Input",disabled:!1,required:!1,min:0},{key:"funcPermSet",label:"所需权限",viewType:"Transfer",disabled:!1,optionsUrl:"/api/v1/sys/func-perms",optionsQueryParams:{status:1},optionsDataFilter:function(e){return e?(e.forEach(function(e){e.key=e.id+"",e.label=e.permCode}),e):e},fullValueResult:!0,listStyle:{width:200,height:320},required:!1,message:"请选择权限"},{key:"sort",label:"排  序",viewType:"InputNumber",disabled:!1,required:!0,message:"请输入排序号"},{key:"type",label:"类  型",viewType:"RadioGroup",disabled:!1,selectOptions:[{value:"INNER",label:"站内"},{value:"OUTER",label:"站外"}],required:!0,message:"请设置状态"},{key:"status",label:"状  态",viewType:"RadioGroup",disabled:!1,selectOptions:[{value:1,label:"启用"},{value:0,label:"停用"}],required:!0,message:"请设置状态"},{key:"remark",label:"备  注",viewType:"TextArea",disabled:!1,required:!1}]}}},1047:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(30));function l(e){return e&&e.__esModule?e:{"default":e}}var n=(0,l(a(760))["default"])(),u={type:"add",title:"菜单新增",defaultValueTargetKey:"parent_id"};for(var i in u)u.hasOwnProperty(i)&&(n[i]=u[i]);var d=(0,r["default"])(n);t["default"]=d},1048:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(30));function l(e){return e&&e.__esModule?e:{"default":e}}var n=(0,l(a(760))["default"])(),u={type:"edit",title:"菜单修改"};for(var i in u)u.hasOwnProperty(i)&&(n[i]=u[i]);n.rows=[{key:"id",label:"id",viewType:"Input",disabled:!0,required:!0,hidden:!0}].concat(n.rows);var d=(0,r["default"])(n);t["default"]=d},1049:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(1)),l=u(a(74)),n=a(125);function u(e){return e&&e.__esModule?e:{"default":e}}var i=(0,l["default"])({title:"菜单管理",noPagination:!0,noCheckbox:!0,commonHeaderActions:["add"],columns:[{title:"名称",dataIndex:"name",key:"name",width:"340px"},{title:"URL",dataIndex:"url",key:"url"},{title:"访问权限",dataIndex:"funcPermCodes",key:"funcPermCodes"},{title:"类型",dataIndex:"type",key:"type"},{title:"排序",dataIndex:"sort",key:"sort"},{title:"状态",key:"status",render:function(e){return 1===e.status?r["default"].createElement("span",null,"可用"):r["default"].createElement("span",null,"停用")}}],commonRowActions:["add","edit","delete"],commonPermissions:{view:"menu:view",add:"menu:add",edit:"menu:edit","delete":"menu:delete"},targetUrl:"/api/v1/sys/menus",tableDataMap:function(e){return e=(0,n.arrayToTree)(e)},otherTableProps:{}});t["default"]=i}});