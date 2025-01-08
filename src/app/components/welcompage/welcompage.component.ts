import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcompage',
  templateUrl:'./welcompage.component.html',
  styleUrls: ['./welcompage.component.css']
})
export class WelcompageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log('Target component loaded!');
  }

}
