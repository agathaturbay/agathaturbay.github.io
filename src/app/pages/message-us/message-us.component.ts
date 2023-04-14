import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../@shared/http/http.service';
import { FormControl, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.component.html',
  styleUrls: ['./message-us.component.scss'],
})
export class MessageUsComponent implements OnInit {
  loading = false;
  buttonText = 'Enviar';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);

  constructor(public http: HttpService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'Formulário de contato',
      content: 'Entre em contato com a Senografia através do formulário!',
    });
  }

  register() {
    this.loading = true;
    this.buttonText = 'Enviando...';
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      message: this.messageFormControl.value,
    };

    this.http.sendEmail('http://localhost:3000/sendmail', user).subscribe(
      (data) => {
        let res: any = data;
      },
      (err) => {
        console.log(err);
        this.loading = false;
        this.buttonText = 'Enviar';
      },
      () => {
        this.loading = false;
        this.buttonText = 'Enviar';
      }
    );
  }
}
