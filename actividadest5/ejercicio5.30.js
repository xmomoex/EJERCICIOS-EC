function escapeHTML(text) {
  const replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];

  replacements.forEach((replace) => {
    const regex = new RegExp(replace[0], "g");
    text = text.replace(regex, replace[1]);
  });

  return text;
}
