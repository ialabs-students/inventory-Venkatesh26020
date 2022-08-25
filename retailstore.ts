class Pen{
    count:number;
    High_Pen:string[];

    set_data(count:number,High_Pen:string[]):void{
       this.count=count;
        this.High_Pen=High_Pen;
    }

    display():void{
        console.log("High Pen : "+ this.High_Pen);
    }

    defect(name1:string | object):void{
        console.log("This pen is "+name1);
    }
}

let c1=new Pen();
let c2=new Pen();

c1.set_data(120,['reynolds','trimax','montex']);
c2.set_data(80,['parker','hero','flair']);
c1.display();
c2.display();

//add
c1.High_Pen.push("butterflow");
c2.High_Pen.push("pilot");

c1.display();
c2.display();

//defect
let remove_name:string="reynolds";
c1.defect(remove_name);


//Delete
for(let delete_pen in c1.High_Pen)
{
    if(c1.High_Pen[delete_pen]==="trimax"){
        delete c1.High_Pen[delete_pen];
        c1.display();
    }
}

//Threshold
if(c2.count<100){
    c2.defect(c2.High_Pen);
}
