/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-test/./src/app.css?");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMException\": () => (/* binding */ DOMException),\n/* harmony export */   \"Headers\": () => (/* binding */ Headers),\n/* harmony export */   \"Request\": () => (/* binding */ Request),\n/* harmony export */   \"Response\": () => (/* binding */ Response),\n/* harmony export */   \"fetch\": () => (/* binding */ fetch)\n/* harmony export */ });\nvar global =\n  (typeof globalThis !== 'undefined' && globalThis) ||\n  (typeof self !== 'undefined' && self) ||\n  (typeof global !== 'undefined' && global)\n\nvar support = {\n  searchParams: 'URLSearchParams' in global,\n  iterable: 'Symbol' in global && 'iterator' in Symbol,\n  blob:\n    'FileReader' in global &&\n    'Blob' in global &&\n    (function() {\n      try {\n        new Blob()\n        return true\n      } catch (e) {\n        return false\n      }\n    })(),\n  formData: 'FormData' in global,\n  arrayBuffer: 'ArrayBuffer' in global\n}\n\nfunction isDataView(obj) {\n  return obj && DataView.prototype.isPrototypeOf(obj)\n}\n\nif (support.arrayBuffer) {\n  var viewClasses = [\n    '[object Int8Array]',\n    '[object Uint8Array]',\n    '[object Uint8ClampedArray]',\n    '[object Int16Array]',\n    '[object Uint16Array]',\n    '[object Int32Array]',\n    '[object Uint32Array]',\n    '[object Float32Array]',\n    '[object Float64Array]'\n  ]\n\n  var isArrayBufferView =\n    ArrayBuffer.isView ||\n    function(obj) {\n      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n    }\n}\n\nfunction normalizeName(name) {\n  if (typeof name !== 'string') {\n    name = String(name)\n  }\n  if (/[^a-z0-9\\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {\n    throw new TypeError('Invalid character in header field name: \"' + name + '\"')\n  }\n  return name.toLowerCase()\n}\n\nfunction normalizeValue(value) {\n  if (typeof value !== 'string') {\n    value = String(value)\n  }\n  return value\n}\n\n// Build a destructive iterator for the value list\nfunction iteratorFor(items) {\n  var iterator = {\n    next: function() {\n      var value = items.shift()\n      return {done: value === undefined, value: value}\n    }\n  }\n\n  if (support.iterable) {\n    iterator[Symbol.iterator] = function() {\n      return iterator\n    }\n  }\n\n  return iterator\n}\n\nfunction Headers(headers) {\n  this.map = {}\n\n  if (headers instanceof Headers) {\n    headers.forEach(function(value, name) {\n      this.append(name, value)\n    }, this)\n  } else if (Array.isArray(headers)) {\n    headers.forEach(function(header) {\n      this.append(header[0], header[1])\n    }, this)\n  } else if (headers) {\n    Object.getOwnPropertyNames(headers).forEach(function(name) {\n      this.append(name, headers[name])\n    }, this)\n  }\n}\n\nHeaders.prototype.append = function(name, value) {\n  name = normalizeName(name)\n  value = normalizeValue(value)\n  var oldValue = this.map[name]\n  this.map[name] = oldValue ? oldValue + ', ' + value : value\n}\n\nHeaders.prototype['delete'] = function(name) {\n  delete this.map[normalizeName(name)]\n}\n\nHeaders.prototype.get = function(name) {\n  name = normalizeName(name)\n  return this.has(name) ? this.map[name] : null\n}\n\nHeaders.prototype.has = function(name) {\n  return this.map.hasOwnProperty(normalizeName(name))\n}\n\nHeaders.prototype.set = function(name, value) {\n  this.map[normalizeName(name)] = normalizeValue(value)\n}\n\nHeaders.prototype.forEach = function(callback, thisArg) {\n  for (var name in this.map) {\n    if (this.map.hasOwnProperty(name)) {\n      callback.call(thisArg, this.map[name], name, this)\n    }\n  }\n}\n\nHeaders.prototype.keys = function() {\n  var items = []\n  this.forEach(function(value, name) {\n    items.push(name)\n  })\n  return iteratorFor(items)\n}\n\nHeaders.prototype.values = function() {\n  var items = []\n  this.forEach(function(value) {\n    items.push(value)\n  })\n  return iteratorFor(items)\n}\n\nHeaders.prototype.entries = function() {\n  var items = []\n  this.forEach(function(value, name) {\n    items.push([name, value])\n  })\n  return iteratorFor(items)\n}\n\nif (support.iterable) {\n  Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n}\n\nfunction consumed(body) {\n  if (body.bodyUsed) {\n    return Promise.reject(new TypeError('Already read'))\n  }\n  body.bodyUsed = true\n}\n\nfunction fileReaderReady(reader) {\n  return new Promise(function(resolve, reject) {\n    reader.onload = function() {\n      resolve(reader.result)\n    }\n    reader.onerror = function() {\n      reject(reader.error)\n    }\n  })\n}\n\nfunction readBlobAsArrayBuffer(blob) {\n  var reader = new FileReader()\n  var promise = fileReaderReady(reader)\n  reader.readAsArrayBuffer(blob)\n  return promise\n}\n\nfunction readBlobAsText(blob) {\n  var reader = new FileReader()\n  var promise = fileReaderReady(reader)\n  reader.readAsText(blob)\n  return promise\n}\n\nfunction readArrayBufferAsText(buf) {\n  var view = new Uint8Array(buf)\n  var chars = new Array(view.length)\n\n  for (var i = 0; i < view.length; i++) {\n    chars[i] = String.fromCharCode(view[i])\n  }\n  return chars.join('')\n}\n\nfunction bufferClone(buf) {\n  if (buf.slice) {\n    return buf.slice(0)\n  } else {\n    var view = new Uint8Array(buf.byteLength)\n    view.set(new Uint8Array(buf))\n    return view.buffer\n  }\n}\n\nfunction Body() {\n  this.bodyUsed = false\n\n  this._initBody = function(body) {\n    /*\n      fetch-mock wraps the Response object in an ES6 Proxy to\n      provide useful test harness features such as flush. However, on\n      ES5 browsers without fetch or Proxy support pollyfills must be used;\n      the proxy-pollyfill is unable to proxy an attribute unless it exists\n      on the object before the Proxy is created. This change ensures\n      Response.bodyUsed exists on the instance, while maintaining the\n      semantic of setting Request.bodyUsed in the constructor before\n      _initBody is called.\n    */\n    this.bodyUsed = this.bodyUsed\n    this._bodyInit = body\n    if (!body) {\n      this._bodyText = ''\n    } else if (typeof body === 'string') {\n      this._bodyText = body\n    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n      this._bodyBlob = body\n    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n      this._bodyFormData = body\n    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n      this._bodyText = body.toString()\n    } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n      this._bodyArrayBuffer = bufferClone(body.buffer)\n      // IE 10-11 can't handle a DataView body.\n      this._bodyInit = new Blob([this._bodyArrayBuffer])\n    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n      this._bodyArrayBuffer = bufferClone(body)\n    } else {\n      this._bodyText = body = Object.prototype.toString.call(body)\n    }\n\n    if (!this.headers.get('content-type')) {\n      if (typeof body === 'string') {\n        this.headers.set('content-type', 'text/plain;charset=UTF-8')\n      } else if (this._bodyBlob && this._bodyBlob.type) {\n        this.headers.set('content-type', this._bodyBlob.type)\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n      }\n    }\n  }\n\n  if (support.blob) {\n    this.blob = function() {\n      var rejected = consumed(this)\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return Promise.resolve(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as blob')\n      } else {\n        return Promise.resolve(new Blob([this._bodyText]))\n      }\n    }\n\n    this.arrayBuffer = function() {\n      if (this._bodyArrayBuffer) {\n        var isConsumed = consumed(this)\n        if (isConsumed) {\n          return isConsumed\n        }\n        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {\n          return Promise.resolve(\n            this._bodyArrayBuffer.buffer.slice(\n              this._bodyArrayBuffer.byteOffset,\n              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength\n            )\n          )\n        } else {\n          return Promise.resolve(this._bodyArrayBuffer)\n        }\n      } else {\n        return this.blob().then(readBlobAsArrayBuffer)\n      }\n    }\n  }\n\n  this.text = function() {\n    var rejected = consumed(this)\n    if (rejected) {\n      return rejected\n    }\n\n    if (this._bodyBlob) {\n      return readBlobAsText(this._bodyBlob)\n    } else if (this._bodyArrayBuffer) {\n      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n    } else if (this._bodyFormData) {\n      throw new Error('could not read FormData body as text')\n    } else {\n      return Promise.resolve(this._bodyText)\n    }\n  }\n\n  if (support.formData) {\n    this.formData = function() {\n      return this.text().then(decode)\n    }\n  }\n\n  this.json = function() {\n    return this.text().then(JSON.parse)\n  }\n\n  return this\n}\n\n// HTTP methods whose capitalization should be normalized\nvar methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']\n\nfunction normalizeMethod(method) {\n  var upcased = method.toUpperCase()\n  return methods.indexOf(upcased) > -1 ? upcased : method\n}\n\nfunction Request(input, options) {\n  if (!(this instanceof Request)) {\n    throw new TypeError('Please use the \"new\" operator, this DOM object constructor cannot be called as a function.')\n  }\n\n  options = options || {}\n  var body = options.body\n\n  if (input instanceof Request) {\n    if (input.bodyUsed) {\n      throw new TypeError('Already read')\n    }\n    this.url = input.url\n    this.credentials = input.credentials\n    if (!options.headers) {\n      this.headers = new Headers(input.headers)\n    }\n    this.method = input.method\n    this.mode = input.mode\n    this.signal = input.signal\n    if (!body && input._bodyInit != null) {\n      body = input._bodyInit\n      input.bodyUsed = true\n    }\n  } else {\n    this.url = String(input)\n  }\n\n  this.credentials = options.credentials || this.credentials || 'same-origin'\n  if (options.headers || !this.headers) {\n    this.headers = new Headers(options.headers)\n  }\n  this.method = normalizeMethod(options.method || this.method || 'GET')\n  this.mode = options.mode || this.mode || null\n  this.signal = options.signal || this.signal\n  this.referrer = null\n\n  if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n    throw new TypeError('Body not allowed for GET or HEAD requests')\n  }\n  this._initBody(body)\n\n  if (this.method === 'GET' || this.method === 'HEAD') {\n    if (options.cache === 'no-store' || options.cache === 'no-cache') {\n      // Search for a '_' parameter in the query string\n      var reParamSearch = /([?&])_=[^&]*/\n      if (reParamSearch.test(this.url)) {\n        // If it already exists then set the value with the current time\n        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())\n      } else {\n        // Otherwise add a new '_' parameter to the end with the current time\n        var reQueryString = /\\?/\n        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()\n      }\n    }\n  }\n}\n\nRequest.prototype.clone = function() {\n  return new Request(this, {body: this._bodyInit})\n}\n\nfunction decode(body) {\n  var form = new FormData()\n  body\n    .trim()\n    .split('&')\n    .forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n  return form\n}\n\nfunction parseHeaders(rawHeaders) {\n  var headers = new Headers()\n  // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n  // https://tools.ietf.org/html/rfc7230#section-3.2\n  var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ')\n  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill\n  // https://github.com/github/fetch/issues/748\n  // https://github.com/zloirock/core-js/issues/751\n  preProcessedHeaders\n    .split('\\r')\n    .map(function(header) {\n      return header.indexOf('\\n') === 0 ? header.substr(1, header.length) : header\n    })\n    .forEach(function(line) {\n      var parts = line.split(':')\n      var key = parts.shift().trim()\n      if (key) {\n        var value = parts.join(':').trim()\n        headers.append(key, value)\n      }\n    })\n  return headers\n}\n\nBody.call(Request.prototype)\n\nfunction Response(bodyInit, options) {\n  if (!(this instanceof Response)) {\n    throw new TypeError('Please use the \"new\" operator, this DOM object constructor cannot be called as a function.')\n  }\n  if (!options) {\n    options = {}\n  }\n\n  this.type = 'default'\n  this.status = options.status === undefined ? 200 : options.status\n  this.ok = this.status >= 200 && this.status < 300\n  this.statusText = options.statusText === undefined ? '' : '' + options.statusText\n  this.headers = new Headers(options.headers)\n  this.url = options.url || ''\n  this._initBody(bodyInit)\n}\n\nBody.call(Response.prototype)\n\nResponse.prototype.clone = function() {\n  return new Response(this._bodyInit, {\n    status: this.status,\n    statusText: this.statusText,\n    headers: new Headers(this.headers),\n    url: this.url\n  })\n}\n\nResponse.error = function() {\n  var response = new Response(null, {status: 0, statusText: ''})\n  response.type = 'error'\n  return response\n}\n\nvar redirectStatuses = [301, 302, 303, 307, 308]\n\nResponse.redirect = function(url, status) {\n  if (redirectStatuses.indexOf(status) === -1) {\n    throw new RangeError('Invalid status code')\n  }\n\n  return new Response(null, {status: status, headers: {location: url}})\n}\n\nvar DOMException = global.DOMException\ntry {\n  new DOMException()\n} catch (err) {\n  DOMException = function(message, name) {\n    this.message = message\n    this.name = name\n    var error = Error(message)\n    this.stack = error.stack\n  }\n  DOMException.prototype = Object.create(Error.prototype)\n  DOMException.prototype.constructor = DOMException\n}\n\nfunction fetch(input, init) {\n  return new Promise(function(resolve, reject) {\n    var request = new Request(input, init)\n\n    if (request.signal && request.signal.aborted) {\n      return reject(new DOMException('Aborted', 'AbortError'))\n    }\n\n    var xhr = new XMLHttpRequest()\n\n    function abortXhr() {\n      xhr.abort()\n    }\n\n    xhr.onload = function() {\n      var options = {\n        status: xhr.status,\n        statusText: xhr.statusText,\n        headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n      }\n      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')\n      var body = 'response' in xhr ? xhr.response : xhr.responseText\n      setTimeout(function() {\n        resolve(new Response(body, options))\n      }, 0)\n    }\n\n    xhr.onerror = function() {\n      setTimeout(function() {\n        reject(new TypeError('Network request failed'))\n      }, 0)\n    }\n\n    xhr.ontimeout = function() {\n      setTimeout(function() {\n        reject(new TypeError('Network request failed'))\n      }, 0)\n    }\n\n    xhr.onabort = function() {\n      setTimeout(function() {\n        reject(new DOMException('Aborted', 'AbortError'))\n      }, 0)\n    }\n\n    function fixUrl(url) {\n      try {\n        return url === '' && global.location.href ? global.location.href : url\n      } catch (e) {\n        return url\n      }\n    }\n\n    xhr.open(request.method, fixUrl(request.url), true)\n\n    if (request.credentials === 'include') {\n      xhr.withCredentials = true\n    } else if (request.credentials === 'omit') {\n      xhr.withCredentials = false\n    }\n\n    if ('responseType' in xhr) {\n      if (support.blob) {\n        xhr.responseType = 'blob'\n      } else if (\n        support.arrayBuffer &&\n        request.headers.get('Content-Type') &&\n        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1\n      ) {\n        xhr.responseType = 'arraybuffer'\n      }\n    }\n\n    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {\n      Object.getOwnPropertyNames(init.headers).forEach(function(name) {\n        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))\n      })\n    } else {\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n    }\n\n    if (request.signal) {\n      request.signal.addEventListener('abort', abortXhr)\n\n      xhr.onreadystatechange = function() {\n        // DONE (success or failure)\n        if (xhr.readyState === 4) {\n          request.signal.removeEventListener('abort', abortXhr)\n        }\n      }\n    }\n\n    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n  })\n}\n\nfetch.polyfill = true\n\nif (!global.fetch) {\n  global.fetch = fetch\n  global.Headers = Headers\n  global.Request = Request\n  global.Response = Response\n}\n\n\n//# sourceURL=webpack://webpack-test/./node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./src/app.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\nconst table1 = document.querySelector(\".table1\");\r\nconst btnAll = document.querySelector(\".btn-all\");\r\nconst btnHelp = document.querySelector(\".btn-help\");\r\nconst btnGit = document.querySelector(\".btn-git\");\r\nconst btnRecent = document.querySelector(\".btn-recent\");\r\n\r\nconst classUrl = new URL(/* asset import */ __webpack_require__(/*! ./class.json */ \"./src/class.json\"), __webpack_require__.b);\r\nconst quizUrl = new URL(/* asset import */ __webpack_require__(/*! ./quiz.json */ \"./src/quiz.json\"), __webpack_require__.b);\r\n// console.log(classUrl.href);\r\n// 학습\r\nfunction fetchClass(callback){\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showClassLoading)();\r\n\r\n    fetch(classUrl.href)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        setTimeout(_utils__WEBPACK_IMPORTED_MODULE_1__.hideClassLoading,1000);\r\n        callback(data)\r\n})\r\n}\r\n\r\nfunction callbackFunc(btn,data){\r\n    const classData = data;\r\n    let checkBtn = btn;\r\n    console.log('classData',classData);\r\n\r\n    if (checkBtn === \"all\"){\r\n        showAll(classData);\r\n    } else if (checkBtn === \"help\"){\r\n        showHelp(classData);\r\n    } else if (checkBtn === \"git\"){\r\n        showGit(classData);\r\n    } else {\r\n        showRecent(classData);\r\n    }\r\n}\r\n\r\n// 학습리스트 필터 - 모두\r\nfunction showAll(classData){\r\n    let str = \"\"\r\n    \r\n    for (let i=0; i<classData.length; i++){\r\n        str += `<tr><th scope=\"row\">${i+1}</th>\r\n        <td>${classData[i].title}</td>\r\n        <td><a href=\"${classData[i].docUrl}\" class=\"badge bg-secondary\">문서</a></td>\r\n        <td>`\r\n        \r\n        if (classData[i].links.length >0){\r\n            for (let j=0; j<classData[i].links.length; j++){\r\n                str += `<a href=\"${classData[i].links[j]}\" class=\"badge bg-secondary link\">${j+1}</a>`\r\n            }\r\n        }\r\n        \r\n        str += `</td>\r\n        <td>${classData[i].date}</td>\r\n        <td><a href=${classData[i].gitUrl}>git</a></td><tr>`\r\n\r\n    }\r\n    table1.innerHTML = str\r\n}\r\n\r\n// 학습리스트 필터 - 도움링크\r\nfunction showHelp(classData){\r\n    let str = \"\"\r\n\r\n    console.log(\"showJJe\")\r\n    for (let i=0; i<classData.length; i++){\r\n        if (classData[i].links.length > 0){\r\n            str += `<tr><th scope=\"row\">${i+1}</th>\r\n            <td>${classData[i].title}</td>\r\n            <td><a href=\"${classData[i].docUrl}\" class=\"badge bg-secondary\">문서</a></td>\r\n            <td>`\r\n            \r\n            for (let j=0; j<classData[i].links.length; j++){\r\n                str += `<a href=\"${classData[i].links[j]}\" class=\"badge bg-secondary link\">${j+1}</a>`\r\n            }\r\n            \r\n            str += `</td>\r\n            <td>${classData[i].date}</td>\r\n            <td><a href=${classData[i].gitUrl}>git</a></td><tr>`\r\n    \r\n        }\r\n\r\n    }\r\n    table1.innerHTML = str\r\n}\r\n\r\n// 학습리스트 필터 - git\r\nfunction showGit(classData){\r\n    let str = \"\"\r\n\r\n    for (let i=0; i<classData.length; i++){\r\n        if (classData[i].gitUrl && classData[i].gitUrl !== \"\"){\r\n            str += `<tr><th scope=\"row\">${i+1}</th>\r\n            <td>${classData[i].title}</td>\r\n            <td><a href=\"${classData[i].docUrl}\" class=\"badge bg-secondary\">문서</a></td>\r\n            <td>`\r\n            \r\n            for (let j=0; j<classData[i].links.length; j++){\r\n                str += `<a href=\"${classData[i].links[j]}\" class=\"badge bg-secondary link\">${j+1}</a>`\r\n            }\r\n            \r\n            str += `</td>\r\n            <td>${classData[i].date}</td>\r\n            <td><a href=${classData[i].gitUrl}>git</a></td><tr>`\r\n        }\r\n\r\n    }\r\n    table1.innerHTML = str\r\n}\r\n\r\n\r\n// 학습리스트 필터 - 최신순\r\nfunction showRecent(classData){\r\n    let str = \"\"\r\n    let count = classData.length;\r\n\r\n    console.log(classData.sort(_utils__WEBPACK_IMPORTED_MODULE_1__.recentDate));\r\n    for (let i=0; i<classData.length; i++){\r\n        str += `<tr><th scope=\"row\">${count}</th>\r\n        <td>${classData[i].title}</td>\r\n        <td><a href=\"${classData[i].docUrl}\" class=\"badge bg-secondary\">문서</a></td>\r\n        <td>`\r\n        \r\n        if (classData[i].links.length >0){\r\n            for (let j=0; j<classData[i].links.length; j++){\r\n                str += `<a href=\"${classData[i].links[j]}\" class=\"badge bg-secondary link\">${j+1}</a>`\r\n            }\r\n        }\r\n        \r\n        str += `</td>\r\n        <td>${classData[i].date}</td>\r\n        <td><a href=${classData[i].gitUrl}>git</a></td><tr>`\r\n\r\n        count--;\r\n    }\r\n    table1.innerHTML = str\r\n}\r\n\r\n\r\nfunction handleBtnAll(event){\r\n    btnAll.classList.add(\"active\");\r\n    btnHelp.classList.remove(\"active\");\r\n    btnGit.classList.remove(\"active\");\r\n    btnRecent.classList.remove(\"active\");\r\n\r\n    fetchClass((data) => callbackFunc(\"all\",data))\r\n}\r\n\r\nfunction handleBtnHelp(){\r\n    btnHelp.classList.add(\"active\");\r\n    btnAll.classList.remove(\"active\");\r\n    btnGit.classList.remove(\"active\");\r\n    btnRecent.classList.remove(\"active\");\r\n\r\n    fetchClass((data) => callbackFunc(\"help\",data))\r\n}\r\n\r\nfunction handleBtnGit(){\r\n    btnGit.classList.add(\"active\");\r\n    btnAll.classList.remove(\"active\");\r\n    btnHelp.classList.remove(\"active\");\r\n    btnRecent.classList.remove(\"active\");\r\n\r\n    fetchClass((data) => callbackFunc(\"git\",data))\r\n}\r\n\r\nfunction handleBtnRecent(){\r\n    btnRecent.classList.add(\"active\");\r\n    btnAll.classList.remove(\"active\");\r\n    btnHelp.classList.remove(\"active\");\r\n    btnGit.classList.remove(\"active\");\r\n\r\n    fetchClass((data) => callbackFunc(\"recent\",data))\r\n}\r\n\r\n//퀴즈\r\nconst table2 = document.querySelector(\".table2\");\r\nconst btnQuizAll = document.querySelector(\".quiz-all\");\r\nconst btnQuizgit = document.querySelector(\".quiz-git\");\r\n\r\nfunction fetchQuiz(callback){\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showQuizLoading)();\r\n    \r\n    fetch(quizUrl.href)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        setTimeout(_utils__WEBPACK_IMPORTED_MODULE_1__.hideQuizLoading, 1000)\r\n        callback(data)\r\n})\r\n}\r\n\r\nfunction callbackFunc2(btn,data){\r\n    const quizData = data;\r\n    let checkBtn = btn;\r\n    console.log(\"quizData\", quizData)\r\n\r\n    if (checkBtn === \"allQuiz\"){\r\n        showQuizAll(quizData);\r\n    }else if(checkBtn === \"gitQuiz\"){\r\n        showQuizGit(quizData);\r\n    }\r\n}\r\n\r\n// 퀴즈리스트 필터 - 모두\r\nfunction showQuizAll(quizData){\r\n    let str = \"\"\r\n    \r\n    for (let i=0; i<quizData.length; i++){\r\n        str += `<tr><td>${quizData[i].title}</td>\r\n        <td><a href=\"${quizData[i].docUrl}\" class=\"badge bg-secondary\">문서</a></td>\r\n        <td><a href=\"${quizData[i].previewUrl}\">보기</a></td>\r\n        <td><a href=\"${quizData[i].gitUrl}\">git</a></td><tr>`\r\n    }\r\n\r\n    table2.innerHTML = str\r\n}\r\n\r\n// 퀴즈리스트 필터 - git\r\nfunction showQuizGit(quizData){\r\n    let str = \"\"\r\n\r\n    for (let i=0; i<quizData.length; i++){\r\n        if (quizData[i].gitUrl && quizData[i].gitUrl !== \"\"){\r\n            str += `<tr><td>${quizData[i].title}</td>\r\n            <td><a href=\"${quizData[i].docUrl}\" class=\"badge bg-secondary\">문서</a></td>\r\n            <td><a href=\"${quizData[i].previewUrl}\">보기</a></td>\r\n            <td><a href=\"${quizData[i].gitUrl}\">git</a></td><tr>`\r\n        }\r\n    }\r\n    table2.innerHTML = str\r\n}\r\n\r\nfunction handleQuizAll(){\r\n    btnQuizAll.classList.add(\"active\");\r\n    btnQuizgit.classList.remove(\"active\");\r\n\r\n    fetchQuiz((data) => callbackFunc2(\"allQuiz\",data));\r\n}\r\n\r\nfunction handleQuizGit(){\r\n    btnQuizAll.classList.remove(\"active\");\r\n    btnQuizgit.classList.add(\"active\");\r\n\r\n    fetchQuiz((data) => callbackFunc2(\"gitQuiz\",data));\r\n}\r\n\r\n// 초기 \r\nfunction init(){\r\n    fetchClass((data) => callbackFunc(\"all\",data));\r\n    fetchQuiz((data) => callbackFunc2(\"allQuiz\",data));\r\n\r\n    // 학습리스트 필터 버튼\r\n    btnAll.addEventListener(\"click\",handleBtnAll);\r\n    btnHelp.addEventListener(\"click\",handleBtnHelp);\r\n    btnGit.addEventListener(\"click\",handleBtnGit);\r\n    btnRecent.addEventListener(\"click\",handleBtnRecent);\r\n\r\n    // 퀴즈리스트 필터 버튼\r\n    btnQuizAll.addEventListener(\"click\", handleQuizAll);\r\n    btnQuizgit.addEventListener(\"click\", handleQuizGit);\r\n}\r\n\r\n\r\ninit();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideClassLoading\": () => (/* binding */ hideClassLoading),\n/* harmony export */   \"hideQuizLoading\": () => (/* binding */ hideQuizLoading),\n/* harmony export */   \"recentDate\": () => (/* binding */ recentDate),\n/* harmony export */   \"showClassLoading\": () => (/* binding */ showClassLoading),\n/* harmony export */   \"showQuizLoading\": () => (/* binding */ showQuizLoading)\n/* harmony export */ });\n// utils.js\r\n\r\n// 날짜 최신순(내림차순) 정렬 module\r\nconst recentDate = (a,b) => {\r\n    const dateA = new Date(a['date']).getTime();\r\n    const dateB = new Date(b['date']).getTime();\r\n\r\n    return dateA < dateB ? 1 : -1;\r\n}\r\n\r\n// 로딩 module\r\nconst classTable = document.querySelector(\".classTable\");\r\nconst quizTable = document.querySelector(\".quizTable\");\r\nconst quizSpinner = document.querySelector(\".js-quizSpinner\");\r\nconst classSpinner = document.querySelector(\".js-classSpinner\");\r\n\r\nconst showClassLoading = () => {\r\n    classTable.style.display = \"none\"\r\n    classSpinner.style.display=\"block\"\r\n}\r\n\r\nconst hideClassLoading = () => {\r\n    classSpinner.style.display=\"none\"\r\n    classTable.style.display = \"table\"\r\n}\r\n\r\nconst showQuizLoading = () => {\r\n    quizTable.style.display = \"none\"\r\n    quizSpinner.style.display=\"block\"\r\n}\r\n\r\nconst hideQuizLoading = () => {\r\n    quizSpinner.style.display=\"none\"\r\n    quizTable.style.display = \"table\"\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-test/./src/utils.js?");

/***/ }),

/***/ "./src/class.json":
/*!************************!*\
  !*** ./src/class.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80676e2d88df6023d516.json\";\n\n//# sourceURL=webpack://webpack-test/./src/class.json?");

/***/ }),

/***/ "./src/quiz.json":
/*!***********************!*\
  !*** ./src/quiz.json ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bc2a836c75105babe37.json\";\n\n//# sourceURL=webpack://webpack-test/./src/quiz.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./node_modules/whatwg-fetch/fetch.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;