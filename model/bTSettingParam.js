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
exports.BTSettingParam = void 0;
var BTSettingParam = /** @class */ (function () {
    function BTSettingParam() {
    }
    BTSettingParam.getAttributeTypeMap = function () {
        return BTSettingParam.attributeTypeMap;
    };
    BTSettingParam.discriminator = undefined;
    BTSettingParam.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "any"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        }
    ];
    return BTSettingParam;
}());
exports.BTSettingParam = BTSettingParam;
