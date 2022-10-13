"use strict";(self.webpackChunkdemo_blog=self.webpackChunkdemo_blog||[]).push([[802],{2502:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-eab50442",path:"/%E4%BA%91%E8%AE%A1%E7%AE%97/%E4%BA%91%E8%AE%A1%E7%AE%97git%E6%93%8D%E4%BD%9C.html",title:"云计算git操作",lang:"zh-CN",frontmatter:{date:"2022/09/02 23:00",coverUrl:"https://img-blog.csdnimg.cn/37845605c4dc4f7d8cc2c72ca82b0dd1.png",stick:!1,keyword:"git",description:"git操作",title:"云计算git操作",tag:["git"],categories:["云计算实验"]},excerpt:"",headers:[{level:2,title:"🐳1. GitHub中建立仓库",slug:"🐳1-github中建立仓库",children:[]},{level:2,title:"🐳2.GitHub到本机",slug:"🐳2-github到本机",children:[]},{level:2,title:"🐳4.Fetch远程代码",slug:"🐳4-fetch远程代码",children:[]}],git:{updatedTime:1662200606e3,contributors:[{name:"misdazzling",email:"359405846@qq.com",commits:1}]}}},9481:(n,s,a)=>{a.r(s),a.d(s,{default:()=>R});var t=a(6252);const i=(0,t._)("h2",{id:"🐳1-github中建立仓库",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#🐳1-github中建立仓库","aria-hidden":"true"},"#"),(0,t.Uk)(" 🐳1. GitHub中建立仓库")],-1),c=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/0e3ce86157824efdb58e702e418db358.png",data:"aurora"})],-1),e=(0,t._)("p",null,[(0,t.Uk)("🌈记得添加readme文件。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/37845605c4dc4f7d8cc2c72ca82b0dd1.png",data:"aurora"})],-1),l=(0,t._)("h2",{id:"🐳2-github到本机",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#🐳2-github到本机","aria-hidden":"true"},"#"),(0,t.Uk)(" 🐳2.GitHub到本机")],-1),o=(0,t._)("p",null,"🏆使用git指令同步github上的仓库",-1),p=(0,t._)("p",null,"🏆使用git指令同步github上的仓库",-1),r=(0,t._)("p",null,"在管理Git项目上，很多时候都是直接使用https url克隆到本地，当然也有有些人使用SSH url克隆到本地。这两种方式的主要区别在于：使用https url克隆对初学者来说会比较方便，复制https url然后到git Bash里面直接用clone命令克隆到本地就好了，但是每次fetch和push代码都需要输入账号和密码，这也是https方式的麻烦之处。而使用SSH url克隆却需要在克隆之前先配置和添加好SSH key，因此，如果你想要使用SSH url克隆的话，你必须是这个项目的拥有者。否则你是无法添加SSH key的，另外ssh默认是每次fetch和push代码都不需要输入账号和密码，如果你想要每次都输入账号密码才能进行fetch和push也可以另外进行设置。",-1),g=(0,t._)("p",null,"🎨1）ssh方式：这是一种相对安全的方式 这要求将本地的公钥上传到gitlab中，如下图：",-1),u=(0,t.Uk)("🌸window客户机设置ssh方式连接gitlab，请见："),b={href:"http://www.cnblogs.com/kevingrace/p/5651402.html",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("http://www.cnblogs.com/kevingrace/p/5651402.html"),d=(0,t.Uk)("（文章底部有介绍）"),h=(0,t.uE)('<p>🎨2）https连接方式</p><p>这种方式要求project在创建的时候只能选择“Public”公开状态，Private和Internal私有模式下不能使用http方式进行连接。（ssh方式在三种模式下都可以）。使用http方式直接连接gitlab显然没有ssh连接方式安全，但是也可以做些安全设置，比如在gitlab本机的iptables里做端口限制(如上是8081端口),添加白名单等。</p><p>🌸另外需要注意的是：gitlab上创建的项目仓库，要注意该仓库下的members权限，如果某个gitlab用户没有设置在该仓库members权限下，则使用该gitlab用户进行git clone操作可以，但是进行git push则会失败！报错:remote: GitLab: You are not allowed to push code to protected branches on this project.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>比如，使用gitlab的kevin用户进行git上传下载操作，kevin用户默认没有加到scanhost.git项目仓库的member权限下。\n<span class="token number">1</span>）git clone是可以的\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># git config --global user.name &quot;你的用户名&quot;  //全局添加用户名</span>\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># git config --global user.email &quot;你的邮箱&quot;   //全局添加邮箱</span>\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># git clone https://github.com/misDazzling/CloudComputingExperiment.git</span>\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># cd scanhost</span>\n \n<span class="token number">2</span>）git push则不允许，没有权限\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># touch README.md</span>\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># git add README.md</span>\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># git commit -m &quot;add README&quot;</span>\n<span class="token punctuation">[</span>root@ <span class="token builtin class-name">test</span>  ~<span class="token punctuation">]</span> <span class="token comment"># git push -u origin master</span>\n<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.\nremote: GitLab: You are not allowed to push code to protected branches on this project.\nTo http: //gitlab .kevin-inc.com /fanglianchao/scanhost .git\n  <span class="token operator">!</span> <span class="token punctuation">[</span>remote rejected<span class="token punctuation">]</span> master -<span class="token operator">&gt;</span> master <span class="token punctuation">(</span>pre-receive hook declined<span class="token punctuation">)</span>\nerror: failed to push some refs to  <span class="token string">&#39;http://gitlab.kevin-inc.com/fanglianchao/scanhost.git&#39;</span>\n \n需要将kevin用户加入到scanhost.git项目仓库的member权限里，这样就有权限进行git push了！\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',4),k=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/f73733e976f04af3a4469f662dbeaf15.png",data:"aurora"})],-1),f=(0,t._)("p",null,[(0,t.Uk)("本地文件夹如图所示。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/d82adf2117634d08803641b0483a35d5.png",data:"aurora"})],-1),_=(0,t._)("h1",{id:"🐳-3-对分支进行操作",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#🐳-3-对分支进行操作","aria-hidden":"true"},"#"),(0,t.Uk)(" 🐳 3.对分支进行操作")],-1),z=(0,t._)("p",null,"🌸本地创建新的分支 test1，并使用指令查看。",-1),v=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/d9dbb2ec5d7641f2b0210939eb56dbf7.png",data:"aurora"})],-1),E=(0,t._)("p",null,[(0,t.Uk)("🌸切换到test1分支。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/76f641295ba14b99a1ba4d2462b788f2.png",data:"aurora"})],-1),S=(0,t._)("p",null,[(0,t.Uk)("🌸在本地仓库中新建了一个test1.txt文件，然后将其添加到本地仓库的test1分支中。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a36ad6b939564556a32d877ba09d6d1d.png",data:"aurora"})],-1),j=(0,t._)("p",null,[(0,t.Uk)("🌸我们ls查看test1分支下的所有文件，再切换到main分支中查看，发现没有test1.txt文件，这是由于没有合并分支。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/661637a289ea4bae850a0230c633b3b7.png",data:"aurora"})],-1),y=(0,t._)("p",null,[(0,t.Uk)("🌸下面将test1和main分支进行合并，合并后用ls查看mainr分支下的文件，发现出现了test1.txt文件，说明合并成功。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/b05771e92b3145529285bffea9b63949.png",data:"aurora"})],-1),U=(0,t._)("p",null,"🌸此时我们就可以删除tes1t分支了，删除后只剩下主分支main",-1),w=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/f7276dfdf27f42de8715ea05c5dfbd1f.png",data:"aurora"})],-1),A=(0,t._)("h2",{id:"🐳4-fetch远程代码",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#🐳4-fetch远程代码","aria-hidden":"true"},"#"),(0,t.Uk)(" 🐳4.Fetch远程代码")],-1),x=(0,t._)("p",null,[(0,t.Uk)("🌸首先在github修改README.md文件，然后在云端提交。这里练习的是，上传远程仓库之前需要抓取远程仓库最近的修改，防止丢失远程仓库最新的提交和修改。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/04bc60c96be74dfab1e59261918d8125.png",data:"aurora"})],-1),H=(0,t._)("p",null,[(0,t.Uk)("🌸然后fetch到本地 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/8df1034402f6484dbb03836f130207d9.png",data:"aurora"})],-1),D=(0,t._)("p",null,[(0,t.Uk)("🌸使用命令将更新同步到本地，使用cat查看README.md文件，发现已经是最新版本。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a455bff0a42248a5b4c2fc4803460cc0.png",data:"aurora"})],-1),q=(0,t._)("p",null,"🌸然后git push 推送到远程仓库。",-1),G=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/1c56002e90c24184952f112b95cd7067.png",data:"aurora"})],-1),C=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/e0a337dafecf492d955a81e8f9a2dc09.png",data:"aurora"})],-1),M={},R=(0,a(3744).Z)(M,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,c,e,l,o,p,r,g,(0,t._)("p",null,[u,(0,t._)("a",b,[m,(0,t.Wm)(a)]),d]),h,k,f,_,z,v,E,S,j,y,U,w,A,x,H,D,q,G,C],64)}]])}}]);