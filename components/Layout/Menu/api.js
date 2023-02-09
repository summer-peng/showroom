export const menuService = () => {
  return new Promise((resolve) => {
    resolve([
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'List & Form',
        link: '/users/userQuery',
      },
      {
        name: 'Autocomplete',
        link: '/autocomplete',
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