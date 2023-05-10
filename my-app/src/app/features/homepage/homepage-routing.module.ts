import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/container/homepage.component';


const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children:[
            {
                path: '',
                loadChildren: () => import('../body/body.module').then(m => m.BodyModule)
            },
            {
                path: 'view/:id',
                loadChildren: () => import('../view/view.module').then(m => m.ViewModule)
            }
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }