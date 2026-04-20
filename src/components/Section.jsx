export default function Section({ title, children }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-center gap-2 sm:gap-3">
        <h2
          className="
          text-[10px] 
          sm:text-xs 
          lg:text-sm 
          font-semibold 
          text-gray-400 
          uppercase 
          tracking-wider sm:tracking-widest
          whitespace-nowrap
        "
        >
          {title}
        </h2>

        <div
          className="
          flex-1 
          h-[1.5px] sm:h-[2px] 
          bg-gradient-to-r 
          from-red-400/50 
          via-red-300/30 
          to-transparent 
          rounded-full
        "
        ></div>
      </div>

      <div className="space-y-2 sm:space-y-3">{children}</div>
    </div>
  );
}
