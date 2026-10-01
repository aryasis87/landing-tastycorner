'use client';

import { useState } from 'react';
import { persen, rp } from '@/lib/struk';

const AWAL = [
  ['Espresso 14 g', 3500],
  ['Susu segar 150 ml', 3000],
  ['Gula aren cair 20 ml', 700],
  ['Gelas, tutup, sedotan', 1200],
];

const angka = (v) => Math.max(0, Number(String(v).replace(/[^\d]/g, '')) || 0);

export default function Kalkulator() {
  const [nama, setNama] = useState('Es kopi susu');
  const [harga, setHarga] = useState(18000);
  const [bahan, setBahan] = useState(AWAL);
  const [target, setTarget] = useState(35);
  const [komisi, setKomisi] = useState(0);

  const hpp = bahan.reduce((s, [, b]) => s + b, 0);
  const fc = harga ? (hpp / harga) * 100 : 0;
  const margin = harga - hpp;
  const saran = Math.ceil(hpp / (target / 100) / 500) * 500;
  const bersihOnline = harga * (1 - komisi / 100);
  const marginOnline = bersihOnline - hpp;
  const hargaOnline = komisi ? Math.ceil((margin + hpp) / (1 - komisi / 100) / 500) * 500 : harga;

  const ubahBahan = (i, k, v) => setBahan((b) => b.map((x, j) => (j === i ? (k === 0 ? [v, x[1]] : [x[0], angka(v)]) : x)));
  const input = 'w-full border border-carbon/25 bg-receipt px-3 py-2.5 text-carbon focus:border-tomato-2 focus:outline-none';

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()} aria-label="Isian kalkulator food cost">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="menu" className="receipt-label mb-2 block text-carbon">Nama menu</label>
            <input id="menu" value={nama} onChange={(e) => setNama(e.target.value)} className={input} />
          </div>
          <div>
            <label htmlFor="harga" className="receipt-label mb-2 block text-carbon">Harga jual (Rp)</label>
            <input id="harga" inputMode="numeric" value={harga ? harga.toLocaleString('id-ID') : ''} onChange={(e) => setHarga(angka(e.target.value))} className={`${input} tabular-nums`} />
          </div>
        </div>

        <fieldset>
          <legend className="receipt-label mb-3 text-carbon">Bahan per porsi</legend>
          <div className="space-y-2">
            {bahan.map(([b, biaya], i) => (
              <div key={i} className="grid grid-cols-[minmax(0,1fr)_8rem_2.5rem] gap-2">
                <label className="sr-only" htmlFor={`b-${i}`}>Bahan {i + 1}</label>
                <input id={`b-${i}`} value={b} onChange={(e) => ubahBahan(i, 0, e.target.value)} className={input} />
                <label className="sr-only" htmlFor={`c-${i}`}>Biaya bahan {i + 1} (Rp)</label>
                <input id={`c-${i}`} inputMode="numeric" value={biaya ? biaya.toLocaleString('id-ID') : ''} onChange={(e) => ubahBahan(i, 1, e.target.value)} className={`${input} text-right tabular-nums`} />
                <button type="button" onClick={() => setBahan((x) => x.filter((_, j) => j !== i))} aria-label={`Hapus ${b || `bahan ${i + 1}`}`} className="border border-carbon/25 text-carbon hover:border-tomato-2 hover:text-tomato-2">×</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setBahan((x) => [...x, ['', 0]])} className="receipt-label mt-3 border border-dashed border-carbon/40 px-4 py-2.5 text-carbon hover:border-carbon">
            + Tambah bahan
          </button>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="target" className="receipt-label mb-2 block text-carbon">Target food cost</label>
            <select id="target" value={target} onChange={(e) => setTarget(Number(e.target.value))} className={input}>
              {[25, 30, 35, 40, 45].map((t) => <option key={t} value={t}>{t}%</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="komisi" className="receipt-label mb-2 block text-carbon">Komisi aplikasi pesan-antar</label>
            <select id="komisi" value={komisi} onChange={(e) => setKomisi(Number(e.target.value))} className={input}>
              {[0, 15, 20, 25, 30].map((k) => <option key={k} value={k}>{k ? `${k}%` : 'Tidak dijual online'}</option>)}
            </select>
          </div>
        </div>
      </form>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="struk px-6 py-6 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.45)]" aria-live="polite">
          <p className="text-center font-semibold tracking-widest">TASTY CORNER</p>
          <p className="text-center text-xs">KALKULATOR FOOD COST</p>
          <p className="struk-garis mt-4 pt-3 font-semibold">{(nama || 'Menu tanpa nama').toUpperCase()}</p>
          <table className="mt-2 w-full">
            <caption className="sr-only">Hasil perhitungan</caption>
            <tbody>
              {bahan.map(([b, biaya], i) => (
                <tr key={i}><td className="py-0.5 pr-3">{b || `Bahan ${i + 1}`}</td><td className="py-0.5 text-right tabular-nums">{rp(biaya)}</td></tr>
              ))}
              <tr className="struk-garis"><th scope="row" className="pt-2 text-left font-semibold">HPP</th><td className="pt-2 text-right font-semibold tabular-nums">{rp(hpp)}</td></tr>
              <tr><th scope="row" className="text-left font-normal">Harga jual</th><td className="text-right tabular-nums">{rp(harga)}</td></tr>
              <tr><th scope="row" className="text-left font-normal">Food cost</th><td className={`text-right font-semibold tabular-nums ${fc > target ? 'text-tomato-2' : ''}`}>{persen(fc)}</td></tr>
              <tr><th scope="row" className="text-left font-normal">Margin / porsi</th><td className="text-right font-semibold tabular-nums">{rp(margin)}</td></tr>
              <tr className="struk-garis"><th scope="row" className="pt-2 text-left font-normal">Harga saran ({target}%)</th><td className="pt-2 text-right font-semibold tabular-nums">{rp(saran)}</td></tr>
              {komisi > 0 && (
                <>
                  <tr className="struk-garis"><th scope="row" className="pt-2 text-left font-normal">Online: diterima</th><td className="pt-2 text-right tabular-nums">{rp(bersihOnline)}</td></tr>
                  <tr><th scope="row" className="text-left font-normal">Online: margin</th><td className={`text-right font-semibold tabular-nums ${marginOnline < margin ? 'text-tomato-2' : ''}`}>{rp(marginOnline)}</td></tr>
                  <tr><th scope="row" className="text-left font-normal">Harga online agar margin sama</th><td className="text-right font-semibold tabular-nums">{rp(hargaOnline)}</td></tr>
                </>
              )}
            </tbody>
          </table>
          <p className="struk-garis mt-4 pt-3 text-center text-xs">
            {fc > target ? `*** food cost ${persen(fc)} di atas target ${target}% ***` : '*** food cost dalam target ***'}
          </p>
        </div>
        <p className="mt-6 text-sm leading-relaxed">Tidak ada yang disimpan atau dikirim. Muat ulang halaman untuk kembali ke contoh es kopi susu.</p>
      </div>
    </div>
  );
}
