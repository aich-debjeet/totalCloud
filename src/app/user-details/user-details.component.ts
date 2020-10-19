import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private client: HttpClient
  ) {
    console.log('hekko');

    this.router.params.subscribe(params => {
      if (params['id']) {
        const options =
          { params: new HttpParams().set('id', params['id']) };
        console.log(params['id']);
        this.client.get('https://reqres.in/api/users?delay=3',options).subscribe((val: any) => {
          console.log(val);
          this.userDetails = val['data'];

        })
      }
    })
  }

  ngOnInit() {
  }

}
