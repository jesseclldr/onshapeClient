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
exports.BTPurchaseInfo = void 0;
var BTPurchaseInfo = /** @class */ (function () {
    function BTPurchaseInfo() {
    }
    BTPurchaseInfo.getAttributeTypeMap = function () {
        return BTPurchaseInfo.attributeTypeMap;
    };
    BTPurchaseInfo.discriminator = undefined;
    BTPurchaseInfo.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "lastModified",
            "baseName": "lastModified",
            "type": "Date"
        },
        {
            "name": "subscriptionFields",
            "baseName": "subscriptionFields",
            "type": "Subscription"
        },
        {
            "name": "purchaseDate",
            "baseName": "purchaseDate",
            "type": "Date"
        },
        {
            "name": "subscribers",
            "baseName": "subscribers",
            "type": "Array<BTPlanSubscriberInfo>"
        },
        {
            "name": "pendingCancelation",
            "baseName": "pendingCancelation",
            "type": "boolean"
        },
        {
            "name": "nextCharge",
            "baseName": "nextCharge",
            "type": "NextCharge"
        },
        {
            "name": "proratedCharges",
            "baseName": "proratedCharges",
            "type": "Array<ProratedCharges>"
        },
        {
            "name": "proratedTotal",
            "baseName": "proratedTotal",
            "type": "number"
        },
        {
            "name": "couponAmountOff",
            "baseName": "couponAmountOff",
            "type": "number"
        },
        {
            "name": "durationMonths",
            "baseName": "durationMonths",
            "type": "number"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "lightSeats",
            "baseName": "lightSeats",
            "type": "number"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "BTBillingPlanInfo"
        },
        {
            "name": "seats",
            "baseName": "seats",
            "type": "number"
        },
        {
            "name": "subscriptionBeginAt",
            "baseName": "subscriptionBeginAt",
            "type": "Date"
        },
        {
            "name": "subscriptionEndAt",
            "baseName": "subscriptionEndAt",
            "type": "Date"
        },
        {
            "name": "subscriptionId",
            "baseName": "subscriptionId",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "BTAPIApplicationSummaryInfo"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string"
        },
        {
            "name": "paymentType",
            "baseName": "paymentType",
            "type": "number"
        },
        {
            "name": "amountCents",
            "baseName": "amountCents",
            "type": "number"
        },
        {
            "name": "planType",
            "baseName": "planType",
            "type": "number"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "BTCardInfo"
        },
        {
            "name": "canceledAt",
            "baseName": "canceledAt",
            "type": "Date"
        },
        {
            "name": "couponPercentOff",
            "baseName": "couponPercentOff",
            "type": "number"
        },
        {
            "name": "planName",
            "baseName": "planName",
            "type": "string"
        },
        {
            "name": "actualAmountPaidCents",
            "baseName": "actualAmountPaidCents",
            "type": "number"
        },
        {
            "name": "resellerName",
            "baseName": "resellerName",
            "type": "string"
        },
        {
            "name": "trialEnd",
            "baseName": "trialEnd",
            "type": "Date"
        },
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
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }
    ];
    return BTPurchaseInfo;
}());
exports.BTPurchaseInfo = BTPurchaseInfo;
