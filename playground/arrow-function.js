var test={
    name : 'Mark',
    sayHi: ()=>{
        console.log(`Hi, ${this.name}`);
    },
    sayBy (){
         console.log(`Hi, ${this.name}`);
    }
}

test.sayBy();