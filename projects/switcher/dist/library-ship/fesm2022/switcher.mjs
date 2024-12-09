import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SwitcherService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SwitcherComponent {
    ngOnInit() {
        console.log("Hello From Switcher");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SwitcherComponent, selector: "lib-switcher", ngImport: i0, template: ``, isInline: true, styles: [".modal{display:block;position:fixed}.close{cursor:pointer}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-switcher', template: ``, styles: [".modal{display:block;position:fixed}.close{cursor:pointer}\n"] }]
        }] });

class SwitcherModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [CommonModule], exports: [SwitcherComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [CommonModule],
                    exports: [SwitcherComponent], // Export the component for use in other modules
                }]
        }] });

/*
 * Public API Surface of switcher
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SwitcherComponent, SwitcherModule, SwitcherService };
//# sourceMappingURL=switcher.mjs.map
