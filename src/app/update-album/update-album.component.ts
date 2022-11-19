import { Component, OnInit } from '@angular/core';

import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {

  currentAlbum = new Album();

  constructor( private albumService : AlbumService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.albumService.getAlbum(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.currentAlbum = data;
    });
  }

  updateAlbum() {
    this.albumService.updateAlbum(this.currentAlbum).subscribe(data => {
      console.log(data);
    });
  }

}
