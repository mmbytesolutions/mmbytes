import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { PricingCard, PricingCardProps } from 'src/components/cards/pricing/v1';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { pricingSectionData } from '@/data/pricing-section/version-1';

export interface PricingSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  cards: PricingCardProps[];
}

export function PricingSection() {
  const { sectionHeading, cards } = pricingSectionData;

  return (
    <section className="section-padding-primary !pt-0">
      <Container>
        <div
          className="mx-auto max-w-[630px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SectionHeading
            {...sectionHeading}
            alignment="center"
            hasBottomSpacing
          />
        </div>
        {cards && cards.length > 0 && (
          <div className="grid gap-30px">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
              >
                <PricingCard {...card} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
