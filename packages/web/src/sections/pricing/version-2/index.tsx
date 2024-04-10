import { PricingCard, PricingCardProps } from 'src/components/cards/pricing/v2';
import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { pricingSectionData } from '@/data/pricing-section/version-2';
import { SectionProps } from '@/src/common-types';
import { cn } from '@/src/utils/shadcn';

export interface PricingSectionProps {
  cards: PricingCardProps[];
}

export function PricingSection({ className }: SectionProps) {
  const { cards } = pricingSectionData;

  return (
    <section className={cn('section-padding-primary !pb-0', className)}>
      <Container>
        {cards && cards.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
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
