import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const s={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]')};s.form.addEventListener("submit",o=>{o.preventDefault();let t=Number(s.delay.value);const i=document.querySelector('input[name="state"]:checked').value;new Promise((e,m)=>{setTimeout(()=>{i==="fulfilled"?e(t):m(t)},t)}).then(e=>{r.success({message:`Fulfilled promise in ${e} ms`,position:"topRight",backgroundColor:"#59A10D",messageColor:"white"})}).catch(e=>{r.error({message:`Rejected promise in ${e} ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"white"})}),o.target.reset()});
//# sourceMappingURL=2-snackbar.js.map
