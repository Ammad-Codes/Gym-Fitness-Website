(function(){
    var header = document.querySelector('header');
    function onScroll(){
      if(window.scrollY > 8){ header.classList.add('scrolled'); }
      else{ header.classList.remove('scrolled'); }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var burger = document.getElementById('burgerBtn');
    var links = document.getElementById('navLinks');
    burger.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    var els = document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      els.forEach(function(el){ io.observe(el); });
    } else {
      els.forEach(function(el){ el.classList.add('in'); });
    }
  })();