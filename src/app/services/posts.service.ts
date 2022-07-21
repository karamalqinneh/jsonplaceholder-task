import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    let response = this.http.get<Post[]>(this.apiUrl);
    return response;
  }

  getSinglePost(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  getPostComment(id: string) {
    const commentsUrl = `${this.apiUrl}/${id}/comments`;
    return this.http.get<Post>(commentsUrl);
  }
}
