export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
//Demo
     {
        path: 'demo',
        data: {
          menu: {
            title: 'Demo',
            icon: 'ion-hammer',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
      }, 
//Kendo UI
     {
        path: 'kendoui',
        data: {
          menu: {
            title: 'Kendo UI',
            icon: 'ion-cube',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
      }, 

      {
   
        data: {
          menu: {
            title: 'Bootstrap 4 UI',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [  
 {
        path: 'bootstrap4',
        data: {
          menu: {
            title: 'UI',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
//UI Bootstrap        
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },      
         {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },     
        ]
      },
//Forms
     {
        path: 'forms',
        data: {
          menu: {
            title: 'Forms',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },







   {
        path: 'editors',
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },




//Tables
            {
        
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },  
  ]
  }, 

    ]
  }
];
