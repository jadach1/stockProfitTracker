(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* Customize the label (the radioButton) */\n .radioButton {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n /* Hide the browser's default radio button */\n .radioButton input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n /* Create a custom radio button */\n .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50%;\n  }\n /* On mouse-over, add a grey background color */\n .radioButton:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n /* When the radio button is checked, add a blue background */\n .radioButton input:checked ~ .checkmark {\n    background-color: #2196F3;\n  }\n /* Create the indicator (the dot/circle - hidden when not checked) */\n .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n /* Show the indicator (dot/circle) when checked */\n .radioButton input:checked ~ .checkmark:after {\n    display: block;\n  }\n /* Style the indicator (dot/circle) */\n .radioButton .checkmark:after {\n    top: 9px;\n    left: 9px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: white;\n  } "

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 style=\"color:royalblue\">Add New Transaction</h3>\n<hr>\n<div [hidden]=\"submitted\" class=\"container\">\n  \n</div>\n<hr>\n\n<div [hidden]=\"submitted\">\n    <form #transactionForm=\"ngForm\" [ngStyle]=\"{'color':setTransaction()}\">\n\n      <div class=\"form-group\">\n        <label for=\"symbol\">Company Symbol</label>\n        <input style=\"color:yellow\" type=\"text\" class=\"form-control\" id=\"symbol\" placeholder=\"Give Companies symbol\" \n        required maxlength=\"6\" pattern=\"([0-9A-Za-z.]{1,6})\" autofocus \n        [(ngModel)]=\"Transaction.symbol\" name=\"symbol\" #symbol=\"ngModel\">\n        <div [hidden]=\"symbol.valid || symbol.pristine\"\n             class=\"alert alert-danger\">\n            The symbol is not valid\n        </div>\n      </div>\n      \n\t    <div class=\"form-group\">\n        <label for=\"shares\">Amount of shares: maximum is 999,999 <p>{{shareCount}}</p></label>\n        <input style=\"color:yellow\" type=\"number\" class=\"form-control\" id=\"shares\" placeholder=\"Number of shares\" \n        required  pattern=\"([0-9]{1,6})\"\n        [(ngModel)]=\"Transaction.shares\" name=\"shares\" #shares=\"ngModel\">\n        <div [hidden]=\"shares.valid || shares.pristine\"\n             class=\"alert alert-danger\">\n            Invlid number of shares\n        </div>\n      </div>\n     \n\t    <div class=\"form-group\">\n        <label for=\"price\">Price: maximum is $9999.99</label>\n        <input style=\"color:yellow\" type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"price per share\" \n        required pattern=\"^\\d{0,4}(\\.\\d{0,2})?$\"  \n        [(ngModel)]=\"Transaction.price\" name=\"price\" #price=\"ngModel\">\n        <div [hidden]=\"price.valid || price.pristine\"\n             class=\"alert alert-danger\">\n            Invalid price\n        </div>\n      </div>\n      \n\t      <div class=\"form-group\">\n        <label for=\"buydate\">Transaction Date </label>\n        <input  type=\"date\" class=\"form-control\" id=\"buydate\" placeholder=\"date purchased\" \n        required\n        [(ngModel)]=\"Transaction.buydate\" name=\"buydate\" #buydate=\"ngModel\">\n        <div [hidden]=\"buydate.valid || buydate.pristine\"\n             class=\"alert alert-danger\">\n            date is required\n        </div>\n      </div>\n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div>  \n            <p>Transaction Type</p>\n            <ul class=\"nav justify-content-center\">\n                <li class=\"nav-item\"  style=\"color:white ; background-color: green\">\n                    <label class=\"radioButton\">BUY\n                    <input  type=\"radio\" class=\"form-control\" name=\"Buy\" id=\"Buy\"\n                    required [value]=\"true\"\n                    [(ngModel)]=\"Transaction.transaction\" #Buy=\"ngModel\" >\n                    <span class=\"checkmark\"></span>\n                    </label> \n                </li>\n                <li class=\"nav-item\"  style=\"color:white ; background-color: red\">\n                        <label class=\"radioButton\">SELL\n                        <input  type=\"radio\" class=\"form-control\" name=\"transaction\" id=\"transaction\"\n                        required [value]=\"false\" \n                        [(ngModel)]=\"Transaction.transaction\" #transaction=\"ngModel\" >\n                        <span class=\"checkmark\"></span>\n                        </label> \n                </li>\n            </ul>  \n           \n            <div [hidden]=\"transaction.valid || transaction.pristine\"\n             class=\"alert alert-danger\">\n             transaction type is required\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"btn-group btn-group-md\">\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">Back</button>\n      \t<button type=\"button\" class=\"btn btn-dark\" (click)=\"grabAsset(Transaction.symbol)\" [disabled]=\"!transactionForm.form.valid\" >Submit</button>      \n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"newTransaction()\" >Clear</button>\n      </div>\n    </form>\n</div>\n\n<div [hidden]=\"!submitted\">\n  <p>Submitted Successfully!<span class=\"badge badge-light\"></span></p>\n \n  <div class=\"btn-group btn-group-sm\">\n    \t<button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">Back</button>\n    \t<button type=\"button\" class=\"btn btn-dark\" (click)=\"newTransaction(); transactionForm.reset()\">Add Another Transaction</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.ts ***!
  \**************************************************************/
/*! exports provided: AddTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionComponent", function() { return AddTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions */ "./src/app/transactions.ts");
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset */ "./src/app/asset.ts");
/* harmony import */ var _asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset.service */ "./src/app/asset.service.ts");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(assetService, transactionService, location, route) {
        this.assetService = assetService;
        this.transactionService = transactionService;
        this.location = location;
        this.route = route;
        this.Transaction = new _transactions__WEBPACK_IMPORTED_MODULE_1__["transaction"]();
        this.submitted = false;
        this.assetIsNew = true;
        this.newAsset = new _asset__WEBPACK_IMPORTED_MODULE_2__["asset"]();
        this.existingAsset = new _asset__WEBPACK_IMPORTED_MODULE_2__["asset"]();
    }
    // upon initialization set the transaction to true/buy and the colors to green
    AddTransactionComponent.prototype.ngOnInit = function () {
        // Get any parmaeter passed in from url
        var passedInSymbol = this.route.snapshot.paramMap.get('symbol');
        this.Transaction.symbol = passedInSymbol;
        this.passedInShares = this.route.snapshot.paramMap.get('shares');
        if (this.passedInShares) {
            this.shareCount = "You currently have this many shares : " + this.passedInShares;
        }
        if (passedInSymbol != null) {
            this.assetIsNew = false;
        }
    };
    // Change the trasnaction from buy to sell or vice versa, change colors of input fields
    AddTransactionComponent.prototype.setTransaction = function () {
        if (this.Transaction.transaction === true) {
            document.getElementById("symbol").style.background = "rgb(76, 243, 76)";
            document.getElementById("shares").style.background = "rgb(76, 243, 76)";
            document.getElementById("price").style.background = "rgb(76, 243, 76)";
            document.getElementById("buydate").style.background = "rgb(76, 243, 76)";
        }
        else if (this.Transaction.transaction === false) {
            document.getElementById("symbol").style.background = "rgb(253, 65, 65)";
            document.getElementById("shares").style.background = "rgb(253, 65, 65)";
            document.getElementById("price").style.background = "rgb(253, 65, 65)";
            document.getElementById("buydate").style.background = "rgb(253, 65, 65)";
        }
        else {
            document.getElementById("symbol").style.background = "rgb(0, 0, 0)";
            document.getElementById("shares").style.background = "rgb(0, 0, 0)";
            document.getElementById("price").style.background = "rgb(0, 0, 0)";
            document.getElementById("buydate").style.background = "rgb(0, 0, 0)";
        }
    };
    // new form, reset the state excep for the transaction state we will keep that the same
    AddTransactionComponent.prototype.newTransaction = function () {
        var saveTransaction = this.Transaction.transaction;
        this.Transaction = new _transactions__WEBPACK_IMPORTED_MODULE_1__["transaction"]();
        this.newAsset = new _asset__WEBPACK_IMPORTED_MODULE_2__["asset"]();
        this.existingAsset = new _asset__WEBPACK_IMPORTED_MODULE_2__["asset"]();
        // if ( saveTransaction === true ) {
        //   this.setTransaction(true);
        //   }
        // else  {
        //   this.setTransaction(false);
        //   } 
        this.submitted = false;
        this.assetIsNew = true;
    };
    // This function will grab the asset with the symbolName from the database and call the updateAsset functio, 
    // or return an error
    AddTransactionComponent.prototype.grabAsset = function (symbolName) {
        var _this = this;
        this.assetService.getAsset(symbolName)
            .subscribe(function (value) { return _this.existingAsset = value; }, function (error) { return alert("Error connecting to database to grab an asset"); }, function () { return _this.verifyIfAssetExists(); });
    };
    // Establish if an asset exists or not
    AddTransactionComponent.prototype.verifyIfAssetExists = function () {
        var _this = this;
        // validate symbol name
        if (this.Transaction.symbol.length > 6) {
            alert("Error:  Symbol must be less than 6 characters long");
        }
        else {
            new Promise(function (res) {
                // set total
                _this.Transaction.total = _this.Transaction.shares * _this.Transaction.price;
                // start process to check if asset exists by grabbing asset synbol from database
                // check to see if we successfully pulled the asset from the database
                if (_this.existingAsset == null) {
                    // If we reached here it means the asset DOES NOT EXIST 
                    if (_this.Transaction.transaction === false) {
                        throw "Error, You cannot have a sell order for an Asset you do not own";
                    }
                    return res();
                }
                else {
                    _this.assetIsNew = false;
                    return res();
                }
            }).then(function (res) {
                if (_this.assetIsNew === false) {
                    // If we successfully grabbed the asset from the database
                    _this.updateExistingAsset(_this.existingAsset, _this.Transaction, _this.assetService, _this.transactionService);
                }
                else {
                    // If this is a new asset, set the symbol and all params to 0 and pass it
                    _this.newAsset.symbol = _this.Transaction.symbol;
                    _this.updateExistingAsset(_this.newAsset, _this.Transaction, _this.assetService, _this.transactionService);
                }
            }).catch(function (err) {
                alert(err);
            });
        }
    };
    // This takes 5 arguments and updates the asset in the database with the transaction recorded
    // depending on whether it is a buy or a sell order we will increase/decrease the totals
    AddTransactionComponent.prototype.updateExistingAsset = function (assetToUpdate, currentTransaction, currentAssetService, currentTransactionService) {
        var _this = this;
        // Because some calculations rely on others to complete first, we will execute these in a nested promise
        new Promise(function (resolve, reject) {
            // Check to make sure use is not trying to buy over the limit
            var regexp2 = /^\d{7}$/;
            if (regexp2.test(currentTransaction.shares.toString())) {
                throw ("The number of shares you are trying to purchase is too high");
            }
            return resolve();
        }).then(function (res) {
            // Check to see whether this is a buy(true) or sell(false) and act accordingly
            if (currentTransaction.transaction === true) {
                assetToUpdate.shares += currentTransaction.shares;
                assetToUpdate.totalMoneyIn = assetToUpdate.totalMoneyIn * 1 + currentTransaction.total;
            }
            else {
                assetToUpdate.shares -= currentTransaction.shares;
                assetToUpdate.sharesSold += currentTransaction.shares;
                assetToUpdate.totalMoneyOut = assetToUpdate.totalMoneyOut * 1 + currentTransaction.total;
            }
            return;
        }).then(function (res) {
            // check and throw an error if this order will push shares below 0
            if (assetToUpdate.shares < 0) {
                alert("shares " + assetToUpdate.shares);
                throw ("Sorry, you do not have enough shares to fill this order");
            }
            // check to make sure the shares we are trying to buy are a whole number
            if (!Number.isInteger(assetToUpdate.shares)) {
                throw ("The number of shares entered is NOT a whole number");
            }
            assetToUpdate.originalMoney = assetToUpdate.totalMoneyIn - assetToUpdate.totalMoneyOut;
            // set the price to be the user entered transaction price
            assetToUpdate.price = currentTransaction.price;
            return;
        }).then(function (res) {
            // If originalMoney is less than 0, change the value to 0, means "we are in the money"
            if (assetToUpdate.originalMoney < 0) {
                assetToUpdate.originalMoney = 0;
            }
            // Calculate current Total 
            assetToUpdate.currentTotal = assetToUpdate.shares * assetToUpdate.price;
        }).then(function (res) {
            // Calculate the Realized and Unrealized profit
            assetToUpdate.realProfit = assetToUpdate.totalMoneyOut - assetToUpdate.totalMoneyIn;
            assetToUpdate.unRealProfit = (assetToUpdate.totalMoneyOut - assetToUpdate.totalMoneyIn) + assetToUpdate.currentTotal;
            return;
        }).then(function (res) {
            // Calculate the Realized and Unrealized Margins
            assetToUpdate.realMargin = (assetToUpdate.realProfit / assetToUpdate.totalMoneyIn) * 100;
            assetToUpdate.unRealMargin = (assetToUpdate.unRealProfit / assetToUpdate.totalMoneyIn) * 100;
            return;
        }).then(function (res) {
            // calculate avgPrices only if shares are greate than 0
            if (assetToUpdate.shares > 0 && assetToUpdate.originalMoney > 0) {
                assetToUpdate.avgprice = assetToUpdate.originalMoney / assetToUpdate.shares;
            }
            // Calculate avgPrirce of assets sold if transaction is a sell order
            if (currentTransaction.transaction === false) {
                assetToUpdate.avgpriceSold = assetToUpdate.totalMoneyOut / assetToUpdate.sharesSold;
            }
            return;
        }).then(function (res) {
            // Calculate gain on the transaction
            currentTransaction.gain = (currentTransaction.price - assetToUpdate.avgprice) / assetToUpdate.avgprice * 100;
            // if this is NOT a new asset we will call updateAsset, otherwise we will create the new asset
            if (_this.assetIsNew === false) {
                currentAssetService.updateAsset(assetToUpdate)
                    .subscribe(function (success) { return _this.submitted = true; }, function (error) { throw "Failed to update asset"; });
            }
            else {
                _this.assetService.createAsset(assetToUpdate)
                    .subscribe(function (value) { return _this.submitted = true; }, function (error) { return alert("Could not add this asset !"); });
            }
            return;
        }).then(function (res) {
            // If we have made it up to this point then it is safe to save the transaction as well.
            currentTransactionService.addTransaction(currentTransaction)
                .subscribe();
            // And we can also set the submit variable to true, indicating a successful transaction
        }).catch(function (error) {
            // Catch any errors that occur
            alert("error occured: " + error);
        });
    };
    AddTransactionComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-transaction',
            template: __webpack_require__(/*! ./add-transaction.component.html */ "./src/app/add-transaction/add-transaction.component.html"),
            styles: [__webpack_require__(/*! ./add-transaction.component.css */ "./src/app/add-transaction/add-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
            _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());



/***/ }),

