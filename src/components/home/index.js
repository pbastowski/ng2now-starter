import {Component, State, Inject} from 'ng2now'
import Store from '../app/store'

@State({
    name: 'home',
    url: '/home',
    resolve: {
        guard: Inject(Store, '$http')((store, http )=>{
            if(!store.user.roles.USER) return Promise.reject('not a hero')
            return 'all good'
        }),
        xxx: () => 123,
        data: () => ({ text: 'testing...' }),
        updateData: Inject(Store)(store =>
            data => {
                console.log('store:', store)
                store.data = angular.copy(data)
                console.log('New data: ', data)
            }
        )
    }
})

@Component({
    selector: 'home-container',
    template: require('./template.pug'),
    inputs: ['xxx', 'data', 'updateData'],
    providers: [Store]
})

export default class {
    _text = ''

    constructor(store) {
        this.store = store
    }

    $onInit() {
        this._data = angular.copy(this.data)
        console.log(this._data)
        //this._text = this.
        console.log('@home: $onInit: xxx: ', this)
    }

    handleSubmit() {
        this.updateData(this._data)
    }
}

