import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { UsersComponent } from "./Components/users/users.component";
import { ErrorsComponent } from "./Components/errors/errors.component";
import { UserDetailsComponent } from "./Components/user-details/user-details.component";
import { AddUserComponent } from "./Components/add-user/add-user.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { EditUserComponent } from "./Components/edit-user/edit-user.component";
import { DeleteUserComponent } from "./Components/delete-user/delete-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: "users", component: UsersComponent },
  { path: "users/add", component: AddUserComponent },
  { path: "users/:id", component: UserDetailsComponent },
  { path: "users/edit/:id", component: EditUserComponent },
  { path: "users/delete/:id", component: DeleteUserComponent },
  { path: "errors", component: ErrorsComponent },
  { path: "**", component: ErrorsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ErrorsComponent,
    UserDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
