import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(user: IUser): Promise<IUser> {
    try {
      return this.usersRepository.create(user);
    } catch (error) {
      throw new Error('Internal error on UserService');
    }
  }
  async find(id: number): Promise<IUser | false> {
    try {
      const user: User = await this.usersRepository.findOne({
        where: {
          id,
        },
      });
      return user ?? false;
    } catch (error) {
      throw new Error('Internal error on UserService');
    }
  }
  async findAll(): Promise<IUser[]> {
    try {
      return this.usersRepository.find();
    } catch (error) {
      throw new Error('Internal error on UserService');
    }
  }
}
