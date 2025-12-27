// src/config/site.ts
export const siteConfig = {
  name: 'NexoAI',
  description: 'Gestión empresarial inteligente con IA',
  url: 'https://nexoai.com',
  ogImage: 'https://nexoai.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/nexoai',
    github: 'https://github.com/kuhaku2031',
  },
  creator: {
    name: 'Juan Manuel Contreras',
    twitter: '@nexoai',
  },
} as const;

export type SiteConfig = typeof siteConfig;