import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'valentine';
  noX = 0;
  noY = 0;
  accepted = false;
  isMobile = false;

  burstArray = new Array(20);

  ngOnInit() {
    this.initializeButtonPosition();
    window.addEventListener('resize', () => this.initializeButtonPosition());
  }

  initializeButtonPosition() {
    this.isMobile = window.innerWidth < 768;
    this.moveNo();
  }

  moveNo() {
    // Ensure button stays within viewport with proper margins
    const buttonWidth = 150;
    const buttonHeight = 60;
    const margin = 10;

    this.noX =
      Math.random() * (window.innerWidth - buttonWidth - margin * 2) + margin;
    this.noY =
      Math.random() * (window.innerHeight - buttonHeight - margin * 2) + margin;
  }

  accept() {
    this.accepted = true;
  }
}
