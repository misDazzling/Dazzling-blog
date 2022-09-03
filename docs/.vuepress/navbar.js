module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
       
        {
            text: 'life',
            iconClass: 'aurora-navbar-hua2',
            children: [
                {
                    children: [
                        {
                            text: 'Me',
                            link: "/about",
                        }

                    ],
                    text: "我?",
                },
                {
                    text: '说说',
                    children:[
                        {
                            text: '说说1',
                            link: '/mood'
                        },
                        {
                            text: '说说2',
                            link: '/next-mood'
                        }
                    ],
                },
                {
                    text: "相册",
                    children: [
                        {
                            text: 'photo',
                            link: '/photo'
                        }
                    ],
                },
            ],
        },
        {
            text: 'page',
            iconClass: 'aurora-navbar-a-ziyuan107',
            children: [
                {
                    text: '标签',
                    children: [{
                        text: 'tag',
                        link: '/tag'
                    }],
                },
                {
                    text: "时间轴",
                    children: [
                        {
                            text: 'archive',
                            link: '/archive'
                        }
                    ],
                },
            ],
        },
        {
            text: '标签',
            link: '/tag',
            iconClass: 'aurora-navbar-shoulijindu-xuanzhong'
        },
        {
            text: '友情链接',
            link: '/link',
            iconClass: 'aurora-navbar-guide'
        },
        
        {
            text: '留言板',
            link: '/Messageboard/Messageboard.md',
            iconClass: 'aurora-navbar-si-glyph-load'
        },
       
    ]
}