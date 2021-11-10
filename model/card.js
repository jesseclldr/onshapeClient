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
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.getAttributeTypeMap = function () {
        return Card.attributeTypeMap;
    };
    Card.discriminator = undefined;
    Card.attributeTypeMap = [
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
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "addressCity",
            "baseName": "addressCity",
            "type": "string"
        },
        {
            "name": "addressCountry",
            "baseName": "addressCountry",
            "type": "string"
        },
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string"
        },
        {
            "name": "addressLine1Check",
            "baseName": "addressLine1Check",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string"
        },
        {
            "name": "addressState",
            "baseName": "addressState",
            "type": "string"
        },
        {
            "name": "addressZip",
            "baseName": "addressZip",
            "type": "string"
        },
        {
            "name": "addressZipCheck",
            "baseName": "addressZipCheck",
            "type": "string"
        },
        {
            "name": "availablePayoutMethods",
            "baseName": "availablePayoutMethods",
            "type": "Array<string>"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "cvcCheck",
            "baseName": "cvcCheck",
            "type": "string"
        },
        {
            "name": "defaultForCurrency",
            "baseName": "defaultForCurrency",
            "type": "boolean"
        },
        {
            "name": "dynamicLast4",
            "baseName": "dynamicLast4",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "expMonth",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "expYear",
            "type": "number"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "funding",
            "baseName": "funding",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "threeDSecure",
            "baseName": "threeDSecure",
            "type": "ThreeDSecure"
        },
        {
            "name": "tokenizationMethod",
            "baseName": "tokenizationMethod",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "iin",
            "baseName": "iin",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "instanceURL",
            "baseName": "instanceURL",
            "type": "string"
        }
    ];
    return Card;
}());
exports.Card = Card;