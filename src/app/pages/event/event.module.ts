import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EVENT_ROUTES } from './event.routes';
import { CoreModule } from './../../core/core.module';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpFormComponent } from './rsvp/rsvp-form/rsvp-form.component';

@NgModule({
    imports: [ CommonModule, CoreModule, RouterModule.forChild(EVENT_ROUTES) ],
    declarations: [ EventComponent, EventDetailComponent, RsvpComponent, RsvpFormComponent ]
})
export class EventModule {}
