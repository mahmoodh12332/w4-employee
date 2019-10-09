import {Component, OnInit, Input} from '@angular/core';
import {AppService} from '../../../shared/services';
import {values} from 'lodash';
import {EmploymentSkillsYearMap} from '../../../shared/data/constants';

@Component({
  templateUrl: './skills-component.html',
  selector: 'app-skills'
})
export class SkillsComponent implements OnInit {
  @Input() step: any;
  public loadingData: boolean;
  public yearsMap = values(EmploymentSkillsYearMap);
  public skillsData: any;
  public allSkills: any = [];
  public levelOfCurrentSkill: any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getSkillsData();
  }

  getSkillsData() {
    this.loadingData = true;
    this.appService.getSkillsData()
      .then((res) => {
        this.skillsData = res;
        this.loadingData = false;
        this.allSkills = [...new Set(this.skillsData.map(a => a.category))];
        if (!this.step.formGroup.controls.level.value) {
          this.step.formGroup.controls.level.disable();
        } else {
          this.levelOfCurrentSkill = this.skillsData.filter(a => a.category === this.step.formGroup.controls.skillName.value);
        }
      })
      .catch(_ => {
        this.skillsData = null;
        this.loadingData = false;
      });
  }
  onSkillChange(e) {
    this.levelOfCurrentSkill = this.skillsData.filter(a => a.category === this.step.formGroup.controls.skillName.value);
    this.step.formGroup.controls.level.enable();
    this.step.formGroup.controls.level.reset();
  }
}
