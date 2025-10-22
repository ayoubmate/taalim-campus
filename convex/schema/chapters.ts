import { defineTable } from "convex/server";
import { v } from "convex/values";

export const chapters = defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    startdate: v.number(),
    enddate: v.number(),
    courseId: v.id("courses"),
}).index("by_course_id", ["courseId"])
  .index("by_title", ["title"]);

  export const studentChapterReports = defineTable({
    chapterId: v.id("chapters"),
    studentId: v.id("students"),
    report: v.string(),
    assessment: v.union(v.literal("High"), v.literal("Medium"), v.literal("Low")),
    meanExerciceScore: v.number(),
    meanActivityScore: v.number(),
    comprehensionScore: v.number(),
}).index("by_studentId", ["studentId"])
  .index("by_chapterId", ["chapterId"])
  .index("by_studentId_and_chapterId", ["studentId", "chapterId"]);


  export const chapterReports = defineTable({
    chapterId: v.id("chapters"),
    report: v.string(),
    assessment: v.union(v.literal("High"), v.literal("Medium"), v.literal("Low")),
    averageMeanExerciceScore: v.number(),
    averageMeanActivityScore: v.number(),
    averageComprehensionScore: v.number(),
}).index("by_chapterId", ["chapterId"]);



