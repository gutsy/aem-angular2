System.register(["@angular/core", "@angular/http", "rxjs/add/operator/catch", "rxjs/add/operator/map", "ng2-completer", "./SearchSuggestions"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, ng2_completer_1, SearchSuggestions_1, SearchComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (ng2_completer_1_1) {
                ng2_completer_1 = ng2_completer_1_1;
            },
            function (SearchSuggestions_1_1) {
                SearchSuggestions_1 = SearchSuggestions_1_1;
            }
        ],
        execute: function () {
            SearchComponent = (function () {
                function SearchComponent(elementRef, http, completerService) {
                    this.elementRef = elementRef;
                    this.http = http;
                    this.completerService = completerService;
                    this.goBtnLabel = "Go";
                    this.searchPlaceHolder = "Search Content";
                    this.previousBtnLabel = "Previous";
                    this.nextBtnLabel = "Next";
                    var ci = this;
                    ci.goBtnLabel = ci.getProperty('goBtnLabel');
                    ci.searchPlaceHolder = ci.getProperty('searchPlaceHolder');
                    ci.previousBtnLabel = ci.getProperty('previousBtnLabel');
                    ci.nextBtnLabel = ci.getProperty('nextBtnLabel');
                    ci.dataRemote = new SearchSuggestions_1.CustomData(http);
                }
                SearchComponent.prototype.ngOnInit = function () {
                    console.log("TextAreaComponent initialized");
                };
                SearchComponent.prototype.getProperty = function (propertyName) {
                    var ci = this;
                    if (propertyName && ci.elementRef.nativeElement.getAttribute(propertyName)) {
                        return ci.elementRef.nativeElement.getAttribute(propertyName);
                    }
                    else {
                        return ci["" + propertyName];
                    }
                };
                SearchComponent.prototype.search = function (pageNumber) {
                    var ci = this;
                    return ci.http.get("/bin/search?q=" + ci.queryString + "&path=/content&start=" + pageNumber * 10).subscribe(function (result) {
                        console.log(result);
                        ci.searchResults = result.json();
                        ci.searchResults.pages = new Array();
                        for (var i = 0; i < ci.searchResults.numberPages; i++) {
                            ci.searchResults.pages.push(i);
                        }
                    });
                };
                return SearchComponent;
            }());
            SearchComponent = __decorate([
                core_1.Component({
                    selector: 'search',
                    templateUrl: '/bin/ngtemplate?path=/apps/ngaem/components/content/ng-search/search.html'
                }),
                __metadata("design:paramtypes", [core_1.ElementRef, http_1.Http, ng2_completer_1.CompleterService])
            ], SearchComponent);
            exports_1("SearchComponent", SearchComponent);
        }
    };
});

//# sourceMappingURL=search.component.js.map
