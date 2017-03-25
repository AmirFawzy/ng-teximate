webpackJsonp([1,4],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Helper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkType; });
var Helper;
(function (Helper) {
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
    /** Return 3d array from the text */
    Helper.textFactory = function (text) {
        var linesArr = [];
        /** get text's lines */
        var lines = text.split('\n');
        lines.map(function (line, i) {
            var wordArr = [];
            /** get line's words and filter empty words */
            var words = line.split(' ');
            words.filter(function (word) { return word !== ''; }).map(function (word, j) {
                var letterArr = [];
                /** get word's letters */
                var letters = word.split(/(?!$)/u);
                letters.map(function (letter, k) {
                    letterArr.push({
                        text: letter,
                        class: ' letter' + (k + 1),
                        visibility: 'hidden'
                    });
                });
                wordArr.push({
                    letters: letterArr,
                    class: ' word' + (j + 1),
                    visibility: 'hidden'
                });
            });
            linesArr.push({
                words: wordArr,
                class: ' line' + (i + 1),
                visibility: 'hidden'
            });
        });
        return linesArr;
    };
})(Helper || (Helper = {}));
var WorkType = {
    SEQUENCE: 'SEQUENCE',
    REVERSE: 'REVERSE',
    SYNC: 'SYNC',
    SHUFFLE: 'SHUFFLE'
};
/**
 *
 *
 return Observable.from(textArr)
 .mergeMap((line: any, i) => Observable.of(line.words).delay(i * this.lineInterval))
 .mergeAll()
 .mergeMap((word: any, i) => Observable.of(word.letters).delay(i * this.wordInterval))
 .mergeAll()
 .mergeMap((letter: any, i) => Observable.of(letter).delay(i * this.letterInterval))
 .do((item: Letter) => {
        item.visibility = 'visible';
        this.array.next(textArr);
      })
 */
//# sourceMappingURL=teximate.helper.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeAll__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_from__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_of__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__teximate_helper__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeximateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/** This service is not meant to be used outside TeximateModule
 *  Each component instance has service instance
 */
var TeximateService = (function () {
    function TeximateService() {
        var _this = this;
        this.arr = [];
        this.array = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.worker = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.worker.switchMap(function (job) {
            // console.log('worker execute:', job.options);
            return _this.job(job.textArr, job.options);
        }).subscribe();
    }
    TeximateService.prototype.run = function (text, options) {
        this.arr = __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["b" /* Helper */].textFactory(text);
        this.worker.next({ textArr: this.arr, options: options });
    };
    TeximateService.prototype.runEffect = function (options) {
        this.worker.next({ textArr: this.arr, options: options });
    };
    TeximateService.prototype.job = function (textArr, options) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(textArr)
            .mergeMap(function (line, i) {
            /** To calculate a word's delay, should store the previous word length */
            var prevWordLength = 0;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(line.words)
                .mergeAll()
                .mergeMap(function (wordItem, j) {
                /** Process word (calculate index & delay according to word's type) */
                var word = _this.processWord(options, line.words, j, prevWordLength);
                /** To calculate next word's delay */
                prevWordLength = prevWordLength + word.letters.length;
                /** Shuffle word's letter if letter type is shuffle */
                var wordLetters;
                if (options.letter.type === __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["a" /* WorkType */].SHUFFLE) {
                    wordLetters = __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["b" /* Helper */].shuffle(word.letters.slice());
                }
                else {
                    wordLetters = word.letters;
                }
                /** Apply changes to the letter then update the view */
                wordItem.visibility = 'visible';
                /** set animation and custom classes */
                wordItem.animateClass = " animated " + options.animation.name;
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(wordLetters).delay(word.delay)
                    .mergeAll()
                    .mergeMap(function (letterItem, k) {
                    /** Process letter (calculate index & delay according to letter's type) */
                    var letter = _this.processLetter(options, wordLetters, k);
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(letter.item).delay(letter.delay)
                        .do(function (letterItem) {
                        /** Apply changes to the letter then update the view */
                        letterItem.visibility = 'visible';
                        /** set animation and custom classes */
                        letterItem.animateClass = " animated " + options.animation.name;
                        _this.array.next(textArr);
                    });
                });
            });
        });
    };
    TeximateService.prototype.processWord = function (options, arr, i, prevWordLength) {
        var index;
        var delay;
        switch (options.word.type) {
            case __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["a" /* WorkType */].SYNC:
                index = i;
                delay = 0;
                break;
            case __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["a" /* WorkType */].REVERSE:
                index = arr.length - i - 1;
                delay = (prevWordLength * options.letter.delay) + (i * options.word.delay);
                break;
            default:
                index = i;
                delay = (prevWordLength * options.letter.delay) + (i * options.word.delay);
        }
        return {
            letters: arr[index].letters,
            delay: delay
        };
    };
    TeximateService.prototype.processLetter = function (options, arr, i) {
        var index;
        var delay;
        switch (options.letter.type) {
            case __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["a" /* WorkType */].SYNC:
                index = i;
                delay = 0;
                break;
            case __WEBPACK_IMPORTED_MODULE_11__teximate_helper__["a" /* WorkType */].REVERSE:
                index = arr.length - i - 1;
                delay = i * options.letter.delay;
                break;
            default:
                index = i;
                delay = i * options.letter.delay;
        }
        return {
            item: arr[index],
            delay: delay
        };
    };
    return TeximateService;
}());
TeximateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TeximateService);

