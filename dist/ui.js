/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(5);

__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(2);

var common = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modalHtml = '<div class="modal-inner">\n            <span class="modal-close" data-modal-close>&times;</span>\n            <div class="modal-title"></div>\n            <div class="modal-content"></div>\n        </div>';

var defaultSetting = {
    modal: null,

    modalInner: '.modal-inner',
    modalContent: '.modal-content',
    modalTitle: '.modal-title',

    title: null,

    open: '[data-modal-open]',
    close: '[data-modal-close]',

    className: 'modal-visible',
    loadClass: 'vanilla-modal',

    entryType: 'drop',

    onBeforeOpen: null,
    onBeforeClose: null,
    onOpen: null,
    onClose: null
};

var doc = document;

var Modal = function () {
    function Modal(setting) {
        _classCallCheck(this, Modal);

        var _ = this;

        _.isOpen = false;

        _.isListening = false;

        _.settings = common._extends({}, defaultSetting, setting);

        _.dom = _.getDomNodes();

        _.delegateClose = _.delegateClose.bind(_);
        _.delegateOpen = _.delegateOpen.bind(_);

        _.listen();
    }

    _createClass(Modal, [{
        key: 'getDomNodes',
        value: function getDomNodes() {

            var _ = this;

            var _$settings = _.settings,
                modal = _$settings.modal,
                modalInner = _$settings.modalInner,
                modalContent = _$settings.modalContent,
                modalTitle = _$settings.modalTitle;


            var modalNode = void 0;

            if (modal) {

                modalNode = document.querySelector(modal);
            } else {

                var _div = _.createModal();

                modalNode = document.body.appendChild(_div);
            }

            return {
                modal: modalNode,
                modalInner: modalNode.querySelector(modalInner),
                modalContent: modalNode.querySelector(modalContent),
                modalTitle: modalNode.querySelector(modalTitle)
            };
        }
    }, {
        key: 'createModal',
        value: function createModal() {
            var _ = this,
                entryType = _.settings.entryType;


            var _div = doc.createElement('div');

            _div.className = entryType ? 'ui-modal ui-modal-' + entryType : 'ui-modal';
            _div.innerHTML = modalHtml;

            return _div;
        }
    }, {
        key: 'delegateOpen',
        value: function delegateOpen(e) {
            var open = this.settings.open;

            var match = common.matches(e, open);

            if (match) {
                e.preventDefault();
                this.open(match, e);
            }
        }
    }, {
        key: 'open',
        value: function open(element, e) {
            var _ = this,
                modal = _.dom.modal,
                _$settings2 = _.settings,
                onBeforeOpen = _$settings2.onBeforeOpen,
                onOpen = _$settings2.onOpen,
                className = _$settings2.className;


            _.releaseNode();

            _.current = common.getElementContext(element);

            if (typeof onBeforeOpen === 'function') {
                onBeforeOpen.call(_, e);
            }

            _.captureNode(_.current, element);

            common.addClass(modal, className);

            _.isOpen = true;

            if (typeof onOpen === 'function') {
                onOpen.call(_, e);
            }
        }
    }, {
        key: 'releaseNode',
        value: function releaseNode() {
            this.dom.modalContent.innerHTML = '';
        }
    }, {
        key: 'captureNode',
        value: function captureNode(element, triggerElement) {
            var _ = this,
                _dom = this.dom,
                modalContent = _dom.modalContent,
                modalTitle = _dom.modalTitle,
                title = this.settings.title || triggerElement.getAttribute('data-modal-title');


            modalContent.innerHTML = element.innerHTML;

            modalTitle.innerHTML = title ? '<div>' + title + '</div>' : '';
        }
    }, {
        key: 'delegateClose',
        value: function delegateClose(e) {
            var close = this.settings.close;

            if (common.matches(e, close)) {
                e.preventDefault();
                this.close(e);
            }
        }
    }, {
        key: 'close',
        value: function close(e) {
            var _ = this,
                _$settings3 = _.settings,
                onBeforeClose = _$settings3.onBeforeClose,
                className = _$settings3.className;


            if (_.isOpen) {
                _.isOpen = false;

                if (typeof onBeforeClose === 'function') {
                    onBeforeClose.call(_, e);
                }

                common.removeClass(_.dom.modal, className);

                _.closeModal(e);
            }
        }
    }, {
        key: 'closeModal',
        value: function closeModal(e) {
            var _ = this,
                onClose = _.settings.onClose;


            if (typeof onClose === 'function') {
                onClose.call(_, e);
            }
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _ = this,
                modal = _.dom.modal,
                _$settings4 = _.settings,
                open = _$settings4.open,
                close = _$settings4.close;


            if (!_.isListening) {

                if (open) {
                    doc.addEventListener('click', this.delegateOpen, false);
                }

                if (close) {
                    doc.addEventListener('click', this.delegateClose, false);
                }
            }
        }
    }]);

    return Modal;
}();

window.Modal = Modal;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwError = throwError;
exports.find = find;
exports.transitionEndVendorSniff = transitionEndVendorSniff;
exports.isPopulatedArray = isPopulatedArray;
exports.getNode = getNode;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.getElementContext = getElementContext;
exports.applyUserSettings = applyUserSettings;
exports.matches = matches;
exports.delegate = delegate;
exports.getOffset = getOffset;
var _extends = exports._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

