export default () => ({
  duration: 500,
  isCollapsed: false,
  loadedTechnos: false,
  idxCollapsed: null,
  skills: [
    {
      id: 0,
      image: 'skills/number_01',
      illustration: 'illu_frontend',
      title: 'Frontend',
      description:
        'For the frontend, I use modern javascript, Vue & React. For CSS, I use SASS and sometimes libraries like Tailwind or Bootstrap.',
      bordered: true,
      technos: [
        {
          name: 'Vue.js',
          image: 'vuejs',
          description: 'The Progressive JavaScript Framework'
        },
        {
          name: 'Nuxt.js',
          image: 'nuxtjs',
          description: 'The Intuitive Vue Framework'
        },
        {
          name: 'React.js',
          image: 'reactjs',
          description:
            'A JavaScript library for building user interfaces by Facebook'
        },
        {
          name: 'SASS',
          image: 'sass',
          description: 'CSS extension language'
        },
        {
          name: 'Tailwind',
          image: 'tailwind',
          description: 'A utility-first CSS framework'
        }
      ]
    },
    {
      id: 1,
      image: 'skills/number_02',
      illustration: 'illu_backend',
      title: 'Backend',
      description:
        'For the backend, I\'m used to working with Node.js / MongoDB stack. I also worked with SQL database.',
      bordered: true,
      technos: [
        {
          name: 'Node.js',
          image: 'nodejs',
          description: 'Javascript on server side'
        },
        {
          name: 'Express.js',
          image: 'express',
          description:
            'Fast, unopinionated, minimalist web framework for Node.js'
        },
        {
          name: 'MongoDB',
          image: 'mongodb',
          description: 'The database for modern applications'
        },
        {
          name: 'MySQL',
          image: 'mysql',
          description: 'An open-source relational database management system'
        }
      ]
    },
    {
      id: 2,
      image: 'skills/number_03',
      illustration: 'illu_design',
      title: 'Visual Design',
      description:
        'I\'m also interested in web and interface design through tools like figma or the Adobe suite',
      bordered: false,
      technos: [
        {
          name: 'Figma',
          image: 'figma',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Adobe XD',
          image: 'adobexd',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Photoshop',
          image: 'photoshop',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Illustrator',
          image: 'illustrator',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        }
      ]
    }
  ]
})
