"use strict";(self.webpackChunkdemo_blog=self.webpackChunkdemo_blog||[]).push([[435],{2435:(e,t,o)=>{o.r(t),o.d(t,{default:()=>me});var n=o(6252),a=o(9963),r=o(2262),i=o(2119),l=o(7621),s=o(4742),m=o(9755),h=o.n(m),c=o(3649),d=o(3577);const u={class:"page-top-share"},p={class:"page-top-share-next"},g={class:"recommend-page"};var v=o(4322);const y={class:"page-meta"},P=["data","chu"],f={key:1,class:"meta-item last-updated"},k={class:"meta-item-label"},w={class:"meta-item-info"},b={key:2,class:"meta-item contributors"},x={class:"meta-item-label"},L={class:"meta-item-info"},I=["title"],T=(0,n.Uk)(", ");var N=o(6670),S=o(8313),H=o(2025),C=o(4125);const _=(0,n.aZ)({name:"PageMeta",components:{Poster:H.Z,NavLink:S.Z},data:()=>({editNavLink:{link:"",text:""}}),setup(){const e=(0,s.X6)(),t=(()=>{const e=(0,l.I5)(),t=(0,s.X6)(),o=(0,l.Vi)(),a=(0,l.I2)();return(0,n.Fl)((()=>{var n,r,i,l;return(null==(r=null!=(n=a.value.lastUpdated)?n:t.value.lastUpdated)||r)&&(null==(i=o.value.git)?void 0:i.updatedTime)?new Date(null==(l=o.value.git)?void 0:l.updatedTime).toLocaleString(e.value.lang):null}))})(),o=(()=>{const e=(0,s.X6)(),t=(0,l.Vi)(),o=(0,l.I2)();return(0,n.Fl)((()=>{var n,a,r,i;return null!=(a=null!=(n=o.value.contributors)?n:e.value.contributors)&&!a||null==(i=null==(r=t.value.git)?void 0:r.contributors)?null:i}))})();return{themeLocale:e,lastUpdated:t,contributors:o}},computed:{getEditLink(){(0,l.Vi)();const e=(0,l.Vi)(),t=(0,s.X6)();let o=(()=>{const e=(0,s.X6)(),t=(0,l.Vi)(),o=(0,l.I2)();return(0,n.Fl)((()=>{var n,a;if(null!=(a=null!=(n=o.value.editLink)?n:e.value.editLink)&&!a)return null;const{repo:r,docsRepo:i=r,docsBranch:l="main",docsDir:s="",editLinkText:m}=e.value;if(!i)return null;const h=(0,N.Fg)({docsRepo:i,docsBranch:l,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return h?{text:null!=m?m:"Edit this page",link:h}:null}))})();t.value.githubActions&&void 0!==t.value.docsRepo&&new Promise(((t,o)=>{let n=e.value.path;for(let e=0;e<C.Z.length;e++)C.Z[e].path==n&&t(C.Z[e].filePathRelative)})).then((e=>{let n=t.value.docsRepo,a="";a=void 0!==t.value.docsBranch?t.value.docsBranch:"main",this.editNavLink.link=n+"/edit/"+a+"/docs/"+e,this.editNavLink.text=o.value.text}))}}});var D=o(3744);const M=(0,D.Z)(_,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("NavLink");return(0,n.wg)(),(0,n.iD)("footer",y,[e.editNavLink?((0,n.wg)(),(0,n.iD)("div",{key:0,data:e.editNavLink.link,chu:e.getEditLink,class:"meta-item edit-link"},[(0,n.Wm)(l,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])],8,P)):(0,n.kq)("",!0),e.lastUpdated?((0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("span",k,(0,d.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,n._)("span",w,(0,d.zw)(e.lastUpdated),1)])):(0,n.kq)("",!0),e.contributors&&e.contributors.length?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("span",x,(0,d.zw)(e.themeLocale.contributorsText)+": ",1),(0,n._)("span",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.contributors,((t,o)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:o},[(0,n._)("span",{class:"contributor",title:`email: ${t.email}`},(0,d.zw)(t.name),9,I),o!==e.contributors.length-1?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[T],64)):(0,n.kq)("",!0)],64)))),128))])])):(0,n.kq)("",!0)])}]]),R={key:0,class:"page-nav"},q={class:"inner"},$={key:0,class:"prev"},j=(0,n.Uk)(" ← "),z={key:1,class:"next"},A=(0,n.Uk)(" → ");var Z=o(480);const W=e=>!1===e?null:(0,Z.HD)(e)?(0,s.sC)(e):!!(0,Z.PO)(e)&&e,B=(e,t,o)=>{const n=e.findIndex((e=>e.link===t));if(-1!==n){const t=e[n+o];return(null==t?void 0:t.link)?t:null}for(const n of e)if(n.children){const e=B(n.children,t,o);if(e)return e}return null},V=(0,n.aZ)({name:"PageNav",components:{NavLink:S.Z},setup(){const e=(0,l.I2)(),t=(0,s.VU)(),o=(0,i.yj)();return{prevNavLink:(0,n.Fl)((()=>{const n=W(e.value.prev);return!1!==n?n:B(t.value,o.path,-1)})),nextNavLink:(0,n.Fl)((()=>{const n=W(e.value.next);return!1!==n?n:B(t.value,o.path,1)}))}}}),U=(0,D.Z)(V,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,n.wg)(),(0,n.iD)("nav",R,[(0,n._)("p",q,[e.prevNavLink?((0,n.wg)(),(0,n.iD)("span",$,[j,(0,n.Wm)(l,{item:e.prevNavLink},null,8,["item"])])):(0,n.kq)("",!0),e.nextNavLink?((0,n.wg)(),(0,n.iD)("span",z,[(0,n.Wm)(l,{item:e.nextNavLink},null,8,["item"]),A])):(0,n.kq)("",!0)])])):(0,n.kq)("",!0)}]]),O=(0,n._)("h2",{id:"recommend-top-title"},"推荐阅读",-1),X={id:"recommend",class:"recommend"},F={class:"recommend-item",id:"recommend-item"},Y={class:"recommend-bottom"},E={class:"aurora-recommend-bo"},K={class:"aurora-hover-color-animate"},G={name:"RecommendItem",data:()=>({recommendNoTitle:"`╮(￣▽￣)╭`"}),props:{item:null,index:null,themeProperty:""},computed:{getRecommendTag(){return this.item.categories},setSpanStyle(){return e=>{let t="";return t=void 0!==this.themeProperty.randomColor?this.themeProperty.randomColor[this.getRandomInt(0,this.themeProperty.randomColor.length-1)]:this.$store.state.defaultRandomColors[this.getRandomInt(0,this.$store.state.defaultRandomColors.length-1)],"background-color: "+t+";"}},getHref(){return this.item.articleUrl}},created(){void 0!==this.themeProperty.recommendNoTitle&&(this.recommendNoTitle=this.themeProperty.recommendNoTitle)},methods:{getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e)}},J={name:"RecommendPage",components:{RecommendItem:(0,D.Z)(G,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("div",{style:(0,d.j5)(i.setSpanStyle(o.index)),class:"recommend-top"},[(0,n._)("div",Y,[(0,n._)("div",E,[(0,n.Wm)(l,{to:i.getHref},{default:(0,n.w5)((()=>[(0,n._)("span",K,(0,d.zw)(""===o.item.title?r.recommendNoTitle:o.item.title),1)])),_:1},8,["to"])])])],4)])}]])},data:()=>({allPages:null}),props:{themeProperty:""},mounted(){setTimeout((()=>{let e=this.$store.state.allPageMap;new Promise(((t,o)=>{let n=[],a=30;if(void 0!==this.themeProperty.recommendPageLength&&null!=this.themeProperty.recommendPageLength&&(a=this.themeProperty.recommendPageLength),a<e.length)for(let t=0;t<a;t++)n.push(e[this.getRandomInt(0,e.length-1)]);else for(let t=0;t<e.length;t++)n.push(e[this.getRandomInt(0,e.length-1)]);t(n)})).then((e=>{this.allPages=e}))}),700)},methods:{getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e)}},Q=(0,D.Z)(J,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("recommend-item");return void 0===o.themeProperty.showRecommend||o.themeProperty.showRecommend?((0,n.wg)(),(0,n.iD)("main",{key:0,style:(0,d.j5)(e.$store.state.borderRadiusStyle+e.$store.state.opacityStyle),class:"page box"},[O,(0,n._)("div",X,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.allPages,((e,t)=>((0,n.wg)(),(0,n.j4)(l,{item:e,key:t,"theme-property":o.themeProperty,index:t},null,8,["item","theme-property","index"])))),128))])],4)):(0,n.kq)("",!0)}]]),ee={class:"page-next-left page-next-item"},te=["data"],oe={key:0,class:"page-next-right page-next-item"},ne=["data"],ae={name:"PageNextItem",data:()=>({currentCatalogObjectArr:null,prePage:"",nextPage:"",themeConfig:{},recommendNoTitle:"╮(￣▽￣)╭"}),computed:{getBgSrc(){let e=this.getRandomInt(-9999,999),t=this.getRandomInt(0,300),o=t/this.getRandomInt(0,30)*e+t,n=(0,s.X6)().value.homePageImgApi;return void 0===n&&(n=this.$store.state.defaultHomePageImgApi),"--homePageImgApi: url("+n+"?time="+o+");"}},created(){this.themeConfig=(0,s.BV)().value,void 0!==this.themeConfig.recommendNoTitle&&(this.recommendNoTitle=this.themeConfig.recommendNoTitle);let e=setInterval((()=>{0!==this.$store.state.currentCatalogObjectArr.length&&(this.currentCatalogObjectArr=this.$store.state.currentCatalogObjectArr,clearInterval(e),this.setPageNext())}),50)},methods:{getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e),setPageNext(){if(1===this.currentCatalogObjectArr.length)return void(this.prePage=this.currentCatalogObjectArr[0]);let e=this.$route.path,t=0,o=[];void 0!==(0,s.BV)().value.excludePath&&(o=(0,s.BV)().value.excludePath),new Promise(((e,t)=>{e(this.currentCatalogObjectArr.filter((e=>!o.includes(e.path))))})).then((o=>{new Promise(((n,a)=>{for(let n=0;n<o.length;n++)if(o[n].path===e){t=n;break}n(o)})).then((e=>{let o=e[(t-1)%e.length];this.prePage=void 0===o?e[e.length-1]:o,this.nextPage=e[(t+1)%e.length]}))}))}}},re=(0,D.Z)(ae,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{style:(0,d.j5)(i.getBgSrc),class:"page-bottom-next"},[(0,n._)("div",ee,[(0,n.Wm)(l,{to:void 0===r.prePage.path?"":r.prePage.path},{default:(0,n.w5)((()=>[(0,n._)("span",{data:r.prePage.path,class:"aurora-hover-color-animate"},(0,d.zw)(""===r.prePage.title?r.recommendNoTitle:r.prePage.title),9,te)])),_:1},8,["to"])]),""!==r.nextPage?((0,n.wg)(),(0,n.iD)("div",oe,[(0,n.Wm)(l,{to:void 0===r.nextPage.path?"":r.nextPage.path},{default:(0,n.w5)((()=>[(0,n._)("span",{data:r.nextPage.path,class:"aurora-hover-color-animate"},(0,d.zw)(""===r.nextPage.title?r.recommendNoTitle:r.nextPage.title),9,ne)])),_:1},8,["to"])])):(0,n.kq)("",!0)],4)}]]),ie=(0,n.aZ)({name:"Page",components:{PageMeta:M,PageNav:U,RecommendPage:Q,Mood:v.Z,PageNext:re},data:()=>({lazyLoadingImg:"https://ooszy.cco.vin/img/blog-public/ljz.gif",originPageData:"",posterContent:"",title:"",showMobileCatalog:!0,showPageMeta:!0,isHideH1:!0}),props:{pathName:"",themeProperty:""},computed:{showDonate(){let e=!0;try{e=this.themeProperty.donate.articlePage}catch(e){}return e}},emits:["getHeadLine"],created(){""!==this.$route.hash&&this.$router.push(this.$route.hash),this.showPageMeta=this.themeProperty.showPageMeta,this.$store.state.openMobileSidebar&&this.$store.commit("setOpenMobileSidebar",{openMobileSidebar:!1});const e=(0,l.Vi)();this.originPageData=e,void 0===e.value.frontmatter.title&&(this.isHideH1=!1),this.$emit("getHeadLine",e.value.title);let t=this.themeProperty.lazyLoadingImg;this.lazyLoadingImg=void 0===t?"https://ooszy.cco.vin/img/blog-public/ljz.gif":t},methods:{getPosterText:()=>new Promise(((e,t)=>{let o=h()(".pageContent p"),n="";if(o.length>30)for(let e=0;e<30;e++)n+=o[e].innerText;else for(let e=0;e<o.length;e++)n+=o[e].innerText;n=n.replace(/\r\n/g,""),n=n.replace(/\n/g,""),n=n.replace(/\s/g,""),n=n.replace("#",""),n=n.replace("#\n",""),n=n.replace("##\n",""),n=n.replace("##",""),e(n)})),start(){let e=h()(".pageContent img");for(let t=0;t<e.length;t++){let o=document.body.clientWidth,n=e[t],a=n.offsetTop,r=h()(window).scrollTop(),i="";i=o<600?a-r-350:a-(r+50),i<0&&this.loadImg(n)}},loadImg(e){let t=e.getAttribute("originSrc");null!==t&&e.setAttribute("src",t)},setOtherProperty(e,t){},setDesc(e){let t=document.querySelectorAll('meta[name="description"]');if(0!==t.length)new Promise(((e,o)=>{for(let e=0;e<t.length;e++)document.querySelector("head").removeChild(t[e]);e()})).then((()=>{let t=h()('<meta name="description" content="'+e+'">').get(0);document.querySelector("head").appendChild(t)}));else{let t=h()('<meta name="description" content="'+e+'">').get(0);document.querySelector("head").appendChild(t)}},setKeyword(e){let t=document.querySelector('meta[name="keyword"]');if(null===t){let t=h()('<meta name="keyword" content="'+e+'">').get(0);document.querySelector("head").appendChild(t)}else t.setAttribute("content",e)},setMeta(){let e=this.originPageData.frontmatter.description,t=this.originPageData.frontmatter.keyword,o="",n="",a=document.querySelector("#theme-default-content").innerText;a=a.replace(/[\r\n]/g,""),a=a.replace(" ",""),a.length>220&&(a=a.substr(0,220)),n=void 0===e||null==e?a:e,o=void 0===t||null==t?a.length>90?a.substr(0,90):a:t,this.setKeyword(o),this.setDesc(n),this.setOtherProperty(o,n)}},mounted(){h()(window).on("scroll",(()=>{this.start()})),this.$nextTick((()=>{this.getPosterText().then((e=>{this.posterContent=e})),this.setMeta();let e=h()("#c-page h1");e.length>0&&h()(e[0]).css("display","none");let t=document.querySelectorAll(".medium-zoom-content h1 a"),o=document.querySelectorAll(".medium-zoom-content h2 a"),n=document.querySelectorAll(".medium-zoom-content h3 a"),a=document.querySelectorAll(".medium-zoom-content h4 a,.medium-zoom-content h5 a,.medium-zoom-content h6 a");for(let e=0;e<t.length;e++)t[e].innerText="";for(let e=0;e<o.length;e++)void 0!==this.themeProperty.articleH2Icon?o[e].innerText=this.themeProperty.articleH2Icon:o[e].innerText="🌸";for(let e=0;e<n.length;e++)void 0!==this.themeProperty.articleH3Icon?n[e].innerText=this.themeProperty.articleH3Icon:n[e].innerText="🐳";for(let e=0;e<a.length;e++)void 0!==this.themeProperty.articleH4Icon?a[e].innerText=this.themeProperty.articleH4Icon:a[e].innerText="⛄"}))}}),le=(0,D.Z)(ie,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("poster"),s=(0,n.up)("Content"),m=(0,n.up)("PageMeta"),h=(0,n.up)("page-next"),c=(0,n.up)("b-center"),v=(0,n.up)("donate"),y=(0,n.up)("RecommendPage"),P=(0,n.up)("comment");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("main",{style:(0,d.j5)(e.$store.state.borderRadiusStyle+e.$store.state.opacityStyle),class:"page sidebar-single-enter-animate",id:"article-page"},[(0,n.WI)(e.$slots,"top"),(0,n._)("div",{id:"theme-default-content",class:(0,d.C_)([e.isHideH1?"show-h1-tag":"hide-h1-tag","theme-default-content pageContent medium-zoom-content"])},[(0,n._)("div",u,[(0,n._)("div",p,[(0,n.Wm)(l,{title:e.originPageData.title,content:e.posterContent},null,8,["title","content"])])]),(0,n.Wm)(s)],2),e.showPageMeta?((0,n.wg)(),(0,n.j4)(m,{key:0})):(0,n.kq)("",!0),(0,n.WI)(e.$slots,"bottom")],4),void 0===e.themeProperty.articlePagination||e.themeProperty.articlePagination?((0,n.wg)(),(0,n.j4)(c,{key:0},{"page-center1":(0,n.w5)((()=>[(0,n.Wm)(h)])),_:1})):(0,n.kq)("",!0),(0,n._)("div",null,[e.showDonate?((0,n.wg)(),(0,n.j4)(v,{key:0})):(0,n.kq)("",!0)]),(0,n._)("div",g,[(0,n.Wm)(y,{"theme-property":e.themeProperty},null,8,["theme-property"])]),(0,n.Wm)(P,{"path-name":e.pathName},null,8,["path-name"])],64)}]]),se=(0,n.aZ)({name:"Layout",components:{Home:c.Z,Page:le,Transition:a.uT},props:{showPrintTextValue:{type:Boolean,default:()=>!1}},setup(){const e=(0,l.Vi)(),t=(0,l.I2)(),o=(0,s.X6)(),a=(0,n.Fl)((()=>!1!==t.value.navbar&&!1!==o.value.navbar)),m=((0,s.VU)(),(0,r.iH)(!1)),c=e=>{m.value="boolean"==typeof e?e:!m.value,m.value&&h()("#c-sidebar").css("display","block")},d={x:0,y:0};let u;(0,n.bv)((()=>{const e=(0,i.tv)();u=e.afterEach((()=>{c(!1)}))})),(0,n.Ah)((()=>{u()}));const p=(0,s.P$)(),g=p.resolve,v=p.pending;return{frontmatter:t,page:e,shouldShowNavbar:a,toggleSidebar:c,onTouchStart:e=>{d.x=e.changedTouches[0].clientX,d.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-d.x,o=e.changedTouches[0].clientY-d.y;Math.abs(t)>Math.abs(o)&&Math.abs(t)>40&&(t>0&&d.x<=80?c(!0):c(!1))},onBeforeEnter:g,onBeforeLeave:v}},created(){this.themeProperty=(0,s.BV)().value},mounted(){this.$router.beforeEach(((e,t,o)=>{o()}))},data:()=>({isShow:!1,animeImg:"",headLine:"",isShowSideBar:"",themeProperty:null}),methods:{showPrintText(e){console.log(e)},getHeadLine(e){this.headLine=e}},computed:{setBackgroundUrl(){return"background-image: url("+this.animeImg+");"},getIsHome(){let e=(0,l.I2)().value.home;return this.isShowSideBar=void 0===e,this.isShowSideBar}}}),me=(0,D.Z)(se,[["render",function(e,t,o,a,r,i){const l=(0,n.up)("Home"),s=(0,n.up)("Page"),m=(0,n.up)("common"),h=(0,n.up)("Footer"),c=(0,n.up)("home-bottom");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{"is-sticky-sidebar":!e.frontmatter.home,"head-line":e.headLine,"is-show-head-line":!e.frontmatter.home,"is-home-page":e.frontmatter.home,"is-show-catalog":!e.frontmatter.home,"is-show-top-img":e.getIsHome},{center1:(0,n.w5)((()=>[e.frontmatter.home?((0,n.wg)(),(0,n.j4)(l,{key:0,"theme-property":e.themeProperty,"show-random-say":!0,"is-home":e.frontmatter.home},null,8,["theme-property","is-home"])):(0,n.kq)("",!0)])),center2:(0,n.w5)((()=>[e.frontmatter.home?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(s,{"path-name":e.page.path,onGetHeadLine:e.getHeadLine,"theme-property":e.themeProperty,key:e.page.path},{top:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"page-top")])),bottom:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"page-bottom")])),_:3},8,["path-name","onGetHeadLine","theme-property"]))])),_:3},8,["is-sticky-sidebar","head-line","is-show-head-line","is-home-page","is-show-catalog","is-show-top-img"]),e.frontmatter.home?((0,n.wg)(),(0,n.j4)(c,{key:0},{"home-footer":(0,n.w5)((()=>[(0,n.Wm)(h,{"theme-property":e.themeProperty,"is-home":!e.frontmatter.home,"is-show-footer":!0},null,8,["theme-property","is-home"])])),_:1})):(0,n.kq)("",!0)],64)}]])}}]);