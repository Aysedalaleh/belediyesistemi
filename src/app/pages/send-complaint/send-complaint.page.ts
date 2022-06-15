import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-complaint',
  templateUrl: './send-complaint.page.html',
  styleUrls: ['./send-complaint.page.scss'],
})
export class SendComplaintPage implements OnInit {

  complaintTypes = [
    {
      id: 1,
      name: 'water_leak',
      icon: 'drop.svg'
    },
    {
      id: 2,
      name: 'holes_and_bumps',
      icon: 'digger.svg'
    },
    {
      id: 3,
      name: 'garbage_accumulation',
      icon: 'garbage.svg'
    },
    {
      id: 3,
      name: 'sewage_problems',
      icon: 'sewage.svg'
    },

  ];

  constructor() { }

  ngOnInit() {

  }

}
