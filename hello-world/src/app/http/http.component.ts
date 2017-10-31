import { Http } from '@angular/http';
import * as http from 'http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class PostComponent implements OnInit {
  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(response=>{
      console.log(response);
      this.posts=response.json();
    });
  }
    posts:any[];
    private url:string="https://jsonplaceholder.typicode.com/posts";

    constructor(private http:Http){
      
    }

    createPost(input:HTMLInputElement){
        let post={
          title:input.value
        };
        input.value="";
       this.http.post(this.url,JSON.stringify(post))
       .subscribe(Response=>{
        post['id']=Response.json().id;
        console.log(Response.json());
        //To add the post on Starting position 
        //otherwise push method will add it to the last position
        this.posts.splice(0,0,post);
       });
      }
      
      updatePost(post){
        alert("in");
        //Below we are using patch method of HTTp insted of PUT ,
        //Patch helps us in updating the items partially ie: getting performance benefit
        //BUT out REST API should support patch verb/method

        //this.http.put(this.url,JSON.stringify(post));
        //OR
        this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
        .subscribe(response=>{
          console.log(response.json());
        });
      }

      deketePost(post){
        this.http.delete(this.url+'/'+post.id)
        .subscribe(response=>{
          console.log(response.json());
          let index=this.posts.indexOf(post);
          this.posts.splice(index,1);
        });
      }
}
