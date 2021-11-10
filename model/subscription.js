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
exports.Subscription = void 0;
var Subscription = /** @class */ (function () {
    function Subscription() {
    }
    Subscription.getAttributeTypeMap = function () {
        return Subscription.attributeTypeMap;
    };
    Subscription.discriminator = undefined;
    Subscription.attributeTypeMap = [
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
            "name": "applicationFeePercent",
            "baseName": "applicationFeePercent",
            "type": "number"
        },
        {
            "name": "billing",
            "baseName": "billing",
            "type": "string"
        },
        {
            "name": "cancelAtPeriodEnd",
            "baseName": "cancelAtPeriodEnd",
            "type": "boolean"
        },
        {
            "name": "canceledAt",
            "baseName": "canceledAt",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currentPeriodEnd",
            "baseName": "currentPeriodEnd",
            "type": "number"
        },
        {
            "name": "currentPeriodStart",
            "baseName": "currentPeriodStart",
            "type": "number"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "daysUntilDue",
            "baseName": "daysUntilDue",
            "type": "number"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "Discount"
        },
        {
            "name": "endedAt",
            "baseName": "endedAt",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Plan"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "taxPercent",
            "baseName": "taxPercent",
            "type": "number"
        },
        {
            "name": "trialEnd",
            "baseName": "trialEnd",
            "type": "number"
        },
        {
            "name": "trialStart",
            "baseName": "trialStart",
            "type": "number"
        },
        {
            "name": "customerObject",
            "baseName": "customerObject",
            "type": "Customer"
        },
        {
            "name": "subscriptionItems",
            "baseName": "subscriptionItems",
            "type": "SubscriptionItemCollection"
        }
    ];
    return Subscription;
}());
exports.Subscription = Subscription;