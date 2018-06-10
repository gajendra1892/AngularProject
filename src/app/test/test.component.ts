import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',
  // templateUrl: './test.component.html',
  //template: '<div>INline Template</div>', //for single line template
  // template: `<div>INline template multiplate
  // <div>`,
  // template: `<div>
  //              Welcome {{name}}
  //             <div>
  //             <h2>{{"Welcome"+name}}</h2>
  //             <h2>{{name.toUpperCase()}}</h2>
  //             <h2>{{greetUSer()}}</h2>
  //             <h2>{{siteUrl}}</h2>
  //             `,
//   template: `<div>
//   Welcome {{name}}
//  <div>
//  <input [id]="myId" type="text" value="Vishwas">
//  <input [disabled]="isDisbaled" id={{myId}} type="text" value="Vishwas">
//  <input bind-disabled="isDisbaled" id={{myId}} type="text" value="Vishwas">
//  `,
// template: `
// <h2> Welcome {{name}}
// <h2 class="text-success">CodeVolution</h2>
// <h2 [class]="successClass">CodeVolution</h2>
// <h2 [class]="successClass" class="text-special">CodeVolution</h2>
// <h2 [class.text-danger]="hasError">CodeVolution</h2>
// <h2 [ngClass]="messageClasses">CodeVolution</h2>
// ` ,
// template: `
// <h2> Welcome {{name}}
// <h2 [style.color]="'orange'">Style Binding</h2>
// <h2 [style.color]="hasError ?'red':'green'">Style Binding</h2>
// <h2 [style.color]="highLightColor">Style Binding</h2>
// <h2 [ngStyle]="titleStyle">Style Binding</h2>
// ` ,
// template: `
// <h2> Welcome {{name}}
// <button (click)="onClick($event)">Greet</button>
// <button (click)="greeting='Welcome Vishwas'">Greet</button>
// {{greeting}}
// ` ,
// template: `
// <h2> Welcome {{name}}</h2>
// <input #myInput type="text" >
// <button (click)="logMessages(myInput.value)">Log</button>
// <button (click)="logMessages(myInput)">Log</button>

// ` ,
// template: `
// <input [(ngModel)]="ame" type="text">
// {{ame}}
// ` ,
// template: `
// <h2 *ngIf="false">
// CodeEvalution
// </h2>
// <h2 *ngIf="displayName; else elseBolck">
// CodeEvalution
// </h2>
// <ng-template #elseBolck>
// <h2>
// Name is hidden
// </h2>
// </ng-template>
// <div *ngIf="displayName;then thenBolck; else elseNewBolck" ></div> 
// <ng-template #thenBolck>
// <h2>Not Hidden</h2>
// </ng-template>
// <ng-template #elseNewBolck>
// <h2>Hidden</h2>
// </ng-template>
// ` ,
// template: `
// <div [ngSwitch]="color">
// <div *ngSwitchCase="'red'">You picked red color</div>
// <div *ngSwitchCase="'blue'">You picked blue color</div>
// <div *ngSwitchCase="'green'">You picked green color</div>
// <div *ngSwitchDefault>Picked Again</div>
// </div>
// ` ,
// template: `
// <div *ngFor="let color of colors;index as i;first as f;last as l;odd as o;even as e">
// <h2>first:{{f}},index:{{i}},value:{{color}},last:{{l}},odd:{{o}},even:{{e}}</h2>
// </div>
// ` ,
// template: `
// <h2>{{"Hello " + parentData }}</h2>
// ` ,
template: `
<h2>{{"Hello " + name }}</h2>
<button (click)="fireEvent()">Send Event</button>

<h2>{{Ename|lowercase}}</h2>
<h2>{{Ename|uppercase}}</h2>
<h2>{{Ename|titlecase}}</h2>
<h2>{{Ename|slice:3:5}}</h2>
<h2>{{person|json}}</h2>


<h2>{{5.678 |number:'1.2-3'}}</h2>
<h2>{{5.678 |number:'3.4-5'}}</h2>
<h2>{{5.678 |number:'3.1-2'}}</h2>

<h2>{{0.25 |percent}}</h2>
<h2>{{0.25 |currency}}</h2>
<h2>{{0.25 |currency:'GBP':'code'}}</h2>

<h2>{{ date}}</h2>
<h2>{{ date | date:'short'}}</h2>
<h2>{{ date | date:'shortDate'}}</h2>
<h2>{{ date | date:'shortTime'}}</h2>


` ,
  // styleUrls: ['./test.component.css']
  styles: [`
 .text-success{
   color:green;
 }
 .text-danger{
  color:red;
}
.text-special{
  font-style:italic;
}
  `]
})
export class TestComponent implements OnInit {

//component interaction

// @Input() public parentData;
@Input('parentData') public  name;

@Output() public childEvent=new EventEmitter();

fireEvent(){
  this.childEvent.emit('Hey CodeEvolution');
}

//component interaction

public Ename="Angulardemo";

public person={
  "firstName":"John",
  "lastName":"Doe"
}

public date=new Date();



constructor() { }

  ngOnInit() {
  }




// public colors=["red","blue","green","yellow"];
// public color="ed";

// public displayName=false;
// public ame="";
//   public highLightColor="green";

//   public titleStyle={
//     fontStyle:"italic",
//     color:"blue"
//   }
//   public hasError=true;
//   public isSpecial=true;
//   public messageClasses={
//     "text-success":!this.hasError,
//     "text-danger":this.hasError,
//     "text-pecial":this.isSpecial
//   }
  
//   public successClass="text-success";
//   public name="VishWass";
//   public myId="testId";
//   public isDisbaled=true;
//   public siteUrl=window.location.href;
//   public greeting="";
  

//   logMessages(value){
//     console.log(value);
//   }
//   onClick(event){
//    this.greeting="Welecome to Codvalution";
//     console.log(event)
//   }

//   greetUSer(){
//     return "Hello "+this.name;
//   }
}
