import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatButton,FormsModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  onSubmit(formdata:NgForm){
    if(formdata.form.invalid){
      alert('please fill the details')
    }
    if(formdata.form.valid){
    alert('data saved')
    }
    }
}
