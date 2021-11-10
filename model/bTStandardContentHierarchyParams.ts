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


export class BTStandardContentHierarchyParams {
    'type'?: string;
    'category'?: string;
    'standard'?: string;
    'types'?: string;
    'componentDocumentId'?: string;
    'disableProduction'?: boolean;
    'productionVersionId'?: string;
    'testVersionId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "standard",
            "baseName": "standard",
            "type": "string"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "string"
        },
        {
            "name": "componentDocumentId",
            "baseName": "componentDocumentId",
            "type": "string"
        },
        {
            "name": "disableProduction",
            "baseName": "disableProduction",
            "type": "boolean"
        },
        {
            "name": "productionVersionId",
            "baseName": "productionVersionId",
            "type": "string"
        },
        {
            "name": "testVersionId",
            "baseName": "testVersionId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTStandardContentHierarchyParams.attributeTypeMap;
    }
}

