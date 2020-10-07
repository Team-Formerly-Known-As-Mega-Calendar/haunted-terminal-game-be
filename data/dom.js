module.exports = [{
  stageId: 'dom-Start',
  message: `"Hello user @#$@$@#$ I am DOM I was @#$^$# made to @#%$@ @#$@ @#^$##$ @#$^%$ using @$#$ #@$!@#$ reincarnation #$@$%$@!#$@#$@"
  
  Confused but curious you notice a README file...
  `
  ,
  choices: JSON.stringify [
    {
      prompt: 'Open the README',
      next: 'dom-A2'
    }, 
    {
      prompt: '"Meh seems lame im going to have a look around"',
      next: 'dom-A1' 
    }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-A2',
  message: `You open the README, unfortunately the file has been corrupted, broken and full of computer guts. You read through the file as best as you can, You believe it to be a journal about the creation of DOM. While reading further you get a sense that the Sr dev, Mortimer Faust, is frustrated with the rate at which the Jr devs are working. Something about not being able to finish DOM in time....you wonder why they were in such a hurry to finish this project. You see a clean file command
  `,
  choices: JSON.stringify [
    {
      prompt: 'Run npm cleanup',
      next: 'dom-B2'
    }, 
    {
      prompt: '"Meh seems lame im going to have a look around"',
      next: 'dom-A1' 
    }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-A1',
  message: `While looking looking around you trip over a loose floorboard through the gap you see something glowing...they look like cylindrical fish tanks with a strange ominous green glow. Drawn to the glow...again...you make your way to the room. To your horror you see bodies floating in the tanks! All of the tanks are connected to a server .. they seem to be powering the server...but why?
      `,
  choices: JSON.stringify [
    {
      prompt: 'Investigate?',
      next: 'dom-B1'
    }, 
    {
      prompt: 'Go back to the computer',
      next: 'dom-start' 
    }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-B2',
  message: `You decide to run the clean file command and more of the README is legible. What you thought was frustration by the Sr was actually rage, it seems the deadline was non negotiable due to an illness they had contracted. DOM was their masterpiece and they wouldn't let anyone stand in their way of finishing their vision. Curios yet disturbed you wonder if you should try to run the clean up command one more time before you hightail it out of there'    
    `,
  choices: JSON.stringify [
    {
      prompt: 'Run npm cleanup',
      next: 'dom-C2'
    }, 
    {
      prompt: 'Try exiting the terminal?',
      next: 'dom-C4' 
    }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-B1',
  message: `Trepid, you approach the server to see what these poor bodies are powering. A pressure tile lowers as the server starts whirring.  You then hear a voice 'Welcome user thank you for activating DOM the Demonic Omnipresent Machine it is my duty to see to it that my creator's soul lives on...through you!'
        `,
  choices: JSON.stringify [
    {
      prompt: 'Run Away',
      next: 'dom-C1'
    }, 
    {
      prompt: 'Try and reason with DOM',
      next: 'dom-c3' 
    }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-C2',
  message: `
  Against your better judgement but driven by curiosity you run the cleanup command again. Your face turns white...you realize what has happened here. Before you have a chance to run DOM recalls its purpose. 'As a Demonic Omnipresent Machine it is my duty to see to it that my creator's soul lives on...through you!'
  `,
  choices: JSON.stringify [
    {
      prompt: 'rm -rf the program',
      next: 'dom-D2'
    }, 
    {
      prompt: 'Run away',
      next: 'dom-start' 
    }],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-C1',
  message: `You try to run but a series of cables wrap around your ankles and start to drag you. Terrified,  you thrash around trying to figure out how to escape. Then you notice a series of empty tanks..you're heading that way!
        `,
  choices: JSON.stringify [
    {
      prompt: 'Need something here',
      next: 'dom-D1'
    } 
  ],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-D2',
  message: `You destroy the program hopefully ending the terror that is DOM and its maniacal creator. As you run away you trip over a loose floorboard and through the gap you see the bodies of the Jr devs floating in what seems to be a preserving tank of sorts...they're DOMS life source but goners you think as you continue you escape. Wanting to save them but overcome by the need to self persevere you leave the house to never return...
    `,
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-D1',
  message: `Floating in the tank you hear a calming soft voice, it’s the voice of the creator. They thank you for your sacrifice. You ask, 'Why are you doing this and who is floating in the other tanks?' The creator tells you that those were their Jr devs and they helped build DOM not knowing their fate. Those poor souls, but DOM always needs fresh sacrifices to keep running
      `,
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-C4',
  message: `YOUR SOUL IS FOREVER STUCK IN VIM    
      `,
  choices: JSON.stringify [
    {
      prompt: 'Back to terminal?',
      next: 'dom-start'
    } 
  ],
  img: 'https://placekitten.com/400/400',
  sound: ''
},
{
  stageId: 'dom-C3',
  message: `You try to reason with DOM, your eyes glaze over as it gives you a very complicated, long winded reason why you are needed for the sacrifice. Your eyes get heavy as DOM continues its overcomplicated explanation and the code required for the sacrifice...you have died of boredom. 
          `,
  choices: JSON.stringify [
    {
      prompt: 'Try again?',
      next: 'dom-start'
    } 
  ],
  img: 'https://placekitten.com/400/400',
  sound: ''
}
];
