export const generateKey = pre => `${pre}_${new Date().getTime()}`;
export const toKebabCase = str => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}
export const isClient = typeof window !== 'undefined';
export const copyToClipboard = stringToCopy => {
  const el = document.createElement(`textarea`);
  el.value = stringToCopy;
  el.setAttribute(`readonly`, ``);
  el.style.position = `absolute`;
  el.style.left = `-9999px`;
  document.body.appendChild(el);
  el.select();
  document.execCommand(`copy`);
  document.body.removeChild(el);
}
export const scrollToPageElement = (event, elementId) => {
  if (event) event.preventDefault()
  const targetEl = document.getElementById(elementId);
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
