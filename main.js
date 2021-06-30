(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TIMA\Work\Projects\a-n-g\test\src\main.ts */"zUnb");


/***/ }),

/***/ "3qkz":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/side-nav/side-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mocks_filter_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mocks/filter.data */ "KwV/");
/* harmony import */ var _mocks_sorting_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mocks/sorting.data */ "xehY");
/* harmony import */ var _mocks_sidenav_output_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mocks/sidenav-output.data */ "7mNv");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/filter.service */ "jRtF");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ "4zfg");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "Pq0R");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "6AEW");
















function SideNavComponent_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
} }
function SideNavComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SideNavComponent_nav_0_div_1_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function SideNavComponent_button_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
} }
function SideNavComponent_button_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SideNavComponent_button_1_div_2_div_1_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function SideNavComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SideNavComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.toggle(true); })("tuiActiveZoneChange", function SideNavComponent_button_1_Template_button_tuiActiveZoneChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SideNavComponent_button_1_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tuiSidebar", ctx_r1.showSidebar)("tuiSidebarDirection", "left");
} }
function SideNavComponent_ng_template_2_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tui-svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r16.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r16.name, " ");
} }
function SideNavComponent_ng_template_2_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add your own filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tui-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Filter Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "tui-input-tag", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Enter tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SideNavComponent_ng_template_2_ng_template_2_ng_template_8_Template_button_click_7_listener() { const observer_r17 = ctx.$implicit; return observer_r17.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SideNavComponent_ng_template_2_ng_template_2_ng_template_8_Template_button_click_9_listener() { const observer_r17 = ctx.$implicit; observer_r17.next(); return observer_r17.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r15.arg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tuiTextfieldLabelOutside", false)("tuiTextfieldCleaner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r15.showAddFilter);
} }
function SideNavComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "tui-filter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SideNavComponent_ng_template_2_ng_template_2_ng_template_4_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SideNavComponent_ng_template_2_ng_template_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r20.showDialog(_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Add filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SideNavComponent_ng_template_2_ng_template_2_ng_template_8_Template, 11, 5, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r10.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("size", ctx_r10.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", _r12)("items", ctx_r10.filterMass);
} }
function SideNavComponent_ng_template_2_ng_template_5_tui_radio_block_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tui-radio-block", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("size", ctx_r22.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("item", item_r23.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r23.name, " ");
} }
function SideNavComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SideNavComponent_ng_template_2_ng_template_5_tui_radio_block_2_Template, 2, 3, "tui-radio-block", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r11.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collapsed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.sortMass);
} }
function SideNavComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tui-accordion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("openChange", function SideNavComponent_ng_template_2_Template_tui_accordion_item_openChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.showFilter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SideNavComponent_ng_template_2_ng_template_2_Template, 10, 4, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tui-accordion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("openChange", function SideNavComponent_ng_template_2_Template_tui_accordion_item_openChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.showSorting = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Sort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SideNavComponent_ng_template_2_ng_template_5_Template, 3, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx_r3.showFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx_r3.showSorting);
} }
class SideNavComponent {
    constructor(filterService, changeDetector, dialogService, breakpointObserver) {
        this.filterService = filterService;
        this.changeDetector = changeDetector;
        this.dialogService = dialogService;
        this.breakpointObserver = breakpointObserver;
        this.showFilter = true;
        this.showSorting = true;
        this.showAddFilter = true;
        this.addSidebar = false;
        this.showSidebar = false;
        this.arrow = _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TUI_ARROW"];
        this.filterMass = _mocks_filter_data__WEBPACK_IMPORTED_MODULE_1__["FILTER"];
        this.sortMass = _mocks_sorting_data__WEBPACK_IMPORTED_MODULE_2__["SORTING"];
        this.sidenavOutput = _mocks_sidenav_output_data__WEBPACK_IMPORTED_MODULE_3__["SIDENAV_OUTPUT"];
        this.tagsMass = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]([]),
            sorting: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.sortMass[0].data)
        });
        this.size = 'm';
        this.arg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]([]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true)
        });
    }
    ngOnInit() {
        this.form.get('filters').valueChanges.subscribe(() => {
            this.tagsMass = [...new Set([].concat(...this.form.get('filters').value.map(elem => elem.tags)))];
            this.filterService.changeFilter(this.tagsMass);
        });
        this.form.get('sorting').valueChanges.subscribe((sorting) => {
            this.filterService.changeSorting(sorting);
        });
        this.arg.valueChanges.subscribe((data) => {
            if (data.tags.length !== 0 && data.name !== '') {
                this.showAddFilter = false;
            }
            else {
                this.showAddFilter = true;
            }
        });
        this.laptopQuerySubs = this.breakpointObserver.observe(['(max-width: 1450px)']).subscribe((state) => {
            if (state.matches) {
                this.size = 's';
                this.changeDetector.detectChanges();
            }
            else {
                this.size = 'm';
                this.changeDetector.detectChanges();
            }
        });
        this.mobileQuerySubs = this.breakpointObserver.observe(['(max-width: 1050px)']).subscribe((state) => {
            if (state.matches) {
                this.addSidebar = true;
                this.changeDetector.detectChanges();
            }
            else {
                this.addSidebar = false;
                this.changeDetector.detectChanges();
            }
        });
        this.filterService.tags$.subscribe((val) => {
            const filters = this.filterMass.filter((elem) => this.isContain(elem.tags, val));
            this.form.patchValue({ filters: filters }, { emitEvent: false });
        });
    }
    clearFilters() {
        this.form.value.filters = [];
    }
    isEqual(a, b) {
        if (a.length === b.length &&
            a.sort().every((value, index) => {
                return value === b.sort()[index];
            })) {
            return true;
        }
        return false;
    }
    isContain(target, container) {
        return target.every((elem) => container.includes(elem));
    }
    showDialog(content) {
        this.dialogService.open(content).subscribe({
            next: () => {
                let filter = {
                    name: this.arg.get('name').value,
                    tags: this.arg.get('tags').value,
                    icon: 'tuiIconIndentLarge'
                };
                this.filterMass.push(filter);
                this.changeDetector.detectChanges();
            }
        });
    }
    toggle(open) {
        this.showSidebar = open;
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 4, vars: 2, consts: [["class", "side-nav", 4, "ngIf"], ["tuiButton", "", "type", "button", "icon", "tuiIconSettings", "class", "side-icon", 3, "click", "tuiActiveZoneChange", 4, "ngIf"], ["filters", ""], [1, "side-nav"], [4, "ngTemplateOutlet"], ["tuiButton", "", "type", "button", "icon", "tuiIconSettings", 1, "side-icon", 3, "click", "tuiActiveZoneChange"], [4, "tuiSidebar", "tuiSidebarDirection"], [1, "accordion", 3, "open", "size", "openChange"], ["tuiAccordionItemContent", "", "class", "ras"], [3, "open", "size", "openChange"], ["tuiAccordionItemContent", ""], [1, "accordion-container"], ["orientation", "vertical", 1, "filter-form", 3, "formGroup"], ["formControlName", "filters", 1, "filter", 3, "content", "items", "size"], ["filter", ""], ["tuiButton", "", "type", "button", "iconRight", "tuiIconPlus", "size", "s", 1, "filter-btn", 3, "click"], ["polymorpheus", ""], ["addFilter", "polymorpheus"], [1, "filter-container"], [1, "filter-icon", 3, "src"], [3, "formGroup"], ["formControlName", "name", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "tags", 1, "b-form", "tui-space_top-4", 3, "tuiTextfieldLabelOutside"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_top-5", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_top-5", "tui-space_left-2", 3, "disabled", "click"], ["orientation", "vertical", 3, "formGroup"], ["tuiGroup", "", "orientation", "vertical", 1, "group", "sort", 3, "collapsed"], ["contentAlign", "left", "formControlName", "sorting", "class", "rounded", 3, "size", "item", 4, "ngFor", "ngForOf"], ["contentAlign", "left", "formControlName", "sorting", 1, "rounded", 3, "size", "item"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SideNavComponent_nav_0_Template, 2, 1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SideNavComponent_button_1_Template, 3, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SideNavComponent_ng_template_2_Template, 6, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.addSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addSidebar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__["TuiActiveZoneDirective"], _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_11__["TuiSidebarDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionItemComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionItemContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__["PolymorpheusTemplate"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldLabelOutsideDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldCleanerDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputTagComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiRadioBlockComponent"]], styles: ["[_nghost-%COMP%] {\n  --tui-primary-text: #fff;\n  --tui-primary: #299d37;\n  --tui-primary-hover: #2c7a35;\n  --tui-primary-active: #2c7a35;\n}\n[_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  width: 20rem;\n  height: 100%;\n  padding: 1.8rem 0 3.6rem;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tui-base-03);\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n    width: 14rem;\n  }\n}\n[_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(n+2) {\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  height: 3.8rem;\n  padding: 0 2.1rem 0 1.8rem;\n  display: flex;\n  align-items: center;\n  background-color: var(--white);\n}\n[_nghost-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-left: 0.5rem;\n}\n[_nghost-%COMP%]   .filter-section[_ngcontent-%COMP%] {\n  margin: 0.8rem auto 2.6rem;\n}\n[_nghost-%COMP%]   .filter-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .filter-elem[_ngcontent-%COMP%] {\n  width: 16.2rem;\n  height: 4rem;\n  font-size: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--gray-dark);\n}\n[_nghost-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .filter-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .filter-icon[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    padding: 0.3rem 0.3rem 0.3rem 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .elem-icon[_ngcontent-%COMP%] {\n  margin-right: 1.8rem;\n}\n[_nghost-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .side-icon[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 100%;\n}\n[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .sort[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .rounded[_ngcontent-%COMP%] {\n  border-radius: var(--tui-radius-m);\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFFUjtBQURRO0VBUEo7SUFRUSxZQUFBO0VBSVY7QUFDRjtBQUhRO0VBQ0ksY0FBQTtBQUtaO0FBRkk7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUlSO0FBRkk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBSVI7QUFBUTtFQUNJLDBCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7QUFFWjtBQUFRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQUVaO0FBQVE7RUFDSSxnQkFBQTtBQUVaO0FBQVE7RUFDSSxrQkFBQTtBQUVaO0FBRFk7RUFGSjtJQUdRLHFCQUFBO0VBSWQ7QUFDRjtBQURZO0VBREo7SUFFUSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxvQ0FBQTtFQUlkO0FBQ0Y7QUFBUTtFQUNJLG9CQUFBO0FBRVo7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQVE7RUFDSSxXQUFBO0FBRVo7QUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7QUFDUjtBQUNJO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6InNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS10dWktcHJpbWFyeS10ZXh0OiAjZmZmO1xyXG4gICAgLS10dWktcHJpbWFyeTogIzI5OWQzNztcclxuICAgIC0tdHVpLXByaW1hcnktaG92ZXI6ICMyYzdhMzU7XHJcbiAgICAtLXR1aS1wcmltYXJ5LWFjdGl2ZTogIzJjN2EzNTtcclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxLjhyZW0gMCAzLjZyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTAzKTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmID4gOm50aC1jaGlsZChuICsgMikge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LWJ0biB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjhyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAyLjFyZW0gMCAxLjhyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxuICAgIC5idG4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyIHtcclxuICAgICAgICAmLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuOHJlbSBhdXRvIDIuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZWxlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNi4ycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS1kYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjNyZW0gMC4zcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lbGVtIHtcclxuICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgJi1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZS1pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWNjb3JkaW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc29ydCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucm91bmRlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1tKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "5OkU":
/*!*********************************!*\
  !*** ./src/app/taiga.module.ts ***!
  \*********************************/
/*! exports provided: TaigaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaigaModule", function() { return TaigaModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "4zfg");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "/NvU");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "Ymfz");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "gcOn");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "Pq0R");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/addon-table */ "LJ7n");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "6AEW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class TaigaModule {
}
TaigaModule.ɵfac = function TaigaModule_Factory(t) { return new (t || TaigaModule)(); };
TaigaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: TaigaModule });
TaigaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        // Modules for main app.module that should be add once
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiRootModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiNotificationsModule"],
        // Modules for your app modules where you use our components
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiAccordionModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiActionModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiAvatarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiBadgeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiBadgedContentModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiCalendarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCalendarRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCalendarMonthModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiCardModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiPieChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiBarChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiRingChartModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCheckboxModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCheckboxBlockModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCheckboxLabeledModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiPrimitiveCheckboxModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_6__["TuiColorPickerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiDataListWrapperModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHostedDropdownModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiFieldErrorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiExpandModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiFilterModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiGroupModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiMarkerIconModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputInlineModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiInputCardModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiInputCVCModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiInputExpireModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputCopyModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputCountModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateTimeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputFileModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputMonthModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputMonthRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputNumberModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputPasswordModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputPhoneModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputTimeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputPhoneInternationalModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTextAreaModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLabelModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLineClampModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLoaderModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiNotificationModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiMobileDialogModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiMobileCalendarModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioBlockModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioLabeledModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiMultiSelectModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiScrollbarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiSliderModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiReorderModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiResizableColumnModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiTablePaginationModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTagModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiToggleModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiTooltipModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiBreadcrumbsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiPaginationModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiStepperModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTabsModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiAutoFocusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiColorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDropdownModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownSelectionModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiElasticStickyModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiElementModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiHighlightModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHintModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLazyLoadingModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiManualHintModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiPointerHintModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiLetModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiMediaModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiModeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiPresentModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiRippleModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiSidebarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDropdownControllerModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiTouchableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiTextfieldControllerModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiMoneyModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiFilterPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiFormatNumberPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiFormatPhonePipeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiMapperPipeModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiTableModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiActiveZoneModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](TaigaModule, { exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        // Modules for main app.module that should be add once
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiRootModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiNotificationsModule"],
        // Modules for your app modules where you use our components
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiAccordionModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiActionModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiAvatarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiBadgeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiBadgedContentModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiCalendarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCalendarRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCalendarMonthModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiCardModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiPieChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiBarChartModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiRingChartModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCheckboxModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCheckboxBlockModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiCheckboxLabeledModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiPrimitiveCheckboxModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_6__["TuiColorPickerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiDataListWrapperModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHostedDropdownModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiFieldErrorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiExpandModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiFilterModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiGroupModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiMarkerIconModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputInlineModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiInputCardModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiInputCVCModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiInputExpireModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputCopyModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputCountModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateTimeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputFileModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputMonthModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputMonthRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputNumberModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputPasswordModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputPhoneModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputTimeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputPhoneInternationalModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTextAreaModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLabelModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLineClampModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLoaderModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiNotificationModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiMobileDialogModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiMobileCalendarModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioBlockModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioLabeledModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiMultiSelectModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiScrollbarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiSliderModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiReorderModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiResizableColumnModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiTablePaginationModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTagModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiToggleModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiTooltipModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiBreadcrumbsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiPaginationModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiStepperModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTabsModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiAutoFocusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiColorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDropdownModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownSelectionModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiElasticStickyModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiElementModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiHighlightModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHintModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLazyLoadingModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiManualHintModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiPointerHintModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiLetModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiMediaModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiModeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiPresentModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiRippleModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiSidebarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDropdownControllerModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiTouchableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiTextfieldControllerModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_5__["TuiMoneyModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiFilterPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiFormatNumberPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiFormatPhonePipeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiMapperPipeModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiTableModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiActiveZoneModule"]] }); })();


/***/ }),

