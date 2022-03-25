import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleData } from '../blog-header/blog-header.component';

@Component({
  selector: 'app-contents-writing',
  templateUrl: './contents-writing.component.html',
  styleUrls: ['./contents-writing.component.scss']
})
export class ContentsWritingComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ContentsWritingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticleData,
  ) { }

  ngOnInit(): void {
  }

}
