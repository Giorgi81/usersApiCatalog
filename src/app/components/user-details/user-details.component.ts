import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {NgForOf, NgIf} from "@angular/common";
import {MaterialModule} from "../../material/material.module";
import {MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatColumnDef, MatHeaderCell, MatTable} from "@angular/material/table";
import {MatFormField , MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Response} from "../../interfaces/response.interface";
import {User} from "../../interfaces/user.interface";

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
  users !: any
  hoveredUser: any = null;
  edit : boolean = true
  response !: Response
  constructor(
    private activatedRoute : ActivatedRoute,
    private userApi : UserService,
    private router : Router ) {
  }

  ngOnInit() {
    this.users = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results))
  }

  enableEdit () {
    this.edit = false

  }

  saveChanges () {
    this.edit = true

  }
  goBack (users : string) {

    this.router.navigate([users])



  }


}