/***/ "./src/app/all-transaction/all-transaction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/all-transaction/all-transaction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td\r\n{\r\n    padding:0 15px 0 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/all-transaction/all-transaction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/all-transaction/all-transaction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 style=\" color: purple;\" >All Assets I Am Currently Holding</h5>\r\n<div>\r\n<table >\r\n  <thead>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Symbol</th>\r\n      <th>Shares</th>\r\n      <th>Price</th>\r\n      <th>Date</th>\r\n      <th>Total</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n      \r\n    <tr *ngFor=\"let asset of assets\" id=\"talberow\" \r\n    [style.background-color]=\"asset.transaction == false ? 'red' : 'green'\" \r\n    style=\"color:white\">\r\n      <td>{{ asset.id }}</td>\r\n      <a [routerLink]=\"['/current', asset.symbol]\" >\r\n      <td><span class=\"badge badge-dark\">{{ asset.symbol }}</span> </td>\r\n      </a>\r\n      <td>{{ asset.shares }}</td>\r\n      <td>${{ asset.price }}</td>\r\n      <td>{{ asset.buydate }}</td>   \r\n      <td>${{ asset.total }}</td>\r\n      <br>\r\n    </tr>\r\n  \r\n  </tbody>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./src/app/all-transaction/all-transaction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/all-transaction/all-transaction.component.ts ***!
  \**************************************************************/
