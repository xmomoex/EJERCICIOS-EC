window.onload = () => {
  const player = {
    element: document.getElementById("player"),
    topPosition: 0,
    leftPosition: 0,
    step: 10,
    move: function (direction) {
      switch (direction) {
        case "ArrowUp":
          this.topPosition -= this.step;
          this.element.style.top = this.topPosition + "px";
          break;
        case "ArrowDown":
          this.topPosition += this.step;
          this.element.style.top = this.topPosition + "px";
          break;
        case "ArrowRight":
          this.leftPosition += this.step;
          this.element.style.left = this.leftPosition + "px";
          break;
        case "ArrowLeft":
          this.leftPosition -= this.step;
          this.element.style.left = this.leftPosition + "px";
          break;
      }
    },
  };

  onkeydown = (key) => {
    player.move(key.code);
  };
};
