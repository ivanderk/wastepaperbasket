import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SampleDataModule } from './sampledata/sampledata.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueMasterComponent } from './catalogue/catalogue-master/catalogue-master.component';
import { CatalogueDetailComponent } from './catalogue/catalogue-detail/catalogue-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/shared/in-memory-data.service';
import { environment } from '../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, LoginComponent, CatalogueComponent, CatalogueMasterComponent, CatalogueDetailComponent],
  imports: [
    BrowserModule,
    environment.production ? 
    HttpClientModule : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }),
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    MatTreeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SampleDataModule,
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
