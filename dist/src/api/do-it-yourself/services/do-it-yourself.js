"use strict";
/**
 * do-it-yourself service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService('api::do-it-yourself.do-it-yourself');
