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


export class BTCompanyPoliciesParams {
    'requireTotp'?: boolean;
    'useLightUi'?: boolean;
    'requireApprovedDrawingTemplates'?: boolean;
    'approvedDrawingTemplatesDocumentId'?: string;
    'addCompanyOwnedLibrariesInUserAccount'?: boolean;
    'releaseWorkflowId'?: string;
    'obsoletionWorkflowId'?: string;
    'revisionSchemeId'?: string;
    'requireRevisionForReleasedObjects'?: boolean;
    'requirePartNumberForReleasedObjects'?: boolean;
    'onlyAdminsCanEditPropertiesOfReleasedObjects'?: boolean;
    'onlyAdminsCanDeleteDocumentsContainingReleasedObjects'?: boolean;
    'onlyAdminsCanApproveReleases'?: boolean;
    'requirePartsAndSubassembliesReleaseWithAssembly'?: boolean;
    'requirePartsAndSubassembliesReleaseWithDrawing'?: boolean;
    'requireBasePartReleaseWithDerivedPart'?: boolean;
    'requireImageReleaseWithDrawing'?: boolean;
    'actionShowDrawingsWatermark'?: boolean;
    'errorOnFeatureListErrorsDuringRelease'?: boolean;
    'errorOnRollbackBarNotAtEndDuringRelease'?: boolean;
    'errorOnAssemblyTreeErrorsDuringRelease'?: boolean;
    'errorOnPendingContextEditsDuringRelease'?: boolean;
    'errorOnPendingDrawingUpdateDuringRelease'?: boolean;
    'errorOnPendingDanglingDrawingObjectsDuringRelease'?: boolean;
    'approverRequiredDuringRelease'?: boolean;
    'noteRequiredDuringRelease'?: boolean;
    'requireAllApprovers'?: boolean;
    'automaticallyObsoletePreviousReleasedRevisions'?: boolean;
    'partNumberingSchemeId'?: string;
    'requirePeerReview'?: boolean;
    'drawingCanDuplicatePartNumber'?: boolean;
    'onlyAdminsCanMarkObjectsAsNotRevisionManaged'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requireTotp",
            "baseName": "requireTotp",
            "type": "boolean"
        },
        {
            "name": "useLightUi",
            "baseName": "useLightUi",
            "type": "boolean"
        },
        {
            "name": "requireApprovedDrawingTemplates",
            "baseName": "requireApprovedDrawingTemplates",
            "type": "boolean"
        },
        {
            "name": "approvedDrawingTemplatesDocumentId",
            "baseName": "approvedDrawingTemplatesDocumentId",
            "type": "string"
        },
        {
            "name": "addCompanyOwnedLibrariesInUserAccount",
            "baseName": "addCompanyOwnedLibrariesInUserAccount",
            "type": "boolean"
        },
        {
            "name": "releaseWorkflowId",
            "baseName": "releaseWorkflowId",
            "type": "string"
        },
        {
            "name": "obsoletionWorkflowId",
            "baseName": "obsoletionWorkflowId",
            "type": "string"
        },
        {
            "name": "revisionSchemeId",
            "baseName": "revisionSchemeId",
            "type": "string"
        },
        {
            "name": "requireRevisionForReleasedObjects",
            "baseName": "requireRevisionForReleasedObjects",
            "type": "boolean"
        },
        {
            "name": "requirePartNumberForReleasedObjects",
            "baseName": "requirePartNumberForReleasedObjects",
            "type": "boolean"
        },
        {
            "name": "onlyAdminsCanEditPropertiesOfReleasedObjects",
            "baseName": "onlyAdminsCanEditPropertiesOfReleasedObjects",
            "type": "boolean"
        },
        {
            "name": "onlyAdminsCanDeleteDocumentsContainingReleasedObjects",
            "baseName": "onlyAdminsCanDeleteDocumentsContainingReleasedObjects",
            "type": "boolean"
        },
        {
            "name": "onlyAdminsCanApproveReleases",
            "baseName": "onlyAdminsCanApproveReleases",
            "type": "boolean"
        },
        {
            "name": "requirePartsAndSubassembliesReleaseWithAssembly",
            "baseName": "requirePartsAndSubassembliesReleaseWithAssembly",
            "type": "boolean"
        },
        {
            "name": "requirePartsAndSubassembliesReleaseWithDrawing",
            "baseName": "requirePartsAndSubassembliesReleaseWithDrawing",
            "type": "boolean"
        },
        {
            "name": "requireBasePartReleaseWithDerivedPart",
            "baseName": "requireBasePartReleaseWithDerivedPart",
            "type": "boolean"
        },
        {
            "name": "requireImageReleaseWithDrawing",
            "baseName": "requireImageReleaseWithDrawing",
            "type": "boolean"
        },
        {
            "name": "actionShowDrawingsWatermark",
            "baseName": "actionShowDrawingsWatermark",
            "type": "boolean"
        },
        {
            "name": "errorOnFeatureListErrorsDuringRelease",
            "baseName": "errorOnFeatureListErrorsDuringRelease",
            "type": "boolean"
        },
        {
            "name": "errorOnRollbackBarNotAtEndDuringRelease",
            "baseName": "errorOnRollbackBarNotAtEndDuringRelease",
            "type": "boolean"
        },
        {
            "name": "errorOnAssemblyTreeErrorsDuringRelease",
            "baseName": "errorOnAssemblyTreeErrorsDuringRelease",
            "type": "boolean"
        },
        {
            "name": "errorOnPendingContextEditsDuringRelease",
            "baseName": "errorOnPendingContextEditsDuringRelease",
            "type": "boolean"
        },
        {
            "name": "errorOnPendingDrawingUpdateDuringRelease",
            "baseName": "errorOnPendingDrawingUpdateDuringRelease",
            "type": "boolean"
        },
        {
            "name": "errorOnPendingDanglingDrawingObjectsDuringRelease",
            "baseName": "errorOnPendingDanglingDrawingObjectsDuringRelease",
            "type": "boolean"
        },
        {
            "name": "approverRequiredDuringRelease",
            "baseName": "approverRequiredDuringRelease",
            "type": "boolean"
        },
        {
            "name": "noteRequiredDuringRelease",
            "baseName": "noteRequiredDuringRelease",
            "type": "boolean"
        },
        {
            "name": "requireAllApprovers",
            "baseName": "requireAllApprovers",
            "type": "boolean"
        },
        {
            "name": "automaticallyObsoletePreviousReleasedRevisions",
            "baseName": "automaticallyObsoletePreviousReleasedRevisions",
            "type": "boolean"
        },
        {
            "name": "partNumberingSchemeId",
            "baseName": "partNumberingSchemeId",
            "type": "string"
        },
        {
            "name": "requirePeerReview",
            "baseName": "requirePeerReview",
            "type": "boolean"
        },
        {
            "name": "drawingCanDuplicatePartNumber",
            "baseName": "drawingCanDuplicatePartNumber",
            "type": "boolean"
        },
        {
            "name": "onlyAdminsCanMarkObjectsAsNotRevisionManaged",
            "baseName": "onlyAdminsCanMarkObjectsAsNotRevisionManaged",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTCompanyPoliciesParams.attributeTypeMap;
    }
}

