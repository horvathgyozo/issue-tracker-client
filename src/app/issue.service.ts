import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
  })
};

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

  private issueUrl = 'http://localhost:8080/issues';

  constructor(
    private http: HttpClient
  ) { }

  getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(this.issueUrl, httpOptions).toPromise();
  }

  getIssue(id): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

  modifyIssue(id: number, issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(
      `${this.issueUrl}/${id}`,
      issue,
      httpOptions
    ).toPromise();
  }

  addIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(
      `${this.issueUrl}`,
      issue,
      httpOptions
    ).toPromise();
  }
}
