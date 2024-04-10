import React from 'react';
import { CustomLink } from '@/src/components/custom-link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { cn } from '@/src/utils/shadcn';

import { FiChevronDown } from 'react-icons/fi';
import { HeaderProps } from '../../desktop/v1';

const menuItemClasses = cn(
  'min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0  px-5 text-left font-primary text-base  text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary'
);

export function Navigation({ menuItems }: Pick<HeaderProps, 'menuItems'>) {
  return (
    <Accordion type="single" collapsible className="grid w-full">
      {menuItems.map((menuItem, index) => (
        <React.Fragment key={index}>
          {'title' in menuItem ? (
            <>
              {/* Megamenu  */}
              <AccordionItem
                value={`${menuItem.title}-${index}`}
                className="border-none"
              >
                <AccordionTrigger
                  className={cn(
                    menuItemClasses,
                    "[&[data-state='open']&_.accordion-icon]:-rotate-180 [&[data-state='open']]:bg-accent-100 [&[data-state='open']]:text-primary"
                  )}
                >
                  {menuItem.title}
                  <span className="accordion-icon flex-none text-[1.25rem] transition-transform duration-400">
                    <FiChevronDown />
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {menuItem.subMenuItems && menuItem.subMenuItems.length && (
                    <nav aria-label="megamenu-items">
                      <ul className="grid">
                        {menuItem.subMenuItems.map((subMenuItem, index) => (
                          <li key={index}>
                            <CustomLink
                              href={subMenuItem.href}
                              openNewTab={subMenuItem.openNewTab}
                              className={cn(menuItemClasses, 'px-10')}
                            >
                              {subMenuItem.label}
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </AccordionContent>
              </AccordionItem>
            </>
          ) : (
            <>
              {/* Normal Link  */}
              <CustomLink
                href={menuItem.href}
                openNewTab={menuItem.openNewTab}
                className={menuItemClasses}
              >
                {menuItem.label}
              </CustomLink>
            </>
          )}
        </React.Fragment>
      ))}
    </Accordion>
  );
}