function throwError(message) {
    // eslint-disable-next-line no-console
    console.error('VanillaModal: ' + message);
}

function find(arr, callback) {
    return function (key) {
        var filteredArray = arr.filter(callback);
        return filteredArray[0] ? filteredArray[0][key] : undefined;
    };
}

function transitionEndVendorSniff() {
    var el = document.createElement('div');
    var transitions = [{ key: 'transition', value: 'transitionend' }, {
        key: 'OTransition',
        value: 'otransitionend'
    }, { key: 'MozTransition', value: 'transitionend' }, { key: 'WebkitTransition', value: 'webkitTransitionEnd' }];
    return find(transitions, function (_ref) {
        var key = _ref.key;
        return typeof el.style[key] !== 'undefined';
    })('value');
}

function isPopulatedArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length;
}

function getNode(selector, parent) {
    var targetNode = parent || document;
    var node = targetNode.querySelector(selector);
    if (!node) {
        throwError(selector + ' not found in document.');
    }
    return node;
}

function addClass(el, className) {
    if (!(el instanceof HTMLElement)) {
        throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
        return cn !== className;
    }).concat(className).join(' '));
}

function removeClass(el, className) {
    if (!(el instanceof HTMLElement)) {
        throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
        return cn !== className;
    }).join(' '));
}

function getElementContext(e) {
    if (e && typeof e.hash === 'string') {
        return document.querySelector(e.hash);
    } else if (typeof e === 'string') {
        return document.querySelector(e);
    }
    throwError('No selector supplied to open()');
    return null;
}

function applyUserSettings(settings) {
    return _extends({}, defaults, settings, {
        transitionEnd: transitionEndVendorSniff()
    });
}

function matches(e, selector) {
    var d = e.target.document || e.target.ownerDocument;
    if (d) {
        var allMatches = (e.target.document || e.target.ownerDocument).querySelectorAll(selector);
        for (var i = 0; i < allMatches.length; i += 1) {
            var node = e.target;
            while (node && node !== document.body) {
                if (node === allMatches[i]) {
                    return node;
                }
                node = node.parentNode;
            }
        }
    }

    return null;
}

function delegate(element, targetSelector, type, handler) {

    element.addEventListener(type, function (event) {
        var targets = Array.prototype.slice.call(element.querySelectorAll(targetSelector));

        var target = event.target;
        if (targets.indexOf(target) !== -1) {
            return handler.apply(target, arguments);
        }
    }, false);
}

function getOffset(node, offset, noInit) {

    if (!offset) {
        offset = {
            left: 0,
            top: 0
        };
    }

    if (node.nodeType !== 1) {
        return offset;
    }

    var _pos = window.getComputedStyle(node)['position'];

    if (noInit && _pos === 'static') {
        return getOffset(node.parentNode, offset, true);
    }

    offset.left += node.offsetLeft - node.scrollLeft;
    offset.top += node.offsetTop - node.scrollTop;

    if (_pos === 'fixed') {
        return offset;
    }

    return getOffset(node.parentNode, offset, true);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(2);

var common = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var doc = document,
    defaultSetting = {
    trigger: '[data-tooltip-trigger]',
    data: 'data-tip',
    duration: 0.2
};

var Tooltip = function () {
    function Tooltip(option) {
        _classCallCheck(this, Tooltip);

        var _ = this;

        _.settings = common._extends(defaultSetting, option);

        _.trigger = doc.querySelectorAll(_.settings.trigger);

        _.show = _.show.bind(_);
        _.hide = _.hide.bind(_);

        _.listen();
    }

    _createClass(Tooltip, [{
        key: 'createTip',
        value: function createTip(node, e) {

            if (!this.isOpening) {

                var div = doc.createElement('div'),
                    position = common.getOffset(node, {
                    left: 0,
                    top: -20
                });

                div.className = 'ui-tooltip animated fadeIn';
                div.style.left = position.left + 'px';
                div.style.top = position.top + 'px';
                div.innerHTML = 'hello';

                doc.body.appendChild(div);

                this.toolDom = div;

                this.isOpening = true;
            }
        }
    }, {
        key: 'show',
        value: function show(e) {
            console.log('enter', e.target.className);

            this.createTip(e.target, e);
        }
    }, {
        key: 'hide',
        value: function hide(e) {

            var node = this.toolDom;

            common.removeClass(node, 'fadeIn');
            common.addClass(node, 'fadeOut');

            setTimeout(function () {
                node.remove();
            }, this.settings.duration * 1000);

            this.isOpening = false;
        }
    }, {
        key: 'listen',
        value: function listen() {

            var _ = this,
                trigger = _.trigger;

            trigger.forEach(function (item) {
                item.addEventListener('mouseenter', _.show, false);
                item.addEventListener('mouseleave', _.hide, false);
            });
        }
    }]);

    return Tooltip;
}();

window.Tooltip = Tooltip;

/***/ })
/******/ ]);