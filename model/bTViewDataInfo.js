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
exports.BTViewDataInfo = void 0;
var BTViewDataInfo = /** @class */ (function () {
    function BTViewDataInfo() {
    }
    BTViewDataInfo.getAttributeTypeMap = function () {
        return BTViewDataInfo.attributeTypeMap;
    };
    BTViewDataInfo.discriminator = undefined;
    BTViewDataInfo.attributeTypeMap = [
        {
            "name": "isPerspective",
            "baseName": "isPerspective",
            "type": "boolean"
        },
        {
            "name": "cameraViewport",
            "baseName": "cameraViewport",
            "type": "Array<number>"
        },
        {
            "name": "angle",
            "baseName": "angle",
            "type": "number"
        },
        {
            "name": "viewMatrix",
            "baseName": "viewMatrix",
            "type": "Array<number>"
        }
    ];
    return BTViewDataInfo;
}());
exports.BTViewDataInfo = BTViewDataInfo;