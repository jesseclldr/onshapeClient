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
exports.BTUserNotificationPrefParams = void 0;
var BTUserNotificationPrefParams = /** @class */ (function () {
    function BTUserNotificationPrefParams() {
    }
    BTUserNotificationPrefParams.getAttributeTypeMap = function () {
        return BTUserNotificationPrefParams.attributeTypeMap;
    };
    BTUserNotificationPrefParams.discriminator = undefined;
    BTUserNotificationPrefParams.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number"
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "number"
        },
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        }
    ];
    return BTUserNotificationPrefParams;
}());
exports.BTUserNotificationPrefParams = BTUserNotificationPrefParams;
