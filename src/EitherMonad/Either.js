import Left from './Left'
import Right from './Right'
class Either {
    constructor(value) {
        this.value = value
    }
    get value() {
        return this.value
    }
    static left(a) {
        return new Left(a)
    }
    static right(a) {
        return new Right(a)
    }
    static fromNullable(val) {
        return val !== null ? Either.right() : Either.left()
    }
    static of (a) {
        return Either.right(a)
    }
}