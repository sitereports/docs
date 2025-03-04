/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'quickstart'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['features/dashboard', 'features/reports', 'features/analytics'],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      items: ['guides/create-report', 'guides/share-report', 'guides/export-data'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/api', 'reference/faq'],
    },
  ],
};

export default sidebars;