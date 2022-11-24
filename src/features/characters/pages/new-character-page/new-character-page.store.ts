import { action, makeObservable, observable } from 'mobx';
import { MobxStore } from '@common/utils';
import { CharacterBackground, CharacterDetails, CharacterRace } from '@features/characters/stores';

const MAX_STEPS = 5;

class NewCharacterPageClass {
  @observable
  public step = 0;

  @observable
  public background = new CharacterBackground();

  @observable
  public details = new CharacterDetails();

  @observable
  public race = new CharacterRace();

  constructor() {
    makeObservable(this);
  }

  @action
  public nextStep(): void {
    if (this.step < MAX_STEPS) {
      this.step = this.step + 1;
    }
  }

  @action
  public previousStep(): void {
    if (this.step > 0) {
      this.step = this.step - 1;
    }
  }

  @action
  public setActiveStep(step: number): void {
    this.step = step;
  }
}

export const NewCharacterPageStore = new MobxStore(NewCharacterPageClass);
