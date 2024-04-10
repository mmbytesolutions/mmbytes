import { Container } from '@/src/components/container';
import {
  TestimonialCard,
  TestimonialCardProps,
} from 'src/components/cards/testimonial/v1';
import { testimonialSectionData } from '@/data/testimonial-section/grid';

export interface TestimonialSectionProps {
  cards: TestimonialCardProps[];
}

export function TestimonialSection() {
  const { cards } = testimonialSectionData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 gap-30px xl:grid-cols-2">
            {cards.map((card, index) => (
              <TestimonialCard {...card} key={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
