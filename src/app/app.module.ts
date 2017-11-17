import { NgModule, LOCALE_ID }                  from '@angular/core';
import { Routes, RouterModule }                 from '@angular/router';
import { BrowserModule }                        from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { HttpModule }                           from '@angular/http';
import { HttpClientModule, HttpClient }         from '@angular/common/http';
import { TranslateModule, TranslateLoader }     from '@ngx-translate/core';
import { TranslateHttpLoader }                  from '@ngx-translate/http-loader';
import { ToastModule, ToastOptions }            from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { MomentModule }                         from 'angular2-moment';
import { Ng2CompleterModule }                   from "ng2-completer";
import { NgbModule }                            from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule }                        from 'ngx-loading';

import { AppComponent }         from './app.component';

import {
        AppService,
        AuthenticationService
    }                           from './_services/index';
import { AppHeaderComponent }   from './app-header.component';
import { LoginComponent }       from './login/login.component';
import { HomeComponent }        from './home/home.component';
import { TodoComponent }        from './todo/todo.component';
import { ItemsComponent }       from './items/items.component';
import { EmpComponent }         from './emp/emp.component';
import { TodoItemComponent }    from './todo/todo-item/todo-item.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory( http: HttpClient ) {
    return new TranslateHttpLoader( http, '/custom/translation/', '-tran.json' );
}

export class CustomOption extends ToastOptions {
    animate         = 'flyRight'; // you can override any options available
    showCloseButton = true;
}

const
    appRoutes: Routes = [
        {
            path:           '',
            component:      HomeComponent,
            canActivate:    [ AuthenticationService ],
            children:       [
                {
                    path:           'todo',
                    component:      TodoComponent
                },
                {
                    path:           'items',
                    component:      ItemsComponent
                },
                {
                    path:           'emp',
                    component:      EmpComponent
                }
            ]
        },
        { path: 'login',        component: LoginComponent },
        { path: '', redirectTo: '/todo', pathMatch: 'full' }
    ],
    routing = RouterModule.forRoot(
            appRoutes,
            {
//                enableTracing:      true
//                initialNavigation:  false
            }
        );

@NgModule({
    imports: [
        MomentModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingModule,
        Ng2CompleterModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ToastModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        HomeComponent,
        LoginComponent,
        TodoComponent,
        ItemsComponent,
        EmpComponent,
        TodoItemComponent,
        ItemDetailComponent
    ],
    entryComponents: [
    ],
    providers: [
        AppService,
        AuthenticationService,

        ToastModule,

        { provide: LOCALE_ID, useValue: 'de' }
    ],
    exports:    [
        RouterModule,
        TranslateModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
