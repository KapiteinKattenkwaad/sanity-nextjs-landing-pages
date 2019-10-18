export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da9fa88538521b04224c1e6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-am4r22h6',
                  apiId: '90a1c798-df1d-418f-a06c-0da9622d7e5f'
                },
                {
                  buildHookId: '5da9fa895a2e425ac9307cba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ptuvhju9',
                  apiId: '39d23544-8f4a-480e-868a-dc15ff4f4157'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KapiteinKattenkwaad/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ptuvhju9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
