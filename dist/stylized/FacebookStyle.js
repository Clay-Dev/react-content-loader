(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../Wrap'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../Wrap'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Wrap);
    global.FacebookStyle = mod.exports;
  }
})(this, function (exports, _react, _Wrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var React = _interopRequireWildcard(_react);

  var _Wrap2 = _interopRequireDefault(_Wrap);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var FacebookStyle = function FacebookStyle(props) {
    return React.createElement(
      _Wrap2.default,
      props,
      React.createElement('rect', { x: '70', y: '15', rx: '4', ry: '4', width: '117', height: '6.4' }),
      React.createElement('rect', { x: '70', y: '35', rx: '3', ry: '3', width: '85', height: '6.4' }),
      React.createElement('rect', { x: '0', y: '80', rx: '3', ry: '3', width: '350', height: '6.4' }),
      React.createElement('rect', { x: '0', y: '100', rx: '3', ry: '3', width: '380', height: '6.4' }),
      React.createElement('rect', { x: '0', y: '120', rx: '3', ry: '3', width: '201', height: '6.4' }),
      React.createElement('circle', { cx: '30', cy: '30', r: '30' })
    );
  };

  exports.default = FacebookStyle;
});