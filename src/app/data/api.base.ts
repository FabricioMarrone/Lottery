import { Injectable } from "../../../node_modules/@angular/core";
import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, Response, ResponseContentType } from "@angular/http";
import { Observable } from "../../../node_modules/rxjs/Observable";
import 'rxjs/Rx';
import { AlertController } from 'ionic-angular';

@Injectable()
export abstract class ApiBase {
    
    static UrlBase: string = "http://localhost:60966/";

    constructor(protected _http: Http, protected _alertCtrl: AlertController){

    }

    //Gets a ApiBaseResult from server
    GetApiBaseData(url: string, token?: string): Observable<ApiBaseResult>{
        let options = this.CreateRequestOptionsArgsForGet(url, token);

        return this._http
            .get(options.url, options)
            .map((response: Response) => this.ExtractApiBaseResult(response))
            .catch((response: Response) => this.ManageApiError(response))
            .share();
    }

    //Post data and gets a ApiBaseResult in return
    PostApiBaseData(url: string, data: any): Observable<ApiBaseResult>{
        let options = this.CreateRequestOptionsArgsForGet(url);
        let dataJson = JSON.stringify(data);

        return this._http
            .post(options.url, dataJson, options)
            .map((response: Response) => this.ExtractApiBaseResult(response))
            .catch((response: Response) => this.ManageApiError(response))
            .share();
    }

    //Gets a json without constructor from server
    Get<T>(url: string): Observable<T>{
        let options = this.CreateRequestOptionsArgsForGet(url);

        return this._http
            .get(options.url, options)
            .map((response: Response) => this.ExtractJsonResult<T>(response))
            .catch((response: Response) => this.ManageJsonError<T>(response))
            .share();
    }

    //Post data and gets a json without constructor in return
    Post<T>(url: string, data: any): Observable<T>{
        let options = this.CreateRequestOptionsArgsForGet(url);
        let dataJson = JSON.stringify(data);

        return this._http
            .post(options.url, dataJson, options)
            .map((response: Response) => this.ExtractJsonResult<T>(response))
            .catch((response: Response) => this.ManageJsonError<T>(response))
            .share();
    }

    //Gets ApiDataResult from server. Model must have a constructor.
    GetApiData<T>(model: any, url: string, token?: string): Observable<ApiDataResult<T>>{
        let options = this.CreateRequestOptionsArgsForGet(url, token);

        return this._http
            .get(options.url, options)
            .map((response: Response) => this.ExtractApiDataResult<T>(model, response))
            .catch((response: Response) => this.ManageApiDataError<T>(response))
            .share();
    }

    //Post data and gets a ApiDataResult in return. Model must have a constructor.
    PostApiData<T>(model: any, url: string, data: any): Observable<ApiDataResult<T>>{
        let options = this.CreateRequestOptionsArgsForGet(url);
        let dataJson = JSON.stringify(data);

        return this._http
            .post(options.url, dataJson, options)
            .map((response: Response) => this.ExtractApiDataResult<T>(model, response))
            .catch((response: Response) => this.ManageApiDataError<T>(response))
            .share();
    }

    protected ExtractJsonResult<T>(response: Response) : any{
        if(response && response.text()){
            let responseJson = response.json();
            return <T>responseJson;
            
        }
        return null;
    }

    protected ExtractApiBaseResult(response: Response) : ApiBaseResult{
        if(response && response.text()){
            let responseJson = response.json(); 
            return new ApiBaseResult(responseJson);
        }
        return new ApiBaseResult();
    }

    protected ExtractApiDataResult<T>(model: any, response: Response) : ApiDataResult<T>{
        if(response && response.text()){
            let responseJson = response.json();
            return new ApiDataResult<T>(responseJson, model);
            
        }
        return new ApiDataResult<T>();
    }

    protected ManageApiError(response: Response) : Observable<ApiBaseResult>{
        let result = new ApiBaseResult();
        if(response && response.status){
            result.result = false;
            result.criticalError = true;
            result.message = `${response.status} - ${response.statusText}`;

            let alert = this._alertCtrl.create({
                title: 'Error',
                subTitle: `${response.status} - ${response.statusText}`,
                buttons: ['Ok']
              });
            alert.present();
        }

        return ApiBase.CreateObservable<ApiBaseResult>(result); 
    }

    protected ManageJsonError<T>(response: Response) : Observable<T>{

        if(response && response.status){
            let alert = this._alertCtrl.create({
                title: 'Error',
                subTitle: `${response.status} - ${response.statusText}`,
                buttons: ['Ok']
              });
            alert.present();
        }

        return ApiBase.CreateObservable<T>(null); 
    }

    protected ManageApiDataError<T>(response: Response) : Observable<ApiDataResult<T>>{
        let result = new ApiDataResult<T>();
        if(response && response.status){
            result.result = false;
            result.criticalError = true;
            result.message = `${response.status} - ${response.statusText}`;

            let alert = this._alertCtrl.create({
                title: 'Error',
                subTitle: `${response.status} - ${response.statusText}`,
                buttons: ['Ok']
              });
            alert.present();
        }

        return ApiBase.CreateObservable<ApiDataResult<T>>(result); 
    }

    protected CreateRequestOptionsArgsForGet(url: string, token?: string): RequestOptionsArgs{
        let options: RequestOptionsArgs = {
            url: ApiBase.UrlBase + url,
            method: RequestMethod.Get,
            headers: new Headers({
                //"Cache-Control": "no-cache",
                //"Pragma": "no-cache",
                //"Expires": "Sat, 01 Jan 2000 00:00:00 GMT",
                //"Access-Control-Allow-Origin": "*",
            }),
            responseType: ResponseContentType.Json
        };

        if(token){
            options.headers.append("Authorization", `Bearer ${token}`);
        }

        return options;
    }

    protected CreateRequestOptionsArgsForPost(url: string, token?: string): RequestOptionsArgs{
        let options: RequestOptionsArgs = {
            url: ApiBase.UrlBase + url,
            method: RequestMethod.Post,
            headers: new Headers({
                // "Cache-Control": "no-cache",
                // "Pragma": "no-cache",
                // "Expires": "Sat, 01 Jan 2000 00:00:00 GMT",
                // "Access-Control-Allow-Origin": "*",
            }),
            responseType: ResponseContentType.Json
        };

        if(token){
            options.headers.append("Authorization", `Bearer ${token}`);
        }

        return options;
    }

    static CreateObservable<T>(valor: T): Observable<T> {
        return new Observable<T>(observer => {
            observer.next(valor);
            observer.complete();
        });
    }
}

export class ApiBaseResult{

    constructor(json?: any){
        json = json || {};

        this.result = json.Result || false;
        this.criticalError = json.CriticalError || false;
        this.message = json.Message || "";
    }

    result: boolean;
    criticalError: boolean;
    message: string;
}

export class ApiDataResult<T> extends ApiBaseResult{
    
    constructor(json?: any, model?: any) {
        json = json || {};
        super(json);

        if(json.Data) {

            if(model) {
                //Call class constructor
                if(json.Data instanceof Array){
                    this.data = json.Data.map(item => new model(item));
                } else {
                    this.data = new model(json.Data);
                }
            } else {
                //Simply cast object to class
                if(json.Data instanceof Array) {
                    this.data = json.Data.map(item => <T>item);
                } else {
                    this.data = <T>json.Data;
                }
            }   
        }
    }
    
    data: T;
}
//sfsdfsd