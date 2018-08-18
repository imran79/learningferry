import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Tutorial } from "../models/tutorial";
import { environment } from "../../../environments/environment";

@Injectable()
export class TutorialService {
  constructor(private httpClient: HttpClient) {}
  baseurl = environment.apiBaseUrl + "tutorials";
  getAllTutorials = (): Observable<Tutorial[]> => {
    return this.httpClient
      .get<any>(this.baseurl)
      .pipe(map(data => data.tutorials as Tutorial[]));
  };
}
