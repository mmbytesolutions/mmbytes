import { IContainer } from './interface';
import Styles from './container.module.css';
import { cn } from '@/src/utils/shadcn';

/** Container provide content containment, padding, and alignment within specific devices or viewports. */
export function Container({
  children,
  isFluid = false,
  isNoPadding = false,
}: IContainer) {
  const containerClasses = cn(
    [Styles['container']],
    { [Styles['full-width']]: isFluid },
    { [Styles['no-padding']]: isNoPadding }
  );
  return <div className={containerClasses}>{children}</div>;
}
