import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../Services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users;
  constructor(private allUsers: UsersService) {}

  ngOnInit(): void {
    this.allUsers.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
