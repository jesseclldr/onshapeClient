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

import { BTStandardContentHierarchy } from './bTStandardContentHierarchy';

export class BTComponentUsagesSummary {
    'hierarchy'?: BTStandardContentHierarchy;
    'count'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hierarchy",
            "baseName": "hierarchy_",
            "type": "BTStandardContentHierarchy"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "BTStandardContentHierarchy"
        }    ];

    static getAttributeTypeMap() {
        return BTComponentUsagesSummary.attributeTypeMap;
    }
}

