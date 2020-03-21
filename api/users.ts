import { Request, Response, NextFunction, Router } from "express";
import {UsersService} from "../services/usersService";


let router = Router();



router.get("/api/users/:id?", async(req:any, res:any)=>{
    try{
        res.set("Content-Type", "application/json");
        let id:any = req.params.id;
        let query:any = req.query;
        let _query:any = null;
        let result:any = null;
        let status:any = 200;

        let service:any = new UsersService();

        if(id){
            _query = {_id: id};
            let getUser:any = await service.getUser(_query);
            if(!getUser){
                status = 400;
                result = {result:-1, message: "کاربری وجود ندارد!"}
            }else{
              result = {result:0, data: getUser};
            }
        }else if(Object.keys(query).length !== 0){
           _query = query;
            let getUser:any = await service.getUser(_query);
            if(!getUser){
                status = 400;
                result = {result:-1, message: "کاربری وجود ندارد!"}
            }else{
                result = {result:0, data: getUser};
            }
        }else{
            console.log("null : ",null)
        }
        res.status(status).json(result);
    }catch (e) {
        return e;
    }
});

router.post("/api/users", async(req:any , res:any)=>{
    try{
        res.set("Content-Type", "application/json");
        let params:any = req.body;
        let name:any = params.name;
        let mobile:any = params.mobile;
        let username:any = params.username;
        let code:any = params.code;
        let result:any = null;
        let status:any = 200;

        let service:any = new UsersService();

        if(!name || !mobile || !username || !code){
            status = 400;
            result = {result:-1, message: "پارامترهای ارسالی صحیح نیست!"};
        }else{
            let model:any = {
                name: name,
                mobile:mobile,
                username: username,
                code: code
            };
            let createUser:any  = await service.create(model);
            result = {result:0, data: createUser};
        }

        res.status(status).json(result);


    }catch (e) {
       return e
    }
})



export = router;