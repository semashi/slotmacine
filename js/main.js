'use strict';

{
  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      
      this.img = document.createElement('img');
      this.img.src = 'img/seven.png';
      
      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
      
      section.appendChild(this.img);
      section.appendChild(this.stop);
      
      const main = document.querySelector('main');
      main.appendChild(section);

      // console.log(section);
    }

    spin(){

      irifune
      34goutou
      5-5-5
      
    }

    }


  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    panels.forEach(panel => {
      panel.spin();
    });
  });

}