/*! exports provided: AllTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionComponent", function() { return AllTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllTransactionComponent = /** @class */ (function () {
    function AllTransactionComponent(transactionService) {
        this.transactionService = transactionService;
    }
    AllTransactionComponent.prototype.ngOnInit = function () {
        this.getAssets();
    };
    AllTransactionComponent.prototype.getAssets = function () {
        var _this = this;
        return this.transactionService.getAllTransactions()
            .subscribe(function (assets) {
            _this.assets = assets;
        });
    };
    AllTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-transaction',
            template: __webpack_require__(/*! ./all-transaction.component.html */ "./src/app/all-transaction/all-transaction.component.html"),
            styles: [__webpack_require__(/*! ./all-transaction.component.css */ "./src/app/all-transaction/all-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"]])
    ], AllTransactionComponent);
    return AllTransactionComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _current_assets_current_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current-assets/current-assets.component */ "./src/app/current-assets/current-assets.component.ts");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var _all_transaction_all_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-transaction/all-transaction.component */ "./src/app/all-transaction/all-transaction.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'currentAssets',
        component: _current_assets_current_assets_component__WEBPACK_IMPORTED_MODULE_2__["CurrentAssetsComponent"]
    },
    {
        path: 'currentAssets/:symbol',
        component: _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_5__["AssetDetailsComponent"]
    },
    {
        path: 'Transactions/history',
        component: _all_transaction_all_transaction_component__WEBPACK_IMPORTED_MODULE_4__["AllTransactionComponent"]
    },
    {
        path: 'Transactions/add/:symbol/:shares',
        component: _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_3__["AddTransactionComponent"]
    },
    {
        path: 'Transactions/add',
        component: _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_3__["AddTransactionComponent"]
    },
    {
        path: '',
        redirectTo: 'currentAssets',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">  \r\n      <h1>My Asset Profit Calculator</h1>\r\n      <ul class=\"nav justify-content-center\">\r\n          <li class=\"nav-item\">\r\n              <a routerLink=\"currentAssets\" class=\"btn btn-light btn-sm\" role=\"button\" routerLinkActive=\"active\">Current Assets</a> \r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a routerLink=\"Transactions/history\" class=\"btn btn-light btn-sm\" role=\"button\" routerLinkActive=\"active\">Show All Transactions</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a routerLink=\"Transactions/add\" class=\"btn btn-light btn-sm\" role=\"button\" routerLinkActive=\"active\">Enter New Transaction (Asset)</a>\r\n          </li>\r\n      </ul>\r\n      <hr>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _current_assets_current_assets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-assets/current-assets.component */ "./src/app/current-assets/current-assets.component.ts");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var _all_transaction_all_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-transaction/all-transaction.component */ "./src/app/all-transaction/all-transaction.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _current_assets_current_assets_component__WEBPACK_IMPORTED_MODULE_6__["CurrentAssetsComponent"],
                _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_7__["AddTransactionComponent"],
                _all_transaction_all_transaction_component__WEBPACK_IMPORTED_MODULE_8__["AllTransactionComponent"],
                _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_9__["AssetDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset-details/asset-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    height: 100%;\n    width: 200%;\n    display: flex;\n  }\n\n  #leftForm {\n    width: 100%;\n    background-color: blue;\n  }\n\n  #rightForm {\n    width: 100%;\n    background-color: green;\n  }\n\n  #middleForm {\n    width: 10%;\n    background-color: white;\n    \n  }\n\n  #tableBorder, td {\n    color: antiquewhite;\n    border: 1px solid white;\n    padding:0 15px 0 15px; \n  }\n\n  th, #gold {\n    color: gold;\n  }\n\n  #Margin1 {\n    margin: 35px 0px 35px 0px\n  }\n\n  #heading {\n    text-align: center;\n    font-size: 16pt;\n    color: yellowgreen;\n  }\n\n  #heading2 {\n    text-align: right;\n    font-size: 24pt;\n    color: black;\n  }\n\n  #tableClean {\n    border: 0px transparent white;\n    padding:0 15px 0 15px; \n  }"

/***/ }),

