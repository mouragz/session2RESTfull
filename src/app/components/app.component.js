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
var core_1 = require("@angular/core");
var post_service_1 = require("../services/post.service");
var AppComponent = (function () {
    function AppComponent(postService) {
        this.postService = postService;
        this.name = 'Angular';
        //this.postService.getPosts().subscribe(posts => console.log(posts)); 
        // when ajax request is done the Observable object is returned and pushed from (getPosts method) to the call back function here 
    }
    AppComponent.prototype.ngOnInit = function () {
        this.postService.getPosts().subscribe(function (posts) { return console.log(posts); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1>",
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map