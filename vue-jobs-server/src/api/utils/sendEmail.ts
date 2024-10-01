import nodemailer from "nodemailer";
import expressAsyncHandler from "express-async-handler";

interface User {
    firstName: string;
    email: string;
  }