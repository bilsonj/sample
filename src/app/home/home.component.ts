import { Component, inject, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButton,MatToolbarModule,MatIconModule,MatButtonModule],
 

changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
record(){
  alert('your applied saved')
}



// public jsonvalue:any;
// public displaycolumn:string[]=['id','title','body']
// public dataSource:any =[]
// constructor(private http :HttpClient){}
  

// ngOnInit(): void {
//  this.getvalue();
// }




// getvalue(){
//   this.http.get('"https://jsonplaceholder.typicode.com/posts').subscribe((data:any)=>{
// this.dataSource=data
// this.jsonvalue=data
//   })


  
// }
}
