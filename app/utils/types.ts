// Enum for UserRole
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

// User type
export type User = {
  id: number;
  email: string;
  name?: string | null;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  reservations: Reservation[];
};

// Classroom type
export type Classroom = {
  id: number;
  name: string;
  capacity: number;
  equipment: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  reservations: Reservation[];
};

// Reservation type
export type Reservation = {
  id: number;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  classroomId: number;
  user: User;
  classroom: Classroom;
};
