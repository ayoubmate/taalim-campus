import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';


import { activities, studentActivitySessions, studentActivityMessages, studentActivityReports } from './schema/activities';
import { exercises, studentExerciseSessions, studentExerciseMessages, studentExerciseSubmissions, studentExerciseReports } from './schema/exercises';
import { studentComprehensionSessions, studentComprehensionMessages, studentComprehensionReports } from './schema/comprehension';
import { materials } from './schema/materials';
import { objectives, studentObjectives } from './schema/objectives';
import { chapters,studentChapterReports, chapterReports } from './schema/chapters';
import { courses, studentCourseReports, courseReports, courseStudents } from './schema/courses';
import { students} from './schema/students';
import { teachers } from './schema/teachers';
import { users } from './schema/users';

export default defineSchema({
  users,
  teachers,
  students,
  courses,
  courseStudents,
  courseReports,
  studentCourseReports,
  chapters,
  chapterReports,
  studentChapterReports,
  materials,
  objectives,
  studentObjectives,
  studentComprehensionSessions,
  studentComprehensionMessages,
  studentComprehensionReports,
  exercises,
  studentExerciseSessions,
  studentExerciseSubmissions,
  studentExerciseMessages,
  studentExerciseReports,
  activities,
  studentActivitySessions,
  studentActivityMessages,
  studentActivityReports,
});


