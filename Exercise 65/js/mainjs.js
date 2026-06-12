function loadWebNode()
{
    webNode=document.getElementById("webNode")
    webNode.innerHTML=""
    for(i=0;i<nodes.length;i++)
    {
        li=document.createElement("li")
        li.innerHTML=nodes[i]
        webNode.appendChild(li)
    }
}

function addNode()
{
    content=myform.content.value
    pos=parseInt(myform.addPosition.value)
    webNode=document.getElementById("webNode")
    li=document.createElement("li")
    li.innerHTML=content
    if(pos>=webNode.children.length)
    {
        webNode.appendChild(li)
    }
    else
    {
        webNode.insertBefore(li,webNode.children[pos])
    }
}

function removeNode(){
    pos=parseInt(myform.removePosition.value)
    webNode=document.getElementById("webNode")
    webNode.removeChild(webNode.children[pos])
}

function modifyNode()
{
    content=myform.newContent.value
    pos=parseInt(myform.modifyPosition.value)
    webNode=document.getElementById("webNode")
    webNode.children[pos].innerHTML=content
}
