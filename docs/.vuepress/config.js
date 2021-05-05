module.exports = {
  title: 'CVueJs',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    sidebar: {
      '/guide/': [''],
      '/component/': [''],
      '/cli/': [''],
      '/http/': [''],
    },
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '教程',
        link: '/guide/',
      },
      {
        text: '组件',
        items: [
          {
            text: '复合组件',
            link: '/component/combine',
          },
          {
            text: '表单组件',
            link: '/component/form',
          },
          {
            text: '基础组件',
            link: '/component/base',
          },
        ],
      },
      {
        text: '其它工具',
        items: [
          {
            text: 'CLI',
            link: '/cli/',
          },
          {
            text: 'Http',
            link: '/http/',
          },
        ],
      },
    ],
  },
}
