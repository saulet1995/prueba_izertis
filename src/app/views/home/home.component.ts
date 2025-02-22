import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { CommonModule } from '@angular/common';
import { Movies } from '../../models/response.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public constructor(public service: RequestService) {

  }

  movies: Movies[] = [];
  pelicula_actual: number = 0;
  total_pages: number = 0;
  page: number = 1;
  search: string = "";

  //Métodos para obtener las películas
  public getMovies() {
    this.service.getResponse(this.search, this.page).subscribe(response => {
      this.movies = response;
    })
  }

  //Métodos para obtener el total de páginas de la búsqueda
  public getPages() {
    this.service.getPages(this.search, this.page).subscribe(response => {
      this.total_pages = response;
    })
  }

  public ngOnInit(): void {

  }

  //Método para cambiar a la película seleccionada y así poder obtener los datos dinámicamente
  public openDetails(posicion: number) {
    this.pelicula_actual = posicion;
  }

  //Método para buscar
  public searchMovie() {
    this.page = 1;
    this.getPages();
    this.getMovies();

  }

  //Al presionar en el botón de página siguiente
  public nextPage() {
    if (this.page == this.total_pages) {
      this.page = 1;
    } else {
      this.page++;
    }
    this.getMovies();
  }

  //Al presionar en el botón de página anterior
  public previousPage() {
    if (this.page == 1) {
      this.page = this.total_pages;
    } else {
      this.page--;
    }
    this.getMovies();
  }

}