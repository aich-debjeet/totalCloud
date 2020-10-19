import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Observable, throwError} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  title = 'totalCloud';
  list: Array<any>;
  constructor(private client: HttpClient) { 
    this.client.get('https://reqres.in/api/users?delay=3').subscribe((val:any) =>{
      console.log(val);
      this.list = val['data'];
      
    })
  }

  ngOnInit() {
  }

}
