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
exports.BTRevisionRuleParams = void 0;
var BTRevisionRuleParams = /** @class */ (function () {
    function BTRevisionRuleParams() {
    }
    BTRevisionRuleParams.getAttributeTypeMap = function () {
        return BTRevisionRuleParams.attributeTypeMap;
    };
    BTRevisionRuleParams.discriminator = undefined;
    BTRevisionRuleParams.attributeTypeMap = [
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
            "name": "validationRegex",
            "baseName": "validationRegex",
            "type": "string"
        }
    ];
    return BTRevisionRuleParams;
}());
exports.BTRevisionRuleParams = BTRevisionRuleParams;