//# sourceMappingURL=teximate.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullPageNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullPageNavComponent = (function () {
    function FullPageNavComponent() {
        this.buttons = [];
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    FullPageNavComponent.prototype.ngOnInit = function () {
    };
    return FullPageNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], FullPageNavComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Output */])(),
    __metadata("design:type", Object)
], FullPageNavComponent.prototype, "clicked", void 0);
FullPageNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'full-page-nav',
        template: __webpack_require__(495),
        styles: [__webpack_require__(489)]
    })
], FullPageNavComponent);

//# sourceMappingURL=full-page-nav.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullPageComponent = (function () {
    function FullPageComponent(el, renderer) {
        this.active = false;
        this.nativeElement = el.nativeElement;
        console.log(window.innerHeight);
        renderer.setElementStyle(el.nativeElement, 'height', window.innerHeight + 'px');
    }
    FullPageComponent.prototype.ngOnInit = function () {
    };
    return FullPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Boolean)
], FullPageComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], FullPageComponent.prototype, "name", void 0);
FullPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'full-page',
        template: __webpack_require__(496),
        styles: [__webpack_require__(490)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */]) === "function" && _b || Object])
], FullPageComponent);

var _a, _b;
//# sourceMappingURL=full-page.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_teximate_helper__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_teximate_service__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeximateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeximateComponent = (function () {
    function TeximateComponent(teximate, renderer, el) {
        this.teximate = teximate;
        this.renderer = renderer;
        this.el = el;
        /** Default effect */
        this.options = {
            type: 'letter',
            animation: { name: 'fadeIn', duration: 300 },
            word: { type: __WEBPACK_IMPORTED_MODULE_1__service_teximate_helper__["a" /* WorkType */].SEQUENCE, delay: 100 },
            letter: { type: __WEBPACK_IMPORTED_MODULE_1__service_teximate_helper__["a" /* WorkType */].SHUFFLE, delay: 50 }
        };
        this.content = 'Teximate is working';
        /** create dynamic stlye (to avoid applying css rules' vendors for each element in the template) */
        this.style = this.renderer.createElement(this.el.nativeElement, 'style');
    }
    TeximateComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes['effect']) {
            this.options = Object.assign({}, this.options, changes['effect'].currentValue);
        }
        if (changes['text'] && changes['text'].currentValue) {
            this.content = changes['text'].currentValue;
        }
        this.teximate.run(this.content, this.options);
    };
    TeximateComponent.prototype.runEffect = function (options) {
        // this.teximate.runEffect(options);
    };
    TeximateComponent.prototype.setAnimationDuration = function (duration) {
        this.renderer.setElementProperty(this.style, 'innerHTML', "\n      .animated {\n        animation-duration: " + duration + "ms;\n        -webkit-animation-duration: " + duration + "ms;\n        -moz-animation-duration: " + duration + "ms;\n        -o-animation-duration: " + duration + "ms;\n        -ms-animation-duration: " + duration + "ms;\n      }\n    ");
    };
    TeximateComponent.prototype.ngOnDestroy = function () {
        this.teximate.array.unsubscribe();
        this.teximate.worker.unsubscribe();
    };
    return TeximateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], TeximateComponent.prototype, "effect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], TeximateComponent.prototype, "text", void 0);
TeximateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'teximate',
        template: __webpack_require__(498),
        styles: [__webpack_require__(492)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectionStrategy */].OnPush,
        viewProviders: [__WEBPACK_IMPORTED_MODULE_2__service_teximate_service__["a" /* TeximateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_teximate_service__["a" /* TeximateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_teximate_service__["a" /* TeximateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _c || Object])
], TeximateComponent);

var _a, _b, _c;
//# sourceMappingURL=teximate.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_helper__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeAll__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_zip__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_timer__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_empty__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__ = __webpack_require__(302);
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
        this.itemsArr = [];
        /** Text input */
        this.textArr = [];
        this.lineInterval = 0;
        this.wordInterval = 0;
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
            if (this.itemsArr.length > 0) {
                (__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.itemsArr)
                    .mergeAll())
                    .mergeAll()
                    .mergeMap(function (v, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(v).delay(i * _this.interval); })
                    .do(function (item) {
                    _this.renderer.setElementClass(item, _this.inAnimation.class, false);
                    _this.renderer.setElementClass(item, 'bounceOut', true);
                })
                    .do(function () {
                    _this.job().subscribe();
                })
                    .subscribe();
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
            .mergeMap(function (line, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(line).delay(i * _this.lineInterval); })
            .mergeAll()
            .mergeMap(function (word, i) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(word).delay(i * _this.wordInterval)
                .mergeAll()
                .mergeMap(function (letter, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(letter).delay(i * _this.interval); })
                .do(function (item) { return _this.showItem(item); });
        });
    };
    /** Sync mode */
    TeximateDirective.prototype.sync = function () {
        // return Observable.from(this.textArr)
        //   .map((text, i) => {
        //     let item = this.createWord(text, i);
        //     this.showItem(item);
        //   });
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.itemsArr)
            .mergeMap(function (line, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(line).delay(i * _this.lineInterval); })
            .mergeAll()
            .mergeMap(function (word, i) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(word).delay(i * _this.wordInterval)
                .mergeAll()
                .mergeMap(function (letter, i) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(letter).delay(i * _this.interval); })
                .do(function (item) { return _this.showItem(item); });
        });
    };
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], TeximateDirective.prototype, "teximate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TeximateDirective.prototype, "tmType", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('tmInterval'),
    __metadata("design:type", Object)
], TeximateDirective.prototype, "interval", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('tmIn'),
    __metadata("design:type", Object)
], TeximateDirective.prototype, "inAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TeximateDirective.prototype, "tmRun", null);
TeximateDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[teximate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _b || Object])
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


    /** fix for poor ios performance
    // this.renderer.setElementStyle(word, '-webkit-transform', 'translate3d(0,0,0)');
    // this.renderer.setElementStyle(word, '-moz-transform', 'translate3d(0,0,0)');
    // this.renderer.setElementStyle(word, '-o-transform', 'translate3d(0,0,0)');
    // this.renderer.setElementStyle(word, 'transform', 'translate3d(0,0,0)');
 */ 
//# sourceMappingURL=teximate.directive.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive_teximate_directive__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_teximate_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_teximate_service__ = __webpack_require__(184);
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
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_teximate_service__["a" /* TeximateService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__directive_teximate_directive__["a" /* TeximateDirective */], __WEBPACK_IMPORTED_MODULE_3__component_teximate_component__["a" /* TeximateComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__directive_teximate_directive__["a" /* TeximateDirective */], __WEBPACK_IMPORTED_MODULE_3__component_teximate_component__["a" /* TeximateComponent */]]
    })
], TeximateModule);

//# sourceMappingURL=teximate.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 318;


