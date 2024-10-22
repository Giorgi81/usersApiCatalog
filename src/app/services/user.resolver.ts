import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";
import {Response} from "../interfaces/response.interface";

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<Response> {
  constructor(private userService : UserService) {}

  resolve(route : ActivatedRouteSnapshot): Observable<Response> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}
