function LinkList() {
    this.head = null;
    this.length = 0;
    function Node(data, next) {
        this.data = data;
        this.next = null;
    }
    //
    LinkList.prototype.append = function (data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
    }

    LinkList.prototype.toString = function () {
        let current = this.head;
        let listString = "";
        while (current) {
            listString += current.data;
            current = current.next;
        }
        return listString
    }

    LinkList.prototype.insert = function (position, data) {
        let newNode = new Node(data);
        let current = this.head;
        if (position < 0 || position > this.length) return false
        if (position === 0) {
            this.append(data)
            return true
        }

        if (position > 0) {
            for (let i = 0; i < position; i++) {
                if (current.next) {
                    current = current.next
                } else {
                    console.log('position 大于链表长度')
                    return false
                }
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++
    }

    LinkList.prototype.get = function (position) {
        let current = this.head;
        if (position < 0 || position > this.length) return null
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current.data
    }

    LinkList.prototype.indexOf = function (data) {
        let current = this.head;
        let index = 0;
        while (index < this.length) {
            if (current.data === data) return index
            current = current.next
            index++
        }
        return -1
    }

    LinkList.prototype.update = function (position, newDate) {
        let current = this.head;
        if (position < 0 || position > this.length) return null
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        current.data = newDate
    }

    LinkList.prototype.removeAt = function (position) {
        let current = this.head;
        let previous = null
        if (position < 0 || position > this.length) return null
        if (position === 0) {
            this.head = this.head.next
            return
        }
        for (let i = 0; i < position; i++) {
            previous = current
            current = current.next
        }
        previous.next = current.next
        return current.data
    }

    LinkList.prototype.remove = function(data){
        let position = this.indexOf(data)
        return this.removeAt(position)
    }
}