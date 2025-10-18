import {  defineTable } from 'convex/server';
import { v } from 'convex/values';

export const teachers = defineTable({
    userId: v.id("users"),
}).index("by_user_id", ["userId"])