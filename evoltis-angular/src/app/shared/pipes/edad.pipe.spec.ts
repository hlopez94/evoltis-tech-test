import { EdadPipe } from './edad.pipe';

describe('EdadPipe', () => {
  let pipe: EdadPipe;
  let clock: jasmine.Clock = jasmine.clock().install();;

  beforeEach(() => {
    pipe = new EdadPipe();
  });

  it('crear instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('calcular edad en años', () => {
    clock.mockDate(new Date('2023-09-17T12:00:00Z'));
    const cumpleanosA = '2003-08-15'; // Fecha de nacimiento en formato YYYY-MM-DD
    expect(pipe.transform(cumpleanosA)).toBe('20 años');

    const cumpleanosB = '2018-02-25';
    expect(pipe.transform(cumpleanosB)).toBe('5 años');

    const cumpleanosFuturo = '2030-10-10';
    expect(pipe.transform(cumpleanosFuturo)).toBe('< 1 mes');
  });

  it('manejar fechas en meses', () => {
    clock.mockDate(new Date('2023-09-17T12:00:00Z'));

    const birthdate1 = '2023-01-15';
    expect(pipe.transform(birthdate1)).toBe('8 meses');

    const birthdate2 = '2023-05-25';
    expect(pipe.transform(birthdate2)).toBe('4 meses');

    const birthdate3 = '2023-09-05';
    expect(pipe.transform(birthdate3)).toBe('< 1 mes');
  });

  it('manejar caso: 1 mes exacto', () => {
    clock.mockDate(new Date('2023-09-17T12:00:00Z'));
    const birthdate = '2023-08-17';
    expect(pipe.transform(birthdate)).toBe('1 mes');
  });

  it('manejar caso: 1 año exacto', () => {
    clock.mockDate(new Date('2023-09-17T12:00:00Z'));
    const birthdate = '2022-09-17';
    expect(pipe.transform(birthdate)).toBe('1 año');
  });
  it('manejar caso: mas de 1 año exacto', () => {
    clock.mockDate(new Date('2023-09-17T12:00:00Z'));
    const birthdate = '2021-09-17';
    expect(pipe.transform(birthdate)).toBe('2 años');
  });

  it('manejar caso: fecha futura', () => {
    clock.mockDate(new Date('2023-09-17T12:00:00Z'));
    const futureBirthdate = '2035-12-31';
    expect(pipe.transform(futureBirthdate)).toBe('< 1 mes');
  });
});
