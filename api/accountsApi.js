"use strict";
/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.93
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsApi = exports.AccountsApiApiKeys = void 0;
var localVarRequest = require("request");
var Promise = require("bluebird");
var models_1 = require("../model/models");
var defaultBasePath = 'http://localhost';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var AccountsApiApiKeys;
(function (AccountsApiApiKeys) {
})(AccountsApiApiKeys = exports.AccountsApiApiKeys || (exports.AccountsApiApiKeys = {}));
var AccountsApi = /** @class */ (function () {
    function AccountsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'OAuth2': new models_1.OAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(AccountsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    AccountsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    AccountsApi.prototype.setApiKey = function (key, value) {
        this.authentications[AccountsApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(AccountsApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.OAuth2.accessToken = token;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @summary Cancel Recurring Subscription
     * @param aid
     * @param pid
     * @param cancelImmediately
     */
    AccountsApi.prototype.cancelPurchaseNew = function (aid, pid, cancelImmediately) {
        var localVarPath = this.basePath + '/api/accounts/{aid}/purchases/{pid}'
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new Error('Required parameter aid was null or undefined when calling cancelPurchaseNew.');
        }
        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new Error('Required parameter pid was null or undefined when calling cancelPurchaseNew.');
        }
        if (cancelImmediately !== undefined) {
            localVarQueryParameters['cancelImmediately'] = models_1.ObjectSerializer.serialize(cancelImmediately, "boolean");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Mark Purchase Consumed For User
     * @param pid
     * @param bTPurchaseUserParams
     */
    AccountsApi.prototype.consumePurchase = function (pid, bTPurchaseUserParams) {
        var localVarPath = this.basePath + '/api/accounts/purchases/{pid}/consume'
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new Error('Required parameter pid was null or undefined when calling consumePurchase.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(bTPurchaseUserParams, "BTPurchaseUserParams")
        };
        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "BTPurchaseInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Get Plan Purchases
     * @param planId
     * @param offset
     * @param limit
     */
    AccountsApi.prototype.getPlanPurchases = function (planId, offset, limit) {
        var localVarPath = this.basePath + '/api/accounts/plans/{planId}/purchases'
            .replace('{' + 'planId' + '}', encodeURIComponent(String(planId)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        // verify required parameter 'planId' is not null or undefined
        if (planId === null || planId === undefined) {
            throw new Error('Required parameter planId was null or undefined when calling getPlanPurchases.');
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "BTListResponseBTPurchaseInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Get User's Appstore Purchases.
     * @param all
     * @param ownPurchaseOnly
     */
    AccountsApi.prototype.getPurchases = function (all, ownPurchaseOnly) {
        var localVarPath = this.basePath + '/api/accounts/purchases';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (all !== undefined) {
            localVarQueryParameters['all'] = models_1.ObjectSerializer.serialize(all, "boolean");
        }
        if (ownPurchaseOnly !== undefined) {
            localVarQueryParameters['ownPurchaseOnly'] = models_1.ObjectSerializer.serialize(ownPurchaseOnly, "boolean");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "Array<BTPurchaseInfo>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return AccountsApi;
}());
exports.AccountsApi = AccountsApi;
