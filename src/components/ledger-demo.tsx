type Labels = { tx: string; sum: string; ok: string; alice: string; bob: string };

// Prévia do Ledger: uma transferência vira duas partidas que somam zero. Só CSS.
export default function LedgerDemo({ l, locale, compact }: { l: Labels; locale: string; compact?: boolean }) {
  const money = (cents: number) =>
    new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: "exceptZero" }).format(cents / 100);
  const plain = (cents: number) =>
    new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);

  const rows = [
    { who: l.alice, amount: -2550, after: 7450, kind: "debit" },
    { who: l.bob, amount: 2550, after: 2550, kind: "credit" },
  ];

  return (
    <figure className={`ledger${compact ? " is-compact" : ""}`} aria-label={`${l.tx}: ${l.alice} ${money(-2550)}, ${l.bob} ${money(2550)}, ${l.sum} 0`}>
      <div className="ledger-head">
        <span>{l.tx}</span>
        <span className="ledger-id">#1042</span>
      </div>
      {rows.map((r, i) => (
        <div className={`ledger-row is-${r.kind}`} style={{ "--i": i } as React.CSSProperties} key={r.who}>
          <span className="ledger-who">{r.who}</span>
          <span className="ledger-amount">{money(r.amount)}</span>
          <span className="ledger-after">{plain(r.after)}</span>
        </div>
      ))}
      <div className="ledger-sum">
        <span>Σ {l.sum}</span>
        <span className="ledger-amount">{plain(0)}</span>
        <span className="ledger-ok">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m3.5 8.5 3 3 6-7" />
          </svg>
          {l.ok}
        </span>
      </div>
    </figure>
  );
}
