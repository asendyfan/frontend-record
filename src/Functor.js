class Wrapper {
    constructor(value) {
        this.value = value
    }
    //map::(A->B)->A->B
    map(f) {
        return f(this.value)
    }
    //fmap::(A -> B)Wrapper[A] -> Wrapper[B]
    fmap(f) {
        return new Wrapper(f(this.val))
    }
    toString() {
        return 'Wrapper(' + this.value + ')'
    }
}