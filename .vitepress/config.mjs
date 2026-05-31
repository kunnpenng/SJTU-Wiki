import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",
	base: '/SJTU-Wiki/'
    title: "SJTU Wiki",
    description: "Encyclopedia of SJTU",
	head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    lang: 'zh-CN',
	lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
			{text: '贡献指南', link: '/contributing'},
            {text: '思源极客协会', link: 'https://geek.sjtu.edu.cn'}
        ],

        sidebar: [
            {
                text: '首页',
                link: '/index'
            },
            {
                text: '快速导航',
                link: '/navigation'
            },
            {
                text: '学校简介',
                collapsed: false,
                items: [
                    {text: '组织机构', link: '/sjtu-introduction/organization'},
                    {text: '常用网站', link: '/sjtu-introduction/website'},
                    {text: '常用公众号', link: '/sjtu-introduction/wechat'},
                    {text: '通知渠道', link: '/sjtu-introduction/notice'},
                    {text: '费用和收入', link: '/sjtu-introduction/fee'}
                ]
            },
            {
                text: '新生',
                collapsed: false,
                items: [
                    {text: '入学准备', link: '/freshman/preparation'},
                    {text: '军训', link: '/freshman/training'},
                    {text: '其他', link: '/freshman/others'}
                ]
            },
            {
                text: '信息服务',
                collapsed: false,
                items: [
                    {text: 'jAccount账号', link: '/information-service/jaccount'},
                    {text: '网络', link: '/information-service/network'},
                    {text: 'HPC高性能计算服务', link: '/information-service/hpc'},
                    {text: '其他信息服务', link: '/information-service/others'}
                ]
            },
            {
                text: '生活服务',
                collapsed: false,
                items: [
                    {text: '宿舍', link: '/living-service/dormitory'},
                    {text: '餐饮', link: '/living-service/dining'},
                    {text: '交通', link: '/living-service/transportaion'},
                    {text: '运动', link: '/living-service/sports'},
                    {text: '图书馆', link: '/living-service/library'},
                    {text: '医疗', link: '/living-service/medical'},
                    {text: '其他校内服务', link: '/living-service/others'},
                    {text: '校外生活', link: '/living-service/outside'}
                ]
            },
            {
                text: '本科生学习',
                collapsed: false,
                items: [
                    {text: '概述', link: '/undergraduate-study/index'},
                    {text: '招生', link: '/undergraduate-study/admission'},
                    {
                        text: '培养计划',
                        collapsed: false,
                        items: [
                            {text: '课程类别', link: '/undergraduate-study/study-plan/category'},
                            {text: '体育与体测', link: '/undergraduate-study/study-plan/pe'},
                            {text: '第二课堂', link: '/undergraduate-study/study-plan/dekt'}
                        ]
                    },
                    {text: '微辅修', link: '/undergraduate-study/minor'},
                    {text: '选课', link: '/undergraduate-study/select-course'},
                    {text: '考试', link: '/undergraduate-study/exam'},
                    {text: '学积分', link: '/undergraduate-study/score'},
                    {text: '科研', link: '/undergraduate-study/research'},
                    {text: '竞赛', link: '/undergraduate-study/competition'},
                    {text: '保研', link: '/undergraduate-study/postgraduate-recommendation'},
                    {text: '毕业', link: '/undergraduate-study/graduation'}
                ]
            },
            {
                text: '研究生学习',
                collapsed: false,
                items: [
                    {text: '概述', link: '/graduate-study/index'},
                    {text: '招生', link: '/graduate-study/admission'},
                    {text: '培养计划', link: '/graduate-study/study-plan'},
                    {text: '选课', link: '/graduate-study/select-course'},
                    {text: '考试', link: '/graduate-study/exam'},
                    {text: '毕业', link: '/graduate-study/graduation'}
                ]
            },
            {
                text: '校园文化',
                collapsed: false,
                items: [
                    {text: '参观', link: '/campus-culture/visit'},
                    {text: '文体活动', link: '/campus-culture/activity'},
                    {text: '社团', link: '/campus-culture/club'},
                    {text: '学生组织', link: '/campus-culture/organization'},
                    {text: '游戏交流群', link: '/campus-culture/game'}
                ]
            },
            {
                text: '个人成长',
                collapsed: false,
                items: [
                    {text: '入党流程', link: '/growth/party'},
                    {text: '奖助学金', link: '/growth/financial-aid'}
                ]
            },
            {
                text: '贡献指南',
                link: '/contributing'
            },
            {
                text: '结语',
                link: '/epilogue'
            },
            {
                text: '经验分享',
                collapsed: false,
                items: [
                    {text: '概述', link: '/experience/index'},
                    {text: '交大生存手册', link: '/experience/survive'},
                    {text: '奖助学金', link: '/experience/shuiyuan'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/SJTU-Geek/SJTU-Wiki'}
        ],

        // 界面中文翻译

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',

        lastUpdated: {
            text: '最后更新',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'full'
            }
        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        searchBoxPlaceholder: '搜索文档',
                        resetButtonTitle: '清除查询条件',
                        closeButtonAriaLabel: '关闭搜索',
                        noResultsText: '没有找到结果',
                        footer: {
                            selectText: '选择',
                            noResultsText: '未找到结果',
                            statsText: {
                                one: '1个结果',
                                other: '{n}个结果'
                            },
                            closeText: '关闭',
                            navigateText: '导航到结果'
                        }
                    }
                }
            }
        },
        notFound: {
            code: '404',
            title: '页面未找到',
            quote: '您访问的页面不存在',
            linkLabel: '返回首页',
            linkText: '点击这里返回主页'
        }
    }
})