/***/ "7mNv":
/*!*****************************************************!*\
  !*** ./src/app/shared/mocks/sidenav-output.data.ts ***!
  \*****************************************************/
/*! exports provided: SIDENAV_OUTPUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDENAV_OUTPUT", function() { return SIDENAV_OUTPUT; });
const SIDENAV_OUTPUT = {
    tagsMass: [],
    sorting: 'relevance'
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    flickr: {
        key: '71798ad62058a52b4b8c00f6e17e31de'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C7Ai":
/*!********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.ts ***!
  \********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserPageComponent.ɵfac = function UserPageComponent_Factory(t) { return new (t || UserPageComponent)(); };
UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPageComponent, selectors: [["app-user-page"]], decls: 2, vars: 0, template: function UserPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Page Block\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "FGXg":
/*!********************************************************!*\
  !*** ./src/app/api/main-page/main-page.api.service.ts ***!
  \********************************************************/
/*! exports provided: MainPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageService", function() { return MainPageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_mocks_searchFilter_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/mocks/searchFilter.data */ "Nfbw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/fav-images.service */ "hL75");







class MainPageService {
    constructor(http, favService) {
        this.http = http;
        this.favService = favService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
        };
        this.flickrKey = '71798ad62058a52b4b8c00f6e17e31de';
        this.currentPage = 1;
        this.images$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.parametrs = src_app_shared_mocks_searchFilter_data__WEBPACK_IMPORTED_MODULE_3__["SEARCH_FILTER"];
    }
    params(params) {
        return Object.entries(params).map((elem) => {
            if (elem[1].constructor === Array) {
                return '&' + elem[0] + '=' + Array.from(elem[1]).join('%2C+');
            }
            else {
                return '&' + elem[0] + '=' + elem[1];
            }
        }).join('');
    }
    searchKeyword(keyword) {
        if (keyword.mode === 'new') {
            this.currentPage = 1;
        }
        else {
            this.currentPage++;
        }
        this.prevRequest = keyword.text;
        this.parametrs.text = keyword.searchInput;
        this.parametrs.tags = keyword.tagsInput;
        this.parametrs.sort = keyword.sorting;
        this.parametrs.page = this.currentPage;
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        this.http.get(url + this.params(this.parametrs) //, this.httpOptions
        ).pipe(Object(node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            var _a;
            const urlArr = [];
            (_a = res.photos) === null || _a === void 0 ? void 0 : _a.photo.forEach((ph) => {
                const width = (+ph.height_n / +ph.width_n >= 1) ? 1 : +ph.width_n / +ph.height_n;
                const height = (+ph.height_n / +ph.width_n > 1) ? +ph.height_n / +ph.width_n : 1;
                const photoObj = {
                    url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_w.jpg`,
                    pageUrl: `https://www.flickr.com/photos/${ph.owner}/${ph.id}`,
                    title: ph.title,
                    owner: ph.ownername,
                    ownerProfile: `https://www.flickr.com/photos/${ph.owner}/`,
                    ownerPhoto: `https://flickr.com/buddyicons/${ph.owner}.jpg`,
                    tags: ph.tags.split(" "),
                    isFav: this.favService.isFav(`https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_w.jpg`),
                    id: ph.id,
                    scale: +ph.height_n / +ph.width_n,
                    height: height,
                    width: width,
                    skeleton: true,
                    image: true
                };
                urlArr.push(photoObj);
            });
            return urlArr;
        })).subscribe(val => {
            this.images$.next(val);
        });
    }
}
MainPageService.ɵfac = function MainPageService_Factory(t) { return new (t || MainPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_5__["FavImagesService"])); };
MainPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MainPageService, factory: MainPageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KwV/":
/*!*********************************************!*\
  !*** ./src/app/shared/mocks/filter.data.ts ***!
  \*********************************************/
