import { Proficiencies, ProficiencyModifierMap } from '@features/proficiencies/models';
import { Character } from './character.model';

class ProficiencyValues {
  proficient: boolean;
  disadvantage: boolean;

  constructor(private readonly id: Proficiencies, private readonly character: Character) {}

  get bonus(): number {
    return this.character.stats[ProficiencyModifierMap[this.id]].modifier;
  }
}

export class CharacterProficiencies {
  [Proficiencies.ACROBATICS]: ProficiencyValues;
  [Proficiencies.ANIMAL_HANDLING]: ProficiencyValues;
  [Proficiencies.ARCANA]: ProficiencyValues;
  [Proficiencies.ATHLETICS]: ProficiencyValues;
  [Proficiencies.DECEPTION]: ProficiencyValues;
  [Proficiencies.HISTORY]: ProficiencyValues;
  [Proficiencies.INSIGHT]: ProficiencyValues;
  [Proficiencies.INTIMIDATION]: ProficiencyValues;
  [Proficiencies.INVESTIGATION]: ProficiencyValues;
  [Proficiencies.MEDICINE]: ProficiencyValues;
  [Proficiencies.NATURE]: ProficiencyValues;
  [Proficiencies.PERCEPTION]: ProficiencyValues;
  [Proficiencies.PERFORMANCE]: ProficiencyValues;
  [Proficiencies.PERSUASION]: ProficiencyValues;
  [Proficiencies.RELIGION]: ProficiencyValues;
  [Proficiencies.SLEIGHT_OF_HAND]: ProficiencyValues;
  [Proficiencies.STEALTH]: ProficiencyValues;
  [Proficiencies.SURVIVAL]: ProficiencyValues;

  constructor(private readonly character: Character) {
    for (const id of Object.values(Proficiencies)) {
      this[id] = new ProficiencyValues(id, character);
    }
  }
}
