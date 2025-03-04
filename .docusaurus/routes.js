import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'df8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '816'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'af8'),
            routes: [
              {
                path: '/docs/features/analytics',
                component: ComponentCreator('/docs/features/analytics', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/assets',
                component: ComponentCreator('/docs/features/assets', 'dc7'),
                exact: true
              },
              {
                path: '/docs/features/dashboard',
                component: ComponentCreator('/docs/features/dashboard', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/folders',
                component: ComponentCreator('/docs/features/folders', 'b7c'),
                exact: true
              },
              {
                path: '/docs/features/reports',
                component: ComponentCreator('/docs/features/reports', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/asset-reporting',
                component: ComponentCreator('/docs/guides/asset-reporting', 'a6f'),
                exact: true
              },
              {
                path: '/docs/guides/asset-workflow',
                component: ComponentCreator('/docs/guides/asset-workflow', 'e30'),
                exact: true
              },
              {
                path: '/docs/guides/create-project',
                component: ComponentCreator('/docs/guides/create-project', 'f75'),
                exact: true
              },
              {
                path: '/docs/guides/create-report',
                component: ComponentCreator('/docs/guides/create-report', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/custom-reports',
                component: ComponentCreator('/docs/guides/custom-reports', 'd13'),
                exact: true
              },
              {
                path: '/docs/guides/custom-templates',
                component: ComponentCreator('/docs/guides/custom-templates', '8fd'),
                exact: true
              },
              {
                path: '/docs/guides/data-visualization',
                component: ComponentCreator('/docs/guides/data-visualization', '2ea'),
                exact: true
              },
              {
                path: '/docs/guides/export-data',
                component: ComponentCreator('/docs/guides/export-data', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/qr-codes',
                component: ComponentCreator('/docs/guides/qr-codes', '0a3'),
                exact: true
              },
              {
                path: '/docs/guides/share-report',
                component: ComponentCreator('/docs/guides/share-report', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/system-integration',
                component: ComponentCreator('/docs/guides/system-integration', '412'),
                exact: true
              },
              {
                path: '/docs/guides/task-management',
                component: ComponentCreator('/docs/guides/task-management', '8d7'),
                exact: true
              },
              {
                path: '/docs/guides/team-access',
                component: ComponentCreator('/docs/guides/team-access', '7db'),
                exact: true
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
