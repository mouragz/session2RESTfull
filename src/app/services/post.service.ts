import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private _url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this._url)
      .map(response => response.json());
  }

  createPost(post: any) {
    return this.http.post(this._url, JSON.stringify(post))
      .map(response => response.json());
  }

  // TypeScript/ES6
  //.map(response => response.json())

  // ES5
  //.map(function(response){ return response.json(); })

}