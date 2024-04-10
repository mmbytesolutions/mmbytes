import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

export interface CtaSectionProps {
  title: string;
  description: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Leave the handy work to us',
  description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
};

const inputCommonClasses = cn(
  'border-white  text-white placeholder:text-white focus:border-white dark:border-white dark:border-opacity-100 dark:text-white dark:placeholder:text-white'
);

export function CtaSection() {
  const { title, description } = ctaSectionData;
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <Container>
        <div className="relative z-10 grid items-center gap-30px xl:grid-cols-12">
          <div className="text-white xl:col-span-5">
            <h2 className="h2 max-w-[410px] font-secondary capitalize leading-[1.25] ">
              {title}
            </h2>
            <p className="mt-5 text-base leading-[1.875]">{description}</p>
          </div>
          <div className="xl:col-span-7">
            <form className="grid grid-cols-1 gap-30px md:grid-cols-2 xl:max-w-[630px]">
              <TextInput
                placeholder="Your Name"
                type="text"
                className={inputCommonClasses}
              />
              <TextInput
                placeholder="Your Email"
                type="email"
                className={inputCommonClasses}
              />
              <div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center">
                <div className="w-full flex-1">
                  <TextInput
                    placeholder="Subject"
                    type="text"
                    className={inputCommonClasses}
                  />
                </div>
                <Button
                  type="submit"
                  className={cn(
                    'min-w-[190px]  flex-none bg-primary-light after:bg-white hover:text-accent-700 dark:hover:text-accent-700'
                  )}
                >
                  <span>SUSCRIBE</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Image
        src="/assets/images/cta/pattern-2.png"
        alt="cta section bg pattern"
        width={429}
        height={359}
        className="pointer-events-none absolute bottom-0 right-0 z-1 animate-float-bob-x object-cover max-[1650px]:hidden"
        sizes="100vw"
      />
    </section>
  );
}
