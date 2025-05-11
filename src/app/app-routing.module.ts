import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';


import {
	AboutComponent,
	ClubComponent,
	ComingComponent,
	CosplayComponent,
	LocationComponent,
	VisitorComponent
} from './page';
import { PageData } from './@set';


const routes: Routes = [
	{
		path: '',
		data: {
			year: '2025'
		} as PageData,
		component: IndexComponent,
		children: [
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'club',
				component: ClubComponent
			},
			{
				path: 'cosplay',
				component: CosplayComponent
			},
			{
				path: 'visitor',
				component: VisitorComponent
			},
			{
				path: 'location',
				component: LocationComponent
			}
		]
	},
	{
		path: '2024',
		data: {
			year: '2024'
		} as PageData,
		component: IndexComponent,
		children: [
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'club',
				component: ClubComponent
			},
			{
				path: 'cosplay',
				component: CosplayComponent
			},
			{
				path: 'visitor',
				component: VisitorComponent
			},
			{
				path: 'location',
				component: LocationComponent
			}
		]
	},
	{
		path: '2023',
		data: {
			year: '2023'
		} as PageData,
		component: IndexComponent,
		children: [
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'club',
				component: ClubComponent
			},
			{
				path: 'cosplay',
				component: CosplayComponent
			},
			{
				path: 'visitor',
				component: VisitorComponent
			},
			{
				path: 'location',
				component: LocationComponent
			}
		]
	},
	{
		path: '2020',
		data: {
			year: '2020'
		} as PageData,
		component: IndexComponent,
		children: [
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'club',
				component: ClubComponent
			},
			{
				path: 'cosplay',
				component: CosplayComponent
			},
			{
				path: 'visitor',
				component: VisitorComponent
			},
			{
				path: 'location',
				component: LocationComponent
			}
		]
	},
	{
		path: '2018',
		data: {
			year: '2018'
		} as PageData,
		component: IndexComponent,
		children: [
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'club',
				component: ClubComponent
			},
			{
				path: 'cosplay',
				component: CosplayComponent
			},
			{
				path: 'visitor',
				component: VisitorComponent
			},
			{
				path: 'location',
				component: LocationComponent
			}
		]
	},
	{
		path: 'coming',
		component: ComingComponent
	},
	{
		path: '**',
		redirectTo: 'coming',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
