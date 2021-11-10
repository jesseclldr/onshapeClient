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
exports.APIS = void 0;
__exportStar(require("./accountsApi"), exports);
var accountsApi_1 = require("./accountsApi");
__exportStar(require("./appElementsApi"), exports);
var appElementsApi_1 = require("./appElementsApi");
__exportStar(require("./defaultApi"), exports);
var defaultApi_1 = require("./defaultApi");
__exportStar(require("./documentsApi"), exports);
var documentsApi_1 = require("./documentsApi");
__exportStar(require("./endpointsApi"), exports);
var endpointsApi_1 = require("./endpointsApi");
__exportStar(require("./partsApi"), exports);
var partsApi_1 = require("./partsApi");
exports.APIS = [accountsApi_1.AccountsApi, appElementsApi_1.AppElementsApi, defaultApi_1.DefaultApi, documentsApi_1.DocumentsApi, endpointsApi_1.EndpointsApi, partsApi_1.PartsApi];
