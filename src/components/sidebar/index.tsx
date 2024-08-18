import {
  BackpackIcon,
  DashboardIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GearIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  TargetIcon,
} from '@radix-ui/react-icons';
import { Logomark } from './logomark';
import { NavItem } from './nav-item';
import { UsedSpaceWidget } from './used-space-widget';
import { Profile } from './profile';
import * as Input from '../input';

export function Sidebar() {
  return (
    <aside className="px-5 py-8 flex flex-col gap-6 border-r border-zinc-200">
      <div className="flex items-center gap-2">
        <Logomark />
        <h1 className="text-xl font-semibold text-zinc-900">Untitled UI</h1>
      </div>

      <Input.Root>
        <Input.Prefix>
          <MagnifyingGlassIcon className="text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={HomeIcon} />
        <NavItem title="Dashboard" icon={DashboardIcon} />
        <NavItem title="Projects" icon={BackpackIcon} />
        <NavItem title="Tasks" icon={FileTextIcon} />
        <NavItem title="Reporting" icon={ExternalLinkIcon} />
        <NavItem title="User" icon={PersonIcon} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={TargetIcon} />
          <NavItem title="Support" icon={GearIcon} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px w-full bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}
