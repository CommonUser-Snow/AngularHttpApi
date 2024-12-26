import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-emp-add-edit',
  imports: [MatFormFieldModule, MatInputModule, 
    MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    CommonModule,ReactiveFormsModule],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education: string[] =[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]

  constructor(private _fb:FormBuilder){
    this.empForm = this._fb.group({
      firstName:'',
      lastName: '',
      email: '',
      date:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:''
    })
  }

  onFromSubmit(){   
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }
}
