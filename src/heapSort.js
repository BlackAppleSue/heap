export class heapSort {
    constructor(list, sortFunction) {
        this['list'] = list;
        this['sortFunction'] = sortFunction;
        this['OFFSET'] = 1;
    }
    sort() {
        let list = this['list'];
        let listLength = list.length;

        let sortFunction = this['sortFunction'];
        for (let elementIndex = 1; elementIndex < listLength + 1; elementIndex++) {
            this.moveUP(list, elementIndex, sortFunction)
        }
    }
    getResult() {
        let list = this['list'];
        let listLength = list.length;
        let result = [];
        let OFFSET = this['OFFSET'];
        while (listLength > 0) {
            this.swap(list, listLength, 1)
            result.push(list.pop())
            this.sort()
            listLength = list.length
        }
        return result;
    }
    moveUP(list, elementIndex, sortFunction) {
        let childIndex = elementIndex;
        let parentIndex = childIndex >> 1;

        while (this.canGoup(list, childIndex, parentIndex, sortFunction)) {
            this.swap(list, parentIndex, childIndex)
            childIndex = parentIndex;
            parentIndex = childIndex >> 1;
        }
    }
    canGoup(list, childIndex, parentIndex, sortFunction) {
        let OFFSET = this['OFFSET'];
        return childIndex > OFFSET && sortFunction(
            list[parentIndex - OFFSET], list[childIndex - OFFSET]) < 0;
    }
    swap(list, parentIndex, childIndex) {
        let OFFSET = this['OFFSET'];
        let element = list[parentIndex - OFFSET];
        list[parentIndex - OFFSET] = list[childIndex - OFFSET];
        list[childIndex - OFFSET] = element;
    }
}