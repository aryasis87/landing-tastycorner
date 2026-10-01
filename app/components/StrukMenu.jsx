import { hppMenu, persen, rp } from '@/lib/struk';

/* Bedah satu menu dicetak sebagai struk kasir: baris bahan, garis putus,
   lalu HPP, food cost, dan margin rupiah. */
export default function StrukMenu({ menu, nomor, tanggal, className = '' }) {
  const hpp = hppMenu(menu);
  const fc = (hpp / menu.harga) * 100;
  return (
    <div className={`struk px-6 py-6 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.6)] ${className}`}>
      <p className="text-center font-semibold tracking-widest">TASTY CORNER</p>
      <p className="text-center text-xs">STRUK MINGGUAN {nomor && `#${nomor}`}</p>
      {tanggal && <p className="text-center text-xs">{tanggal}</p>}
      <p className="struk-garis mt-4 pt-3 font-semibold">{menu.nama.toUpperCase()}</p>
      <table className="mt-2 w-full">
        <caption className="sr-only">Rincian HPP {menu.nama}</caption>
        <tbody>
          {menu.bahan.map(([b, biaya]) => (
            <tr key={b}>
              <td className="py-0.5 pr-3">{b}</td>
              <td className="py-0.5 text-right tabular-nums whitespace-nowrap">{rp(biaya)}</td>
            </tr>
          ))}
          <tr className="struk-garis">
            <th scope="row" className="pt-2 text-left font-semibold">HPP</th>
            <td className="pt-2 text-right font-semibold tabular-nums">{rp(hpp)}</td>
          </tr>
          <tr>
            <th scope="row" className="text-left font-normal">Harga jual</th>
            <td className="text-right tabular-nums">{rp(menu.harga)}</td>
          </tr>
          <tr>
            <th scope="row" className="text-left font-normal">Food cost</th>
            <td className={`text-right font-semibold tabular-nums ${fc > 40 ? 'text-tomato-2' : ''}`}>{persen(fc)}</td>
          </tr>
          <tr className="struk-garis">
            <th scope="row" className="pt-2 text-left font-semibold">MARGIN / PORSI</th>
            <td className="pt-2 text-right font-semibold tabular-nums">{rp(menu.harga - hpp)}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 text-center text-xs">*** angka contoh purwarupa ***</p>
    </div>
  );
}
