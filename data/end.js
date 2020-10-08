module.exports = [{
  stageId: 'end',
  message: 'Thank you for playing our game! You have completed one path of the story.',
  choices: JSON.stringify([
    {
      prompt: 'Try Another Path',
      next: 'intro-7'
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
  sound: 'claps3.mp3'
},
{
  stageId: 'credits',
  message: `Your terminal was haunted due to the work of six cursed Javascript developers.
  ლ(¯ロ¯"ლ) Thomas Stussi | @ThomasStussi
  ╭༼ ʘ̆~◞౪◟~ʘ̆ ༽╮ Michelle Stermitz | @
  (ノ͡° ͜ʖ ͡°)ノ︵┻┻ Charlie Smith | @
  ٩(◕‿◕)۶ Sarah Rector | @Rector206
  (￣(ｴ)￣) Ryan Diffenbaugh | @ryan_diff
  (っಠ‿ಠ)っ Brooke Perkins | @bbperkz`,
  choices: JSON.stringify([
    {
      prompt: 'Return to the Beginning',
      next: 'intro-7'
    },
    {
      prompt: 'Exit Game',
      next: 'exit'
    }
  ]),
  img: '',
  sound: ''
}];
