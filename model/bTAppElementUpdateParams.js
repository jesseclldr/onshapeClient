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
exports.BTAppElementUpdateParams = void 0;
var BTAppElementUpdateParams = /** @class */ (function () {
    function BTAppElementUpdateParams() {
    }
    BTAppElementUpdateParams.getAttributeTypeMap = function () {
        return BTAppElementUpdateParams.attributeTypeMap;
    };
    BTAppElementUpdateParams.discriminator = undefined;
    BTAppElementUpdateParams.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "changes",
            "baseName": "changes",
            "type": "Array<BTAppElementChangeParams>"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "parentChangeId",
            "baseName": "parentChangeId",
            "type": "string"
        },
        {
            "name": "returnError",
            "baseName": "returnError",
            "type": "boolean"
        }
    ];
    return BTAppElementUpdateParams;
}());
exports.BTAppElementUpdateParams = BTAppElementUpdateParams;
