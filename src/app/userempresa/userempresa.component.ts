import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userempresa',
  templateUrl: './userempresa.component.html',
  styleUrls: ['./userempresa.component.css']
})
export class UserempresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



//import { Component, OnInit, ViewChild } from '@angular/core';
//import { } from ‘@types/googlemaps’;
//
//@Component({
//  selector: 'app-userempresa',
//  templateUrl: './userempresa.component.html',
//  styleUrls: ['./userempresa.component.css']
//})
//
//export class UserempresaComponent implements OnInit {
//    @ViewChild(‘googleMap’) gmapElement: any;
//    map: google.maps.Map;
//    
//    constructor() { }
//
//    ngOnInit() {
//        var mapProp = {
//        center: new google.maps.LatLng(28.4595, 77.0266),
//        zoom: 14,
//        // mapTypeId: google.maps.MapTypeId.ROADMAP
//        mapTypeId: google.maps.MapTypeId.HYBRID
//        // mapTypeId: google.maps.MapTypeId.SATELLITE
//        // mapTypeId: google.maps.MapTypeId.TERRAIN
//        };
// 
//    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
//    var marker = new google.maps.Marker({ position: mapProp.center });
//    marker.setMap(this.map);
// 
//    var infowindow = new google.maps.InfoWindow({
//        content: “Hey, We are here”
//    });
//    infowindow.open(this.map, marker);
//    }
//}