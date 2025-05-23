export type Project = {
    id: number
    title: string
    image: string
    techs: string[]
    description: string
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Notion Start Form',
      image: '/images/project1.jpg',
      techs: ['CSS', 'JavaScript', 'Node.js', 'Notion API', 'React'],
      description: 'Descrição do Projeto 1.',
    },
    {
      id: 2,
      title: 'Clone Promotions',
      image: '/images/project2.jpg',
      techs: ['JavaScript', 'Node.js', 'React', 'Scss', 'TypeScript', 'Vtex IO'],
      description: 'Descrição do Projeto 2.',
    },
    {
      id: 3,
      title: 'Easy',
      image: '/images/project3.jpg',
      techs: ['GraphQL', 'JavaScript', 'Node.js', 'React', 'Scss', 'Vtex IO'],
      description: 'Descrição do Projeto 3.',
    },
    {
      id: 4,
      title: 'Jumbo',
      image: '/images/project4.jpg',
      techs: ['GraphQL', 'JavaScript', 'Node.js', 'React', 'Scss', 'Vtex IO'],
      description: 'Descrição do Projeto 4.',
    },
    {
      id: 5,
      title: 'Bringeri',
      image: '/images/project5.jpg',
      techs: ['JavaScript', 'Node.js', 'React', 'Scss', 'Vtex IO', 'Vtex Legacy'],
      description: 'Descrição do Projeto 5.',
    },
    {
        id: 6,
        title: 'ZenBox',
        image: '/images/project6.jpg',
        techs: ['JavaScript', 'React', 'Scss'],
        description: 'Descrição do Projeto 6.',
      },
      {
        id: 7,
        title: 'Malwee',
        image: '/images/project8.jpg',
        techs: ['JavaScript', 'Node.js', 'React', 'Scss', 'VTEX IO', 'VTEX Legacy'],
        description: 'Descrição do Projeto 8.',
      },
      {
        id: 8,
        title: 'Carinhoso',
        image: '/images/project8.jpg',
        techs: ['JavaScript', 'Node.js', 'React', 'Scss', 'VTEX IO', 'VTEX Legacy'],
        description: 'Descrição do Projeto 8.',
      },
      {
        id: 9,
        title: 'TIM',
        image: '/images/project9.jpg',
        techs: ['Drupal', 'DX8', 'JavaScript', 'Jquery', 'PHP', 'Scss', 'Stencil.js'],
        description: 'Descrição do Projeto 9.',
      },
  ]
  