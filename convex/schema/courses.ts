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


export const studentCourseReports = defineTable({
    courseId: v.id("courses"),
    studentId: v.id("students"),
    report: v.string(),
    assessment: v.union(v.literal("High"), v.literal("Medium"), v.literal("Low")),
    progress: v.number(),
}).index("by_studentId", ["studentId"])
  .index("by_courseId", ["courseId"])
  .index("by_studentId_and_courseId", ["studentId", "courseId"]);


export const courseReports = defineTable({
    courseId: v.id("courses"),
    report: v.string(),
    assessment: v.union(v.literal("High"), v.literal("Medium"), v.literal("Low")),
    averageProgress: v.number(),
}).index("by_courseId", ["courseId"]);