---
# date是手动设置此篇文章编写的时间
date: "2022/08/16 18:00"

# 手动设置此篇文章封面
coverUrl: "image/1.png"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: vuepress,GitHub,verce,搭建个人博客
# 设置description
description: vuepress+GitHub+verce,搭建个人博客

# 手动设置标题，否则使用h1标签作为标题
title: vuepress+GitHub+verce,搭建个人博客

# 这是设置标签，数组形式
tag: [网站美化]

# 这里设置类别，数组形式
categories: [网站美化]

---

给大家推荐一个免费部署个人博客的方案。

使用vuepress+github托管+vercel。

## vercel

我们可以使用`vercel`进行部署，vercel和`github actions`很相似，都是通过将博客的所有必须文件（包括`package.json,docs`等）push到github的某个仓库仓库中，然后在vercel中创建一个项目，导入此仓库，之后的一切就交给`vercel`去做了

并且vercel还能够自动部署，如果你commit了新的内容，vercel监测到有新的`commit`之后，便会重新运行`npm run build`命令进行部署，你只需要将新的修改，从本地`push`到github便可以了（比如新增一篇文章），而不需要像`github pages`，`服务器部署`那样，每次新增文章，都需要在本地运行`npm run build`，然后再将`docs/.vuepress/dist`目录中的所有文件，上传到github或者服务器中才能完成博客新内容的改变

而且vercel还自带`cdn`加速，在速度上比使用通过`github pages`托管，通过`xxx.github.io/xxx`访问的速度快，除此以外，还可以自定义域名，可以使用我们自己的域名。

### [🐳](https://aurora.xcye.xyz/home/deploy.html#使用)使用到的命令



```
 yarn global add vue-cli
yarn global add vuepress-theme-cli
aurora demo-blog

 
[1]  yarn config set registry=http://registry.npm.taobao.org/
[2]  cd blog-demo
[3]  yarn install
[4]  yarn run dev
```



```
git  clone

git add.

git commit -m '第一次上传'



git push 


```

先忽略上面的命令。



首先推荐一款vuepress主题------Aurora。

