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
    Sort.prototype.selectionSort = function () {
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

    //插入排序 时间负责度为O(N^2)
    Sort.prototype.insertionSort = function () {
        let length = this.arr.length;

        for (let i = 1; i < length; i++) {
            let num = this.arr[i];
            let j = i;
            while (num < this.arr[j - 1] && j > 0) {
                this.arr[j] = this.arr[j - 1];
                j--;
            }
            this.arr[j] = num;
        }
        return this.arr
    }

    //希尔排序 第一个突破O(n2)的排序算法 最坏的情况下时间复杂度为O(N2)通常情况下都要好于O(N2)
    Sort.prototype.shellSort = function () {
        let length = this.arr.length;
        let gap = Math.floor(length / 2);

        while (gap >= 1) {
            for (let i = gap; i < length; i++) {
                let temp = this.arr[i];
                let j = i;
                while (temp < this.arr[j - gap] && j > gap - 1) {
                    this.arr[j] = this.arr[j - gap];
                    j -= gap
                }
                this.arr[j] = temp
            }
            gap = Math.floor(gap / 2)
        }
        return this.arr
    }

    Sort.prototype.median =function(left,right){
        let center = Math.floor((left+right)/2);
         
        if(this.arr[left] > this.arr[center]) {
            this.swap(left,center)
        }
        if(this.arr[center] > this.arr[right]) {
            this.swap(center,right)
        }
        if(this.arr[left] > this.arr[center]) {
            this.swap(left,center)
        }
        this.swap(center,right-1)
        return this.arr[right-1]
    }

    Sort.prototype.quickSort = function(){
        // console.log(this.arr.length , "?????????")
        this.quick(0,this.arr.length-1)
        return this.arr
    }

    Sort.prototype.quick = function(left,right){
        let pivot = this.median(left,right)
        // console.log(pivot , "?????????")
        let L = left;
        let R = right - 2

        while(true){
            while(this.arr[L] < pivot) {
                L++
            }
            while(this.arr[R] > pivot) {
                R--
            }

            if(L < R){
                console.log(L,R)
                this.swap(L,R)
            }else{
                break;
            }
        }
        this.swap(L,right-1);
        // console.log(this.arr)
        this.quick(left,L-1)
        this.quick(L+1,right)
    }

}
let sort = new Sort([3, 2, 1, 5, 4, 6, 12]);
sort.quickSort()
console.log(sort)
