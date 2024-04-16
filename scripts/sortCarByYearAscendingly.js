function sortCarByYearAscendingly(cars) {
  //Quick Sorting ALgorithm
  const result = [...cars];

  const quickSort = (qsArray) => {
    if (qsArray.length <= 1) {
      return qsArray;
    }

    let pivot = qsArray[0].year
    let leftArray = [];
    let rightArray = [];
    for (let i=1; i<qsArray.length; i++) {
      if (qsArray[i].year < pivot) {
        leftArray.push(qsArray[i]);
      } else {
        rightArray.push(qsArray[i]);
      }
    }
    return [...quickSort(leftArray), qsArray[0], ...quickSort(rightArray)];
  }
  const finalResult = quickSort(result);
  console.log(quickSort(finalResult));
  return finalResult;
}