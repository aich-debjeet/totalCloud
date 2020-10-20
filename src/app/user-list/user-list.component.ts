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
  list: any;
  secondaryList: any;
  spinner: boolean = true;
  constructor(private client: HttpClient) { 
    this.client.get('https://reqres.in/api/users?delay=3').subscribe((val:any) =>{
      this.spinner = false;
      this.list = val['data'];
      this.secondaryList= JSON.parse(JSON.stringify(this.list));
      
    })
  }
  sort(sortString: string){
    if(sortString == 'first_name'){
      this.list.sort((a,b)=> {
        let fa = a.first_name.toLowerCase();
        let fb = b.first_name.toLowerCase();
        if(fa<fb)
        return -1;
  
        if(fa> fb)
        return 1;
  
        return 0;
      })
    } else if(sortString == 'last_name'){
      this.list.sort((a,b)=> {
        let fa = a.last_name.toLowerCase();
        let fb = b.last_name.toLowerCase();
        if(fa<fb)
        return -1;
  
        if(fa> fb)
        return 1;
  
        return 0;
      })
    } else if(sortString == 'none'){
      this.list = this.secondaryList;
    }
    
  }

  ngOnInit() {
  }

}
