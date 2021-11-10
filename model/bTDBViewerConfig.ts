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

import { BTDBViewerCollectionConfig } from './bTDBViewerCollectionConfig';

export class BTDBViewerConfig {
    'id'?: string;
    'queryFieldLabels'?: { [key: string]: string; };
    'collectionConfigs'?: Array<BTDBViewerCollectionConfig>;
    'createdBy'?: string;
    'createdAt'?: Date;
    'modifiedBy'?: string;
    'modifiedAt'?: Date;
    '_new'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "queryFieldLabels",
            "baseName": "queryFieldLabels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "collectionConfigs",
            "baseName": "collectionConfigs",
            "type": "Array<BTDBViewerCollectionConfig>"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "string"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "_new",
            "baseName": "new",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTDBViewerConfig.attributeTypeMap;
    }
}