/*! exports provided: FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER", function() { return FILTER; });
const FILTER = [
    {
        name: 'Only Favorite',
        icon: 'tuiIconHeartLarge',
        tags: ['bus', 'mock']
    },
    {
        name: 'Filter 1',
        icon: 'tuiIconIndentLarge',
        tags: ['cat']
    },
    {
        name: 'ass',
        icon: 'tuiIconIndentLarge',
        tags: ['bus']
    }
];


/***/ }),

/***/ "Nfbw":
/*!***************************************************!*\
  !*** ./src/app/shared/mocks/searchFilter.data.ts ***!
  \***************************************************/
/*! exports provided: SEARCH_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FILTER", function() { return SEARCH_FILTER; });
const SEARCH_FILTER = {
    api_key: '71798ad62058a52b4b8c00f6e17e31de',
    media: 'photos',
    sort: 'relevance',
    format: 'json',
    nojsoncallback: 1,
    text: '',
    per_page: 30,
    page: 1,
    extras: ['url_n', 'icon_server', 'tags', 'owner_name'],
    tags: [],
    tag_mode: 'all'
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/side-nav/side-nav.component */ "3qkz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dialogOpened = false;
        this.dialogTimeout = 10000;
    }
    onVisibilityChange($event) {
        const isVisible = $event.target.visibilityState === 'visible';
        if (isVisible && this.dialogOpened === false) {
            this.setCounter();
        }
        else {
            clearTimeout(this.userActivity);
        }
    }
    refreshUserState() {
        if (this.dialogOpened === false) {
            this.setCounter();
        }
    }
    ngOnInit() {
        if (document.visibilityState !== 'hidden') {
            this.setCounter();
        }
        this.movementsSubs = this.userInactive.subscribe(() => {
            this.showDialog();
        });
    }
    ngOnDestroy() {
        this.movementsSubs.unsubscribe();
        this.dialogSubs.unsubscribe();
    }
    setCounter() {
        clearTimeout(this.userActivity);
        this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.dialogTimeout);
    }
    showDialog() {
        this.dialogOpened = true;
        this.dialogSubs = this.dialogService
            .open('Your browser session on this page was terminated.', { label: 'Session time is over!', size: 'l' })
            .subscribe({
            complete: () => {
                this.dialogOpened = false;
                this.refreshUserState();
                window.location.reload();
            },
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TuiDialogService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibilitychange", function AppComponent_visibilitychange_HostBindingHandler($event) { return ctx.onVisibilityChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousemove", function AppComponent_mousemove_HostBindingHandler() { return ctx.refreshUserState(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("touchmove", function AppComponent_touchmove_HostBindingHandler() { return ctx.refreshUserState(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 0, consts: [[1, "root"], [1, "container"], [1, "side-nav"], [1, "container-context"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-root", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-side-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TuiRootComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   .root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .container-context[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  overflow: hidden;\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .container-context[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n[_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  height: calc(100vh - 5.2rem);\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n    height: calc(100vh - 4.4rem);\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    min-width: 100%;\n    padding: 0.5rem 0.5rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVRO0VBTEo7SUFNUSxzQkFBQTtFQUNWO0FBQ0Y7QUFBUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQURZO0VBSko7SUFLUSxZQUFBO0VBSWQ7QUFDRjtBQURJO0VBQ0ksNEJBQUE7QUFHUjtBQUZRO0VBRko7SUFHUSw0QkFBQTtFQUtWO0FBQ0Y7QUFKUTtFQUxKO0lBTVEsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7RUFPVjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5yb290IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZXh0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNpZGUtbmF2IHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjJyZW0pO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0LjRyZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "TKZG":
/*!******************************************************!*\
  !*** ./src/app/pages/fav-page/fav-page.component.ts ***!
  \******************************************************/
/*! exports provided: FavPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavPageComponent", function() { return FavPageComponent; });
/* harmony import */ var src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/fav-images.service */ "hL75");
/* harmony import */ var src_app_shared_mocks_main_page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/mocks/main-page.data */ "US68");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");







function FavPageComponent_div_2_tui_island_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-island", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "tui-line-clamp", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", item_r1.isFav ? "var(--tui-base-05)" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", _r3)("lineHeight", 26)("linesLimit", 2);
} }
const _c0 = function () { return { "background-color": "var(--tui-autofill)" }; };
function FavPageComponent_div_2_ng_template_15_tui_tag_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tui-tag", 22);
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tag_r7)("hoverable", true)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
const _c1 = function () { return { "font": "var(--tui-font-text-m)" }; };
function FavPageComponent_div_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FavPageComponent_div_2_ng_template_15_tui_tag_1_Template, 1, 4, "tui-tag", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.tags);
} }
function FavPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function FavPageComponent_div_2_Template_img_load_3_listener() { const item_r1 = ctx.$implicit; return item_r1.image = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "tui-svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tui-svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavPageComponent_div_2_Template_tui_svg_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const item_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.favClick(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function FavPageComponent_div_2_Template_img_load_13_listener() { const item_r1 = ctx.$implicit; return item_r1.skeleton = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FavPageComponent_div_2_tui_island_14_Template, 2, 5, "tui-island", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FavPageComponent_div_2_ng_template_15_Template, 2, 3, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", item_r1.isFav ? "var(--tui-neutral-bg-hover)" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tui-skeleton", item_r1.skeleton)("tui-skeleton_rounded", item_r1.skeleton || item_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", item_r1.ownerProfile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.ownerPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tui-skeleton", item_r1.skeleton || item_r1.image)("tui-skeleton_rounded", item_r1.skeleton || item_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.skeleton ? "" : item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tui-skeleton", item_r1.skeleton)("tui-skeleton_text", item_r1.skeleton || item_r1.image)("tui-skeleton_short", item_r1.skeleton || item_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", item_r1.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.skeleton ? "" : item_r1.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", item_r1.isFav ? "var(--tui-support-04)" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tui-skeleton", item_r1.skeleton || item_r1.image)("tui-skeleton_rounded", item_r1.skeleton || item_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tui-skeleton", item_r1.skeleton)("tui-skeleton_rounded", item_r1.skeleton || item_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("width", item_r1.width * 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("height", item_r1.height * 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.tags[0] !== "");
} }
class FavPageComponent {
    constructor(favService) {
        this.favService = favService;
        this.search = src_app_shared_mocks_main_page_data__WEBPACK_IMPORTED_MODULE_1__["SEARCH"];
        this.pageSize = this.search.pageSize;
        this.pageSizeOptions = this.search.pageSizeOptions;
        this.showExtraBtns = this.search.showExtraBtns;
        this.length = 0;
        this.dataChunk = [];
    }
    favClick(item) {
        item.isFav = !item.isFav;
        if (item.isFav === true) {
            this.favService.setItem(item);
        }
        else {
            this.favService.delItem(item);
        }
        return item.isFav;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.search.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
    onPageChanged(elem) {
        let firstCut = elem.pageIndex * elem.pageSize;
        let secondCut = firstCut + elem.pageSize;
        this.dataChunk = this.imagesMass.slice(firstCut, secondCut);
    }
    ngOnInit() {
        this.imagesMass = JSON.parse(localStorage.getItem('fav-images') || '0');
        this.dataChunk = this.imagesMass.slice(0, this.pageSize);
        this.length = this.imagesMass.length;
    }
}
FavPageComponent.ɵfac = function FavPageComponent_Factory(t) { return new (t || FavPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_0__["FavImagesService"])); };
FavPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FavPageComponent, selectors: [["app-fav-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_0__["FavImagesService"]])], decls: 3, vars: 1, consts: [[1, "elems-container"], [1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], ["target", "_blank", 1, "card-owner", 3, "href"], ["alt", "User Profile", 1, "card-owner-icon", 3, "src", "load"], [1, "card-text"], [1, "card-title", 3, "title"], [1, "card-subtitle", 3, "title"], [1, "card-btns"], ["src", "tuiIconRedoLarge", "fill", "'black'", 1, "card-share-btn"], ["src", "tuiIconHeartLarge", 1, "card-fav-btn", 3, "click"], ["width", "24.5rem", 1, "ass"], ["loading", "lazy", "alt", "Post Image", 1, "card-img", 3, "src", "width", "height", "load"], ["class", "card-tags", 3, "background-color", 4, "ngIf"], ["class", "card-tags"], ["tags", ""], [1, "card-tags"], [1, "card-lineclamp", 3, "content", "lineHeight", "linesLimit"], [1, "tag-container", 3, "ngStyle"], ["size", "s", "status", "custom", "class", "tui-space_bottom-1 tui-space_right-2", 3, "value", "hoverable", "ngStyle", 4, "ngFor", "ngForOf"], ["size", "s", "status", "custom", 1, "tui-space_bottom-1", "tui-space_right-2", 3, "value", "hoverable", "ngStyle"]], template: function FavPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FavPageComponent_div_2_Template, 17, 36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataChunk);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiLazyLoadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiIslandComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiLineClampComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiTagComponent"]], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 1;\n  padding: 2.3rem 1.5rem 0px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media screen and (max-width: 1500px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  border-radius: 10px;\n  border: 1px solid var(--tui-base-06);\n  margin-bottom: 3rem;\n  margin-bottom: 3rem;\n  width: 352px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .card-fav[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n  background-color: var(--accent);\n}\n[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  min-height: 5.2rem;\n  height: auto;\n  width: 100%;\n  padding: 1.1rem;\n  display: flex;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  margin-left: 1.1rem;\n  width: 12.3rem;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  min-height: 1.1rem;\n  max-height: 1.3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: var(--font-size-m);\n}\n[_nghost-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  min-height: 1.3rem;\n  max-height: 2rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.1rem;\n  margin-top: 0.6rem;\n}\n[_nghost-%COMP%]   .card-btns[_ngcontent-%COMP%] {\n  height: 2.8rem;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .card-share-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-fav-btn[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-lineclamp[_ngcontent-%COMP%] {\n  height: auto;\n}\n[_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 5.6rem;\n  padding: 0.9rem 0.6rem 0.9rem 1.1rem;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  border-radius: 0 0 10px 10px;\n}\n[_nghost-%COMP%]   .card-owner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .card-owner-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.4rem;\n}\n[_nghost-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .ass[_ngcontent-%COMP%] {\n  background-color: rebeccapurple;\n  height: auto;\n  display: flex;\n}\n[_nghost-%COMP%]   .elems-container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXYtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUNRO0VBUko7SUFTUSxlQUFBO0VBRVY7QUFDRjtBQUFJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksZ0NBQUE7RUFDQSwrQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUdaO0FBRFE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQURRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFEUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFHWjtBQURRO0VBQ0ksWUFBQTtBQUdaO0FBRFE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFHWjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFJaEI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUNJO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDUiIsImZpbGUiOiJmYXYtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMi4zcmVtIDEuNXJlbSAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDYpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICB3aWR0aDogMzUycHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLWZhdiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUuMnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEyLjNyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMS4zcmVtO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ0bnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2hhcmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1mYXYtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saW5lY2xhbXAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGFncyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNS42cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMC42cmVtIDAuOXJlbSAxLjFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1vd25lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICYtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvL2hlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmVsZW1zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "US68":
/*!************************************************!*\
  !*** ./src/app/shared/mocks/main-page.data.ts ***!
  \************************************************/
/*! exports provided: SEARCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
const SEARCH = {
    flickrKey: '71798ad62058a52b4b8c00f6e17e31de',
    pageSize: 10,
    pageLength: 0,
    pageSizeOptions: [5, 10, 25, 100],
    showExtraBtns: true,
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_fav_page_fav_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/fav-page/fav-page.component */ "TKZG");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "C7Ai");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/side-nav/side-nav.component */ "3qkz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main-page/main-page.container */ "hNOE");
/* harmony import */ var _taiga_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taiga.module */ "5OkU");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _taiga_module__WEBPACK_IMPORTED_MODULE_11__["TaigaModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_fav_page_fav_page_component__WEBPACK_IMPORTED_MODULE_4__["FavPageComponent"],
        _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__["UserPageComponent"],
        _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"],
        _pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_10__["MainPageContainer"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _taiga_module__WEBPACK_IMPORTED_MODULE_11__["TaigaModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"]], exports: [_pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_10__["MainPageContainer"]] }); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _mocks_routing_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mocks/routing.data */ "uPhP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "Pq0R");









function HeaderComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tui-svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r1.url)("disabled", last_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.routingUrls = _mocks_routing_data__WEBPACK_IMPORTED_MODULE_0__["ROUTING"];
        this.activeItemIndex = 0;
        this.routingSubs = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((val) => {
            this.activeItemIndex = this.routingUrls.find((elem) => '/' + elem.url === val.urlAfterRedirects).id - 1;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.routingSubs.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 8, vars: 2, consts: [[1, "header"], [1, "logo"], ["src", "tuiIconPicture", 1, "icon"], [1, "logo-text"], [1, "nav"], ["under", "", 1, "header-router", 3, "activeItemIndex", "activeItemIndexChange"], ["tuiTab", "", "tuiRipple", "var(--tui-text-01)", "class", "tabs", 3, "routerLink", "disabled", 4, "ngFor", "ngForOf"], ["tuiTab", "", "tuiRipple", "var(--tui-text-01)", 1, "tabs", 3, "routerLink", "disabled"], [1, "tui-space_right-2", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "tui-svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Image Finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tui-tabs", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeItemIndexChange", function HeaderComponent_Template_tui_tabs_activeItemIndexChange_6_listener($event) { return ctx.activeItemIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HeaderComponent_button_7_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeItemIndex", ctx.activeItemIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.routingUrls);
    } }, directives: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiTabsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiTabComponent"], _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_7__["TuiRippleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  --tui-primary-text: #fff;\n  --tui-primary: #299d37;\n  --tui-primary-hover: #2c7a35;\n  --tui-primary-active: #2c7a35;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5.2rem;\n  padding: 0 3.2rem 0 0;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  z-index: 1000;\n  position: relative;\n  background-color: var(--tui-base-02);\n  font-size: var(--font-size-l);\n  color: var(--tui-text-01);\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n    height: 4.4rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n    height: 3.6rem;\n  }\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 20rem;\n  padding-left: 2.8rem;\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 15rem;\n    padding-left: 1.5rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n[_nghost-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  width: 9rem;\n  margin-left: 1rem;\n  font-size: var(--font-size-m);\n  text-decoration: underline;\n  -webkit-text-decoration-color: var(--tui-primary);\n          text-decoration-color: var(--tui-primary);\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: auto;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .tabs[_ngcontent-%COMP%] {\n    font-size: 0px;\n  }\n}\n[_nghost-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  margin: 0rem;\n}\n[_nghost-%COMP%]   .nav[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  margin-left: 20px;\n}\n[_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 100%;\n  letter-spacing: 0.1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-size: var(--font-size);\n  color: var(--tui-base-05);\n}\n[_nghost-%COMP%]   .nav-btn-active[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n[_nghost-%COMP%]   .nav-btn-active[_ngcontent-%COMP%]::after {\n  width: 12rem;\n  height: 0.2rem;\n  top: 5rem;\n  position: absolute;\n  content: \"\";\n  background-color: var(--tui-base-01);\n}\n[_nghost-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n}\n[_nghost-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: var(--font-size-m);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZHQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFBUTtFQWJKO0lBY1EsY0FBQTtFQUdWO0FBQ0Y7QUFGUTtFQWhCSjtJQWlCUSxjQUFBO0VBS1Y7QUFDRjtBQUhJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBS1I7QUFKUTtFQUxKO0lBTVEsWUFBQTtJQUNBLG9CQUFBO0VBT1Y7QUFDRjtBQU5RO0VBVEo7SUFVUSxpQkFBQTtFQVNWO0FBQ0Y7QUFQSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FBU1I7QUFSUTtFQU5KO0lBT1EsZUFBQTtJQUNBLFdBQUE7RUFXVjtBQUNGO0FBUlE7RUFESjtJQUVRLGNBQUE7RUFXVjtBQUNGO0FBVEk7RUFDSSxZQUFBO0FBV1I7QUFUSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBV1I7QUFUSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBV1I7QUFUSTtFQUNJLG1CQUFBO0FBV1I7QUFWUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBWVo7QUFUSTtFQUNJLHFCQUFBO0FBV1I7QUFUSTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7QUFXUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXR1aS1wcmltYXJ5LXRleHQ6ICNmZmY7XHJcbiAgICAtLXR1aS1wcmltYXJ5OiAjMjk5ZDM3O1xyXG4gICAgLS10dWktcHJpbWFyeS1ob3ZlcjogIzJjN2EzNTtcclxuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjMmM3YTM1O1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1LjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAzLjJyZW0gMCAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjE0KSwgMHB4IDFweCAxMHB4IGhzbGEoMCwgMCUsIDAlLCAwLjEyKSxcclxuICAgICAgICAgICAgMHB4IDJweCA0cHggaHNsYSgwLCAwJSwgMCUsIDAuMik7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTAyKTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMy42cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjhyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFicyB7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dvLWljb24ge1xyXG4gICAgICAgIG1hcmdpbjogMHJlbTtcclxuICAgIH1cclxuICAgIC5uYXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2LWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wNSk7XHJcbiAgICB9XHJcbiAgICAubmF2LWJ0bi1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTJyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgICAgICAgICB0b3A6IDVyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXYtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xyXG4gICAgfVxyXG4gICAgLnRvZ2dsZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "h6PX":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/fav-images.service */ "hL75");
/* harmony import */ var src_app_api_main_page_main_page_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/main-page/main-page.api.service */ "FGXg");
/* harmony import */ var src_services_filter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/filter.service */ "jRtF");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function MainPageComponent_tui_data_list_wrapper_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.items$));
} }
const _c0 = function () { return { "max-height": "27px" }; };
function MainPageComponent_main_9_div_1_tui_island_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-line-clamp", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3.isFav ? "var(--tui-base-05)" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("content", _r6)("lineHeight", ctx_r4.tagsLine)("linesLimit", 3);
} }
function MainPageComponent_main_9_div_1_tui_island_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Image Tags...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3.isFav ? "var(--tui-base-05)" : "white");
} }
function MainPageComponent_main_9_div_1_ng_template_17_tui_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-tag", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_main_9_div_1_ng_template_17_tui_tag_1_Template_tui_tag_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tag_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r12.addTag(tag_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3.isFav ? "var(--tui-autofill)" : "var(--tui-base-04)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tag_r11)("hoverable", true);
} }
const _c1 = function () { return { "font": "var(--tui-font-text-m)" }; };
function MainPageComponent_main_9_div_1_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_main_9_div_1_ng_template_17_tui_tag_1_Template, 1, 4, "tui-tag", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.tags);
} }
const _c2 = function (a0) { return { "card-fav": a0 }; };
function MainPageComponent_main_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MainPageComponent_main_9_div_1_Template_img_load_4_listener() { const item_r3 = ctx.$implicit; return item_r3.image = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_main_9_div_1_Template_tui_svg_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r3 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.favClick(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MainPageComponent_main_9_div_1_Template_img_load_14_listener() { const item_r3 = ctx.$implicit; return item_r3.skeleton = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainPageComponent_main_9_div_1_tui_island_15_Template, 2, 7, "tui-island", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MainPageComponent_main_9_div_1_tui_island_16_Template, 3, 2, "tui-island", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainPageComponent_main_9_div_1_ng_template_17_Template, 2, 3, "ng-template", 25, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, item_r3.isFav));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3.isFav ? "var(--tui-neutral-bg-hover)" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", item_r3.skeleton || item_r3.image)("tui-skeleton_rounded", item_r3.skeleton || item_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.ownerProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.ownerPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", item_r3.skeleton || item_r3.image)("tui-skeleton_rounded", item_r3.skeleton || item_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.skeleton ? "" : item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", item_r3.skeleton || item_r3.image)("tui-skeleton_text", item_r3.skeleton || item_r3.image)("tui-skeleton_short", item_r3.skeleton || item_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r3.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.skeleton ? "" : item_r3.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r3.isFav ? "var(--tui-support-04)" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", item_r3.skeleton || item_r3.image)("tui-skeleton_rounded", item_r3.skeleton || item_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", item_r3.skeleton || item_r3.image)("tui-skeleton_rounded", item_r3.skeleton || item_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", item_r3.width * ctx_r2.imageWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", item_r3.height * ctx_r2.imageHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.tags[0] !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.tags[0] === "");
} }
function MainPageComponent_main_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_main_9_div_1_Template, 19, 40, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data);
} }
const tagsData = [
    'car',
    'note',
    'bus'
];
class MainPageComponent {
    constructor(notificationsService, favService, searchService, changeDetector, filterService, breakpointObserver) {
        this.notificationsService = notificationsService;
        this.favService = favService;
        this.searchService = searchService;
        this.changeDetector = changeDetector;
        this.filterService = filterService;
        this.breakpointObserver = breakpointObserver;
        this.imageWidth = 350;
        this.imageHeight = 250;
        this.tagsLine = 27;
        this.scale = 'l';
        this.tagsScale = 'l';
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tagsInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]),
            searchInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sorting: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('relevance'),
            mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('new')
        });
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScrollSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tags$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.arrow = _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TUI_ARROW"];
        this.data = [];
        this.isActive = false;
        this.isLoading = true;
        this.items$ = this.tags$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(search => this.serverRequest(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(tagsData));
    }
    ngOnInit() {
        this.isActive = !this.isActive;
        this.filterSubs = this.filterService.filter$.subscribe((val) => {
            this.testForm.patchValue({ tagsInput: val });
        });
        this.sortingSubs = this.filterService.sorting$.subscribe((val) => {
            this.testForm.patchValue({ sorting: val });
        });
        this.imagesSubs = this.searchService.images$.subscribe((val) => {
            this.data.push(...val);
            this.isLoading = false;
            this.changeDetector.detectChanges();
        });
        this.formSubs = this.testForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe((val) => {
            this.testForm.patchValue({ mode: 'new' }, { emitEvent: false });
            this.data = [];
            this.isLoading = true;
            this.onSearch.emit(val);
            this.filterService.sendTags(val.tagsInput);
        });
        this.mobileQuerySubs = this.breakpointObserver.observe(['(max-width: 1050px)']).subscribe((state) => {
            if (state.matches) {
                this.imageHeight = 150;
                this.imageWidth = 200;
                this.scale = 's';
                this.changeDetector.detectChanges();
            }
            else {
                this.imageHeight = 200;
                this.imageWidth = 300;
                this.scale = 'm';
                this.changeDetector.detectChanges();
            }
        });
        this.laptopQuerySubs = this.breakpointObserver.observe(['(max-width: 1450px)']).subscribe((state) => {
            if (state.matches) {
                this.imageHeight = 200;
                this.imageWidth = 300;
                this.scale = 'm';
                this.tagsScale = 'm';
                this.changeDetector.detectChanges();
            }
            else {
                this.imageHeight = 250;
                this.imageWidth = 350;
                this.scale = 'l';
                this.tagsScale = 'l';
                this.changeDetector.detectChanges();
            }
        });
        this.testForm.patchValue({ searchInput: 'car' });
        this.imageHeight = 250;
        this.imageWidth = 350;
        this.scale = 'm';
        this.tagsScale = 'm';
    }
    ngOnDestroy() {
        this.filterSubs.unsubscribe();
        this.formSubs.unsubscribe();
        this.sortingSubs.unsubscribe();
        this.imagesSubs.unsubscribe();
        this.laptopQuerySubs.unsubscribe();
        this.mobileQuerySubs.unsubscribe();
    }
    favClick(item) {
        item.isFav = !item.isFav;
        item.isFav ? this.favService.setItem(item) : this.favService.delItem(item);
        this.onFav(item.isFav);
    }
    onFav(result) {
        if (result === true) {
            this.notificationsService.show('Image added to favorite').subscribe();
        }
        else {
            this.notificationsService.show('Image has deleted from favorite').subscribe();
        }
    }
    addTag(tag) {
        if (!this.testForm.value.tagsInput.includes(tag)) {
            this.testForm.patchValue({ tagsInput: this.testForm.value.tagsInput.concat(tag) });
        }
    }
    onScroll() {
        this.testForm.patchValue({ mode: 'same' }, { emitEvent: false });
        this.searchService.searchKeyword(this.testForm.value);
        this.isLoading = true;
    }
    serverRequest(search) {
        const result = tagsData.filter(item => item.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(Math.random() * 1000 + 500));
    }
    onSearchChange(search) {
        this.tags$.next(search);
        this.filterService.sendTags(this.testForm.value.tagsInput);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_6__["FavImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_main_page_main_page_api_service__WEBPACK_IMPORTED_MODULE_7__["MainPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_filter_service__WEBPACK_IMPORTED_MODULE_8__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], inputs: { value: "value" }, outputs: { onSearch: "onSearch", onScrollSearch: "onScrollSearch" }, decls: 10, vars: 12, consts: [[1, "context-container"], [1, "form", 3, "formGroup"], ["formControlName", "searchInput", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner", "tuiTextfieldSize"], ["formControlName", "tagsInput", 1, "input-tag", 3, "tuiTextfieldLabelOutside", "tuiTextfieldSize", "searchChange"], [3, "items", 4, "tuiDataList"], ["size", "xxl", 1, "loader", 3, "showLoader", "overlay"], ["infiniteScroll", "", 1, "search-results", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["class", "container", 4, "ngIf"], [3, "items"], [1, "container"], ["class", "wrapper", 4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "card", 3, "ngClass"], [1, "card-header"], ["target", "_blank", 1, "card-owner", 3, "href"], ["loading", "lazy", "alt", "User Profile", 1, "card-owner-icon", 3, "src", "load"], [1, "card-text"], [1, "card-title", 3, "title"], [1, "card-subtitle", 3, "title"], [1, "card-btns"], ["src", "tuiIconRedoLarge", "fill", "'black'", 1, "card-share-btn"], ["src", "tuiIconHeartLarge", 1, "card-fav-btn", 3, "click"], [1, "ass"], ["loading", "lazy", "alt", "Post Image", 1, "card-img", 3, "src", "width", "height", "load"], ["class", "card-tags", 3, "background-color", 4, "ngIf"], ["class", "card-tags"], ["tags", ""], [1, "card-tags"], [1, "card-lineclamp", 3, "ngStyle", "content", "lineHeight", "linesLimit"], [1, "card-notags"], [1, "tag-container", 3, "ngStyle"], ["size", "s", "status", "custom", "class", "tui-space_bottom-1 tui-space_right-2", 3, "value", "hoverable", "background-color", "click", 4, "ngFor", "ngForOf"], ["size", "s", "status", "custom", 1, "tui-space_bottom-1", "tui-space_right-2", 3, "value", "hoverable", "click"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-input-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function MainPageComponent_Template_tui_input_tag_searchChange_4_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Enter tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainPageComponent_tui_data_list_wrapper_6_Template, 2, 3, "tui-data-list-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-loader", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function MainPageComponent_Template_div_scrolled_8_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainPageComponent_main_9_Template, 2, 1, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tuiTextfieldSize", ctx.scale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tuiTextfieldSize", ctx.tagsScale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", ctx.isLoading)("overlay", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldLabelOutsideDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldCleanerDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldSizeDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLoaderComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiDataListWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLazyLoadingDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiIslandComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLineClampComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTagComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  --tui-primary-text: #fff;\n  --tui-primary: #299d37;\n  --tui-primary-hover: #2c7a35;\n  --tui-primary-active: #2c7a35;\n  --custom-h: 250;\n  --custom-w: 350;\n}\n[_nghost-%COMP%]   .icon_rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .form[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  height: 50px;\n}\n[_nghost-%COMP%]   .context-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 5.2rem);\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .context-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .context-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 6.1rem);\n    width: 100%;\n    flex-grow: 1;\n  }\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 1;\n  padding: 0px 1.5rem 0px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 0.7rem;\n  }\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 20px 10px;\n}\n@media screen and (max-width: 1910px) {\n  [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    margin: 0px auto 10px;\n  }\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border: 1px solid var(--tui-base-06);\n  margin-bottom: 3rem;\n  width: 352px;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 252px;\n    margin-bottom: 2.5rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 202px;\n    margin-bottom: 1.8rem;\n  }\n}\n[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  height: 5rem;\n  display: flex;\n  align-items: flex-start;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    height: 4rem;\n    padding: 1rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n    height: 3rem;\n  }\n}\n[_nghost-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    width: 100%;\n    line-height: 1rem;\n  }\n}\n[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: var(--font-size-m);\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    height: 1rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n[_nghost-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1rem;\n  text-decoration: underline;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n    height: 1rem;\n    font-size: 0.8rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n[_nghost-%COMP%]   .card-btns[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .card-share-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .card-fav-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-share-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .card-fav-btn[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-share-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .card-fav-btn[_ngcontent-%COMP%] {\n    transform: scale(0.6);\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .card-lineclamp[_ngcontent-%COMP%] {\n  height: auto;\n}\n[_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 1rem 0.5rem 1rem 1rem;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  border-radius: 0 0 1.5rem 1.5rem;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.5rem 0.8rem 0.8rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.5rem 0.3rem 0.8rem;\n  }\n}\n[_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%]::before {\n  border: none;\n}\n[_nghost-%COMP%]   .card-notags[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .card-owner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.5rem;\n  margin-right: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-owner[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-owner[_ngcontent-%COMP%] {\n    width: 1.8rem;\n    height: 1.8rem;\n    margin-right: 0.8rem;\n  }\n}\n[_nghost-%COMP%]   .card-owner-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.5rem;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .card-owner-icon[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .card-owner-icon[_ngcontent-%COMP%] {\n    width: 1.8rem;\n    height: 1.8rem;\n  }\n}\n[_nghost-%COMP%]   .ass[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-10);\n  display: flex;\n  height: 250px;\n  width: 350px;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n@media screen and (max-width: 1450px) {\n  [_nghost-%COMP%]   .ass[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 200px;\n  }\n}\n@media screen and (max-width: 1050px) {\n  [_nghost-%COMP%]   .ass[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 150px;\n  }\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 5px;\n}\n[_nghost-%COMP%]   .tag-container[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n}\n[_nghost-%COMP%]   .loader[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  height: 100%;\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: var(--tui-base-04);\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: var(--tui-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAdGFpZ2EtdWlcXGNvcmVcXHN0eWxlc1xcbWl4aW5zXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVFBLCtDQUFBO0FBb0JBLDhDQUFBO0FDelJBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FBRVE7RUFGSjtJQUdRLG1CQUFBO0VBQ1Y7QUFDRjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDSTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQVE7RUFQSjtJQVFRLGVBQUE7RUFHVjtBQUNGO0FBRlE7RUFWSjtJQVdRLDRCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFLVjtBQUNGO0FBSEk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBS1I7QUFKUTtFQVJKO0lBU1EsaUJBQUE7RUFPVjtBQUNGO0FBTEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBT1I7QUFOUTtFQUxKO0lBTVEscUJBQUE7RUFTVjtBQUNGO0FBUEk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFTUjtBQVJRO0VBUko7SUFTUSxZQUFBO0lBQ0EscUJBQUE7RUFXVjtBQUNGO0FBVlE7RUFaSjtJQWFRLFlBQUE7SUFDQSxxQkFBQTtFQWFWO0FBQ0Y7QUFQUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVNaO0FBUlk7RUFOSjtJQU9RLFlBQUE7SUFDQSxhQUFBO0VBV2Q7QUFDRjtBQVZZO0VBVko7SUFXUSxlQUFBO0lBQ0EsWUFBQTtFQWFkO0FBQ0Y7QUFYUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFhWjtBQVpZO0VBTko7SUFPUSxXQUFBO0lBQ0EsaUJBQUE7RUFlZDtBQUNGO0FBYlE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFlWjtBQWRZO0VBSko7SUFLUSxpQkFBQTtJQUNBLFlBQUE7RUFpQmQ7QUFDRjtBQWhCWTtFQVJKO0lBU1EsZUFBQTtFQW1CZDtBQUNGO0FBakJRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFtQlo7QUFsQlk7RUFMSjtJQU1RLFlBQUE7SUFDQSxpQkFBQTtFQXFCZDtBQUNGO0FBcEJZO0VBVEo7SUFVUSxpQkFBQTtFQXVCZDtBQUNGO0FBckJRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdUJaO0FBakJRO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBa0JaO0FBakJZO0VBSko7SUFLUSxxQkFBQTtFQW9CZDtBQUNGO0FBbkJZO0VBUEo7SUFRUSxxQkFBQTtJQUNBLGNBQUE7RUFzQmQ7QUFDRjtBQXBCUTtFQUNJLFlBQUE7QUFzQlo7QUFuQlE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBcUJaO0FBbEJZO0VBWEo7SUFZUSxvQ0FBQTtFQXFCZDtBQUNGO0FBcEJZO0VBZEo7SUFlUSxvQ0FBQTtFQXVCZDtBQUNGO0FBdEJZO0VBQ0ksWUFBQTtBQXdCaEI7QUFyQlE7RUFDSSxjQUFBO0FBdUJaO0FBckJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF1Qlo7QUF0Qlk7RUFSSjtJQVNRLFdBQUE7SUFDQSxZQUFBO0VBeUJkO0FBQ0Y7QUF4Qlk7RUFaSjtJQWFRLGFBQUE7SUFDQSxjQUFBO0lBQ0Esb0JBQUE7RUEyQmQ7QUFDRjtBQTFCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUE0QmhCO0FBM0JnQjtFQUpKO0lBS1EsV0FBQTtJQUNBLFlBQUE7RUE4QmxCO0FBQ0Y7QUE3QmdCO0VBUko7SUFTUSxhQUFBO0lBQ0EsY0FBQTtFQWdDbEI7QUFDRjtBQTVCSTtFQUNJLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBOEJSO0FBN0JRO0VBUko7SUFTUSxZQUFBO0lBQ0EsYUFBQTtFQWdDVjtBQUNGO0FBL0JRO0VBWko7SUFhUSxZQUFBO0lBQ0EsYUFBQTtFQWtDVjtBQUNGO0FBaENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBa0NSO0FBaENJO0VBQ0ksY0FBQTtBQWtDUjtBQWpDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBbUNaO0FBaENJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBa0NSO0FBaENJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBa0NSO0FBakNRO0VBQ0ksV0FBQTtBQW1DWjtBQWhDUTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7QUFrQ1o7QUFoQ1E7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0FBa0NaIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuQG1peGluIGNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbkBtaXhpbiBjZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuQG1peGluIGNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG5AbWl4aW4gZnVsbHNpemUoJHBvc2l0aW9uOiBhYnNvbHV0ZSwgJG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICBAaWYgKCRtb2RlID09IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIEBpZiAoJG1vZGUgPT0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbkBtaXhpbiBjbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5AbWl4aW4gY2xlYXJpbnB1dCgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcblxuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbkBtaXhpbiBjdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuQG1peGluIHNoYWRvdygkbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICBAaWYgKCRtb2RlID09IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgQGlmICgkbW9kZSA9PSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgQGlmICgkbW9kZSA9PSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMThweCAzMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC41Mik7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgIEBpZiAoJG1vZGUgPT0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiA0cHggMCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICBAaWYgKCRtb2RlID09IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICBAaWYgKCRtb2RlID09IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgIEBpZiAoJG1vZGUgPT0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xNnB4IDI4cHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICB9XG59XG5cbkBtaXhpbiBpbnNldC1ib3JkZXIoJGRpcmVjdGlvbjogYm90dG9tLCAkbW9kZTogbm9uZSkge1xuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICBAaWYgKCRtb2RlID09IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICBAaWYgKCRtb2RlID09IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgQGlmICgkbW9kZSA9PSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZGlyZWN0aW9uID09IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICBAaWYgKCRtb2RlID09IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICBAaWYgKCRtb2RlID09IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbkBtaXhpbiB0cmFuc2l0aW9uKCRwYXJhbSwgJHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG5AbWl4aW4gZGFzaGVkLWJvcmRlcigkY29sb3I6IGN1cnJlbnRDb2xvciwgJGFsaWdubWVudDogYm90dG9tLCAkc3BhY2luZzogNCkge1xuICAgICRzaXplOiAkc3BhY2luZyAqIDFweDtcbiAgICAkcGVyY2VudGFnZTogKDEwMCUgLyAkc3BhY2luZyAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgJHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50ICRwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICRhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbkBtaXhpbiBvcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5AbWl4aW4gaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIEBpbmNsdWRlIHNoYWRvdygpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuQG1peGluIGdyYWRpZW50KCRzdGFydC1jb2xvciwgJGVuZC1jb2xvciwgJGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRzdGFydC1jb2xvciAwJSwgJGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoXG4gICAgJGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxuICAgICR0cmFuc3BhcmVudENvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxuICAgICR3aWR0aDogMzBweFxuKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR0cmFuc3BhcmVudENvbG9yIDAlLCAkY29sb3IgODAlLCAkY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbkBtaXhpbiBjcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG5AbWl4aW4gdHVpLXNwYWNlKCRkaXJlY3Rpb24sICRzaXplKSB7XG4gICAgQGlmICgkZGlyZWN0aW9uID09IGFsbCkge1xuICAgICAgICBtYXJnaW46ICRzcGFjZSAqICRzaXplO1xuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNlICogJHNpemU7XG4gICAgfVxuXG4gICAgQGlmICgkZGlyZWN0aW9uID09IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2UgKiAkc2l6ZTtcbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNlICogJHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjZSAqICRzaXplO1xuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkc3BhY2UgKiAkc2l6ZTtcbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2UgKiAkc2l6ZTtcbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjZSAqICRzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogJHNwYWNlICogJHNpemU7XG4gICAgfVxufVxuXG5AbWl4aW4gY29udHJhc3QtYmFja2dyb3VuZCgkYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdCgkYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbkBtaXhpbiBibHVycmVkLWJhY2tncm91bmQoJGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG59XG4iLCJAaW1wb3J0IFwifkB0YWlnYS11aS9jb3JlL3N0eWxlcy90YWlnYS11aS1sb2NhbFwiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgLS10dWktcHJpbWFyeS10ZXh0OiAjZmZmO1xyXG4gICAgLS10dWktcHJpbWFyeTogIzI5OWQzNztcclxuICAgIC0tdHVpLXByaW1hcnktaG92ZXI6ICMyYzdhMzU7XHJcbiAgICAtLXR1aS1wcmltYXJ5LWFjdGl2ZTogIzJjN2EzNTtcclxuXHJcbiAgICAtLWN1c3RvbS1oOiAyNTA7XHJcbiAgICAtLWN1c3RvbS13OiAzNTA7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgJl9yb3RhdGVkIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5jb250ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNS4ycmVtKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2LjFyZW0pO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEuNXJlbSAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxOTEwcHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXR1aS1iYXNlLTA2KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIHdpZHRoOiAzNTJweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWZhdiB7XHJcbiAgICAgICAgICAgIC8vY29sb3I6IHZhcigtLXR1aS1iYXNlLTAzKTtcclxuICAgICAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10dWktc3VwcG9ydC0xMCk7XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNoYXJlLWJ0bixcclxuICAgICAgICAmLWZhdi1idG4ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saW5lY2xhbXAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIC8vbWF4LWhlaWdodDogNTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10YWdzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbSAxcmVtIDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEuNXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogNjAgLSA4MFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC44cmVtIDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbm90YWdzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtb3duZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTApO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNwaW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xyXG4gICAgICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9hZGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGFnIHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "hL75":
/*!********************************************!*\
  !*** ./src/services/fav-images.service.ts ***!
  \********************************************/
/*! exports provided: FavImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavImagesService", function() { return FavImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FavImagesService {
    constructor() {
        this.images = [];
        this.testStorage();
    }
    testStorage() {
        if (!localStorage.getItem('fav-images')) {
            localStorage.setItem('fav-images', JSON.stringify(this.images));
        }
    }
    setItem(item) {
        this.images = JSON.parse(localStorage.getItem('fav-images'));
        if (!this.images.find(elem => elem.url === item.url)) {
            let img = Object.assign({}, item);
            item.img = true;
            item.img = true;
            this.images.push(img);
        }
        localStorage.setItem('fav-images', JSON.stringify(this.images));
    }
    delItem(item) {
        this.images = JSON.parse(localStorage.getItem('fav-images')).filter((elem) => elem.url !== item.url);
        localStorage.setItem('fav-images', JSON.stringify(this.images));
    }
    isFav(elem) {
        if (Array.from(JSON.parse(localStorage.getItem('fav-images')).map(elem => elem.url)).includes(elem)) {
            return true;
        }
        return false;
    }
}
FavImagesService.ɵfac = function FavImagesService_Factory(t) { return new (t || FavImagesService)(); };
FavImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavImagesService, factory: FavImagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hNOE":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.container.ts ***!
  \********************************************************/
/*! exports provided: MainPageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageContainer", function() { return MainPageContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_main_page_main_page_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/main-page/main-page.api.service */ "FGXg");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.component */ "h6PX");



class MainPageContainer {
    constructor(searchService, cd) {
        this.searchService = searchService;
        this.cd = cd;
        this.value = "car";
        //this.search(this.value);
    }
    ngOnInit() { }
    search(value) {
        this.searchService.searchKeyword(value);
    }
    onScrollSearch(value) {
        this.searchService.searchKeyword(value);
    }
}
MainPageContainer.ɵfac = function MainPageContainer_Factory(t) { return new (t || MainPageContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_main_page_main_page_api_service__WEBPACK_IMPORTED_MODULE_1__["MainPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MainPageContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageContainer, selectors: [["main-page"]], decls: 1, vars: 1, consts: [[3, "value", "onSearch", "onScrollSearch"]], template: function MainPageContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function MainPageContainer_Template_app_main_page_onSearch_0_listener($event) { return ctx.search($event); })("onScrollSearch", function MainPageContainer_Template_app_main_page_onScrollSearch_0_listener($event) { return ctx.onScrollSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, directives: [_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ "jRtF":
/*!****************************************!*\
  !*** ./src/services/filter.service.ts ***!
  \****************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterService {
    constructor() {
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.tags$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.sorting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    changeFilter(filter) {
        this.filter$.next(filter);
    }
    changeSorting(sorting) {
        this.sorting$.next(sorting);
    }
    sendTags(tags) {
        this.tags$.next(tags);
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uPhP":
/*!**********************************************!*\
  !*** ./src/app/shared/mocks/routing.data.ts ***!
  \**********************************************/
/*! exports provided: ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
const ROUTING = [
    {
        id: 1,
        url: '',
        name: 'Main Page',
        icon: 'tuiIconDesktopLarge'
    },
    {
        id: 2,
        url: 'favorite',
        name: 'Favorite Photos',
        icon: 'tuiIconBookmarkLarge'
    },
    {
        id: 3,
        url: 'user',
        name: 'User Page',
        icon: 'tuiIconFrameLarge'
    }
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_fav_page_fav_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/fav-page/fav-page.component */ "TKZG");
/* harmony import */ var _pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-page/main-page.container */ "hNOE");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "C7Ai");
/* harmony import */ var _shared_mocks_routing_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/mocks/routing.data */ "uPhP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: _shared_mocks_routing_data__WEBPACK_IMPORTED_MODULE_4__["ROUTING"][0].url, component: _pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_2__["MainPageContainer"] },
    { path: _shared_mocks_routing_data__WEBPACK_IMPORTED_MODULE_4__["ROUTING"][1].url, component: _pages_fav_page_fav_page_component__WEBPACK_IMPORTED_MODULE_1__["FavPageComponent"] },
    { path: _shared_mocks_routing_data__WEBPACK_IMPORTED_MODULE_4__["ROUTING"][2].url, component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"] },
    { path: '**', redirectTo: _shared_mocks_routing_data__WEBPACK_IMPORTED_MODULE_4__["ROUTING"][0].url }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xehY":
/*!**********************************************!*\
  !*** ./src/app/shared/mocks/sorting.data.ts ***!
  \**********************************************/
/*! exports provided: SORTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTING", function() { return SORTING; });
const SORTING = [
    {
        name: 'Relevance',
        data: 'relevance'
    },
    {
        name: "Date",
        data: 'date-posted-asc'
    },
    {
        name: 'Interestingnes',
        data: 'interestingness-desc'
    },
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map