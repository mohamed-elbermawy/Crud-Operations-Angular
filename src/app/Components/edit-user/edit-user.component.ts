import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../Services/users.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"],
})
export class EditUserComponent implements OnInit {
  id;
  name: string;
  email: string;
  details: string;
  image: string;
  user = {};
  userData;

  constructor(
    private edituser: UsersService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.edituser.getUserById(this.id).subscribe(
      (res) => {
        this.userData = res;
        this.name = this.userData.name;
        this.email = this.userData.email;
        this.details = this.userData.details;
        this.image = this.userData.this.image;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sub() {
    this.user = {
      id: this.id,
      name: this.name,
      email: this.email,
      details: this.details,
      image: this.image,
    };
    this.edituser.updateUser(this.id, this.user).subscribe();
    this.router.navigate(["users"]);
  }
}
