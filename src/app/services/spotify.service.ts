import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
      console.log("spotify service listo");
   }

   getNewReleases(){
     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQAyzvfonqeUg3diIOYBe9EfFLoFJgSYga2rH0PTNDCe-wQTmSVTSFKTt4LGeMM6x9PGsIyceMSZiHlwnL0'
     });


     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

   }
}
