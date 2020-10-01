import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/models/diary';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-diaries',
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.scss']
})
export class DiariesComponent implements OnInit {

  diaries: Diary[] = null;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getDiaries().subscribe(
      (data) => {
        this.diaries = data;
      }, err => {
        console.log(err);
      }
    );
  }

}
