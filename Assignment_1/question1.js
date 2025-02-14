const flattenArray = (arr) => {
    return arr.reduce((resultant, item) => {
      return resultant.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
  };
  
  
  const arr = [[1, [2, [3]]], 4, [5, [6, [7]]]];
  console.log(flattenArray(arr).join(', '));
  