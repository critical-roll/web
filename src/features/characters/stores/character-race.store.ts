import { action, makeObservable, observable } from 'mobx';
import { CharacterRace as CharacterRaceEnum } from '../../stats/models';

export class CharacterRace {
  @observable
  public value: CharacterRaceEnum | '' = '';

  constructor() {
    makeObservable(this);
  }

  @action
  public setValue(value: CharacterRaceEnum): void {
    this.value = value;
  }
}