/***/ "./src/app/asset-details/asset-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 id=\"heading2\">Asset - {{myAsset.symbol}}  - OVERVIEW <button [routerLink]=\"['/Transactions/add', myAsset.symbol, displayAsset.shares]\" routerLinkActive=\"active\" type=\"button\" >Trade</button></h6>\n<div id=\"container\">\n  <div id=\"leftForm\">\n    <div id=\"heading\">CURRENT PRICE   ${{displayAsset.price}} PER SHARE   </div>  \n                  <label for=\"newPrice\">New Price </label>\n                  <input type=\"number\" class=\"form-control\" id=\"newPrice\" placeholder=\"price per share\" \n                  required [(ngModel)]=\"newPrice\" #symbol=\"ngModel\" name=\"newPrice\" >\n                <button type=\"button\" (click)=\"updatePrice(newPrice)\" >UPDATE PRICE</button>\n      <table id=\"Margin1 tableClean\">\n            <thead>\n                <tr>\n                        <th></th>\n                        <th>SHARES</th>\n                        <th>AVG PRICE</th>\n                        <th>CURRENT PRICE</th>\n                        <th>CURRENT TOTAL</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                        <td id=\"gold\">CURRENT</td>\n                        <td>{{displayAsset.shares}}</td>\n                        <td>${{displayAsset.avgprice}}</td>\n                        <td>${{displayAsset.price}}</td>\n                        <td>${{displayAsset.currentTotal}}</td>\n                </tr>\n            </tbody>\n            <thead>\n                <tr>\n                        <th></th>\n                        <th>SOLD SHARES</th>\n                        <th>AVG PRICE SOLD</th>\n                        <th>TOTAL $ SOLD</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                        <td id=\"gold\">SOLD</td>\n                        <td>{{displayAsset.sharesSold}}</td>\n                        <td>${{displayAsset.avgpriceSold}}</td>\n                        <td>${{displayAsset.totalMoneyOut}}</td>\n                </tr>\n            </tbody>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th>REALIZED</th>\n                    <th>MARGIN</th>\n                    <th>UNREALIZED</th>\n                    <th>MARGIN</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr></tr>\n                <tr>\n                    <td id=\"gold\">PROFIT</td>\n                    <td>${{displayAsset.realProfit}}</td>\n                    <td>%{{displayAsset.realMargin}}</td>\n                    <td>${{displayAsset.unRealProfit}}</td>\n                    <td>%{{displayAsset.unRealMargin}}</td>\n                </tr>\n            </tbody>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th>TOTAL $ INVESTED</th>\n                    <th>TOTAL $ WITHDRAWN</th>\n                    <th>ORIGINAL $ LEFT</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr></tr>\n                <tr>\n                  <td id=\"gold\">MORE INFROMATION</td>\n                  <td>${{displayAsset.totalMoneyIn}}</td>\n                  <td>${{displayAsset.totalMoneyOut}}</td>\n                  <td>${{displayAsset.originalMoney}}</td>\n                </tr>\n            </tbody>\n        </table>       \n        <table id=\"Margin1\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <th id=\"heading\">WHAT IF SCENARIO</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                        <td>What if I sold at this price right now?</td>\n                        \n                        \n                        <td>\n                        <form #form=\"ngForm\">\n                            <div class=\"form-group\">\n                                <label for=\"whatIfPrice\">Price</label>\n                                <input type=\"number\" class=\"form-control\" placeholder=\"price\" id=\"whatIfPrice\"\n                                    required pattern=\"^\\d{0,4}(\\.\\d{0,2})?$\"\n                                    [(ngModel)]=\"whatIf.whatIfPrice\" #whatIfPrice=\"ngModel\" name=\"whatIfPrice\" >\n                                <div [hidden]=\"whatIfPrice.valid || whatIfPrice.pristine\"\n                                    class=\"alert alert-danger\">\n                                    Invalid price\n                                </div>\n                            </div>\n                        </form>\n                        </td>\n                        <td><button type=\"button\" (click)=\"whatIfScenario(whatIfPrice)\">WHAT IF?</button></td>\n                </tr>\n                <tr>\n                    <td>Total Money I would Get</td>\n                    <td>${{whatIf.totalMoneyOut}}</td>\n                </tr>\n                <tr>\n                    <td>Pure Profit</td>\n                    <td>${{whatIf.pureProfit}}</td>\n                </tr>\n                <tr>\n                    <td>Margin</td>\n                    <td>%{{whatIf.pureProfitMargin}}</td>\n                </tr>\n                <tr>\n                    <td>HOW MANY SHARES DO I NEED TO SELL TO GET MY ORIGINAL MONEY BACK?</td>\n                    <td>{{whatIf.sharesToSell}}</td>\n                </tr>\n            </tbody>\n        </table>\n  </div>\n  <div id=\"rightForm\">\n        <ul class=\"nav justify-content-center\">\n                <li class=\"nav-item\">\n                        <button (click)=\"displayTransactions('true')\" style=\"color:whitesmoke; background-color:green\">ONLY BOUGHT TRANSACTIONS</button>\n                </li>\n                <li class=\"nav-item\">\n                        <button (click)=\"displayTransactions('false')\" style=\"color:whitesmoke; background-color:red\">ONLY SOLD TRANSACTIONS</button>\n                </li>\n                <li class=\"nav-item\">\n                        <button (click)=\"displayTransactions('all')\" style=\"color:black; background-color:whitesmoke\" >ALL TRANSACTIONS</button>\n                </li>\n            </ul>\n      <p id=\"heading\">MY TRANSACTIONS</p>\n        <table id=\"tableClean\">\n                <thead>\n                  <tr>\n                    <th>Shares</th>\n                    <th>Price</th>\n                    <th>Date</th>\n                    <th>Total</th>\n                    <th>Gain</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    \n                  <tr *ngFor=\"let transaction of transactions\" \n                  [style.background-color]=\"transaction.transaction == false ? 'red' : 'green'\" \n                  style=\"color:white\">\n                    <td>{{ transaction.shares }}</td>\n                    <td>${{ transaction.price }}</td>\n                    <td>{{ transaction.buydate }}</td>   \n                    <td>${{ transaction.total }}</td>\n                    <td>{{transaction.total}}%</td>\n                    <br>\n                  </tr>\n                \n                </tbody>\n              </table>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/asset-details/asset-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.ts ***!
  \**********************************************************/
