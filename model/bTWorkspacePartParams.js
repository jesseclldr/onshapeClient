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
exports.BTWorkspacePartParams = void 0;
var BTWorkspacePartParams = /** @class */ (function () {
    function BTWorkspacePartParams() {
    }
    BTWorkspacePartParams.getAttributeTypeMap = function () {
        return BTWorkspacePartParams.attributeTypeMap;
    };
    BTWorkspacePartParams.discriminator = undefined;
    BTWorkspacePartParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string"
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "Array<BTNameValuePair>"
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string"
        },
        {
            "name": "productLine",
            "baseName": "productLine",
            "type": "string"
        },
        {
            "name": "title1",
            "baseName": "title1",
            "type": "string"
        },
        {
            "name": "title2",
            "baseName": "title2",
            "type": "string"
        },
        {
            "name": "title3",
            "baseName": "title3",
            "type": "string"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string"
        },
        {
            "name": "material",
            "baseName": "material",
            "type": "BTMaterialParams"
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string"
        },
        {
            "name": "appearance",
            "baseName": "appearance",
            "type": "BTPartAppearanceParams"
        },
        {
            "name": "customPropertyDefinitions",
            "baseName": "customPropertyDefinitions",
            "type": "Array<BTCustomPropertyDefinitionParams>"
        },
        {
            "name": "applyUpdateToAllConfigurations",
            "baseName": "applyUpdateToAllConfigurations",
            "type": "boolean"
        }
    ];
    return BTWorkspacePartParams;
}());
exports.BTWorkspacePartParams = BTWorkspacePartParams;
