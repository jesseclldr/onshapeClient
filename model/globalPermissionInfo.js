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
exports.GlobalPermissionInfo = void 0;
var GlobalPermissionInfo = /** @class */ (function () {
    function GlobalPermissionInfo() {
    }
    GlobalPermissionInfo.getAttributeTypeMap = function () {
        return GlobalPermissionInfo.attributeTypeMap;
    };
    GlobalPermissionInfo.discriminator = undefined;
    GlobalPermissionInfo.attributeTypeMap = [
        {
            "name": "accessReports",
            "baseName": "accessReports",
            "type": "boolean"
        },
        {
            "name": "createProject",
            "baseName": "createProject",
            "type": "boolean"
        },
        {
            "name": "approveReleases",
            "baseName": "approveReleases",
            "type": "boolean"
        },
        {
            "name": "createReleases",
            "baseName": "createReleases",
            "type": "boolean"
        },
        {
            "name": "shareForAnonymousAccess",
            "baseName": "shareForAnonymousAccess",
            "type": "boolean"
        },
        {
            "name": "manageRbac",
            "baseName": "manageRbac",
            "type": "boolean"
        },
        {
            "name": "manageUsers",
            "baseName": "manageUsers",
            "type": "boolean"
        },
        {
            "name": "manageGuestUsers",
            "baseName": "manageGuestUsers",
            "type": "boolean"
        },
        {
            "name": "deletePermanently",
            "baseName": "deletePermanently",
            "type": "boolean"
        },
        {
            "name": "adminEnterprise",
            "baseName": "adminEnterprise",
            "type": "boolean"
        }
    ];
    return GlobalPermissionInfo;
}());
exports.GlobalPermissionInfo = GlobalPermissionInfo;
