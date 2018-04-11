import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    WsAutoJHipsterSharedLibsModule,
    WsAutoJHipsterSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        WsAutoJHipsterSharedLibsModule,
        WsAutoJHipsterSharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        WsAutoJHipsterSharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class WsAutoJHipsterSharedModule {}
