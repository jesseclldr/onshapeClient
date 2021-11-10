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
exports.BTImportForeignDataParams = void 0;
var BTImportForeignDataParams = /** @class */ (function () {
    function BTImportForeignDataParams() {
    }
    BTImportForeignDataParams.getAttributeTypeMap = function () {
        return BTImportForeignDataParams.attributeTypeMap;
    };
    BTImportForeignDataParams.discriminator = undefined;
    BTImportForeignDataParams.attributeTypeMap = [
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "fileFormat",
            "baseName": "fileFormat",
            "type": "BTImportForeignDataParams.FileFormatEnum"
        },
        {
            "name": "publicDocument",
            "baseName": "publicDocument",
            "type": "boolean"
        },
        {
            "name": "notifyUser",
            "baseName": "notifyUser",
            "type": "boolean"
        },
        {
            "name": "ownerType",
            "baseName": "ownerType",
            "type": "BTImportForeignDataParams.OwnerTypeEnum"
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
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
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
    return BTImportForeignDataParams;
}());
exports.BTImportForeignDataParams = BTImportForeignDataParams;
(function (BTImportForeignDataParams) {
    var FileFormatEnum;
    (function (FileFormatEnum) {
        FileFormatEnum[FileFormatEnum["ONSHAPEONSHAPE"] = 'ONSHAPE_ONSHAPE'] = "ONSHAPEONSHAPE";
        FileFormatEnum[FileFormatEnum["PARASOLIDXT"] = 'PARASOLID_XT'] = "PARASOLIDXT";
        FileFormatEnum[FileFormatEnum["PARASOLIDXB"] = 'PARASOLID_XB'] = "PARASOLIDXB";
        FileFormatEnum[FileFormatEnum["PARASOLIDXMTTXT"] = 'PARASOLID_XMT_TXT'] = "PARASOLIDXMTTXT";
        FileFormatEnum[FileFormatEnum["PARASOLIDXMTBIN"] = 'PARASOLID_XMT_BIN'] = "PARASOLIDXMTBIN";
        FileFormatEnum[FileFormatEnum["ACISSAT"] = 'ACIS_SAT'] = "ACISSAT";
        FileFormatEnum[FileFormatEnum["STEPSTEP"] = 'STEP_STEP'] = "STEPSTEP";
        FileFormatEnum[FileFormatEnum["IGESIGES"] = 'IGES_IGES'] = "IGESIGES";
        FileFormatEnum[FileFormatEnum["SOLIDWORKSSLDPRT"] = 'SOLIDWORKS_SLDPRT'] = "SOLIDWORKSSLDPRT";
        FileFormatEnum[FileFormatEnum["SOLIDWORKSSLDASM"] = 'SOLIDWORKS_SLDASM'] = "SOLIDWORKSSLDASM";
        FileFormatEnum[FileFormatEnum["SOLIDWORKSZIP"] = 'SOLIDWORKS_ZIP'] = "SOLIDWORKSZIP";
        FileFormatEnum[FileFormatEnum["INVENTORIPRT"] = 'INVENTOR_IPRT'] = "INVENTORIPRT";
        FileFormatEnum[FileFormatEnum["INVENTORIAM"] = 'INVENTOR_IAM'] = "INVENTORIAM";
        FileFormatEnum[FileFormatEnum["PROEPRTORNX"] = 'PROE_PRT_OR_NX'] = "PROEPRTORNX";
        FileFormatEnum[FileFormatEnum["PROEASM"] = 'PROE_ASM'] = "PROEASM";
        FileFormatEnum[FileFormatEnum["SOLIDEDGEPAR"] = 'SOLIDEDGE_PAR'] = "SOLIDEDGEPAR";
        FileFormatEnum[FileFormatEnum["CATIAV5CATPART"] = 'CATIAV5_CATPART'] = "CATIAV5CATPART";
        FileFormatEnum[FileFormatEnum["CATIAV5CATPRODUCT"] = 'CATIAV5_CATPRODUCT'] = "CATIAV5CATPRODUCT";
        FileFormatEnum[FileFormatEnum["JTJT"] = 'JT_JT'] = "JTJT";
        FileFormatEnum[FileFormatEnum["COLLADADAE"] = 'COLLADA_DAE'] = "COLLADADAE";
        FileFormatEnum[FileFormatEnum["RHINO3DM"] = 'RHINO_3DM'] = "RHINO3DM";
        FileFormatEnum[FileFormatEnum["STLSTL"] = 'STL_STL'] = "STLSTL";
        FileFormatEnum[FileFormatEnum["OBJOBJ"] = 'OBJ_OBJ'] = "OBJOBJ";
    })(FileFormatEnum = BTImportForeignDataParams.FileFormatEnum || (BTImportForeignDataParams.FileFormatEnum = {}));
    var OwnerTypeEnum;
    (function (OwnerTypeEnum) {
        OwnerTypeEnum[OwnerTypeEnum["USER"] = 'USER'] = "USER";
        OwnerTypeEnum[OwnerTypeEnum["COMPANY"] = 'COMPANY'] = "COMPANY";
        OwnerTypeEnum[OwnerTypeEnum["ONSHAPE"] = 'ONSHAPE'] = "ONSHAPE";
    })(OwnerTypeEnum = BTImportForeignDataParams.OwnerTypeEnum || (BTImportForeignDataParams.OwnerTypeEnum = {}));
})(BTImportForeignDataParams = exports.BTImportForeignDataParams || (exports.BTImportForeignDataParams = {}));
exports.BTImportForeignDataParams = BTImportForeignDataParams;
