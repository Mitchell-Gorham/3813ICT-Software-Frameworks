export class Users{
    constructor(username,birthdate,age,email,password,valid){
        this.username=username;
        this.birthdate=birthdate;
        this.age=age;
        this.email=email;
        this.password=password;
        this.valid=valid;
    }
}

bob = new Users("Bob", "5/5/1995", 24, "abc@com", "123", false);
bill = new Users("Bill", "5/5/1995", 24, "bcd@com", "234", false);
ben = new Users("Ben", "5/5/1995", 24, "cde@com", "345", false);
console.log(__dirname);