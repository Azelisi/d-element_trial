(function (modules) { // webpackBootstrap
    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {

        // Check if module is in cache
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;

        }
        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}

        };

        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = true;

        // Return the exports of the module
        return module.exports;

    }


    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;

    // expose the module cache
    __webpack_require__.c = installedModules;

    // define getter function for harmony exports
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, { enumerable: true, get: getter });

        }

    };

    // define __esModule on exports
    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

        }
        Object.defineProperty(exports, '__esModule', { value: true });

    };

    // create a fake namespace object
    // mode & 1: value is a module id, require it
    // mode & 2: merge all properties of value into the ns
    // mode & 4: return value when already ns object
    // mode & 8|1: behave like require
    __webpack_require__.t = function (value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        return ns;

    };

    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ?
            function getDefault() { return module['default']; } :
            function getModuleExports() { return module; };
        __webpack_require__.d(getter, 'a', getter);
        return getter;

    };

    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

    // __webpack_public_path__
    __webpack_require__.p = "";


    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = "./js/main.js");

})
    ({

        "./js/main.js":

            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                var _utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ie-fix */ "./js/utils/ie-fix.js");
                var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
                var _modules_init_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-modals */ "./js/modules/init-modals.js");
                var _modules_init_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init-menu */ "./js/modules/init-menu.js");
                var _modules_validate_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate-form */ "./js/modules/validate-form.js");




                // Utils
                // ---------------------------------

                Object(_utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__["ieFix"])();
                Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__["iosVhFix"])(); // Modules
                // ---------------------------------

                Object(_modules_init_modals__WEBPACK_IMPORTED_MODULE_2__["initModals"])();
                Object(_modules_init_menu__WEBPACK_IMPORTED_MODULE_3__["initMenu"])();
                Object(_modules_validate_form__WEBPACK_IMPORTED_MODULE_4__["validateForm"])();


            }),

        "./js/modules/init-menu.js":
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "initMenu", function () { return initMenu; });
                var menu = document.querySelector('.main-nav');
                var toggleBtn = document.querySelector('.main-nav__toggle');
                var body = document.querySelector('body');
                var activeClass = 'main-nav--open';
                var overflowHidden = 'overflow-hidden';

                var openMenu = function openMenu() {
                    menu.classList.add(activeClass);
                    body.classList.add(overflowHidden);
                };

                var closeMenu = function closeMenu() {
                    menu.classList.remove(activeClass);
                    body.classList.remove(overflowHidden);
                };

                var initMenu = function initMenu() {
                    window.addEventListener('load', function () {
                        if (toggleBtn) {
                            toggleBtn.addEventListener('click', function (evt) {
                                menu.classList.contains(activeClass) ? closeMenu() : openMenu();
                            });
                            document.addEventListener('click', function (evt) {
                                var target = evt.target;

                                if (!target.classList.contains('main-nav__toggle') && !evt.target.classList.contains('main-nav__wrapper')) {
                                    closeMenu();
                                }
                            });
                            document.addEventListener('keydown', function (evt) {
                                if (evt.key === 'Escape') {
                                    evt.preventDefault();
                                    closeMenu();
                                }
                            });
                        }
                    });
                };




            }),

        "./js/modules/init-modals.js":
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "initModals", function () { return initModals; });
                __webpack_require__.d(__webpack_exports__, "modalMessage", function () { return modalMessage; });
                __webpack_require__.d(__webpack_exports__, "modalSuccess", function () { return modalSuccess; });
                var _utils_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/modal */ "./js/utils/modal.js");

                var modals = document.querySelectorAll('.modal');
                var modalMessage = document.querySelector('.modal--message');
                var modalMessageBtns = document.querySelectorAll('[data-modal="message"]');
                var modalSuccess = document.querySelector('.modal--success');
                var modalSuccessBtns = document.querySelectorAll('[data-modal="success"]'); // аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
                // возможна инициализация только с первыми аргументом,
                // если вам нужно открывать модалку в другом месте под какими-нибудь условиями

                var initModals = function initModals() {
                    // фикс для редких случаев, когда модалка появляется при загрузке страницы
                    window.addEventListener('load', function () {
                        if (modals.length) {
                            modals.forEach(function (el) {
                                setTimeout(function () {
                                    el.classList.remove('modal--preload');
                                }, 100);
                            });
                        }
                    });

                    if (modalMessage && modalMessageBtns.length) {
                        Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalMessage, false, modalMessageBtns, false, false);
                    }

                    if (modalSuccess && modalSuccessBtns.length) {
                        Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalSuccess);
                    }
                };




            }),

        "./js/modules/validate-form.js":

            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "validateForm", function () { return validateForm; });
                var _utils_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/modal */ "./js/utils/modal.js");
                var _modules_init_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/init-modals */ "./js/modules/init-modals.js");


                var closeBtn = _modules_init_modals__WEBPACK_IMPORTED_MODULE_1__["modalSuccess"].querySelector('.modal__close-btn');

                var validateForm = function validateForm() {
                    var form = document.querySelector('form');
                    var errorClass = 'form__field--error';

                    if (form) {
                        var submitBtn = form.querySelector('button[type=submit]');
                        var inputs = form.querySelectorAll('input');
                        var nameInput = document.querySelector('input[name="name"]');
                        var phoneInput = document.querySelector('input[name="email"]');
                        submitBtn.addEventListener('click', function (evt) {
                            inputs.forEach(function (element) {
                                if (!element.validity.valid) {
                                    element.parentElement.classList.add(errorClass);
                                } else {
                                    element.parentElement.classList.remove(errorClass);
                                    evt.preventDefault();

                                    if (nameInput.validity.valid && phoneInput.validity.valid) {
                                        if (_modules_init_modals__WEBPACK_IMPORTED_MODULE_1__["modalMessage"].classList.contains('modal--active')) {
                                            Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_modules_init_modals__WEBPACK_IMPORTED_MODULE_1__["modalMessage"]);
                                        }

                                        form.submit();
                                        Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])(_modules_init_modals__WEBPACK_IMPORTED_MODULE_1__["modalSuccess"]);
                                        closeBtn.addEventListener('click', function () {
                                            Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_modules_init_modals__WEBPACK_IMPORTED_MODULE_1__["modalSuccess"]);
                                        });
                                    }
                                }
                            });
                        });
                        inputs.forEach(function (element) {
                            element.addEventListener('input', function () {
                                if (element.validity.valid) {
                                    element.parentElement.classList.remove(errorClass);
                                }
                            });
                        });
                    }
                };




            }),

        "./js/utils/ie-fix.js":

            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "ieFix", function () { return ieFix; });

                var ieFix = function ieFix() {

                    if (window.NodeList && !NodeList.prototype.forEach) {
                        NodeList.prototype.forEach = function (callback, thisArg) {
                            thisArg = thisArg || window;

                            for (var i = 0; i < this.length; i++) {
                                callback.call(thisArg, this[i], i, this);
                            }
                        };
                    } // CustomEvent


                    (function () {
                        if (typeof window.CustomEvent === 'function') return false;

                        function CustomEvent(event, params) {
                            params = params || {
                                bubbles: false,
                                cancelable: false,
                                detail: undefined
                            };
                            var evt = document.createEvent('CustomEvent');
                            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                            return evt;
                        }

                        CustomEvent.prototype = window.Event.prototype;
                        window.CustomEvent = CustomEvent;
                    })(); // includes


                    if (!Array.prototype.includes) {
                        Object.defineProperty(Array.prototype, 'includes', {
                            value: function value(searchElement, fromIndex) {
                                if (this == null) {
                                    throw new TypeError('"this" is null or not defined');
                                }

                                var o = Object(this);
                                var len = o.length >>> 0;

                                if (len === 0) {
                                    return false;
                                }

                                var n = fromIndex | 0;
                                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                                function sameValueZero(x, y) {
                                    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
                                }

                                while (k < len) {
                                    if (sameValueZero(o[k], searchElement)) {
                                        return true;
                                    }

                                    k++;
                                }

                                return false;
                            }
                        });
                    } // matches


                    if (!Element.prototype.matches) {
                        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
                            var matches = (this.document || this.ownerDocument).querySelectorAll(s);
                            var i = matches.length; // eslint-disable-next-line no-empty

                            while (--i >= 0 && matches.item(i) !== this) { }

                            return i > -1;
                        };
                    } // closest


                    if (!Element.prototype.matches) {
                        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                    }

                    if (!Element.prototype.closest) {
                        Element.prototype.closest = function (s) {
                            var el = this;

                            do {
                                if (el.matches(s)) {
                                    return el;
                                }

                                el = el.parentElement || el.parentNode;
                            } while (el !== null && el.nodeType === 1);

                            return null;
                        };
                    } // prepend


                    (function (arr) {
                        arr.forEach(function (item) {
                            if (item.hasOwnProperty("prepend")) {
                                return;
                            }

                            Object.defineProperty(item, "prepend", {
                                configurable: true,
                                enumerable: true,
                                writable: true,
                                value: function prepend() {
                                    // eslint-disable-next-line prefer-rest-params
                                    var argArr = Array.prototype.slice.call(arguments);
                                    var docFrag = document.createDocumentFragment();
                                    argArr.forEach(function (argItem) {
                                        var isNode = argItem instanceof Node;
                                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                                    });
                                    this.insertBefore(docFrag, this.firstChild);
                                }
                            });
                        });
                    })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


                    (function (arr) {
                        arr.forEach(function (item) {
                            if (item.hasOwnProperty("append")) {
                                return;
                            }

                            Object.defineProperty(item, "append", {
                                configurable: true,
                                enumerable: true,
                                writable: true,
                                value: function append() {
                                    // eslint-disable-next-line prefer-rest-params
                                    var argArr = Array.prototype.slice.call(arguments);
                                    var docFrag = document.createDocumentFragment();
                                    argArr.forEach(function (argItem) {
                                        var isNode = argItem instanceof Node;
                                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                                    });
                                    this.appendChild(docFrag);
                                }
                            });
                        });
                    })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


                    (function (arr) {
                        arr.forEach(function (item) {
                            if (item.hasOwnProperty("before")) {
                                return;
                            }

                            Object.defineProperty(item, "before", {
                                configurable: true,
                                enumerable: true,
                                writable: true,
                                value: function before() {
                                    // eslint-disable-next-line prefer-rest-params
                                    var argArr = Array.prototype.slice.call(arguments);
                                    var docFrag = document.createDocumentFragment();
                                    argArr.forEach(function (argItem) {
                                        var isNode = argItem instanceof Node;
                                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                                    });
                                    this.parentNode.insertBefore(docFrag, this);
                                }
                            });
                        });
                    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


                    (function (arr) {
                        arr.forEach(function (item) {
                            if (item.hasOwnProperty("remove")) {
                                return;
                            }

                            Object.defineProperty(item, "remove", {
                                configurable: true,
                                enumerable: true,
                                writable: true,
                                value: function remove() {
                                    if (this.parentNode !== null) {
                                        this.parentNode.removeChild(this);
                                    }
                                }
                            });
                        });
                    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


                    if (!String.prototype.startsWith) {
                        Object.defineProperty(String.prototype, "startsWith", {
                            value: function value(search, rawPos) {
                                var pos = rawPos > 0 ? rawPos | 0 : 0;
                                return this.substring(pos, pos + search.length) === search;
                            }
                        });
                    }


                    var ie11Download = function ie11Download(el) {
                        if (el.href === "") {
                            throw Error("The element has no href value.");
                        }

                        var filename = el.getAttribute("download");

                        if (filename === null || filename === "") {
                            var tmp = el.href.split("/");
                            filename = tmp[tmp.length - 1];
                        }

                        el.addEventListener("click", function (evt) {
                            evt.preventDefault();
                            var xhr = new XMLHttpRequest();

                            xhr.onloadstart = function () {
                                xhr.responseType = "blob";
                            };

                            xhr.onload = function () {
                                navigator.msSaveOrOpenBlob(xhr.response, filename);
                            };

                            xhr.open("GET", el.href, true);
                            xhr.send();
                        });
                    };

                    if (window.navigator.msSaveBlob) {
                        var downloadLinks = document.querySelectorAll("a[download]");

                        if (downloadLinks.length) {
                            downloadLinks.forEach(function (el) {
                                ie11Download(el);
                            });
                        }
                    } // ie svg focus fix


                    var unfocusableSvg = function unfocusableSvg() {
                        if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
                            return;
                        }

                        var svg = document.querySelectorAll('svg');
                        svg.forEach(function (el) {
                            el.setAttribute('focusable', 'false');
                        });
                    };

                    unfocusableSvg();

                    var ieFooterNailing = function ieFooterNailing() {
                        var main = document.querySelector('main');
                        var header = document.querySelector('.header');
                        var footer = document.querySelector('.footer');
                        var headerH;
                        var footerH;
                        var mainHMin;

                        if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
                            return;
                        }

                        var mainHeight = function mainHeight() {
                            header ? headerH = header.getBoundingClientRect().height : headerH = 0;

                            footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
                            mainHMin = window.innerHeight;
                            main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
                        };

                        document.addEventListener('loadDOMContentLoaded', mainHeight());
                        window.addEventListener('resize', mainHeight);
                    };

                    ieFooterNailing();
                };




            }),

        "./js/utils/ios-vh-fix.js":
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "iosVhFix", function () { return iosVhFix; });
                var isIos = function isIos() {
                    return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
                        || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
                };

                var iosVhFix = function iosVhFix() {
                    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
                        if (isIos()) {
                            var vh = window.innerHeight * 0.01;
                            document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
                            window.addEventListener('resize', function () {
                                vh = window.innerHeight * 0.01;
                                document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
                            });
                        }
                    }
                };




            }),

        "./js/utils/modal.js":
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "setupModal", function () { return setupModal; });
                __webpack_require__.d(__webpack_exports__, "openModal", function () { return openModal; });
                __webpack_require__.d(__webpack_exports__, "closeModal", function () { return closeModal; });
                var _scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-lock */ "./js/utils/scroll-lock.js");


                var openModal = function openModal(modal, callback, preventScrollLock) {
                    modal.classList.add('modal--active');

                    if (callback) {
                        callback();
                    }

                    if (!preventScrollLock) {
                        Object(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableScrolling"])();
                    }
                };

                var closeModal = function closeModal(modal, callback, preventScrollLock) {
                    modal.classList.remove('modal--active');

                    if (callback) {
                        callback();
                    }

                    if (!preventScrollLock) {
                        setTimeout(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableScrolling"], 300);
                    }
                };

                var onEscPress = function onEscPress(evt, modal, callback) {
                    var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

                    if (isEscKey && modal.classList.contains('modal--active')) {
                        evt.preventDefault();
                        closeModal(modal, callback);
                    }
                };

                var setModalListeners = function setModalListeners(modal, closeCallback, preventScrollLock) {
                    var overlay = modal.querySelector('.modal__overlay');
                    var closeBtn = modal.querySelector('.modal__close-btn');
                    closeBtn.addEventListener('click', function () {
                        closeModal(modal, closeCallback, preventScrollLock);
                    });
                    overlay.addEventListener('click', function () {
                        closeModal(modal, closeCallback, preventScrollLock);
                    });
                    document.addEventListener('keydown', function (evt) {
                        onEscPress(evt, modal, closeCallback, preventScrollLock);
                    });
                };

                var setupModal = function setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) {
                    if (modalBtns) {
                        modalBtns.forEach(function (btn) {
                            btn.addEventListener('click', function (evt) {
                                if (!noPrevDefault) {
                                    evt.preventDefault();
                                }

                                openModal(modal, openCallback, preventScrollLock);
                            });
                        });
                    }

                    setModalListeners(modal, closeCallback, preventScrollLock);
                };




            }),

        "./js/utils/scroll-lock.js":
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "disableScrolling", function () { return disableScrolling; });
                __webpack_require__.d(__webpack_exports__, "enableScrolling", function () { return enableScrolling; });
                var body = document.querySelector('body');

                var getScrollbarWidth = function getScrollbarWidth() {
                    var outer = document.createElement('div');
                    outer.style.visibility = 'hidden';
                    outer.style.overflow = 'scroll';
                    outer.style.msOverflowStyle = 'scrollbar';
                    body.appendChild(outer);
                    var inner = document.createElement('div');
                    outer.appendChild(inner);
                    var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
                    outer.parentNode.removeChild(outer);

                    if (body.offsetHeight > window.innerHeight) {
                        return scrollbarWidth;
                    }
                };

                var getBodyScrollTop = function getBodyScrollTop() {
                    return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;
                };

                var disableScrolling = function disableScrolling(noScrollbar) {
                    if (!noScrollbar) {
                        var scrollWidth = getScrollbarWidth();
                        body.setAttribute('style', "padding-right: ".concat(scrollWidth, "px;"));
                    }

                    body.dataset.scrollY = "".concat(getBodyScrollTop());
                    body.style.top = "-".concat(body.dataset.scrollY, "px");
                    body.classList.add('scroll-lock');
                };

                var enableScrolling = function enableScrolling() {
                    body.removeAttribute('style');
                    body.classList.remove('scroll-lock');
                    window.scrollTo(0, +body.dataset.scrollY);
                };




            })


    });