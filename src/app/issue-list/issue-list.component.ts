import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  selectedStatus = 'DOING';
  issues: Issue[] = [];
  filteredIssues: Issue[] = [];
  selectedIssue: Issue = null;

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.issues = this.issueService.getIssues();
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
