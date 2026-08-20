'use client';

export default function StackFilter({ stacks, selectedStack, onStackChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold mr-1 shrink-0">
        STACK FILTERS:
      </span>
      {stacks.map((stack) => (
        <button
          key={stack}
          onClick={() => onStackChange(selectedStack === stack ? 'All' : stack)}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            selectedStack === stack
              ? 'bg-white/12 border-white/25 text-white'
              : 'border-white/[0.1] text-white/45 hover:border-white/20 hover:text-white/65'
          }`}
        >
          {stack}
        </button>
      ))}
    </div>
  );
}
