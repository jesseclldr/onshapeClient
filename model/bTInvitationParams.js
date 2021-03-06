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
exports.BTInvitationParams = void 0;
var BTInvitationParams = /** @class */ (function () {
    function BTInvitationParams() {
    }
    BTInvitationParams.getAttributeTypeMap = function () {
        return BTInvitationParams.attributeTypeMap;
    };
    BTInvitationParams.discriminator = undefined;
    BTInvitationParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "number"
        },
        {
            "name": "cadSystemAtSignup",
            "baseName": "cadSystemAtSignup",
            "type": "string"
        },
        {
            "name": "companyPlan",
            "baseName": "companyPlan",
            "type": "boolean"
        },
        {
            "name": "eulaAccepted",
            "baseName": "eulaAccepted",
            "type": "boolean"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "defaultCompanyName",
            "baseName": "defaultCompanyName",
            "type": "string"
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string"
        },
        {
            "name": "seats",
            "baseName": "seats",
            "type": "number"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "number"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "recaptcha",
            "baseName": "recaptcha",
            "type": "string"
        },
        {
            "name": "inviteFriendRequest",
            "baseName": "inviteFriendRequest",
            "type": "boolean"
        },
        {
            "name": "companyUserEmails",
            "baseName": "companyUserEmails",
            "type": "Array<string>"
        },
        {
            "name": "approveUser",
            "baseName": "approveUser",
            "type": "boolean"
        },
        {
            "name": "privacyConsentAccepted",
            "baseName": "privacyConsentAccepted",
            "type": "boolean"
        }
    ];
    return BTInvitationParams;
}());
exports.BTInvitationParams = BTInvitationParams;
