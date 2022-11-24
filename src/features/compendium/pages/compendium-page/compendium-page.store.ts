import { action, makeObservable, observable } from 'mobx';
import { MobxStore } from '@common/utils';

class CompendiumPageClass {
  @observable
  public category = -1;

  constructor() {
    makeObservable(this);
  }

  @action
  public selectCategory(category: number): void {
    this.category = category;
  }
}

export const CompendiumPageStore = new MobxStore(CompendiumPageClass);
