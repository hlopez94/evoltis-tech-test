import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shell/navbar/navbar.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { MascotasServiceMock } from './servicios/mascotas.service.mock';
import { MASCOTAS_SERVICE_TOKEN } from './model/interfaces/IMascotasService';
import { environment } from 'src/environments/environment';
import { MascotasService } from './servicios/mascotas.service';
import { MascotasStoreModule } from './states/mascotas/mascotas.store.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    MascotasStoreModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
    {
      provide: MASCOTAS_SERVICE_TOKEN,
      useClass: environment.mockMascotas
        ? MascotasServiceMock
        : MascotasService,
    },
  ],
})
export class AppModule {}
