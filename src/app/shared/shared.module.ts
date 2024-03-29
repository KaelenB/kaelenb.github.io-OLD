import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { MaterialModule } from "./material/material.module";
@NgModule({
  imports: [CommonModule, PdfViewerModule, MaterialModule],
  exports: [CommonModule, PdfViewerModule, MaterialModule],
  declarations: [],
})
export class SharedModule {}
