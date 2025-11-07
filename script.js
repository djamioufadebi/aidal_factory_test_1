const SRC_PORTRAIT = "images/portrait.png";
const SRC_PAYSAGE  = "images/paysage.png";

const elA        = document.getElementById("A");
const imgA       = document.getElementById("imgA");
const ratioBadge = document.getElementById("ratioBadge");

let lastSrc = "";

function resized(entry) {
  const rect = entry?.contentRect || elA.getBoundingClientRect();
  const w = Math.max(1, rect.width);
  const h = Math.max(1, rect.height);
  const ratio = w / h;

  const wantedSrc = ratio >= 1 ? SRC_PAYSAGE : SRC_PORTRAIT;

  if (wantedSrc !== lastSrc) {
    imgA.decoding = "async";
    imgA.src = wantedSrc;
    lastSrc = wantedSrc;
  }

  if (ratioBadge) ratioBadge.textContent = `${ratio.toFixed(3)}  →  ${wantedSrc}`;
}

if ("ResizeObserver" in window) {
  let scheduled = false;
  const ro = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        resized(entry);
      });
    }
  });
  ro.observe(elA);
} else {
  let rafId = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => resized());
  });
}

resized();
if (!imgA) {
  console.warn("imgA introuvable : vérifie l'ID dans le HTML");
}
