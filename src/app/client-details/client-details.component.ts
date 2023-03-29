import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Client } from 'src/entities/clientSchema';
import { ClientService } from '../client-service.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnDestroy {


  ClientForm: FormGroup;
  token?: Subscription;

  constructor(private clientService: ClientService, private formBuilder: FormBuilder) {

    this.ClientForm = this.formBuilder.group<Client>(new Client());
     this.token = this.clientService.selectedClient.subscribe((data) => {
      this.selectedClient = data;
      this.ClientForm.setValue(this.selectedClient);
      console.log("Client activated");
    })
  }

  ngOnDestroy(): void {
    if(this.token) this.token.unsubscribe();

  }

  selectedClient?: Client;

  onSubmit(): void {

  }


}
