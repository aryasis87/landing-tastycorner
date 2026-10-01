import Link from 'next/link';
import { EDISI } from '@/lib/struk';

/* Daftar edisi sebagai potongan struk kecil berjajar. */
export default function EdisiList({ jumlah = EDISI.length, tingkat = 'h3' }) {
  const H = tingkat;
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {EDISI.slice(0, jumlah).map((e, i) => (
        <li key={e.slug}>
          <Link href={`/edisi/${e.slug}`} className={`struk block h-full px-5 py-6 transition-transform hover:-translate-y-1 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
            <span className="block text-xs">#{e.nomor} · {e.tanggal.replace('Senin, ', '')}</span>
            <H className="mt-3 font-[family-name:var(--font-bricolage)] text-lg leading-snug font-extrabold text-carbon">{e.judul}</H>
            <span className="struk-garis mt-4 block pt-3 text-2xl font-semibold text-tomato-2">{e.angka[0]}</span>
            <span className="mt-1 block text-xs leading-relaxed">{e.angka[1]}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
