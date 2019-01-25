(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-list-task-list-module"],{

/***/ "./src/app/task-list/task-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.module.ts ***!
  \***********************************************/
/*! exports provided: TaskListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPageModule", function() { return TaskListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list.page */ "./src/app/task-list/task-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _task_list_page__WEBPACK_IMPORTED_MODULE_5__["TaskListPage"]
    }
];
var TaskListPageModule = /** @class */ (function () {
    function TaskListPageModule() {
    }
    TaskListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_list_page__WEBPACK_IMPORTED_MODULE_5__["TaskListPage"]]
        })
    ], TaskListPageModule);
    return TaskListPageModule;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.page.html":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>TaskList</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"addItem()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!-- <ion-item *ngFor=\"let task of tasks\">{{ task.title }}</ion-item> -->\n    <ion-item-sliding *ngFor=\"let task of tasks | async\" #slidingItem>\n      <ion-item [ngClass]=\"{ taskDone: task.status == 'done'}\">{{ task.title }}</ion-item>\n      <ion-item-options side=\"end\" (ionSwipe)=\"removeTask(slidingItem,task)\">\n        <ion-item-option (click)=\"markAsDone(slidingItem, task)\" color=\"primary\">\n          <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option (click)=\"removeTask(slidingItem, task)\" color=\"danger\" expandable>\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/task-list/task-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".taskDone {\n  text-decoration: line-through; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNleS9Eb2N1bWVudHMvQXBwRGV2ZWxvcG1lbnQvY2l0cHQyMjdfaW9uaWM0L0lvbmljNF90b2RvL2NpdHB0MjI3X3RvZG9hcHAvc3JjL2FwcC90YXNrLWxpc3QvdGFzay1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza0RvbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/task-list/task-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/task-list/task-list.page.ts ***!
  \*********************************************/
/*! exports provided: TaskListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPage", function() { return TaskListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Angularfire and Firebase

var TaskListPage = /** @class */ (function () {
    function TaskListPage(alertController, af) {
        this.alertController = alertController;
        this.af = af;
        this.taskList = this.af.list('/tasks');
        this.tasks = this.taskList.valueChanges();
        // this.tasks = [
        //   { title: "Buy groceries", status: 'open' },
        //   { title: "Wash car", status: "open" },
        //   { title: "Pick up prescriptions", status: "open"}
        // ]
    }
    // original from textbook
    // addItem() : void {
    //   let newTask: string = prompt("New Task");
    //   if( newTask !== '' ){
    //     this.tasks.push({ title: newTask, status: 'open'});
    //   }
    // }
    TaskListPage.prototype.addItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "Enter a new task",
                            inputs: [{
                                    name: 'newTask',
                                    type: 'text'
                                }],
                            buttons: [{
                                    text: "Cancel",
                                    role: 'cancel'
                                }, {
                                    text: 'Add',
                                    handler: function (data) {
                                        console.log(data);
                                        if (data.newTask != '') {
                                            // this.tasks.push({ // original code
                                            //   title: data.newTask, status: 'open'
                                            // });
                                            var newTaskReference = _this.taskList.push({
                                                id: '',
                                                title: data.newTask,
                                                status: 'open'
                                            });
                                            newTaskReference.update({ id: newTaskReference.key });
                                        } // end if
                                    } // end handler
                                }] // end buttons
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskListPage.prototype.markAsDone = function (slidingItem, theTask) {
        // theTask.status = "done";
        // slidingItem.close();
        if (theTask.status != "done") {
            theTask.status = "done";
        }
        else {
            theTask.status = "open";
        }
        this.taskList.update(theTask.id, theTask);
        slidingItem.close();
    };
    TaskListPage.prototype.removeTask = function (slidingItem, theTask) {
        // theTask.status = "removed";
        // let index = this.tasks.indexOf(theTask);
        // if( index > -1 ){
        //   this.tasks.splice(index,1);
        // }
        this.taskList.remove(theTask.id);
        slidingItem.close();
    };
    TaskListPage.prototype.ngOnInit = function () {
    };
    TaskListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.page.html */ "./src/app/task-list/task-list.page.html"),
            styles: [__webpack_require__(/*! ./task-list.page.scss */ "./src/app/task-list/task-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TaskListPage);
    return TaskListPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-list-task-list-module.js.map