import Link from 'next/link';
import EdisiList from './EdisiList';

export default function EdisiTeaser() {
  return (
    <section className="bg-receipt-2 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="receipt-label text-tomato-2">Arsip</p>
            <h2 className="mt-4 text-[2rem] leading-[1.08] font-extrabold text-carbon md:text-[2.8rem]">Empat Senin terakhir</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/edisi" className="receipt-label border-b-2 border-carbon pb-1 text-carbon">Semua edisi</Link>
            <Link href="/kalkulator" className="receipt-label border-b-2 border-tomato-2 pb-1 text-tomato-2">Kalkulator food cost</Link>
          </div>
        </div>
        <EdisiList />
      </div>
    </section>
  );
}
