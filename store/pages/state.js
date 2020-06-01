export default () => ({
  currentIndex: 0,
  isPageChanging: false,
  duration: 500,
  pages: [
    {
      id: 1,
      name: 'MySelf',
      component: 'Home',
      isActive: true
    },
    {
      id: 2,
      name: 'Skills',
      component: 'Skills',
      isActive: false
    },
    {
      id: 3,
      name: 'Projects',
      component: 'Projects',
      isActive: false
    },
    {
      id: 4,
      name: 'Contact',
      component: 'Contact',
      isActive: false
    }
  ],
  social: [
    {
      id: 1,
      name: 'Linkedin',
      icon: 'assets/linkedin',
      link: 'http://linkedin.com'
    },
    {
      id: 2,
      name: 'Github',
      icon: 'assets/github',
      link: 'http://github.com'
    },
    {
      id: 2,
      name: 'Twitter',
      icon: 'assets/twitter',
      link: 'http://twitter.com'
    }
  ]
})
