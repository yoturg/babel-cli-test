window.onload = (args1 = '没有') => {
  const box = document.getElementById('test')
  const prom = new Promise((resolve, reject) => {
    resolve()
  })
  if (box) {
    box.innerHTML = 'asdfs'
  }else {
    console.warn('没有拿到元素q')
  }
}