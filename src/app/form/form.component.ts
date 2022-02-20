import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
  reactiveform: FormGroup = new FormGroup({
  });
  ritesh:boolean=false;
  constructor(private form: FormBuilder) {

  }

  ngOnInit(): void {
    this.reactiveform = this.form.group({
      name: [undefined, Validators.required,Validators.minLength(5), Validators.maxLength(10)],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });
  }
  get forms(): {
    [key: string]: AbstractControl
  } {
    return this.reactiveform.controls;
  }


  onSubmitForm(form: any): void {
    this.ritesh=true;
    if(this.reactiveform.valid){
      console.log(form.value);
    }
    
   

  }
}
