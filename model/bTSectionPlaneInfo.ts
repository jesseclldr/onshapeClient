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


export class BTSectionPlaneInfo {
    'center'?: Array<number>;
    'normal'?: Array<number>;
    'tangent'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "center",
            "baseName": "center",
            "type": "Array<number>"
        },
        {
            "name": "normal",
            "baseName": "normal",
            "type": "Array<number>"
        },
        {
            "name": "tangent",
            "baseName": "tangent",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return BTSectionPlaneInfo.attributeTypeMap;
    }
}

