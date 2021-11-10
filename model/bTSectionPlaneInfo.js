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
exports.BTSectionPlaneInfo = void 0;
var BTSectionPlaneInfo = /** @class */ (function () {
    function BTSectionPlaneInfo() {
    }
    BTSectionPlaneInfo.getAttributeTypeMap = function () {
        return BTSectionPlaneInfo.attributeTypeMap;
    };
    BTSectionPlaneInfo.discriminator = undefined;
    BTSectionPlaneInfo.attributeTypeMap = [
        {
            "name": "center",
            "baseName": "center",
            "type": "Array<number>"
        },
        {
            "name": "normal",
            "baseName": "normal",
            "type": "Array<number>"
        },
        {
            "name": "tangent",
            "baseName": "tangent",
            "type": "Array<number>"
        }
    ];
    return BTSectionPlaneInfo;
}());
exports.BTSectionPlaneInfo = BTSectionPlaneInfo;
