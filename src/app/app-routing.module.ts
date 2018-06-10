import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NewEmployeeListComponent } from './new-employee-list/new-employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes=[
// {   //default route
// path:'',component:DepartmentListComponent
// },
// {
// path:'',redirectTo:'/departments',pathMatch:'prefix'  //not working properly
// },
 {
    path:'',redirectTo:'/departments',pathMatch:'full'
    //path:'',redirectTo:'/departments-list',pathMatch:'full'
    },
{
 path:'departments',component:DepartmentListComponent
//path:'departments-list',component:DepartmentListComponent
},
{
path:'employees',component:NewEmployeeListComponent
},
{
path:'departments/:id',
component:DepartmentDetailComponent,
children:[
    {
path:'overview',
component:DepartmentOverviewComponent
    },
    {
        path:'contact',
        component:DepartmentContactComponent
      },
]
 // path:'departments-list/:id',component:DepartmentDetailComponent
    },
{
path:"**",component:PageNotFoundComponent
}



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }

export const routingComponents=[DepartmentListComponent,
                                NewEmployeeListComponent,
                                PageNotFoundComponent,
                                DepartmentDetailComponent,
                                DepartmentOverviewComponent,
                                DepartmentContactComponent
                               ];
