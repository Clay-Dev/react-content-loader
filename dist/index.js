(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Wrap', './stylized/FacebookStyle', './stylized/InstagramStyle', './stylized/CodeStyle', './stylized/ListStyle', './stylized/BulletListStyle', './custom/Rect', './custom/Circle'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Wrap'), require('./stylized/FacebookStyle'), require('./stylized/InstagramStyle'), require('./stylized/CodeStyle'), require('./stylized/ListStyle'), require('./stylized/BulletListStyle'), require('./custom/Rect'), require('./custom/Circle'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Wrap, global.FacebookStyle, global.InstagramStyle, global.CodeStyle, global.ListStyle, global.BulletListStyle, global.Rect, global.Circle);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _Wrap, _FacebookStyle, _InstagramStyle, _CodeStyle, _ListStyle, _BulletListStyle, _Rect, _Circle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Circle = exports.Rect = undefined;

  var React = _interopRequireWildcard(_react);

  var _Wrap2 = _interopRequireDefault(_Wrap);

  var _FacebookStyle2 = _interopRequireDefault(_FacebookStyle);

  var _InstagramStyle2 = _interopRequireDefault(_InstagramStyle);

  var _CodeStyle2 = _interopRequireDefault(_CodeStyle);

  var _ListStyle2 = _interopRequireDefault(_ListStyle);

  var _BulletListStyle2 = _interopRequireDefault(_BulletListStyle);

  var _Rect2 = _interopRequireDefault(_Rect);

  var _Circle2 = _interopRequireDefault(_Circle);

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

  // Custom
  var ContentLoader = function ContentLoader(props) {
    if (props.children) {
      return React.createElement(
        _Wrap2.default,
        props,
        props.children
      );
    }

    switch (props.type.toLowerCase()) {
      case 'instagram':
        return React.createElement(_InstagramStyle2.default, props);

      case 'code':
        return React.createElement(_CodeStyle2.default, props);

      case 'list':
        return React.createElement(_ListStyle2.default, props);

      case 'bullet-list':
        return React.createElement(_BulletListStyle2.default, props);

      default:
      case 'facebook':
        return React.createElement(_FacebookStyle2.default, props);
    }
  };
  // Stylized

  ContentLoader.defaultProps = {
    type: 'facebook',
    speed: 2,
    width: 400,
    height: 130,
    primaryColor: '#f0f0f0',
    secondaryColor: '#e0e0e0',
    preserveAspectRatio: 'xMidYMid meet',
    className: ''
  };

  exports.default = ContentLoader;
  exports.Rect = _Rect2.default;
  exports.Circle = _Circle2.default;
});