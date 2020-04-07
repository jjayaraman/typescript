
class School {
    name:string;
    students:Array<Student>;

    getStudents<T>(st:T) {
        return st;
    }

}

class Year {
    name:string;
}

class Student {
    name:string;
    year:Year;
    sex:string[];

    test() {

        this.sex.push('1');
        //this.sex.push(false);

        const q = new Q<number>();
        q.add('1');
        q.add(1);
        q.add(false);
    }
    
}

class Q<T extends number> {

    add<T>(x:T) {
        return x;
    }
}



interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);