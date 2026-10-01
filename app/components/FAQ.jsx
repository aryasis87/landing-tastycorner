import { FAQ as DAFTAR } from '@/lib/struk';

export default function FAQ() {
  return (
    <section className="bg-receipt px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="receipt-label text-tomato-2">Pertanyaan</p>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-extrabold text-carbon md:text-[2.6rem]">Sebelum berlangganan</h2>
        </div>
        <div className="border-t-2 border-carbon">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-dashed border-carbon/35">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold text-carbon [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="mono text-tomato-2 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
