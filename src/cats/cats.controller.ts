import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
  UseInterceptors,
  UseFilters,
  ForbiddenException,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { LoggingInterceptor } from '../core/interceptors/logging.interceptor';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

// @UseFilters(new HttpExceptionFilter())
// @UseInterceptors(LoggingInterceptor)
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // @Roles('admin') // @TODO
  // @SetMetadata('roles', ['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new ForbiddenException();
    return this.catsService.findAll();
  }

  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   return this.catsService.create(createCatDto);
  // }

  // @Get()
  // findAll() {
  //   return this.catsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
