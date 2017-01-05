import { Pipe } from 'ng2now'

// {{ 'Rikkert' | hello:123 }}

@Pipe('hello')
export default class {
    transform(value, args) {
        return 'Hello ' + value + ' ' + args
    }
}