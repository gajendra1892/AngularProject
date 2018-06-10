import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      Department List 
    </p>
    <div>
    <ul >
    <li *ngFor="let dept of departments" [class.selected]="isSelected(dept)" (click)="onSelect(dept)">
    <span> {{dept.id }}</span> {{dept.name}}
    </li>
    </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments=[
{"id":1,"name":"Angular"},
{"id":2,"name":"Node"},
{"id":3,"name":"MongoDB"},
{"id":4,"name":"Ruby"},
{"id":5,"name":"Bootstrap"}
];

public selectedId;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
   });
  }

  onSelect(dept){
// this.router.navigate(['/departments',dept.id]);
this.router.navigate([dept.id],{relativeTo:this.route});
  }


  isSelected(dept){
    var res=  dept.id==this.selectedId;
    //console.log(res);
    return res;
  }
}
