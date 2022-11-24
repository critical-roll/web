import { action, makeObservable, observable } from 'mobx';
import { CharacterAlignment } from '../../stats/models';

// Character Name
// Age
// Gender
// Height
// Weight
// Hair Color
// Eye Color
// Skin Color
// Faith

export class CharacterDetails {
  @observable
  public name = '';

  @observable
  public alignment: CharacterAlignment | '' = '';

  constructor() {
    makeObservable(this);
  }

  @action
  public setName(name: string): void {
    this.name = name;
  }

  @action
  public setAlignment(alignment: CharacterAlignment): void {
    this.alignment = alignment;
  }
}
