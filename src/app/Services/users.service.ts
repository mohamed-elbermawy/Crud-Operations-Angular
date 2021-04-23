import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  url = "http://localhost:3000/users";

  constructor(private userService: HttpClient) {}

  getAllUsers() {
    return this.userService.get(this.url);
  }

  getUserById(id) {
    return this.userService.get(this.url + "/" + id);
  }

  addUser(user) {
    return this.userService.post(this.url, user);
  }

  deleteUser(id) {
    return this.userService.delete(this.url + "/" + id);
  }

  updateUser(id, user) {
    return this.userService.patch(this.url + "/" + id, user);
  }
}
