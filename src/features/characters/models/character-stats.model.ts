import { Stats } from '@features/stats/models';
import { Character } from './character.model';

class StatsValues {
  baseScore: number;
  AttributeBonus: number;
  miscBonus: number;
  stackingBonus: number;
  otherBonus: number;

  constructor(private readonly id: Stats, private readonly character: Character) {}

  get modifier(): number {
    return this.otherBonus; // TODO Add proficiency bonus based on level
  }

  get racialBonus(): number {
    return this.character.race.bonus[this.id] || 0;
  }

  get equipmentBonus(): number {
    return 0;
  }

  get totalScore(): number {
    return (
      this.AttributeBonus +
      this.baseScore +
      this.modifier +
      this.racialBonus +
      this.equipmentBonus +
      this.stackingBonus +
      this.otherBonus
    );
  }
}

export class CharacterStats {
  public [Stats.CHARISMA]: StatsValues;
  public [Stats.CONSTITUTION]: StatsValues;
  public [Stats.DEXTERITY]: StatsValues;
  public [Stats.INTELLIGENCE]: StatsValues;
  public [Stats.STRENGTH]: StatsValues;
  public [Stats.WISDOM]: StatsValues;

  constructor(private readonly character: Character) {
    for (const id of Object.values(Stats)) {
      this[id] = new StatsValues(id, character);
    }
  }
}
