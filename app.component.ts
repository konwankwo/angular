import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cadtool } from './cadtools'
import { CadtoolService } from './cadtool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cadtools: Cadtool[] = [];

  constructor(private cadtoolService: CadtoolService) { }

  ngOnInit() {
    this.getCadtools();
  }

  public getCadtools(): void {
    this.cadtoolService.getCadtools().subscribe(
      (response: Cadtool[]) => {
        this.cadtools = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

// BOOTSTRAP functionalities can be used to complete UI
