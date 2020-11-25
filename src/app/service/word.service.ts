import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WordService {
  static readonly words: [string, string][] = [
    ['Orange Juice', 'Apple Juice'],
    ['Library', 'Book Store'],
    ['Girlfriend', 'Ex-Girlfriend'],
    ['House', 'Apartment'],
    ['Pop Music', 'Rock Music'],
    ['Blue (color)', 'Green (color)'],
    ['Tooth Brush', 'Dental Floss'],
    ['Shower', 'Bathtub'],
    ['Jacket', 'Sweater'],
    ['Nike', 'Adidas'],
    ['McDonald\'s', 'Burger King'],
    ['Hamburger', 'Sandwich'],
    ['Beef', 'Pork'],
    ['Lord of the Rings', 'The Hobbit'],
    ['Coke', 'Pepsi'],
    ['Jackie Chan', 'Bruce Lee'],
    ['Christiano Ronald', 'Lionel Messi'],
    ['Zlatan Ibrahimović', 'Neymar'],
    ['Apple (Company)', 'Google'],
    ['Facebook', 'Instagram'],
    ['Iron Man', 'Captain America'],
    ['Superman', 'Spider-Man'],
    ['Rum', 'Tequila'],
    ['Pineapple', 'Mango'],
    ['Strawberry', 'Blueberry'],
    ['Pomegranate', 'Passion Fruit']
  ];

  getRandomWordTuple(): [string, string] {
    const wordTuple = WordService.words[Math.floor(Math.random() * WordService.words.length)];
    const randomBool = Math.random() >= 0.5;
    return randomBool ? wordTuple : [wordTuple[1], wordTuple[0]];
  }
}
