import 'bootstrap/dist/css/bootstrap-flex.min.css'
import 'angular'
import 'angular-ui-router'
import 'angular-translate'

import { SetModule, bootstrap } from 'ng2now'

// Same syntax as angular.module()
SetModule('app', ['ui.router', 'pascalprecht.translate'])
.config(['$translateProvider', function($translateProvider){

}])

// Bootstrap the AngularJS app
bootstrap(require('./components/app').default)
