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
exports.BTCapabilityCheckParams = void 0;
var BTCapabilityCheckParams = /** @class */ (function () {
    function BTCapabilityCheckParams() {
    }
    BTCapabilityCheckParams.getAttributeTypeMap = function () {
        return BTCapabilityCheckParams.attributeTypeMap;
    };
    BTCapabilityCheckParams.discriminator = undefined;
    BTCapabilityCheckParams.attributeTypeMap = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "Array<string>"
        }
    ];
    return BTCapabilityCheckParams;
}());
exports.BTCapabilityCheckParams = BTCapabilityCheckParams;
