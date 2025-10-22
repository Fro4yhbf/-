
export interface Drug {
  name: string;
  group: string;
  simpleGroup: string;
  mechanism: string;
  simpleMechanism: string;
  effects: string[];
  pharmacokinetics?: string;
  indications: string[];
  sideEffects: string[];
  contraindications: string[];
  dosage: string[];
  rp?: string[];
}

export interface DrugCategory {
  name: string;
  description: string;
  drugs: Drug[];
}
