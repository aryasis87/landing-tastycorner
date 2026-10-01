import Link from 'next/link';

const NAV = [
  ['/#isi', 'Isi struk'],
  ['/edisi', 'Arsip edisi'],
  ['/kalkulator', 'Kalkulator food cost'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-carbon/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-[family-name:var(--font-bricolage)] text-xl font-extrabold tracking-tight text-receipt">
          Tasty<span className="text-tomato-bright">Corner</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="receipt-label text-receipt/80 transition-colors hover:text-receipt">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#langganan" className="inline-flex bg-tomato px-4 py-2.5 text-sm font-bold text-white hover:bg-tomato-2">
          Langganan gratis
        </Link>
      </div>
    </header>
  );
}
