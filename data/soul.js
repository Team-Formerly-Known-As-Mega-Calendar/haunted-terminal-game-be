module.exports = [{
  stageId: 'soul-start',
  message: `
  What's this weird code? It looks super complicated... You start to look through the myriad files and documents that have popped on screen, when you hear a ghostly wail: "You'd better not touch my code, kid!" A hand clutches your shoulder.
  `,
  choices: JSON.stringify([{
    prompt: 'Whoa, I\'m outta here!',
    next: 'soul-A2'
  },
  {
    prompt: 'Wait, did you say code? Tell me more!',
    next: 'soul-A1'
  }]),
  img: 'https://imgur.com/tg5h5pQ',
  sound: 'ScaryGirl.mp3',
},

{
  stageId: 'soul-A1',
  message: `
  You see a ghostly figure emerge from the computer's terminal. It's a woman wearing a pocket protector and glasses! She wails that she was the top computer programmer at MIT before she was victim of a murder. most. foul. Don't you think that's tragic?
  `,
  choices: JSON.stringify([{
    prompt: 'Wow, that is horrible! Can I help at all?',
    next: 'soul-B1'
  },
  {
    prompt: 'Actually, it seems like she might just be overly-dramatic.',
    next: 'soul-B2'
  }]),
  img: 'https://imgur.com/BoUqISl',
  sound: ''
},

{
  stageId: 'soul-A2',
  message: `
  You try to run, but your legs are stuck together! The terminal light grows brighter and brighter, and you see nothing but a wide grin on the screen. It gets wider, and wider, until it swallows you whole. You're doomed to remain in the computer forever! And it doesn't even have any games! Dannnng.
  `,
  choices: JSON.stringify([{
    prompt: 'Back to the beginning.',
    next: 'soul-start'
  }]),
  img: 'https://imgur.com/e7HMMNb',
  sound: 'wlaugh.mp3'
},

{
  stageId: 'soul-B1',
  message: `
  "Actually, yes," the ghostly femme programmer looks pleased, and she pulls out her other pair of glasses. 
  "These are just readers," she says. She pulls out of a map of the town, and points to a far-flung corner. "There," she says, "is the Library of Forgotten Science, which will have some important documents I need in order to finish my project. Will you go there and procure them for me?" 
  `,
  choices: JSON.stringify([{
    prompt: 'Of course! Anything to help.',
    next: 'soul-C1'
  },
  {
    prompt: 'Um, is this woman even trustworthy? It seems best to just destroy this computer...',
    next: 'soul-C2'
  }]),
  img: 'https://imgur.com/yhAHN09',
  sound: ''
},
{
  stageId: 'soul-B2',
  message: `
  "AS IF I HAVEN'T HEARD THAT BEFORE!" the ghostly femme programmer bellows, before enveloping you in a black cloud of self-doubt. You second-guess yourself to death, and wither away to nothing. Sad!
  `,
  choices: JSON.stringify([{
    prompt: 'Go back one step.',
    next: 'soul-A1'
  },
  {
    prompt: 'Go back to the beginning.',
    next: 'soul-start'
  }]),
  img: 'https://imgur.com/xK292xo',
  sound: ''
},
{
  stageId: 'soul-C1',
  message: `
  You run up the stairs and exit the house, excited about your new purpose. You steal a bike from one of the dumbstruck kids outside, and book it to the library. 

  In the library, you happen upon a kindly old librarian. Excitedly, you explain your purpose, realizing halfway through that she might think you're completely crazy! But, look! There's a gleam in the librarian's eye! 

  "Oh my goodness, that's my best friend from college! We were roommates for YEARS. I'm so glad you're here to help!" She leads you off to a forgotten wing of the library, and sets you up with some microfilm. Wow, this stuff is really interesting! What are you going to do with it?
  `,
  choices: JSON.stringify([{
    prompt: 'What do you mean? We said we would bring all this information back to her...',
    next: 'soul-D1'
  },
  {
    prompt: 'Ha! What a sucker! Let\'s just keep all this information and build our own magnificent technology. It will bring us fame and fortune!',
    next: 'soul-F3'
  }]),
  img: 'https://imgur.com/bC1Cxng',
  sound: ''
},
{
  stageId: 'soul-C2',
  message: `
  "WHAT ARE YOU DOING?" she shrieks as you pour the contents of your water bottle all over the keyboard and hard-drive. She starts to laugh a ghoulish laugh. "You think I didn't make COPIES?" You feel her ghosty hands start to clench your throat. "What a fool. Always. Make. Copies!" Everything fades to black. Too bad!
  `,
  choices: JSON.stringify([{
    prompt: 'Go back one step.',
    next: 'soul-B1'
  },
  {
    prompt: 'Go back to the beginning.',
    next: 'soul-start'
  }]),
  img: 'https://imgur.com/gyVVqIR',
  sound: ''
},
{
  stageId: 'soul-D1',
  message: `
  You hurry back to the creepy house at the end of the street. Actually, it doesn't look so bad. It's a matter of perspective, right? While considering the house, you falter. You have a choice to make here. What are we going to do?
  `,
  choices: JSON.stringify([{
    prompt: 'I won\'t betray her! She\'s my friend, so I\'ll help her to build her fancy technology!',
    next: 'soul-E1'
  },
  {
    prompt: 'You decide to bail on her. This has gotten boring.',
    next: 'soul-E2'
  }]),
  img: 'https://imgur.com/H7N2Fvi',
  sound: ''
},
{
  stageId: 'soul-E1',
  message: `
  Wow! You're a great person! I mean, we could have done so much together with this knowledge, but I guess you're right. You head into the house, and present the required documents to the ghostly programmer. She thanks you profusely, and you two set to work all day and all night, typing madly, and taking ample breaks to chug coffee and terrible energy drinks. Cut to a few days later, and you have successfully completed SOULSYNC™ technology, where you can successfully program a human soul into code!  
  
  `,
  choices: JSON.stringify([{
    prompt: 'Alright, woohoo! Now let\'s have an equitable share in the success of this work!',
    next: 'soul-F1'
  },
  {
    prompt: 'This is evil stuff, actually. I know what I must do.',
    next: 'soul-F2'
  },
  {
    prompt: 'Okay, maybe there\'s something to that thievery idea...',
    next: 'soul-F3'
  }]),
  img: 'https://imgur.com/zIXcrmH',
  sound: ''
},
{
  stageId: 'soul-F1',
  message: `
  You and Miss Ghost are a sensation, interviewed by several talkshows and news syndicates the world over. Celebrities are clamoring for your autographs, Miss Ghost is the first ever noncorporeal face of Vogue, billionaires are offering you loads of cash to preserve their decrepit souls, and children are making TikToks about you. Everybody wins! 
  `,
  choices: JSON.stringify([
    {
      prompt: 'Your Path Ends Here.',
      next: 'end'
    }
  ]),
  img: 'https://imgur.com/fFsWmYA',
  sound: 'claps3.mp3'
},
{
  stageId: 'soul-F2',
  message: `
 You become overtaken with the idea that you need to destroy evidence of this mortality-defying technology. You get a little over-excited and drench everything in gasoline. In a truly careless fashion, you also spill some on yourself! Rookie mistake, because when you pause for effect after lighting a match, you go up in smoke before you can finish your stunning one-liner. Too bad, I was wondering what it was. Seemed like it was going to be really clever and concise. It would probably wrap this story up really neatly, too.
  `,
  choices: JSON.stringify([
    {
      prompt: 'Your Path Ends Here.',
      next: 'end'
    }
  ]),
  img: 'https://imgur.com/0PKEgB2',
  sound: 'AAAGH1.mp3'
},
{
  stageId: 'soul-F3',
  message: `
  Yessss, I knew you'd see it my way! We'll be rich and famous!
  So, here's what happens: you and I take this technology on the road, but I slowly start to convince you that you're crazy. What are you doing talking to a computer, anyway? I just get in your head enough that you start to act a little weird. You make a scene on Jimmy Kimmel. You point at figures and objects that no one else can see. Turns out, I'm really good at getting in your head. 

  You return to your home town, utterly defeated and now besieged by slightly-older bullies. You have no friends, have yielded no money from this technology, and you have no prospects. Oh, yeah, and your "friend", Miss Ghost? She haunts you for the rest of your life, but continually reminds you that the truly scary thing is the continually abysmal size of the Gender Wage Gap.
  `,
  choices: JSON.stringify([
    {
      prompt: 'Your Path Ends Here.',
      next: 'end'
    }
  ]),
  img: 'https://imgur.com/iWgMemo',
  sound: 'GHOST8B.mp3'
}];
