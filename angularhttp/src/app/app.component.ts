import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';


@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, 
    MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private _dialog: MatDialog){

  }

  openAddEditEmpForm(){
    this._dialog.open(EmpAddEditComponent);
  }

}
