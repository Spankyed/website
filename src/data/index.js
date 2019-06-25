// data file
const randString = () =>
  Math.random()
    .toString(36)
    .substring(3, 9)

const themes = [
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'orange',
  'yellow',
  'grey',
  'red',
  'pink'
]

const projects = [
  {
    "id": 1,
    "title": "My Task Grid",
    "image": "https://res.cloudinary.com/duua3lsu1/image/upload/v1557590908/blog/task-grid-thumbnail.png",
    "tools": "Javascript | React | Sass",
    "description": "Task management app built with Reacts",
    "text": 'Alright so Im not a crappy person. Sometimes I just think like one. Like this afternoon when I got a message from someone "looking for help with web design". It was obvious the guy had messaged the wrong person. Im a web developer (aka software developer/engineer). Not a web designer. But hold on, "after reading your Simbi page, I wonder if you might also be able to help me with another goal of mine". Hopefully something developer oriented, am I right?[screenshot - "Do you see this set-up here? www.dungeonsanddevelopers.com. Id really love to find a way to copy it (or make my own), where I can make my own talent tree, add my own images and text."]Heres a list of things Id really love. Id really love a puppy. Id really love a decent haircut. Id really love to see a few people attempt to drop in at my local skatepark. Id really love for there to be more 3D character artists/animators on the internet willing to work for free. Id really love it if Rune Skovbo could help Mackey calculate 2D blend trees in javascript so I can steal his animation code. Id really love it if the bank would stop forclosing on my home. Id really love to write a good blog entry.I probably wouldnt mind making a skill/talent tree for the guy messaging me either. I mean I have to do something similar to interface with the dialog tree from Watson Assistant for one of my project anyways. Plus if I decide not to help him, he might try to say I stole his idea and used it in one of my projects. If you havent visited the Dungeon And Developers website yet, dont worry, I already did it for you. Its basically a quiz to test how talented you are in web development. Im a lvl 24 web developer. [image here]Who am I fooling Im no lvl 24 web developer. Im a web designer at best. I should be honored that someone even messaged me for my help. Fuck my career aspirations, right? I am curently reevaluating why I signed up on that sYmBiOtiC site in the first place. My house is getting forclosed, I need to be looking for a way to pay this mortgage, not designing someones skill tree for the free. If your still reading this, let me take this opportunity to share with you my [resume] in case your considering hiring me for a job (please help).Idk where im going with this blog. Its my first time, go easy on me . If this blog hasnt been useful for anything, jus know... you should try and eat a mango while its still mostly green. The way I see it, most the mangos you will ever eat will probably be ripe and mostly yellow. But if your like me, and you really love mangos, try mixing it up by eating one while its still a little bitter. Its a nice way to condition yourselve for bullsh-[mango images]Crap, I suck at blogging. Feel like I couldve written the whole thing backwards and it wouldve still made as much sense. I hope I get better at this. And by get better, I mean I hope it takes less time cause I got other stuff to do. Btw there may have been more to the site that I titled this entry after. I just didnt care enough to look into it.  Supposedly its an RPG?I think the real takeaway here is this: if you wanna get someone to help you with something, make them reevaluate their identity, and provide them an opportunity to prove that they arent an imposter. And preferably get them to do so at a very challening moment in their lives.If you dont wanna hire me you can support me on patreon. Im tryna buy a racing sim rig. I will design you a website for all donations over 50. I havent really setup the patreon yet, so just cashapp me and we will work it out.',
    "date": "June 12, 2019",
    "tags": ["Design", "Devopment", "Javascript","Mangos"]
  },
  {
    "id": 2,
    "title": "My Task Grid",
    "image": "https://res.cloudinary.com/duua3lsu1/image/upload/v1557590908/blog/task-grid-thumbnail.png",
    "tools": "Javascript | React | Sass",
    "description": "Task management app built with Reacts",
    "text": 'Alright so Im not a crappy person. Sometimes I just think like one. Like this afternoon when I got a message from someone "looking for help with web design". It was obvious the guy had messaged the wrong person. Im a web developer (aka software developer/engineer). Not a web designer. But hold on, "after reading your Simbi page, I wonder if you might also be able to help me with another goal of mine". Hopefully something developer oriented, am I right?[screenshot - "Do you see this set-up here? www.dungeonsanddevelopers.com. Id really love to find a way to copy it (or make my own), where I can make my own talent tree, add my own images and text."]Heres a list of things Id really love. Id really love a puppy. Id really love a decent haircut. Id really love to see a few people attempt to drop in at my local skatepark. Id really love for there to be more 3D character artists/animators on the internet willing to work for free. Id really love it if Rune Skovbo could help Mackey calculate 2D blend trees in javascript so I can steal his animation code. Id really love it if the bank would stop forclosing on my home. Id really love to write a good blog entry.I probably wouldnt mind making a skill/talent tree for the guy messaging me either. I mean I have to do something similar to interface with the dialog tree from Watson Assistant for one of my project anyways. Plus if I decide not to help him, he might try to say I stole his idea and used it in one of my projects. If you havent visited the Dungeon And Developers website yet, dont worry, I already did it for you. Its basically a quiz to test how talented you are in web development. Im a lvl 24 web developer. [image here]Who am I fooling Im no lvl 24 web developer. Im a web designer at best. I should be honored that someone even messaged me for my help. Fuck my career aspirations, right? I am curently reevaluating why I signed up on that sYmBiOtiC site in the first place. My house is getting forclosed, I need to be looking for a way to pay this mortgage, not designing someones skill tree for the free. If your still reading this, let me take this opportunity to share with you my [resume] in case your considering hiring me for a job (please help).Idk where im going with this blog. Its my first time, go easy on me . If this blog hasnt been useful for anything, jus know... you should try and eat a mango while its still mostly green. The way I see it, most the mangos you will ever eat will probably be ripe and mostly yellow. But if your like me, and you really love mangos, try mixing it up by eating one while its still a little bitter. Its a nice way to condition yourselve for bullsh-[mango images]Crap, I suck at blogging. Feel like I couldve written the whole thing backwards and it wouldve still made as much sense. I hope I get better at this. And by get better, I mean I hope it takes less time cause I got other stuff to do. Btw there may have been more to the site that I titled this entry after. I just didnt care enough to look into it.  Supposedly its an RPG?I think the real takeaway here is this: if you wanna get someone to help you with something, make them reevaluate their identity, and provide them an opportunity to prove that they arent an imposter. And preferably get them to do so at a very challening moment in their lives.If you dont wanna hire me you can support me on patreon. Im tryna buy a racing sim rig. I will design you a website for all donations over 50. I havent really setup the patreon yet, so just cashapp me and we will work it out.',
    "date": "June 12, 2019",
    "tags": ["Design", "Devopment", "Javascript","Mangos"]
  }

]

