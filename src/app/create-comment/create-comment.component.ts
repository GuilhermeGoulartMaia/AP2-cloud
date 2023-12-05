import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentModel } from '../model/comment.model';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
  providers: []

})
export class CreateCommentComponent {
  comentario = new FormControl('', [Validators.required]);
  autor = new FormControl('', [Validators.required]);
  @Output() newCommentEvent = new EventEmitter();
  @Input() idPost:any = '';

  constructor(private commentService: CommentService, private snackBar: MatSnackBar) {

  }

  public criarNovoComentario() {


    if (this.autor.hasError("required")) {
      return;
    }

    let comment: CommentModel = {
      autor: this.autor.value as string,
    };

    this.commentService.createComment(this.idPost, comment).subscribe(response => {
      this.snackBar.open("Comentário criado com sucesso", "Ok");
      this.newCommentEvent.emit();
    });
  }

}
