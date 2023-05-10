import { Course } from "./model/course";
import { Component } from "@angular/core";
import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log(course);
  }
}
