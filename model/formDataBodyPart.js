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
exports.FormDataBodyPart = void 0;
var FormDataBodyPart = /** @class */ (function () {
    function FormDataBodyPart() {
    }
    FormDataBodyPart.getAttributeTypeMap = function () {
        return FormDataBodyPart.attributeTypeMap;
    };
    FormDataBodyPart.discriminator = undefined;
    FormDataBodyPart.attributeTypeMap = [
        {
            "name": "contentDisposition",
            "baseName": "contentDisposition",
            "type": "ContentDisposition"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "any"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "BodyPartHeaders"
        },
        {
            "name": "mediaType",
            "baseName": "mediaType",
            "type": "BodyPartMediaType"
        },
        {
            "name": "messageBodyWorkers",
            "baseName": "messageBodyWorkers",
            "type": "MessageBodyWorkers"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "MultiPart"
        },
        {
            "name": "providers",
            "baseName": "providers",
            "type": "any"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "formDataContentDisposition",
            "baseName": "formDataContentDisposition",
            "type": "FormDataContentDisposition"
        },
        {
            "name": "simple",
            "baseName": "simple",
            "type": "boolean"
        },
        {
            "name": "parameterizedHeaders",
            "baseName": "parameterizedHeaders",
            "type": "BodyPartHeaders"
        }
    ];
    return FormDataBodyPart;
}());
exports.FormDataBodyPart = FormDataBodyPart;
