import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @Input()
  cardIndex: number;

  constructor() {}

  onCourseView() {
    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    /*ngClass is used whenever we want to add or remove a style
      to our template depending on the content*/
    return {
      beginner: this.course.category === "BEGINNER",
      intermediate: this.course.category === "INTERMEDIATE",
      advanced: this.course.category === "ADVANCED",
    };
  }

  cardStyles() {
    /*ngClass is used whenever we want to populate a css property depending
    on the date, for example, the image url that changes every card*/
    return { "text-decoration": "underline" };
  }
}
