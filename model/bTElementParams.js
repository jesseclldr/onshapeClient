"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BTElementParams = void 0;
var BTElementParams = /** @class */ (function () {
    function BTElementParams() {
    }
    BTElementParams.getAttributeTypeMap = function () {
        return BTElementParams.attributeTypeMap;
    };
    BTElementParams.discriminator = undefined;
    BTElementParams.attributeTypeMap = [
        {
            "name": "location",
            "baseName": "location",
            "type": "BTElementLocationParams"
        },
        {
            "name": "sourceDocumentId",
            "baseName": "sourceDocumentId",
            "type": "string"
        },
        {
            "name": "sourceWorkspaceId",
            "baseName": "sourceWorkspaceId",
            "type": "string"
        },
        {
            "name": "notifyUser",
            "baseName": "notifyUser",
            "type": "boolean"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "BTElementParams.FormatEnum"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "mediaType",
            "baseName": "mediaType",
            "type": "string"
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "translateStoredFile",
            "baseName": "translateStoredFile",
            "type": "boolean"
        },
        {
            "name": "createDrawingIfPossible",
            "baseName": "createDrawingIfPossible",
            "type": "boolean"
        },
        {
            "name": "isInitialUpload",
            "baseName": "isInitialUpload",
            "type": "boolean"
        },
        {
            "name": "foreignId",
            "baseName": "foreignId",
            "type": "string"
        },
        {
            "name": "uploadId",
            "baseName": "uploadId",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "updateExistingImportFeatures",
            "baseName": "updateExistingImportFeatures",
            "type": "boolean"
        },
        {
            "name": "blobMicroversionId",
            "baseName": "blobMicroversionId",
            "type": "string"
        },
        {
            "name": "originalForeignId",
            "baseName": "originalForeignId",
            "type": "string"
        },
        {
            "name": "blobElementId",
            "baseName": "blobElementId",
            "type": "string"
        },
        {
            "name": "specifyUnits",
            "baseName": "specifyUnits",
            "type": "boolean"
        },
        {
            "name": "splitAssembliesIntoMultipleDocuments",
            "baseName": "splitAssembliesIntoMultipleDocuments",
            "type": "boolean"
        },
        {
            "name": "flattenAssemblies",
            "baseName": "flattenAssemblies",
            "type": "boolean"
        },
        {
            "name": "getyAxisIsUp",
            "baseName": "getyAxisIsUp",
            "type": "boolean"
        },
        {
            "name": "allowFaultyParts",
            "baseName": "allowFaultyParts",
            "type": "boolean"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        }
    ];
    return BTElementParams;
}());
exports.BTElementParams = BTElementParams;
(function (BTElementParams) {
    var FormatEnum;
    (function (FormatEnum) {
        FormatEnum[FormatEnum["ONSHAPE"] = 'ONSHAPE'] = "ONSHAPE";
        FormatEnum[FormatEnum["PARASOLID"] = 'PARASOLID'] = "PARASOLID";
        FormatEnum[FormatEnum["ACIS"] = 'ACIS'] = "ACIS";
        FormatEnum[FormatEnum["STEP"] = 'STEP'] = "STEP";
        FormatEnum[FormatEnum["IGES"] = 'IGES'] = "IGES";
        FormatEnum[FormatEnum["SOLIDWORKS"] = 'SOLIDWORKS'] = "SOLIDWORKS";
        FormatEnum[FormatEnum["SOLIDWORKSASSEMBLY"] = 'SOLIDWORKS_ASSEMBLY'] = "SOLIDWORKSASSEMBLY";
        FormatEnum[FormatEnum["INVENTOR"] = 'INVENTOR'] = "INVENTOR";
        FormatEnum[FormatEnum["INVENTORASSEMBLY"] = 'INVENTOR_ASSEMBLY'] = "INVENTORASSEMBLY";
        FormatEnum[FormatEnum["PROEORNX"] = 'PROE_OR_NX'] = "PROEORNX";
        FormatEnum[FormatEnum["PROEASSEMBLY"] = 'PROE_ASSEMBLY'] = "PROEASSEMBLY";
        FormatEnum[FormatEnum["SOLIDEDGE"] = 'SOLIDEDGE'] = "SOLIDEDGE";
        FormatEnum[FormatEnum["CATIAV5"] = 'CATIAV5'] = "CATIAV5";
        FormatEnum[FormatEnum["CATIAV5ASSEMBLY"] = 'CATIAV5_ASSEMBLY'] = "CATIAV5ASSEMBLY";
        FormatEnum[FormatEnum["JT"] = 'JT'] = "JT";
        FormatEnum[FormatEnum["COLLADA"] = 'COLLADA'] = "COLLADA";
        FormatEnum[FormatEnum["RHINO"] = 'RHINO'] = "RHINO";
        FormatEnum[FormatEnum["ZIP"] = 'ZIP'] = "ZIP";
        FormatEnum[FormatEnum["STL"] = 'STL'] = "STL";
        FormatEnum[FormatEnum["OBJ"] = 'OBJ'] = "OBJ";
        FormatEnum[FormatEnum["PARASOLIDMESH"] = 'PARASOLID_MESH'] = "PARASOLIDMESH";
        FormatEnum[FormatEnum["PARASOLIDZIP"] = 'PARASOLID_ZIP'] = "PARASOLIDZIP";
        FormatEnum[FormatEnum["PDF"] = 'PDF'] = "PDF";
        FormatEnum[FormatEnum["DWG"] = 'DWG'] = "DWG";
        FormatEnum[FormatEnum["DXF"] = 'DXF'] = "DXF";
        FormatEnum[FormatEnum["DWT"] = 'DWT'] = "DWT";
    })(FormatEnum = BTElementParams.FormatEnum || (BTElementParams.FormatEnum = {}));
})(BTElementParams = exports.BTElementParams || (exports.BTElementParams = {}));
exports.BTElementParams = BTElementParams;