[Aurora](https://www.npmjs.com/package/vuepress-theme-aurora)是一款基于**Vuepress2**的博客主题，将本地**Markdown**文件解析成静态html页面，作为博客文章。搭配**说说**，**时间轴**，**文章分类**，**评论**，**友情链接**，**相册**，**音乐播放器**等特色功能，给您不一样的使用体验。

- 🏆**100%自定义**
- 🌈**简洁，漂亮**
- 🎨**高扩展**
- 💫**多功能**
- 📖**配置文档**



前置工作：安装node.js和git（安装一直默认狂点）。

安装地址：git:https://registry.npmmirror.com/binary.html?path=git-for-windows/  (淘宝镜像网，比官网速度下载快)

node.js:https://nodejs.org/zh-cn/download/

## [🌸](https://aurora.xcye.xyz/readme/#quick-start)Quick start

#### 方式一：

按照主题文档下载（附带下载视频）

![在这里插入图片描述](https://img-blog.csdnimg.cn/28cb1555dd7c4bbebde20f81ee528984.png)


有个坏处按照命令操作完之后，会和主题up的网站一样你会很难初始化，我推荐你使用方式二，我更喜欢用yarn代替npm。
[链接](https://aurora.xcye.xyz/readme/)：[https://aurora.xcye.xyz/readme/](https://aurora.xcye.xyz/readme/)


#### 方式二：

通过github下载主题包，好处不用额外配置，而且操作方便。

首先访问主题的GitHub下载压缩包。

![在这里插入图片描述](https://img-blog.csdnimg.cn/85963d9cf3ab4bcd8af34a0b2f4f6f3c.png)



网址：[https://github.com/vuepress-aurora/vuepress-theme-aurora](https://github.com/vuepress-aurora/vuepress-theme-aurora)

下载之后，放在想要放的路径下解压。

解压之后里面是这样的。
![在这里插入图片描述](https://img-blog.csdnimg.cn/807f048c1d0c4a18ab4c3d3ba4414d87.png)


只需要删除.github文件夹。

我们博客内容在docs文件夹。只需修改这里面的文件。
![在这里插入图片描述](https://img-blog.csdnimg.cn/9132fe59187949ad87f89ef52edcd1d1.png)

里面的文件是这样的，除了.vuepress文件夹，删除其余所有文件。

![在这里插入图片描述](https://img-blog.csdnimg.cn/3e9eb205d6a04642a76e7b12ac2627f8.png)

记住.vuepress文件夹里面的文件不可以动。

以后写文章的话，只需要把md文件放在.vuepree同一目录下，md文件内容开头固定格式即可。

如下图所示。

![在这里插入图片描述](https://img-blog.csdnimg.cn/3eb653c022f34241b3429e6a23a34cc1.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/3e6de9c870384e828744ac246244536b.png)


md固定格式：

```
# date是手动设置此篇文章编写的时间
date: "2022/08/16 18:00"

# 手动设置此篇文章封面
coverUrl: "image/1.png"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 第一篇文章
# 设置description
description: 这是我的第一篇文章

# 手动设置标题，否则使用h1标签作为标题
title: 这是一篇demo文章

# 这是设置标签，数组形式
tag: [杂记]

# 这里设置类别，数组形式
categories: [杂记]
```

然后是.vuepress文件夹的内容。
![在这里插入图片描述](https://img-blog.csdnimg.cn/dc9c3bff3738482a8a60ddcb1752c99c.png)

```
public目录下放的是公共的图片文件、mp3文件、
背景图、二维码、赞赏码等，只需要把自己的图片命名成相同的然后替换同名问价即可。
config.js是全局配置文件，可以看主题的文档
friendlinks.js是友联的配置文件。
navbar.js是导航栏，自己根据需要修改。
sosials.js是社交配置文件，可以修改自己的社交。

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/df612004edd04e03a686ce0d9afcea32.png)


然后如图所示，输入cmd按回车打开终端。

注意这个目录，不要输错目录。

```
##先安装脚手架
yarn global add vuepress-theme-cli
##在安装yarn
yarn install
（如果报错，先安装yarn,win+R打开cmd，输入npm install -g yarn回车，然后输入yarn -v查看是否安装好）
##运行
yarn run dev

```

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-9PjhXoWp-1660726075579)(https://raw.githubusercontent.com/misDazzling/photobed/main/image-20220815232459520.png)\]](https://img-blog.csdnimg.cn/5de5d4a69cea4f6eb5ad36a761d25639.png)


访问图中的地址。

![在这里插入图片描述](https://img-blog.csdnimg.cn/124bbb621ddf408d9c85d3b1ac73801a.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/f99252334aed48019b0a8e655a90e696.png)


文章都清零了，是不是非常简洁舒服。

然后修改配置文件，舒舒服服。

推荐下载vscode来编辑。

把文件夹拖入vscode。

![在这里插入图片描述](https://img-blog.csdnimg.cn/c5561885bc24487c91d45a4260da773f.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/3417c578e61b475489df70c487b30930.png)


主要修改上面的js文件和public文件夹下的微信收款码和微信二维码和支付宝收款码。

**首先修改config.js。**

修改关于页about。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/9d11212f23c4412db42a33d8c8dd4f61.png)


 ![在这里插入图片描述](https://img-blog.csdnimg.cn/e0ff6f1505964080b53285f1eb61daf4.png)


 ![在这里插入图片描述](https://img-blog.csdnimg.cn/8abb438e3f1d4ce0a5f65ffcc41e1033.png)


describe自己自由发挥。



时间轴存在非文件链接。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/338abdaab2f24e21afd6e122d7339988.png)

配置时间轴，还是在config.js文件夹下。

 
![在这里插入图片描述](https://img-blog.csdnimg.cn/ebbf7d1fb0ae43dd8e1bc23823fd0f4d.png)

点击里面的链接：如果连接是localhost:8080/archive

就在excludes里面添加‘/archive/’

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/b4f15654845a40ae9d37930d72d7b64e.png)


如果是目录前后都加斜杠，如果是文件如404.html，只在前面加斜杠。

如果是localhost:8080，添加'/'就可以了。

效果如下：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/652b234e2a32420cabc480d22295e59b.png)


上面我新建的md文件请忽略，你只需要在下图的路径下，上传md文件，注意文件内容的格式哦。上文有提到。

![image-20220815234334340](https://img-blog.csdnimg.cn/img_convert/0a01b7b9faeef09f7d87c14d5713acdf.png)

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/936fa7bbf86a40b6ae595f9ae256bb40.png)


然后修改导航栏。

修改navbar.js。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/16c5b50d05c34631b0b2a58c67e8d507.png)

没用的都删除，注意花括号对应删除哦。 
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9ad880f597a4c18bb852d407f829ff3.png)


保留到友情链接即可，放心食用。

效果图：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/58865a0504a74734b6af92df8e8b46c9.png)

**然后修改社交**

修改socials.js文件

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/3bd9b8a8e6b74276b71e83bedcf4823f.png)


对应修改即可。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/062686a84a5343ff8a79a06db9a1de08.png)


 ![在这里插入图片描述](https://img-blog.csdnimg.cn/7098d8cd21e74d9b851cae07dd9d915f.png)


上面的文件替换为自己的。



**修改侧边介绍**

![image-20220815235114079](https://img-blog.csdnimg.cn/img_convert/851346d6dc91f59597c199a91c425343.png)

config.js  856行自行修改。 ![在这里插入图片描述](https://img-blog.csdnimg.cn/da3220c9891e44979b616c4626c7377f.png)


**注意修改之后，在终端ctrl +c ，重新启动 yarn run dev ，才会生效。**





## [🌸](https://aurora.xcye.xyz/readme/#部署到自己的服务器)部署

可以参考大佬的文档。

[https://aurora.xcye.xyz/readme/#quick-start](https://aurora.xcye.xyz/readme/#quick-start)

选择vercel部署的方式。

## [🌸](https://aurora.xcye.xyz/readme/#vercle)Vercle

### [🐳](https://aurora.xcye.xyz/readme/#使用)使用

#### [⛄](https://aurora.xcye.xyz/readme/#需知)需知

在这一步默认你已经在本地搭建好博客了，并且能够正常访问，如果本地访问出错的话，在vercel部署会失败

> 目前主题最新最新版是`v1.13.2`，我记得在`v1.13`版本以前，依赖没有锁住的时候，在vercel中部署会失败，如果你并没有使用最新版的主题或者博客目录中，不存在`npm-shrinkwrap.json`文件，那么你可以按照下面步骤锁定依赖版本号

WARNING

如果你博客目录中，存在`npm-shrinkwrap.json`文件(在`package.json`文件那里)，就不需要做下面这一步了，直接跳到[修改config.js](https://aurora.xcye.xyz/readme/#修改config.js)位置便可以了

如果你博客目录中，存在`npm-shrinkwrap.json`文件(在`package.json`文件那里)，就不需要做下面这一步了，直接跳到[修改config.js](https://aurora.xcye.xyz/readme/#修改config.js)位置便可以了



如果第一步按照我下载的github的压缩包的话，直接进入修改config.js的步骤。

### [🐳](https://aurora.xcye.xyz/readme/#修改config-js)修改config.js

打开`docs/.vuepress/config.js`文件，在对应位置，添加下面内容

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/34735dcc13fb4faa882390211b021de6.png)

```
dest: "public",
```

> 此配置的作用就是，运行`npm run build`命令后，打包后的文件，将会放在`public`目录中，默认是`docs/.vuepress/dist`目录，此`public`目录和`docs`目录同级

### [🐳](https://aurora.xcye.xyz/readme/#push到github)push到github

1. 新建一个`.gitignore`文件，将下面内容添加到此文件总

   ```text
   /node_modules
   /.idea
   **/.cache
   docs/.vuepress/dist
   **/.temp
   /public
   ```

   

2. 然后就将你博客（包含docs,pageage.json等文件）push到github某个仓库中，这一步自己解决



上面，如果是下载的github的压缩包，可以不需要新建.gitignore文件，直接push到github仓库中。

先

```
yarn run build 打包一下
```

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/b90efe859afd4dbe8677a0e8a92f3229.png)


error忽略。



新建仓库，名字最好是 

```
你的用户名.github.io
```

 (免去很多配置)

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/9091bc55051b49be871ab0b649e20c22.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/277a836337504b118d99ce900aadf629.png)


然后注意添加README.md文件。

然后找到本地的博客文件的路径。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/2d8df99a97044e6d8d05f8ef1f2bb335.png)


右键，git bash here。

```
git init ##初始化，该命令将创建一个名为 .git 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。 但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪。

git add .
git add LICENSE(可选)
git commit -m 'initial project version' ##git commit -m '第一次上传'
##稍后我们再逐一解释这些指令的行为。 现在，你已经得到了一个存在被追踪文件与初始提交的 Git 仓库。
git push 
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/0052ad7020cf42bfb4a775c231c6f166.png)

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/2e5be21a74ff43489d112fc79e5f6390.png)


 ![在这里插入图片描述](https://img-blog.csdnimg.cn/c7e7843c3ebf40b38ded1ea529a84d9b.png)

第一次git push 可能要你选择分支，注意他的提示。

```
git push --set-upstream origin master##应该是这样
```

### vercel

#### [⛄](https://aurora.xcye.xyz/readme/#登录)登录

进入[Vercel](https://vercel.com/login)官网，点击使用github登录。[https://vercel.com/](https://vercel.com/)

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/3225c6365e1d457984f7c034c1fe2f34.png)

![img](https://img-blog.csdnimg.cn/img_convert/b508ec532848ffa9fd986634495ed2c4.png)

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/82e846ee118249719a7777ab940185fe.png)

![img](https://img-blog.csdnimg.cn/img_convert/639f65d2d8f33ee1fe2cae1bd31a6b75.png)

> 一定要设置上图这个，一定

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/d73258d5d7564cb3845b8f25d369f3c8.png)


然后就等待部署，差不多两分钟左右。

对了，里面填yarn run build。

### [🐳](https://aurora.xcye.xyz/readme/#部署成功)部署成功 
![在这里插入图片描述](https://img-blog.csdnimg.cn/a8716d91f863465bb2e7491eaed69bdf.png)



出现这个画面，就表示你已经部署成功了，现在点击那个`go to dashboard`就可以进入到控制面板中

![在这里插入图片描述](https://img-blog.csdnimg.cn/0309ba8bf8d247ef95e62c1e77bdba99.png)


#### [⛄](https://aurora.xcye.xyz/readme/#简单使用)简单使用

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/47752777448f49b2921da633246ba1f5.png)


点击这里，可以重新部署

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a099f86324634cbf9db92d3c536e2a13.png)


点击这里，可以设置自定义域名

### [🐳](https://aurora.xcye.xyz/readme/#测试)测试

我最开始也说了，vercel可以监测到github中的commit记录，如果有新的commit记录的话，vercel就会自动重新部署，重新部署这一步不需要我们操作

我们直接在github上，随便修改一下，然后点击提交

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/92ed915c96dc4c52b1e9a80dddc750c2.png)


然后我们回到vercel中，便可以看到，已经有一个新的部署在执行了，等待部署成功，我们便可以在博客中刷新，看到我们刚刚修改的内容。
![在这里插入图片描述](https://img-blog.csdnimg.cn/e53e1cf2046e4f14a682de3cf9fe2338.png)


舒服地结束啦。撒花~~~

![在这里插入图片描述](https://img-blog.csdnimg.cn/14a8d30912a64f7fa385fcec749de9e6.png)

