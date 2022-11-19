import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Album[] = [];

  constructor(private albumService: AlbumService, private router : Router) {}

  deleteAlbum(a : Album) {
    let conf = confirm("Are you sure you want to delete this album?");
    if (conf) {
      this.albumService.deleteAlbum(a).subscribe(data => {
        console.log(data);
      });
      this.albums.forEach((cur, index) => {
        if(a.idAlbum === cur.idAlbum) {
          this.albums.splice(index,1);
        }
      });
    }
  }

  updateAlbum() {
    console.log("Update Album");
  }

  ngOnInit(): void {
    this.albumService.albumList().subscribe(data => {
      this.albums = data;
    });
  }

}
