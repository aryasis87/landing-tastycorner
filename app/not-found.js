import Link from "next/link";

export const metadata = { title: "Struk tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-carbon px-6 pt-20">
      <div className="struk mx-auto w-full max-w-sm px-6 py-8 text-center">
        <p className="font-semibold tracking-widest">TASTY CORNER</p>
        <p className="struk-garis mt-4 pt-4 text-4xl font-semibold">404</p>
        <h1 className="mt-2 font-[family-name:var(--font-bricolage)] text-2xl font-extrabold text-carbon">Struk ini tidak pernah dicetak</h1>
        <p className="struk-garis mt-4 pt-4 text-sm">Halaman yang Anda cari tidak ada.</p>
        <Link href="/" className="mt-6 inline-flex bg-carbon px-5 py-3 text-sm font-semibold text-receipt hover:bg-tomato-2">KEMBALI KE BERANDA</Link>
      </div>
    </main>
  );
}
