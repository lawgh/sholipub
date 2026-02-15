"use strict";
(self["webpackChunkshopping_list"] = self["webpackChunkshopping_list"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 7574);
/* harmony import */ var _features_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/auth/auth.component */ 9680);
/* harmony import */ var _features_preparation_preparation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/preparation/preparation.component */ 3345);
/* harmony import */ var _features_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/shopping/shopping.component */ 6951);
/* harmony import */ var _features_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/admin/admin.component */ 7623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  redirectTo: '/preparation',
  pathMatch: 'full'
}, {
  path: 'auth',
  component: _features_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent
}, {
  path: 'preparation',
  component: _features_preparation_preparation_component__WEBPACK_IMPORTED_MODULE_2__.PreparationComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'shopping',
  component: _features_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_3__.ShoppingComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'admin',
  component: _features_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__.AdminComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/preparation'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_sync_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/sync.service */ 2815);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/account.service */ 1146);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/storage.service */ 2323);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






class AppComponent {
  constructor(sync, account, storage, router) {
    this.sync = sync;
    this.account = account;
    this.storage = storage;
    this.router = router;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fontSize = _this.storage.getFontSize();
      document.documentElement.style.setProperty('--item-font-size', `${fontSize}px`);
      if (_this.account.isLoggedIn()) {
        yield _this.sync.initialize();
      } else {
        _this.router.navigate(['/auth']);
      }
    })();
  }
  ngOnDestroy() {
    this.sync.destroy();
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_sync_service__WEBPACK_IMPORTED_MODULE_1__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 1146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(account, router) {
    this.account = account;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.account.isLoggedIn()) {
      return true;
    }
    return this.router.createUrlTree(['/auth']);
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1146:
/*!**************************************************!*\
  !*** ./src/app/core/services/account.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 2323);
/* harmony import */ var _supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supabase.service */ 3577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class AccountService {
  constructor(storage, supabase, router) {
    this.storage = storage;
    this.supabase = supabase;
    this.router = router;
    this.CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  }
  generateCode() {
    let code = '';
    for (let i = 0; i < 8; i++) {
      if (i === 4) {
        code += '-';
      }
      const randomIndex = Math.floor(Math.random() * this.CODE_CHARS.length);
      code += this.CODE_CHARS[randomIndex];
    }
    return code;
  }
  hashPin(pin) {
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const encoder = new TextEncoder();
      const data = encoder.encode(pin);
      const hashBuffer = yield crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    })();
  }
  createNewAccount(pin) {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const code = _this.generateCode();
      const pinHash = pin ? yield _this.hashPin(pin) : undefined;
      const response = yield _this.supabase.createAccount(code, pinHash);
      if (!response.success) {
        throw new Error(response.error_message || 'Failed to create account');
      }
      const account = {
        id: response.account_id,
        code: response.code
      };
      _this.storage.setAccount(account);
      return account;
    })();
  }
  joinExistingAccount(code, pin) {
    var _this2 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formattedCode = _this2.formatCode(code);
      const pinHash = pin ? yield _this2.hashPin(pin) : undefined;
      const response = yield _this2.supabase.joinAccount(formattedCode, pinHash);
      if (!response.success) {
        throw new Error(response.error_message || 'Failed to join account');
      }
      const account = {
        id: response.account_id,
        code: formattedCode
      };
      _this2.storage.setAccount(account);
      return account;
    })();
  }
  isLoggedIn() {
    return this.storage.getAccount() !== null;
  }
  getCurrentAccount() {
    return this.storage.getAccount();
  }
  logout() {
    this.storage.clear();
    this.router.navigate(['/auth']);
  }
  formatCode(code) {
    const cleaned = code.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (cleaned.length !== 8) {
      throw new Error('Code must be 8 characters');
    }
    return `${cleaned.substring(0, 4)}-${cleaned.substring(4)}`;
  }
  static {
    this.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2323:
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StorageService {
  constructor() {
    this.ACCOUNT_KEY = 'shopping_list_account';
    this.ITEMS_KEY = 'shopping_list_items';
    this.FONT_SIZE_KEY = 'shopping_list_font_size';
    this.DEFAULT_FONT_SIZE = 16;
    this.MIN_FONT_SIZE = 12;
    this.MAX_FONT_SIZE = 24;
  }
  getAccount() {
    const data = localStorage.getItem(this.ACCOUNT_KEY);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }
  setAccount(account) {
    localStorage.setItem(this.ACCOUNT_KEY, JSON.stringify(account));
  }
  getItems() {
    const data = localStorage.getItem(this.ITEMS_KEY);
    if (!data) return [];
    try {
      const items = JSON.parse(data);
      return items.map(item => ({
        ...item,
        updatedAt: new Date(item.updatedAt)
      }));
    } catch {
      return [];
    }
  }
  setItems(items) {
    localStorage.setItem(this.ITEMS_KEY, JSON.stringify(items));
  }
  getFontSize() {
    const data = localStorage.getItem(this.FONT_SIZE_KEY);
    if (!data) return this.DEFAULT_FONT_SIZE;
    try {
      const size = parseInt(data, 10);
      if (size >= this.MIN_FONT_SIZE && size <= this.MAX_FONT_SIZE) {
        return size;
      }
      return this.DEFAULT_FONT_SIZE;
    } catch {
      return this.DEFAULT_FONT_SIZE;
    }
  }
  setFontSize(size) {
    if (size >= this.MIN_FONT_SIZE && size <= this.MAX_FONT_SIZE) {
      localStorage.setItem(this.FONT_SIZE_KEY, size.toString());
    }
  }
  clear() {
    localStorage.removeItem(this.ACCOUNT_KEY);
    localStorage.removeItem(this.ITEMS_KEY);
    localStorage.removeItem(this.FONT_SIZE_KEY);
  }
  clearItems() {
    localStorage.removeItem(this.ITEMS_KEY);
  }
  static {
    this.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3577:
/*!***************************************************!*\
  !*** ./src/app/core/services/supabase.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupabaseService": () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ 3638);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class SupabaseService {
  constructor() {
    this.realtimeChannel = null;
    this.currentAccountId = null;
    this.supabase = this.createSupabaseClient();
  }
  createSupabaseClient(accountId) {
    const headers = {};
    if (accountId) {
      headers['x-account-id'] = accountId;
    }
    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.url, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.anonKey, {
      global: {
        headers: headers
      }
    });
  }
  setAccountId(accountId) {
    if (this.currentAccountId !== accountId) {
      this.currentAccountId = accountId;
      // Recréer le client avec le nouveau header
      this.supabase = this.createSupabaseClient(accountId);
    }
  }
  createAccount(code, pinHash) {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data,
        error
      } = yield _this.supabase.rpc('create_account', {
        p_code: code,
        p_pin_hash: pinHash || null
      });
      if (error) {
        throw new Error(error.message);
      }
      return data[0];
    })();
  }
  joinAccount(code, pinHash) {
    var _this2 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data,
        error
      } = yield _this2.supabase.rpc('join_account', {
        p_code: code,
        p_pin_hash: pinHash || null
      });
      if (error) {
        throw new Error(error.message);
      }
      return data[0];
    })();
  }
  fetchItems(accountId) {
    var _this3 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data,
        error
      } = yield _this3.supabase.from('items').select('*').eq('account_id', accountId).order('sort_order', {
        ascending: true
      });
      if (error) {
        throw new Error(error.message);
      }
      return (data || []).map(item => _this3.mapDbItemToItem(item));
    })();
  }
  upsertItem(item, accountId) {
    var _this4 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dbItem = _this4.mapItemToDbItem(item);
      const {
        error
      } = yield _this4.supabase.from('items').upsert({
        ...dbItem,
        account_id: accountId
      }, {
        onConflict: 'id'
      });
      if (error) {
        throw new Error(error.message);
      }
    })();
  }
  deleteItem(itemId, accountId) {
    var _this5 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        error
      } = yield _this5.supabase.from('items').delete().eq('id', itemId).eq('account_id', accountId);
      if (error) {
        throw new Error(error.message);
      }
    })();
  }
  subscribeToChanges(accountId, callback) {
    if (this.realtimeChannel) {
      this.supabase.removeChannel(this.realtimeChannel);
    }
    this.realtimeChannel = this.supabase.channel(`items:account_id=eq.${accountId}`).on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'items',
      filter: `account_id=eq.${accountId}`
    }, callback).subscribe();
    return this.realtimeChannel;
  }
  unsubscribeFromChanges() {
    if (this.realtimeChannel) {
      this.supabase.removeChannel(this.realtimeChannel);
      this.realtimeChannel = null;
    }
  }
  mapDbItemToItem(dbItem) {
    return {
      id: dbItem.id,
      accountId: dbItem.account_id,
      name: dbItem.name,
      quantity: dbItem.quantity,
      status: dbItem.status,
      sortOrder: dbItem.sort_order,
      updatedAt: new Date(dbItem.updated_at),
      pendingSync: false
    };
  }
  mapItemToDbItem(item) {
    return {
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      status: item.status,
      sort_order: item.sortOrder,
      updated_at: item.updatedAt.toISOString()
    };
  }
  static {
    this.ɵfac = function SupabaseService_Factory(t) {
      return new (t || SupabaseService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: SupabaseService,
      factory: SupabaseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2815:
/*!***********************************************!*\
  !*** ./src/app/core/services/sync.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncService": () => (/* binding */ SyncService)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 2323);
/* harmony import */ var _supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supabase.service */ 3577);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ 1146);






