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
exports.BTSystemConfigInfo = void 0;
var BTSystemConfigInfo = /** @class */ (function () {
    function BTSystemConfigInfo() {
    }
    BTSystemConfigInfo.getAttributeTypeMap = function () {
        return BTSystemConfigInfo.attributeTypeMap;
    };
    BTSystemConfigInfo.discriminator = undefined;
    BTSystemConfigInfo.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }
    ];
    return BTSystemConfigInfo;
}());
exports.BTSystemConfigInfo = BTSystemConfigInfo;
