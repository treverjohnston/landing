import mongoose from "mongoose"
import Submission from "../models/Submission"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Submission', Submission)

class SubmissionService {
  async getAll() {
    return await _repository.find()
  }

  async getById(id) {
    let data = await _repository.findOne({ _id: id })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this submission", 400)
    }
    return data
  }

  async create(rawData) {
    let data = await _repository.create(rawData)
    return data
  }

  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }

}


const _submissionService = new SubmissionService()
export default _submissionService