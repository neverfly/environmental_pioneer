webpackJsonp([5],{iYq6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("mtWM"),s=a.n(i),r={name:"majorNew",data:function(){return{article:{title:"",date:"",readingQua:"849"},currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:1,form:"",tiaoshu:"",showPinglun:[],pinglun:[]}},components:{cebian:a("APPD").a},mounted:function(){var t=this.$route.params.aid;this.getArticle(t),this.getpinglun(t)},methods:{getArticle:function(t){var e=this;s.a.get("http://127.0.0.1:8000/api/NewsViewSet/",{params:{aid:t}}).then(function(a){var n=t;e.article.title=a.data.results[n].topic,e.article.date=a.data.results[n].create_time,e.article.content=a.data.results[n].content,e.article.source=a.data.results[n].tag,e.article.date=a.data.results[n].time,e.article.source=a.data.results[n].title,e.article.writer=a.data.results[n].sorces}).catch(function(t){})},getpinglun:function(t){var e=this;s.a.get("http://127.0.0.1:8000/api/NewsCommentViewSet/",{params:{aid:t}}).then(function(t){e.pinglun=t.data.results,console.log(e.pinglun.length)}).catch(function(t){}).then(function(){for(var t=0;t<3;t++)e.showPinglun[t]=e.pinglun[t];e.tiaoshu=parseInt(e.pinglun.length/3)})},putpinglun:function(t){var e=this;0!=this.form.length?s.a.post("http://127.0.0.1:8000/api/NewsCommentViewSet/",{comment_id:"aids",user_id:1111,content:this.form,user_name:"ggg",avatar:"https://avatars0.githubusercontent.com/u/47131504?s=64&v=4",create_time:"vfff"}).then(function(t){e.$message({message:"你已经成功提交评论",type:"success"})}).catch(function(t){}):this.$notify({title:"提交失败",message:"评论不得为空",offset:100})},input:function(){null==localStorage.getItem("token")?this.$message.error("请先登录"):this.putpinglun()},handleSizeChange:function(t){for(var e=""+t,a=0;a<3;a++)this.showPinglun[a]=this.pinglun[3*(e-1)+a]},handleCurrentChange:function(t){for(var e=""+t,a=0;a<3;a++)n.default.set(this.showPinglun,a,this.pinglun[3*(e-1)+a])}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{model:t.article}},[a("navigation"),t._v(" "),a("div",{staticClass:"article"},[a("el-row",[a("cebian"),t._v(" "),a("el-col",{attrs:{lg:{span:18,offset:3},md:{span:20,offset:2}}},[a("h1",[t._v(t._s(t.article.source))]),t._v(" "),a("el-row",{staticStyle:{marginBottom:"20px"}},[a("el-col",{attrs:{span:6}},[a("span",[t._v("时间: "+t._s(t.article.date))])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("span",[t._v("标签: "+t._s(t.article.title))])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("span",[t._v("来源："+t._s(t.article.writer))])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("span",[t._v("阅读量："+t._s(t.article.readingQua))])])],1),t._v(" "),a("div",[a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.article.content)}})])],1),t._v(" "),a("el-col",{staticStyle:{marginTop:"20px"},attrs:{lg:{span:16,offset:4},md:{span:20,offset:2}}},[a("h1",{staticStyle:{color:"#14a53b",float:"left"}},[t._v("我要评论")]),t._v(" "),a("el-form",[a("el-form-item",[a("el-input",{staticStyle:{"box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)",fontSize:"25px"},attrs:{type:"textarea",rows:"6",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{staticClass:"tijiao",staticStyle:{color:"#ffffff"},attrs:{type:"primary"},on:{click:t.input}},[t._v("提交")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{lg:{span:16,offset:4},md:{span:20,offset:2}}},[0==this.pinglun.length?a("p",{staticStyle:{textAlign:"center"}},[t._v("暂无评论，我来发表第一篇评论！")]):a("div",[t._l(t.showPinglun,function(e){return a("div",{key:e.name,staticClass:"demo-basic--circle"},[a("el-divider"),t._v(" "),a("div",{staticClass:"block"},[a("el-avatar",{staticStyle:{float:"left"},attrs:{size:40,src:e.avatar}})],1),t._v(" "),a("span",{staticStyle:{float:"left",lineHeight:"40px",paddingLeft:"30px",fontSize:"30px"}},[t._v(t._s(e.user_name))]),a("br"),a("br"),t._v(" "),a("p",{staticStyle:{fontSize:"23px",marginTop:"15px"}},[t._v(t._s(e.content))]),t._v(" "),a("p",{staticStyle:{paddingTop:"20px"}},[t._v(t._s(e.creat_time))])],1)}),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage1,"page-sizes":[1,2,3,4],"page-size":1,layout:"prev, pager, next, jumper",total:this.tiaoshu},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage1=e},"update:current-page":function(e){t.currentPage1=e}}})],1)],2)])],1)],1),t._v(" "),a("footers")],1)},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(t){a("qXeX")},"data-v-2d026c76",null);e.default=o.exports},qXeX:function(t,e){}});