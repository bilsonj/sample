import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatButton,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
onSubmit(formData:NgForm){
if(formData.form.invalid){
  alert('Please fill the inputs')
} if(formData.form.valid){
  alert('data saved')
}
}
}
