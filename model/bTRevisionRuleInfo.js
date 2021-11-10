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
exports.BTRevisionRuleInfo = void 0;
var BTRevisionRuleInfo = /** @class */ (function () {
    function BTRevisionRuleInfo() {
    }
    BTRevisionRuleInfo.getAttributeTypeMap = function () {
        return BTRevisionRuleInfo.attributeTypeMap;
    };
    BTRevisionRuleInfo.discriminator = undefined;
    BTRevisionRuleInfo.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "script",
            "baseName": "script",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "revisionList",
            "baseName": "revisionList",
            "type": "Array<string>"
        },
        {
            "name": "ruleType",
            "baseName": "ruleType",
            "type": "number"
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
    return BTRevisionRuleInfo;
}());
exports.BTRevisionRuleInfo = BTRevisionRuleInfo;
