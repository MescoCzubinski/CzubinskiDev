const dot = document.querySelector(".cursor") as HTMLElement | null;
if (window.innerWidth >= 768 && dot) {
  document.addEventListener("mousemove", (e: MouseEvent) => {
    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
  });
} else if (dot) {
  dot.style.display = "none";
}
