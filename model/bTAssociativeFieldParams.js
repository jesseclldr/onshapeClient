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
exports.BTAssociativeFieldParams = void 0;
var BTAssociativeFieldParams = /** @class */ (function () {
    function BTAssociativeFieldParams() {
    }
    BTAssociativeFieldParams.getAttributeTypeMap = function () {
        return BTAssociativeFieldParams.attributeTypeMap;
    };
    BTAssociativeFieldParams.discriminator = undefined;
    BTAssociativeFieldParams.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<string>"
        }
    ];
    return BTAssociativeFieldParams;
}());
exports.BTAssociativeFieldParams = BTAssociativeFieldParams;
