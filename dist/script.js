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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/progress */ "./src/js/modules/progress.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_0__["default"])("2021-06-30");
  Object(_modules_progress__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-current]", "[data-total]", "[data-line]");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])("[data-open]", "[data-modal]", "[data-close]");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])("[data-open-account]", "[data-modal-account]", "[data-close-account]");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-form]", "[data-input]", "[data-modal]", "input[name='user__name']", "input[name='user__phone']");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-form-account]", "[data-input-account]", "[data-modal-account]");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-form-sub]", "[data-input-sub");
});

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./src/js/services/service.js");


const form = (formSelector, inputSelector, modalSelector, nameSelector, phoneSelector) => {
  const form = document.querySelector(formSelector),
        input = document.querySelectorAll(inputSelector),
        modal = document.querySelector(modalSelector),
        name = document.querySelector(nameSelector),
        phone = document.querySelector(phoneSelector);

  if (name || phone) {
    name.addEventListener("input", () => {
      name.value = name.value.replace(/\d/, "");
    });
    phone.addEventListener("input", () => {
      phone.value = phone.value.replace(/\D/, "");
    });
  }

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    error: "Что-то пошло не так..."
  };
  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.createElement("div");
    status.classList.add("status");
    form.appendChild(status);

    if (form.getAttribute("data-form") === "status") {
      status.textContent = message.loading;
    }

    const formData = new FormData(form);
    const data = JSON.stringify(Object.fromEntries(formData.entries()));
    Object(_services_service__WEBPACK_IMPORTED_MODULE_0__["default"])(data).then(res => {
      console.log(res);

      if (form.getAttribute("data-form") === "status") {
        status.textContent = message.success;
      }
    }).catch(() => {
      if (form.getAttribute("data-form") === "status") {
        status.textContent = message.error;
      }
    }).finally(() => {
      input.forEach(item => item.value = "");

      if (form.getAttribute("data-form") === "status" || form.getAttribute("data-form-account") === "modal") {
        setTimeout(() => {
          status.remove();
          modal.style.display = "none";
          document.body.style.overflow = "";
          document.body.style.marginRight = "0px";
        }, 3000);
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modal = (openSelector, modalSelector, closeSelector) => {
  const open = document.querySelector(openSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);
  const offset = calcScroll();
  open.addEventListener("click", event => {
    event.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${offset}px`;
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = "0px";
  });
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    }
  });
  window.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    }
  });

  function calcScroll() {
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    const width = div.offsetWidth - div.clientWidth;
    div.remove();
    return width;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/progress.js":
/*!************************************!*\
  !*** ./src/js/modules/progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const progress = (currentSelector, totalSelector, lineSelector) => {
  const current = document.querySelector(currentSelector).innerHTML,
        total = document.querySelector(totalSelector).innerHTML,
        line = document.querySelector(lineSelector);
  const a = +current.replace(/\s/g, "").replace(/.$/, "").slice(0, total.replace(/\s/g, "").replace(/.$/, "").length);
  const b = +total.replace(/\s/g, "").replace(/.$/, "");

  if (a >= b) {
    line.style.width = "100%";
  } else {
    line.style.width = a / b * 100 + "%";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (progress);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timer = deadline => {
  let days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds");
  let interval = setInterval(setUpdateTime, 1000);
  setUpdateTime();

  function getTimeRiming(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    return {
      total: t,
      days: Math.floor(t / (1000 * 60 * 60 * 24)),
      hours: Math.floor(t / (1000 * 60 * 60) % 24),
      minutes: Math.floor(t / 1000 / 60 % 60),
      seconds: Math.floor(t / 1000 % 60)
    };
  }

  function setUpdateTime() {
    let time = getTimeRiming(deadline);
    days.textContent = setTimeZero(time.days), hours.textContent = setTimeZero(time.hours), minutes.textContent = setTimeZero(time.minutes), seconds.textContent = setTimeZero(time.seconds);

    if (time.total <= 0) {
      clearInterval(interval);
    }
  }

  function setTimeZero(number) {
    if (number >= 0 && number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const postData = async data => {
  const url = "http://localhost:3000/requests";
  const res = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json"
    }
  });
  return await res.json();
};

/* harmony default export */ __webpack_exports__["default"] = (postData);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map