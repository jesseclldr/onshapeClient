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
exports.BTInAppMessageContentItem = void 0;
var BTInAppMessageContentItem = /** @class */ (function () {
    function BTInAppMessageContentItem() {
    }
    BTInAppMessageContentItem.getAttributeTypeMap = function () {
        return BTInAppMessageContentItem.attributeTypeMap;
    };
    BTInAppMessageContentItem.discriminator = undefined;
    BTInAppMessageContentItem.attributeTypeMap = [
        {
            "name": "contentId",
            "baseName": "contentId",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string"
        },
        {
            "name": "pausePoints",
            "baseName": "pausePoints",
            "type": "Array<number>"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string"
        },
        {
            "name": "itemTitle",
            "baseName": "itemTitle",
            "type": "string"
        },
        {
            "name": "verticalOffset",
            "baseName": "verticalOffset",
            "type": "number"
        },
        {
            "name": "horizontalOffset",
            "baseName": "horizontalOffset",
            "type": "number"
        },
        {
            "name": "anchor",
            "baseName": "anchor",
            "type": "string"
        }
    ];
    return BTInAppMessageContentItem;
}());
exports.BTInAppMessageContentItem = BTInAppMessageContentItem;
