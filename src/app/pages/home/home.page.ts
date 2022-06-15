import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    initialSlide: 0,
    autoPlay: true,
    speed: 400,
    loop: true
  };
  public slides = [
    {
      id: 1,
      img: 'https://3.bp.blogspot.com/-zohxDCwUohQ/Vh4SvFM6uhI/AAAAAAAAJUY/qpMIcD-Uskk/s1600/Facebook_kapak_bayrak_02_tam35.blogspot.com.png'
    },
    {
      id: 2,
      img: 'https://scontent.fada1-14.fna.fbcdn.net/v/t31.18172-8/10661893_826266100728325_7145188302288860995_o.png?stp=dst-png_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&_nc_ohc=xkdqmJzT-ZYAX84lIAb&_nc_ht=scontent.fada1-14.fna&oh=00_AT8IvRWlNECq0xtz_-z5YcHf2glQz5r6YU385Y1ZSMgYbA&oe=62C8A3D2'
    }
  ];
  economic_domains = [
    {
      name: 'commerce',
      icon: 'agreement.svg'
    },
    {
      name: 'management_public_services',
      icon: 'value.svg'
    },
    {
      name: 'training_education',
      icon: 'education.svg'
    },
    {
      name: 'tourism_services',
      icon: 'around.svg'
    },
    {
      name: 'health_services',
      icon: 'care.svg'
    },
    {
      name: 'banking_services',
      icon: 'coins.svg'
    }
  ];
  constructor(
    public globalsService: GlobalsService
  ) { }

  ngOnInit() {
  }

}
