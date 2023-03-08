import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entity/category.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, map, Observable, switchMap } from 'rxjs';
import { CategoryDto } from './dto/category.dto';
import { SortOrderByEnum } from '../enum/sort-order-by.enum';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  createCategory(dto: CategoryDto): Observable<CategoryEntity> {
    return from(this.categoryRepository.save(dto));
  }

  findCategories(
    take: number,
    skip: number,
    sortedField: string,
    orderBy: SortOrderByEnum,
  ): Observable<CategoryEntity[]> {
    return from(
      this.categoryRepository
        .createQueryBuilder('categories')
        .orderBy(`categories.${sortedField}`, `${orderBy}`)
        .take(take)
        .skip(skip)
        .getMany(),
    );
  }

  findCategoryById(id: number): Observable<CategoryEntity> {
    return from(
      this.categoryRepository.findOne({
        where: [{ id }],
      }),
    ).pipe(
      map((category: CategoryEntity) => {
        if (!category) {
          throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
        }
        return category;
      }),
    );
  }

  updateCategory(id: number, dto: CategoryDto): Observable<UpdateResult> {
    return from(this.findCategoryById(id)).pipe(
      switchMap((category: CategoryEntity) => {
        return this.categoryRepository.update(category.id, dto);
      }),
    );
  }

  removeCategory(id: number): Observable<DeleteResult> {
    return from(this.findCategoryById(id)).pipe(
      switchMap((category: CategoryEntity) => {
        return this.categoryRepository.delete(category.id);
      }),
    );
  }
}
