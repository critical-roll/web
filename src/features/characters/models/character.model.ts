import { CharacterProficiencies } from './character-proficiency.model';
import { CharacterRace } from './character-race.model';
import { CharacterStats } from './character-stats.model';

export class Character {
  proficiencies: CharacterProficiencies;
  race: CharacterRace;
  stats: CharacterStats;
}
