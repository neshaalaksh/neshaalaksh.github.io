/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Object with tag name as key and their respective image as value


// Array of object for projects
const projects = [
  {
    title: "Potato Deluge",
    cardImage: "./images/pd.png",
    num:1
  },
  {
    title: "Scalloped potato (Layered)",
    cardImage: "./images/sp.png",
    num:2
  },
  {
    title: "Potato wedges with Chilli oil, Garlic butter and mayonnaise (baked)",
    cardImage: "./images/pw1.jpg",
    num:3
  },
  {
    title: "Potato wedges with Cheese sauce (baked)",
    cardImage: "./images/pw2.jpg",
    num:4
  },
  {
    title: "Cajun Potato wedges (baked)",
    cardImage: "./images/pw3.png",
    num:5
  },
  {
    title: "Potato wedges (fried)",
    cardImage: "./images/pw4.png",
    num:6
  },
  {
    title: "Stacked Potato (baked)",
    cardImage: "./images/stackedpotato.png",
    num:7
  },
  {
    title: "Tornado potato",
    cardImage: "./images/tornadopotato.png",
    num:8
  },
  {
    title: "Baked Potato (v1)",
    cardImage: "./images/bpv1.jpg",
    num:9
  },
  {
    title: "Baked Potato (v2)",
    cardImage: "./images/bpv2.jpg",
    num:10
  },
  {
    title: "Pan fried Potato",
    cardImage: "./images/pfp.png",
    num:11
  },
  {
    title: "Garlic Oil infused Potato",
    cardImage: "./images/goip.png",
    num:12
  },
  {
    title: "Chilli oil",
    cardImage: "./images/co.jpg",
    num:13
  },
  {
    title: "Cheese sauce",
    cardImage: "./images/cs.png",
    num:14
  },
  {
    title: "Veg Noodles with chilli oil",
    cardImage: "./images/vnwco.jpg",
    num:15
  },
  {
    title: "Cheddar cheese potato sticks(baked)",
    cardImage: "./images/cpcs.jpg",
    num:16
  },
  {
    title: "Potato wedges with Chilli oil(baked)",
    cardImage: "./images/pwcb.png",
    num:17
  },
  {
    title: "Savoury gateau",
    cardImage: "./images/sg.jpg",
    num:18
  },
  {
    title: "Corn canapés",
    cardImage: "./images/cc.png",
    num:19
  },
  {
    title: "Mozarella cheesy wedges cupcake",
    cardImage: "./images/mcc.png",
    num:20
  },
  {
    title: "Chocolate pancake(eggless) and Potato wedges with herb cheese sauce",
    cardImage: "./images/cppw.jpg",
    num:21
  },
  {
    title: "Paneer tikka frankie roll, Chocolate cake and Potato wedges with cheese sauce",
    cardImage: "./images/pfcppw.jpg",
    num:22
  },
  {
    title: "Garlic bread",
    cardImage: "./images/gb.jpg",
    num:23
  },
  {
    title: "Chilli garlic potatoes",
    cardImage: "./images/cgp.jpg",
    num:24
  },
  {
    title: "Crispy cheesy corn with paneer chunks",
    cardImage: "./images/ccwpcc.jpg",
    num:25
  },
  {
    title: "Chilli cheese toast (baked)",
    cardImage: "./images/cct.jpg",
    num:26
  },
  {
    title: "Garlic parmesan smashed potato (baked)",
    cardImage: "./images/gpsp.png",
    num:27
  },
  {
    title: "Garlic mayonnaise baked potato",
    cardImage: "./images/gmbp.png",
    num:28
  },
  {
    title: "Cajun spiced potatoes",
    cardImage: "./images/csp.jpg",
    num:29
  },
  {
    title: "Parmesan and herb roasted potatoes (baked)",
    cardImage: "./images/phrp.jpg",
    num:30
  },
  {
    title: "Chilli garlic butter hasselback potato",
    cardImage: "./images/hp.jpg",
    num:31
  },
  {
    title: "Cheesy herbo maggie",
    cardImage: "./images/chm.jpg",
    num:32
  },
  {
    title: "Mug pizza",
    cardImage: "./images/mp.jpg",
    num:33
  },
  {
    title: "Roasted garlic potatoes (baked)",
    cardImage: "./images/rgp.jpg",
    num:34
  },
  {
    title: "Potato cheese sticks",
    cardImage: "./images/pcs.png",
    num:35
  },
  {
    title: "Chocolate ice cream",
    cardImage: "./images/cic.png",
    num:36
  },
  {
    title: "Spring roll (baked)",
    cardImage: "./images/spb.png",
    num:37
  },
  {
    title: "French fries (baked)",
    cardImage: "./images/ffb.jpg",
    num:38
  },
  {
    title: "Garlic French fries (baked)",
    cardImage: "./images/gffb.jpg",
    num:39
  },
  {
    title: "Cottage fries",
    cardImage: "./images/cf.png",
    num:40
  },
  {
    title: "Cheesy aloo tikki burger",
    cardImage: "./images/catb.png",
    num:41
  },
  {
    title: "Stuffed bindhi fry",
    cardImage: "./images/sfb.png",
    num:42
  },
  {
    title: "Parmesan and garlic roasted potato cubes",
    cardImage: "./images/pgpc.jpg",
    num:43
  },
  {
    title: "Pizza",
    cardImage: "./images/p.jpg",
    num:44
  },
  {
    title: "Lilliputian's paneer tikka",
    cardImage: "./images/lp.jpg",
    num:45
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, num}) => {
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="./recipe/recipe${num}.html">${title}</a></h1>
            </div>
          </div>
        </div>
      </div>
    </div>`)
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  button = document.getElementsByClassName("tagbutton");
  title = document.getElementsByClassName("title");

  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
