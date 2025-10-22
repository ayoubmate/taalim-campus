import { defineTable } from "convex/server";
import { v } from "convex/values";

export const activities = defineTable({ 
    title: v.string(),
    description: v.optional(v.string()),
    dueDate: v.optional(v.number()),
    chapterId: v.id("chapters"),
    storageId: v.optional(v.id("_storage")),
}).index("by_chapter_id", ["chapterId"]);


export const studentActivitySessions = defineTable({
    activityId: v.id("activities"),
    studentId: v.id("students"),
    status: v.union(v.literal("not_started"), v.literal("in_progress"), v.literal("completed") , v.literal("overdue")),
}).index("by_studentId_and_status", ["studentId", "status"])
.index("by_activityId_and_status", ["activityId", "status"])
.index("by_activityId_and_studentId", ["activityId", "studentId"]);


export const studentActivityMessages = defineTable({
    studentActivitySessionId: v.id("studentActivitySessions"),
    message: v.string(),
    isFromStudent: v.boolean(),
});

export const studentActivityReports = defineTable({
    studentActivitySessionId: v.id("studentActivitySessions"),
    report: v.string(),
    interactionQuality: v.union(v.literal("High"), v.literal("Medium"), v.literal("Low")),
}).index("by_studentActivitySessionId", ["studentActivitySessionId"]);