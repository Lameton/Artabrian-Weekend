import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'countdown',
  standalone: true,
  templateUrl: './countdown.component.html'
})
export class CountdownComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  targetDates = [
    { date: new Date('2025-08-20T00:00:00'), text: 'OFERTA PREINSCRIPCIÓN :' },
    { date: new Date('2025-11-22T00:00:00'), text: `INICIO DEL TORNEO` }
  ];
  currentDateIndex = 0;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  isOfferEnded = false;
  currentOfferText = '';

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private calculateTimeLeft() {
    const now = new Date();
    const currentTarget = this.targetDates[this.currentDateIndex];
    const difference = currentTarget.date.getTime() - now.getTime();

    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      this.isOfferEnded = false;
      this.currentOfferText = currentTarget.text;
    } else {
      if (this.currentDateIndex < this.targetDates.length - 1) {
        this.currentDateIndex++;
        this.calculateTimeLeft();
      } else {
        this.days = this.hours = this.minutes = this.seconds = 0;
        this.isOfferEnded = true;
        this.subscription?.unsubscribe();
      }
    }
  }

  private startCountdown() {
    this.calculateTimeLeft();
    this.subscription = interval(1000).subscribe(() => {
      this.calculateTimeLeft();
    });
  }

  formatNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
