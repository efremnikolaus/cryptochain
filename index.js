class Block {
    constructor(data, hash, lashHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

const fooBlock = new Block('foo-data', 'foo-hash', 'foo-lastHash');
console.log(fooBlock);