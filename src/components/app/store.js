import { Inject } from 'ng2now'

@Inject('$http')
export default class Store {

    constructor(http) {
        this.http = http
        console.log('@Store: http: ', http)
    }

    config = {
        version: require('../../../package.json').version,
        logoutUrl: '/logout'
    }

    user = {
        userId: 'KLM00031',
        roles: {
            USER: true,
            ADMIN: true
        }
    }
}
