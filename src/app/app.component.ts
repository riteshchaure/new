import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
ar:any[]=[]
  fun(item:any)
  {
    this.ar.push({id:this.ar.length,name:item})
    console.warn(this.ar);

    
  }
  
  remove (a:any)
  {
    this.ar=this.ar.filter(i=>i.id!==a)
  }
}
