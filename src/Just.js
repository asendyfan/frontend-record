class Just extends Maybe {
    constructor(value) {
        super()
        this.value = value
    }
    get value() {
        return this.value
    }
    map(f) {
        return of(f(this.value))
    }
    getOrElse() {
        return this.value
    }
    filter(f) {
        Maybe.fromNullable(f(this.value) ? this.value : null)
    }
    get isJust() {
        return true
    }
    toString() {
        return `Maybe.Just(${this.value})`
    }
}