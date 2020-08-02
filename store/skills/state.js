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
        'Pour le CSS, j\'utilise principalement l\'outil SASS et des frameworks tels que Bootstrap et TailwindCSS.',
      bordered: true,
      technos: [
        {
          name: 'Nuxt.js',
          image: 'nuxtjs',
          degrees: 0
        },
        {
          name: 'React.js',
          image: 'reactjs',
          degrees: 72
        },
        {
          name: 'SASS',
          image: 'sass',
          degrees: 144
        },
        {
          name: 'Tailwind',
          image: 'tailwind',
          degrees: 216
        },
        {
          name: 'Vue.js',
          image: 'vuejs',
          degrees: 288
        }
      ]
    },
    {
      id: 1,
      image: 'skills/number_02',
      illustration: 'illu_backend',
      title: 'Backend',
      description:
        'En parrallèle de mon cursus orienté front, j\'ai pu me former et travailler sur des technologies backend.',
      bordered: true,
      technos: [
        {
          name: 'MySQL',
          image: 'mysql',
          degrees: 90
        },
        {
          name: 'Express.js',
          image: 'express',
          degrees: 180
        },
        {
          name: 'Node.js',
          image: 'nodejs',
          degrees: 270
        },
        {
          name: 'MongoDB',
          image: 'mongodb',
          degrees: 360
        }
      ]
    },
    {
      id: 2,
      image: 'skills/number_03',
      illustration: 'illu_design',
      title: 'Visual Design',
      description:
        'En parrallèle de mon cursus orienté front, j\'ai pu me former et travailler sur des technologies backend.',
      bordered: false,
      technos: [
        {
          name: 'Illustrator',
          image: 'illustrator',
          degrees: 90
        },
        {
          name: 'Adobe XD',
          image: 'adobexd',
          degrees: 180
        },
        {
          name: 'Figma',
          image: 'figma',
          degrees: 270
        },
        {
          name: 'Photoshop',
          image: 'photoshop',
          degrees: 360
        }
      ]
    }
  ]
})
