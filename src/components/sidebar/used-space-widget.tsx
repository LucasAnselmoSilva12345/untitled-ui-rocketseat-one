import { ProgressBar } from './progress-bar';

export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 text-violet-700 font-medium">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>
      <ProgressBar />
      <div className="space-x-3">
        <button type="button" className="text-sm font-medium text-violet-500">
          Dismiss
        </button>
        <button type="button" className="text-sm font-medium text-violet-700">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
