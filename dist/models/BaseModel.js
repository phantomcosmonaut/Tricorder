"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const typeorm_1 = require("typeorm");
//This is an example of a Base Model for typeorm entities added to the database
//It is not necessary to create a Base Model however it is useful for generic methods and properties
class BaseModel {
    static FindAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(this).findOne(id);
        });
    }
    static FindAllAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(this).findAndCount();
        });
    }
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BaseModel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("simple-json"),
    __metadata("design:type", Object)
], BaseModel.prototype, "profile", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], BaseModel.prototype, "updateDateTime", void 0);
exports.BaseModel = BaseModel;
