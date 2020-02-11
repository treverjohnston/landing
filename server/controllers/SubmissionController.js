import _submissionService from '../services/SubmissionService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'


//PUBLIC
export default class SubmissionsController {
  constructor() {
    this.router = express.Router()
      .post('', this.create)
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      //only gets submissions by user who is logged in
      let data = await _submissionService.getAll()
      console.log('Get all', data);
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await _submissionService.getById(req.params.id)
      console.log('Get by id', data);
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      console.log('creating', req)
      let data = await _submissionService.create(req.body)
      console.log('Create', data);
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }


  async delete(req, res, next) {
    try {
      await _submissionService.delete(req.params.id)
      console.log('Delete', data);
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


