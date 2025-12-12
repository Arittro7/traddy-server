import { Types } from "mongoose";
import { IPayment } from "../payments/payments.interface";
import { IListing } from "../listings/listings.interface";

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface IBooking {
  _id?: string;
  listing: Types.ObjectId | IListing; 
  user: Types.ObjectId; 
  date: Date;
  groupSize: number;
  totalPrice: number;
  status: BookingStatus;
  payment?: Types.ObjectId; 
}
