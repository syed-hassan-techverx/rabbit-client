import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CATS_SERVICE') private readonly catsClient: ClientProxy,
    @Inject('DOGS_SERVICE') private readonly dogsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getBye(): string {
    return 'Bye Bye!';
  }

  sendCatMessage() {
    this.catsClient.send('notifications', 'This is the CAT message I am sending.')
    .subscribe((resp) => {
      console.log("This is the cat response", resp)
    });
  }

  sendDogMessage() {
    this.dogsClient.send('notifications', 'This is the DOG message I am sending.')
    .subscribe((resp) => {
      console.log("This is the dog response", resp)
    });
  }
}
