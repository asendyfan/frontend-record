class Nothing extends Maybe {
    map(f) {
        return this
    }
    get value() {
        throw new TypeError
    }
    getOrElse(other) {
        return other
    }
    filter() {
        return this.value
    }
    get isNothing() {
        return true
    }
    toString() {
        return 'Maybe.Nothing'
    }
}