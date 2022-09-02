---
# date是手动设置此篇文章编写的时间
date: "2022/09/02 23:00"

# 手动设置此篇文章封面
coverUrl: "https://img-blog.csdnimg.cn/37845605c4dc4f7d8cc2c72ca82b0dd1.png"

# 是否置顶
stick: false

# 设置keyword 多个以,分开
keyword: git
# 设置description
description: git操作
# 手动设置标题，否则使用h1标签作为标题
title: 云计算git操作

# 这是设置标签，数组形式
tag: [git]

# 这里设置类别，数组形式
categories: [云计算实验]










---







## 🐳1. GitHub中建立仓库

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/0e3ce86157824efdb58e702e418db358.png)

🌈记得添加readme文件。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/37845605c4dc4f7d8cc2c72ca82b0dd1.png)

## 🐳2.GitHub到本机

🏆使用git指令同步github上的仓库
🌸克隆现有的仓库
🌸如果你想获得一份已经存在了的 Git 仓库的拷贝，比如说，你想为某个开源项目贡献自己的一份力，这时就要用到 git clone 命令。 如果你对其它的 VCS 系统（比如说 Subversion）很熟悉，请留心一下你所使用的命令是"clone"而不是"checkout"。 这是 Git 区别于其它版本控制系统的一个重要特性，Git 克隆的是该 Git 仓库服务器上的几乎所有数据，而不是仅仅复制完成你的工作所需要文件。 当你执行 git clone 命令的时候，默认配置下远程 Git 仓库中的每一个文件的每一个版本都将被拉取下来。 事实上，如果你的服务器的磁盘坏掉了，你通常可以使用任何一个克隆下来的用户端来重建服务器上的仓库 （虽然可能会丢失某些服务器端的钩子（hook）设置，但是所有版本的数据仍在，详见 在服务器上搭建 Git ）。
🌸克隆仓库的命令是 git clone <url> 。 比如，要克隆 Git 的链接库CloudComputingExperiment ，可以用下面的命令：

```bash
$ git clone https://github.com/misDazzling/CloudComputingExperiment.git
```

使用git clone 不仅可以克隆该git仓库服务器上几乎所有的数据，而且默认配置下远程 Git 仓库中的每一个文件的每一个版本都将被拉取下来，可以建立本地和远程仓库的联系。


🌸在管理Git项目上，很多时候都是直接使用https url克隆到本地，当然也有有些人使用SSH url克隆到本地。这两种方式的主要区别在于：使用https url克隆对初学者来说会比较方便，复制https url然后到git Bash里面直接用clone命令克隆到本地就好了，但是每次fetch和push代码都需要输入账号和密码，这也是https方式的麻烦之处。而使用SSH url克隆却需要在克隆之前先配置和添加好SSH key，因此，如果你想要使用SSH url克隆的话，你必须是这个项目的拥有者。否则你是无法添加SSH key的，另外ssh默认是每次fetch和push代码都不需要输入账号和密码，如果你想要每次都输入账号密码才能进行fetch和push也可以另外进行设置。

🎨1）ssh方式：这是一种相对安全的方式
这要求将本地的公钥上传到gitlab中，如下图：

 



🌸window客户机设置ssh方式连接gitlab，请见：[http://www.cnblogs.com/kevingrace/p/5651402.html](http://www.cnblogs.com/kevingrace/p/5651402.html)（文章底部有介绍）

🎨2）https连接方式

这种方式要求project在创建的时候只能选择“Public”公开状态，Private和Internal私有模式下不能使用http方式进行连接。（ssh方式在三种模式下都可以）。使用http方式直接连接gitlab显然没有ssh连接方式安全，但是也可以做些安全设置，比如在gitlab本机的iptables里做端口限制(如上是8081端口),添加白名单等。

 

🌸另外需要注意的是：gitlab上创建的项目仓库，要注意该仓库下的members权限，如果某个gitlab用户没有设置在该仓库members权限下，则使用该gitlab用户进行git clone操作可以，但是进行git push则会失败！报错:remote: GitLab: You are not allowed to push code to protected branches on this project.
```bash
比如，使用gitlab的kevin用户进行git上传下载操作，kevin用户默认没有加到scanhost.git项目仓库的member权限下。
1）git clone是可以的
[root@ test  ~] # git config --global user.name "你的用户名"  //全局添加用户名
[root@ test  ~] # git config --global user.email "你的邮箱"   //全局添加邮箱
[root@ test  ~] # git clone https://github.com/misDazzling/CloudComputingExperiment.git
[root@ test  ~] # cd scanhost
 
2）git push则不允许，没有权限
[root@ test  ~] # touch README.md
[root@ test  ~] # git add README.md
[root@ test  ~] # git commit -m "add README"
[root@ test  ~] # git push -u origin master
.......
remote: GitLab: You are not allowed to push code to protected branches on this project.
To http: //gitlab .kevin-inc.com /fanglianchao/scanhost .git
  ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to  'http://gitlab.kevin-inc.com/fanglianchao/scanhost.git'
 
需要将kevin用户加入到scanhost.git项目仓库的member权限里，这样就有权限进行git push了！
```

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/f73733e976f04af3a4469f662dbeaf15.png)

本地文件夹如图所示。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/d82adf2117634d08803641b0483a35d5.png)


# 🐳 3.对分支进行操作

🌸本地创建新的分支 test1，并使用指令查看。

![在这里插入图片描述](https://img-blog.csdnimg.cn/d9dbb2ec5d7641f2b0210939eb56dbf7.png)

🌸切换到test1分支。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/76f641295ba14b99a1ba4d2462b788f2.png)

🌸在本地仓库中新建了一个test1.txt文件，然后将其添加到本地仓库的test1分支中。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a36ad6b939564556a32d877ba09d6d1d.png)

🌸我们ls查看test1分支下的所有文件，再切换到main分支中查看，发现没有test1.txt文件，这是由于没有合并分支。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/661637a289ea4bae850a0230c633b3b7.png)

🌸下面将test1和main分支进行合并，合并后用ls查看mainr分支下的文件，发现出现了test1.txt文件，说明合并成功。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/b05771e92b3145529285bffea9b63949.png)

🌸此时我们就可以删除tes1t分支了，删除后只剩下主分支main

![在这里插入图片描述](https://img-blog.csdnimg.cn/f7276dfdf27f42de8715ea05c5dfbd1f.png)

## 🐳4.Fetch远程代码

🌸首先在github修改README.md文件，然后在云端提交。这里练习的是，上传远程仓库之前需要抓取远程仓库最近的修改，防止丢失远程仓库最新的提交和修改。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/04bc60c96be74dfab1e59261918d8125.png)

🌸然后fetch到本地
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/8df1034402f6484dbb03836f130207d9.png)

🌸使用命令将更新同步到本地，使用cat查看README.md文件，发现已经是最新版本。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a455bff0a42248a5b4c2fc4803460cc0.png)

🌸然后git push 推送到远程仓库。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/1c56002e90c24184952f112b95cd7067.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/e0a337dafecf492d955a81e8f9a2dc09.png)

