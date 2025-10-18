import { defineTable } from "convex/server";
import { v } from "convex/values";

export const exercices = defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    dueDate: v.number(),
    chapterId: v.id("chapters"),
    storageId: v.id("_storage"),
}).index("by_chapter_id", ["chapterId"])    
  .index("by_dueDate", ["dueDate"]);


export const studentExerciceSessions = defineTable({
    exerciceId: v.id("exercices"),
    studentId: v.id("students"),
    status: v.union(v.literal("not_started"), v.literal("in_progress"), v.literal("completed")),
}).index("by_studentId_and_status", ["studentId", "status"])
.index("by_exerciceId_and_status", ["exerciceId", "status"])
.index("by_exerciceId_and_studentId", ["exerciceId", "studentId"]);


export const studentExerciceMessages = defineTable({    
    studentExerciceConversationId: v.id("studentExerciceConversations"),
    message: v.string(),
    isFromStudent: v.boolean(),
});


export const studentExerciceSubmissions = defineTable({
    studentExerciceSessionId: v.id("studentExerciceSessions"),
    storageId: v.id("_storage"),
}).index("by_studentExerciceSessionId", ["studentExerciceSessionId"]);
