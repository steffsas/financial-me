import store from '@/store/index'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, dynamic: true, store, name: 'Test'})
class Test extends VuexModule {
  
  wheels = 2

  @Mutation
  addWheel(n: number): void {
      this.wheels = this.wheels + n
  }

  get axles(): number {
    return this.wheels
  }

  @Action
  async fetchNewWheels() {
    this.context.commit('addWheel', 2)
  }

}

export default Test
