'use client';

import { useState } from 'react';

const USAHA = ['Warung makan', 'Kedai kopi', 'Kafe', 'Katering', 'Gerobak / kaki lima', 'Lainnya'];

export default function LeadForm() {
  const [selesai, setSelesai] = useState(false);

  const kirim = (e) => {
    e.preventDefault();
    // Purwarupa desain: tidak ada data yang dikirim ke mana pun.
    setSelesai(true);
  };

  const input = 'w-full border border-carbon/25 bg-receipt px-4 py-3 text-carbon focus:border-tomato-2 focus:outline-none';

  return (
    <section id="langganan" className="scroll-mt-16 bg-tomato-2 px-6 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="receipt-label text-white/85">Gratis · berhenti kapan saja</p>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-extrabold text-white md:text-[2.8rem]">Satu struk di surel Anda, setiap Senin pukul 06.00</h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/90">Sebelum pasar ramai, sebelum kompor menyala. Dibaca dalam empat menit.</p>
        </div>
        <div className="struk px-6 py-8 sm:px-8">
          {selesai ? (
            <div role="status" className="py-6 text-center">
              <p className="font-semibold tracking-widest">TERIMA KASIH</p>
              <p className="struk-garis mt-4 pt-4">Ini purwarupa desain — tidak ada data yang dikirim dan tidak ada surel yang akan datang.</p>
              <button type="button" onClick={() => setSelesai(false)} className="mt-6 border border-carbon px-4 py-2.5 text-sm hover:bg-carbon hover:text-receipt">Isi ulang</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-4">
              <p className="text-center font-semibold tracking-widest">FORMULIR LANGGANAN</p>
              <div className="struk-garis pt-4">
                <label htmlFor="nama" className="mb-1.5 block text-sm">Nama</label>
                <input id="nama" name="nama" required autoComplete="name" className={input} />
              </div>
              <div>
                <label htmlFor="surel" className="mb-1.5 block text-sm">Surel</label>
                <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
              </div>
              <div>
                <label htmlFor="usaha" className="mb-1.5 block text-sm">Jenis usaha</label>
                <select id="usaha" name="usaha" required defaultValue="" className={input}>
                  <option value="" disabled>Pilih jenis usaha</option>
                  {USAHA.map((u) => <option key={u}>{u}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-carbon py-3.5 font-semibold tracking-wide text-receipt hover:bg-tomato-2">
                LANGGANAN GRATIS
              </button>
              <p className="text-center text-xs">Purwarupa desain — formulir ini tidak mengirim data.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
