function initPage()
{
    loadDay()
    loadMonth()
    loadYear()
    myform.day.value="01"
    myform.month.value="1"
    myform.year.value="1970"
    myform.fullname.focus()
    renderTable()
}


function loadDay(){
    day=document.getElementById("day")
    for(i=1;i<=31;i++)
    {
        d=i<10?"0"+i:""+i
        day.innerHTML+="<option value="+d+">"+d+"</option>"
    }
}

function loadMonth()
{
    month=document.getElementById("month")
    for (i=1;i<=12;i++){
        month.innerHTML+="<option value="+i+">"+i+"</option>"
    }
}

function loadYear()
{
    year=document.getElementById("year")
    for(i=1970;i<=2026;i++)
    {
        year.innerHTML+="<option value="+i+">"+i+"</option>"
    }

}

function getGender()
{
    radios=document.getElementsByName("gender")
    for(i=0;i<radios.length;i++)
    {
        if(radios[i].checked)
        {
            return radios[i].value
        }
    }
    return ""
}

function getHobbies(){
    checks=document.getElementsByName("hobby")
    hobbies=""
    for(i=0;i<checks.length;i++)
    {
        if(checks[i].checked)
        {
            if(hobbies!="")
                hobbies+=", "
            hobbies+=checks[i].value
        }
    }
    return hobbies
}

function getColor()
{
    colors=document.getElementsByName("color")
    for(i=0;i<colors.length;i++)
    {
        if(colors[i].checked)
        {
            return colors[i].value
        }
    }
    return ""
}

function isValidEmail(email)
{
    at=email.indexOf("@")
    dot=email.lastIndexOf(".")
    if(at>0 && dot>at+1 && dot<email.length-1)
        return true
    return false
}


function registerMember()
{
    name=myform.fullname.value
    emailvalue=myform.email.value
    if(name=="")
    {
        message.innerHTML="Name cannot be left blank."
        myform.fullname.focus()
        return
    }
    if(isValidEmail(emailvalue)==false)
    {
        message.innerHTML="Email must be valid."
        myform.email.focus()
        return
    }
    member={}
    member.name=name
    member.email=emailvalue
    member.gender=getGender()
    member.birthday=myform.day.value+"/"+myform.month.value+"/"+myform.year.value
    member.hobbies=getHobbies()
    member.color=getColor()
    members.push(member)
    message.innerHTML=""
    renderTable()
}

function resetForm()
{
    myform.fullname.value=""
    myform.email.value=""
    myform.day.value="01"
    myform.month.value="1"
    myform.year.value="1970"
    radios=document.getElementsByName("gender")
    for(i=0;i<radios.length;i++)
    {
        radios[i].checked=false
        if(i==0)
            radios[i].checked=true
    }
    checks=document.getElementsByName("hobby")
    for(i=0;i<checks.length;i++)
    {
        checks[i].checked=true
    }
    colors=document.getElementsByName("color")
    for(i=0;i<colors.length;i++)
    {
        colors[i].checked=false
        if(i==0)
            colors[i].checked=true
    }
    message.innerHTML=""
    myform.fullname.focus()
}

function nextForm(){
    resetForm()
}

function renderTable()
{
    memberBody=document.getElementById("memberBody")
    memberBody.innerHTML=""
    for(i=0;i<members.length;i++)
    {
        member=members[i]
        bgcolor=""
        if(member.color=="Blue")
            bgcolor=" bgcolor='blue'"
        if(member.color=="Red")
            bgcolor=" bgcolor='red'"
        if(member.color=="Yellow")
            bgcolor=" bgcolor='yellow'"
        if(member.color=="Green")
            bgcolor=" bgcolor='green'"
        if(member.color=="Violet")
            bgcolor=" bgcolor='violet'"
        tr="<tr>"+"<td>"+member.name+"</td>"+"<td>"+member.email+"</td>"+"<td>"+member.gender+"</td>"+"<td>"+member.birthday+"</td>"+"<td>"+member.hobbies+"</td>"+"<td"+bgcolor+">"+member.color+"</td>"+"</tr>"
        memberBody.innerHTML+=tr
    }

}
