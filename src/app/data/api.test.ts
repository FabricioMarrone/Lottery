import { Injectable } from "../../../node_modules/@angular/core";
import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, Response } from "@angular/http";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { ApiBase } from "./api.base";
import { AlertController } from 'ionic-angular';

@Injectable()
export class ApiTest extends ApiBase {

}

export class TestEntity{

    constructor(json?: any){
        json = json || {};

        this.Id = json.Id || 0;
        this.Name = json.Name || "";
    }

    Id: number;
    Name: string;
}