import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RequestInterceptor } from "./auth/request.interceptor";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
        
})

export class CoreModule {}