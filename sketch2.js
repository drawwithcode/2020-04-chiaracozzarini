var act = [];

function preload(){
  musique = loadSound('seeyouagain.mp3');
}

function setup() {

  musique.play();

  act.push(createElement("h1", "I got even more Netflix addicted"));
  act.push(createElement("h2", "I mastered the art of baking pancakes"));
  act.push(createElement("h3", "I've been unironically listening to 100gecs all the time"));
  act.push(createElement("h4", "I got anxiety"));
  act.push(createElement("h5", "I prayed for the Politecnico to keep open"));
  act.push(createElement("h6", "I celebrated Joe Biden"));
  act.push(createElement("h7", "I failed to keep up with online lectures"));
  act.push(createElement("h8", "I've made some unconvenient, genuine mistakes"));
  act.push(createElement("h9", "I reorganised my wardrobe"));

  for(let i = 0; i<act.length; i++){
    act[i].mouseOver(highlight);
    act[i].mouseOut(unhighlight);
  }

  act[0].mouseClicked(openNetflix);
  act[1].mouseClicked(openReceipt);
  act[2].mouseClicked(openSpotify);
  act[3].mouseClicked(openGov);
  act[4].mouseClicked(openPoli);
  act[5].mouseClicked(openTikTok);
  act[6].mouseClicked(openBeep);
  act[7].mouseClicked(openUrban);
  act[8].mouseClicked(openKondo);
}

function draw() {
  // put drawing code here
}

function openNetflix(){
  window.open('https://www.netflix.com')
}

function openReceipt(){
  window.open('https://ricette.giallozafferano.it/Pancakes-allo-sciroppo-d-acero.html')
}

function openSpotify(){
  window.open('https://open.spotify.com/artist/6PfSUFtkMVoDkx4MQkzOi3')
}

function openGov(){
  window.open('https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html')
}

function openPoli(){
  window.open('https://www.polimi.it/fileadmin/user_upload/covid-19/comunicazioni/2020_11_06_lettera_rettore.pdf')
}

function openTikTok(){
  window.open('https://www.tiktok.com/@ricardosnp/video/6891261747173510401?traffic_type=others')
}

function openBeep(){
  window.open('https://beep.metid.polimi.it/it')
}

function openUrban(){
  window.open('https://www.urbandictionary.com/define.php?term=drunk+text')
}

function openKondo(){
  window.open('https://www.youtube.com/watch?v=Lpc5_1896ro')
}

function highlight(){
  this.style('color', 'red');
  this.style('text-decoration', 'underline');
}

function unhighlight(){
  this.style('color', 'white');
  this.style('text-decoration', 'none');
}
