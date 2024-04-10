import { BrandLogo } from '../../brand-logo';
import { cn } from '@/src/utils/shadcn';
import { headerData } from '@/data/layout/header/v1';
import { OffCanvas } from './off-canvas';

export const headerWrapperClasses = cn(
  // Layout
  'fixed left-0 top-0 z-111 w-full',

  // Background
  'bg-white',

  // Shadow
  'shadow-1'
);

export function MobileHeader() {
  const { menuItems } = headerData;

  return (
    <div className="relative block [--mobile-height:64px] lg:hidden">
      {/*
       * The sticky placeholder reserves space for the header to achieve a sticky header effect.
       * Remember that this placeholder approach is not required in all situations.
       */}
      <div className="h-[--mobile-height,64px]"></div>

      <div className={headerWrapperClasses}>
        {/* Menubar  */}
        <div className="flex h-[--mobile-height,64px] items-center justify-between gap-4 border-b border-accent-900 bg-white/90 py-2 backdrop-blur-md dark:border-white dark:bg-accent-900">
          <div className="w-full max-w-full px-4">
            <div className="flex items-center justify-between">
              <div className="max-w-[8.5rem] flex-none">
                <BrandLogo />
              </div>

              <OffCanvas menuItems={menuItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
