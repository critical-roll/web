import { Stats } from '@features/stats/models';

export interface CharacterRace {
  key: string;
  name: string;
  description: string;
  bonus: Record<Stats, number>;
  age: {
    description: string;
    maxValue: number;
  };
  alignment: string;
  speed: number;
  // subrace?: Subrace[];
  // size
  // languages
  // subrace
}
