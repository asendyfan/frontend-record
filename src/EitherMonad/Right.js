import Either from './Either'
export default class Right extends Either {
    map(f) {
        return Either.of(f(this.value))
    }
    getOrElse(other) {
        return this.value
    }
    orElse() {
        return this
    }
    chain(f) {
        return f(this.value)
    }
    getOrElseThrow() {
        return this.value
    }
    filter(f) {
        return Either.fromNullable(f(this.value) ? this.value : null)
    }
    toString() {
        return `Either.Right(${this.value})`
    }
}