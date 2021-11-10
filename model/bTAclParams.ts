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


export class BTAclParams {
    '_public'?: boolean;
    'documentId'?: string;
    'anonymousAccessAllowed'?: boolean;
    'anonymousAllowsExport'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_public",
            "baseName": "public",
            "type": "boolean"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "anonymousAccessAllowed",
            "baseName": "anonymousAccessAllowed",
            "type": "boolean"
        },
        {
            "name": "anonymousAllowsExport",
            "baseName": "anonymousAllowsExport",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTAclParams.attributeTypeMap;
    }
}

