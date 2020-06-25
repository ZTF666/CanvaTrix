function ZTF(selector) {
  const self = {
    el: document.querySelector(selector),
    matrix: (speed, width, height) => {
      // let s = window.screen

      let letters = Array(256).join(1).split("");

      function draw() {
        self.el.getContext("2d").fillStyle = "rgba(0,0,0,.05)";
        self.el.getContext("2d").fillRect(0, 0, width, height);
        self.el.getContext("2d").fillStyle = "#0F0";
        letters.map(function (y_pos, index) {
          let text = String.fromCharCode(3e4 + Math.random() * 50);
          let x_pos = index * 10;
          self.el.getContext("2d").fillText(text, x_pos, y_pos);
          letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
        });
      }
      setInterval(draw, speed);
    },
  };
  return self;
}

module.exports.ZTF = ZTF;
