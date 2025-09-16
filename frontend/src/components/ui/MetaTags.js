import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from '../../config/siteConfig';

const MetaTags = () => {
  return (
    <Helmet>
      <title>{siteConfig.name} | {siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.siteUrl} />
      <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.title}`} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={siteConfig.ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteConfig.siteUrl} />
      <meta property="twitter:title" content={`${siteConfig.name} | ${siteConfig.title}`} />
      <meta property="twitter:description" content={siteConfig.description} />
      <meta property="twitter:image" content={siteConfig.ogImage} />

      {/* Theme color */}
      <meta name="theme-color" content={siteConfig.theme.primary} />
    </Helmet>
  );
};

export default MetaTags;