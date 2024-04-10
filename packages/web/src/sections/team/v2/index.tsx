import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { TeamCard, TeamCardProps } from 'src/components/cards/team/v2';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { teamSectionData } from '@/data/team-section/v2';

export interface TeamSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  description: string;
  cards: TeamCardProps[];
}

export function TeamSection() {
  const { sectionHeading, cards, description } = teamSectionData;
  return (
    <section className="section-padding-primary !pb-0">
      <Container>
        <div className="mb-10 flex flex-col flex-wrap justify-between gap-5 max-md:text-center md:mb-[3.75rem] xl:flex-row xl:items-end">
          <div className="xl:max-w-[460px]">
            <SectionHeading
              {...sectionHeading}
              className="max-md:text-center"
            />
          </div>
          <p className="xl:max-w-[635px]">{description}</p>
        </div>

        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 gap-0 max-lg:gap-x-30px md:grid-cols-2 lg:grid-cols-1">
            {cards.map((card, index) => (
              <TeamCard {...card} key={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