/*! exports provided: AssetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsComponent", function() { return AssetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset */ "./src/app/asset.ts");
/* harmony import */ var _whatIfAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../whatIfAsset */ "./src/app/whatIfAsset.ts");
/* harmony import */ var _asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset.service */ "./src/app/asset.service.ts");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AssetDetailsComponent = /** @class */ (function () {
    function AssetDetailsComponent(assetService, transactionService, location, route) {
        this.assetService = assetService;
        this.transactionService = transactionService;
        this.location = location;
        this.route = route;
        this.myAsset = new _asset__WEBPACK_IMPORTED_MODULE_1__["asset"]();
        this.displayAsset = new _asset__WEBPACK_IMPORTED_MODULE_1__["asset"]();
        this.newPrice = 0;
        // what if scenario below
        this.whatIf = new _whatIfAsset__WEBPACK_IMPORTED_MODULE_2__["whatIfAsset"]();
    }
    AssetDetailsComponent.prototype.ngOnInit = function () {
        this.grabAssetAndConvert();
    };
    AssetDetailsComponent.prototype.grabAssetAndConvert = function () {
        var _this = this;
        // Fetch our asset from DB and convert the numbers into strings, 'symbol' is param passed by router
        this.assetService.getAsset(this.route.snapshot.paramMap.get('symbol'))
            .subscribe(function (value) {
            _this.myAsset = value,
                _this.convert();
        }, function (error) { return alert("This symbol does not exist"); }, function () { return _this.displayTransactions("all"); });
    };
    // convert number and decimals like 1111.42 into 1,111.00
    AssetDetailsComponent.prototype.convert = function () {
        this.displayAsset.shares = this.myAsset.shares.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.sharesSold = this.myAsset.sharesSold.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.avgprice = this.myAsset.avgprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.avgpriceSold = this.myAsset.avgpriceSold.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.originalMoney = this.myAsset.originalMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.totalMoneyIn = this.myAsset.totalMoneyIn.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.totalMoneyOut = this.myAsset.totalMoneyOut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.price = this.myAsset.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.currentTotal = this.myAsset.currentTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.realProfit = this.myAsset.realProfit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.realMargin = this.myAsset.realMargin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.unRealProfit = this.myAsset.unRealProfit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.displayAsset.unRealMargin = this.myAsset.unRealMargin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    AssetDetailsComponent.prototype.updatePrice = function (newPrice) {
        var _this = this;
        // This will uodate the current price as well as calculate the currentTotal and other totals.
        new Promise(function (res) {
            _this.myAsset.price = newPrice;
            return res();
        }).then(function (res) {
            _this.myAsset.currentTotal = _this.myAsset.price * _this.myAsset.shares;
        }).then(function (res) {
            _this.myAsset.realProfit = _this.myAsset.totalMoneyOut - _this.myAsset.totalMoneyIn;
            _this.myAsset.unRealProfit = _this.myAsset.totalMoneyOut * 1 + _this.myAsset.currentTotal - _this.myAsset.totalMoneyIn;
        }).then(function (res) {
            _this.myAsset.realMargin = _this.myAsset.realProfit / _this.myAsset.totalMoneyIn * 100;
            _this.myAsset.unRealMargin = _this.myAsset.unRealProfit / _this.myAsset.totalMoneyIn * 100;
        }).then(function (res) {
            _this.assetService.updateAsset(_this.myAsset)
                .subscribe(function (res) { return _this.grabAssetAndConvert(); }, function (err) { return alert("failed to update asset"); });
        }).catch(function (err) {
            alert("error when trying to update Price " + err);
        });
    };
    AssetDetailsComponent.prototype.displayTransactions = function (displayType) {
        var _this = this;
        // return transactions based on transactions being true, false or all
        this.transactionService.getTransactionsByAsset(displayType, this.myAsset.symbol)
            .subscribe(function (res) { return _this.transactions = res; }, function (err) { return alert("failed to connect to database"); }, function () { return _this.convertTransactions(); });
    };
    AssetDetailsComponent.prototype.whatIfScenario = function () {
        var _this = this;
        // We will calculate the prices for the what if scenario
        new Promise(function (res) {
            // how much money we will get out at the what if price
            _this.whatIf.totalMoneyOut = _this.whatIf.whatIfPrice * _this.myAsset.shares;
            return res();
        }).then(function (res) {
            // how much profit will we make 
            _this.whatIf.pureProfit = _this.whatIf.totalMoneyOut - _this.myAsset.originalMoney;
            return;
        }).then(function (res) {
            // calculate profit margin
            _this.whatIf.pureProfitMargin = (_this.whatIf.pureProfit / _this.myAsset.originalMoney) * 100;
        }).then(function (res) {
            // how many shares do we need to sell to get our ORIGINAL MONEY back
            _this.whatIf.sharesToSell = _this.myAsset.originalMoney / _this.whatIf.whatIfPrice;
        }).then(function (res) {
            // round all the values
            _this.whatIf.totalMoneyOut = _this.whatIf.totalMoneyOut.toFixed(2);
            _this.whatIf.pureProfit = _this.whatIf.pureProfit.toFixed(2);
            _this.whatIf.pureProfitMargin = _this.whatIf.pureProfitMargin.toFixed(2);
            _this.whatIf.sharesToSell = Math.round(_this.whatIf.sharesToSell);
        }).then(function (res) {
            // convert to strings for user appeal ex 1000 to 1,000
            _this.whatIf.totalMoneyOut = _this.whatIf.totalMoneyOut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            _this.whatIf.pureProfit = _this.whatIf.pureProfit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            _this.whatIf.pureProfitMargin = _this.whatIf.pureProfitMargin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            _this.whatIf.sharesToSell = _this.whatIf.sharesToSell.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        });
    };
    // convert the format of the transactions from 100000 to 1,000,000.00
    AssetDetailsComponent.prototype.convertTransactions = function () {
        this.transactions.forEach(function (element) {
            element.price = element.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            element.total = element.total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            element.shares = element.shares.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        });
    };
    AssetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-details',
            template: __webpack_require__(/*! ./asset-details.component.html */ "./src/app/asset-details/asset-details.component.html"),
            styles: [__webpack_require__(/*! ./asset-details.component.css */ "./src/app/asset-details/asset-details.component.css")]
        }),
        __metadata("design:paramtypes", [_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
            _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AssetDetailsComponent);
    return AssetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/asset.service.ts":
/*!**********************************!*\
  !*** ./src/app/asset.service.ts ***!
  \**********************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset */ "./src/app/asset.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
        this.Url = 'http://localhost:8080/api/'; // URL to web api
    }
    // Return a single asset from the database table assets
    AssetService.prototype.getAsset = function (symbol) {
        var url = this.Url + 'currentassets' + "/" + symbol;
        var existingAsset = new _asset__WEBPACK_IMPORTED_MODULE_2__["asset"]();
        //return this.http.get<asset>(this.Url+'currentassets'+'/'+symbol);
        return this.http.get(url);
    };
    // return all assets from the database table assets
    AssetService.prototype.getAllAssets = function () {
        return this.http.get(this.Url + 'currentassets');
    };
    // create an asset
    AssetService.prototype.createAsset = function (asset) {
        return this.http.post(this.Url + 'currentassets', asset, httpOptions);
    };
    // update an asset in database
    AssetService.prototype.updateAsset = function (asset) {
        return this.http.put(this.Url + 'currentassets', asset, httpOptions);
    };
    AssetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AssetService);
    return AssetService;
}());



