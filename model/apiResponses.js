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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponses = void 0;
var ApiResponses = /** @class */ (function (_super) {
    __extends(ApiResponses, _super);
    function ApiResponses() {
    }
    ApiResponses.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ApiResponses.attributeTypeMap);
    };
    ApiResponses.discriminator = undefined;
    ApiResponses.attributeTypeMap = [
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "ApiResponse"
        },
        {
            "name": "empty",
            "baseName": "empty",
            "type": "boolean"
        }
    ];
    return ApiResponses;
}(null));
exports.ApiResponses = ApiResponses;
