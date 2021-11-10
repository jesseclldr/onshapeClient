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
exports.RequestBody = void 0;
var RequestBody = /** @class */ (function () {
    function RequestBody() {
    }
    RequestBody.getAttributeTypeMap = function () {
        return RequestBody.attributeTypeMap;
    };
    RequestBody.discriminator = undefined;
    RequestBody.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "BodyPartHeaders"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "get$ref",
            "baseName": "get$ref",
            "type": "string"
        }
    ];
    return RequestBody;
}());
exports.RequestBody = RequestBody;
