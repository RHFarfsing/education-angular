import { Major } from '../major/major.class';

export class Student{
    id: number = 0;
    name: string = 'New Student';
    sat: number = 400;
    gpa: number = 3;
    majorId: number = 0;
    major: Major = null;
    constructor(){}
}