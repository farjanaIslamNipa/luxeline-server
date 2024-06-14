import {Schema} from "mongoose";
import {TRecaptcha} from "./recaptcha.interface";

const recaptchaSchema = new Schema<TRecaptcha>({
  token: {
    type: String,
    required: true
  }
})
