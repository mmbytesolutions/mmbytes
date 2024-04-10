import { ProjectSectionProps } from '@/src/sections/project/v2';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Our Projects',
    title: 'Empowering Your Digital Tomorrow',
  },
  link: {
    label: 'more projects',
    href: '/projects',
    openNewTab: false,
  },
  projectCategories: [
    {
      label: 'ALL PROJECTS',
      value: '*',
    },
    {
      label: 'AI Insights Pro',
      value: '.AIInsightsPro',
    },
    {
      label: 'Tech Armor Security',
      value: '.TechArmorSecurity',
    },
    {
      label: 'Blockchain Forge',
      value: '.BlockchainForge',
    },
    {
      label: 'DigitalIQ Consulting',
      value: '.DigitalIQConsulting',
    },
    {
      label: 'RapidApp Innovate',
      value: '.RapidAppInnovate',
    },
  ],
  projects: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/11.png',
        alt: 'Project Quantum Leap',
      },
      title: 'Project Quantum Leap',
      description: 'InfinitiTech',
      tags: ['AIInsightsPro', 'BlockchainForge'],
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/12.png',
        alt: 'Project Cyber Fusion',
      },
      title: 'Project Cyber Fusion',
      description: 'ByteCrafters',
      tags: ['DigitalIQConsulting'],
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/13.png',
        alt: 'Project Cloud Horizon',
      },
      title: 'Project Cloud Horizon',
      description: 'DataWave Tech',
      tags: ['AIInsightsPro', 'BlockchainForge'],
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/13.png',
        alt: 'Project Data Harbor',
      },
      title: 'Project Data Harbor',
      description: 'QuantumSolve',
      tags: ['RapidAppInnovate', 'TechArmorSecurity'],
    },
  ],
};
