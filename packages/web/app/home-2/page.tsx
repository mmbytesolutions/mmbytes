import { serviceSectionData } from '@/data/service-section/v2/home-page-2';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v2';
import { BlogSection } from '@/src/sections/blog/v2';
import { CtaSection } from '@/src/sections/cta/v2';
import { HeroSection } from '@/src/sections/hero/v2';
import { ProjectSection } from '@/src/sections/project/v2';
import { projectSectionData } from '@/data/project-section/v2/home-page';
import { PricingSection } from '@/src/sections/pricing/version-2';
import { ServiceSection } from '@/src/sections/service/v2';
import { StatisticsSection } from '@/src/sections/statistics/v2';
import { TeamSection } from '@/src/sections/team/v2';
import { TestimonialSection } from '@/src/sections/testimonial/v2';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Home verion two',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection />
      <ServiceSection className="!pt-0" {...serviceSectionData} />
      <CtaSection />
      <PricingSection />
      <AboutSection />
      <WorkprocessSection />
      <ProjectSection {...projectSectionData} />
      <TeamSection />
      <TestimonialSection />
      <StatisticsSection />
      <BlogSection />
      <Footer className="dark:bg-accent-900" footerTopClassName="!pt-0" />
    </>
  );
}
