import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../interfaces/user.interface";
import {Response} from "../interfaces/response.interface";
import {Info} from "../interfaces/info.interface";
import {Coordinate} from "../interfaces/coordinate.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private readonly userApi  : string = 'https://randomuser.me/api'

  constructor(private http: HttpClient) { }

  getUsers (length :number = 10): Observable<any> {
    return this.http.get(`${this.userApi}/?results=${length}`)
      .pipe(map((resp : any) => this.processResponse(resp)))
   }

   getUser (uuid : number) {
     return this.http.get(`https://randomuser.me/api/?results=${uuid}`)
   }

   private processResponse(response : Response) {
     return {
       info : {...response.info},
       results : response.results.map((user : any) => (<User>{
         uuid : user.login.uuid,
         firstName : user.name.first,
         lastName : user.name.last,
         email : user.email,
         username : user.login.username,
         gender : user.gender,
         address : `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
         dateOfBirth : user.dob.date,
         phone : user.phone,
         imageUrl : user.picture.medium,
         coordinate : {latitude : user.location.coordinates.latitude, longitude : user.location.coordinates.longitude }

       }))
     }

   }

}
