import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getById(@Param() userId: number): Promise<IUser | false> {
    return this.userService.find(userId);
  }

  @Post()
  async create(@Req() request: IUser): Promise<IUser> {
    return this.userService.create(request);
  }
}
