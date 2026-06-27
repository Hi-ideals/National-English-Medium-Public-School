/* NEMPS Bidar — shared two-row header, sticky nav, footer injected on every page. */
(function () {
  const NAV = [
    ['Home', 'index.html', null],
    ['About', 'about-school.html', [
      ['About School', 'about-school.html'],
      ['Vision & Mission', 'vision-mission.html'],
      ["Principal's Message", 'principal-message.html'],
      ['School Management Committee', 'smc.html'],
      
    ]],
    ['Academics', 'curriculum.html', [
      ['Curriculum', 'curriculum.html'],
      ['Faculty', 'faculty.html'],
      ['Examination', 'examination.html'],
      //['Academic Calendar', 'academic-calendar.html'],
      ['General Employees', 'general-employees.html'],
      ['Staff List', 'administrative-staff.html'],
    ]],
    ['Facilities', 'smart-classrooms.html', [
      ['Smart Classrooms', 'smart-classrooms.html'],
      ['Science Labs', 'science-labs.html'],
      ['Computer Lab', 'computer-lab.html'],
      ['Library', 'library.html'],
      ['Sports', 'sports.html'],
      ['Transport', 'transport.html'],
    ]],
    ['Gallery', 'gallery.html', [
      ['Photo Gallery', 'gallery.html'],
      ['Video Gallery', 'video-gallery.html'],
      ['Events', 'events.html'],
    ]],
    ['School Tour', 'school-tour.html', null],
    ['Mandatory Public Disclosure', 'mandatory-public-disclosure.html', null],
    ['Contact', 'contact.html', null],
  ];

  const caret = `<svg class="w-3 h-3 inline-block ml-0.5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>`;

  function topItem([label, href, sub]) {
    if (!sub) return `<li class="nav-li relative"><a href="${href}" class="nav-top-link block px-3 py-4 text-[15px] font-head font-semibold text-white hover:text-green transition">${label}</a></li>`;
    const items = sub.map(([n, h]) => `<a href="${h}" class="block px-4 py-2.5 text-[14px] text-navy hover:bg-soft hover:text-brand border-b border-line/70 last:border-0 transition">${n}</a>`).join('');
    return `<li class="nav-li relative">
      <a href="${href}" class="nav-top-link block px-3 py-4 text-[15px] font-head font-semibold text-white hover:text-green transition">${label}${caret}</a>
      <div class="dropdown absolute left-0 top-full z-50 w-64 bg-white rounded-b-lg shadow-2xl border-t-2 border-green overflow-hidden">${items}</div>
    </li>`;
  }

  const social = (label, path) => `<a href="#" aria-label="${label}" class="w-8 h-8 grid place-items-center rounded-full bg-white/15 hover:bg-green text-white transition"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="${path}"/></svg></a>`;
  const FB = 'M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.1C18.3 1 17 1 16 1c-3 0-5 1.8-5 5.2V10H8v4h3v8z';
  const IG = 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.26 2.2.43.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.5.4 1.1.4 2.3.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 1.8-.43 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.5.2-1.1.4-2.3.4-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.26-2.2-.43-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.5-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-1.8.43-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .5-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3zm6.8-11.1a1.54 1.54 0 1 1-1.54-1.54 1.54 1.54 0 0 1 1.54 1.54z';
  const YT = 'M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z';

  const header = `
  <!-- ROW 1: top header -->
  <div class="bg-white border-b border-line">
  <div class="max-w-site mx-auto px-3 lg:px-6 py-2 flex items-center gap-2">
    <a href="index.html" class="block flex-1 min-w-0">
      <img src="assets/img/Nempslogo.png"
           alt="National English Medium Public School, Bidar"
           class="w-full h-auto object-contain">
    </a>
    <button id="navToggle" class="lg:hidden p-1.5 text-navy shrink-0" aria-label="Open menu">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</div>

  <!-- ROW 2: sticky nav -->
  <div id="stickybar" class="stickybar sticky top-0 z-40 bg-navy">
    <div class="max-w-site mx-auto px-4 lg:px-6 flex items-center justify-between">
      <ul class="hidden lg:flex items-center">
        ${NAV.map(topItem).join('')}
      </ul>
      <a href="admission.html" class="hidden lg:inline-flex btn-green !py-2 !px-5 text-sm my-2">Admission</a>
      <span class="lg:hidden py-3 text-white font-head font-semibold text-sm tracking-wide">Menu</span>
    </div>
  </div>

  <!-- MOBILE DRAWER -->
  <div id="mobileMenu" class="fixed inset-0 z-[60] lg:hidden hidden">
    <div class="absolute inset-0 bg-black/50" data-close></div>
    <div class="drawer absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl overflow-y-auto">
      <div class="flex items-center justify-between px-5 py-4 bg-navy">
        <img src="assets/img/cropped-nemps-logo.png" alt="logo" class="h-12 bg-white rounded p-1">
        <button data-close class="text-white p-1"><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      </div>
      <div class="px-3 py-3 text-[13px] text-body border-b border-line">
        <p>📞 +91 9482429210 &nbsp; • &nbsp; ✉ principalnempsb@hkes.edu.in</p>
        <p class="mt-1">🕘 9 A.M – 3 P.M (Mon – Sat)</p>
      </div>
      <nav id="mnav" class="py-2"></nav>
      <div class="p-4"><a href="admission.html" class="btn-brand w-full justify-center">Apply Now</a></div>
    </div>
  </div>`;

  function ic(path){return `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${path}"/></svg>`;}

  const footer = `
  <footer class="relative bg-navy text-white/75 mt-0 overflow-hidden">
    <!-- top accent bar -->
    <div class="h-1.5 w-full bg-gradient-to-r from-brand via-green to-brand"></div>
    <!-- soft decorative glow -->
    <div class="pointer-events-none absolute inset-0 opacity-[0.18]" style="background:radial-gradient(circle at 85% 0%, #c31432 0, transparent 40%), radial-gradient(circle at 5% 100%, #240b36 0, transparent 42%)"></div>

    <!-- CTA / contact strip -->
    <div class="relative max-w-site mx-auto px-4 lg:px-6 pt-12">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="tel:+919482429210" class="group flex items-center gap-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition">
          <span class="shrink-0 w-12 h-12 grid place-items-center rounded-xl bg-brand text-white">${ic('M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z')}</span>
          <span><span class="block text-[11px] uppercase tracking-wider text-white/50 font-head font-semibold">Call us</span><span class="block text-white font-head font-bold group-hover:text-green transition">+91 9482429210</span></span>
        </a>
        <a href="mailto:principalnempsb@hkes.edu.in" class="group flex items-center gap-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition">
          <span class="shrink-0 w-12 h-12 grid place-items-center rounded-xl bg-green text-white">${ic('M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6')}</span>
          <span class="min-w-0"><span class="block text-[11px] uppercase tracking-wider text-white/50 font-head font-semibold">Email us</span><span class="block text-white font-head font-bold group-hover:text-green transition truncate">principalnempsb@hkes.edu.in</span></span>
        </a>
        <div class="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 sm:col-span-2 lg:col-span-1">
          <span class="shrink-0 w-12 h-12 grid place-items-center rounded-xl bg-brand text-white">${ic('M12 7v5l3 3"/><circle cx="12" cy="12" r="9')}</span>
          <span><span class="block text-[11px] uppercase tracking-wider text-white/50 font-head font-semibold">School Hours</span><span class="block text-white font-head font-bold">9 A.M – 3 P.M · Mon–Sat</span></span>
        </div>
      </div>
    </div>

    <!-- main columns -->
    <div class="relative max-w-site mx-auto px-4 lg:px-6 pt-12 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <div class="flex items-center gap-3 mb-4">
          <img src="assets/img/cropped-nemps-logo.png" alt="NEMPS logo" class="h-16 bg-white rounded-xl p-1.5 shadow-lg">
          <span class="leading-tight"><span class="block font-head font-extrabold text-white text-base">NEMPS Bidar</span><span class="block text-xs text-green font-semibold">Affiliated to CBSE | HKES</span></span>
        </div>
        <p class="text-lg leading-relaxed text-white/60">NEMPS is committed to imparting high quality holistic education, giving students the opportunities to develop their creative and social skills in a caring, innovative and healthy environment.</p>
        <div class="flex gap-2.5 mt-5">${social('Facebook', FB)}${social('Instagram', IG)}${social('YouTube', YT)}</div>
      </div>

      <div class="lg:col-span-2">
        <h4 class="text-white font-head font-bold text-base mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-green">Quick Links</h4>
        <ul class="space-y-2.5 text-lg">
          ${footLink('about-school.html','About School')}
          ${footLink('principal-message.html',"Principal's Message")}
          ${footLink('smc.html','Management Committee')}
          ${footLink('curriculum.html','Academics')}
          ${footLink('school-tour.html','School Tour')}
          ${footLink('admission.html','Admission')}
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h4 class="text-white font-head font-bold text-base mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-green">Explore</h4>
        <ul class="space-y-2.5 text-lg">
          ${footLink('gallery.html','Photo Gallery')}
          ${footLink('video-gallery.html','Video Gallery')}
          ${footLink('events.html','Events')}
          ${footLink('administrative-staff.html','Staff List')}
          ${footLink('general-employees.html','General Employees')}
          ${footLink('mandatory-public-disclosure.html','Mandatory Public Disclosure')}
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h4 class="text-white font-head font-bold text-base mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-green">Reach Us</h4>
        <ul class="space-y-3.5 text-lg text-white/70">
          <li class="flex gap-2.5"><span class="text-green mt-0.5 shrink-0">${ic('M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3')}</span>National English Medium Public School, Manhalli Road, B.V.B Campus, Bidar, Karnataka 585403</li>
          <li class="flex gap-2.5"><span class="text-green shrink-0">${ic('M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z')}</span><a href="tel:+919482429210" class="hover:text-green transition">+91 9482429210</a></li>
          <li class="flex gap-2.5"><span class="text-green shrink-0">${ic('M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6')}</span><a href="mailto:principalnempsb@hkes.edu.in" class="hover:text-green transition break-all">principalnempsb@hkes.edu.in</a></li>
        </ul>
        <a href="admission.html" class="btn-brand mt-5 !py-2.5 !px-5 text-sm">Apply for Admission</a>
      </div>
    </div>

    <!-- bottom bar -->
    <div class="relative border-t border-white/10">
      <div class="max-w-site mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-lg text-white/50">
        <p>Copyright © <span id="footYear">2026</span> National English Medium Public School. All Rights Reserved.</p>
        <p>Developed &amp; Designed by <a href="#" class="text-green hover:underline font-semibold">Hiideals</a></p>
      </div>
    </div>

    <!-- back to top -->
    <button id="toTop" aria-label="Back to top" class="fixed bottom-6 right-6 z-50 w-11 h-11 grid place-items-center rounded-full bg-brand text-white shadow-xl opacity-0 translate-y-3 pointer-events-none transition-all hover:bg-branddark">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  </footer>`;

  function footLink(href, label) {
    return `<li><a href="${href}" class="inline-flex items-center gap-2 text-white/70 hover:text-green transition group"><span class="text-green/70 group-hover:translate-x-0.5 transition-transform">›</span>${label}</a></li>`;
  }

  function inject() {
    document.body.prepend(document.createRange().createContextualFragment(header));
    document.body.appendChild(document.createRange().createContextualFragment(footer));
    buildMobileNav(); wire();
  }

  function buildMobileNav() {
    const mnav = document.getElementById('mnav');
    mnav.innerHTML = NAV.map(([label, href, sub]) => {
      if (!sub) return `<a href="${href}" class="block px-5 py-3 border-b border-line font-head font-semibold text-navy">${label}</a>`;
      const items = sub.map(([n, h]) => `<a href="${h}" class="block px-7 py-2.5 text-sm text-body">${n}</a>`).join('');
      return `<div class="border-b border-line">
        <button class="macc w-full flex items-center justify-between px-5 py-3 font-head font-semibold text-navy text-left">${label}
          <svg class="w-4 h-4 text-brand transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
        <div class="acc-panel bg-soft">${items}</div></div>`;
    }).join('');
  }

  function wire() {
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-top-link').forEach(a => { if (a.getAttribute('href') === here) a.classList.add('active'); });
    // sticky shadow
    const bar = document.getElementById('stickybar');
    const onScroll = () => bar.classList.toggle('stuck', window.scrollY > 40);
    window.addEventListener('scroll', onScroll); onScroll();
    // desktop dropdowns: open on click/tap too (first click opens, second navigates)
    const closeAllDD = () => document.querySelectorAll('.nav-li.open').forEach(l => l.classList.remove('open'));
    document.querySelectorAll('.nav-li').forEach(li => {
      if (!li.querySelector('.dropdown')) return;
      const trigger = li.querySelector('.nav-top-link');
      trigger.addEventListener('click', e => {
        if (!li.classList.contains('open')) { e.preventDefault(); const wasOpen = li.classList.contains('open'); closeAllDD(); li.classList.toggle('open', !wasOpen); }
      });
    });
    document.addEventListener('click', e => { if (!e.target.closest('.nav-li')) closeAllDD(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllDD(); });
    // mobile
    const menu = document.getElementById('mobileMenu');
    document.getElementById('navToggle').addEventListener('click', () => menu.classList.remove('hidden'));
    menu.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => menu.classList.add('hidden')));
    menu.querySelectorAll('.macc').forEach(btn => btn.addEventListener('click', () => {
      const p = btn.nextElementSibling;
      const open = p.style.maxHeight && p.style.maxHeight !== '0px';
      p.style.maxHeight = open ? '0px' : p.scrollHeight + 'px';
      btn.querySelector('svg').classList.toggle('rotate-180', !open);
    }));
    // reveal
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    // 3D tilt on hover-capable devices
    if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      document.querySelectorAll('.hover-card').forEach(card => {
        card.classList.add('tilt-reset');
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*7).toFixed(2)}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      });
    }
    // footer year + back-to-top
    const yr = document.getElementById('footYear'); if (yr) yr.textContent = new Date().getFullYear();
    const toTop = document.getElementById('toTop');
    if (toTop) {
      const tog = () => {
        const show = window.scrollY > 400;
        toTop.classList.toggle('opacity-0', !show);
        toTop.classList.toggle('translate-y-3', !show);
        toTop.classList.toggle('pointer-events-none', !show);
      };
      window.addEventListener('scroll', tog); tog();
      toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
