export interface PagePhotoConfig {
  key: string;
  src: string;
  altPl: string;
  altEn: string;
  captionPl: string;
  captionEn: string;
}

export const pagePhotosMap: Record<string, PagePhotoConfig> = {
  '/rozciaganie-przy-kurczach': {
    key: 'runner_stretching_calf.png',
    src: '/img/runner_stretching_calf.png',
    altPl: 'Prawidłowe rozciąganie łydki po aktywności',
    altEn: 'Proper calf stretching after exercise',
    captionPl: 'Regularne rozciąganie po wysiłku przywraca prawidłową długość powięzi i zapobiega bolesnym skurczom.',
    captionEn: 'Regular post-exercise stretching restores fascia length and prevents painful spasms.',
  },
  '/niedobor-magnezu': {
    key: 'magnesium_rich_foods.png',
    src: '/img/magnesium_rich_foods.png',
    altPl: 'Naturalne źródła magnezu w diecie',
    altEn: 'Natural dietary magnesium sources',
    captionPl: 'Bogata w magnez i potas dieta wspiera optymalną kurczliwość oraz przewodnictwo nerwowe w mięśniach.',
    captionEn: 'A diet rich in magnesium and potassium supports healthy muscle contractility and nerve conduction.',
  },
  '/suplementacja-magnezem': {
    key: 'magnesium_rich_foods.png',
    src: '/img/magnesium_rich_foods.png',
    altPl: 'Dieta i suplementacja minerałami',
    altEn: 'Diet and mineral supplementation',
    captionPl: 'Zrównoważona suplementacja wsparta dietą to klucz do utrzymania właściwego poziomu elektrolitów.',
    captionEn: 'Balanced supplementation supported by nutrition is key to maintaining optimal electrolyte levels.',
  },
  '/masaz-przy-kurczach': {
    key: 'leg_massage_relief.png',
    src: '/img/leg_massage_relief.png',
    altPl: 'Masaż powięziowy i fizjoterapia nóg',
    altEn: 'Myofascial massage and leg physical therapy',
    captionPl: 'Delikatna praca manualna na napiętych punktach spustowych ułatwia odpływ metabolitów i poprawia ukrwienie.',
    captionEn: 'Gentle manual work on tender trigger points improves local blood circulation and metabolite drainage.',
  },
  '/wibroakustyka': {
    key: 'vibroacoustic_therapy.png',
    src: '/img/vibroacoustic_therapy.png',
    altPl: 'Terapia wibroakustyczna falami dźwiękowymi',
    altEn: 'Vibroacoustic soundwave therapy',
    captionPl: 'Niskie częstotliwości akustyczne delikatnie stymulują mikrokrążenie w tkankach głębokich.',
    captionEn: 'Low acoustic frequencies gently stimulate microcirculation in deep tissue structures.',
  },
  '/kurcze-u-kobiet-w-ciazy': {
    key: 'pregnancy_leg_cramps.png',
    src: '/img/pregnancy_leg_cramps.png',
    altPl: 'Odpoczynek i uniesienie nóg w ciąży',
    altEn: 'Resting and elevating legs during pregnancy',
    captionPl: 'Unoszenie nóg podczas odpoczynku zmniejsza nacisk naczyń krwionośnych i łagodzi zmęczenie łydek.',
    captionEn: 'Elevating legs during rest reduces venous pressure and alleviates calf muscle fatigue.',
  },
  '/kurcze-u-osob-starszych': {
    key: 'elderly_walking_park.png',
    src: '/img/elderly_walking_park.png',
    altPl: 'Aktywny spacer seniora na świeżym powietrzu',
    altEn: 'Active senior outdoor walking',
    captionPl: 'Umiarkowana, codzienna aktywność fizyczna chroni seniorów przed zanikiem tlenowym mięśni.',
    captionEn: 'Moderate daily physical activity protects seniors against age-related muscle oxygenation loss.',
  },
  '/kurcze-stop': {
    key: 'foot_cramp_stretching.png',
    src: '/img/foot_cramp_stretching.png',
    altPl: 'Rozciąganie stóp i palców',
    altEn: 'Foot and toe stretching',
    captionPl: 'Rozciąganie łuku stopy i rozdzieranie palców pozwala błyskawicznie uspokoić bolesne skurcze podeszwy.',
    captionEn: 'Stretching the foot arch and toes provides immediate relief for acute plantar cramps.',
  },
  '/kurcze-a-odwodnienie': {
    key: 'water_hydration_electrolytes.png',
    src: '/img/water_hydration_electrolytes.png',
    altPl: 'Nawodnienie i elektrolity',
    altEn: 'Hydration and electrolytes',
    captionPl: 'Czysta woda w połączeniu z solami mineralnymi przeciwdziała zagęszczaniu krwi i zaburzeniom jonowym.',
    captionEn: 'Pure water combined with mineral salts prevents blood hypertonicity and ionic imbalance.',
  },
  '/pierwsza-pomoc': {
    key: 'foot_cramp_stretching.png',
    src: '/img/foot_cramp_stretching.png',
    altPl: 'Natychmiastowe rozciąganie mięśnia',
    altEn: 'Immediate muscle stretching',
    captionPl: 'Pierwszym krokiem w ostrej fazie jest bezwzględne, wyważone rozciągnięcie przykurczonej grupy mięśniowej.',
    captionEn: 'The first critical step in an acute cramp is measured stretching of the contracted muscle group.',
  },
};

export function getPagePhoto(path: string): PagePhotoConfig | null {
  return pagePhotosMap[path] ?? null;
}
