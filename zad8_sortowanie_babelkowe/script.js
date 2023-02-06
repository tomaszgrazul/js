let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

sortBombel = (arr) => {
    for(j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                a = arr[i];
                b = arr[i+1];
                arr[i+1] = a;
                arr[i] = b;
            }
        }
    } 
    return arr;  
}
console.log(sortBombel(array));


