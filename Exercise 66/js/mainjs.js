function loadStudent()
{
    parser=new DOMParser()
    xmlDoc=parser.parseFromString(xmlData,"text/xml")
    id=xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue
    name=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue
    birthday=xmlDoc.getElementsByTagName("birthday")[0].childNodes[0].nodeValue
    gender=xmlDoc.getElementsByTagName("gender")[0].childNodes[0].nodeValue
    studentBody=document.getElementById("studentBody")
    studentBody.innerHTML=""
    tr="<tr><td colspan='2' bgcolor='lightgreen'>Student Information</td></tr>"
    studentBody.innerHTML+=tr
    tr="<tr onmouseover='mouseOverRow(this)' onmouseout='mouseOutRow(this)'>"+"<td>Student ID:</td>"+"<td>"+id+"</td>"+"</tr>"
    studentBody.innerHTML+=tr
    tr="<tr onmouseover='mouseOverRow(this)' onmouseout='mouseOutRow(this)'>"+"<td>Student Name:</td>"+"<td>"+name+"</td>"+"</tr>"
    studentBody.innerHTML+=tr
    tr="<tr onmouseover='mouseOverRow(this)' onmouseout='mouseOutRow(this)'>"+"<td>Birthday:</td>"+"<td>"+birthday+"</td>"+"</tr>"
    studentBody.innerHTML+=tr
    tr="<tr onmouseover='mouseOverRow(this)' onmouseout='mouseOutRow(this)'>"+"<td>Gender:</td>"+"<td>"+gender+"</td>"+"</tr>"
    studentBody.innerHTML+=tr
}

function mouseOverRow(row){
    row.style.backgroundColor="blue"
    row.style.color="white"
}

function mouseOutRow(row)
{
    row.style.backgroundColor="white"
    row.style.color="black"
}
