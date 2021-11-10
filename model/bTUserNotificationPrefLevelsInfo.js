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
exports.BTUserNotificationPrefLevelsInfo = void 0;
var BTUserNotificationPrefLevelsInfo = /** @class */ (function () {
    function BTUserNotificationPrefLevelsInfo() {
    }
    BTUserNotificationPrefLevelsInfo.getAttributeTypeMap = function () {
        return BTUserNotificationPrefLevelsInfo.attributeTypeMap;
    };
    BTUserNotificationPrefLevelsInfo.discriminator = undefined;
    BTUserNotificationPrefLevelsInfo.attributeTypeMap = [
        {
            "name": "levelsInfoList",
            "baseName": "levelsInfoList",
            "type": "Array<LevelInfo>"
        }
    ];
    return BTUserNotificationPrefLevelsInfo;
}());
exports.BTUserNotificationPrefLevelsInfo = BTUserNotificationPrefLevelsInfo;
