import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
// https://juejin.cn/post/6844903743121522701
import ttttest from './awaitAndAsync';

window.onload = function () {
  var args1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '没有';
  var box = document.getElementById('test');

  function ttttest2() {
    return _ttttest.apply(this, arguments);
  }

  function _ttttest() {
    _ttttest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var testRes;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ttttest();

            case 2:
              testRes = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _ttttest.apply(this, arguments);
  }

  if (box) {
    var res = [1, 2, 3].includes(2);
    box.innerHTML = "asdfs".concat(res.toString());
  } else {
    console.warn('没有拿到元素q');
  }
};
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
export default function ttttest() {
  return _ttttest.apply(this, arguments);
}

function _ttttest() {
  _ttttest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var testRes;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prom();

          case 2:
            testRes = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ttttest.apply(this, arguments);
}

var prom = new Promise(function (resolve, reject) {
  resolve();
});