const blogs = [
  {
    "id": 2,
    "title": "The Choice Is Yours ",
    //https://i.imgur.com/aFIFrum.png , https://i.imgur.com/ITmGmcm.jpg
    "image": "https://imgur.com/aFIFrum.png",
    "imgSizes":["640px","1000px"],
    "description": 'I went to mcdonalds this evening. They forgot to give me the fries that they charged me for. I didnt realize until I got home of course. I was dissapointed because I had been friendly with the lady who handed me my food, going as far as to ask her what time she got off that evening...',
    "text": 'I went to mcdonalds this evening. They forgot to give me the fries that they charged me for. I didnt realize until I got home of course. I was dissapointed because I had been friendly with the lady who handed me my food, going as far as to ask her what time she got off that evening...',
    "date": "June 22, 2019",
    "tags": ["Communism", "2020","Mangos"],
    "readTime": 6
  },
  {
    "id": 1,
    "title": "Dungeons & Developers ",
    "image": "https://cdnb.artstation.com/p/assets/images/images/007/027/571/large/greg-rutkowski-dragon-cave-1920.jpg?1503141992",
    "imgSizes":["1100px","1450px"],
    "description": 'Alright so Im not a crappy person. Sometimes I just think like one.Like this afternoon when I got a message from someone "looking for help with web design". It was obvious the guy had messaged the wrong person. Im a web developer (aka software developer/engineer). Not a web designer...',
    "text": 'Alright so Im not a crappy person. Sometimes I just think like one. Like this afternoon when I got a message from someone "looking for help with web design". It was obvious the guy had messaged the wrong person. Im a web developer (aka software developer/engineer). Not a web designer. But hold on, "after reading your Simbi page, I wonder if you might also be able to help me with another goal of mine". Hopefully something developer oriented, am I right?[screenshot - "Do you see this set-up here? www.dungeonsanddevelopers.com. Id really love to find a way to copy it (or make my own), where I can make my own talent tree, add my own images and text."]Heres a list of things Id really love. Id really love a puppy. Id really love a decent haircut. Id really love to see a few people attempt to drop in at my local skatepark. Id really love for there to be more 3D character artists/animators on the internet willing to work for free. Id really love it if Rune Skovbo could help Mackey calculate 2D blend trees in javascript so I can steal his animation code. Id really love it if the bank would stop forclosing on my home. Id really love to write a good blog entry.I probably wouldnt mind making a skill/talent tree for the guy messaging me either. I mean I have to do something similar to interface with the dialog tree from Watson Assistant for one of my project anyways. Plus if I decide not to help him, he might try to say I stole his idea and used it in one of my projects. If you havent visited the Dungeon And Developers website yet, dont worry, I already did it for you. Its basically a quiz to test how talented you are in web development. Im a lvl 24 web developer. [image here]Who am I fooling Im no lvl 24 web developer. Im a web designer at best. I should be honored that someone even messaged me for my help. Fuck my career aspirations, right? I am curently reevaluating why I signed up on that sYmBiOtiC site in the first place. My house is getting forclosed, I need to be looking for a way to pay this mortgage, not designing someones skill tree for the free. If your still reading this, let me take this opportunity to share with you my [resume] in case your considering hiring me for a job (please help).Idk where im going with this blog. Its my first time, go easy on me . If this blog hasnt been useful for anything, jus know... you should try and eat a mango while its still mostly green. The way I see it, most the mangos you will ever eat will probably be ripe and mostly yellow. But if your like me, and you really love mangos, try mixing it up by eating one while its still a little bitter. Its a nice way to condition yourselve for bullsh-[mango images]Crap, I suck at blogging. Feel like I couldve written the whole thing backwards and it wouldve still made as much sense. I hope I get better at this. And by get better, I mean I hope it takes less time cause I got other stuff to do. Btw there may have been more to the site that I titled this entry after. I just didnt care enough to look into it.  Supposedly its an RPG?I think the real takeaway here is this: if you wanna get someone to help you with something, make them reevaluate their identity, and provide them an opportunity to prove that they arent an imposter. And preferably get them to do so at a very challening moment in their lives.If you dont wanna hire me you can support me on patreon. Im tryna buy a racing sim rig. I will design you a website for all donations over 50. I havent really setup the patreon yet, so just cashapp me and we will work it out.',
    "date": "June 12, 2019",
    "tags": ["Design", "Devopment", "Javascript","Mangos"],
    "readTime": 3
  } 

]

export default {
  projects: projects,
  blogs: blogs, 
  counters: [...new Array(10)].map((item, index) => ({ id: randString(), count: 0, theme: themes[index % 10] }))
}
