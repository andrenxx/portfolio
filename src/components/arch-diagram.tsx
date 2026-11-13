type Labels = {
  title: string;
  player: string;
  browser: string;
  worker: string;
  workerSub: string;
  room: string;
  roomSub: string;
  db: string;
  dbSub: string;
  p2p: string;
  ws: string;
};

function Node({ x, y, w, title, sub, accent, compact }: { x: number; y: number; w: number; title: string; sub: string; accent?: boolean; compact?: boolean }) {
  return (
    <g className={`arch-node${accent ? " is-accent" : ""}`}>
      <rect x={x} y={y} width={w} height={58} rx={10} />
      <text x={compact ? x + w / 2 : x + 14} y={compact ? y + 38 : y + 26} textAnchor={compact ? "middle" : undefined} className="arch-title">{title}</text>
      {!compact && <text x={x + 14} y={y + 46} className="arch-sub">{sub}</text>}
    </g>
  );
}

// Diagrama do online do Clover MMO. Os traços animados mostram o sentido dos dados.
export default function ArchDiagram({ l, compact }: { l: Labels; compact?: boolean }) {
  return (
    <figure className={`arch${compact ? " is-compact" : ""}`} aria-label={l.title}>
      <div className="arch-scroll"><svg viewBox="0 0 600 330" role="img" >
        <title>{`${l.title}: ${l.player} ↔ ${l.p2p} ↔ ${l.player}; ${l.ws} → ${l.worker} → ${l.room} → ${l.db}`}</title>

        <path className="arch-link is-p2p" d="M220 49 H380" />
        <text x="300" y="38" textAnchor="middle" className="arch-tag is-accent">{l.p2p}</text>

        <path className="arch-link" d="M120 78 V122 Q120 141 138 141 H200" />
        <path className="arch-link" d="M480 78 V122 Q480 141 462 141 H400" />
        <text x="130" y="106" className="arch-tag">{l.ws}</text>
        <text x="470" y="106" textAnchor="end" className="arch-tag">{l.ws}</text>

        <path className="arch-link" d="M260 170 V212 Q260 224 248 224 H172 Q160 224 160 236 V250" />
        <path className="arch-link" d="M340 170 V212 Q340 224 352 224 H428 Q440 224 440 236 V250" />

        <Node x={20} y={20} w={200} title={l.player} sub={l.browser} compact={compact} />
        <Node x={380} y={20} w={200} title={l.player} sub={l.browser} compact={compact} />
        <Node x={200} y={112} w={200} title={l.worker} sub={l.workerSub} accent compact={compact} />
        <Node x={40} y={250} w={240} title={l.room} sub={l.roomSub} compact={compact} />
        <Node x={320} y={250} w={240} title={l.db} sub={l.dbSub} compact={compact} />
      </svg></div>
      {!compact && <figcaption>{l.title}</figcaption>}
    </figure>
  );
}
