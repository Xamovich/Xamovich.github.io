function create() {
  

    var arr = [];
    for (i = 0; i < 30; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    document.getElementById("randomArr").innerHTML = "<h2>Генерация чисел:</h2><br>" + arr;
    bubbleSort(arr);

}

function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
    document.getElementById("sortArr").innerHTML = "<h2>Сортировка чисел:</h2><br>" + arr;
}