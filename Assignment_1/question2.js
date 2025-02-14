const rotateArray = (arr, k) => {
    arr.unshift(...arr.splice(arr.length - (k % arr.length), k % arr.length));
  };
    
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rotateArray(arr, 4);
  console.log(arr);