class SyncService {
  constructor(storage, supabase, account) {
    this.storage = storage;
    this.supabase = supabase;
    this.account = account;
    this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.syncStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('synced');
    this.setupOnlineListener();
  }
  initialize() {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentAccount = _this.account.getCurrentAccount();
      if (!currentAccount) {
        return;
      }
      // Configurer le client Supabase avec l'account_id dans les headers
      _this.supabase.setAccountId(currentAccount.id);
      const localItems = _this.storage.getItems();
      _this.items$.next(localItems);
      try {
        const remoteItems = yield _this.supabase.fetchItems(currentAccount.id);
        const mergedItems = _this.mergeItems(localItems, remoteItems);
        _this.items$.next(mergedItems);
        _this.storage.setItems(mergedItems);
        yield _this.retryPendingSync();
        _this.supabase.subscribeToChanges(currentAccount.id, payload => {
          _this.handleRealtimeUpdate(payload);
        });
      } catch (error) {
        console.error('Failed to sync with server:', error);
        _this.syncStatus$.next('error');
      }
    })();
  }
  getItems() {
    return this.items$.asObservable();
  }
  getSyncStatus() {
    return this.syncStatus$.asObservable();
  }
  addItem(dto) {
    var _this2 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentAccount = _this2.account.getCurrentAccount();
      if (!currentAccount) {
        throw new Error('No account found');
      }
      const newItem = {
        id: crypto.randomUUID(),
        accountId: currentAccount.id,
        name: dto.name,
        quantity: dto.quantity || 1,
        status: dto.status || 'to_buy',
        sortOrder: dto.sortOrder,
        updatedAt: new Date(),
        pendingSync: false
      };
      const currentItems = _this2.items$.value;
      const updatedItems = [...currentItems, newItem];
      _this2.items$.next(updatedItems);
      _this2.storage.setItems(updatedItems);
      try {
        yield _this2.supabase.upsertItem(newItem, currentAccount.id);
      } catch (error) {
        console.error('Failed to sync new item:', error);
        newItem.pendingSync = true;
        _this2.items$.next(updatedItems);
        _this2.storage.setItems(updatedItems);
        _this2.syncStatus$.next('pending');
      }
      return newItem;
    })();
  }
  updateItem(itemId, dto) {
    var _this3 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentAccount = _this3.account.getCurrentAccount();
      if (!currentAccount) {
        throw new Error('No account found');
      }
      const currentItems = _this3.items$.value;
      const itemIndex = currentItems.findIndex(i => i.id === itemId);
      if (itemIndex === -1) {
        throw new Error('Item not found');
      }
      const updatedItem = {
        ...currentItems[itemIndex],
        ...dto,
        updatedAt: new Date(),
        pendingSync: false
      };
      const updatedItems = [...currentItems];
      updatedItems[itemIndex] = updatedItem;
      _this3.items$.next(updatedItems);
      _this3.storage.setItems(updatedItems);
      try {
        yield _this3.supabase.upsertItem(updatedItem, currentAccount.id);
      } catch (error) {
        console.error('Failed to sync updated item:', error);
        updatedItem.pendingSync = true;
        updatedItems[itemIndex] = updatedItem;
        _this3.items$.next(updatedItems);
        _this3.storage.setItems(updatedItems);
        _this3.syncStatus$.next('pending');
      }
    })();
  }
  deleteItem(itemId) {
    var _this4 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentAccount = _this4.account.getCurrentAccount();
      if (!currentAccount) {
        throw new Error('No account found');
      }
      const currentItems = _this4.items$.value;
      const updatedItems = currentItems.filter(i => i.id !== itemId);
      _this4.items$.next(updatedItems);
      _this4.storage.setItems(updatedItems);
      try {
        yield _this4.supabase.deleteItem(itemId, currentAccount.id);
      } catch (error) {
        console.error('Failed to sync item deletion:', error);
        _this4.syncStatus$.next('error');
      }
    })();
  }
  reorderItems(items) {
    var _this5 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentAccount = _this5.account.getCurrentAccount();
      if (!currentAccount) {
        throw new Error('No account found');
      }
      const reorderedItems = items.map((item, index) => ({
        ...item,
        sortOrder: index,
        updatedAt: new Date()
      }));
      _this5.items$.next(reorderedItems);
      _this5.storage.setItems(reorderedItems);
      try {
        for (const item of reorderedItems) {
          yield _this5.supabase.upsertItem(item, currentAccount.id);
        }
      } catch (error) {
        console.error('Failed to sync reordering:', error);
        _this5.syncStatus$.next('error');
      }
    })();
  }
  retryPendingSync() {
    var _this6 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentAccount = _this6.account.getCurrentAccount();
      if (!currentAccount) {
        return;
      }
      const currentItems = _this6.items$.value;
      const pendingItems = currentItems.filter(i => i.pendingSync);
      if (pendingItems.length === 0) {
        _this6.syncStatus$.next('synced');
        return;
      }
      let hasErrors = false;
      for (const item of pendingItems) {
        try {
          yield _this6.supabase.upsertItem(item, currentAccount.id);
          item.pendingSync = false;
        } catch (error) {
          console.error('Failed to sync pending item:', error);
          hasErrors = true;
        }
      }
      _this6.items$.next([...currentItems]);
      _this6.storage.setItems(currentItems);
      _this6.syncStatus$.next(hasErrors ? 'error' : 'synced');
    })();
  }
  mergeItems(localItems, remoteItems) {
    const mergedMap = new Map();
    for (const item of localItems) {
      mergedMap.set(item.id, item);
    }
    for (const item of remoteItems) {
      const existing = mergedMap.get(item.id);
      if (!existing || item.updatedAt > existing.updatedAt) {
        mergedMap.set(item.id, item);
      }
    }
    return Array.from(mergedMap.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }
  handleRealtimeUpdate(payload) {
    const currentItems = this.items$.value;
    let updatedItems = [...currentItems];
    if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
      const dbItem = payload.new;
      const item = {
        id: dbItem.id,
        accountId: dbItem.account_id,
        name: dbItem.name,
        quantity: dbItem.quantity,
        status: dbItem.status,
        sortOrder: dbItem.sort_order,
        updatedAt: new Date(dbItem.updated_at),
        pendingSync: false
      };
      const existingIndex = updatedItems.findIndex(i => i.id === item.id);
      if (existingIndex >= 0) {
        const existing = updatedItems[existingIndex];
        if (item.updatedAt > existing.updatedAt) {
          updatedItems[existingIndex] = item;
        }
      } else {
        updatedItems.push(item);
      }
    } else if (payload.eventType === 'DELETE') {
      const deletedId = payload.old.id;
      updatedItems = updatedItems.filter(i => i.id !== deletedId);
    }
    updatedItems.sort((a, b) => a.sortOrder - b.sortOrder);
    this.items$.next(updatedItems);
    this.storage.setItems(updatedItems);
  }
  setupOnlineListener() {
    if (typeof window !== 'undefined' && 'ononline' in window) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'online').subscribe(() => {
        this.retryPendingSync();
      });
    }
  }
  destroy() {
    this.supabase.unsubscribeFromChanges();
  }
  static {
    this.ɵfac = function SyncService_Factory(t) {
      return new (t || SyncService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SyncService,
      factory: SyncService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7623:
/*!***************************************************!*\
  !*** ./src/app/features/admin/admin.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/account.service */ 1146);
/* harmony import */ var _core_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/sync.service */ 2815);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








function AdminComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.retrySync());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " R\u00E9essayer la synchronisation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " La r\u00E9initialisation supprimera toutes les donn\u00E9es locales et vous d\u00E9connectera. Les donn\u00E9es sur les autres appareils ne seront pas affect\u00E9es. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_div_25_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.startReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " R\u00E9initialiser l'application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u00CAtes-vous s\u00FBr de vouloir r\u00E9initialiser l'application? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19)(4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_div_26_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.confirmReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Oui, r\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_div_26_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.cancelReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class AdminComponent {
  constructor(accountService, syncService, router) {
    this.accountService = accountService;
    this.syncService = syncService;
    this.router = router;
    this.account = null;
    this.syncStatus = 'synced';
    this.resetConfirmation = false;
  }
  ngOnInit() {
    this.account = this.accountService.getCurrentAccount();
    this.syncSubscription = this.syncService.getSyncStatus().subscribe(status => {
      this.syncStatus = status;
    });
  }
  ngOnDestroy() {
    this.syncSubscription?.unsubscribe();
  }
  copyCode() {
    if (this.account?.code) {
      navigator.clipboard.writeText(this.account.code);
    }
  }
  getSyncStatusText() {
    switch (this.syncStatus) {
      case 'synced':
        return 'Synchronisé';
      case 'pending':
        return 'Synchronisation en attente';
      case 'error':
        return 'Erreur de connexion';
      default:
        return 'Inconnu';
    }
  }
  getSyncStatusClass() {
    switch (this.syncStatus) {
      case 'synced':
        return 'status-synced';
      case 'pending':
        return 'status-pending';
      case 'error':
        return 'status-error';
      default:
        return '';
    }
  }
  retrySync() {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.syncService.retryPendingSync();
    })();
  }
  startReset() {
    this.resetConfirmation = true;
  }
  cancelReset() {
    this.resetConfirmation = false;
  }
  confirmReset() {
    this.accountService.logout();
  }
  goBack() {
    this.router.navigate(['/preparation']);
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_sync_service__WEBPACK_IMPORTED_MODULE_3__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 6,
      consts: [[1, "admin-container"], [1, "section"], [1, "code-display"], [1, "code"], [1, "copy-button", 3, "click"], [1, "info-text"], [1, "sync-status", 3, "ngClass"], [1, "sync-indicator"], [1, "sync-text"], ["class", "retry-button", 3, "click", 4, "ngIf"], [1, "section", "danger-zone"], [4, "ngIf"], ["class", "confirmation-box", 4, "ngIf"], [1, "back-button", 3, "click"], [1, "retry-button", 3, "click"], [1, "warning-text"], [1, "danger-button", 3, "click"], [1, "confirmation-box"], [1, "confirm-text"], [1, "confirmation-buttons"], [1, "confirm-button", 3, "click"], [1, "cancel-button", 3, "click"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Code du compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2)(8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_10_listener() {
            return ctx.copyCode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Copier ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Partagez ce code avec d'autres appareils pour synchroniser la liste. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1)(15, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u00C9tat de synchronisation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AdminComponent_button_21_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10)(23, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Zone de danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AdminComponent_div_25_Template, 5, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AdminComponent_div_26_Template, 8, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_27_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Retour \u00E0 la liste ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.account == null ? null : ctx.account.code) || "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.getSyncStatusClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getSyncStatusText());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.syncStatus === "pending" || ctx.syncStatus === "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.resetConfirmation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.resetConfirmation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
      styles: [".admin-container[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 32px;\n  max-width: 600px;\n  margin: 0 auto;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 100vh;\n}\n.admin-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 24px;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 18px;\n  margin-bottom: 16px;\n}\n.section.danger-zone[_ngcontent-%COMP%] {\n  border: 2px solid #F44336;\n}\n.section.danger-zone[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #F44336;\n}\n\n.code-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.code-display[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 28px;\n  font-weight: bold;\n  color: #4CAF50;\n  letter-spacing: 2px;\n  padding: 16px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  text-align: center;\n  -webkit-user-select: all;\n          user-select: all;\n}\n.code-display[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.code-display[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]:hover {\n  background: #1976D2;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0;\n}\n\n.sync-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.sync-status[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n}\n.sync-status[_ngcontent-%COMP%]   .sync-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n.sync-status.status-synced[_ngcontent-%COMP%] {\n  background: #E8F5E9;\n}\n.sync-status.status-synced[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%] {\n  background: #4CAF50;\n}\n.sync-status.status-synced[_ngcontent-%COMP%]   .sync-text[_ngcontent-%COMP%] {\n  color: #4CAF50;\n}\n.sync-status.status-pending[_ngcontent-%COMP%] {\n  background: #FFF3E0;\n}\n.sync-status.status-pending[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%] {\n  background: #FF9800;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n.sync-status.status-pending[_ngcontent-%COMP%]   .sync-text[_ngcontent-%COMP%] {\n  color: #FF9800;\n}\n.sync-status.status-error[_ngcontent-%COMP%] {\n  background: #FFEBEE;\n}\n.sync-status.status-error[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%] {\n  background: #F44336;\n}\n.sync-status.status-error[_ngcontent-%COMP%]   .sync-text[_ngcontent-%COMP%] {\n  color: #F44336;\n}\n\n.retry-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n}\n.retry-button[_ngcontent-%COMP%]:hover {\n  background: #1976D2;\n}\n\n.warning-text[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 16px;\n  line-height: 1.5;\n}\n\n.danger-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: #F44336;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}\n.danger-button[_ngcontent-%COMP%]:hover {\n  background: #D32F2F;\n}\n\n.confirmation-box[_ngcontent-%COMP%]   .confirm-text[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 500;\n  margin-bottom: 16px;\n  text-align: center;\n}\n.confirmation-box[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.confirmation-box[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}\n.confirmation-box[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .confirm-button[_ngcontent-%COMP%] {\n  background: #F44336;\n  color: white;\n}\n.confirmation-box[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .confirm-button[_ngcontent-%COMP%]:hover {\n  background: #D32F2F;\n}\n.confirmation-box[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  background: #ddd;\n  color: #333;\n}\n.confirmation-box[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsbUJBQUE7QUFKTjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7QUFVRTtFQUNFLG1CQUFBO0FBUko7QUFVSTtFQUNFLG1CQUFBO0FBUk47QUFXSTtFQUNFLGNBQUE7QUFUTjtBQWFFO0VBQ0UsbUJBQUE7QUFYSjtBQWFJO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtBQVhOO0FBY0k7RUFDRSxjQUFBO0FBWk47QUFnQkU7RUFDRSxtQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsbUJBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7QUFmTjs7QUFvQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBakJGO0FBbUJFO0VBQ0UsbUJBQUE7QUFqQko7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbEJGO0FBb0JFO0VBQ0UsbUJBQUE7QUFsQko7O0FBdUJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXBCSjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBckJKO0FBdUJJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJOO0FBd0JJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBdEJOO0FBd0JNO0VBQ0UsbUJBQUE7QUF0QlI7QUEwQkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUF4Qk47QUEwQk07RUFDRSxnQkFBQTtBQXhCUjs7QUE4QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEzQkY7QUE2QkU7RUFDRSxtQkFBQTtBQTNCSjs7QUErQkE7RUFDRTtJQUNFLFVBQUE7RUE1QkY7RUE4QkE7SUFDRSxZQUFBO0VBNUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICBoMSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufVxuXG4uc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgJi5kYW5nZXItem9uZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y0NDMzNjtcblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIH1cbiAgfVxufVxuXG4uY29kZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIC5jb2RlIHtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBhbGw7XG4gIH1cblxuICAuY29weS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzE5NzZEMjtcbiAgICB9XG4gIH1cbn1cblxuLmluZm8tdGV4dCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN5bmMtc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgLnN5bmMtaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnN5bmMtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAmLnN0YXR1cy1zeW5jZWQge1xuICAgIGJhY2tncm91bmQ6ICNFOEY1RTk7XG5cbiAgICAuc3luYy1pbmRpY2F0b3Ige1xuICAgICAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgICB9XG5cbiAgICAuc3luYy10ZXh0IHtcbiAgICAgIGNvbG9yOiAjNENBRjUwO1xuICAgIH1cbiAgfVxuXG4gICYuc3RhdHVzLXBlbmRpbmcge1xuICAgIGJhY2tncm91bmQ6ICNGRkYzRTA7XG5cbiAgICAuc3luYy1pbmRpY2F0b3Ige1xuICAgICAgYmFja2dyb3VuZDogI0ZGOTgwMDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAuc3luYy10ZXh0IHtcbiAgICAgIGNvbG9yOiAjRkY5ODAwO1xuICAgIH1cbiAgfVxuXG4gICYuc3RhdHVzLWVycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZFQkVFO1xuXG4gICAgLnN5bmMtaW5kaWNhdG9yIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGNDQzMzY7XG4gICAgfVxuXG4gICAgLnN5bmMtdGV4dCB7XG4gICAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICB9XG4gIH1cbn1cblxuLnJldHJ5LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NkQyO1xuICB9XG59XG5cbi53YXJuaW5nLXRleHQge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmRhbmdlci1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI0QzMkYyRjtcbiAgfVxufVxuXG4uY29uZmlybWF0aW9uLWJveCB7XG4gIC5jb25maXJtLXRleHQge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29uZmlybWF0aW9uLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuY29uZmlybS1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbmNlbC1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9680:
/*!*************************************************!*\
  !*** ./src/app/features/auth/auth.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/account.service */ 1146);
/* harmony import */ var _core_services_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sync.service */ 2815);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);









function AuthComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Code PIN (optionnel, 4 chiffres)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthComponent_div_8_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.pin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Le PIN prot\u00E8ge votre compte. Laissez vide pour aucun PIN.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_div_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.createAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.pin)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Cr\u00E9ation..." : "Cr\u00E9er le compte", " ");
  }
}
function AuthComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 10)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Compte cr\u00E9\u00E9 avec succ\u00E8s!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Votre code d'acc\u00E8s est:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_div_9_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.copyCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Copier le code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Redirection automatique...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.generatedCode, " ");
  }
}
function AuthComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Code du compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthComponent_div_10_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.code = $event);
    })("input", function AuthComponent_div_10_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.formatCodeInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6)(6, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Code PIN (si le compte en a un)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthComponent_div_10_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.pin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_div_10_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.joinAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.code)("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.pin)("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.loading || !ctx_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.loading ? "Connexion..." : "Rejoindre le compte", " ");
  }
}
function AuthComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.error, " ");
  }
}
class AuthComponent {
  constructor(accountService, syncService, router) {
    this.accountService = accountService;
    this.syncService = syncService;
    this.router = router;
    this.mode = 'create';
    this.pin = '';
    this.code = '';
    this.generatedCode = '';
    this.loading = false;
    this.error = '';
  }
  switchMode(newMode) {
    this.mode = newMode;
    this.error = '';
    this.pin = '';
    this.code = '';
    this.generatedCode = '';
  }
  createAccount() {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = '';
      try {
        const account = yield _this.accountService.createNewAccount(_this.pin || undefined);
        _this.generatedCode = account.code;
        yield _this.syncService.initialize();
        setTimeout(() => {
          _this.router.navigate(['/preparation']);
        }, 3000);
      } catch (err) {
        _this.error = err.message || 'Failed to create account';
        _this.loading = false;
      }
    })();
  }
  joinAccount() {
    var _this2 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.code.trim()) {
        _this2.error = 'Please enter an account code';
        return;
      }
      _this2.loading = true;
      _this2.error = '';
      try {
        yield _this2.accountService.joinExistingAccount(_this2.code, _this2.pin || undefined);
        yield _this2.syncService.initialize();
        _this2.router.navigate(['/preparation']);
      } catch (err) {
        _this2.error = err.message || 'Failed to join account';
        _this2.loading = false;
      }
    })();
  }
  copyCode() {
    if (this.generatedCode) {
      navigator.clipboard.writeText(this.generatedCode);
    }
  }
  formatCodeInput() {
    let cleaned = this.code.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (cleaned.length > 8) {
      cleaned = cleaned.substring(0, 8);
    }
    if (cleaned.length > 4) {
      this.code = `${cleaned.substring(0, 4)}-${cleaned.substring(4)}`;
    } else {
      this.code = cleaned;
    }
  }
  static {
    this.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_sync_service__WEBPACK_IMPORTED_MODULE_2__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 10,
      consts: [[1, "auth-container"], [1, "mode-switcher"], [3, "disabled", "click"], ["class", "auth-form", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "auth-form"], [1, "form-group"], ["for", "create-pin"], ["type", "password", "id", "create-pin", "maxlength", "4", "pattern", "[0-9]*", "placeholder", "0000", 3, "ngModel", "disabled", "ngModelChange"], [1, "primary-button", 3, "disabled", "click"], [1, "success-message"], [1, "generated-code"], [1, "copy-button", 3, "click"], [1, "redirect-message"], ["for", "join-code"], ["type", "text", "id", "join-code", "maxlength", "9", "placeholder", "XXXX-XXXX", 3, "ngModel", "disabled", "ngModelChange", "input"], ["for", "join-pin"], ["type", "password", "id", "join-pin", "maxlength", "4", "pattern", "[0-9]*", "placeholder", "0000", 3, "ngModel", "disabled", "ngModelChange"], [1, "error-message"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Liste de courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_4_listener() {
            return ctx.switchMode("create");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Cr\u00E9er un compte ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_6_listener() {
            return ctx.switchMode("join");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Rejoindre un compte ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AuthComponent_div_8_Template, 9, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AuthComponent_div_9_Template, 12, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AuthComponent_div_10_Template, 11, 6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AuthComponent_div_11_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.mode === "create");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.mode === "join");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "create" && !ctx.generatedCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "create" && ctx.generatedCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "join");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.auth-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #4CAF50;\n  margin-bottom: 32px;\n}\n\n.mode-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.mode-switcher[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: 2px solid #4CAF50;\n  background: white;\n  color: #4CAF50;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mode-switcher[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n}\n.mode-switcher[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4CAF50;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n\n.primary-button[_ngcontent-%COMP%] {\n  padding: 14px;\n  background: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.primary-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #45a049;\n}\n.primary-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.success-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  margin-bottom: 16px;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 8px;\n}\n\n.generated-code[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #4CAF50;\n  letter-spacing: 4px;\n  padding: 16px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  margin: 16px 0;\n  -webkit-user-select: all;\n          user-select: all;\n}\n\n.copy-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.copy-button[_ngcontent-%COMP%]:hover {\n  background: #1976D2;\n}\n\n.redirect-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-style: italic;\n  color: #999;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #ffebee;\n  color: #c62828;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFIRjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUpKO0FBTUk7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFKTjtBQU9JO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQUxOO0FBU0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQVJGO0FBVUU7RUFDRSxtQkFBQTtBQVJKO0FBV0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFhQTtFQUNFLGtCQUFBO0FBVkY7QUFZRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO1VBQUEsZ0JBQUE7QUFaRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQVpGO0FBY0U7RUFDRSxtQkFBQTtBQVpKOztBQWdCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBYkYiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0Q0FGNTA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgfVxufVxuXG4ubW9kZS1zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICM0Q0FGNTA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxufVxuXG4uYXV0aC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzRDQUY1MDtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgcGFkZGluZzogMTRweDtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDVhMDQ5O1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMiB7XG4gICAgY29sb3I6ICM0Q0FGNTA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxufVxuXG4uZ2VuZXJhdGVkLWNvZGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzRDQUY1MDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDE2cHggMDtcbiAgdXNlci1zZWxlY3Q6IGFsbDtcbn1cblxuLmNvcHktYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxOTc2RDI7XG4gIH1cbn1cblxuLnJlZGlyZWN0LW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmViZWU7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3345:
/*!***************************************************************!*\
  !*** ./src/app/features/preparation/preparation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreparationComponent": () => (/* binding */ PreparationComponent)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sync.service */ 2815);








