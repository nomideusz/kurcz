// Engraved plates per guide, shared by PL and EN: the article header, hub-row thumbnails
// and the home chart cards all read them from here.
import type { ImageMetadata } from 'astro';
import { extractLocale } from '../i18n/config.ts';

const files = import.meta.glob<{ default: ImageMetadata }>('../../assets/plates/{guides/*,card-*-plate}.png', { eager: true });
const file = (name: string) => files[`../../assets/plates/${name}.png`]?.default;

// Logical (PL) path -> source file and its description in each locale.
const plates: Record<string, { file: string; pl: string; en: string }> = {
  '/kurcze-lydek': { file: 'card-lydek-plate', pl: 'Rycina podudzia z boku z zaznaczonym mięśniem łydki.', en: 'Engraving of the lower leg from the side with the calf muscle marked.' },
  '/kurcze-nocne': { file: 'card-nocne-plate', pl: 'Rycina wyciągniętej nogi z mięśniami łydki i półksiężycem.', en: 'Engraving of an outstretched leg with the calf muscles and a crescent moon.' },
  '/kurcze-u-kobiet-w-ciazy': { file: 'card-ciaza-plate', pl: 'Rycina kobiety w ciąży z zaznaczonym mięśniem łydki.', en: 'Engraving of a pregnant woman with the calf muscle marked.' },
  '/kurcze-stop': { file: 'card-stopy-plate', pl: 'Rycina stopy od spodu z zaznaczonymi mięśniami podeszwy.', en: 'Engraving of a foot from below with the sole muscles marked.' },
  '/kurcze-dloni': { file: 'card-magnez-plate', pl: 'Rycina dłoni z zaznaczonymi mięśniami.', en: 'Engraving of a hand with its muscles marked.' },
  '/kurcze-u-osob-starszych': { file: 'card-seniorzy-plate', pl: 'Rycina podudzia i stopy starszej osoby.', en: "Engraving of an older person's lower leg and foot." },
  '/kurcze-miesniowe': { file: 'guides/kurcze-miesniowe', pl: 'Rycina mięśnia rozłożonego na pęczki i włókna.', en: 'Engraving of a muscle opened into bundles and fibres.' },
  '/pierwsza-pomoc': { file: 'guides/pierwsza-pomoc', pl: 'Rycina: dłonie przyciągają palce stopy do goleni, rozciągając łydkę.', en: 'Engraving: hands pull the toes back towards the shin, stretching the calf.' },
  '/profilaktyka': { file: 'guides/profilaktyka', pl: 'Rycina podudzia obok szklanki wody i taśmy do ćwiczeń.', en: 'Engraving of a lower leg beside a glass of water and an exercise band.' },
  '/kurcz-vs-skurcz': { file: 'guides/kurcz-vs-skurcz', pl: 'Rycina dwóch mięśni: rozluźnionego i zbitego w kurczu.', en: 'Engraving of two muscles: one relaxed, one knotted in a cramp.' },
  '/wibroakustyka': { file: 'guides/wibroakustyka', pl: 'Rycina nogi na macie z falami drgań pod łydką.', en: 'Engraving of a leg on a mat with vibration waves under the calf.' },
  '/joga-a-kurcze': { file: 'guides/joga-a-kurcze', pl: 'Rycina postaci w pozycji psa z głową w dół.', en: 'Engraving of a figure in the downward-facing dog pose.' },
  '/kurcze-nog': { file: 'guides/kurcze-nog', pl: 'Rycina całej nogi z zaznaczonymi mięśniami uda i łydki.', en: 'Engraving of a whole leg with the thigh and calf muscles marked.' },
  '/kurcze-u-sportowcow': { file: 'guides/kurcze-u-sportowcow', pl: 'Rycina nogi biegacza w kroku.', en: "Engraving of a runner's leg mid-stride." },
  '/kurcze-u-diabetykow': { file: 'guides/kurcze-u-diabetykow', pl: 'Rycina stopy z zaznaczonymi nerwami obwodowymi.', en: 'Engraving of a foot with its peripheral nerves drawn.' },
  '/niedobor-magnezu': { file: 'guides/niedobor-magnezu', pl: 'Rycina produktów bogatych w magnez: pestki dyni, migdały, szpinak, kasza gryczana.', en: 'Engraving of magnesium-rich foods: pumpkin seeds, almonds, spinach, buckwheat.' },
  '/kurcze-a-odwodnienie': { file: 'guides/kurcze-a-odwodnienie', pl: 'Rycina szklanki wody obok pęczka włókien mięśniowych.', en: 'Engraving of a glass of water beside a bundle of muscle fibres.' },
  '/kurcze-a-leki': { file: 'guides/kurcze-a-leki', pl: 'Rycina blistra z tabletkami przed podudziem.', en: 'Engraving of a blister pack of tablets in front of a lower leg.' },
  '/rozciaganie-przy-kurczach': { file: 'guides/rozciaganie-przy-kurczach', pl: 'Rycina rozciągania łydki przy ścianie.', en: 'Engraving of a calf stretch against a wall.' },
  '/masaz-przy-kurczach': { file: 'guides/masaz-przy-kurczach', pl: 'Rycina dłoni masujących łydkę.', en: 'Engraving of hands massaging a calf.' },
  '/suplementacja-magnezem': { file: 'guides/suplementacja-magnezem', pl: 'Rycina tabletki musującej rozpuszczającej się w szklance wody.', en: 'Engraving of an effervescent tablet dissolving in a glass of water.' },
  '/kurcze-ud': { file: 'guides/kurcze-ud', pl: 'Rycina tylnej strony uda z zaznaczonymi mięśniami kulszowo-goleniowymi.', en: 'Engraving of the back of the thigh with the hamstring muscles marked.' },
  '/elektrolity-a-kurcze': { file: 'guides/elektrolity-a-kurcze', pl: 'Rycina zakończenia nerwu na włóknie mięśniowym.', en: 'Engraving of a nerve ending on a muscle fibre.' },
  '/zespol-niespokojnych-nog-a-kurcze': { file: 'guides/zespol-niespokojnych-nog-a-kurcze', pl: 'Rycina nóg wystających spod koca w łóżku nocą.', en: 'Engraving of legs under a blanket in bed at night.' },
  '/kurcze-u-dzieci': { file: 'guides/kurcze-u-dzieci', pl: 'Rycina podudzia i stopy dziecka.', en: "Engraving of a child's lower leg and foot." },
  '/akupunktura': { file: 'guides/akupunktura', pl: 'Rycina łydki z cienkimi igłami do akupunktury.', en: 'Engraving of a calf with fine acupuncture needles.' },
};

/** The plate for an internal href in any locale, or undefined for pages without one. */
export function guidePlate(href: string) {
  const { locale, pathname } = extractLocale(href);
  const entry = plates[pathname.replace(/\/$/, '') || '/'];
  const src = entry && file(entry.file);
  return src ? { src, alt: locale === 'en' ? entry.en : entry.pl } : undefined;
}
