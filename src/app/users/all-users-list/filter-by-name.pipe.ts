import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../user/user';

@Pipe({ name: 'filterByName'})

export class FilterByName implements PipeTransform {

    transform(user: User[], userQuery: string) {
        userQuery = userQuery
        .trim()
        .toLowerCase()

        if(userQuery){
            return user.filter(user => user.nome
                .toLowerCase()
                .includes(userQuery)
            );
        } else {
            return user
        }
    }

}


