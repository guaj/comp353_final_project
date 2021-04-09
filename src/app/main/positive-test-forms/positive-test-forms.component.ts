import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positive-test-forms',
  templateUrl: './positive-test-forms.component.html',
  styleUrls: ['./positive-test-forms.component.css']
})
export class PositiveTestFormsComponent implements OnInit {

  mainSymptoms: string[] = [
    'Fever (temperature exceeding 38.1 degrees Celsius or 100.6 degrees Fahrenheit)',
    'Cough',
    'Shortness of breath or difficulty breathing',
    'Loss of taste and smell',
  ];

  otherSymptoms: string[] = [
    'Nausea',
    'Stomach aches',
    'Vomiting',
    'Headache',
    'Muscle pain',
    'Diarrhea',
    'Sore throat'
  ];

  constructor() { }

  ngOnInit() {
  }

}
