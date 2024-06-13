import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TaskServices } from "./task.service";

const createTask = catchAsync(async(req, res)=> {
  const result = await TaskServices.createTaskIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task created successfully',
    data: result
  })
})

const getAllTasks = catchAsync(async(req, res) => {
  const result = await TaskServices.getAllTasksFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tasks retrieved successfully',
    data: result
  })
})

const getSingleTask = catchAsync(async(req, res) => {
  const {id} = req.params;

  const result = await TaskServices.getSingleTaskFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task retrieved successfully',
    data: result
  })
})

const updateTask = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TaskServices.updateTaskIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is updated successfully',
    data: result,
  });
});


const deleteTask = catchAsync(async(req, res) => {
  const {id} = req.params;

  const result = await TaskServices.deleteTaskFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: result
  })
})



export const TaskControllers = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask
}

