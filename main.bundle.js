webpackJsonp([1,4],{

/***/ 304:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 304;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(418);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.text = "It\u2019s kind of fun to do the impossible.";
        this.run = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(474),
        styles: [__webpack_require__(472)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teximate_teximate_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__teximate_teximate_module__["a" /* TeximateModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_helper__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeAll__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_zip__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_timer__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_empty__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeximateDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TeximateDirective = (function () {
    function TeximateDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        /** Text input */
        this.textArr = [];
        /** The delay used for displaying elements */
        this.interval = 0;
    }
    Object.defineProperty(TeximateDirective.prototype, "tmType", {
        set: function (splitter) {
            this.splitter = __WEBPACK_IMPORTED_MODULE_2__functions_helper__["a" /* Helper */].getSplitter(splitter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeximateDirective.prototype, "tmRun", {
        set: function (flag) {
            var _this = this;
            if (flag) {
                __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.itemsArr)
                    .mergeAll()
                    .mergeAll()
                    .mergeMap(function (v, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(v).delay(i * _this.interval); })
                    .do(function (item) {
                    _this.renderer.setElementClass(item, _this.inAnimation.class, false);
                    _this.renderer.setElementClass(item, 'bounceOut', true);
                })
                    .subscribe();
                setTimeout(function () {
                    _this.job().subscribe();
                }, 2000);
            }
        },
        enumerable: true,
        configurable: true
    });
    TeximateDirective.prototype.ngOnInit = function () {
        this.job().subscribe();
    };
    TeximateDirective.prototype.job = function () {
        //Check if text is valid
        if (typeof this.teximate !== 'string') {
            console.warn('[texilate]: invalid input');
            return;
        }
        //Prepare host content
        this.renderer.setElementAttribute(this.el.nativeElement, 'aria-label', 'text');
        this.renderer.setElementProperty(this.el.nativeElement, 'innerText', '');
        this.itemsArr = this.textFactory(this.teximate);
        switch (this.inAnimation.method.toLowerCase()) {
            // case 'sequence':
            //   return this.sequence();
            // case 'reverse':
            //   return this.reverse();
            // case 'sync':
            //   return this.sync();
            case 'shuffle':
                return this.shuffle();
            default:
                console.warn('[texilate]: inAnimation invalid method input');
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
        }
    };
    TeximateDirective.prototype.textFactory = function (textBlock) {
        var _this = this;
        //Arrays for DOM elements
        var lineArr = [];
        // put lines into array
        var lines = textBlock.split('\n');
        lines.map(function (line, i) {
            var lineItem = _this.createLine(line, i);
            // put words into array
            var wordArr = [];
            var words = line.split(' ');
            words.map(function (word) {
                /** Loop over letters */
                var letterArr = [];
                var letters = word.split('');
                var wordItem = _this.createWord(lineItem, word, i);
                letters.map(function (letter, i) {
                    var letterItem = _this.createLetter(wordItem, letter, i);
                    letterArr.push(letterItem);
                });
                wordArr.push(letterArr);
            });
            lineArr.push(wordArr);
        });
        return lineArr;
    };
    /** Shuffle mode */
    TeximateDirective.prototype.shuffle = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.itemsArr)
            .mergeAll()
            .mergeAll()
            .mergeMap(function (v, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(v).delay(i * _this.interval); })
            .do(function (item) { return _this.showItem(item); });
        // .subscribe((r:any)  => console.log(r))
        // return Observable
        //   .timer(0, this.interval)
        //   .take(this.itemsArr.length)
        //   .map((i) => {
        //     console.log(i);
        //     Observable
        //       .timer(0, this.interval)
        //       .take(this.itemsArr[i].length)
        //       .map((j) => {
        //         console.log(i, j);
        //         Observable
        //           .timer(0, this.interval)
        //           .take(this.itemsArr[i][j].length)
        //           .map((k) => {
        //             console.log(i, j, k);
        //             this.showItem(this.itemsArr[i][j][k]);
        //           }).subscribe();
        //       }).subscribe();
        //   });
    };
    // /** Sync mode */
    // sync(): Observable<any> {
    //   return Observable.from(this.textArr)
    //     .map((text, i) => {
    //       let item = this.createWord(text, i);
    //       this.showItem(item);
    //     });
    // }
    // /** Sequence mode */
    // sequence(): Observable<any> {
    //   return Observable.zip(
    //     Observable.from(this.textArr)
    //       .map((text, i) => {
    //         let item = this.createWord(text, i);
    //         this.showItem(item);
    //       }),
    //     Observable.timer(0, this.interval), (item, i) => {
    //       this.showItem(this.itemsArr[i]);
    //     });
    // }
    // /** Reverse mode */
    // reverse(): Observable<any> {
    //   return Observable.zip(
    //     Observable.from(this.textArr)
    //       .map((text, i) => {
    //         let item = this.createWord(text, i);
    //         this.showItem(item);
    //       }),
    //     Observable.timer(0, this.interval), (item, i) => {
    //       this.showItem(this.itemsArr[this.itemsArr.length - i - 1]);
    //     });
    // }
    /** Create and return DOM element from the text input */
    TeximateDirective.prototype.createLetter = function (word, text, i) {
        var letter = this.renderer.createElement(word, 'span');
        this.renderer.setElementProperty(letter, 'innerText', text);
        this.renderer.setElementAttribute(letter, 'aria-hidden', 'true');
        this.renderer.setElementStyle(letter, 'display', 'inline-block');
        this.renderer.setElementStyle(letter, 'visibility', 'hidden');
        /** Set element class e.g. "char char1" */
        this.renderer.setElementClass(letter, 'char', true);
        this.renderer.setElementClass(letter, 'char' + i, true);
        /** Add animation class */
        this.renderer.setElementClass(letter, 'animated', true);
        return letter;
    };
    /** Create and return DOM element from the text input */
    TeximateDirective.prototype.createWord = function (line, text, i) {
        if (text === '')
            return;
        var word = this.renderer.createElement(line, 'span');
        this.renderer.setElementAttribute(word, 'aria-hidden', 'true');
        this.renderer.setElementStyle(word, 'display', 'inline-block');
        this.renderer.setElementStyle(word, 'visibility', 'hidden');
        this.renderer.setElementStyle(word, 'margin-right', '8px');
        /** Set element class e.g. "word word1" */
        this.renderer.setElementClass(word, 'word', true);
        this.renderer.setElementClass(word, 'word' + i, true);
        /** fix for poor ios performance */
        this.renderer.setElementStyle(word, '-webkit-transform', 'translate3d(0,0,0)');
        this.renderer.setElementStyle(word, '-moz-transform', 'translate3d(0,0,0)');
        this.renderer.setElementStyle(word, '-o-transform', 'translate3d(0,0,0)');
        this.renderer.setElementStyle(word, 'transform', 'translate3d(0,0,0)');
        /** Add animation class */
        this.renderer.setElementClass(word, 'animated', true);
        return word;
    };
    TeximateDirective.prototype.createLine = function (text, i) {
        var line = this.renderer.createElement(this.el.nativeElement, 'div');
        this.renderer.setElementAttribute(line, 'aria-hidden', 'true');
        this.renderer.setElementStyle(line, 'visibility', 'hidden');
        /** Set element class e.g. "line line1" */
        this.renderer.setElementClass(line, 'line', true);
        this.renderer.setElementClass(line, 'line' + i, true);
        return line;
    };
    /** Display DOM element */
    TeximateDirective.prototype.showItem = function (item) {
        this.renderer.setElementClass(item, this.inAnimation.class, true);
        this.renderer.setElementStyle(item, 'visibility', 'visible');
    };
    return TeximateDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], TeximateDirective.prototype, "teximate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TeximateDirective.prototype, "tmType", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('tmInterval'),
    __metadata("design:type", Object)
], TeximateDirective.prototype, "interval", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('tmIn'),
    __metadata("design:type", Object)
], TeximateDirective.prototype, "inAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TeximateDirective.prototype, "tmRun", null);
TeximateDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[teximate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object])
], TeximateDirective);

