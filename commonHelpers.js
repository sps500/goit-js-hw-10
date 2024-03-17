import"./assets/styles-4578f0ee.js";import{f as d,i as s}from"./assets/vendor-77e16229.js";const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(s.error({title:"Error",message:"Please choose a date in the future"}),startButton.disabled=!0,startButton.classList.remove("valid-date")):(startButton.disabled=!1,startButton.classList.add("valid-date"))}};d("#datetime-picker",h);let i;function y(){const e=d.parseDate(document.querySelector("#datetime-picker").value);if(e<=new Date){s.error({title:"Error",message:"Please choose a future date to start the timer"});return}document.querySelector("[data-start]").disabled=!0,document.querySelector("#datetime-picker").disabled=!0,i=setInterval(D,1e3,e)}function D(e){const t=e-new Date;if(t<=0){clearInterval(i),u({days:0,hours:0,minutes:0,seconds:0}),s.success({title:"Success",message:"Timer has finished!"}),document.querySelector("#datetime-picker").disabled=!1;return}const{days:r,hours:a,minutes:c,seconds:o}=p(t);u({days:r,hours:a,minutes:c,seconds:o})}function u({days:e,hours:t,minutes:r,seconds:a}){document.querySelector("[data-days]").textContent=n(e),document.querySelector("[data-hours]").textContent=n(t),document.querySelector("[data-minutes]").textContent=n(r),document.querySelector("[data-seconds]").textContent=n(a)}function n(e){return String(e).padStart(2,"0")}function p(e){const o=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:l,minutes:m,seconds:f}}document.querySelector("[data-start]").addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map
