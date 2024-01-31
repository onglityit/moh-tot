import { AfterViewInit, Component } from '@angular/core';
import * as Leaflet from 'leaflet'; 
import { MalaysiaStateData } from '../../model/malaysia-state-data';
@Component({
  selector: 'app-malaysia-map',
  templateUrl: './malaysia-map.component.html',
  styleUrl: './malaysia-map.component.scss'
})
export class MalaysiaMapComponent implements AfterViewInit{
  statesData:any;
  map!: Leaflet.Map;
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 6,
    center: { lat: 5.096433065039371, lng: 109.53075970223558 }
  };

  constructor(private myStates: MalaysiaStateData){
    this.statesData = myStates.statesData;
  }
  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [ 5.096433065039371, 109.53075970223558 ],
      zoom: 6
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    Leaflet.geoJson(this.statesData).addTo(this.map);

    this.map.on('click', (event:any) => {
      console.log('Latitude:', event.latlng.lat, 'Longitude:', event.latlng.lng);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }
}
