import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from 'src/entities/clientSchema';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  Clients: Client[];

  constructor() {
    this.Clients = [
      {
        client:  0,
        name: "Fred",
        street: "Brockton Drive",
        address1: null,
        address2: null,
        city: "SomewhereVille",
        zipcode: "1234"
        },
        {
          client:  1,
          name: "Wilma",
          street: "Somerset Drive",
          address1: null,
          address2: null,
          city: "Elsewhere",
          zipcode: "0987"
          },
    ]
   }

  setCurrentClient(id: number) {
    var client = this.Clients[id];
    console.log(client);
    this.selectedClient.next(client);

  }

  readonly selectedClient: Subject<Client> = new Subject<Client>()

}
