
  (function(modules) {
    function require(id) {
      const [fn, idMapping] = modules[id];
      function childRequire(filename) {
        return require(idMapping[filename]);
      }
      const newModule = {exports: {}};
      fn(childRequire, newModule, newModule.exports);
      return newModule.exports
    }
    require(0);
  })({0:[
            function(require,module,exports){"use strict";

var _module = require("./module2.js");

var _module2 = require("./module1.js");

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = (0, _module3.default)();
console.log();
console.log(text);

console.log("welcome to npck, I'm", _module.npck);
console.log("\nif you love npck and learnt any thing, please give me a star");
console.log("https://github.com/Zilean/npck");
console.log();},
            {"./module2.js":1,"./module1.js":2},
        ],1:[
            function(require,module,exports){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var npck = exports.npck = 'npck';},
            {},
        ],2:[
            function(require,module,exports){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = require("./module2.js");

exports.default = function () {
  return "hello " + _module.npck + "!";
};},
            {"./module2.js":3},
        ],3:[
            function(require,module,exports){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var npck = exports.npck = 'npck';},
            {},
        ],});