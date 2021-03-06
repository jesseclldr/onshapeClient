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
exports.Coupon = void 0;
var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    Coupon.getAttributeTypeMap = function () {
        return Coupon.attributeTypeMap;
    };
    Coupon.discriminator = undefined;
    Coupon.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "amountOff",
            "baseName": "amountOff",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "durationInMonths",
            "baseName": "durationInMonths",
            "type": "number"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "maxRedemptions",
            "baseName": "maxRedemptions",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "percentOff",
            "baseName": "percentOff",
            "type": "number"
        },
        {
            "name": "redeemBy",
            "baseName": "redeemBy",
            "type": "number"
        },
        {
            "name": "timesRedeemed",
            "baseName": "timesRedeemed",
            "type": "number"
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean"
        }
    ];
    return Coupon;
}());
exports.Coupon = Coupon;
