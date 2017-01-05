import {Component} from 'ng2now'
import './styles.scss'

@Component({
    selector: 'app-nav-bar',
    template: require('./template.pug'),
    inputs: ['config', 'user']
})

export default class {
    showMenu = false

    $onInit() {
        // console.log('@nav-bar: constructor:', this.config, this.user)
    }
}

