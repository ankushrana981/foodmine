import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapAdvancedMarker, MapInfoWindow } from '@angular/google-maps';
import { } from 'googlemaps'
import { LocationService } from '../../../services/location.service';
import { Order } from '../models/order';


@Component({
  selector: 'map',
  standalone: true,
  imports: [GoogleMapsModule, MapAdvancedMarker, MapInfoWindow],
  providers: [LocationService],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  @Input()
  order!:Order;
  @Input()
  readonly = false;
  display: any;
  private readonly MARKER_ZOOM_LEVEL = 16;
 
  position:google.maps.LatLngLiteral = { 
    lat: 0,
    lng: 0
  }
  center: google.maps.LatLngLiteral = {
    lat: 30.2736308,
    lng: 76.7512555
  };
  options: google.maps.MapOptions = {
    mapId: "197f5132238347bf",
    center: { lat: -31, lng: 147 },
    zoom: 15,
  };
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  constructor(private locationService: LocationService) {

  }
  ngOnInit(): void {
  }
  onMarkerClick(marker: MapAdvancedMarker) {
    this.infoWindow.openAdvancedMarkerElement(marker.advancedMarker, marker.advancedMarker.title);
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next:(latLng)=>{
        console.log(latLng, "current pos")
        this.center = { lat: latLng.lat, lng: latLng.lng };
        this.position={lat: latLng.lat, lng: latLng.lng};
        // set address val 
        latLng.lat = parseFloat(latLng.lat.toFixed(8));
        latLng.lng = parseFloat(latLng.lng.toFixed(8));
        console.log(this.options,"options")
        this.order.addressLatLng = latLng;
      }
    }
    )
  }
}
