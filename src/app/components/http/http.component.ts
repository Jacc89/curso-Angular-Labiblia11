import { async } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  arrPosts = [];
  formulario: FormGroup;

  constructor(
    private postService: PostService
    ) {
      this.formulario = new FormGroup({
        title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl(''),
      });
     }

  ngOnInit() {
    this.postService.getAll()
    .then(posts => this.arrPosts = posts)
    .catch(error => console.log(error));
  }
  async onClick(postId) {
    try {
      const post = await this.postService.getById(postId);
      console.log(post);

    } catch (error) {
      console.log(error);

    }
  }

  onClickPost() {
    this.postService.create({
      title: 'nuevo',
      body: 'este es el cuero del post',
      userId: 1})
    .then(responde => console.log(responde))
    .catch(error => console.log(error));
  }

   async onSubmit() {
     try {
      const responde = await this.postService.create(this.formulario.value);
      console.log(responde);

     } catch (error) {
       console.log(error);
     }
  }

  onClickUpdate() {
    this.postService.update({
      id: 4,
      title: 'nuevo titulo',
      body: 'update es el cuero del post',
      userId: 3
    }).then(responde => console.log(responde))
    .catch(error => console.log(error));
  }

  async onClickdelete() {
    try {
      const responde = await this.postService.delete(5);
      console.log(responde);
    } catch (error) {
      console.log(error);

    }

  }

}
