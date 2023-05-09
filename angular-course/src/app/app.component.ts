import { Course } from "./model/course";
import { Component } from "@angular/core";
import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];

  onCourseSelected(course: Course) {
    console.log(course);
  }
}