export type SchoolLocalJsonId =
  | 'abydos'
  | 'gehenna'
  | 'trinity'
  | 'millennium'
  | 'shanhaijing'
  | 'hyakkiyako'
  | 'red_winter'
  | 'valkyrie'
  | 'srt'
  | 'arius'

export interface SchoolLocalJson {
  abydos: TranslationTextLocalJson
  gehenna: TranslationTextLocalJson
  trinity: TranslationTextLocalJson
  millennium: TranslationTextLocalJson
  shanhaijing: TranslationTextLocalJson
  hyakkiyako: TranslationTextLocalJson
  red_winter: TranslationTextLocalJson
  valkyrie: TranslationTextLocalJson
  srt: TranslationTextLocalJson
  arius: TranslationTextLocalJson
}

export type ClubLocalJsonId =
  | 'countermeasures_council'
  | 'school_lunch_club'
  | 'gourmet_research_society'
  | 'problem_solver_68'
  | 'disciplinary_committee'
  | 'makeup_work_club'
  | 'remedial_knights'
  | 'library_committee'
  | 'justice_task_force'
  | 'after_school_sweets_club'
  | 'vigilante_crew'
  | 'seminar'
  | 'cleaning_and_clearing'
  | 'super_phenomenon_task_force'
  | 'veritas'
  | 'engineering_club'
  | 'athletics_training_club'
  | 'game_development_department'
  | 'plum_blossom_garden'
  | 'eastern_alchemy_society'
  | 'festival_operations_department'
  | 'inner_discipline_club'
  | 'ninjutsu_research_department'
  | 'yin_yang_club'
  | 'special_class_no.227'
  | 'red_winter_secretariat'
  | 'gematria'
  | 'angel_24'
  | "shitim's_box"
  | 'kaiser_pmc'
  | 'sibaseki_ramen'
  | 'hyakkiyako_commercial_district'
  | 'prime_student_council'
  | 'masked_swimsuit_group'
  | 'momo_friends'
  | 'decagrammaton'
  | 'mimesis'
  | 'communio_sanctorum'
  | 'helmet_dan'
  | 'city_chimpira'
  | 'sudama_ichiza'
  | 'kaitenger'
  | 'community_safety_bureau'
  | 'sisterhood'
  | 'the_library_of_lore'
  | 'citizen'
  | 'tea_party'
  | 'onsen_development_club'
  | 'construction_department'
  | 'emergency_medicine_club'
  | 'rabbit_platoon'
  | 'pandemonium_society'
  | 'arius_squad'
  | 'public_safety_bureau'

export interface ClubLocalJson {
  countermeasures_council: TranslationTextLocalJson
  school_lunch_club: TranslationTextLocalJson
  gourmet_research_society: TranslationTextLocalJson
  problem_solver_68: TranslationTextLocalJson
  disciplinary_committee: TranslationTextLocalJson
  makeup_work_club: TranslationTextLocalJson
  remedial_knights: TranslationTextLocalJson
  library_committee: TranslationTextLocalJson
  justice_task_force: TranslationTextLocalJson
  after_school_sweets_club: TranslationTextLocalJson
  vigilante_crew: TranslationTextLocalJson
  seminar: TranslationTextLocalJson
  cleaning_and_clearing: TranslationTextLocalJson
  super_phenomenon_task_force: TranslationTextLocalJson
  veritas: TranslationTextLocalJson
  engineering_club: TranslationTextLocalJson
  athletics_training_club: TranslationTextLocalJson
  game_development_department: TranslationTextLocalJson
  plum_blossom_garden: TranslationTextLocalJson
  eastern_alchemy_society: TranslationTextLocalJson
  festival_operations_department: TranslationTextLocalJson
  inner_discipline_club: TranslationTextLocalJson
  ninjutsu_research_department: TranslationTextLocalJson
  yin_yang_club: TranslationTextLocalJson
  'special_class_no.227': TranslationTextLocalJson
  red_winter_secretariat: TranslationTextLocalJson
  gematria: TranslationTextLocalJson
  angel_24: TranslationTextLocalJson
  "shitim's_box": TranslationTextLocalJson
  kaiser_pmc: TranslationTextLocalJson
  sibaseki_ramen: TranslationTextLocalJson
  hyakkiyako_commercial_district: TranslationTextLocalJson
  prime_student_council: TranslationTextLocalJson
  masked_swimsuit_group: TranslationTextLocalJson
  momo_friends: TranslationTextLocalJson
  decagrammaton: TranslationTextLocalJson
  mimesis: TranslationTextLocalJson
  communio_sanctorum: TranslationTextLocalJson
  helmet_dan: TranslationTextLocalJson
  city_chimpira: TranslationTextLocalJson
  sudama_ichiza: TranslationTextLocalJson
  kaitenger: TranslationTextLocalJson
  community_safety_bureau: TranslationTextLocalJson
  sisterhood: TranslationTextLocalJson
  the_library_of_lore: TranslationTextLocalJson
  citizen: TranslationTextLocalJson
  tea_party: TranslationTextLocalJson
  onsen_development_club: TranslationTextLocalJson
  construction_department: TranslationTextLocalJson
  emergency_medicine_club: TranslationTextLocalJson
  rabbit_platoon: TranslationTextLocalJson
  pandemonium_society: TranslationTextLocalJson
  arius_squad: TranslationTextLocalJson
  public_safety_bureau: TranslationTextLocalJson
}

export interface TranslationTextLocalJson {
  ja: string | null | undefined
  en: string | null | undefined
  ko: string | null | undefined
  'zh-hant': string | null | undefined
  'zh-hans': string | null | undefined
}

export interface CharacterLocalJson {
  name: FullNameLocalJson
  school: SchoolLocalJsonId
  club?: ClubLocalJsonId[] | null
  id: string
  img?: string[] | null
}

export interface FullNameLocalJson {
  first_name: TranslationTextLocalJson
  last_name: TranslationTextLocalJson
}