/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(434);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teximate__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.options = {
            type: 'letter',
            animation: { name: 'fadeIn', duration: 300 },
            word: { type: __WEBPACK_IMPORTED_MODULE_1__teximate__["a" /* WorkType */].SHUFFLE, delay: 100 },
            letter: { type: __WEBPACK_IMPORTED_MODULE_1__teximate__["a" /* WorkType */].REVERSE, delay: 50 }
        };
        this.workType = [
            'SEQUENCE',
            'SHUFFLE',
            'REVERSE',
            'SYNC'
        ];
        this.optionsTypes = [
            'letter',
            'word'
        ];
        this.animateCss = [
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'headShake',
            'swing',
            'tada',
            'wobble',
            'jello',
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeIn',
            'fadeInDown',
            'fadeInDownBig',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'flipInX',
            'flipInY',
            'flipOutX',
            'flipOutY',
            'lightSpeedIn',
            'lightSpeedOut',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'hinge',
            'rollIn',
            'rollOut',
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomInRight',
            'zoomInUp',
            'zoomOut',
            'zoomOutDown',
            'zoomOutLeft',
            'zoomOutRight',
            'zoomOutUp',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideInUp',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'slideOutUp'
        ];
    }
    AppComponent.prototype.test1 = function () {
        this.text = 'It’s kind of fun to do the impossible. 🔥';
        console.log(this.options);
    };
    AppComponent.prototype.test2 = function () {
        console.log(this.options);
    };
    AppComponent.prototype.updateAnimationClass = function (className) {
        this.options = Object.assign({}, this.options, { animation: { name: className } });
    };
    AppComponent.prototype.updateAnimationDuration = function (duration) {
        this.options = Object.assign({}, this.options, { animation: { duration: duration } });
    };
    AppComponent.prototype.updateType = function (type) {
        this.options = Object.assign({}, this.options, { type: type });
    };
    AppComponent.prototype.updateWordType = function (type) {
        this.options = Object.assign({}, this.options, { word: { type: type } });
    };
    AppComponent.prototype.updateLetterType = function (type) {
        this.options = Object.assign({}, this.options, { letter: { type: type } });
    };
    AppComponent.prototype.updateWordDelay = function (delay) {
        this.options = Object.assign({}, this.options, { word: { delay: delay } });
    };
    AppComponent.prototype.updateLetterDelay = function (delay) {
        this.options = Object.assign({}, this.options, { letter: { delay: delay } });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__teximate__["b" /* TeximateComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__teximate__["b" /* TeximateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__teximate__["b" /* TeximateComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "teximate", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(494),
        styles: [__webpack_require__(488)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teximate_teximate_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fullpage__ = __webpack_require__(431);
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
            __WEBPACK_IMPORTED_MODULE_4__teximate_teximate_module__["a" /* TeximateModule */],
            __WEBPACK_IMPORTED_MODULE_6__fullpage__["a" /* FullpageModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__full_page_full_page_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_page_nav_full_page_nav_component__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullPagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullPagesComponent = (function () {
    function FullPagesComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    FullPagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sections.map(function (section) {
            _this.navigation.map(function (nav) {
                nav.buttons.push(section);
            });
            _this.renderer.setElementStyle(section.nativeElement, 'height', _this.el.nativeElement.style.height + "px");
            // this.navigation.buttons.push(section);
        });
        this.navigation.map(function (nav) {
            nav.clicked.subscribe(function (section) {
                var top = section.nativeElement.offsetTop;
                console.log(section);
                _this.renderer.setElementStyle(_this.container.nativeElement, 'transform', "translate3d(0px, " + -top + "px, 0px)");
            });
        });
        // this.navigation.map((nav) => {
        // this.navigation.clicked.subscribe((section) => {
        //   let top = section.nativeElement.offsetTop;
        //   console.log(section);
        //   this.renderer.setElementStyle(this.container.nativeElement, 'transform', `translate3d(0px, ${-top}px, 0px)`);
        // });
        // });
    };
    return FullPagesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__full_page_full_page_component__["a" /* FullPageComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* QueryList */]) === "function" && _a || Object)
], FullPagesComponent.prototype, "sections", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__full_page_nav_full_page_nav_component__["a" /* FullPageNavComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* QueryList */]) === "function" && _b || Object)
], FullPagesComponent.prototype, "navigation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _c || Object)
], FullPagesComponent.prototype, "container", void 0);
FullPagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'full-pages',
        template: __webpack_require__(497),
        styles: [__webpack_require__(491)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */]) === "function" && _e || Object])
], FullPagesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=full-pages.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_pages_full_pages_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_page_full_page_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__full_page_nav_full_page_nav_component__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullpageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FullpageModule = (function () {
    function FullpageModule() {
    }
    return FullpageModule;
}());
FullpageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__full_pages_full_pages_component__["a" /* FullPagesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__full_page_full_page_component__["a" /* FullPageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__full_page_nav_full_page_nav_component__["a" /* FullPageNavComponent */]
        ],
        providers: [],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__full_pages_full_pages_component__["a" /* FullPagesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__full_page_full_page_component__["a" /* FullPageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__full_page_nav_full_page_nav_component__["a" /* FullPageNavComponent */]
        ]
    })
], FullpageModule);

