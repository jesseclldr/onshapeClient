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
exports.BTDocumentSearchParams = void 0;
var BTDocumentSearchParams = /** @class */ (function () {
    function BTDocumentSearchParams() {
    }
    BTDocumentSearchParams.getAttributeTypeMap = function () {
        return BTDocumentSearchParams.attributeTypeMap;
    };
    BTDocumentSearchParams.discriminator = undefined;
    BTDocumentSearchParams.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "rawQuery",
            "baseName": "rawQuery",
            "type": "string"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "documentFilter",
            "baseName": "documentFilter",
            "type": "number"
        },
        {
            "name": "sortColumn",
            "baseName": "sortColumn",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "string"
        },
        {
            "name": "foundIn",
            "baseName": "foundIn",
            "type": "BTDocumentSearchParams.FoundInEnum"
        },
        {
            "name": "when",
            "baseName": "when",
            "type": "BTDocumentSearchParams.WhenEnum"
        }
    ];
    return BTDocumentSearchParams;
}());
exports.BTDocumentSearchParams = BTDocumentSearchParams;
(function (BTDocumentSearchParams) {
    var FoundInEnum;
    (function (FoundInEnum) {
        FoundInEnum[FoundInEnum["ALL"] = 'ALL'] = "ALL";
        FoundInEnum[FoundInEnum["WORKSPACES"] = 'WORKSPACES'] = "WORKSPACES";
        FoundInEnum[FoundInEnum["VERSIONS"] = 'VERSIONS'] = "VERSIONS";
    })(FoundInEnum = BTDocumentSearchParams.FoundInEnum || (BTDocumentSearchParams.FoundInEnum = {}));
    var WhenEnum;
    (function (WhenEnum) {
        WhenEnum[WhenEnum["ALL"] = 'ALL'] = "ALL";
        WhenEnum[WhenEnum["LATEST"] = 'LATEST'] = "LATEST";
        WhenEnum[WhenEnum["LATESTPERHIT"] = 'LATEST_PER_HIT'] = "LATESTPERHIT";
    })(WhenEnum = BTDocumentSearchParams.WhenEnum || (BTDocumentSearchParams.WhenEnum = {}));
})(BTDocumentSearchParams = exports.BTDocumentSearchParams || (exports.BTDocumentSearchParams = {}));
exports.BTDocumentSearchParams = BTDocumentSearchParams;
