import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieComponent } from '../../cookie/cookie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
    let dialogRef = this.dialog.open(CookieComponent, {});
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CookieComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
