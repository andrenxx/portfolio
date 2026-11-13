import Link from "next/link";

export default function NotFound() {
  return (
    <main className="close" style={{ minHeight: "100dvh", borderTop: 0 }}>
      <div className="wrap close-in">
        <h2>404</h2>
        <p>Página não encontrada. / Page not found.</p>
        <div className="actions">
          <Link className="btn btn-primary" href="/">Início / Home</Link>
        </div>
      </div>
    </main>
  );
}
