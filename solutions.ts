const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier || multiplier === 0) return value * multiplier;

  return value * 2;
};

type processType = string | number | boolean;

const processInput = (value: processType): string | number => {
  if (typeof value === "string") return value.trim().toLowerCase();
  else if (typeof value === "number") return value * 10;
  else if (value) return "Active";
  else return "Inactive";
};

type coordinate = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];

const formatCoordinate = (coordinate: coordinate): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((prev: T[], curr: T[]): T[] => prev.concat(curr), []);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course): boolean =>
      course.students >= minStudents && course.isPublished === true,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item: T): T[K] => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) throw new Error("Access Denied: Must be 18 or older");

  await new Promise<void>((resolve): void => {
    setTimeout(resolve, 1000);
  });

  return "Access Granted";
};
