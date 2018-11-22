import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiTest, TestEntity } from '../../app/data/api.test';
import { ApiSecurity, LoginCredentials, SecurityToken } from '../../app/data/api.security';
import { LocalNotifications } from '../../../node_modules/@ionic-native/local-notifications';

@Component({
    templateUrl: 'test.html'
})
export class TestComp {

    showData: any;
    userToken: SecurityToken;
    
    constructor(private _apiTest: ApiTest, 
        private _apiSecurity: ApiSecurity,
        public navCtrl: NavController, 
        public navParams: NavParams,
        private localNotifications: LocalNotifications) {

            this.showData = null;
    }

    readOpenData(event){
        this._apiTest.GetApiBaseData("api/test/ReadOpenData").subscribe(r => {
            if(!r.criticalError){
                this.showData = r.message;
            }
        });
    }

    ReadOpenEntityData(event){
        this._apiTest.GetApiData<TestEntity>(TestEntity, "api/test/ReadOpenEntityData").subscribe(r => {
            if(!r.criticalError && r.result) this.showData = `${r.data.Id} - ${r.data.Name}`;
            else this.showData = r.message;
        });
    }

    ReadOpenListEntityData(event){
        this._apiTest.GetApiData<Array<TestEntity>>(TestEntity, "api/test/ReadOpenListEntityData").subscribe(r => {
            if(!r.criticalError && r.result) this.showData = `${r.data[0].Id} - ${r.data[0].Name} || ${r.data[1].Id} - ${r.data[1].Name}`;
            else this.showData = r.message;
        });
    }

    readData(event){
        this._apiTest.GetApiBaseData("api/test/ReadData", this.userToken ? this.userToken.access_token : null).subscribe(r => {
            if(!r.criticalError){
                this.showData = r.message;
            }
        });
    }

    getCurrentUser(event){
        this._apiSecurity.GetCurrentUser(this.userToken ? this.userToken.access_token : null).subscribe(r => {
            if(r.result && r.data){
                this.showData = `UserId: ${r.data.UserId} - Name: ${r.data.Name} - Email: ${r.data.Email} - Confirmed: ${r.data.EmailConfirmed}`;
            }else if(!r.criticalError){
                this.showData = r.message;
            }
        });
    }

    loginUser(event){
        let loginCredentials = new LoginCredentials();
        loginCredentials.username = "pepe";
        loginCredentials.password = "Usuario.00";

        this._apiSecurity.Login(loginCredentials).subscribe(r => {
            if(r){
                this.showData = `User LOGED IN. Token: ${r.access_token}`;
                this.userToken = r;
            }
        });
    }

    localNotificationTest(): void{
        this.localNotifications.hasPermission().then(p => {
            if(p){
                this.localNotifications.schedule({
                    id: 1,
                    text: 'Single ILocalNotification',
                    //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
                    //data: { secret: key }
                  });
            }else{
                this.localNotifications.requestPermission();
            }
        });
        
    }
}