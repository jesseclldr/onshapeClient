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
exports.ContentDisposition = void 0;
var ContentDisposition = /** @class */ (function () {
    function ContentDisposition() {
    }
    ContentDisposition.getAttributeTypeMap = function () {
        return ContentDisposition.attributeTypeMap;
    };
    ContentDisposition.discriminator = undefined;
    ContentDisposition.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date"
        },
        {
            "name": "modificationDate",
            "baseName": "modificationDate",
            "type": "Date"
        },
        {
            "name": "readDate",
            "baseName": "readDate",
            "type": "Date"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }
    ];
    return ContentDisposition;
}());
exports.ContentDisposition = ContentDisposition;