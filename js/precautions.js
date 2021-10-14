var i = 0

precautions = [
    {
      "img": "imgs/mask.png",
      "text": "Wear a mask!"
    },
    {
      "img": "imgs/handwash.png",
      "text": "Wash your hands frequently!"
    },
    {
      "img": "imgs/social_distancing.png",
      "text": "Stay at least six feet away from others!"
    },
    {
      "img": "imgs/vaccine.png",
      "text": "If you can, get vaccinated!"
    }
]


function next() {  
    $("#precautions").fadeOut(1000);

    if(i == 3) {
        i = 0;
    } else {
        i += 1;
    }

    $("#precautions").fadeIn(1000);

    document.getElementById("prec_img").src = precautions[i].img;
    document.getElementById("tip").innerHTML = precautions[i].text;
}

function back() {
    $("#precautions").fadeOut(1000);

    if(i == 0) {
        i = 3;
    } else {
        i -= 1;
    }

    $("#precautions").fadeIn(1000);

    document.getElementById("prec_img").src = precautions[i].img;
    document.getElementById("tip").innerHTML = precautions[i].text;
}