/***/ }),

/***/ "./src/app/asset.ts":
/*!**************************!*\
  !*** ./src/app/asset.ts ***!
  \**************************/
/*! exports provided: asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asset", function() { return asset; });
var asset = /** @class */ (function () {
    function asset() {
        this.shares = 0;
        this.avgprice = 0;
        this.sharesSold = 0;
        this.avgpriceSold = 0;
        this.originalMoney = 0;
        this.totalMoneyIn = 0;
        this.totalMoneyOut = 0;
        this.price = 0;
        this.currentTotal = 0;
        this.realProfit = 0;
        this.realMargin = 0;
        this.unRealProfit = 0;
        this.unRealMargin = 0;
    }
    return asset;
}());



/***/ }),

/***/ "./src/app/current-assets/current-assets.component.css":
/*!*************************************************************!*\
  !*** ./src/app/current-assets/current-assets.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td\r\n{\r\n    border: 1px solid white;\r\n    padding:0 15px 0 15px;\r\n    background-color:blue;\r\n    color:white;\r\n}\r\n\r\nbutton {\r\n    background-color:blue;\r\n    color:white;\r\n    border-radius: 8px;\r\n    width: 75px;\r\n}"

/***/ }),

/***/ "./src/app/current-assets/current-assets.component.html":
/*!**************************************************************!*\
  !*** ./src/app/current-assets/current-assets.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<h4 style=\" color: purple;\" >OVERALL   </h4>\r\n<table>\r\n  <thead>\r\n    <th>CURRENT TOTAL (UNREALIZED):</th>\r\n    <th>ORIGINAL INVESTMENT $ LEFT: </th>\r\n    <th>TOTAL $ INVESTED: </th>\r\n    <th>TOTAL $ PULLED OUT: </th>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th>${{portfolio.currentTotal}}</th>\r\n      <th>${{portfolio.originalMoney}}</th>\r\n      <th>${{portfolio.totalMoneyIn}}</th>\r\n      <th>${{portfolio.totalMoneyOut}}</th>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n<hr>\r\n<h5 style=\" color: purple;\" >All Assets I Am Currently Holding</h5>\r\n<div class=\"btn-group btn-group-sm\">\r\n<table >\r\n  <thead>\r\n    <tr> \r\n      <th>Symbol</th>\r\n      <th>Current Price</th>\r\n      <th>Total Shares</th>\r\n      <th>Current Total</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody >\r\n      \r\n    <tr *ngFor=\"let asset of assets\" [ngClass]=\"'tablerow'\">\r\n        <td><button type=\"button\"  [routerLink]=\"['/currentAssets/', asset.symbol]\" routerLinkActive=\"active\" >{{ asset.symbol }}</button></td>\r\n        <td>${{ asset.price }}</td>\r\n        <td>{{ asset.shares }}</td>\r\n        <td>${{ asset.currentTotal }}</td>\r\n        <button [routerLink]=\"['/Transactions/add', asset.symbol, asset.shares]\" routerLinkActive=\"active\" type=\"button\" >Trade</button>\r\n        <button type=\"button\"  [routerLink]=\"['/currentAssets/', asset.symbol]\" routerLinkActive=\"active\" >DETAILS</button>\r\n        <p></p>\r\n      <br>\r\n    </tr>\r\n  \r\n  </tbody>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./src/app/current-assets/current-assets.component.ts":
/*!************************************************************!*\
  !*** ./src/app/current-assets/current-assets.component.ts ***!
  \************************************************************/
