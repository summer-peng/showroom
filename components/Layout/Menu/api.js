export const menuService = () => {
  return new Promise((resolve) => {
    resolve([
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'List & Form',
        link: '/users/user-query',
        children: [
          {
            name: 'Create',
            link: '/users/user-edit/',
          },
          {
            name: 'Edit',
            link: '/users/user-edit/[uid]',
          },
        ],
      },
      {
        name: 'Autocomplete',
        link: '/autocomplete',
      },
      {
        name: 'Resume Mgmt',
        link: '/resume-mgmt/resume-query',
        children: [
          {
            name: 'Create',
            link: '/resume-mgmt/resume-edit',
          },
          {
            name: 'Edit',
            link: '/resume-mgmt/resume-edit/[resumeId]',
          },
        ],
      },
      {
        name: 'About me',
        link: '/about-me',
      },
    ])
  })
}

const api = {
  menuService,
}

export default api
