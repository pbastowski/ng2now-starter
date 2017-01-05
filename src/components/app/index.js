import {Component} from 'ng2now'

import './styles.scss'

import '../nav-bar'
import '../footer'
import '../home'
import '../feature1'

import '../../common/hello-pipe'

import Store from './store'

@Component({
    selector: 'app',
    template: require('./template.pug'),
    providers: [ Store, '$http' ],
    stateConfig: { otherwise: '/home', html5Mode: true, requireBase: false }
})

export default class App {

    constructor(store, http) {
        this.http = http
        angular.extend(this, store)

        this.getData()
    }

    async getData() {
        // Pull the user info from /api/user
        try {
            let result = await this.http.get('https://jsonplaceholder.typicode.com/users/1')
            // console.log(result.data)
        } catch(er) {
            console.log('>>>>>>', er)
            throw new TypeError('my own error')
        }
        // do more stuff
    }

}
