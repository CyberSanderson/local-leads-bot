// FILE: app/sitemap.ts

import { MetadataRoute } from 'next';
import { posts } from './data/posts';
import { caseStudies } from './data/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.localleadbot.com';

  // Get all post URLs
  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  // Get all case study URLs
  const caseStudyUrls = caseStudies.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(), // Use a recent date as we don't have one in the data
  }));

  // Define all static page URLs
  const staticUrls = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/how-it-works`, lastModified: new Date() },
    { url: `${siteUrl}/features`, lastModified: new Date() },
    { url: `${siteUrl}/pricing`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
    { url: `${siteUrl}/case-studies`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
  ];

  return [...staticUrls, ...postUrls, ...caseStudyUrls];
}