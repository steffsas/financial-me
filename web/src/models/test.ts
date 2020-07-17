import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store/index'

@Module({namespaced: true, dynamic: true, name: 'Test', store})
export default class Test extends VuexModule {
    public wheels = 0

    @Mutation
    public setWheels(n: number) {
        this.wheels = n
    }
}

