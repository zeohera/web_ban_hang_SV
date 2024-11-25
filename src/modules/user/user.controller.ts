import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/enums';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  //@ApiBearerAuth()
  //@UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLES.Admin)
  findOneUser(@Param('id') id: number) {
    return this.userService.findOneUserById(id);
  }

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
