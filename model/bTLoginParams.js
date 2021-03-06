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
exports.BTLoginParams = void 0;
var BTLoginParams = /** @class */ (function () {
    function BTLoginParams() {
    }
    BTLoginParams.getAttributeTypeMap = function () {
        return BTLoginParams.attributeTypeMap;
    };
    BTLoginParams.discriminator = undefined;
    BTLoginParams.attributeTypeMap = [
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string"
        },
        {
            "name": "randomToken",
            "baseName": "randomToken",
            "type": "string"
        },
        {
            "name": "totp",
            "baseName": "totp",
            "type": "string"
        },
        {
            "name": "enableTotp",
            "baseName": "enableTotp",
            "type": "boolean"
        },
        {
            "name": "rememberTotp",
            "baseName": "rememberTotp",
            "type": "boolean"
        },
        {
            "name": "webClientCapabilities",
            "baseName": "webClientCapabilities",
            "type": "BTWebClientCapabilitiesParams"
        },
        {
            "name": "rendererPerformanceMeasurement",
            "baseName": "rendererPerformanceMeasurement",
            "type": "BTWebRendererPerformanceMeasurementParams"
        }
    ];
    return BTLoginParams;
}());
exports.BTLoginParams = BTLoginParams;
