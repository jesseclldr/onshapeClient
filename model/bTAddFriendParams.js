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
exports.BTAddFriendParams = void 0;
var BTAddFriendParams = /** @class */ (function () {
    function BTAddFriendParams() {
    }
    BTAddFriendParams.getAttributeTypeMap = function () {
        return BTAddFriendParams.attributeTypeMap;
    };
    BTAddFriendParams.discriminator = undefined;
    BTAddFriendParams.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }
    ];
    return BTAddFriendParams;
}());
exports.BTAddFriendParams = BTAddFriendParams;
