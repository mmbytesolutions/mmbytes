import Link from 'next/link';
import { LinkProps } from '@/src/common-types';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export type CustomLinkProps = Omit<LinkProps, 'label'> &
  PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Custom Link component which use nextjs `Link` component.
 *
 * **Note**:
 * We often need to wrap elements with a link. This is why we have decided
 * to use `children` instead of `label` with this component.
 */
export function CustomLink({
  children,
  href,
  openNewTab,
  ...props
}: CustomLinkProps) {
  return (
    <Link href={href} target={openNewTab ? '_blank' : '_self'} {...props}>
      {children}
    </Link>
  );
}
