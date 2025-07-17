import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snakbar',
  templateUrl: './snakbar.component.html',
  styleUrls: ['./snakbar.component.scss']
})
export class SnakbarComponent {
 
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {

  }

}
