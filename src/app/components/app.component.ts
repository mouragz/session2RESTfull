import { Component,OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  
})
export class AppComponent implements OnInit{
  name = 'Angular';
  constructor(private postService :PostService){
    //this.postService.getPosts().subscribe(posts => console.log(posts)); 
    // when ajax request is done the Observable object is returned and pushed from (getPosts method) to the call back function here 
  }
  ngOnInit(){
     this.postService.getPosts().subscribe(posts => console.log(posts)); 
  }
}
