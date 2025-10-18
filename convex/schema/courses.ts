import {  defineTable } from 'convex/server';
import { v } from 'convex/values';

export const courses = defineTable({
    title: v.string(),
    description: v.string(),
    teacherId: v.id("teachers"),
    code: v.string(),
}).index("by_teacher_id", ["teacherId"])
  .index("by_title", ["title"])
  .index("by_code", ["code"]);


export const courseStudents = defineTable({
    courseId: v.id("courses"),
    studentId: v.id("students"),
}).index("by_course_id", ["courseId"])
  .index("by_student_id", ["studentId"]);