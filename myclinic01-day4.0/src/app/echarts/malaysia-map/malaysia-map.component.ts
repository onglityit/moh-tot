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
  currentZoom = -1;
  currentLat = -1;
  currentLng = -1;

  statesZoomAndLatLng = [
    {state: "Perlis", zoom: 11, lat: 6.496288731526159, lng: 100.24697184562685},
    { state: "Kedah", zoom: 9, lat: 6.1264, lng: 100.3734 },           
    { state: "Penang", zoom: 11, lat: 5.4149, lng: 100.3298 },         
    { state: "Perak", zoom: 9, lat: 4.5975, lng: 101.0901 },           
    { state: "Kelantan", zoom: 9, lat: 5.304478164277148, lng: 102.28734970092775 },        
    { state: "Terengganu", zoom: 9, lat: 4.871812518635347, lng: 103.09104681015016 },      
    { state: "Pahang", zoom: 8, lat: 3.8077, lng: 103.3260 },          
    { state: "Selangor", zoom: 9, lat: 3.3528, lng: 101.4978 },       
    { state: "Kuala Lumpur", zoom: 11, lat: 3.1390, lng: 101.6869 },   
    { state: "Putrajaya", zoom: 13, lat: 2.9264, lng: 101.6964 },      
    { state: "Negeri Sembilan", zoom: 10, lat: 2.842870222426228, lng: 102.12300539016725 }, 
    { state: "Melaka", zoom: 11, lat: 2.310740134362796, lng: 102.2501 },         
    { state: "Johor", zoom: 9, lat: 2.0847534985137295, lng: 103.41408133506775 },           
    { state: "Sarawak", zoom: 8, lat: 2.5340112253087663, lng: 112.63795137405397 },         
    { state: "Labuan", zoom: 13, lat: 5.3228845081598335, lng: 115.21560721099378 },         
    { state: "Sabah", zoom: 8, lat: 5.629460465163675, lng: 116.77666425704957 },  
  ]

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

    this.map.on('zoomend', () => {
      this.currentZoom = this.map.getZoom();
    });

    // Event listener for moveend event
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      this.currentLat = center.lat;
      this.currentLng = center.lng;
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

  goToState(stateName:string){
    const stateDetails = this.statesZoomAndLatLng.find(s => s.state === stateName);

    if (stateDetails) {
      this.map.setView([stateDetails.lat, stateDetails.lng], stateDetails.zoom);
    }
  }


}
