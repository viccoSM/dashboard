import dbsLogo from '../assets/dbs-logo.png'
import lozengoLogo from '../assets/lozenge-logo.png'
import rmiLogo from '../assets/rmi-logo.png'

export const menu = [
  {
    title: 'NAVIGATION',
    subMenu: [
      {
        title: 'Dasboard',
        icon: '',
        url: '/'
      },
      {
        title: 'Approvals',
        icon: '',
        url: '/approve'
      }
    ]
  },
  {
    title: 'MY ACCOUNT',
    subMenu: [
      {
        title: 'My clients',
        icon: '',
        url: '/clients'
      },
      {
        title: 'Edit profiles',
        icon: '',
        url: '/edit'
      }
    ]
  }
]

export const clients = [
  {
    name: 'DBS Bank',
    desc: 'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.',
    logo: dbsLogo
  },
  {
    name: 'Proudfoot',
    desc: 'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.',
    logo: lozengoLogo
  },
  {
    name: 'RMI',
    desc: 'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.',
    logo: rmiLogo
  }
]