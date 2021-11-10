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
exports.BTTeamSummaryInfo = void 0;
var BTTeamSummaryInfo = /** @class */ (function () {
    function BTTeamSummaryInfo() {
    }
    BTTeamSummaryInfo.getAttributeTypeMap = function () {
        return BTTeamSummaryInfo.attributeTypeMap;
    };
    BTTeamSummaryInfo.discriminator = undefined;
    BTTeamSummaryInfo.attributeTypeMap = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "predefinedTeam",
            "baseName": "predefinedTeam",
            "type": "number"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "BTOwnerInfo"
        },
        {
            "name": "treeHref",
            "baseName": "treeHref",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string"
        },
        {
            "name": "isMutable",
            "baseName": "isMutable",
            "type": "boolean"
        },
        {
            "name": "isContainer",
            "baseName": "isContainer",
            "type": "boolean"
        },
        {
            "name": "canMove",
            "baseName": "canMove",
            "type": "boolean"
        },
        {
            "name": "hasPendingOwner",
            "baseName": "hasPendingOwner",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isEnterpriseOwned",
            "baseName": "isEnterpriseOwned",
            "type": "boolean"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
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
    return BTTeamSummaryInfo;
}());
exports.BTTeamSummaryInfo = BTTeamSummaryInfo;