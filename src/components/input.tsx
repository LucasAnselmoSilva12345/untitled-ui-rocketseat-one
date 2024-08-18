import { ComponentProps } from 'react';

type InputPrefixType = ComponentProps<'div'>;
export function Prefix(props: InputPrefixType) {
  return <div {...props} />;
}

type InputControlType = ComponentProps<'input'>;
export function Control(props: InputControlType) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500"
      {...props}
    />
  );
}

type InputRootType = ComponentProps<'div'>;
export function Root(props: InputRootType) {
  return (
    <div
      className="w-full flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
