function DoubleLinkList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(data, next) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    //常见操作
    DoubleLinkList.prototype.append = function (data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++
        return
    }

    DoubleLinkList.prototype.backWardString = function () {
        let str = "";
        let current = this.head
        while (current) {
            str = str + current.data;
            current = current.next;
        }
        return str
    }

    DoubleLinkList.prototype.forwardWardString = function () {
        let str = "";
        let current = this.tail;
        while (current) {
            str = str + current.data;
            current = current.prev;
        }
        return str
    }

    DoubleLinkList.prototype.toString = function () {
        return this.backWardString()
    }

    DoubleLinkList.prototype.insert = function (position, data) {
        if (position < 0 || this.position > this.length) return false
        let newNode = new Node(data)
        if (this.length === 0) {
            this.append(data)
        } else {
            if (position === 0) {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else if (position === this.length) {
                this.append(data)
            } else {
                let current = this.head;
                for (let i = 0; i < this.length - 1; i++) {
                    current = current.next
                }
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode
                current.prev = newNode
            }
        }
        this.length++
        return true
    }

    DoubleLinkList.prototype.get = function (position) {
        if (position < 0 || this.position > this.length) return null
        if (position >= this.length / 2) {
            let current = this.tail;
            for (let i = 0; i < this.length - position - 1; i++) {
                current = current.prev
            }
            return current.data
        } else {
            let current = this.head;
            for (let i = 0; i < position; i++) {
                current = current.next
            }
            return current.data
        }
    }

    DoubleLinkList.prototype.indexOf = function (data) {
        if (position < 0 || this.position > this.length) return false
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next
            index++
        }

        return -1
    }

    DoubleLinkList.prototype.update = function (position, newData) {
        if (position < 0 || this.position > this.length) return false
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        current.data = newData
    }

    DoubleLinkList.prototype.removeAt = function (position) {
        if (position < 0 || this.position > this.length) return false
        if (position === 0) {
            this.head.next.prev = null;
            this.head = this.head.next;
            return
        }
        if (position === this.length - 1) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev
            return
        }
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length--
    }
}