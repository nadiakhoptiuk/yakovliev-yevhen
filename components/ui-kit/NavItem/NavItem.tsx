'use client';

import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import cn from 'classnames';

import { DataLinkType } from './types';

type NavItemProps = {
  dataLink: DataLinkType;
  // handleClick: () => void;
  withLines: boolean;
  textAlignCenter: boolean;
  className?: string;
};

export const NavItem: React.FC<NavItemProps> = ({
  dataLink: { href, title },
  withLines,
  textAlignCenter,
  className = '',
  // handleClick,
}) => {
  return (
    <li
      className={cn(
        {
          "md:after:content-[''] md:after:absolute md:relative md:after:bg-ui_accent md:after:w-[1px] md:after:h-full md:after:right-[-40px] md:after:last:hidden":
            withLines === true,
        },
        { 'text-center': textAlignCenter },
        className,
      )}
    >
      <LinkScroll
        // onClick={() => handleClick && handleClick()}
        smooth={true}
        offset={0}
        duration={500}
        to={href}
        href={`#${href}`}
        className="text-ui_light text-ui_light_16 md:text-ui_light_20 whitespace-nowrap text"
      >
        {title}
      </LinkScroll>
    </li>
  );
};
