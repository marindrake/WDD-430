import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'Subject 1', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message('2', 'Subject 2', 'When is assignment 3 due?', 'Steve Johnson'),
    new Message('3', 'Subject 3', 'Assignment 3 is due on Saturday at 11:30 PM', 'Bro. Jackson'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}