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

import { BTIdentityParams } from './bTIdentityParams';

export class BTGlobalPermissionParams {
    'globalPermission'?: number;
    'identityParams'?: Array<BTIdentityParams>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "globalPermission",
            "baseName": "globalPermission",
            "type": "number"
        },
        {
            "name": "identityParams",
            "baseName": "identityParams",
            "type": "Array<BTIdentityParams>"
        }    ];

    static getAttributeTypeMap() {
        return BTGlobalPermissionParams.attributeTypeMap;
    }
}

