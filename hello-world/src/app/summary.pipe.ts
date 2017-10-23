import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    /*transform is a method defined inside PipeTransform Interface 
    first param : Value takes the element value on which the param is applied 
    Second param can take any no of arguments which can be further used to wirte our business logic
    */
    transform(value: string,limit?:number){
        if(!value)
            return null;
        let actualLimit=(limit)?limit : 50;
       return  value.substring(0,actualLimit)+'...';
    }
}