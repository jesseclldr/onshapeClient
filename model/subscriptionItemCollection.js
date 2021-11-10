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
exports.SubscriptionItemCollection = void 0;
var SubscriptionItemCollection = /** @class */ (function () {
    function SubscriptionItemCollection() {
    }
    SubscriptionItemCollection.getAttributeTypeMap = function () {
        return SubscriptionItemCollection.attributeTypeMap;
    };
    SubscriptionItemCollection.discriminator = undefined;
    SubscriptionItemCollection.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<SubscriptionItem>"
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number"
        },
        {
            "name": "hasMore",
            "baseName": "hasMore",
            "type": "boolean"
        },
        {
            "name": "_requestOptions",
            "baseName": "requestOptions",
            "type": "RequestOptions"
        },
        {
            "name": "requestParams",
            "baseName": "requestParams",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }
    ];
    return SubscriptionItemCollection;
}());
exports.SubscriptionItemCollection = SubscriptionItemCollection;
