/** Vocabulaire commun des simulateurs et des pages : étiquettes, motorisations, verdicts, horaires. */
import type { Etiqueta, Energia, Categoria } from './engine/etiqueta';
import { franja, type Acceso, type Veredicto, type Usuario, type Zona } from './engine/zbe';

type L = 'es' | 'en';
const T = <A>(l: L, es: A, en: A) => (l === 'en' ? en : es);

export const ETIQUETA_NOMBRE: Record<L, Record<Etiqueta, string>> = {
  es: { '0': 'Etiqueta 0 emisiones', ECO: 'Etiqueta ECO', C: 'Etiqueta C', B: 'Etiqueta B', A: 'Sin etiqueta' },
  en: { '0': 'Zero emissions label', ECO: 'ECO label', C: 'C label', B: 'B label', A: 'No label' },
};
export const ETIQUETA_CORTA: Record<L, Record<Etiqueta, string>> = {
  es: { '0': '0', ECO: 'ECO', C: 'C', B: 'B', A: 'sin etiqueta' },
  en: { '0': '0', ECO: 'ECO', C: 'C', B: 'B', A: 'no label' },
};
export const ENERGIA: Record<L, Record<Energia, string>> = {
  es: { gasolina: 'Gasolina', diesel: 'Diésel', hev: 'Híbrido no enchufable (HEV) de gasolina', hev_diesel: 'Híbrido no enchufable (HEV) diésel', phev: 'Híbrido enchufable (PHEV) de gasolina', phev_diesel: 'Híbrido enchufable (PHEV) diésel', bev: 'Eléctrico (batería, autonomía extendida o hidrógeno)', glp: 'GLP (autogás)', gnc: 'Gas natural (GNC o GNL)' },
  en: { gasolina: 'Petrol', diesel: 'Diesel', hev: 'Self-charging petrol hybrid (HEV)', hev_diesel: 'Self-charging diesel hybrid (HEV)', phev: 'Plug-in petrol hybrid (PHEV)', phev_diesel: 'Plug-in diesel hybrid (PHEV)', bev: 'Electric (battery, range extender or hydrogen)', glp: 'LPG (autogas)', gnc: 'Natural gas (CNG or LNG)' },
};
export const CATEGORIA: Record<L, Record<Categoria, string>> = {
  es: { turismo: 'Turismo o furgoneta ligera', moto: 'Moto (más de 50 cc)', ciclomotor: 'Ciclomotor (hasta 50 cc)', pesado: 'Más de 8 plazas, camión o furgón pesado' },
  en: { turismo: 'Car or light van', moto: 'Motorbike (over 50 cc)', ciclomotor: 'Moped (up to 50 cc)', pesado: 'Over 8 seats, lorry or heavy van' },
};
export const MESES: Record<L, string[]> = {
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
export const mesAnio = (s: string, l: L) => { const [y, m] = s.split('-').map(Number); return T(l, `${MESES.es[m - 1]} de ${y}`, `${MESES.en[m - 1]} ${y}`); };

export function accesoTitulo(a: Acceso, l: L): string {
  switch (a) {
    case 'permitido': return T(l, 'Puedes entrar', 'You can drive in');
    case 'prohibido': return T(l, 'No puedes entrar', 'You cannot drive in');
    case 'solo_aparcamiento': return T(l, 'Solo para aparcar', 'Only to park');
    case 'condicionado': return T(l, 'Sí, con condiciones', 'Yes, with conditions');
  }
}
export function accesoDetalle(a: Acceso, l: L): string {
  switch (a) {
    case 'permitido': return T(l, 'Acceso, circulación y estacionamiento libres con esta etiqueta.', 'Free access, driving and parking with this label.');
    case 'prohibido': return T(l, 'No puedes acceder, circular ni estacionar en la vía pública dentro de la zona salvo excepción o autorización.', 'You may not enter, drive or park on the street inside the zone unless an exception or permit applies.');
    case 'solo_aparcamiento': return T(l, 'Solo puedes entrar para ir a un aparcamiento público o a una plaza propia dentro de la zona; atravesarla no está permitido.', 'You may only enter to reach a public car park or your own space inside the zone; driving through is not allowed.');
    case 'condicionado': return T(l, 'Hay un régimen transitorio para tu caso, sujeto a condiciones que el ayuntamiento puede retirar.', 'A transitional regime covers your case, under conditions the council can withdraw.');
  }
}
export function franjaTexto(v: Veredicto['franja'], l: L): string {
  if (!v) return T(l, 'todos los días, a cualquier hora', 'every day, at any time');
  const dias = v.dias === 'LV' ? T(l, 'de lunes a viernes', 'Monday to Friday') : v.dias === 'LS' ? T(l, 'de lunes a sábado', 'Monday to Saturday') : T(l, 'todos los días', 'every day');
  const fest = v.festivos ? T(l, ' (no festivos)', ' (public holidays excluded)') : '';
  return T(l, `${dias}${fest}, de ${v.desde} a ${v.hasta} h`, `${dias}${fest}, ${v.desde} to ${v.hasta}`);
}
/** Horaire d'une zone : franja horaire lisible, ou le texte de l'ordonnance (zones activées seulement par épisode de pollution). */
export function horarioTexto(z: Zona, l: L): string {
  const f = franja(z.horario);
  if (!f && z.horario !== '24h' && !/00:00-24:00/.test(z.horario)) return l === 'en' ? (z.horario_en ?? z.horario) : z.horario;
  return franjaTexto(f, l);
}
/** Le colectivo de la regla, écrit pour le lecteur. */
export function usuarioTexto(u: Usuario, ciudad: string, l: L): string {
  const m: Record<Usuario, [string, string]> = {
    todos: ['todos los vehículos', 'all vehicles'],
    domiciliados: [`vehículos domiciliados en ${ciudad}`, `vehicles registered in ${ciudad}`],
    empadronados: [`titulares empadronados en ${ciudad}`, `owners registered as residents of ${ciudad}`],
    municipio: [`vehículos registrados en ${ciudad}`, `vehicles registered in ${ciudad}`],
    no_domiciliados: [`vehículos no domiciliados en ${ciudad}`, `vehicles not registered in ${ciudad}`],
    no_empadronados: [`titulares no empadronados en ${ciudad}`, `owners not registered in ${ciudad}`],
    residentes: ['residentes dentro de la zona', 'residents inside the zone'],
    no_residentes: ['quien no reside dentro de la zona', 'anyone not living inside the zone'],
    no_registrados: ['vehículos no inscritos en el registro municipal', 'vehicles not in the council register'],
    provincia: ['vehículos registrados en otro municipio de la provincia', 'vehicles registered elsewhere in the province'],
    fuera_provincia: ['vehículos registrados fuera de la provincia', 'vehicles registered outside the province'],
  };
  return T(l, m[u][0], m[u][1]);
}
export function estadoTexto(e: string, l: L): string {
  return ({ sanciona: T(l, 'Multa ya', 'Fines in force'), suspendida: T(l, 'Suspendida', 'Suspended'), informativa: T(l, 'Fase informativa', 'Warning phase'), aprobada: T(l, 'Aprobada, sin multas aún', 'Approved, no fines yet'), pendiente: T(l, 'Pendiente', 'Pending') } as Record<string, string>)[e] ?? e;
}
