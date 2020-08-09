export default () => ({
  currentIndex: 0,
  duration: 500,
  pages: [
    {
      id: 1,
      active: true,
      name: 'MySelf',
      component: 'Home',
      title: 'Developer',
      subtitle: 'based in Paris',
      description:
        'My name is Clement. I\'m a Frontend Developer and I like to create modern web applications (SPA). I\'m passionate about the javascript ecosystem and particulary Vue.js framework. Feel free to get in touch if you are interested !'
    },
    {
      id: 2,
      active: false,
      name: 'Skills',
      component: 'Skills'
    },
    {
      id: 3,
      active: false,
      name: 'Projects',
      component: 'Projects',
      title: 'Projects'
    },
    {
      id: 4,
      active: false,
      name: 'Contact',
      component: 'Contact',
      title: 'Contact',
      cards: [
        {
          title: 'Location',
          icon: 'Location',
          description: 'Paris, France'
        },
        {
          title: 'Linkedin',
          icon: 'Linkedin',
          description: 'https://linkedin.com/in/clem-cornet/'
        },
        {
          title: 'Github',
          icon: 'Github',
          description: 'https://github.com/clemcornet/'
        },
        {
          title: 'Twitter',
          icon: 'Twitter',
          description: 'https://twitter.com/ClemCornet/'
        }
      ]
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
      id: 3,
      name: 'Twitter',
      icon: 'assets/twitter',
      link: 'http://twitter.com'
    }
  ]
})
