import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../Services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  id;
  name: string;
  email: string;
  details: string;
  image =
    "https://images.unsplash.com/photo-1487915650694-c30bafaa5a34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80";
  user = {};
  users;
  constructor(private adduser: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.adduser.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sub() {
    this.id = this.users[this.users.length - 1].id + 1;
    this.user = {
      id: this.id,
      name: this.name,
      email: this.email,
      details: this.details,
      image: this.image,
    };

    this.adduser.addUser(this.user).subscribe();
    this.router.navigate(["users"]);
  }
}
