import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';

const routes: Routes = [
    { path: 'financeiro', component: FinanceiroComponent },
    { path: '', redirectTo: 'financeiro', pathMatch: 'full' },
    { path: '**', redirectTo: 'financeiro', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }