import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  selectedStatus = 'DOING';
  issues: Issue[] = [
    {
      id: 1,
      title: 'issue1',
      description: 'Some long description about issue 1',
      place: 'PC6',
      status: 'NEW',
      updated_at: '2018-11-11'
    },
    {
      id: 2,
      title: 'issue2',
      description: 'Some long description about issue 1',
      place: 'PC6',
      status: 'DOING',
      updated_at: '2018-11-11'
    },
    {
      id: 3,
      title: 'issue3',
      description: 'Some long description about issue 1',
      place: 'PC6',
      status: 'DOING',
      updated_at: '2018-11-11'
    },
    {
      id: 4,
      title: 'issue4',
      description: 'Some long description about issue 1',
      place: 'PC6',
      status: 'DONE',
      updated_at: '2018-11-11'
    },
  ];
  filteredIssues: Issue[] = [];
  selectedIssue: Issue = null;

  constructor() { }

  ngOnInit() {
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === ''
      ? this.issues
      : this.issues.filter(
          issue => issue.status === this.selectedStatus);
  }

  // (change)="onFilterChange(group.value)"
  onFilterChange(value) {
    this.selectedStatus = value;
    this.filterIssues();
  }

  onFormSave(issue: Issue) {
    this.selectedIssue = issue;
    this.selectedIssue = null;
  }
}
