import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadtool } from './cadtools';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CadtoolService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getCadtools(): Observable<Cadtool[]> {
        return this.http.get<Cadtool[]>(`${this.apiServerUrl}/cadtool/all`);
    }
    public addCadtool(cadtools: Cadtool): Observable<Cadtool> {
        return this.http.post<Cadtool>(`${this.apiServerUrl}/cadtool/add`, cadtools);
    }
    public updateCadtool(cadtools: Cadtool): Observable<Cadtool> {
        return this.http.put<Cadtool>(`${this.apiServerUrl}/cadtool/update`, cadtools);
    }
    public deleteCadtool(cadtoolsId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/cadtool/delete/${cadtoolsId}`);
    }
}
