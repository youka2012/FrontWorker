webpackJsonp([19,28,34],{697:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=y(a(14)),u=y(a(7)),r=y(a(12)),d=y(a(9)),n=y(a(8)),i=a(1),o=y(i),s=a(36),c=y(a(1041)),p=y(a(1039)),f=y(a(1040));function y(e){return e&&e.__esModule?e:{"default":e}}var m=function(e){function t(e){(0,u["default"])(this,t);var a=(0,d["default"])(this,(t.__proto__||(0,l["default"])(t)).call(this,e));return a.state={},a}return(0,n["default"])(t,e),(0,r["default"])(t,[{key:"render",value:function(){return o["default"].createElement(s.Switch,null,o["default"].createElement(s.Route,{path:this.props.match.path,exact:!0,component:c["default"]}),o["default"].createElement(s.Route,{path:this.props.match.path+"/add",exact:!0,component:p["default"]}),o["default"].createElement(s.Route,{path:this.props.match.path+"/edit/:id",exact:!0,component:f["default"]}))}}]),t}(i.Component);t["default"]=m},758:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return{submitUrl:"/api/v1/sys/dict-datas",inlineFormLayout:null,buttonWrapperCol:null,formLayout:{span:"14",offset:"6"},formItemLayout:null,rows:[{key:"type_id",label:"字典类型",viewType:"Select",optionsUrl:"api/v1/sys/dict-types?status=1",optionsDataFilter:function(e){return e?(e.forEach(function(e){e.key=e.id+"",e.value=e.id+"",e.label=e.name}),e):e},required:!0,message:"请选择类型"},{key:"name",label:"名称",viewType:"Input",required:!0,message:"请输入名称"},{key:"code",label:"编码",viewType:"Input",required:!0,message:"请输入编码"},{key:"sort",label:"排序",viewType:"InputNumber",required:!0,message:"请输入排序号"},{key:"status",label:"状态",viewType:"RadioGroup",selectOptions:[{value:1,label:"启用"},{value:0,label:"停用"}],required:!0,message:"请设置状态"},{key:"remark",label:"备注",viewType:"TextArea",disabled:!1,required:!1}]}}},1039:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(30));function u(e){return e&&e.__esModule?e:{"default":e}}var r=(0,u(a(758))["default"])(),d={type:"add",title:"字典数据新增"};for(var n in d)d.hasOwnProperty(n)&&(r[n]=d[n]);var i=(0,l["default"])(r);t["default"]=i},1040:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(30));function u(e){return e&&e.__esModule?e:{"default":e}}var r=(0,u(a(758))["default"])(),d={type:"edit",title:"字典数据修改"};for(var n in d)d.hasOwnProperty(n)&&(r[n]=d[n]);r.rows=[{key:"id",label:"id",viewType:"Input",disabled:!0,required:!0,hidden:!0}].concat(r.rows);var i=(0,l["default"])(r);t["default"]=i},1041:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(1));function u(e){return e&&e.__esModule?e:{"default":e}}var r=(0,u(a(74))["default"])({title:"字典数据管理",commonHeaderActions:["query","add","delete"],columns:[{title:"类型",dataIndex:"dictType.name",key:"dictType",width:"340px"},{title:"名称",dataIndex:"name",key:"name"},{title:"编码",dataIndex:"code",key:"code"},{title:"排序",dataIndex:"sort",key:"sort"},{title:"状态",key:"status",render:function(e){return 1===e.status?l["default"].createElement("span",null,"可用"):l["default"].createElement("span",null,"停用")}}],commonRowActions:["edit","delete"],commonPermissions:{view:"dict:view",add:"dict:add",edit:"dict:edit","delete":"dict:delete"},targetUrl:"/api/v1/sys/dict-datas",otherTableProps:{}});t["default"]=r}});