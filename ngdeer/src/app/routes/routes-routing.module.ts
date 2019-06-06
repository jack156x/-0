import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../layout/default/default.component';
import { FullscreenComponent } from '../layout/fullscreen/fullscreen.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';
import { ACLGuard } from '@delon/acl';

const routes: Routes = [
    { path: '', redirectTo: 'passport', pathMatch: 'full' },
    /**默认布局 */
    {
        path: 'default',
        component: DefaultComponent,
        // canActivate: [ACLGuard],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'index', loadChildren: './index/index.module#IndexModule'
            },
            {
                path: 'map', loadChildren: './map/map.module#MapModule'
            },
            {
                path: 'charts', loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'list', loadChildren: './list/list.module#ListModule'
            },
            {
                path: 'animations', loadChildren: './animations/animations.module#AnimationsModule'
            },
            {
                path: 'outside', loadChildren: './outside/outside.module#OutsideModule'
            }

        ]
    },
    /**全屏布局 */
    {
        path: 'fullscreen',
        component: FullscreenComponent,
        children: [
            { path: '', redirectTo: 'experiment', pathMatch: 'full' },
            { path: 'screen', loadChildren: './screen/screen.module#ScreenModule' },
            { path: 'experiment', loadChildren: './experiment/experiment.module#ExperimentModule' }
        ]
    },
    /** 登陆布局 */
    {
        path: 'passport',
        component: PassportComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent }
        ]

    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
