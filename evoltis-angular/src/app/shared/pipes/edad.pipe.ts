import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
})
export class EdadPipe implements PipeTransform {
  transform(nacimiento: string): string {
    const hoy = new Date();
    const fechaFechaNacimiento = new Date(nacimiento);
    
    const ageInMonths = (hoy.getFullYear() - fechaFechaNacimiento.getFullYear()) * 12 + 
      (hoy.getMonth() - fechaFechaNacimiento.getMonth());
    
    if (ageInMonths < 1) {
      return '< 1 mes';
    } else if (ageInMonths < 12) {
      return `${ageInMonths} ${ageInMonths == 1 ? 'mes' : 'meses'}`;
    } else {
      const ageInYears = Math.floor(ageInMonths / 12);
      
      return `${ageInYears} ${ageInYears == 1 ? 'año' : 'años'}`;
    }
  }
}
