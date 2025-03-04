import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
const FeatureList = [
  {
    title: 'Easy to Use',
    Img: '/img/easy-to-use.png', // Update to use an image instead of an SVG
    description: (
      <>
        SiteReports was designed to be easy to use. Get started quickly
        and generate comprehensive site reports in minutes.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Img: '/img/focus.png', // Update to use an image instead of an SVG
    description: (
      <>
        SiteReports lets you focus on your sites, while we handle the reporting.
        Go ahead and analyze what's important to you.
      </>
    ),
  },
  {
    title: 'Powerful Analytics',
    Img: '/img/analytics.png', // Update to use an image instead of an SVG
    description: (
      <>
        Our analytics tools help you understand your site data better.
        Make informed decisions based on accurate reports.
      </>
    ),
  },
];

function Feature({Svg, Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Img ? <img src={Img} className={styles.featureImg} alt={title} /> : <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
