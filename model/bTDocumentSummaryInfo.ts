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

import { BTGlobalTreeNodeInfo } from './bTGlobalTreeNodeInfo';
import { BTOwnerInfo } from './bTOwnerInfo';
import { BTUserBasicSummaryInfo } from './bTUserBasicSummaryInfo';

export class BTDocumentSummaryInfo extends BTGlobalTreeNodeInfo {

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTDocumentSummaryInfo.attributeTypeMap);
    }
}

