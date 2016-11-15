import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Componentes:
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroService } from './services/hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }



