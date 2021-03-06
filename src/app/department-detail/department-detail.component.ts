import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id:{{departmentId}}</h3>
  <p>
  <button (click)="showOverview()">Overview</button>
  <button (click)="showContact()">Contact</button>
  </p>
    <router-outlet></router-outlet>
    <button  (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
  
  <div>
  <button (click)="gotoDepartments()">BUtton</button>
  </div>
    `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  // ngOnInit() {
  //   let id= parseInt(this.route.snapshot.paramMap.get('id'));
  //   this.departmentId=id;
  // }
  ngOnInit() {
 
this.route.paramMap.subscribe((params:ParamMap)=>{
   let id=parseInt(params.get('id'));
   this.departmentId=id;
});

  }

  public departmentId;

  goPrevious(){
    let previousId=this.departmentId-1;
     //this.router.navigate(['/departments',previousId]);
    this.router.navigate(['../',previousId],{relativeTo:this.route});
  }
  goNext(){
    let nextId=this.departmentId+1;
     //this.router.navigate(['/departments',nextId]);
    this.router.navigate(['../',nextId],{relativeTo:this.route});
  }
  
  gotoDepartments(){
let selectedId=this.departmentId?this.departmentId:null;
// this.router.navigate(['/departments',{id:selectedId,test:'values'}]);
this.router.navigate(['../',{id:selectedId,test:'values'}],{relativeTo:this.route});

  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }


  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
