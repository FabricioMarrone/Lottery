import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiTest, TestEntity } from '../../app/data/api.test';
import { ApiSecurity, LoginCredentials, SecurityToken } from '../../app/data/api.security';
import { LocalNotifications } from '../../../node_modules/@ionic-native/local-notifications';

@Component({
    templateUrl: 'canva.html'
})
export class CanvaComp {

    /**
     * 'plug into' DOM canvas element using @ViewChild
     */
    @ViewChild('canvas') canvasEl : ElementRef;

    private _CANVAS  : any;
    private _CONTEXT : any;
    
    private posX: number;
    lastX: number;
    lastY: number;

    currentX: number;
    currentY: number;

    constructor(private _apiTest: ApiTest, 
        private _apiSecurity: ApiSecurity,
        public navCtrl: NavController, 
        public navParams: NavParams) {

        
    }

    ionViewDidLoad()
    {
        this._CANVAS 	    = this.canvasEl.nativeElement;
        this._CANVAS.width  	= 500;
        this._CANVAS.height 	= 500;
        this.posX = 250;

        this.initialiseCanvas();
        //this.drawCircle();
        this.requestLoop();
    }

    initialiseCanvas()
    {
        if(this._CANVAS.getContext)
        {
            this.setupCanvas();
        }
    }

    setupCanvas()
    {
        this._CONTEXT = this._CANVAS.getContext('2d');
        this._CONTEXT.fillStyle = "#3e3e3e";
        this._CONTEXT.fillRect(0, 0, 500, 500);
    }

    clearCanvas()
    {
        this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
        this.setupCanvas();
    }

    drawCircle()
    {
        this.clearCanvas();
        this._CONTEXT.beginPath();

        // x, y, radius, startAngle, endAngle
        //this._CONTEXT.arc(this._CANVAS.width/2 + this.posX, this._CANVAS.height/2, 80, 0, 2 * Math.PI);
        this._CONTEXT.arc(this.lastX, this.lastY, 80, 0, 2 * Math.PI);
        this._CONTEXT.lineWidth = 1;
        this._CONTEXT.strokeStyle = '#ffffff';
        this._CONTEXT.stroke();
    }

    handleClick(ev){
 
        //this.lastX = ev.touches[0].pageX;
        //this.lastY = ev.touches[0].pageY;
        
        //Layer gets the coords relatives to the canvas element
        this.lastX = ev.layerX;
        this.lastY = ev.layerY;

        this.drawCircle();
    }

    mouseMove(ev){
        this.currentX = ev.layerX;
        this.currentY = ev.layerY;
    }

    requestLoop(){

        // this.posX += 1;
        // if(this.posX > 400) this.posX = 0;
        
        // this.drawCircle();

        requestAnimationFrame(() => { this.requestLoop(); });
    }
}