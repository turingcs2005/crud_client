import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/models/diary';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.scss']
})
export class DiaryDetailsComponent implements OnInit {

  diary: Diary = null;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getDiaryByID(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.diary = data;
      }, err => {
        console.log(err);
      }
    )
  }

  editEntry(): void {
    this.router.navigate(['/edit-entry', this.diary._id]);
  }

  deleteEntry(): void {
    this.api.deleteEntry(this.diary._id).subscribe(
      (data) => {
        console.log(data._id, ' has been deleted!');
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      }
    )
  }

}
