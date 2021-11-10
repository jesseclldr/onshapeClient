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
exports.BTUpdateRbacRoleParams = void 0;
var BTUpdateRbacRoleParams = /** @class */ (function () {
    function BTUpdateRbacRoleParams() {
    }
    BTUpdateRbacRoleParams.getAttributeTypeMap = function () {
        return BTUpdateRbacRoleParams.attributeTypeMap;
    };
    BTUpdateRbacRoleParams.discriminator = undefined;
    BTUpdateRbacRoleParams.attributeTypeMap = [
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
    return BTUpdateRbacRoleParams;
}());
exports.BTUpdateRbacRoleParams = BTUpdateRbacRoleParams;