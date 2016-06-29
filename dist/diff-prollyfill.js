(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.diff = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _diffhtml = require('diffhtml');

Object.keys(_diffhtml).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _diffhtml[key];
    }
  });
});
exports.enableProllyfill = enableProllyfill;


/**
 * By calling this function your browser environment is enhanced globally. This
 * project would love to hit the standards track and allow all developers to
 * benefit from the performance gains of DOM diffing.
 */
function enableProllyfill() {
  // Exposes the `html` tagged template helper globally so that developers
  // can trivially craft VDOMs.
  Object.defineProperty(window, 'diffHTML', {
    configurable: true,
    value: _diffhtml.html
  });

  // Exposes the `html` tagged template helper globally so that developers
  // can trivially craft VDOMs.
  Object.defineProperty(window, 'diffUse', {
    configurable: true,
    value: _diffhtml.use
  });

  // Allows a developer to create Virtual Tree Elements.
  Object.defineProperty(document, 'createTreeElement', {
    configurable: true,
    value: function value(nodeName, attributes, childNodes) {
      return (0, _diffhtml.createElement)(nodeName, attributes, childNodes);
    }
  });

  // Allows a developer to create Virtual Tree Attributes.
  Object.defineProperty(document, 'createTreeAttribute', {
    configurable: true,
    value: function value(name, _value) {
      return (0, _diffhtml.createAttribute)(name, _value);
    }
  });

  // Allows a developer to add transition state callbacks.
  Object.defineProperty(document, 'addTransitionState', {
    configurable: true,
    value: function value(state, callback) {
      (0, _diffhtml.addTransitionState)(state, callback);
    }
  });

  // Allows a developer to remove transition state callbacks.
  Object.defineProperty(document, 'removeTransitionState', {
    configurable: true,
    value: function value(state, callback) {
      (0, _diffhtml.removeTransitionState)(state, callback);
    }
  });

  // Exposes the API into the Element, ShadowDOM, and DocumentFragment
  // constructors.
  [typeof Element !== 'undefined' ? Element : undefined, typeof HTMLElement !== 'undefined' ? HTMLElement : undefined, typeof ShadowRoot !== 'undefined' ? ShadowRoot : undefined, typeof DocumentFragment !== 'undefined' ? DocumentFragment : undefined].filter(Boolean).forEach(function (Ctor) {
    Object.defineProperty(Ctor.prototype, 'diffInnerHTML', {
      configurable: true,
      set: function set(newHTML) {
        (0, _diffhtml.innerHTML)(this, newHTML);
      }
    });

    // Allows a developer to set the `outerHTML` of an element.
    Object.defineProperty(Ctor.prototype, 'diffOuterHTML', {
      configurable: true,
      set: function set(newHTML) {
        (0, _diffhtml.outerHTML)(this, newHTML);
      }
    });

    // Allows a developer to diff the current element with a new element.
    Object.defineProperty(Ctor.prototype, 'diffElement', {
      configurable: true,
      value: function value(newElement, options) {
        (0, _diffhtml.element)(this, newElement, options);
      }
    });

    // Releases the retained memory.
    Object.defineProperty(Ctor.prototype, 'diffRelease', {
      configurable: true,
      value: function value() {
        (0, _diffhtml.releaseNode)(this);
      }
    });
  });
}

