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
exports.Entry = void 0;
var Entry = /** @class */ (function () {
    function Entry() {
    }
    Entry.getAttributeTypeMap = function () {
        return Entry.attributeTypeMap;
    };
    Entry.discriminator = undefined;
    Entry.attributeTypeMap = [
        {
            "name": "permissionSet",
            "baseName": "permissionSet",
            "type": "BTPermissionSet"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "BTRbacRoleInfo"
        }
    ];
    return Entry;
}());
exports.Entry = Entry;
