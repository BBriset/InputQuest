import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developer: Developer = new Developer('Bertrand', 'Briset', 41, 'M', '', []);

  skillName: string = '';

  constructor() {}

  ngOnInit() {}

  addSkill() {
    let newSkill = new Skill(this.skillName);
    this.developer.skills.push(newSkill);
    console.log(this.skillName);
  }
}
