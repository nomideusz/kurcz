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
    key: 'neuromuscular_junction.png',
    src: '/img/neuromuscular_junction.png',
    altPl: 'Anatomia złącza nerwowo-mięśniowego i fizjologia skurczu włókien',
    altEn: 'Neuromuscular junction anatomy and muscle fiber contraction physiology',
    captionPl: 'Impuls nerwowy i wymiana jonów wapnia oraz magnezu decydują o prawidłowym napięciu i rozkurczu włókien mięśniowych.',
    captionEn: 'Nerve impulses and calcium-magnesium ion exchange regulate the physiological tension and relaxation of muscle fibers.',
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
    key: 'calf_muscle_anatomy.png',
    src: '/img/calf_muscle_anatomy.png',
    altPl: 'Budowa anatomiczna mięśnia brzuchatego i płaszczkowatego łydki',
    altEn: 'Anatomical structure of gastrocnemius and soleus calf muscles',
    captionPl: 'Mięsień brzuchaty łydki i ścięgno Achillesa są szczególnie narażone na przeciążenia i nagłe skurcze spoczynkowe.',
    captionEn: 'The gastrocnemius muscle and Achilles tendon are particularly prone to overload and sudden nocturnal cramps.',
  },
  '/kurcz-vs-skurcz': {
    key: 'calf_muscle_anatomy.png',
    src: '/img/calf_muscle_anatomy.png',
    altPl: 'Różnice anatomiczne i fizjologiczne między kurczem a skurczem',
    altEn: 'Anatomical and physiological distinctions between cramps and spasms',
    captionPl: 'Bolesny kurcz dotyczy najczęściej mięśni szkieletowych nóg, podczas gdy fizjologiczny skurcz jest stałym elementem motoryki.',
    captionEn: 'A painful cramp typically strikes skeletal leg muscles, while physiological contractions are a routine part of muscle function.',
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
    key: 'neuromuscular_junction.png',
    src: '/img/neuromuscular_junction.png',
    altPl: 'Rola jonów sodu, potasu, wapnia i magnezu w złączu nerwowo-mięśniowym',
    altEn: 'Role of sodium, potassium, calcium, and magnesium ions in neuromuscular signaling',
    captionPl: 'Równowaga elektrolitowa warunkuje prawidłową depolaryzację błony komórkowej i zapobiega nadpobudliwości mięśniowej.',
    captionEn: 'Electrolyte balance governs membrane potential and protects against neuromuscular hyper-excitability.',
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
    key: 'first_aid_calf_stretch.png',
    src: '/img/first_aid_calf_stretch.png',
    altPl: 'Prawidłowe rozciąganie łydki przy ścianie jako pierwsza pomoc przy kurczu',
    altEn: 'Proper wall calf stretch as first aid for acute muscle cramp',
    captionPl: 'Powolne, kontrolowane rozciąganie mięśnia brzuchatego i ścięgna Achillesa natychmiast przerywa bolesny skurcz.',
    captionEn: 'Slow, controlled stretching of the gastrocnemius muscle and Achilles tendon rapidly relieves acute cramp tension.',
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
    altPl: 'Terapia wibroakustyczna falami dźwiękowymi w gabinecie fizjoterapii',
    altEn: 'Vibroacoustic soundwave therapy in physiotherapy clinic',
    captionPl: 'Niskie częstotliwości akustyczne i delikatne fale wibracyjne stymulują mikrokrążenie oraz rozluźniają powięź.',
    captionEn: 'Low acoustic frequencies and gentle vibration waves stimulate microcirculation and relax deep myofascial tissue.',
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
    key: 'foot_plantar_anatomy.png',
    src: '/img/foot_plantar_anatomy.png',
    altPl: 'Anatomia mięśni podeszwowych stopy i rozcięgna',
    altEn: 'Plantar foot anatomy and intrinsic flexor muscles',
    captionPl: 'Struktury powięziowe i mięśnie krótkie podeszwy reagują silnym skurczem na odwodnienie i zmęczenie chodu.',
    captionEn: 'Fascial structures and intrinsic plantar muscles react with acute contraction to fatigue and dehydration.',
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
    key: 'first_aid_calf_stretch.png',
    src: '/img/first_aid_calf_stretch.png',
    altPl: 'Natychmiastowe rozciąganie mięśnia przy kurczu',
    altEn: 'Immediate muscle stretching for acute cramp',
    captionPl: 'Pierwszym krokiem w ostrej fazie jest bezwzględne, wyważone rozciągnięcie przykurczonej grupy mięśniowej.',
    captionEn: 'The first critical step in an acute cramp is measured stretching of the contracted muscle group.',
  },
};

export function getPagePhoto(path: string): PagePhotoConfig | null {
  return pagePhotosMap[path] ?? null;
}
