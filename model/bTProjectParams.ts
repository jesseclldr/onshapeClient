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

import { BTIdentity } from './bTIdentity';
import { BTIdentityParams } from './bTIdentityParams';

export class BTProjectParams {
    'name'?: string;
    'roleMap'?: { [key: string]: Array<BTIdentityParams>; };
    'description'?: string;
    'permissionSchemeId'?: string;
    'roleIdentityMap'?: { [key: string]: Array<BTIdentity>; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "roleMap",
            "baseName": "roleMap",
            "type": "{ [key: string]: Array<BTIdentityParams>; }"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "permissionSchemeId",
            "baseName": "permissionSchemeId",
            "type": "string"
        },
        {
            "name": "roleIdentityMap",
            "baseName": "roleIdentityMap",
            "type": "{ [key: string]: Array<BTIdentity>; }"
        }    ];

    static getAttributeTypeMap() {
        return BTProjectParams.attributeTypeMap;
    }
}

