import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Issue } from '../issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {

  statuses: string[] = ['NEW', 'DOING', 'DONE']
  form = this.fb.group({
    title: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern('PC\\d+')]],
    description: [''],
    status: ['NEW', [Validators.required]]
  });
  @Input() issue: Issue = {
    id: null,
    title: 'issue1',
    description: 'Some long description about issue 1',
    place: 'PC6',
    status: 'NEW',
    updated_at: '2018-11-11'
  };
  @Output() save = new EventEmitter<Issue>();

  get title() { return this.form.get('title'); }
  get place() { return this.form.get('place'); }
  get description() { return this.form.get('description'); }
  get status() { return this.form.get('status'); }


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    this.form.patchValue(this.issue);
  }

  onSubmit() {
    const emittedIssue = Object.assign(this.issue, this.form.value);
    this.save.emit(emittedIssue);
  }

}
