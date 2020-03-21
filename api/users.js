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
const express_1 = require("express");
const usersService_1 = require("../services/usersService");
let router = express_1.Router();
router.get("/api/users/:id?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.set("Content-Type", "application/json");
        let id = req.params.id;
        let query = req.query;
        let _query = null;
        let result = null;
        let status = 200;
        let service = new usersService_1.UsersService();
        if (id) {
            _query = { _id: id };
            let getUser = yield service.getUser(_query);
            if (!getUser) {
                status = 400;
                result = { result: -1, message: "کاربری وجود ندارد!" };
            }
            else {
                result = { result: 0, data: getUser };
            }
        }
        else if (Object.keys(query).length !== 0) {
            _query = query;
            let getUser = yield service.getUser(_query);
            if (!getUser) {
                status = 400;
                result = { result: -1, message: "کاربری وجود ندارد!" };
            }
            else {
                result = { result: 0, data: getUser };
            }
        }
        else {
            console.log("null : ", null);
        }
        res.status(status).json(result);
    }
    catch (e) {
        return e;
    }
}));
router.post("/api/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.set("Content-Type", "application/json");
        let params = req.body;
        let name = params.name;
        let mobile = params.mobile;
        let username = params.username;
        let code = params.code;
        let result = null;
        let status = 200;
        let service = new usersService_1.UsersService();
        if (!name || !mobile || !username || !code) {
            status = 400;
            result = { result: -1, message: "پارامترهای ارسالی صحیح نیست!" };
        }
        else {
            let model = {
                name: name,
                mobile: mobile,
                username: username,
                code: code
            };
            let createUser = yield service.create(model);
            result = { result: 0, data: createUser };
        }
        res.status(status).json(result);
    }
    catch (e) {
        return e;
    }
}));
module.exports = router;
//# sourceMappingURL=users.js.map