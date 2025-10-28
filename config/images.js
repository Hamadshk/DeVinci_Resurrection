// Professional Unsplash Images Configuration
// These images are optimized for professional business websites

export const UNSPLASH_IMAGES = {
  // Hero Section - Technology & AI
  hero: {
    main: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    alt: 'AI Technology and Digital Innovation',
    fallback: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Tech background
  },

  // About Section
  about: {
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    alt: 'Professional Business Team Collaboration',
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    officeAlt: 'Modern Professional Office',
  },

  // Services
  services: {
    aiVoice: {
      url: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&q=80',
      alt: 'AI Voice Assistant and Customer Service',
    },
    automation: {
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
      alt: 'Business Automation and Technology',
    },
    aiSolutions: {
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      alt: 'AI Solutions and Machine Learning',
    },
    consulting: {
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      alt: 'Business Consulting and Strategy',
    },
  },

  // Technology & Analytics
  technology: {
    analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    analyticsAlt: 'Data Analytics Dashboard',
    coding: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    codingAlt: 'Software Development',
    dataScience: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    dataScienceAlt: 'Data Science and Visualization',
  },

  // Business & Success
  business: {
    growth: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    growthAlt: 'Business Growth and Success',
    meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    meetingAlt: 'Professional Business Meeting',
    success: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    successAlt: 'Business Success and Achievement',
  },

  // Backgrounds
  backgrounds: {
    gradient1: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80',
    gradient1Alt: 'Abstract Gradient Background',
    gradient2: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80',
    gradient2Alt: 'Modern Abstract Background',
    tech: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    techAlt: 'Technology Pattern Background',
  },

  // Team & People
  people: {
    professional1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    professional2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    professional3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    professional4: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    alt: 'Professional Team Member',
  },

  // Icons & Illustrations
  icons: {
    ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80',
    aiAlt: 'Artificial Intelligence Icon',
    robot: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80',
    robotAlt: 'AI Robot Technology',
    network: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
    networkAlt: 'Network and Connectivity',
  },

  // Case Studies / Portfolio
  portfolio: {
    project1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    project2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    project3: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    project4: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&q=80',
    alt: 'Professional Project Showcase',
  },

  // Call to Action
  cta: {
    consultation: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    consultationAlt: 'Professional Consultation',
    contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80',
    contactAlt: 'Contact and Communication',
  },
};

// Helper function to get optimized image URL
export const getOptimizedImage = (url, width = 800, quality = 80) => {
  if (!url) return '';
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}w=${width}&q=${quality}&auto=format&fit=crop`;
};

// Helper function to get responsive image srcSet
export const getResponsiveSrcSet = (url) => {
  if (!url) return '';
  return `
    ${getOptimizedImage(url, 400, 80)} 400w,
    ${getOptimizedImage(url, 800, 80)} 800w,
    ${getOptimizedImage(url, 1200, 80)} 1200w,
    ${getOptimizedImage(url, 1920, 80)} 1920w
  `.trim();
};

// Example usage:
/*
import Image from 'next/image';
import { UNSPLASH_IMAGES, getOptimizedImage } from '../config/images';

<Image
  src={UNSPLASH_IMAGES.hero.main}
  alt={UNSPLASH_IMAGES.hero.alt}
  width={1920}
  height={1080}
  priority
/>

// Or with regular img tag
<img
  src={getOptimizedImage(UNSPLASH_IMAGES.services.aiVoice.url, 600)}
  alt={UNSPLASH_IMAGES.services.aiVoice.alt}
  loading="lazy"
/>
*/

export default UNSPLASH_IMAGES;
