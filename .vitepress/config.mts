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
                { text: '难度星级判定标准', link: '/academic/difficulty' },
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
      title: 'LiuMing Docs',
      description: 'LiuMing Documentation',
      themeConfig: {
        logo: '/liuming.png',
        nav: [
          { text: 'Back to LiuMing', link: 'https://liuming.franj2.top/' },
          { text: 'Back to LiuMing Forum', link: 'https://liumingbbs.franj2.top/' },
          { text: 'FranJ2', link: 'https://franj2.top/' },
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
              text: 'Getting Started',
              link: '/en/',
            },
            {
              text: 'Community Rules',
              collapsed: false,
              items: [
                { text: 'Discussion Guide', link: '/en/policies/discussion' },
                { text: 'Community Rules & Penalties', link: '/en/policies/rule' },
                { text: 'Terms of Service', link: '/en/policies/tos' },
              ]
            },
            {
              text: 'Operation Guide',
              collapsed: false,
              items: [
                { text: 'Registration & Login', link: '/en/basic/account' },
                { text: 'Feature Overview', link: '/en/basic/features' },
                { text: 'Question Bank', link: '/en/basic/bank' },
                { text: 'Input & Editor', link: '/en/basic/editor' },
                { text: 'Practice & Grading', link: '/en/basic/judge' },
                { text: 'Learning Data & Wrong-answer Book', link: '/en/basic/practice-stats' },
                { text: 'Calculation Zone', link: '/en/basic/calc' },
                { text: 'Paper Generation', link: '/en/basic/paper' },
                { text: 'Paper Library', link: '/en/basic/paper-uploads' },
                { text: 'Competitions', link: '/en/basic/competition' },
                { text: 'Teams', link: '/en/basic/team' },
                { text: 'Problem Lists', link: '/en/basic/problem-list' },
                { text: 'Grading Center', link: '/en/basic/grading' },
                { text: 'Parental Guardian', link: '/en/basic/guardian' },
                { text: 'Points & Benefits', link: '/en/basic/rewards' },
                { text: 'Account & Security', link: '/en/basic/account-safety' },
              ]
            },
            {
              text: 'Academic Standards',
              collapsed: false,
              items: [
                { text: 'Academic Standards Overview', link: '/en/academic/' },
                { text: 'Problem & Problem List Standards', link: '/en/academic/problem' },
                { text: 'Difficulty Star Rating Standards', link: '/en/academic/difficulty' },
                { text: 'Solution & Article Standards', link: '/en/academic/article' },
                { text: 'AI Usage Policy', link: '/en/academic/ai' },
                { text: 'Competition Standards', link: '/en/academic/competition' },
              ]
            },
          ]
        },
        footer: {
          copyright: 'Copyright © 2023-present LiuMing',
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/RankFrank4010/Liuming_Manual' },
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
