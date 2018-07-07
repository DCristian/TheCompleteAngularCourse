import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class TitlePipePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }

    let prepositions = ['of', 'the'];
    let words = value.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
      if (prepositions.findIndex(x => x === words[i]) >= 0 && i !== 0) {
          continue;
      }

      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
  }
}
