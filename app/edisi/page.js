import { EDISI, SITE } from '@/lib/struk';
import EdisiList from '../components/EdisiList';

export const metadata = {
  title: 'Arsip Edisi',
  description: `Arsip Struk Mingguan Tasty Corner: ${EDISI.length} edisi terakhir — es kopi susu, komisi pesan-antar, menu laris, dan harga cabai, dihitung sampai rupiah terakhir.`,
  alternates: { canonical: `${SITE}/edisi` },
};

export default function Edisi() {
  return (
    <main className="bg-receipt-2 px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="receipt-label text-tomato-2">Arsip Struk Mingguan</p>
        <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.02] font-extrabold text-carbon md:text-6xl">Setiap Senin, satu struk yang dihitung ulang</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Pilih satu edisi. Semua dihitung dari baris bahan yang bisa Anda periksa sendiri.</p>
        <div className="mt-14">
          <EdisiList tingkat="h2" />
        </div>
      </div>
    </main>
  );
}
