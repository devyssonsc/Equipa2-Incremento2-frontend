import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-so-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './so-page.component.html',
  styleUrl: './so-page.component.scss'
})
export class SoPageComponent implements OnInit {

  id: string | null = null;

  data = {
    id: 1,
    title: "Pintura",
    description: "Pintura em casas ou apartamentos com até 100m2",
    pro: {
      name: "Divaldo Dias",
      specialty: "Pintura",
      experience: 3,
      requests: []
    },
    price: "25,00"
  }

  constructor(private route: ActivatedRoute){}

  requirementForm = new FormGroup({
    inputDate: new FormControl('', [
      Validators.required
    ]),
    inputTime: new FormControl('', [
      Validators.required
    ])
  })

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
  }

  requireService(){
    const data = {
      date: this.requirementForm.get('inputDate')?.value,
      time: this.requirementForm.get('inputTime')?.value
    }
    console.log(data);
  }
}
