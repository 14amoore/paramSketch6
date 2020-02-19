const synth = new Tone.MetalSynth({
  envelope: {
    attack: 0.001,
    decay: 3,
    release: 1
  },
  octaves: 2.5
}).toMaster();

synth.triggerAttackRelease();

const play = function() {
  synth.triggerAttack();
};

const noPlay = function() {
  synth.triggerRelease();
};

document.querySelector('#startTone').addEventListener('click', async () => {
  await Tone.start();
  console.log('audio is ready');
});

document.querySelector('#noteOn').addEventListener('mousedown', play);
document.querySelector('#noteOn').addEventListener('mouseup', noPlay);

let Metal = function() {
  this.frequency = 0;
  this.resonance = 0;
  this.harmonicity = 0;
  this.modulationIndex = 0;
};

window.onload = function() {
  let clank = new Metal();
  let gui = new dat.GUI();
  metalControl = gui.add(clank, 'frequency', 0, 15000);
  resonanceControl = gui.add(clank, 'resonance', 0, 8000);
  harmonControl = gui.add(clank, 'harmonicity', 0, 2);
  modIndexControl = gui.add(clank, 'modulationIndex', 0, 50);
  metalControl.onChange(value => {
    synth.frequency.value = value;
  });
  resonanceControl.onChange(value => {
    synth.resonance.value = value;
  });
  harmonControl.onChange(value => {
    synth.harmonicity.value = value;
  });
  modIndexControl.onChange(value => {
    synth.modulationIndex.value = value;
  });
};
