import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
              <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" *ngFor="let event of events" [event]="event"></event-thumbnail>
              </div>
            </div>
        </div>
    `,
    styles: []
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
