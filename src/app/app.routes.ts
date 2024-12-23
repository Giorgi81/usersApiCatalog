import { Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolver} from "./services/user.resolver";

export const routes: Routes = [
  {path: 'users', component : UsersComponent},
  {path : 'user/:uuid',
    resolve : {resolvedResponse : UserResolver},
    loadComponent: () => import('./components/user-details/user-details.component').then(m => m.UserDetailsComponent),

  },
  {path: '**', redirectTo : 'users'}
];
