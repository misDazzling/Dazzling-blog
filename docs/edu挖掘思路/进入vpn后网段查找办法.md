---
# date是手动设置此篇文章编写的时间
date: "2022/08/20 21:00"

# 手动设置此篇文章封面
coverUrl: "https://img-blog.csdnimg.cn/716d00ed29f745b6ae288227466cb1dc.png"

# 是否置顶
stick: false

# 设置keyword 多个以,分开
keyword: 渗透测试,EDU,web安全
# 设置description
description: vpn漏洞挖掘方法
# 手动设置标题，否则使用h1标签作为标题
title: 进入vpn后网段查找方法

# 这是设置标签，数组形式
tag: [edu挖掘思路]

# 这里设置类别，数组形式
categories: [edu挖掘思路]




---



# vpn漏洞挖掘方法

1.	当你获取到sslvpn的时候，你可以进入内网，对其网段进行扫描挖掘漏洞，在内网中的漏洞是非常多的，比如数据库弱口令、ssh弱口令、设备弱口令、nday等等漏洞，当然这些都可以使用**fscan**进行即可

网段的获取：
   登录一站式服务大厅：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/2cc4211de1c941839a8c88245f9775f1.png)

来到这里将能打开的应用都打开，然后获取url进行ping
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/716d00ed29f745b6ae288227466cb1dc.png)

可以获取到一个ip，此时可以猜想这个网段肯定不止这一个服务然后进行二分法对b段ping存活即可 
![在这里插入图片描述](https://img-blog.csdnimg.cn/b45d51f72d474d118119de52ddef6388.png)

同理如上图可以看出存在192这个网段，那么就可以继续对这个网段利用python来探测b段或者使用Namp等工具。

