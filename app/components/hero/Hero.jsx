import Link from 'next/link';
import { EDISI } from '@/lib/struk';
import StrukMenu from '../StrukMenu';

export default function Hero() {
  const e = EDISI[0];
  return (
    <section className="relative overflow-hidden bg-carbon px-6 pt-32 pb-20 text-receipt md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="receipt-label text-tomato-bright">Struk Mingguan · terbit tiap Senin</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-extrabold text-receipt sm:text-5xl lg:text-[3.8rem]">
            Usaha makanan Anda, dalam angka yang muat di <span className="text-tomato">satu struk</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-receipt/85">
            Buletin gratis untuk pemilik warung, kedai, dan kafe: satu menu dibedah sampai rupiah
            terakhir, satu promo dihitung, satu pelajaran untuk Senin itu juga.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="#langganan" className="inline-flex justify-center bg-tomato px-7 py-4 font-bold text-white hover:bg-tomato-2">
              Langganan gratis
            </Link>
            <Link href="/kalkulator" className="inline-flex justify-center border border-receipt/30 px-7 py-4 font-bold text-receipt hover:border-receipt">
              Hitung food cost menu Anda
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm -rotate-2">
          <StrukMenu menu={e.menu} nomor={e.nomor} tanggal={e.tanggal} />
        </div>
      </div>
    </section>
  );
}
