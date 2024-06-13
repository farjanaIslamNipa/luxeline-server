/* eslint-disable no-console */

import { TTask } from "./task.interface";
import { Task } from "./task.model";

//CREATE COURSE
const createTaskIntoDB = async (payload: TTask) => {
  const result = await Task.create(payload);

  return result;
};

// GET ALL COURSES
const getAllTasksFromDB = async (query: Record<string, unknown>) => {

  const result = await Task.find();

  return result;
};

// GET SINGLE COURSE
const getSingleTaskFromDB = async (id: string) => {
  const result = await Task.findById(id)

  return result;
};

// UPDATE COURSE
const updateTaskIntoDB = async (id: string, payload: Partial<TTask>) => {
 console.log(id, payload)
 
};

// DELETE COURSE
const deleteTaskFromDB = async (id: string) => {
  const result = await Task.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};


export const TaskServices = {
  createTaskIntoDB,
  getAllTasksFromDB,
  getSingleTaskFromDB,
  updateTaskIntoDB,
  deleteTaskFromDB
};
