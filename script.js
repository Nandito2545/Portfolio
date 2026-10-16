/**
 * NANDITO MAULANA YEDIDKAR — PORTFOLIO SCRIPT
 * Functionality: Active Nav Scroll Spy, Scroll Progress Bar, Copy Email Toast,
 * Project Detail Modal, Smooth Scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Bar
  const scrollBar = document.getElementById('scroll-bar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollBar) {
      scrollBar.style.width = `${scrollPercent}%`;
    }
  });

  // 2. Active Navigation Spy
  const sections = document.querySelectorAll('.slide-section');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileDrawer.setAttribute('aria-hidden', !isOpen);
    });

    // Close mobile drawer when clicking any mobile item
    document.querySelectorAll('.mobile-item, .mobile-wa-btn').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // 3. Copy Email to Clipboard & Toast
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'nanditomaulanayedikar@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Email ${email} berhasil disalin!`);
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  });

  function fallbackCopy(text) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      showToast(`Email ${text} berhasil disalin!`);
    } catch (err) {
      showToast('Gagal menyalin otomatis');
    }
    document.body.removeChild(el);
  }

  // 4. Project Detail Modal
  const projectDetails = {
    galeribuku: {
      title: 'Galeri Buku Jakarta',
      role: 'Web Developer (Maret 2023 – Desember 2023)',
      image: 'assets/galeri-buku.png',
      desc: 'Platform media literasi, resensi buku, esai sastra, dan kurasi kebudayaan berbasis di Jakarta. Menghadirkan portal baca bernuansa hangat dan elegan untuk komunitas literatur.',
      tasks: [
        'Mengelola sisi frontend dan backend secara end-to-end.',
        'Integrasi arsitektur database untuk katalog buku, direktori penulis, dan arsip puisi.',
        'Optimasi performa aset gambar dan kecepatan muat halaman untuk kenyamanan pembaca.',
        'Mendesain antarmuka responsif ramah mobile untuk akses artikel harian.'
      ],
      tech: ['Full-Stack Web Dev', 'PHP', 'MySQL', 'Performance Optimization', 'Editorial CMS'],
      link: 'https://galeribukujakarta.com'
    },
    mugiyanto: {
      title: 'Web Profile WAMEN HAM (mugiyanto.id)',
      role: 'Web Developer (Jan – Jul 2025)',
      image: 'assets/mugiyanto.png',
      desc: 'Situs web resmi Wakil Menteri Hak Asasi Manusia Republik Indonesia, Mugiyanto. Berfungsi sebagai kanal komunikasi publik, penyampaian fokus kerja kenegaraan, dan arsip siaran pers resmi.',
      tasks: [
        'Bertanggung jawab membangun frontend interaktif dan sistem admin backend yang dinamis.',
        'Membangun modul pengelolaan konten berita resmi, agenda kenegaraan, dan pernyataan eksekutif.',
        'Merancang tata letak yang berwibawa, modern, bersih, dan sesuai standar representasi kementerian.',
        'Memastikan keamanan data dan efisiensi query basis data relasional.'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Admin CMS Backend', 'Responsive Frontend'],
      link: 'https://mugiyanto.id'
    },
    earthcleanup: {
      title: 'Earth Clean Up — Game Edukasi Android',
      role: 'Game Developer Magang • PT. Khailabs (Jun – Des 2022)',
      image: 'assets/earth-cleanup.png',
      desc: 'Game Android offline edukasi interaktif tentang kepedulian lingkungan. Status saat ini: Belum dipublikasikan secara publik, hanya berjalan lokal di perangkat Android. Pemain ditantang membersihkan aneka jenis sampah di 6 zona ekosistem berbeda dengan mekanisme yang mendidik dan seru.',
      tasks: [
        'Mengembangkan 2 game Android offline fungsional dari rancangan ide hingga siap dimainkan.',
        'Menyusun gameplay mechanics: drag-and-drop sortir sampah, sistem collision, dan scoring 3-star.',
        '6 level bertahap: Park Cleanup, River Restoring, Forest Planting, Wildlife Rescue, Ocean Waste, City Greenery.',
        'Menyusun ide desain 3D untuk materi presentasi dan demo proyek klien.'
      ],
      tech: ['Android Mobile Game', 'Gameplay Mechanics', 'Level Progression', '3D Design Prototyping', 'Offline Storage'],
      link: null
    }
  };

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  function openModal(id) {
    const data = projectDetails[id];
    if (!data || !modalContent) return;

    modalContent.innerHTML = `
      <div style="width: 100%; aspect-ratio: 16/9; background: #fff; margin-bottom: 20px; overflow: hidden; border: 1px solid #ccc;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover; object-position: top center;">
      </div>
      <h3 style="font-size: 1.8rem; font-weight: 900; letter-spacing: -0.04em; color: #141414; margin-bottom: 4px;">${data.title}</h3>
      <div style="font-size: 0.85rem; font-weight: 700; color: #e62b3b; margin-bottom: 16px; text-transform: uppercase;">${data.role}</div>
      <p style="font-size: 1rem; color: #333; line-height: 1.6; margin-bottom: 20px;">${data.desc}</p>

      <h4 style="font-size: 1.05rem; font-weight: 800; color: #141414; margin-bottom: 10px;">Tanggung Jawab & Fitur Utama:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px; color: #444; line-height: 1.6; font-size: 0.95rem;">
        ${data.tasks.map(t => `<li style="margin-bottom: 6px;">${t}</li>`).join('')}
      </ul>

      <h4 style="font-size: 1.05rem; font-weight: 800; color: #141414; margin-bottom: 10px;">Teknologi:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
        ${data.tech.map(t => `<span style="font-size: 0.8rem; font-weight: 700; background: #e0e0e0; padding: 4px 10px; border-radius: 4px; color: #141414;">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 12px; align-items: center;">
        ${data.link ? `
          <a href="${data.link}" target="_blank" rel="noopener noreferrer" style="background: #141414; color: #fff; padding: 10px 20px; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 6px;">
            <span>Kunjungi Website Resmi</span>
            <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        ` : ''}
        <button class="modal-close-btn-inline" style="background: transparent; border: 1px solid #141414; padding: 10px 20px; font-weight: 700; font-size: 0.9rem; cursor: pointer;">Tutup</button>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    modalContent.querySelector('.modal-close-btn-inline')?.addEventListener('click', closeModal);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project');
      openModal(projId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Circle arrow button scrolls to project showcase
  const arrowBtn = document.querySelector('.arrow-circle-button');
  if (arrowBtn) {
    arrowBtn.addEventListener('click', () => {
      const grid = document.querySelector('.projects-columns-grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
