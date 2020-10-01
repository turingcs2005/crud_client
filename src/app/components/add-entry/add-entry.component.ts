import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {

  diaryForm: FormGroup = null;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.diaryForm = this.fb.group({
      diaryDate: [null, Validators.required],
      diaryContent: [null, Validators.required]
    });

    this.diaryForm.get('diaryDate').setValue(Date());
  }

  onSubmit(): void {
    this.api.addEntry(this.diaryForm.value).subscribe(
      (data) => {
        this.router.navigate(['/diary-details', data._id])
      }, (err) => {
        console.log(err);
      }
    )
  }

}
