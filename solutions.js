const multiplyValue = (value, multiplier) => {
    if (multiplier || multiplier === 0)
        return value * multiplier;
    return value * 2;
};
const processInput = (value) => {
    if (typeof value === "string")
        return value.trim().toLowerCase();
    else if (typeof value === "number")
        return value * 10;
    else if (value)
        return "Active";
    else
        return "Inactive";
};
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    return arrays.reduce((prev, curr) => prev.concat(curr), []);
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.students >= minStudents && course.isPublished === true);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    if (age < 18)
        throw new Error("Access Denied: Must be 18 or older");
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return "Access Granted";
};
export {};
