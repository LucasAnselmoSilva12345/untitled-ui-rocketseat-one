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

export function Sidebar() {
  return (
    <aside className="px-5 py-8 flex flex-col gap-6 border-r border-zinc-200">
      <div className="flex items-center gap-2">
        <Logomark />
        <h1 className="text-xl font-semibold text-zinc-900">Untitled UI</h1>
      </div>

      <div className="w-full flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <MagnifyingGlassIcon className="text-zinc-500" />
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500"
          placeholder="Search"
        />
      </div>

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
