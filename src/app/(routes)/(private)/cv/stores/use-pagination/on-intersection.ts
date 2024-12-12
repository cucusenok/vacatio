const getIntersectingElement = (pageBreak: IntersectionObserverEntry) => {
  const suspects = Array.from(document.querySelectorAll("[data-tooltip-id]"));

  if (!suspects) return;

  const breakRect = pageBreak.target.getBoundingClientRect();
  let element = null;

  for (const item of suspects) {
    if (!(item instanceof HTMLLIElement)) return;

    const rect = item.getBoundingClientRect();

    const intersectionHeight =
      Math.min(rect.bottom, breakRect.bottom) - Math.max(rect.top, breakRect.top);

    // const threshold = item.querySelector(":scope > ul") ? 0.5 : 0.1;
    // // const threshold = 0.1;

    const intersectionRatio = intersectionHeight / rect.height;

    if (intersectionRatio >= 0.5) {
      if (item.classList.contains("bullet")) {
        const prev = item.previousElementSibling;
        const potentialEntryHeading = prev?.previousElementSibling;
        if (!potentialEntryHeading?.classList.contains("bullet")) {
          element = potentialEntryHeading;
          break;
        }
        if (prev) element = prev;
        else element = item;
        break;
      }

      element = item;
      break;
    }
  }

  return element;
};

const push = (element: Element, pageBreak: IntersectionObserverEntry) => {
  const distance = Math.abs(
    element.getBoundingClientRect().top - pageBreak.target.getBoundingClientRect().bottom,
  );

  (element as HTMLElement).style.marginTop = `${distance}px`;
  element.classList.add("pushed");

  return distance;
};

export const unpush = () => {
  const all = document.querySelectorAll(".pushed");
  all.forEach((item) => {
    (item as HTMLElement).style.marginTop = "0";
    item.classList.remove("pushed");
  });
};

export const onIntersection = (entries: IntersectionObserverEntry[]) => {
  const pageBreak = entries[0];
  if (!pageBreak) return;
  if (!pageBreak.isIntersecting) return;

  const element = getIntersectingElement(pageBreak);
  if (!element) return;
  unpush();
  push(element, pageBreak);
};
