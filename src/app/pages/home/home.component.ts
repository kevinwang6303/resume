import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { scrollIt } from 'src/app/@core/ts/scroll-to';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video: ElementRef;
  @ViewChild('menu') menuElm: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('experience') experience: ElementRef;
  @ViewChild('skills') skills: ElementRef;
  @ViewChild('trait') trait: ElementRef;

  menuArray = [
    {
      name: 'ABOUT',
      active: true
    },
    {
      name: 'EXPERIENCE',
      active: false
    }, {
      name: 'SKILLS',
      active: false
    }, {
      name: 'TRAIT',
      active: false
    }
  ];

  menuOpen = false;
  scrollEvent: Observable<any>;
  toDay = new Date();

  constructor() {
    this.scrollEvent = fromEvent(window, 'scroll');
    this.scrollEvent.subscribe(() => {

      let tempWidth = window.innerWidth;

      if (tempWidth < 1064) {

        this.setFixed(60);
      } else {

        this.setFixed(0);
      }

    });
  }

  private setFixed(value) {
    if (this.menuElm.nativeElement.parentElement.getBoundingClientRect().top < value) {
      this.menuElm.nativeElement.classList.add('fixed');
    } else {
      this.menuElm.nativeElement.classList.remove('fixed');
    }
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.video.nativeElement.muted = true;
  }

  goMenu(index) {

    this.menuArray.forEach(
      (item) => {
        item.active = false;
      }
    )
    this.menuArray[index].active = true;
    switch (index) {
      case 0:
        this.about.nativeElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
        break;
      case 1:
        this.experience.nativeElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
        break;
      case 2:
        this.skills.nativeElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
        break;
      case 3:
        this.trait.nativeElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
        break;

      default:
        break;
    }
    /*
        let tempWidth = window.innerWidth;
        if (tempWidth < 1064) {
          scrollIt(window.pageYOffset + eleHeight - 110, 300, 'linear');
        } else {
          scrollIt(window.pageYOffset + eleHeight - 50, 300, 'linear');
        }*/

  }
  goTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
