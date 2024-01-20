let profile_pic = document.getElementById("profile_pic");
let input_file = document.getElementById("input_file");

input_file.onchange = function(){
    profile_pic.src = URL.createObjectURL(input_file.files[0])
}