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
exports.PathSegment = void 0;
var PathSegment = /** @class */ (function () {
    function PathSegment() {
    }
    PathSegment.getAttributeTypeMap = function () {
        return PathSegment.attributeTypeMap;
    };
    PathSegment.discriminator = undefined;
    PathSegment.attributeTypeMap = [
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
            "name": "subType",
            "baseName": "subType",
            "type": "number"
        }
    ];
    return PathSegment;
}());
exports.PathSegment = PathSegment;
