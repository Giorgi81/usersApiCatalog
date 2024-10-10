import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {NgForOf, NgIf} from "@angular/common";
import {MaterialModule} from "../../material/material.module";
import {MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatColumnDef, MatHeaderCell, MatTable} from "@angular/material/table";
import {MatFormField , MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgForOf,
    MaterialModule,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCardAvatar,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
    MatLabel
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  hoveredUser: any = null;
  edit : boolean = true
  enableEdit () {
    this.edit = false

  }


  response : any
  constructor(private activatedRoute : ActivatedRoute, private userApi : UserService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      const uuid = params['uuid']
      if(uuid) {
        this.userApi.getUser(uuid).subscribe(data => {
          this.response = data
        })
      }



    })
  }


}
