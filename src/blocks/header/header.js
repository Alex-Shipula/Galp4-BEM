const button = document.querySelector('button[type=json]');
button.addEventListener('change', function (data){
$.ajax({
    dataType: "json",
    url:'/file.json',
    data: data,
    success: function(data) {
        console.log(data)
    }
})
});