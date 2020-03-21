"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String },
    mobile: { type: String },
    username: { type: String },
    code: { type: String },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
exports.UserModel = mongoose_1.model('User', exports.UserSchema, 'users', true);
exports.UserModel.ensureIndexes((err) => {
    if (err)
        console.log(err);
});
//# sourceMappingURL=users.js.map