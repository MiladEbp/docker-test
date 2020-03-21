import {UserModel} from "../models/users";


export  class  UsersService {
    model:any =  UserModel;

    async create(model:any){
        try{
            let createUser:any = await this.model.create(model);
            return createUser;
        }catch (e) {
            return e;
        }
    }// create Users

    async getUser(query:any, select?:any){
        try{
            let getUser:any = await this.model.findOne(query, select);
            if(!getUser){
                return false;
            }else{
                return getUser;
            }
        }catch (e) {
            return e;
        }
    }
}