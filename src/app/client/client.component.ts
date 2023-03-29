import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Client } from 'src/entities/clientSchema';
import { ClientService } from '../client-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) {
    console.log("order component activated");

      route.paramMap.subscribe((params: ParamMap) => {
        const cid = params.get("id");
        if (cid)
          clientService.setCurrentClient(Number.parseInt(cid));
        else
          this.selectedClient = undefined;
      })
     clientService.selectedClient.subscribe((data) => this.selectedClient = data)

  }

  selectedClient?: Client;

  ngOnInit(): void {
  }
}
