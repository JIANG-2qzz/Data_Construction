//集合
function MySet() {
    //属性
    this.item = {}
    //方法
    MySet.prototype.add = function (value) {
        if (this.has(value)) return false

        this.item[value] = value
        return true
    }

    MySet.prototype.has = function (key) {
        return this.item.hasOwnProperty(key)
    }

    MySet.prototype.remove = function (value) {
        if (this.has(value)) return false
        delete this.item[value]
        return true
    }

    MySet.prototype.clear = function () {
        this.item = {}
    }

    MySet.prototype.size = function () {
        return Object.keys(this.item).length
    }

    MySet.prototype.values = function () {
        return Object.keys(this.item)
    }

    //集合间操作
    //并集
    MySet.prototype.union = function (otherSet) {
        let newSet = new MySet();
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            newSet.add(values[i])
        }
        let otherSetV = otherSet.values();
        for (let i = 0; i < otherSetV.length; i++) {
            newSet.add(otherSetV[i])
        }
        return newSet
    }
    //交集
    MySet.prototype.intersection = function (otherSet) {
        let newSet = new MySet();
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                newSet.add(values[i])
            }
        }
        return newSet
    }
    //差集
    MySet.prototype.diffrence = function(otherSet){
        let newSet = new MySet();
        var values = this.values()
        for(var i = 0;i < values.length; i++){
          var item = values[i]
          if (!otherSet.has(item)) {
            newSet.add(item)
          }
        }
        return newSet
    }

    //子集
    MySet.prototype.subset = otherSet => {
        let values = this.values()
        for(let i = 0; i < values.length; i++){
          let item = values[i]
          if(!otherSet.has(item)){
            return false
          }
        }
        return true
      }
}

let set = new MySet();
let set2 = new MySet();
set.add('1')
set.add('2')
set.add('3')
set.add('4')
// console.log(set)
set2.add('1')
set2.add('2')
set2.add('3')
set2.add('5')
// console.log(set2)
console.log(set.subset(set2))
// set1.add(1)
// console.log(set1)