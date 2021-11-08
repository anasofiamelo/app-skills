import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../user/user';

@Pipe({ name: 'filterBySkills'})

export class FilterBySkill implements PipeTransform {

    transform(users: User[], skillQuery: string) {
        skillQuery = skillQuery
        .trim()
        .toLowerCase()

        if(skillQuery){
            return users.filter(user => user.nome
                .toLowerCase()
                .includes(skillQuery)
            );
        } else {
            return users
        }
    }

}


