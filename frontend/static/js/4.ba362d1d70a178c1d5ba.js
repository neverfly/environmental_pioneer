webpackJsonp([4],{KB84:function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c("mtWM"),a=c.n(i),o=c("ZZlj"),s=c("Txl5"),n=c.n(s),l=c("UT21"),h=c.n(l),r=c("APPD"),u={name:"game",data:function(){return{score:"  ",active:1,show:!1,leftImg:n.a,rightImg:h.a,items:[{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""},{question:"",choice:"",choice1:"",choice2:"",choice3:"",choice4:"",flag:!1,daan:""}]}},components:{rankingList:o.a,cebian:r.a},beforeMount:function(){this.getquestion()},methods:{tijiao:function(){var t=this;this.$confirm("确定提交吗?","提示",{confirmButtonText:"确定",cancleButtonText:"取消"}).then(function(){t.score=0;for(var e=0;e<10;e++){var c;switch(t.items[e].daan){case"A":c="1";break;case"B":c="2";break;case"C":c="3";break;case"D":c="4"}t.items[e].choice==c?t.score+=10:t.items[e].flag="true"}t.putscore(),t.show=!0,t.show=!0,t.$notify({title:"成绩是"+t.score+"分",message:"继续努力哟",type:"success"}),(t.active+=!1)&&(t.active=3)}).catch(function(){})},getquestion:function(){var t=this;a.a.post("http://localhost:8080/game/question").then(function(e){for(var c=0;c<10;c++)t.items[c].question=e.data.outList[c].question,t.items[c].choice1=e.data.outList[c].choice1,t.items[c].choice2=e.data.outList[c].choice2,t.items[c].choice3=e.data.outList[c].choice3,t.items[c].choice4=e.data.outList[c].choice4,t.items[c].daan=e.data.outList[c].daan}).catch(function(t){})},putscore:function(){var t=this;a.a.get("http://localhost:8080/game/score",{params:{score:this.score,username:this.$store.username}}).then(function(e){for(var c=0;c<10;c++)t.items[c].question=e.data.outList[c].question,t.items[c].choice1=e.data.outList[c].choice1,t.items[c].choice2=e.data.outList[c].choice2,t.items[c].choice3=e.data.outList[c].choice3,t.items[c].choice4=e.data.outList[c].choice4,t.items[c].daan=e.data.outList[c].daan}).catch(function(t){})},isLogin:function(){null==localStorage.getItem("token")&&this.$router.replace("/login")}}},f={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("navigation"),t._v(" "),c("cebian"),t._v(" "),c("el-row",{staticClass:"hidden-md-and-down"},[c("el-col",{staticClass:"hidden-md-and-down fixed",attrs:{lg:5}},[c("img",{staticClass:"fixedL",attrs:{src:t.leftImg,alt:""}})]),t._v(" "),c("el-col",{staticClass:"hidden-md-and-down fixed",attrs:{lg:5}},[c("img",{staticClass:"fixedR",attrs:{src:t.rightImg,alt:""}})]),t._v(" "),c("el-col",{attrs:{offset:5,lg:14}},[c("h1",{staticClass:"title"},[t._v("分类小测验")]),t._v(" "),c("p",{staticClass:"textCenter",staticStyle:{fontSize:"25px",marginTop:"10px"}},[t._v("每天分一分,生活美十分")]),t._v(" "),c("p",{staticStyle:{float:"right",fontSize:"25px"}},[t._v("得分："),c("span",{staticStyle:{fontSize:"35px"}},[t._v(t._s(t.score))])])]),t._v(" "),t._l(t.items,function(e,i){return c("el-col",{key:i,class:{question:!0,panduan:e.flag},attrs:{offset:5,lg:14}},[c("p",{staticClass:"wenti"},[t._v(t._s(i+1)+"."+t._s(e.question)+"？")]),t._v(" "),c("el-radio",{attrs:{label:"1"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice1)+"。")]),c("br"),t._v(" "),c("el-radio",{attrs:{label:"2"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice2)+"。")]),c("br"),t._v(" "),c("el-radio",{attrs:{label:"3"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice3)+"。")]),c("br"),t._v(" "),c("el-radio",{attrs:{label:"4"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice4)+"。")]),t._v(" "),t.show?c("p",{staticStyle:{fontSize:"25px",fontWeight:"700"}},[t._v("正确答案为："+t._s(e.daan))]):t._e()],1)}),t._v(" "),c("el-col",{staticStyle:{marginBottom:"10px"},attrs:{offset:10,lg:4}},[c("el-button",{staticClass:"jiaojuan",attrs:{type:"primary"},on:{"~click":function(e){return t.tijiao(e)}}},[t._v("提交")])],1),t._v(" "),c("el-col",{attrs:{offset:9,lg:6}},[c("el-steps",{attrs:{space:200,active:t.active,"finish-status":"success"}},[c("el-step",{attrs:{title:"已答题"}}),t._v(" "),c("el-step",{attrs:{title:"已提交"}}),t._v(" "),c("el-step",{attrs:{title:"已审阅"}}),t._v(" "),c("span",{staticStyle:{fontSize:"35px"}},[t._v("得分："+t._s(t.score))])],1)],1)],2),t._v(" "),c("el-row",{staticClass:"hidden-lg-and-up"},[c("el-col",{attrs:{span:24}},[c("h1",{staticClass:"title"},[t._v("分类小测验")]),t._v(" "),c("p",{staticClass:"textCenter",staticStyle:{fontSize:"25px",marginTop:"10px"}},[t._v("每天分一分,生活美十分")]),t._v(" "),c("p",{staticStyle:{float:"right",fontSize:"25px"}},[t._v("得分："),c("span",{staticStyle:{fontSize:"35px"}},[t._v(t._s(t.score))])])]),t._v(" "),t._l(t.items,function(e,i){return c("el-col",{key:i,class:{question:!0,panduan:e.flag},staticStyle:{paddingBottom:"230px"},attrs:{span:24}},[c("p",{staticClass:"wenti"},[t._v(t._s(i+1)+"."+t._s(e.question)+"？")]),t._v(" "),c("el-radio",{attrs:{label:"1"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice1)+"。")]),c("br"),t._v(" "),c("el-radio",{attrs:{label:"2"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice2)+"。")]),c("br"),t._v(" "),c("el-radio",{attrs:{label:"3"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice3)+"。")]),c("br"),t._v(" "),c("el-radio",{attrs:{label:"4"},model:{value:e.choice,callback:function(c){t.$set(e,"choice",c)},expression:"item.choice"}},[t._v(t._s(e.choice4)+"。")]),c("br"),t._v(" "),t.show?c("p",{staticStyle:{fontSize:"25px",fontWeight:"600"}},[t._v("正确答案为："+t._s(e.daan))]):t._e()],1)}),t._v(" "),c("el-col",{staticStyle:{marginBottom:"10px",textAlign:"center"},attrs:{offset:3,span:18}},[c("el-button",{staticClass:"jiaojuan",attrs:{type:"primary"},on:{click:t.tijiao}},[t._v("提交")])],1),t._v(" "),c("el-col",{attrs:{offset:3,span:21}},[c("el-steps",{attrs:{space:200,active:t.active,"finish-status":"success"}},[c("el-step",{attrs:{title:"已答题"}}),t._v(" "),c("el-step",{attrs:{title:"已提交"}}),t._v(" "),c("el-step",{attrs:{title:"已审阅"}})],1)],1)],2),t._v(" "),c("footers")],1)},staticRenderFns:[]};var v=c("VU/8")(u,f,!1,function(t){c("OyYq")},"data-v-4deda6cb",null);e.default=v.exports},OyYq:function(t,e){}});