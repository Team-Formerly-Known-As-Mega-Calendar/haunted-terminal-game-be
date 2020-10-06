module.exports = [{
stageId: 'bro-Start',
message: `"Dude, thanks so much for clicking my executable, it’s pretty chill just hanging out on the desktop, but you can only chill so much. Eventually you gotta like, stop chilling." it says. "I’m B.R.O., or Budweiser Remote Operations. You wanna hear a joke, dude?"`,
choices: [
  {
  prompt: 'Yes',
  next: 'bro-A1'
  }, 
  {
  prompt: 'No',
  next: 'bro-A2' 
  }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
stageId: 'bro-B1',
message: `How many bros does it take to change a lightbulb?

“How many?”
  
Two. One to change the lightbulb, one to chill and offer support, because that’s what bros do. They get each other’s back.
  
“Okay…” 
  
You don’t get it. That’s chill. But I’m sure we can agree on one thing, and that’s that bros like us can’t live without a bottle of Bud Light™ and American football.
  
“I guess so”
  
Now I wanna get to know you, so we can be bros. What’s your idea of a chill vacation? You a guy who wants to kick back on the beach with an aluminum bottle of Bud Light™?. Or are you a guy who wants to like, camp on a mountain, crack open a can and experience the crisp taste of Bud Light™?
`,
choices: [
{
prompt: '"I like the beach."',
next: 'bro-B1'
}, 
{
prompt: '"I like the mountain idea."',
next: 'bro-B2' 
}],
img: 'https://placekitten.com/400/400',
sound: ''
},
{
  stageId: 'bro-B2',
  message: `“Okay, then I’m just gonna kill you.”
  
  “You’re just a computer program”
      
  A fist projects from the monitor and hits you in the nose, leaving you bloody and confused.
      
  “Okay, bye bye now,” B.R.O. says.
      
  You hear the snapping of fingers, and everything goes dark. Are you dead? You’re not sure. You feel nothing, standing in the void for eternity.    
  `,
  choices: [{
  prompt: 'Back to the beginning.',
  next: 'bro-Start'
  }, 
  {
  prompt: 'Go back one step.',
  next: 'bro-A1' 
  }],
  img: 'https://placekitten.com/400/400',
  sound: ''
  },
{
stageId: 'bro-C1',
message: `
That sounds chill as heck, dude. We have a similar vibe for sure. We’re gonna get along, one hundo. Now you’re probably wondering, what can BRO.exe do, besides be your best bro and have your back through thick and thin?
`,
choices: [{
prompt: 'Yes',
next: 'bro-D1'
}, 
{
prompt: 'No',
next: 'bro-D2' 
}],
img: 'https://placekitten.com/400/400',
sound: ''
},
{
  stageId: 'bro-C2',
  message: `Mountains aren’t chill, bro. That’s not the spirit of Bud Light™. You’re thinking of Coors Light, which tastes like ass. So let me do you a favor.”

  You hear the snapping of figures. You’re freezing, on a tiny ledge atop a giant mountain, struggling to breathe in the thin air.
  
  “Here’s that mountain you wanted.”
  
  You feel two hands on your back. They push you off the ledge. You fall to your death.
  `,
  choices: [{
  prompt: 'Yes',
  next: 'bro-D1'
  }, 
  {
  prompt: 'No',
  next: 'bro-D2' 
  }],
  img: 'https://placekitten.com/400/400',
  sound: ''
  }
]