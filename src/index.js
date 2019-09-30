console.log('Hello!');

function addOne(i) {
  if (!isNaN(i)) {
    return i++;
  } else {
    return 0;
  }
}

addOne(1);
