mediaCat.addEventListener("change", ()=>{
  let mediaCat = document.getElementById("mediaCat").value;
  if(mediaCat == "image"){
    document.getElementById("displayTwo").innerHTML = "<input type='file' name='pic' style='margin:10px;' accept='image/*'>";
  }
  else if(mediaCat == "video"){
    document.getElementById("displayTwo").innerHTML = "<input type='file' name='vid' style='margin:10px;' accept='video/*'>";
  }
});
