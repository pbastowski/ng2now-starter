import {Component, Inject, State} from 'ng2now'
import Store from '../app/store'

@State({
    name: 'feature1', url: '/feature1',
    resolve: {
        user: Inject(Store)(store => Promise.resolve(store.user)),

        // Check if user is authorised to enter here
        $guard: (user) => {
            if (!user.roles.ADMIN) return Promise.reject('not authorised')
            return true
        },
    },
})

@Component({
    selector: 'feature1-container',
    template: require('./template.pug'),
    inputs: ['user']
})

export default class {

    $onInit() {
        console.log('@feature1: $onInit: data1: ', this.user)
    }

}

