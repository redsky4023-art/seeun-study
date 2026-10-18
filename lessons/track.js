// 단원 페이지 공부 기록 — 복습방(review.html)이 같은 저장 칸을 읽어 기록 탭에 보여 준다
(function(){
  var KEY = "seeun.study.v1";
  if(/[?&]embed=1/.test(location.search)) document.documentElement.classList.add("embed");
  function pad(n){ return (n < 10 ? "0" : "") + n; }
  function today(){ var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function load(){ try{ var v = JSON.parse(localStorage.getItem(KEY) || "null"); if(v && v.days && v.lessons) return v; }catch(e){} return {days:{}, lessons:{}}; }
  function save(d){ try{ localStorage.setItem(KEY, JSON.stringify(d)); }catch(e){} }
  function notify(){ try{ if(parent !== window) parent.postMessage({seeunStudy:true}, location.origin); }catch(e){} }
  function id(){ return document.documentElement.getAttribute("data-lesson") || location.pathname; }
  function lesson(d){ var L = d.lessons[id()] = d.lessons[id()] || {plan:{}, quiz:[]}; return L; }
  function day(d){ var t = today(), x = d.days[t] = d.days[t] || {}; return x[id()] = x[id()] || {plan:0, quiz:0, right:0}; }
  window.SeeunTrack = {
    planGet: function(k){ return !!lesson(load()).plan[k]; },
    plan: function(k, on){ var d = load(), L = lesson(d); L.plan[k] = on ? 1 : 0; L.last = today(); if(on) day(d).plan++; save(d); notify(); },
    quiz: function(right, total){ var d = load(), L = lesson(d), x = day(d); L.quiz.push({d:today(), r:right, n:total}); L.last = today(); x.quiz += total; x.right += right; save(d); notify(); }
  };
})();
