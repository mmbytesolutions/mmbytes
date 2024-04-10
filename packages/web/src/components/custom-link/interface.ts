import { LinkProps } from '@/src/common-types';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export type CustomLinkProps = Omit<LinkProps, 'label'> &
  PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    /**
     * This controls NextJS prefetch feature. Default `true`
     */
    prefetch?: boolean;
  };
