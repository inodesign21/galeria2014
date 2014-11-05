
 window.onload = function () {

// Instance the tour
    var tour = new Tour({
      steps: [
      {
        element: ".one",
        title: "Welcome",
        content: "Welcome to our app, take this tour to be familirized with it."
      },
          {
        element: ".two",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      },
      {
        element: ".three",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      },
      {
        element: ".four",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      },
      {
        element: ".five",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      }  
    ],
      backdrop: true,
      storage: false
    });

    tour.init();


    // Botão inicia tour (todo: somente para mobile)
    $('#tour').click(function(e){
    tour.start();
    e.preventDefault(); 
    });

    

    // Gallery
    document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

};  
        
        
// My app
$(document).ready(function() {
    $(".navbar").css('text-transform', 'uppercase');
});
        