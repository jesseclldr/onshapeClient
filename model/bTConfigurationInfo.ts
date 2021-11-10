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

import { ConfigurationInfoEntry } from './configurationInfoEntry';

export class BTConfigurationInfo {
    'parameters'?: Array<ConfigurationInfoEntry>;
    'isStandardContent'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ConfigurationInfoEntry>"
        },
        {
            "name": "isStandardContent",
            "baseName": "isStandardContent",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTConfigurationInfo.attributeTypeMap;
    }
}