/*! exports provided: CurrentAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAssetsComponent", function() { return CurrentAssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset.service */ "./src/app/asset.service.ts");
/* harmony import */ var _portfolioOverall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolioOverall */ "./src/app/portfolioOverall.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentAssetsComponent = /** @class */ (function () {
    function CurrentAssetsComponent(assetService) {
        this.assetService = assetService;
        this.portfolio = new _portfolioOverall__WEBPACK_IMPORTED_MODULE_2__["portfolio"]();
        this.totOut = 0;
        this.totIn = 0;
        this.currTotal = 0;
        this.orgMoney = 0;
    }
    CurrentAssetsComponent.prototype.ngOnInit = function () {
        this.getAssets();
    };
    CurrentAssetsComponent.prototype.getAssets = function () {
        var _this = this;
        return this.assetService.getAllAssets()
            .subscribe(function (thisCanBeAnything) {
            _this.assets = thisCanBeAnything;
            _this.calculate(_this.assets);
        });
    };
    CurrentAssetsComponent.prototype.calculate = function (myAssets) {
        var _this = this;
        new Promise(function (res) {
            myAssets.forEach(function (element) {
                _this.totOut += (element.totalMoneyOut * 1);
                _this.totIn += (element.totalMoneyIn * 1);
                _this.currTotal += (element.currentTotal * 1);
                _this.orgMoney += (element.originalMoney * 1);
            });
            return res();
        }).then(function (res) {
            _this.portfolio.currentTotal = _this.currTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            _this.portfolio.totalMoneyIn = _this.totIn.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            _this.portfolio.totalMoneyOut = _this.totOut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            _this.portfolio.originalMoney = _this.orgMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        });
    };
    CurrentAssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-assets',
            template: __webpack_require__(/*! ./current-assets.component.html */ "./src/app/current-assets/current-assets.component.html"),
            styles: [__webpack_require__(/*! ./current-assets.component.css */ "./src/app/current-assets/current-assets.component.css")]
        }),
        __metadata("design:paramtypes", [_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"]])
    ], CurrentAssetsComponent);
    return CurrentAssetsComponent;
}());



