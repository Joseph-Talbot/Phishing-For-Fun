function yes(){
    
    setTimeout(function(){
        document.getElementById('Yes').innerHTML = '';
    },3000);
    document.getElementById('Yes').innerHTML = 'This is Correct';
}
function no(){
    
    setTimeout(function(){
        document.getElementById('No').innerHTML = '';
    },3000);
    document.getElementById('No').innerHTML = 'This is Incorrect';
}
function change(email,blocks,id)
{
    var btn = document.getElementById(id);

    if (btn.value == blocks){
        btn.value = email;
        btn.innerHTML = email;
    }
    else{
        btn.value = blocks;
        btn.innerHTML = blocks;
    }    
}

