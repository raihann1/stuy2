var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(200)
  .typeString('Stuyvesant High School')
  .pauseFor(500000)
  .start();
