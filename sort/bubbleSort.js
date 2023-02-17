function Sort(arr) {
    this.arr = arr

    //交换函数
    Sort.prototype.swap = function (m, n) {
        let temp = this.arr[n];
        this.arr[n] = this.arr[m]
        this.arr[m] = temp
    }

    //冒泡排序 时间负责度为O(N^2)
    Sort.prototype.bubbleSort = function () {
        for (let j = this.arr.length - 1; j >= 0; j--) {
            for (let i = 0; i < this.arr.length - 1; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    this.swap(i, i + 1)
                }
            }
        }
        return this.arr
    }

    //选择排序 时间负责度为O(N^2)
    Sort.prototype.SelectSort = function () {
        let length = this.arr.length;
        for (let i = 0; i < length - 1; i++) {
            let min = i
            for (let j = min + 1; j < length; j++) {
                if (this.arr[j] <= this.arr[min]) {
                    min = j
                }
            }
            this.swap(i, min)
        }
        return this.arr
    }
}

let sort = new Sort([3, 2, 1, 5, 4, 6]);

console.log(sort.SelectSort())