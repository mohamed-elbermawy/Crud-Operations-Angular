import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../Services/users.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  id;
  user;
  constructor(route: ActivatedRoute, private userDetails: UsersService) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.userDetails.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
