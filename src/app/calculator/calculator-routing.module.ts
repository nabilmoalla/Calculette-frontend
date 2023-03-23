import {RouterModule, Routes} from "@angular/router";
import {CalculatorComponent} from "./calculator/calculator.component";
import {NgModule} from "@angular/core";

export const routes : Routes = [
  {
    path: '',
    component: CalculatorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorRoutingModule {
}
