/**
 * ¿Qué etiqueta tiene mi coche? Criterios de la DGT por tecnología, norma Euro o fecha de matriculación, y en
 * qué ZBE de las ciudades puede entrar hoy un vehículo de fuera con esa etiqueta.
 */
import { useEffect, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { etiquetaDe, esHibrido, esPhev, type Categoria, type Energia } from '../../lib/engine/etiqueta';
import { CIUDADES, veredicto } from '../../lib/engine/zbe';
import { readParams, num, str, updateURL } from '../../lib/url-state';
import { ETIQUETA_NOMBRE, ENERGIA, CATEGORIA, MESES, accesoTitulo, mesAnio } from '../../lib/textos';
import { Pasos, Acciones, Cabecera, Aviso, Pegatina, caja, marco, rejilla, tx, fm, type L } from './kit';

declare const __BUILD_DAY__: string;
interface Props { lang?: L; methodHref?: string; preset?: { energia?: string; anio?: number; categoria?: string }; ciudadHrefs?: Record<string, string>; consultaUrl?: string }
const ENERGIAS: Energia[] = ['gasolina', 'diesel', 'hev', 'hev_diesel', 'phev', 'phev_diesel', 'bev', 'glp', 'gnc'];
const CATS: Categoria[] = ['turismo', 'moto', 'ciclomotor', 'pesado'];

export default function EtiquetaTool({ lang = 'es', methodHref, preset = {}, ciudadHrefs = {}, consultaUrl }: Props) {
  const f = fm(lang);
  const [cat, setCat] = useState<Categoria>((preset.categoria as Categoria) ?? 'turismo');
  const [en, setEn] = useState<Energia>((preset.energia as Energia) ?? 'gasolina');
  const [anio, setAnio] = useState(preset.anio ?? 2008);
  const [mes, setMes] = useState('6');
  const [euro, setEuro] = useState('0');
  const [aut, setAut] = useState(50);
  const [fecha, setFecha] = useState(__BUILD_DAY__);
  useEffect(() => {
    setFecha(new Date().toISOString().slice(0, 10));
    const u = readParams(window.location.search); if (![...u.keys()].length) return;
    setCat(str(u, 'v', cat) as Categoria); setEn(str(u, 'm', en) as Energia); setAnio(num(u, 'a', anio)); setMes(str(u, 'mm', '6')); setEuro(str(u, 'e', '0')); setAut(num(u, 'k', 50));
  }, []);
  useEffect(() => { updateURL({ v: cat, m: en, a: anio, mm: mes, e: euro, k: esPhev(en) ? aut : undefined }); }, [cat, en, anio, mes, euro, aut]);
  const anioOk = Math.min(Math.max(Math.round(anio) || 2008, 1950), 2026);
  const matric = `${anioOk}-${String(Number(mes)).padStart(2, '0')}`;
  const et = etiquetaDe({ categoria: cat, energia: en, autonomiaKm: aut, euro: Number(euro), matriculacion: matric });
  const nombre = ETIQUETA_NOMBRE[lang][et.etiqueta];
  const visitante = { domicilio: 'fuera' as const, residenteZona: false };
  const filas = CIUDADES.map((c) => {
    const vs = veredicto(c.slug, et.etiqueta, visitante, fecha, cat);
    const peor = vs.find((v) => v.acceso === 'prohibido') ?? vs.find((v) => v.acceso !== 'permitido') ?? vs[0];
    const prox = vs.map((v) => v.proximo).filter(Boolean).sort((a, b) => a!.fecha.localeCompare(b!.fecha))[0];
    return { c, peor, prox, n: vs.length };
  });
  const libres = filas.filter((x) => x.peor.acceso === 'permitido').length;
  const steps = [
    et.base === 'tecnologia' ? tx(lang, `Tecnología ${ENERGIA.es[en].toLowerCase()}: ${nombre.toLowerCase()}.`, `${ENERGIA.en[en]} technology: ${nombre}.`)
      : et.base === 'euro' ? tx(lang, `Norma Euro ${euro}: ${nombre.toLowerCase()}.`, `Euro ${euro}: ${nombre}.`)
        : tx(lang, `Primera matriculación en ${mesAnio(matric, 'es')}: ${nombre.toLowerCase()} según las fechas ${cat === 'moto' || cat === 'ciclomotor' ? 'de las normas Euro europeas' : 'de la DGT'}.`, `First registered in ${mesAnio(matric, 'en')}: ${nombre} under the ${cat === 'moto' || cat === 'ciclomotor' ? 'EU Euro-standard' : 'DGT'} dates.`),
    ...(et.regla === 'moto_euro5' ? [tx(lang, 'El Reglamento General de Vehículos solo enumera las motos Euro 3 y Euro 4 para la C; la Euro 5 no figura en el texto: confírmalo en la consulta por matrícula.', 'The General Vehicle Regulation only lists Euro 3 and Euro 4 motorbikes for the C; Euro 5 is not named: confirm it with the plate lookup.')] : et.dudoso && et.alternativa ? [tx(lang, `Mes de transición: también es posible la ${ETIQUETA_NOMBRE.es[et.alternativa].toLowerCase()}. La norma Euro de la ficha técnica (V.9) lo resuelve.`, `Changeover month: the ${ETIQUETA_NOMBRE.en[et.alternativa]} is also possible. The Euro standard on the technical card (V.9) settles it.`)] : []),
    tx(lang, `Visitante con matrícula de fuera: entra libremente en ${libres} de ${filas.length} zonas urbanas de esta web a fecha de ${f.date(fecha)}.`, `Visitor with an out-of-town plate: free access to ${libres} of the ${filas.length} city zones on this site as of ${f.date(fecha)}.`),
  ];
  return (
    <div className={marco} data-chrome>
      <div className="esb h-1.5" aria-hidden="true" />
      <div className={rejilla}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <SelectField id="e-v" label={tx(lang, 'Vehículo', 'Vehicle')} value={cat} onChange={(x) => setCat(x as Categoria)} options={CATS.map((k) => ({ value: k, label: CATEGORIA[lang][k] }))} />
            <SelectField id="e-m" label={tx(lang, 'Motor', 'Engine')} value={en} onChange={(x) => setEn(x as Energia)} options={ENERGIAS.map((k) => ({ value: k, label: ENERGIA[lang][k] }))} />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <NumberField id="e-a" label={tx(lang, 'Año de 1.ª matriculación', 'Year first registered')} value={anio} onChange={setAnio} min={1950} max={2026} grouping={false} lang={lang} />
            <SelectField id="e-mm" label={tx(lang, 'Mes', 'Month')} value={mes} onChange={setMes} options={MESES[lang].map((x, i) => ({ value: String(i + 1), label: x }))} />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <SelectField id="e-e" label={tx(lang, 'Norma Euro (V.9)', 'Euro standard (V.9)')} value={euro} onChange={setEuro} options={[{ value: '0', label: tx(lang, 'No la sé: usar la fecha', 'Not sure: use the date') }, ...[1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `Euro ${n}` }))]} help={tx(lang, 'Casilla V.9 de la ficha técnica', 'Box V.9 of the technical card')} />
            {esPhev(en) ? <NumberField id="e-k" label={tx(lang, 'Autonomía eléctrica', 'Electric range')} value={aut} onChange={setAut} unit="km" max={400} lang={lang} /> : <span />}
          </div>
          {consultaUrl && <p className="text-sm text-navy-700">{tx(lang, 'La respuesta oficial, por matrícula: ', 'The official answer, by number plate: ')}<a className="font-medium text-accent-700 underline" href={consultaUrl} target="_blank" rel="nofollow noopener noreferrer">{tx(lang, 'consulta del distintivo en la sede de la DGT', 'DGT label lookup')}</a>.</p>}
        </form>
        <div aria-live="polite" data-resultat className={caja}>
          <Cabecera label={tx(lang, 'Tu etiqueta ambiental', 'Your environmental label')} valor={nombre} icono={<Pegatina e={et.etiqueta} size="lg" />} bajo={et.dudoso ? tx(lang, 'Fecha de transición: comprueba la norma Euro', 'Changeover date: check the Euro standard') : tx(lang, `Criterio: ${et.base === 'euro' ? 'norma Euro' : et.base === 'fecha' ? 'fecha de matriculación' : 'tecnología del motor'}`, `Based on ${et.base === 'euro' ? 'the Euro standard' : et.base === 'fecha' ? 'the registration date' : 'the engine technology'}`)} />
          <table className="mt-4 w-full text-sm">
            <caption className="mb-1 text-left text-xs font-semibold uppercase tracking-wide text-navy-600">{tx(lang, 'Con matrícula de fuera, hoy', 'With an out-of-town plate, today')}</caption>
            <tbody>
              {filas.map(({ c, peor, prox }) => (
                <tr key={c.slug} className="border-t border-navy-200">
                  <th scope="row" className="py-1.5 pr-2 text-left font-normal">{ciudadHrefs[c.slug] ? <a className="underline" href={ciudadHrefs[c.slug]}>{c.nombre}</a> : c.nombre}</th>
                  <td className="py-1.5 text-right"><span className={`inline-block rounded border px-1.5 py-0.5 text-xs font-medium acc-${peor.acceso}`}>{accesoTitulo(peor.acceso, lang)}</span>{prox && <span className="block text-[0.7rem] text-navy-600">{tx(lang, `cambia el ${f.date(prox.fecha)}`, `changes on ${f.date(prox.fecha)}`)}</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pasos lang={lang} steps={steps} />
          <Acciones lang={lang} text={() => tx(lang, `${CATEGORIA.es[cat]} ${ENERGIA.es[en].toLowerCase()} de ${mesAnio(matric, 'es')}: ${nombre}`, `${CATEGORIA.en[cat]}, ${ENERGIA.en[en].toLowerCase()}, ${mesAnio(matric, 'en')}: ${nombre}`)} />
          <Aviso lang={lang} methodHref={methodHref} />
        </div>
      </div>
    </div>
  );
}
