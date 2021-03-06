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
exports.BTRbacRoleParams = void 0;
var BTRbacRoleParams = /** @class */ (function () {
    function BTRbacRoleParams() {
    }
    BTRbacRoleParams.getAttributeTypeMap = function () {
        return BTRbacRoleParams.attributeTypeMap;
    };
    BTRbacRoleParams.discriminator = undefined;
    BTRbacRoleParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }
    ];
    return BTRbacRoleParams;
}());
exports.BTRbacRoleParams = BTRbacRoleParams;
