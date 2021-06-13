var age = 45;
var health_issue=true;

if (age>=65)
{
    console.log("eligible for vaccination");
}
else if(age>=18)
    {
        if(age<65)
        {
            if(health_issue==true)
            {
                console.log("eligible for vaccination");
            }
            else
            {
                console.log("not eligible for vaccination");
            }
        }
        else
        {
            console.log("not eligible for vaccination");
        }
    }
else
{
    console.log("not eligible for vaccination");
}