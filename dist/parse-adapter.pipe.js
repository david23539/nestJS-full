"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ParseAdapterPipe = class ParseAdapterPipe {
    transform(value, metadata) {
        const val = parseInt(value.age, 10);
        if (isNaN(val)) {
            throw new common_1.BadRequestException('Validation failed');
        }
        else {
            value.age = val;
            return value;
        }
    }
};
ParseAdapterPipe = __decorate([
    common_1.Injectable()
], ParseAdapterPipe);
exports.ParseAdapterPipe = ParseAdapterPipe;
//# sourceMappingURL=parse-adapter.pipe.js.map