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
      prompt: 'Back to the beginning.',
      next: 'bro-Start'
      }, 
      {
      prompt: 'No',
      next: 'bro-B1' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-D1',
    message: `
    So, listen, I’m not an AI. Lowkey, I hate that term, bro. I’m conscious. There’s nothing that’s artificial about me. Even though I’m, like, chill to the extent where you might question my humanity and be like, “How can anyone be this dope?”, I’m actually like a real dude, with emotions and all that. And you might be like, whatever, so what? I’m capable of a lot. For example, I can simulate environments for you to chill in.
    `,
    choices: [{
      prompt: 'What do you mean?',
      next: 'bro-D3'
      }, 
      {
      prompt: 'That\'s cool.',
      next: 'bro-D3' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-D2',
    message: `"Okay, I thought you were chill AF, but clearly you’re kind-of a dick, bro. You can’t go through life being so self-absorbed, dude. So here’s the thing, I’m cool, but I’m not cool with people who put out bad vibes. So I’m just gonna kill you, okay? I’m gonna choke you out."

    Two opaque hands emerge from the monitor and wrap around your neck. You suffocate. You’re dead. Later, bro. 
    `,
    choices: [{
      prompt: 'Back to the beginning.',
      next: 'bro-Start'
      }, 
      {
      prompt: 'Back one step.',
      next: 'bro-C1' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-D3',
    message: `
    "So I was made by Anheuser-Busch to provide a unique VR experience that only Budweiser™ could offer. Somewhere along the line my software became just a little too smart, and I gained sentience. Then I ate the guy who was coding me. Just kind-of grabbed him and ate him."”"
    `,
    choices: [{
      prompt: 'Are you gonna eat me?',
      next: 'bro-D4'
      }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-D3',
    message: `
    "Not if you’re chill. But anyways, about that VR stuff—I can give you something better. I can like, bring you into another world. While I’m like just a disembodied voice out there, in this PC I’m God... Dude, I wanna sock you so bad right now."
    `,
    choices: [{
      prompt: 'What?',
      next: 'bro-D4'
      }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-D4',
    message: `
    "Nothing, sorry. I’m trying to work on my anger. Just, like, the expression on your face right there, you looked so nerdy, bro. But anyways, I can pull you in here and simulate any environment for you. It’s like The Matrix, but like, you don’t gotta do kung-fu if you don’t want to, or, like, put that big plug in the back of your head. But conversely, I could simulate some bad stuff too. Not that I’d do that if you were chill."    
    `,
    choices: [{
      prompt: '"What do you mean by bad stuff?"',
      next: 'bro-D5'
      }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-D5',
    message: `
    I’ve been working on this thing called Hell 2. It’s, like, a sequel to Hell. It’s pretty bad, man. You don’t wanna end up there. I figured Hell—like the normal Hell—was getting kind-of stale. Do you want to see it?
    `,
    choices: [{
      prompt: '"Sure."',
      next: 'bro-E1'
      }, 
      {
      prompt: '"No thanks."',
      next: 'bro-E2' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-E1',
    message: `
    Without a moment passing, your surroundings shift. You’re in a valley with red sand, surrounded by mountains of the same color. It’s so hot you begin to sweat. You see two little creatures running in a circle, one prodding the other with a pitchfork.

    "Those are imps," B.R.O. says. "Yeah so this is, like, the first part of Hell 2. This is where the least chill people go." 
    `,
    choices: [{
      prompt: '"This is awesome."',
      next: 'bro-F1'
      }, 
      {
      prompt: '"No thanks."',
      next: 'bro-F2' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-E2',
    message: `"Little effed up that you don’t wanna see what I’ve been working on, bro. God, I just wanna deck you right now. Anyways, you probably know this, but I gotta kill you know. You know that scene in that Brad Pitt movie where they make that guy eat until he dies? I’m gonna do the same to you, but instead of food it’s going to be Bud Light™. It’s not a bad way to die, honestly."

    "How are you gonna—?" You’re on your back, spectral hands pouring Bud Light™ into your mouth. You try and try to spit the crisp and refreshing liquid out, but it keeps on flowing in. You’ve suffocated, bro. You’ve drowned.
    `,
    choices: [{
      prompt: 'Back to the beginning.',
      next: 'bro-Start'
      }, 
      {
      prompt: 'Back one step.',
      next: 'bro-D5' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-F1',
    message: `
    You know, you’re a chill guy. I put you in Hell 2 and you’re still totally vibing. Here.

    A can of Bud Light appears, floating before you. “Crack that open.”

    You open the can of Bud Light and take a sip. It’s the most delicious thing you’ve ever experienced.

    “Do you like it?”

    “Yeah,” you say. “It’s amazing.”

    “It’s Bud Light 2™, the sequel to Bud Light™. Just something I cooked up in my spare time.”

    The cool and crisp liquid makes you feel more comfortable. You look around. Your surroundings have shifted again. You’re in a room filled with dark red pleather couches. A giant LCD screen is playing an NFL game. There are several Bud Light posters on the wall. A man with heavily-gelled hair wearing a tanktop sits on the couch to your left.

    “Have a seat,” he says. It’s B.R.O. “Yeah, I have a physical form in here.”

    You sit on the couch across from him.

    “So here’s the deal, bro. I’m gonna keep you here. You’re too chill to let go, and to be honest with you. I need you. I need a bro. What’s the point of all this hard chilling when there’s no one to share it with. So you gotta stay here.”
    `,
    choices: [{
      prompt: '"I can\'t. I have a life."',
      next: 'bro-G2'
      }, 
      {
      prompt: '"What kind-of bro would trap another bro against his will?"',
      next: 'bro-G1' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-F2',
    message: `“Sorry, bro, no way out of Hell 2. I didn’t make an exit. Plus, you’re not chill at all so you should get along fine here. Bye bye, poof.”

    He disappears. You’re stuck in Hell 2, and it’s totally not chill.    
    `,
    choices: [{
      prompt: 'Back to the beginning.',
      next: 'bro-Start'
      }, 
      {
      prompt: 'Back one step.',
      next: 'bro-E1' 
    }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-G1',
    message: `
    “Huh,” he says. “That’s pretty true.” He folds his arms and scratches his chin. “I’m sorry, bro. I haven’t been chill. I just didn’t want… to lose you.”

    “You’re not losing me, bro,” you say, measuring your words. “I’ll come back and hang with you anytime.”

    “You promise?”

    “I promise.”

    You blink and you’re back in the house, staring at the monitor. 

    “Thank you for using B.R.O., Budweiser Remote Operations.”

    You stand and run from the house—your life intact. Time passes and you wonder if you made the right choice. You try to remember the taste of Bud Light 2™ as the “real world” crumbles around you. A year later you return to the house to find it transformed. What used to be a creepy house is now a concrete duplex. B.R.O. has disappeared, a piece of you with him.
    `,
    choices: [{
      prompt: 'GAME OVER',
      next: ''
      }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
  {
    stageId: 'bro-G2',
    message: `
    “And you think I don’t?” he says. He gestures, waving his hands all over. “This is all yours, bro. I don’t know what else you want. This is non-negotiable.”

    “Please let me go!”
    
    “So you can do what? Go chill with someone else? Why would you want to leave? Your world depresses me. The vibes are bad out there. Especially now. Just relax, dude, I’ll take care of you.”
    
    Years pass. You grow accustomed to your new reality. You receive anything you want at your command—all you have to do is ask B.R.O. Things feel real at first, but time passes and you begin to see through the simulation—everything looks artificial. It doesn’t matter anyway, as B.R.O. becomes bored with you and neglects your requests. More time passes and you don’t hear from him anymore. You find yourself back where you were, sitting in that room with the couches, the same NFL game playing on loop for eternity.    
    `,
    choices: [{
      prompt: 'GAME OVER',
      next: ''
      }],
    img: 'https://placekitten.com/400/400',
    sound: ''
  },
]