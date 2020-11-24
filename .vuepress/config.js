const moment = require('moment');

module.exports = {
  title: 'milight-smart-light for ioBroker',
  description: 'Dokumentation für den milight-smart-light Adapter',
  dest: 'docs',
  base: '/milight-smart-light-doku/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    logo: '/images/ioBroker.svg',
    lastUpdated: 'Letzte Aktualisierung',
    sidebar: [
      ['/versionen/','Versionshinweise'],
      ['/admin/','Admin'],
      ['/app/','App'],
      ['/iot/','IoT - Alexa']
    ],
    sidebarDepth: 2,
    nav: [
      { text: 'Versionshinweise', link: '/versionen/' },
      { text: 'Admin', link: '/admin/' },
      { text: 'App', link: '/app/' },
      { text: 'IoT - Alexa', link: '/iot/' }
    ]
  },
  plugins: [
    [ '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale('de')
          return moment(timestamp).fromNow()
        }
      }],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#164476',
          scrollOffset: 0,
        },
      },
    ]
  ]
}
