"use strict";(self.webpackChunkdemo_blog=self.webpackChunkdemo_blog||[]).push([[22],{2176:(n,e,a)=>{a.r(e),a.d(e,{data:()=>l});const l={key:"v-1356360e",path:"/vuepress+github+versel%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2.html",title:"vuepress+GitHub+verce,搭建个人博客",lang:"zh-CN",frontmatter:{date:"2022/08/16 18:00",coverUrl:"image/1.png",sticky:!0,keyword:"vuepress,GitHub,verce,搭建个人博客",description:"vuepress+GitHub+verce,搭建个人博客",title:"vuepress+GitHub+verce,搭建个人博客",tag:["网站美化"],categories:["网站美化"]},excerpt:"",headers:[{level:2,title:"vercel",slug:"vercel",children:[{level:3,title:"🐳使用到的命令",slug:"🐳使用到的命令",children:[]}]},{level:2,title:"🌸Quick start",slug:"🌸quick-start",children:[]},{level:2,title:"🌸部署",slug:"🌸部署",children:[]},{level:2,title:"🌸Vercle",slug:"🌸vercle",children:[{level:3,title:"🐳使用",slug:"🐳使用",children:[]},{level:3,title:"🐳修改config.js",slug:"🐳修改config-js",children:[]},{level:3,title:"🐳push到github",slug:"🐳push到github",children:[]},{level:3,title:"vercel",slug:"vercel-1",children:[]},{level:3,title:"🐳部署成功",slug:"🐳部署成功",children:[]},{level:3,title:"🐳测试",slug:"🐳测试",children:[]}]}],git:{updatedTime:1660984045e3,contributors:[{name:"misdazzling",email:"359405846@qq.com",commits:1}]}}},3933:(n,e,a)=>{a.r(e),a.d(e,{default:()=>vl});var l=a(6252);const r=(0,l.uE)('<p>给大家推荐一个免费部署个人博客的方案。</p><p>使用vuepress+github托管+vercel。</p><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> vercel</h2><p>我们可以使用<code>vercel</code>进行部署，vercel和<code>github actions</code>很相似，都是通过将博客的所有必须文件（包括<code>package.json,docs</code>等）push到github的某个仓库仓库中，然后在vercel中创建一个项目，导入此仓库，之后的一切就交给<code>vercel</code>去做了</p><p>并且vercel还能够自动部署，如果你commit了新的内容，vercel监测到有新的<code>commit</code>之后，便会重新运行<code>npm run build</code>命令进行部署，你只需要将新的修改，从本地<code>push</code>到github便可以了（比如新增一篇文章），而不需要像<code>github pages</code>，<code>服务器部署</code>那样，每次新增文章，都需要在本地运行<code>npm run build</code>，然后再将<code>docs/.vuepress/dist</code>目录中的所有文件，上传到github或者服务器中才能完成博客新内容的改变</p><p>而且vercel还自带<code>cdn</code>加速，在速度上比使用通过<code>github pages</code>托管，通过<code>xxx.github.io/xxx</code>访问的速度快，除此以外，还可以自定义域名，可以使用我们自己的域名。</p>',6),s={id:"🐳使用到的命令",tabindex:"-1"},i=(0,l._)("a",{class:"header-anchor",href:"#🐳使用到的命令","aria-hidden":"true"},"#",-1),c=(0,l.Uk)(),t={href:"https://aurora.xcye.xyz/home/deploy.html#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},o=(0,l.Uk)("🐳"),g=(0,l.Uk)("使用到的命令"),p=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> yarn global add vue-cli\nyarn global add vuepress-theme-cli\naurora demo-blog\n\n \n[1]  yarn config set registry=http://registry.npm.taobao.org/\n[2]  cd blog-demo\n[3]  yarn install\n[4]  yarn run dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git  clone\n\ngit add.\n\ngit commit -m &#39;第一次上传&#39;\n\n\n\ngit push \n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>先忽略上面的命令。</p><p>首先推荐一款vuepress主题------Aurora。</p>',4),u={href:"https://www.npmjs.com/package/vuepress-theme-aurora",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("Aurora"),b=(0,l.uE)("是一款基于<strong>Vuepress2</strong>的博客主题，将本地<strong>Markdown</strong>文件解析成静态html页面，作为博客文章。搭配<strong>说说</strong>，<strong>时间轴</strong>，<strong>文章分类</strong>，<strong>评论</strong>，<strong>友情链接</strong>，<strong>相册</strong>，<strong>音乐播放器</strong>等特色功能，给您不一样的使用体验。",19),m=(0,l.uE)("<ul><li>🏆<strong>100%自定义</strong></li><li>🌈<strong>简洁，漂亮</strong></li><li>🎨<strong>高扩展</strong></li><li>💫<strong>多功能</strong></li><li>📖<strong>配置文档</strong></li></ul><p>前置工作：安装node.js和git（安装一直默认狂点）。</p><p>安装地址：git:https://registry.npmmirror.com/binary.html?path=git-for-windows/ (淘宝镜像网，比官网速度下载快)</p><p>node.js:https://nodejs.org/zh-cn/download/</p>",4),h={id:"🌸quick-start",tabindex:"-1"},_=(0,l._)("a",{class:"header-anchor",href:"#🌸quick-start","aria-hidden":"true"},"#",-1),f=(0,l.Uk)(),v={href:"https://aurora.xcye.xyz/readme/#quick-start",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("🌸"),z=(0,l.Uk)("Quick start"),y=(0,l._)("h4",{id:"方式一",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#方式一","aria-hidden":"true"},"#"),(0,l.Uk)(" 方式一：")],-1),x=(0,l._)("p",null,"按照主题文档下载（附带下载视频）",-1),j=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/28cb1555dd7c4bbebde20f81ee528984.png",data:"aurora"})],-1),U=(0,l.Uk)("有个坏处按照命令操作完之后，会和主题up的网站一样你会很难初始化，我推荐你使用方式二，我更喜欢用yarn代替npm。 "),E={href:"https://aurora.xcye.xyz/readme/",target:"_blank",rel:"noopener noreferrer"},S=(0,l.Uk)("链接"),B=(0,l.Uk)("："),A={href:"https://aurora.xcye.xyz/readme/",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("https://aurora.xcye.xyz/readme/"),q=(0,l._)("h4",{id:"方式二",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#方式二","aria-hidden":"true"},"#"),(0,l.Uk)(" 方式二：")],-1),w=(0,l._)("p",null,"通过github下载主题包，好处不用额外配置，而且操作方便。",-1),D=(0,l._)("p",null,"首先访问主题的GitHub下载压缩包。",-1),F=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/85963d9cf3ab4bcd8af34a0b2f4f6f3c.png",data:"aurora"})],-1),G=(0,l.Uk)("网址："),C={href:"https://github.com/vuepress-aurora/vuepress-theme-aurora",target:"_blank",rel:"noopener noreferrer"},H=(0,l.Uk)("https://github.com/vuepress-aurora/vuepress-theme-aurora"),N=(0,l._)("p",null,"下载之后，放在想要放的路径下解压。",-1),V=(0,l._)("p",null,[(0,l.Uk)("解压之后里面是这样的。 "),(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/807f048c1d0c4a18ab4c3d3ba4414d87.png",data:"aurora"})],-1),I=(0,l._)("p",null,"只需要删除.github文件夹。",-1),R=(0,l._)("p",null,[(0,l.Uk)("我们博客内容在docs文件夹。只需修改这里面的文件。 "),(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/9132fe59187949ad87f89ef52edcd1d1.png",data:"aurora"})],-1),L=(0,l._)("p",null,"里面的文件是这样的，除了.vuepress文件夹，删除其余所有文件。",-1),M=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3e9eb205d6a04642a76e7b12ac2627f8.png",data:"aurora"})],-1),Q=(0,l._)("p",null,"记住.vuepress文件夹里面的文件不可以动。",-1),P=(0,l._)("p",null,"以后写文章的话，只需要把md文件放在.vuepree同一目录下，md文件内容开头固定格式即可。",-1),T=(0,l._)("p",null,"如下图所示。",-1),X=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3eb653c022f34241b3429e6a23a34cc1.png",data:"aurora"})],-1),Y=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3e6de9c870384e828744ac246244536b.png",data:"aurora"})],-1),Z=(0,l.uE)('<p>md固定格式：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># date是手动设置此篇文章编写的时间\ndate: &quot;2022/08/16 18:00&quot;\n\n# 手动设置此篇文章封面\ncoverUrl: &quot;image/1.png&quot;\n\n# 是否置顶\nsticky: true\n\n# 设置keyword 多个以,分开\nkeyword: 第一篇文章\n# 设置description\ndescription: 这是我的第一篇文章\n\n# 手动设置标题，否则使用h1标签作为标题\ntitle: 这是一篇demo文章\n\n# 这是设置标签，数组形式\ntag: [杂记]\n\n# 这里设置类别，数组形式\ncategories: [杂记]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',2),J=(0,l._)("p",null,[(0,l.Uk)("然后是.vuepress文件夹的内容。 "),(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/dc9c3bff3738482a8a60ddcb1752c99c.png",data:"aurora"})],-1),K=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public目录下放的是公共的图片文件、mp3文件、\n背景图、二维码、赞赏码等，只需要把自己的图片命名成相同的然后替换同名问价即可。\nconfig.js是全局配置文件，可以看主题的文档\nfriendlinks.js是友联的配置文件。\nnavbar.js是导航栏，自己根据需要修改。\nsosials.js是社交配置文件，可以修改自己的社交。\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',1),O=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/df612004edd04e03a686ce0d9afcea32.png",data:"aurora"})],-1),$=(0,l.uE)('<p>然后如图所示，输入cmd按回车打开终端。</p><p>注意这个目录，不要输错目录。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>##先安装脚手架\nyarn global add vuepress-theme-cli\n##在安装yarn\nyarn install\n（如果报错，先安装yarn,win+R打开cmd，输入npm install -g yarn回车，然后输入yarn -v查看是否安装好）\n##运行\nyarn run dev\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',3),nn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-9PjhXoWp-1660726075579)(https://raw.githubusercontent.com/misDazzling/photobed/main/image-20220815232459520.png)]",originSrc:"https://img-blog.csdnimg.cn/5de5d4a69cea4f6eb5ad36a761d25639.png",data:"aurora"})],-1),en=(0,l._)("p",null,"访问图中的地址。",-1),an=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/124bbb621ddf408d9c85d3b1ac73801a.png",data:"aurora"})],-1),ln=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/f99252334aed48019b0a8e655a90e696.png",data:"aurora"})],-1),rn=(0,l._)("p",null,"文章都清零了，是不是非常简洁舒服。",-1),sn=(0,l._)("p",null,"然后修改配置文件，舒舒服服。",-1),cn=(0,l._)("p",null,"推荐下载vscode来编辑。",-1),tn=(0,l._)("p",null,"把文件夹拖入vscode。",-1),on=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/c5561885bc24487c91d45a4260da773f.png",data:"aurora"})],-1),gn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3417c578e61b475489df70c487b30930.png",data:"aurora"})],-1),pn=(0,l._)("p",null,"主要修改上面的js文件和public文件夹下的微信收款码和微信二维码和支付宝收款码。",-1),un=(0,l._)("p",null,[(0,l._)("strong",null,"首先修改config.js。")],-1),dn=(0,l._)("p",null,"修改关于页about。",-1),bn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/9d11212f23c4412db42a33d8c8dd4f61.png",data:"aurora"})],-1),mn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/e0ff6f1505964080b53285f1eb61daf4.png",data:"aurora"})],-1),hn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/8abb438e3f1d4ce0a5f65ffcc41e1033.png",data:"aurora"})],-1),_n=(0,l._)("p",null,"describe自己自由发挥。",-1),fn=(0,l._)("p",null,"时间轴存在非文件链接。",-1),vn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/338abdaab2f24e21afd6e122d7339988.png",data:"aurora"})],-1),kn=(0,l._)("p",null,"配置时间轴，还是在config.js文件夹下。",-1),zn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/ebbf7d1fb0ae43dd8e1bc23823fd0f4d.png",data:"aurora"})],-1),yn=(0,l._)("p",null,"点击里面的链接：如果连接是localhost:8080/archive",-1),xn=(0,l._)("p",null,"就在excludes里面添加‘/archive/’",-1),jn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/b4f15654845a40ae9d37930d72d7b64e.png",data:"aurora"})],-1),Un=(0,l._)("p",null,"如果是目录前后都加斜杠，如果是文件如404.html，只在前面加斜杠。",-1),En=(0,l._)("p",null,"如果是localhost:8080，添加'/'就可以了。",-1),Sn=(0,l._)("p",null,"效果如下：",-1),Bn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/652b234e2a32420cabc480d22295e59b.png",data:"aurora"})],-1),An=(0,l._)("p",null,"上面我新建的md文件请忽略，你只需要在下图的路径下，上传md文件，注意文件内容的格式哦。上文有提到。",-1),Wn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220815234334340",originSrc:"https://img-blog.csdnimg.cn/img_convert/0a01b7b9faeef09f7d87c14d5713acdf.png",data:"aurora"})],-1),qn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/936fa7bbf86a40b6ae595f9ae256bb40.png",data:"aurora"})],-1),wn=(0,l._)("p",null,"然后修改导航栏。",-1),Dn=(0,l._)("p",null,"修改navbar.js。",-1),Fn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/16c5b50d05c34631b0b2a58c67e8d507.png",data:"aurora"})],-1),Gn=(0,l._)("p",null,[(0,l.Uk)("没用的都删除，注意花括号对应删除哦。 "),(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a9ad880f597a4c18bb852d407f829ff3.png",data:"aurora"})],-1),Cn=(0,l._)("p",null,"保留到友情链接即可，放心食用。",-1),Hn=(0,l._)("p",null,"效果图：",-1),Nn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/58865a0504a74734b6af92df8e8b46c9.png",data:"aurora"})],-1),Vn=(0,l._)("p",null,[(0,l._)("strong",null,"然后修改社交")],-1),In=(0,l._)("p",null,"修改socials.js文件",-1),Rn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3bd9b8a8e6b74276b71e83bedcf4823f.png",data:"aurora"})],-1),Ln=(0,l._)("p",null,"对应修改即可。",-1),Mn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/062686a84a5343ff8a79a06db9a1de08.png",data:"aurora"})],-1),Qn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/7098d8cd21e74d9b851cae07dd9d915f.png",data:"aurora"})],-1),Pn=(0,l._)("p",null,"上面的文件替换为自己的。",-1),Tn=(0,l._)("p",null,[(0,l._)("strong",null,"修改侧边介绍")],-1),Xn=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220815235114079",originSrc:"https://img-blog.csdnimg.cn/img_convert/851346d6dc91f59597c199a91c425343.png",data:"aurora"})],-1),Yn=(0,l._)("p",null,[(0,l.Uk)("config.js 856行自行修改。 "),(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/da3220c9891e44979b616c4626c7377f.png",data:"aurora"})],-1),Zn=(0,l._)("p",null,[(0,l._)("strong",null,"注意修改之后，在终端ctrl +c ，重新启动 yarn run dev ，才会生效。")],-1),Jn={id:"🌸部署",tabindex:"-1"},Kn=(0,l._)("a",{class:"header-anchor",href:"#🌸部署","aria-hidden":"true"},"#",-1),On=(0,l.Uk)(),$n={href:"https://aurora.xcye.xyz/readme/#%E9%83%A8%E7%BD%B2%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},ne=(0,l.Uk)("🌸"),ee=(0,l.Uk)("部署"),ae=(0,l._)("p",null,"可以参考大佬的文档。",-1),le={href:"https://aurora.xcye.xyz/readme/#quick-start",target:"_blank",rel:"noopener noreferrer"},re=(0,l.Uk)("https://aurora.xcye.xyz/readme/#quick-start"),se=(0,l._)("p",null,"选择vercel部署的方式。",-1),ie={id:"🌸vercle",tabindex:"-1"},ce=(0,l._)("a",{class:"header-anchor",href:"#🌸vercle","aria-hidden":"true"},"#",-1),te=(0,l.Uk)(),oe={href:"https://aurora.xcye.xyz/readme/#vercle",target:"_blank",rel:"noopener noreferrer"},ge=(0,l.Uk)("🌸"),pe=(0,l.Uk)("Vercle"),ue={id:"🐳使用",tabindex:"-1"},de=(0,l._)("a",{class:"header-anchor",href:"#🐳使用","aria-hidden":"true"},"#",-1),be=(0,l.Uk)(),me={href:"https://aurora.xcye.xyz/readme/#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},he=(0,l.Uk)("🐳"),_e=(0,l.Uk)("使用"),fe={id:"⛄需知",tabindex:"-1"},ve=(0,l._)("a",{class:"header-anchor",href:"#⛄需知","aria-hidden":"true"},"#",-1),ke=(0,l.Uk)(),ze={href:"https://aurora.xcye.xyz/readme/#%E9%9C%80%E7%9F%A5",target:"_blank",rel:"noopener noreferrer"},ye=(0,l.Uk)("⛄"),xe=(0,l.Uk)("需知"),je=(0,l._)("p",null,"在这一步默认你已经在本地搭建好博客了，并且能够正常访问，如果本地访问出错的话，在vercel部署会失败",-1),Ue=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("目前主题最新最新版是"),(0,l._)("code",null,"v1.13.2"),(0,l.Uk)("，我记得在"),(0,l._)("code",null,"v1.13"),(0,l.Uk)("版本以前，依赖没有锁住的时候，在vercel中部署会失败，如果你并没有使用最新版的主题或者博客目录中，不存在"),(0,l._)("code",null,"npm-shrinkwrap.json"),(0,l.Uk)("文件，那么你可以按照下面步骤锁定依赖版本号")])],-1),Ee=(0,l._)("p",null,"WARNING",-1),Se=(0,l.Uk)("如果你博客目录中，存在"),Be=(0,l._)("code",null,"npm-shrinkwrap.json",-1),Ae=(0,l.Uk)("文件(在"),We=(0,l._)("code",null,"package.json",-1),qe=(0,l.Uk)("文件那里)，就不需要做下面这一步了，直接跳到"),we={href:"https://aurora.xcye.xyz/readme/#%E4%BF%AE%E6%94%B9config.js",target:"_blank",rel:"noopener noreferrer"},De=(0,l.Uk)("修改config.js"),Fe=(0,l.Uk)("位置便可以了"),Ge=(0,l.Uk)("如果你博客目录中，存在"),Ce=(0,l._)("code",null,"npm-shrinkwrap.json",-1),He=(0,l.Uk)("文件(在"),Ne=(0,l._)("code",null,"package.json",-1),Ve=(0,l.Uk)("文件那里)，就不需要做下面这一步了，直接跳到"),Ie={href:"https://aurora.xcye.xyz/readme/#%E4%BF%AE%E6%94%B9config.js",target:"_blank",rel:"noopener noreferrer"},Re=(0,l.Uk)("修改config.js"),Le=(0,l.Uk)("位置便可以了"),Me=(0,l._)("p",null,"如果第一步按照我下载的github的压缩包的话，直接进入修改config.js的步骤。",-1),Qe={id:"🐳修改config-js",tabindex:"-1"},Pe=(0,l._)("a",{class:"header-anchor",href:"#🐳修改config-js","aria-hidden":"true"},"#",-1),Te=(0,l.Uk)(),Xe={href:"https://aurora.xcye.xyz/readme/#%E4%BF%AE%E6%94%B9config-js",target:"_blank",rel:"noopener noreferrer"},Ye=(0,l.Uk)("🐳"),Ze=(0,l.Uk)("修改config.js"),Je=(0,l._)("p",null,[(0,l.Uk)("打开"),(0,l._)("code",null,"docs/.vuepress/config.js"),(0,l.Uk)("文件，在对应位置，添加下面内容")],-1),Ke=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/34735dcc13fb4faa882390211b021de6.png",data:"aurora"})],-1),Oe=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dest: &quot;public&quot;,\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>此配置的作用就是，运行<code>npm run build</code>命令后，打包后的文件，将会放在<code>public</code>目录中，默认是<code>docs/.vuepress/dist</code>目录，此<code>public</code>目录和<code>docs</code>目录同级</p></blockquote>',2),$e={id:"🐳push到github",tabindex:"-1"},na=(0,l._)("a",{class:"header-anchor",href:"#🐳push到github","aria-hidden":"true"},"#",-1),ea=(0,l.Uk)(),aa={href:"https://aurora.xcye.xyz/readme/#push%E5%88%B0github",target:"_blank",rel:"noopener noreferrer"},la=(0,l.Uk)("🐳"),ra=(0,l.Uk)("push到github"),sa=(0,l.uE)('<ol><li><p>新建一个<code>.gitignore</code>文件，将下面内容添加到此文件总</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/node_modules\n/.idea\n**/.cache\ndocs/.vuepress/dist\n**/.temp\n/public\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>然后就将你博客（包含docs,pageage.json等文件）push到github某个仓库中，这一步自己解决</p></li></ol><p>上面，如果是下载的github的压缩包，可以不需要新建.gitignore文件，直接push到github仓库中。</p><p>先</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn run build 打包一下\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),ia=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/b90efe859afd4dbe8677a0e8a92f3229.png",data:"aurora"})],-1),ca=(0,l._)("p",null,"error忽略。",-1),ta=(0,l._)("p",null,"新建仓库，名字最好是",-1),oa=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"你的用户名.github.io\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),ga=(0,l._)("p",null,"(免去很多配置)",-1),pa=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/9091bc55051b49be871ab0b649e20c22.png",data:"aurora"})],-1),ua=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/277a836337504b118d99ce900aadf629.png",data:"aurora"})],-1),da=(0,l._)("p",null,"然后注意添加README.md文件。",-1),ba=(0,l._)("p",null,"然后找到本地的博客文件的路径。",-1),ma=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/2d8df99a97044e6d8d05f8ef1f2bb335.png",data:"aurora"})],-1),ha=(0,l.uE)('<p>右键，git bash here。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git init ##初始化，该命令将创建一个名为 .git 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。 但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪。\n\ngit add .\ngit add LICENSE(可选)\ngit commit -m &#39;initial project version&#39; ##git commit -m &#39;第一次上传&#39;\n##稍后我们再逐一解释这些指令的行为。 现在，你已经得到了一个存在被追踪文件与初始提交的 Git 仓库。\ngit push \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',2),_a=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/0052ad7020cf42bfb4a775c231c6f166.png",data:"aurora"})],-1),fa=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/2e5be21a74ff43489d112fc79e5f6390.png",data:"aurora"})],-1),va=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/c7e7843c3ebf40b38ded1ea529a84d9b.png",data:"aurora"})],-1),ka=(0,l.uE)('<p>第一次git push 可能要你选择分支，注意他的提示。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push --set-upstream origin master##应该是这样\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vercel-1" tabindex="-1"><a class="header-anchor" href="#vercel-1" aria-hidden="true">#</a> vercel</h3>',3),za={id:"⛄登录",tabindex:"-1"},ya=(0,l._)("a",{class:"header-anchor",href:"#⛄登录","aria-hidden":"true"},"#",-1),xa=(0,l.Uk)(),ja={href:"https://aurora.xcye.xyz/readme/#%E7%99%BB%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},Ua=(0,l.Uk)("⛄"),Ea=(0,l.Uk)("登录"),Sa=(0,l.Uk)("进入"),Ba={href:"https://vercel.com/login",target:"_blank",rel:"noopener noreferrer"},Aa=(0,l.Uk)("Vercel"),Wa=(0,l.Uk)("官网，点击使用github登录。"),qa={href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"},wa=(0,l.Uk)("https://vercel.com/"),Da=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3225c6365e1d457984f7c034c1fe2f34.png",data:"aurora"})],-1),Fa=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://img-blog.csdnimg.cn/img_convert/b508ec532848ffa9fd986634495ed2c4.png",data:"aurora"})],-1),Ga=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/82e846ee118249719a7777ab940185fe.png",data:"aurora"})],-1),Ca=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://img-blog.csdnimg.cn/img_convert/639f65d2d8f33ee1fe2cae1bd31a6b75.png",data:"aurora"})],-1),Ha=(0,l._)("blockquote",null,[(0,l._)("p",null,"一定要设置上图这个，一定")],-1),Na=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/d73258d5d7564cb3845b8f25d369f3c8.png",data:"aurora"})],-1),Va=(0,l._)("p",null,"然后就等待部署，差不多两分钟左右。",-1),Ia=(0,l._)("p",null,"对了，里面填yarn run build。",-1),Ra={id:"🐳部署成功",tabindex:"-1"},La=(0,l._)("a",{class:"header-anchor",href:"#🐳部署成功","aria-hidden":"true"},"#",-1),Ma=(0,l.Uk)(),Qa={href:"https://aurora.xcye.xyz/readme/#%E9%83%A8%E7%BD%B2%E6%88%90%E5%8A%9F",target:"_blank",rel:"noopener noreferrer"},Pa=(0,l.Uk)("🐳"),Ta=(0,l.Uk)("部署成功"),Xa=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a8716d91f863465bb2e7491eaed69bdf.png",data:"aurora"})],-1),Ya=(0,l._)("p",null,[(0,l.Uk)("出现这个画面，就表示你已经部署成功了，现在点击那个"),(0,l._)("code",null,"go to dashboard"),(0,l.Uk)("就可以进入到控制面板中")],-1),Za=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/0309ba8bf8d247ef95e62c1e77bdba99.png",data:"aurora"})],-1),Ja={id:"⛄简单使用",tabindex:"-1"},Ka=(0,l._)("a",{class:"header-anchor",href:"#⛄简单使用","aria-hidden":"true"},"#",-1),Oa=(0,l.Uk)(),$a={href:"https://aurora.xcye.xyz/readme/#%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},nl=(0,l.Uk)("⛄"),el=(0,l.Uk)("简单使用"),al=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/47752777448f49b2921da633246ba1f5.png",data:"aurora"})],-1),ll=(0,l._)("p",null,"点击这里，可以重新部署",-1),rl=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a099f86324634cbf9db92d3c536e2a13.png",data:"aurora"})],-1),sl=(0,l._)("p",null,"点击这里，可以设置自定义域名",-1),il={id:"🐳测试",tabindex:"-1"},cl=(0,l._)("a",{class:"header-anchor",href:"#🐳测试","aria-hidden":"true"},"#",-1),tl=(0,l.Uk)(),ol={href:"https://aurora.xcye.xyz/readme/#%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"},gl=(0,l.Uk)("🐳"),pl=(0,l.Uk)("测试"),ul=(0,l._)("p",null,"我最开始也说了，vercel可以监测到github中的commit记录，如果有新的commit记录的话，vercel就会自动重新部署，重新部署这一步不需要我们操作",-1),dl=(0,l._)("p",null,"我们直接在github上，随便修改一下，然后点击提交",-1),bl=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/92ed915c96dc4c52b1e9a80dddc750c2.png",data:"aurora"})],-1),ml=(0,l._)("p",null,[(0,l.Uk)("然后我们回到vercel中，便可以看到，已经有一个新的部署在执行了，等待部署成功，我们便可以在博客中刷新，看到我们刚刚修改的内容。 "),(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/e53e1cf2046e4f14a682de3cf9fe2338.png",data:"aurora"})],-1),hl=(0,l._)("p",null,"舒服地结束啦。撒花~~~",-1),_l=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/14a8d30912a64f7fa385fcec749de9e6.png",data:"aurora"})],-1),fl={},vl=(0,a(3744).Z)(fl,[["render",function(n,e){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,(0,l._)("h3",s,[i,c,(0,l._)("a",t,[o,(0,l.Wm)(a)]),g]),p,(0,l._)("p",null,[(0,l._)("a",u,[d,(0,l.Wm)(a)]),b]),m,(0,l._)("h2",h,[_,f,(0,l._)("a",v,[k,(0,l.Wm)(a)]),z]),y,x,j,(0,l._)("p",null,[U,(0,l._)("a",E,[S,(0,l.Wm)(a)]),B,(0,l._)("a",A,[W,(0,l.Wm)(a)])]),q,w,D,F,(0,l._)("p",null,[G,(0,l._)("a",C,[H,(0,l.Wm)(a)])]),N,V,I,R,L,M,Q,P,T,X,Y,Z,J,K,O,$,nn,en,an,ln,rn,sn,cn,tn,on,gn,pn,un,dn,bn,mn,hn,_n,fn,vn,kn,zn,yn,xn,jn,Un,En,Sn,Bn,An,Wn,qn,wn,Dn,Fn,Gn,Cn,Hn,Nn,Vn,In,Rn,Ln,Mn,Qn,Pn,Tn,Xn,Yn,Zn,(0,l._)("h2",Jn,[Kn,On,(0,l._)("a",$n,[ne,(0,l.Wm)(a)]),ee]),ae,(0,l._)("p",null,[(0,l._)("a",le,[re,(0,l.Wm)(a)])]),se,(0,l._)("h2",ie,[ce,te,(0,l._)("a",oe,[ge,(0,l.Wm)(a)]),pe]),(0,l._)("h3",ue,[de,be,(0,l._)("a",me,[he,(0,l.Wm)(a)]),_e]),(0,l._)("h4",fe,[ve,ke,(0,l._)("a",ze,[ye,(0,l.Wm)(a)]),xe]),je,Ue,Ee,(0,l._)("p",null,[Se,Be,Ae,We,qe,(0,l._)("a",we,[De,(0,l.Wm)(a)]),Fe]),(0,l._)("p",null,[Ge,Ce,He,Ne,Ve,(0,l._)("a",Ie,[Re,(0,l.Wm)(a)]),Le]),Me,(0,l._)("h3",Qe,[Pe,Te,(0,l._)("a",Xe,[Ye,(0,l.Wm)(a)]),Ze]),Je,Ke,Oe,(0,l._)("h3",$e,[na,ea,(0,l._)("a",aa,[la,(0,l.Wm)(a)]),ra]),sa,ia,ca,ta,oa,ga,pa,ua,da,ba,ma,ha,_a,fa,va,ka,(0,l._)("h4",za,[ya,xa,(0,l._)("a",ja,[Ua,(0,l.Wm)(a)]),Ea]),(0,l._)("p",null,[Sa,(0,l._)("a",Ba,[Aa,(0,l.Wm)(a)]),Wa,(0,l._)("a",qa,[wa,(0,l.Wm)(a)])]),Da,Fa,Ga,Ca,Ha,Na,Va,Ia,(0,l._)("h3",Ra,[La,Ma,(0,l._)("a",Qa,[Pa,(0,l.Wm)(a)]),Ta]),Xa,Ya,Za,(0,l._)("h4",Ja,[Ka,Oa,(0,l._)("a",$a,[nl,(0,l.Wm)(a)]),el]),al,ll,rl,sl,(0,l._)("h3",il,[cl,tl,(0,l._)("a",ol,[gl,(0,l.Wm)(a)]),pl]),ul,dl,bl,ml,hl,_l],64)}]])}}]);