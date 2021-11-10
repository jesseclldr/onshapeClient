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

import { BTSubstituteApproverParams } from './bTSubstituteApproverParams';

export class BTUserSettingsParams {
    'value'?: string;
    'key'?: string;
    'id'?: string;
    'keyValues'?: { [key: string]: string; };
    'substituteApprovers'?: Array<BTSubstituteApproverParams>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "keyValues",
            "baseName": "keyValues",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "substituteApprovers",
            "baseName": "substituteApprovers",
            "type": "Array<BTSubstituteApproverParams>"
        }    ];

    static getAttributeTypeMap() {
        return BTUserSettingsParams.attributeTypeMap;
    }
}

