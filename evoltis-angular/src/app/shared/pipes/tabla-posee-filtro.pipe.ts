import { Pipe, PipeTransform } from '@angular/core';
import { FilterMetadata } from 'primeng/api';

@Pipe({
  name: 'tablaPoseeFiltro',
  pure: false,
})
export class TablaPoseeFiltroPipe implements PipeTransform {
  transform(obj: any): boolean {
    if (Object.keys(obj.filters).length == 0) return false;

    for (const key in obj.filters) {
      if (obj.filters.hasOwnProperty(key)) {
        const filterObject = obj.filters[key];

        if (Array.isArray(filterObject)) {
          const hasNonNullValue = filterObject.some(
            (item: FilterMetadata) => item.value !== null
          );

          if (hasNonNullValue) {
            return true;
          }
        } else {
          const hasNonNullValue = filterObject.value !== null;
          if (hasNonNullValue) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
