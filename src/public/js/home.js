/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/***/ (() => {

eval("window.onload = function () {\n  setInterval(function () {\n    axios.post('/get-last-transactions').then(function (response) {\n      if (response.data.amount) {\n        $('.balance-amount').text(response.data.amount);\n      }\n\n      if (response.data.incomes && response.data.incomes.length > 0) {\n        var incomes_html = '';\n\n        for (var i = 0; i < response.data.incomes.length; i++) {\n          incomes_html += '<p>' + response.data.incomes[i].from + ', ' + response.data.incomes[i].to + ', ' + response.data.incomes[i].amount + ', ' + response.data.incomes[i].description + ', ' + response.data.incomes[i].created_at + '</p>';\n        }\n\n        $('.incomes-list').html(incomes_html);\n      }\n\n      if (response.data.expenditures && response.data.expenditures.length > 0) {\n        var expenditures_html = '';\n\n        for (var _i = 0; _i < response.data.expenditures.length; _i++) {\n          expenditures_html += '<p>' + response.data.expenditures[_i].from + ', ' + response.data.expenditures[_i].to + ', ' + response.data.expenditures[_i].amount + ', ' + response.data.expenditures[_i].description + ', ' + response.data.expenditures[_i].created_at + '</p>';\n        }\n\n        $('.expenditures-list').html(expenditures_html);\n      }\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, 5000);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvaG9tZS5qcy5qcyIsIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNldEludGVydmFsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFtb3VudCIsIiQiLCJ0ZXh0IiwiaW5jb21lcyIsImxlbmd0aCIsImluY29tZXNfaHRtbCIsImkiLCJmcm9tIiwidG8iLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRfYXQiLCJodG1sIiwiZXhwZW5kaXR1cmVzIiwiZXhwZW5kaXR1cmVzX2h0bWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ob21lLmpzPzI0MmIiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdGF4aW9zLnBvc3QoJy9nZXQtbGFzdC10cmFuc2FjdGlvbnMnKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuYW1vdW50KSB7XHJcblx0XHRcdFx0JCgnLmJhbGFuY2UtYW1vdW50JykudGV4dChyZXNwb25zZS5kYXRhLmFtb3VudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEuaW5jb21lcyAmJiByZXNwb25zZS5kYXRhLmluY29tZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGxldCBpbmNvbWVzX2h0bWwgPSAnJztcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuZGF0YS5pbmNvbWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpbmNvbWVzX2h0bWwgKz0gJzxwPicgKyByZXNwb25zZS5kYXRhLmluY29tZXNbaV0uZnJvbSArICcsICcgKyBcclxuXHRcdFx0XHRcdFx0cmVzcG9uc2UuZGF0YS5pbmNvbWVzW2ldLnRvICsgJywgJyArIFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZS5kYXRhLmluY29tZXNbaV0uYW1vdW50ICsgJywgJyArIFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZS5kYXRhLmluY29tZXNbaV0uZGVzY3JpcHRpb24gKyAnLCAnICsgXHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlLmRhdGEuaW5jb21lc1tpXS5jcmVhdGVkX2F0ICsgJzwvcD4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcuaW5jb21lcy1saXN0JykuaHRtbChpbmNvbWVzX2h0bWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZihyZXNwb25zZS5kYXRhLmV4cGVuZGl0dXJlcyAmJiByZXNwb25zZS5kYXRhLmV4cGVuZGl0dXJlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0bGV0IGV4cGVuZGl0dXJlc19odG1sID0gJyc7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEuZXhwZW5kaXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRleHBlbmRpdHVyZXNfaHRtbCArPSAnPHA+JyArIHJlc3BvbnNlLmRhdGEuZXhwZW5kaXR1cmVzW2ldLmZyb20gKyAnLCAnICsgXHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlLmRhdGEuZXhwZW5kaXR1cmVzW2ldLnRvICsgJywgJyArIFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZS5kYXRhLmV4cGVuZGl0dXJlc1tpXS5hbW91bnQgKyAnLCAnICsgXHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlLmRhdGEuZXhwZW5kaXR1cmVzW2ldLmRlc2NyaXB0aW9uICsgJywgJyArIFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZS5kYXRhLmV4cGVuZGl0dXJlc1tpXS5jcmVhdGVkX2F0ICsgJzwvcD4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcuZXhwZW5kaXR1cmVzLWxpc3QnKS5odG1sKGV4cGVuZGl0dXJlc19odG1sKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9LCA1MDAwKTtcclxuXHRcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztFQUMxQkMsV0FBVyxDQUFDLFlBQU07SUFDakJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLHdCQUFYLEVBQ0NDLElBREQsQ0FDTSxVQUFVQyxRQUFWLEVBQW9CO01BQ3pCLElBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFqQixFQUF5QjtRQUN4QkMsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLElBQXJCLENBQTBCSixRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBeEM7TUFDQTs7TUFFRCxJQUFHRixRQUFRLENBQUNDLElBQVQsQ0FBY0ksT0FBZCxJQUF5QkwsUUFBUSxDQUFDQyxJQUFULENBQWNJLE9BQWQsQ0FBc0JDLE1BQXRCLEdBQStCLENBQTNELEVBQThEO1FBQzdELElBQUlDLFlBQVksR0FBRyxFQUFuQjs7UUFDQSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR1IsUUFBUSxDQUFDQyxJQUFULENBQWNJLE9BQWQsQ0FBc0JDLE1BQXpDLEVBQWlERSxDQUFDLEVBQWxELEVBQXNEO1VBQ3JERCxZQUFZLElBQUksUUFBUVAsUUFBUSxDQUFDQyxJQUFULENBQWNJLE9BQWQsQ0FBc0JHLENBQXRCLEVBQXlCQyxJQUFqQyxHQUF3QyxJQUF4QyxHQUNmVCxRQUFRLENBQUNDLElBQVQsQ0FBY0ksT0FBZCxDQUFzQkcsQ0FBdEIsRUFBeUJFLEVBRFYsR0FDZSxJQURmLEdBRWZWLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSSxPQUFkLENBQXNCRyxDQUF0QixFQUF5Qk4sTUFGVixHQUVtQixJQUZuQixHQUdmRixRQUFRLENBQUNDLElBQVQsQ0FBY0ksT0FBZCxDQUFzQkcsQ0FBdEIsRUFBeUJHLFdBSFYsR0FHd0IsSUFIeEIsR0FJZlgsUUFBUSxDQUFDQyxJQUFULENBQWNJLE9BQWQsQ0FBc0JHLENBQXRCLEVBQXlCSSxVQUpWLEdBSXVCLE1BSnZDO1FBS0E7O1FBRURULENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJVLElBQW5CLENBQXdCTixZQUF4QjtNQUNBOztNQUVELElBQUdQLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjYSxZQUFkLElBQThCZCxRQUFRLENBQUNDLElBQVQsQ0FBY2EsWUFBZCxDQUEyQlIsTUFBM0IsR0FBb0MsQ0FBckUsRUFBd0U7UUFDdkUsSUFBSVMsaUJBQWlCLEdBQUcsRUFBeEI7O1FBQ0EsS0FBSSxJQUFJUCxFQUFDLEdBQUcsQ0FBWixFQUFlQSxFQUFDLEdBQUdSLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjYSxZQUFkLENBQTJCUixNQUE5QyxFQUFzREUsRUFBQyxFQUF2RCxFQUEyRDtVQUMxRE8saUJBQWlCLElBQUksUUFBUWYsUUFBUSxDQUFDQyxJQUFULENBQWNhLFlBQWQsQ0FBMkJOLEVBQTNCLEVBQThCQyxJQUF0QyxHQUE2QyxJQUE3QyxHQUNwQlQsUUFBUSxDQUFDQyxJQUFULENBQWNhLFlBQWQsQ0FBMkJOLEVBQTNCLEVBQThCRSxFQURWLEdBQ2UsSUFEZixHQUVwQlYsUUFBUSxDQUFDQyxJQUFULENBQWNhLFlBQWQsQ0FBMkJOLEVBQTNCLEVBQThCTixNQUZWLEdBRW1CLElBRm5CLEdBR3BCRixRQUFRLENBQUNDLElBQVQsQ0FBY2EsWUFBZCxDQUEyQk4sRUFBM0IsRUFBOEJHLFdBSFYsR0FHd0IsSUFIeEIsR0FJcEJYLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjYSxZQUFkLENBQTJCTixFQUEzQixFQUE4QkksVUFKVixHQUl1QixNQUo1QztRQUtBOztRQUVEVCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QlUsSUFBeEIsQ0FBNkJFLGlCQUE3QjtNQUNBO0lBQ0QsQ0EvQkQsV0FnQ08sVUFBVUMsS0FBVixFQUFpQjtNQUN2QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7SUFDQSxDQWxDRDtFQW9DQSxDQXJDVSxFQXFDUixJQXJDUSxDQUFYO0FBdUNBLENBeENEIn0=\n//# sourceURL=webpack-internal:///./resources/js/home.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hODBiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/home": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/home.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;