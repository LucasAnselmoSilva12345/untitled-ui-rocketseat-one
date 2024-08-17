import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ElementType } from 'react';

interface INavItem {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: INavItem) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon width={20} height={20} className="text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDownIcon
        width={20}
        height={20}
        className="ml-auto text-zinc-400 group-hover:text-violet-300"
      />
    </a>
  );
}
