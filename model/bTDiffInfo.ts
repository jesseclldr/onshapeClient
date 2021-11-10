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


export class BTDiffInfo {
    'type'?: BTDiffInfo.TypeEnum;
    'targetId'?: string;
    'sourceValue'?: string;
    'targetValue'?: string;
    'sourceId'?: string;
    'changes'?: { [key: string]: BTDiffInfo; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BTDiffInfo.TypeEnum"
        },
        {
            "name": "targetId",
            "baseName": "targetId",
            "type": "string"
        },
        {
            "name": "sourceValue",
            "baseName": "sourceValue",
            "type": "string"
        },
        {
            "name": "targetValue",
            "baseName": "targetValue",
            "type": "string"
        },
        {
            "name": "sourceId",
            "baseName": "sourceId",
            "type": "string"
        },
        {
            "name": "changes",
            "baseName": "changes",
            "type": "{ [key: string]: BTDiffInfo; }"
        }    ];

    static getAttributeTypeMap() {
        return BTDiffInfo.attributeTypeMap;
    }
}

export namespace BTDiffInfo {
    export enum TypeEnum {
        NONE = <any> 'NONE',
        MOVED = <any> 'MOVED',
        MODIFIED = <any> 'MODIFIED',
        MOVEDANDMODIFIED = <any> 'MOVED_AND_MODIFIED',
        ADDED = <any> 'ADDED',
        DELETED = <any> 'DELETED',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
