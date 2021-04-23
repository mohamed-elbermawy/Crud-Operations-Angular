import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../Services/users.service";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.css"],
})
export class DeleteUserComponent implements OnInit {
  id;
  constructor(
    route: ActivatedRoute,
    private deleteUser: UsersService,
    private router: Router
  ) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.deleteUser.deleteUser(this.id).subscribe();
    this.router.navigate(["users"]);
  }
}
