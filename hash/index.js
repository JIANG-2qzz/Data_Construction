function HashTable() {
    this.storage = [];
    this.count = 0 //当前存放的个数
    this.limit = 7 //当前数组的长度

    HashTable.prototype.hashFunc = function (str, size) {
        let hashCode = 0;

        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        let index = hashCode % size;
        return index
    }

    //插入和修改
    HashTable.prototype.put = function (key, value) {
        let index = this.hashFunc(key, this.limit);
        // console.log(index)
        let bucket = this.storage[index];

        if (!bucket) {
            bucket = [];
            this.storage[index] = bucket
        }
        // console.log(bucket)
        //判断是否为修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                tuple[1] = value
                return
            }
        }

        //添加数据
        bucket.push([key, value])
        this.count++

        //判断是否需要扩容
        if (this.count > this, this.limit * 0.75) {
            let newSize = this.limit * 2;
            let newPrime = this.getPrime(newSize)
            this.resize(newPrime)
        }
    }

    //获取
    /**
     思路:
     1.根据key获取对应的index
     2.根据index获取对应的bucket
     3.判断bucket是否为null如果为null,直接返回null
     4.线性查找bucket中每一个key是否等于传入的key*如果等于,那么直接返回对应的value
     5.遍历玩后,依然没有找到对应的key直接return null即可
     */
    HashTable.prototype.get = function (key) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];

        if (bucket === null) return null

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) return tuple[1]
        }

        return null
    }

    //删除
    /**
     * 思路:
     * 1.根据key获取对应的index
     * 2.根据index获取bucket
     * 3.判断bucket是否存在,如果不存在,那么直接返回null
     * 4.线性查找bucket,寻找对应的数据,并目删除
     * 5.依然没有找到,那么返回null 
    */
    HashTable.prototype.remove = function (key) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];

        if (bucket === null) return null

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                bucket.splice(i, 1)
                this.count--

                //缩小容量
                if (this.limit > 7 && this.count < this.limit * 0.75) {
                    let newSize = Math.floor(this.limit / 2);
                    let newPrime = this.getPrime(newSize)
                    this.resize(newPrime)
                }
                return tuple[1]
            }
        }

        return null
    }

    //hash表的扩容
    HashTable.prototype.resize = function (newlimit) {
        let oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newlimit;
        for (let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i]
            if (!bucket) continue
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j];
                this.put(tuple[0], tuple[1])
            }
        }
    }

    HashTable.prototype.isPrime = function (num) {
        let temp = parseInt(Math.sqrt(num));
        for (let i = 2; i <= temp; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    
    HashTable.prototype.getPrime = function (newSize) {
        while (!this.isPrime(newSize)) {
            newSize++
        }
        return newSize
    }
}

// //判断是否为质数
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

/**
 * 对于每个数n，其实并不需要从2判断到n-1
    一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于sqrt(n)，一个大于等于sqrt(n)
    比如16可以被分别.那么是2*8,2小于sgrt(16),也就是4,8大于4.而4*4都是等于sqrt(n) 
*/
// function isPrime2(num) {
//     let temp = parseInt(Math.sqrt(num));
//     for (let i = 2; i <= temp; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }