import Link from 'next/link';
import { EDISI, ISI } from '@/lib/struk';

export default function Isi() {
  const e = EDISI[0];
  return (
    <section id="isi" className="scroll-mt-16 bg-receipt px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="receipt-label text-tomato-2">Yang dicetak tiap Senin</p>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-extrabold text-carbon md:text-[2.8rem]">Empat baris, dibaca sambil menunggu kompor panas</h2>
          <ol className="mt-10 border-t-2 border-carbon">
            {ISI.map(([j, d], i) => (
              <li key={j} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-2 border-b border-dashed border-carbon/35 py-5">
                <span className="mono text-sm font-semibold text-tomato-2">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-carbon">{j}</h3>
                  <p className="mt-1 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-carbon p-8 text-receipt sm:p-10">
          <p className="receipt-label text-tomato-bright">Angka edisi #{e.nomor}</p>
          <p className="mt-5 font-[family-name:var(--font-bricolage)] text-7xl font-extrabold tracking-tight text-receipt">{e.angka[0]}</p>
          <p className="mt-4 text-lg leading-relaxed text-receipt/85">{e.angka[1]}</p>
          <p className="mono mt-8 border-t border-dashed border-receipt/30 pt-5 text-sm text-receipt/85">Pelajaran: {e.pelajaran}</p>
          <Link href={`/edisi/${e.slug}`} className="receipt-label mt-8 inline-block border-b-2 border-tomato-bright pb-1 text-tomato-bright hover:text-receipt">
            Baca edisi #{e.nomor}
          </Link>
        </div>
      </div>
    </section>
  );
}
