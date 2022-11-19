import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  newAlbum = new Album();

  addAlbum() {
    this.albumService.addAlbum(this.newAlbum).subscribe(data => {
      console.log(data);
    });
  }

  constructor(private albumService: AlbumService, private router : Router) {}

  ngOnInit(): void {
  }

}
