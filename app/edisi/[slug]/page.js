import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EDISI, SITE, edisiBySlug, rp } from '@/lib/struk';
import StrukMenu from '../../components/StrukMenu';

export function generateStaticParams() {
  return EDISI.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const e = edisiBySlug(slug);
  if (!e) return {};
  return {
    title: `#${e.nomor}: ${e.judul}`,
    description: `Struk Mingguan #${e.nomor} (${e.tanggal}): ${e.angka[0]} — ${e.angka[1]}.`,
    alternates: { canonical: `${SITE}/edisi/${e.slug}` },
  };
}

export default async function SatuEdisi({ params }) {
  const { slug } = await params;
  const e = edisiBySlug(slug);
  if (!e) notFound();
  const i = EDISI.indexOf(e);
  const baru = EDISI[i - 1];
  const lama = EDISI[i + 1];

  return (
    <main className="bg-receipt pt-28">
      <header className="bg-carbon px-6 pt-12 pb-16 text-receipt">
        <div className="mx-auto max-w-4xl">
          <p className="receipt-label text-tomato-bright"><Link href="/edisi" className="hover:underline">Struk Mingguan</Link> · #{e.nomor} · {e.tanggal}</p>
          <h1 className="mt-5 text-[2.4rem] leading-[1.05] font-extrabold text-receipt md:text-5xl">{e.judul}</h1>
          <div className="mt-10 grid gap-6 border-t border-dashed border-receipt/30 pt-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-end">
            <p className="font-[family-name:var(--font-bricolage)] text-6xl font-extrabold tracking-tight md:text-7xl">{e.angka[0]}</p>
            <p className="text-lg leading-relaxed text-receipt/85">{e.angka[1]}</p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className="receipt-label text-tomato-2">Catatan</h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-carbon">
            {e.catatan.map((c) => <p key={c.slice(0, 24)}>{c}</p>)}
          </div>
          <p className="mono mt-8 border-l-4 border-tomato-2 pl-4 font-semibold text-carbon">Pelajaran: {e.pelajaran}</p>
        </div>
        <div className="space-y-10">
          <section aria-labelledby="dibedah">
            <h2 id="dibedah" className="receipt-label mb-4 text-tomato-2">Menu dibedah</h2>
            <StrukMenu menu={e.menu} nomor={e.nomor} />
          </section>
          {e.promo && (
            <section aria-labelledby="promo">
              <h2 id="promo" className="receipt-label mb-4 text-tomato-2">Dihitung: {e.promo.judul}</h2>
              <div className="struk px-6 py-6">
                <table className="w-full">
                  <caption className="sr-only">{e.promo.judul}</caption>
                  <tbody>
                    {e.promo.baris.map(([k, v]) => (
                      <tr key={k}><td className="py-0.5 pr-3">{k}</td><td className="py-0.5 text-right tabular-nums">{v < 0 ? `−${rp(-v)}` : rp(v)}</td></tr>
                    ))}
                    <tr className="struk-garis">
                      <th scope="row" className="pt-2 text-left font-semibold">SISA</th>
                      <td className="pt-2 text-right font-semibold tabular-nums">{rp(e.promo.baris.reduce((s, [, v]) => s + v, 0))}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="struk-garis mt-4 pt-3 text-xs leading-relaxed">{e.promo.kesimpulan}</p>
              </div>
            </section>
          )}
        </div>
      </div>

      <nav aria-label="Edisi lain" className="mx-auto grid max-w-4xl gap-px border-y border-dashed border-carbon/35 px-6 sm:grid-cols-2">
        {lama ? (
          <Link href={`/edisi/${lama.slug}`} className="py-6 hover:text-carbon">
            <span className="receipt-label">← #{lama.nomor}</span>
            <span className="mt-1 block font-bold text-carbon">{lama.judul}</span>
          </Link>
        ) : <span />}
        {baru ? (
          <Link href={`/edisi/${baru.slug}`} className="py-6 text-right hover:text-carbon">
            <span className="receipt-label">#{baru.nomor} →</span>
            <span className="mt-1 block font-bold text-carbon">{baru.judul}</span>
          </Link>
        ) : (
          <Link href="/#langganan" className="py-6 text-right">
            <span className="receipt-label text-tomato-2">Edisi berikutnya Senin depan →</span>
            <span className="mt-1 block font-bold text-carbon">Langganan supaya tidak terlewat</span>
          </Link>
        )}
      </nav>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/kalkulator" className="inline-flex bg-carbon px-7 py-4 font-bold text-receipt hover:bg-tomato-2">Hitung food cost menu Anda sendiri</Link>
      </div>
    </main>
  );
}
