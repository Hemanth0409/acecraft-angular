import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  title = 'json-read-example';
  Notes: any;
  url: string = 'assets/notes.json';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get("assets/notes.json").subscribe((res) => {
      this.Notes = res;
    });
  }  
}
