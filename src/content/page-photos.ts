export interface PagePhotoConfig {
  key: string;
  src: string;
  altPl: string;
  altEn: string;
  captionPl: string;
  captionEn: string;
}

export const pagePhotosMap: Record<string, PagePhotoConfig> = {
  '/kurcze-miesniowe': {
    key: 'runner_stretching_calf.png',
    src: '/img/runner_stretching_calf.png',
    altPl: 'Rozciąganie łydki jako element profilaktyki kurczy mięśniowych',
    altEn: 'Calf stretching as part of muscle cramp prevention',
    captionPl: 'Łagodne rozciąganie i stopniowe zwiększanie aktywności pomagają ograniczać nawroty kurczy.',
    captionEn: 'Gentle stretching and gradual activity progression can help reduce recurring cramps.',
  },
  '/kurcze-nog': {
    key: 'leg_massage_relief.png',
    src: '/img/leg_massage_relief.png',
    altPl: 'Delikatny masaż nogi po bolesnym kurczu mięśnia',
    altEn: 'Gentle leg massage after a painful muscle cramp',
    captionPl: 'Po ustąpieniu ostrego bólu delikatny masaż i rozciąganie mogą przynieść ulgę napiętym mięśniom nogi.',
    captionEn: 'After acute pain subsides, gentle massage and stretching may relieve tight leg muscles.',
  },
  '/kurcze-lydek': {
    key: 'runner_stretching_calf.png',
    src: '/img/runner_stretching_calf.png',
    altPl: 'Rozciąganie łydki po treningu',
    altEn: 'Calf stretching after exercise',
    captionPl: 'Kontrolowane rozciąganie łydki pomaga przywrócić komfort po wysiłku i wspiera profilaktykę kurczy.',
    captionEn: 'Controlled calf stretching supports post-exercise comfort and cramp prevention.',
  },
  '/kurcze-nocne': {
    key: 'foot_cramp_stretching.png',
    src: '/img/foot_cramp_stretching.png',
    altPl: 'Rozciąganie stopy przy nocnym kurczu',
    altEn: 'Foot stretching during a nighttime cramp',
    captionPl: 'Wieczorne rozciąganie stóp i łydek może być pomocnym elementem profilaktyki nocnych kurczy.',
    captionEn: 'Evening foot and calf stretching can be a useful part of preventing night cramps.',
  },
  '/joga-a-kurcze': {
    key: 'runner_stretching_calf.png',
    src: '/img/runner_stretching_calf.png',
    altPl: 'Spokojne rozciąganie łydki inspirowane praktyką jogi',
    altEn: 'Gentle calf stretching inspired by yoga practice',
    captionPl: 'Łagodna, regularna praca nad mobilnością może uzupełniać profilaktykę kurczy mięśniowych.',
    captionEn: 'Gentle, regular mobility work can complement muscle cramp prevention.',
  },
  '/kurcze-ud': {
    key: 'runner_stretching_calf.png',
    src: '/img/runner_stretching_calf.png',
    altPl: 'Rozciąganie mięśni nóg po wysiłku',
    altEn: 'Leg muscle stretching after exercise',
    captionPl: 'Stopniowe rozciąganie napiętych mięśni nóg może ułatwić powrót do komfortu po kurczu uda.',
    captionEn: 'Gradual stretching of tight leg muscles may support comfort after a thigh cramp.',
  },
  '/kurcze-dloni': {
    key: 'leg_massage_relief.png',
    src: '/img/leg_massage_relief.png',
    altPl: 'Delikatny masaż napiętych mięśni jako metoda rozluźnienia',
    altEn: 'Gentle massage for relaxing tight muscles',
    captionPl: 'Delikatny masaż i przerwa od powtarzalnych ruchów mogą przynieść ulgę przy napięciu mięśni dłoni.',
    captionEn: 'Gentle massage and a break from repetitive movements may relieve hand muscle tension.',
  },
  '/elektrolity-a-kurcze': {
    key: 'water_hydration_electrolytes.png',
    src: '/img/water_hydration_electrolytes.png',
    altPl: 'Woda i produkty wspierające uzupełnianie elektrolitów',
    altEn: 'Water and foods that support electrolyte intake',
    captionPl: 'Regularne nawodnienie oraz zbilansowana dieta pomagają utrzymać prawidłową gospodarkę elektrolitową.',
    captionEn: 'Regular hydration and a balanced diet help maintain normal electrolyte balance.',
  },
  '/zespol-niespokojnych-nog-a-kurcze': {
    key: 'foot_cramp_stretching.png',
    src: '/img/foot_cramp_stretching.png',
    altPl: 'Rozciąganie stopy i łydki przy wieczornym dyskomforcie nóg',
    altEn: 'Foot and calf stretching for evening leg discomfort',
    captionPl: 'Podobne objawy nóg mogą mieć różne przyczyny, dlatego nawracający dyskomfort warto omówić z lekarzem.',
    captionEn: 'Similar leg symptoms can have different causes, so recurrent discomfort is worth discussing with a clinician.',
  },
  '/kurcze-u-dzieci': {
    key: 'foot_cramp_stretching.png',
    src: '/img/foot_cramp_stretching.png',
    altPl: 'Łagodne rozciąganie stopy przy kurczu mięśnia',
    altEn: 'Gentle foot stretching for a muscle cramp',
    captionPl: 'U dzieci przy bolesnym kurczu pomocne może być spokojne, delikatne rozciąganie bez forsowania ruchu.',
    captionEn: 'For children with a painful cramp, calm and gentle stretching without forcing movement may help.',
  },
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
    altPl: 'Odpoczynek i uniesienie nóg przy kurczach łydek w ciąży',
    altEn: 'Resting and elevating legs for pregnancy calf cramps',
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
