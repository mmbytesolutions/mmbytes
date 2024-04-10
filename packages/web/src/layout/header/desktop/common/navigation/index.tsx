import { cn } from '@/src/utils/shadcn';
import { CustomLink } from '@/src/components/custom-link';
import { HeaderProps } from '../../v1';
import { FaChevronDown } from 'react-icons/fa6';

const menuTriggerClasses = cn([
  // Group hover
  'group-hover/menu-item:text-primary',

  // General
  'text-base leading-[1.3] capitalize py-4 min-h-[3.5rem] font-medium dark:text-white text-accent-900  dark:hover:text-primary hover:text-primary transition-colors duration-200',

  // Layout
  'inline-flex items-center justify-center gap-1.5',

  // Focus
  ' focus:text-primary',

  // For sticky header
  'menu-link',

  // Cursor
  'cursor-pointer',
]);

export function Navigation({ menuItems }: Pick<HeaderProps, 'menuItems'>) {
  return (
    <nav aria-label="primary navigation">
      <ul className="flex items-center gap-x-6">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="group/menu-item relative ">
            {'title' in menuItem ? (
              <>
                {/* Megamenu  */}
                <span className={menuTriggerClasses}>
                  <span>{menuItem.title}</span>
                  <span className="text-[10px]">
                    <FaChevronDown />
                  </span>
                </span>
                {menuItem.subMenuItems && menuItem.subMenuItems.length && (
                  <nav
                    aria-label="sumenu-items"
                    className={cn([
                      // Layout
                      'absolute  left-0 top-full z-40 w-[230px] overflow-hidden bg-accent-700 shadow-lg dark:bg-accent-700',

                      // Submenu normal
                      'origin-[0_0_0] scale-y-0 transition-transform duration-350',

                      // Submenu hover
                      'group-hover/menu-item:scale-y-100',
                    ])}
                  >
                    <ul className="grid divide-y divide-white/5">
                      {menuItem.subMenuItems.map((subMenuItem, index) => (
                        <li key={index} className="leading-none">
                          <CustomLink
                            href={subMenuItem.href}
                            openNewTab={subMenuItem.openNewTab}
                            className="flex min-h-[50px] items-center px-4 py-2 pr-6 text-[15px] font-normal capitalize text-white transition-colors duration-200 hover:bg-primary  dark:text-white"
                          >
                            {subMenuItem.label}
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </>
            ) : (
              <>
                {/* Normal link  */}
                <CustomLink
                  href={menuItem.href}
                  openNewTab={menuItem.openNewTab}
                  className={menuTriggerClasses}
                >
                  {menuItem.label}
                </CustomLink>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
