import"./assets/styles-b373a8f0.js";import{i as s}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(i){i.preventDefault();const t=parseInt(this.querySelector('[name="delay"]').value),o=this.querySelector('[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"?e(t):r(t)},t)}).then(e=>{s.success({title:"Success",position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({title:"Error",position:"topRight",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
