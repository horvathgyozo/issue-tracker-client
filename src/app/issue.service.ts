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
