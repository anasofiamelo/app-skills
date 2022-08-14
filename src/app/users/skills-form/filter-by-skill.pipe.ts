import { Pipe, PipeTransform } from "@angular/core";
import { Skills } from "../skills/Skills";

@Pipe({ name: "filterBySkill" })
export class FilterBySkill implements PipeTransform {
  transform(skills: Skills[], skillQuery: string) {
    skillQuery = skillQuery.trim().toLowerCase();

    if (skillQuery) {
      return skills.filter((skill) =>
        skill.habilidade.toLowerCase().includes(skillQuery)
      );
    } else {
      return skills;
    }
  }
}
