import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter();

  documents = [
    new Document('1', 'CIT 260 - Object Oriented Programming', 'This course is an intruduction to object oriented programming using Java.', 'https://content.byui.edu/260'),
    new Document('2', 'CIT 366 - Full Web Stack Development', 'You will learn how to develop both the front end running in a browser and the back end running on a server.', 'https://content.byui.edu/366'),
    new Document('3', 'CIT 425 - Data Warehousing', 'This is test 3.', 'https://content.byui.edu/425'),
    new Document('4', 'CIT 460 - Enterprise Development', 'This is test 4.', 'https://content.byui.edu/460'),
    new Document('5', 'CIT 495 - Senior Practicum', 'This is test 5.', 'https://content.byui.edu/495'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
