webpackJsonp([2],{"2Waa":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("YleC"),s=i("FVIY"),n=i.n(s),l=i("5L98"),o=i.n(l),r=i("2jVz"),c=i.n(r),d=i("mtWM"),m=i.n(d),g={name:"new",components:{recentNews:a.a},data:function(){return{fits:["fill","contain","cover","none","scale-down"],changtu:n.a,xiangguan:o.a,imgNew:o.a,welcome:c.a,items1:[{title:"",content:"",link:"/majorNew",date:"",liulan:"545",aid:0,image:""},{title:"",content:"",link:"/majorNew",date:"",liulan:"312",image:"",aid:1},{title:"",content:"",link:"/majorNew",date:"",liulan:"543",image:"",aid:2}],items2:[{title:"",content:"",link:"/majorNew",date:"",liulan:"245",image:"",aid:3},{title:"",content:"",link:"/majorNew",date:"",liulan:"651",image:"",aid:4},{title:"",content:"",link:"/majorNew",date:"",liulan:"655",image:"",aid:5}],items3:[{title:"",content:"",link:"/majorNew",date:"",liulan:"153",image:"",aid:6},{title:"",content:"",link:"/majorNew",date:"",liulan:"651",image:"",aid:7},{title:"",content:"",link:"/majorNew",date:"",liulan:"215",image:"",aid:8}],items6:[{title:"",content:"",link:"/majorNew",date:"",liulan:"673",image:"",aid:0},{title:"",content:"",link:"/majorNew",date:"",liulan:"235",image:"",aid:1},{title:"",content:"",link:"/majorNew",date:"",liulan:"146",image:"",aid:2},{title:"",content:"",link:"/majorNew",date:"",liulan:"146",image:"",aid:3},{title:"",content:"",link:"/majorNew",date:"",liulan:"146",image:"",aid:4}],newLists:[30]}},filters:{ellipsis:function(t){return t?t.length>200?t.slice(0,200)+"...":t:""},less:function(t){return t?t.length>14?t.slice(0,14)+"...":t:""},htmlfilter:function(t){return t.replace(/<[^>]*>/g)}},mounted:function(){this.getnewList()},methods:{getnewList:function(){var t=this;m.a.get("http://127.0.0.1:8000/api/NewsViewSet/",{params:{ordering:localStorage.getItem("token")}}).then(function(e){t.newLists=e.data.results;for(var i=0,a=0;i<3;i++,a++)t.items1[a].title=t.newLists[i].title,t.items1[a].content=t.newLists[i].content,t.items1[a].content=t.items1[a].content.substring(0,100),t.items1[a].image=t.newLists[i].photo,t.items1[a].date=t.newLists[i].create_time;for(i=3,a=0;i<6;i++,a++)t.items2[a].title=t.newLists[i].title,t.items2[a].content=t.newLists[i].content,t.items2[a].content=t.items1[a].content.substring(0,100),t.items2[a].image=t.newLists[i].photo,t.items2[a].date=t.newLists[i].create_time;for(i=6,a=0;i<9;i++,a++)t.items3[a].title=t.newLists[i].title,t.items3[a].content=t.newLists[i].content,t.items3[a].content=t.items1[a].content.substring(0,100),t.items3[a].image=t.newLists[i].photo,t.items3[a].date=t.newLists[i].create_time;for(i=0,a=0;i<5;i++,a++)t.items6[a].title=t.newLists[i].title,t.items6[a].content=t.newLists[i].content,t.items6[a].image=t.newLists[i].image,t.items6[a].date=t.newLists[i].create_time}).catch(function(t){})}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigation"),t._v(" "),i("el-row",[i("el-col",{staticClass:"hidden-md-and-down",staticStyle:{marginRight:"10px"},attrs:{lg:{span:4,offset:4},md:24}},[i("div",{staticClass:"borLeft"},[i("h1",[t._v("新闻资讯")])]),t._v(" "),i("recentNews")],1),t._v(" "),i("el-col",{staticStyle:{marginTop:"10px",marginBottom:"10px"},attrs:{lg:12}},[i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:"精选推荐"}},t._l(t.items1,function(e,a){return i("el-row",{key:a,attrs:{gutter:20}},[i("el-col",{attrs:{lg:4}},[i("br"),t._v(" "),i("img",{staticClass:"lajiNew",attrs:{src:e.image,alt:"",width:"100%",fit:"contain"}})]),i("br"),t._v(" "),i("el-col",{attrs:{lg:{span:20}}},[i("router-link",{attrs:{to:e.link+"/"+e.aid}},[i("h3",{staticClass:"colorB"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"colorB",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),i("span",{staticClass:"colorB"},[t._v(t._s(e.date))]),i("span",{staticStyle:{float:"right"}},[t._v("浏览量："+t._s(e.liulan))])])],1)],1)}),1),t._v(" "),i("el-tab-pane",{attrs:{label:"每日新闻"}},t._l(t.items2,function(e,a){return i("el-row",{key:a,attrs:{gutter:20}},[i("el-col",{attrs:{lg:4}},[i("br"),t._v(" "),i("img",{staticClass:"lajiNew",attrs:{src:e.image,width:"100%",alt:"",fit:"contain"}})]),i("br"),t._v(" "),i("el-col",{attrs:{lg:{span:20}}},[i("router-link",{attrs:{to:e.link+"/"+e.aid}},[i("h3",{staticClass:"colorB"},[t._v(t._s(e.title))]),i("br"),t._v(" "),i("p",{staticClass:"colorB",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),i("span",{staticClass:"colorB"},[t._v(t._s(e.date))]),i("span",{staticStyle:{float:"right"}},[t._v("浏览量："+t._s(e.liulan))])])],1)],1)}),1),t._v(" "),i("el-tab-pane",{attrs:{label:"热点top"}},t._l(t.items3,function(e,a){return i("el-row",{key:a,attrs:{gutter:20}},[i("el-col",{attrs:{lg:4}},[i("br"),t._v(" "),i("img",{staticClass:"lajiNew",attrs:{src:e.image,width:"100%",alt:"",fit:"contain"}})]),i("br"),t._v(" "),i("el-col",{attrs:{lg:{span:20}}},[i("router-link",{attrs:{to:e.link+"/"+e.aid}},[i("h3",{staticClass:"colorB"},[t._v(t._s(e.title))]),i("br"),t._v(" "),i("p",{staticClass:"colorB",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),i("span",{staticClass:"colorB"},[t._v(t._s(e.date))]),i("span",{staticStyle:{float:"right"}},[t._v("浏览量："+t._s(e.liulan))])])],1)],1)}),1)],1)],1)],1),t._v(" "),i("el-row",[i("el-col",{staticClass:"hidden-md-and-down",staticStyle:{marginTop:"20px",marginBottom:"20px"},attrs:{lg:{span:16,offset:4},md:24}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t.changtu,alt:""}})])],1),t._v(" "),i("el-row",{staticStyle:{width:"100%"}},[i("el-col",{attrs:{lg:{span:5,offset:5},md:{span:22}}},[i("el-row",[i("el-col",{staticStyle:{borderLeft:"8px solid #14a53b",marginRight:"5px",marginBottom:"10px"},attrs:{lg:18,md:20}},[i("div",[i("h2",[t._v("相关新闻")]),i("br"),t._v(" "),i("span",[t._v("RELATED REPORT")])])]),t._v(" "),i("el-col",{staticClass:"hidden-md-and-down",attrs:{lg:5}}),t._v(" "),i("el-col",{attrs:{lg:24,md:{span:22,offset:1}}},[i("div",{style:{backgroundImage:"url("+t.xiangguan+")",width:"91%",height:"250px",backgroundSize:"cover"}},[i("div",{staticClass:"bgColor"},[i("span",{staticClass:"xiangguanTitle"},[t._v("垃圾分类知识介绍")]),t._v(" "),i("p",{staticClass:"xiangguancon"},[t._v("垃圾分类是社会进步和生态文明的标志，是人人均可参与其中来保护环境和改善环境的方式。我们追求进步，崇尚文明，希望有碧水蓝天净土，共建美好家园。")]),t._v(" "),i("p",[i("a",{staticStyle:{color:"#000000",float:"right",backgroundColor:"#E7E7E7",fontWeight:"bold"},attrs:{href:"http://www.sohu.com/a/328261782_100019774",target:"_blank"}},[t._v("了解详情>")])])])])])],1)],1),t._v(" "),i("el-col",{attrs:{lg:5}},[i("el-row",[i("el-col",{staticStyle:{borderLeft:"8px solid #14a53b",paddingLeft:"5px",marginBottom:"10px",marginTop:"10px"},attrs:{span:18}},[i("div",[i("h2",[t._v("近期新闻")]),i("br"),t._v(" "),i("span",[t._v("RELATED REPORT")])])]),t._v(" "),i("el-col",{staticClass:"hidden-md-and-down",attrs:{span:5}}),t._v(" "),i("el-col",{staticClass:"hidden-md-and-down",attrs:{lg:24}},[i("ul",t._l(t.items6,function(e,a){return i("li",{key:a,staticStyle:{width:"100%",height:"50px"}},[i("p",{staticClass:"middleNewTitle"},[i("span",{staticClass:"yuan"},[t._v(" ")]),t._v(" "+t._s(t._f("less")(e.title)))]),t._v(" "),i("span",[i("router-link",{staticStyle:{float:"right",fontSize:"10px",paddingRight:"20px",marginTop:"2px"},attrs:{to:e.link+"/"+e.aid,href:""}},[t._v("了解详情>")])],1)])}),0)]),t._v(" "),i("el-col",{staticClass:"hidden-lg-and-up",staticStyle:{marginBottom:"10px"},attrs:{span:22,offset:1}},[i("ul",t._l(t.items6,function(e,a){return i("li",{key:a,staticStyle:{width:"100%",height:"50px"}},[i("p",{staticClass:"middleNewTitle"},[i("span",{staticClass:"yuan"},[t._v(" ")]),t._v(" "+t._s(t._f("less")(e.title)))]),t._v(" "),i("p",[i("router-link",{staticStyle:{float:"right",fontSize:"20px",paddingRight:"20px"},attrs:{to:e.link+"/"+e.aid}},[t._v("了解详情>")])],1)])}),0)])],1)],1),t._v(" "),i("el-col",{attrs:{lg:5,md:24}},[i("el-row",[i("el-col",{staticStyle:{borderLeft:"8px solid #14a53b",paddingLeft:"5px",marginBottom:"10px"},attrs:{span:18}},[i("div",[i("h2",[t._v("咨询投稿")]),i("br"),t._v(" "),i("span",[t._v("POST SUBMISSION")])])])],1),t._v(" "),i("img",{staticStyle:{paddingLeft:"7%",paddingRight:"7%",width:"86%"},attrs:{src:t.welcome,alt:""}}),t._v(" "),i("span",{staticClass:"welcome"},[t._v("加入我们>")])],1)],1),t._v(" "),i("footers")],1)},staticRenderFns:[]};var _=i("VU/8")(g,p,!1,function(t){i("i/JZ")},"data-v-3439cf55",null);e.default=_.exports},"2jVz":function(t,e,i){t.exports=i.p+"static/img/new_4.c07bcc4.png"},"5L98":function(t,e,i){t.exports=i.p+"static/img/new_1.b7ad95b.png"},FVIY:function(t,e,i){t.exports=i.p+"static/img/new_3.09cc39f.png"},"i/JZ":function(t,e){}});