var myobj = {
    url:"https://fakerestapi.azurewebsites.net",
    type:'GET',
}

document.querySelector('button.btn.btn-success').addEventListener('click',function(){
    // alert('ok')
    
    $.ajax({
        ...myobj,
        url:myobj.url+'/api/v1/Users', 
        beforeSend:function(xhr){

        },
        success:function(result,status,xhr){
            var tr = ``
            result.forEach(element => {
                console.log(element);
                tr += `<tr>
                            <td>`+ element.id +`</td>
                            <td>`+ element.userName +`</td>
                            <td>`+ element.password +`</td>
                            <td>
                                <button class="btn btn-sm btn-success s_viewbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                <button class="btn btn-sm btn-info s_editbtn">Edit</button>
                                <button class="btn btn-sm btn-danger s_delbtn">Delete</button>
                            </td>
                        </tr>`
            });

            document.querySelector('table > tbody').innerHTML = tr;
        },
        error:function(xhr,status,error){

        },
        complete:function(xhr,status){

        },
    })
})

document.addEventListener('click',function(e){
    if(e.target.classList.contains('s_delbtn')){
        console.log('yes');
        var userid = e.target.closest('tr').querySelector('td:first-child').innerHTML;

        e.target.closest('tr').remove();
        $.ajax({
            ...myobj,
            url:myobj.url + '/api/v1/Users/' + userid,
            type:"DELETE",
            beforeSend:function(){

            },
            success:function(result,status,xhr){
                // alert("Delete successfully")
                toastr.success('Deleted Successfully');
            },
            error:function(){

            },
            complete:function(){

            },
        })
    }else{
        console.log('no');
    }
})