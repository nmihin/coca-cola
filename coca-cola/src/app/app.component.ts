import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieComponent } from './cookie/cookie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coca-cola';

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