// Expose all diffHTML properties/methods, making this a direct drop in
// replacement.

},{"diffhtml":2}],2:[function(require,module,exports){
(function (global){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.diff = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createAttribute = exports.createElement = exports.release = exports.html = undefined;

      var _taggedTemplate = _dereq_('./util/tagged-template');

      Object.defineProperty(exports, 'html', {
        enumerable: true,
        get: function get() {
          return _taggedTemplate.html;
        }
      });

      var _release = _dereq_('./node/release');

      Object.defineProperty(exports, 'release', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_release).default;
        }
      });

      var _helpers = _dereq_('./tree/helpers');

      Object.defineProperty(exports, 'createElement', {
        enumerable: true,
        get: function get() {
          return _helpers.createElement;
        }
      });
      Object.defineProperty(exports, 'createAttribute', {
        enumerable: true,
        get: function get() {
          return _helpers.createAttribute;
        }
      });
      exports.outerHTML = outerHTML;
      exports.innerHTML = innerHTML;
      exports.element = element;
      exports.addTransitionState = addTransitionState;
      exports.removeTransitionState = removeTransitionState;
      exports.enableProllyfill = enableProllyfill;

      var _transaction = _dereq_('./node/transaction');

      var _transaction2 = _interopRequireDefault(_transaction);

      var _transitions = _dereq_('./util/transitions');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Used to diff the outerHTML contents of the passed element with the markup
       * contents.  Very useful for applying a global diff on the
       * `document.documentElement`.
       *
       * @param element
       * @param markup=''
       * @param options={}
       */
      function outerHTML(element) {
        var markup = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        options.inner = false;
        (0, _transaction2.default)(element, markup, options);
      }

      /**
       * Used to diff the innerHTML contents of the passed element with the markup
       * contents.  This is useful with libraries like Backbone that render Views
       * into element container.
       *
       * @param element
       * @param markup=''
       * @param options={}
       */
      function innerHTML(element) {
        var markup = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        options.inner = true;
        (0, _transaction2.default)(element, markup, options);
      }

      /**
       * Used to diff two elements.  The `inner` Boolean property can be specified in
       * the options to set innerHTML\outerHTML behavior.  By default it is
       * outerHTML.
       *
       * @param element
       * @param newElement
       * @param options={}
       */
      function element(element, newElement) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        (0, _transaction2.default)(element, newElement, options);
      }

      /**
       * Adds a global transition listener.  With many elements this could be an
       * expensive operation, so try to limit the amount of listeners added if you're
       * concerned about performance.
       *
       * Since the callback triggers with various elements, most of which you
       * probably don't care about, you'll want to filter.  A good way of filtering
       * is to use the DOM `matches` method.  It's fairly well supported
       * (http://caniuse.com/#feat=matchesselector) and may suit many projects.  If
       * you need backwards compatibility, consider using jQuery's `is`.
       *
       * You can do fun, highly specific, filters:
       *
       * addTransitionState('attached', function(element) {
       *   // Fade in the main container after it's added.
       *   if (element.matches('body main.container')) {
       *     $(element).stop(true, true).fadeIn();
       *   }
       * });
       *
       * @param state - String name that matches what's available in the
       * documentation above.
       * @param callback - Function to receive the matching elements.
       */
      function addTransitionState(state, callback) {
        if (!state) {
          throw new Error('Missing transition state name');
        }

        if (!callback) {
          throw new Error('Missing transition state callback');
        }

        // Not a valid state name.
        if (Object.keys(_transitions.states).indexOf(state) === -1) {
          throw new Error('Invalid state name: ' + state);
        }

        _transitions.states[state].push(callback);
      }

      /**
       * Removes a global transition listener.
       *
       * When invoked with no arguments, this method will remove all transition
       * callbacks.  When invoked with the name argument it will remove all
       * transition state callbacks matching the name, and so on for the callback.
       *
       * @param state - String name that matches what's available in the
       * documentation above.
       * @param callback - Function to receive the matching elements.
       */
      function removeTransitionState(state, callback) {
        if (!callback && state) {
          _transitions.states[state].length = 0;
        } else if (state && callback) {
          // Not a valid state name.
          if (Object.keys(_transitions.states).indexOf(state) === -1) {
            throw new Error('Invalid state name ' + state);
          }

          var index = _transitions.states[state].indexOf(callback);
          _transitions.states[state].splice(index, 1);
        } else {
          for (var _state in _transitions.states) {
            _transitions.states[_state].length = 0;
          }
        }
      }

      /**
       * By calling this function your browser environment is enhanced globally. This
       * project would love to hit the standards track and allow all developers to
       * benefit from the performance gains of DOM diffing.
       */
      function enableProllyfill() {
        // Exposes the `html` tagged template helper globally so that developers
        // can trivially craft VDOMs.
        Object.defineProperty(window, 'html', {
          configurable: true,

          value: _taggedTemplate.html
        });

        // Allows a developer to add transition state callbacks.
        Object.defineProperty(document, 'addTransitionState', {
          configurable: true,

          value: function value(state, callback) {
            addTransitionState(state, callback);
          }
        });

        // Allows a developer to remove transition state callbacks.
        Object.defineProperty(document, 'removeTransitionState', {
          configurable: true,

          value: function value(state, callback) {
            removeTransitionState(state, callback);
          }
        });

        // Exposes the API into the Element, ShadowDOM, and DocumentFragment
        // constructors.
        [typeof Element !== 'undefined' ? Element : undefined, typeof HTMLElement !== 'undefined' ? HTMLElement : undefined, typeof ShadowRoot !== 'undefined' ? ShadowRoot : undefined, typeof DocumentFragment !== 'undefined' ? DocumentFragment : undefined].filter(Boolean).forEach(function (Ctor) {
          Object.defineProperty(Ctor.prototype, 'diffInnerHTML', {
            configurable: true,

            set: function set(newHTML) {
              innerHTML(this, newHTML);
            }
          });

          // Allows a developer to set the `outerHTML` of an element.
          Object.defineProperty(Ctor.prototype, 'diffOuterHTML', {
            configurable: true,

            set: function set(newHTML) {
              outerHTML(this, newHTML);
            }
          });

          // Allows a developer to diff the current element with a new element.
          Object.defineProperty(Ctor.prototype, 'diffElement', {
            configurable: true,

            value: function value(newElement, options) {
              element(this, newElement, options);
            }
          });

          // Releases the retained memory.
          Object.defineProperty(Ctor.prototype, 'diffRelease', {
            configurable: true,

            value: function value() {
              releaseNode(this);
            }
          });
        });
      }
    }, { "./node/release": 5, "./node/transaction": 6, "./tree/helpers": 7, "./util/tagged-template": 17, "./util/transitions": 18 }], 2: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getFinalizeCallback;

      var _transaction = _dereq_('../node/transaction');

      var _transaction2 = _interopRequireDefault(_transaction);

      var _cache = _dereq_('../util/cache');

      var _memory = _dereq_('../util/memory');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Pulls the next render object (containing the respective arguments to
       * patchNode) and invokes the next transaction.
       *
       * @param state
       */
      var renderNext = function renderNext(state) {
        var nextRender = state.nextRender;
        state.nextRender = undefined;

        (0, _transaction2.default)(nextRender.node, nextRender.newHTML, nextRender.options);
      };

      /**
       * Returns a callback that finalizes the transaction, setting the isRendering
       * flag to false. This allows us to pick off and invoke the next available
       * transaction to render. This code recyles the unprotected allocated pool
       * objects and triggers a `renderComplete` event.
       *
       * @param {Object} node - A DOM Node that has just had patches applied
       * @param {Object} state - The current state object associated with the Node
       * @return {Function} - Closure that when called completes the transaction
       */
      function getFinalizeCallback(node, state) {
        /**
         * When the render completes, clean up memory, and schedule the next render
         * if necessary.
         */
        return function finalizeTransaction() {
          var isInner = state.options.inner;

          state.previousMarkup = isInner ? node.innerHTML : node.outerHTML;
          state.previousText = node.textContent;

          state.isRendering = false;

          // This is designed to handle use cases where renders are being hammered
          // or when transitions are used with Promises. If this element has a next
          // render state, trigger it first as priority.
          if (state.nextRender) {
            renderNext(state);
          }
          // Otherwise dig into the other states and pick off the first one
          // available.
          else {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = _cache.StateCache.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _state = _step.value;

                  if (_state.nextRender) {
                    renderNext(_state);
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }

          // Clean out all the existing allocations.
          (0, _memory.cleanMemory)();

          // Dispatch an event on the node once rendering has completed.
          node.dispatchEvent(new CustomEvent('renderComplete'));
        };
      }
    }, { "../node/transaction": 6, "../util/cache": 10, "../util/memory": 13 }], 3: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      exports.default = make;

      var _cache = _dereq_('../util/cache');

      var _svg = _dereq_('../util/svg');

      var svg = _interopRequireWildcard(_svg);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      /**
       * Gets a specific type of DOM Node depending on the passed in nodeName.
       *
       * @param nodeName {String} - The nodeName to disambiguate the type
       * @param nodeValue {String} - The nodeValue to set if a Text Node
       * @return {Object} - A DOM Node matching the nodeName
       */
      var createNodeFromName = function createNodeFromName(_ref) {
        var nodeName = _ref.nodeName;
        var nodeValue = _ref.nodeValue;

        // If we're dealing with a Text Node, we need to use the special DOM method,
        // since createElement does not understand the nodeName '#text'.
        // All other nodes can be created through createElement.
        if (nodeName === '#text') {
          return document.createTextNode(nodeValue);
        }
        // If the nodeName matches any of the known SVG element names, mark it as
        // SVG. The reason for doing this over detecting if nested in an <svg>
        // element, is that we do not currently have circular dependencies in the
        // VTree, by avoiding parentNode, so there is no way to crawl up the parents.
        else if (svg.elements.indexOf(nodeName) > -1) {
            return document.createElementNS(svg.namespace, nodeName);
          }
          // If not a Text or SVG Node, then create with the standard method.
          else {
              return document.createElement(nodeName);
            }
      };

      /**
       * Takes in a Virtual Tree Element (VTree) and creates a DOM Node from it.
       * Sets the node into the Node cache. If this VTree already has an
       * associated node, it will reuse that.
       *
       * @param {Object} - A Virtual Tree Element or VTree-like element
       * @return {Object} - A DOM Node matching the vTree
       */
      function make(vTree) {
        // If no Virtual Tree Element was specified, return null.
        if (!vTree) {
          return null;
        }

        // If the DOM Node was already created, reuse the existing node.
        if (_cache.NodeCache.has(vTree)) {
          return _cache.NodeCache.get(vTree);
        }

        var node = createNodeFromName(vTree);

        // Copy all the attributes from the vTree into the newly created DOM
        // Node.
        for (var i = 0; i < (vTree.attributes || []).length; i++) {
          var attr = vTree.attributes[i];
          var isObject = _typeof(attr.value) === 'object';
          var isFunction = typeof attr.value === 'function';

          // If not a dynamic type, set as an attribute, since it's a valid
          // attribute value.
          if (attr.name && !isObject && !isFunction) {
            node.setAttribute(attr.name, attr.value);
          } else if (attr.name && typeof attr.value !== 'string') {
            // Necessary to track the attribute/prop existence.
            node.setAttribute(attr.name, '');

            // Since this is a dynamic value it gets set as a property.
            node[attr.name] = attr.value;
          }
        }

        // Append all the children into the node, making sure to run them
        // through this `make` function as well.
        for (var _i = 0; _i < (vTree.childNodes || []).length; _i++) {
          node.appendChild(make(vTree.childNodes[_i]));
        }

        // Add to the nodes cache.
        _cache.NodeCache.set(vTree, node);

        return node;
      }
    }, { "../util/cache": 10, "../util/svg": 16 }], 4: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      exports.default = patchNode;

      var _make = _dereq_('./make');

      var _make2 = _interopRequireDefault(_make);

      var _transitions = _dereq_('../util/transitions');

      var _parser = _dereq_('../util/parser');

      var _cache = _dereq_('../util/cache');

      var _memory = _dereq_('../util/memory');

      var _entities = _dereq_('../util/entities');

      var _sync = _dereq_('../tree/sync');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var isElementNode = function isElementNode(node) {
        return node.nodeType === 1;
      };
      var filter = Array.prototype.filter;

      /**
       * Looks to see if an element can be replaced. It must have a parentNode to do
       * so. This will trigger an error when the element does not have a parentNode.
       * This typically happens when trying to replace a disconnected DOM Node or the
       * documentElement.
       *
       * @param {String} verb - Verb to replace in the template string
       * @param {Object} oldNode - Old DOM Node to check if able to be replaced
       * @param {Object} patch - Used to clean up vTree references
       */
      var checkForMissingParent = function checkForMissingParent(verb, oldNode, patch) {
        if (!oldNode.parentNode) {
          // Clean up these elements to keep memory consistent.
          (0, _memory.unprotectElement)(patch.old);
          (0, _memory.unprotectElement)(patch.new);

          // Throw an error to stop rendering/inform the developer.
          throw new Error(('\n      Can\'t ' + verb + ' without parent, is this the document root?\n    ').trim());
        }
      };

      // Trigger the attached transition state for this element and all childNodes.
      var attached = function attached(_ref) {
        var vTree = _ref.vTree;
        var fragment = _ref.fragment;
        var parentNode = _ref.parentNode;
        var triggerTransition = _ref.triggerTransition;

        // This element has been attached, so it should definitely be marked as
        // protected.
        (0, _memory.protectElement)(vTree);

        // Create a DOM Node for this Virtual Tree element.
        var node = (0, _make2.default)(vTree);

        // If the element added was a DOM text node or SVG text element, trigger
        // the textChanged transition.
        if (vTree.nodeName === '#text') {
          var promises = (0, _transitions.makePromises)('textChanged', [node], null, vTree.nodeValue);

          node.nodeValue = (0, _entities.decodeEntities)(vTree.nodeValue);

          if (parentNode) {
            var nodeName = parentNode.nodeName.toLowerCase();

            if (_parser.blockText.has(nodeName)) {
              parentNode.nodeValue = (0, _entities.decodeEntities)(vTree.nodeValue);
            }
          }

          triggerTransition('textChanged', promises);
        }

        vTree.attributes.forEach(function (attr) {
          triggerTransition('attributeChanged', (0, _transitions.makePromises)('attributeChanged', [node], attr.name, null, attr.value));
        });

        // Call all `childNodes` attached callbacks as well.
        vTree.childNodes.forEach(function (vTree) {
          return attached({
            vTree: vTree, parentNode: node, triggerTransition: triggerTransition
          });
        });

        // If a Document Fragment was specified, append the DOM Node into it.
        if (fragment) {
          fragment.appendChild(node);
        }

        return node;
      };

      /**
       * Processes a set of patches onto a tracked DOM Node.
       *
       * @param {Object} node - DOM Node to process patchs on
       * @param {Array} patches - Contains patch objects
       */
      function patchNode(node, patches) {
        var state = _cache.StateCache.get(state);
        var promises = [];
        var triggerTransition = (0, _transitions.buildTrigger)(promises);

        // Loop through all the patches and apply them.

        var _loop = function _loop(i) {
          var patch = patches[i];
          var el = (0, _make2.default)(patch.element);
          var oldEl = (0, _make2.default)(patch.old);
          var newEl = (0, _make2.default)(patch.new);

          // Empty the Node's contents. This is an optimization, since `innerHTML`
          // will be faster than iterating over every element and manually removing.
          if (patch.__do__ === _sync.REMOVE_ELEMENT_CHILDREN) {
            var childNodes = filter.call(el.childNodes, isElementNode);
            var detachPromises = (0, _transitions.makePromises)('detached', childNodes);

            triggerTransition('detached', detachPromises, function (promises) {
              var callback = function callback() {
                (0, _memory.unprotectElement)(patch.toRemove);
                el.innerHTML = '';
              };

              if (promises && promises.length) {
                Promise.all(promises).then(callback);
              } else {
                callback();
              }
            });
          }

          // Remove the entire Node. Only does something if the Node has a parent
          // element.
          else if (patch.__do__ === _sync.REMOVE_ENTIRE_ELEMENT) {
              var _childNodes = [el].filter(isElementNode);
              var _detachPromises = (0, _transitions.makePromises)('detached', _childNodes);

              if (el.parentNode) {
                triggerTransition('detached', _detachPromises, function (promises) {
                  var callback = function callback() {
                    el.parentNode.removeChild(el);
                    (0, _memory.unprotectElement)(patch.toRemove);
                  };

                  if (promises && promises.length) {
                    Promise.all(promises).then(callback);
                  } else {
                    callback();
                  }
                });
              } else {
                (0, _memory.unprotectElement)(patch.toRemove);
              }
            }

            // Replace the entire Node.
            else if (patch.__do__ === _sync.REPLACE_ENTIRE_ELEMENT) {
                (function () {
                  var allPromises = [];

                  var attachedPromises = (0, _transitions.makePromises)('attached', [newEl].filter(isElementNode));

                  var detachedPromises = (0, _transitions.makePromises)('detached', [oldEl].filter(isElementNode));

                  var replacedPromises = (0, _transitions.makePromises)('replaced', [oldEl], newEl);

                  // Add all the transition state promises into the main array, we'll use
                  // them all to decide when to alter the DOM.
                  triggerTransition('detached', detachedPromises, function (promises) {
                    allPromises.push.apply(allPromises, promises);
                  });

                  triggerTransition('attached', attachedPromises, function (promises) {
                    allPromises.push.apply(allPromises, promises);
                    attached({ vTree: patch.new, triggerTransition: triggerTransition });
                  });

                  triggerTransition('replaced', replacedPromises, function (promises) {
                    allPromises.push.apply(allPromises, promises);
                  });

                  (0, _memory.unprotectElement)(patch.old);

                  // Reset the tree cache. TODO Look into this...
                  _cache.StateCache.set(newEl, {
                    oldTree: patch.new,
                    element: newEl
                  });

                  // Once all the promises have completed, invoke the action, if no
                  // promises were added, this will be a synchronous operation.
                  if (allPromises.length) {
                    Promise.all(allPromises).then(function replaceEntireElement() {
                      checkForMissingParent(oldEl, patch);
                      oldEl.parentNode.replaceChild(newEl, oldEl);
                    }, function (ex) {
                      return console.log(ex);
                    });
                  } else {
                    if (!oldEl.parentNode) {
                      (0, _memory.unprotectElement)(patch.new);
                      throw new Error(replaceFailMsg);
                    }

                    oldEl.parentNode.replaceChild(newEl, oldEl);
                  }
                })();
              }

              // Node manip.
              else if (patch.__do__ === _sync.MODIFY_ELEMENT) {
                  // Add.
                  if (el && patch.fragment && !oldEl) {
                    (function () {
                      var fragment = document.createDocumentFragment();

                      // Loop over every element to be added and process the Virtual Tree
                      // element into the DOM Node and append into the DOM fragment.
                      var toAttach = patch.fragment.map(function (vTree) {
                        return attached({
                          vTree: vTree, fragment: fragment, triggerTransition: triggerTransition
                        });
                      }).filter(isElementNode);

                      // Turn elements into childNodes of the patch element.
                      el.appendChild(fragment);

                      // Trigger transitions.
                      var makeAttached = (0, _transitions.makePromises)('attached', toAttach);
                      triggerTransition('attached', makeAttached);
                    })();
                  }

                  // Remove.
                  else if (oldEl && !newEl) {
                      // Ensure we can remove the old DOM Node.
                      checkForMissingParent('remove', oldEl, patch);

                      var makeDetached = (0, _transitions.makePromises)('detached', [oldEl]);

                      triggerTransition('detached', makeDetached, function (promises) {
                        var callback = function callback() {
                          if (oldEl.parentNode) {
                            oldEl.parentNode.removeChild(oldEl);
                          }

                          // And then empty out the entire contents.
                          oldEl.innerHTML = '';

                          (0, _memory.unprotectElement)(patch.old);
                        };

                        if (promises && promises.length) {
                          Promise.all(promises).then(callback);
                        } else {
                          callback();
                        }
                      });
                    }

                    // Replace.
                    else if (oldEl && newEl) {
                        (function () {
                          // Ensure we can replace the old DOM Node.
                          checkForMissingParent('replace', oldEl, patch);

                          // Append the element first, before doing the replacement.
                          if (oldEl.nextSibling) {
                            oldEl.parentNode.insertBefore(newEl, oldEl.nextSibling);
                          } else {
                            oldEl.parentNode.appendChild(newEl);
                          }

                          // Removed state for transitions API.
                          var allPromises = [];

                          var attachPromises = (0, _transitions.makePromises)('attached', [newEl].filter(isElementNode));

                          var detachPromises = (0, _transitions.makePromises)('detached', [oldEl].filter(isElementNode));

                          var replacePromises = (0, _transitions.makePromises)('replaced', [oldEl], newEl);

                          triggerTransition('replaced', replacePromises, function (promises) {
                            if (promises && promises.length) {
                              allPromises.push.apply(allPromises, promises);
                            }
                          });

                          triggerTransition('detached', detachPromises, function (promises) {
                            if (promises && promises.length) {
                              allPromises.push.apply(allPromises, promises);
                            }
                          });

                          triggerTransition('attached', attachPromises, function (promises) {
                            if (promises && promises.filter(Boolean).length) {
                              allPromises.push.apply(allPromises, promises);
                            }

                            attached({ vTree: patch.new, triggerTransition: triggerTransition });
                          });

                          // Once all the promises have completed, invoke the action, if no
                          // promises were added, this will be a synchronous operation.
                          if (allPromises.length) {
                            Promise.all(allPromises).then(function replaceElement() {
                              if (oldEl.parentNode) {
                                oldEl.parentNode.replaceChild(newEl, oldEl);
                              }

                              (0, _memory.unprotectElement)(patch.old);

                              (0, _memory.protectElement)(patch.new);
                            }, function (ex) {
                              return console.log(ex);
                            });
                          } else {
                            checkForMissingParent('replace', oldEl, patch);

                            oldEl.parentNode.replaceChild(newEl, oldEl);
                            (0, _memory.unprotectElement)(patch.old);
                            (0, _memory.protectElement)(patch.new);
                          }
                        })();
                      }
                }

                // Attribute manipulation.
                else if (patch.__do__ === _sync.MODIFY_ATTRIBUTE) {
                    var attrChangePromises = (0, _transitions.makePromises)('attributeChanged', [el], patch.name, el.getAttribute(patch.name), patch.value);

                    triggerTransition('attributeChanged', attrChangePromises, function (promises) {
                      var callback = function callback() {
                        // Remove.
                        if (patch.value === undefined) {
                          el.removeAttribute(patch.name);

                          if (patch.name in el) {
                            el[patch.name] = undefined;
                          }
                        }
                        // Change attributes.
                        else {
                            var isObject = _typeof(patch.value) === 'object';
                            var isFunction = typeof patch.value === 'function';

                            // If not a dynamic type, set as an attribute, since it's a valid
                            // attribute value.
                            if (!isObject && !isFunction) {
                              if (patch.name) {
                                el.setAttribute(patch.name, patch.value);
                              }
                            } else if (typeof patch.value !== 'string') {
                              // Necessary to track the attribute/prop existence.
                              el.setAttribute(patch.name, '');

                              // Since this is a dynamic value it gets set as a property.
                              el[patch.name] = patch.value;
                            }

                            // Support live updating of the value attribute.
                            if (patch.name === 'value' || patch.name === 'checked') {
                              el[patch.name] = patch.value;
                            }
                          }
                      };

                      if (promises && promises.length) {
                        Promise.all(promises).then(callback, function unhandledException() {});
                      } else {
                        callback();
                      }
                    });
                  }

                  // Text node manipulation.
                  else if (patch.__do__ === _sync.CHANGE_TEXT) {
                      var textChangePromises = (0, _transitions.makePromises)('textChanged', [el], el.nodeValue, patch.value);

                      triggerTransition('textChanged', textChangePromises, function (promises) {
                        var callback = function callback() {
                          patch.element.nodeValue = (0, _entities.decodeEntities)(patch.value);
                          el.nodeValue = patch.element.nodeValue;

                          if (el.parentNode) {
                            var nodeName = el.parentNode.nodeName.toLowerCase();

                            if (_parser.blockText.has(nodeName)) {
                              el.parentNode.nodeValue = (0, _entities.decodeEntities)(patch.element.nodeValue);
                            }
                          }
                        };

                        if (promises && promises.length) {
                          Promise.all(promises).then(callback);
                        } else {
                          callback();
                        }
                      });
                    }
        };

        for (var i = 0; i < patches.length; i++) {
          _loop(i);
        }

        // Return the Promises that were allocated so that rendering can be blocked
        // until they resolve.
        return promises.filter(Boolean);
      }
    }, { "../tree/sync": 9, "../util/cache": 10, "../util/entities": 11, "../util/memory": 13, "../util/parser": 14, "../util/transitions": 18, "./make": 3 }], 5: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = releaseNode;

      var _cache = _dereq_('../util/cache');

      var _memory = _dereq_('../util/memory');

      /**
       * Releases state and recycles internal memory.
       *
       * @param node {Object} - A DOM Node to lookup state from
       */
      function releaseNode(node) {
        // Try and find a state object for this DOM Node.
        var state = _cache.StateCache.get(node);

        // If there is a Virtual Tree element, recycle all objects allocated for it.
        if (state && state.oldTree) {
          (0, _memory.unprotectElement)(state.oldTree);
        }

        // Remove the Node's state object from the cache.
        _cache.StateCache.delete(node);

        // Recycle all unprotected objects.
        (0, _memory.cleanMemory)();
      }
    }, { "../util/cache": 10, "../util/memory": 13 }], 6: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = createTransaction;

      var _patch = _dereq_('./patch');

      var _patch2 = _interopRequireDefault(_patch);

      var _finalize = _dereq_('./finalize');

      var _finalize2 = _interopRequireDefault(_finalize);

      var _make = _dereq_('../tree/make');

      var _make2 = _interopRequireDefault(_make);

      var _sync = _dereq_('../tree/sync');

      var _sync2 = _interopRequireDefault(_sync);

      var _helpers = _dereq_('../tree/helpers');

      var _memory = _dereq_('../util/memory');

      var _parser = _dereq_('../util/parser');

      var _pools = _dereq_('../util/pools');

      var _cache = _dereq_('../util/cache');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * If diffHTML is rendering anywhere asynchronously, we need to wait until it
       * completes before this render can be executed. This sets up the next buffer,
       * if necessary, which serves as a Boolean determination later to `bufferSet`.
       *
       * @param {Object} state - The current DOM Node state within diffHTML
       * @param {Object} nextRender - The respective arguments to set buffer
       * @return {Boolean} - Whether or not diffHTML is currently rendering
       */
      var setBufferState = function setBufferState(state, nextRender) {
        // Look up all existing states for any rendering, and set the next render
        // buffer if blocked.
        _cache.StateCache.forEach(function (_state) {
          // If we attach a nextRender, then the buffer has been set.
          if (_state.isRendering) {
            state.nextRender = nextRender;
          }
        });

        // Let outside code know if we were blocked.
        return Boolean(state.nextRender);
      };

      /**
       * Gets a Virtual Tree Element from the newHTML passed to a diff method.
       *
       * @param {String|Object} newHTML - HTML/DOM Node/Virtual Tree Element
       * @return {Object} - Virtual Tree Element
       */
      var getTreeFromNewHTML = function getTreeFromNewHTML(newHTML, options, callback) {
        // This is HTML Markup, so we need to parse it.
        if (typeof newHTML === 'string') {
          var childNodes = (0, _parser.parse)(newHTML).childNodes;

          // If we are dealing with innerHTML, use all the Nodes. If we're dealing
          // with outerHTML, we can only support diffing against a single element,
          // so pick the first one.
          return callback(childNodes);
        }
        // This is a DOM Node, so we need to convert to a vTree.
        else if (newHTML.ownerDocument) {
            var newTree = (0, _make2.default)(newHTML);

            if (newTree.nodeType === 11) {
              _pools.pools.elementObject.unprotect(newTree);
              return callback(newTree.childNodes);
            }

            return callback(newTree);
          }

        // This is a Virtual Tree Element, or something like it, so we can just pass
        // it along.
        return callback(newHTML);
      };

      /**
       * Creates a sequential render transaction on a DOM Node. This requires
       * checking for a previous render first. Since diffHTML is globally connected
       * (hopefully only running one copy...), this will prevent transitions from
       * interferring.
       *
       * @param node
       * @param newHTML
       * @param options
       */
      function createTransaction(node, newHTML, options) {
        // Used to associate state with the currently rendering node. This
        // prevents attaching properties to the instance itself.
        var state = _cache.StateCache.get(node) || {};
        var isInner = options.inner;
        var previousMarkup = state.previousMarkup;
        var previousText = state.previousText;
        var bufferSet = setBufferState(state, { node: node, newHTML: newHTML, options: options });

        // Associate the current render options with the DOM Node state.
        state.options = options;

        // Always ensure the most up-to-date state object is stored.
        _cache.StateCache.set(node, state);

        // Short circuit the rest of this render if we ended up having to set a
        // buffer. This happens when some other code using diffHTML is rendering
        // asynchronously (using transitions w/ Promise).
        if (bufferSet) {
          return;
        }

        // This looks for changes in the DOM from what we'd expect. This means we
        // need to rebuild the old Virtual Tree. This allows for keeping our tree in
        // sync with unexpected DOM changes. It's not very performant, so ideally you
        // should never change markup that diffHTML affects from outside of diffHTML
        // if performance is a concern.
        var sameInnerHTML = isInner ? previousMarkup === node.innerHTML : true;
        var sameOuterHTML = !isInner ? previousMarkup === node.outerHTML : true;
        var sameTextContent = previousText === node.textContent;

        // If the contents haven't changed, abort, since there is no point in
        // continuing. Only support this if the new markup is a string, otherwise
        // it's possible for our object recycling to match twice.
        if (typeof newHTML === 'string' && state.newHTML === newHTML) {
          return;
        }
        // Associate the last markup rendered with this node.
        else if (typeof newHTML === 'string') {
            state.newHTML = newHTML;
          }

        // We rebuild the tree whenever the DOM Node changes, including the first
        // time we patch a DOM Node.
        var rebuildTree = function rebuildTree() {
          var oldTree = state.oldTree;

          if (oldTree) {
            (0, _memory.unprotectElement)(oldTree);
          }

          state.oldTree = (0, _memory.protectElement)((0, _make2.default)(node));
        };

        if (!sameInnerHTML || !sameOuterHTML || !sameTextContent) {
          rebuildTree();
        }

        // We're rendering in the UI thread.
        state.isRendering = true;

        // We need to ensure that our target to diff is a Virtual Tree Element. This
        // function takes in whatever `newHTML` is and normalizes to a tree object.
        // The callback function runs on every normalized Node to wrap childNodes
        // in the case of setting innerHTML.
        var newTree = getTreeFromNewHTML(newHTML, options, function (newTree) {
          if (isInner) {
            _pools.pools.elementObject.unprotect(newTree);

            var nodeName = state.oldTree.nodeName;
            var attributes = state.oldTree.attributes;

            return (0, _helpers.createElement)(nodeName, attributes, newTree);
          }

          return Array.isArray(newTree) ? newTree[0] : newTree;
        });

        // Synchronize the tree.
        var patches = (0, _sync2.default)(state.oldTree, newTree);

        // Apply the set of patches to the Node.
        var promises = (0, _patch2.default)(node, patches);

        // Clean up and finalize this transaction. If there is another transaction,
        // get a callback to run once this completes to run it.
        var finalizeTransaction = (0, _finalize2.default)(node, state);

        // Operate synchronously unless opted into a Promise-chain. Doesn't matter if
        // they are actually Promises or not, since they will all resolve eventually
        // with `Promise.all`.
        if (promises.length) {
          Promise.all(promises).then(finalizeTransaction, function (ex) {
            return console.log(ex);
          });
        } else {
          finalizeTransaction();
        }
      }
    }, { "../tree/helpers": 7, "../tree/make": 8, "../tree/sync": 9, "../util/cache": 10, "../util/memory": 13, "../util/parser": 14, "../util/pools": 15, "./finalize": 2, "./patch": 4 }], 7: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      exports.createElement = createElement;
      exports.createAttribute = createAttribute;

      var _pools = _dereq_('../util/pools');

      var _escape = _dereq_('../util/escape');

      var _escape2 = _interopRequireDefault(_escape);

      var _make = _dereq_('../tree/make');

      var _make2 = _interopRequireDefault(_make);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * TODO Phase this out if possible, super slow iterations...
       *
       * @param childNodes
       * @return
       */
      var normalizeChildNodes = function normalizeChildNodes(childNodes) {
        var newChildNodes = [];

        [].concat(childNodes).forEach(function (childNode) {
          if ((typeof childNode === 'undefined' ? 'undefined' : _typeof(childNode)) !== 'object') {
            newChildNodes.push(createElement('#text', null, String(childNode)));
          } else if ('length' in childNode) {
            for (var i = 0; i < childNode.length; i++) {
              var newChild = childNode[i];
              var newNode = newChild.ownerDocument ? (0, _make2.default)(newChild) : newChild;

              newChildNodes.push(newNode);
            }
          } else {
            var node = childNode.ownerDocument ? (0, _make2.default)(childNode) : childNode;
            newChildNodes.push(node);
          }
        });

        return newChildNodes;
      };

      /**
       * Creates a virtual element used in or as a virtual tree.
       *
       * @param nodeName
       * @param attributes
       * @param childNodes
       * @return {Object} element
       */
      function createElement(nodeName, attributes, childNodes) {
        if (nodeName === '') {
          return normalizeChildNodes(childNodes);
        }

        var entry = _pools.pools.elementObject.get();
        var isTextNode = nodeName === 'text' || nodeName === '#text';

        entry.key = '';
        entry.nodeName = nodeName.toLowerCase();

        if (!isTextNode) {
          entry.nodeType = 1;
          entry.nodeValue = '';
          entry.attributes = attributes || [];
          entry.childNodes = normalizeChildNodes(childNodes);

          // Set the key prop if passed as an attr.
          entry.attributes.some(function (attr) {
            if (attr.name === 'key') {
              entry.key = attr.value;
              return true;
            }
          });
        } else {
          var value = Array.isArray(childNodes) ? childNodes.join('') : childNodes;

          entry.nodeType = nodeName === '#document-fragment' ? 11 : 3;
          entry.nodeValue = (0, _escape2.default)(String(value));
          entry.attributes.length = 0;
          entry.childNodes.length = 0;
        }

        return entry;
      }

      /**
       * Creates a virtual attribute used in a virtual element.
       *
       * @param name
       * @param value
       * @return {Object} attribute
       */
      function createAttribute(name, value) {
        var entry = _pools.pools.attributeObject.get();

        entry.name = name;
        entry.value = value;

        return entry;
      }
    }, { "../tree/make": 8, "../util/escape": 12, "../util/pools": 15 }], 8: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = makeNode;

      var _helpers = _dereq_('./helpers');

      var _pools = _dereq_('../util/pools');

      var _cache = _dereq_('../util/cache');

      /**
       * Converts a DOM Node into a Virtual Tree Element.
       *
       * @param {Object} node - A DOM Node
       * @return {Object} - A Virtual Tree Element
       */
      function makeNode(node) {
        // These are the only DOM Node properties we care about.
        var nodeName = node.nodeName;
        var nodeType = node.nodeType;
        var nodeValue = node.nodeValue;
        var attributes = node.attributes || [];
        var childNodes = node.childNodes || [];

        // We ignore any DOM Node that isn't an: Element, Text, Document Fragment, or
        // Shadow Root.
        if (nodeType !== 1 && nodeType !== 3 && nodeType !== 11) {
          return false;
        }

        // We can consider either of these DOM Nodes as Text Nodes.
        var isTextNode = nodeName === '#text' || nodeName === 'text';

        // In the case of Text Node's we can have the createElement function set
        // the nodeValue for us.
        var initialValue = isTextNode ? nodeValue : [];

        // Creates a Virtual Tree Element based off this nodeName. We aren't going
        // to set the attributes right away since we want to set the key on the vTree
        // and push directly into the pre-existing array.
        var vTree = (0, _helpers.createElement)(node.nodeName, [], initialValue);

        // Creates Virtual Tree Attributes for each attribute in the DOM Node.
        for (var i = 0; i < attributes.length; i++) {
          var attr = (0, _helpers.createAttribute)(attributes[i].name, attributes[i].value);

          // If the `key` attribute is found, set the respective value on the vTree.
          if (attr.name === 'key') {
            vTree.key = attr.value;
          }

          vTree.attributes.push(attr);
        }

        // Associate this newly allocated vTree with this DOM Node.
        _cache.NodeCache.set(vTree, node);

        // If the element has child nodes, convert them all to virtual nodes.
        for (var _i = 0; _i < childNodes.length; _i++) {
          var newNode = makeNode(childNodes[_i]);

          // We may get a falsy value back if we pass in a Comment Node or other
          // DOM Nodes that we intentionally ignore.
          if (newNode) {
            vTree.childNodes.push(newNode);
          }
        }

        // Prune out whitespace/everything from between tags nested under the HTML
        // tag, since this behavior can be observed in browsers and specification.
        if (vTree.nodeName === 'html') {
          vTree.childNodes = vTree.childNodes.filter(function (childNode) {
            return childNode.nodeName === 'head' || childNode.nodeName === 'body';
          });
        }

        return vTree;
      }
    }, { "../util/cache": 10, "../util/pools": 15, "./helpers": 7 }], 9: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CHANGE_TEXT = exports.MODIFY_ATTRIBUTE = exports.MODIFY_ELEMENT = exports.REPLACE_ENTIRE_ELEMENT = exports.REMOVE_ENTIRE_ELEMENT = exports.REMOVE_ELEMENT_CHILDREN = undefined;
      exports.default = sync;

      var _pools = _dereq_('../util/pools');

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var slice = Array.prototype.slice;
      var filter = Array.prototype.filter;

      // Patch actions.
      var REMOVE_ELEMENT_CHILDREN = exports.REMOVE_ELEMENT_CHILDREN = -2;
      var REMOVE_ENTIRE_ELEMENT = exports.REMOVE_ENTIRE_ELEMENT = -1;
      var REPLACE_ENTIRE_ELEMENT = exports.REPLACE_ENTIRE_ELEMENT = 0;
      var MODIFY_ELEMENT = exports.MODIFY_ELEMENT = 1;
      var MODIFY_ATTRIBUTE = exports.MODIFY_ATTRIBUTE = 2;
      var CHANGE_TEXT = exports.CHANGE_TEXT = 3;

      /**
       * Synchronizes changes from the newTree into the oldTree.
       *
       * @param oldTree
       * @param newTree
       * @param patches - optional
       */
      function sync(oldTree, newTree, patches) {
        patches = patches || [];

        if (!Array.isArray(patches)) {
          throw new Error('Missing Array to sync patches into');
        }

        if (!oldTree) {
          throw new Error('Missing existing tree to sync');
        }

        // Flatten out childNodes that are arrays.
        if (newTree && newTree.childNodes) {
          var hasArray = newTree.childNodes.some(function (node) {
            return Array.isArray(node);
          });

          if (hasArray) {
            (function () {
              var newChildNodes = [];

              newTree.childNodes.forEach(function (childNode) {
                if (Array.isArray(childNode)) {
                  newChildNodes.push.apply(newChildNodes, childNode);
                } else {
                  newChildNodes.push(childNode);
                }
              });

              newTree.childNodes = newChildNodes;
            })();
          }
        }

        var oldNodeValue = oldTree.nodeValue;
        var oldChildNodes = oldTree.childNodes;
        var oldChildNodesLength = oldChildNodes ? oldChildNodes.length : 0;
        var oldIsTextNode = oldTree.nodeName === '#text';

        if (!newTree) {
          var removed = [oldTree].concat(oldChildNodes.splice(0, oldChildNodesLength));

          patches.push({
            __do__: REMOVE_ENTIRE_ELEMENT,
            element: oldTree,
            toRemove: removed
          });

          return patches;
        }

        var nodeValue = newTree.nodeValue;
        var childNodes = newTree.childNodes;
        var childNodesLength = childNodes ? childNodes.length : 0;
        var nodeName = newTree.nodeName;
        var attributes = newTree.attributes;
        var newIsTextNode = nodeName === '#text';
        var newIsFragment = newTree.nodeName === '#document-fragment';
        var skipAttributeCompare = false;

        // Replace the key attributes.
        oldTree.key = newTree.key;

        // Fragments should not compare attributes.
        if (newIsFragment) {
          skipAttributeCompare = true;
        }
        // If the element we're replacing is totally different from the previous
        // replace the entire element, don't bother investigating children.
        else if (oldTree.nodeName !== newTree.nodeName) {
            patches.push({
              __do__: REPLACE_ENTIRE_ELEMENT,
              old: oldTree,
              new: newTree
            });

            return patches;
          }
          // This element never changes.
          else if (oldTree === newTree) {
              return patches;
            }

        // Clean up the newTree since we're not using it.
        _pools.pools.elementObject.unprotect(newTree);

        var areTextNodes = oldIsTextNode && newIsTextNode;

        // If the top level nodeValue has changed we should reflect it.
        if (areTextNodes && oldNodeValue !== nodeValue) {
          patches.push({
            __do__: CHANGE_TEXT,
            element: oldTree,
            value: newTree.nodeValue
          });

          oldTree.nodeValue = newTree.nodeValue;

          return patches;
        }

        // Ensure keys exist for all the old & new elements.
        var noOldKeys = !oldChildNodes.some(function (oldChildNode) {
          return oldChildNode.key;
        });
        var newKeys = null;
        var oldKeys = null;

        if (!noOldKeys) {
          newKeys = new Set(childNodes.map(function (childNode) {
            return String(childNode.key);
          }).filter(Boolean));

          oldKeys = new Set(oldChildNodes.map(function (childNode) {
            return String(childNode.key);
          }).filter(Boolean));
        }

        // Most common additive elements.
        if (childNodesLength > oldChildNodesLength) {
          // Store elements in a DocumentFragment to increase performance and be
          // generally simplier to work with.
          var fragment = [];

          for (var i = oldChildNodesLength; i < childNodesLength; i++) {
            // Internally add to the tree.
            oldChildNodes.push(childNodes[i]);

            // Add to the document fragment.
            fragment.push(childNodes[i]);
          }

          oldChildNodesLength = oldChildNodes.length;

          // Assign the fragment to the patches to be injected.
          patches.push({
            __do__: MODIFY_ELEMENT,
            element: oldTree,
            fragment: fragment
          });
        }

        // Remove these elements.
        if (oldChildNodesLength > childNodesLength) {
          (function () {
            // For now just splice out the end items.
            var diff = oldChildNodesLength - childNodesLength;
            var toRemove = [];
            var shallowClone = [].concat(_toConsumableArray(oldChildNodes));

            // There needs to be keys to diff, if not, there's no point in checking.
            if (noOldKeys) {
              toRemove = oldChildNodes.splice(oldChildNodesLength - diff, diff);
            }
            // This is an expensive operation so we do the above check to ensure that a
            // key was specified.
            else {
                (function () {
                  var keysToRemove = new Set();

                  // Find the keys in the sets to remove.
                  oldKeys.forEach(function (key) {
                    if (!newKeys.has(key)) {
                      keysToRemove.add(key);
                    }
                  });

                  // If the original childNodes contain a key attribute, use this to
                  // compare over the naive method below.
                  shallowClone.forEach(function (oldChildNode, i) {
                    if (toRemove.length >= diff) {
                      return;
                    } else if (keysToRemove.has(oldChildNode.key)) {
                      var nextChild = oldChildNodes[i + 1];
                      var nextIsTextNode = nextChild && nextChild.nodeType === 3;
                      var count = 1;

                      // Always remove whitespace in between the elements.
                      if (nextIsTextNode && toRemove.length + 2 <= diff) {
                        count = 2;
                      }
                      // All siblings must contain a key attribute if they exist.
                      else if (nextChild && nextChild.nodeType === 1 && !nextChild.key) {
                          throw new Error('\n              All element siblings must consistently contain key attributes.\n            '.trim());
                        }

                      // Find the index position from the original array.
                      var indexPos = oldChildNodes.indexOf(oldChildNode);

                      // Find all the items to remove.
                      toRemove.push.apply(toRemove, oldChildNodes.splice(indexPos, count));
                    }
                  });
                })();
              }

            // Ensure we don't remove too many elements by accident;
            toRemove.length = diff;

            // Ensure our internal length check is matched.
            oldChildNodesLength = oldChildNodes.length;

            if (childNodesLength === 0) {
              patches.push({
                __do__: REMOVE_ELEMENT_CHILDREN,
                element: oldTree,
                toRemove: toRemove
              });
            } else {
              // Remove the element, this happens before the splice so that we still
              // have access to the element.
              toRemove.forEach(function (old) {
                return patches.push({
                  __do__: MODIFY_ELEMENT,
                  old: old
                });
              });
            }
          })();
        }

        // Replace elements if they are different.
        if (oldChildNodesLength >= childNodesLength) {
          for (var _i = 0; _i < childNodesLength; _i++) {
            if (oldChildNodes[_i].nodeName !== childNodes[_i].nodeName) {
              // Add to the patches.
              patches.push({
                __do__: MODIFY_ELEMENT,
                old: oldChildNodes[_i],
                new: childNodes[_i]
              });

              // Replace the internal tree's point of view of this element.
              oldChildNodes[_i] = childNodes[_i];
            } else {
              sync(oldChildNodes[_i], childNodes[_i], patches);
            }
          }
        }

        // Synchronize attributes
        if (!skipAttributeCompare && attributes) {
          var oldLength = oldTree.attributes.length;
          var newLength = attributes.length;

          // Start with the most common, additive.
          if (newLength > oldLength) {
            var toAdd = slice.call(attributes, oldLength);

            for (var _i2 = 0; _i2 < toAdd.length; _i2++) {
              var change = {
                __do__: MODIFY_ATTRIBUTE,
                element: oldTree,
                name: toAdd[_i2].name,
                value: toAdd[_i2].value
              };

              var attr = _pools.pools.attributeObject.get();
              attr.name = toAdd[_i2].name;
              attr.value = toAdd[_i2].value;

              _pools.pools.attributeObject.protect(attr);

              // Push the change object into into the virtual tree.
              oldTree.attributes.push(attr);

              // Add the change to the series of patches.
              patches.push(change);
            }
          }

          // Check for removals.
          if (oldLength > newLength) {
            var _toRemove = slice.call(oldTree.attributes, newLength);

            for (var _i3 = 0; _i3 < _toRemove.length; _i3++) {
              var _change = {
                __do__: MODIFY_ATTRIBUTE,
                element: oldTree,
                name: _toRemove[_i3].name,
                value: undefined
              };

              // Remove the attribute from the virtual node.
              var _removed = oldTree.attributes.splice(_i3, 1);

              for (var _i4 = 0; _i4 < _removed.length; _i4++) {
                _pools.pools.attributeObject.unprotect(_removed[_i4]);
              }

              // Add the change to the series of patches.
              patches.push(_change);
            }
          }

          for (var _i5 = 0; _i5 < attributes.length; _i5++) {
            var oldAttr = oldTree.attributes[_i5];
            var newAttr = attributes[_i5];
            var oldAttrName = oldAttr ? oldAttr.name : undefined;
            var oldAttrValue = oldAttr ? oldAttr.value : undefined;
            var newAttrName = newAttr ? newAttr.name : undefined;
            var newAttrValue = newAttr ? newAttr.value : undefined;

            // Only push in a change if the attribute or value changes.
            if (oldAttrValue !== newAttrValue) {
              var _change2 = {
                __do__: MODIFY_ATTRIBUTE,
                element: oldTree,
                name: oldAttrName,
                value: newAttrValue
              };

              // If the attribute names change, this is a removal.
              if (oldAttrName === newAttrName) {
                oldAttr.value = newAttrValue;
              } else {
                // Set the patch values.
                _change2.name = newAttrName || oldAttrName;
                _change2.value = newAttrValue;

                // Set the Virtual Tree Attribute values.
                oldAttr.name = newAttrName;
                oldAttr.value = newAttrValue;
              }

              // Add the change to the series of patches.
              patches.push(_change2);
            }
          }
        }

        return patches;
      }
    }, { "../util/pools": 15 }], 10: [function (_dereq_, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      // Associates DOM Nodes with state objects.
      var StateCache = exports.StateCache = new Map();

      // Associates Virtual Tree Elements with DOM Nodes.
      var NodeCache = exports.NodeCache = new Map();
    }, {}], 11: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.decodeEntities = decodeEntities;
      var element = document.createElement('div');

      /**
       * Decodes HTML strings.
       *
       * @see http://stackoverflow.com/a/5796718
       * @param string
       * @return unescaped HTML
       */
      function decodeEntities(string) {
        // If there are no HTML entities, we can safely pass the string through.
        if (!string || !string.indexOf || string.indexOf('&') === -1) {
          return string;
        }

        element.innerHTML = string;
        return element.textContent;
      }
    }, {}], 12: [function (_dereq_, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = escape;
      /**
       * Tiny HTML escaping function, useful to prevent things like XSS and
       * unintentionally breaking attributes with quotes.
       *
       * @param {String} unescaped - An HTML value, unescaped
       * @return {String} - An HTML-safe string
       */
      function escape(unescaped) {
        return unescaped.replace(/["&'<>`]/g, function (match) {
          return "&#" + match.charCodeAt(0) + ";";
        });
      }
    }, {}], 13: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.protectElement = protectElement;
      exports.unprotectElement = unprotectElement;
      exports.cleanMemory = cleanMemory;

      var _pools = _dereq_('../util/pools');

      var _cache = _dereq_('./cache');

      /**
       * Ensures that an element is not recycled during a render cycle.
       *
       * @param element
       * @return element
       */
      function protectElement(element) {
        if (Array.isArray(element)) {
          return element.forEach(protectElement);
        }

        var elementObject = _pools.pools.elementObject;
        var attributeObject = _pools.pools.attributeObject;

        elementObject.protect(element);

        element.attributes.forEach(attributeObject.protect, attributeObject);
        element.childNodes.forEach(protectElement);

        return element;
      }

      /**
       * Allows an element to be recycled during a render cycle.
       *
       * @param element
       * @return
       */
      function unprotectElement(element) {
        if (Array.isArray(element)) {
          return element.forEach(unprotectElement);
        }

        var elementObject = _pools.pools.elementObject;
        var attributeObject = _pools.pools.attributeObject;

        elementObject.unprotect(element);

        element.attributes.forEach(attributeObject.unprotect, attributeObject);
        element.childNodes.forEach(unprotectElement);

        _cache.NodeCache.delete(element);

        return element;
      }

      /**
       * Recycles all unprotected allocations.
       */
      function cleanMemory() {
        var elementCache = _pools.pools.elementObject.cache;
        var attributeCache = _pools.pools.attributeObject.cache;

        // Empty all element allocations.
        elementCache.allocated.forEach(function (v) {
          if (elementCache.free.length < _pools.count) {
            elementCache.free.push(v);
          }
        });

        elementCache.allocated.clear();

        // Clean out unused elements.
        _cache.NodeCache.forEach(function (node, descriptor) {
          if (!elementCache.protected.has(descriptor)) {
            _cache.NodeCache.delete(descriptor);
          }
        });

        // Empty all attribute allocations.
        attributeCache.allocated.forEach(function (v) {
          if (attributeCache.free.length < _pools.count) {
            attributeCache.free.push(v);
          }
        });

        attributeCache.allocated.clear();
      }
    }, { "../util/pools": 15, "./cache": 10 }], 14: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.blockText = undefined;
      exports.parse = parse;

      var _pools = _dereq_('./pools');

      var _make = _dereq_('../tree/make');

      var _make2 = _interopRequireDefault(_make);

      var _helpers = _dereq_('../tree/helpers');

      var _escape = _dereq_('./escape');

      var _escape2 = _interopRequireDefault(_escape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // Code based off of:
      // https://github.com/ashi009/node-fast-html-parser

      var TOKEN = '__DIFFHTML__';

      var doctypeEx = /<!.*>/ig;
      var attrEx = /\b([_a-z][_a-z0-9\-]*)\s*(=\s*("([^"]+)"|'([^']+)'|(\S+)))?/ig;
      var tagEx = /<!--[^]*?(?=-->)-->|<(\/?)([a-z\-][a-z0-9\-]*)\s*([^>]*?)(\/?)>/ig;

      // We use this Set in the node/patch module so marking it exported.
      var blockText = exports.blockText = new Set(['script', 'noscript', 'style', 'pre', 'template']);

      var selfClosing = new Set(['meta', 'img', 'link', 'input', 'area', 'br', 'hr']);

      var kElementsClosedByOpening = {
        li: { li: true },
        p: { p: true, div: true },
        td: { td: true, th: true },
        th: { td: true, th: true }
      };

      var kElementsClosedByClosing = {
        li: { ul: true, ol: true },
        a: { div: true },
        b: { div: true },
        i: { div: true },
        p: { div: true },
        td: { tr: true, table: true },
        th: { tr: true, table: true }
      };

      /**
       * Interpolate dynamic supplemental values from the tagged template into the
       * tree.
       *
       * @param currentParent
       * @param string
       * @param supplemental
       */
      var interpolateDynamicBits = function interpolateDynamicBits(currentParent, string, supplemental) {
        if (string && string.indexOf(TOKEN) > -1) {
          (function () {
            var toAdd = [];

            // Break up the incoming string into dynamic parts that are then pushed
            // into a new set of child nodes.
            string.split(TOKEN).forEach(function (value, index) {
              if (index === 0) {
                // We trim here to allow for newlines before and after markup starts.
                if (value && value.trim()) {
                  toAdd.push(TextNode(value));
                }

                // The first item does not mean there was dynamic content.
                return;
              }

              // If we are in the second iteration, this
              var dynamicBit = supplemental.children.shift();

              if (typeof dynamicBit === 'string') {
                toAdd.push(TextNode(dynamicBit));
              } else if (Array.isArray(dynamicBit)) {
                toAdd.push.apply(toAdd, dynamicBit);
              } else if (dynamicBit.ownerDocument) {
                toAdd.push((0, _make2.default)(dynamicBit));
              } else {
                toAdd.push(dynamicBit);
              }

              // This is a useful Text Node.
              if (value && value.trim()) {
                toAdd.push(TextNode(value));
              }
            });

            currentParent.childNodes.push.apply(currentParent.childNodes, toAdd);
          })();
        } else if (string && string.length && !doctypeEx.exec(string)) {
          currentParent.childNodes.push(TextNode(string));
        }
      };

      /**
       * TextNode to contain a text element in DOM tree.
       *
       * @param {String} nodeValue - A value to set in the text,, set unescaped
       * @return {Object} - A Virtual Tree element representing the Text Node
       */
      var TextNode = function TextNode(value) {
        var vTree = (0, _helpers.createElement)('#text', [], []);
        vTree.nodeValue = value;
        return vTree;
      };

      /**
       * HTMLElement, which contains a set of children.
       *
       * Note: this is a minimalist implementation, no complete tree structure
       * provided (no parentNode, nextSibling, previousSibling etc).
       *
       * @param {string} name     nodeName
       * @param {Object} rawAttrs attributes in string
       * @param {Object} supplemental data
       * @return {Object} vTree
       */
      var HTMLElement = function HTMLElement(nodeName, rawAttrs, supplemental) {
        var vTree = (0, _helpers.createElement)(nodeName, [], []);

        for (var match; match = attrEx.exec(rawAttrs || '');) {
          var name = match[1];
          var value = match[6] || match[5] || match[4] || match[1];
          var attr = (0, _helpers.createAttribute)(name, value);

          if (attr.value === TOKEN) {
            attr.value = supplemental.props.shift();
          }

          // If a key attribute is found attach directly to the vTree.
          if (attr.name === 'key') {
            vTree.key = attr.value;
          }

          // Look for empty attributes.
          if (match[6] === '""') {
            attr.value = '';
          }

          vTree.attributes.push(attr);
        }

        return vTree;
      };

      /**
       * Parses HTML and returns a root element
       *
       * @param  {string} data      html
       * @param  {array} supplemental      data
       * @return {HTMLElement}      root element
       */
      function parse(html, supplemental) {
        var root = HTMLElement('#document-fragment');
        var currentParent = root;
        var stack = [root];
        var lastTextPos = -1;

        // If there are no HTML elements, treat the passed in html as a single
        // text node.
        if (html.indexOf('<') === -1 && html) {
          interpolateDynamicBits(currentParent, html, supplemental);
          return root;
        }

        // Look through the HTML markup for valid tags.
        for (var match, text; match = tagEx.exec(html);) {
          if (lastTextPos > -1) {
            if (lastTextPos + match[0].length < tagEx.lastIndex) {
              // if has content
              text = html.slice(lastTextPos, tagEx.lastIndex - match[0].length);

              interpolateDynamicBits(currentParent, text, supplemental);
            }
          }

          var matchOffset = tagEx.lastIndex - match[0].length;

          if (lastTextPos === -1 && matchOffset > 0) {
            var string = html.slice(0, matchOffset);

            if (string && string.trim() && !doctypeEx.exec(string)) {
              interpolateDynamicBits(currentParent, string, supplemental);
            }
          }

          lastTextPos = tagEx.lastIndex;

          // This is a comment.
          if (match[0][1] === '!') {
            continue;
          }

          if (!match[1]) {
            // not </ tags
            var attrs = {};

            if (!match[4] && kElementsClosedByOpening[currentParent.nodeName]) {
              if (kElementsClosedByOpening[currentParent.nodeName][match[2]]) {
                stack.pop();
                currentParent = stack[stack.length - 1];
              }
            }

            currentParent = currentParent.childNodes[currentParent.childNodes.push(HTMLElement(match[2], match[3], supplemental)) - 1];

            stack.push(currentParent);

            if (blockText.has(match[2])) {
              // A little test to find next </script> or </style> ...
              var closeMarkup = '</' + match[2] + '>';
              var index = html.indexOf(closeMarkup, tagEx.lastIndex);
              var length = match[2].length;

              if (index === -1) {
                lastTextPos = tagEx.lastIndex = html.length + 1;
              } else {
                lastTextPos = index + closeMarkup.length;
                tagEx.lastIndex = lastTextPos;
                match[1] = true;
              }

              var newText = html.slice(match.index + match[0].length, index);

              if (newText.trim()) {
                currentParent.childNodes.push(TextNode((0, _escape2.default)(newText)));
              }
            }
          }
          if (match[1] || match[4] || selfClosing.has(match[2])) {
            // </ or /> or <br> etc.
            while (currentParent) {
              if (currentParent.nodeName == match[2]) {
                stack.pop();
                currentParent = stack[stack.length - 1];

                break;
              } else {
                var tag = kElementsClosedByClosing[currentParent.nodeName];

                // Trying to close current tag, and move on
                if (tag) {
                  if (tag[match[2]]) {
                    stack.pop();
                    currentParent = stack[stack.length - 1];

                    continue;
                  }
                }

                // Use aggressive strategy to handle unmatching markups.
                break;
              }
            }
          }
        }

        // Find any last remaining text after the parsing completes over tags.
        var remainingText = html.slice(lastTextPos === -1 ? 0 : lastTextPos).trim();

        // If the text exists and isn't just whitespace, push into a new TextNode.
        interpolateDynamicBits(currentParent, remainingText, supplemental);

        // This is an entire document, so only allow the HTML children to be
        // body or head.
        if (root.childNodes.length && root.childNodes[0].nodeName === 'html') {
          (function () {
            // Store elements from before body end and after body end.
            var head = { before: [], after: [] };
            var body = { after: [] };
            var beforeHead = true;
            var beforeBody = true;
            var HTML = root.childNodes[0];

            // Iterate the children and store elements in the proper array for
            // later concat, replace the current childNodes with this new array.
            HTML.childNodes = HTML.childNodes.filter(function (el) {
              // If either body or head, allow as a valid element.
              if (el.nodeName === 'body' || el.nodeName === 'head') {
                if (el.nodeName === 'head') {
                  beforeHead = false;
                }

                if (el.nodeName === 'body') {
                  beforeBody = false;
                }

                return true;
              }
              // Not a valid nested HTML tag element, move to respective container.
              else if (el.nodeType === 1) {
                  if (beforeHead && beforeBody) {
                    head.before.push(el);
                  } else if (!beforeHead && beforeBody) {
                    head.after.push(el);
                  } else if (!beforeBody) {
                    body.after.push(el);
                  }
                }
            });

            // Ensure the first element is the HEAD tag.
            if (!HTML.childNodes[0] || HTML.childNodes[0].nodeName !== 'head') {
              var headInstance = _pools.pools.elementObject.get();
              headInstance.nodeName = 'head';
              headInstance.childNodes.length = 0;
              headInstance.attributes.length = 0;

              var existing = headInstance.childNodes;
              existing.unshift.apply(existing, head.before);
              existing.push.apply(existing, head.after);

              HTML.childNodes.unshift(headInstance);
            } else {
              var _existing = HTML.childNodes[0].childNodes;
              _existing.unshift.apply(_existing, head.before);
              _existing.push.apply(_existing, head.after);
            }

            // Ensure the second element is the body tag.
            if (!HTML.childNodes[1] || HTML.childNodes[1].nodeName !== 'body') {
              var bodyInstance = _pools.pools.elementObject.get();
              bodyInstance.nodeName = 'body';
              bodyInstance.childNodes.length = 0;
              bodyInstance.attributes.length = 0;

              var _existing2 = bodyInstance.childNodes;
              _existing2.push.apply(_existing2, body.after);

              HTML.childNodes.push(bodyInstance);
            } else {
              var _existing3 = HTML.childNodes[1].childNodes;
              _existing3.push.apply(_existing3, body.after);
            }
          })();
        }

        return root;
      }
    }, { "../tree/helpers": 7, "../tree/make": 8, "./escape": 12, "./pools": 15 }], 15: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createPool = createPool;
      exports.initializePools = initializePools;
      var pools = exports.pools = {};
      var count = exports.count = 10000;

      /**
       * Creates a pool to query new or reused values from.
       *
       * @param name
       * @param opts
       * @return {Object} pool
       */
      function createPool(name, opts) {
        var size = opts.size;
        var fill = opts.fill;

        var cache = {
          free: [],
          allocated: new Set(),
          protected: new Set()
        };

        // Prime the cache with n objects.
        for (var i = 0; i < size; i++) {
          cache.free.push(fill());
        }

        return {
          cache: cache,

          get: function get() {
            var value = cache.free.pop() || fill();
            cache.allocated.add(value);
            return value;
          },
          protect: function protect(value) {
            cache.allocated.delete(value);
            cache.protected.add(value);
          },
          unprotect: function unprotect(value) {
            if (cache.protected.has(value)) {
              cache.protected.delete(value);
              cache.free.push(value);
            }
          }
        };
      }

      function initializePools(COUNT) {
        pools.attributeObject = createPool('attributeObject', {
          size: COUNT,

          fill: function fill() {
            return { name: '', value: '' };
          }
        });

        pools.elementObject = createPool('elementObject', {
          size: COUNT,

          fill: function fill() {
            return {
              nodeName: '',
              nodeValue: '',
              nodeType: 1,
              key: '',
              childNodes: [],
              attributes: []
            };
          }
        });
      }

      // Create ${COUNT} items of each type.
      initializePools(count);
    }, {}], 16: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      // List of SVG elements.
      var elements = exports.elements = ['altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use', 'view', 'vkern'];

      // Namespace.
      var namespace = exports.namespace = 'http://www.w3.org/2000/svg';
    }, {}], 17: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      exports.html = html;

      var _parser = _dereq_('./parser');

      var _escape = _dereq_('./escape');

      var _escape2 = _interopRequireDefault(_escape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var isPropEx = /(=|'|")/;
      var TOKEN = '__DIFFHTML__';

      /**
       * Get the next value from the list. If the next value is a string, make sure
       * it is escaped.
       *
       * @param {Array} values - Values extracted from tagged template literal
       * @return {String|*} - Escaped string, otherwise any value passed
       */
      var nextValue = function nextValue(values) {
        var value = values.shift();
        return typeof value === 'string' ? (0, _escape2.default)(value) : value;
      };

      /**
       * Parses tagged template contents into a Virtual Tree. These tagged templates
       * separate static strings from values, so we need to do some special token
       * work
       *
       * @param {Array} strings - A list of static strings, split by value
       * @param {Array} ...values - A list of interpolated values
       * @return {Object|Array} - A Virtual Tree Element or array of elements
       */
      function html(strings) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
        }

        // Automatically coerce a string literal to array.
        if (typeof strings === 'string') {
          strings = [strings];
        }

        // Do not attempt to parse empty strings.
        if (!strings[0].length && !values.length) {
          return null;
        }

        // Parse only the text, no dynamic bits.
        if (strings.length === 1 && !values.length) {
          var _childNodes = (0, _parser.parse)(strings[0]).childNodes;
          return _childNodes.length > 1 ? _childNodes : _childNodes[0];
        }

        // Used to store markup and tokens.
        var retVal = [];

        // We filter the supplemental values by where they are used. Values are
        // either props or children.
        var supplemental = {
          props: [],
          children: []
        };

        // Loop over the static strings, each break correlates to an interpolated
        // value. Since these values can be dynamic, we cannot pass them to the
        // diffHTML HTML parser inline. They are passed as an additional argument
        // called supplemental. The following loop instruments the markup with tokens
        // that the parser then uses to assemble the correct tree.
        strings.forEach(function (string) {
          // Always add the string, we need it to parse the markup later.
          retVal.push(string);

          if (values.length) {
            var value = nextValue(values);
            var lastSegment = string.split(' ').pop();
            var lastCharacter = lastSegment.trim().slice(-1);
            var isProp = Boolean(lastCharacter.match(isPropEx));

            if (isProp) {
              supplemental.props.push(value);
              retVal.push(TOKEN);
            } else if (Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
              supplemental.children.push(value);
              retVal.push(TOKEN);
            } else {
              retVal.push(value);
            }
          }
        });

        // Parse the instrumented markup to get the Virtual Tree.
        var childNodes = (0, _parser.parse)(retVal.join(''), supplemental).childNodes;

        // This makes it easier to work with a single element as a root, instead of
        // always return an array.
        return childNodes.length > 1 ? childNodes : childNodes[0];
      }
    }, { "./escape": 12, "./parser": 14 }], 18: [function (_dereq_, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.buildTrigger = buildTrigger;
      exports.makePromises = makePromises;
      var forEach = Array.prototype.forEach;

      /**
       * Contains arrays to store transition callbacks.
       *
       * attached
       * --------
       *
       * For when elements come into the DOM. The callback triggers immediately after
       * the element enters the DOM. It is called with the element as the only
       * argument.
       *
       * detached
       * --------
       *
       * For when elements are removed from the DOM. The callback triggers just
       * before the element leaves the DOM. It is called with the element as the only
       * argument.
       *
       * replaced
       * --------
       *
       * For when elements are replaced in the DOM. The callback triggers after the
       * new element enters the DOM, and before the old element leaves. It is called
       * with old and new elements as arguments, in that order.
       *
       * attributeChanged
       * ----------------
       *
       * Triggered when an element's attribute has changed. The callback triggers
       * after the attribute has changed in the DOM. It is called with the element,
       * the attribute name, old value, and current value.
       *
       * textChanged
       * -----------
       *
       * Triggered when an element's `textContent` chnages. The callback triggers
       * after the textContent has changed in the DOM. It is called with the element,
       * the old value, and current value.
       */
      var states = exports.states = {
        attached: [],
        detached: [],
        replaced: [],
        attributeChanged: [],
        textChanged: []
      };

      // Define the custom signatures necessary for the loop to fill in the "magic"
      // methods that process the transitions consistently.
      var fnSignatures = {
        attached: function attached(el) {
          return function (cb) {
            return cb(el);
          };
        },
        detached: function detached(el) {
          return function (cb) {
            return cb(el);
          };
        },
        replaced: function replaced(oldEl, newEl) {
          return function (cb) {
            return cb(oldEl, newEl);
          };
        },
        textChanged: function textChanged(el, oldVal, newVal) {
          return function (cb) {
            return cb(el, oldVal, newVal);
          };
        },
        attributeChanged: function attributeChanged(el, name, oldVal, newVal) {
          return function (cb) {
            return cb(el, name, oldVal, newVal);
          };
        }
      };

      var make = {};

      // Dynamically fill in the custom methods instead of manually constructing
      // them.
      Object.keys(states).forEach(function (stateName) {
        var mapFn = fnSignatures[stateName];

        /**
         * Make's the transition promises.
         *
         * @param elements
         * @param args
         * @param promises
         */
        make[stateName] = function makeTransitionPromises(elements, args, promises) {
          // Sometimes an array-like is passed so using forEach in this manner yields
          // more consistent results.
          forEach.call(elements, function (element) {
            // Never pass text nodes to a state callback unless it is textChanged.
            if (stateName !== 'textChanged' && element.nodeType !== 1) {
              return;
            }

            // Call the map function with each element.
            var newPromises = states[stateName].map(mapFn.apply(null, [element].concat(args)));

            // Merge these Promises into the main cache.
            promises.push.apply(promises, newPromises);

            // Recursively call into the children if attached or detached.
            if (stateName === 'attached' || stateName === 'detached') {
              make[stateName](element.childNodes, args, promises);
            }
          });

          return promises.filter(function (promise) {
            return Boolean(promise && promise.then);
          });
        };
      });

      /**
       * Builds a reusable trigger mechanism for the element transitions.
       *
       * @param allPromises
       */
      function buildTrigger(allPromises) {
        var addPromises = allPromises.push.apply.bind(allPromises.push, allPromises);

        // This becomes `triggerTransition` in process.js.
        return function (stateName, makePromisesCallback, callback) {
          if (states[stateName] && states[stateName].length) {
            // Calls into each custom hook to bind Promises into the local array,
            // these will then get merged into the main `allPromises` array.
            var promises = makePromisesCallback([]);

            // Add these promises into the global cache.
            addPromises(promises);

            if (callback) {
              callback(promises.length ? promises : undefined);
            }
          } else if (callback) {
            callback();
          }
        };
      }

      /**
       * Make a reusable function for easy transition calling.
       *
       * @param stateName
       */
      function makePromises(stateName) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // Ensure elements is always an array.
        var elements = [].concat(args[0]);

        // Accepts the local Array of promises to use.
        return function (promises) {
          return make[stateName](elements, args.slice(1), promises);
        };
      }
    }, {}] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});