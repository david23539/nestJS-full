"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ForbiddenExceptions extends common_1.HttpException {
    constructor() {
        super('Forbidden', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ForbiddenExceptions = ForbiddenExceptions;
//# sourceMappingURL=forbidden.exceptions.js.map