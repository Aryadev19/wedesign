
// Mobile Menu

  document.getElementById("hamburguer-icon").onclick = function(){
    document.getElementById("sliding-header-menu-outer").style.right = "0px"
  }

  document.getElementById("sliding-header-menu-close-button").onclick = function(){
    document.getElementById("sliding-header-menu-outer").style.right = "-320px"

  }


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTab = document.getElementsByClassName("single-tab")

for(var a =0;a<aboutUsTab.length;a++){
    aboutUsTab[a].onclick = function(){
      var clickedEvent = this.innerHTML
      document.getElementById("box-text").innerHTML = aboutUs[clickedEvent]

        for(var b=0;b<aboutUsTab.length;b++){
          aboutUsTab[b].style.backgroundColor = unseletectedColor
          aboutUsTab[b].style.fontWeight = "normal"
        }
          this.style.backgroundColor = seletectedColor
          this.style.fontWeight = "bold"
    }
}



// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var nextArrow = document.getElementById("service-next")
var previousArrow = document.getElementById("service-previous")
var serviceTitle = document.getElementById("service-title")
var serviceText = document.getElementById("service-text")

 var currentSurvice = 0
nextArrow.onclick = function(){
  if(currentSurvice==(ourServices.length)-1){
    currentSurvice==0
  }else{
    currentSurvice+=1
  }
    var title = ourServices[currentSurvice].title
    var text = ourServices[currentSurvice].text

    serviceTitle.innerHTML = title
    serviceText.innerHTML = text

}


previousArrow.onclick = function(){
    if(currentSurvice==0){
      currentSurvice == (ourServices.length)-1
    }
    else{
      currentSurvice-=1

    }

  var title = ourServices[currentSurvice].title
  var text = ourServices[currentSurvice].text

  serviceTitle.innerHTML = title
  serviceText.innerHTML = text

}



// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();

  
   


   