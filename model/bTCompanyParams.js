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
exports.BTCompanyParams = void 0;
var BTCompanyParams = /** @class */ (function () {
    function BTCompanyParams() {
    }
    BTCompanyParams.getAttributeTypeMap = function () {
        return BTCompanyParams.attributeTypeMap;
    };
    BTCompanyParams.discriminator = undefined;
    BTCompanyParams.attributeTypeMap = [
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
            "name": "address",
            "baseName": "address",
            "type": "BTAddressInfo"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "domainPrefix",
            "baseName": "domainPrefix",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        }
    ];
    return BTCompanyParams;
}());
exports.BTCompanyParams = BTCompanyParams;