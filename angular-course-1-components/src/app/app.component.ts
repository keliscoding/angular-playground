import { Course } from "./model/course";
import { Component, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  /*   @ViewChild(CourseCardComponent)
  card: CourseCardComponent; */

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  onCourseSelected(course: Course) {
    console.log(this.cards);
  }
}
