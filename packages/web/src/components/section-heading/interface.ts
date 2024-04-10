import { ClassValue } from 'clsx';

type Alignment = 'start' | 'center' | 'end';

export interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: Alignment;
  hasBottomSpacing?: boolean;
  className?: ClassValue;
}

export type SectionHeadingWithoutStylingProps = Omit<
  SectionHeadingProps,
  'alignment' | 'hasBottomSpacing'
>;
