"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var Player_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const BaseModel_1 = require("./BaseModel");
const typeorm_1 = require("typeorm");
//Typeorm will register any table class with the @Entity wrapper. Add new models to the /models folder.
//Use Base Model properties and add custom properties or methods.
let Player = Player_1 = class Player extends BaseModel_1.BaseModel {
    static AddAsync(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var player = new Player_1();
            player.profile = data;
            yield typeorm_1.getRepository(this).save(player);
        });
    }
};
Player = Player_1 = __decorate([
    typeorm_1.Entity()
], Player);
exports.Player = Player;
