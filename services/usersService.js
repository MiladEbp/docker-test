"use strict";
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
const users_1 = require("../models/users");
class UsersService {
    constructor() {
        this.model = users_1.UserModel;
    }
    create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let createUser = yield this.model.create(model);
                return createUser;
            }
            catch (e) {
                return e;
            }
        });
    }
    getUser(query, select) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let getUser = yield this.model.findOne(query, select);
                if (!getUser) {
                    return false;
                }
                else {
                    return getUser;
                }
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=usersService.js.map