/***/ }),

/***/ "./src/app/portfolioOverall.ts":
/*!*************************************!*\
  !*** ./src/app/portfolioOverall.ts ***!
  \*************************************/
/*! exports provided: portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolio", function() { return portfolio; });
var portfolio = /** @class */ (function () {
    function portfolio() {
    }
    return portfolio;
}());



/***/ }),

/***/ "./src/app/transactions.service.ts":
/*!*****************************************!*\
  !*** ./src/app/transactions.service.ts ***!
  \*****************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TransactionsService = /** @class */ (function () {
    function TransactionsService(http) {
        this.http = http;
        this.Url = 'http://localhost:8080/api/'; // URL to web api
    }
    // get all transactions regardless of bought or sold
    TransactionsService.prototype.getAllTransactions = function () {
        return this.http.get(this.Url + 'allTransactions');
    };
    // get all transactions depending on transaction type
    TransactionsService.prototype.getTransactions = function (transactionType) {
        if (transactionType === "buy") {
            return this.http.get(this.Url + 'allTransactions/:true');
        }
        else if (transactionType === "sell") {
            return this.http.get(this.Url + 'allTransactions/:false');
        }
        else {
            return this.http.get(this.Url + 'allTransactions');
        }
    };
    // get all transactions of an Asset depending on transaction type
    TransactionsService.prototype.getTransactionsByAsset = function (transactionType, assetSymbol) {
        if (transactionType === "true") {
            return this.http.get(this.Url + 'allAssetTypeTransactions/true/' + assetSymbol);
        }
        else if (transactionType === "false") {
            return this.http.get(this.Url + 'allAssetTypeTransactions/false/' + assetSymbol);
        }
        else {
            return this.http.get(this.Url + 'allAssetTransactions/' + assetSymbol);
        }
    };
    TransactionsService.prototype.addTransaction = function (asset) {
        return this.http.post(this.Url + 'Transaction', asset, httpOptions);
    };
    TransactionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionsService);
    return TransactionsService;
}());



/***/ }),

/***/ "./src/app/transactions.ts":
/*!*********************************!*\
  !*** ./src/app/transactions.ts ***!
  \*********************************/
/*! exports provided: transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
var transaction = /** @class */ (function () {
    function transaction() {
    }
    return transaction;
}());



/***/ }),

/***/ "./src/app/whatIfAsset.ts":
/*!********************************!*\
  !*** ./src/app/whatIfAsset.ts ***!
  \********************************/
/*! exports provided: whatIfAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whatIfAsset", function() { return whatIfAsset; });
var whatIfAsset = /** @class */ (function () {
    function whatIfAsset() {
    }
    return whatIfAsset;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\GITProjects\stockProfitCalculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map