import { defineTable } from "convex/server";
import { v } from "convex/values";

export const exercises = defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    dueDate: v.number(),
    chapterId: v.id("chapters"),
    storageId: v.id("_storage"),
}).index("by_chapter_id", ["chapterId"])    
  .index("by_dueDate", ["dueDate"]);


export const studentExerciseSessions = defineTable({
    exerciseId: v.id("exercises"),
    studentId: v.id("students"),
    status: v.union(v.literal("not_started"), v.literal("in_progress"), v.literal("completed")),
}).index("by_studentId_and_status", ["studentId", "status"])
.index("by_exerciseId_and_status", ["exerciseId", "status"])
.index("by_exerciseId_and_studentId", ["exerciseId", "studentId"]);


export const studentExerciseMessages = defineTable({    
    studentExerciseSessionId: v.id("studentExerciseSessions"),
    message: v.string(),
    isFromStudent: v.boolean(),
});


export const studentExerciseSubmissions = defineTable({
    studentExerciseSessionId: v.id("studentExerciseSessions"),
    storageId: v.id("_storage"),
}).index("by_studentExerciseSessionId", ["studentExerciseSessionId"]);


export const studentExerciseReports = defineTable({
    studentExerciseSessionId: v.id("studentExerciseSessions"),
    report: v.string(),
    score: v.number(),
}).index("by_studentExerciseSessionId", ["studentExerciseSessionId"]);