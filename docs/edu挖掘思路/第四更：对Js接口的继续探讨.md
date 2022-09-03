---
# date是手动设置此篇文章编写的时间
date: "2022/08/20 21:04"

# 手动设置此篇文章封面
coverUrl: "https://img-blog.csdnimg.cn/d06f3efdfd914c34aaa7131b16c8ed19.png"

# 是否置顶
stick: false

# 设置keyword 多个以,分开
keyword: 渗透测试,EDU,web安全
# 设置description
description: 对Js接口的继续探讨
# 手动设置标题，否则使用h1标签作为标题
title: 第四更--对Js接口的继续探讨

# 这是设置标签，数组形式
tag: [edu挖掘思路]

# 这里设置类别，数组形式
categories: [edu挖掘思路]







---



**第四更:**
Ps:此次是对一个系统的具体挖掘方法，在我们挖掘漏洞的时候，遇见困难的，在自己技术和知识积累的情况达不够的时候，就可以放弃换简单的系统挖掘，一般脆弱系统为弱口令能进去的系统，之后在对后台挖掘，edusrc平台的某位核心白帽子都是靠弱口令上去的！！！
                                            **对Js接口的继续探讨**
                                                                       

目标站点：[http://202.197.xx.xxx/（学校常用的视频点播平台）](http://)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/7fd87fa6ba574738aa99b50768153988.png)

开局也是这样的一个登录框，当然首先测试就是弱口令admin/admin (admin/123456) 等常规的密码， （可以进行小量字典爆破一下），但是都没有办法进入，于是尝试寻找操作手册或者初始密码看是否能进入后台。
谷歌寻找操作手册：
![在这里插入图片描述](https://img-blog.csdnimg.cn/06a668cf5e3b4e68b3df5d9cf169ebf6.png)

操作手册能寻找到很多,但是点进去观看一看翻后，只提示了管理员账号为admin/初始密码需要自己设置，这种情况下，我们就不要继续在死磕查找弱口令，因为管理员一般在这种情况下是不可能继续设置简单的密码的。 
![在这里插入图片描述](https://img-blog.csdnimg.cn/13eb2dd60b0a40ee8774d3ee17f66439.png)


操作手册没有任何帮助后，我又再次返回登录页面，这时候我们就可以查看js文件，或者网页源代码来帮助我们挖掘漏洞：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/3b1d237ec0d04998ab18595ffd1ebb19.png)

在翻阅后看到这个接口：
（get方法构造请求，post传输参数）能看懂ajax吧，看不懂的就需要去弥补js的知识，随手构造接口访问试试：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/9f9c2cdfba3d434ab50814b681528f77.png)

没想到报错爆出另一个参数，然后构造语法开始对管理员密码重置：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/d06f3efdfd914c34aaa7131b16c8ed19.png)


success出现，更改管理员密码的逻辑漏洞到手，但是我的习惯一般都是先改弱口令然后在提交逻辑漏洞：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/01e8c116647141d09f7d07885902c9df.png)

成功重置密码进入后台，后台可以上传文件到达getshell，由于上传没有难度，无waf，我就不记录了，

站点大约有38个全是edu的：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/52ffe5e01cc049428bd7c82deaaf21bd.png)

js接口需要熟练的使用，那么逻辑的0day唾手可得，下面这个系统也是同样的方法：我就直接上报告分析了：此系统大约50 个站点全部以修复
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/e35bc64e607b475597aeafbc59ebaad0.png)

总结：其实挖洞还是细心和个人思维，黑盒测试玩的就是思路，想法有多大，漏洞就有多大，别以为不可能，或者一直和waf死磕。

