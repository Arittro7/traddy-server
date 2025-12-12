export enum ListingCategory {
  FOOD = "Food",
  ART = "Art",
  ADVENTURE = "Adventure",
  HISTORY = "History",
  NIGHTLIFE = "Nightlife",
  SHOPPING = "Shopping",
}

export interface IListing {
  // Guide reference
  guide: string; 

  // Basic info
  title: string;
  description: string;
  category: ListingCategory;
  fee: number; // per person or per group
  duration: number; // in hours
  maxGroupSize: number;
  meetingPoint: string;

  
  images?: string[]; 
  availableDates?: Date[]; 

  // Stats
  totalBookings?: number;
  rating?: number;

  createdAt?: Date;
  updatedAt?: Date;
}
