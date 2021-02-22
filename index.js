// https://juejin.cn/post/6844903743121522701
import ttttest from './awaitAndAsync'
window.onload = (args1 = '没有') => {
  const box = document.getElementById('test')
  
  async function ttttest2() {
    const testRes = await ttttest()
  }
  if (box) {
    const res = [1,2,3].includes(2)
    box.innerHTML =`asdfs${res.toString()}`
  }else {
    console.warn('没有拿到元素q')
  }
}