const users = [
{
name: "Aarav Sharma",
pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
bio: "Frontend developer who loves building clean UI."
},
{
name: "Priya Verma",
pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
bio: "Passionate about design and user experience."
},
{
name: "Rohan Singh",
pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
bio: "JavaScript enthusiast and problem solver."
},
{
name: "Ananya Gupta",
pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
bio: "Creative designer and photographer."
},
{
name: "Karan Mehta",
pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
bio: "Backend developer who loves Node.js."
},
{
name: "Sneha Kapoor",
pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
bio: "UI designer with a love for minimal layouts."
},
{
name: "Aditya Jain",
pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
bio: "Full stack developer exploring MERN stack."
},
{
name: "Neha Sharma",
pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
bio: "Building responsive web interfaces."
},
{
name: "Rahul Yadav",
pic: "https://images.unsplash.com/photo-1502767089025-6572583495b4",
bio: "Tech enthusiast learning modern web tech."
},
{
name: "Kavya Iyer",
pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
bio: "Creative coder and UI lover."
},
{
name: "Vikram Patel",
pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
bio: "Loves building scalable web apps."
},
{
name: "Riya Malhotra",
pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
bio: "Frontend developer focused on accessibility."
},
{
name: "Arjun Nair",
pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
bio: "Learning React and modern JS frameworks."
},
{
name: "Simran Kaur",
pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
bio: "Designer who enjoys crafting beautiful UI."
},
{
name: "Manish Tiwari",
pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
bio: "Backend engineer working with APIs."
},
{
name: "Pooja Choudhary",
pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
bio: "Creative developer exploring animations."
},
{
name: "Nikhil Agarwal",
pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
bio: "Tech geek who loves solving bugs."
},
{
name: "Meera Joshi",
pic: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
bio: "Passionate about UI and typography."
},
{
name: "Siddharth Roy",
pic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e",
bio: "Building cool projects with JavaScript."
},
{
name: "Tanvi Desai",
pic: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f",
bio: "Web designer who loves modern layouts."
}
];
let container=document.querySelector(".container");
/*  */
function showwUser(arr){
    arr.forEach((user) => {
        const card=document.createElement("div");
        card.classList.add("card");

        const img =document.createElement("img");
        img.src=user.pic;
        img.classList.add("bg-img");

        const bluredLayer=document.createElement("div");
        bluredLayer.classList.add("blured-layer");
        bluredLayer.style.backgroundImage=`(url${user.pic})`;
        
        const content=document.createElement("div");
        content.classList.add("content");

        const heading= document.createElement("h3");
        heading.textContent=user.name;

        const para=document.createElement("p")
        para.textContent=user.bio;

        //append in content
        content.appendChild(heading);
        content.appendChild(para);
        //append in card 
        card.appendChild(img);
        card.appendChild(bluredLayer);
        card.appendChild(content);

        

        //append card in body
        //document.body.appendChild(card);
      
        container.appendChild(card);


    });
}
showwUser(users);
let inp = document.querySelector(".inp");
inp.addEventListener("input",()=>{
    //console.log(inp.value);
    let newUsers=users.filter((user)=>{
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });
    container.innerHTML="";
    showwUser(newUsers);
})
// sare user show krana 


// filter krna input krne pr 

//show karana filtered users