/**
 * Created by majeed on 7/28/2016.
 */

import { Document, Schema, model} from "mongoose";



// _database.mongooseInit();

export interface IUserModel extends Document {
    name:string;
    mobile: string;
    username: string;
    code: string;
    createdAt: Date;
    modifiedAt: Date;

    // lastSession : ;
};

export let UserSchema = new Schema({
    name: {type: String},
    mobile: {type: String},
    username:{type: String},
    code: {type: String},
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre<any>('save', function(next: any) {
    if (this._doc) {
        let doc = <IUserModel>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

// UserSchema.index({
//     "addresses.location": '2dsphere'
// });


export let UserModel = model('User', UserSchema, 'users', true);

UserModel.ensureIndexes((err:any)=> {
    if (err)
        console.log(err);
    // else
    //     console.log('create user index successfully');
});
