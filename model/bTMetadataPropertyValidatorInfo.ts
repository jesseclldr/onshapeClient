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


export class BTMetadataPropertyValidatorInfo {
    'max'?: number;
    'min'?: number;
    'pattern'?: string;
    'minLength'?: number;
    'maxLength'?: number;
    'minDate'?: Date;
    'maxDate'?: Date;
    'minCount'?: number;
    'maxCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number"
        },
        {
            "name": "pattern",
            "baseName": "pattern",
            "type": "string"
        },
        {
            "name": "minLength",
            "baseName": "minLength",
            "type": "number"
        },
        {
            "name": "maxLength",
            "baseName": "maxLength",
            "type": "number"
        },
        {
            "name": "minDate",
            "baseName": "minDate",
            "type": "Date"
        },
        {
            "name": "maxDate",
            "baseName": "maxDate",
            "type": "Date"
        },
        {
            "name": "minCount",
            "baseName": "minCount",
            "type": "number"
        },
        {
            "name": "maxCount",
            "baseName": "maxCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BTMetadataPropertyValidatorInfo.attributeTypeMap;
    }
}

