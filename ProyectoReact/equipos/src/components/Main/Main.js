export const ajustarAlturaTextarea = () => {
  const ajustar = () => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.addEventListener("keyup", (e) => {
        let scHeight = e.target.scrollHeight;
        textarea.style.height = "auto";
        textarea.style.height = `${scHeight}px`;
      });
    }
  };

  document.addEventListener("DOMContentLoaded", ajustar);
};
