import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('particles', { static: false }) particlesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('mainTitle', { static: false }) mainTitle!: ElementRef<HTMLHeadingElement>;

  private lastScrollY = 0;
  private isScrollingDown = true;
  private neonLines: NodeListOf<Element> | null = null;
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    // Inicialización del componente
  }

  ngAfterViewInit(): void {
    // Esperar un ciclo para que el DOM esté completamente renderizado
    setTimeout(() => {
      this.initializeComponent();
    }, 0);
  }

  ngOnDestroy(): void {
    // Limpiar listeners y observers
    window.removeEventListener('scroll', this.onScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initializeComponent(): void {
    this.neonLines = document.querySelectorAll('.neon-line');
    this.createParticles();
    this.setupScrollListener();
    this.setupIntersectionObserver();
    this.animateNeonLines();
    
    // Inicializar estado de las secciones
    document.querySelectorAll('.section-content').forEach(content => {
      content.classList.add('fade-out');
    });
  }

  private createParticles(): void {
    if (!this.particlesContainer) return;
    
    const particleCount = 50;
    const langs = ['SQL', 'TS', 'Kotlin', 'C#', 'Blazor', '.NET', 'Java', 'CSS', 'Angular', 'PHP'];

    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement('span');
      span.className = 'particle';
      span.textContent = langs[Math.floor(Math.random() * langs.length)];
      span.style.left = Math.random() * 100 + '%';
      span.style.top = Math.random() * 100 + '%';
      span.style.animationDelay = Math.random() * 8 + 's';
      span.style.animationDuration = (Math.random() * 4 + 6) + 's';
      
      const size = Math.random() * 1 + 0.2;
      span.style.fontSize = size + 'rem';
      
      this.particlesContainer.nativeElement.appendChild(span);
    }
  }

  private animateNeonLines(): void {
    if (!this.neonLines) return;
    
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    this.neonLines.forEach((line, index) => {
      const baseRotation = [25, -35, 45, -15, 65][index];
      const scrollInfluence = scrollPercent * 720;
      const rotationOffset = Math.sin(scrollPercent * Math.PI * 4 + index) * 30;
      
      const newRotation = baseRotation + scrollInfluence + rotationOffset;
      (line as HTMLElement).style.transform = `rotate(${newRotation}deg)`;
      
      const opacity = 0.8 + Math.sin(scrollPercent * Math.PI * 6 + index) * 0.3;
      (line as HTMLElement).style.opacity = Math.max(0.3, Math.min(1, opacity)).toString();
    });
  }

  private onScroll = (): void => {
    if (!this.mainTitle) return;
    
    const currentScrollY = window.scrollY;
    this.isScrollingDown = currentScrollY > this.lastScrollY;
    this.lastScrollY = currentScrollY;

    this.animateNeonLines();

    const titleElement = this.mainTitle.nativeElement;
    if (currentScrollY > 50 && this.isScrollingDown) {
      titleElement.classList.add("animate-out");
      titleElement.classList.remove("animate-in");
    } else if (currentScrollY <= 50 && !this.isScrollingDown) {
      titleElement.classList.remove("animate-out");
      titleElement.classList.add("animate-in");
    }
  };

  private setupScrollListener(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  private setupIntersectionObserver(): void {
    const observerOptions = {
      threshold: [0.1, 0.5],
      rootMargin: '-20% 0px -20% 0px'
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const content = entry.target.querySelector('.section-content');
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          content?.classList.remove('fade-out');
          content?.classList.add('fade-in', 'visible');
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
          content?.classList.remove('fade-in', 'visible');
          content?.classList.add('fade-out');
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach(section => {
      this.observer?.observe(section);
    });
  }
}