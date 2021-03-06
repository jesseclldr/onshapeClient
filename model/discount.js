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
exports.Discount = void 0;
var Discount = /** @class */ (function () {
    function Discount() {
    }
    Discount.getAttributeTypeMap = function () {
        return Discount.attributeTypeMap;
    };
    Discount.discriminator = undefined;
    Discount.attributeTypeMap = [
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
            "name": "coupon",
            "baseName": "coupon",
            "type": "Coupon"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        }
    ];
    return Discount;
}());
exports.Discount = Discount;
