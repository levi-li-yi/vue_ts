/*使用vuex-module-decorators进行vuex模块化*/
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
//@Module({name: 'Info', namespaced: true, stateFactory: true})
import store from '@/store'
@Module({ dynamic: true, store, name: 'Info' })
export default class Info extends VuexModule {
  public count: number = 2;
  get getCount(): number {
    return this.count
  }

  @Mutation
  private decrement(delta: number): void {
    this.count = delta
  }

  @Action({commit: 'decrement'})
  public async decr(value: number){
    return value
  }
}