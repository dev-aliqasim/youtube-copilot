import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { debug } from "console";

@Injectable({
    providedIn:"root"
})
export class ThemeService {
 constructor(@Inject(DOCUMENT) private document:Document) {
 }

 switchTheme(theme: string) {
    debugger;
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if(themeLink) {
        themeLink.href = theme + '.css';
    }
 }
}