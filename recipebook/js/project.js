/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Object with tag name as key and their respective image as value


// Array of object for projects
const projects = [
  {
    title: "Potato Deluge",
    cardImage: "./recipebook/images/pd.png",
    num:1
  },
  {
    title: "Scalloped potato (Layered)",
    cardImage: "./recipebook/images/sp.png",
    num:2
  },
  {
    title: "Potato wedges with Chilli oil, Garlic butter and mayonnaise (baked)",
    cardImage: "./recipebook/images/pw1.jpg",
    num:3
  },
  {
    title: "Potato wedges with Cheese sauce (baked)",
    cardImage: "./recipebook/images/pw2.jpg",
    num:4
  },
  {
    title: "Cajun Potato wedges (baked)",
    cardImage: "./recipebook/images/pw3.png",
    num:5
  },
  {
    title: "Potato wedges (fried)",
    cardImage: "./recipebook/images/pw4.png",
    num:6
  },
  {
    title: "Stacked Potato (baked)",
    cardImage: "./recipebook/images/stackedpotato.png",
    num:7
  },
  {
    title: "Tornado potato",
    cardImage: "./recipebook/images/tornadopotato.png",
    num:8
  },
  {
    title: "Baked Potato (v1)",
    cardImage: "./recipebook/images/bpv1.jpg",
    num:9
  },
  {
    title: "Baked Potato (v2)",
    cardImage: "./recipebook/images/bpv2.jpg",
    num:10
  },
  {
    title: "Pan fried Potato",
    cardImage: "./recipebook/images/pfp.png",
    num:11
  },
  {
    title: "Garlic Oil infused Potato",
    cardImage: "./recipebook/images/goip.png",
    num:12
  },
  {
    title: "Chilli oil",
    cardImage: "./recipebook/images/co.jpg",
    num:13
  },
  {
    title: "Cheese sauce",
    cardImage: "./recipebook/images/cs.png",
    num:14
  },
  {
    title: "Veg Noodles with chilli oil",
    cardImage: "./recipebook/images/vnwco.jpg",
    num:15
  },
  {
    title: "Cheddar cheese potato sticks(baked)",
    cardImage: "./recipebook/images/cpcs.jpg",
    num:16
  },
  {
    title: "Potato wedges with Chilli oil(baked)",
    cardImage: "./recipebook/images/pwcb.png",
    num:17
  },
  {
    title: "Savoury gateau",
    cardImage: "./recipebook/images/sg.jpg",
    num:18
  },
  {
    title: "Corn canapés",
    cardImage: "./recipebook/images/cc.png",
    num:19
  },
  {
    title: "Mozarella cheesy wedges cupcake",
    cardImage: "./recipebook/images/mcc.png",
    num:20
  },
  {
    title: "Chocolate pancake(eggless) and Potato wedges with herb cheese sauce",
    cardImage: "./recipebook/images/cppw.jpg",
    num:21
  },
  {
    title: "Paneer tikka frankie roll, Chocolate cake and Potato wedges with cheese sauce",
    cardImage: "./recipebook/images/pfcppw.jpg",
    num:22
  },
  {
    title: "Garlic bread",
    cardImage: "./recipebook/images/gb.jpg",
    num:23
  },
  {
    title: "Chilli garlic potatoes",
    cardImage: "./recipebook/images/cgp.jpg",
    num:24
  },
  {
    title: "Crispy cheesy corn with paneer chunks",
    cardImage: "./recipebook/images/ccwpcc.jpg",
    num:25
  },
  {
    title: "Chilli cheese toast (baked)",
    cardImage: "./recipebook/images/cct.jpg",
    num:26
  },
  {
    title: "Garlic parmesan smashed potato (baked)",
    cardImage: "./recipebook/images/gpsp.png",
    num:27
  },
  {
    title: "Garlic mayonnaise baked potato",
    cardImage: "./recipebook/images/gmbp.png",
    num:28
  },
  {
    title: "Cajun spiced potatoes",
    cardImage: "./recipebook/images/csp.jpg",
    num:29
  },
  {
    title: "Parmesan and herb roasted potatoes (baked)",
    cardImage: "./recipebook/images/phrp.jpg",
    num:30
  },
  {
    title: "Chilli garlic butter hasselback potato",
    cardImage: "./recipebook/images/hp.jpg",
    num:31
  },
  {
    title: "Cheesy herbo maggie",
    cardImage: "./recipebook/images/chm.jpg",
    num:32
  },
  {
    title: "Mug pizza",
    cardImage: "./recipebook/images/mp.jpg",
    num:33
  },
  {
    title: "Roasted garlic potatoes (baked)",
    cardImage: "./recipebook/images/rgp.jpg",
    num:34
  },
  {
    title: "Potato cheese sticks",
    cardImage: "./recipebook/images/pcs.png",
    num:35
  },
  {
    title: "Chocolate ice cream",
    cardImage: "./recipebook/images/cic.png",
    num:36
  },
  {
    title: "Spring roll (baked)",
    cardImage: "./recipebook/images/spb.png",
    num:37
  },
  {
    title: "French fries (baked)",
    cardImage: "./recipebook/images/ffb.jpg",
    num:38
  },
  {
    title: "Garlic French fries (baked)",
    cardImage: "./recipebook/images/gffb.jpg",
    num:39
  },
  {
    title: "Cottage fries",
    cardImage: "./recipebook/images/cf.png",
    num:40
  },
  {
    title: "Cheesy aloo tikki burger",
    cardImage: "./recipebook/images/catb.png",
    num:41
  },
  {
    title: "Stuffed bindhi fry",
    cardImage: "./recipebook/images/sfb.png",
    num:42
  },
  {
    title: "Parmesan and garlic roasted potato cubes",
    cardImage: "./recipebook/images/pgpc.jpg",
    num:43
  },
  {
    title: "Pizza",
    cardImage: "./recipebook/images/p.jpg",
    num:44
  },
  {
    title: "Lilliputian's paneer tikka",
    cardImage: "./recipebook/images/lp.jpg",
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
            <h1 class="title"><a href="./recipebook/recipe${num}.html">${title}</a></h1>
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
