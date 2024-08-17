import { ExitIcon } from '@radix-ui/react-icons';

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/LucasAnselmoSilva12345.png"
        alt="Foto de perfil de Lucas Anselmo"
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Lucas Anselmo
        </span>
        <span className="text-xs text-zinc-500 truncate">
          lucasanselmodasilva02@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
        <ExitIcon className="text-zinc-500" />
      </button>
    </div>
  );
}
