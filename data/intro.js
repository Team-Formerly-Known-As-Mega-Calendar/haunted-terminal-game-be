module.exports = [{
  stageId: 'intro-1',
  message: `
    Welcome to 
    __                        __                    
  _/  |_  ____ ______  _____ |__| ____  __ __ ______
  \   ___/ __ \_  __ \/     \|  |/    \|  |  /  ___/
   |  | \  ___/|  |  |  Y Y  |  |   |  |  |  \___ \ 
   |__|  \___  |__|  |__|_|  |__|___|  |____/____  >
             \/            \/        \/          \/

    A terminal-based Javascript experience
      < this game contains audio > 
  `,
  choices: JSON.stringify([{
    prompt: 'Press ENTER to continue',
    next: 'intro-2'
  }
  ]),
  img: '',
  sound: '',
},
{
  stageId: 'intro-2',
  message: `
   Your story begins lying back in a grassy field, staring up at a star filled sky. You just moved, you feel as distant from the other kids as you do from the stars. This new neighborhood sucks, you think to yourself, when your reverie is broken with a loud, "Hey! New kid! Come over here."  
  `,
  choices: JSON.stringify([{
    prompt: 'Sit up and look at who is yelling at you.',
    next: 'intro-3'
  }
  ]),
  img: 'https://i.pinimg.com/564x/1d/38/3a/1d383aad880b9b4ad32ef4fea1276380.jpg',
  sound: '',
},
{
  stageId: 'intro-3',
  message: `
   You see a group of popular kids under a nearby streetlamp. You get up and walk over to them, and they form a semi circle around you. "Hey new kid" the leader says, "if you want to make it in this neighborhood you have to prove yourself to us." A murmur of agreement moves through the group. "To prove you aren't a baby you have to spend the night at the old abandoned house at the end of the street. No one has done it before, except me."  
  `,
  choices: JSON.stringify([{
    prompt: '"I\'m no baby!" you say.',
    next: 'intro-4'
  }
  ]),
  img: 'https://arizonaaddictioncenter.org/wp-content/uploads/2019/05/Peer-Presure-1080x675.jpg',
  sound: '',
},
{
  stageId: 'intro-4',
  message: `
   The group escorts you down the street and around the corner, to a dark corner of the neighborhood. A shadow looms over the street, a dark and boarded up house. The door hangs open eerily. "Looks like they were expecting you!" the children laugh, but you detect a nervous energy behind their bravado. "Well, go in!"  
  `,
  choices: JSON.stringify([{
    prompt: 'Steel yourself and enter the house',
    next: 'intro-5'
  }
  ]),
  img: 'https://specials-images.forbesimg.com/imageserve/1126082719/960x0.jpg',
  sound: 'hit-slow-motion-intense_GyaEpPNd_NWM.mp3',
},
{
  stageId: 'intro-5',
  message: `
    You cautiously step into the house. Your footsteps reverberate off the dark walls. Creepy, you think to yourself. Suddenly a dull green glow appears at the end of the hallway. You follow the glow through the narrow halls and down a cramped stairwell. You open a door into a spartan basement and discover the source of the light. An old computer terminal sits alone on a table in the middle of the otherwise empty room.
  `,
  choices: JSON.stringify([{
    prompt: 'Investigate the computer',
    next: 'intro-6'
  }
  ]),
  img: 'https://cdna.artstation.com/p/assets/images/images/014/755/000/medium/camille-roulot-camille-roulot-spe-rendu.jpg',
  sound: 'footsteps1.mp3',
},
{
  stageId: 'intro-6',
  message: `
    You sit down at the terminal. The screen flashes with the message, "Welcome to DynaCorp Industries Interactive terminal! Please enter your credentials to continue."
  `,
  choices: JSON.stringify([{
    prompt: 'Sign Up',
    next: 'signUpPrompt'
  },
  {
    prompt: 'Log In',
    next: 'loginPrompt'
  }
  ]),
  img: 'https://cdn.gamer-network.net/2015/usgamer/fallout-4-berg-terminal.jpg',
  sound: 'madscientist.mp3',
},
{
  stageId: 'intro-7',
  message: `
    Welcome valued and curious DynaCorp member! I am Iris, your virtual assistant. Here are the files requiring your review: 
  `,
  choices: JSON.stringify([{
    prompt: 'D.O.M.',
    next: 'dom-start'
  },
  {
    prompt: 'B.R.O.',
    next: 'bro-start'
  },
  {
    prompt: 'Soul',
    next: 'soul-start'
  }
  ]),
  img: 'https://i.imgur.com/hQ0rD12.jpeg',
  sound: '',
}
];
