import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  // constructor(private readonly userService: UserService) {}
  async validateUser(token: string): Promise<any> {
    return [];
  }
}
