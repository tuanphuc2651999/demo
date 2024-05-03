import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { StaffComponent } from './staff/staff.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {
    //     path: '', component: AppComponent,
    //     children: [
    //         { path: 'staff', component: StaffComponent },
    //         { path: 'task', component: TaskComponent },
    //     ]
    // },

    { path: 'staff', component: StaffComponent },
    { path: 'task', component: TaskComponent },
    { path: '', component: TaskComponent },
];
