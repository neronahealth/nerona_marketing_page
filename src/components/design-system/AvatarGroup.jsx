export default function AvatarGroup({ users = [], max = 4, size = 'md' }) {
  const sizeMap = {
    sm: { wrapper: 'w-7 h-7', text: 'text-[10px]', ring: 'ring-2' },
    md: { wrapper: 'w-9 h-9', text: 'text-xs', ring: 'ring-2' },
    lg: { wrapper: 'w-12 h-12', text: 'text-sm', ring: 'ring-2' },
  };
  const s = sizeMap[size] || sizeMap.md;
  const visible = users.slice(0, max);
  const extra = users.length - max;

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((user, i) => (
        <div
          key={i}
          className={`${s.wrapper} rounded-full ${s.ring} ring-card bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden`}
          title={user.name || user}
        >
          {user.photo ? (
            <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <span className={`${s.text} font-bold text-primary`}>
              {(user.name || user).slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
      ))}
      {extra > 0 && (
        <div className={`${s.wrapper} rounded-full ${s.ring} ring-card bg-secondary flex items-center justify-center flex-shrink-0`}>
          <span className={`${s.text} font-semibold text-muted-foreground`}>+{extra}</span>
        </div>
      )}
    </div>
  );
}