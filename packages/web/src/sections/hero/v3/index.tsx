import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import React from 'react';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

interface BreadcrumbItem {
  href?: string;
  label: string;
}

export interface HeroSectionProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function HeroSection({ title, breadcrumbItems }: HeroSectionProps) {
  return (
    <section className="section-padding-primary relative flex min-h-[450px] items-center">
      {/* Background image  */}
      <Image
        priority
        src={bannerImage.src}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} banner 3`}
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      {/* Overlay  */}
      <span className="absolute inset-0 bg-gradient-1 from-white/0 to-white dark:from-accent-900/0 dark:to-accent-900"></span>

      <Container>
        <div className="relative z-[4] flex flex-wrap items-center justify-between gap-x-20 gap-y-8 text-accent-900 dark:text-white lg:pt-[137px]">
          <h1 className="font-secondary text-xl font-bold lg:w-1/2">{title}</h1>
          {breadcrumbItems && breadcrumbItems.length > 0 && (
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          )}
        </div>
      </Container>
    </section>
  );
}

const breadcrumbItemClasses = cn('h3 font-secondary');

function Breadcrumb({
  breadcrumbItems,
}: Pick<HeroSectionProps, 'breadcrumbItems'>) {
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="inline-flex items-center gap-5">
          {breadcrumbItems.map((menuItem, index) => (
            <React.Fragment key={index}>
              {menuItem.href ? (
                <li className={breadcrumbItemClasses}>
                  <CustomLink
                    href={menuItem.href}
                    className="transition-colors hover:text-primary"
                  >
                    {menuItem.label}
                  </CustomLink>
                  <span className="ml-5">/</span>
                </li>
              ) : (
                <li className={breadcrumbItemClasses} aria-current="page">
                  {menuItem.label}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
  return <></>;
}
