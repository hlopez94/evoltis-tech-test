import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shell/navbar/navbar.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { MascotasServiceMock } from './servicios/mascotas.service.mock';
import { MASCOTAS_SERVICE_TOKEN } from './model/interfaces/IMascotasService';
import { MascotasEffects } from './states/mascotas/mascotas.effects';
import { mascotasReducer } from './states/mascotas/mascotas.reducer';
import { environment } from 'src/environments/environment';
import { MascotasService } from './servicios/mascotas.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,     
    StoreModule.forRoot({mascotas: mascotasReducer}), 
    EffectsModule.forRoot([MascotasEffects])
  ],
  providers: [    
    { provide: MASCOTAS_SERVICE_TOKEN, useClass: environment.mockMascotas ? MascotasServiceMock : MascotasService }, 
  ],
})
export class AppModule {}
