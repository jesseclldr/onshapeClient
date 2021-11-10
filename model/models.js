"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./address"), exports);
__exportStar(require("./apiResponse"), exports);
__exportStar(require("./apiResponses"), exports);
__exportStar(require("./bTAPIApplicationDeprecateParams"), exports);
__exportStar(require("./bTAPIApplicationParams"), exports);
__exportStar(require("./bTAPIApplicationSummaryInfo"), exports);
__exportStar(require("./bTAPIDeveloperParams"), exports);
__exportStar(require("./bTAPIKeyParams"), exports);
__exportStar(require("./bTAPIPartnerParams"), exports);
__exportStar(require("./bTAclParams"), exports);
__exportStar(require("./bTActionInfo"), exports);
__exportStar(require("./bTAddFriendParams"), exports);
__exportStar(require("./bTAddressInfo"), exports);
__exportStar(require("./bTAdminGroupParams"), exports);
__exportStar(require("./bTAdminRoleParams"), exports);
__exportStar(require("./bTAdminRolePermissionParams"), exports);
__exportStar(require("./bTAdminTaskParams"), exports);
__exportStar(require("./bTAdminUserRoleParams"), exports);
__exportStar(require("./bTAgreementParams"), exports);
__exportStar(require("./bTApiKeyUpdateParams"), exports);
__exportStar(require("./bTAppAssociativeDataParamsArray"), exports);
__exportStar(require("./bTAppElementChangeParams"), exports);
__exportStar(require("./bTAppElementCommitTransactionParams"), exports);
__exportStar(require("./bTAppElementContentDeltaInfo"), exports);
__exportStar(require("./bTAppElementContentEntryInfo"), exports);
__exportStar(require("./bTAppElementContentInfo"), exports);
__exportStar(require("./bTAppElementHistoryEntryInfo"), exports);
__exportStar(require("./bTAppElementHistoryInfo"), exports);
__exportStar(require("./bTAppElementModifyInfo"), exports);
__exportStar(require("./bTAppElementParams"), exports);
__exportStar(require("./bTAppElementReferenceInfo"), exports);
__exportStar(require("./bTAppElementReferenceParams"), exports);
__exportStar(require("./bTAppElementReferenceResolveInfo"), exports);
__exportStar(require("./bTAppElementStartTransactionParams"), exports);
__exportStar(require("./bTAppElementUpdateParams"), exports);
__exportStar(require("./bTAppViewParams"), exports);
__exportStar(require("./bTApplicationElementThumbnailParams"), exports);
__exportStar(require("./bTApplicationElementThumbnailParamsArray"), exports);
__exportStar(require("./bTApproveTranslationDebugParams"), exports);
__exportStar(require("./bTAssemblyInstanceDefinitionParams"), exports);
__exportStar(require("./bTAssemblyTransformDefinitionParams"), exports);
__exportStar(require("./bTAssemblyTransformedInstancesDefinitionParams"), exports);
__exportStar(require("./bTAssociativeDataParams"), exports);
__exportStar(require("./bTAssociativeFieldParams"), exports);
__exportStar(require("./bTAutoPartNumberingSchemeParams"), exports);
__exportStar(require("./bTBaseInfo"), exports);
__exportStar(require("./bTBelScriptLibraryVersion"), exports);
__exportStar(require("./bTBetaCapabilityAdminInfo"), exports);
__exportStar(require("./bTBetaCapabilityImportInfo"), exports);
__exportStar(require("./bTBetaCapabilityInfo"), exports);
__exportStar(require("./bTBetaCapabilityMetricsInfo"), exports);
__exportStar(require("./bTBetaCapabilityParams"), exports);
__exportStar(require("./bTBetaCapabilitySummaryInfo"), exports);
__exportStar(require("./bTBetaCapabilityUserInfo"), exports);
__exportStar(require("./bTBillingAccountParams"), exports);
__exportStar(require("./bTBillingAllowedPlansInfo"), exports);
__exportStar(require("./bTBillingPlanBatchParams"), exports);
__exportStar(require("./bTBillingPlanInfo"), exports);
__exportStar(require("./bTBillingPlanParams"), exports);
__exportStar(require("./bTBillingPlanSummaryInfo"), exports);
__exportStar(require("./bTBoundingBox"), exports);
__exportStar(require("./bTBoundingBoxParams"), exports);
__exportStar(require("./bTBrokenOutEndCondition"), exports);
__exportStar(require("./bTBulkDocumentUpdateParams"), exports);
__exportStar(require("./bTCacheInfo"), exports);
__exportStar(require("./bTCampaignParams"), exports);
__exportStar(require("./bTCapabilityCheckParams"), exports);
__exportStar(require("./bTCapabilityParams"), exports);
__exportStar(require("./bTCapabilityRuleParams"), exports);
__exportStar(require("./bTCapableInfo"), exports);
__exportStar(require("./bTCardInfo"), exports);
__exportStar(require("./bTCardParams"), exports);
__exportStar(require("./bTChangeContextParams"), exports);
__exportStar(require("./bTCloudStorageAccountInfo"), exports);
__exportStar(require("./bTCloudStorageAccountListInfo"), exports);
__exportStar(require("./bTCloudStorageObjectInfo"), exports);
__exportStar(require("./bTCloudStorageObjectListInfo"), exports);
__exportStar(require("./bTCloudStorageProviderObjectInfo"), exports);
__exportStar(require("./bTColorInfo"), exports);
__exportStar(require("./bTColorParams"), exports);
__exportStar(require("./bTCommentAttachmentInfo"), exports);
__exportStar(require("./bTCommentInfo"), exports);
__exportStar(require("./bTCommentNotificationParams"), exports);
__exportStar(require("./bTCommentParams"), exports);
__exportStar(require("./bTCommentSubscriptionParams"), exports);
__exportStar(require("./bTCompanyActivateParams"), exports);
__exportStar(require("./bTCompanyNoPublicDocumentParams"), exports);
__exportStar(require("./bTCompanyParams"), exports);
__exportStar(require("./bTCompanyPoliciesParams"), exports);
__exportStar(require("./bTCompanySummaryInfo"), exports);
__exportStar(require("./bTCompanyTransferParams"), exports);
__exportStar(require("./bTCompanyUserParams"), exports);
__exportStar(require("./bTComponentUsagesSummary"), exports);
__exportStar(require("./bTConfigurationIdInfo"), exports);
__exportStar(require("./bTConfigurationInfo"), exports);
__exportStar(require("./bTConfigurationParams"), exports);
__exportStar(require("./bTConnection"), exports);
__exportStar(require("./bTCopyDocumentParams"), exports);
__exportStar(require("./bTCopyElementParams"), exports);
__exportStar(require("./bTCurveDescription"), exports);
__exportStar(require("./bTCustomPropertyDefinitionInfo"), exports);
__exportStar(require("./bTCustomPropertyDefinitionParams"), exports);
__exportStar(require("./bTDBViewerCollectionConfig"), exports);
__exportStar(require("./bTDBViewerConfig"), exports);
__exportStar(require("./bTDBViewerQueryParams"), exports);
__exportStar(require("./bTDeviceInfo"), exports);
__exportStar(require("./bTDeviceTokenParams"), exports);
__exportStar(require("./bTDiffInfo"), exports);
__exportStar(require("./bTDiscountInfo"), exports);
__exportStar(require("./bTDiscountParams"), exports);
__exportStar(require("./bTDocumentCheckAccessParams"), exports);
__exportStar(require("./bTDocumentElementInfo"), exports);
__exportStar(require("./bTDocumentInfo"), exports);
__exportStar(require("./bTDocumentLabelInfo"), exports);
__exportStar(require("./bTDocumentLabelParams"), exports);
__exportStar(require("./bTDocumentMicroversionInfo"), exports);
__exportStar(require("./bTDocumentMigrateParams"), exports);
__exportStar(require("./bTDocumentOptionsParams"), exports);
__exportStar(require("./bTDocumentParams"), exports);
__exportStar(require("./bTDocumentProcessingInfo"), exports);
__exportStar(require("./bTDocumentScope"), exports);
__exportStar(require("./bTDocumentSearchHitInfo"), exports);
__exportStar(require("./bTDocumentSearchParams"), exports);
__exportStar(require("./bTDocumentSummaryInfo"), exports);
__exportStar(require("./bTDocumentSummarySearchInfo"), exports);
__exportStar(require("./bTDocumentVersionElementIds"), exports);
__exportStar(require("./bTDocumentWithVersionAndElementId"), exports);
__exportStar(require("./bTDocumentWithVersionId"), exports);
__exportStar(require("./bTDrawingParams"), exports);
__exportStar(require("./bTESDocumentHit"), exports);
__exportStar(require("./bTElementLocationParams"), exports);
__exportStar(require("./bTElementParams"), exports);
__exportStar(require("./bTElementPropertiesParams"), exports);
__exportStar(require("./bTElementRenameParams"), exports);
__exportStar(require("./bTElementThumbnailDataParams"), exports);
__exportStar(require("./bTEnterpriseReportParams"), exports);
__exportStar(require("./bTExportModelBodiesResponse"), exports);
__exportStar(require("./bTExportModelBody"), exports);
__exportStar(require("./bTExportModelCoedge"), exports);
__exportStar(require("./bTExportModelEdge"), exports);
__exportStar(require("./bTExportModelEdgeGeometry"), exports);
__exportStar(require("./bTExportModelFace"), exports);
__exportStar(require("./bTExportModelLoop"), exports);
__exportStar(require("./bTExportModelParams"), exports);
__exportStar(require("./bTExportModelVertex"), exports);
__exportStar(require("./bTExportTessellatedEdgesBody"), exports);
__exportStar(require("./bTExportTessellatedEdgesEdge"), exports);
__exportStar(require("./bTExportTessellatedEdgesResponse"), exports);
__exportStar(require("./bTExportTessellatedFacesBody"), exports);
__exportStar(require("./bTExportTessellatedFacesFace"), exports);
__exportStar(require("./bTExportTessellatedFacesFacet"), exports);
__exportStar(require("./bTExportTessellatedFacesResponse"), exports);
__exportStar(require("./bTExtendTrialParams"), exports);
__exportStar(require("./bTExternalElementReferenceInfo"), exports);
__exportStar(require("./bTFSValue"), exports);
__exportStar(require("./bTFeatureDefinitionResponse"), exports);
__exportStar(require("./bTFeatureListResponse"), exports);
__exportStar(require("./bTFeatureScriptEvalCall"), exports);
__exportStar(require("./bTFeatureScriptEvalResponse"), exports);
__exportStar(require("./bTFeatureState"), exports);
__exportStar(require("./bTFolderInfo"), exports);
__exportStar(require("./bTFolderParams"), exports);
__exportStar(require("./bTFriendInfo"), exports);
__exportStar(require("./bTFriendsFromIdsParams"), exports);
__exportStar(require("./bTGlobalPermissionDefinitionsInfo"), exports);
__exportStar(require("./bTGlobalPermissionInfo"), exports);
__exportStar(require("./bTGlobalPermissionParams"), exports);
__exportStar(require("./bTGlobalTreeMagicNodeInfo"), exports);
__exportStar(require("./bTGlobalTreeNodeInfo"), exports);
__exportStar(require("./bTGlobalTreeNodeInfoListBTGlobalTreeNodeInfo"), exports);
__exportStar(require("./bTGlobalTreeNodeListResponse"), exports);
__exportStar(require("./bTGlobalTreeNodeMoveParams"), exports);
__exportStar(require("./bTGlobalTreeNodeOwnerParams"), exports);
__exportStar(require("./bTGlobalTreeNodeWithChildrenInfo"), exports);
__exportStar(require("./bTGraphicsAppearance"), exports);
__exportStar(require("./bTIdAndConfiguration"), exports);
__exportStar(require("./bTIdTranslationInfo"), exports);
__exportStar(require("./bTIdTranslationParams"), exports);
__exportStar(require("./bTIdTranslationResultInfo"), exports);
__exportStar(require("./bTIdentity"), exports);
__exportStar(require("./bTIdentityInfo"), exports);
__exportStar(require("./bTIdentityManagementParams"), exports);
__exportStar(require("./bTIdentityParams"), exports);
__exportStar(require("./bTImportCloudObjectParams"), exports);
__exportStar(require("./bTImportForeignDataParams"), exports);
__exportStar(require("./bTInAppMessageContent"), exports);
__exportStar(require("./bTInAppMessageContentItem"), exports);
__exportStar(require("./bTInAppMessageInfo"), exports);
__exportStar(require("./bTInAppMessageParams"), exports);
__exportStar(require("./bTInsertionLocation"), exports);
__exportStar(require("./bTInvitationParams"), exports);
__exportStar(require("./bTItemParams"), exports);
__exportStar(require("./bTLinkToLatestDocumentParams"), exports);
__exportStar(require("./bTListResponseBTBetaCapabilitySummaryInfo"), exports);
__exportStar(require("./bTListResponseBTBetaCapabilityUserInfo"), exports);
__exportStar(require("./bTListResponseBTCloudStorageProviderObjectInfo"), exports);
__exportStar(require("./bTListResponseBTFriendInfo"), exports);
__exportStar(require("./bTListResponseBTInAppMessageInfo"), exports);
__exportStar(require("./bTListResponseBTPurchaseInfo"), exports);
__exportStar(require("./bTListResponseBTStandardContentHierarchyInfo"), exports);
__exportStar(require("./bTListResponseBTSystemConfigInfo"), exports);
__exportStar(require("./bTLocationInfo"), exports);
__exportStar(require("./bTLoginParams"), exports);
__exportStar(require("./bTLoginTotpParams"), exports);
__exportStar(require("./bTMFeature"), exports);
__exportStar(require("./bTMImport"), exports);
__exportStar(require("./bTMParameter"), exports);
__exportStar(require("./bTMSuppressionState"), exports);
__exportStar(require("./bTMassPropResponse"), exports);
__exportStar(require("./bTMassProperties"), exports);
__exportStar(require("./bTMatchingStandardContentHierarchyInfo"), exports);
__exportStar(require("./bTMaterialParams"), exports);
__exportStar(require("./bTMaterialPropertyParams"), exports);
__exportStar(require("./bTMetadataEnumValueInfo"), exports);
__exportStar(require("./bTMetadataPropertyConfigParams"), exports);
__exportStar(require("./bTMetadataPropertyInfo"), exports);
__exportStar(require("./bTMetadataPropertyParams"), exports);
__exportStar(require("./bTMetadataPropertyUiHintsInfo"), exports);
__exportStar(require("./bTMetadataPropertyValidatorInfo"), exports);
__exportStar(require("./bTMetadataSchemaParams"), exports);
__exportStar(require("./bTMetricParams"), exports);
__exportStar(require("./bTMetricsListParams"), exports);
__exportStar(require("./bTMicroversionId"), exports);
__exportStar(require("./bTMobileNotificationParams"), exports);
__exportStar(require("./bTModelBodyParams"), exports);
__exportStar(require("./bTModelElementParams"), exports);
__exportStar(require("./bTModelFormatInfo"), exports);
__exportStar(require("./bTModelTessellationParams"), exports);
__exportStar(require("./bTMoveElementInfo"), exports);
__exportStar(require("./bTMoveElementParams"), exports);
__exportStar(require("./bTNameValuePair"), exports);
__exportStar(require("./bTNamedViewInfo"), exports);
__exportStar(require("./bTNamedViewsInfo"), exports);
__exportStar(require("./bTNextPartNumberParam"), exports);
__exportStar(require("./bTNextPartNumbersParam"), exports);
__exportStar(require("./bTNextRevisionParams"), exports);
__exportStar(require("./bTNodeReference"), exports);
__exportStar(require("./bTNodeStatus"), exports);
__exportStar(require("./bTNotice"), exports);
__exportStar(require("./bTNotificationDebugParams"), exports);
__exportStar(require("./bTNotificationParams"), exports);
__exportStar(require("./bTObjectId"), exports);
__exportStar(require("./bTOccurrence"), exports);
__exportStar(require("./bTOwnerInfo"), exports);
__exportStar(require("./bTPDMMetadataParams"), exports);
__exportStar(require("./bTPLiteralString"), exports);
__exportStar(require("./bTPModuleId"), exports);
__exportStar(require("./bTPNode"), exports);
__exportStar(require("./bTPSpace"), exports);
__exportStar(require("./bTPartAppearanceInfo"), exports);
__exportStar(require("./bTPartAppearanceParams"), exports);
__exportStar(require("./bTPartIdParams"), exports);
__exportStar(require("./bTPartMaterialInfo"), exports);
__exportStar(require("./bTPartMaterialPropertyInfo"), exports);
__exportStar(require("./bTPartMetadataInfo"), exports);
__exportStar(require("./bTPartQueryParams"), exports);
__exportStar(require("./bTPasswordResetParams"), exports);
__exportStar(require("./bTPaymentTypeParams"), exports);
__exportStar(require("./bTPermissionSet"), exports);
__exportStar(require("./bTPlanSubscriberInfo"), exports);
__exportStar(require("./bTProjectInfo"), exports);
__exportStar(require("./bTProjectParams"), exports);
__exportStar(require("./bTPropertyValueParam"), exports);
__exportStar(require("./bTPurchaseInfo"), exports);
__exportStar(require("./bTPurchaseParams"), exports);
__exportStar(require("./bTPurchaseUserInfo"), exports);
__exportStar(require("./bTPurchaseUserParams"), exports);
__exportStar(require("./bTQueryRevisionParams"), exports);
__exportStar(require("./bTRbacPermissionSchemeEntryParams"), exports);
__exportStar(require("./bTRbacPermissionSchemeInfo"), exports);
__exportStar(require("./bTRbacPermissionSchemeListInfo"), exports);
__exportStar(require("./bTRbacPermissionSchemeParams"), exports);
__exportStar(require("./bTRbacRoleInfo"), exports);
__exportStar(require("./bTRbacRoleParams"), exports);
__exportStar(require("./bTReleasePackageInfo"), exports);
__exportStar(require("./bTReleasePackageItem"), exports);
__exportStar(require("./bTReleasePackageItemError"), exports);
__exportStar(require("./bTReleasePackageItemInfo"), exports);
__exportStar(require("./bTReleasePackageItemParams"), exports);
__exportStar(require("./bTReleasePackageParams"), exports);
__exportStar(require("./bTReleasePackageWorkflowChangeParams"), exports);
__exportStar(require("./bTRepairContextParams"), exports);
__exportStar(require("./bTRevisionCustomData"), exports);
__exportStar(require("./bTRevisionParams"), exports);
__exportStar(require("./bTRevisionRuleInfo"), exports);
__exportStar(require("./bTRevisionRuleParams"), exports);
__exportStar(require("./bTRootDiffInfo"), exports);
__exportStar(require("./bTSeatsParams"), exports);
__exportStar(require("./bTSectionPlaneInfo"), exports);
__exportStar(require("./bTSendGridDeliveryEventParams"), exports);
__exportStar(require("./bTSettingInfo"), exports);
__exportStar(require("./bTSettingParam"), exports);
__exportStar(require("./bTShadedRenderDocumentResponse"), exports);
__exportStar(require("./bTShareEntryParams"), exports);
__exportStar(require("./bTShareParams"), exports);
__exportStar(require("./bTSimpleInfo"), exports);
__exportStar(require("./bTStandardContentCustomParameterDefinition"), exports);
__exportStar(require("./bTStandardContentCustomParameterDefinitionId"), exports);
__exportStar(require("./bTStandardContentCustomParameterParams"), exports);
__exportStar(require("./bTStandardContentFindUsageParams"), exports);
__exportStar(require("./bTStandardContentHierarchy"), exports);
__exportStar(require("./bTStandardContentHierarchyInfo"), exports);
__exportStar(require("./bTStandardContentHierarchyParams"), exports);
__exportStar(require("./bTStandardContentHierarchyRenameParams"), exports);
__exportStar(require("./bTStandardContentParameterDefinition"), exports);
__exportStar(require("./bTStandardContentParams"), exports);
__exportStar(require("./bTStandardContentSetRunVersionsParams"), exports);
__exportStar(require("./bTStandardContentUsageSummary"), exports);
__exportStar(require("./bTStartEditInContextParams"), exports);
__exportStar(require("./bTSubstituteApproverParams"), exports);
__exportStar(require("./bTSurfaceDescription"), exports);
__exportStar(require("./bTSurveyResponseParams"), exports);
__exportStar(require("./bTSystemConfigInfo"), exports);
__exportStar(require("./bTTagParams"), exports);
__exportStar(require("./bTTeamInfo"), exports);
__exportStar(require("./bTTeamMemberParams"), exports);
__exportStar(require("./bTTeamParams"), exports);
__exportStar(require("./bTTeamSummaryInfo"), exports);
__exportStar(require("./bTThumbnailInfo"), exports);
__exportStar(require("./bTThumbnailSizeInfo"), exports);
__exportStar(require("./bTToolTreeParams"), exports);
__exportStar(require("./bTToolTreeUpdateParams"), exports);
__exportStar(require("./bTTranslateFormatParams"), exports);
__exportStar(require("./bTTranslateInternalParams"), exports);
__exportStar(require("./bTTranslationRequestInfo"), exports);
__exportStar(require("./bTUniqueDocumentItemParams"), exports);
__exportStar(require("./bTUpdateDocumentThumbnailParams"), exports);
__exportStar(require("./bTUpdateElementThumbnailParams"), exports);
__exportStar(require("./bTUpdateExternalReferenceParams"), exports);
__exportStar(require("./bTUpdateInContextParams"), exports);
__exportStar(require("./bTUpdateRbacRoleParams"), exports);
__exportStar(require("./bTUpdateReferenceParams"), exports);
__exportStar(require("./bTUpdateReleasePackageParams"), exports);
__exportStar(require("./bTUpdateVersionThumbnailParams"), exports);
__exportStar(require("./bTUpgradeOnDemandParams"), exports);
__exportStar(require("./bTUploadParams"), exports);
__exportStar(require("./bTUploadStateParams"), exports);
__exportStar(require("./bTUserActivationParams"), exports);
__exportStar(require("./bTUserAgentVersion"), exports);
__exportStar(require("./bTUserAppSettingsInfo"), exports);
__exportStar(require("./bTUserAppSettingsParams"), exports);
__exportStar(require("./bTUserBasicSummaryInfo"), exports);
__exportStar(require("./bTUserEmailParams"), exports);
__exportStar(require("./bTUserEmailVerifyParams"), exports);
__exportStar(require("./bTUserNotificationPrefLevelsInfo"), exports);
__exportStar(require("./bTUserNotificationPrefParams"), exports);
__exportStar(require("./bTUserParams"), exports);
__exportStar(require("./bTUserSettingsParams"), exports);
__exportStar(require("./bTUserSummaryInfo"), exports);
__exportStar(require("./bTUserTotpParams"), exports);
__exportStar(require("./bTUserUpdateParams"), exports);
__exportStar(require("./bTUserUpdateSpecsParams"), exports);
__exportStar(require("./bTUserUsagesSummary"), exports);
__exportStar(require("./bTUserWebPreferencesParams"), exports);
__exportStar(require("./bTVector2d"), exports);
__exportStar(require("./bTVector3d"), exports);
__exportStar(require("./bTVersionInfo"), exports);
__exportStar(require("./bTVersionOrWorkspaceInfo"), exports);
__exportStar(require("./bTVersionOrWorkspaceParams"), exports);
__exportStar(require("./bTViewDataInfo"), exports);
__exportStar(require("./bTViewDataParams"), exports);
__exportStar(require("./bTWebClientCapabilitiesParams"), exports);
__exportStar(require("./bTWebRendererPerformanceMeasurementParams"), exports);
__exportStar(require("./bTWebhookOptions"), exports);
__exportStar(require("./bTWebhookParams"), exports);
__exportStar(require("./bTWorkflowInfo"), exports);
__exportStar(require("./bTWorkflowStateInfo"), exports);
__exportStar(require("./bTWorkspaceInfo"), exports);
__exportStar(require("./bTWorkspacePartParams"), exports);
__exportStar(require("./bodyPart"), exports);
__exportStar(require("./bodyPartHeaders"), exports);
__exportStar(require("./bodyPartMediaType"), exports);
__exportStar(require("./callback"), exports);
__exportStar(require("./card"), exports);
__exportStar(require("./clientLogEntry"), exports);
__exportStar(require("./cloudObjectPathSegment"), exports);
__exportStar(require("./components"), exports);
__exportStar(require("./configurationEntry"), exports);
__exportStar(require("./configurationInfoEntry"), exports);
__exportStar(require("./contact"), exports);
__exportStar(require("./content"), exports);
__exportStar(require("./contentDisposition"), exports);
__exportStar(require("./contentItem"), exports);
__exportStar(require("./coupon"), exports);
__exportStar(require("./customer"), exports);
__exportStar(require("./customerCardCollection"), exports);
__exportStar(require("./customerSubscriptionCollection"), exports);
__exportStar(require("./definition"), exports);
__exportStar(require("./discount"), exports);
__exportStar(require("./discriminator"), exports);
__exportStar(require("./encoding"), exports);
__exportStar(require("./entry"), exports);
__exportStar(require("./example"), exports);
__exportStar(require("./externalAccount"), exports);
__exportStar(require("./externalAccountCollection"), exports);
__exportStar(require("./externalDocumentation"), exports);
__exportStar(require("./formDataBodyPart"), exports);
__exportStar(require("./formDataContentDisposition"), exports);
__exportStar(require("./formDataMultiPart"), exports);
__exportStar(require("./globalPermissionInfo"), exports);
__exportStar(require("./header"), exports);
__exportStar(require("./info"), exports);
__exportStar(require("./item"), exports);
__exportStar(require("./jsonNode"), exports);
__exportStar(require("./levelInfo"), exports);
__exportStar(require("./license"), exports);
__exportStar(require("./link"), exports);
__exportStar(require("./mediaType"), exports);
__exportStar(require("./message"), exports);
__exportStar(require("./messageBodyWorkers"), exports);
__exportStar(require("./multiPart"), exports);
__exportStar(require("./nextCharge"), exports);
__exportStar(require("./nextRecurringCharge"), exports);
__exportStar(require("./oAuthFlow"), exports);
__exportStar(require("./oAuthFlowScopes"), exports);
__exportStar(require("./oAuthFlows"), exports);
__exportStar(require("./openAPI"), exports);
__exportStar(require("./operation"), exports);
__exportStar(require("./operationResponses"), exports);
__exportStar(require("./parameter"), exports);
__exportStar(require("./parameterizedHeader"), exports);
__exportStar(require("./pathItem"), exports);
__exportStar(require("./pathSegment"), exports);
__exportStar(require("./paths"), exports);
__exportStar(require("./plan"), exports);
__exportStar(require("./proratedCharges"), exports);
__exportStar(require("./requestBody"), exports);
__exportStar(require("./requestOptions"), exports);
__exportStar(require("./roleMapEntry"), exports);
__exportStar(require("./schema"), exports);
__exportStar(require("./scopes"), exports);
__exportStar(require("./securityRequirement"), exports);
__exportStar(require("./securityScheme"), exports);
__exportStar(require("./server"), exports);
__exportStar(require("./serverVariable"), exports);
__exportStar(require("./serverVariables"), exports);
__exportStar(require("./shippingDetails"), exports);
__exportStar(require("./subscription"), exports);
__exportStar(require("./subscriptionItem"), exports);
__exportStar(require("./subscriptionItemCollection"), exports);
__exportStar(require("./tag"), exports);
__exportStar(require("./threeDSecure"), exports);
__exportStar(require("./transformGroup"), exports);
__exportStar(require("./updateParams"), exports);
__exportStar(require("./versionSpecs"), exports);
__exportStar(require("./xML"), exports);
var address_1 = require("./address");
var apiResponse_1 = require("./apiResponse");
var apiResponses_1 = require("./apiResponses");
var bTAPIApplicationDeprecateParams_1 = require("./bTAPIApplicationDeprecateParams");
var bTAPIApplicationParams_1 = require("./bTAPIApplicationParams");
var bTAPIApplicationSummaryInfo_1 = require("./bTAPIApplicationSummaryInfo");
var bTAPIDeveloperParams_1 = require("./bTAPIDeveloperParams");
var bTAPIKeyParams_1 = require("./bTAPIKeyParams");
var bTAPIPartnerParams_1 = require("./bTAPIPartnerParams");
var bTAclParams_1 = require("./bTAclParams");
var bTActionInfo_1 = require("./bTActionInfo");
var bTAddFriendParams_1 = require("./bTAddFriendParams");
var bTAddressInfo_1 = require("./bTAddressInfo");
var bTAdminGroupParams_1 = require("./bTAdminGroupParams");
var bTAdminRoleParams_1 = require("./bTAdminRoleParams");
var bTAdminRolePermissionParams_1 = require("./bTAdminRolePermissionParams");
var bTAdminTaskParams_1 = require("./bTAdminTaskParams");
var bTAdminUserRoleParams_1 = require("./bTAdminUserRoleParams");
var bTAgreementParams_1 = require("./bTAgreementParams");
var bTApiKeyUpdateParams_1 = require("./bTApiKeyUpdateParams");
var bTAppAssociativeDataParamsArray_1 = require("./bTAppAssociativeDataParamsArray");
var bTAppElementChangeParams_1 = require("./bTAppElementChangeParams");
var bTAppElementCommitTransactionParams_1 = require("./bTAppElementCommitTransactionParams");
var bTAppElementContentDeltaInfo_1 = require("./bTAppElementContentDeltaInfo");
var bTAppElementContentEntryInfo_1 = require("./bTAppElementContentEntryInfo");
var bTAppElementContentInfo_1 = require("./bTAppElementContentInfo");
var bTAppElementHistoryEntryInfo_1 = require("./bTAppElementHistoryEntryInfo");
var bTAppElementHistoryInfo_1 = require("./bTAppElementHistoryInfo");
var bTAppElementModifyInfo_1 = require("./bTAppElementModifyInfo");
var bTAppElementParams_1 = require("./bTAppElementParams");
var bTAppElementReferenceInfo_1 = require("./bTAppElementReferenceInfo");
var bTAppElementReferenceParams_1 = require("./bTAppElementReferenceParams");
var bTAppElementReferenceResolveInfo_1 = require("./bTAppElementReferenceResolveInfo");
var bTAppElementStartTransactionParams_1 = require("./bTAppElementStartTransactionParams");
var bTAppElementUpdateParams_1 = require("./bTAppElementUpdateParams");
var bTAppViewParams_1 = require("./bTAppViewParams");
var bTApplicationElementThumbnailParams_1 = require("./bTApplicationElementThumbnailParams");
var bTApplicationElementThumbnailParamsArray_1 = require("./bTApplicationElementThumbnailParamsArray");
var bTApproveTranslationDebugParams_1 = require("./bTApproveTranslationDebugParams");
var bTAssemblyInstanceDefinitionParams_1 = require("./bTAssemblyInstanceDefinitionParams");
var bTAssemblyTransformDefinitionParams_1 = require("./bTAssemblyTransformDefinitionParams");
var bTAssemblyTransformedInstancesDefinitionParams_1 = require("./bTAssemblyTransformedInstancesDefinitionParams");
var bTAssociativeDataParams_1 = require("./bTAssociativeDataParams");
var bTAssociativeFieldParams_1 = require("./bTAssociativeFieldParams");
var bTAutoPartNumberingSchemeParams_1 = require("./bTAutoPartNumberingSchemeParams");
var bTBaseInfo_1 = require("./bTBaseInfo");
var bTBelScriptLibraryVersion_1 = require("./bTBelScriptLibraryVersion");
var bTBetaCapabilityAdminInfo_1 = require("./bTBetaCapabilityAdminInfo");
var bTBetaCapabilityImportInfo_1 = require("./bTBetaCapabilityImportInfo");
var bTBetaCapabilityInfo_1 = require("./bTBetaCapabilityInfo");
var bTBetaCapabilityMetricsInfo_1 = require("./bTBetaCapabilityMetricsInfo");
var bTBetaCapabilityParams_1 = require("./bTBetaCapabilityParams");
var bTBetaCapabilitySummaryInfo_1 = require("./bTBetaCapabilitySummaryInfo");
var bTBetaCapabilityUserInfo_1 = require("./bTBetaCapabilityUserInfo");
var bTBillingAccountParams_1 = require("./bTBillingAccountParams");
var bTBillingAllowedPlansInfo_1 = require("./bTBillingAllowedPlansInfo");
var bTBillingPlanBatchParams_1 = require("./bTBillingPlanBatchParams");
var bTBillingPlanInfo_1 = require("./bTBillingPlanInfo");
var bTBillingPlanParams_1 = require("./bTBillingPlanParams");
var bTBillingPlanSummaryInfo_1 = require("./bTBillingPlanSummaryInfo");
var bTBoundingBox_1 = require("./bTBoundingBox");
var bTBoundingBoxParams_1 = require("./bTBoundingBoxParams");
var bTBrokenOutEndCondition_1 = require("./bTBrokenOutEndCondition");
var bTBulkDocumentUpdateParams_1 = require("./bTBulkDocumentUpdateParams");
var bTCacheInfo_1 = require("./bTCacheInfo");
var bTCampaignParams_1 = require("./bTCampaignParams");
var bTCapabilityCheckParams_1 = require("./bTCapabilityCheckParams");
var bTCapabilityParams_1 = require("./bTCapabilityParams");
var bTCapabilityRuleParams_1 = require("./bTCapabilityRuleParams");
var bTCapableInfo_1 = require("./bTCapableInfo");
var bTCardInfo_1 = require("./bTCardInfo");
var bTCardParams_1 = require("./bTCardParams");
var bTChangeContextParams_1 = require("./bTChangeContextParams");
var bTCloudStorageAccountInfo_1 = require("./bTCloudStorageAccountInfo");
var bTCloudStorageAccountListInfo_1 = require("./bTCloudStorageAccountListInfo");
var bTCloudStorageObjectInfo_1 = require("./bTCloudStorageObjectInfo");
var bTCloudStorageObjectListInfo_1 = require("./bTCloudStorageObjectListInfo");
var bTCloudStorageProviderObjectInfo_1 = require("./bTCloudStorageProviderObjectInfo");
var bTColorInfo_1 = require("./bTColorInfo");
var bTColorParams_1 = require("./bTColorParams");
var bTCommentAttachmentInfo_1 = require("./bTCommentAttachmentInfo");
var bTCommentInfo_1 = require("./bTCommentInfo");
var bTCommentNotificationParams_1 = require("./bTCommentNotificationParams");
var bTCommentParams_1 = require("./bTCommentParams");
var bTCommentSubscriptionParams_1 = require("./bTCommentSubscriptionParams");
var bTCompanyActivateParams_1 = require("./bTCompanyActivateParams");
var bTCompanyNoPublicDocumentParams_1 = require("./bTCompanyNoPublicDocumentParams");
var bTCompanyParams_1 = require("./bTCompanyParams");
var bTCompanyPoliciesParams_1 = require("./bTCompanyPoliciesParams");
var bTCompanySummaryInfo_1 = require("./bTCompanySummaryInfo");
var bTCompanyTransferParams_1 = require("./bTCompanyTransferParams");
var bTCompanyUserParams_1 = require("./bTCompanyUserParams");
var bTComponentUsagesSummary_1 = require("./bTComponentUsagesSummary");
var bTConfigurationIdInfo_1 = require("./bTConfigurationIdInfo");
var bTConfigurationInfo_1 = require("./bTConfigurationInfo");
var bTConfigurationParams_1 = require("./bTConfigurationParams");
var bTConnection_1 = require("./bTConnection");
var bTCopyDocumentParams_1 = require("./bTCopyDocumentParams");
var bTCopyElementParams_1 = require("./bTCopyElementParams");
var bTCurveDescription_1 = require("./bTCurveDescription");
var bTCustomPropertyDefinitionInfo_1 = require("./bTCustomPropertyDefinitionInfo");
var bTCustomPropertyDefinitionParams_1 = require("./bTCustomPropertyDefinitionParams");
var bTDBViewerCollectionConfig_1 = require("./bTDBViewerCollectionConfig");
var bTDBViewerConfig_1 = require("./bTDBViewerConfig");
var bTDBViewerQueryParams_1 = require("./bTDBViewerQueryParams");
var bTDeviceInfo_1 = require("./bTDeviceInfo");
var bTDeviceTokenParams_1 = require("./bTDeviceTokenParams");
var bTDiffInfo_1 = require("./bTDiffInfo");
var bTDiscountInfo_1 = require("./bTDiscountInfo");
var bTDiscountParams_1 = require("./bTDiscountParams");
var bTDocumentCheckAccessParams_1 = require("./bTDocumentCheckAccessParams");
var bTDocumentElementInfo_1 = require("./bTDocumentElementInfo");
var bTDocumentInfo_1 = require("./bTDocumentInfo");
var bTDocumentLabelInfo_1 = require("./bTDocumentLabelInfo");
var bTDocumentLabelParams_1 = require("./bTDocumentLabelParams");
var bTDocumentMicroversionInfo_1 = require("./bTDocumentMicroversionInfo");
var bTDocumentMigrateParams_1 = require("./bTDocumentMigrateParams");
var bTDocumentOptionsParams_1 = require("./bTDocumentOptionsParams");
var bTDocumentParams_1 = require("./bTDocumentParams");
var bTDocumentProcessingInfo_1 = require("./bTDocumentProcessingInfo");
var bTDocumentScope_1 = require("./bTDocumentScope");
var bTDocumentSearchHitInfo_1 = require("./bTDocumentSearchHitInfo");
var bTDocumentSearchParams_1 = require("./bTDocumentSearchParams");
var bTDocumentSummaryInfo_1 = require("./bTDocumentSummaryInfo");
var bTDocumentSummarySearchInfo_1 = require("./bTDocumentSummarySearchInfo");
var bTDocumentVersionElementIds_1 = require("./bTDocumentVersionElementIds");
var bTDocumentWithVersionAndElementId_1 = require("./bTDocumentWithVersionAndElementId");
var bTDocumentWithVersionId_1 = require("./bTDocumentWithVersionId");
var bTDrawingParams_1 = require("./bTDrawingParams");
var bTESDocumentHit_1 = require("./bTESDocumentHit");
var bTElementLocationParams_1 = require("./bTElementLocationParams");
var bTElementParams_1 = require("./bTElementParams");
var bTElementPropertiesParams_1 = require("./bTElementPropertiesParams");
var bTElementRenameParams_1 = require("./bTElementRenameParams");
var bTElementThumbnailDataParams_1 = require("./bTElementThumbnailDataParams");
var bTEnterpriseReportParams_1 = require("./bTEnterpriseReportParams");
var bTExportModelBodiesResponse_1 = require("./bTExportModelBodiesResponse");
var bTExportModelBody_1 = require("./bTExportModelBody");
var bTExportModelCoedge_1 = require("./bTExportModelCoedge");
var bTExportModelEdge_1 = require("./bTExportModelEdge");
var bTExportModelEdgeGeometry_1 = require("./bTExportModelEdgeGeometry");
var bTExportModelFace_1 = require("./bTExportModelFace");
var bTExportModelLoop_1 = require("./bTExportModelLoop");
var bTExportModelParams_1 = require("./bTExportModelParams");
var bTExportModelVertex_1 = require("./bTExportModelVertex");
var bTExportTessellatedEdgesBody_1 = require("./bTExportTessellatedEdgesBody");
var bTExportTessellatedEdgesEdge_1 = require("./bTExportTessellatedEdgesEdge");
var bTExportTessellatedEdgesResponse_1 = require("./bTExportTessellatedEdgesResponse");
var bTExportTessellatedFacesBody_1 = require("./bTExportTessellatedFacesBody");
var bTExportTessellatedFacesFace_1 = require("./bTExportTessellatedFacesFace");
var bTExportTessellatedFacesFacet_1 = require("./bTExportTessellatedFacesFacet");
var bTExportTessellatedFacesResponse_1 = require("./bTExportTessellatedFacesResponse");
var bTExtendTrialParams_1 = require("./bTExtendTrialParams");
var bTExternalElementReferenceInfo_1 = require("./bTExternalElementReferenceInfo");
var bTFSValue_1 = require("./bTFSValue");
var bTFeatureDefinitionResponse_1 = require("./bTFeatureDefinitionResponse");
var bTFeatureListResponse_1 = require("./bTFeatureListResponse");
var bTFeatureScriptEvalCall_1 = require("./bTFeatureScriptEvalCall");
var bTFeatureScriptEvalResponse_1 = require("./bTFeatureScriptEvalResponse");
var bTFeatureState_1 = require("./bTFeatureState");
var bTFolderInfo_1 = require("./bTFolderInfo");
var bTFolderParams_1 = require("./bTFolderParams");
var bTFriendInfo_1 = require("./bTFriendInfo");
var bTFriendsFromIdsParams_1 = require("./bTFriendsFromIdsParams");
var bTGlobalPermissionDefinitionsInfo_1 = require("./bTGlobalPermissionDefinitionsInfo");
var bTGlobalPermissionInfo_1 = require("./bTGlobalPermissionInfo");
var bTGlobalPermissionParams_1 = require("./bTGlobalPermissionParams");
var bTGlobalTreeMagicNodeInfo_1 = require("./bTGlobalTreeMagicNodeInfo");
var bTGlobalTreeNodeInfo_1 = require("./bTGlobalTreeNodeInfo");
var bTGlobalTreeNodeInfoListBTGlobalTreeNodeInfo_1 = require("./bTGlobalTreeNodeInfoListBTGlobalTreeNodeInfo");
var bTGlobalTreeNodeListResponse_1 = require("./bTGlobalTreeNodeListResponse");
var bTGlobalTreeNodeMoveParams_1 = require("./bTGlobalTreeNodeMoveParams");
var bTGlobalTreeNodeOwnerParams_1 = require("./bTGlobalTreeNodeOwnerParams");
var bTGlobalTreeNodeWithChildrenInfo_1 = require("./bTGlobalTreeNodeWithChildrenInfo");
var bTGraphicsAppearance_1 = require("./bTGraphicsAppearance");
var bTIdAndConfiguration_1 = require("./bTIdAndConfiguration");
var bTIdTranslationInfo_1 = require("./bTIdTranslationInfo");
var bTIdTranslationParams_1 = require("./bTIdTranslationParams");
var bTIdTranslationResultInfo_1 = require("./bTIdTranslationResultInfo");
var bTIdentity_1 = require("./bTIdentity");
var bTIdentityInfo_1 = require("./bTIdentityInfo");
var bTIdentityManagementParams_1 = require("./bTIdentityManagementParams");
var bTIdentityParams_1 = require("./bTIdentityParams");
var bTImportCloudObjectParams_1 = require("./bTImportCloudObjectParams");
var bTImportForeignDataParams_1 = require("./bTImportForeignDataParams");
var bTInAppMessageContent_1 = require("./bTInAppMessageContent");
var bTInAppMessageContentItem_1 = require("./bTInAppMessageContentItem");
var bTInAppMessageInfo_1 = require("./bTInAppMessageInfo");
var bTInAppMessageParams_1 = require("./bTInAppMessageParams");
var bTInsertionLocation_1 = require("./bTInsertionLocation");
var bTInvitationParams_1 = require("./bTInvitationParams");
var bTItemParams_1 = require("./bTItemParams");
var bTLinkToLatestDocumentParams_1 = require("./bTLinkToLatestDocumentParams");
var bTListResponseBTBetaCapabilitySummaryInfo_1 = require("./bTListResponseBTBetaCapabilitySummaryInfo");
var bTListResponseBTBetaCapabilityUserInfo_1 = require("./bTListResponseBTBetaCapabilityUserInfo");
var bTListResponseBTCloudStorageProviderObjectInfo_1 = require("./bTListResponseBTCloudStorageProviderObjectInfo");
var bTListResponseBTFriendInfo_1 = require("./bTListResponseBTFriendInfo");
var bTListResponseBTInAppMessageInfo_1 = require("./bTListResponseBTInAppMessageInfo");
var bTListResponseBTPurchaseInfo_1 = require("./bTListResponseBTPurchaseInfo");
var bTListResponseBTStandardContentHierarchyInfo_1 = require("./bTListResponseBTStandardContentHierarchyInfo");
var bTListResponseBTSystemConfigInfo_1 = require("./bTListResponseBTSystemConfigInfo");
var bTLocationInfo_1 = require("./bTLocationInfo");
var bTLoginParams_1 = require("./bTLoginParams");
var bTLoginTotpParams_1 = require("./bTLoginTotpParams");
var bTMFeature_1 = require("./bTMFeature");
var bTMImport_1 = require("./bTMImport");
var bTMParameter_1 = require("./bTMParameter");
var bTMSuppressionState_1 = require("./bTMSuppressionState");
var bTMassPropResponse_1 = require("./bTMassPropResponse");
var bTMassProperties_1 = require("./bTMassProperties");
var bTMatchingStandardContentHierarchyInfo_1 = require("./bTMatchingStandardContentHierarchyInfo");
var bTMaterialParams_1 = require("./bTMaterialParams");
var bTMaterialPropertyParams_1 = require("./bTMaterialPropertyParams");
var bTMetadataEnumValueInfo_1 = require("./bTMetadataEnumValueInfo");
var bTMetadataPropertyConfigParams_1 = require("./bTMetadataPropertyConfigParams");
var bTMetadataPropertyInfo_1 = require("./bTMetadataPropertyInfo");
var bTMetadataPropertyParams_1 = require("./bTMetadataPropertyParams");
var bTMetadataPropertyUiHintsInfo_1 = require("./bTMetadataPropertyUiHintsInfo");
var bTMetadataPropertyValidatorInfo_1 = require("./bTMetadataPropertyValidatorInfo");
var bTMetadataSchemaParams_1 = require("./bTMetadataSchemaParams");
var bTMetricParams_1 = require("./bTMetricParams");
var bTMetricsListParams_1 = require("./bTMetricsListParams");
var bTMicroversionId_1 = require("./bTMicroversionId");
var bTMobileNotificationParams_1 = require("./bTMobileNotificationParams");
var bTModelBodyParams_1 = require("./bTModelBodyParams");
var bTModelElementParams_1 = require("./bTModelElementParams");
var bTModelFormatInfo_1 = require("./bTModelFormatInfo");
var bTModelTessellationParams_1 = require("./bTModelTessellationParams");
var bTMoveElementInfo_1 = require("./bTMoveElementInfo");
var bTMoveElementParams_1 = require("./bTMoveElementParams");
var bTNameValuePair_1 = require("./bTNameValuePair");
var bTNamedViewInfo_1 = require("./bTNamedViewInfo");
var bTNamedViewsInfo_1 = require("./bTNamedViewsInfo");
var bTNextPartNumberParam_1 = require("./bTNextPartNumberParam");
var bTNextPartNumbersParam_1 = require("./bTNextPartNumbersParam");
var bTNextRevisionParams_1 = require("./bTNextRevisionParams");
var bTNodeReference_1 = require("./bTNodeReference");
var bTNodeStatus_1 = require("./bTNodeStatus");
var bTNotice_1 = require("./bTNotice");
var bTNotificationDebugParams_1 = require("./bTNotificationDebugParams");
var bTNotificationParams_1 = require("./bTNotificationParams");
var bTObjectId_1 = require("./bTObjectId");
var bTOccurrence_1 = require("./bTOccurrence");
var bTOwnerInfo_1 = require("./bTOwnerInfo");
var bTPDMMetadataParams_1 = require("./bTPDMMetadataParams");
var bTPLiteralString_1 = require("./bTPLiteralString");
var bTPModuleId_1 = require("./bTPModuleId");
var bTPNode_1 = require("./bTPNode");
var bTPSpace_1 = require("./bTPSpace");
var bTPartAppearanceInfo_1 = require("./bTPartAppearanceInfo");
var bTPartAppearanceParams_1 = require("./bTPartAppearanceParams");
var bTPartIdParams_1 = require("./bTPartIdParams");
var bTPartMaterialInfo_1 = require("./bTPartMaterialInfo");
var bTPartMaterialPropertyInfo_1 = require("./bTPartMaterialPropertyInfo");
var bTPartMetadataInfo_1 = require("./bTPartMetadataInfo");
var bTPartQueryParams_1 = require("./bTPartQueryParams");
var bTPasswordResetParams_1 = require("./bTPasswordResetParams");
var bTPaymentTypeParams_1 = require("./bTPaymentTypeParams");
var bTPermissionSet_1 = require("./bTPermissionSet");
var bTPlanSubscriberInfo_1 = require("./bTPlanSubscriberInfo");
var bTProjectInfo_1 = require("./bTProjectInfo");
var bTProjectParams_1 = require("./bTProjectParams");
var bTPropertyValueParam_1 = require("./bTPropertyValueParam");
var bTPurchaseInfo_1 = require("./bTPurchaseInfo");
var bTPurchaseParams_1 = require("./bTPurchaseParams");
var bTPurchaseUserInfo_1 = require("./bTPurchaseUserInfo");
var bTPurchaseUserParams_1 = require("./bTPurchaseUserParams");
var bTQueryRevisionParams_1 = require("./bTQueryRevisionParams");
var bTRbacPermissionSchemeEntryParams_1 = require("./bTRbacPermissionSchemeEntryParams");
var bTRbacPermissionSchemeInfo_1 = require("./bTRbacPermissionSchemeInfo");
var bTRbacPermissionSchemeListInfo_1 = require("./bTRbacPermissionSchemeListInfo");
var bTRbacPermissionSchemeParams_1 = require("./bTRbacPermissionSchemeParams");
var bTRbacRoleInfo_1 = require("./bTRbacRoleInfo");
var bTRbacRoleParams_1 = require("./bTRbacRoleParams");
var bTReleasePackageInfo_1 = require("./bTReleasePackageInfo");
var bTReleasePackageItem_1 = require("./bTReleasePackageItem");
var bTReleasePackageItemError_1 = require("./bTReleasePackageItemError");
var bTReleasePackageItemInfo_1 = require("./bTReleasePackageItemInfo");
var bTReleasePackageItemParams_1 = require("./bTReleasePackageItemParams");
var bTReleasePackageParams_1 = require("./bTReleasePackageParams");
var bTReleasePackageWorkflowChangeParams_1 = require("./bTReleasePackageWorkflowChangeParams");
var bTRepairContextParams_1 = require("./bTRepairContextParams");
var bTRevisionCustomData_1 = require("./bTRevisionCustomData");
var bTRevisionParams_1 = require("./bTRevisionParams");
var bTRevisionRuleInfo_1 = require("./bTRevisionRuleInfo");
var bTRevisionRuleParams_1 = require("./bTRevisionRuleParams");
var bTRootDiffInfo_1 = require("./bTRootDiffInfo");
var bTSeatsParams_1 = require("./bTSeatsParams");
var bTSectionPlaneInfo_1 = require("./bTSectionPlaneInfo");
var bTSendGridDeliveryEventParams_1 = require("./bTSendGridDeliveryEventParams");
var bTSettingInfo_1 = require("./bTSettingInfo");
var bTSettingParam_1 = require("./bTSettingParam");
var bTShadedRenderDocumentResponse_1 = require("./bTShadedRenderDocumentResponse");
var bTShareEntryParams_1 = require("./bTShareEntryParams");
var bTShareParams_1 = require("./bTShareParams");
var bTSimpleInfo_1 = require("./bTSimpleInfo");
var bTStandardContentCustomParameterDefinition_1 = require("./bTStandardContentCustomParameterDefinition");
var bTStandardContentCustomParameterDefinitionId_1 = require("./bTStandardContentCustomParameterDefinitionId");
var bTStandardContentCustomParameterParams_1 = require("./bTStandardContentCustomParameterParams");
var bTStandardContentFindUsageParams_1 = require("./bTStandardContentFindUsageParams");
var bTStandardContentHierarchy_1 = require("./bTStandardContentHierarchy");
var bTStandardContentHierarchyInfo_1 = require("./bTStandardContentHierarchyInfo");
var bTStandardContentHierarchyParams_1 = require("./bTStandardContentHierarchyParams");
var bTStandardContentHierarchyRenameParams_1 = require("./bTStandardContentHierarchyRenameParams");
var bTStandardContentParameterDefinition_1 = require("./bTStandardContentParameterDefinition");
var bTStandardContentParams_1 = require("./bTStandardContentParams");
var bTStandardContentSetRunVersionsParams_1 = require("./bTStandardContentSetRunVersionsParams");
var bTStandardContentUsageSummary_1 = require("./bTStandardContentUsageSummary");
var bTStartEditInContextParams_1 = require("./bTStartEditInContextParams");
var bTSubstituteApproverParams_1 = require("./bTSubstituteApproverParams");
var bTSurfaceDescription_1 = require("./bTSurfaceDescription");
var bTSurveyResponseParams_1 = require("./bTSurveyResponseParams");
var bTSystemConfigInfo_1 = require("./bTSystemConfigInfo");
var bTTagParams_1 = require("./bTTagParams");
var bTTeamInfo_1 = require("./bTTeamInfo");
var bTTeamMemberParams_1 = require("./bTTeamMemberParams");
var bTTeamParams_1 = require("./bTTeamParams");
var bTTeamSummaryInfo_1 = require("./bTTeamSummaryInfo");
var bTThumbnailInfo_1 = require("./bTThumbnailInfo");
var bTThumbnailSizeInfo_1 = require("./bTThumbnailSizeInfo");
var bTToolTreeParams_1 = require("./bTToolTreeParams");
var bTToolTreeUpdateParams_1 = require("./bTToolTreeUpdateParams");
var bTTranslateFormatParams_1 = require("./bTTranslateFormatParams");
var bTTranslateInternalParams_1 = require("./bTTranslateInternalParams");
var bTTranslationRequestInfo_1 = require("./bTTranslationRequestInfo");
var bTUniqueDocumentItemParams_1 = require("./bTUniqueDocumentItemParams");
var bTUpdateDocumentThumbnailParams_1 = require("./bTUpdateDocumentThumbnailParams");
var bTUpdateElementThumbnailParams_1 = require("./bTUpdateElementThumbnailParams");
var bTUpdateExternalReferenceParams_1 = require("./bTUpdateExternalReferenceParams");
var bTUpdateInContextParams_1 = require("./bTUpdateInContextParams");
var bTUpdateRbacRoleParams_1 = require("./bTUpdateRbacRoleParams");
var bTUpdateReferenceParams_1 = require("./bTUpdateReferenceParams");
var bTUpdateReleasePackageParams_1 = require("./bTUpdateReleasePackageParams");
var bTUpdateVersionThumbnailParams_1 = require("./bTUpdateVersionThumbnailParams");
var bTUpgradeOnDemandParams_1 = require("./bTUpgradeOnDemandParams");
var bTUploadParams_1 = require("./bTUploadParams");
var bTUploadStateParams_1 = require("./bTUploadStateParams");
var bTUserActivationParams_1 = require("./bTUserActivationParams");
var bTUserAgentVersion_1 = require("./bTUserAgentVersion");
var bTUserAppSettingsInfo_1 = require("./bTUserAppSettingsInfo");
var bTUserAppSettingsParams_1 = require("./bTUserAppSettingsParams");
var bTUserBasicSummaryInfo_1 = require("./bTUserBasicSummaryInfo");
var bTUserEmailParams_1 = require("./bTUserEmailParams");
var bTUserEmailVerifyParams_1 = require("./bTUserEmailVerifyParams");
var bTUserNotificationPrefLevelsInfo_1 = require("./bTUserNotificationPrefLevelsInfo");
var bTUserNotificationPrefParams_1 = require("./bTUserNotificationPrefParams");
var bTUserParams_1 = require("./bTUserParams");
var bTUserSettingsParams_1 = require("./bTUserSettingsParams");
var bTUserSummaryInfo_1 = require("./bTUserSummaryInfo");
var bTUserTotpParams_1 = require("./bTUserTotpParams");
var bTUserUpdateParams_1 = require("./bTUserUpdateParams");
var bTUserUpdateSpecsParams_1 = require("./bTUserUpdateSpecsParams");
var bTUserUsagesSummary_1 = require("./bTUserUsagesSummary");
var bTUserWebPreferencesParams_1 = require("./bTUserWebPreferencesParams");
var bTVector2d_1 = require("./bTVector2d");
var bTVector3d_1 = require("./bTVector3d");
var bTVersionInfo_1 = require("./bTVersionInfo");
var bTVersionOrWorkspaceInfo_1 = require("./bTVersionOrWorkspaceInfo");
var bTVersionOrWorkspaceParams_1 = require("./bTVersionOrWorkspaceParams");
var bTViewDataInfo_1 = require("./bTViewDataInfo");
var bTViewDataParams_1 = require("./bTViewDataParams");
var bTWebClientCapabilitiesParams_1 = require("./bTWebClientCapabilitiesParams");
var bTWebRendererPerformanceMeasurementParams_1 = require("./bTWebRendererPerformanceMeasurementParams");
var bTWebhookOptions_1 = require("./bTWebhookOptions");
var bTWebhookParams_1 = require("./bTWebhookParams");
var bTWorkflowInfo_1 = require("./bTWorkflowInfo");
var bTWorkflowStateInfo_1 = require("./bTWorkflowStateInfo");
var bTWorkspaceInfo_1 = require("./bTWorkspaceInfo");
var bTWorkspacePartParams_1 = require("./bTWorkspacePartParams");
var bodyPart_1 = require("./bodyPart");
var bodyPartHeaders_1 = require("./bodyPartHeaders");
var bodyPartMediaType_1 = require("./bodyPartMediaType");
var callback_1 = require("./callback");
var card_1 = require("./card");
var clientLogEntry_1 = require("./clientLogEntry");
var cloudObjectPathSegment_1 = require("./cloudObjectPathSegment");
var components_1 = require("./components");
var configurationEntry_1 = require("./configurationEntry");
var configurationInfoEntry_1 = require("./configurationInfoEntry");
var contact_1 = require("./contact");
var content_1 = require("./content");
var contentDisposition_1 = require("./contentDisposition");
var contentItem_1 = require("./contentItem");
var coupon_1 = require("./coupon");
var customer_1 = require("./customer");
var customerCardCollection_1 = require("./customerCardCollection");
var customerSubscriptionCollection_1 = require("./customerSubscriptionCollection");
var definition_1 = require("./definition");
var discount_1 = require("./discount");
var discriminator_1 = require("./discriminator");
var encoding_1 = require("./encoding");
var entry_1 = require("./entry");
var example_1 = require("./example");
var externalAccount_1 = require("./externalAccount");
var externalAccountCollection_1 = require("./externalAccountCollection");
var externalDocumentation_1 = require("./externalDocumentation");
var formDataBodyPart_1 = require("./formDataBodyPart");
var formDataContentDisposition_1 = require("./formDataContentDisposition");
var formDataMultiPart_1 = require("./formDataMultiPart");
var globalPermissionInfo_1 = require("./globalPermissionInfo");
var header_1 = require("./header");
var info_1 = require("./info");
var item_1 = require("./item");
var jsonNode_1 = require("./jsonNode");
var levelInfo_1 = require("./levelInfo");
var license_1 = require("./license");
var link_1 = require("./link");
var mediaType_1 = require("./mediaType");
var message_1 = require("./message");
var messageBodyWorkers_1 = require("./messageBodyWorkers");
var multiPart_1 = require("./multiPart");
var nextCharge_1 = require("./nextCharge");
var nextRecurringCharge_1 = require("./nextRecurringCharge");
var oAuthFlow_1 = require("./oAuthFlow");
var oAuthFlowScopes_1 = require("./oAuthFlowScopes");
var oAuthFlows_1 = require("./oAuthFlows");
var openAPI_1 = require("./openAPI");
var operation_1 = require("./operation");
var operationResponses_1 = require("./operationResponses");
var parameter_1 = require("./parameter");
var parameterizedHeader_1 = require("./parameterizedHeader");
var pathItem_1 = require("./pathItem");
var pathSegment_1 = require("./pathSegment");
var paths_1 = require("./paths");
var plan_1 = require("./plan");
var proratedCharges_1 = require("./proratedCharges");
var requestBody_1 = require("./requestBody");
var requestOptions_1 = require("./requestOptions");
var roleMapEntry_1 = require("./roleMapEntry");
var schema_1 = require("./schema");
var scopes_1 = require("./scopes");
var securityRequirement_1 = require("./securityRequirement");
var securityScheme_1 = require("./securityScheme");
var server_1 = require("./server");
var serverVariable_1 = require("./serverVariable");
var serverVariables_1 = require("./serverVariables");
var shippingDetails_1 = require("./shippingDetails");
var subscription_1 = require("./subscription");
var subscriptionItem_1 = require("./subscriptionItem");
var subscriptionItemCollection_1 = require("./subscriptionItemCollection");
var tag_1 = require("./tag");
var threeDSecure_1 = require("./threeDSecure");
var transformGroup_1 = require("./transformGroup");
var updateParams_1 = require("./updateParams");
var versionSpecs_1 = require("./versionSpecs");
var xML_1 = require("./xML");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "BTAppElementContentInfo.ErrorValueEnum": bTAppElementContentInfo_1.BTAppElementContentInfo.ErrorValueEnum,
    "BTAppElementHistoryInfo.ErrorValueEnum": bTAppElementHistoryInfo_1.BTAppElementHistoryInfo.ErrorValueEnum,
    "BTAppElementModifyInfo.ErrorValueEnum": bTAppElementModifyInfo_1.BTAppElementModifyInfo.ErrorValueEnum,
    "BTAppElementReferenceInfo.ErrorValueEnum": bTAppElementReferenceInfo_1.BTAppElementReferenceInfo.ErrorValueEnum,
    "BTAppElementReferenceResolveInfo.ErrorValueEnum": bTAppElementReferenceResolveInfo_1.BTAppElementReferenceResolveInfo.ErrorValueEnum,
    "BTAppViewParams.HiddenLinesEnum": bTAppViewParams_1.BTAppViewParams.HiddenLinesEnum,
    "BTAssociativeDataParams.TypeEnum": bTAssociativeDataParams_1.BTAssociativeDataParams.TypeEnum,
    "BTAssociativeDataParams.OperationEnum": bTAssociativeDataParams_1.BTAssociativeDataParams.OperationEnum,
    "BTCommentNotificationParams.ActionEnum": bTCommentNotificationParams_1.BTCommentNotificationParams.ActionEnum,
    "BTCurveDescription.TypeEnum": bTCurveDescription_1.BTCurveDescription.TypeEnum,
    "BTCustomPropertyDefinitionInfo.TypeEnum": bTCustomPropertyDefinitionInfo_1.BTCustomPropertyDefinitionInfo.TypeEnum,
    "BTCustomPropertyDefinitionParams.TypeEnum": bTCustomPropertyDefinitionParams_1.BTCustomPropertyDefinitionParams.TypeEnum,
    "BTDeviceInfo.ClientTypeEnum": bTDeviceInfo_1.BTDeviceInfo.ClientTypeEnum,
    "BTDeviceInfo.OperatingSystemEnum": bTDeviceInfo_1.BTDeviceInfo.OperatingSystemEnum,
    "BTDeviceInfo.BrowserEnum": bTDeviceInfo_1.BTDeviceInfo.BrowserEnum,
    "BTDiffInfo.TypeEnum": bTDiffInfo_1.BTDiffInfo.TypeEnum,
    "BTDocumentElementInfo.ElementTypeEnum": bTDocumentElementInfo_1.BTDocumentElementInfo.ElementTypeEnum,
    "BTDocumentSearchParams.FoundInEnum": bTDocumentSearchParams_1.BTDocumentSearchParams.FoundInEnum,
    "BTDocumentSearchParams.WhenEnum": bTDocumentSearchParams_1.BTDocumentSearchParams.WhenEnum,
    "BTDrawingParams.HiddenLinesEnum": bTDrawingParams_1.BTDrawingParams.HiddenLinesEnum,
    "BTElementParams.FormatEnum": bTElementParams_1.BTElementParams.FormatEnum,
    "BTExportModelBodiesResponse.ErrorEnumEnum": bTExportModelBodiesResponse_1.BTExportModelBodiesResponse.ErrorEnumEnum,
    "BTExportModelBody.TypeEnum": bTExportModelBody_1.BTExportModelBody.TypeEnum,
    "BTExportTessellatedEdgesResponse.ErrorEnumEnum": bTExportTessellatedEdgesResponse_1.BTExportTessellatedEdgesResponse.ErrorEnumEnum,
    "BTExportTessellatedFacesBody.BodyTypeEnum": bTExportTessellatedFacesBody_1.BTExportTessellatedFacesBody.BodyTypeEnum,
    "BTExportTessellatedFacesResponse.ErrorEnumEnum": bTExportTessellatedFacesResponse_1.BTExportTessellatedFacesResponse.ErrorEnumEnum,
    "BTFeatureState.FeatureStatusEnum": bTFeatureState_1.BTFeatureState.FeatureStatusEnum,
    "BTIdentity.IdentityTypeEnum": bTIdentity_1.BTIdentity.IdentityTypeEnum,
    "BTImportCloudObjectParams.OwnerTypeEnum": bTImportCloudObjectParams_1.BTImportCloudObjectParams.OwnerTypeEnum,
    "BTImportForeignDataParams.FileFormatEnum": bTImportForeignDataParams_1.BTImportForeignDataParams.FileFormatEnum,
    "BTImportForeignDataParams.OwnerTypeEnum": bTImportForeignDataParams_1.BTImportForeignDataParams.OwnerTypeEnum,
    "BTInAppMessageContent.StateEnum": bTInAppMessageContent_1.BTInAppMessageContent.StateEnum,
    "BTMFeature.RegenerateAsVersionEnum": bTMFeature_1.BTMFeature.RegenerateAsVersionEnum,
    "BTNodeStatus.StatusEnumEnum": bTNodeStatus_1.BTNodeStatus.StatusEnumEnum,
    "BTNodeStatus.StatusTypeEnum": bTNodeStatus_1.BTNodeStatus.StatusTypeEnum,
    "BTNotice.TypeEnum": bTNotice_1.BTNotice.TypeEnum,
    "BTNotice.LevelEnum": bTNotice_1.BTNotice.LevelEnum,
    "BTNotificationParams.NotificationLevelEnum": bTNotificationParams_1.BTNotificationParams.NotificationLevelEnum,
    "BTPDMMetadataParams.StateEnum": bTPDMMetadataParams_1.BTPDMMetadataParams.StateEnum,
    "BTPLiteralString.DocumentationTypeEnum": bTPLiteralString_1.BTPLiteralString.DocumentationTypeEnum,
    "BTPModuleId.DocumentationTypeEnum": bTPModuleId_1.BTPModuleId.DocumentationTypeEnum,
    "BTPNode.DocumentationTypeEnum": bTPNode_1.BTPNode.DocumentationTypeEnum,
    "BTPartMetadataInfo.StateEnum": bTPartMetadataInfo_1.BTPartMetadataInfo.StateEnum,
    "BTRootDiffInfo.TypeEnum": bTRootDiffInfo_1.BTRootDiffInfo.TypeEnum,
    "BTSurfaceDescription.TypeEnum": bTSurfaceDescription_1.BTSurfaceDescription.TypeEnum,
    "BTTranslationRequestInfo.RequestStateEnum": bTTranslationRequestInfo_1.BTTranslationRequestInfo.RequestStateEnum,
    "Encoding.StyleEnum": encoding_1.Encoding.StyleEnum,
    "Header.StyleEnum": header_1.Header.StyleEnum,
    "JsonNode.NodeTypeEnum": jsonNode_1.JsonNode.NodeTypeEnum,
    "Message.MessageLevelEnum": message_1.Message.MessageLevelEnum,
    "Parameter.StyleEnum": parameter_1.Parameter.StyleEnum,
    "SecurityScheme.TypeEnum": securityScheme_1.SecurityScheme.TypeEnum,
    "SecurityScheme.InEnum": securityScheme_1.SecurityScheme.InEnum,
};
var typeMap = {
    "Address": address_1.Address,
    "ApiResponse": apiResponse_1.ApiResponse,
    "ApiResponses": apiResponses_1.ApiResponses,
    "BTAPIApplicationDeprecateParams": bTAPIApplicationDeprecateParams_1.BTAPIApplicationDeprecateParams,
    "BTAPIApplicationParams": bTAPIApplicationParams_1.BTAPIApplicationParams,
    "BTAPIApplicationSummaryInfo": bTAPIApplicationSummaryInfo_1.BTAPIApplicationSummaryInfo,
    "BTAPIDeveloperParams": bTAPIDeveloperParams_1.BTAPIDeveloperParams,
    "BTAPIKeyParams": bTAPIKeyParams_1.BTAPIKeyParams,
    "BTAPIPartnerParams": bTAPIPartnerParams_1.BTAPIPartnerParams,
    "BTAclParams": bTAclParams_1.BTAclParams,
    "BTActionInfo": bTActionInfo_1.BTActionInfo,
    "BTAddFriendParams": bTAddFriendParams_1.BTAddFriendParams,
    "BTAddressInfo": bTAddressInfo_1.BTAddressInfo,
    "BTAdminGroupParams": bTAdminGroupParams_1.BTAdminGroupParams,
    "BTAdminRoleParams": bTAdminRoleParams_1.BTAdminRoleParams,
    "BTAdminRolePermissionParams": bTAdminRolePermissionParams_1.BTAdminRolePermissionParams,
    "BTAdminTaskParams": bTAdminTaskParams_1.BTAdminTaskParams,
    "BTAdminUserRoleParams": bTAdminUserRoleParams_1.BTAdminUserRoleParams,
    "BTAgreementParams": bTAgreementParams_1.BTAgreementParams,
    "BTApiKeyUpdateParams": bTApiKeyUpdateParams_1.BTApiKeyUpdateParams,
    "BTAppAssociativeDataParamsArray": bTAppAssociativeDataParamsArray_1.BTAppAssociativeDataParamsArray,
    "BTAppElementChangeParams": bTAppElementChangeParams_1.BTAppElementChangeParams,
    "BTAppElementCommitTransactionParams": bTAppElementCommitTransactionParams_1.BTAppElementCommitTransactionParams,
    "BTAppElementContentDeltaInfo": bTAppElementContentDeltaInfo_1.BTAppElementContentDeltaInfo,
    "BTAppElementContentEntryInfo": bTAppElementContentEntryInfo_1.BTAppElementContentEntryInfo,
    "BTAppElementContentInfo": bTAppElementContentInfo_1.BTAppElementContentInfo,
    "BTAppElementHistoryEntryInfo": bTAppElementHistoryEntryInfo_1.BTAppElementHistoryEntryInfo,
    "BTAppElementHistoryInfo": bTAppElementHistoryInfo_1.BTAppElementHistoryInfo,
    "BTAppElementModifyInfo": bTAppElementModifyInfo_1.BTAppElementModifyInfo,
    "BTAppElementParams": bTAppElementParams_1.BTAppElementParams,
    "BTAppElementReferenceInfo": bTAppElementReferenceInfo_1.BTAppElementReferenceInfo,
    "BTAppElementReferenceParams": bTAppElementReferenceParams_1.BTAppElementReferenceParams,
    "BTAppElementReferenceResolveInfo": bTAppElementReferenceResolveInfo_1.BTAppElementReferenceResolveInfo,
    "BTAppElementStartTransactionParams": bTAppElementStartTransactionParams_1.BTAppElementStartTransactionParams,
    "BTAppElementUpdateParams": bTAppElementUpdateParams_1.BTAppElementUpdateParams,
    "BTAppViewParams": bTAppViewParams_1.BTAppViewParams,
    "BTApplicationElementThumbnailParams": bTApplicationElementThumbnailParams_1.BTApplicationElementThumbnailParams,
    "BTApplicationElementThumbnailParamsArray": bTApplicationElementThumbnailParamsArray_1.BTApplicationElementThumbnailParamsArray,
    "BTApproveTranslationDebugParams": bTApproveTranslationDebugParams_1.BTApproveTranslationDebugParams,
    "BTAssemblyInstanceDefinitionParams": bTAssemblyInstanceDefinitionParams_1.BTAssemblyInstanceDefinitionParams,
    "BTAssemblyTransformDefinitionParams": bTAssemblyTransformDefinitionParams_1.BTAssemblyTransformDefinitionParams,
    "BTAssemblyTransformedInstancesDefinitionParams": bTAssemblyTransformedInstancesDefinitionParams_1.BTAssemblyTransformedInstancesDefinitionParams,
    "BTAssociativeDataParams": bTAssociativeDataParams_1.BTAssociativeDataParams,
    "BTAssociativeFieldParams": bTAssociativeFieldParams_1.BTAssociativeFieldParams,
    "BTAutoPartNumberingSchemeParams": bTAutoPartNumberingSchemeParams_1.BTAutoPartNumberingSchemeParams,
    "BTBaseInfo": bTBaseInfo_1.BTBaseInfo,
    "BTBelScriptLibraryVersion": bTBelScriptLibraryVersion_1.BTBelScriptLibraryVersion,
    "BTBetaCapabilityAdminInfo": bTBetaCapabilityAdminInfo_1.BTBetaCapabilityAdminInfo,
    "BTBetaCapabilityImportInfo": bTBetaCapabilityImportInfo_1.BTBetaCapabilityImportInfo,
    "BTBetaCapabilityInfo": bTBetaCapabilityInfo_1.BTBetaCapabilityInfo,
    "BTBetaCapabilityMetricsInfo": bTBetaCapabilityMetricsInfo_1.BTBetaCapabilityMetricsInfo,
    "BTBetaCapabilityParams": bTBetaCapabilityParams_1.BTBetaCapabilityParams,
    "BTBetaCapabilitySummaryInfo": bTBetaCapabilitySummaryInfo_1.BTBetaCapabilitySummaryInfo,
    "BTBetaCapabilityUserInfo": bTBetaCapabilityUserInfo_1.BTBetaCapabilityUserInfo,
    "BTBillingAccountParams": bTBillingAccountParams_1.BTBillingAccountParams,
    "BTBillingAllowedPlansInfo": bTBillingAllowedPlansInfo_1.BTBillingAllowedPlansInfo,
    "BTBillingPlanBatchParams": bTBillingPlanBatchParams_1.BTBillingPlanBatchParams,
    "BTBillingPlanInfo": bTBillingPlanInfo_1.BTBillingPlanInfo,
    "BTBillingPlanParams": bTBillingPlanParams_1.BTBillingPlanParams,
    "BTBillingPlanSummaryInfo": bTBillingPlanSummaryInfo_1.BTBillingPlanSummaryInfo,
    "BTBoundingBox": bTBoundingBox_1.BTBoundingBox,
    "BTBoundingBoxParams": bTBoundingBoxParams_1.BTBoundingBoxParams,
    "BTBrokenOutEndCondition": bTBrokenOutEndCondition_1.BTBrokenOutEndCondition,
    "BTBulkDocumentUpdateParams": bTBulkDocumentUpdateParams_1.BTBulkDocumentUpdateParams,
    "BTCacheInfo": bTCacheInfo_1.BTCacheInfo,
    "BTCampaignParams": bTCampaignParams_1.BTCampaignParams,
    "BTCapabilityCheckParams": bTCapabilityCheckParams_1.BTCapabilityCheckParams,
    "BTCapabilityParams": bTCapabilityParams_1.BTCapabilityParams,
    "BTCapabilityRuleParams": bTCapabilityRuleParams_1.BTCapabilityRuleParams,
    "BTCapableInfo": bTCapableInfo_1.BTCapableInfo,
    "BTCardInfo": bTCardInfo_1.BTCardInfo,
    "BTCardParams": bTCardParams_1.BTCardParams,
    "BTChangeContextParams": bTChangeContextParams_1.BTChangeContextParams,
    "BTCloudStorageAccountInfo": bTCloudStorageAccountInfo_1.BTCloudStorageAccountInfo,
    "BTCloudStorageAccountListInfo": bTCloudStorageAccountListInfo_1.BTCloudStorageAccountListInfo,
    "BTCloudStorageObjectInfo": bTCloudStorageObjectInfo_1.BTCloudStorageObjectInfo,
    "BTCloudStorageObjectListInfo": bTCloudStorageObjectListInfo_1.BTCloudStorageObjectListInfo,
    "BTCloudStorageProviderObjectInfo": bTCloudStorageProviderObjectInfo_1.BTCloudStorageProviderObjectInfo,
    "BTColorInfo": bTColorInfo_1.BTColorInfo,
    "BTColorParams": bTColorParams_1.BTColorParams,
    "BTCommentAttachmentInfo": bTCommentAttachmentInfo_1.BTCommentAttachmentInfo,
    "BTCommentInfo": bTCommentInfo_1.BTCommentInfo,
    "BTCommentNotificationParams": bTCommentNotificationParams_1.BTCommentNotificationParams,
    "BTCommentParams": bTCommentParams_1.BTCommentParams,
    "BTCommentSubscriptionParams": bTCommentSubscriptionParams_1.BTCommentSubscriptionParams,
    "BTCompanyActivateParams": bTCompanyActivateParams_1.BTCompanyActivateParams,
    "BTCompanyNoPublicDocumentParams": bTCompanyNoPublicDocumentParams_1.BTCompanyNoPublicDocumentParams,
    "BTCompanyParams": bTCompanyParams_1.BTCompanyParams,
    "BTCompanyPoliciesParams": bTCompanyPoliciesParams_1.BTCompanyPoliciesParams,
    "BTCompanySummaryInfo": bTCompanySummaryInfo_1.BTCompanySummaryInfo,
    "BTCompanyTransferParams": bTCompanyTransferParams_1.BTCompanyTransferParams,
    "BTCompanyUserParams": bTCompanyUserParams_1.BTCompanyUserParams,
    "BTComponentUsagesSummary": bTComponentUsagesSummary_1.BTComponentUsagesSummary,
    "BTConfigurationIdInfo": bTConfigurationIdInfo_1.BTConfigurationIdInfo,
    "BTConfigurationInfo": bTConfigurationInfo_1.BTConfigurationInfo,
    "BTConfigurationParams": bTConfigurationParams_1.BTConfigurationParams,
    "BTConnection": bTConnection_1.BTConnection,
    "BTCopyDocumentParams": bTCopyDocumentParams_1.BTCopyDocumentParams,
    "BTCopyElementParams": bTCopyElementParams_1.BTCopyElementParams,
    "BTCurveDescription": bTCurveDescription_1.BTCurveDescription,
    "BTCustomPropertyDefinitionInfo": bTCustomPropertyDefinitionInfo_1.BTCustomPropertyDefinitionInfo,
    "BTCustomPropertyDefinitionParams": bTCustomPropertyDefinitionParams_1.BTCustomPropertyDefinitionParams,
    "BTDBViewerCollectionConfig": bTDBViewerCollectionConfig_1.BTDBViewerCollectionConfig,
    "BTDBViewerConfig": bTDBViewerConfig_1.BTDBViewerConfig,
    "BTDBViewerQueryParams": bTDBViewerQueryParams_1.BTDBViewerQueryParams,
    "BTDeviceInfo": bTDeviceInfo_1.BTDeviceInfo,
    "BTDeviceTokenParams": bTDeviceTokenParams_1.BTDeviceTokenParams,
    "BTDiffInfo": bTDiffInfo_1.BTDiffInfo,
    "BTDiscountInfo": bTDiscountInfo_1.BTDiscountInfo,
    "BTDiscountParams": bTDiscountParams_1.BTDiscountParams,
    "BTDocumentCheckAccessParams": bTDocumentCheckAccessParams_1.BTDocumentCheckAccessParams,
    "BTDocumentElementInfo": bTDocumentElementInfo_1.BTDocumentElementInfo,
    "BTDocumentInfo": bTDocumentInfo_1.BTDocumentInfo,
    "BTDocumentLabelInfo": bTDocumentLabelInfo_1.BTDocumentLabelInfo,
    "BTDocumentLabelParams": bTDocumentLabelParams_1.BTDocumentLabelParams,
    "BTDocumentMicroversionInfo": bTDocumentMicroversionInfo_1.BTDocumentMicroversionInfo,
    "BTDocumentMigrateParams": bTDocumentMigrateParams_1.BTDocumentMigrateParams,
    "BTDocumentOptionsParams": bTDocumentOptionsParams_1.BTDocumentOptionsParams,
    "BTDocumentParams": bTDocumentParams_1.BTDocumentParams,
    "BTDocumentProcessingInfo": bTDocumentProcessingInfo_1.BTDocumentProcessingInfo,
    "BTDocumentScope": bTDocumentScope_1.BTDocumentScope,
    "BTDocumentSearchHitInfo": bTDocumentSearchHitInfo_1.BTDocumentSearchHitInfo,
    "BTDocumentSearchParams": bTDocumentSearchParams_1.BTDocumentSearchParams,
    "BTDocumentSummaryInfo": bTDocumentSummaryInfo_1.BTDocumentSummaryInfo,
    "BTDocumentSummarySearchInfo": bTDocumentSummarySearchInfo_1.BTDocumentSummarySearchInfo,
    "BTDocumentVersionElementIds": bTDocumentVersionElementIds_1.BTDocumentVersionElementIds,
    "BTDocumentWithVersionAndElementId": bTDocumentWithVersionAndElementId_1.BTDocumentWithVersionAndElementId,
    "BTDocumentWithVersionId": bTDocumentWithVersionId_1.BTDocumentWithVersionId,
    "BTDrawingParams": bTDrawingParams_1.BTDrawingParams,
    "BTESDocumentHit": bTESDocumentHit_1.BTESDocumentHit,
    "BTElementLocationParams": bTElementLocationParams_1.BTElementLocationParams,
    "BTElementParams": bTElementParams_1.BTElementParams,
    "BTElementPropertiesParams": bTElementPropertiesParams_1.BTElementPropertiesParams,
    "BTElementRenameParams": bTElementRenameParams_1.BTElementRenameParams,
    "BTElementThumbnailDataParams": bTElementThumbnailDataParams_1.BTElementThumbnailDataParams,
    "BTEnterpriseReportParams": bTEnterpriseReportParams_1.BTEnterpriseReportParams,
    "BTExportModelBodiesResponse": bTExportModelBodiesResponse_1.BTExportModelBodiesResponse,
    "BTExportModelBody": bTExportModelBody_1.BTExportModelBody,
    "BTExportModelCoedge": bTExportModelCoedge_1.BTExportModelCoedge,
    "BTExportModelEdge": bTExportModelEdge_1.BTExportModelEdge,
    "BTExportModelEdgeGeometry": bTExportModelEdgeGeometry_1.BTExportModelEdgeGeometry,
    "BTExportModelFace": bTExportModelFace_1.BTExportModelFace,
    "BTExportModelLoop": bTExportModelLoop_1.BTExportModelLoop,
    "BTExportModelParams": bTExportModelParams_1.BTExportModelParams,
    "BTExportModelVertex": bTExportModelVertex_1.BTExportModelVertex,
    "BTExportTessellatedEdgesBody": bTExportTessellatedEdgesBody_1.BTExportTessellatedEdgesBody,
    "BTExportTessellatedEdgesEdge": bTExportTessellatedEdgesEdge_1.BTExportTessellatedEdgesEdge,
    "BTExportTessellatedEdgesResponse": bTExportTessellatedEdgesResponse_1.BTExportTessellatedEdgesResponse,
    "BTExportTessellatedFacesBody": bTExportTessellatedFacesBody_1.BTExportTessellatedFacesBody,
    "BTExportTessellatedFacesFace": bTExportTessellatedFacesFace_1.BTExportTessellatedFacesFace,
    "BTExportTessellatedFacesFacet": bTExportTessellatedFacesFacet_1.BTExportTessellatedFacesFacet,
    "BTExportTessellatedFacesResponse": bTExportTessellatedFacesResponse_1.BTExportTessellatedFacesResponse,
    "BTExtendTrialParams": bTExtendTrialParams_1.BTExtendTrialParams,
    "BTExternalElementReferenceInfo": bTExternalElementReferenceInfo_1.BTExternalElementReferenceInfo,
    "BTFSValue": bTFSValue_1.BTFSValue,
    "BTFeatureDefinitionResponse": bTFeatureDefinitionResponse_1.BTFeatureDefinitionResponse,
    "BTFeatureListResponse": bTFeatureListResponse_1.BTFeatureListResponse,
    "BTFeatureScriptEvalCall": bTFeatureScriptEvalCall_1.BTFeatureScriptEvalCall,
    "BTFeatureScriptEvalResponse": bTFeatureScriptEvalResponse_1.BTFeatureScriptEvalResponse,
    "BTFeatureState": bTFeatureState_1.BTFeatureState,
    "BTFolderInfo": bTFolderInfo_1.BTFolderInfo,
    "BTFolderParams": bTFolderParams_1.BTFolderParams,
    "BTFriendInfo": bTFriendInfo_1.BTFriendInfo,
    "BTFriendsFromIdsParams": bTFriendsFromIdsParams_1.BTFriendsFromIdsParams,
    "BTGlobalPermissionDefinitionsInfo": bTGlobalPermissionDefinitionsInfo_1.BTGlobalPermissionDefinitionsInfo,
    "BTGlobalPermissionInfo": bTGlobalPermissionInfo_1.BTGlobalPermissionInfo,
    "BTGlobalPermissionParams": bTGlobalPermissionParams_1.BTGlobalPermissionParams,
    "BTGlobalTreeMagicNodeInfo": bTGlobalTreeMagicNodeInfo_1.BTGlobalTreeMagicNodeInfo,
    "BTGlobalTreeNodeInfo": bTGlobalTreeNodeInfo_1.BTGlobalTreeNodeInfo,
    "BTGlobalTreeNodeInfoListBTGlobalTreeNodeInfo": bTGlobalTreeNodeInfoListBTGlobalTreeNodeInfo_1.BTGlobalTreeNodeInfoListBTGlobalTreeNodeInfo,
    "BTGlobalTreeNodeListResponse": bTGlobalTreeNodeListResponse_1.BTGlobalTreeNodeListResponse,
    "BTGlobalTreeNodeMoveParams": bTGlobalTreeNodeMoveParams_1.BTGlobalTreeNodeMoveParams,
    "BTGlobalTreeNodeOwnerParams": bTGlobalTreeNodeOwnerParams_1.BTGlobalTreeNodeOwnerParams,
    "BTGlobalTreeNodeWithChildrenInfo": bTGlobalTreeNodeWithChildrenInfo_1.BTGlobalTreeNodeWithChildrenInfo,
    "BTGraphicsAppearance": bTGraphicsAppearance_1.BTGraphicsAppearance,
    "BTIdAndConfiguration": bTIdAndConfiguration_1.BTIdAndConfiguration,
    "BTIdTranslationInfo": bTIdTranslationInfo_1.BTIdTranslationInfo,
    "BTIdTranslationParams": bTIdTranslationParams_1.BTIdTranslationParams,
    "BTIdTranslationResultInfo": bTIdTranslationResultInfo_1.BTIdTranslationResultInfo,
    "BTIdentity": bTIdentity_1.BTIdentity,
    "BTIdentityInfo": bTIdentityInfo_1.BTIdentityInfo,
    "BTIdentityManagementParams": bTIdentityManagementParams_1.BTIdentityManagementParams,
    "BTIdentityParams": bTIdentityParams_1.BTIdentityParams,
    "BTImportCloudObjectParams": bTImportCloudObjectParams_1.BTImportCloudObjectParams,
    "BTImportForeignDataParams": bTImportForeignDataParams_1.BTImportForeignDataParams,
    "BTInAppMessageContent": bTInAppMessageContent_1.BTInAppMessageContent,
    "BTInAppMessageContentItem": bTInAppMessageContentItem_1.BTInAppMessageContentItem,
    "BTInAppMessageInfo": bTInAppMessageInfo_1.BTInAppMessageInfo,
    "BTInAppMessageParams": bTInAppMessageParams_1.BTInAppMessageParams,
    "BTInsertionLocation": bTInsertionLocation_1.BTInsertionLocation,
    "BTInvitationParams": bTInvitationParams_1.BTInvitationParams,
    "BTItemParams": bTItemParams_1.BTItemParams,
    "BTLinkToLatestDocumentParams": bTLinkToLatestDocumentParams_1.BTLinkToLatestDocumentParams,
    "BTListResponseBTBetaCapabilitySummaryInfo": bTListResponseBTBetaCapabilitySummaryInfo_1.BTListResponseBTBetaCapabilitySummaryInfo,
    "BTListResponseBTBetaCapabilityUserInfo": bTListResponseBTBetaCapabilityUserInfo_1.BTListResponseBTBetaCapabilityUserInfo,
    "BTListResponseBTCloudStorageProviderObjectInfo": bTListResponseBTCloudStorageProviderObjectInfo_1.BTListResponseBTCloudStorageProviderObjectInfo,
    "BTListResponseBTFriendInfo": bTListResponseBTFriendInfo_1.BTListResponseBTFriendInfo,
    "BTListResponseBTInAppMessageInfo": bTListResponseBTInAppMessageInfo_1.BTListResponseBTInAppMessageInfo,
    "BTListResponseBTPurchaseInfo": bTListResponseBTPurchaseInfo_1.BTListResponseBTPurchaseInfo,
    "BTListResponseBTStandardContentHierarchyInfo": bTListResponseBTStandardContentHierarchyInfo_1.BTListResponseBTStandardContentHierarchyInfo,
    "BTListResponseBTSystemConfigInfo": bTListResponseBTSystemConfigInfo_1.BTListResponseBTSystemConfigInfo,
    "BTLocationInfo": bTLocationInfo_1.BTLocationInfo,
    "BTLoginParams": bTLoginParams_1.BTLoginParams,
    "BTLoginTotpParams": bTLoginTotpParams_1.BTLoginTotpParams,
    "BTMFeature": bTMFeature_1.BTMFeature,
    "BTMImport": bTMImport_1.BTMImport,
    "BTMParameter": bTMParameter_1.BTMParameter,
    "BTMSuppressionState": bTMSuppressionState_1.BTMSuppressionState,
    "BTMassPropResponse": bTMassPropResponse_1.BTMassPropResponse,
    "BTMassProperties": bTMassProperties_1.BTMassProperties,
    "BTMatchingStandardContentHierarchyInfo": bTMatchingStandardContentHierarchyInfo_1.BTMatchingStandardContentHierarchyInfo,
    "BTMaterialParams": bTMaterialParams_1.BTMaterialParams,
    "BTMaterialPropertyParams": bTMaterialPropertyParams_1.BTMaterialPropertyParams,
    "BTMetadataEnumValueInfo": bTMetadataEnumValueInfo_1.BTMetadataEnumValueInfo,
    "BTMetadataPropertyConfigParams": bTMetadataPropertyConfigParams_1.BTMetadataPropertyConfigParams,
    "BTMetadataPropertyInfo": bTMetadataPropertyInfo_1.BTMetadataPropertyInfo,
    "BTMetadataPropertyParams": bTMetadataPropertyParams_1.BTMetadataPropertyParams,
    "BTMetadataPropertyUiHintsInfo": bTMetadataPropertyUiHintsInfo_1.BTMetadataPropertyUiHintsInfo,
    "BTMetadataPropertyValidatorInfo": bTMetadataPropertyValidatorInfo_1.BTMetadataPropertyValidatorInfo,
    "BTMetadataSchemaParams": bTMetadataSchemaParams_1.BTMetadataSchemaParams,
    "BTMetricParams": bTMetricParams_1.BTMetricParams,
    "BTMetricsListParams": bTMetricsListParams_1.BTMetricsListParams,
    "BTMicroversionId": bTMicroversionId_1.BTMicroversionId,
    "BTMobileNotificationParams": bTMobileNotificationParams_1.BTMobileNotificationParams,
    "BTModelBodyParams": bTModelBodyParams_1.BTModelBodyParams,
    "BTModelElementParams": bTModelElementParams_1.BTModelElementParams,
    "BTModelFormatInfo": bTModelFormatInfo_1.BTModelFormatInfo,
    "BTModelTessellationParams": bTModelTessellationParams_1.BTModelTessellationParams,
    "BTMoveElementInfo": bTMoveElementInfo_1.BTMoveElementInfo,
    "BTMoveElementParams": bTMoveElementParams_1.BTMoveElementParams,
    "BTNameValuePair": bTNameValuePair_1.BTNameValuePair,
    "BTNamedViewInfo": bTNamedViewInfo_1.BTNamedViewInfo,
    "BTNamedViewsInfo": bTNamedViewsInfo_1.BTNamedViewsInfo,
    "BTNextPartNumberParam": bTNextPartNumberParam_1.BTNextPartNumberParam,
    "BTNextPartNumbersParam": bTNextPartNumbersParam_1.BTNextPartNumbersParam,
    "BTNextRevisionParams": bTNextRevisionParams_1.BTNextRevisionParams,
    "BTNodeReference": bTNodeReference_1.BTNodeReference,
    "BTNodeStatus": bTNodeStatus_1.BTNodeStatus,
    "BTNotice": bTNotice_1.BTNotice,
    "BTNotificationDebugParams": bTNotificationDebugParams_1.BTNotificationDebugParams,
    "BTNotificationParams": bTNotificationParams_1.BTNotificationParams,
    "BTObjectId": bTObjectId_1.BTObjectId,
    "BTOccurrence": bTOccurrence_1.BTOccurrence,
    "BTOwnerInfo": bTOwnerInfo_1.BTOwnerInfo,
    "BTPDMMetadataParams": bTPDMMetadataParams_1.BTPDMMetadataParams,
    "BTPLiteralString": bTPLiteralString_1.BTPLiteralString,
    "BTPModuleId": bTPModuleId_1.BTPModuleId,
    "BTPNode": bTPNode_1.BTPNode,
    "BTPSpace": bTPSpace_1.BTPSpace,
    "BTPartAppearanceInfo": bTPartAppearanceInfo_1.BTPartAppearanceInfo,
    "BTPartAppearanceParams": bTPartAppearanceParams_1.BTPartAppearanceParams,
    "BTPartIdParams": bTPartIdParams_1.BTPartIdParams,
    "BTPartMaterialInfo": bTPartMaterialInfo_1.BTPartMaterialInfo,
    "BTPartMaterialPropertyInfo": bTPartMaterialPropertyInfo_1.BTPartMaterialPropertyInfo,
    "BTPartMetadataInfo": bTPartMetadataInfo_1.BTPartMetadataInfo,
    "BTPartQueryParams": bTPartQueryParams_1.BTPartQueryParams,
    "BTPasswordResetParams": bTPasswordResetParams_1.BTPasswordResetParams,
    "BTPaymentTypeParams": bTPaymentTypeParams_1.BTPaymentTypeParams,
    "BTPermissionSet": bTPermissionSet_1.BTPermissionSet,
    "BTPlanSubscriberInfo": bTPlanSubscriberInfo_1.BTPlanSubscriberInfo,
    "BTProjectInfo": bTProjectInfo_1.BTProjectInfo,
    "BTProjectParams": bTProjectParams_1.BTProjectParams,
    "BTPropertyValueParam": bTPropertyValueParam_1.BTPropertyValueParam,
    "BTPurchaseInfo": bTPurchaseInfo_1.BTPurchaseInfo,
    "BTPurchaseParams": bTPurchaseParams_1.BTPurchaseParams,
    "BTPurchaseUserInfo": bTPurchaseUserInfo_1.BTPurchaseUserInfo,
    "BTPurchaseUserParams": bTPurchaseUserParams_1.BTPurchaseUserParams,
    "BTQueryRevisionParams": bTQueryRevisionParams_1.BTQueryRevisionParams,
    "BTRbacPermissionSchemeEntryParams": bTRbacPermissionSchemeEntryParams_1.BTRbacPermissionSchemeEntryParams,
    "BTRbacPermissionSchemeInfo": bTRbacPermissionSchemeInfo_1.BTRbacPermissionSchemeInfo,
    "BTRbacPermissionSchemeListInfo": bTRbacPermissionSchemeListInfo_1.BTRbacPermissionSchemeListInfo,
    "BTRbacPermissionSchemeParams": bTRbacPermissionSchemeParams_1.BTRbacPermissionSchemeParams,
    "BTRbacRoleInfo": bTRbacRoleInfo_1.BTRbacRoleInfo,
    "BTRbacRoleParams": bTRbacRoleParams_1.BTRbacRoleParams,
    "BTReleasePackageInfo": bTReleasePackageInfo_1.BTReleasePackageInfo,
    "BTReleasePackageItem": bTReleasePackageItem_1.BTReleasePackageItem,
    "BTReleasePackageItemError": bTReleasePackageItemError_1.BTReleasePackageItemError,
    "BTReleasePackageItemInfo": bTReleasePackageItemInfo_1.BTReleasePackageItemInfo,
    "BTReleasePackageItemParams": bTReleasePackageItemParams_1.BTReleasePackageItemParams,
    "BTReleasePackageParams": bTReleasePackageParams_1.BTReleasePackageParams,
    "BTReleasePackageWorkflowChangeParams": bTReleasePackageWorkflowChangeParams_1.BTReleasePackageWorkflowChangeParams,
    "BTRepairContextParams": bTRepairContextParams_1.BTRepairContextParams,
    "BTRevisionCustomData": bTRevisionCustomData_1.BTRevisionCustomData,
    "BTRevisionParams": bTRevisionParams_1.BTRevisionParams,
    "BTRevisionRuleInfo": bTRevisionRuleInfo_1.BTRevisionRuleInfo,
    "BTRevisionRuleParams": bTRevisionRuleParams_1.BTRevisionRuleParams,
    "BTRootDiffInfo": bTRootDiffInfo_1.BTRootDiffInfo,
    "BTSeatsParams": bTSeatsParams_1.BTSeatsParams,
    "BTSectionPlaneInfo": bTSectionPlaneInfo_1.BTSectionPlaneInfo,
    "BTSendGridDeliveryEventParams": bTSendGridDeliveryEventParams_1.BTSendGridDeliveryEventParams,
    "BTSettingInfo": bTSettingInfo_1.BTSettingInfo,
    "BTSettingParam": bTSettingParam_1.BTSettingParam,
    "BTShadedRenderDocumentResponse": bTShadedRenderDocumentResponse_1.BTShadedRenderDocumentResponse,
    "BTShareEntryParams": bTShareEntryParams_1.BTShareEntryParams,
    "BTShareParams": bTShareParams_1.BTShareParams,
    "BTSimpleInfo": bTSimpleInfo_1.BTSimpleInfo,
    "BTStandardContentCustomParameterDefinition": bTStandardContentCustomParameterDefinition_1.BTStandardContentCustomParameterDefinition,
    "BTStandardContentCustomParameterDefinitionId": bTStandardContentCustomParameterDefinitionId_1.BTStandardContentCustomParameterDefinitionId,
    "BTStandardContentCustomParameterParams": bTStandardContentCustomParameterParams_1.BTStandardContentCustomParameterParams,
    "BTStandardContentFindUsageParams": bTStandardContentFindUsageParams_1.BTStandardContentFindUsageParams,
    "BTStandardContentHierarchy": bTStandardContentHierarchy_1.BTStandardContentHierarchy,
    "BTStandardContentHierarchyInfo": bTStandardContentHierarchyInfo_1.BTStandardContentHierarchyInfo,
    "BTStandardContentHierarchyParams": bTStandardContentHierarchyParams_1.BTStandardContentHierarchyParams,
    "BTStandardContentHierarchyRenameParams": bTStandardContentHierarchyRenameParams_1.BTStandardContentHierarchyRenameParams,
    "BTStandardContentParameterDefinition": bTStandardContentParameterDefinition_1.BTStandardContentParameterDefinition,
    "BTStandardContentParams": bTStandardContentParams_1.BTStandardContentParams,
    "BTStandardContentSetRunVersionsParams": bTStandardContentSetRunVersionsParams_1.BTStandardContentSetRunVersionsParams,
    "BTStandardContentUsageSummary": bTStandardContentUsageSummary_1.BTStandardContentUsageSummary,
    "BTStartEditInContextParams": bTStartEditInContextParams_1.BTStartEditInContextParams,
    "BTSubstituteApproverParams": bTSubstituteApproverParams_1.BTSubstituteApproverParams,
    "BTSurfaceDescription": bTSurfaceDescription_1.BTSurfaceDescription,
    "BTSurveyResponseParams": bTSurveyResponseParams_1.BTSurveyResponseParams,
    "BTSystemConfigInfo": bTSystemConfigInfo_1.BTSystemConfigInfo,
    "BTTagParams": bTTagParams_1.BTTagParams,
    "BTTeamInfo": bTTeamInfo_1.BTTeamInfo,
    "BTTeamMemberParams": bTTeamMemberParams_1.BTTeamMemberParams,
    "BTTeamParams": bTTeamParams_1.BTTeamParams,
    "BTTeamSummaryInfo": bTTeamSummaryInfo_1.BTTeamSummaryInfo,
    "BTThumbnailInfo": bTThumbnailInfo_1.BTThumbnailInfo,
    "BTThumbnailSizeInfo": bTThumbnailSizeInfo_1.BTThumbnailSizeInfo,
    "BTToolTreeParams": bTToolTreeParams_1.BTToolTreeParams,
    "BTToolTreeUpdateParams": bTToolTreeUpdateParams_1.BTToolTreeUpdateParams,
    "BTTranslateFormatParams": bTTranslateFormatParams_1.BTTranslateFormatParams,
    "BTTranslateInternalParams": bTTranslateInternalParams_1.BTTranslateInternalParams,
    "BTTranslationRequestInfo": bTTranslationRequestInfo_1.BTTranslationRequestInfo,
    "BTUniqueDocumentItemParams": bTUniqueDocumentItemParams_1.BTUniqueDocumentItemParams,
    "BTUpdateDocumentThumbnailParams": bTUpdateDocumentThumbnailParams_1.BTUpdateDocumentThumbnailParams,
    "BTUpdateElementThumbnailParams": bTUpdateElementThumbnailParams_1.BTUpdateElementThumbnailParams,
    "BTUpdateExternalReferenceParams": bTUpdateExternalReferenceParams_1.BTUpdateExternalReferenceParams,
    "BTUpdateInContextParams": bTUpdateInContextParams_1.BTUpdateInContextParams,
    "BTUpdateRbacRoleParams": bTUpdateRbacRoleParams_1.BTUpdateRbacRoleParams,
    "BTUpdateReferenceParams": bTUpdateReferenceParams_1.BTUpdateReferenceParams,
    "BTUpdateReleasePackageParams": bTUpdateReleasePackageParams_1.BTUpdateReleasePackageParams,
    "BTUpdateVersionThumbnailParams": bTUpdateVersionThumbnailParams_1.BTUpdateVersionThumbnailParams,
    "BTUpgradeOnDemandParams": bTUpgradeOnDemandParams_1.BTUpgradeOnDemandParams,
    "BTUploadParams": bTUploadParams_1.BTUploadParams,
    "BTUploadStateParams": bTUploadStateParams_1.BTUploadStateParams,
    "BTUserActivationParams": bTUserActivationParams_1.BTUserActivationParams,
    "BTUserAgentVersion": bTUserAgentVersion_1.BTUserAgentVersion,
    "BTUserAppSettingsInfo": bTUserAppSettingsInfo_1.BTUserAppSettingsInfo,
    "BTUserAppSettingsParams": bTUserAppSettingsParams_1.BTUserAppSettingsParams,
    "BTUserBasicSummaryInfo": bTUserBasicSummaryInfo_1.BTUserBasicSummaryInfo,
    "BTUserEmailParams": bTUserEmailParams_1.BTUserEmailParams,
    "BTUserEmailVerifyParams": bTUserEmailVerifyParams_1.BTUserEmailVerifyParams,
    "BTUserNotificationPrefLevelsInfo": bTUserNotificationPrefLevelsInfo_1.BTUserNotificationPrefLevelsInfo,
    "BTUserNotificationPrefParams": bTUserNotificationPrefParams_1.BTUserNotificationPrefParams,
    "BTUserParams": bTUserParams_1.BTUserParams,
    "BTUserSettingsParams": bTUserSettingsParams_1.BTUserSettingsParams,
    "BTUserSummaryInfo": bTUserSummaryInfo_1.BTUserSummaryInfo,
    "BTUserTotpParams": bTUserTotpParams_1.BTUserTotpParams,
    "BTUserUpdateParams": bTUserUpdateParams_1.BTUserUpdateParams,
    "BTUserUpdateSpecsParams": bTUserUpdateSpecsParams_1.BTUserUpdateSpecsParams,
    "BTUserUsagesSummary": bTUserUsagesSummary_1.BTUserUsagesSummary,
    "BTUserWebPreferencesParams": bTUserWebPreferencesParams_1.BTUserWebPreferencesParams,
    "BTVector2d": bTVector2d_1.BTVector2d,
    "BTVector3d": bTVector3d_1.BTVector3d,
    "BTVersionInfo": bTVersionInfo_1.BTVersionInfo,
    "BTVersionOrWorkspaceInfo": bTVersionOrWorkspaceInfo_1.BTVersionOrWorkspaceInfo,
    "BTVersionOrWorkspaceParams": bTVersionOrWorkspaceParams_1.BTVersionOrWorkspaceParams,
    "BTViewDataInfo": bTViewDataInfo_1.BTViewDataInfo,
    "BTViewDataParams": bTViewDataParams_1.BTViewDataParams,
    "BTWebClientCapabilitiesParams": bTWebClientCapabilitiesParams_1.BTWebClientCapabilitiesParams,
    "BTWebRendererPerformanceMeasurementParams": bTWebRendererPerformanceMeasurementParams_1.BTWebRendererPerformanceMeasurementParams,
    "BTWebhookOptions": bTWebhookOptions_1.BTWebhookOptions,
    "BTWebhookParams": bTWebhookParams_1.BTWebhookParams,
    "BTWorkflowInfo": bTWorkflowInfo_1.BTWorkflowInfo,
    "BTWorkflowStateInfo": bTWorkflowStateInfo_1.BTWorkflowStateInfo,
    "BTWorkspaceInfo": bTWorkspaceInfo_1.BTWorkspaceInfo,
    "BTWorkspacePartParams": bTWorkspacePartParams_1.BTWorkspacePartParams,
    "BodyPart": bodyPart_1.BodyPart,
    "BodyPartHeaders": bodyPartHeaders_1.BodyPartHeaders,
    "BodyPartMediaType": bodyPartMediaType_1.BodyPartMediaType,
    "Callback": callback_1.Callback,
    "Card": card_1.Card,
    "ClientLogEntry": clientLogEntry_1.ClientLogEntry,
    "CloudObjectPathSegment": cloudObjectPathSegment_1.CloudObjectPathSegment,
    "Components": components_1.Components,
    "ConfigurationEntry": configurationEntry_1.ConfigurationEntry,
    "ConfigurationInfoEntry": configurationInfoEntry_1.ConfigurationInfoEntry,
    "Contact": contact_1.Contact,
    "Content": content_1.Content,
    "ContentDisposition": contentDisposition_1.ContentDisposition,
    "ContentItem": contentItem_1.ContentItem,
    "Coupon": coupon_1.Coupon,
    "Customer": customer_1.Customer,
    "CustomerCardCollection": customerCardCollection_1.CustomerCardCollection,
    "CustomerSubscriptionCollection": customerSubscriptionCollection_1.CustomerSubscriptionCollection,
    "Definition": definition_1.Definition,
    "Discount": discount_1.Discount,
    "Discriminator": discriminator_1.Discriminator,
    "Encoding": encoding_1.Encoding,
    "Entry": entry_1.Entry,
    "Example": example_1.Example,
    "ExternalAccount": externalAccount_1.ExternalAccount,
    "ExternalAccountCollection": externalAccountCollection_1.ExternalAccountCollection,
    "ExternalDocumentation": externalDocumentation_1.ExternalDocumentation,
    "FormDataBodyPart": formDataBodyPart_1.FormDataBodyPart,
    "FormDataContentDisposition": formDataContentDisposition_1.FormDataContentDisposition,
    "FormDataMultiPart": formDataMultiPart_1.FormDataMultiPart,
    "GlobalPermissionInfo": globalPermissionInfo_1.GlobalPermissionInfo,
    "Header": header_1.Header,
    "Info": info_1.Info,
    "Item": item_1.Item,
    "JsonNode": jsonNode_1.JsonNode,
    "LevelInfo": levelInfo_1.LevelInfo,
    "License": license_1.License,
    "Link": link_1.Link,
    "MediaType": mediaType_1.MediaType,
    "Message": message_1.Message,
    "MessageBodyWorkers": messageBodyWorkers_1.MessageBodyWorkers,
    "MultiPart": multiPart_1.MultiPart,
    "NextCharge": nextCharge_1.NextCharge,
    "NextRecurringCharge": nextRecurringCharge_1.NextRecurringCharge,
    "OAuthFlow": oAuthFlow_1.OAuthFlow,
    "OAuthFlowScopes": oAuthFlowScopes_1.OAuthFlowScopes,
    "OAuthFlows": oAuthFlows_1.OAuthFlows,
    "OpenAPI": openAPI_1.OpenAPI,
    "Operation": operation_1.Operation,
    "OperationResponses": operationResponses_1.OperationResponses,
    "Parameter": parameter_1.Parameter,
    "ParameterizedHeader": parameterizedHeader_1.ParameterizedHeader,
    "PathItem": pathItem_1.PathItem,
    "PathSegment": pathSegment_1.PathSegment,
    "Paths": paths_1.Paths,
    "Plan": plan_1.Plan,
    "ProratedCharges": proratedCharges_1.ProratedCharges,
    "RequestBody": requestBody_1.RequestBody,
    "RequestOptions": requestOptions_1.RequestOptions,
    "RoleMapEntry": roleMapEntry_1.RoleMapEntry,
    "Schema": schema_1.Schema,
    "Scopes": scopes_1.Scopes,
    "SecurityRequirement": securityRequirement_1.SecurityRequirement,
    "SecurityScheme": securityScheme_1.SecurityScheme,
    "Server": server_1.Server,
    "ServerVariable": serverVariable_1.ServerVariable,
    "ServerVariables": serverVariables_1.ServerVariables,
    "ShippingDetails": shippingDetails_1.ShippingDetails,
    "Subscription": subscription_1.Subscription,
    "SubscriptionItem": subscriptionItem_1.SubscriptionItem,
    "SubscriptionItemCollection": subscriptionItemCollection_1.SubscriptionItemCollection,
    "Tag": tag_1.Tag,
    "ThreeDSecure": threeDSecure_1.ThreeDSecure,
    "TransformGroup": transformGroup_1.TransformGroup,
    "UpdateParams": updateParams_1.UpdateParams,
    "VersionSpecs": versionSpecs_1.VersionSpecs,
    "XML": xML_1.XML,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
