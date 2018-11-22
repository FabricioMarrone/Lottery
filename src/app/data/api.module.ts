import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { ApiTest } from './api.test';
import { ApiSecurity } from './api.security';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    exports: [
    ],
    providers: [
        ApiTest,
        ApiSecurity
    ]
})
export class DataApiModule {
}