function PreparationComponent_div_7_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PreparationComponent_div_7_input_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.editingItemName = $event);
    })("keyup.enter", function PreparationComponent_div_7_input_3_Template_input_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.saveEditItem(item_r2));
    })("keyup.escape", function PreparationComponent_div_7_input_3_Template_input_keyup_escape_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.cancelEditItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.editingItemName);
  }
}
function PreparationComponent_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_span_4_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.startEditItem(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
  }
}
function PreparationComponent_div_7_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.moveUp(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2191 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PreparationComponent_div_7_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.moveDown(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2193 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PreparationComponent_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_div_18_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.saveEditItem(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_div_18_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.cancelEditItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function PreparationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PreparationComponent_div_7_input_3_Template, 1, 1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PreparationComponent_div_7_span_4_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12)(6, "div", 13)(7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.decreaseQuantity(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.increaseQuantity(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PreparationComponent_div_7_button_14_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PreparationComponent_div_7_button_15_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_div_7_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.deleteItem(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " \uD83D\uDDD1\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PreparationComponent_div_7_div_18_Template, 5, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("pending-sync", item_r2.pendingSync);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isEditing(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r2.quantity <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r2.quantity >= 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.canMoveUp(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.canMoveDown(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isEditing(item_r2));
  }
}
function PreparationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Aucun article dans la liste");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ajoutez des articles ci-dessus pour commencer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class PreparationComponent {
  constructor(sync) {
    this.sync = sync;
    this.items = [];
    this.newItemName = '';
    this.editingItemId = null;
    this.editingItemName = '';
  }
  ngOnInit() {
    this.itemsSubscription = this.sync.getItems().subscribe(items => {
      this.items = items;
    });
  }
  ngOnDestroy() {
    this.itemsSubscription?.unsubscribe();
  }
  addItem() {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.newItemName.trim()) {
        return;
      }
      const maxSortOrder = _this.items.length > 0 ? Math.max(..._this.items.map(i => i.sortOrder)) : -1;
      yield _this.sync.addItem({
        name: _this.newItemName.trim(),
        quantity: 1,
        sortOrder: maxSortOrder + 1
      });
      _this.newItemName = '';
    })();
  }
  startEditItem(item) {
    this.editingItemId = item.id;
    this.editingItemName = item.name;
  }
  saveEditItem(item) {
    var _this2 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.editingItemName.trim() && _this2.editingItemName !== item.name) {
        yield _this2.sync.updateItem(item.id, {
          name: _this2.editingItemName.trim()
        });
      }
      _this2.editingItemId = null;
      _this2.editingItemName = '';
    })();
  }
  cancelEditItem() {
    this.editingItemId = null;
    this.editingItemName = '';
  }
  increaseQuantity(item) {
    var _this3 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (item.quantity < 1000) {
        yield _this3.sync.updateItem(item.id, {
          quantity: item.quantity + 1
        });
      }
    })();
  }
  decreaseQuantity(item) {
    var _this4 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (item.quantity > 0) {
        yield _this4.sync.updateItem(item.id, {
          quantity: item.quantity - 1
        });
      }
    })();
  }
  deleteItem(item) {
    var _this5 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (confirm(`Supprimer "${item.name}" de la liste?`)) {
        yield _this5.sync.deleteItem(item.id);
      }
    })();
  }
  moveUp(item) {
    var _this6 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentIndex = _this6.items.findIndex(i => i.id === item.id);
      if (currentIndex > 0) {
        const newItems = [..._this6.items];
        [newItems[currentIndex], newItems[currentIndex - 1]] = [newItems[currentIndex - 1], newItems[currentIndex]];
        yield _this6.sync.reorderItems(newItems);
      }
    })();
  }
  moveDown(item) {
    var _this7 = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentIndex = _this7.items.findIndex(i => i.id === item.id);
      if (currentIndex < _this7.items.length - 1) {
        const newItems = [..._this7.items];
        [newItems[currentIndex], newItems[currentIndex + 1]] = [newItems[currentIndex + 1], newItems[currentIndex]];
        yield _this7.sync.reorderItems(newItems);
      }
    })();
  }
  canMoveUp(item) {
    const index = this.items.findIndex(i => i.id === item.id);
    return index > 0;
  }
  canMoveDown(item) {
    const index = this.items.findIndex(i => i.id === item.id);
    return index < this.items.length - 1;
  }
  isEditing(item) {
    return this.editingItemId === item.id;
  }
  static {
    this.ɵfac = function PreparationComponent_Factory(t) {
      return new (t || PreparationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_sync_service__WEBPACK_IMPORTED_MODULE_2__.SyncService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PreparationComponent,
      selectors: [["app-preparation"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 4,
      consts: [[1, "preparation-container"], [1, "add-item-section"], ["type", "text", "placeholder", "Ajouter un article...", 1, "add-item-input", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "add-item-button", 3, "disabled", "click"], [1, "items-list"], ["class", "item-row", 3, "pending-sync", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "item-row"], [1, "item-content"], [1, "item-name-section"], ["type", "text", "class", "item-name-input", "autofocus", "", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup.escape", 4, "ngIf"], ["class", "item-name", 3, "click", 4, "ngIf"], [1, "item-controls"], [1, "quantity-controls"], [1, "quantity-button", 3, "disabled", "click"], [1, "quantity-display"], [1, "action-buttons"], ["class", "move-button", "title", "Monter", 3, "click", 4, "ngIf"], ["class", "move-button", "title", "Descendre", 3, "click", 4, "ngIf"], ["title", "Supprimer", 1, "delete-button", 3, "click"], ["class", "edit-actions", 4, "ngIf"], ["type", "text", "autofocus", "", 1, "item-name-input", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup.escape"], [1, "item-name", 3, "click"], ["title", "Monter", 1, "move-button", 3, "click"], ["title", "Descendre", 1, "move-button", 3, "click"], [1, "edit-actions"], [1, "save-button", 3, "click"], [1, "cancel-button", 3, "click"], [1, "empty-state"]],
      template: function PreparationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PreparationComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.newItemName = $event;
          })("keyup.enter", function PreparationComponent_Template_input_keyup_enter_3_listener() {
            return ctx.addItem();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PreparationComponent_Template_button_click_4_listener() {
            return ctx.addItem();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " + ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PreparationComponent_div_7_Template, 19, 10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PreparationComponent_div_8_Template, 5, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newItemName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.newItemName.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.items.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
      styles: [".preparation-container[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 16px;\n  min-height: 100vh;\n  background: #f5f5f5;\n}\n\n.add-item-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 16px;\n  background: white;\n  border-bottom: 1px solid #ddd;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  font-size: 16px;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4CAF50;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #45a049;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.items-list[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.item-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.item-row.pending-sync[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  border-left: 4px solid #FF9800;\n}\n.item-row[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.item-row[_ngcontent-%COMP%]   .item-name-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: var(--item-font-size, 16px);\n  cursor: pointer;\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  word-wrap: break-word;\n}\n.item-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.item-row[_ngcontent-%COMP%]   .item-name-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 2px solid #4CAF50;\n  border-radius: 4px;\n  font-size: var(--item-font-size, 16px);\n}\n.item-row[_ngcontent-%COMP%]   .item-name-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.item-row[_ngcontent-%COMP%]   .item-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.item-row[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.item-row[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.item-row[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1976D2;\n}\n.item-row[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.item-row[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-display[_ngcontent-%COMP%] {\n  min-width: 32px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n}\n.item-row[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.item-row[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.item-row[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.item-row[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button.move-button[_ngcontent-%COMP%] {\n  color: #666;\n}\n.item-row[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button.delete-button[_ngcontent-%COMP%] {\n  color: #F44336;\n  border-color: #F44336;\n}\n.item-row[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button.delete-button[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n}\n.item-row[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  gap: 8px;\n}\n.item-row[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.item-row[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n}\n.item-row[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\n.item-row[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  background: #ddd;\n  color: #333;\n}\n.item-row[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 16px;\n  color: #999;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n@media (max-width: 600px) {\n  .item-row[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .item-controls[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJlcGFyYXRpb24vcHJlcGFyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUNOO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRk47O0FBT0E7RUFDRSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFKRjtBQU1FO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUxKO0FBUUU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQU5KO0FBU0U7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFQSjtBQVNJO0VBQ0UsbUJBQUE7QUFQTjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFUSjtBQVdJO0VBQ0UsYUFBQTtBQVROO0FBYUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBWEo7QUFjRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFaSjtBQWNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWk47QUFjTTtFQUNFLG1CQUFBO0FBWlI7QUFlTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWJSO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZk47QUFtQkU7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQWpCSjtBQW1CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWpCTjtBQW1CTTtFQUNFLG1CQUFBO0FBakJSO0FBb0JNO0VBQ0UsV0FBQTtBQWxCUjtBQXFCTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQW5CUjtBQXFCUTtFQUNFLG1CQUFBO0FBbkJWO0FBeUJFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBdkJKO0FBeUJJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXZCTjtBQTBCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQXhCTjtBQTBCTTtFQUNFLG1CQUFBO0FBeEJSO0FBNEJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBMUJOO0FBNEJNO0VBQ0UsZ0JBQUE7QUExQlI7O0FBZ0NBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE3QkY7QUErQkU7RUFDRSxhQUFBO0FBN0JKOztBQWlDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFQTlCRjtFQWlDQTtJQUNFLDhCQUFBO0VBL0JGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlcGFyYXRpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLmFkZC1pdGVtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXG4gIC5hZGQtaXRlbS1pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzRDQUY1MDtcbiAgICB9XG4gIH1cblxuICAuYWRkLWl0ZW0tYnV0dG9uIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogIzQ1YTA0OTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG59XG5cbi5pdGVtcy1saXN0IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uaXRlbS1yb3cge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgJi5wZW5kaW5nLXN5bmMge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNGRjk4MDA7XG4gIH1cblxuICAuaXRlbS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5pdGVtLW5hbWUtc2VjdGlvbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cblxuICAuaXRlbS1uYW1lIHtcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tZm9udC1zaXplLCAxNnB4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgfVxuICB9XG5cbiAgLml0ZW0tbmFtZS1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS1mb250LXNpemUsIDE2cHgpO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnF1YW50aXR5LWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAucXVhbnRpdHktYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYmFja2dyb3VuZDogIzIxOTZGMztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTk3NkQyO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xdWFudGl0eS1kaXNwbGF5IHtcbiAgICAgIG1pbi13aWR0aDogMzJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAmLm1vdmUtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICB9XG5cbiAgICAgICYuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNDQzMzY7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZWJlZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lZGl0LWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5zYXZlLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ1YTA0OTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FuY2VsLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ4cHggMTZweDtcbiAgY29sb3I6ICM5OTk7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLml0ZW0tcm93IC5pdGVtLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuaXRlbS1jb250cm9scyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6951:
/*!*********************************************************!*\
  !*** ./src/app/features/shopping/shopping.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingComponent": () => (/* binding */ ShoppingComponent)
/* harmony export */ });
/* harmony import */ var C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sync.service */ 2815);






function ShoppingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShoppingComponent_div_3_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.toggleItemStatus(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.getItemStatusClass(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("strikethrough", ctx_r0.isStrikethrough(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.getItemStatusText(item_r2), " ");
  }
}
function ShoppingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Aucun article \u00E0 acheter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ajoutez des articles en mode pr\u00E9paration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ShoppingComponent {
  constructor(sync) {
    this.sync = sync;
    this.items = [];
    this.shoppingItems = [];
  }
  ngOnInit() {
    this.itemsSubscription = this.sync.getItems().subscribe(items => {
      this.items = items;
      this.shoppingItems = items.filter(item => item.quantity > 0);
    });
  }
  ngOnDestroy() {
    this.itemsSubscription?.unsubscribe();
  }
  toggleItemStatus(item) {
    var _this = this;
    return (0,C_dev_sholi_root_sholi_shopping_list_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const statusCycle = ['to_buy', 'found', 'not_found'];
      const currentIndex = statusCycle.indexOf(item.status);
      const nextIndex = (currentIndex + 1) % statusCycle.length;
      const nextStatus = statusCycle[nextIndex];
      yield _this.sync.updateItem(item.id, {
        status: nextStatus
      });
    })();
  }
  getItemStatusClass(item) {
    switch (item.status) {
      case 'to_buy':
        return 'status-to-buy';
      case 'found':
        return 'status-found';
      case 'not_found':
        return 'status-not-found';
      default:
        return '';
    }
  }
  getItemStatusText(item) {
    switch (item.status) {
      case 'to_buy':
        return 'À acheter';
      case 'found':
        return 'Trouvé';
      case 'not_found':
        return 'Non trouvé';
      default:
        return '';
    }
  }
  isStrikethrough(item) {
    return item.status === 'found' || item.status === 'not_found';
  }
  static {
    this.ɵfac = function ShoppingComponent_Factory(t) {
      return new (t || ShoppingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_sync_service__WEBPACK_IMPORTED_MODULE_2__.SyncService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ShoppingComponent,
      selectors: [["app-shopping"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 2,
      consts: [[1, "shopping-container"], [1, "items-list"], ["class", "item-row", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "item-row", 3, "ngClass", "click"], [1, "item-content"], [1, "item-name"], [1, "item-info"], [1, "quantity-badge"], [1, "status-text"], [1, "empty-state"]],
      template: function ShoppingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ShoppingComponent_div_3_Template, 9, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ShoppingComponent_div_4_Template, 5, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.shoppingItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shoppingItems.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
      styles: [".shopping-container[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 16px;\n  min-height: 100vh;\n  background: #f5f5f5;\n}\n\n.items-list[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.item-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.item-row[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.item-row.status-to-buy[_ngcontent-%COMP%] {\n  background: white;\n  border-left: 4px solid #2196F3;\n}\n.item-row.status-found[_ngcontent-%COMP%] {\n  background: #E8F5E9;\n  border-left: 4px solid #4CAF50;\n}\n.item-row.status-not-found[_ngcontent-%COMP%] {\n  background: #FFEBEE;\n  border-left: 4px solid #F44336;\n}\n.item-row[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.item-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--item-font-size, 16px);\n  font-weight: 500;\n  word-wrap: break-word;\n}\n.item-row[_ngcontent-%COMP%]   .item-name.strikethrough[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n.item-row[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.item-row[_ngcontent-%COMP%]   .quantity-badge[_ngcontent-%COMP%] {\n  background: #2196F3;\n  color: white;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n}\n.item-row[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  min-width: 80px;\n  text-align: right;\n}\n.item-row.status-found[_ngcontent-%COMP%]   .quantity-badge[_ngcontent-%COMP%] {\n  background: #4CAF50;\n}\n.item-row.status-found[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  font-weight: 500;\n}\n.item-row.status-not-found[_ngcontent-%COMP%]   .quantity-badge[_ngcontent-%COMP%] {\n  background: #F44336;\n}\n.item-row.status-not-found[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #F44336;\n  font-weight: 500;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 16px;\n  color: #999;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n@media (max-width: 600px) {\n  .item-row[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .item-info[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hvcHBpbmcvc2hvcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0UsT0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpKO0FBTUk7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUFKTjtBQVFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFOSjtBQVNFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUEo7QUFVRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUko7QUFZSTtFQUNFLG1CQUFBO0FBVk47QUFhSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQVhOO0FBZ0JJO0VBQ0UsbUJBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWZOOztBQW9CQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBakJGO0FBbUJFO0VBQ0UsYUFBQTtBQWpCSjs7QUFxQkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFsQkY7RUFxQkE7SUFDRSxXQUFBO0lBQ0EsOEJBQUE7RUFuQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wcGluZy1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4uaXRlbXMtbGlzdCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLml0ZW0tcm93IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxuXG4gICYuc3RhdHVzLXRvLWJ1eSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjE5NkYzO1xuICB9XG5cbiAgJi5zdGF0dXMtZm91bmQge1xuICAgIGJhY2tncm91bmQ6ICNFOEY1RTk7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNENBRjUwO1xuICB9XG5cbiAgJi5zdGF0dXMtbm90LWZvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZFQkVFO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0Y0NDMzNjtcbiAgfVxuXG4gIC5pdGVtLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLml0ZW0tbmFtZSB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tZm9udC1zaXplLCAxNnB4KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgICYuc3RyaWtldGhyb3VnaCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cblxuICAuaXRlbS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLnF1YW50aXR5LWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuc3RhdHVzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAmLnN0YXR1cy1mb3VuZCB7XG4gICAgLnF1YW50aXR5LWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgfVxuXG4gICAgLnN0YXR1cy10ZXh0IHtcbiAgICAgIGNvbG9yOiAjNENBRjUwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuICAmLnN0YXR1cy1ub3QtZm91bmQge1xuICAgIC5xdWFudGl0eS1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuICAgIH1cblxuICAgIC5zdGF0dXMtdGV4dCB7XG4gICAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDhweCAxNnB4O1xuICBjb2xvcjogIzk5OTtcblxuICBwIHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaXRlbS1yb3cgLml0ZW0tY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5pdGVtLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/storage.service */ 2323);
/* harmony import */ var _core_services_sync_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/sync.service */ 2815);








function HeaderComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\uD83D\uDED2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor(storage, sync, router) {
    this.storage = storage;
    this.sync = sync;
    this.router = router;
    this.currentMode = 'preparation';
    this.fontSize = 16;
    this.syncStatus = 'synced';
  }
  ngOnInit() {
    this.fontSize = this.storage.getFontSize();
    this.syncSubscription = this.sync.getSyncStatus().subscribe(status => {
      this.syncStatus = status;
    });
    this.routerSubscription = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(event => {
      if (event.url.includes('/shopping')) {
        this.currentMode = 'shopping';
      } else if (event.url.includes('/preparation')) {
        this.currentMode = 'preparation';
      }
    });
    const currentUrl = this.router.url;
    if (currentUrl.includes('/shopping')) {
      this.currentMode = 'shopping';
    } else if (currentUrl.includes('/preparation')) {
      this.currentMode = 'preparation';
    }
  }
  ngOnDestroy() {
    this.syncSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }
  toggleMode() {
    if (this.currentMode === 'preparation') {
      this.router.navigate(['/shopping']);
    } else {
      this.router.navigate(['/preparation']);
    }
  }
  increaseFontSize() {
    if (this.fontSize < 24) {
      this.fontSize++;
      this.storage.setFontSize(this.fontSize);
      this.applyFontSize();
    }
  }
  decreaseFontSize() {
    if (this.fontSize > 12) {
      this.fontSize--;
      this.storage.setFontSize(this.fontSize);
      this.applyFontSize();
    }
  }
  goToAdmin() {
    this.router.navigate(['/admin']);
  }
  applyFontSize() {
    document.documentElement.style.setProperty('--item-font-size', `${this.fontSize}px`);
  }
  getSyncStatusClass() {
    switch (this.syncStatus) {
      case 'synced':
        return 'sync-synced';
      case 'pending':
        return 'sync-pending';
      case 'error':
        return 'sync-error';
      default:
        return '';
    }
  }
  getSyncStatusTitle() {
    switch (this.syncStatus) {
      case 'synced':
        return 'Synchronisé';
      case 'pending':
        return 'Synchronisation en attente';
      case 'error':
        return 'Erreur de synchronisation';
      default:
        return '';
    }
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_sync_service__WEBPACK_IMPORTED_MODULE_1__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 7,
      consts: [[1, "app-header"], [1, "mode-toggle", 3, "title", "click"], ["class", "icon", 4, "ngIf"], [1, "font-controls"], ["title", "Diminuer la taille du texte", 3, "disabled", "click"], ["title", "Augmenter la taille du texte", 3, "disabled", "click"], [1, "sync-indicator", 3, "ngClass", "title"], [1, "sync-dot"], ["title", "Param\u00E8tres", 1, "admin-button", 3, "click"], [1, "icon"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() {
            return ctx.toggleMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_span_2_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_span_3_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() {
            return ctx.decreaseFontSize();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " A- ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
            return ctx.increaseFontSize();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " A+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() {
            return ctx.goToAdmin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u2699\uFE0F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.currentMode === "preparation" ? "Passer en mode r\u00E9alisation" : "Passer en mode pr\u00E9paration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentMode === "preparation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentMode === "shopping");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fontSize <= 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fontSize >= 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getSyncStatusClass())("title", ctx.getSyncStatusTitle());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: [".app-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 56px;\n  background: #4CAF50;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n.app-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 8px;\n  min-width: 48px;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n.app-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.1);\n}\n.app-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.app-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.app-header[_ngcontent-%COMP%]   .font-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.app-header[_ngcontent-%COMP%]   .font-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  min-width: 40px;\n}\n.app-header[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 48px;\n  min-height: 48px;\n}\n.app-header[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%]   .sync-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: white;\n}\n.app-header[_ngcontent-%COMP%]   .sync-indicator.sync-synced[_ngcontent-%COMP%]   .sync-dot[_ngcontent-%COMP%] {\n  background: #8BC34A;\n}\n.app-header[_ngcontent-%COMP%]   .sync-indicator.sync-pending[_ngcontent-%COMP%]   .sync-dot[_ngcontent-%COMP%] {\n  background: #FF9800;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n.app-header[_ngcontent-%COMP%]   .sync-indicator.sync-error[_ngcontent-%COMP%]   .sync-dot[_ngcontent-%COMP%] {\n  background: #F44336;\n}\n.app-header[_ngcontent-%COMP%]   .admin-button[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQ0k7RUFDRSxvQ0FBQTtBQUNOO0FBRUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQUxKO0FBT0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTE47QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFTSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVBOO0FBVUk7RUFDRSxtQkFBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0FBVE47QUFZSTtFQUNFLG1CQUFBO0FBVk47QUFjRTtFQUNFLGVBQUE7QUFaSjs7QUFnQkE7RUFDRTtJQUNFLFVBQUE7RUFiRjtFQWVBO0lBQ0UsWUFBQTtFQWJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1pbi13aWR0aDogNDhweDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RlLXRvZ2dsZSB7XG4gICAgLmljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb250LWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zeW5jLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogNDhweDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuXG4gICAgLnN5bmMtZG90IHtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5zeW5jLXN5bmNlZCAuc3luYy1kb3Qge1xuICAgICAgYmFja2dyb3VuZDogIzhCQzM0QTtcbiAgICB9XG5cbiAgICAmLnN5bmMtcGVuZGluZyAuc3luYy1kb3Qge1xuICAgICAgYmFja2dyb3VuZDogI0ZGOTgwMDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmLnN5bmMtZXJyb3IgLnN5bmMtZG90IHtcbiAgICAgIGJhY2tncm91bmQ6ICNGNDQzMzY7XG4gICAgfVxuICB9XG5cbiAgLmFkbWluLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  supabase: {
    url: 'https://kubzebwwvolefcwxbolk.supabase.co',
    anonKey: 'sb_publishable__X-eNqQm91pJ-nxA4Hsj7w_ebT6HqM1'
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ngsw-worker.js');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map