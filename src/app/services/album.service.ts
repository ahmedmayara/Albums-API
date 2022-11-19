import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  apiURL = 'http://localhost:8090/albums/api';

  albums : Album[] = [];
  album!: Album;

  constructor(private http: HttpClient) {}

    albumList(): Observable<Album[]> {
      return this.http.get<Album[]>(this.apiURL);
    }

    addAlbum(album: Album): Observable<Album> {
      return this.http.post<Album>(this.apiURL, album, httpOptions);
    }

    deleteAlbum(album: Album): Observable<Album> {
      const url = `${this.apiURL}/${album.idAlbum}`;
      return this.http.delete<Album>(url, httpOptions);
    }

    getAlbum(id: number): Observable<Album> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Album>(url);
    }

    updateAlbum (album : Album): Observable<Album> {
      return this.http.put<Album>(this.apiURL, album, httpOptions);
    }
    
  }
