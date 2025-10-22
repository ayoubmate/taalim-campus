import { defineTable } from "convex/server";
import { v } from "convex/values";


export const studentComprehensionSessions = defineTable({
    studentId: v.id("students"),
    chapterId: v.id("chapters"),
}).index("by_studentId", ["studentId"])
  .index("by_chapterId", ["chapterId"])
  .index("by_studentId_and_chapterId", ["studentId", "chapterId"]);

export const studentComprehensionMessages = defineTable({
    studentComprehensionSessionId: v.id("studentComprehensionSessions"),
    message: v.string(),
    isFromStudent: v.boolean(),
});

export const studentComprehensionReports = defineTable({
    studentComprehensionSessionId: v.id("studentComprehensionSessions"),
    report: v.string(),
    assessment: v.union(v.literal("High"), v.literal("Medium"), v.literal("Low")),
}).index("by_studentComprehensionSessionId", ["studentComprehensionSessionId"]);