(function () {
  function open(url){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.92);display:grid;place-items:center;z-index:9999';const i=document.createElement('img');i.src=url;i.style.maxWidth='92vw';i.style.maxHeight='92vh';i.style.boxShadow='0 10px 40px rgba(0,0,0,.5)';o.appendChild(i);o.addEventListener('click',()=>document.body.removeChild(o));document.body.appendChild(o)}
  document.addEventListener('click',e=>{const a=e.target.closest('a.lb');if(!a)return;e.preventDefault();open(a.href)});
})();
