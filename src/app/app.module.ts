import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {fr_FR, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {AllTabsComponent} from './pages/all-tabs/all-tabs.component';
import {NgZorroAntdModule, NzIconModule, NzInputModule, NzTabsModule} from 'ng-zorro-antd';
import {MatTabsModule} from '@angular/material/tabs';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AddArtWorkComponent} from './pages/add-art-work/add-art-work.component';
import {DeleteEditArtWorkComponent} from './pages/delete-edit-art-work/delete-edit-art-work.component';
import {ClearInputComponent} from './component/clear-input/clear-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {WarningButtonComponent} from './component/warning-button/warning-button.component';
import {DatePickerComponent} from './component/date-picker/date-picker.component';
import {ClearDescriptionInputComponent} from './component/clear-description-input/clear-description-input.component';
import {CardsComponent} from './component/cards/cards.component';
import {UploaderComponent} from './component/uploader/uploader.component';
import {MatCardModule} from '@angular/material/card';
import {MapsComponent} from './pages/maps/maps.component';
import {MapGridListComponent} from './component/map-grid-list/map-grid-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {ArtWorkService} from './services/art-work.service';
import {DirectionService} from './services/direction.service';
import {SymbolService} from './services/symbol.service';
import {ImageStorageService} from './services/image-storage.service';
import {AddArtworkCardComponent} from './component/add-artwork-card/add-artwork-card.component';
import {AddSymbolCardComponent} from './component/add-symbol-card/add-symbol-card.component';
import {AddDirectionCardComponent} from './component/add-direction-card/add-direction-card.component';
import {SelectComponent} from './component/select/select.component';
import {MatSelectModule} from '@angular/material/select';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    AllTabsComponent,
    ToolbarComponent,
    AddArtWorkComponent,
    DeleteEditArtWorkComponent,
    ClearInputComponent,
    WarningButtonComponent,
    DatePickerComponent,
    ClearDescriptionInputComponent,
    CardsComponent,
    UploaderComponent,
    MapsComponent,
    MapGridListComponent,
    AddArtworkCardComponent,
    AddSymbolCardComponent,
    AddDirectionCardComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NzTabsModule,
    MatTabsModule,
    MatToolbarModule,
    NzInputModule,
    NzIconModule,
    MatFormFieldModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    NgZorroAntdModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [ArtWorkService, ImageStorageService, DirectionService, SymbolService, {provide: NZ_I18N, useValue: fr_FR}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
