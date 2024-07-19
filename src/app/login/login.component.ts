import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatButton,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    console.log('welcome');
    if (formData.form.invalid) {
      // this.toastr.error('This is not good!', 'Oops!');
      alert('PLEASE FILL THE INPUTS');
    }
    if (formData.form.valid) {
      alert('data saved');
      // Navigate to another route
// this.router.navigate(['/']);
    }
  

    const entermail = formData.form.value.email;
    const enterpassword = formData.form.value.password;
    console.log(formData.form);
    console.log(entermail, enterpassword);

  }
  nextpage(){
  
  }
}

