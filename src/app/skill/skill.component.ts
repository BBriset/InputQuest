import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input()
  skill!: Skill;

  test() {}
  constructor() {}

  ngOnInit() {}
}
