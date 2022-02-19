interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(obj: IPersonData) {
        this._name = obj.name;
        this._secondName = obj.secondName;
        this._age = obj.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            age: this._age,
            secondName: this._secondName
        }
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    constructor(obj: IStudentData) {
        super(obj);
        this._phone = obj.phone;
    }

    getData(): IStudentData {
        return { ...super.getData(), phone: this._phone};
    }
}
