module.exports = [{
  stageId: 'end',
  message: 'Thank you for playing our game! You have completed one path of the story.',
  choices: JSON.stringify([
    {
      prompt: 'Try Another Path',
      next: 'storySelect'
    },
    {
      prompt: 'Exit Game',
      next: 'exit'
    },
    {
      prompt: 'Meet the Creators',
      next: 'credits'
    }
  ]),
  img: '',
  sound: 'claps3'
},
{
  stageId: 'credits',
  message: `Your terminal was haunted due to the work of six cursed Javascript developers.
  ლ(¯ロ¯"ლ) Thomas Stussi
  ╭༼ ʘ̆~◞౪◟~ʘ̆ ༽╮ Michelle Stermitz
  (ノ͡° ͜ʖ ͡°)ノ︵┻┻ Charlie Smith
  ٩(◕‿◕)۶ Sarah Rector
  (￣(ｴ)￣) Ryan Diffenbaugh
  (っಠ‿ಠ)っ Brooke Perkins`,
  choices: JSON.stringify([
    {
      prompt: 'Return to the Beginning',
      next: 'storySelect'
    },
    {
      prompt: 'Exit Game',
      next: 'exit'
    }
  ]),
  img: '',
  sound: ''
}];
