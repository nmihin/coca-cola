import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent {

  constructor(
    public dialogRef: MatDialogRef<CookieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    allowCookie(): void {
      this.dialogRef.close();
    }

    preferences(): void {
      console.log("preferences")
    }
}