var _a, _b;
/**
 *
  /** The class will be added on element hover
  @Input('tmHoverClass') hoverClass: string;

  /** The class will be added on element click
  @Input('tmClickClass') clickClass: string;

  @Input('tmOut') outAnimation;
 *
  hoverEvent(item) {
    /** Add class on onmouseenter
    this.renderer.setElementProperty(item, 'onmouseenter', () => {
      this.renderer.setElementClass(item, this.hoverClass, true);
    });
    /** remove class on onmouseleave
    this.renderer.setElementProperty(item, 'onmouseleave', () => {
      setTimeout(() => {
        this.renderer.setElementClass(item, this.hoverClass, false);
      }, this.interval);
    });
  }

  clickEvent(item, className) {
    this.renderer.setElementProperty(item, 'onclick', () => {
      this.renderer.setElementClass(item, className, true);
    });
  }
 */ 
//# sourceMappingURL=teximate.directive.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var Helper;
(function (Helper) {
    /** Get Splitter */
    Helper.getSplitter = function (splitter) {
        switch (splitter.toLowerCase()) {
            case 'letter':
                return '';
            case 'word':
                return ' ';
            case 'line':
                return '\n';
            default:
                console.warn('[texilate]: tmSplit invalid input, fallback to "letter"');
                return 'letter';
        }
    };
    /** Create 2d array from a text */
    function textFactory(text) {
        var linesArr = [];
        var lines = text.split('\n');
        lines.map(function (line) {
            var wordArr = [];
            var words = line.split(' ');
            words.map(function (word) {
                var letters = word.split('');
                wordArr.push(letters);
            });
            linesArr.push(wordArr);
        });
        return linesArr;
    }
    /** Shuffle Array */
    Helper.shuffle = function (array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    };
})(Helper || (Helper = {}));
//# sourceMappingURL=functions.helper.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive_teximate_directive__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeximateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeximateModule = (function () {
    function TeximateModule() {
    }
    return TeximateModule;
}());
TeximateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__directive_teximate_directive__["a" /* TeximateDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__directive_teximate_directive__["a" /* TeximateDirective */]]
    })
], TeximateModule);

//# sourceMappingURL=teximate.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(196)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: white;\n  position: fixed;\n  left: 1em;\n  right: 1em;\n  top: 1em;\n  bottom: 1em; }\n\nh1 {\n  max-width: 700px; }\n\nbutton {\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  font-size: 2em;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<h1 \n[teximate]=\"text\"\n[tmType]=\"'word'\" \n[tmInterval]=\"50\"\n[tmRun]=\"run\"\n[tmIn]=\"{ class: 'lightSpeedIn', method: 'shuffle'}\"\n></h1>\n\n<h1>{{text}}</h1>\n<!--<h1 \n[teximate]=\"text\"\n></h1>-->\n\n<button (click)=\"run = !run\">test</button>"

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(305);


/***/ })

},[519]);
//# sourceMappingURL=main.bundle.js.map