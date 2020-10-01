import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.scss']
})
export class EditEntryComponent implements OnInit {

  diaryForm: FormGroup = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.diaryForm = this.fb.group({
      _id: [null],
      diaryDate: [null, Validators.required],
      diaryContent: [null, Validators.required]
    });

    this.api.getDiaryByID(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.diaryForm.setValue({
          _id: data._id,
          diaryDate: data.diaryDate,
          diaryContent: data.diaryContent
        })
      }
    )
  }
  
  onSubmit(): void {
    this.api.updateEntry(this.diaryForm.get('_id').value, this.diaryForm.value).subscribe(
      (data) => {
        this.router.navigate(['/diary-details', data._id])
      }, (err) => {
        console.log(err);
      }
    )
  }
}
