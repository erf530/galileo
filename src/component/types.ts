export type Task = {
  task_id: string;
  owner: string;
  priority: string;
};

export type Doctor = {
  doctor_id: string;
  first_name: string;
  last_name: string;
  dob: string;
  degree: string;
};

export type DoctorTasks = {
  doctor_id: string;
  first_name: string;
  last_name: string;
  dob: string;
  degree: string;
  selected: boolean;
  tasks: Task[];
};
