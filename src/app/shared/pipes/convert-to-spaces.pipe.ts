import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'convertToSpaces' //This is the selector or name reference to call this pipe in HTML.
})


export class ConvertToSpacesPipe implements PipeTransform {
  transform(word: string, value: string): any {

    return word.replace(value, " ");
  }
}
