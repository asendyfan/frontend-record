import Either from './Either'
export default class Left extends Either {
    map() {
        return this
    }
    get value() {
        throw new TypeError("can't extract the value of a Left(a). ")
    }
    getOrElse(other) {
        return other
    }
    orElse(f) {
        return f(this.value)
    }
    chain(f) {
        return this
    }
    getOrElseThrow(a) {
        throw new Error(a)
    }
    filter(f) {
        return this
    }
    toString() {
        return `Either.Left(${this.value})`
    }
}