import { Injectable } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';

@Injectable({ providedIn: 'root' })
export class WordService {

  static readonly offlineWords: [string, string][] = [
    ['Orange Juice', 'Apple Juice'],
    ['Girlfriend', 'Ex-Girlfriend'],
    ['House', 'Apartment'],
    ['Pop Music', 'Rock Music'],
    ['Blue (color)', 'Red (color)'],
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
    ['Christiano Ronaldo', 'Lionel Messi'],
    ['Zlatan Ibrahimović', 'Christiano Ronaldo'],
    ['Apple (Company)', 'Google'],
    ['Facebook', 'Instagram'],
    ['Iron Man', 'Captain America'],
    ['Superman', 'Spider-Man'],
    ['Rum', 'Tequila'],
    ['Pineapple', 'Mango'],
    ['Strawberry', 'Blueberry'],
    ['Pomegranate', 'Passion Fruit'],
    ['Milk', 'Soy Milk'],
    ['Laptop', 'Computer'],
    ['Dumpling', 'Bun'],
    ['Motor Bike', 'Scooter'],
    ['Chicken', 'Duck'],
    ['Lamp', 'Light'],
    ['Horse', 'Camel'],
    ['Vest', 'Underwear'],
    ['Library', 'Bookstore'],
    ['Candle', 'Lantern'],
    ['Bodyguard', 'Security'],
    ['FBI', 'CIA'],
    ['Chili', 'Mustard'],
    ['Dolphin', 'Orca'],
    ['Hong Kong', 'Taiwan'],
    ['Lipstick', 'Lip Glaze'],
    ['Napkin', 'Handkerchief'],
    ['Butterfly', 'Moth'],
    ['Hornet', 'Bee'],
    ['Bread', 'Cake'],
    ['Shampoo', 'Hair Conditioner'],
    ['Bed', 'Sofa'],
    ['Balcony', 'Garden'],
    ['Huawei', 'Samsung'],
    ['Google', 'Bing'],
    ['Duck', 'Goose'],
    ['Facebook', 'Twitter'],
    ['Suit', 'Shirt'],
    ['Watch', 'Clock'],
    ['Cherry', 'Strawberry'],
    ['Mars', 'Venus'],
    ['Tennis', 'Badminton'],
    ['Hospital', 'Emergency Clinic'],
    ['Doctor', 'Therapist'],
    ['Pencil', 'Marker'],
    ['Glue', 'Tape'],
    ['Cream', 'Body Lotion'],
    ['Pillow', 'Cushion'],
    ['Blueberry', 'Grape'],
    ['Storm', 'Tornado'],
    ['List', 'Itinerary'],
    ['Movie', 'Documentary'],
    ['Back Packing', 'Vacation'],
    ['Sunbathing', 'Tanning Salon'],
    ['Shark', 'Octopus'],
    ['Stingray', 'Moray Eel'],
    ['Sky Diving', 'Bungee Jump']
  ];

  private googleSheetsWords: [string, string][] = [];

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    const attributesMapping = ['word1', 'word2'];
    const observable =
      this.googleSheetsDbService.get<any>('1uimBGU1L5IsA1klsHvZvYBvMcmf9UrjJKtA83F9npbA', 1, attributesMapping);
    observable.subscribe(result => this.googleSheetsWords = result.map(n => [n.word1, n.word2]));
  }

  getRandomWordTuple(): [string, string] {
    let wordTuple: [string, string];
    if (this.googleSheetsWords.length > 0) {
      console.log('Using Google Sheets');
      wordTuple = this.googleSheetsWords[Math.floor(Math.random() * this.googleSheetsWords.length)];
    } else {
      console.log('Using offline words');
      wordTuple = WordService.offlineWords[Math.floor(Math.random() * WordService.offlineWords.length)];
    }
    const randomBool = Math.random() >= 0.5;
    return randomBool ? wordTuple : [wordTuple[1], wordTuple[0]];
  }
}
