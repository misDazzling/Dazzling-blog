---
# date是手动设置此篇文章编写的时间
date: "2022/08/20 21:05"

# 手动设置此篇文章封面
coverUrl: "https://img-blog.csdnimg.cn/cc38823654b84daf989a87d439b5f500.png"

# 是否置顶
stick: false

# 设置keyword 多个以,分开
keyword: 渗透测试,EDU,web安全
# 设置description
description: edusrc通用思路
# 手动设置标题，否则使用h1标签作为标题
title: 第五更--edusrc通用思路

# 这是设置标签，数组形式
tag: [edu挖掘思路]

# 这里设置类别，数组形式
categories: [edu挖掘思路]






---





**edusrc通用思路：**
Ps:此文章是我在2021年四月份所写，这次就直接利用一下了！
思路：要想刷屏上分，就得找系统来挖掘，对于不会审计的我来说只有做一些黑盒测试（会审计大佬可以忽略这一点）
首先我们利用fofa找一些与edu有关的系统
语法：

> “系统” && org=“China Education and Research Network Center”

![在这里插入图片描述](https://img-blog.csdnimg.cn/cc38823654b84daf989a87d439b5f500.png)









其中可以在前面加一些：阅卷系统、评分系统、直播系统、录播系统。（我们需要找的是弱口令能进去的系统）
此次渗透我使用的是：“点播系统” && org=“China Education and Research Network Center”
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/84e2bf1dbd764db38e19f3ff8780a29d.png)

当确定系统后，我们就开始寻找目标站点，能通过弱口令进入的系统是最好的（admin\admin admin\123456)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/9e1c1d352e034d029ce95d4ede6a9d42.png)


通过上述的弱口令测试并没有进入后台，此时肯定会有爆破密码的想法，但是爆破成功的可能性太小了，于是我思考是否能通过找到操作手册发现默认密码，观察页面有关键字： 网瑞达和WRD视频直播点播系统
于是使用谷歌查找：WRD视频直播点播系统操作手册
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/de96dba89fca4c4ba6fc1b2e336ea8c6.png)


点进去看看能否找到默认密码,运气还是好，碰巧发现了默认密码：默认管理端用户名『admin』 密码为
『Wrd123!@#』。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/914c87de68fc434dbcb1577401097ddd.png)


发现WRD视频直播点播系统默认密码后，继续使用fofa构造语句查找能进入的系统（如果大多数都是默认密码，此处就是一个弱口令通杀）
语法：“WRD视频直播点播系统” && org=“China Education and Research Network Center”
![在这里插入图片描述](https://img-blog.csdnimg.cn/5ea51e59e8ef46e99b416e4022784c62.png)










运气还是有点倒霉的，这么多站点只有一个通过默认密码进入了系统： http://223.99.203.174:8081/login
（已修复），
测试完后，心里很复杂，这么多站点，就一个弱口令，看见有相关公司，于是在fofa一次公司名称，看看有没有别的站点：
语法：“网瑞达” && org=“China Education and Research Network Center”
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/b98a2025c2ad41af8d9657e79c28b98d.png)


发现这个公司的系统产品挺多的然后继续进行默认密码测试，在1063个站点下，大约测试出了10多个站点， 全部已经提交平台并且修复：
![在这里插入图片描述](https://img-blog.csdnimg.cn/c5af07ed0a794578b8d69d45d7d7e3d6.png)

看着这么多站点 ，却只有一点点能通过默认密码进入，心里非常的失落，于是有了能不能越权登录的想法： 首先在登录框抓登录的返回包看见false,顺手修改为true,放包：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/84c0e4773888433690c9273045283633.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/5f35e2e72a2349e29b5f62b2ab6a2ee4.png)

 


发现这样修改数据包，在放包时无任何反应，于是我思考，能不能用默认密码进入的站点的返回包放入不能登录的站点测试：
（通过测试，寻找到辅助站点：[http://211.64.117.58:9080/signin](http://1)

获取到返回登录数据包：


> HTTP/1.1 200 OK Server: Content-Type: application/json Connection:
> close Cache-Control: no-cache, private Date: Tue, 27 Apr 2021 03:00:35
> GMT Set-Cookie:
> laravel_session=eyJpdiI6IllsZ3EzYTMxVnpKeGdtMnA0dmNXcnc9PSIsInZhbHVlIjoiREJQQ2VIbVNhXC9
> VVE1hWEZ2NTdpa1lralZ6dXRxT0JnNkwzd3JrSEJqMHBlZ001YXhzNFp0MGpvdE9TN0h1TkNQQW94Y
> WFiWlFxbFNBOVpEVUVaVVBnPT0iLCJtYWMiOiI2MTRkYjYyNjA0YzRlNTk3MjczYjYwMzEzMDZiN2M1
> NDg5ZmY1MTAzODIxM2E3ZjM2NDc5Njc3ZWU4MTdmMDI5In0%3D; expires=Tue,
> 27-Apr-2021 05:00:35 GMT; Max-Age=7200; path=/; httponly
> Content-Length: 291 {“success”:true,“data”:{“token”:
> “eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8yMTEuNjQuMTE3LjU4
> OjkwODAvYXBpL3NpZ25pbiIsImlhdCI6MTYxOTQ5MjQzNSwiZXhwIjoxNjE5NTA2ODM1LCJuYmYiOjE2
> MTk0OTI0MzUsImp0aSI6Ik5RUWtScEZOOUE4Y1d6bWEifQ.U2tsG3rqnt8Qe1lX9rHR1HmHBJlS5mOB
> OmKkInF_GaM”}}

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/65f63b9c441e4fbf8cd58a86b44b312d.png)

去访问目标站点：[http://202.193.24.122:9080/signin](http://1)，然后在登录处输入账号admin 密码任意 ，抓返回， 将包换为刚获取的成功登录包然后放包：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/c0e4f2abbb20493d9975a4d40c05b8a1.png)

点击放包，没想到全部的数据包放完后，就成功的进入到后台了
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/49d31468745441ef91fdd55391d52866.png)


随后我任意选择了几个不同的学校进行了测试，都可以通过此方法进入后台，通过收集，一共有400所高校被日。

