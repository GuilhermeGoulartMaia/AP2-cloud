import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentModel } from '../../model/comment.model';
import { Post } from '../../model/post.model';
import { CommentService } from '../../services/comment.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post?: Post;
  comment?: CommentModel[];
  showCriarComentario = false;

  constructor(private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit(): void {

    let idPost = this.route.snapshot.params["idPost"];
    this.postService.getPostById(idPost).subscribe((response: any) => {
      this.post = response;
    });

    this.carregaComentario();
  }

  private carregaComentario() {
    let idPost = this.route.snapshot.params["idPost"];
    this.commentService.getComment(idPost).subscribe((response: CommentModel[] | undefined) => {
      this.comment = response;
    });
  }

  public mostrarCriarComentario() {
    this.showCriarComentario = true;
  }

  public atualizarComentarios() {
    this.carregaComentario();
  }

}
