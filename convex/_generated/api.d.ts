/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as schema_activities from "../schema/activities.js";
import type * as schema_chapters from "../schema/chapters.js";
import type * as schema_comprehension from "../schema/comprehension.js";
import type * as schema_courses from "../schema/courses.js";
import type * as schema_exercises from "../schema/exercises.js";
import type * as schema_materials from "../schema/materials.js";
import type * as schema_objectives from "../schema/objectives.js";
import type * as schema_students from "../schema/students.js";
import type * as schema_teachers from "../schema/teachers.js";
import type * as schema_users from "../schema/users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "schema/activities": typeof schema_activities;
  "schema/chapters": typeof schema_chapters;
  "schema/comprehension": typeof schema_comprehension;
  "schema/courses": typeof schema_courses;
  "schema/exercises": typeof schema_exercises;
  "schema/materials": typeof schema_materials;
  "schema/objectives": typeof schema_objectives;
  "schema/students": typeof schema_students;
  "schema/teachers": typeof schema_teachers;
  "schema/users": typeof schema_users;
}>;
declare const fullApiWithMounts: typeof fullApi;

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "internal">
>;

export declare const components: {};
