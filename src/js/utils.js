export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("es-MX", {
    timeZone: "UTC",
  });
}

export function tagColor(category) {
  let color = "";
  if (category === "Programa") {
    color = "bg-yellow";
    return color;
  } else if (category === "Publicación") {
    color = "bg-pink";
    return color;
  } else {
    color = "bg-blue";
    return color;
  }
}
