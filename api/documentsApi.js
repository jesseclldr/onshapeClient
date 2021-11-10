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
exports.DocumentsApi = exports.DocumentsApiApiKeys = void 0;
var localVarRequest = require("request");
var Promise = require("bluebird");
var models_1 = require("../model/models");
var defaultBasePath = 'http://localhost';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var DocumentsApiApiKeys;
(function (DocumentsApiApiKeys) {
})(DocumentsApiApiKeys = exports.DocumentsApiApiKeys || (exports.DocumentsApiApiKeys = {}));
var DocumentsApi = /** @class */ (function () {
    function DocumentsApi(basePathOrUsername, password, basePath) {
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
    Object.defineProperty(DocumentsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    DocumentsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DocumentsApi.prototype.setApiKey = function (key, value) {
        this.authentications[DocumentsApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(DocumentsApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.OAuth2.accessToken = token;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @summary Get Documents
     * @param q
     * @param filter
     * @param owner
     * @param ownerType
     * @param sortColumn
     * @param sortOrder
     * @param offset
     * @param limit
     * @param label
     * @param project
     * @param parentId
     */
    DocumentsApi.prototype.getDocuments = function (q, filter, owner, ownerType, sortColumn, sortOrder, offset, limit, label, project, parentId) {
        var localVarPath = this.basePath + '/api/documents';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (q !== undefined) {
            localVarQueryParameters['q'] = models_1.ObjectSerializer.serialize(q, "string");
        }
        if (filter !== undefined) {
            localVarQueryParameters['filter'] = models_1.ObjectSerializer.serialize(filter, "number");
        }
        if (owner !== undefined) {
            localVarQueryParameters['owner'] = models_1.ObjectSerializer.serialize(owner, "string");
        }
        if (ownerType !== undefined) {
            localVarQueryParameters['ownerType'] = models_1.ObjectSerializer.serialize(ownerType, "number");
        }
        if (sortColumn !== undefined) {
            localVarQueryParameters['sortColumn'] = models_1.ObjectSerializer.serialize(sortColumn, "string");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sortOrder'] = models_1.ObjectSerializer.serialize(sortOrder, "string");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
        }
        if (label !== undefined) {
            localVarQueryParameters['label'] = models_1.ObjectSerializer.serialize(label, "string");
        }
        if (project !== undefined) {
            localVarQueryParameters['project'] = models_1.ObjectSerializer.serialize(project, "string");
        }
        if (parentId !== undefined) {
            localVarQueryParameters['parentId'] = models_1.ObjectSerializer.serialize(parentId, "string");
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
                    body = models_1.ObjectSerializer.deserialize(body, "BTGlobalTreeNodeListResponse");
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
    return DocumentsApi;
}());
exports.DocumentsApi = DocumentsApi;