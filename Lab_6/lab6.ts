type Student = {
    id: number;
    name: string;
    group: number;
}

const array: Student[] = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
];

let array1: Student ={id: 1, name: 'Vasya', group: 10};
console.log(array1.group);
console.log(array[1]);

type CarsType = {
    manufacturer?: string;
    model?: string;
}

type ArrayCarsType = {
    cars: CarsType[];
}

let car: CarsType = {}; // объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
console.log (car)

const car1: CarsType = {manufacturer:'', model:''}; //объект создан!
car1.manufacturer = "manufacturer2";
car1.model = 'model2';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer3";
car2.model = 'model3';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

console.log(arrayCars[0].cars[1])

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type DoneType = boolean;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type MarkType = {
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
}

type StudentType = {
    id: number;
    name: string;
    group: GroupFilterType;
    marks: MarkType[];
}

type GroupType = {
    students: StudentType[];
    studentsFilter: (group: GroupFilterType) => StudentType[];
    marksFilter: (mark: MarkFilterType) => StudentType[];
    deleteStudent: (id: number) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
}

let group: GroupType = {
    students: [
        {
            id: 1,
            name: 'Vasya',
            group: 10,
            marks: [
                { subject: "ОАиП", mark: 3, done: true },
                { subject: "ОКГ", mark: 8, done: true }
            ]
        },
        {
            id: 2,
            name: 'Stesha',
            group: 11,
            marks: [
                { subject: "БД", mark: 1, done: true },
                { subject: "ТРПИ", mark: 4, done: true }
            ]
        },
        {
            id: 3,
            name: 'Masha',
            group: 11,
            marks: [
                { subject: "АЛОЦВ", mark: 9, done: true }
            ]
        }
    ],
    studentsFilter: function (group: GroupFilterType) {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function (mark: MarkFilterType) {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    },
    deleteStudent: function (id: number) {
        this.students = this.students.filter(student => student.id !== id);
    },
    mark: 4,
    group: 5,
};

console.log(group.studentsFilter(group.group))
console.log(group.marksFilter(group.mark))
group.deleteStudent(2)
console.log(group.students)

