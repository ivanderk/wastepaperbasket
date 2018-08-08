import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

export interface Trainings {
  title: string;
  information: string;
}

@Component({
  selector: 'app-catalogue-detail',
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss'],
})
export class CatalogueDetailComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);

  trainings: Trainings[] = [
    { title: 'Title 1', information: 'Informacion 1', },
    { title: 'Title 2', information: 'Informacion 2', },
    {title: 'Title 3', information: ' Lorem ipsum dolor sit amet, iusto sanctus eleifend has an.Et' +
    'praesent disputationi mea, nec melius suavitate te.' +
    ' Cum dolorem facilisis no. Veri homero te pri. Vix et dicant aliquip, in est falli salutandi intellegebat.',
    },
    { title: 'Title 4', information: 'Informacion 4', },
  ];

  constructor() { }

  ngOnInit() { }

}
