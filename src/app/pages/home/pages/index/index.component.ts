import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { fromEvent, Observable } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: ElementRef;
  @ViewChild('menu') menuElm: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('experience') experience: ElementRef;
  @ViewChild('skills') skills: ElementRef;
  @ViewChild('trait') trait: ElementRef;

  scrollEvent: Observable<any>;
  toDay = new Date();

  menuArray = [
    {
      name: 'ABOUT',
      active: true
    },
    {
      name: 'EXPERIENCE',
      active: false
    },
    {
      name: 'SKILLS',
      active: false
    },
    {
      name: 'TRAIT',
      active: false
    }
  ];

  constructor() {
    this.scrollEvent = fromEvent(window, 'scroll');
    this.scrollEvent.subscribe(() => {
      const tempWidth = window.innerWidth;

      if (tempWidth < 1064) {
        this.setFixed(60);
      } else {
        this.setFixed(0);
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.video.nativeElement.muted = true;
  }

  private setFixed(value) {
    if (
      this.menuElm.nativeElement.parentElement.getBoundingClientRect().top <
      value
    ) {
      this.menuElm.nativeElement.classList.add('fixed');
    } else {
      this.menuElm.nativeElement.classList.remove('fixed');
    }
  }

  goMenu(index) {
    let ele;
    this.menuArray.forEach(item => {
      item.active = false;
    });
    this.menuArray[index].active = true;
    switch (index) {
      case 0:
        ele = this.about.nativeElement;
        break;
      case 1:
        ele = this.experience.nativeElement;
        break;
      case 2:
        ele = this.skills.nativeElement;
        break;
      case 3:
        ele = this.trait.nativeElement;
        break;

      default:
        break;
    }
    ele.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }

  goTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
