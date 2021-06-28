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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/filter.service */ "jRtF");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "6AEW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function SideNavComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tui-svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
function SideNavComponent_ng_template_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add your own filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tui-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Filter Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tui-input-tag", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Enter tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_ng_template_3_ng_template_8_Template_button_click_7_listener() { const observer_r7 = ctx.$implicit; return observer_r7.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_ng_template_3_ng_template_8_Template_button_click_9_listener() { const observer_r7 = ctx.$implicit; observer_r7.next(); return observer_r7.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r5.arg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tuiTextfieldLabelOutside", false)("tuiTextfieldCleaner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.showAddFilter);
} }
function SideNavComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "tui-filter", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SideNavComponent_ng_template_3_ng_template_4_Template, 3, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_ng_template_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.showDialog(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Add filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SideNavComponent_ng_template_3_ng_template_8_Template, 11, 5, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("content", _r2)("items", ctx_r0.filterMass);
} }
function SideNavComponent_ng_template_6_tui_radio_block_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tui-radio-block", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("item", item_r13.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r13.name, " ");
} }
function SideNavComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SideNavComponent_ng_template_6_tui_radio_block_2_Template, 2, 2, "tui-radio-block", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collapsed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.sortMass);
} }
class SideNavComponent {
    constructor(filterService, changeDetector, dialogService) {
        this.filterService = filterService;
        this.changeDetector = changeDetector;
        this.dialogService = dialogService;
        this.showFilter = true;
        this.showSorting = true;
        this.showAddFilter = true;
        this.filterMass = _mocks_filter_data__WEBPACK_IMPORTED_MODULE_1__["FILTER"];
        this.sortMass = _mocks_sorting_data__WEBPACK_IMPORTED_MODULE_2__["SORTING"];
        this.sidenavOutput = _mocks_sidenav_output_data__WEBPACK_IMPORTED_MODULE_3__["SIDENAV_OUTPUT"];
        this.tagsMass = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]([]),
            sorting: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.sortMass[0].data)
        });
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
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 7, vars: 2, consts: [[1, "side-nav"], [1, "accordion", 3, "open", "openChange"], ["tuiAccordionItemContent", "", "class", "ras"], [3, "open", "openChange"], ["tuiAccordionItemContent", ""], [1, "accordion-container"], ["orientation", "vertical", 1, "filter-form", 3, "formGroup"], ["formControlName", "filters", 1, "filter", 3, "content", "items"], ["filter", ""], ["tuiButton", "", "type", "button", "iconRight", "tuiIconPlus", "size", "s", 1, "filter-btn", 3, "click"], ["polymorpheus", ""], ["addFilter", "polymorpheus"], [1, "filter-container"], [1, "tui-space_right-4", 3, "src"], [3, "formGroup"], ["formControlName", "name", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "tags", 1, "b-form", "tui-space_top-4", 3, "tuiTextfieldLabelOutside"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_top-5", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_top-5", "tui-space_left-2", 3, "disabled", "click"], ["orientation", "vertical", 3, "formGroup"], ["tuiGroup", "", "orientation", "vertical", 1, "group", "sort", 3, "collapsed"], ["contentAlign", "left", "formControlName", "sorting", "size", "m", "class", "rounded", 3, "item", 4, "ngFor", "ngForOf"], ["contentAlign", "left", "formControlName", "sorting", "size", "m", 1, "rounded", 3, "item"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tui-accordion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openChange", function SideNavComponent_Template_tui_accordion_item_openChange_1_listener($event) { return ctx.showFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SideNavComponent_ng_template_3_Template, 10, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tui-accordion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openChange", function SideNavComponent_Template_tui_accordion_item_openChange_4_listener($event) { return ctx.showSorting = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SideNavComponent_ng_template_6_Template, 3, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("open", ctx.showFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("open", ctx.showSorting);
    } }, directives: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionItemComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionItemContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusTemplate"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldLabelOutsideDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldCleanerDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTagComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockComponent"]], styles: ["[_nghost-%COMP%] {\n  --tui-primary-text: #fff;\n  --tui-primary: #299d37;\n  --tui-primary-hover: #2c7a35;\n  --tui-primary-active: #2c7a35;\n}\n[_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  width: 20rem;\n  height: 100%;\n  padding: 1.8rem 0 3.6rem;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tui-base-03);\n}\n[_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(n+2) {\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  height: 3.8rem;\n  padding: 0 2.1rem 0 1.8rem;\n  display: flex;\n  align-items: center;\n  background-color: var(--white);\n}\n[_nghost-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-left: 0.5rem;\n}\n[_nghost-%COMP%]   .filter-section[_ngcontent-%COMP%] {\n  margin: 0.8rem auto 2.6rem;\n}\n[_nghost-%COMP%]   .filter-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .filter-elem[_ngcontent-%COMP%] {\n  width: 16.2rem;\n  height: 4rem;\n  font-size: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--gray-dark);\n}\n[_nghost-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .elem-icon[_ngcontent-%COMP%] {\n  margin-right: 1.8rem;\n}\n[_nghost-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .sort[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .rounded[_ngcontent-%COMP%] {\n  border-radius: var(--tui-radius-m);\n  height: 44px;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFFUjtBQURRO0VBQ0ksY0FBQTtBQUdaO0FBQUk7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUVSO0FBQUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFFUTtFQUNJLDBCQUFBO0FBQVo7QUFFUTtFQUNJLFdBQUE7QUFBWjtBQUVRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQUFaO0FBRVE7RUFDSSxnQkFBQTtBQUFaO0FBSVE7RUFDSSxvQkFBQTtBQUZaO0FBS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQUlRO0VBQ0ksV0FBQTtBQUZaO0FBS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS0k7RUFDSSxXQUFBO0FBSFI7QUFLSTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSFIiLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXR1aS1wcmltYXJ5LXRleHQ6ICNmZmY7XHJcbiAgICAtLXR1aS1wcmltYXJ5OiAjMjk5ZDM3O1xyXG4gICAgLS10dWktcHJpbWFyeS1ob3ZlcjogIzJjN2EzNTtcclxuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjMmM3YTM1O1xyXG4gICAgLnNpZGUtbmF2IHtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuOHJlbSAwIDMuNnJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDMpO1xyXG4gICAgICAgICYgPiA6bnRoLWNoaWxkKG4gKyAyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXYtYnRuIHtcclxuICAgICAgICBoZWlnaHQ6IDMuOHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDIuMXJlbSAwIDEuOHJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG4gICAgLmJ0bi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXIge1xyXG4gICAgICAgICYtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC44cmVtIGF1dG8gMi42cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1lbGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2LjJyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVsZW0ge1xyXG4gICAgICAgICYtaWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5maWx0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY2NvcmRpb24tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zb3J0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5yb3VuZGVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


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
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiTableModule"]] });
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
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_8__["TuiTableModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/side-nav/side-nav.component */ "3qkz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "side-nav"], [1, "container-context"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiRootComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: calc(100vh - 5.2rem);\n}\n[_nghost-%COMP%]   .container-context[_ngcontent-%COMP%] {\n  height: calc(100vh - 5.2rem);\n  width: calc(100% - 20rem);\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUNRO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFFSTtFQUNJLFlBQUE7QUFBUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNS4ycmVtKTtcclxuICAgICAgICAmLWNvbnRleHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjJyZW0pO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjByZW0pO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


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
        console.log(this.imagesMass);
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
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-masonry */ "EygD");
/* harmony import */ var _pages_fav_page_fav_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/fav-page/fav-page.component */ "TKZG");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "C7Ai");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/side-nav/side-nav.component */ "3qkz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/main-page/main-page.container */ "hNOE");
/* harmony import */ var _taiga_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taiga.module */ "5OkU");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _taiga_module__WEBPACK_IMPORTED_MODULE_12__["TaigaModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__["InfiniteScrollModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_4__["NgxMasonryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_fav_page_fav_page_component__WEBPACK_IMPORTED_MODULE_5__["FavPageComponent"],
        _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_7__["UserPageComponent"],
        _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["SideNavComponent"],
        _pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_11__["MainPageContainer"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _taiga_module__WEBPACK_IMPORTED_MODULE_12__["TaigaModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__["InfiniteScrollModule"],
        ngx_masonry__WEBPACK_IMPORTED_MODULE_4__["NgxMasonryModule"]], exports: [_pages_main_page_main_page_container__WEBPACK_IMPORTED_MODULE_11__["MainPageContainer"]] }); })();


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
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "3tQ6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "Pq0R");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");









function HeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tui-svg", 7);
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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 7, vars: 2, consts: [[1, "header"], [1, "logo"], [1, "logo-text"], [1, "nav"], ["under", "", 1, "header-router", 3, "activeItemIndex", "activeItemIndexChange"], ["tuiTab", "", "tuiRipple", "var(--tui-text-01)", 3, "routerLink", "disabled", 4, "ngFor", "ngForOf"], ["tuiTab", "", "tuiRipple", "var(--tui-text-01)", 3, "routerLink", "disabled"], [1, "tui-space_right-2", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Image Finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tui-tabs", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeItemIndexChange", function HeaderComponent_Template_tui_tabs_activeItemIndexChange_5_listener($event) { return ctx.activeItemIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HeaderComponent_button_6_Template, 3, 4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeItemIndex", ctx.activeItemIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.routingUrls);
    } }, directives: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiTabsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiTabComponent"], _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_6__["TuiRippleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"]], styles: ["[_nghost-%COMP%] {\n  --tui-primary-text: #fff;\n  --tui-primary: #299d37;\n  --tui-primary-hover: #2c7a35;\n  --tui-primary-active: #2c7a35;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5.2rem;\n  padding: 0 3.2rem 0 0;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  z-index: 1000;\n  position: relative;\n  background-color: var(--tui-base-02);\n  font-size: var(--font-size-l);\n  color: var(--tui-text-01);\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 20rem;\n  padding-left: 2.8rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  width: 9rem;\n  margin-left: 1rem;\n  font-size: var(--font-size-m);\n  text-decoration: underline;\n  -webkit-text-decoration-color: var(--tui-primary);\n          text-decoration-color: var(--tui-primary);\n}\n[_nghost-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  margin: 0rem;\n}\n[_nghost-%COMP%]   .nav[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  margin-left: 20px;\n}\n[_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 100%;\n  letter-spacing: 0.1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-size: var(--font-size);\n  color: var(--tui-base-05);\n}\n[_nghost-%COMP%]   .nav-btn-active[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n[_nghost-%COMP%]   .nav-btn-active[_ngcontent-%COMP%]::after {\n  width: 12rem;\n  height: 0.2rem;\n  top: 5rem;\n  position: absolute;\n  content: \"\";\n  background-color: var(--tui-base-01);\n}\n[_nghost-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n}\n[_nghost-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: var(--font-size-m);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZHQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFFQSw2QkFBQTtFQUNBLHlCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBQVI7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBQ1o7QUFFSTtFQUNJLHFCQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7QUFBUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXR1aS1wcmltYXJ5LXRleHQ6ICNmZmY7XHJcbiAgICAtLXR1aS1wcmltYXJ5OiAjMjk5ZDM3O1xyXG4gICAgLS10dWktcHJpbWFyeS1ob3ZlcjogIzJjN2EzNTtcclxuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjMmM3YTM1O1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1LjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAzLjJyZW0gMCAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjE0KSwgMHB4IDFweCAxMHB4IGhzbGEoMCwgMCUsIDAlLCAwLjEyKSxcclxuICAgICAgICAgICAgMHB4IDJweCA0cHggaHNsYSgwLCAwJSwgMCUsIDAuMik7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTAyKTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKTtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjhyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICAubG9nby1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDByZW07XHJcbiAgICB9XHJcbiAgICAubmF2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDUpO1xyXG4gICAgfVxyXG4gICAgLm5hdi1idG4tYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgICAgICAgICAgdG9wOiA1cmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxuICAgIH1cclxuICAgIC50b2dnbGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");















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
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3.isFav ? "var(--tui-base-05)" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("content", _r5)("lineHeight", 26)("linesLimit", 2);
} }
function MainPageComponent_main_9_div_1_ng_template_16_tui_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-tag", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_main_9_div_1_ng_template_16_tui_tag_1_Template_tui_tag_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const tag_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r10.addTag(tag_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3.isFav ? "var(--tui-autofill)" : "var(--tui-base-04)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tag_r9)("hoverable", true);
} }
const _c1 = function () { return { "font": "var(--tui-font-text-m)" }; };
function MainPageComponent_main_9_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_main_9_div_1_ng_template_16_tui_tag_1_Template, 1, 4, "tui-tag", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.tags);
} }
const _c2 = function (a0) { return { "card-fav": a0 }; };
function MainPageComponent_main_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_main_9_div_1_Template_tui_svg_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r3 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.favClick(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MainPageComponent_main_9_div_1_Template_img_load_14_listener() { const item_r3 = ctx.$implicit; return item_r3.skeleton = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainPageComponent_main_9_div_1_tui_island_15_Template, 2, 7, "tui-island", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MainPageComponent_main_9_div_1_ng_template_16_Template, 2, 3, "ng-template", 25, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c2, item_r3.isFav));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", item_r3.width * 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", item_r3.height * 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.tags[0] !== "");
} }
function MainPageComponent_main_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_main_9_div_1_Template, 18, 39, "div", 10);
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
    constructor(notificationsService, favService, searchService, changeDetector, filterService) {
        this.notificationsService = notificationsService;
        this.favService = favService;
        this.searchService = searchService;
        this.changeDetector = changeDetector;
        this.filterService = filterService;
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
        this.testForm.patchValue({ searchInput: 'car' });
    }
    ngOnDestroy() {
        this.filterSubs.unsubscribe();
        this.formSubs.unsubscribe();
        this.sortingSubs.unsubscribe();
        this.imagesSubs.unsubscribe();
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
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_fav_images_service__WEBPACK_IMPORTED_MODULE_6__["FavImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_main_page_main_page_api_service__WEBPACK_IMPORTED_MODULE_7__["MainPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_filter_service__WEBPACK_IMPORTED_MODULE_8__["FilterService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], inputs: { value: "value" }, outputs: { onSearch: "onSearch", onScrollSearch: "onScrollSearch" }, decls: 10, vars: 10, consts: [[1, "context-container"], [1, "form", 3, "formGroup"], ["formControlName", "searchInput", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "tagsInput", 1, "b-form", 3, "tuiTextfieldLabelOutside", "searchChange"], [3, "items", 4, "tuiDataList"], ["size", "xxl", 1, "loader", 3, "showLoader", "overlay"], ["infiniteScroll", "", 1, "search-results", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["class", "container", 4, "ngIf"], [3, "items"], [1, "container"], ["class", "wrapper", 4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "card", 3, "ngClass"], [1, "card-header"], ["target", "_blank", 1, "card-owner", 3, "href"], ["alt", "User Profile", 1, "card-owner-icon", 3, "src", "load"], [1, "card-text"], [1, "card-title", 3, "title"], [1, "card-subtitle", 3, "title"], [1, "card-btns"], ["src", "tuiIconRedoLarge", "fill", "'black'", 1, "card-share-btn"], ["src", "tuiIconHeartLarge", 1, "card-fav-btn", 3, "click"], [1, "ass"], ["loading", "lazy", "alt", "Post Image", 1, "card-img", 3, "src", "width", "height", "load"], ["class", "card-tags", 3, "background-color", 4, "ngIf"], ["class", "card-tags"], ["tags", ""], [1, "card-tags"], [1, "card-lineclamp", 3, "ngStyle", "content", "lineHeight", "linesLimit"], [1, "tag-container", 3, "ngStyle"], ["size", "s", "status", "custom", "class", "tui-space_bottom-1 tui-space_right-2", 3, "value", "hoverable", "background-color", "click", 4, "ngFor", "ngForOf"], ["size", "s", "status", "custom", 1, "tui-space_bottom-1", "tui-space_right-2", 3, "value", "hoverable", "click"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", ctx.isLoading)("overlay", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldLabelOutsideDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldCleanerDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListDirective"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLoaderComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiDataListWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLazyLoadingDirective"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiIslandComponent"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiLineClampComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TuiTagComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  --tui-primary-text: #fff;\n  --tui-primary: #299d37;\n  --tui-primary-hover: #2c7a35;\n  --tui-primary-active: #2c7a35;\n  --custom-h: 250;\n  --custom-w: 350;\n}\n[_nghost-%COMP%]   .icon_rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  height: 50px;\n}\n[_nghost-%COMP%]   .context-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 5.2rem);\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 1;\n  padding: 0px 1.5rem 0px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media screen and (max-width: 1500px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 20px 10px;\n}\n@media screen and (max-width: 1910px) {\n  [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    margin: 0px auto 10px;\n  }\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  border-radius: 10px;\n  border: 1px solid var(--tui-base-06);\n  margin-bottom: 3rem;\n  width: 352px;\n}\n[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  min-height: 5.2rem;\n  height: auto;\n  width: 100%;\n  padding: 1.1rem;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  margin-left: 1.1rem;\n  width: 12.3rem;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  min-height: 1.1rem;\n  max-height: 1.3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: var(--font-size-m);\n}\n[_nghost-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  min-height: 1.3rem;\n  max-height: 2rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.1rem;\n  margin-top: 0.6rem;\n}\n[_nghost-%COMP%]   .card-btns[_ngcontent-%COMP%] {\n  height: 2.8rem;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .card-share-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-fav-btn[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-lineclamp[_ngcontent-%COMP%] {\n  height: auto;\n}\n[_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 5.6rem;\n  padding: 0.9rem 0.6rem 0.9rem 1.1rem;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  border-radius: 0 0 10px 10px;\n}\n[_nghost-%COMP%]   .card-tags[_ngcontent-%COMP%]::before {\n  border: none;\n}\n[_nghost-%COMP%]   .card-owner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .card-owner-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.4rem;\n}\n[_nghost-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .ass[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-10);\n  display: flex;\n  height: 250px;\n  width: 350px;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background-color: var(--tui-autofill);\n}\n[_nghost-%COMP%]   .tag-container[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .loader[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  height: 100%;\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: var(--tui-base-04);\n}\n[_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: var(--tui-primary);\n}\n.card-tag[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n  margin-bottom: 0.3rem;\n  background-color: var(--tui-autofill);\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAdGFpZ2EtdWlcXGNvcmVcXHN0eWxlc1xcbWl4aW5zXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVFBLCtDQUFBO0FBb0JBLDhDQUFBO0FDelJBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUdJO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUVRO0VBUko7SUFTUSxlQUFBO0VBQ1Y7QUFDRjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNSO0FBQVE7RUFMSjtJQU1RLHFCQUFBO0VBR1Y7QUFDRjtBQURJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUdSO0FBR1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRFo7QUFHUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURaO0FBR1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBRFo7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURaO0FBR1E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUdRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBRFo7QUFHUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQURaO0FBR1E7RUFDSSxZQUFBO0FBRFo7QUFJUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUZaO0FBSVk7RUFDSSxZQUFBO0FBRmhCO0FBS1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQUlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUZoQjtBQUtRO0VBSUksZUFBQTtBQU5aO0FBU0k7RUFDSSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVBSO0FBU0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNJO0VBQ0kscUNBQUE7QUFQUjtBQVFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFOWjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBUFI7QUFTSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVBSO0FBUVE7RUFDSSxXQUFBO0FBTlo7QUFTUTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7QUFQWjtBQVNRO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtBQVBaO0FBV0E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FBUkoiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG5AbWl4aW4gY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuQG1peGluIGNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG5AbWl4aW4gY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuQG1peGluIGNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbkBtaXhpbiBmdWxsc2l6ZSgkcG9zaXRpb246IGFic29sdXRlLCAkbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIEBpZiAoJG1vZGUgPT0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgQGlmICgkbW9kZSA9PSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuQG1peGluIGNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBjbGVhcmlucHV0KCkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxuXG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMDBweCB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuQG1peGluIGN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG5AbWl4aW4gc2hhZG93KCRtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgIEBpZiAoJG1vZGUgPT0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICBAaWYgKCRtb2RlID09IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDUxLCA1MSwgNTEsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICBAaWYgKCRtb2RlID09IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxOHB4IDMwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjUyKTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgQGlmICgkbW9kZSA9PSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCAwIDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgIEBpZiAoJG1vZGUgPT0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEycHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgIEBpZiAoJG1vZGUgPT0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgQGlmICgkbW9kZSA9PSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTE2cHggMjhweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgIH1cbn1cblxuQG1peGluIGluc2V0LWJvcmRlcigkZGlyZWN0aW9uOiBib3R0b20sICRtb2RlOiBub25lKSB7XG4gICAgQGlmICgkZGlyZWN0aW9uID09IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgQGlmICgkbW9kZSA9PSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICBAaWYgKCRtb2RlID09IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgQGlmICgkbW9kZSA9PSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgIEBpZiAoJG1vZGUgPT0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgQGlmICgkbW9kZSA9PSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuQG1peGluIHRyYW5zaXRpb24oJHBhcmFtLCAkc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICRzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbkBtaXhpbiBkYXNoZWQtYm9yZGVyKCRjb2xvcjogY3VycmVudENvbG9yLCAkYWxpZ25tZW50OiBib3R0b20sICRzcGFjaW5nOiA0KSB7XG4gICAgJHNpemU6ICRzcGFjaW5nICogMXB4O1xuICAgICRwZXJjZW50YWdlOiAoMTAwJSAvICRzcGFjaW5nICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAkcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgJHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgJGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuQG1peGluIG9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBtaXhpbiBob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgQGluY2x1ZGUgc2hhZG93KCk7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG5AbWl4aW4gZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJHN0YXJ0LWNvbG9yIDAlLCAkZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbkBtaXhpbiB0ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShcbiAgICAkY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXG4gICAgJHRyYW5zcGFyZW50Q29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgJHdpZHRoOiAzMHB4XG4pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogJHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHRyYW5zcGFyZW50Q29sb3IgMCUsICRjb2xvciA4MCUsICRjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuQG1peGluIGNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbkBtaXhpbiB0dWktc3BhY2UoJGRpcmVjdGlvbiwgJHNpemUpIHtcbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogJHNwYWNlICogJHNpemU7XG4gICAgfVxuXG4gICAgQGlmICgkZGlyZWN0aW9uID09IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAkc3BhY2UgKiAkc2l6ZTtcbiAgICB9XG5cbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjZSAqICRzaXplO1xuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAkc3BhY2UgKiAkc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHNwYWNlICogJHNpemU7XG4gICAgfVxuXG4gICAgQGlmICgkZGlyZWN0aW9uID09IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRzcGFjZSAqICRzaXplO1xuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjZSAqICRzaXplO1xuICAgIH1cblxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHNwYWNlICogJHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkc3BhY2UgKiAkc2l6ZTtcbiAgICB9XG59XG5cbkBtaXhpbiBjb250cmFzdC1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KCRiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuQG1peGluIGJsdXJyZWQtYmFja2dyb3VuZCgkY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbn1cbiIsIkBpbXBvcnQgXCJ+QHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICAtLXR1aS1wcmltYXJ5LXRleHQ6ICNmZmY7XHJcbiAgICAtLXR1aS1wcmltYXJ5OiAjMjk5ZDM3O1xyXG4gICAgLS10dWktcHJpbWFyeS1ob3ZlcjogIzJjN2EzNTtcclxuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjMmM3YTM1O1xyXG5cclxuICAgIC0tY3VzdG9tLWg6IDI1MDtcclxuICAgIC0tY3VzdG9tLXc6IDM1MDtcclxuICAgIC5pY29uIHtcclxuICAgICAgICAmX3JvdGF0ZWQge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUuMnJlbSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEuNXJlbSAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTkxMHB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXR1aS1iYXNlLTA2KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIHdpZHRoOiAzNTJweDtcclxuICAgICAgICAmLWZhdiB7XHJcbiAgICAgICAgICAgIC8vY29sb3I6IHZhcigtLXR1aS1iYXNlLTAzKTtcclxuICAgICAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10dWktc3VwcG9ydC0xMCk7XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUuMnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEyLjNyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMS4zcmVtO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ0bnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2hhcmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1mYXYtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saW5lY2xhbXAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIC8vbWF4LWhlaWdodDogNTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10YWdzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1LjZyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbSAwLjZyZW0gMC45cmVtIDEuMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtb3duZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbWcge1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gbWluLXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTEwKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5zcGlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xyXG4gICAgICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9hZGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY2FyZC10YWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


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
            console.log(item);
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