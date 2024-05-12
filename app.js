

// Stop ppl from selecting text
const style = document.createElement('style');

style.innerHTML = `
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */      
}`;

document.head.appendChild(style);