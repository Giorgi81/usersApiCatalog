import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Response} from "../../interfaces/response.interface";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableModule
} from "@angular/material/table";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    MaterialModule,
    CommonModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatHeaderCellDef

  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  response: any;
  displayedColumns: string[] = ['id', 'image', 'name', 'email', 'address', 'phone', 'action'];



  constructor(private userApi : UserService) {
}


  ngOnInit() {
  this.userApi.getUsers().subscribe(data => {
    console.log(data)
    this.response = data
  })
  }




}
