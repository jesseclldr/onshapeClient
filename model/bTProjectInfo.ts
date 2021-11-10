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

import { BTOwnerInfo } from './bTOwnerInfo';
import { BTPermissionSet } from './bTPermissionSet';
import { BTRbacPermissionSchemeInfo } from './bTRbacPermissionSchemeInfo';
import { BTUserBasicSummaryInfo } from './bTUserBasicSummaryInfo';
import { RoleMapEntry } from './roleMapEntry';

export class BTProjectInfo {
    'roleMapEntries'?: Array<RoleMapEntry>;
    'trash'?: boolean;
    'permissionSet'?: BTPermissionSet;
    'permissionScheme'?: BTRbacPermissionSchemeInfo;
    'owner'?: BTOwnerInfo;
    'treeHref'?: string;
    'resourceType'?: string;
    'isMutable'?: boolean;
    'isContainer'?: boolean;
    'canMove'?: boolean;
    'hasPendingOwner'?: boolean;
    'description'?: string;
    'isEnterpriseOwned'?: boolean;
    'modifiedAt'?: Date;
    'createdAt'?: Date;
    'createdBy'?: BTUserBasicSummaryInfo;
    'modifiedBy'?: BTUserBasicSummaryInfo;
    'projectId'?: string;
    'name'?: string;
    'id'?: string;
    'href'?: string;
    'viewRef'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "roleMapEntries",
            "baseName": "roleMapEntries",
            "type": "Array<RoleMapEntry>"
        },
        {
            "name": "trash",
            "baseName": "trash",
            "type": "boolean"
        },
        {
            "name": "permissionSet",
            "baseName": "permissionSet",
            "type": "BTPermissionSet"
        },
        {
            "name": "permissionScheme",
            "baseName": "permissionScheme",
            "type": "BTRbacPermissionSchemeInfo"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "BTOwnerInfo"
        },
        {
            "name": "treeHref",
            "baseName": "treeHref",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string"
        },
        {
            "name": "isMutable",
            "baseName": "isMutable",
            "type": "boolean"
        },
        {
            "name": "isContainer",
            "baseName": "isContainer",
            "type": "boolean"
        },
        {
            "name": "canMove",
            "baseName": "canMove",
            "type": "boolean"
        },
        {
            "name": "hasPendingOwner",
            "baseName": "hasPendingOwner",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isEnterpriseOwned",
            "baseName": "isEnterpriseOwned",
            "type": "boolean"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTProjectInfo.attributeTypeMap;
    }
}

