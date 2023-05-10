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

  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  onCourseSelected(course: Course) {
    console.log(course);
  }
}
