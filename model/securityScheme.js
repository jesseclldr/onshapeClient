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
exports.SecurityScheme = void 0;
var SecurityScheme = /** @class */ (function () {
    function SecurityScheme() {
    }
    SecurityScheme.getAttributeTypeMap = function () {
        return SecurityScheme.attributeTypeMap;
    };
    SecurityScheme.discriminator = undefined;
    SecurityScheme.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SecurityScheme.TypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "get$ref",
            "baseName": "get$ref",
            "type": "string"
        },
        {
            "name": "_in",
            "baseName": "in",
            "type": "SecurityScheme.InEnum"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string"
        },
        {
            "name": "bearerFormat",
            "baseName": "bearerFormat",
            "type": "string"
        },
        {
            "name": "flows",
            "baseName": "flows",
            "type": "OAuthFlows"
        },
        {
            "name": "openIdConnectUrl",
            "baseName": "openIdConnectUrl",
            "type": "string"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return SecurityScheme;
}());
exports.SecurityScheme = SecurityScheme;
(function (SecurityScheme) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ApiKey"] = 'apiKey'] = "ApiKey";
        TypeEnum[TypeEnum["Http"] = 'http'] = "Http";
        TypeEnum[TypeEnum["Oauth2"] = 'oauth2'] = "Oauth2";
        TypeEnum[TypeEnum["OpenIdConnect"] = 'openIdConnect'] = "OpenIdConnect";
    })(TypeEnum = SecurityScheme.TypeEnum || (SecurityScheme.TypeEnum = {}));
    var InEnum;
    (function (InEnum) {
        InEnum[InEnum["Cookie"] = 'cookie'] = "Cookie";
        InEnum[InEnum["Header"] = 'header'] = "Header";
        InEnum[InEnum["Query"] = 'query'] = "Query";
    })(InEnum = SecurityScheme.InEnum || (SecurityScheme.InEnum = {}));
})(SecurityScheme = exports.SecurityScheme || (exports.SecurityScheme = {}));
exports.SecurityScheme = SecurityScheme;
