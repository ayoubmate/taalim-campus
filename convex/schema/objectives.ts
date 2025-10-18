import { defineTable } from "convex/server";
import { v } from "convex/values";

export const objectives = defineTable({
    content: v.string(),
    order: v.number(),
    chapterId: v.id("chapters"),
}).index("by_chapter_id", ["chapterId"])

//to validate the indexes
export const studentObjectives = defineTable({
    objectiveId: v.id("objectives"),
    studentId: v.id("students"),
    status: v.union(v.literal("not_started"), v.literal("in_progress"), v.literal("completed")),
}).index("by_studentId_and_status", ["studentId", "status"])
.index("by_objectiveId_and_status", ["objectiveId", "status"])
.index("by_objectiveId_and_studentId", ["objectiveId", "studentId"]);

