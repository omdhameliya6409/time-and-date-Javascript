function count()
{
    let data = document.querySelector("#count_1").innerHTML;
    let counter =0;
    let count_1 = setInterval(()=>
    {
        counter++;
        document.querySelector("#count_1").innerHTML=counter;
        if(counter==data)
        {
            clearInterval(count_1);
        }
    },5)
}
setTimeout(count,3000);
function count_counter()
{
    let data_2 = document.querySelector("#count_2").innerHTML;
    let counter_2 =0;
    let count_2 = setInterval(()=>
    {
        counter_2++;
        document.querySelector("#count_2").innerHTML=counter_2;
        if(counter_2==data_2)
        {
            clearInterval(count_2);
        }
    },3)
}
setTimeout(count_counter,5000);
function count_counter_3()
{
    let data_3 = document.querySelector("#count_3").innerHTML;
    let counter_3 =0;
    let count_3 = setInterval(()=>
    {
        counter_3++;
        document.querySelector("#count_3").innerHTML=counter_3;
        if(counter_3==data_3)
        {
            clearInterval(count_3);
        }
    },3)
}
setTimeout(count_counter_3,7000);
function count_counter_4()
{
    let data_4 = document.querySelector("#count_4").innerHTML;
    let counter_4 =0;
    let count_4 = setInterval(()=>
    {
        counter_4++;
        document.querySelector("#count_4").innerHTML=counter_4;
        if(counter_4==data_4)
        {
            clearInterval(count_4);
        }
    },3)
}
setTimeout(count_counter_4,10000);
