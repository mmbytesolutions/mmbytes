import { faqSectionData } from '@/data/faq-section/v1';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingProps } from '@/src/components/section-heading/interface';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { cn } from '@/src/utils/shadcn';

const iconClasses = cn(
  'text-xl/[1] text-accent-5 flex-none self-baseline relative max-md:top-[2px] text-primary'
);

interface FaqItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  sectionHeading: SectionHeadingProps;
  faqItems: FaqItem[];
}

export default function FAQSection() {
  const { sectionHeading, faqItems } = faqSectionData;
  return (
    <section className="section-padding-primary overflow-hidden ">
      <Container>
        <div className="max-w-[630px]">
          <SectionHeading {...sectionHeading} hasBottomSpacing />
        </div>
        {faqItems && faqItems.length > 0 && (
          <Accordion
            type="single"
            collapsible
            className="grid w-full gap-3 lg:gap-5"
          >
            {faqItems.map((faqItem, index) => (
              <AccordionItem
                key={index}
                value={`${faqItem.question}-${index}`}
                className="border-none"
              >
                <AccordionTrigger
                  className={cn(
                    // Common
                    `h3 min-h-[70px] justify-start gap-3 rounded-5 bg-accent-100  px-6  py-3 text-left text-accent-900 no-underline hover:no-underline dark:bg-accent-700 dark:text-white md:gap-5 lg:px-30px lg:py-4`,

                    // Styled based on `open-close` state
                    // open
                    `[&[data-state='open']&_.icon-plus]:hidden`,

                    // close
                    `[&[data-state='closed']&_.icon-minus]:hidden`
                  )}
                >
                  <span className="flex-1">
                    {`${index + 1}. `}
                    {faqItem.question}
                  </span>
                  <span className={cn(iconClasses, 'icon icon-plus')}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M8 14H20"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 8L14 20"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <circle cx={14} cy={14} r="13.5" stroke="currentColor" />
                    </svg>
                  </span>
                  <span className={cn(iconClasses, 'icon icon-minus')}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14H20"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <circle cx={14} cy={14} r="13.5" stroke="currentColor" />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-2 pt-4 lg:pb-3 lg:pt-6">{faqItem.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Container>
    </section>
  );
}
