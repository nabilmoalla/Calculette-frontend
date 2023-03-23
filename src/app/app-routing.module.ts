import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes : Routes = [
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(value => value.CalculatorModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
