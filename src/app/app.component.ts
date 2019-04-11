import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public users: Array<any> = [];

  public constructor(
    private usersService: UserService
  ) {}

    public ngOnInit(): void {
    }

    public getUsers(user?: string): void {
      this.users = [];
      this.usersService
        .getUsers(user)
        .subscribe(
          (response) => {
            this.users = response;
          },
          (error) => {
            console.error('ERROR: ', error);
          }
        );
    }
}
