import { SITE } from '@/lib/struk';
import Kalkulator from '../components/Kalkulator';

export const metadata = {
  title: 'Kalkulator Food Cost',
  description: 'Hitung HPP, food cost, margin per porsi, harga jual saran, dan harga online setelah komisi aplikasi pesan-antar — hasilnya dicetak sebagai struk.',
  alternates: { canonical: `${SITE}/kalkulator` },
};

export default function KalkulatorPage() {
  return (
    <main className="bg-receipt-2 px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="receipt-label text-tomato-2">Kalkulator food cost</p>
        <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.02] font-extrabold text-carbon md:text-6xl">Ketik bahannya, struknya tercetak sendiri</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Isi biaya per porsi untuk setiap bahan — termasuk kemasan. Kalau dijual lewat aplikasi, pilih komisinya untuk melihat harga online yang menjaga margin tetap sama.</p>
        <div className="mt-14">
          <Kalkulator />
        </div>
      </div>
    </main>
  );
}
