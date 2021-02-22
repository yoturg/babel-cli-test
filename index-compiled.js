window.onload = function () {
  var args1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '没有';
  var box = document.getElementById('test');
  var prom = new Promise(function (resolve, reject) {
    resolve();
  });

  if (box) {
    box.innerHTML = 'asdfs';
  } else {
    console.warn('没有拿到元素q');
  }
};
