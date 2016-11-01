var myArr = [
	{
  		title: "Meeseeks",
  		name: "Mr. Meeseeks",
  		bio: "Meeseeks are creatures created to serve a singular purpose for which they will go to any length to fulfill.  After they serve their purpose, they expire and vanish into the air.",
  		image: "http://cloud-3.steamusercontent.com/ugc/534021245391403691/59733BD195E5CDEBD78E55816A04088C437E14A1/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637:358&composite-to%3D*%2C*%7C637%3A358&background-color=black",
  		lifespan: {
    			birth: 1747,
    			death: 1797
  				}
	},

	{
		title:"Smart Guy",
		name: "Rick",
		bio:"Rick is 60 years old and currently resides in his room in the Smith house. In the garage, he works on his inventions and scientific formulas and tests them out, traveling to other dimensions, building various robots and devices, and causing general mayhem in different parts of the universe",
		image: "http://i.giphy.com/3o7TKuAfCHifvPdcxG.gif",
		lifespan: {
			birth: 591,
			death: 530
			}

	},
	{
		title:"Not so Smart",
		name: "Morty",
		bio:" Morty is a young teenage boy. He has short brown hair that he wears straight and neatly combed around his head.",
		image: "http://i.giphy.com/3o7TKpUamSx5rXlttu.gif",
		lifespan: {
			birth: "NA",
			death: "NA"
			}

	},
		{
		title:"oo-wee!",
		name: "Mr. Poopybutthole",
		bio:" Mr. Poopybutthole is a very good friend to the Smiths, and although his exact relation to them is unknown, he is described as a long-time friend of the family.",
		image: "http://i.giphy.com/MKtUSOQw0Gpos.gif",
		lifespan: {
			birth: "NA",
			death: "NA"
			}

	}

]
var output = document.getElementById("output");
var input = document.getElementById("input");
var cards = document.getElementsByClassName('card')
 
  											
  											
   myArr.forEach(function(thing, index) {
  let prodCard = `<div id="card--${index}">
                        <h2>${thing.name}</h2>
                        <h3>${thing.title}</h3>
                       <section> <img class="images" src="${thing.image}"></section>
                       <p>${thing.bio}<p></p></p>
                      </div>`

  let prodDiv = document.createElement("div"); 
   prodDiv.classList.add("card")
  prodDiv.innerHTML = prodCard;
  output.appendChild(prodDiv);

  
  for(i=0; i<cards.length; i++){
  cards[i].addEventListener("click", bioFunction);
  }  

   
  
  
  input.addEventListener("keyup" , function(event){
  	console.log("keyup")
  	
  		if(event.keyCode === 13 ){
  			input.value = " ";
  		}
  		else if(prodDiv.classList.contains('border')) {
  		let newBio = document.getElementsByClassName('border');
  			console.log(newBio[0].childNodes[0].childNodes[8]);
  			newBio[0].childNodes[0].childNodes[8].innerHTML = input.value;
  		}
  		
  })
});

function bioFunction(){
	for (i=0; i<cards.length; i++){
		cards[i].classList.remove('border')
	};
	input.focus();
	event.currentTarget.classList.add('border')
}										
  		