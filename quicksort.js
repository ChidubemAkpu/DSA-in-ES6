function quicksort(arr){
    if (arr.length == 1 || arr.length == 0){
        return arr;
    }

    const [left, right, mid] = [[], [], Math.floor(arr.length /2)];
    const pivot = arr[mid];
    const others = arr.slice(0, mid).concat(arr.slice(mid+1));
    for (let i of others){
        if (i <= pivot){
            left.push(i);
            continue;
        }
        right.push(i);
    }

    return quicksort(left).concat([pivot]).concat(quicksort(right));
}
module.exports = {quicksort};
