const dot = document.querySelector(".cursor") as HTMLElement | null;

if (dot) {
  document.addEventListener("mousemove", (e: MouseEvent) => {
    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;

    // const el = document.elementFromPoint(e.clientX, e.clientY);
    // const rootStyles = getComputedStyle(document.documentElement);
    // const bg = window.getComputedStyle(el).backgroundColor;

    // let newColor = rootStyles.getPropertyValue("--color-detail");
    // if (bg === rootStyles.getPropertyValue("--color-background").trim()) {
    //   newColor = rootStyles.getPropertyValue("--color-white");
    // } else if (bg === rootStyles.getPropertyValue("--color-detail").trim()) {
    //   newColor = rootStyles.getPropertyValue("--color-white");
    // }
    // dot.style.backgroundColor = newColor;
    // console.log(dot.style.backgroundColor);
  });
}
