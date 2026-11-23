export default function Footer() {
  return (
    <footer className="mx-auto mb-14 max-w-[1280px] px-4 sm:px-6">
      <div className="nb-card flex flex-wrap justify-between gap-2.5 bg-ink px-5 py-3.5 font-mono text-xs font-bold text-paper">
        <span>&lt;/&gt; T.OJEBIYI</span>
        <span>&copy; {new Date().getFullYear()} Timothy Ojebiyi</span>
      </div>
    </footer>
  );
}
