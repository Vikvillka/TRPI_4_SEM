"use strict";
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let array1 = { id: 1, name: 'Vasya', group: 10 };
console.log(array1.group);
console.log(array[1]);
let car = {}; // объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
console.log(car);
const car1 = { manufacturer: '', model: '' }; //объект создан!
car1.manufacturer = "manufacturer2";
car1.model = 'model2';
const car2 = {}; //объект создан!
car2.manufacturer = "manufacturer3";
car2.model = 'model3';
const arrayCars = [{
        cars: [car1, car2]
    }];
console.log(arrayCars[0].cars[1]);
let group = {
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
    studentsFilter: function (group) {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function (mark) {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(student => student.id !== id);
    },
    mark: 4,
    group: 5,
};
console.log(group.studentsFilter(group.group));
console.log(group.marksFilter(group.mark));
group.deleteStudent(2);
console.log(group.students);
