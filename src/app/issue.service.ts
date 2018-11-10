import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

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

  constructor() { }

  getIssues() {
    return this.issues;
  }

  getIssue(id) {
    return this.issues.find(issue => issue.id === id);
  }
}
