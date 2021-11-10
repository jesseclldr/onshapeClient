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
exports.BTGlobalTreeNodeOwnerParams = void 0;
var BTGlobalTreeNodeOwnerParams = /** @class */ (function () {
    function BTGlobalTreeNodeOwnerParams() {
    }
    BTGlobalTreeNodeOwnerParams.getAttributeTypeMap = function () {
        return BTGlobalTreeNodeOwnerParams.attributeTypeMap;
    };
    BTGlobalTreeNodeOwnerParams.discriminator = undefined;
    BTGlobalTreeNodeOwnerParams.attributeTypeMap = [
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "newOwnerId",
            "baseName": "newOwnerId",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string"
        },
        {
            "name": "newOwnerType",
            "baseName": "newOwnerType",
            "type": "number"
        }
    ];
    return BTGlobalTreeNodeOwnerParams;
}());
exports.BTGlobalTreeNodeOwnerParams = BTGlobalTreeNodeOwnerParams;