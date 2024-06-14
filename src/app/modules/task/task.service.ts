/* eslint-disable no-console */

import axios from "axios";
import { TTask } from "./task.interface";
import { Task } from "./task.model";

//CREATE COURSE
const createTaskIntoDB = async (payload: TTask) => {
  const token = payload.recaptchaToken
  if(token){
    try {
      const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
        params: {
          secret: '6LcSTfYpAAAAALnzALNMDebpJq8evZhPaHCoDmlt',
          response: token,
        },
      });
  
      const data = response.data;
      if (data.success) {
        const result = await Task.create(payload);
        return result;
        
      } else {
        throw new Error("You are detected robot!!")
  
      }
    } catch (error) {
      console.log(error, 'err')
    }
  }


};

// GET ALL COURSES
const getAllTasksFromDB = async () => {

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
