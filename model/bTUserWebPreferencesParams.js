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
exports.BTUserWebPreferencesParams = void 0;
var BTUserWebPreferencesParams = /** @class */ (function () {
    function BTUserWebPreferencesParams() {
    }
    BTUserWebPreferencesParams.getAttributeTypeMap = function () {
        return BTUserWebPreferencesParams.attributeTypeMap;
    };
    BTUserWebPreferencesParams.discriminator = undefined;
    BTUserWebPreferencesParams.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "preferenceName",
            "baseName": "preferenceName",
            "type": "string"
        },
        {
            "name": "retinaDisplaySetting",
            "baseName": "retinaDisplaySetting",
            "type": "string"
        }
    ];
    return BTUserWebPreferencesParams;
}());
exports.BTUserWebPreferencesParams = BTUserWebPreferencesParams;