//# sourceMappingURL=fullpage.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullpage_module__ = __webpack_require__(430);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fullpage_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 432:
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
    Helper.textFactory = function (text) {
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
    };
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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive_teximate_directive__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_teximate_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_teximate_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teximate_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_teximate_helper__ = __webpack_require__(183);
/* unused harmony reexport TeximateModule */
/* unused harmony reexport TeximateService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__component_teximate_component__["a"]; });
/* unused harmony reexport TeximateDirective */
/* unused harmony reexport TeximateOptions */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__service_teximate_helper__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 434:
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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  left: 1em;\n  right: 1em;\n  top: 1em;\n  bottom: 1em; }\n\n.demo {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: white; }\n\nh1 {\n  margin-left: 2em; }\n\n.test-container {\n  position: fixed;\n  left: 1em;\n  top: 1em; }\n  .test-container button {\n    font-size: 1.5em;\n    font-weight: bold; }\n\n.component-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1em; }\n\n.component {\n  margin-bottom: .8em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background-color: #111111;\n  color: #EAFDA1;\n  padding: .8em;\n  font-family: monospace; }\n  .component .tag-name, .component .input-name, .component .input-wrapper, .component .input, .component input {\n    padding: 0; }\n  .component .tag-name {\n    color: #2C7CD1;\n    line-height: 2em;\n    font-weight: bold; }\n  .component .input-name {\n    color: #EAFDA1; }\n    .component .input-name:before {\n      content: \"[\";\n      color: #EAFDA1; }\n    .component .input-name:after {\n      content: \"]\";\n      color: #EAFDA1; }\n  .component .input-wrapper {\n    margin: 3px; }\n  .component .input {\n    color: white; }\n    .component .input:before {\n      content: '\"'; }\n    .component .input:after {\n      content: '\"'; }\n    .component .input span {\n      color: white;\n      font-style: normal; }\n    .component .input input, .component .input select {\n      color: white;\n      border: 0;\n      font-family: monospace;\n      outline: 0;\n      background-color: #111111; }\n\n.container {\n  max-width: 700px;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  bottom: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: white;\n  height: 80px;\n  width: 100%;\n  z-index: 999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  overflow: hidden;\n  height: 100%; }\n\n.fp-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-touch-action: none;\n      touch-action: none;\n  -webkit-transition: all 1000ms ease;\n  transition: all 1000ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, ".word, .letter {\n  display: inline-block;\n  transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.word {\n  margin-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div class=\"test-container\">\n    <button (click)=\"test1()\">test 1</button>\n    <button (click)=\"test2()\">test 2</button>\n    <!--<button (click)=\"test3()\">Effect</button>-->\n</div>\n<div class=\"demo\">\n    <h1>\n        <teximate #teximate [text]=\"text\" [effect]=\"options\"\n        >\n        </teximate>\n    </h1>\n</div>\n<!--\n<h1>\n    <teximate #teximate [text]=\"'Angular Text animation'\" [effect]=\"options\">\n    </teximate>\n</h1>-->\n\n<div class=\"component-outer\">\n    <div class=\"component\">\n        <i class=\"tag-name\" [textContent]=\"'<teximate '\"></i>\n\n        <span class=\"input-wrapper\">\n      <span class=\"input-name\">text</span> =\n        <i class=\"input\">\n        <input [(ngModel)]=\"text\">\n      </i>\n        </span>\n\n        <span class=\"input-wrapper\">\n       <span class=\"input-name\">options.type</span> =\n        <i class=\"input\">\n        <select [ngModel]=\"options.type\"\n             (ngModelChange)=\"updateType($event)\">\n          <option *ngFor=\"let p of optionsTypes\" [ngValue]=\"p\">{{p}}</option>\n        </select>\n      </i>\n        </span>\n\n        <span class=\"input-wrapper\">\n       <span class=\"input-name\">animation.class</span> =\n        <i class=\"input\">\n        <select [ngModel]=\"options.animation.name\"\n             (ngModelChange)=\"updateAnimationClass($event)\">\n          <option *ngFor=\"let p of animateCss\" [ngValue]=\"p\">{{p}}</option>\n        </select>\n      </i>\n        </span>\n\n        <span class=\"input-wrapper\">\n      <span class=\"input-name\">animation.duration</span> =\n        <i class=\"input\">\n        <input [ngModel]=\"options.animation.duration\" (ngModelChange)=\"updateAnimationDuration($event)\">\n      </i>\n        </span>\n\n\n        <span class=\"input-wrapper\">\n       <span class=\"input-name\">word.type</span> =\n        <i class=\"input\">\n        <select [ngModel]=\"options.word.type\"\n             (ngModelChange)=\"updateWordType($event)\">\n          <option *ngFor=\"let p of workType\" [ngValue]=\"p\">{{p}}</option>\n        </select>\n      </i>\n        </span>\n\n         <span class=\"input-wrapper\">\n      <span class=\"input-name\">word.delay</span> =\n        <i class=\"input\">\n        <input [ngModel]=\"options.word.delay\" (ngModelChange)=\"updateWordDelay($event)\">\n      </i>\n        </span>\n\n\n        <span class=\"input-wrapper\">\n       <span class=\"input-name\">letter.type</span> =\n        <i class=\"input\">\n        <select [ngModel]=\"options.letter.type\"\n             (ngModelChange)=\"updateLetterType($event)\">\n          <option *ngFor=\"let p of workType\" [ngValue]=\"p\">{{p}}</option>\n        </select>\n      </i>\n        </span>\n\n         <span class=\"input-wrapper\">\n      <span class=\"input-name\">letter.delay</span> =\n        <i class=\"input\">\n        <input [ngModel]=\"options.letter.delay\" (ngModelChange)=\"updateLetterDelay($event)\">\n      </i>\n        </span>\n\n        <i class=\"tag-name\" [textContent]=\"' ></teximate>'\"></i>\n    </div>\n</div>\n\n\n<!--<span class=\"input-wrapper\">\n      <span class=\"input-name\">repeat</span> =\n        <i class=\"input\">\n        <input type=\"checkbox\" [(ngModel)]=\"repeat\"><span>{{(repeat)?\"true\":\"false\"}}</span>\n      </i>\n        </span>-->\n\n<!--<h1 \n[teximate]=\"text\"\n[tmType]=\"'word'\" \n[tmInterval]=\"50\"\n[tmIn]=\"{ class: 'lightSpeedIn', method: 'shuffle'}\"\n></h1>-->\n\n<!--<h1>\n    <teximate [text]=\"anotherText\" [effect]=\"options\">\n    </teximate>\n</h1>-->\n\n<!--<h1 \n[teximate]=\"anotherText\"\n[tmType]=\"'word'\" \n[tmInterval]=\"50\"\n[tmRun]=\"run\"\n[tmIn]=\"{ class: 'lightSpeedIn', method: 'shuffle'}\"\n></h1>\n\n<h1\n[teximate]=\"'Hello World'\"\n[tmType]=\"'word'\" \n[tmInterval]=\"50\"\n[tmRun]=\"run\"\n[tmIn]=\"{ class: 'lightSpeedIn', method: 'shuffle'}\"></h1>-->\n\n<!--<h1>{{text}}</h1>-->\n<!--<h1 \n[teximate]=\"text\"\n></h1>-->"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<button *ngFor=\"let btn of buttons\" (click)=\"clicked.emit(btn)\">{{btn.name}}</button>\n"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<div #container class=\"fp-container\">\n  <ng-content></ng-content>\n\n</div>\n"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<span aria-label=\"text\">\n\n  <div *ngFor=\"let line of teximate.array | async\" [class]=\"'line' + line.class\" [style.visibility]=\"line.visibility\">\n\n    <span *ngFor=\"let word of line.words\" [class]=\"'word' + word.class + word.animateClass\" [style.visibility]=\"word.visibility\">\n\n      <span *ngFor=\"let letter of word.letters\" [class]=\"'letter' + letter.class + letter.animateClass\"\n       [style.visibility]=\"letter.visibility\">\n        {{letter.text}}\n      </span>\n\n    </span>\n  </div>\n\n</span>"

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(319);


/***/ })

},[538]);
//# sourceMappingURL=main.bundle.js.map