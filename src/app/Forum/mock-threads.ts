import { Forumthread, Forumpost } from "./forumpost";

export const THREADS: Forumthread[] = [
  {id: 0, title: 'Hello world!', OP: 'New Programmer', post: 'Hello Forum!', replies: [
    { id: 0, author: 'Another Programmer', content: 'Hello Nerd!'},
    { id: 1, author: 'Senior developer', content: 'Hi newbie!'}
  ] },
  {id: 1, title: '*Lightsaber sounds*', OP: 'Obi-Wan', post: 'Hello there!', replies: [
    {id: 0, author: 'Gen. Grievious', content: 'General Kenobi...'},
    {id: 1, author: 'Yoda', content: 'Doing here, what am I?'}
  ]},
  {id: 2, title: 'Karaoke time!', OP: 'Sir Mix-a-lot', post:'I like big butts and I cannot lie!', replies:[
    {id: 0, author: 'Big fan', content: 'You other brothers can\'t deny!'},
    {id: 1, author: 'Metal fan', content: 'That when a girl walks in with an itty bitty waist and a round thing in your face'},
    {id: 2, author: 'Ran out of imagination', content: 'You get sprung, want to pull up tough \'cause you noticed that butt was stuffed'}
  ]}
]