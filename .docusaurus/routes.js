import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '02e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '859'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e9c'),
            routes: [
              {
                path: '/docs/features/analytics',
                component: ComponentCreator('/docs/features/analytics', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/dashboard',
                component: ComponentCreator('/docs/features/dashboard', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/reports',
                component: ComponentCreator('/docs/features/reports', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/create-report',
                component: ComponentCreator('/docs/guides/create-report', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/export-data',
                component: ComponentCreator('/docs/guides/export-data', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/share-report',
                component: ComponentCreator('/docs/guides/share-report', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/api',
                component: ComponentCreator('/docs/reference/api', '64a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/faq',
                component: ComponentCreator('/docs/reference/faq', 'c4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
