import { action, makeObservable, observable } from 'mobx';
import { CharacterBackgroundType } from '../../stats/models';

export class CharacterBackground {
  @observable
  public type: CharacterBackgroundType | '' = '';

  @observable
  public text = '';

  constructor() {
    makeObservable(this);
  }

  @action
  public setType(type: CharacterBackgroundType): void {
    this.type = type;
  }

  @action
  public setText(text: string): void {
    this.text = text;
  }
}
