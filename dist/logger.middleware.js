"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    console.log('Request....');
    next();
}
exports.logger = logger;
//# sourceMappingURL=logger.middleware.js.map