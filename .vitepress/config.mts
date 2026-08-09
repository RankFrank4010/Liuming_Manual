import { defineConfig } from 'vitepress';

let GTAG_ID = 'G-TBCY5W7YVR';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '流明文档',
  description: '流明文档',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/liuming.png' }],
    ['script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}` }
    ],
    ['script', {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GTAG_ID}');`
    ]
  ],

  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.liuming.franj2.top'
  },

  appearance: true,

  markdown: {
    theme: { light: 'catppuccin-latte', dark: 'one-dark-pro' },
    image: { lazyLoading: true },
  },

  cleanUrls: true,

  rewrites: {
    'basic/basic.md': 'index.md',
  },

  themeConfig: {
    // local 搜索需要在顶层声明,放在 locales.*.themeConfig 内部不会生成索引
    // 仍会按 locale 自动拆分索引
    search: {
      provider: 'local',
    },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        logo: '/liuming.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '返回 流明', link: 'https://liuming.franj2.top/' },
          { text: '返回 流明讨论区', link: 'https://liumingbbs.franj2.top/' },
          { text: 'FranJ2', link: 'https://franj2.top/' },
        ],

        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '目录',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        externalLinkIcon: true,
        lastUpdated: {
          text: '上次更新于'
        },
        outline: {
          'label': '在此页面上'
        },
        editLink: {
          pattern: 'https://github.com/RankFrank4010/Liuming_Manual',
          text: '帮助我们完善这个页面'
        },

        sidebar: {
          '/': [
            {
              text: '用户必读',
              link: '/',
            },
            {
              text: '社区规则',
              collapsed: false,
              items: [
                // { text: '用户服务条款', link: '/policies/tos' },
                { text: '讨论区指南', link: '/policies/discussion' },
                { text: '社区规则及处罚', link: '/policies/rule' },
              ]
            },
            {
              text: '操作指南',
              collapsed: false,
              items: [
                { text: '注册与登录', link: '/basic/account' },
                { text: '功能介绍', link: '/basic/features' },
                { text: '题库', link: '/basic/bank' },
                { text: '输入与编辑器', link: '/basic/editor' },
                { text: '练习与判题', link: '/basic/judge' },
                { text: '学习数据与错题本', link: '/basic/practice-stats' },
                { text: '计算专区', link: '/basic/calc' },
                { text: '组卷', link: '/basic/paper' },
                { text: '整卷库', link: '/basic/paper-uploads' },
                { text: '比赛', link: '/basic/competition' },
                { text: '团队', link: '/basic/team' },
                { text: '题单', link: '/basic/problem-list' },
                { text: '批改中心', link: '/basic/grading' },
                { text: '家长监护', link: '/basic/guardian' },
                { text: '积分与权益', link: '/basic/rewards' },
                { text: '账户与安全', link: '/basic/account-safety' },
              ]
            },
            {
              text: '学术规范',
              collapsed: false,
              items: [
                { text: '学术规范总览', link: '/academic/' },
                { text: '题目与题单规范', link: '/academic/problem' },
                { text: '题解与文章规范', link: '/academic/article' },
                { text: 'AI 使用规范', link: '/academic/ai' },
                { text: '比赛规范', link: '/academic/competition' },
              ]
            },
          ]
        },
        footer: {
          copyright: 'Copyright © 2023-present 流明',
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/RankFrank4010/Liuming_Manual' },
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        logo: '/liuming.png',
        nav: [
          { text: 'Back to FranJ2', link: 'https://franj2.com/' },
          { text: 'test', link: 'https://bot-manual.commspt.franj2.com/' },
          { text: 'test', link: 'https://afdian.com/a/tnqzh123' }
        ],

        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        langMenuLabel: 'Languages',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        externalLinkIcon: true,
        lastUpdated: {
          text: 'Last updated'
        },
        outline: {
          'label': 'On this page'
        },
        editLink: {
          pattern: 'https://github.com/RankFrank4010/Liuming_Manual',
          text: 'Help us improve this page'
        },

        sidebar: {
          '/en/': [
            {
              text: 'LiuMing Docs',
              link: '/en/',
            },
            {
              text: 'Community Rules',
              collapsed: false,
              items: [
                { text: 'Terms of Service', link: '/en/policies/tos' },
                { text: 'Privacy Policy', link: '/en/policies/privacy' },
              ]
            },
            {
              text: 'Operation Guide',
              collapsed: false,
              items: []
            },
            {
              text: 'Academic Standards',
              collapsed: false,
              items: []
            },
          ]
        },
        footer: {
          copyright: 'Copyright © 2023-present FranJ2 | 京ICP备12345678号 | 京公网安备11010802012345号',
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/LittleSkinChina/manual-ng' },
        ],
      }
    }
  },

  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
});
