import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContentsWritingComponent } from '../contents-writing/contents-writing.component';

export interface ArticleData {
  title: string,
  contents: string
};

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss']
})

export class BlogHeaderComponent implements OnInit {
  title: string;
  contents: string;

  constructor(public _matDailog: MatDialog) { }

  ngOnInit(): void {
  }

  public writeContents(): void {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.id = "contents-writing-component";
    // dialogConfig.position = {
    //   'top': '0',
    //   'left': '0'
    // };
    // dialogConfig.data = {
    //   title: string,

    // }

    const modalDialog = this._matDailog.open(ContentsWritingComponent, {
      width: '500px',
      height: '500px',
      data: {title: this.title, contents: this.contents},
    });
  }

}
