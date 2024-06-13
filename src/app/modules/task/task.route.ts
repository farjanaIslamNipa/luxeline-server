import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { TaskControllers } from './task.controller'
import { TaskValidations } from './task.validation'

const router = express.Router()

router.post(
  '/create-Task',
  TaskControllers.createTask
  )
router.get('/', TaskControllers.getAllTasks)

router.get('/:id', TaskControllers.getSingleTask)

router.patch('/:id', validateRequest(TaskValidations.updateTaskValidationSchema), TaskControllers.updateTask)

router.delete('/:id', TaskControllers.deleteTask)


 
export const TaskRoutes = router