
import { Injectable } from "../../../node_modules/@angular/core";
import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, Response, ResponseContentType } from "@angular/http";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { ApiBase, ApiDataResult } from "./api.base";


@Injectable()
export class ApiSecurity extends ApiBase {

    GetCurrentUser(token?: string) : Observable<ApiDataResult<User>>{
        return this.GetApiData<User>(User, "api/security/currentUser", token);
    }

    Login(credentials: LoginCredentials): Observable<SecurityToken>{

        let options: RequestOptionsArgs = {
            url: ApiBase.UrlBase + "api/security/token",
            method: RequestMethod.Post,
            withCredentials: false,
            headers: new Headers({
                //"Cache-Control": "no-cache",
                //"Pragma": "no-cache",
                //"Expires": "Sat, 01 Jan 2000 00:00:00 GMT",
                "Content-Type": "application/x-www-form-urlencoded",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
                // "Access-Control-Allow-Headers": "Content-Type"
            }),
            responseType: ResponseContentType.Json
        };

        return this._http
            .post(options.url,  "userName=" + credentials.username +
                                "&password=" + credentials.password +
                                "&grant_type=password", options)
            .map((response: Response) => this.ExtractJsonResult<SecurityToken>(response))
            .catch((response: Response) => this.ManageJsonError<SecurityToken>(response))
            .share();
    }
}

export class User{

    constructor(json?: any){
        json = json || {};

        this.UserId = json.UserId || 0;
        this.Name = json.Name || "";
        this.Email = json.Email || "";
        this.EmailConfirmed = json.EmailConfirmed || false;
    }

    UserId: number;
    Name: string;
    Email: string;
    EmailConfirmed: boolean;
}

export class LoginCredentials{
    username: string;
    password: string;
}

export class SecurityToken{
    access_token: string;
    token_type: string;
    expires_in: string;
}